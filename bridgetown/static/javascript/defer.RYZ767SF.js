import"/light-pen/bridgetown/static/chunks/chunk-6NDGNSQO.js";(window.requestIdleCallback||window.setTimeout)(async()=>{let{BridgetownNinjaKeys:t}=await import("/light-pen/bridgetown/static/chunks/ninja-keys-ECNZNKI7.js"),c=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends t{constructor(...l){super(...l),this.staticData=c}createData(){return this.results=this.showResultsForQuery(this._search||"*").reverse(),this.results.forEach(l=>{l.icon='<sl-icon name="link-45deg"></sl-icon>'}),this.staticData.concat(this.results)}transformResult(l){let{id:o,title:b,categories:i,url:s,content:L,collection:Q}=l;if(!s.endsWith(".json"))return{id:o,title:b,section:Q.name,href:s,content:L}}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(l=>{l.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(l=>l.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(l=>l.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
//# sourceMappingURL=/light-pen/bridgetown/static/javascript/defer.RYZ767SF.js.map
