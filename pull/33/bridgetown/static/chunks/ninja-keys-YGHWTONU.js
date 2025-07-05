import{a as Be,b as Fe}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-MSNQGCVG.js";import{a as B}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-OWTNDERZ.js";import{a as L,b as ae,c as le,d as ce}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-BEK7BHEX.js";import{b as Ct,c as oe,d as z,e as De,f as Pt,g as ze}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-2H2E3ILM.js";import{a as J,d as E,g as Q,h as ge,j as Rt}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-USE7JYVM.js";import{a as Pr,c as Lr,d as w}from"/light-pen/pull/33/bridgetown/static/chunks/chunk-KTEDY5JV.js";var Er=Pr((_r,wr)=>{(function(){var r=function(e){var t=new r.Builder;return t.pipeline.add(r.trimmer,r.stopWordFilter,r.stemmer),t.searchPipeline.add(r.stemmer),e.call(t,t),t.build()};r.version="2.3.9";r.utils={},r.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),r.utils.asString=function(e){return e==null?"":e.toString()},r.utils.clone=function(e){if(e==null)return e;for(var t=Object.create(null),n=Object.keys(e),i=0;i<n.length;i++){var s=n[i],o=e[s];if(Array.isArray(o)){t[s]=o.slice();continue}if(typeof o=="string"||typeof o=="number"||typeof o=="boolean"){t[s]=o;continue}throw new TypeError("clone is not deep and does not support nested objects")}return t},r.FieldRef=function(e,t,n){this.docRef=e,this.fieldName=t,this._stringValue=n},r.FieldRef.joiner="/",r.FieldRef.fromString=function(e){var t=e.indexOf(r.FieldRef.joiner);if(t===-1)throw"malformed field ref string";var n=e.slice(0,t),i=e.slice(t+1);return new r.FieldRef(i,n,e)},r.FieldRef.prototype.toString=function(){return this._stringValue==null&&(this._stringValue=this.fieldName+r.FieldRef.joiner+this.docRef),this._stringValue};r.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},r.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},r.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},r.Set.prototype.contains=function(e){return!!this.elements[e]},r.Set.prototype.intersect=function(e){var t,n,i,s=[];if(e===r.Set.complete)return this;if(e===r.Set.empty)return e;this.length<e.length?(t=this,n=e):(t=e,n=this),i=Object.keys(t.elements);for(var o=0;o<i.length;o++){var a=i[o];a in n.elements&&s.push(a)}return new r.Set(s)},r.Set.prototype.union=function(e){return e===r.Set.complete?r.Set.complete:e===r.Set.empty?this:new r.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},r.idf=function(e,t){var n=0;for(var i in e)i!="_index"&&(n+=Object.keys(e[i]).length);var s=(t-n+.5)/(n+.5);return Math.log(1+Math.abs(s))},r.Token=function(e,t){this.str=e||"",this.metadata=t||{}},r.Token.prototype.toString=function(){return this.str},r.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},r.Token.prototype.clone=function(e){return e=e||function(t){return t},new r.Token(e(this.str,this.metadata),this.metadata)};r.tokenizer=function(e,t){if(e==null||e==null)return[];if(Array.isArray(e))return e.map(function(d){return new r.Token(r.utils.asString(d).toLowerCase(),r.utils.clone(t))});for(var n=e.toString().toLowerCase(),i=n.length,s=[],o=0,a=0;o<=i;o++){var l=n.charAt(o),c=o-a;if(l.match(r.tokenizer.separator)||o==i){if(c>0){var u=r.utils.clone(t)||{};u.position=[a,c],u.index=s.length,s.push(new r.Token(n.slice(a,o),u))}a=o+1}}return s},r.tokenizer.separator=/[\s\-]+/;r.Pipeline=function(){this._stack=[]},r.Pipeline.registeredFunctions=Object.create(null),r.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&r.utils.warn("Overwriting existing registered function: "+t),e.label=t,r.Pipeline.registeredFunctions[e.label]=e},r.Pipeline.warnIfFunctionNotRegistered=function(e){var t=e.label&&e.label in this.registeredFunctions;t||r.utils.warn(`Function is not registered with pipeline. This may cause problems when serialising the index.
`,e)},r.Pipeline.load=function(e){var t=new r.Pipeline;return e.forEach(function(n){var i=r.Pipeline.registeredFunctions[n];if(i)t.add(i);else throw new Error("Cannot load unregistered function: "+n)}),t},r.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(t){r.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},r.Pipeline.prototype.after=function(e,t){r.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e);if(n==-1)throw new Error("Cannot find existingFn");n=n+1,this._stack.splice(n,0,t)},r.Pipeline.prototype.before=function(e,t){r.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e);if(n==-1)throw new Error("Cannot find existingFn");this._stack.splice(n,0,t)},r.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);t!=-1&&this._stack.splice(t,1)},r.Pipeline.prototype.run=function(e){for(var t=this._stack.length,n=0;n<t;n++){for(var i=this._stack[n],s=[],o=0;o<e.length;o++){var a=i(e[o],o,e);if(!(a==null||a===""))if(Array.isArray(a))for(var l=0;l<a.length;l++)s.push(a[l]);else s.push(a)}e=s}return e},r.Pipeline.prototype.runString=function(e,t){var n=new r.Token(e,t);return this.run([n]).map(function(i){return i.toString()})},r.Pipeline.prototype.reset=function(){this._stack=[]},r.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return r.Pipeline.warnIfFunctionNotRegistered(e),e.label})};r.Vector=function(e){this._magnitude=0,this.elements=e||[]},r.Vector.prototype.positionForIndex=function(e){if(this.elements.length==0)return 0;for(var t=0,n=this.elements.length/2,i=n-t,s=Math.floor(i/2),o=this.elements[s*2];i>1&&(o<e&&(t=s),o>e&&(n=s),o!=e);)i=n-t,s=t+Math.floor(i/2),o=this.elements[s*2];if(o==e||o>e)return s*2;if(o<e)return(s+1)*2},r.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},r.Vector.prototype.upsert=function(e,t,n){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=n(this.elements[i+1],t):this.elements.splice(i,0,e,t)},r.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,n=1;n<t;n+=2){var i=this.elements[n];e+=i*i}return this._magnitude=Math.sqrt(e)},r.Vector.prototype.dot=function(e){for(var t=0,n=this.elements,i=e.elements,s=n.length,o=i.length,a=0,l=0,c=0,u=0;c<s&&u<o;)a=n[c],l=i[u],a<l?c+=2:a>l?u+=2:a==l&&(t+=n[c+1]*i[u+1],c+=2,u+=2);return t},r.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},r.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,n=0;t<this.elements.length;t+=2,n++)e[n]=this.elements[t];return e},r.Vector.prototype.toJSON=function(){return this.elements};r.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",i="[aeiouy]",s=n+"[^aeiouy]*",o=i+"[aeiou]*",a="^("+s+")?"+o+s,l="^("+s+")?"+o+s+"("+o+")?$",c="^("+s+")?"+o+s+o+s,u="^("+s+")?"+i,d=new RegExp(a),h=new RegExp(c),p=new RegExp(l),m=new RegExp(u),g=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,b=/^(.+?)eed$/,C=/^(.+?)(ed|ing)$/,O=/.$/,I=/(at|bl|iz)$/,ne=new RegExp("([^aeiouylsz])\\1$"),Le=new RegExp("^"+s+i+"[^aeiouwxy]$"),fe=/^(.+?[^aeiou])y$/,Te=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Me=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,ye=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,Ie=/^(.+?)(s|t)(ion)$/,q=/^(.+?)e$/,Qe=/ll$/,He=new RegExp("^"+s+i+"[^aeiouwxy]$"),me=function(f){var x,W,P,y,S,G,se;if(f.length<3)return f;if(P=f.substr(0,1),P=="y"&&(f=P.toUpperCase()+f.substr(1)),y=g,S=v,y.test(f)?f=f.replace(y,"$1$2"):S.test(f)&&(f=f.replace(S,"$1$2")),y=b,S=C,y.test(f)){var $=y.exec(f);y=d,y.test($[1])&&(y=O,f=f.replace(y,""))}else if(S.test(f)){var $=S.exec(f);x=$[1],S=m,S.test(x)&&(f=x,S=I,G=ne,se=Le,S.test(f)?f=f+"e":G.test(f)?(y=O,f=f.replace(y,"")):se.test(f)&&(f=f+"e"))}if(y=fe,y.test(f)){var $=y.exec(f);x=$[1],f=x+"i"}if(y=Te,y.test(f)){var $=y.exec(f);x=$[1],W=$[2],y=d,y.test(x)&&(f=x+e[W])}if(y=Me,y.test(f)){var $=y.exec(f);x=$[1],W=$[2],y=d,y.test(x)&&(f=x+t[W])}if(y=ye,S=Ie,y.test(f)){var $=y.exec(f);x=$[1],y=h,y.test(x)&&(f=x)}else if(S.test(f)){var $=S.exec(f);x=$[1]+$[2],S=h,S.test(x)&&(f=x)}if(y=q,y.test(f)){var $=y.exec(f);x=$[1],y=h,S=p,G=He,(y.test(x)||S.test(x)&&!G.test(x))&&(f=x)}return y=Qe,S=h,y.test(f)&&S.test(f)&&(y=O,f=f.replace(y,"")),P=="y"&&(f=P.toLowerCase()+f.substr(1)),f};return function(ie){return ie.update(me)}}(),r.Pipeline.registerFunction(r.stemmer,"stemmer");r.generateStopWordFilter=function(e){var t=e.reduce(function(n,i){return n[i]=i,n},{});return function(n){if(n&&t[n.toString()]!==n.toString())return n}},r.stopWordFilter=r.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),r.Pipeline.registerFunction(r.stopWordFilter,"stopWordFilter");r.trimmer=function(e){return e.update(function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")})},r.Pipeline.registerFunction(r.trimmer,"trimmer");r.TokenSet=function(){this.final=!1,this.edges={},this.id=r.TokenSet._nextId,r.TokenSet._nextId+=1},r.TokenSet._nextId=1,r.TokenSet.fromArray=function(e){for(var t=new r.TokenSet.Builder,n=0,i=e.length;n<i;n++)t.insert(e[n]);return t.finish(),t.root},r.TokenSet.fromClause=function(e){return"editDistance"in e?r.TokenSet.fromFuzzyString(e.term,e.editDistance):r.TokenSet.fromString(e.term)},r.TokenSet.fromFuzzyString=function(e,t){for(var n=new r.TokenSet,i=[{node:n,editsRemaining:t,str:e}];i.length;){var s=i.pop();if(s.str.length>0){var o=s.str.charAt(0),a;o in s.node.edges?a=s.node.edges[o]:(a=new r.TokenSet,s.node.edges[o]=a),s.str.length==1&&(a.final=!0),i.push({node:a,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(s.editsRemaining!=0){if("*"in s.node.edges)var l=s.node.edges["*"];else{var l=new r.TokenSet;s.node.edges["*"]=l}if(s.str.length==0&&(l.final=!0),i.push({node:l,editsRemaining:s.editsRemaining-1,str:s.str}),s.str.length>1&&i.push({node:s.node,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)}),s.str.length==1&&(s.node.final=!0),s.str.length>=1){if("*"in s.node.edges)var c=s.node.edges["*"];else{var c=new r.TokenSet;s.node.edges["*"]=c}s.str.length==1&&(c.final=!0),i.push({node:c,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.str.length>1){var u=s.str.charAt(0),d=s.str.charAt(1),h;d in s.node.edges?h=s.node.edges[d]:(h=new r.TokenSet,s.node.edges[d]=h),s.str.length==1&&(h.final=!0),i.push({node:h,editsRemaining:s.editsRemaining-1,str:u+s.str.slice(2)})}}}return n},r.TokenSet.fromString=function(e){for(var t=new r.TokenSet,n=t,i=0,s=e.length;i<s;i++){var o=e[i],a=i==s-1;if(o=="*")t.edges[o]=t,t.final=a;else{var l=new r.TokenSet;l.final=a,t.edges[o]=l,t=l}}return n},r.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var n=t.pop(),i=Object.keys(n.node.edges),s=i.length;n.node.final&&(n.prefix.charAt(0),e.push(n.prefix));for(var o=0;o<s;o++){var a=i[o];t.push({prefix:n.prefix.concat(a),node:n.node.edges[a]})}}return e},r.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),n=t.length,i=0;i<n;i++){var s=t[i],o=this.edges[s];e=e+s+o.id}return e},r.TokenSet.prototype.intersect=function(e){for(var t=new r.TokenSet,n=void 0,i=[{qNode:e,output:t,node:this}];i.length;){n=i.pop();for(var s=Object.keys(n.qNode.edges),o=s.length,a=Object.keys(n.node.edges),l=a.length,c=0;c<o;c++)for(var u=s[c],d=0;d<l;d++){var h=a[d];if(h==u||u=="*"){var p=n.node.edges[h],m=n.qNode.edges[u],g=p.final&&m.final,v=void 0;h in n.output.edges?(v=n.output.edges[h],v.final=v.final||g):(v=new r.TokenSet,v.final=g,n.output.edges[h]=v),i.push({qNode:m,output:v,node:p})}}}return t},r.TokenSet.Builder=function(){this.previousWord="",this.root=new r.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},r.TokenSet.Builder.prototype.insert=function(e){var t,n=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)n++;this.minimize(n),this.uncheckedNodes.length==0?t=this.root:t=this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var i=n;i<e.length;i++){var s=new r.TokenSet,o=e[i];t.edges[o]=s,this.uncheckedNodes.push({parent:t,char:o,child:s}),t=s}t.final=!0,this.previousWord=e},r.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},r.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var n=this.uncheckedNodes[t],i=n.child.toString();i in this.minimizedNodes?n.parent.edges[n.char]=this.minimizedNodes[i]:(n.child._str=i,this.minimizedNodes[i]=n.child),this.uncheckedNodes.pop()}};r.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},r.Index.prototype.search=function(e){return this.query(function(t){var n=new r.QueryParser(e,t);n.parse()})},r.Index.prototype.query=function(e){for(var t=new r.Query(this.fields),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=Object.create(null),l=0;l<this.fields.length;l++)i[this.fields[l]]=new r.Vector;e.call(t,t);for(var l=0;l<t.clauses.length;l++){var c=t.clauses[l],u=null,d=r.Set.empty;c.usePipeline?u=this.pipeline.runString(c.term,{fields:c.fields}):u=[c.term];for(var h=0;h<u.length;h++){var p=u[h];c.term=p;var m=r.TokenSet.fromClause(c),g=this.tokenSet.intersect(m).toArray();if(g.length===0&&c.presence===r.Query.presence.REQUIRED){for(var v=0;v<c.fields.length;v++){var b=c.fields[v];o[b]=r.Set.empty}break}for(var C=0;C<g.length;C++)for(var O=g[C],I=this.invertedIndex[O],ne=I._index,v=0;v<c.fields.length;v++){var b=c.fields[v],Le=I[b],fe=Object.keys(Le),Te=O+"/"+b,Me=new r.Set(fe);if(c.presence==r.Query.presence.REQUIRED&&(d=d.union(Me),o[b]===void 0&&(o[b]=r.Set.complete)),c.presence==r.Query.presence.PROHIBITED){a[b]===void 0&&(a[b]=r.Set.empty),a[b]=a[b].union(Me);continue}if(i[b].upsert(ne,c.boost,function(Rr,Cr){return Rr+Cr}),!s[Te]){for(var ye=0;ye<fe.length;ye++){var Ie=fe[ye],q=new r.FieldRef(Ie,b),Qe=Le[Ie],He;(He=n[q])===void 0?n[q]=new r.MatchData(O,b,Qe):He.add(O,b,Qe)}s[Te]=!0}}}if(c.presence===r.Query.presence.REQUIRED)for(var v=0;v<c.fields.length;v++){var b=c.fields[v];o[b]=o[b].intersect(d)}}for(var me=r.Set.complete,ie=r.Set.empty,l=0;l<this.fields.length;l++){var b=this.fields[l];o[b]&&(me=me.intersect(o[b])),a[b]&&(ie=ie.union(a[b]))}var f=Object.keys(n),x=[],W=Object.create(null);if(t.isNegated()){f=Object.keys(this.fieldVectors);for(var l=0;l<f.length;l++){var q=f[l],P=r.FieldRef.fromString(q);n[q]=new r.MatchData}}for(var l=0;l<f.length;l++){var P=r.FieldRef.fromString(f[l]),y=P.docRef;if(me.contains(y)&&!ie.contains(y)){var S=this.fieldVectors[P],G=i[P.fieldName].similarity(S),se;if((se=W[y])!==void 0)se.score+=G,se.matchData.combine(n[P]);else{var $={ref:y,score:G,matchData:n[P]};W[y]=$,x.push($)}}}return x.sort(function(jr,Or){return Or.score-jr.score})},r.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(n){return[n,this.invertedIndex[n]]},this),t=Object.keys(this.fieldVectors).map(function(n){return[n,this.fieldVectors[n].toJSON()]},this);return{version:r.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},r.Index.load=function(e){var t={},n={},i=e.fieldVectors,s=Object.create(null),o=e.invertedIndex,a=new r.TokenSet.Builder,l=r.Pipeline.load(e.pipeline);e.version!=r.version&&r.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+r.version+"' does not match serialized index '"+e.version+"'");for(var c=0;c<i.length;c++){var u=i[c],d=u[0],h=u[1];n[d]=new r.Vector(h)}for(var c=0;c<o.length;c++){var u=o[c],p=u[0],m=u[1];a.insert(p),s[p]=m}return a.finish(),t.fields=e.fields,t.fieldVectors=n,t.invertedIndex=s,t.tokenSet=a.root,t.pipeline=l,new r.Index(t)};r.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=r.tokenizer,this.pipeline=new r.Pipeline,this.searchPipeline=new r.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},r.Builder.prototype.ref=function(e){this._ref=e},r.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},r.Builder.prototype.b=function(e){e<0?this._b=0:e>1?this._b=1:this._b=e},r.Builder.prototype.k1=function(e){this._k1=e},r.Builder.prototype.add=function(e,t){var n=e[this._ref],i=Object.keys(this._fields);this._documents[n]=t||{},this.documentCount+=1;for(var s=0;s<i.length;s++){var o=i[s],a=this._fields[o].extractor,l=a?a(e):e[o],c=this.tokenizer(l,{fields:[o]}),u=this.pipeline.run(c),d=new r.FieldRef(n,o),h=Object.create(null);this.fieldTermFrequencies[d]=h,this.fieldLengths[d]=0,this.fieldLengths[d]+=u.length;for(var p=0;p<u.length;p++){var m=u[p];if(h[m]==null&&(h[m]=0),h[m]+=1,this.invertedIndex[m]==null){var g=Object.create(null);g._index=this.termIndex,this.termIndex+=1;for(var v=0;v<i.length;v++)g[i[v]]=Object.create(null);this.invertedIndex[m]=g}this.invertedIndex[m][o][n]==null&&(this.invertedIndex[m][o][n]=Object.create(null));for(var b=0;b<this.metadataWhitelist.length;b++){var C=this.metadataWhitelist[b],O=m.metadata[C];this.invertedIndex[m][o][n][C]==null&&(this.invertedIndex[m][o][n][C]=[]),this.invertedIndex[m][o][n][C].push(O)}}}},r.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,n={},i={},s=0;s<t;s++){var o=r.FieldRef.fromString(e[s]),a=o.fieldName;i[a]||(i[a]=0),i[a]+=1,n[a]||(n[a]=0),n[a]+=this.fieldLengths[o]}for(var l=Object.keys(this._fields),s=0;s<l.length;s++){var c=l[s];n[c]=n[c]/i[c]}this.averageFieldLength=n},r.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),n=t.length,i=Object.create(null),s=0;s<n;s++){for(var o=r.FieldRef.fromString(t[s]),a=o.fieldName,l=this.fieldLengths[o],c=new r.Vector,u=this.fieldTermFrequencies[o],d=Object.keys(u),h=d.length,p=this._fields[a].boost||1,m=this._documents[o.docRef].boost||1,g=0;g<h;g++){var v=d[g],b=u[v],C=this.invertedIndex[v]._index,O,I,ne;i[v]===void 0?(O=r.idf(this.invertedIndex[v],this.documentCount),i[v]=O):O=i[v],I=O*((this._k1+1)*b)/(this._k1*(1-this._b+this._b*(l/this.averageFieldLength[a]))+b),I*=p,I*=m,ne=Math.round(I*1e3)/1e3,c.insert(C,ne)}e[o]=c}this.fieldVectors=e},r.Builder.prototype.createTokenSet=function(){this.tokenSet=r.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},r.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new r.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},r.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},r.MatchData=function(e,t,n){for(var i=Object.create(null),s=Object.keys(n||{}),o=0;o<s.length;o++){var a=s[o];i[a]=n[a].slice()}this.metadata=Object.create(null),e!==void 0&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=i)},r.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),n=0;n<t.length;n++){var i=t[n],s=Object.keys(e.metadata[i]);this.metadata[i]==null&&(this.metadata[i]=Object.create(null));for(var o=0;o<s.length;o++){var a=s[o],l=Object.keys(e.metadata[i][a]);this.metadata[i][a]==null&&(this.metadata[i][a]=Object.create(null));for(var c=0;c<l.length;c++){var u=l[c];this.metadata[i][a][u]==null?this.metadata[i][a][u]=e.metadata[i][a][u]:this.metadata[i][a][u]=this.metadata[i][a][u].concat(e.metadata[i][a][u])}}}},r.MatchData.prototype.add=function(e,t,n){if(!(e in this.metadata)){this.metadata[e]=Object.create(null),this.metadata[e][t]=n;return}if(!(t in this.metadata[e])){this.metadata[e][t]=n;return}for(var i=Object.keys(n),s=0;s<i.length;s++){var o=i[s];o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(n[o]):this.metadata[e][t][o]=n[o]}},r.Query=function(e){this.clauses=[],this.allFields=e},r.Query.wildcard=new String("*"),r.Query.wildcard.NONE=0,r.Query.wildcard.LEADING=1,r.Query.wildcard.TRAILING=2,r.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},r.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=r.Query.wildcard.NONE),e.wildcard&r.Query.wildcard.LEADING&&e.term.charAt(0)!=r.Query.wildcard&&(e.term="*"+e.term),e.wildcard&r.Query.wildcard.TRAILING&&e.term.slice(-1)!=r.Query.wildcard&&(e.term=""+e.term+"*"),"presence"in e||(e.presence=r.Query.presence.OPTIONAL),this.clauses.push(e),this},r.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=r.Query.presence.PROHIBITED)return!1;return!0},r.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(i){this.term(i,r.utils.clone(t))},this),this;var n=t||{};return n.term=e.toString(),this.clause(n),this},r.QueryParseError=function(e,t,n){this.name="QueryParseError",this.message=e,this.start=t,this.end=n},r.QueryParseError.prototype=new Error,r.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},r.QueryLexer.prototype.run=function(){for(var e=r.QueryLexer.lexText;e;)e=e(this)},r.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,n=this.pos,i=0;i<this.escapeCharPositions.length;i++)n=this.escapeCharPositions[i],e.push(this.str.slice(t,n)),t=n+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},r.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},r.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},r.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return r.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},r.QueryLexer.prototype.width=function(){return this.pos-this.start},r.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},r.QueryLexer.prototype.backup=function(){this.pos-=1},r.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do e=this.next(),t=e.charCodeAt(0);while(t>47&&t<58);e!=r.QueryLexer.EOS&&this.backup()},r.QueryLexer.prototype.more=function(){return this.pos<this.length},r.QueryLexer.EOS="EOS",r.QueryLexer.FIELD="FIELD",r.QueryLexer.TERM="TERM",r.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",r.QueryLexer.BOOST="BOOST",r.QueryLexer.PRESENCE="PRESENCE",r.QueryLexer.lexField=function(e){return e.backup(),e.emit(r.QueryLexer.FIELD),e.ignore(),r.QueryLexer.lexText},r.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(r.QueryLexer.TERM)),e.ignore(),e.more())return r.QueryLexer.lexText},r.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(r.QueryLexer.EDIT_DISTANCE),r.QueryLexer.lexText},r.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(r.QueryLexer.BOOST),r.QueryLexer.lexText},r.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(r.QueryLexer.TERM)},r.QueryLexer.termSeparator=r.tokenizer.separator,r.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==r.QueryLexer.EOS)return r.QueryLexer.lexEOS;if(t.charCodeAt(0)==92){e.escapeCharacter();continue}if(t==":")return r.QueryLexer.lexField;if(t=="~")return e.backup(),e.width()>0&&e.emit(r.QueryLexer.TERM),r.QueryLexer.lexEditDistance;if(t=="^")return e.backup(),e.width()>0&&e.emit(r.QueryLexer.TERM),r.QueryLexer.lexBoost;if(t=="+"&&e.width()===1||t=="-"&&e.width()===1)return e.emit(r.QueryLexer.PRESENCE),r.QueryLexer.lexText;if(t.match(r.QueryLexer.termSeparator))return r.QueryLexer.lexTerm}},r.QueryParser=function(e,t){this.lexer=new r.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},r.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=r.QueryParser.parseClause;e;)e=e(this);return this.query},r.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},r.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},r.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},r.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(t!=null)switch(t.type){case r.QueryLexer.PRESENCE:return r.QueryParser.parsePresence;case r.QueryLexer.FIELD:return r.QueryParser.parseField;case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var n="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(n+=" with value '"+t.str+"'"),new r.QueryParseError(n,t.start,t.end)}},r.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(t!=null){switch(t.str){case"-":e.currentClause.presence=r.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=r.Query.presence.REQUIRED;break;default:var n="unrecognised presence operator'"+t.str+"'";throw new r.QueryParseError(n,t.start,t.end)}var i=e.peekLexeme();if(i==null){var n="expecting term or field, found nothing";throw new r.QueryParseError(n,t.start,t.end)}switch(i.type){case r.QueryLexer.FIELD:return r.QueryParser.parseField;case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var n="expecting term or field, found '"+i.type+"'";throw new r.QueryParseError(n,i.start,i.end)}}},r.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(t!=null){if(e.query.allFields.indexOf(t.str)==-1){var n=e.query.allFields.map(function(o){return"'"+o+"'"}).join(", "),i="unrecognised field '"+t.str+"', possible fields: "+n;throw new r.QueryParseError(i,t.start,t.end)}e.currentClause.fields=[t.str];var s=e.peekLexeme();if(s==null){var i="expecting term, found nothing";throw new r.QueryParseError(i,t.start,t.end)}switch(s.type){case r.QueryLexer.TERM:return r.QueryParser.parseTerm;default:var i="expecting term, found '"+s.type+"'";throw new r.QueryParseError(i,s.start,s.end)}}},r.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(t!=null){e.currentClause.term=t.str.toLowerCase(),t.str.indexOf("*")!=-1&&(e.currentClause.usePipeline=!1);var n=e.peekLexeme();if(n==null){e.nextClause();return}switch(n.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+n.type+"'";throw new r.QueryParseError(i,n.start,n.end)}}},r.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(t!=null){var n=parseInt(t.str,10);if(isNaN(n)){var i="edit distance must be numeric";throw new r.QueryParseError(i,t.start,t.end)}e.currentClause.editDistance=n;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+s.type+"'";throw new r.QueryParseError(i,s.start,s.end)}}},r.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(t!=null){var n=parseInt(t.str,10);if(isNaN(n)){var i="boost must be numeric";throw new r.QueryParseError(i,t.start,t.end)}e.currentClause.boost=n;var s=e.peekLexeme();if(s==null){e.nextClause();return}switch(s.type){case r.QueryLexer.TERM:return e.nextClause(),r.QueryParser.parseTerm;case r.QueryLexer.FIELD:return e.nextClause(),r.QueryParser.parseField;case r.QueryLexer.EDIT_DISTANCE:return r.QueryParser.parseEditDistance;case r.QueryLexer.BOOST:return r.QueryParser.parseBoost;case r.QueryLexer.PRESENCE:return e.nextClause(),r.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+s.type+"'";throw new r.QueryParseError(i,s.start,s.end)}}},function(e,t){typeof define=="function"&&define.amd?define(t):typeof _r=="object"?wr.exports=t():e.lunr=t()}(this,function(){return r})})()});function Ne(r){var e;return e=class extends r{static define(n,i,s){n||(n=this.baseName),i||(i=this);let o=window.customElements;this.__registry instanceof CustomElementRegistry&&(o=this.__registry);let a=!!o.get(n);a&&this.warnOnExistingElement&&console.warn(`${n} has already been registered.`),!a&&i&&o.define(n,class extends i{},s)}},w(e,"baseName",""),w(e,"warnOnExistingElement",!1),e}var nt=class extends Ne(HTMLElement){};var Lt=new WeakMap;function Tr(r,e){let t=e;for(;t;){if(Lt.get(t)===r)return!0;t=Object.getPrototypeOf(t)}return!1}function Y(r){return e=>{if(Tr(r,e))return e;let t=r(e);return Lt.set(t,r),t}}var Ue=!!ShadowRoot.prototype.createElement,Mr=r=>{var e;return e=class extends r{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}constructor(...n){super(...n),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(n){let i=this.constructor;i.__registry=n}createRenderRoot(){let n=this.constructor,{scopedElements:i,shadowRootOptions:s}=n;if(!this.registry||this.registry===n.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Ue?new CustomElementRegistry:customElements;for(let[c,u]of Object.entries(i))this.defineScopedElement(c,u)}let a={mode:"open",...s,customElements:this.registry},l=this.attachShadow(a);return Ue&&(this.renderOptions.creationScope=l),l instanceof ShadowRoot&&this.adoptStyles(l),l}createScopedElement(n){return(Ue?this.shadowRoot:document).createElement(n)}adoptStyles(n){}defineScopedElement(n,i){let s=this.registry.get(n);return s&&Ue===!1&&s!==i&&console.error([`You are trying to re-register the "${n}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),s?this.registry.get(n):this.registry.define(n,i)}},w(e,"__registry",window.customElements),e},it=Y(Mr);var Ir=r=>class extends r{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(t){this.__shadowRootOptions=t}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Qr=Y(Ir);var Ve=window,Ke=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),Tt=new WeakMap,ve=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ke&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Tt.set(t,e))}return e}toString(){return this.cssText}},Mt=r=>new ve(typeof r=="string"?r:r+"",void 0,st),ot=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new ve(t,r,st)},be=(r,e)=>{Ke?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let n=document.createElement("style"),i=Ve.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)})},qe=Ke?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Mt(t)})(r):r;var at,We=window,It=We.trustedTypes,Hr=It?It.emptyScript:"",Qt=We.reactiveElementPolyfillSupport,ct={toAttribute(r,e){switch(e){case Boolean:r=r?Hr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ht=(r,e)=>e!==r&&(e==e||r==r),lt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:Ht},ut="finalized",H=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,n)=>{let i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=lt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||lt}static finalize(){if(this.hasOwnProperty(ut))return!1;this[ut]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(qe(i))}else e!==void 0&&t.push(qe(e));return t}static _$Ep(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return be(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=lt){var i;let s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){let o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:ct).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var n;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:ct;this._$El=s,this[s]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ht)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};H[ut]=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},Qt?.({ReactiveElement:H}),((at=We.reactiveElementVersions)!==null&&at!==void 0?at:We.reactiveElementVersions=[]).push("1.6.3");var Dr=r=>class extends it(r){static get elementStyles(){return this.__elementStyles}static set elementStyles(t){this.__elementStyles=t}adoptStyles(t){let n=this.constructor,{elementStyles:i}=n;i&&be(t,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||t.firstChild||void 0}},ht=Y(Dr);var F=class extends Ne(ht(Rt)){};var Dt=(r,e,t)=>{let n=new Map;for(let i=e;i<=t;i++)n.set(r[i],i);return n},zt=ae(class extends le{constructor(r){if(super(r),r.type!==L.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let i=[],s=[],o=0;for(let a of r)i[o]=n?n(a,o):o,s[o]=t(a,o),o++;return{values:s,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){let i=Pt(r),{values:s,keys:o}=this.dt(e,t,n);if(!Array.isArray(i))return this.ut=o,s;let a=this.ut??(this.ut=[]),l=[],c,u,d=0,h=i.length-1,p=0,m=s.length-1;for(;d<=h&&p<=m;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[p])l[p]=z(i[d],s[p]),d++,p++;else if(a[h]===o[m])l[m]=z(i[h],s[m]),h--,m--;else if(a[d]===o[m])l[m]=z(i[d],s[m]),oe(r,l[m+1],i[d]),d++,m--;else if(a[h]===o[p])l[p]=z(i[h],s[p]),oe(r,i[d],i[h]),h--,p++;else if(c===void 0&&(c=Dt(o,p,m),u=Dt(a,d,h)),c.has(a[d]))if(c.has(a[h])){let g=u.get(o[p]),v=g!==void 0?i[g]:null;if(v===null){let b=oe(r,i[d]);z(b,s[p]),l[p]=b}else l[p]=z(v,s[p]),oe(r,i[d],v),i[g]=null;p++}else ze(i[h]),h--;else ze(i[d]),d++;for(;p<=m;){let g=oe(r,l[m+1]);z(g,s[p]),l[p++]=g}for(;d<=h;){let g=i[d++];g!==null&&ze(g)}return this.ut=o,De(r,l),Q}});var dt=ae(class extends le{constructor(r){if(super(r),r.type!==L.PROPERTY&&r.type!==L.ATTRIBUTE&&r.type!==L.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ct(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===Q||e===ge)return e;let t=r.element,n=r.name;if(r.type===L.PROPERTY){if(e===t[n])return Q}else if(r.type===L.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return Q}else if(r.type===L.ATTRIBUTE&&t.getAttribute(n)===e+"")return Q;return De(r),e}});var pt=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ft(r,e,t,n){r.addEventListener?r.addEventListener(e,t,n):r.attachEvent&&r.attachEvent("on".concat(e),t)}function xe(r,e,t,n){r.removeEventListener?r.removeEventListener(e,t,n):r.detachEvent&&r.detachEvent("on".concat(e),t)}function Nt(r,e){let t=e.slice(0,e.length-1);for(let n=0;n<t.length;n++)t[n]=r[t[n].toLowerCase()];return t}function Ut(r){typeof r!="string"&&(r=""),r=r.replace(/\s/g,"");let e=r.split(","),t=e.lastIndexOf("");for(;t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function zr(r,e){let t=r.length>=e.length?r:e,n=r.length>=e.length?e:r,i=!0;for(let s=0;s<t.length;s++)n.indexOf(t[s])===-1&&(i=!1);return i}var we={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":pt?173:189,"=":pt?61:187,";":pt?59:186,"'":222,"[":219,"]":221,"\\":220},M={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Je={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},j={16:!1,18:!1,17:!1,91:!1},k={};for(let r=1;r<20;r++)we["f".concat(r)]=111+r;var _=[],_e=null,Vt="all",D=new Map,ke=r=>we[r.toLowerCase()]||M[r.toLowerCase()]||r.toUpperCase().charCodeAt(0),Br=r=>Object.keys(we).find(e=>we[e]===r),Fr=r=>Object.keys(M).find(e=>M[e]===r);function Kt(r){Vt=r||"all"}function Ee(){return Vt||"all"}function Nr(){return _.slice(0)}function Ur(){return _.map(r=>Br(r)||Fr(r)||String.fromCharCode(r))}function Vr(){let r=[];return Object.keys(k).forEach(e=>{k[e].forEach(t=>{let{key:n,scope:i,mods:s,shortcut:o}=t;r.push({scope:i,shortcut:o,mods:s,keys:n.split("+").map(a=>ke(a))})})}),r}function Kr(r){let e=r.target||r.srcElement,{tagName:t}=e,n=!0,i=t==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(e.type);return(e.isContentEditable||(i||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function qr(r){return typeof r=="string"&&(r=ke(r)),_.indexOf(r)!==-1}function Wr(r,e){let t,n;r||(r=Ee());for(let i in k)if(Object.prototype.hasOwnProperty.call(k,i))for(t=k[i],n=0;n<t.length;)t[n].scope===r?t.splice(n,1).forEach(o=>{let{element:a}=o;return mt(a)}):n++;Ee()===r&&Kt(e||"all")}function Gr(r){let e=r.keyCode||r.which||r.charCode,t=_.indexOf(e);if(t>=0&&_.splice(t,1),r.key&&r.key.toLowerCase()==="meta"&&_.splice(0,_.length),(e===93||e===224)&&(e=91),e in j){j[e]=!1;for(let n in M)M[n]===e&&(T[n]=!1)}}function qt(r){if(typeof r>"u")Object.keys(k).forEach(i=>{Array.isArray(k[i])&&k[i].forEach(s=>Ge(s)),delete k[i]}),mt(null);else if(Array.isArray(r))r.forEach(i=>{i.key&&Ge(i)});else if(typeof r=="object")r.key&&Ge(r);else if(typeof r=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];let[i,s]=t;typeof i=="function"&&(s=i,i=""),Ge({key:r,scope:i,method:s,splitKey:"+"})}}var Ge=r=>{let{key:e,scope:t,method:n,splitKey:i="+"}=r;Ut(e).forEach(o=>{let a=o.split(i),l=a.length,c=a[l-1],u=c==="*"?"*":ke(c);if(!k[u])return;t||(t=Ee());let d=l>1?Nt(M,a):[],h=[];k[u]=k[u].filter(p=>{let g=(n?p.method===n:!0)&&p.scope===t&&zr(p.mods,d);return g&&h.push(p.element),!g}),h.forEach(p=>mt(p))})};function Bt(r,e,t,n){if(e.element!==n)return;let i;if(e.scope===t||e.scope==="all"){i=e.mods.length>0;for(let s in j)Object.prototype.hasOwnProperty.call(j,s)&&(!j[s]&&e.mods.indexOf(+s)>-1||j[s]&&e.mods.indexOf(+s)===-1)&&(i=!1);(e.mods.length===0&&!j[16]&&!j[18]&&!j[17]&&!j[91]||i||e.shortcut==="*")&&(e.keys=[],e.keys=e.keys.concat(_),e.method(r,e)===!1&&(r.preventDefault?r.preventDefault():r.returnValue=!1,r.stopPropagation&&r.stopPropagation(),r.cancelBubble&&(r.cancelBubble=!0)))}}function Ft(r,e){let t=k["*"],n=r.keyCode||r.which||r.charCode;if(!T.filter.call(this,r))return;if((n===93||n===224)&&(n=91),_.indexOf(n)===-1&&n!==229&&_.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(a=>{let l=Je[a];r[a]&&_.indexOf(l)===-1?_.push(l):!r[a]&&_.indexOf(l)>-1?_.splice(_.indexOf(l),1):a==="metaKey"&&r[a]&&(_=_.filter(c=>c in Je||c===n))}),n in j){j[n]=!0;for(let a in M)M[a]===n&&(T[a]=!0);if(!t)return}for(let a in j)Object.prototype.hasOwnProperty.call(j,a)&&(j[a]=r[Je[a]]);r.getModifierState&&!(r.altKey&&!r.ctrlKey)&&r.getModifierState("AltGraph")&&(_.indexOf(17)===-1&&_.push(17),_.indexOf(18)===-1&&_.push(18),j[17]=!0,j[18]=!0);let i=Ee();if(t)for(let a=0;a<t.length;a++)t[a].scope===i&&(r.type==="keydown"&&t[a].keydown||r.type==="keyup"&&t[a].keyup)&&Bt(r,t[a],i,e);if(!(n in k))return;let s=k[n],o=s.length;for(let a=0;a<o;a++)if((r.type==="keydown"&&s[a].keydown||r.type==="keyup"&&s[a].keyup)&&s[a].key){let l=s[a],{splitKey:c}=l,u=l.key.split(c),d=[];for(let h=0;h<u.length;h++)d.push(ke(u[h]));d.sort().join("")===_.sort().join("")&&Bt(r,l,i,e)}}function T(r,e,t){_=[];let n=Ut(r),i=[],s="all",o=document,a=0,l=!1,c=!0,u="+",d=!1,h=!1;for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(d=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey),e.single===!0&&(h=!0)),typeof e=="string"&&(s=e),h&&qt(r,s);a<n.length;a++)r=n[a].split(u),i=[],r.length>1&&(i=Nt(M,r)),r=r[r.length-1],r=r==="*"?"*":ke(r),r in k||(k[r]=[]),k[r].push({keyup:l,keydown:c,scope:s,mods:i,shortcut:n[a],method:t,key:n[a],splitKey:u,element:o});if(typeof o<"u"&&window){if(!D.has(o)){let p=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return Ft(g,o)},m=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;Ft(g,o),Gr(g)};D.set(o,{keydownListener:p,keyupListenr:m,capture:d}),ft(o,"keydown",p,d),ft(o,"keyup",m,d)}if(!_e){let p=()=>{_=[]};_e={listener:p,capture:d},ft(window,"focus",p,d)}}}function Jr(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(k).forEach(t=>{k[t].filter(i=>i.scope===e&&i.shortcut===r).forEach(i=>{i&&i.method&&i.method()})})}function mt(r){let e=Object.values(k).flat();if(e.findIndex(n=>{let{element:i}=n;return i===r})<0){let{keydownListener:n,keyupListenr:i,capture:s}=D.get(r)||{};n&&i&&(xe(r,"keyup",i,s),xe(r,"keydown",n,s),D.delete(r))}if((e.length<=0||D.size<=0)&&(Object.keys(D).forEach(i=>{let{keydownListener:s,keyupListenr:o,capture:a}=D.get(i)||{};s&&o&&(xe(i,"keyup",o,a),xe(i,"keydown",s,a),D.delete(i))}),D.clear(),Object.keys(k).forEach(i=>delete k[i]),_e)){let{listener:i,capture:s}=_e;xe(window,"focus",i,s),_e=null}}var yt={getPressedKeyString:Ur,setScope:Kt,getScope:Ee,deleteScope:Wr,getPressedKeyCodes:Nr,getAllKeyCodes:Vr,isPressed:qr,filter:Kr,trigger:Jr,unbind:qt,keyMap:we,modifier:M,modifierMap:Je};for(let r in yt)Object.prototype.hasOwnProperty.call(yt,r)&&(T[r]=yt[r]);if(typeof window<"u"){let r=window.hotkeys;T.noConflict=e=>(e&&window.hotkeys===T&&(window.hotkeys=r),T),window.hotkeys=T}var ue=J`
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
`,Wt=J`
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
`;var X=class extends F{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=Be()}render(){let e="";if(!this.hideBreadcrumbs){let t=[];if(this.breadcrumbs)for(let n of this.breadcrumbs)t.push(E`<button
              type="button"
              @click=${()=>this.selectParent(n)}
              class="breadcrumb"
            >
              ${n}
            </button>`);e=E`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${t}

        <button
          type="button"
          class="breadcrumb breadcrumb--close"
          @click=${this._close}
        >
          Cancel
        </button>
      </div>`}return E`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${Fe(this._inputRef)}
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
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(e){let t=e.target;t instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!0,composed:!0}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};w(X,"baseName","ninja-header"),w(X,"styles",[ue,J`
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
        background-color: var(--ninja-selected-background);
        color: var(--ninja-secondary-text-color);
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
    `]),w(X,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});var Se=class extends le{constructor(e){if(super(e),this.it=ge,e.type!==L.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ge||e==null)return this._t=void 0,this.it=e;if(e===Q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Se.directiveName="unsafeHTML",Se.resultType=1;var Ye=ae(Se);function*Gt(r,e){let t=typeof e=="function";if(r!==void 0){let n=-1;for(let i of r)n>-1&&(yield t?e(n):e),n++,yield i}}function Jt(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var gt,Xe=window,he=Xe.trustedTypes,Yt=he?he.createPolicy("lit-html",{createHTML:r=>r}):void 0,bt="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,ir="?"+N,Yr=`<${ir}>`,te=document,Ae=()=>te.createComment(""),je=r=>r===null||typeof r!="object"&&typeof r!="function",sr=Array.isArray,Xr=r=>sr(r)||typeof r?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xt=/-->/g,Zt=/>/g,Z=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),er=/'/g,tr=/"/g,or=/^(?:script|style|textarea|title)$/i,ar=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),lr=ar(1),Ti=ar(2),re=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),rr=new WeakMap,ee=te.createTreeWalker(te,129,null,!1);function cr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yt!==void 0?Yt.createHTML(e):e}var Zr=(r,e)=>{let t=r.length-1,n=[],i,s=e===2?"<svg>":"",o=$e;for(let a=0;a<t;a++){let l=r[a],c,u,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,u=o.exec(l),u!==null);)h=o.lastIndex,o===$e?u[1]==="!--"?o=Xt:u[1]!==void 0?o=Zt:u[2]!==void 0?(or.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Z):u[3]!==void 0&&(o=Z):o===Z?u[0]===">"?(o=i??$e,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Z:u[3]==='"'?tr:er):o===tr||o===er?o=Z:o===Xt||o===Zt?o=$e:(o=Z,i=void 0);let p=o===Z&&r[a+1].startsWith("/>")?" ":"";s+=o===$e?l+Yr:d>=0?(n.push(c),l.slice(0,d)+bt+l.slice(d)+N+p):l+N+(d===-2?(n.push(void 0),a):p)}return[cr(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]},Oe=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0,a=e.length-1,l=this.parts,[c,u]=Zr(e,t);if(this.el=r.createElement(c,n),ee.currentNode=this.el.content,t===2){let d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=ee.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let h of i.getAttributeNames())if(h.endsWith(bt)||h.startsWith(N)){let p=u[o++];if(d.push(h),p!==void 0){let m=i.getAttribute(p.toLowerCase()+bt).split(N),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?_t:g[1]==="?"?wt:g[1]==="@"?Et:pe})}else l.push({type:6,index:s})}for(let h of d)i.removeAttribute(h)}if(or.test(i.tagName)){let d=i.textContent.split(N),h=d.length-1;if(h>0){i.textContent=he?he.emptyScript:"";for(let p=0;p<h;p++)i.append(d[p],Ae()),ee.nextNode(),l.push({type:2,index:++s});i.append(d[h],Ae())}}}else if(i.nodeType===8)if(i.data===ir)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(N,d+1))!==-1;)l.push({type:7,index:s}),d+=N.length-1}s++}}static createElement(e,t){let n=te.createElement("template");return n.innerHTML=e,n}};function de(r,e,t=r,n){var i,s,o,a;if(e===re)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl,c=je(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,n)),n!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=de(r,l._$AS(r,e.values),l,n)),e}var xt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:te).importNode(n,!0);ee.currentNode=s;let o=ee.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Re(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new kt(o,this,e)),this._$AV.push(u),c=i[++l]}a!==c?.index&&(o=ee.nextNode(),a++)}return ee.currentNode=te,s}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Re=class r{constructor(e,t,n,i){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),je(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&je(this._$AH)?this._$AA.nextSibling.data=e:this.$(te.createTextNode(e)),this._$AH=e}g(e){var t;let{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Oe.createElement(cr(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{let o=new xt(s,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(e){let t=rr.get(e.strings);return t===void 0&&rr.set(e.strings,t=new Oe(e)),t}T(e){sr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new r(this.k(Ae()),this.k(Ae()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},pe=class{constructor(e,t,n,i,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){let s=this.strings,o=!1;if(s===void 0)e=de(this,e,t,0),o=!je(e)||e!==this._$AH&&e!==re,o&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=de(this,a[n+l],t,l),c===re&&(c=this._$AH[l]),o||(o=!je(c)||c!==this._$AH[l]),c===A?e=A:e!==A&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_t=class extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},en=he?he.emptyScript:"",wt=class extends pe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}},Et=class extends pe{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=de(this,e,t,0))!==null&&n!==void 0?n:A)===re)return;let i=this._$AH,s=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==A&&(i===A||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},kt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}};var nr=Xe.litHtmlPolyfillSupport;nr?.(Oe,Re),((gt=Xe.litHtmlVersions)!==null&&gt!==void 0?gt:Xe.litHtmlVersions=[]).push("2.8.0");var ur=(r,e,t)=>{var n,i;let s=(n=t?.renderBefore)!==null&&n!==void 0?n:e,o=s._$litPart$;if(o===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Re(e.insertBefore(Ae(),a),a,void 0,t??{})}return o._$AI(r),o};var St,$t;var U=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ur(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return re}};U.finalized=!0,U._$litElement$=!0,(St=globalThis.litElementHydrateSupport)===null||St===void 0||St.call(globalThis,{LitElement:U});var hr=globalThis.litElementPolyfillSupport;hr?.({LitElement:U});(($t=globalThis.litElementVersions)!==null&&$t!==void 0?$t:globalThis.litElementVersions=[]).push("3.3.3");var dr=r=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(r,e):((t,n)=>{let{kind:i,elements:s}=n;return{kind:i,elements:s,finisher(o){customElements.define(t,o)}}})(r,e);var At,ls=((At=window.HTMLSlotElement)===null||At===void 0?void 0:At.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var pr=ot`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var jt=class extends U{render(){return lr`<span><slot></slot></span>`}};jt.styles=[pr];jt=Jt([dr("mwc-icon")],jt);function fr(r,e,t){return r?e(r):t?.(r)}var Ze=-1/0;var tn=-.005,rn=-.005,nn=-.01,yr=1,sn=.9,on=.8,an=.7,ln=.6;function cn(r){return r.toLowerCase()===r}function un(r){return r.toUpperCase()===r}function hn(r){for(var e=r.length,t=new Array(e),n="/",i=0;i<e;i++){var s=r[i];n==="/"?t[i]=sn:n==="-"||n==="_"||n===" "?t[i]=on:n==="."?t[i]=ln:cn(n)&&un(s)?t[i]=an:t[i]=0,n=s}return t}function dn(r,e,t,n){for(var i=r.length,s=e.length,o=r.toLowerCase(),a=e.toLowerCase(),l=hn(e,l),c=0;c<i;c++){t[c]=new Array(s),n[c]=new Array(s);for(var u=Ze,d=c===i-1?rn:nn,h=0;h<s;h++)if(o[c]===a[h]){var p=Ze;c?h&&(p=Math.max(n[c-1][h-1]+l[h],t[c-1][h-1]+yr)):p=h*tn+l[h],t[c][h]=p,n[c][h]=u=Math.max(p,u+d)}else t[c][h]=Ze,n[c][h]=u=u+d}}function mr(r,e){var t=r.length,n=e.length,i=new Array(t);if(!t||!n)return i;if(t===n){for(var s=0;s<t;s++)i[s]=s;return i}if(n>1024)return i;var o=new Array(t),a=new Array(t);dn(r,e,o,a);for(var l=!1,s=t-1,c=n-1;s>=0;s--)for(;c>=0;c--)if(o[s][c]!==Ze&&(l||o[s][c]===a[s][c])){l=s&&c&&a[s][c]===o[s-1][c-1]+yr,i[s]=c--;break}return i}function Pe(r,e){r=r.toLowerCase(),e=e.toLowerCase();for(var t=r.length,n=0,i=0;n<t;n+=1)if(i=e.indexOf(r[n],i)+1,i===0)return!1;return!0}function et(r){return new RegExp(r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function vr(r,e,t){if(!r.trim())return e;let n=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+et(r).source+"+","g");return e.replaceAll(n,t)}function br(r,e,t=n=>n){if(!e)return"";if(!r)return e;let n=r.split(/\s+/);if(!n.some(l=>Pe(l,e)))return e;let s=e.split(""),o=[];[r,...n].forEach(l=>{Pe(l,e)&&(o=o.concat(mr(l,e)))}),o=[...new Set(o)].sort((l,c)=>l-c);let a=[];for(let l=0;l<s.length;l++){if(!o.includes(l)){a.push(s[l]);continue}let c=pn(l,o);if(c==null)continue;let u="";u=t(s.slice(l,c+1).join("")),a.push(u),l=c}return a.join("")}function pn(r,e){let t=e.findIndex(i=>i===r),n=null;if(t===-1)return null;for(let i=t;i<e.length;i++){n=e[i];for(let s=i+1;s<e.length;s++){let o=e[s];if(o==null||o!==n+1)return n;n=e[s]}}return n}var V=class extends F{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=e=>`<mark part="ninja-action__highlight">${e}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0})),this.forceClick()}forceClick(){let e=this.shadowRoot?.querySelector("a");e&&e.click()}updated(e){return e.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true"))),super.updated(e)}render(){let e={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(e):E`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${ce(e)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(e){let t=this.action.attributes||{},{download:n,hreflang:i,ping:s,referrerpolicy:o,rel:a,target:l,type:c}=t;return E`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${ce(e)}
        href=${this.action.href}
        download=${B(n)}
        hreflang=${B(i)}
        ping=${B(s)}
        referrerpolicy=${B(o)}
        rel=${B(a)}
        target=${B(l)}
        type=${B(c)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(e){let t=this.constructor;return e.replaceAll(/&/g,t.escapeMap["&"]).replaceAll(/[<>'"]/g,n=>t.escapeMap[n]||n)}encodeString(e){let t=this.constructor;return e.replaceAll(/&/g,`<span>${t.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,n=>`<span>${t.escapeMap[n]||n}</span>`)}renderMatch(e,t){let n=this.escapeString(t),i=this.escapeString(e);return this.searchType==="regex"?vr(i,n,this.__regexMatchRender):this.searchType==="fuzzy"?br(i,n,this.__fuzzyMatchRender):""}renderBody(){let e;this.action.mdIcon?e=E`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Ye(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{id:t,title:n,content:i}=this.action;return n=n||t||"",n&&this.highlightMatches&&(n=this.renderMatch(this.searchQuery,n)),t&&this.highlightMatches&&(t=this.renderMatch(this.searchQuery,t)),i&&this.highlightMatches&&(i=this.renderMatch(this.searchQuery,i)),E`
      <div part="ninja-action__header" class="ninja-action__header">
        ${e}
        <div part="ninja-action__title" class="ninja-title">
          ${Ye(n)}
        </div>
        ${this.renderHotkey()}
      </div>

      ${fr(i,()=>E`<small part="ninja-action__content" class="ninja-action__content"
            >${Ye(i)}</small
          >`)}
    `}renderHotkey(){let e;return this.action.hotkey&&(this.hotKeysJoinedView?e=this.action.hotkey.split(",").map(t=>{let n=t.split("+"),i=E`${Gt(n.map(s=>E`<kbd part="ninja-hotkey">${s}</kbd>`),"+")}`;return E`<div
            part="ninja-hotkeys"
            class="ninja-hotkey ninja-hotkeys"
          >
            ${i}
          </div>`}):e=this.action.hotkey.split(",").map(t=>{let i=t.split("+").map(s=>E`<kbd part="ninja-hotkey" class="ninja-hotkey">${s}</kbd>`);return E`<kbd part="ninja-hotkeys" class="ninja-hotkeys"
            >${i}</kbd
          >`})),e}};w(V,"baseName","ninja-action"),w(V,"styles",[ue,J`
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
    `]),w(V,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),w(V,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});var xr=E` <div
  part="modal-footer"
  class="modal-footer"
  slot="footer"
>
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
</div>`;var R=T,K=class extends F{static get scopedElements(){return{"ninja-action":V,"ninja-header":X}}constructor(){super(),this._headerRef=Be(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchType="regex",this.highlightMatches=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up",this.navigationDownHotkey="down",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(e={}){this._bump=!0,this.visible=!0;let t=this._headerRef.value;if(requestAnimationFrame(()=>{t&&(t.focusSearch(),t.expanded=!0,t.controls="actions-list")}),this._actionMatches.length>0){this._selected=this._actionMatches[0];let n=this._headerRef.value;n&&this._selected&&this._selected.id&&(n.activeDescendant=this._selected.id)}this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1;let e=this._headerRef.value;e&&(e.expanded=!1)}setParent(e){e?this.currentRoot=e:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let e=[],t=this._selected?.parent;if(t)for(e.push(t);t;){let n=this._flatData.find(i=>i.id===t);n?.parent&&e.push(n.parent),t=n?n.parent:void 0}return e.reverse()}get _selected(){return this.__selected__}set _selected(e){let t=this._headerRef.value;t&&e&&e.id&&(t.activeDescendant=e.id);let n=this.__selected__;this.__selected__=e,this.requestUpdate("_selected",n)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e){let t=[];n(e);function n(i,s){i.forEach(o=>{if(s&&(o.parent=s),o.children){let a=[...o.children.filter(l=>typeof l!="string")];o.children=o.children.map(l=>typeof l=="string"?l:l.id||""),n(a,o.id)}t.push(o)})}return t}update(e){e.has("data")&&(this._flatData=this._flattern(this.data),this.disableHotkeys||this._flatData.forEach(t=>{t.hotkey&&R(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t,n,this._search)})})),super.update(e)}shouldNotOpen(e){let t=e.composedPath(),n=["input","textarea"];return t.some(i=>i?.getAttribute?.("contenteditable")==="true"?!0:n.includes(i?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&R(this.openHotkey,e=>{this.shouldNotOpen(e)||(e.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&R(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],e))}),this.goBackHotkey&&R(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&R(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&R(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&R(this.closeHotkey,e=>{this.visible&&(e.preventDefault(),this.visible=!1,this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&R.unbind(this.openHotkey),this.selectHotkey&&R.unbind(this.selectHotkey),this.goBackHotkey&&R.unbind(this.goBackHotkey),this.navigationDownHotkey&&R.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&R.unbind(this.navigationUpHotkey),this.closeHotkey&&R.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let e=this.getBreadcrumbs();if(e){let t=e.length>1?e[e.length-2]:void 0;this.setParent(t);return}}findActionElement(e=this._selectedIndex){let t=this._actionMatches[e]?.id;if(t==null)return null;let n="#ninja-action__"+t;return this.shadowRoot?.querySelector(n)}stringToRegExp(e){return et(e)}findMatches(e){let t=this.stringToRegExp(this._search),n={searchRegex:t,searchString:this._search};return e.filter(i=>{if(this._search.trim()==="")return i.parent===this.currentRoot&&!0;let{matcher:s,title:o,keywords:a,content:l}=i,c=null;if(typeof s=="function"&&(c=s(i,n)),(c==null&&!this.searchType||this.searchType==="regex")&&(c=!!(o&&o.match(t)||a&&a.match(t)||l&&l.match(t))),c==null&&this.searchType==="fuzzy"){let u=this._search;c=!!(o&&Ot(u,o)||a&&Ot(u,a)||l&&Ot(u,l))}return c==null&&(c=!!c),(!this.currentRoot&&this._search||i.parent===this.currentRoot)&&c})}render(){let e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},n,i=this._flatData;i=this.findMatches(i),n=i.reduce((a,l)=>a.set(l.section,[...a.get(l.section)||[],l]),new Map),this._actionMatches=[...n.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let s=a=>E` ${zt(a,l=>l.id,l=>E`<ninja-action
            id=${"ninja-action__"+l.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${dt(l.id===this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${dt(l.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${c=>{this._actionFocused(l,c)}}
            @actionsSelected=${c=>this._actionSelected(c.detail,c)}
            .action=${l}
          ></ninja-action>`)}`,o=[];return n.forEach((a,l)=>{let c=l?E`<div class="group-header">${l}</div>`:void 0;o.push(E`${c}${s(a)}`)}),E`
      <div
        part="modal-overlay"
        @click=${this._overlayClick}
        class=${ce(t)}
      >
        <div
          part="modal-content"
          class=${ce(e)}
          @animationend=${this._onTransitionEnd}
        >
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${Fe(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
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
              ${o}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${xr} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e,t){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),e&&(e.children&&e.children?.length>0&&(this.currentRoot=e.id),this._search="",this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),e.handler?e.handler(e,t,this._search)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){let t=e.target;t instanceof Element&&t?.classList.contains("modal")&&this.close()}};w(K,"baseName","ninja-keys"),w(K,"styles",[ue,Wt]),w(K,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchType:{attribute:"search-type"},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},highlightMatches:{type:Boolean,reflect:!0,attribute:"highlight-matches"},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});function Ot(r,e){return[r,...r.split(/\s+/)].some(t=>Pe(t,e))}var $r=Lr(Er(),1);var fn={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},yn={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};function kr(r){return r.replaceAll(/&lt;|&gt;|&#39;|&quot;/g,e=>yn[e]||e).replaceAll(/&amp;/g,"&")}function Sr(r){return r.replaceAll(/&/g,"&amp;").replaceAll(/<>'"/g,e=>fn[e]||e)}var tt=class{static async fetchAndGenerateIndex(e=this.endpoint){let n=await(await fetch(e)).json(),i=new this;return i.generateIndex(n),{searchIndex:n,searchEngine:i}}async generateIndex(e){this.index=(0,$r.default)(function(){this.ref("id"),this.field("id",{boost:1e3}),this.field("title",{boost:100}),this.field("categories",{boost:10}),this.field("tags",{boost:10}),this.field("url",{boost:100}),this.field("content",{boost:1}),e.forEach(t=>{t.content&&(t.content=kr(t.content),this.add(t))})}),this.indexData=e}performSearch(e,t=300,n=!0){if(n==null&&(n=!0),this.index){this.query=e;let i=e.trim().length>0,s=e.split(" ").map((l,c,u)=>`${l}${c===u.length-1?`* ${l}~1`:"~1"}`).join(" "),o=i?this.index.search(`${e} ${s}`):[];return o?.length>0?o.map(l=>{let c=this.indexData.find(h=>h.id==l.ref),u=this.previewTemplate(c.content,t,n),d=this.previewTemplate(c.title,t,n);return n===!0&&(d+=`<!-- (${l.score}) -->`),{id:c.id.trim(),score:l.score,title:c.title.trim(),collection:c.collection,content:c.content.trim(),categories:c.categories,url:c.url.trim(),heading:d,preview:u}}):[]}else throw new Error("Search index hasn't yet loaded. Run the generateIndex function")}previewTemplate(e,t=300,n=!0){t==null&&(t=300);let i=t/2,s;if(t){let o=e.toLowerCase(),a=this.query.toLowerCase().split(" ").map(l=>o.indexOf(l)).filter(l=>l!=-1).sort((l,c)=>l-c);a[1]&&(t=Math.min(a[1]-a[0],t)),s=e.substr(Math.max(0,a[0]-i),t+i)}else s=e;return e.startsWith(s)||(s="\u2026"+s),e.endsWith(s)||(s=s+"\u2026"),n&&(s=Sr(s),this.query.toLowerCase().split(" ").forEach(o=>{o!=""&&(s=s.replace(new RegExp(`(${o.replace(/[\.\*\+\(\)]/g,"")})`,"ig"),"<strong>$1</strong>"))})),s}};w(tt,"endpoint","/bridgetown_quick_search/index.json");var Ar=tt;var rt=class extends K{findMatches(e){let t=super.findMatches(e);return this.results.forEach(n=>{t.find(i=>i.id===n.id)||t.push(n)}),t}constructor(){super(),this.snippetLength=142,this.alwaysShowResults=!0,this.staticData=[],this.results=[],this.endpoint="/bridgetown_quick_search/index.json",this.handleInput=()=>{this.data=this.createData()}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.fetchAndGenerateIndex()}willUpdate(e){e.has("endpoint")&&this.fetchAndGenerateIndex(),super.willUpdate(e)}open(){super.open(),this.data=this.createData()}async fetchAndGenerateIndex(){let{searchEngine:e,searchIndex:t}=await Ar.fetchAndGenerateIndex(this.endpoint);this.__searchEngine=e,this.__searchIndex=t,this.addEventListener("change",this.handleInput)}createData(){return this.results=this.showResultsForQuery(this._search),this.staticData.concat(this.results)}showResultsForQuery(e,t=100){if(this.latestQuery=e,this.alwaysShowResults===!0||e&&e.length>=1){let n=this.__searchEngine.performSearch(e,this.snippetLength,!1).slice(0,t),i=[];return n.length<=0?[]:(n.forEach(s=>{let o=this.transformResult(s);o&&i.push(o)}),i)}return[]}transformResult(e){let{id:t,url:n,preview:i,categories:s,heading:o,collection:a}=e;if(!n.endsWith(".json"))return s=s.split(/[-_]/).map(mn).join(" "),{id:t,title:o,section:a.name,href:n,content:i}}};w(rt,"baseName","bridgetown-ninja-keys"),w(rt,"properties",Object.assign(K.properties,{snippetLength:{attribute:"snippet-length",type:Number},alwaysShowResults:{attribute:"always-show-results",reflect:!0,type:Boolean},endpoint:{reflect:!0},results:{state:!0,type:Array},staticData:{state:!0,type:Array}}));function mn(r){return r.charAt(0).toUpperCase()+r.slice(1)}export{rt as BridgetownNinjaKeys};
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
*/
//# sourceMappingURL=/light-pen/pull/33/bridgetown/static/chunks/ninja-keys-YGHWTONU.js.map
