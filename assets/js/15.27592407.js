(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{102:function(t,e,n){e.f=n(49)},103:function(t,e,n){var i=n(51),o=n(52),r=n(65),s=n(102),a=n(53).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=r?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},104:function(t,e){e.f={}.propertyIsEnumerable},105:function(t,e,n){},131:function(t,e){e.f=Object.getOwnPropertySymbols},132:function(t,e,n){var i=n(125),o=n(83).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},215:function(t,e,n){t.exports=n.p+"assets/img/logo200.656bd0f2.png"},216:function(t,e,n){var i=n(25);i(i.S,"Object",{setPrototypeOf:n(117).set})},217:function(t,e,n){t.exports=n(218)},218:function(t,e,n){n(77),n(128),t.exports=n(102).f("iterator")},219:function(t,e,n){t.exports=n(220)},220:function(t,e,n){n(221),n(226),n(227),n(228),t.exports=n(52).Symbol},221:function(t,e,n){"use strict";var i=n(51),o=n(54),r=n(56),s=n(63),a=n(123),c=n(222).KEY,u=n(64),f=n(82),l=n(84),h=n(66),p=n(49),v=n(102),y=n(103),d=n(223),m=n(121),b=n(59),g=n(60),w=n(85),_=n(58),O=n(75),S=n(61),P=n(124),x=n(224),j=n(225),C=n(131),E=n(53),F=n(80),k=j.f,N=E.f,M=x.f,G=i.Symbol,z=i.JSON,D=z&&z.stringify,T=p("_hidden"),W=p("toPrimitive"),R={}.propertyIsEnumerable,I=f("symbol-registry"),J=f("symbols"),q=f("op-symbols"),$=Object.prototype,K="function"==typeof G&&!!C.f,A=i.QObject,V=!A||!A.prototype||!A.prototype.findChild,Y=r&&u((function(){return 7!=P(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=k($,e);i&&delete $[e],N(t,e,n),i&&t!==$&&N($,e,i)}:N,H=function(t){var e=J[t]=P(G.prototype);return e._k=t,e},Q=K&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof G},B=function(t,e,n){return t===$&&B(q,e,n),b(t),e=O(e,!0),b(n),o(J,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=P(n,{enumerable:S(0,!1)})):(o(t,T)||N(t,T,S(1,{})),t[T][e]=!0),Y(t,e,n)):N(t,e,n)},L=function(t,e){b(t);for(var n,i=d(e=_(e)),o=0,r=i.length;r>o;)B(t,n=i[o++],e[n]);return t},U=function(t){var e=R.call(this,t=O(t,!0));return!(this===$&&o(J,t)&&!o(q,t))&&(!(e||!o(this,t)||!o(J,t)||o(this,T)&&this[T][t])||e)},X=function(t,e){if(t=_(t),e=O(e,!0),t!==$||!o(J,e)||o(q,e)){var n=k(t,e);return!n||!o(J,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=M(_(t)),i=[],r=0;n.length>r;)o(J,e=n[r++])||e==T||e==c||i.push(e);return i},tt=function(t){for(var e,n=t===$,i=M(n?q:_(t)),r=[],s=0;i.length>s;)!o(J,e=i[s++])||n&&!o($,e)||r.push(J[e]);return r};K||(a((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===$&&e.call(q,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),Y(this,t,S(1,n))};return r&&V&&Y($,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",(function(){return this._k})),j.f=X,E.f=B,n(132).f=x.f=Z,n(104).f=U,C.f=tt,r&&!n(65)&&a($,"propertyIsEnumerable",U,!0),v.f=function(t){return H(p(t))}),s(s.G+s.W+s.F*!K,{Symbol:G});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var it=F(p.store),ot=0;it.length>ot;)y(it[ot++]);s(s.S+s.F*!K,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=G(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),s(s.S+s.F*!K,"Object",{create:function(t,e){return void 0===e?P(t):L(P(t),e)},defineProperty:B,defineProperties:L,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt});var rt=u((function(){C.f(1)}));s(s.S+s.F*rt,"Object",{getOwnPropertySymbols:function(t){return C.f(w(t))}}),z&&s(s.S+s.F*(!K||u((function(){var t=G();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=e=i[1],(g(e)||void 0!==t)&&!Q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),i[1]=e,D.apply(z,i)}}),G.prototype[W]||n(55)(G.prototype,W,G.prototype.valueOf),l(G,"Symbol"),l(Math,"Math",!0),l(i.JSON,"JSON",!0)},222:function(t,e,n){var i=n(66)("meta"),o=n(60),r=n(54),s=n(53).f,a=0,c=Object.isExtensible||function(){return!0},u=!n(64)((function(){return c(Object.preventExtensions({}))})),f=function(t){s(t,i,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:i,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[i].i},getWeak:function(t,e){if(!r(t,i)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[i].w},onFreeze:function(t){return u&&l.NEED&&c(t)&&!r(t,i)&&f(t),t}}},223:function(t,e,n){var i=n(80),o=n(131),r=n(104);t.exports=function(t){var e=i(t),n=o.f;if(n)for(var s,a=n(t),c=r.f,u=0;a.length>u;)c.call(t,s=a[u++])&&e.push(s);return e}},224:function(t,e,n){var i=n(58),o=n(132).f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(i(t))}},225:function(t,e,n){var i=n(104),o=n(61),r=n(58),s=n(75),a=n(54),c=n(119),u=Object.getOwnPropertyDescriptor;e.f=n(56)?u:function(t,e){if(t=r(t),e=s(e,!0),c)try{return u(t,e)}catch(t){}if(a(t,e))return o(!i.f.call(t,e),t[e])}},226:function(t,e){},227:function(t,e,n){n(103)("asyncIterator")},228:function(t,e,n){n(103)("observable")},229:function(t,e,n){"use strict";var i=n(105);n.n(i).a},423:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduce-card"},[e("div",{staticClass:"introduce-bg"},[e("canvas",{staticStyle:{"min-width":"800px",width:"100%"},attrs:{width:"2500",height:"800"}})]),this._v(" "),e("div",{staticClass:"introduce-text-one"},[e("div",{staticClass:"home-logo"},[e("img",{staticClass:"logo-default",attrs:{src:n(215)}})]),this._v(" "),e("h2",[this._v("solar-vue")]),this._v(" "),e("div",{staticClass:"home-text"},[this._v("轻量的，可靠的，人性化的")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduce-card"},[e("h3",[this._v("特性")]),this._v(" "),e("ul",[e("li",{staticClass:"tips-list-item"},[this._v("30+的实用组件：满足移动端的基本开发")]),this._v(" "),e("li",{staticClass:"tips-list-item"},[this._v("统一的视觉规范：保证了应用的项目内部、项目之间都能保持高度的视觉一致性")]),this._v(" "),e("li",{staticClass:"tips-list-item"},[this._v("适用于多场景的产生：提供按需加载能力，使用灵活，避免引入无用代码")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduce-card"},[e("h3",[this._v("浏览器支持")]),this._v(" "),e("ul",[e("li",{staticClass:"tips-list-item"},[this._v("Android 4.4+,")]),this._v(" "),e("li",{staticClass:"tips-list-item"},[this._v("iOS 8+")])])])}],o=(n(216),n(217)),r=n.n(o),s=n(219),a=n.n(s);function c(t){return(c="function"==typeof a.a&&"symbol"==typeof r.a?function(t){return typeof t}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"==typeof a.a&&"symbol"===c(r.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":c(t)})(t)}var f={mounted:function(){var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==u(e)&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+u(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(o){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;e(this,r);var i=n(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return i.radius=t,i.color="rgba("+[255*Math.random()|0,255*Math.random()|0,255*Math.random()|0,Math.random()].join(",")+")",i.prevCrood=null,i}return i(r,F3.Obj),t(r,[{key:"render",value:function(t){t.fillStyle="#fff",t.fillRect(this.croods2D.position.x,this.croods2D.position.y,this.radius*this.croods2D.scale*this.yScale,this.radius*this.croods2D.scale*this.yScale)}}]),r}(),r=function(r){function s(t,i,o,r){e(this,s);var a=n(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));return a.renderer=t,a.scene=i,a.camera=o,a.cvs=r,a.xOffset=0,a.waveHeight=.4,a.waveWidth=8,a.col=33,a.colPointNum=33,a.flyTime=2e3,a.timePass=0,a.scale=1,a.scaleStep=.01,a.planeFunction=function(){return 0},a.rotate={x:!1,y:!1,z:!1},a.pointGroup=new F3.Obj,a.scene.add(a.pointGroup),a.resize(r.width,r.height),a.init(),a}return i(s,F3.Time),t(s,[{key:"resize",value:function(t,e){this.cvs.width=t,this.cvs.height=e,this.stepWidth=1.8*t/this.col,this.pointGroup.setPosition(this.cvs.width/2,1.2*this.cvs.height,-this.col*this.stepWidth/2),this.pointGroup.setRotation(.1,0,0)}},{key:"init",value:function(){for(var t,e=-(this.col-1)/2;e<=(this.col-1)/2;e++)for(var n=-(this.colPointNum-1)/2;n<=(this.colPointNum-1)/2;n++)t=new o(10),this.pointGroup.add(t),t.initPos=new F3.Vector3(0,0,0),t.flyDelay=0}},{key:"update",value:function(t){this.timePass+=t,this.xOffset=this.timePass/500;var e=void 0,n=void 0,i=void 0,o=void 0,r=void 0,s=0;for(i=-(this.col-1)/2;i<=(this.col-1)/2;i++)for(r=-(this.colPointNum-1)/2;r<=(this.colPointNum-1)/2;r++)o=this.planeFunction(i,r,this.xOffset),(e=this.pointGroup.children[s]).yScale=1,n=(n=(this.timePass-e.flyDelay)/this.flyTime)>1?1:n<0?0:n,e.setPosition(i*this.stepWidth,o*this.stepWidth,r*this.stepWidth),s++;(this.rotate.x||this.rotate.y||this.rotate.z)&&this.pointGroup.setRotation(this.rotate.x?this.pointGroup.rotation.x+.001:0,this.rotate.y?this.pointGroup.rotation.y+.001:0,this.rotate.z?this.pointGroup.rotation.z+.001:0)}},{key:"setFunction",value:function(t){this.planeFunction=t}},{key:"toggleRotate",value:function(t){this.rotate[t]=!this.rotate[t],this.rotate[t]||(this.pointGroup.rotation[t]=0)}},{key:"animate",value:function(){var t=this;this.addTick((function(e){t.update(e),t.renderer.render(t.scene,t.camera)}))}}]),s}(),s={"sin(sqrt(x^2+z^2))":function(t,e,n){return Math.sin(Math.sqrt(Math.pow(t/2,2)+Math.pow(e/2,2))-n)},"cos(x)*sin(z)":function(t,e,n){return Math.cos(t/4+n)*Math.sin(e/4+n)*1}};!function(t){var e=t.getContext("2d"),n=new F3.Scene,i=new F3.Camera;i.origin=new F3.Vector3(t.width/2,t.height/3),i.p=1200;var o=new F3.Renderer(e,t),a=new r(o,n,i,t);a.animate(),a.setFunction(s["sin(sqrt(x^2+z^2))"]),a.toggleRotate("y"),F3.TIME.start()}(document.querySelector("canvas"))}},l=(n(229),n(1)),h=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduce"},[t._m(0),t._v(" "),n("div",{staticClass:"file-blank"}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"file-blank"}),t._v(" "),n("div",{staticClass:"introduce-card"},[n("div",[n("layout-column",{attrs:{title:"扫码体验"}})],1)]),t._v(" "),n("div",{staticClass:"file-blank"}),t._v(" "),t._m(2)])}),i,!1,null,null,null);e.default=h.exports}}]);