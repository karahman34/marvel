(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-b3ec3ee2":"5f0ad577","chunk-060d115a":"d30e1fcf","chunk-53c1180a":"f8682092","chunk-de9f6f8a":"c8d67c8d"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-b3ec3ee2":1,"chunk-060d115a":1,"chunk-53c1180a":1,"chunk-de9f6f8a":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-b3ec3ee2":"d37feb8b","chunk-060d115a":"0a3f2b3e","chunk-53c1180a":"2e7d1bb7","chunk-de9f6f8a":"0f57bb6c"}[t]+".css",n=o.p+s,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===s||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/marvel/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"005e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500","overlay-opacity":"0.6"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"px-4"},[t._v(" Character Details ")]),a("character",{attrs:{character:t.character}})],1)],1)},r=[],n=a("12da"),i={components:{Character:n["a"]},props:{character:{type:Object,required:!0}},data:function(){return{show:!0}},watch:{show:function(t){t||this.$emit("close")}}},c=i,o=a("2877"),l=a("6544"),u=a.n(l),d=a("b0af"),m=a("99d9"),h=a("169a"),f=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=f.exports;u()(f,{VCard:d["a"],VCardTitle:m["d"],VDialog:h["a"]})},"095f":function(t,e,a){"use strict";var s=a("c1db"),r=a.n(s);r.a},1:function(t,e){},1141:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.focusCharacter?a("character",{attrs:{character:t.focusCharacter},on:{close:function(e){t.focusCharacter=null}}}):t._e(),a("v-dialog",{attrs:{"max-width":"800"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",{staticClass:"series-detail-dialog"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{attrs:{src:t.thumbnailSrc}})],1),a("v-col",{staticClass:"px-3 py-2",attrs:{cols:"6"}},[a("span",{staticClass:"series-title"},[t._v(" "+t._s(t.series.title)+" ")]),a("hr",{staticClass:"mt-1 mb-2"}),a("div",{staticClass:"series-detail-container"},[a("span",{staticClass:"series-detail-key"},[t._v("Rating: ")]),a("p",{staticClass:"series-detail-val"},[t._v(" "+t._s(t.series.rating)+" ")])]),a("div",{staticClass:"series-detail-container"},[a("span",{staticClass:"series-detail-key"},[t._v("Start Year: ")]),a("p",{staticClass:"series-detail-val"},[t._v(" "+t._s(t.series.startYear)+" ")])]),a("div",{staticClass:"series-detail-container"},[a("span",{staticClass:"series-detail-key"},[t._v("End Year: ")]),a("p",{staticClass:"series-detail-val"},[t._v(" "+t._s(t.series.endYear)+" ")])]),a("div",{staticClass:"series-detail-container"},[a("span",{staticClass:"series-detail-key"},[t._v("Description: ")]),a("p",{staticClass:"series-detail-val"},[t._v(" "+t._s(t.series.description)+" ")])]),a("div",{staticClass:"series-detail-container"},[a("span",{staticClass:"series-detail-key"},[t._v("Characters: ")]),a("p",{staticClass:"series-detail-val"},t._l(t.series.characters.items,(function(e){return a("span",{key:e.id,staticClass:"font-weight-medium white--text",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.showCharacter(e.resourceURI)}}},[t._v(" "+t._s(t.formatCharacterName(e.name))+" ")])})),0)])])],1)],1)],1)],1)},r=[],n=(a("99af"),a("b0c0"),a("96cf"),a("1da1")),i=a("005e"),c=a("72c1"),o={components:{Character:i["a"]},props:{series:{type:Object,required:!0}},data:function(){return{show:!0,focusCharacter:null,lastCharacterName:null}},computed:{thumbnailSrc:function(){var t=this.series.thumbnail,e=t.path,a=t.extension;return"".concat(e,"/portrait_uncanny.").concat(a)}},watch:{show:function(t){t||this.$emit("close")}},mounted:function(){this.series.characters.items&&this.series.characters.items.length&&(this.lastCharacterName=this.series.characters.items[this.series.characters.items.length-1].name)},methods:{formatCharacterName:function(t){return t===this.lastCharacterName?t:"".concat(t,", ")},showCharacter:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$loadingOverlay.show(),a.prev=1,a.next=4,Object(c["c"])(t,"get");case 4:s=a.sent,r=s.data.data,e.focusCharacter=r.results[0],a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),e.$toast.set({color:"red",msg:"Failed to fetch character data."});case 12:return a.prev=12,e.$loadingOverlay.hide(),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[1,9,12,15]])})))()}}},l=o,u=(a("6edc"),a("2877")),d=a("6544"),m=a.n(d),h=a("b0af"),f=a("62ad"),v=a("169a"),p=a("adda"),b=a("0fd9"),g=Object(u["a"])(l,s,r,!1,null,"ad7038b4",null);e["a"]=g.exports;m()(g,{VCard:h["a"],VCol:f["a"],VDialog:v["a"],VImg:p["a"],VRow:b["a"]})},"12da":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"chara-wrapper"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"chara-thumbnail",attrs:{src:t.character.thumbnail.path+"/portrait_uncanny."+t.character.thumbnail.extension}})],1),a("v-col",{staticClass:"chara-details",attrs:{cols:"6"}},[a("div",[a("p",{staticClass:"chara-name"},[t._v(" "+t._s(t.character.name)+" ")]),a("hr",{staticClass:"my-1"}),a("p",{staticClass:"chara-description"},[t.character.description.length>=t.maxCharacters?[a("span",[t._v(" "+t._s(t.showMore?t.character.description:t.character.description.slice(0,t.maxCharacters))+" ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"show-more",on:{click:function(e){t.showMore=!0}}},[t._v(" Show more.. ")])]:[t._v(" "+t._s(t.character.description||"Has no description.")+" ")]],2)])])],1),a("v-expansion-panels",{attrs:{accordion:""}},t._l(t.panels,(function(e){return a("v-expansion-panel",{key:e.text},[a("v-expansion-panel-header",{staticClass:"font-weight-medium"},[t._v(" "+t._s(e.text)+" ("+t._s(e.items.length)+") ")]),a("v-expansion-panel-content",t._l(e.items,(function(e,s){return a("p",{key:s,staticClass:"my-1"},[t._v(" "+t._s(e)+" ")])})),0)],1)})),1)],1)],1)},r=[],n=(a("d81d"),a("b0c0"),{props:{character:{type:Object,required:!0}},data:function(){return{maxCharacters:117,showMore:!1,panels:[],focusComic:null}},created:function(){this.setSeries(),this.setComics()},methods:{setComics:function(){var t={text:"Comics",items:[]};this.character.comics.items.map((function(e){return t.items.push(e.name)})),this.panels.push(t)},setSeries:function(){var t={text:"Series",items:[]};this.character.series.items.map((function(e){return t.items.push(e.name)})),this.panels.push(t)}}}),i=n,c=(a("ea59"),a("2877")),o=a("6544"),l=a.n(o),u=a("b0af"),d=a("62ad"),m=a("cd55"),h=a("49e2"),f=a("c865"),v=a("0393"),p=a("adda"),b=a("0fd9"),g=Object(c["a"])(i,s,r,!1,null,"407ed6c4",null);e["a"]=g.exports;l()(g,{VCard:u["a"],VCol:d["a"],VExpansionPanel:m["a"],VExpansionPanelContent:h["a"],VExpansionPanelHeader:f["a"],VExpansionPanels:v["a"],VImg:p["a"],VRow:b["a"]})},"13a5":function(t,e,a){"use strict";var s=a("9540"),r=a.n(s);r.a},2:function(t,e){},"2a7b":function(t,e,a){},3:function(t,e){},"31aa":function(t,e,a){},"3f5a":function(t,e,a){"use strict";var s=a("df77"),r=a.n(s);r.a},4:function(t,e){},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.f08deb69.png"},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-bar",{attrs:{menus:t.menus},on:{"nav-draw-toggle":function(e){t.navDraw=!t.navDraw}}}),t.navDraw?a("nav-draw",{attrs:{menus:t.menus},on:{close:function(e){t.navDraw=!1}}}):t._e(),a("v-main",[a("toast"),a("loader-circular-dialog"),a("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{attrs:{app:"",fixed:""}},[s("v-app-bar-nav-icon",{attrs:{id:"nav-draw-activator"},on:{click:function(e){return t.$emit("nav-draw-toggle")}}}),s("v-toolbar-title",{staticClass:"tool-bar-title"},[s("router-link",{staticClass:"text-decoration-none white--text",attrs:{to:"/"}},[s("img",{attrs:{id:"logo-image",src:a("4ffd")}})])],1),s("v-spacer"),s("home-search",{staticClass:"home-search-component"}),t._l(t.menus,(function(e){return s("router-link",{key:e.text,staticClass:"menu",class:{active:e.to===t.$route.path},attrs:{to:e.to}},[s("span",{staticClass:"menu-text"},[t._v(t._s(e.text))])])}))],2)},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-text-field",{staticClass:"home-search-input",attrs:{solo:"",dense:"",rounded:"","single-line":"","hide-details":"","prepend-inner-icon":"mdi mdi-magnify",label:"Search for comics,characters,series.."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-dialog",{attrs:{"max-width":"1000"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex justify-space-between align-center"},[a("div",[a("v-icon",[t._v("mdi mdi-magnify")]),t._v(" Search ")],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi mdi-close")])],1)],1),a("div",{staticClass:"px-2 pt-1",class:{"pt-2":null!==t.search&&t.search.lenght}},[a("v-text-field",{attrs:{label:"Enter the keywords here..",loading:t.loading},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-tabs",{staticClass:"py-4",attrs:{grow:""},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])})),1),a("v-tabs-items",{model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabs,(function(e){return a("v-tab-item",{key:e,staticClass:"py-3 px-3"},[t.loading?a("div",{staticClass:"text-center font-weight-medium white--text"},[t._v(" Loading... ")]):t._e(),!t.loading&&t.results.length?[a(t.tabActiveComponent,{tag:"component",attrs:{results:t.results}}),a("div",{staticClass:"pb-1"},[a("v-btn",{attrs:{block:"",color:"success",to:t.goToRouteIndex(),disabled:t.results.length>=t.itemsLength}},[t._v(" See more ")])],1)]:t._e(),t.loading||t.results.length?t._e():a("h2",{staticClass:"text-center"},[t._v(" no results.. ")])],2)})),1)],1)],1)],1)},l=[],u=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},t._l(t.results,(function(t){return a("v-col",{key:t.id,staticClass:"px-2 pb-6 pt-0",attrs:{cols:"6",sm:"4",md:"3"}},[a("comic",{attrs:{comic:t}})],1)})),1)},m=[],h=a("7d8f"),f={components:{Comic:h["a"]},props:{results:{type:Array,required:!0}}},v=f,p=a("2877"),b=a("6544"),g=a.n(b),C=a("62ad"),_=a("0fd9"),x=Object(p["a"])(v,d,m,!1,null,null,null),w=x.exports;g()(x,{VCol:C["a"],VRow:_["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},t._l(t.results,(function(t){return a("v-col",{key:t.id,staticClass:"px-2 pb-6 pt-0",attrs:{cols:"12",sm:"6",md:"3"}},[a("character",{attrs:{character:t}})],1)})),1)},k=[],O=a("12da"),V={components:{Character:O["a"]},props:{results:{type:Array,required:!0}}},S=V,j=Object(p["a"])(S,y,k,!1,null,null,null),T=j.exports;g()(j,{VCol:C["a"],VRow:_["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},t._l(t.results,(function(t){return a("v-col",{key:t.id,staticClass:"px-2 pb-6 pt-0",attrs:{cols:"6",sm:"4",md:"3"}},[a("series",{attrs:{series:t}})],1)})),1)},D=[],$=a("e60b"),A={components:{Series:$["a"]},props:{results:{type:Array,required:!0}}},R=A,N=Object(p["a"])(R,E,D,!1,null,null,null),L=N.exports;g()(N,{VCol:C["a"],VRow:_["a"]});var I=a("72c1"),P={components:{ComicResults:w,CharacterResults:T,SeriesResults:L},data:function(){return{dialog:!1,loading:!1,search:null,searchTimeout:null,results:[],itemsLength:null,tabActive:0,tabs:["comics","characters","series"],tabActiveComponent:"comic-results"}},watch:{search:function(){var t=this;null!==this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){t.dialog=!0,null!==t.search&&t.getResults()}),600)},tabActive:function(t){switch(this.getResults(),t){case 0:this.tabActiveComponent="comic-results";break;case 1:this.tabActiveComponent="character-results";break;case 2:this.tabActiveComponent="series-results";break}}},methods:{goToRouteIndex:function(){var t={page:"2",search:this.search};switch(this.tabActive){case 0:return{query:t,name:"comic.index"};case 1:return{query:t,name:"character.index"};case 2:return{query:t,name:"series.index"}}},goSearch:function(){switch(this.tabActive){case 0:return Object(I["b"])({titleStartsWith:this.search});case 1:return Object(I["a"])({nameStartsWith:this.search});case 2:return Object(I["d"])({titleStartsWith:this.search})}},getResults:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.goSearch();case 4:a=e.sent,s=a.data.data,t.results=s.results,t.itemsLength=s.total,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),t.$toast.set({color:"red",msg:"Failed to get search results."}),console.log(e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))()}}},M=P,q=(a("da74"),a("8336")),H=a("b0af"),B=a("99d9"),F=a("169a"),U=a("132d"),W=a("71a3"),J=a("c671"),Y=a("fe57"),z=a("aac8"),G=a("8654"),K=Object(p["a"])(M,o,l,!1,null,"6b194574",null),Q=K.exports;g()(K,{VBtn:q["a"],VCard:H["a"],VCardTitle:B["d"],VDialog:F["a"],VIcon:U["a"],VTab:W["a"],VTabItem:J["a"],VTabs:Y["a"],VTabsItems:z["a"],VTextField:G["a"]});var X={components:{HomeSearch:Q},props:{menus:{type:Array,required:!0}}},Z=X,tt=(a("74cc"),a("40dc")),et=a("5bc1"),at=a("2fa4"),st=a("2a7f"),rt=Object(p["a"])(Z,i,c,!1,null,"46a902c3",null),nt=rt.exports;g()(rt,{VAppBar:tt["a"],VAppBarNavIcon:et["a"],VSpacer:at["a"],VToolbarTitle:st["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-list",[a("v-list-item-group",t._l(t.menus,(function(e){return a("v-list-item",{key:e.to,attrs:{to:e.to,exact:""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1)},ct=[],ot={props:{menus:{type:Array,required:!0}},data:function(){return{show:!0}},watch:{show:function(t){t||this.$emit("close")}}},lt=ot,ut=a("8860"),dt=a("da13"),mt=a("5d23"),ht=a("1baa"),ft=a("f774"),vt=Object(p["a"])(lt,it,ct,!1,null,null,null),pt=vt.exports;g()(vt,{VList:ut["a"],VListItem:dt["a"],VListItemContent:mt["a"],VListItemGroup:ht["a"],VListItemTitle:mt["b"],VNavigationDrawer:ft["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("v-snackbar",{attrs:{top:"",centered:"",color:t.color,value:!0},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{text:"",color:t.buttonColor},on:{click:t.close}},"v-btn",s,!1),[t._v(" Close ")])]}}],null,!1,2929869511)},[a("span",{staticClass:"font-font-weight-bolder"},[t._v(t._s(t.msg))])]):t._e()],1)},gt=[],Ct={data:function(){return{closeTimeOut:null}},computed:{previous:function(){return this.$toast.previous},color:function(){return this.$toast.color},timeout:function(){return this.$toast.timeout},msg:function(){return this.$toast.msg},show:function(){return this.$toast.show},buttonColor:function(){return this.color?"white":"red"}},watch:{msg:function(t,e){var a=this;null!==e&&null!==t&&t!==e&&(this.close(),this.closeTimeOut&&clearTimeout(this.closeTimeOut),this.$nextTick((function(){return setTimeout((function(){return a.$toast.set(a.previous)}),250)})))},show:function(t,e){var a=this;!e&&t&&(this.closeTimeOut&&clearTimeout(this.closeTimeOut),this.closeTimeOut=setTimeout((function(){return a.close()}),this.timeout))}},methods:{close:function(){this.$toast.close()}}},_t=Ct,xt=a("2db4"),wt=Object(p["a"])(_t,bt,gt,!1,null,null,null),yt=wt.exports;g()(wt,{VBtn:q["a"],VSnackbar:xt["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-overlay",{attrs:{opacity:"0.6","z-index":"99999999",value:t.active}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"60"}}),a("p",{staticClass:"mt-5 font-weight-medium"},[t._v(" Loading... ")])],1)},Ot=[],Vt={computed:{active:function(){return this.$loadingOverlay.active}}},St=Vt,jt=a("a797"),Tt=a("490a"),Et=Object(p["a"])(St,kt,Ot,!1,null,null,null),Dt=Et.exports;g()(Et,{VOverlay:jt["a"],VProgressCircular:Tt["a"]});var $t={name:"App",components:{Toast:yt,AppBar:nt,NavDraw:pt,LoaderCircularDialog:Dt},data:function(){return{navDraw:!1,menus:[{text:"Home",to:"/"},{text:"Comics",to:"/comics"},{text:"Series",to:"/series"},{text:"Characters",to:"/characters"}]}}},At=$t,Rt=(a("5c0b"),a("7496")),Nt=a("f6c4"),Lt=Object(p["a"])(At,r,n,!1,null,null,null),It=Lt.exports;g()(Lt,{VApp:Rt["a"],VMain:Nt["a"]});var Pt=a("d4ec"),Mt=a("bee2"),qt=3e3,Ht=void 0,Bt="toast",Ft={namespaced:!0,state:{show:!1,msg:null,color:Ht,timeout:qt,previous:null},mutations:{SET_COLOR:function(t,e){t.color=e},SET_TIMEOUT:function(t,e){t.timeout=e},SET_MSG:function(t,e){t.msg=e},SET_SHOW:function(t,e){t.show=e},CLEAR:function(t){t.previous={msg:t.msg,color:t.color,timeout:t.timeout},t.color=Ht,t.timeout=qt,t.msg=null,t.show=!1}}},Ut=function(){function t(e){Object(Pt["a"])(this,t),this.store=e}return Object(Mt["a"])(t,[{key:"set",value:function(t){var e=t.msg,a=t.timeout,s=t.color;this.store.commit("".concat(Bt,"/SET_MSG"),e),this.store.commit("".concat(Bt,"/SET_SHOW"),!0),s&&this.store.commit("".concat(Bt,"/SET_COLOR"),s),a&&this.store.commit("".concat(Bt,"/SET_TIMEOUT"),a)}},{key:"close",value:function(){this.store.commit("".concat(Bt,"/CLEAR"))}},{key:"previous",get:function(){return this.store.state[Bt].previous}},{key:"show",get:function(){return this.store.state[Bt].show}},{key:"msg",get:function(){return this.store.state[Bt].msg}},{key:"timeout",get:function(){return this.store.state[Bt].timeout}},{key:"color",get:function(){return this.store.state[Bt].color}}]),t}(),Wt={install:function(t,e){var a=e.store;a.registerModule(Bt,Ft),t.prototype.$toast=new Ut(a)}},Jt=a("f309"),Yt=a("fcf4");s["a"].use(Jt["a"]);var zt=new Jt["a"]({theme:{dark:!0,themes:{dark:{primary:Yt["a"].green.lighten1}}}}),Gt=(a("99af"),a("2909")),Kt=a("8c4f"),Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home mb-10"},[a("jumbotron"),a("series-feeds",{staticClass:"mt-6 mb-12",attrs:{limit:t.limit}}),a("character-feeds",{attrs:{limit:t.limit}})],1)},Xt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"jumbotron"}})},te=[],ee={name:"Jumbotron"},ae=ee,se=(a("095f"),Object(p["a"])(ae,Zt,te,!1,null,"f7253998",null)),re=se.exports,ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feed home-container"},[t.focusSeries?a("detail-dialog",{attrs:{series:t.focusSeries},on:{close:function(e){t.focusSeries=null}}}):t._e(),a("div",{staticClass:"feed-header"},[a("p",{staticClass:"feed-header-text"},[t._v(" New Series ")]),a("v-btn",{attrs:{color:"primary",to:{name:"series.index"}}},[t._v(" See More ")])],1),a("my-carousel",{staticClass:"mt-3"},[t.loading?t._l(t.limit,(function(t){return a("slide",{key:t,staticClass:"px-2"},[a("v-skeleton-loader",{attrs:{type:"image"}})],1)})):t._l(t.series,(function(e){return a("slide",{key:e.id,staticClass:"px-2"},[a("span",{staticClass:"feed-link",on:{click:function(a){t.focusSeries=e}}},[a("v-img",{staticClass:"feed-thumbnail",attrs:{src:e.thumbnail.path+"/portrait_incredible."+e.thumbnail.extension}}),a("span",{staticClass:"feed-text",domProps:{textContent:t._s(e.title)}})],1)])}))],2)],1)},ie=[],ce=(a("a9e3"),a("1141")),oe={components:{DetailDialog:ce["a"]},props:{limit:{type:Number,required:!0}},data:function(){return{loading:!1,series:[],focusSeries:null}},mounted:function(){this.getSeriesHandler()},methods:{getSeriesHandler:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,Object(I["d"])({limit:t.limit,orderBy:"-modified"});case 4:a=e.sent,s=a.data.data,t.series=s.results,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$toast.set({msg:"Failed to get series.",color:"danger"});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}}},le=oe,ue=a("adda"),de=a("3129"),me=Object(p["a"])(le,ne,ie,!1,null,null,null),he=me.exports;g()(me,{VBtn:q["a"],VImg:ue["a"],VSkeletonLoader:de["a"]});var fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feed home-container"},[a("div",{staticClass:"feed-header"},[a("p",{staticClass:"feed-header-text"},[t._v(" Characters ")]),a("v-btn",{attrs:{color:"primary",to:{name:"character.index"}}},[t._v(" See More ")])],1),a("my-carousel",{staticClass:"mt-3"},[t.loading?t._l(t.limit,(function(t){return a("slide",{key:t,staticClass:"px-2"},[a("div",[a("v-skeleton-loader",{attrs:{type:"image"}})],1)])})):t._l(t.characters,(function(e){return a("slide",{key:e.id,staticClass:"px-2"},[a("div",{staticClass:"feed-link",on:{click:function(a){return t.openDetailDialog(e)}}},[a("v-img",{staticClass:"feed-thumbnail mb-2",attrs:{src:e.thumbnail.path+"/portrait_incredible."+e.thumbnail.extension}}),a("span",{staticClass:"feed-text",domProps:{textContent:t._s(e.name)}})],1)])}))],2),t.detailDialog&&t.focusCharacter?a("feed-detail-dialog",{attrs:{character:t.focusCharacter},on:{close:function(e){t.detailDialog=!1}}}):t._e()],1)},ve=[],pe=a("005e"),be={components:{FeedDetailDialog:pe["a"]},props:{limit:{type:Number,required:!0}},data:function(){return{loading:!1,characters:[],detailDialog:!1,focusCharacter:null}},watch:{detailDialog:function(t){t||(this.focusCharacter=null)}},mounted:function(){this.getCharactersHandler()},methods:{openDetailDialog:function(t){this.detailDialog=!0,this.focusCharacter=t},getCharactersHandler:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,Object(I["a"])({limit:t.limit,orderBy:"-modified"});case 4:a=e.sent,s=a.data.data,t.characters=s.results,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$toast.set({msg:"Failed to get characters.",color:"danger"});case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}}},ge=be,Ce=Object(p["a"])(ge,fe,ve,!1,null,null,null),_e=Ce.exports;g()(Ce,{VBtn:q["a"],VImg:ue["a"],VSkeletonLoader:de["a"]});var xe={name:"Home",components:{Jumbotron:re,SeriesFeeds:he,CharacterFeeds:_e},data:function(){return{limit:12}}},we=xe,ye=Object(p["a"])(we,Qt,Xt,!1,null,null,null),ke=ye.exports,Oe=(a("d3b7"),a("d81d"),a("b0c0"),function(t){var e=t.prefix,a=t.name,s=t.routes;return s.map((function(t){return{path:"".concat(e).concat(t.path),name:"".concat(a,".").concat(t.name),component:t.component,meta:t.meta}}))}),Ve=function(t){var e,a="Marvel",s=null===(e=t.meta)||void 0===e?void 0:e.title;document.title=s?"".concat(s," - ").concat(a):a},Se="/characters",je="character",Te=[{path:"/",name:"index",meta:{title:"Characters"},component:function(){return Promise.all([a.e("chunk-b3ec3ee2"),a.e("chunk-060d115a")]).then(a.bind(null,"d56c"))}}],Ee=Oe({prefix:Se,name:je,routes:Te}),De="comic",$e="/comics",Ae=[{path:"",name:"index",meta:{title:"Comics"},component:function(){return Promise.all([a.e("chunk-b3ec3ee2"),a.e("chunk-de9f6f8a")]).then(a.bind(null,"c5c0"))}}],Re=Oe({name:De,prefix:$e,routes:Ae}),Ne="series",Le="/series",Ie=[{path:"",name:"index",meta:{title:"Series"},component:function(){return Promise.all([a.e("chunk-b3ec3ee2"),a.e("chunk-53c1180a")]).then(a.bind(null,"f431"))}}],Pe=Oe({name:Ne,prefix:Le,routes:Ie});s["a"].use(Kt["a"]);var Me=[{path:"/",name:"Home",component:ke}].concat(Object(Gt["a"])(Re),Object(Gt["a"])(Ee),Object(Gt["a"])(Pe)),qe=new Kt["a"]({mode:"history",base:"/marvel/",routes:Me});qe.beforeEach((function(t,e,a){Ve(t),a()}));var He=qe,Be=a("2f62");s["a"].use(Be["a"]);var Fe=new Be["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ue={namespaced:!0,state:{active:!1},mutations:{SET_ACTIVE:function(t,e){t.active=e}}},We=function(){function t(e,a){Object(Pt["a"])(this,t),this.store=a,this.vuexName=e}return Object(Mt["a"])(t,[{key:"show",value:function(){this.store.commit("".concat(this.vuexName,"/SET_ACTIVE"),!0)}},{key:"hide",value:function(){this.store.commit("".concat(this.vuexName,"/SET_ACTIVE"),!1)}},{key:"active",get:function(){return this.store.state[this.vuexName].active}}]),t}(),Je={install:function(t,e){var a="loadingOverlay";e.registerModule(a,Ue),t.prototype.$loadingOverlay=new We(a,e)}},Ye=a("0a63"),ze=a.n(Ye),Ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("carousel",{attrs:{"navigation-enabled":"","navigation-prev-label":t.prevLabel,"navigation-next-label":t.nextLabel,"pagination-enabled":!1,"per-page-custom":[[600,4],[960,6]]}},[t._t("default")],2)},Ke=[],Qe={data:function(){return{prevLabel:'<i class="mdi mdi-chevron-left-circle prev-label"></i>',nextLabel:'<i class="mdi mdi-chevron-right-circle next-label"></i>'}}},Xe=Qe,Ze=(a("3f5a"),Object(p["a"])(Xe,Ge,Ke,!1,null,null,null)),ta=Ze.exports;s["a"].config.productionTip=!1,s["a"].use(Wt,{store:Fe}),s["a"].use(Je,Fe),s["a"].use(ze.a),s["a"].component("my-carousel",ta),new s["a"]({router:He,vuetify:zt,store:Fe,render:function(t){return t(It)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"5f97":function(t,e,a){},6:function(t,e){},6137:function(t,e,a){},"6edc":function(t,e,a){"use strict";var s=a("5f97"),r=a.n(s);r.a},7:function(t,e){},"72c1":function(t,e,a){"use strict";a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return h})),a.d(e,"b",(function(){return f})),a.d(e,"a",(function(){return m}));a("d3b7"),a("25f0");var s=a("5530"),r=a("bc3a"),n=a.n(r),i=a("72fe"),c=a.n(i),o="https://gateway.marvel.com/v1/public",l="7a510d24169c3dab50d4ed452cafd6e4",u="e7c6c7dd3a21f6020b83c25ab1f14c5988e0d17b";function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(new Date).getTime(),i=c()(r+u+l).toString();return n()({baseURL:o,url:t,method:e,params:Object(s["a"])({ts:r,hash:i,apikey:l},a)})}var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d("/characters","get",t)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d("/series","get",t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d("/comics","get",t)}},"74cc":function(t,e,a){"use strict";var s=a("2a7b"),r=a.n(s);r.a},"7b42":function(t,e,a){},"7d8f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.detailDialog?a("details-dialog",{attrs:{comic:t.comic},on:{close:function(e){t.detailDialog=!1}}}):t._e(),a("v-card",{staticClass:"comic"},[a("v-img",{attrs:{src:t.imgSrc}}),a("v-card-subtitle",[a("span",{staticClass:"comic-title"},[t._v(t._s(t.comic.title))])]),a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"comic-description"},[t._v(" "+t._s(t.desc)+" "),t.comic.description&&t.comic.description.length>100?a("span",{staticClass:"font-weight-bolder white--text",staticStyle:{"font-size":"18px"}},[t._v(" ... ")]):t._e()])]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{staticClass:"mr-1",attrs:{text:"",color:"orange"},nativeOn:{click:function(e){t.detailDialog=!0}}},[t._v(" Detail ")])],1)],1)],1)},r=[],n=(a("a4d3"),a("e01a"),a("99af"),a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.focusCharacter?a("character",{attrs:{character:t.focusCharacter},on:{close:function(e){t.focusCharacter=null}}}):t._e(),a("v-dialog",{attrs:{"max-width":"800","overlay-opacity":"0.6"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",{staticClass:"comic-detail-dialog"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"comic-thumbnail",attrs:{src:t.thumbnailSrc}})],1),a("v-col",{staticClass:"comic-details px-4 py-2",attrs:{cols:"6"}},[a("span",{staticClass:"comic-title font-weight-bold"},[t._v(" "+t._s(t.comic.title)+" ")]),a("hr",{staticClass:"separator mt-1 mb-2"}),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("Pages: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.pageCount))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("isbn: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.isbn))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("upc: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.upc))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("ean: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.ean))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("issn: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.issn))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("modified: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t._f("formatDate")(t.comic.modified)))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("Description: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.comic.description||"Has no description."))])]),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("Characters: ")]),t._l(t.comic.characters.items,(function(e){return a("span",{key:e.name,staticClass:"comic-detail-val white--text font-weight-medium comic-detail-character",on:{click:function(a){return t.showCharacter(e.resourceURI)}}},[t._v(" "+t._s(t.formatCharaName(e.name))+" ")])}))],2),a("div",{staticClass:"comic-detail-container"},[a("span",{staticClass:"d-block comic-detail-key"},[t._v("Creators: ")]),a("span",{staticClass:"comic-detail-val"},[t._v(t._s(t.creatorNames.join(", ")))])])])],1)],1)],1)],1)}),i=[],c=(a("d81d"),a("b0c0"),a("96cf"),a("1da1")),o=a("005e"),l=a("72c1"),u={components:{Character:o["a"]},filters:{formatDate:function(t){var e=new Date(t);return e.toDateString()}},props:{comic:{type:Object,required:!0}},data:function(){return{loader:!1,show:!0,lastCharaName:null,focusCharacter:null}},computed:{thumbnailSrc:function(){var t=this.comic.thumbnail,e=t.path,a=t.extension;return"".concat(e,"/portrait_uncanny.").concat(a)},creatorNames:function(){return this.comic.creators.items.map((function(t){return t.name}))}},watch:{show:function(t){t||this.$emit("close")}},mounted:function(){this.comic.characters.items.length&&(this.lastCharaName=this.comic.characters.items[this.comic.characters.items.length-1].name)},methods:{formatCharaName:function(t){return t!==this.lastCharaName?"".concat(t,", "):t},showCharacter:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$loadingOverlay.show(),a.prev=1,a.next=4,Object(l["c"])(t,"get");case 4:s=a.sent,r=s.data.data,e.focusCharacter=r.results[0],a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),e.$toast.set({msg:"Failed to fetch character data.",color:"red"});case 12:return a.prev=12,e.$loadingOverlay.hide(),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[1,9,12,15]])})))()}}},d=u,m=(a("13a5"),a("2877")),h=a("6544"),f=a.n(h),v=a("b0af"),p=a("62ad"),b=a("169a"),g=a("adda"),C=a("0fd9"),_=Object(m["a"])(d,n,i,!1,null,"1578b1d8",null),x=_.exports;f()(_,{VCard:v["a"],VCol:p["a"],VDialog:b["a"],VImg:g["a"],VRow:C["a"]});var w={components:{DetailsDialog:x},props:{comic:{type:Object,required:!0}},data:function(){return{detailDialog:!1}},computed:{imgSrc:function(){var t=this.comic.thumbnail,e=t.path,a=t.extension;return"".concat(e,"/standard_xlarge.").concat(a)},desc:function(){return this.comic.description?this.comic.description.slice(0,100):"Has no description."}}},y=w,k=(a("d04e"),a("8336")),O=a("99d9"),V=Object(m["a"])(y,s,r,!1,null,"75fc7a07",null);e["a"]=V.exports;f()(V,{VBtn:k["a"],VCard:v["a"],VCardActions:O["a"],VCardSubtitle:O["b"],VCardText:O["c"],VImg:g["a"]})},8:function(t,e){},9:function(t,e){},9540:function(t,e,a){},"9c0c":function(t,e,a){},b9e3:function(t,e,a){},c1db:function(t,e,a){},d04e:function(t,e,a){"use strict";var s=a("7b42"),r=a.n(s);r.a},d62c:function(t,e,a){"use strict";var s=a("31aa"),r=a.n(s);r.a},da74:function(t,e,a){"use strict";var s=a("b9e3"),r=a.n(s);r.a},df77:function(t,e,a){},e60b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.openDetail?a("detail-dialog",{attrs:{series:t.series},on:{close:function(e){t.openDetail=!1}}}):t._e(),a("v-card",{staticClass:"series"},[a("v-img",{attrs:{src:t.thumbnailSrc}}),a("v-card-title",[a("span",{staticClass:"series-title"},[t._v(t._s(t.series.title))])]),a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"series-description mb-0"},[t._v(" "+t._s(t._f("slice")(t.series.description))+" ")])]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{staticClass:"mr-1",attrs:{text:"",color:"orange"},nativeOn:{click:function(e){t.openDetail=!0}}},[t._v(" Detail ")])],1)],1)],1)},r=[],n=(a("99af"),a("fb6a"),a("1141")),i={components:{DetailDialog:n["a"]},filters:{slice:function(t){if(!t)return"Has no description.";var e=t.length;if(e<=100)return t;var a=t.slice(0,100);return"".concat(a,"...")}},props:{series:{type:Object,required:!0}},data:function(){return{openDetail:!1}},computed:{thumbnailSrc:function(){var t=this.series.thumbnail,e=t.path,a=t.extension;return"".concat(e,"/standard_xlarge.").concat(a)}}},c=i,o=(a("d62c"),a("2877")),l=a("6544"),u=a.n(l),d=a("8336"),m=a("b0af"),h=a("99d9"),f=a("adda"),v=Object(o["a"])(c,s,r,!1,null,"249c6ce0",null);e["a"]=v.exports;u()(v,{VBtn:d["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VImg:f["a"]})},ea59:function(t,e,a){"use strict";var s=a("6137"),r=a.n(s);r.a}});
//# sourceMappingURL=app.33150e2c.js.map