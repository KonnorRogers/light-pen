import{a as C,b as p}from"/light-pen/bridgetown/static/chunks/chunk-KRLTNSAR.js";import{a as x,c as v,d as w,f as y,g as L,h as l,i as $}from"/light-pen/bridgetown/static/chunks/chunk-NH7ERRSJ.js";import{a as f,b,f as m}from"/light-pen/bridgetown/static/chunks/chunk-BHFD5347.js";import{d as o}from"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var S=f`
  [part~="base"] {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  :host([disable-line-numbers]) [part~="textarea"],
  [part~="textarea"],
  light-code::part(line) {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.5); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
    padding: 0;

    /* Dynamically generated based on the size of the  gutter from "<light-code>" */
    padding-inline-start: calc(var(--gutter-width, 40px) + 8px);

    /* needs to match light-codes padding-inline-end */
    padding-inline-end: 8px;
  }

  light-code {
    pointer-events: none;
  }

  light-code::part(pre) {
    border-color: transparent;
    position: relative;
  }

  light-code::part(line)::before {
    content: "";
    line-height: inherit;
    padding-inline-end: 0px;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  light-code::part(line) {
    padding-inline-start: 8px;
  }

  light-code::part(pre),
  [part~="textarea"],
  light-code::part(code) {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;
  }

  [part~="textarea"] {
    /* this creates "soft" line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="hard"]) [part~="textarea"] {
    /* this would remove line-wrapping */
    word-break: break-all;
    white-space: pre;
  }

  [part~="base"]:focus-within light-code::part(line-highlight) {
    background-color: rgba(255, 255, 209, 1);
  }

  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    max-height: 100%;
    min-height: 100%;
  }

  light-code,
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: none;
  }

  [part~="textarea"]::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;var h=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var c=class extends h{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var T=/\r\n?|\n/g,n=class extends p(y){constructor(){super(),this.language="html",this.value="",this.defaultValue="",this.textarea=null,this.src=null,this.wrap="soft",this.preserveWhitespace=!1,this.disableLineNumbers=!1,this.highlighter=w(),this.currentLineNumber=1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.defaultValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=l(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(e){e.has("value")&&(this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))),e.has("src")&&this.src&&fetch(this.src).then(async t=>{let r=await t.text();return this.preserveWhitespace!==!0&&(r=l(r.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim()),r}),super.willUpdate(e)}click(){this.textarea?this.textarea.click():this.click()}focus(e){this.textarea?this.textarea.focus(e):this.focus(e)}__setGutterWidth(){let e=this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth;if(e){this.style.setProperty("--gutter-width",`${e}px`);return}this.style.removeProperty("--gutter-width")}render(){let e=this.language;return this.syncScroll(),setTimeout(async()=>{await this.updateComplete,this.__setGutterWidth()}),b`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <!-- This bad boy is for measuring cursors -->
          <pre
            part="pre"
            aria-hidden="true"
            style="
              position: fixed;
              top: 0;
              left: 0;
              pointer-events: none;
              visibility: hidden;
            "
          ><code part="code"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>

          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            wrap=${this.wrap}
            .highlighter=${this.highlighter}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused?this.currentLineNumber:""}}`}
            @focus=${()=>{this.textarea?.focus()}}
            @touchstart=${t=>{this.textarea?.focus()}}
            @click=${t=>{this.textarea?.focus()}}
          ></light-code>

          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${e}"
            ${C(this.textareaChanged)}
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${this.placeholder}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasFocused=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.setAttribute("data-has-interacted",""),this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${t=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @touchstart=${()=>{this.setCurrentLineHighlight()}}
            @touchend=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.syncScroll()}}
            @scroll=${t=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:i,top:s,bottom:a}=e[0].contentRect,u=r+i,d=s+a;this.dispatchEvent(new c("light-resize",{height:d,width:u})),this.syncScroll()}updated(e){super.updated(e),this.syncScroll(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(e=!1){let t=this.textarea;if(t==null)return;let r=this.shadowRoot?.querySelector("light-code"),i=r?.shadowRoot?.querySelector("code");if(e){let{top:s,left:a}=this.getCaretPosition();a<60&&(t.scrollLeft=Math.min(a,t.scrollLeft))}r&&(r.scrollTop=t.scrollTop),i&&(i.scrollLeft=t.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.formControl=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),i=this.unescapeTags(L(...r));this.preserveWhitespace||(i=l(i.trim())),i&&(this.value=i,this.defaultValue=i,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight()),this.syncScroll(),(e.key.startsWith("Arrow")||e.key==="Backspace")&&this.syncScroll(!0)}getCaretPosition(){let e=this.shadowRoot?.getElementById("before-caret"),t=this.shadowRoot?.getElementById("after-caret"),r=this.shadowRoot?.getElementById("caret"),i=this.textarea,s={top:0,left:0};if(!e||!t||!r||!i||i.selectionStart!==i.selectionEnd)return s;e.textContent="";let a=this.getLinesToSelectionStart();if(!a)return s;let u=a.length-1,d=a[u].substring(0,i.selectionStart);return e.textContent=d,{top:t.offsetTop-i.scrollTop,left:t.offsetLeft-i.scrollLeft}}setCurrentLineHighlight(){let e=this.getCurrentLineNumber();e!=null&&(this.currentLineNumber=e+1)}getLinesToSelectionStart(){let e=this.textarea;return e?e.value.substring(0,e.selectionStart).split(T):void 0}getCurrentLineNumber(){let e=this.getLinesToSelectionStart();return e?e.length-1:0}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};o(n,"baseName","light-editor"),o(n,"dependencies",{"light-code":$}),o(n,"shadowRootOptions",{...m.shadowRootOptions,delegatesFocus:!0}),o(n,"styles",[x,S,v]),o(n,"properties",{...p.formProperties,wrap:{reflect:!0,state:!1},language:{reflect:!0},src:{},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"},hasFocused:{type:Boolean,reflect:!0,attribute:"data-has-focused"},currentLineNumber:{attribute:!1,state:!0,type:Number},highlighter:{attribute:!1,state:!0}});export{n as a};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-TRMWLL52.js.map
