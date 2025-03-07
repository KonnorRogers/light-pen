import {
  __commonJS,
  __publicField,
  __toESM
} from "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/lunr@2.3.9/node_modules/lunr/lunr.js
var require_lunr = __commonJS({
  "node_modules/.pnpm/lunr@2.3.9/node_modules/lunr/lunr.js"(exports, module) {
    (function() {
      var lunr2 = function(config) {
        var builder = new lunr2.Builder();
        builder.pipeline.add(
          lunr2.trimmer,
          lunr2.stopWordFilter,
          lunr2.stemmer
        );
        builder.searchPipeline.add(
          lunr2.stemmer
        );
        config.call(builder, builder);
        return builder.build();
      };
      lunr2.version = "2.3.9";
      lunr2.utils = {};
      lunr2.utils.warn = /* @__PURE__ */ function(global) {
        return function(message) {
          if (global.console && console.warn) {
            console.warn(message);
          }
        };
      }(this);
      lunr2.utils.asString = function(obj) {
        if (obj === void 0 || obj === null) {
          return "";
        } else {
          return obj.toString();
        }
      };
      lunr2.utils.clone = function(obj) {
        if (obj === null || obj === void 0) {
          return obj;
        }
        var clone = /* @__PURE__ */ Object.create(null), keys = Object.keys(obj);
        for (var i5 = 0; i5 < keys.length; i5++) {
          var key = keys[i5], val = obj[key];
          if (Array.isArray(val)) {
            clone[key] = val.slice();
            continue;
          }
          if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
            clone[key] = val;
            continue;
          }
          throw new TypeError("clone is not deep and does not support nested objects");
        }
        return clone;
      };
      lunr2.FieldRef = function(docRef, fieldName, stringValue) {
        this.docRef = docRef;
        this.fieldName = fieldName;
        this._stringValue = stringValue;
      };
      lunr2.FieldRef.joiner = "/";
      lunr2.FieldRef.fromString = function(s9) {
        var n12 = s9.indexOf(lunr2.FieldRef.joiner);
        if (n12 === -1) {
          throw "malformed field ref string";
        }
        var fieldRef = s9.slice(0, n12), docRef = s9.slice(n12 + 1);
        return new lunr2.FieldRef(docRef, fieldRef, s9);
      };
      lunr2.FieldRef.prototype.toString = function() {
        if (this._stringValue == void 0) {
          this._stringValue = this.fieldName + lunr2.FieldRef.joiner + this.docRef;
        }
        return this._stringValue;
      };
      lunr2.Set = function(elements) {
        this.elements = /* @__PURE__ */ Object.create(null);
        if (elements) {
          this.length = elements.length;
          for (var i5 = 0; i5 < this.length; i5++) {
            this.elements[elements[i5]] = true;
          }
        } else {
          this.length = 0;
        }
      };
      lunr2.Set.complete = {
        intersect: function(other) {
          return other;
        },
        union: function() {
          return this;
        },
        contains: function() {
          return true;
        }
      };
      lunr2.Set.empty = {
        intersect: function() {
          return this;
        },
        union: function(other) {
          return other;
        },
        contains: function() {
          return false;
        }
      };
      lunr2.Set.prototype.contains = function(object) {
        return !!this.elements[object];
      };
      lunr2.Set.prototype.intersect = function(other) {
        var a5, b2, elements, intersection = [];
        if (other === lunr2.Set.complete) {
          return this;
        }
        if (other === lunr2.Set.empty) {
          return other;
        }
        if (this.length < other.length) {
          a5 = this;
          b2 = other;
        } else {
          a5 = other;
          b2 = this;
        }
        elements = Object.keys(a5.elements);
        for (var i5 = 0; i5 < elements.length; i5++) {
          var element = elements[i5];
          if (element in b2.elements) {
            intersection.push(element);
          }
        }
        return new lunr2.Set(intersection);
      };
      lunr2.Set.prototype.union = function(other) {
        if (other === lunr2.Set.complete) {
          return lunr2.Set.complete;
        }
        if (other === lunr2.Set.empty) {
          return this;
        }
        return new lunr2.Set(Object.keys(this.elements).concat(Object.keys(other.elements)));
      };
      lunr2.idf = function(posting, documentCount) {
        var documentsWithTerm = 0;
        for (var fieldName in posting) {
          if (fieldName == "_index") continue;
          documentsWithTerm += Object.keys(posting[fieldName]).length;
        }
        var x2 = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5);
        return Math.log(1 + Math.abs(x2));
      };
      lunr2.Token = function(str, metadata) {
        this.str = str || "";
        this.metadata = metadata || {};
      };
      lunr2.Token.prototype.toString = function() {
        return this.str;
      };
      lunr2.Token.prototype.update = function(fn) {
        this.str = fn(this.str, this.metadata);
        return this;
      };
      lunr2.Token.prototype.clone = function(fn) {
        fn = fn || function(s9) {
          return s9;
        };
        return new lunr2.Token(fn(this.str, this.metadata), this.metadata);
      };
      lunr2.tokenizer = function(obj, metadata) {
        if (obj == null || obj == void 0) {
          return [];
        }
        if (Array.isArray(obj)) {
          return obj.map(function(t5) {
            return new lunr2.Token(
              lunr2.utils.asString(t5).toLowerCase(),
              lunr2.utils.clone(metadata)
            );
          });
        }
        var str = obj.toString().toLowerCase(), len = str.length, tokens = [];
        for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
          var char = str.charAt(sliceEnd), sliceLength = sliceEnd - sliceStart;
          if (char.match(lunr2.tokenizer.separator) || sliceEnd == len) {
            if (sliceLength > 0) {
              var tokenMetadata = lunr2.utils.clone(metadata) || {};
              tokenMetadata["position"] = [sliceStart, sliceLength];
              tokenMetadata["index"] = tokens.length;
              tokens.push(
                new lunr2.Token(
                  str.slice(sliceStart, sliceEnd),
                  tokenMetadata
                )
              );
            }
            sliceStart = sliceEnd + 1;
          }
        }
        return tokens;
      };
      lunr2.tokenizer.separator = /[\s\-]+/;
      lunr2.Pipeline = function() {
        this._stack = [];
      };
      lunr2.Pipeline.registeredFunctions = /* @__PURE__ */ Object.create(null);
      lunr2.Pipeline.registerFunction = function(fn, label) {
        if (label in this.registeredFunctions) {
          lunr2.utils.warn("Overwriting existing registered function: " + label);
        }
        fn.label = label;
        lunr2.Pipeline.registeredFunctions[fn.label] = fn;
      };
      lunr2.Pipeline.warnIfFunctionNotRegistered = function(fn) {
        var isRegistered = fn.label && fn.label in this.registeredFunctions;
        if (!isRegistered) {
          lunr2.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", fn);
        }
      };
      lunr2.Pipeline.load = function(serialised) {
        var pipeline = new lunr2.Pipeline();
        serialised.forEach(function(fnName) {
          var fn = lunr2.Pipeline.registeredFunctions[fnName];
          if (fn) {
            pipeline.add(fn);
          } else {
            throw new Error("Cannot load unregistered function: " + fnName);
          }
        });
        return pipeline;
      };
      lunr2.Pipeline.prototype.add = function() {
        var fns = Array.prototype.slice.call(arguments);
        fns.forEach(function(fn) {
          lunr2.Pipeline.warnIfFunctionNotRegistered(fn);
          this._stack.push(fn);
        }, this);
      };
      lunr2.Pipeline.prototype.after = function(existingFn, newFn) {
        lunr2.Pipeline.warnIfFunctionNotRegistered(newFn);
        var pos = this._stack.indexOf(existingFn);
        if (pos == -1) {
          throw new Error("Cannot find existingFn");
        }
        pos = pos + 1;
        this._stack.splice(pos, 0, newFn);
      };
      lunr2.Pipeline.prototype.before = function(existingFn, newFn) {
        lunr2.Pipeline.warnIfFunctionNotRegistered(newFn);
        var pos = this._stack.indexOf(existingFn);
        if (pos == -1) {
          throw new Error("Cannot find existingFn");
        }
        this._stack.splice(pos, 0, newFn);
      };
      lunr2.Pipeline.prototype.remove = function(fn) {
        var pos = this._stack.indexOf(fn);
        if (pos == -1) {
          return;
        }
        this._stack.splice(pos, 1);
      };
      lunr2.Pipeline.prototype.run = function(tokens) {
        var stackLength = this._stack.length;
        for (var i5 = 0; i5 < stackLength; i5++) {
          var fn = this._stack[i5];
          var memo = [];
          for (var j2 = 0; j2 < tokens.length; j2++) {
            var result = fn(tokens[j2], j2, tokens);
            if (result === null || result === void 0 || result === "") continue;
            if (Array.isArray(result)) {
              for (var k2 = 0; k2 < result.length; k2++) {
                memo.push(result[k2]);
              }
            } else {
              memo.push(result);
            }
          }
          tokens = memo;
        }
        return tokens;
      };
      lunr2.Pipeline.prototype.runString = function(str, metadata) {
        var token = new lunr2.Token(str, metadata);
        return this.run([token]).map(function(t5) {
          return t5.toString();
        });
      };
      lunr2.Pipeline.prototype.reset = function() {
        this._stack = [];
      };
      lunr2.Pipeline.prototype.toJSON = function() {
        return this._stack.map(function(fn) {
          lunr2.Pipeline.warnIfFunctionNotRegistered(fn);
          return fn.label;
        });
      };
      lunr2.Vector = function(elements) {
        this._magnitude = 0;
        this.elements = elements || [];
      };
      lunr2.Vector.prototype.positionForIndex = function(index) {
        if (this.elements.length == 0) {
          return 0;
        }
        var start = 0, end = this.elements.length / 2, sliceLength = end - start, pivotPoint = Math.floor(sliceLength / 2), pivotIndex = this.elements[pivotPoint * 2];
        while (sliceLength > 1) {
          if (pivotIndex < index) {
            start = pivotPoint;
          }
          if (pivotIndex > index) {
            end = pivotPoint;
          }
          if (pivotIndex == index) {
            break;
          }
          sliceLength = end - start;
          pivotPoint = start + Math.floor(sliceLength / 2);
          pivotIndex = this.elements[pivotPoint * 2];
        }
        if (pivotIndex == index) {
          return pivotPoint * 2;
        }
        if (pivotIndex > index) {
          return pivotPoint * 2;
        }
        if (pivotIndex < index) {
          return (pivotPoint + 1) * 2;
        }
      };
      lunr2.Vector.prototype.insert = function(insertIdx, val) {
        this.upsert(insertIdx, val, function() {
          throw "duplicate index";
        });
      };
      lunr2.Vector.prototype.upsert = function(insertIdx, val, fn) {
        this._magnitude = 0;
        var position = this.positionForIndex(insertIdx);
        if (this.elements[position] == insertIdx) {
          this.elements[position + 1] = fn(this.elements[position + 1], val);
        } else {
          this.elements.splice(position, 0, insertIdx, val);
        }
      };
      lunr2.Vector.prototype.magnitude = function() {
        if (this._magnitude) return this._magnitude;
        var sumOfSquares = 0, elementsLength = this.elements.length;
        for (var i5 = 1; i5 < elementsLength; i5 += 2) {
          var val = this.elements[i5];
          sumOfSquares += val * val;
        }
        return this._magnitude = Math.sqrt(sumOfSquares);
      };
      lunr2.Vector.prototype.dot = function(otherVector) {
        var dotProduct = 0, a5 = this.elements, b2 = otherVector.elements, aLen = a5.length, bLen = b2.length, aVal = 0, bVal = 0, i5 = 0, j2 = 0;
        while (i5 < aLen && j2 < bLen) {
          aVal = a5[i5], bVal = b2[j2];
          if (aVal < bVal) {
            i5 += 2;
          } else if (aVal > bVal) {
            j2 += 2;
          } else if (aVal == bVal) {
            dotProduct += a5[i5 + 1] * b2[j2 + 1];
            i5 += 2;
            j2 += 2;
          }
        }
        return dotProduct;
      };
      lunr2.Vector.prototype.similarity = function(otherVector) {
        return this.dot(otherVector) / this.magnitude() || 0;
      };
      lunr2.Vector.prototype.toArray = function() {
        var output = new Array(this.elements.length / 2);
        for (var i5 = 1, j2 = 0; i5 < this.elements.length; i5 += 2, j2++) {
          output[j2] = this.elements[i5];
        }
        return output;
      };
      lunr2.Vector.prototype.toJSON = function() {
        return this.elements;
      };
      lunr2.stemmer = function() {
        var step2list = {
          "ational": "ate",
          "tional": "tion",
          "enci": "ence",
          "anci": "ance",
          "izer": "ize",
          "bli": "ble",
          "alli": "al",
          "entli": "ent",
          "eli": "e",
          "ousli": "ous",
          "ization": "ize",
          "ation": "ate",
          "ator": "ate",
          "alism": "al",
          "iveness": "ive",
          "fulness": "ful",
          "ousness": "ous",
          "aliti": "al",
          "iviti": "ive",
          "biliti": "ble",
          "logi": "log"
        }, step3list = {
          "icate": "ic",
          "ative": "",
          "alize": "al",
          "iciti": "ic",
          "ical": "ic",
          "ful": "",
          "ness": ""
        }, c7 = "[^aeiou]", v2 = "[aeiouy]", C2 = c7 + "[^aeiouy]*", V2 = v2 + "[aeiou]*", mgr0 = "^(" + C2 + ")?" + V2 + C2, meq1 = "^(" + C2 + ")?" + V2 + C2 + "(" + V2 + ")?$", mgr1 = "^(" + C2 + ")?" + V2 + C2 + V2 + C2, s_v = "^(" + C2 + ")?" + v2;
        var re_mgr0 = new RegExp(mgr0);
        var re_mgr1 = new RegExp(mgr1);
        var re_meq1 = new RegExp(meq1);
        var re_s_v = new RegExp(s_v);
        var re_1a = /^(.+?)(ss|i)es$/;
        var re2_1a = /^(.+?)([^s])s$/;
        var re_1b = /^(.+?)eed$/;
        var re2_1b = /^(.+?)(ed|ing)$/;
        var re_1b_2 = /.$/;
        var re2_1b_2 = /(at|bl|iz)$/;
        var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
        var re4_1b_2 = new RegExp("^" + C2 + v2 + "[^aeiouwxy]$");
        var re_1c = /^(.+?[^aeiou])y$/;
        var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
        var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        var re2_4 = /^(.+?)(s|t)(ion)$/;
        var re_5 = /^(.+?)e$/;
        var re_5_1 = /ll$/;
        var re3_5 = new RegExp("^" + C2 + v2 + "[^aeiouwxy]$");
        var porterStemmer = function porterStemmer2(w2) {
          var stem, suffix, firstch, re, re2, re3, re4;
          if (w2.length < 3) {
            return w2;
          }
          firstch = w2.substr(0, 1);
          if (firstch == "y") {
            w2 = firstch.toUpperCase() + w2.substr(1);
          }
          re = re_1a;
          re2 = re2_1a;
          if (re.test(w2)) {
            w2 = w2.replace(re, "$1$2");
          } else if (re2.test(w2)) {
            w2 = w2.replace(re2, "$1$2");
          }
          re = re_1b;
          re2 = re2_1b;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            re = re_mgr0;
            if (re.test(fp[1])) {
              re = re_1b_2;
              w2 = w2.replace(re, "");
            }
          } else if (re2.test(w2)) {
            var fp = re2.exec(w2);
            stem = fp[1];
            re2 = re_s_v;
            if (re2.test(stem)) {
              w2 = stem;
              re2 = re2_1b_2;
              re3 = re3_1b_2;
              re4 = re4_1b_2;
              if (re2.test(w2)) {
                w2 = w2 + "e";
              } else if (re3.test(w2)) {
                re = re_1b_2;
                w2 = w2.replace(re, "");
              } else if (re4.test(w2)) {
                w2 = w2 + "e";
              }
            }
          }
          re = re_1c;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            stem = fp[1];
            w2 = stem + "i";
          }
          re = re_2;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            stem = fp[1];
            suffix = fp[2];
            re = re_mgr0;
            if (re.test(stem)) {
              w2 = stem + step2list[suffix];
            }
          }
          re = re_3;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            stem = fp[1];
            suffix = fp[2];
            re = re_mgr0;
            if (re.test(stem)) {
              w2 = stem + step3list[suffix];
            }
          }
          re = re_4;
          re2 = re2_4;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            stem = fp[1];
            re = re_mgr1;
            if (re.test(stem)) {
              w2 = stem;
            }
          } else if (re2.test(w2)) {
            var fp = re2.exec(w2);
            stem = fp[1] + fp[2];
            re2 = re_mgr1;
            if (re2.test(stem)) {
              w2 = stem;
            }
          }
          re = re_5;
          if (re.test(w2)) {
            var fp = re.exec(w2);
            stem = fp[1];
            re = re_mgr1;
            re2 = re_meq1;
            re3 = re3_5;
            if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
              w2 = stem;
            }
          }
          re = re_5_1;
          re2 = re_mgr1;
          if (re.test(w2) && re2.test(w2)) {
            re = re_1b_2;
            w2 = w2.replace(re, "");
          }
          if (firstch == "y") {
            w2 = firstch.toLowerCase() + w2.substr(1);
          }
          return w2;
        };
        return function(token) {
          return token.update(porterStemmer);
        };
      }();
      lunr2.Pipeline.registerFunction(lunr2.stemmer, "stemmer");
      lunr2.generateStopWordFilter = function(stopWords) {
        var words = stopWords.reduce(function(memo, stopWord) {
          memo[stopWord] = stopWord;
          return memo;
        }, {});
        return function(token) {
          if (token && words[token.toString()] !== token.toString()) return token;
        };
      };
      lunr2.stopWordFilter = lunr2.generateStopWordFilter([
        "a",
        "able",
        "about",
        "across",
        "after",
        "all",
        "almost",
        "also",
        "am",
        "among",
        "an",
        "and",
        "any",
        "are",
        "as",
        "at",
        "be",
        "because",
        "been",
        "but",
        "by",
        "can",
        "cannot",
        "could",
        "dear",
        "did",
        "do",
        "does",
        "either",
        "else",
        "ever",
        "every",
        "for",
        "from",
        "get",
        "got",
        "had",
        "has",
        "have",
        "he",
        "her",
        "hers",
        "him",
        "his",
        "how",
        "however",
        "i",
        "if",
        "in",
        "into",
        "is",
        "it",
        "its",
        "just",
        "least",
        "let",
        "like",
        "likely",
        "may",
        "me",
        "might",
        "most",
        "must",
        "my",
        "neither",
        "no",
        "nor",
        "not",
        "of",
        "off",
        "often",
        "on",
        "only",
        "or",
        "other",
        "our",
        "own",
        "rather",
        "said",
        "say",
        "says",
        "she",
        "should",
        "since",
        "so",
        "some",
        "than",
        "that",
        "the",
        "their",
        "them",
        "then",
        "there",
        "these",
        "they",
        "this",
        "tis",
        "to",
        "too",
        "twas",
        "us",
        "wants",
        "was",
        "we",
        "were",
        "what",
        "when",
        "where",
        "which",
        "while",
        "who",
        "whom",
        "why",
        "will",
        "with",
        "would",
        "yet",
        "you",
        "your"
      ]);
      lunr2.Pipeline.registerFunction(lunr2.stopWordFilter, "stopWordFilter");
      lunr2.trimmer = function(token) {
        return token.update(function(s9) {
          return s9.replace(/^\W+/, "").replace(/\W+$/, "");
        });
      };
      lunr2.Pipeline.registerFunction(lunr2.trimmer, "trimmer");
      lunr2.TokenSet = function() {
        this.final = false;
        this.edges = {};
        this.id = lunr2.TokenSet._nextId;
        lunr2.TokenSet._nextId += 1;
      };
      lunr2.TokenSet._nextId = 1;
      lunr2.TokenSet.fromArray = function(arr) {
        var builder = new lunr2.TokenSet.Builder();
        for (var i5 = 0, len = arr.length; i5 < len; i5++) {
          builder.insert(arr[i5]);
        }
        builder.finish();
        return builder.root;
      };
      lunr2.TokenSet.fromClause = function(clause) {
        if ("editDistance" in clause) {
          return lunr2.TokenSet.fromFuzzyString(clause.term, clause.editDistance);
        } else {
          return lunr2.TokenSet.fromString(clause.term);
        }
      };
      lunr2.TokenSet.fromFuzzyString = function(str, editDistance) {
        var root = new lunr2.TokenSet();
        var stack = [{
          node: root,
          editsRemaining: editDistance,
          str
        }];
        while (stack.length) {
          var frame = stack.pop();
          if (frame.str.length > 0) {
            var char = frame.str.charAt(0), noEditNode;
            if (char in frame.node.edges) {
              noEditNode = frame.node.edges[char];
            } else {
              noEditNode = new lunr2.TokenSet();
              frame.node.edges[char] = noEditNode;
            }
            if (frame.str.length == 1) {
              noEditNode.final = true;
            }
            stack.push({
              node: noEditNode,
              editsRemaining: frame.editsRemaining,
              str: frame.str.slice(1)
            });
          }
          if (frame.editsRemaining == 0) {
            continue;
          }
          if ("*" in frame.node.edges) {
            var insertionNode = frame.node.edges["*"];
          } else {
            var insertionNode = new lunr2.TokenSet();
            frame.node.edges["*"] = insertionNode;
          }
          if (frame.str.length == 0) {
            insertionNode.final = true;
          }
          stack.push({
            node: insertionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str
          });
          if (frame.str.length > 1) {
            stack.push({
              node: frame.node,
              editsRemaining: frame.editsRemaining - 1,
              str: frame.str.slice(1)
            });
          }
          if (frame.str.length == 1) {
            frame.node.final = true;
          }
          if (frame.str.length >= 1) {
            if ("*" in frame.node.edges) {
              var substitutionNode = frame.node.edges["*"];
            } else {
              var substitutionNode = new lunr2.TokenSet();
              frame.node.edges["*"] = substitutionNode;
            }
            if (frame.str.length == 1) {
              substitutionNode.final = true;
            }
            stack.push({
              node: substitutionNode,
              editsRemaining: frame.editsRemaining - 1,
              str: frame.str.slice(1)
            });
          }
          if (frame.str.length > 1) {
            var charA = frame.str.charAt(0), charB = frame.str.charAt(1), transposeNode;
            if (charB in frame.node.edges) {
              transposeNode = frame.node.edges[charB];
            } else {
              transposeNode = new lunr2.TokenSet();
              frame.node.edges[charB] = transposeNode;
            }
            if (frame.str.length == 1) {
              transposeNode.final = true;
            }
            stack.push({
              node: transposeNode,
              editsRemaining: frame.editsRemaining - 1,
              str: charA + frame.str.slice(2)
            });
          }
        }
        return root;
      };
      lunr2.TokenSet.fromString = function(str) {
        var node = new lunr2.TokenSet(), root = node;
        for (var i5 = 0, len = str.length; i5 < len; i5++) {
          var char = str[i5], final = i5 == len - 1;
          if (char == "*") {
            node.edges[char] = node;
            node.final = final;
          } else {
            var next = new lunr2.TokenSet();
            next.final = final;
            node.edges[char] = next;
            node = next;
          }
        }
        return root;
      };
      lunr2.TokenSet.prototype.toArray = function() {
        var words = [];
        var stack = [{
          prefix: "",
          node: this
        }];
        while (stack.length) {
          var frame = stack.pop(), edges = Object.keys(frame.node.edges), len = edges.length;
          if (frame.node.final) {
            frame.prefix.charAt(0);
            words.push(frame.prefix);
          }
          for (var i5 = 0; i5 < len; i5++) {
            var edge = edges[i5];
            stack.push({
              prefix: frame.prefix.concat(edge),
              node: frame.node.edges[edge]
            });
          }
        }
        return words;
      };
      lunr2.TokenSet.prototype.toString = function() {
        if (this._str) {
          return this._str;
        }
        var str = this.final ? "1" : "0", labels = Object.keys(this.edges).sort(), len = labels.length;
        for (var i5 = 0; i5 < len; i5++) {
          var label = labels[i5], node = this.edges[label];
          str = str + label + node.id;
        }
        return str;
      };
      lunr2.TokenSet.prototype.intersect = function(b2) {
        var output = new lunr2.TokenSet(), frame = void 0;
        var stack = [{
          qNode: b2,
          output,
          node: this
        }];
        while (stack.length) {
          frame = stack.pop();
          var qEdges = Object.keys(frame.qNode.edges), qLen = qEdges.length, nEdges = Object.keys(frame.node.edges), nLen = nEdges.length;
          for (var q = 0; q < qLen; q++) {
            var qEdge = qEdges[q];
            for (var n12 = 0; n12 < nLen; n12++) {
              var nEdge = nEdges[n12];
              if (nEdge == qEdge || qEdge == "*") {
                var node = frame.node.edges[nEdge], qNode = frame.qNode.edges[qEdge], final = node.final && qNode.final, next = void 0;
                if (nEdge in frame.output.edges) {
                  next = frame.output.edges[nEdge];
                  next.final = next.final || final;
                } else {
                  next = new lunr2.TokenSet();
                  next.final = final;
                  frame.output.edges[nEdge] = next;
                }
                stack.push({
                  qNode,
                  output: next,
                  node
                });
              }
            }
          }
        }
        return output;
      };
      lunr2.TokenSet.Builder = function() {
        this.previousWord = "";
        this.root = new lunr2.TokenSet();
        this.uncheckedNodes = [];
        this.minimizedNodes = {};
      };
      lunr2.TokenSet.Builder.prototype.insert = function(word) {
        var node, commonPrefix = 0;
        if (word < this.previousWord) {
          throw new Error("Out of order word insertion");
        }
        for (var i5 = 0; i5 < word.length && i5 < this.previousWord.length; i5++) {
          if (word[i5] != this.previousWord[i5]) break;
          commonPrefix++;
        }
        this.minimize(commonPrefix);
        if (this.uncheckedNodes.length == 0) {
          node = this.root;
        } else {
          node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
        }
        for (var i5 = commonPrefix; i5 < word.length; i5++) {
          var nextNode = new lunr2.TokenSet(), char = word[i5];
          node.edges[char] = nextNode;
          this.uncheckedNodes.push({
            parent: node,
            char,
            child: nextNode
          });
          node = nextNode;
        }
        node.final = true;
        this.previousWord = word;
      };
      lunr2.TokenSet.Builder.prototype.finish = function() {
        this.minimize(0);
      };
      lunr2.TokenSet.Builder.prototype.minimize = function(downTo) {
        for (var i5 = this.uncheckedNodes.length - 1; i5 >= downTo; i5--) {
          var node = this.uncheckedNodes[i5], childKey = node.child.toString();
          if (childKey in this.minimizedNodes) {
            node.parent.edges[node.char] = this.minimizedNodes[childKey];
          } else {
            node.child._str = childKey;
            this.minimizedNodes[childKey] = node.child;
          }
          this.uncheckedNodes.pop();
        }
      };
      lunr2.Index = function(attrs) {
        this.invertedIndex = attrs.invertedIndex;
        this.fieldVectors = attrs.fieldVectors;
        this.tokenSet = attrs.tokenSet;
        this.fields = attrs.fields;
        this.pipeline = attrs.pipeline;
      };
      lunr2.Index.prototype.search = function(queryString) {
        return this.query(function(query) {
          var parser = new lunr2.QueryParser(queryString, query);
          parser.parse();
        });
      };
      lunr2.Index.prototype.query = function(fn) {
        var query = new lunr2.Query(this.fields), matchingFields = /* @__PURE__ */ Object.create(null), queryVectors = /* @__PURE__ */ Object.create(null), termFieldCache = /* @__PURE__ */ Object.create(null), requiredMatches = /* @__PURE__ */ Object.create(null), prohibitedMatches = /* @__PURE__ */ Object.create(null);
        for (var i5 = 0; i5 < this.fields.length; i5++) {
          queryVectors[this.fields[i5]] = new lunr2.Vector();
        }
        fn.call(query, query);
        for (var i5 = 0; i5 < query.clauses.length; i5++) {
          var clause = query.clauses[i5], terms = null, clauseMatches = lunr2.Set.empty;
          if (clause.usePipeline) {
            terms = this.pipeline.runString(clause.term, {
              fields: clause.fields
            });
          } else {
            terms = [clause.term];
          }
          for (var m3 = 0; m3 < terms.length; m3++) {
            var term = terms[m3];
            clause.term = term;
            var termTokenSet = lunr2.TokenSet.fromClause(clause), expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();
            if (expandedTerms.length === 0 && clause.presence === lunr2.Query.presence.REQUIRED) {
              for (var k2 = 0; k2 < clause.fields.length; k2++) {
                var field = clause.fields[k2];
                requiredMatches[field] = lunr2.Set.empty;
              }
              break;
            }
            for (var j2 = 0; j2 < expandedTerms.length; j2++) {
              var expandedTerm = expandedTerms[j2], posting = this.invertedIndex[expandedTerm], termIndex = posting._index;
              for (var k2 = 0; k2 < clause.fields.length; k2++) {
                var field = clause.fields[k2], fieldPosting = posting[field], matchingDocumentRefs = Object.keys(fieldPosting), termField = expandedTerm + "/" + field, matchingDocumentsSet = new lunr2.Set(matchingDocumentRefs);
                if (clause.presence == lunr2.Query.presence.REQUIRED) {
                  clauseMatches = clauseMatches.union(matchingDocumentsSet);
                  if (requiredMatches[field] === void 0) {
                    requiredMatches[field] = lunr2.Set.complete;
                  }
                }
                if (clause.presence == lunr2.Query.presence.PROHIBITED) {
                  if (prohibitedMatches[field] === void 0) {
                    prohibitedMatches[field] = lunr2.Set.empty;
                  }
                  prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);
                  continue;
                }
                queryVectors[field].upsert(termIndex, clause.boost, function(a5, b2) {
                  return a5 + b2;
                });
                if (termFieldCache[termField]) {
                  continue;
                }
                for (var l10 = 0; l10 < matchingDocumentRefs.length; l10++) {
                  var matchingDocumentRef = matchingDocumentRefs[l10], matchingFieldRef = new lunr2.FieldRef(matchingDocumentRef, field), metadata = fieldPosting[matchingDocumentRef], fieldMatch;
                  if ((fieldMatch = matchingFields[matchingFieldRef]) === void 0) {
                    matchingFields[matchingFieldRef] = new lunr2.MatchData(expandedTerm, field, metadata);
                  } else {
                    fieldMatch.add(expandedTerm, field, metadata);
                  }
                }
                termFieldCache[termField] = true;
              }
            }
          }
          if (clause.presence === lunr2.Query.presence.REQUIRED) {
            for (var k2 = 0; k2 < clause.fields.length; k2++) {
              var field = clause.fields[k2];
              requiredMatches[field] = requiredMatches[field].intersect(clauseMatches);
            }
          }
        }
        var allRequiredMatches = lunr2.Set.complete, allProhibitedMatches = lunr2.Set.empty;
        for (var i5 = 0; i5 < this.fields.length; i5++) {
          var field = this.fields[i5];
          if (requiredMatches[field]) {
            allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field]);
          }
          if (prohibitedMatches[field]) {
            allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]);
          }
        }
        var matchingFieldRefs = Object.keys(matchingFields), results = [], matches = /* @__PURE__ */ Object.create(null);
        if (query.isNegated()) {
          matchingFieldRefs = Object.keys(this.fieldVectors);
          for (var i5 = 0; i5 < matchingFieldRefs.length; i5++) {
            var matchingFieldRef = matchingFieldRefs[i5];
            var fieldRef = lunr2.FieldRef.fromString(matchingFieldRef);
            matchingFields[matchingFieldRef] = new lunr2.MatchData();
          }
        }
        for (var i5 = 0; i5 < matchingFieldRefs.length; i5++) {
          var fieldRef = lunr2.FieldRef.fromString(matchingFieldRefs[i5]), docRef = fieldRef.docRef;
          if (!allRequiredMatches.contains(docRef)) {
            continue;
          }
          if (allProhibitedMatches.contains(docRef)) {
            continue;
          }
          var fieldVector = this.fieldVectors[fieldRef], score = queryVectors[fieldRef.fieldName].similarity(fieldVector), docMatch;
          if ((docMatch = matches[docRef]) !== void 0) {
            docMatch.score += score;
            docMatch.matchData.combine(matchingFields[fieldRef]);
          } else {
            var match = {
              ref: docRef,
              score,
              matchData: matchingFields[fieldRef]
            };
            matches[docRef] = match;
            results.push(match);
          }
        }
        return results.sort(function(a5, b2) {
          return b2.score - a5.score;
        });
      };
      lunr2.Index.prototype.toJSON = function() {
        var invertedIndex = Object.keys(this.invertedIndex).sort().map(function(term) {
          return [term, this.invertedIndex[term]];
        }, this);
        var fieldVectors = Object.keys(this.fieldVectors).map(function(ref) {
          return [ref, this.fieldVectors[ref].toJSON()];
        }, this);
        return {
          version: lunr2.version,
          fields: this.fields,
          fieldVectors,
          invertedIndex,
          pipeline: this.pipeline.toJSON()
        };
      };
      lunr2.Index.load = function(serializedIndex) {
        var attrs = {}, fieldVectors = {}, serializedVectors = serializedIndex.fieldVectors, invertedIndex = /* @__PURE__ */ Object.create(null), serializedInvertedIndex = serializedIndex.invertedIndex, tokenSetBuilder = new lunr2.TokenSet.Builder(), pipeline = lunr2.Pipeline.load(serializedIndex.pipeline);
        if (serializedIndex.version != lunr2.version) {
          lunr2.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr2.version + "' does not match serialized index '" + serializedIndex.version + "'");
        }
        for (var i5 = 0; i5 < serializedVectors.length; i5++) {
          var tuple = serializedVectors[i5], ref = tuple[0], elements = tuple[1];
          fieldVectors[ref] = new lunr2.Vector(elements);
        }
        for (var i5 = 0; i5 < serializedInvertedIndex.length; i5++) {
          var tuple = serializedInvertedIndex[i5], term = tuple[0], posting = tuple[1];
          tokenSetBuilder.insert(term);
          invertedIndex[term] = posting;
        }
        tokenSetBuilder.finish();
        attrs.fields = serializedIndex.fields;
        attrs.fieldVectors = fieldVectors;
        attrs.invertedIndex = invertedIndex;
        attrs.tokenSet = tokenSetBuilder.root;
        attrs.pipeline = pipeline;
        return new lunr2.Index(attrs);
      };
      lunr2.Builder = function() {
        this._ref = "id";
        this._fields = /* @__PURE__ */ Object.create(null);
        this._documents = /* @__PURE__ */ Object.create(null);
        this.invertedIndex = /* @__PURE__ */ Object.create(null);
        this.fieldTermFrequencies = {};
        this.fieldLengths = {};
        this.tokenizer = lunr2.tokenizer;
        this.pipeline = new lunr2.Pipeline();
        this.searchPipeline = new lunr2.Pipeline();
        this.documentCount = 0;
        this._b = 0.75;
        this._k1 = 1.2;
        this.termIndex = 0;
        this.metadataWhitelist = [];
      };
      lunr2.Builder.prototype.ref = function(ref) {
        this._ref = ref;
      };
      lunr2.Builder.prototype.field = function(fieldName, attributes) {
        if (/\//.test(fieldName)) {
          throw new RangeError("Field '" + fieldName + "' contains illegal character '/'");
        }
        this._fields[fieldName] = attributes || {};
      };
      lunr2.Builder.prototype.b = function(number) {
        if (number < 0) {
          this._b = 0;
        } else if (number > 1) {
          this._b = 1;
        } else {
          this._b = number;
        }
      };
      lunr2.Builder.prototype.k1 = function(number) {
        this._k1 = number;
      };
      lunr2.Builder.prototype.add = function(doc, attributes) {
        var docRef = doc[this._ref], fields = Object.keys(this._fields);
        this._documents[docRef] = attributes || {};
        this.documentCount += 1;
        for (var i5 = 0; i5 < fields.length; i5++) {
          var fieldName = fields[i5], extractor = this._fields[fieldName].extractor, field = extractor ? extractor(doc) : doc[fieldName], tokens = this.tokenizer(field, {
            fields: [fieldName]
          }), terms = this.pipeline.run(tokens), fieldRef = new lunr2.FieldRef(docRef, fieldName), fieldTerms = /* @__PURE__ */ Object.create(null);
          this.fieldTermFrequencies[fieldRef] = fieldTerms;
          this.fieldLengths[fieldRef] = 0;
          this.fieldLengths[fieldRef] += terms.length;
          for (var j2 = 0; j2 < terms.length; j2++) {
            var term = terms[j2];
            if (fieldTerms[term] == void 0) {
              fieldTerms[term] = 0;
            }
            fieldTerms[term] += 1;
            if (this.invertedIndex[term] == void 0) {
              var posting = /* @__PURE__ */ Object.create(null);
              posting["_index"] = this.termIndex;
              this.termIndex += 1;
              for (var k2 = 0; k2 < fields.length; k2++) {
                posting[fields[k2]] = /* @__PURE__ */ Object.create(null);
              }
              this.invertedIndex[term] = posting;
            }
            if (this.invertedIndex[term][fieldName][docRef] == void 0) {
              this.invertedIndex[term][fieldName][docRef] = /* @__PURE__ */ Object.create(null);
            }
            for (var l10 = 0; l10 < this.metadataWhitelist.length; l10++) {
              var metadataKey = this.metadataWhitelist[l10], metadata = term.metadata[metadataKey];
              if (this.invertedIndex[term][fieldName][docRef][metadataKey] == void 0) {
                this.invertedIndex[term][fieldName][docRef][metadataKey] = [];
              }
              this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
            }
          }
        }
      };
      lunr2.Builder.prototype.calculateAverageFieldLengths = function() {
        var fieldRefs = Object.keys(this.fieldLengths), numberOfFields = fieldRefs.length, accumulator = {}, documentsWithField = {};
        for (var i5 = 0; i5 < numberOfFields; i5++) {
          var fieldRef = lunr2.FieldRef.fromString(fieldRefs[i5]), field = fieldRef.fieldName;
          documentsWithField[field] || (documentsWithField[field] = 0);
          documentsWithField[field] += 1;
          accumulator[field] || (accumulator[field] = 0);
          accumulator[field] += this.fieldLengths[fieldRef];
        }
        var fields = Object.keys(this._fields);
        for (var i5 = 0; i5 < fields.length; i5++) {
          var fieldName = fields[i5];
          accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
        }
        this.averageFieldLength = accumulator;
      };
      lunr2.Builder.prototype.createFieldVectors = function() {
        var fieldVectors = {}, fieldRefs = Object.keys(this.fieldTermFrequencies), fieldRefsLength = fieldRefs.length, termIdfCache = /* @__PURE__ */ Object.create(null);
        for (var i5 = 0; i5 < fieldRefsLength; i5++) {
          var fieldRef = lunr2.FieldRef.fromString(fieldRefs[i5]), fieldName = fieldRef.fieldName, fieldLength = this.fieldLengths[fieldRef], fieldVector = new lunr2.Vector(), termFrequencies = this.fieldTermFrequencies[fieldRef], terms = Object.keys(termFrequencies), termsLength = terms.length;
          var fieldBoost = this._fields[fieldName].boost || 1, docBoost = this._documents[fieldRef.docRef].boost || 1;
          for (var j2 = 0; j2 < termsLength; j2++) {
            var term = terms[j2], tf = termFrequencies[term], termIndex = this.invertedIndex[term]._index, idf, score, scoreWithPrecision;
            if (termIdfCache[term] === void 0) {
              idf = lunr2.idf(this.invertedIndex[term], this.documentCount);
              termIdfCache[term] = idf;
            } else {
              idf = termIdfCache[term];
            }
            score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf);
            score *= fieldBoost;
            score *= docBoost;
            scoreWithPrecision = Math.round(score * 1e3) / 1e3;
            fieldVector.insert(termIndex, scoreWithPrecision);
          }
          fieldVectors[fieldRef] = fieldVector;
        }
        this.fieldVectors = fieldVectors;
      };
      lunr2.Builder.prototype.createTokenSet = function() {
        this.tokenSet = lunr2.TokenSet.fromArray(
          Object.keys(this.invertedIndex).sort()
        );
      };
      lunr2.Builder.prototype.build = function() {
        this.calculateAverageFieldLengths();
        this.createFieldVectors();
        this.createTokenSet();
        return new lunr2.Index({
          invertedIndex: this.invertedIndex,
          fieldVectors: this.fieldVectors,
          tokenSet: this.tokenSet,
          fields: Object.keys(this._fields),
          pipeline: this.searchPipeline
        });
      };
      lunr2.Builder.prototype.use = function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(this);
        fn.apply(this, args);
      };
      lunr2.MatchData = function(term, field, metadata) {
        var clonedMetadata = /* @__PURE__ */ Object.create(null), metadataKeys = Object.keys(metadata || {});
        for (var i5 = 0; i5 < metadataKeys.length; i5++) {
          var key = metadataKeys[i5];
          clonedMetadata[key] = metadata[key].slice();
        }
        this.metadata = /* @__PURE__ */ Object.create(null);
        if (term !== void 0) {
          this.metadata[term] = /* @__PURE__ */ Object.create(null);
          this.metadata[term][field] = clonedMetadata;
        }
      };
      lunr2.MatchData.prototype.combine = function(otherMatchData) {
        var terms = Object.keys(otherMatchData.metadata);
        for (var i5 = 0; i5 < terms.length; i5++) {
          var term = terms[i5], fields = Object.keys(otherMatchData.metadata[term]);
          if (this.metadata[term] == void 0) {
            this.metadata[term] = /* @__PURE__ */ Object.create(null);
          }
          for (var j2 = 0; j2 < fields.length; j2++) {
            var field = fields[j2], keys = Object.keys(otherMatchData.metadata[term][field]);
            if (this.metadata[term][field] == void 0) {
              this.metadata[term][field] = /* @__PURE__ */ Object.create(null);
            }
            for (var k2 = 0; k2 < keys.length; k2++) {
              var key = keys[k2];
              if (this.metadata[term][field][key] == void 0) {
                this.metadata[term][field][key] = otherMatchData.metadata[term][field][key];
              } else {
                this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
              }
            }
          }
        }
      };
      lunr2.MatchData.prototype.add = function(term, field, metadata) {
        if (!(term in this.metadata)) {
          this.metadata[term] = /* @__PURE__ */ Object.create(null);
          this.metadata[term][field] = metadata;
          return;
        }
        if (!(field in this.metadata[term])) {
          this.metadata[term][field] = metadata;
          return;
        }
        var metadataKeys = Object.keys(metadata);
        for (var i5 = 0; i5 < metadataKeys.length; i5++) {
          var key = metadataKeys[i5];
          if (key in this.metadata[term][field]) {
            this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key]);
          } else {
            this.metadata[term][field][key] = metadata[key];
          }
        }
      };
      lunr2.Query = function(allFields) {
        this.clauses = [];
        this.allFields = allFields;
      };
      lunr2.Query.wildcard = new String("*");
      lunr2.Query.wildcard.NONE = 0;
      lunr2.Query.wildcard.LEADING = 1;
      lunr2.Query.wildcard.TRAILING = 2;
      lunr2.Query.presence = {
        /**
         * Term's presence in a document is optional, this is the default value.
         */
        OPTIONAL: 1,
        /**
         * Term's presence in a document is required, documents that do not contain
         * this term will not be returned.
         */
        REQUIRED: 2,
        /**
         * Term's presence in a document is prohibited, documents that do contain
         * this term will not be returned.
         */
        PROHIBITED: 3
      };
      lunr2.Query.prototype.clause = function(clause) {
        if (!("fields" in clause)) {
          clause.fields = this.allFields;
        }
        if (!("boost" in clause)) {
          clause.boost = 1;
        }
        if (!("usePipeline" in clause)) {
          clause.usePipeline = true;
        }
        if (!("wildcard" in clause)) {
          clause.wildcard = lunr2.Query.wildcard.NONE;
        }
        if (clause.wildcard & lunr2.Query.wildcard.LEADING && clause.term.charAt(0) != lunr2.Query.wildcard) {
          clause.term = "*" + clause.term;
        }
        if (clause.wildcard & lunr2.Query.wildcard.TRAILING && clause.term.slice(-1) != lunr2.Query.wildcard) {
          clause.term = "" + clause.term + "*";
        }
        if (!("presence" in clause)) {
          clause.presence = lunr2.Query.presence.OPTIONAL;
        }
        this.clauses.push(clause);
        return this;
      };
      lunr2.Query.prototype.isNegated = function() {
        for (var i5 = 0; i5 < this.clauses.length; i5++) {
          if (this.clauses[i5].presence != lunr2.Query.presence.PROHIBITED) {
            return false;
          }
        }
        return true;
      };
      lunr2.Query.prototype.term = function(term, options) {
        if (Array.isArray(term)) {
          term.forEach(function(t5) {
            this.term(t5, lunr2.utils.clone(options));
          }, this);
          return this;
        }
        var clause = options || {};
        clause.term = term.toString();
        this.clause(clause);
        return this;
      };
      lunr2.QueryParseError = function(message, start, end) {
        this.name = "QueryParseError";
        this.message = message;
        this.start = start;
        this.end = end;
      };
      lunr2.QueryParseError.prototype = new Error();
      lunr2.QueryLexer = function(str) {
        this.lexemes = [];
        this.str = str;
        this.length = str.length;
        this.pos = 0;
        this.start = 0;
        this.escapeCharPositions = [];
      };
      lunr2.QueryLexer.prototype.run = function() {
        var state = lunr2.QueryLexer.lexText;
        while (state) {
          state = state(this);
        }
      };
      lunr2.QueryLexer.prototype.sliceString = function() {
        var subSlices = [], sliceStart = this.start, sliceEnd = this.pos;
        for (var i5 = 0; i5 < this.escapeCharPositions.length; i5++) {
          sliceEnd = this.escapeCharPositions[i5];
          subSlices.push(this.str.slice(sliceStart, sliceEnd));
          sliceStart = sliceEnd + 1;
        }
        subSlices.push(this.str.slice(sliceStart, this.pos));
        this.escapeCharPositions.length = 0;
        return subSlices.join("");
      };
      lunr2.QueryLexer.prototype.emit = function(type) {
        this.lexemes.push({
          type,
          str: this.sliceString(),
          start: this.start,
          end: this.pos
        });
        this.start = this.pos;
      };
      lunr2.QueryLexer.prototype.escapeCharacter = function() {
        this.escapeCharPositions.push(this.pos - 1);
        this.pos += 1;
      };
      lunr2.QueryLexer.prototype.next = function() {
        if (this.pos >= this.length) {
          return lunr2.QueryLexer.EOS;
        }
        var char = this.str.charAt(this.pos);
        this.pos += 1;
        return char;
      };
      lunr2.QueryLexer.prototype.width = function() {
        return this.pos - this.start;
      };
      lunr2.QueryLexer.prototype.ignore = function() {
        if (this.start == this.pos) {
          this.pos += 1;
        }
        this.start = this.pos;
      };
      lunr2.QueryLexer.prototype.backup = function() {
        this.pos -= 1;
      };
      lunr2.QueryLexer.prototype.acceptDigitRun = function() {
        var char, charCode;
        do {
          char = this.next();
          charCode = char.charCodeAt(0);
        } while (charCode > 47 && charCode < 58);
        if (char != lunr2.QueryLexer.EOS) {
          this.backup();
        }
      };
      lunr2.QueryLexer.prototype.more = function() {
        return this.pos < this.length;
      };
      lunr2.QueryLexer.EOS = "EOS";
      lunr2.QueryLexer.FIELD = "FIELD";
      lunr2.QueryLexer.TERM = "TERM";
      lunr2.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE";
      lunr2.QueryLexer.BOOST = "BOOST";
      lunr2.QueryLexer.PRESENCE = "PRESENCE";
      lunr2.QueryLexer.lexField = function(lexer) {
        lexer.backup();
        lexer.emit(lunr2.QueryLexer.FIELD);
        lexer.ignore();
        return lunr2.QueryLexer.lexText;
      };
      lunr2.QueryLexer.lexTerm = function(lexer) {
        if (lexer.width() > 1) {
          lexer.backup();
          lexer.emit(lunr2.QueryLexer.TERM);
        }
        lexer.ignore();
        if (lexer.more()) {
          return lunr2.QueryLexer.lexText;
        }
      };
      lunr2.QueryLexer.lexEditDistance = function(lexer) {
        lexer.ignore();
        lexer.acceptDigitRun();
        lexer.emit(lunr2.QueryLexer.EDIT_DISTANCE);
        return lunr2.QueryLexer.lexText;
      };
      lunr2.QueryLexer.lexBoost = function(lexer) {
        lexer.ignore();
        lexer.acceptDigitRun();
        lexer.emit(lunr2.QueryLexer.BOOST);
        return lunr2.QueryLexer.lexText;
      };
      lunr2.QueryLexer.lexEOS = function(lexer) {
        if (lexer.width() > 0) {
          lexer.emit(lunr2.QueryLexer.TERM);
        }
      };
      lunr2.QueryLexer.termSeparator = lunr2.tokenizer.separator;
      lunr2.QueryLexer.lexText = function(lexer) {
        while (true) {
          var char = lexer.next();
          if (char == lunr2.QueryLexer.EOS) {
            return lunr2.QueryLexer.lexEOS;
          }
          if (char.charCodeAt(0) == 92) {
            lexer.escapeCharacter();
            continue;
          }
          if (char == ":") {
            return lunr2.QueryLexer.lexField;
          }
          if (char == "~") {
            lexer.backup();
            if (lexer.width() > 0) {
              lexer.emit(lunr2.QueryLexer.TERM);
            }
            return lunr2.QueryLexer.lexEditDistance;
          }
          if (char == "^") {
            lexer.backup();
            if (lexer.width() > 0) {
              lexer.emit(lunr2.QueryLexer.TERM);
            }
            return lunr2.QueryLexer.lexBoost;
          }
          if (char == "+" && lexer.width() === 1) {
            lexer.emit(lunr2.QueryLexer.PRESENCE);
            return lunr2.QueryLexer.lexText;
          }
          if (char == "-" && lexer.width() === 1) {
            lexer.emit(lunr2.QueryLexer.PRESENCE);
            return lunr2.QueryLexer.lexText;
          }
          if (char.match(lunr2.QueryLexer.termSeparator)) {
            return lunr2.QueryLexer.lexTerm;
          }
        }
      };
      lunr2.QueryParser = function(str, query) {
        this.lexer = new lunr2.QueryLexer(str);
        this.query = query;
        this.currentClause = {};
        this.lexemeIdx = 0;
      };
      lunr2.QueryParser.prototype.parse = function() {
        this.lexer.run();
        this.lexemes = this.lexer.lexemes;
        var state = lunr2.QueryParser.parseClause;
        while (state) {
          state = state(this);
        }
        return this.query;
      };
      lunr2.QueryParser.prototype.peekLexeme = function() {
        return this.lexemes[this.lexemeIdx];
      };
      lunr2.QueryParser.prototype.consumeLexeme = function() {
        var lexeme = this.peekLexeme();
        this.lexemeIdx += 1;
        return lexeme;
      };
      lunr2.QueryParser.prototype.nextClause = function() {
        var completedClause = this.currentClause;
        this.query.clause(completedClause);
        this.currentClause = {};
      };
      lunr2.QueryParser.parseClause = function(parser) {
        var lexeme = parser.peekLexeme();
        if (lexeme == void 0) {
          return;
        }
        switch (lexeme.type) {
          case lunr2.QueryLexer.PRESENCE:
            return lunr2.QueryParser.parsePresence;
          case lunr2.QueryLexer.FIELD:
            return lunr2.QueryParser.parseField;
          case lunr2.QueryLexer.TERM:
            return lunr2.QueryParser.parseTerm;
          default:
            var errorMessage = "expected either a field or a term, found " + lexeme.type;
            if (lexeme.str.length >= 1) {
              errorMessage += " with value '" + lexeme.str + "'";
            }
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
      };
      lunr2.QueryParser.parsePresence = function(parser) {
        var lexeme = parser.consumeLexeme();
        if (lexeme == void 0) {
          return;
        }
        switch (lexeme.str) {
          case "-":
            parser.currentClause.presence = lunr2.Query.presence.PROHIBITED;
            break;
          case "+":
            parser.currentClause.presence = lunr2.Query.presence.REQUIRED;
            break;
          default:
            var errorMessage = "unrecognised presence operator'" + lexeme.str + "'";
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        var nextLexeme = parser.peekLexeme();
        if (nextLexeme == void 0) {
          var errorMessage = "expecting term or field, found nothing";
          throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        switch (nextLexeme.type) {
          case lunr2.QueryLexer.FIELD:
            return lunr2.QueryParser.parseField;
          case lunr2.QueryLexer.TERM:
            return lunr2.QueryParser.parseTerm;
          default:
            var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'";
            throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
        }
      };
      lunr2.QueryParser.parseField = function(parser) {
        var lexeme = parser.consumeLexeme();
        if (lexeme == void 0) {
          return;
        }
        if (parser.query.allFields.indexOf(lexeme.str) == -1) {
          var possibleFields = parser.query.allFields.map(function(f3) {
            return "'" + f3 + "'";
          }).join(", "), errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields;
          throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        parser.currentClause.fields = [lexeme.str];
        var nextLexeme = parser.peekLexeme();
        if (nextLexeme == void 0) {
          var errorMessage = "expecting term, found nothing";
          throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        switch (nextLexeme.type) {
          case lunr2.QueryLexer.TERM:
            return lunr2.QueryParser.parseTerm;
          default:
            var errorMessage = "expecting term, found '" + nextLexeme.type + "'";
            throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
        }
      };
      lunr2.QueryParser.parseTerm = function(parser) {
        var lexeme = parser.consumeLexeme();
        if (lexeme == void 0) {
          return;
        }
        parser.currentClause.term = lexeme.str.toLowerCase();
        if (lexeme.str.indexOf("*") != -1) {
          parser.currentClause.usePipeline = false;
        }
        var nextLexeme = parser.peekLexeme();
        if (nextLexeme == void 0) {
          parser.nextClause();
          return;
        }
        switch (nextLexeme.type) {
          case lunr2.QueryLexer.TERM:
            parser.nextClause();
            return lunr2.QueryParser.parseTerm;
          case lunr2.QueryLexer.FIELD:
            parser.nextClause();
            return lunr2.QueryParser.parseField;
          case lunr2.QueryLexer.EDIT_DISTANCE:
            return lunr2.QueryParser.parseEditDistance;
          case lunr2.QueryLexer.BOOST:
            return lunr2.QueryParser.parseBoost;
          case lunr2.QueryLexer.PRESENCE:
            parser.nextClause();
            return lunr2.QueryParser.parsePresence;
          default:
            var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
            throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
        }
      };
      lunr2.QueryParser.parseEditDistance = function(parser) {
        var lexeme = parser.consumeLexeme();
        if (lexeme == void 0) {
          return;
        }
        var editDistance = parseInt(lexeme.str, 10);
        if (isNaN(editDistance)) {
          var errorMessage = "edit distance must be numeric";
          throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        parser.currentClause.editDistance = editDistance;
        var nextLexeme = parser.peekLexeme();
        if (nextLexeme == void 0) {
          parser.nextClause();
          return;
        }
        switch (nextLexeme.type) {
          case lunr2.QueryLexer.TERM:
            parser.nextClause();
            return lunr2.QueryParser.parseTerm;
          case lunr2.QueryLexer.FIELD:
            parser.nextClause();
            return lunr2.QueryParser.parseField;
          case lunr2.QueryLexer.EDIT_DISTANCE:
            return lunr2.QueryParser.parseEditDistance;
          case lunr2.QueryLexer.BOOST:
            return lunr2.QueryParser.parseBoost;
          case lunr2.QueryLexer.PRESENCE:
            parser.nextClause();
            return lunr2.QueryParser.parsePresence;
          default:
            var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
            throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
        }
      };
      lunr2.QueryParser.parseBoost = function(parser) {
        var lexeme = parser.consumeLexeme();
        if (lexeme == void 0) {
          return;
        }
        var boost = parseInt(lexeme.str, 10);
        if (isNaN(boost)) {
          var errorMessage = "boost must be numeric";
          throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
        }
        parser.currentClause.boost = boost;
        var nextLexeme = parser.peekLexeme();
        if (nextLexeme == void 0) {
          parser.nextClause();
          return;
        }
        switch (nextLexeme.type) {
          case lunr2.QueryLexer.TERM:
            parser.nextClause();
            return lunr2.QueryParser.parseTerm;
          case lunr2.QueryLexer.FIELD:
            parser.nextClause();
            return lunr2.QueryParser.parseField;
          case lunr2.QueryLexer.EDIT_DISTANCE:
            return lunr2.QueryParser.parseEditDistance;
          case lunr2.QueryLexer.BOOST:
            return lunr2.QueryParser.parseBoost;
          case lunr2.QueryLexer.PRESENCE:
            parser.nextClause();
            return lunr2.QueryParser.parsePresence;
          default:
            var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
            throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
        }
      };
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.lunr = factory();
        }
      })(this, function() {
        return lunr2;
      });
    })();
  }
});

// node_modules/.pnpm/@lit+reactive-element@1.6.2/node_modules/@lit/reactive-element/css-tag.js
var t = window;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t5, e12, n12) {
    if (this._$cssResult$ = true, n12 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e12;
  }
  get styleSheet() {
    let t5 = this.o;
    const s9 = this.t;
    if (e && void 0 === t5) {
      const e12 = void 0 !== s9 && 1 === s9.length;
      e12 && (t5 = n.get(s9)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && n.set(s9, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t5) => new o("string" == typeof t5 ? t5 : t5 + "", void 0, s);
var i = (t5, ...e12) => {
  const n12 = 1 === t5.length ? t5[0] : e12.reduce((e13, s9, n13) => e13 + ((t6) => {
    if (true === t6._$cssResult$) return t6.cssText;
    if ("number" == typeof t6) return t6;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s9) + t5[n13 + 1], t5[0]);
  return new o(n12, t5, s);
};
var S = (s9, n12) => {
  e ? s9.adoptedStyleSheets = n12.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n12.forEach((e12) => {
    const n13 = document.createElement("style"), o13 = t.litNonce;
    void 0 !== o13 && n13.setAttribute("nonce", o13), n13.textContent = e12.cssText, s9.appendChild(n13);
  });
};
var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e12 = "";
  for (const s9 of t6.cssRules) e12 += s9.cssText;
  return r(e12);
})(t5) : t5;

// node_modules/.pnpm/@lit+reactive-element@1.6.2/node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window;
var r2 = e2.trustedTypes;
var h = r2 ? r2.emptyScript : "";
var o2 = e2.reactiveElementPolyfillSupport;
var n2 = { toAttribute(t5, i5) {
  switch (i5) {
    case Boolean:
      t5 = t5 ? h : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, i5) {
  let s9 = t5;
  switch (i5) {
    case Boolean:
      s9 = null !== t5;
      break;
    case Number:
      s9 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s9 = JSON.parse(t5);
      } catch (t6) {
        s9 = null;
      }
  }
  return s9;
} };
var a = (t5, i5) => i5 !== t5 && (i5 == i5 || t5 == t5);
var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
var d = "finalized";
var u = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t5) {
    var i5;
    this.finalize(), (null !== (i5 = this.h) && void 0 !== i5 ? i5 : this.h = []).push(t5);
  }
  static get observedAttributes() {
    this.finalize();
    const t5 = [];
    return this.elementProperties.forEach((i5, s9) => {
      const e12 = this._$Ep(s9, i5);
      void 0 !== e12 && (this._$Ev.set(e12, s9), t5.push(e12));
    }), t5;
  }
  static createProperty(t5, i5 = l) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t5, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t5)) {
      const s9 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e12 = this.getPropertyDescriptor(t5, s9, i5);
      void 0 !== e12 && Object.defineProperty(this.prototype, t5, e12);
    }
  }
  static getPropertyDescriptor(t5, i5, s9) {
    return { get() {
      return this[i5];
    }, set(e12) {
      const r8 = this[t5];
      this[i5] = e12, this.requestUpdate(t5, r8, s9);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) || l;
  }
  static finalize() {
    if (this.hasOwnProperty(d)) return false;
    this[d] = true;
    const t5 = Object.getPrototypeOf(this);
    if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t6 = this.properties, i5 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
      for (const s9 of i5) this.createProperty(s9, t6[s9]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s9 = [];
    if (Array.isArray(i5)) {
      const e12 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e12) s9.unshift(c(i6));
    } else void 0 !== i5 && s9.push(c(i5));
    return s9;
  }
  static _$Ep(t5, i5) {
    const s9 = i5.attribute;
    return false === s9 ? void 0 : "string" == typeof s9 ? s9 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  u() {
    var t5;
    this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
  }
  addController(t5) {
    var i5, s9;
    (null !== (i5 = this._$ES) && void 0 !== i5 ? i5 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s9 = t5.hostConnected) || void 0 === s9 || s9.call(t5));
  }
  removeController(t5) {
    var i5;
    null === (i5 = this._$ES) || void 0 === i5 || i5.splice(this._$ES.indexOf(t5) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t5, i5) => {
      this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t5;
    const s9 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s9, this.constructor.elementStyles), s9;
  }
  connectedCallback() {
    var t5;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
      var i5;
      return null === (i5 = t6.hostConnected) || void 0 === i5 ? void 0 : i5.call(t6);
    });
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    var t5;
    null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
      var i5;
      return null === (i5 = t6.hostDisconnected) || void 0 === i5 ? void 0 : i5.call(t6);
    });
  }
  attributeChangedCallback(t5, i5, s9) {
    this._$AK(t5, s9);
  }
  _$EO(t5, i5, s9 = l) {
    var e12;
    const r8 = this.constructor._$Ep(t5, s9);
    if (void 0 !== r8 && true === s9.reflect) {
      const h6 = (void 0 !== (null === (e12 = s9.converter) || void 0 === e12 ? void 0 : e12.toAttribute) ? s9.converter : n2).toAttribute(i5, s9.type);
      this._$El = t5, null == h6 ? this.removeAttribute(r8) : this.setAttribute(r8, h6), this._$El = null;
    }
  }
  _$AK(t5, i5) {
    var s9;
    const e12 = this.constructor, r8 = e12._$Ev.get(t5);
    if (void 0 !== r8 && this._$El !== r8) {
      const t6 = e12.getPropertyOptions(r8), h6 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s9 = t6.converter) || void 0 === s9 ? void 0 : s9.fromAttribute) ? t6.converter : n2;
      this._$El = r8, this[r8] = h6.fromAttribute(i5, t6.type), this._$El = null;
    }
  }
  requestUpdate(t5, i5, s9) {
    let e12 = true;
    void 0 !== t5 && (((s9 = s9 || this.constructor.getPropertyOptions(t5)).hasChanged || a)(this[t5], i5) ? (this._$AL.has(t5) || this._$AL.set(t5, i5), true === s9.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s9))) : e12 = false), !this.isUpdatePending && e12 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t5;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i6) => this[i6] = t6), this._$Ei = void 0);
    let i5 = false;
    const s9 = this._$AL;
    try {
      i5 = this.shouldUpdate(s9), i5 ? (this.willUpdate(s9), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostUpdate) || void 0 === i6 ? void 0 : i6.call(t6);
      }), this.update(s9)) : this._$Ek();
    } catch (t6) {
      throw i5 = false, this._$Ek(), t6;
    }
    i5 && this._$AE(s9);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    var i5;
    null === (i5 = this._$ES) || void 0 === i5 || i5.forEach((t6) => {
      var i6;
      return null === (i6 = t6.hostUpdated) || void 0 === i6 ? void 0 : i6.call(t6);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    void 0 !== this._$EC && (this._$EC.forEach((t6, i5) => this._$EO(i5, this[i5], t6)), this._$EC = void 0), this._$Ek();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.2");

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/lit-html.js
var t2;
var i2 = window;
var s3 = i2.trustedTypes;
var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = document;
var u2 = () => r3.createComment("");
var d2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var c2 = Array.isArray;
var v = (t5) => c2(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t5) => (i5, ...s9) => ({ _$litType$: t5, strings: i5, values: s9 });
var x = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t5, i5) {
  if (!Array.isArray(t5) || !t5.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var V = (t5, i5) => {
  const s9 = t5.length - 1, e12 = [];
  let l10, r8 = 2 === i5 ? "<svg>" : "", u5 = f;
  for (let i6 = 0; i6 < s9; i6++) {
    const s10 = t5[i6];
    let d4, c7, v2 = -1, a5 = 0;
    for (; a5 < s10.length && (u5.lastIndex = a5, c7 = u5.exec(s10), null !== c7); ) a5 = u5.lastIndex, u5 === f ? "!--" === c7[1] ? u5 = _ : void 0 !== c7[1] ? u5 = m : void 0 !== c7[2] ? (y.test(c7[2]) && (l10 = RegExp("</" + c7[2], "g")), u5 = p) : void 0 !== c7[3] && (u5 = p) : u5 === p ? ">" === c7[0] ? (u5 = null != l10 ? l10 : f, v2 = -1) : void 0 === c7[1] ? v2 = -2 : (v2 = u5.lastIndex - c7[2].length, d4 = c7[1], u5 = void 0 === c7[3] ? p : '"' === c7[3] ? $ : g) : u5 === $ || u5 === g ? u5 = p : u5 === _ || u5 === m ? u5 = f : (u5 = p, l10 = void 0);
    const w2 = u5 === p && t5[i6 + 1].startsWith("/>") ? " " : "";
    r8 += u5 === f ? s10 + h2 : v2 >= 0 ? (e12.push(d4), s10.slice(0, v2) + o3 + s10.slice(v2) + n3 + w2) : s10 + n3 + (-2 === v2 ? (e12.push(void 0), i6) : w2);
  }
  return [P(t5, r8 + (t5[s9] || "<?>") + (2 === i5 ? "</svg>" : "")), e12];
};
var N = class _N {
  constructor({ strings: t5, _$litType$: i5 }, e12) {
    let h6;
    this.parts = [];
    let r8 = 0, d4 = 0;
    const c7 = t5.length - 1, v2 = this.parts, [a5, f3] = V(t5, i5);
    if (this.el = _N.createElement(a5, e12), C.currentNode = this.el.content, 2 === i5) {
      const t6 = this.el.content, i6 = t6.firstChild;
      i6.remove(), t6.append(...i6.childNodes);
    }
    for (; null !== (h6 = C.nextNode()) && v2.length < c7; ) {
      if (1 === h6.nodeType) {
        if (h6.hasAttributes()) {
          const t6 = [];
          for (const i6 of h6.getAttributeNames()) if (i6.endsWith(o3) || i6.startsWith(n3)) {
            const s9 = f3[d4++];
            if (t6.push(i6), void 0 !== s9) {
              const t7 = h6.getAttribute(s9.toLowerCase() + o3).split(n3), i7 = /([.?@])?(.*)/.exec(s9);
              v2.push({ type: 1, index: r8, name: i7[2], strings: t7, ctor: "." === i7[1] ? H : "?" === i7[1] ? L : "@" === i7[1] ? z : k });
            } else v2.push({ type: 6, index: r8 });
          }
          for (const i6 of t6) h6.removeAttribute(i6);
        }
        if (y.test(h6.tagName)) {
          const t6 = h6.textContent.split(n3), i6 = t6.length - 1;
          if (i6 > 0) {
            h6.textContent = s3 ? s3.emptyScript : "";
            for (let s9 = 0; s9 < i6; s9++) h6.append(t6[s9], u2()), C.nextNode(), v2.push({ type: 2, index: ++r8 });
            h6.append(t6[i6], u2());
          }
        }
      } else if (8 === h6.nodeType) if (h6.data === l2) v2.push({ type: 2, index: r8 });
      else {
        let t6 = -1;
        for (; -1 !== (t6 = h6.data.indexOf(n3, t6 + 1)); ) v2.push({ type: 7, index: r8 }), t6 += n3.length - 1;
      }
      r8++;
    }
  }
  static createElement(t5, i5) {
    const s9 = r3.createElement("template");
    return s9.innerHTML = t5, s9;
  }
};
function S2(t5, i5, s9 = t5, e12) {
  var o13, n12, l10, h6;
  if (i5 === T) return i5;
  let r8 = void 0 !== e12 ? null === (o13 = s9._$Co) || void 0 === o13 ? void 0 : o13[e12] : s9._$Cl;
  const u5 = d2(i5) ? void 0 : i5._$litDirective$;
  return (null == r8 ? void 0 : r8.constructor) !== u5 && (null === (n12 = null == r8 ? void 0 : r8._$AO) || void 0 === n12 || n12.call(r8, false), void 0 === u5 ? r8 = void 0 : (r8 = new u5(t5), r8._$AT(t5, s9, e12)), void 0 !== e12 ? (null !== (l10 = (h6 = s9)._$Co) && void 0 !== l10 ? l10 : h6._$Co = [])[e12] = r8 : s9._$Cl = r8), void 0 !== r8 && (i5 = S2(t5, r8._$AS(t5, i5.values), r8, e12)), i5;
}
var M = class {
  constructor(t5, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t5) {
    var i5;
    const { el: { content: s9 }, parts: e12 } = this._$AD, o13 = (null !== (i5 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i5 ? i5 : r3).importNode(s9, true);
    C.currentNode = o13;
    let n12 = C.nextNode(), l10 = 0, h6 = 0, u5 = e12[0];
    for (; void 0 !== u5; ) {
      if (l10 === u5.index) {
        let i6;
        2 === u5.type ? i6 = new R(n12, n12.nextSibling, this, t5) : 1 === u5.type ? i6 = new u5.ctor(n12, u5.name, u5.strings, this, t5) : 6 === u5.type && (i6 = new Z(n12, this, t5)), this._$AV.push(i6), u5 = e12[++h6];
      }
      l10 !== (null == u5 ? void 0 : u5.index) && (n12 = C.nextNode(), l10++);
    }
    return C.currentNode = r3, o13;
  }
  v(t5) {
    let i5 = 0;
    for (const s9 of this._$AV) void 0 !== s9 && (void 0 !== s9.strings ? (s9._$AI(t5, s9, i5), i5 += s9.strings.length - 2) : s9._$AI(t5[i5])), i5++;
  }
};
var R = class _R {
  constructor(t5, i5, s9, e12) {
    var o13;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i5, this._$AM = s9, this.options = e12, this._$Cp = null === (o13 = null == e12 ? void 0 : e12.isConnected) || void 0 === o13 || o13;
  }
  get _$AU() {
    var t5, i5;
    return null !== (i5 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i5 ? i5 : this._$Cp;
  }
  get parentNode() {
    let t5 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === (null == t5 ? void 0 : t5.nodeType) && (t5 = i5.parentNode), t5;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t5, i5 = this) {
    t5 = S2(this, t5, i5), d2(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== T && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : v(t5) ? this.T(t5) : this._(t5);
  }
  k(t5) {
    return this._$AA.parentNode.insertBefore(t5, this._$AB);
  }
  $(t5) {
    this._$AH !== t5 && (this._$AR(), this._$AH = this.k(t5));
  }
  _(t5) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.$(r3.createTextNode(t5)), this._$AH = t5;
  }
  g(t5) {
    var i5;
    const { values: s9, _$litType$: e12 } = t5, o13 = "number" == typeof e12 ? this._$AC(t5) : (void 0 === e12.el && (e12.el = N.createElement(P(e12.h, e12.h[0]), this.options)), e12);
    if ((null === (i5 = this._$AH) || void 0 === i5 ? void 0 : i5._$AD) === o13) this._$AH.v(s9);
    else {
      const t6 = new M(o13, this), i6 = t6.u(this.options);
      t6.v(s9), this.$(i6), this._$AH = t6;
    }
  }
  _$AC(t5) {
    let i5 = E.get(t5.strings);
    return void 0 === i5 && E.set(t5.strings, i5 = new N(t5)), i5;
  }
  T(t5) {
    c2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s9, e12 = 0;
    for (const o13 of t5) e12 === i5.length ? i5.push(s9 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s9 = i5[e12], s9._$AI(o13), e12++;
    e12 < i5.length && (this._$AR(s9 && s9._$AB.nextSibling, e12), i5.length = e12);
  }
  _$AR(t5 = this._$AA.nextSibling, i5) {
    var s9;
    for (null === (s9 = this._$AP) || void 0 === s9 || s9.call(this, false, true, i5); t5 && t5 !== this._$AB; ) {
      const i6 = t5.nextSibling;
      t5.remove(), t5 = i6;
    }
  }
  setConnected(t5) {
    var i5;
    void 0 === this._$AM && (this._$Cp = t5, null === (i5 = this._$AP) || void 0 === i5 || i5.call(this, t5));
  }
};
var k = class {
  constructor(t5, i5, s9, e12, o13) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i5, this._$AM = e12, this.options = o13, s9.length > 2 || "" !== s9[0] || "" !== s9[1] ? (this._$AH = Array(s9.length - 1).fill(new String()), this.strings = s9) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5, i5 = this, s9, e12) {
    const o13 = this.strings;
    let n12 = false;
    if (void 0 === o13) t5 = S2(this, t5, i5, 0), n12 = !d2(t5) || t5 !== this._$AH && t5 !== T, n12 && (this._$AH = t5);
    else {
      const e13 = t5;
      let l10, h6;
      for (t5 = o13[0], l10 = 0; l10 < o13.length - 1; l10++) h6 = S2(this, e13[s9 + l10], i5, l10), h6 === T && (h6 = this._$AH[l10]), n12 || (n12 = !d2(h6) || h6 !== this._$AH[l10]), h6 === A ? t5 = A : t5 !== A && (t5 += (null != h6 ? h6 : "") + o13[l10 + 1]), this._$AH[l10] = h6;
    }
    n12 && !e12 && this.j(t5);
  }
  j(t5) {
    t5 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t5) {
    this.element[this.name] = t5 === A ? void 0 : t5;
  }
};
var I = s3 ? s3.emptyScript : "";
var L = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t5) {
    t5 && t5 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends k {
  constructor(t5, i5, s9, e12, o13) {
    super(t5, i5, s9, e12, o13), this.type = 5;
  }
  _$AI(t5, i5 = this) {
    var s9;
    if ((t5 = null !== (s9 = S2(this, t5, i5, 0)) && void 0 !== s9 ? s9 : A) === T) return;
    const e12 = this._$AH, o13 = t5 === A && e12 !== A || t5.capture !== e12.capture || t5.once !== e12.once || t5.passive !== e12.passive, n12 = t5 !== A && (e12 === A || o13);
    o13 && this.element.removeEventListener(this.name, this, e12), n12 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
  }
  handleEvent(t5) {
    var i5, s9;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s9 = null === (i5 = this.options) || void 0 === i5 ? void 0 : i5.host) && void 0 !== s9 ? s9 : this.element, t5) : this._$AH.handleEvent(t5);
  }
};
var Z = class {
  constructor(t5, i5, s9) {
    this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s9;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5) {
    S2(this, t5);
  }
};
var j = { O: o3, P: n3, A: l2, C: 1, M: V, L: M, R: v, D: S2, I: R, V: k, H: L, N: z, U: H, F: Z };
var B = i2.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var D = (t5, i5, s9) => {
  var e12, o13;
  const n12 = null !== (e12 = null == s9 ? void 0 : s9.renderBefore) && void 0 !== e12 ? e12 : i5;
  let l10 = n12._$litPart$;
  if (void 0 === l10) {
    const t6 = null !== (o13 = null == s9 ? void 0 : s9.renderBefore) && void 0 !== o13 ? o13 : null;
    n12._$litPart$ = l10 = new R(i5.insertBefore(u2(), t6), t6, void 0, null != s9 ? s9 : {});
  }
  return l10._$AI(t5), l10;
};

// node_modules/.pnpm/lit-element@3.3.2/node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends u {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t5, e12;
    const i5 = super.createRenderRoot();
    return null !== (t5 = (e12 = this.renderOptions).renderBefore) && void 0 !== t5 || (e12.renderBefore = i5.firstChild), i5;
  }
  update(t5) {
    const i5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D(i5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t5;
    super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
  }
  disconnectedCallback() {
    var t5;
    super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
  }
  render() {
    return T;
  }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({ LitElement: s4 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.2");

// node_modules/.pnpm/web-component-define@2.0.11/node_modules/web-component-define/src/internal/defineable-mixin.js
function DefineableMixin(superclass) {
  var _a;
  return _a = class extends superclass {
    /**
    * @param {null | undefined | string} [name=this.baseName]
    * @param {null | undefined | CustomElementConstructor} [ctor=this]
    * @param {ElementDefinitionOptions | undefined} [options]
    */
    static define(name, ctor, options) {
      if (!name) name = this.baseName;
      if (!ctor) ctor = this;
      let registry = window.customElements;
      if (this.__registry instanceof CustomElementRegistry) {
        registry = this.__registry;
      }
      const alreadyExists = Boolean(registry.get(name));
      if (alreadyExists && this.warnOnExistingElement) {
        console.warn(`${name} has already been registered.`);
      }
      if (!alreadyExists && ctor) {
        registry.define(name, class extends ctor {
        }, options);
      }
    }
  }, /**
   * The tag name to register your custom element under.
   * @type {string}
   */
  __publicField(_a, "baseName", ""), /**
   * Emits a console warning if the name for an element is already taken.
   * @type {boolean}
   */
  __publicField(_a, "warnOnExistingElement", false), _a;
}
var DefineableElement = class extends DefineableMixin(HTMLElement) {
};

// node_modules/.pnpm/@open-wc+dedupe-mixin@1.4.0/node_modules/@open-wc/dedupe-mixin/src/dedupeMixin.js
var appliedClassMixins = /* @__PURE__ */ new WeakMap();
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}
function dedupeMixin(mixin) {
  return (superClass) => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}

// node_modules/.pnpm/web-component-define@2.0.11/node_modules/web-component-define/src/internal/scoped-elements-mixin.js
var supportsScopedRegistry = !!ShadowRoot.prototype.createElement;
var ScopedElementsMixinImplementation = (superclass) => {
  var _a;
  return _a = class extends superclass {
    /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @returns {ScopedElementsMap}
     */
    static get scopedElements() {
      return {};
    }
    /**
     * Obtains the ShadowRoot options.
     *
     * @type {ShadowRootInit}
     */
    static get shadowRootOptions() {
      return this.__shadowRootOptions || { mode: "open" };
    }
    /**
     * Set the shadowRoot options.
     *
     * @param {ShadowRootInit} value
     */
    static set shadowRootOptions(value) {
      this.__shadowRootOptions = value;
    }
    /**
     * @param {any[]} args
     */
    constructor(...args) {
      super(...args);
      this.renderOptions = this.renderOptions || void 0;
    }
    /**
     * Obtains the CustomElementRegistry associated to the ShadowRoot.
     *
     * @returns {CustomElementRegistry}
     */
    get registry() {
      const constructor = this.constructor;
      return constructor.__registry;
    }
    /**
     * Set the CustomElementRegistry associated to the ShadowRoot
     *
     * @param {CustomElementRegistry} registry
     */
    set registry(registry) {
      const constructor = this.constructor;
      constructor.__registry = registry;
    }
    createRenderRoot() {
      const constructor = this.constructor;
      const { scopedElements, shadowRootOptions } = constructor;
      const shouldCreateRegistry = !this.registry || this.registry === constructor.__registry && !Object.prototype.hasOwnProperty.call(this.constructor, "__registry");
      if (shouldCreateRegistry) {
        this.registry = supportsScopedRegistry ? new CustomElementRegistry() : customElements;
        for (const [tagName, klass] of Object.entries(scopedElements)) {
          this.defineScopedElement(tagName, klass);
        }
      }
      const options = {
        // @ts-expect-error multiple assignment. Sue me.
        mode: "open",
        ...shadowRootOptions,
        customElements: this.registry
      };
      const createdRoot = this.attachShadow(options);
      if (supportsScopedRegistry) {
        this.renderOptions.creationScope = createdRoot;
      }
      if (createdRoot instanceof ShadowRoot) {
        this.adoptStyles(createdRoot);
      }
      return createdRoot;
    }
    /**
     * @param {string} tagName
     */
    createScopedElement(tagName) {
      const root = supportsScopedRegistry ? this.shadowRoot : document;
      return root.createElement(tagName);
    }
    /**
     * Hook for attaching constructable stylesheets to a render root.
     * Used in the {LitScopedElementsMixin} .
     * @param {ShadowRoot} _shadowRoot
     * @returns {void}
     */
    adoptStyles(_shadowRoot) {
    }
    /**
     * Defines a scoped element.
     *
     * @param {string} tagName
     * @param {typeof HTMLElement} klass
     */
    defineScopedElement(tagName, klass) {
      const registeredClass = this.registry.get(tagName);
      if (registeredClass && supportsScopedRegistry === false && registeredClass !== klass) {
        console.error(
          [
            `You are trying to re-register the "${tagName}" custom element with a different class via ScopedElementsMixin.`,
            "This is only possible with a CustomElementRegistry.",
            "Your browser does not support this feature so you will need to load a polyfill for it.",
            'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.',
            'e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',
            "For more details you can visit https://open-wc.org/docs/development/scoped-elements/"
          ].join("\n")
        );
      }
      if (!registeredClass) {
        return this.registry.define(tagName, klass);
      }
      return this.registry.get(tagName);
    }
  }, /**
   * @protected
   * @type {CustomElementRegistry}
   */
  __publicField(_a, "__registry", window.customElements), _a;
};
var ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);

// node_modules/.pnpm/web-component-define@2.0.11/node_modules/web-component-define/src/internal/create-render-root-mixin.js
var CreateRenderRootMixinImplementation = (superclass) => {
  return class CreateRenderRootHost extends superclass {
    /**
     * Obtains the ShadowRoot options.
     *
     * @type {ShadowRootInit}
     */
    static get shadowRootOptions() {
      return this.__shadowRootOptions || { mode: "open" };
    }
    /**
     * Set the shadowRoot options.
     *
     * @param {ShadowRootInit} value
     */
    static set shadowRootOptions(value) {
      this.__shadowRootOptions = value;
    }
    /** @type {ShadowRootInit} */
    get shadowRootOptions() {
      return this.constructor.shadowRootOptions;
    }
    createRenderRoot() {
      const renderRoot = this.shadowRoot ?? this.attachShadow(this.shadowRootOptions || { mode: "open" });
      return renderRoot;
    }
    connectedCallback() {
      if (typeof super.connectedCallback === "function") {
        super.connectedCallback();
      }
      if (this.renderRoot == null) {
        this.renderRoot = this.createRenderRoot();
      }
    }
  };
};
var CreateRenderRootMixin = dedupeMixin(CreateRenderRootMixinImplementation);

// node_modules/.pnpm/@lit+reactive-element@1.6.3/node_modules/@lit/reactive-element/css-tag.js
var t3 = window;
var e4 = t3.ShadowRoot && (void 0 === t3.ShadyCSS || t3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s5 = Symbol();
var n5 = /* @__PURE__ */ new WeakMap();
var o5 = class {
  constructor(t5, e12, n12) {
    if (this._$cssResult$ = true, n12 !== s5) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e12;
  }
  get styleSheet() {
    let t5 = this.o;
    const s9 = this.t;
    if (e4 && void 0 === t5) {
      const e12 = void 0 !== s9 && 1 === s9.length;
      e12 && (t5 = n5.get(s9)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && n5.set(s9, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var r4 = (t5) => new o5("string" == typeof t5 ? t5 : t5 + "", void 0, s5);
var S3 = (s9, n12) => {
  e4 ? s9.adoptedStyleSheets = n12.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n12.forEach((e12) => {
    const n13 = document.createElement("style"), o13 = t3.litNonce;
    void 0 !== o13 && n13.setAttribute("nonce", o13), n13.textContent = e12.cssText, s9.appendChild(n13);
  });
};
var c3 = e4 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e12 = "";
  for (const s9 of t6.cssRules) e12 += s9.cssText;
  return r4(e12);
})(t5) : t5;

// node_modules/.pnpm/@lit+reactive-element@1.6.3/node_modules/@lit/reactive-element/reactive-element.js
var s6;
var e5 = window;
var r5 = e5.trustedTypes;
var h3 = r5 ? r5.emptyScript : "";
var o6 = e5.reactiveElementPolyfillSupport;
var n6 = { toAttribute(t5, i5) {
  switch (i5) {
    case Boolean:
      t5 = t5 ? h3 : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, i5) {
  let s9 = t5;
  switch (i5) {
    case Boolean:
      s9 = null !== t5;
      break;
    case Number:
      s9 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s9 = JSON.parse(t5);
      } catch (t6) {
        s9 = null;
      }
  }
  return s9;
} };
var a3 = (t5, i5) => i5 !== t5 && (i5 == i5 || t5 == t5);
var l4 = { attribute: true, type: String, converter: n6, reflect: false, hasChanged: a3 };
var d3 = "finalized";
var u3 = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t5) {
    var i5;
    this.finalize(), (null !== (i5 = this.h) && void 0 !== i5 ? i5 : this.h = []).push(t5);
  }
  static get observedAttributes() {
    this.finalize();
    const t5 = [];
    return this.elementProperties.forEach((i5, s9) => {
      const e12 = this._$Ep(s9, i5);
      void 0 !== e12 && (this._$Ev.set(e12, s9), t5.push(e12));
    }), t5;
  }
  static createProperty(t5, i5 = l4) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t5, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t5)) {
      const s9 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e12 = this.getPropertyDescriptor(t5, s9, i5);
      void 0 !== e12 && Object.defineProperty(this.prototype, t5, e12);
    }
  }
  static getPropertyDescriptor(t5, i5, s9) {
    return { get() {
      return this[i5];
    }, set(e12) {
      const r8 = this[t5];
      this[i5] = e12, this.requestUpdate(t5, r8, s9);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) || l4;
  }
  static finalize() {
    if (this.hasOwnProperty(d3)) return false;
    this[d3] = true;
    const t5 = Object.getPrototypeOf(this);
    if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t6 = this.properties, i5 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
      for (const s9 of i5) this.createProperty(s9, t6[s9]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s9 = [];
    if (Array.isArray(i5)) {
      const e12 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e12) s9.unshift(c3(i6));
    } else void 0 !== i5 && s9.push(c3(i5));
    return s9;
  }
  static _$Ep(t5, i5) {
    const s9 = i5.attribute;
    return false === s9 ? void 0 : "string" == typeof s9 ? s9 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  _$Eu() {
    var t5;
    this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
  }
  addController(t5) {
    var i5, s9;
    (null !== (i5 = this._$ES) && void 0 !== i5 ? i5 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s9 = t5.hostConnected) || void 0 === s9 || s9.call(t5));
  }
  removeController(t5) {
    var i5;
    null === (i5 = this._$ES) || void 0 === i5 || i5.splice(this._$ES.indexOf(t5) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t5, i5) => {
      this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t5;
    const s9 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
    return S3(s9, this.constructor.elementStyles), s9;
  }
  connectedCallback() {
    var t5;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
      var i5;
      return null === (i5 = t6.hostConnected) || void 0 === i5 ? void 0 : i5.call(t6);
    });
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    var t5;
    null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
      var i5;
      return null === (i5 = t6.hostDisconnected) || void 0 === i5 ? void 0 : i5.call(t6);
    });
  }
  attributeChangedCallback(t5, i5, s9) {
    this._$AK(t5, s9);
  }
  _$EO(t5, i5, s9 = l4) {
    var e12;
    const r8 = this.constructor._$Ep(t5, s9);
    if (void 0 !== r8 && true === s9.reflect) {
      const h6 = (void 0 !== (null === (e12 = s9.converter) || void 0 === e12 ? void 0 : e12.toAttribute) ? s9.converter : n6).toAttribute(i5, s9.type);
      this._$El = t5, null == h6 ? this.removeAttribute(r8) : this.setAttribute(r8, h6), this._$El = null;
    }
  }
  _$AK(t5, i5) {
    var s9;
    const e12 = this.constructor, r8 = e12._$Ev.get(t5);
    if (void 0 !== r8 && this._$El !== r8) {
      const t6 = e12.getPropertyOptions(r8), h6 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s9 = t6.converter) || void 0 === s9 ? void 0 : s9.fromAttribute) ? t6.converter : n6;
      this._$El = r8, this[r8] = h6.fromAttribute(i5, t6.type), this._$El = null;
    }
  }
  requestUpdate(t5, i5, s9) {
    let e12 = true;
    void 0 !== t5 && (((s9 = s9 || this.constructor.getPropertyOptions(t5)).hasChanged || a3)(this[t5], i5) ? (this._$AL.has(t5) || this._$AL.set(t5, i5), true === s9.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s9))) : e12 = false), !this.isUpdatePending && e12 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t5;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i6) => this[i6] = t6), this._$Ei = void 0);
    let i5 = false;
    const s9 = this._$AL;
    try {
      i5 = this.shouldUpdate(s9), i5 ? (this.willUpdate(s9), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostUpdate) || void 0 === i6 ? void 0 : i6.call(t6);
      }), this.update(s9)) : this._$Ek();
    } catch (t6) {
      throw i5 = false, this._$Ek(), t6;
    }
    i5 && this._$AE(s9);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    var i5;
    null === (i5 = this._$ES) || void 0 === i5 || i5.forEach((t6) => {
      var i6;
      return null === (i6 = t6.hostUpdated) || void 0 === i6 ? void 0 : i6.call(t6);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    void 0 !== this._$EC && (this._$EC.forEach((t6, i5) => this._$EO(i5, this[i5], t6)), this._$EC = void 0), this._$Ek();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
u3[d3] = true, u3.elementProperties = /* @__PURE__ */ new Map(), u3.elementStyles = [], u3.shadowRootOptions = { mode: "open" }, null == o6 || o6({ ReactiveElement: u3 }), (null !== (s6 = e5.reactiveElementVersions) && void 0 !== s6 ? s6 : e5.reactiveElementVersions = []).push("1.6.3");

// node_modules/.pnpm/web-component-define@2.0.11/node_modules/web-component-define/src/internal/lit-scoped-elements-mixin.js
var LitScopedElementsMixinImplementation = (superclass) => {
  return class LitScopedElementsHost extends ScopedElementsMixin(superclass) {
    /**
     * Obtains the element styles.
     *
     * @returns {undefined | CSSResultOrNative[]}
     */
    static get elementStyles() {
      return this.__elementStyles;
    }
    /**
     * @param {undefined | CSSResultOrNative[]} styles
     */
    static set elementStyles(styles2) {
      this.__elementStyles = styles2;
    }
    /**
     * @param {ShadowRoot} createdRoot
     */
    adoptStyles(createdRoot) {
      const constructor = this.constructor;
      const { elementStyles } = constructor;
      if (elementStyles) {
        S3(createdRoot, elementStyles);
      }
      this.renderOptions.renderBefore = this.renderOptions.renderBefore || createdRoot.firstChild || void 0;
    }
  };
};
var LitScopedElementsMixin = dedupeMixin(LitScopedElementsMixinImplementation);

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/base-element.js
var BaseElement = class extends DefineableMixin(LitScopedElementsMixin(s4)) {
};

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directive.js
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e6 = (t5) => (...e12) => ({ _$litDirective$: t5, values: e12 });
var i4 = class {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, e12, i5) {
    this._$Ct = t5, this._$AM = e12, this._$Ci = i5;
  }
  _$AS(t5, e12) {
    return this.update(t5, e12);
  }
  update(t5, e12) {
    return this.render(...e12);
  }
};

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directive-helpers.js
var { I: l5 } = j;
var e7 = (o13) => void 0 === o13.strings;
var r6 = () => document.createComment("");
var c4 = (o13, i5, n12) => {
  var t5;
  const v2 = o13._$AA.parentNode, d4 = void 0 === i5 ? o13._$AB : i5._$AA;
  if (void 0 === n12) {
    const i6 = v2.insertBefore(r6(), d4), t6 = v2.insertBefore(r6(), d4);
    n12 = new l5(i6, t6, o13, o13.options);
  } else {
    const l10 = n12._$AB.nextSibling, i6 = n12._$AM, u5 = i6 !== o13;
    if (u5) {
      let l11;
      null === (t5 = n12._$AQ) || void 0 === t5 || t5.call(n12, o13), n12._$AM = o13, void 0 !== n12._$AP && (l11 = o13._$AU) !== i6._$AU && n12._$AP(l11);
    }
    if (l10 !== d4 || u5) {
      let o14 = n12._$AA;
      for (; o14 !== l10; ) {
        const l11 = o14.nextSibling;
        v2.insertBefore(o14, d4), o14 = l11;
      }
    }
  }
  return n12;
};
var f2 = (o13, l10, i5 = o13) => (o13._$AI(l10, i5), o13);
var s7 = {};
var a4 = (o13, l10 = s7) => o13._$AH = l10;
var m2 = (o13) => o13._$AH;
var p2 = (o13) => {
  var l10;
  null === (l10 = o13._$AP) || void 0 === l10 || l10.call(o13, false, true);
  let i5 = o13._$AA;
  const n12 = o13._$AB.nextSibling;
  for (; i5 !== n12; ) {
    const o14 = i5.nextSibling;
    i5.remove(), i5 = o14;
  }
};

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/repeat.js
var u4 = (e12, s9, t5) => {
  const r8 = /* @__PURE__ */ new Map();
  for (let l10 = s9; l10 <= t5; l10++) r8.set(e12[l10], l10);
  return r8;
};
var c5 = e6(class extends i4 {
  constructor(e12) {
    if (super(e12), e12.type !== t4.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  ct(e12, s9, t5) {
    let r8;
    void 0 === t5 ? t5 = s9 : void 0 !== s9 && (r8 = s9);
    const l10 = [], o13 = [];
    let i5 = 0;
    for (const s10 of e12) l10[i5] = r8 ? r8(s10, i5) : i5, o13[i5] = t5(s10, i5), i5++;
    return { values: o13, keys: l10 };
  }
  render(e12, s9, t5) {
    return this.ct(e12, s9, t5).values;
  }
  update(s9, [t5, r8, c7]) {
    var d4;
    const a5 = m2(s9), { values: p3, keys: v2 } = this.ct(t5, r8, c7);
    if (!Array.isArray(a5)) return this.ut = v2, p3;
    const h6 = null !== (d4 = this.ut) && void 0 !== d4 ? d4 : this.ut = [], m3 = [];
    let y2, x2, j2 = 0, k2 = a5.length - 1, w2 = 0, A2 = p3.length - 1;
    for (; j2 <= k2 && w2 <= A2; ) if (null === a5[j2]) j2++;
    else if (null === a5[k2]) k2--;
    else if (h6[j2] === v2[w2]) m3[w2] = f2(a5[j2], p3[w2]), j2++, w2++;
    else if (h6[k2] === v2[A2]) m3[A2] = f2(a5[k2], p3[A2]), k2--, A2--;
    else if (h6[j2] === v2[A2]) m3[A2] = f2(a5[j2], p3[A2]), c4(s9, m3[A2 + 1], a5[j2]), j2++, A2--;
    else if (h6[k2] === v2[w2]) m3[w2] = f2(a5[k2], p3[w2]), c4(s9, a5[j2], a5[k2]), k2--, w2++;
    else if (void 0 === y2 && (y2 = u4(v2, w2, A2), x2 = u4(h6, j2, k2)), y2.has(h6[j2])) if (y2.has(h6[k2])) {
      const e12 = x2.get(v2[w2]), t6 = void 0 !== e12 ? a5[e12] : null;
      if (null === t6) {
        const e13 = c4(s9, a5[j2]);
        f2(e13, p3[w2]), m3[w2] = e13;
      } else m3[w2] = f2(t6, p3[w2]), c4(s9, a5[j2], t6), a5[e12] = null;
      w2++;
    } else p2(a5[k2]), k2--;
    else p2(a5[j2]), j2++;
    for (; w2 <= A2; ) {
      const e12 = c4(s9, m3[A2 + 1]);
      f2(e12, p3[w2]), m3[w2++] = e12;
    }
    for (; j2 <= k2; ) {
      const e12 = a5[j2++];
      null !== e12 && p2(e12);
    }
    return this.ut = v2, a4(s9, m3), T;
  }
});

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/live.js
var l6 = e6(class extends i4 {
  constructor(r8) {
    if (super(r8), r8.type !== t4.PROPERTY && r8.type !== t4.ATTRIBUTE && r8.type !== t4.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!e7(r8)) throw Error("`live` bindings can only contain a single expression");
  }
  render(r8) {
    return r8;
  }
  update(i5, [t5]) {
    if (t5 === T || t5 === A) return t5;
    const o13 = i5.element, l10 = i5.name;
    if (i5.type === t4.PROPERTY) {
      if (t5 === o13[l10]) return T;
    } else if (i5.type === t4.BOOLEAN_ATTRIBUTE) {
      if (!!t5 === o13.hasAttribute(l10)) return T;
    } else if (i5.type === t4.ATTRIBUTE && o13.getAttribute(l10) === t5 + "") return T;
    return a4(i5), t5;
  }
});

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/async-directive.js
var s8 = (i5, t5) => {
  var e12, o13;
  const r8 = i5._$AN;
  if (void 0 === r8) return false;
  for (const i6 of r8) null === (o13 = (e12 = i6)._$AO) || void 0 === o13 || o13.call(e12, t5, false), s8(i6, t5);
  return true;
};
var o7 = (i5) => {
  let t5, e12;
  do {
    if (void 0 === (t5 = i5._$AM)) break;
    e12 = t5._$AN, e12.delete(i5), i5 = t5;
  } while (0 === (null == e12 ? void 0 : e12.size));
};
var r7 = (i5) => {
  for (let t5; t5 = i5._$AM; i5 = t5) {
    let e12 = t5._$AN;
    if (void 0 === e12) t5._$AN = e12 = /* @__PURE__ */ new Set();
    else if (e12.has(i5)) break;
    e12.add(i5), l7(t5);
  }
};
function n7(i5) {
  void 0 !== this._$AN ? (o7(this), this._$AM = i5, r7(this)) : this._$AM = i5;
}
function h4(i5, t5 = false, e12 = 0) {
  const r8 = this._$AH, n12 = this._$AN;
  if (void 0 !== n12 && 0 !== n12.size) if (t5) if (Array.isArray(r8)) for (let i6 = e12; i6 < r8.length; i6++) s8(r8[i6], false), o7(r8[i6]);
  else null != r8 && (s8(r8, false), o7(r8));
  else s8(this, i5);
}
var l7 = (i5) => {
  var t5, s9, o13, r8;
  i5.type == t4.CHILD && (null !== (t5 = (o13 = i5)._$AP) && void 0 !== t5 || (o13._$AP = h4), null !== (s9 = (r8 = i5)._$AQ) && void 0 !== s9 || (r8._$AQ = n7));
};
var c6 = class extends i4 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i5, t5, e12) {
    super._$AT(i5, t5, e12), r7(this), this.isConnected = i5._$AU;
  }
  _$AO(i5, t5 = true) {
    var e12, r8;
    i5 !== this.isConnected && (this.isConnected = i5, i5 ? null === (e12 = this.reconnected) || void 0 === e12 || e12.call(this) : null === (r8 = this.disconnected) || void 0 === r8 || r8.call(this)), t5 && (s8(this, i5), o7(this));
  }
  setValue(t5) {
    if (e7(this._$Ct)) this._$Ct._$AI(t5, this);
    else {
      const i5 = [...this._$Ct._$AH];
      i5[this._$Ci] = t5, this._$Ct._$AI(i5, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/ref.js
var e8 = () => new o8();
var o8 = class {
};
var h5 = /* @__PURE__ */ new WeakMap();
var n8 = e6(class extends c6 {
  render(t5) {
    return A;
  }
  update(t5, [s9]) {
    var e12;
    const o13 = s9 !== this.G;
    return o13 && void 0 !== this.G && this.ot(void 0), (o13 || this.rt !== this.lt) && (this.G = s9, this.dt = null === (e12 = t5.options) || void 0 === e12 ? void 0 : e12.host, this.ot(this.lt = t5.element)), A;
  }
  ot(i5) {
    var t5;
    if ("function" == typeof this.G) {
      const s9 = null !== (t5 = this.dt) && void 0 !== t5 ? t5 : globalThis;
      let e12 = h5.get(s9);
      void 0 === e12 && (e12 = /* @__PURE__ */ new WeakMap(), h5.set(s9, e12)), void 0 !== e12.get(this.G) && this.G.call(this.dt, void 0), e12.set(this.G, i5), void 0 !== i5 && this.G.call(this.dt, i5);
    } else this.G.value = i5;
  }
  get rt() {
    var i5, t5, s9;
    return "function" == typeof this.G ? null === (t5 = h5.get(null !== (i5 = this.dt) && void 0 !== i5 ? i5 : globalThis)) || void 0 === t5 ? void 0 : t5.get(this.G) : null === (s9 = this.G) || void 0 === s9 ? void 0 : s9.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/class-map.js
var o9 = e6(class extends i4 {
  constructor(t5) {
    var i5;
    if (super(t5), t5.type !== t4.ATTRIBUTE || "class" !== t5.name || (null === (i5 = t5.strings) || void 0 === i5 ? void 0 : i5.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return " " + Object.keys(t5).filter((i5) => t5[i5]).join(" ") + " ";
  }
  update(i5, [s9]) {
    var r8, o13;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== i5.strings && (this.nt = new Set(i5.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
      for (const t5 in s9) s9[t5] && !(null === (r8 = this.nt) || void 0 === r8 ? void 0 : r8.has(t5)) && this.it.add(t5);
      return this.render(s9);
    }
    const e12 = i5.element.classList;
    this.it.forEach((t5) => {
      t5 in s9 || (e12.remove(t5), this.it.delete(t5));
    });
    for (const t5 in s9) {
      const i6 = !!s9[t5];
      i6 === this.it.has(t5) || (null === (o13 = this.nt) || void 0 === o13 ? void 0 : o13.has(t5)) || (i6 ? (e12.add(t5), this.it.add(t5)) : (e12.remove(t5), this.it.delete(t5)));
    }
    return T;
  }
});

// node_modules/.pnpm/hotkeys-js@3.10.2/node_modules/hotkeys-js/dist/hotkeys.esm.js
var isff = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function addEvent(object, event, method, useCapture) {
  if (object.addEventListener) {
    object.addEventListener(event, method, useCapture);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), function() {
      method(window.event);
    });
  }
}
function getMods(modifier, key) {
  var mods = key.slice(0, key.length - 1);
  for (var i5 = 0; i5 < mods.length; i5++) {
    mods[i5] = modifier[mods[i5].toLowerCase()];
  }
  return mods;
}
function getKeys(key) {
  if (typeof key !== "string") key = "";
  key = key.replace(/\s/g, "");
  var keys = key.split(",");
  var index = keys.lastIndexOf("");
  for (; index >= 0; ) {
    keys[index - 1] += ",";
    keys.splice(index, 1);
    index = keys.lastIndexOf("");
  }
  return keys;
}
function compareArray(a1, a22) {
  var arr1 = a1.length >= a22.length ? a1 : a22;
  var arr2 = a1.length >= a22.length ? a22 : a1;
  var isIndex = true;
  for (var i5 = 0; i5 < arr1.length; i5++) {
    if (arr2.indexOf(arr1[i5]) === -1) isIndex = false;
  }
  return isIndex;
}
var _keyMap = {
  backspace: 8,
  "\u232B": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "\u21A9": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "\u21EA": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": isff ? 173 : 189,
  "=": isff ? 61 : 187,
  ";": isff ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
};
var _modifier = {
  // shiftKey
  "\u21E7": 16,
  shift: 16,
  // altKey
  "\u2325": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "\u2303": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "\u2318": 91,
  cmd: 91,
  command: 91
};
var modifierMap = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
var _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
var _handlers = {};
for (k2 = 1; k2 < 20; k2++) {
  _keyMap["f".concat(k2)] = 111 + k2;
}
var k2;
var _downKeys = [];
var winListendFocus = false;
var _scope = "all";
var elementHasBindEvent = [];
var code = function code2(x2) {
  return _keyMap[x2.toLowerCase()] || _modifier[x2.toLowerCase()] || x2.toUpperCase().charCodeAt(0);
};
var getKey = function getKey2(x2) {
  return Object.keys(_keyMap).find(function(k2) {
    return _keyMap[k2] === x2;
  });
};
var getModifier = function getModifier2(x2) {
  return Object.keys(_modifier).find(function(k2) {
    return _modifier[k2] === x2;
  });
};
function setScope(scope) {
  _scope = scope || "all";
}
function getScope() {
  return _scope || "all";
}
function getPressedKeyCodes() {
  return _downKeys.slice(0);
}
function getPressedKeyString() {
  return _downKeys.map(function(c7) {
    return getKey(c7) || getModifier(c7) || String.fromCharCode(c7);
  });
}
function filter(event) {
  var target = event.target || event.srcElement;
  var tagName = target.tagName;
  var flag = true;
  if (target.isContentEditable || (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") && !target.readOnly) {
    flag = false;
  }
  return flag;
}
function isPressed(keyCode) {
  if (typeof keyCode === "string") {
    keyCode = code(keyCode);
  }
  return _downKeys.indexOf(keyCode) !== -1;
}
function deleteScope(scope, newScope) {
  var handlers;
  var i5;
  if (!scope) scope = getScope();
  for (var key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];
      for (i5 = 0; i5 < handlers.length; ) {
        if (handlers[i5].scope === scope) handlers.splice(i5, 1);
        else i5++;
      }
    }
  }
  if (getScope() === scope) setScope(newScope || "all");
}
function clearModifier(event) {
  var key = event.keyCode || event.which || event.charCode;
  var i5 = _downKeys.indexOf(key);
  if (i5 >= 0) {
    _downKeys.splice(i5, 1);
  }
  if (event.key && event.key.toLowerCase() === "meta") {
    _downKeys.splice(0, _downKeys.length);
  }
  if (key === 93 || key === 224) key = 91;
  if (key in _mods) {
    _mods[key] = false;
    for (var k2 in _modifier) {
      if (_modifier[k2] === key) hotkeys[k2] = false;
    }
  }
}
function unbind(keysInfo) {
  if (typeof keysInfo === "undefined") {
    Object.keys(_handlers).forEach(function(key) {
      return delete _handlers[key];
    });
  } else if (Array.isArray(keysInfo)) {
    keysInfo.forEach(function(info) {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === "object") {
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === "string") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var scope = args[0], method = args[1];
    if (typeof scope === "function") {
      method = scope;
      scope = "";
    }
    eachUnbind({
      key: keysInfo,
      scope,
      method,
      splitKey: "+"
    });
  }
}
var eachUnbind = function eachUnbind2(_ref) {
  var key = _ref.key, scope = _ref.scope, method = _ref.method, _ref$splitKey = _ref.splitKey, splitKey = _ref$splitKey === void 0 ? "+" : _ref$splitKey;
  var multipleKeys = getKeys(key);
  multipleKeys.forEach(function(originKey) {
    var unbindKeys = originKey.split(splitKey);
    var len = unbindKeys.length;
    var lastKey = unbindKeys[len - 1];
    var keyCode = lastKey === "*" ? "*" : code(lastKey);
    if (!_handlers[keyCode]) return;
    if (!scope) scope = getScope();
    var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    _handlers[keyCode] = _handlers[keyCode].filter(function(record) {
      var isMatchingMethod = method ? record.method === method : true;
      return !(isMatchingMethod && record.scope === scope && compareArray(record.mods, mods));
    });
  });
};
function eventHandler(event, handler, scope, element) {
  if (handler.element !== element) {
    return;
  }
  var modifiersMatch;
  if (handler.scope === scope || handler.scope === "all") {
    modifiersMatch = handler.mods.length > 0;
    for (var y2 in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y2)) {
        if (!_mods[y2] && handler.mods.indexOf(+y2) > -1 || _mods[y2] && handler.mods.indexOf(+y2) === -1) {
          modifiersMatch = false;
        }
      }
    }
    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === "*") {
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();
        else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
}
function dispatch(event, element) {
  var asterisk = _handlers["*"];
  var key = event.keyCode || event.which || event.charCode;
  if (!hotkeys.filter.call(this, event)) return;
  if (key === 93 || key === 224) key = 91;
  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(keyName) {
    var keyNum = modifierMap[keyName];
    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === "metaKey" && event[keyName] && _downKeys.length === 3) {
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  if (key in _mods) {
    _mods[key] = true;
    for (var k2 in _modifier) {
      if (_modifier[k2] === key) hotkeys[k2] = true;
    }
    if (!asterisk) return;
  }
  for (var e12 in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e12)) {
      _mods[e12] = event[modifierMap[e12]];
    }
  }
  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState("AltGraph")) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }
    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }
    _mods[17] = true;
    _mods[18] = true;
  }
  var scope = getScope();
  if (asterisk) {
    for (var i5 = 0; i5 < asterisk.length; i5++) {
      if (asterisk[i5].scope === scope && (event.type === "keydown" && asterisk[i5].keydown || event.type === "keyup" && asterisk[i5].keyup)) {
        eventHandler(event, asterisk[i5], scope, element);
      }
    }
  }
  if (!(key in _handlers)) return;
  for (var _i = 0; _i < _handlers[key].length; _i++) {
    if (event.type === "keydown" && _handlers[key][_i].keydown || event.type === "keyup" && _handlers[key][_i].keyup) {
      if (_handlers[key][_i].key) {
        var record = _handlers[key][_i];
        var splitKey = record.splitKey;
        var keyShortcut = record.key.split(splitKey);
        var _downKeysCurrent = [];
        for (var a5 = 0; a5 < keyShortcut.length; a5++) {
          _downKeysCurrent.push(code(keyShortcut[a5]));
        }
        if (_downKeysCurrent.sort().join("") === _downKeys.sort().join("")) {
          eventHandler(event, record, scope, element);
        }
      }
    }
  }
}
function isElementBind(element) {
  return elementHasBindEvent.indexOf(element) > -1;
}
function hotkeys(key, option, method) {
  _downKeys = [];
  var keys = getKeys(key);
  var mods = [];
  var scope = "all";
  var element = document;
  var i5 = 0;
  var keyup = false;
  var keydown = true;
  var splitKey = "+";
  var capture = false;
  if (method === void 0 && typeof option === "function") {
    method = option;
  }
  if (Object.prototype.toString.call(option) === "[object Object]") {
    if (option.scope) scope = option.scope;
    if (option.element) element = option.element;
    if (option.keyup) keyup = option.keyup;
    if (option.keydown !== void 0) keydown = option.keydown;
    if (option.capture !== void 0) capture = option.capture;
    if (typeof option.splitKey === "string") splitKey = option.splitKey;
  }
  if (typeof option === "string") scope = option;
  for (; i5 < keys.length; i5++) {
    key = keys[i5].split(splitKey);
    mods = [];
    if (key.length > 1) mods = getMods(_modifier, key);
    key = key[key.length - 1];
    key = key === "*" ? "*" : code(key);
    if (!(key in _handlers)) _handlers[key] = [];
    _handlers[key].push({
      keyup,
      keydown,
      scope,
      mods,
      shortcut: keys[i5],
      method,
      key: keys[i5],
      splitKey,
      element
    });
  }
  if (typeof element !== "undefined" && !isElementBind(element) && window) {
    elementHasBindEvent.push(element);
    addEvent(element, "keydown", function(e12) {
      dispatch(e12, element);
    }, capture);
    if (!winListendFocus) {
      winListendFocus = true;
      addEvent(window, "focus", function() {
        _downKeys = [];
      }, capture);
    }
    addEvent(element, "keyup", function(e12) {
      dispatch(e12, element);
      clearModifier(e12);
    }, capture);
  }
}
function trigger(shortcut) {
  var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(_handlers).forEach(function(key) {
    var dataList = _handlers[key].filter(function(item) {
      return item.scope === scope && item.shortcut === shortcut;
    });
    dataList.forEach(function(data) {
      if (data && data.method) {
        data.method();
      }
    });
  });
}
var _api = {
  getPressedKeyString,
  setScope,
  getScope,
  deleteScope,
  getPressedKeyCodes,
  isPressed,
  filter,
  trigger,
  unbind,
  keyMap: _keyMap,
  modifier: _modifier,
  modifierMap
};
for (a5 in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a5)) {
    hotkeys[a5] = _api[a5];
  }
}
var a5;
if (typeof window !== "undefined") {
  _hotkeys = window.hotkeys;
  hotkeys.noConflict = function(deep) {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }
    return hotkeys;
  };
  window.hotkeys = hotkeys;
}
var _hotkeys;

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/base-styles.js
var componentReset = i`
  :host {
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  [hidden] {
    display: none !important;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    max-width: 1px !important;
    max-height: 1px !important;
    overflow: hidden;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;
var baseStyles = i`
  :host {
    --ninja-width: clamp(100px, 96vw, 640px);
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-rows: minmax(0, auto) minmax(0, 1fr);
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;

    /* Fallback for non-dvh browsers */
    max-height: calc(100vh - var(--ninja-top));
    max-height: calc(100dvh - var(--ninja-top));
  }

  .modal-body {
    height: 100%;
    display: grid;
    grid-template-rows: minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    flex-wrap: wrap;
    /* vertical gap when wrapping */
    row-gap: 8px;
    column-gap: 16px;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/ninja-header.js
var NinjaHeader = class extends BaseElement {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.placeholder = "";
    this.hideBreadcrumbs = false;
    this.breadcrumbHome = "Home";
    this.expanded = false;
    this.controls = "";
    this.searchLabel = "";
    this.activeDescendant = "";
    this.breadcrumbs = [];
    this._inputRef = e8();
  }
  /**
   * @override
   */
  render() {
    let breadcrumbs = "";
    if (!this.hideBreadcrumbs) {
      const itemTemplates = [];
      if (this.breadcrumbs) {
        for (const breadcrumb of this.breadcrumbs) {
          itemTemplates.push(
            x`<button
              type="button"
              @click=${() => this.selectParent(breadcrumb)}
              class="breadcrumb"
            >
              ${breadcrumb}
            </button>`
          );
        }
      }
      breadcrumbs = x`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${() => this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${itemTemplates}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this._close}>
          Cancel
        </button>
      </div>`;
    }
    return x`
      ${breadcrumbs}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${n8(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
          aria-labelledby="search-label"
          aria-expanded="${this.expanded}"
          aria-controls="${this.controls} breadcrumb-list"
          aria-autocomplete="list"
          aria-activedescendant="${this.activeDescendant}"
          role="combobox"
        />

        <div class="visually-hidden">
          <slot name="search-label" id="search-label">
            <span>${this.searchLabel}</span>
          </slot>
        </div>
      </div>
    `;
  }
  /**
   * @param {string} value
   */
  setSearch(value) {
    if (this._inputRef.value) {
      this._inputRef.value.value = value;
    }
  }
  // This is kinda hacky, but its how we tell it to close us.
  dispatchEscKey() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
      keyCode: 27,
      which: 27,
      code: "Escape",
      key: "Escape",
      altKey: false,
      metaKey: false,
      ctrlKey: false,
      shiftKey: false,
      bubbles: true,
      composed: true,
      cancelable: false
    }));
  }
  focusSearch() {
    requestAnimationFrame(() => {
      if (this._inputRef && this._inputRef.value) {
        this._inputRef.value.focus();
      }
    });
  }
  /**
   * @private
   * @param {Event} event
   */
  _handleInput(event) {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { search: input.value },
          bubbles: true,
          composed: true
        })
      );
    }
  }
  /**
   * @private
   * @param {string} [breadcrumb]
   */
  selectParent(breadcrumb) {
    this.dispatchEvent(
      new CustomEvent("setParent", {
        detail: { parent: breadcrumb },
        bubbles: true,
        composed: true
      })
    );
  }
  /**
   * @override
   */
  firstUpdated() {
    this.focusSearch();
  }
  _close() {
    this.dispatchEvent(
      new CustomEvent("close", { bubbles: true, composed: true })
    );
  }
};
/** @override */
__publicField(NinjaHeader, "baseName", "ninja-header");
/** @override */
__publicField(NinjaHeader, "styles", [
  componentReset,
  i`
      :host {
        flex: 1;
        position: relative;
      }
      .search {
        padding: 1.25em;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 0px;
        border: none;
        appearance: none;
        font-size: 1.125em;
        background: transparent;
        caret-color: var(--ninja-accent-color);
        color: var(--ninja-text-color);
        outline: transparent;
        font-family: var(--ninja-font-family);
      }
      .search::placeholder {
        color: var(--ninja-placeholder-color);
      }
      .breadcrumb-list {
        padding: 1em 1em 0 1em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        flex: initial;
      }

      .breadcrumb {
        background: var(--ninja-secondary-background-color);
        text-align: center;
        line-height: 1.2em;
        border-radius: var(--ninja-key-border-radius);
        border: 0;
        cursor: pointer;
        padding: 0.4em 0.6em;
        color: var(--ninja-secondary-text-color);
        margin-right: 0.5em;
        outline: transparent;
        font-family: var(--ninja-font-family);
      }

      .breadcrumb:focus-visible {
        background-color: red;
      }

      .breadcrumb:last-child {
        margin-inline-start: auto;
      }

      .breadcrumb--close {
        color: var(--ninja-accent-color);
        background-color: transparent;
        text-decoration: underline;
      }

      .search-wrapper {
        display: flex;
        border-bottom: var(--ninja-separate-border);
      }
    `
]);
/**
 * @override
 */
__publicField(NinjaHeader, "properties", {
  placeholder: {},
  hideBreadcrumbs: { type: Boolean },
  breadcrumbHome: {},
  expanded: { type: Boolean },
  controls: {},
  searchLabel: {},
  activeDescendant: {},
  breadcrumbs: { type: Array }
});

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/unsafe-html.js
var e9 = class extends i4 {
  constructor(i5) {
    if (super(i5), this.et = A, i5.type !== t4.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r8) {
    if (r8 === A || null == r8) return this.ft = void 0, this.et = r8;
    if (r8 === T) return r8;
    if ("string" != typeof r8) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r8 === this.et) return this.ft;
    this.et = r8;
    const s9 = [r8];
    return s9.raw = s9, this.ft = { _$litType$: this.constructor.resultType, strings: s9, values: [] };
  }
};
e9.directiveName = "unsafeHTML", e9.resultType = 1;
var o10 = e6(e9);

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/join.js
function* o11(o13, t5) {
  const f3 = "function" == typeof t5;
  if (void 0 !== o13) {
    let i5 = -1;
    for (const n12 of o13) i5 > -1 && (yield f3 ? t5(i5) : t5), i5++, yield n12;
  }
}

// node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c7 = arguments.length, r8 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i5 = decorators.length - 1; i5 >= 0; i5--) if (d4 = decorators[i5]) r8 = (c7 < 3 ? d4(r8) : c7 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c7 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}

// node_modules/.pnpm/@lit+reactive-element@1.6.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var e10 = (e12) => (n12) => "function" == typeof n12 ? ((e13, n13) => (customElements.define(e13, n13), n13))(e12, n12) : ((e13, n13) => {
  const { kind: t5, elements: s9 } = n13;
  return { kind: t5, elements: s9, finisher(n14) {
    customElements.define(e13, n14);
  } };
})(e12, n12);

// node_modules/.pnpm/@lit+reactive-element@1.6.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n10;
var e11 = null != (null === (n10 = window.HTMLSlotElement) || void 0 === n10 ? void 0 : n10.prototype.assignedElements) ? (o13, n12) => o13.assignedElements(n12) : (o13, n12) => o13.assignedNodes(n12).filter((o14) => o14.nodeType === Node.ELEMENT_NODE);

// node_modules/.pnpm/@material+mwc-icon@0.25.3/node_modules/@material/mwc-icon/mwc-icon-host.css.js
var styles = i`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

// node_modules/.pnpm/@material+mwc-icon@0.25.3/node_modules/@material/mwc-icon/mwc-icon.js
var Icon = class Icon2 extends s4 {
  /** @soyTemplate */
  render() {
    return x`<span><slot></slot></span>`;
  }
};
Icon.styles = [styles];
Icon = __decorate([
  e10("mwc-icon")
], Icon);

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/when.js
function n11(n12, o13, r8) {
  return n12 ? o13() : null == r8 ? void 0 : r8();
}

// node_modules/.pnpm/lit-html@2.8.0/node_modules/lit-html/directives/if-defined.js
var l9 = (l10) => null != l10 ? l10 : A;

// node_modules/.pnpm/fzy.js@0.4.1/node_modules/fzy.js/index.js
var SCORE_MIN = -Infinity;
var SCORE_GAP_LEADING = -5e-3;
var SCORE_GAP_TRAILING = -5e-3;
var SCORE_GAP_INNER = -0.01;
var SCORE_MATCH_CONSECUTIVE = 1;
var SCORE_MATCH_SLASH = 0.9;
var SCORE_MATCH_WORD = 0.8;
var SCORE_MATCH_CAPITAL = 0.7;
var SCORE_MATCH_DOT = 0.6;
function islower(s9) {
  return s9.toLowerCase() === s9;
}
function isupper(s9) {
  return s9.toUpperCase() === s9;
}
function precompute_bonus(haystack) {
  var m3 = haystack.length;
  var match_bonus = new Array(m3);
  var last_ch = "/";
  for (var i5 = 0; i5 < m3; i5++) {
    var ch = haystack[i5];
    if (last_ch === "/") {
      match_bonus[i5] = SCORE_MATCH_SLASH;
    } else if (last_ch === "-" || last_ch === "_" || last_ch === " ") {
      match_bonus[i5] = SCORE_MATCH_WORD;
    } else if (last_ch === ".") {
      match_bonus[i5] = SCORE_MATCH_DOT;
    } else if (islower(last_ch) && isupper(ch)) {
      match_bonus[i5] = SCORE_MATCH_CAPITAL;
    } else {
      match_bonus[i5] = 0;
    }
    last_ch = ch;
  }
  return match_bonus;
}
function compute(needle, haystack, D2, M2) {
  var n12 = needle.length;
  var m3 = haystack.length;
  var lower_needle = needle.toLowerCase();
  var lower_haystack = haystack.toLowerCase();
  var match_bonus = precompute_bonus(haystack, match_bonus);
  for (var i5 = 0; i5 < n12; i5++) {
    D2[i5] = new Array(m3);
    M2[i5] = new Array(m3);
    var prev_score = SCORE_MIN;
    var gap_score = i5 === n12 - 1 ? SCORE_GAP_TRAILING : SCORE_GAP_INNER;
    for (var j2 = 0; j2 < m3; j2++) {
      if (lower_needle[i5] === lower_haystack[j2]) {
        var score = SCORE_MIN;
        if (!i5) {
          score = j2 * SCORE_GAP_LEADING + match_bonus[j2];
        } else if (j2) {
          score = Math.max(
            M2[i5 - 1][j2 - 1] + match_bonus[j2],
            /* consecutive match, doesn't stack with match_bonus */
            D2[i5 - 1][j2 - 1] + SCORE_MATCH_CONSECUTIVE
          );
        }
        D2[i5][j2] = score;
        M2[i5][j2] = prev_score = Math.max(score, prev_score + gap_score);
      } else {
        D2[i5][j2] = SCORE_MIN;
        M2[i5][j2] = prev_score = prev_score + gap_score;
      }
    }
  }
}
function positions(needle, haystack) {
  var n12 = needle.length;
  var m3 = haystack.length;
  var positions2 = new Array(n12);
  if (!n12 || !m3)
    return positions2;
  if (n12 === m3) {
    for (var i5 = 0; i5 < n12; i5++)
      positions2[i5] = i5;
    return positions2;
  }
  if (m3 > 1024) {
    return positions2;
  }
  var D2 = new Array(n12);
  var M2 = new Array(n12);
  compute(needle, haystack, D2, M2);
  var match_required = false;
  for (var i5 = n12 - 1, j2 = m3 - 1; i5 >= 0; i5--) {
    for (; j2 >= 0; j2--) {
      if (D2[i5][j2] !== SCORE_MIN && (match_required || D2[i5][j2] === M2[i5][j2])) {
        match_required = i5 && j2 && M2[i5][j2] === D2[i5 - 1][j2 - 1] + SCORE_MATCH_CONSECUTIVE;
        positions2[i5] = j2--;
        break;
      }
    }
  }
  return positions2;
}
function hasMatch(needle, haystack) {
  needle = needle.toLowerCase();
  haystack = haystack.toLowerCase();
  var l10 = needle.length;
  for (var i5 = 0, j2 = 0; i5 < l10; i5 += 1) {
    j2 = haystack.indexOf(needle[i5], j2) + 1;
    if (j2 === 0) return false;
  }
  return true;
}

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/internal/escape-string-regexp.js
function escapeStringRegexp(str) {
  return new RegExp(
    str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"),
    "gi"
  );
}

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/internal/fuzzy-highlight.js
function renderRegexHighlight(query, s9, matchRender) {
  if (!query.trim()) return s9;
  const queryRegexp = new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))" + escapeStringRegexp(query).source + "+", "g");
  if (typeof matchRender === "function") {
    return s9.replaceAll(queryRegexp, matchRender);
  }
  return s9.replaceAll(queryRegexp, matchRender);
}
function renderFuzzyHighlight(query, s9, matchRender = (str) => str) {
  if (!s9) return "";
  if (!query) return s9;
  const splitBySpaces = query.split(/\s+/);
  const hasMatch3 = splitBySpaces.some((word) => hasMatch(word, s9));
  if (!hasMatch3) return s9;
  const stringAry = s9.split("");
  let positions2 = [];
  [query, ...splitBySpaces].forEach((word) => {
    if (!hasMatch(word, s9)) return;
    positions2 = positions2.concat(positions(word, s9));
  });
  positions2 = [...new Set(positions2)].sort((a5, b2) => a5 - b2);
  const finalStrArray = [];
  for (let i5 = 0; i5 < stringAry.length; i5++) {
    if (!positions2.includes(i5)) {
      finalStrArray.push(stringAry[i5]);
      continue;
    }
    let endPos = findEndPosition(i5, positions2);
    if (endPos == null) continue;
    let finalWord = "";
    finalWord = matchRender(stringAry.slice(i5, endPos + 1).join(""));
    finalStrArray.push(finalWord);
    i5 = endPos;
  }
  return finalStrArray.join("");
}
function findEndPosition(startPosition, positions2) {
  let startIndex = positions2.findIndex((num) => num === startPosition);
  let endPosition = null;
  if (startIndex === -1) return null;
  for (let i5 = startIndex; i5 < positions2.length; i5++) {
    endPosition = positions2[i5];
    for (let j2 = i5 + 1; j2 < positions2.length; j2++) {
      let nextPosition = positions2[j2];
      if (nextPosition == null) return endPosition;
      if (nextPosition !== endPosition + 1) {
        return endPosition;
      }
      endPosition = positions2[j2];
    }
  }
  return endPosition;
}

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/ninja-action.js
var NinjaAction = class extends BaseElement {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.action = {
      title: ""
    };
    this.selected = false;
    this.hotKeysJoinedView = true;
    this.searchQuery = "";
    this.searchType = "regex";
    this.highlightMatches = false;
    this.__regexMatchRender = `<mark part="ninja-action__highlight">$&</mark>`;
    this.__fuzzyMatchRender = (str) => `<mark part="ninja-action__highlight">${str}</mark>`;
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-selected", "false");
    this.addEventListener("click", this.click);
  }
  /**
   * Scroll to show element
   */
  ensureInView() {
    requestAnimationFrame(() => this.scrollIntoView({ block: "nearest" }));
  }
  /**
   * @override
   */
  click() {
    this.dispatchEvent(
      new CustomEvent("actionsSelected", {
        detail: this.action,
        bubbles: true,
        composed: true
      })
    );
    const anchor = this.shadowRoot?.querySelector("a");
    if (anchor) {
      anchor.click();
    }
  }
  forceClick() {
    const anchor = this.shadowRoot?.querySelector("a");
    if (anchor) {
      anchor.click();
    }
  }
  /**
   * @override
   * @param {Map<string, unknown>} changedProperties
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has("selected")) {
      this.setAttribute("aria-selected", "true");
      if (this.selected) {
        this.ensureInView();
        this.setAttribute("aria-selected", "true");
      }
    }
  }
  /**
   * @override
   */
  render() {
    const classes = {
      selected: this.selected,
      "ninja-action": true
    };
    if (this.action.href) {
      return this.renderAsLink(classes);
    }
    return x`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected ? "ninja-selected" : ""}"
        class=${o9(classes)}
      >
        ${this.renderBody()}
      </div>
    `;
  }
  /** @param {Record<string, boolean>} classes */
  renderAsLink(classes) {
    const attributes = this.action.attributes || {};
    const {
      download,
      hreflang,
      ping,
      referrerpolicy,
      rel,
      target,
      type
    } = attributes;
    return x`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected ? "ninja-selected" : ""}"
        class=${o9(classes)}
        href=${this.action.href}
        download=${l9(download)}
        hreflang=${l9(hreflang)}
        ping=${l9(ping)}
        referrerpolicy=${l9(referrerpolicy)}
        rel=${l9(rel)}
        target=${l9(target)}
        type=${l9(type)}
      >
        ${this.renderBody()}
      </a>
    `;
  }
  /**
   * Escapes user content to proper HTML entities
   * @param {string} str
   */
  escapeString(str) {
    const ctor = (
      /** @type {typeof NinjaAction} */
      /** @type {unknown} */
      this.constructor
    );
    return str.replaceAll(/&/g, ctor.escapeMap["&"]).replaceAll(
      /[<>'"]/g,
      (tag) => {
        return ctor.escapeMap[tag] || tag;
      }
    );
  }
  /**
   * Unescapes user content to proper HTML entities
   * @param {string} str
   */
  encodeString(str) {
    const ctor = (
      /** @type {typeof NinjaAction} */
      /** @type {unknown} */
      this.constructor
    );
    return str.replaceAll(/&/g, `<span>${ctor.escapeMap["&"]}</span>`).replaceAll(
      /[<>'"]/g,
      (tag) => {
        return `<span>${ctor.escapeMap[tag] || tag}</span>`;
      }
    );
  }
  /**
   * @param {string} query
   * @param {string} s
   */
  renderMatch(query, s9) {
    const escapeString = this.escapeString(s9);
    const escapeQuery = this.escapeString(query);
    if (this.searchType === "regex") {
      return renderRegexHighlight(escapeQuery, escapeString, this.__regexMatchRender);
    }
    if (this.searchType === "fuzzy") {
      return renderFuzzyHighlight(escapeQuery, escapeString, this.__fuzzyMatchRender);
    }
    return "";
  }
  renderBody() {
    let icon;
    if (this.action.mdIcon) {
      icon = x`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`;
    } else if (this.action.icon) {
      icon = o10(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `);
    }
    let { title, content } = this.action;
    if (title && this.highlightMatches) {
      title = this.renderMatch(this.searchQuery, title);
    }
    if (content && this.highlightMatches) {
      content = this.renderMatch(this.searchQuery, content);
    }
    return x`
        <div part="ninja-action__header" class="ninja-action__header">
          ${icon}
          <div part="ninja-action__title" class="ninja-title">${o10(title)}</div>
          ${this.renderHotkey()}
        </div>

        ${n11(
      content,
      () => x`<small part="ninja-action__content" class="ninja-action__content">${o10(content)}</small>`
    )}
    `;
  }
  renderHotkey() {
    let hotkey;
    if (this.action.hotkey) {
      if (this.hotKeysJoinedView) {
        hotkey = this.action.hotkey.split(",").map((hotkeys3) => {
          const keys = hotkeys3.split("+");
          const joinedKeys = x`${o11(
            keys.map((key) => x`<kbd part="ninja-hotkey">${key}</kbd>`),
            "+"
          )}`;
          return x`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${joinedKeys}
          </div>`;
        });
      } else {
        hotkey = this.action.hotkey.split(",").map((hotkeys3) => {
          const keys = hotkeys3.split("+");
          const keyElements = keys.map(
            (key) => x`<kbd part="ninja-hotkey" class="ninja-hotkey">${key}</kbd>`
          );
          return x`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${keyElements}</kbd>`;
        });
      }
    }
    return hotkey;
  }
};
/**
 * @override
 */
__publicField(NinjaAction, "baseName", "ninja-action");
/**
 * @override
 */
__publicField(NinjaAction, "styles", [
  componentReset,
  i`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: var(--ninja-accent-color);
        padding: 1px 3px;
      }

      .ninja-action {
        padding: 0.75em 8px;
        display: flex;
        flex-direction: column;
        border-inline-end: 2px solid transparent;
        border-inline-start: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: transparent;
        transition: color 0s ease 0s;
        width: 100%;
        row-gap: 8px;
        text-decoration: none;
        color: currentColor;
      }

      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-inline-end: 2px solid var(--ninja-accent-color);
        border-inline-start: 2px solid var(--ninja-accent-color);
        outline: transparent;
      }

      .ninja-action__header {
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: center;
      }

      .ninja-action__content {
        border-top: 1px solid gray;
        padding-top: 0.5em;
        font-size: 0.8em;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        /** This has surprisingly good browser support. */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }

      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        color: var(--ninja-icon-color);
        position: relative;
        margin-inline-end: 0.5em;
      }

      .ninja-title {
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .ninja-hotkeys {
        flex-shrink: 0;
        width: min-content;
        display: flex;
      }

      .ninja-hotkeys kbd {
        font-family: inherit;
      }
      .ninja-hotkey {
        background: var(--ninja-secondary-background-color);
        padding: 0.06em 0.25em;
        border-radius: var(--ninja-key-border-radius);
        text-transform: capitalize;
        color: var(--ninja-secondary-text-color);
        font-size: 0.75em;
        font-family: inherit;
      }

      .ninja-hotkey + .ninja-hotkey {
        margin-inline-end: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-inline-end: 1em;
      }
    `
]);
/**
 * @type {Record<string, string>}
 */
__publicField(NinjaAction, "escapeMap", {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
});
/**
 * @override
 */
__publicField(NinjaAction, "properties", {
  action: { type: Object },
  selected: { type: Boolean },
  hotKeysJoinedView: { type: Boolean },
  content: {},
  searchType: { attribute: "search-type" },
  highlightMatches: { type: Boolean, attribute: "highlight-matches" },
  searchQuery: { state: true, attribute: false }
});

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/ninja-footer.js
var footerHtml = x` <div part="modal-footer" class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`;

// node_modules/.pnpm/konnors-ninja-keys@1.13.4/node_modules/konnors-ninja-keys/src/ninja-keys.js
var hotkeys2 = hotkeys;
var NinjaKeys = class extends BaseElement {
  /**
   * @override
   */
  static get scopedElements() {
    return {
      "ninja-action": NinjaAction,
      "ninja-header": NinjaHeader
    };
  }
  /**
   * @constructor
   */
  constructor() {
    super();
    this._headerRef = e8();
    this.placeholder = "Type a command or search...";
    this.disableHotkeys = false;
    this.searchType = "regex";
    this.highlightMatches = false;
    this.searchLabel = "Search for actions";
    this.listboxLabel = "List of actions";
    this.hideBreadcrumbs = false;
    this.openHotkey = "cmd+k,ctrl+k";
    this.navigationUpHotkey = "up";
    this.navigationDownHotkey = "down";
    this.closeHotkey = "esc";
    this.goBackHotkey = "backspace";
    this.selectHotkey = "enter";
    this.hotKeysJoinedView = false;
    this.noAutoLoadMdIcons = false;
    this.data = [];
    this.__selected__ = null;
    this.visible = false;
    this._bump = true;
    this._actionMatches = [];
    this._search = "";
    this.currentRoot = void 0;
    this._flatData = [];
  }
  /**
   * Public methods
   */
  /**
   * Show a modal
   * @param {{ parent?: string }} [options={}]
   */
  open(options = {}) {
    this._bump = true;
    this.visible = true;
    const header = this._headerRef.value;
    requestAnimationFrame(() => {
      if (header) {
        header.focusSearch();
        header.expanded = true;
        header.controls = "actions-list";
      }
    });
    if (this._actionMatches.length > 0) {
      this._selected = this._actionMatches[0];
      const header2 = this._headerRef.value;
      if (header2 && this._selected && this._selected.id) {
        header2.activeDescendant = this._selected.id;
      }
    }
    this.setParent(options.parent);
  }
  /**
   * Close modal
   */
  close() {
    this._bump = false;
    this.visible = false;
    const header = this._headerRef.value;
    if (header) {
      header.expanded = false;
    }
  }
  /**
   * Navigate to group of actions
   * @param {string} [parent] - parent id of parent group/action
   */
  setParent(parent) {
    if (!parent) {
      this.currentRoot = void 0;
    } else {
      this.currentRoot = parent;
    }
    this._selected = void 0;
    this._search = "";
    this._headerRef.value?.setSearch("");
  }
  /**
   * @private
   */
  getBreadcrumbs() {
    const path = [];
    let parentAction = this._selected?.parent;
    if (parentAction) {
      path.push(parentAction);
      while (parentAction) {
        const action = this._flatData.find((a5) => a5.id === parentAction);
        if (action?.parent) {
          path.push(action.parent);
        }
        parentAction = action ? action.parent : void 0;
      }
    }
    return path.reverse();
  }
  /**
   * @returns {import('../types/index.js').Maybe<INinjaAction>}
   */
  get _selected() {
    return this.__selected__;
  }
  /**
   * @param {import('../types/index.js').Maybe<INinjaAction>} action
   */
  set _selected(action) {
    const header = this._headerRef.value;
    if (header && action && action.id) {
      header.activeDescendant = action.id;
    }
    const prevSelection = this.__selected__;
    this.__selected__ = action;
    this.requestUpdate("_selected", prevSelection);
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    if (!this.noAutoLoadMdIcons) {
      document.fonts.load("24px Material Icons", "apps").then(() => {
      });
    }
    this._registerInternalHotkeys();
  }
  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this._unregisterInternalHotkeys();
  }
  /**
   * @private
   * @param {INinjaAction[]} members
   * @param {string} [parent]
   * @returns {INinjaAction[]}
   */
  _flattern(members, parent) {
    let children = [];
    if (!members) {
      members = [];
    }
    return members.map((mem) => {
      const alreadyFlatternByUser = mem.children && mem.children.some((value) => {
        return typeof value == "string";
      });
      const m3 = { ...mem, parent: mem.parent || parent };
      if (alreadyFlatternByUser) {
        return m3;
      } else {
        if (m3.children && m3.children.length) {
          parent = mem.id;
          children = [...children, ...m3.children];
        }
        m3.children = m3.children ? m3.children.map((c7) => c7.id) : [];
        return m3;
      }
    }).concat(children.length ? this._flattern(children, parent) : children);
  }
  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  update(changedProperties) {
    if (changedProperties.has("data") && !this.disableHotkeys) {
      this._flatData = this._flattern(this.data);
      this._flatData.forEach((action) => {
        if (!action.hotkey) return;
        hotkeys2(action.hotkey, (event) => {
          event.preventDefault();
          if (action.handler) {
            action.handler(action, event, this._search);
          }
        });
      });
    }
    super.update(changedProperties);
  }
  /**
   * @param {Event} event
   * @return {Boolean}
   */
  shouldNotOpen(event) {
    const composedPath = event.composedPath();
    const disallowedTags = ["input", "textarea"];
    return composedPath.some((el) => {
      if (el?.getAttribute?.("contenteditable") === "true") {
        return true;
      }
      return disallowedTags.includes(el?.tagName?.toLowerCase());
    });
  }
  /**
   * @private
   */
  _registerInternalHotkeys() {
    if (this.openHotkey) {
      hotkeys2(this.openHotkey, (event) => {
        if (this.shouldNotOpen(event)) {
          return;
        }
        event.preventDefault();
        this.visible ? this.close() : this.open();
      });
    }
    if (this.selectHotkey) {
      hotkeys2(this.selectHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        this._actionSelected(this._actionMatches[this._selectedIndex], event);
      });
    }
    if (this.goBackHotkey) {
      hotkeys2(this.goBackHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        if (!this._search) {
          event.preventDefault();
          this._goBack();
        }
      });
    }
    if (this.navigationDownHotkey) {
      hotkeys2(this.navigationDownHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex >= this._actionMatches.length - 1) {
          this._selected = this._actionMatches[0];
        } else {
          this._selected = this._actionMatches[this._selectedIndex + 1];
        }
      });
    }
    if (this.navigationUpHotkey) {
      hotkeys2(this.navigationUpHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex === 0) {
          this._selected = this._actionMatches[this._actionMatches.length - 1];
        } else {
          this._selected = this._actionMatches[this._selectedIndex - 1];
        }
      });
    }
    if (this.closeHotkey) {
      hotkeys2(this.closeHotkey, (e12) => {
        if (!this.visible) {
          return;
        }
        e12.preventDefault();
        this.visible = false;
        this.close();
      });
    }
  }
  /**
   * @private
   */
  _unregisterInternalHotkeys() {
    if (this.openHotkey) {
      hotkeys2.unbind(this.openHotkey);
    }
    if (this.selectHotkey) {
      hotkeys2.unbind(this.selectHotkey);
    }
    if (this.goBackHotkey) {
      hotkeys2.unbind(this.goBackHotkey);
    }
    if (this.navigationDownHotkey) {
      hotkeys2.unbind(this.navigationDownHotkey);
    }
    if (this.navigationUpHotkey) {
      hotkeys2.unbind(this.navigationUpHotkey);
    }
    if (this.closeHotkey) {
      hotkeys2.unbind(this.closeHotkey);
    }
  }
  /**
   * @private
   * @param {INinjaAction} index
   * @param {MouseEvent} $event
   */
  _actionFocused(index, $event) {
    this._selected = index;
    const target = $event.target;
    target.ensureInView();
  }
  /** @private */
  _onTransitionEnd() {
    this._bump = false;
  }
  /**
   * @deprecated
   * This is a convenience function to align with the previous API.
   * Don't use this to pass to templates because I've found it create inconsistent behavior.
   * Use `this.getBreadcrumbs()` instead.
   */
  get breadcrumbs() {
    return this.getBreadcrumbs();
  }
  /**
   * @private
   */
  _goBack() {
    const breadcrumbs = this.getBreadcrumbs();
    if (breadcrumbs) {
      const parent = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : void 0;
      this.setParent(parent);
      return;
    }
  }
  /**
   * @returns {NinjaAction | null | undefined}
   */
  findActionElement(index = this._selectedIndex) {
    const id = this._actionMatches[index]?.id;
    if (id == null) return null;
    const query = "#ninja-action__" + id;
    return this.shadowRoot?.querySelector(query);
  }
  /**
   * @public
   * Escapes invalid string sequences when calling `new RegExp(string)`. This is used for `findMatches`.
   * @see {@link https://github.com/ssleptsov/ninja-keys/pull/33}
   * @param {string} str
   */
  stringToRegExp(str) {
    return escapeStringRegexp(str);
  }
  /**
   * Iterates over flatData to find a match. Override this if you want to implement your own matcher.
   * If you're using search from a different place and adding / removing results, just return
   * the flatData.
   * @param {Array<INinjaAction>} flatData
   */
  findMatches(flatData) {
    const searchRegex = this.stringToRegExp(this._search);
    const searchOptions = {
      searchRegex,
      searchString: this._search
    };
    return flatData.filter((action) => {
      if (this._search.trim() === "") {
        return action.parent === this.currentRoot && true;
      }
      const { matcher, title, keywords, content } = action;
      let isMatch = null;
      if (typeof matcher === "function") {
        isMatch = matcher(action, searchOptions);
      }
      if (isMatch == null && !this.searchType || this.searchType === "regex") {
        isMatch = Boolean(
          title && title.match(searchRegex) || keywords && keywords.match(searchRegex) || content && content.match(searchRegex)
        );
      }
      if (isMatch == null && this.searchType === "fuzzy") {
        const search = this._search;
        isMatch = Boolean(
          title && hasMatch2(search, title) || keywords && hasMatch2(search, keywords) || content && hasMatch2(search, content)
        );
      }
      if (isMatch == null) {
        isMatch = Boolean(isMatch);
      }
      if (!this.currentRoot && this._search) {
        return isMatch;
      }
      return action.parent === this.currentRoot && isMatch;
    });
  }
  /**
   * @override
   */
  render() {
    const classes = {
      bump: this._bump,
      "modal-content": true
    };
    const menuClasses = {
      visible: this.visible,
      modal: true
    };
    let sections;
    let actionMatches = this._flatData;
    actionMatches = this.findMatches(actionMatches);
    sections = actionMatches.reduce(
      (entryMap, e12) => entryMap.set(e12.section, [...entryMap.get(e12.section) || [], e12]),
      /* @__PURE__ */ new Map()
    );
    this._actionMatches = [...sections.values()].flat();
    if (this._actionMatches.length > 0 && this._selectedIndex === -1) {
      this._selected = this._actionMatches[0];
    }
    if (this._actionMatches.length === 0) {
      this._selected = void 0;
    }
    const actionsList = (actions) => x` ${c5(
      actions,
      (action) => action.id,
      (action) => x`<ninja-action
            id=${"ninja-action__" + action.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${l6(action.id === this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${l6(action.id === this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${(event) => {
        this._actionFocused(action, event);
      }}
            @actionsSelected=${(event) => this._actionSelected(event.detail, event)}
            .action=${action}
          ></ninja-action>`
    )}`;
    const itemTemplates = [];
    sections.forEach((actions, section) => {
      const header = section ? x`<div class="group-header">${section}</div>` : void 0;
      itemTemplates.push(x`${header}${actionsList(actions)}`);
    });
    return x`
      <div part="modal-overlay" @click=${this._overlayClick} class=${o9(menuClasses)}>
        <div part="modal-content" class=${o9(classes)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${n8(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${(event) => this.setParent(event.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div part="modal-body" class="modal-body">
            <div
              id="actions-list"
              class="actions-list"
              role="listbox"
              part="actions-list"
              aria-labelledby="listbox-label"
            >
              ${itemTemplates}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${footerHtml} </slot>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * @private
   * @returns {number}
   */
  get _selectedIndex() {
    if (!this._selected) {
      return -1;
    }
    return this._actionMatches.indexOf(this._selected);
  }
  /**
   * @private
   * @param {INinjaAction} [action]
   * @param {KeyboardEvent | CustomEvent<INinjaAction>} [event]
   */
  _actionSelected(action, event) {
    this.dispatchEvent(
      new CustomEvent("selected", {
        detail: { search: this._search, action },
        bubbles: true,
        composed: true
      })
    );
    if (!action) {
      return;
    }
    if (action.children && action.children?.length > 0) {
      this.currentRoot = action.id;
      this._search = "";
    }
    this._headerRef.value?.setSearch("");
    this._headerRef.value?.focusSearch();
    if (action.handler) {
      const result = action.handler(action, event, this._search);
      if (!result?.keepOpen) {
        this.close();
      }
    } else {
      this.findActionElement(this._selectedIndex)?.forceClick();
    }
    this._bump = true;
  }
  /**
   * @private
   * @param {CustomEvent<{search: string}>} event
   */
  async _handleInput(event) {
    this._search = event.detail.search;
    await this.updateComplete;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { search: this._search, actions: this._actionMatches },
        bubbles: true,
        composed: true
      })
    );
  }
  /**
   * @private
   * @param {Event} event
   */
  _overlayClick(event) {
    const target = event.target;
    if (target instanceof Element) {
      if (target?.classList.contains("modal")) {
        this.close();
      }
    }
  }
};
/**
 * @override
 */
__publicField(NinjaKeys, "baseName", "ninja-keys");
/**
 * @override
 */
__publicField(NinjaKeys, "styles", [componentReset, baseStyles]);
/**
 * @override
 */
__publicField(NinjaKeys, "properties", {
  placeholder: { type: String },
  disableHotkeys: { type: Boolean },
  searchType: { attribute: "search-type" },
  searchLabel: { attribute: "search-label" },
  listboxLabel: { attribute: "listbox-label" },
  hideBreadcrumbs: { type: Boolean },
  openHotkey: {},
  navigationUpHotkey: {},
  navigationDownHotkey: {},
  closeHotkey: {},
  goBackHotkey: {},
  selectHotkey: {},
  hotKeysJoinedView: { type: Boolean },
  noAutoLoadMdIcons: { type: Boolean },
  data: {
    type: Array,
    hasChanged() {
      return true;
    }
  },
  highlightMatches: {
    type: Boolean,
    reflect: true,
    attribute: "highlight-matches"
  },
  // State
  __selected__: { state: true },
  visible: { state: true },
  _bump: { state: true },
  _actionMatches: { state: true },
  _search: { state: true },
  currentRoot: { state: true },
  _flatData: { state: true }
});
function hasMatch2(query, str) {
  return [query, ...query.split(/\s+/)].some((q) => hasMatch(q, str));
}

// node_modules/.pnpm/@konnorr+bridgetown-quick-search@3.10.4/node_modules/@konnorr/bridgetown-quick-search/frontend/javascript/search_engine.js
var import_lunr = __toESM(require_lunr(), 1);

// node_modules/.pnpm/@konnorr+bridgetown-quick-search@3.10.4/node_modules/@konnorr/bridgetown-quick-search/frontend/javascript/html-utils.js
var escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var unescapeMap = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#39;": "'",
  "&quot;": '"'
};
function unescapeHTML(str) {
  return str.replaceAll(
    /&lt;|&gt;|&#39;|&quot;/g,
    (tag) => {
      return unescapeMap[tag] || tag;
    }
  ).replaceAll(/&amp;/g, "&");
}
function escapeHTML(str) {
  return str.replaceAll(/&/g, "&amp;").replaceAll(
    /<>'"/g,
    (tag) => {
      return escapeMap[tag] || tag;
    }
  );
}

// node_modules/.pnpm/@konnorr+bridgetown-quick-search@3.10.4/node_modules/@konnorr/bridgetown-quick-search/frontend/javascript/search_engine.js
var SearchEngine = class {
  static async fetchAndGenerateIndex(endpoint = this.endpoint) {
    const response = await fetch(endpoint);
    const searchIndex = await response.json();
    const searchEngine = new this();
    searchEngine.generateIndex(searchIndex);
    return {
      searchIndex,
      searchEngine
    };
  }
  async generateIndex(indexData) {
    this.index = (0, import_lunr.default)(function() {
      this.ref("id");
      this.field("id", { boost: 1e3 });
      this.field("title", { boost: 100 });
      this.field("categories", { boost: 10 });
      this.field("tags", { boost: 10 });
      this.field("url", { boost: 100 });
      this.field("content", { boost: 1 });
      indexData.forEach((item) => {
        if (item.content) {
          item.content = unescapeHTML(item.content);
          this.add(item);
        }
      });
    });
    this.indexData = indexData;
  }
  /**
   * @param {string} query
   * @param {number} [snippetLength=300]
   * @param {boolean} [highlight=true] - if true, will add `<mark>` around elements.
   */
  performSearch(query, snippetLength = 300, highlight = true) {
    if (highlight == null) {
      highlight = true;
    }
    if (this.index) {
      this.query = query;
      const hasQuery = query.trim().length > 0;
      const searchTokens = query.split(" ").map((term, index, arr) => `${term}${index === arr.length - 1 ? `* ${term}~1` : "~1"}`).join(" ");
      const matches = hasQuery ? this.index.search(`${query} ${searchTokens}`) : [];
      const hasResults = matches?.length > 0;
      if (hasResults) {
        return matches.map((result) => {
          const item = this.indexData.find((item2) => item2.id == result.ref);
          const contentPreview = this.previewTemplate(item.content, snippetLength, highlight);
          let titlePreview = this.previewTemplate(item.title, snippetLength, highlight);
          if (highlight === true) {
            titlePreview += `<!-- (${result.score}) -->`;
          }
          return {
            id: item.id.trim(),
            score: result.score,
            title: item.title.trim(),
            collection: item.collection,
            content: item.content.trim(),
            categories: item.categories,
            url: item.url.trim(),
            heading: titlePreview,
            preview: contentPreview
          };
        });
      } else {
        return [];
      }
    } else {
      throw new Error("Search index hasn't yet loaded. Run the generateIndex function");
    }
  }
  /**
   * @param {string} text
   * @param {number} [length=300]
   * @param {boolean} [highlight=true]
   */
  previewTemplate(text, length = 300, highlight = true) {
    if (length == null) {
      length = 300;
    }
    const padding = length / 2;
    let output;
    if (length) {
      const textToSearch = text.toLowerCase();
      const wordLocations = this.query.toLowerCase().split(" ").map((word) => {
        return textToSearch.indexOf(word);
      }).filter((location) => location != -1).sort((a5, b2) => {
        return a5 - b2;
      });
      if (wordLocations[1]) {
        length = Math.min(wordLocations[1] - wordLocations[0], length);
      }
      output = text.substr(Math.max(0, wordLocations[0] - padding), length + padding);
    } else {
      output = text;
    }
    if (!text.startsWith(output)) {
      output = "\u2026" + output;
    }
    if (!text.endsWith(output)) {
      output = output + "\u2026";
    }
    if (highlight) {
      output = escapeHTML(output);
      this.query.toLowerCase().split(" ").forEach((word) => {
        if (word != "") {
          output = output.replace(
            new RegExp(`(${word.replace(/[\.\*\+\(\)]/g, "")})`, "ig"),
            `<strong>$1</strong>`
          );
        }
      });
    }
    return output;
  }
};
__publicField(SearchEngine, "endpoint", "/bridgetown_quick_search/index.json");
var search_engine_default = SearchEngine;

// node_modules/.pnpm/@konnorr+bridgetown-quick-search@3.10.4/node_modules/@konnorr/bridgetown-quick-search/frontend/javascript/ninja-keys.js
var BridgetownNinjaKeys = class extends NinjaKeys {
  /**
   * @override
   */
  findMatches(flatData) {
    const matches = super.findMatches(flatData);
    this.results.forEach((result) => {
      if (matches.find((match) => match.id === result.id)) {
        return;
      }
      matches.push(result);
    });
    return matches;
  }
  constructor() {
    super();
    this.snippetLength = 142;
    this.alwaysShowResults = true;
    this.staticData = [];
    this.results = [];
    this.endpoint = "/bridgetown_quick_search/index.json";
    this.handleInput = () => {
      this.data = this.createData();
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    await this.fetchAndGenerateIndex();
  }
  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("endpoint")) {
      this.fetchAndGenerateIndex();
    }
    super.willUpdate(changedProperties);
  }
  /**
   * @override
   */
  open() {
    super.open();
    this.data = this.createData();
  }
  async fetchAndGenerateIndex() {
    const { searchEngine, searchIndex } = await search_engine_default.fetchAndGenerateIndex(this.endpoint);
    this.__searchEngine = searchEngine;
    this.__searchIndex = searchIndex;
    this.addEventListener("change", this.handleInput);
  }
  createData() {
    this.results = this.showResultsForQuery(this._search);
    return this.staticData.concat(this.results);
  }
  /**
   * @param {string} query
   * @param {number} [maxResults=100]
   */
  showResultsForQuery(query, maxResults = 100) {
    this.latestQuery = query;
    if (this.alwaysShowResults === true || query && query.length >= 1) {
      const results = this.__searchEngine.performSearch(query, this.snippetLength, false).slice(0, maxResults);
      const actions = [];
      if (results.length <= 0) {
        return [];
      }
      results.forEach((result) => {
        const action = this.transformResult(result);
        if (action) actions.push(action);
      });
      return actions;
    }
    return [];
  }
  /**
   * Override this for doing something with results.
   * @param {{
      id: string
      url: string
      content: string
      preview: string
      title: string
      heading: string
      categories: string
      collection: {name: string}
      score: number
   }} result
   */
  transformResult(result) {
    let {
      id,
      url,
      // content,
      preview,
      // snipped content
      // title,
      categories,
      heading,
      // snipped title
      collection
      // score
    } = result;
    if (url.endsWith(".json")) {
      return;
    }
    categories = categories.split(/[-_]/).map(capitalizeFirstLetter).join(" ");
    return {
      id,
      title: heading,
      section: collection.name,
      href: url,
      content: preview
    };
  }
};
__publicField(BridgetownNinjaKeys, "baseName", "bridgetown-ninja-keys");
__publicField(BridgetownNinjaKeys, "properties", Object.assign(NinjaKeys.properties, {
  snippetLength: { attribute: "snippet-length", type: Number },
  alwaysShowResults: { attribute: "always-show-results", reflect: true, type: Boolean },
  endpoint: { reflect: true },
  results: { state: true, type: Array },
  staticData: { state: true, type: Array }
}));
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export {
  BridgetownNinjaKeys
};
/*! Bundled license information:

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/ninja-keys-HX4INAWK.js.map
