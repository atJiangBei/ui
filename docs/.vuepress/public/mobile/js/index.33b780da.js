(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={index:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a82":function(t,e,n){t.exports=n.p+"img/logo120.deeec9d1.png"},"328d":function(t,e,n){},"3f88":function(t,e,n){"use strict";n("ac6a");var r=n("8ba9"),i=[];r.keys().forEach((function(t){var e=r(t);i.push({path:"/"+e.default.path,tags:e.default.tags,label:e.default.label,component:e.default})})),e["a"]=i},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("a026"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app"},[r("div",{staticClass:"nav-bar"},[r("div",[r("div",{staticClass:"nav-bar-bg"},[r("img",{attrs:{src:n("80c6")}}),r("span",{staticClass:"nav-bar-date"},[t._v(t._s(t.date))])]),r("div",{staticClass:"nav-bar-url"},[r("div",[t._v(t._s(t.url))])])])]),"/"!==t.$route.path?r("div",{staticClass:"nav-demo-name"},[r("img",{attrs:{src:n("f974")},on:{click:function(e){return e.preventDefault(),t.goHome(e)}}}),r("i",[t._v("|")]),r("span",[t._v(t._s(t.route.label))])]):t._e(),r("router-view")],1)},a=[],o=(n("ac6a"),n("ade3")),c=n("2f62");n("a481"),n("4917");function s(){var t=navigator.userAgent,e=t.match(/NetType\/\w+/)?t.match(/NetType\/\w+/)[0]:"NetType/other";switch(e=e.toLowerCase().replace("nettype/",""),e){case"wifi":return"wifi";case"4g":return"4g";case"3g":return"3g";case"3gnet":return"3g";case"2g":return"2g";default:return"other"}return e}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={data:function(){return{currheight:window.innerHeight,currwidth:window.innerWidth,url:window.location.href}},watch:{},computed:l({},Object(c["b"])(["route"]),{date:function(){var t=new Date;return t.getHours()+":"+t.getMinutes()},workType:function(){return s()}}),methods:{goHome:function(){this.$router.push({path:"/"})}}},d=f,p=(n("5c0b"),n("2877")),h=Object(p["a"])(d,i,a,!1,null,null,null),g=h.exports,A=n("8c4f"),v=n("3f88");r["a"].use(A["a"]);var m=new A["a"]({routes:v["a"]}),b=m,w={state:{route:{}},mutations:{changeRoute:function(t,e){console.log(e),t.route=e}},actions:{}},O={route:function(t){return t.Init.route}};r["a"].use(c["a"]);var j,y,C=new c["a"].Store({modules:{Init:w},getters:O}),E=n("998c"),N=n.n(E),k={name:"Icon",props:{name:String,tag:{type:String,default:"i"},size:[String,Number],color:String},render:function(t){this.color;var e=this.size,n=null;return e&&(n="string"===typeof e?e:e+"px"),t(this.tag,{class:Object(o["a"])({"sv-iconfont":!0},"sv-icon-"+this.name,!0),style:{color:this.color,fontSize:n}})}},R=k,D=Object(p["a"])(R,j,y,!1,null,null,null),Z=D.exports,P=Z,G=[P],I=function(t){G.forEach((function(e){t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&I(window.Vue);var M={install:I};n("7e51");r["a"].use(N.a),r["a"].use(M),r["a"].config.productionTip=!1,new r["a"]({store:C,router:b,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},"7e51":function(t,e,n){},"80c6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAs4AAAAWCAYAAADQHhpHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YTkxYzFlYi0wNzJkLTI5NDgtYmZmMC02NTQxZDZkOTRmMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGMkNBNzBEMkQ1MTFFOUFERDBERDhFNjg5NzhDOUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhGMkNBNkZEMkQ1MTFFOUFERDBERDhFNjg5NzhDOUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZhOTFjMWViLTA3MmQtMjk0OC1iZmYwLTY1NDFkNmQ5NGYwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2YTkxYzFlYi0wNzJkLTI5NDgtYmZmMC02NTQxZDZkOTRmMDYiLz4gPC9y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"},"8ba9":function(t,e,n){var r={"./icon.vue":"c461","./index.vue":"d74f"};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id="8ba9"},"99db":function(t,e,n){},bea0:function(t,e,n){"use strict";var r=n("99db"),i=n.n(r);i.a},c461:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-icon"},[n("div",{staticClass:"demo-icon-container"},[n("ul",t._l(t.icons,(function(e){return n("li",{key:e},[n("icon",{attrs:{name:e}}),n("span",[t._v(t._s(e))])],1)})),0)])])},i=[],a=(n("ac6a"),n("ade3")),o=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={tags:"基础组件",label:"icon",path:"icon"},l=["menu","starton","fail","clock","add","friends","halfstar","plus","position","loading","scan","setting","start","fenxiang","aret-left","bell","down","determine","close","edit","hot","back","licke","phone","records","cart","circle","selected","warn","rank","service","sort-down","sort-up","up-load","sort","location","licke-active","calendar","jinggao","chat","shoping","arrow-right","delete","success","question","select","message","minus","chatline","home","checked","load","switch","qr-code","moreread","operation","search","promotion","checkedhalf"],f=s({},u,{data:function(){return{icons:l}},created:function(){this.commitRoute(u)},methods:s({},Object(o["c"])({commitRoute:"changeRoute"}))}),d=f,p=(n("bea0"),n("2877")),h=Object(p["a"])(d,r,i,!1,null,null,null);e["default"]=h.exports},c493:function(t,e,n){"use strict";var r=n("328d"),i=n.n(r);i.a},ce2f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABNElEQVRoQ+XYyw3CQAxF0ecKEB1QSiiBDigiriKzoANKoQVaoINQwaBILFggpHjs54nIOp974pVHsPFLNt6P/wSM43gTkQOA0zRN98wpmiagqjOAXa11FpFjJsIKOAO4Ln8+G2ECLOGq2gXCDOgF0QToAdEMyEa4ADIRboAshCsgA+EOYCNCAExEGICFCAUwEOGAaAQFEImgAaIQVEAEgg7wRqQAPBFpgG+IUsp+7X7dE+BRSlkOClZdaYDPlRTAE8BgORxIAXjFL6OiAzzj6QDveCogIp4GiIqnACLjwwHR8aEARnwYgBUfAmDGuwPY8a6AjHg3QFa8CyAzvhmQHd8E6CHeDOglvgVQ33ufeZNatTf+uNm00KjqpdY6iMjZsgZ6xZsn4BnQ+i7TBFo/6vn85gEvzzA6QEcbm/YAAAAASUVORK5CYII="},d74f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sv-demo"},[t._m(0),r("div",{staticClass:"sv-demo-bd"},t._l(t.list,(function(e,i){return r("div",{key:i,staticClass:"sv-demo-list"},[r("div",{staticClass:"sv-list-header",on:{click:function(e){return t.select(i)}}},[r("div",{staticClass:"sv-demo-category-name"},[t._v(t._s(e.label))]),r("div",{staticClass:"sv-demo-category-arrow"},[r("span",{class:{active:e.checked}},[r("img",{attrs:{src:n("ce2f")}})])])]),e&&e.checked?r("div",{staticClass:"sv-list-body"},t._l(e.children,(function(e){return r("div",{key:e.path,staticClass:"sv-list-item"},[r("div",{staticClass:"sv-list-line",on:{click:function(n){return t.goRoute(e.path)}}},[r("div",{staticClass:"sv-list-content"},[t._v(t._s(e.label))]),r("div",{staticClass:"sv-list-arrow"})])])})),0):t._e()])})),0)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sv-demo-hd"},[r("h1",{staticClass:"sv-demo-title"},[r("img",{attrs:{src:n("2a82")}}),r("span",[t._v("solar-vue")])]),r("h2",{staticClass:"sv-demo-subtitle"},[t._v("平安寿险移动端组件库")])])}],a=(n("ac6a"),n("2909")),o=n("3f88"),c={path:"",mounted:function(){var t=o["a"].filter((function(t){return"/"!=t.path})).map((function(t){return t.tags}));t=Object(a["a"])(new Set(t));for(var e=[],n=0;n<t.length;n++){e.push({label:t[n],children:[]});for(var r=0;r<o["a"].length;r++)if(o["a"][r].tags===t[n]){var i=o["a"][r],c=i.label,s=i.path;e[n].children.push({label:c,path:s})}}this.list=e},data:function(){return{list:[]}},methods:{select:function(t){this.$set(this.list[t],"checked",!this.list[t].checked)},goRoute:function(t){this.$router.push({path:t})}}},s=c,u=(n("c493"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=l.exports},f974:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABU0lEQVRYR+2WsU7DMBCG8wclC0uExMgr8AqsPACRmJCi6DYYu5e9C9AOnJcOFQMsPAhPwMhDILHkUCpFstLEdq8pFVK8xufv83+OZUQHHjgwP9pJgIgeAXwy81y7EbUAET0BuK3BIjIxxsw0EioBG95AtRJbCxARA6Cu3WokthJwwbVJBAuEwK1U7pl5GnImQgRARM99sfdBRGRmjJn4JHwCNXwJ4Ma3UM+Z8Eq4BHaCW2fCKdEnMAg8RKJLYFC4JTE3xty1W9UWqOEvAK41PffViMiGhC2wV3hfEo3An8C7JJDn+VGWZat9xe64J9btQFmWJwDOm4lxHJ9GUfTq66fmu4hcishPU5um6cfGX1AUxVmSJF8aQEDNMTN/2/NGAU0C71VVPXTFDWAK4MLRikFasGDm9VOsPYjoDcDVKDAmMCbwvxMIuM8HneJ7FQ8K61rsF/tA5WtCxBgUAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=index.33b780da.js.map