require "cgi"
require "custom_elements_manifest_parser"

class Builders::ComponentGenerator < SiteBuilder
  # Convert a Markdown string into HTML output.
  #
  # @param input [String] the Markdown to convert, if no block is passed
  # @return [String]
  # @see {https://github.com/bridgetownrb/bridgetown/blob/1bf58ebdd514da7ac83623d1971062d0dafce00c/bridgetown-core/lib/bridgetown-core/helpers.rb#L43-L53}
  def markdownify(input = nil, &block)
    content = Bridgetown::Utils.reindent_for_markdown(
      block.nil? ? input.to_s : block.call.to_s
    )
    converter = site.find_converter_instance(Bridgetown::Converters::Markdown)
    converter.convert(content).strip.to_s.html_safe
  end

  def build
    # hook :resources, :post_init do
    #   root = File.expand_path("../../../", __dir__)
    #   `cd #{root} && npm run build`
    # end

    generator do
      custom_elements_manifest_path = File.read(File.expand_path("../../../custom-elements.json", __dir__))
      manifest = JSON.parse(custom_elements_manifest_path)

      parser = CustomElementsManifestParser.parse(manifest)
      elements = parser.find_all_tag_names

      resources = site.collections.documentation.resources

      resources.each do |resource|
        component_name = File.basename(resource.relative_path.basename, ".md").to_s

        metadata = elements[component_name]
        next if metadata.nil?

        resource.data.merge!({
          "summary" => metadata.summary,
          "description" => metadata.description
        })

        path = metadata.parent_module.path
        import_name = metadata.parent_module.exports.find { |hash| hash.name == "default" }.declaration.name

        tag_name = metadata.tagName

        slots = metadata.slots
        attributes = metadata.members.select { |member| member.attributes[:attribute] }
        events = metadata.events

        # Use functions instead of methods so we don't clobber built-in #methods method.
        functions = metadata.members.select { |member| member.kind == "method" }

        parts = metadata.cssParts

        resource.content += [
          "## API Reference\n\n".html_safe,
          import_tabs(path, import_name, tag_name).html_safe,
          slots_table(slots).html_safe,
          attributes_table(attributes).html_safe,
          events_table(events).html_safe,
          functions_table(functions).html_safe,
          parts_table(parts).html_safe
        ].join("\n\n")
      end
    end
  end

  def escape(html)
    CGI.escape_html(html || "")
  end

  def empty_property
    "<div style='text-align: center;'>-</div>"
  end

  def unchecked_property
    "<sl-icon name='x-lg' style='text-align: center; display: flex; margin: 0 auto; color: var(--sl-color-danger-600);'></sl-icon>"
  end

  def checked_property
    "<sl-icon name='check-lg' style='font-size: 1.25em; text-align: center; display: flex; margin: 0 auto; color: var(--sl-color-success-700);'></sl-icon>"
  end

  def import_tabs(path, import_name, tag_name)
    str = <<~MD
      ### Imports

      <sl-tab-group>
    MD

    package_name = Builders::Helpers.new.package_name

    path_without_ext = path.split(/\.js$/)[0]

    script = <<~MD
      ```html
      <!-- Auto registers as <#{tag_name}> -->
      <script type="module" src="https://cdn.jsdelivr.net/npm/#{package_name}/#{path_without_ext}-register.js"></script>
      ```
    MD

    cdn = <<~MD
      ```html
      <script type="module">
        // Auto registers as <#{tag_name}>
        import "https://cdn.jsdelivr.net/npm/#{package_name}/#{path_without_ext}-register.js"

        // Manual Register
        import #{import_name} from "https://cdn.jsdelivr.net/npm/#{package_name}/#{path}"
        #{import_name}.define()
        // => Registers as <#{tag_name}>
      </script>
      ```
    MD

    bundler = <<~MD
      ```js
      // Auto registers as <#{tag_name}>
      import "#{package_name}/#{path_without_ext}-register.js"

      // Manual Register
      import #{import_name} "#{package_name}/#{path}"
      #{import_name}.define()
      // => Registers as <#{tag_name}>
      ```
    MD

    path_types = {
      Script: script,
      CDN: cdn,
      Bundler: bundler,
    }

    str += path_types.map do |key, value|
      <<~HTML
        <sl-tab slot="nav" panel="#{key}">#{key}</sl-tab>
        <sl-tab-panel name="#{key}">
          #{markdownify(value)}
        </sl-tab-panel>
      HTML
    end.join("\n")

    str += "\n</sl-tab-group>"
    str
  end

  def slots_table(slots)
    return "" if slots.nil? || slots.empty?

    tbody = slots.map do |slot|
      <<~HTML
        <tr>
          <td>
            <code>#{slot.name}</code>
          </td>
          <td>
            #{slot.description.to_s.empty? ? empty_property : markdownify(slot.description)}
          </td>
        </tr>
      HTML
    end.join("\n")

    <<~HTML
      ### Slots

      <div class="table-container">
        <table class="table--component">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            #{tbody}
          </tbody>
        </table>
      </div>
    HTML
  end

  def attributes_table(members)
    return "" if members.nil? || members.empty?

    tbody = members.map do |member|
      type_text = ""

      type_text = member.type.text if member.type && member.type.text

      <<~HTML
        <tr>
          <td>
            <% if "#{member.attribute}" != "#{member.name}" %>
              <small>[Attribute]</small>
              <br>
              <code>#{member.attribute}</code>
              <br><br>
              <small>[Property]</small>
              <br>
              <code>#{member.name}</code>
            <% elsif not("#{member.attribute}".blank?) %>
              <small>[Attribute + Property]</small>
              <br>
              <code>#{member.attribute}</code>
            <% else %>
              <small>[Property Only]</small>
              <br>
              <code>#{member.name}</code>
            <% end %>
          </td>
          <td>
            #{member.description.to_s.empty? ? empty_property : markdownify(member.description)}
          </td>
          <td>
            #{member.reflects ? checked_property : unchecked_property}
          </td>
          <td>
            #{type_text.blank? ? empty_property : "<code>#{escape(type_text)}</code>"}
          </td>
          <td>
            #{member.default.nil? ? empty_property : "<code>#{escape(member.default)}</code>"}
          </td>
        </tr>
      HTML
    end.join("\n")

    <<~HTML
      ### Attributes

      <div class="table-container">
        <table class="table--component">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Reflects</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            #{tbody}
          </tbody>
        </table>
      </div>
    HTML
  end

  def events_table(events)
    return "" if events.nil? || events.empty?

    tbody = events.map do |event|
      <<~HTML
        <tr>
          <td>
            <code>#{event.name}</code>
          </td>
          <td>
            #{event.description.to_s.empty? ? empty_property : markdownify(event.description.to_s)}
          </td>
        </tr>
      HTML
    end.join("\n")

    <<~HTML
      ### Events

      <div class="table-container">
        <table class="table--component">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            #{tbody}
          </tbody>
        </table>
      </div>
    HTML
  end

  def parameter_string(parameter)
    rest = parameter.rest ? "..." : ""
    # optional = parameter.optional ? "?" : ""
    type_text = ""
    type_text = ": " + parameter.type.text if parameter.type && parameter.type.text

    rest + parameter.name + type_text
  end

  def functions_table(functions)
    return "" if functions.nil? || functions.empty?

    tbody = functions.map do |function|
      parameters = empty_property
      if not(function.parameters.to_s.empty?)
        parameters = "<code>" + escape(function.parameters.map { |parameter| parameter_string(parameter) }.join(", ")) + "</code>"
      end

      <<~HTML
        <tr>
          <td>
            <code>#{function.name}()</code>
          </td>
          <td>
            #{function.description.to_s.empty? ? empty_property : markdownify(function.description.to_s)}
          </td>
          <td>
            #{parameters}
          </td>
        </tr>
      HTML
    end.join("\n")

    <<~HTML
      ### Functions

      <div class="table-container">
        <table class="table--component">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Parameters</th>
            </tr>
          </thead>
          <tbody>
            #{tbody}
          </tbody>
        </table>
      </div>
    HTML
  end

  def parts_table(parts)
    return "" if parts.nil? || parts.empty?

    tbody = parts.map do |part|
      <<~HTML
        <tr>
          <td>
            <code>#{part.name}</code>
          </td>
          <td>
            #{part.description.to_s.empty? ? empty_property : markdownify(part.description)}
          </td>
        </tr>
      HTML
    end.join("\n")

    <<~HTML
      ### Parts

      <div class="table-container">
        <table class="table--component">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            #{tbody}
          </tbody>
        </table>
      </div>
    HTML
  end
end
