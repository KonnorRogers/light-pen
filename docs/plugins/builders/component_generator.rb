class Builders::ComponentGenerator < SiteBuilder
  def build
    generator do
      custom_elements_manifest_path = File.read(File.expand_path("../../../custom-elements.json", __dir__))
      manifest = JSON.parse(custom_elements_manifest_path)

      elements = {}

      manifest["modules"].each do |node|
        node["declarations"].each do |declaration|
          tag_name = declaration["tagName"]

          next if tag_name.nil?

          elements[tag_name] = declaration
        end
      end

      resources = site.collections.documentation.resources

      resources.each do |resource|
        component_name = File.basename(resource.relative_path.basename, ".md").to_s

        metadata = elements[component_name]
        next if metadata.nil?

        slots = metadata["slots"]
        attributes = metadata["attributes"]
        members = metadata["members"]

        resource.content += slots_string(slots).html_safe
      end
    end
  end

  def slots_string(slots)
    return "" if slots.nil?

    tbody = slots.map do |slot|
      <<~HTML
        <tr>
          <td>
            <code>#{slot["name"]}</code>
          </td>
          <td>
            #{slot["description"]}
          </td>
        </tr>
      HTML
    end.join("\n")


    <<~HTML
      ## Slots

      <div class="table-container">
        <table>
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
