module CustomElementsSchema
  # @return [Array<JavaScriptExport, CustomElementExport>]
  EXPORT = [JavaScriptExport, CustomElementExport].freeze

  # @return [Hash{"public", "private", "protected" => "public", "private", "protected"}]
  PRIVACY = {
    public: 'public',
    private: 'private',
    protected: 'protected',
  }.freeze

  # @return [Array<ClassDeclaration, FunctionDeclaration, MixinDeclaration, VariableDeclaration, CustomElementDeclaration, CustomElementMixinDeclaration>]
  #
  DECLARATION = [
    ClassDeclaration,
    FunctionDeclaration,
    MixinDeclaration,
    VariableDeclaration,
    CustomElementDeclaration,
    CustomElementMixinDeclaration,
  ].freeze

  # Top level interface that users will interact with when reading custom elements JSON.
  class Package
    attr_accessor :schemaVersion, :deprecated, :readme, :modules

    # @param schemaVersion [String] - Version of the schema.
    # @param readme [String, nil] - The Markdown to use for the main readme of this package.
    # @param modules [Array<JavaScriptModule>] - An array of the modules this package contains.
    # @param deprecated [Array<String, nil, Boolean>] - If nil or false, not deprecated.
    #   If true, deprecated. If it has a string, it should be the reason the package was deprecated.
    #
    # @example
    #   CustomElementsSchema::Package.new(**JSON.parse("custom-elements.json"))
    #
    def initialize(schemaVersion:, readme: nil, modules: [], deprecated: nil)
      @schemaVersion = schemaVersion
      @readme = readme
      @deprecated = deprecated
      @modules = modules
    end
  end

  # The error to raise when the Node "kind" does not match the static node type.
  class MismatchedNodeTypeError < StandardError
    def initialize(node_kind, node_kind_compare)
      msg = "Expected to find a '#{node_kind}' but got '#{node_kind_compare}'"
      super(msg)
    end
  end

  # Basic top level node. This is really an abstract node.
  class BasicNode
    def self.kind; "basic-node"; end

    def initialize(kind:)
      raise MismatchedNodeTypeError.new(self.class.kind, kind) if kind != self.class.kind
    end
  end

  # A JavaScript module!
  class JavaScriptModule < BasicNode
    def self.kind; "javascript-module"; end

    attr_accessor :kind,
                  :path,
                  :summary,
                  :declarations,
                  :exports,
                  :deprecated

    # @param path [String] -
    #   Path to the javascript file needed to be imported.
    #   (not the path for example to a typescript file.)
    #
    # @param summary [String, nil] - A markdown summary suitable for display in a listing.
    #
    # @param declarations [nil, Array<Declaration>] -
    #   The declarations of a module.
    #   For documentation purposes, all declarations that are reachable from
    #   exports should be described here. Ie, functions and objects that may be
    #   properties of exported objects, or passed as arguments to functions.
    #
    # @param exports [nil, Array<Export>] -
    #   The exports of a module. This includes JavaScript exports and
    #   custom element definitions.
    #
    # @param deprecated [Array<String>, nil, Boolean] -
    #   Whether the module is deprecated.
    #   If the value is a string, it's the reason for the deprecation.
    #
    # @param kind ["javascript-module"] - The type of node
    def initialize(path:, kind:, summary: nil, declarations: nil, exports: nil, deprecated: nil)
      super(kind: kind)
      @kind = kind
      @path = path
      @summary = summary
      @declarations = declarations
      @exports = exports
      @deprecated = deprecated
    end
  end

  # A JavaScript export!
  class JavaScriptExport
    def self.kind; "js"; end

    # @param name [String] -
    #   The name of the exported symbol.
    #
    #   JavaScript has a number of ways to export objects which determine the
    #   correct name to use.
    #
    #   - Default exports must use the name "default".
    #   - Named exports use the name that is exported. If the export is renamed
    #     with the "as" clause, use the exported name.
    #   - Aggregating exports (`* from`) should use the name `*`
    # @param declaration [Reference] -
    #   A reference to the exported declaration.
    #
    #   In the case of aggregating exports, the reference's `module` field must be
    #   defined and the `name` field must be `"*"`.
    #
    # @param deprecated [nil, boolean, string] -
    #   Whether the export is deprecated. For example, the name of the export was changed.
    #   If the value is a string, it's the reason for the deprecation.
    #
    # @param kind ["js"] - The type of node
    def initialize(name:, kind:, declaration:, deprecated: nil)
      super(kind: kind)
      @name = name
      @declaration = declaration
      @deprecated = deprecated
      @kind = kind
    end
  end

  #
  # A global custom element defintion, ie the result of a
  # `customElements.define()` call.
  #
  # This is represented as an export because a definition makes the element
  # available outside of the module it's defined it.
  #
  class CustomElementExport
    def self.kind; "custom-element-definition"; end

    # @param name [String] - The tag name of the custom element
    # @param deprecated [boolean, string, nil]
    #  Whether the custom-element export is deprecated.
    #  For example, a future version will not register the custom element in this file.
    #  If the value is a string, it's the reason for the deprecation.
    #
    # @param declaration [Reference]
    #   A reference to the class or other declaration that implements the
    #   custom element.
    #
    def initialize(kind:, name:, declaration:, deprecated: nil)
      super(kind: kind)
      @name = name
      @declaration = declaration
      @deprecated = deprecated
    end
  end

  # A reference to an export of a module.
  #
  # All references are required to be publically accessible, so the canonical
  # representation of a reference is the export it's available from.
  #
  # `package` should generally refer to an npm package name. If `package` is
  # undefined then the reference is local to this package. If `module` is
  # undefined the reference is local to the containing module.
  #
  # References to global symbols like `Array`, `HTMLElement`, or `Event` should
  # use a `package` name of `"global:"`.
  #
  class Reference
    attr_accessor :name, :package, :module

    # We use kwargs here because "module" is a reserved keyword.
    # @param kwargs [Hash<"name", "package", "module", String, nil>]
    def initialize(**kwargs)
      @name = kwargs[:name]
      @package = kwargs[:package]
      @module = kwargs[:module]
    end
  end

  # Gets passed an href to an absolute URL to the source.
  class SourceReference
    attr_accessor :href

    # @param href [String] - An absolute URL to the source (ie. a GitHub URL).
    def initialize(href:)
      @href = href
    end
  end

  # Documents an "attribute" on a custom element.
  class Attribute
    attr_accessor :name,
                  :summary,
                  :description,
                  :inheritedFrom,
                  :type,
                  :default,
                  :fieldName,
                  :deprecated

    # @param name [String] - The name of the attribute you place on the element.
    # @param summary [String, nil] - A markdown summary suitable for display in a listing.
    # @param description [String, nil] - A markdown description.
    # @param inheritedFrom [Reference, nil] - Reference to where it inherited its attribute
    # @param type [Type, nil] - The type that the attribute will be serialized/deserialized as.
    # @param default [String, nil] -
    #   The default value of the attribute, if any.
    #   As attributes are always strings, this is the actual value, not a human
    #   readable description.
    # @param fieldName [String, nil] - The name of the field this attribute is associated with, if any.
    # @param deprecated [nil, Boolean, String] -
    #   Whether the attribute is deprecated.
    #   If the value is a string, it's the reason for the deprecation.
    #
    def initialize(
      name:,
      summary: nil,
      description: nil,
      inheritedFrom: nil,
      type: nil,
      default: nil,
      fieldName: nil,
      deprecated: nil
    )
      @name = name
      @summary = summary
      @description = description
      @inheritedFrom = inheritedFrom
      @type = type
      @default = default
      @fieldName = fieldName
      @deprecated = deprecated
    end
  end

  # Documents events on a custom element
  class Event
    attr_accessor :name,
                  :type,
                  :summary,
                  :description,
                  :deprecated,

    # @param name [String]
    # @param summary [nil, String] - A markdown summary suitable for display in a listing.
    # @param description [nil, String] - A markdown description.
    # @param type [Type] - The type of the event object that's fired.
    # @param inheritedFrom [nil, Reference]
    # @param deprecated [nil, Boolean, String]
    #    Whether the event is deprecated.
    #    If the value is a string, it's the reason for the deprecation.
    def initialize(
      name:,
      type:,
      summary: nil,
      description: nil,
      deprecated: nil
    )
      @name = name
      @type = type
      @summary = summary
      @description = description
      @deprecated = deprecated
    end
  end

  # Documents slots for a custom element
  class Slot
    attr_accessor :name,
                  :summary,
                  :description,
                  :deprecated

    # @param name [String] - The slot name, or the empty string for an unnamed slot.
    # @param summary [String, nil] - A markdown summary suitable for display in a listing.
    # @param description [String, nil] - A markdown description.
    # @param deprecated [nil, boolean, string] -
    #   Whether the slot is deprecated.
    #   If the value is a string, it's the reason for the deprecation.
    def initialize(
      name:,
      summary: nil,
      description: nil,
      deprecated: nil
    )
      @name = name
      @summary = summary
      @description = description
      @deprecated = deprecated
    end
  end

#
# The description of a CSS Part
class CssPart
  attr_accessor :name,
                :summary,
                :description,
                :deprecated
  # @param name [String] - Name of the CSS part
  # @param summary [nil, String] - A markdown summary suitable for display in a listing.
  # @param description [nil, String] - A markdown description.
  # @param deprecated [nil, Boolean, String] -
  #   Whether the CSS shadow part is deprecated.
  #   If the value is a string, it's the reason for the deprecation.
  def initialize(
    name:,
    summary: nil,
    description: nil,
    deprecated: nil
  )
    @name = name
    @summary = summary
    @description = description
    @deprecated = deprecated
  end
end

# ::CustomElementsSchema::Parser.new

#
# /**
#  * A description of a custom element class.
#  *
#  * Custom elements are JavaScript classes, so this extends from
#  * `ClassDeclaration` and adds custom-element-specific features like
#  * attributes, events, and slots.
#  *
#  * Note that `tagName` in this interface is optional. Tag names are not
#  * neccessarily part of a custom element class, but belong to the definition
#  * (often called the "registration") or the `customElements.define()` call.
#  *
#  * Because classes and tag names can only be registered once, there's a
#  * one-to-one relationship between classes and tag names. For ease of use,
#  * we allow the tag name here.
#  *
#  * Some packages define and register custom elements in separate modules. In
#  * these cases one `Module` should contain the `CustomElement` without a
#  * tagName, and another `Module` should contain the
#  * `CustomElementExport`.
#  */
# // Note: this needs to be an interface to be included in the generated JSON
# // Schema output.
# export interface CustomElementDeclaration
#   extends ClassDeclaration,
#     CustomElement {}
#
# /**
#  * The additional fields that a custom element adds to classes and mixins.
#  */
# export interface CustomElement extends ClassLike {
#   /**
#    * An optional tag name that should be specified if this is a
#    * self-registering element.
#    *
#    * Self-registering elements must also include a CustomElementExport
#    * in the module's exports.
#    */
#   tagName?: string;
#
#   /**
#    * The attributes that this element is known to understand.
#    */
#   attributes?: Attribute[];
#
#   /**
#    * The events that this element fires.
#    */
#   events?: Event[];
#
#   /**
#    * The shadow dom content slots that this element accepts.
#    */
#   slots?: Slot[];
#
#   cssParts?: CssPart[];
#
#   cssProperties?: CssCustomProperty[];
#
#   demos?: Demo[];
#
#   /**
#    * Distinguishes a regular JavaScript class from a
#    * custom element class
#    */
#   customElement: true;
# }
#
# export interface CssCustomProperty {
#   /**
#    * The name of the property, including leading `--`.
#    */
#   name: string;
#
#   /**
#    * The expected syntax of the defined property. Defaults to "*".
#    *
#    * The syntax must be a valid CSS [syntax string](https://developer.mozilla.org/en-US/docs/Web/CSS/@property/syntax)
#    * as defined in the CSS Properties and Values API.
#    *
#    * Examples:
#    *
#    * "<color>": accepts a color
#    * "<length> | <percentage>": accepts lengths or percentages but not calc expressions with a combination of the two
#    * "small | medium | large": accepts one of these values set as custom idents.
#    * "*": any valid token
#    */
#   syntax?: string;
#
#   default?: string;
#
#   /**
#    * A markdown summary suitable for display in a listing.
#    */
#   summary?: string;
#
#   /**
#    * A markdown description.
#    */
#   description?: string;
#
#   /**
#    * Whether the CSS custom property is deprecated.
#    * If the value is a string, it's the reason for the deprecation.
#    */
#   deprecated?: boolean | string;
# }
#
# export interface Type {
#   /**
#    * The full string representation of the type, in whatever type syntax is
#    * used, such as JSDoc, Closure, or TypeScript.
#    */
#   text: string;
#
#   /**
#    * An array of references to the types in the type string.
#    *
#    * These references have optional indices into the type string so that tools
#    * can understand the references in the type string independently of the type
#    * system and syntax. For example, a documentation viewer could display the
#    * type `Array<FooElement | BarElement>` with cross-references to `FooElement`
#    * and `BarElement` without understanding arrays, generics, or union types.
#    */
#   references?: TypeReference[];
#
#   source?: SourceReference;
# }
#
# /**
#  * A reference that is associated with a type string and optionally a range
#  * within the string.
#  *
#  * Start and end must both be present or not present. If they're present, they
#  * are indices into the associated type string. If they are missing, the entire
#  * type string is the symbol referenced and the name should match the type
#  * string.
#  */
# export interface TypeReference extends Reference {
#   start?: number;
#   end?: number;
# }
#
# /**
#  * The common interface of classes and mixins.
#  */
# export interface ClassLike {
#   name: string;
#
#   /**
#    * A markdown summary suitable for display in a listing.
#    */
#   summary?: string;
#
#   /**
#    * A markdown description of the class.
#    */
#   description?: string;
#
#   /**
#    * The superclass of this class.
#    *
#    * If this class is defined with mixin applications, the prototype chain
#    * includes the mixin applications and the true superclass is computed
#    * from them.
#    */
#   superclass?: Reference;
#
#   /**
#    * Any class mixins applied in the extends clause of this class.
#    *
#    * If mixins are applied in the class definition, then the true superclass
#    * of this class is the result of applying mixins in order to the superclass.
#    *
#    * Mixins must be listed in order of their application to the superclass or
#    * previous mixin application. This means that the innermost mixin is listed
#    * first. This may read backwards from the common order in JavaScript, but
#    * matches the order of language used to describe mixin application, like
#    * "S with A, B".
#    *
#    * @example
#    *
#    * ```javascript
#    * class T extends B(A(S)) {}
#    * ```
#    *
#    * is described by:
#    * ```json
#    * {
#    *   "kind": "class",
#    *   "superclass": {
#    *     "name": "S"
#    *   },
#    *   "mixins": [
#    *     {
#    *       "name": "A"
#    *     },
#    *     {
#    *       "name": "B"
#    *     },
#    *   ]
#    * }
#    * ```
#    */
#   mixins?: Array<Reference>;
#   members?: Array<ClassMember>;
#
#   source?: SourceReference;
#
#   /**
#    * Whether the class or mixin is deprecated.
#    * If the value is a string, it's the reason for the deprecation.
#    */
#   deprecated?: boolean | string;
# }
#
# export interface ClassDeclaration extends ClassLike {
#   kind: 'class';
# }
#
# export type ClassMember = ClassField | ClassMethod;
#
# /**
#  * The common interface of variables, class fields, and function
#  * parameters.
#  */
# export interface PropertyLike {
#   name: string;
#
#   /**
#    * A markdown summary suitable for display in a listing.
#    */
#   summary?: string;
#
#   /**
#    * A markdown description of the field.
#    */
#   description?: string;
#
#   type?: Type;
#
#   default?: string;
#
#   /**
#    * Whether the property is deprecated.
#    * If the value is a string, it's the reason for the deprecation.
#    */
#   deprecated?: boolean | string;
#
#   /**
#    * Whether the property is read-only.
#    */
#   readonly?: boolean;
# }
#
# export interface ClassField extends PropertyLike {
#   kind: 'field';
#   static?: boolean;
#   privacy?: Privacy;
#   inheritedFrom?: Reference;
#   source?: SourceReference;
# }
#
# /**
#  * Additional metadata for fields on custom elements.
#  */
# export interface CustomElementField extends ClassField {
#   /**
#    * The corresponding attribute name if there is one.
#    *
#    * If this property is defined, the attribute must be listed in the classes'
#    * `attributes` array.
#    */
#   attribute?: string;
#
#   /**
#    * If the property reflects to an attribute.
#    *
#    * If this is true, the `attribute` property must be defined.
#    */
#   reflects?: boolean;
# }
#
# export interface ClassMethod extends FunctionLike {
#   kind: 'method';
#   static?: boolean;
#   privacy?: Privacy;
#   inheritedFrom?: Reference;
#   source?: SourceReference;
# }
#
# /**
#  * A description of a class mixin.
#  *
#  * Mixins are functions which generate a new subclass of a given superclass.
#  * This interfaces describes the class and custom element features that
#  * are added by the mixin. As such, it extends the CustomElement interface and
#  * ClassLike interface.
#  *
#  * Since mixins are functions, it also extends the FunctionLike interface. This
#  * means a mixin is callable, and has parameters and a return type.
#  *
#  * The return type is often hard or impossible to accurately describe in type
#  * systems like TypeScript. It requires generics and an `extends` operator
#  * that TypeScript lacks. Therefore it's recommended that the return type is
#  * left empty. The most common form of a mixin function takes a single
#  * argument, so consumers of this interface should assume that the return type
#  * is the single argument subclassed by this declaration.
#  *
#  * A mixin should not have a superclass. If a mixins composes other mixins,
#  * they should be listed in the `mixins` field.
#  *
#  * See [this article]{@link https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/}
#  * for more information on the classmixin pattern in JavaScript.
#  *
#  * @example
#  *
#  * This JavaScript mixin declaration:
#  * ```javascript
#  * const MyMixin = (base) => class extends base {
#  *   foo() { ... }
#  * }
#  * ```
#  *
#  * Is described by this JSON:
#  * ```json
#  * {
#  *   "kind": "mixin",
#  *   "name": "MyMixin",
#  *   "parameters": [
#  *     {
#  *       "name": "base",
#  *     }
#  *   ],
#  *   "members": [
#  *     {
#  *       "kind": "method",
#  *       "name": "foo",
#  *     }
#  *   ]
#  * }
#  * ```
#  */
# export interface MixinDeclaration extends ClassLike, FunctionLike {
#   kind: 'mixin';
# }
#
# /**
#  * A class mixin that also adds custom element related properties.
#  */
# // Note: this needs to be an interface to be included in the generated JSON
# // Schema output.
# export interface CustomElementMixinDeclaration
#   extends MixinDeclaration,
#     CustomElement {}
#
# export interface VariableDeclaration extends PropertyLike {
#   kind: 'variable';
#   source?: SourceReference;
# }
#
# export interface FunctionDeclaration extends FunctionLike {
#   kind: 'function';
#   source?: SourceReference;
# }
#
# export interface Parameter extends PropertyLike {
#   /**
#    * Whether the parameter is optional. Undefined implies non-optional.
#    */
#   optional?: boolean;
#   /**
#    * Whether the parameter is a rest parameter. Only the last parameter may be a rest parameter.
#    * Undefined implies single parameter.
#    */
#   rest?: boolean;
# }
#
# export interface FunctionLike {
#   name: string;
#
#   /**
#    * A markdown summary suitable for display in a listing.
#    */
#   summary?: string;
#
#   /**
#    * A markdown description.
#    */
#   description?: string;
#
#   /**
#    * Whether the function is deprecated.
#    * If the value is a string, it's the reason for the deprecation.
#    */
#   deprecated?: boolean | string;
#
#   parameters?: Parameter[];
#
#   return?: {
#     type?: Type;
#
#     /**
#      * A markdown summary suitable for display in a listing.
#      */
#     summary?: string;
#
#     /**
#      * A markdown description.
#      */
#     description?: string;
#   };
# }
#
#
# export interface Demo {
#   /**
#    * A markdown description of the demo.
#    */
#   description?: string;
#
#   /**
#    * Relative URL of the demo if it's published with the package. Absolute URL
#    * if it's hosted.
#    */
#   url: string;
#
#   source?: SourceReference;
# }
#
