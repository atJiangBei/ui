(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{221:function(n,t,i){"use strict";var e=i(18),c=i(143)(!0);e(e.P,"Array",{includes:function(n){return c(this,n,arguments.length>1?arguments[1]:void 0)}}),i(144)("includes")},222:function(n,t,i){"use strict";var e=i(18),c=i(225);e(e.P+e.F*i(226)("includes"),"String",{includes:function(n){return!!~c(this,n,"includes").indexOf(n,arguments.length>1?arguments[1]:void 0)}})},224:function(n,t,i){},225:function(n,t,i){var e=i(100),c=i(30);n.exports=function(n,t,i){if(e(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(c(n))}},226:function(n,t,i){var e=i(2)("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(i){try{return t[e]=!1,!"/./"[n](t)}catch(n){}}return!0}},230:function(n,t,i){"use strict";i(221),i(222);var e={name:"s-button",components:{"s-icon":i(227).a},props:{type:{type:String,validator:function(n){return["primary","info","success","warning","danger"].includes(n)}},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,required:!1},iconPosition:{type:String,default:"left",validator:function(n){return"left"===n||"right"===n}}},computed:{btnClass:function(){var n=[];return this.iconPosition&&n.push("ico-".concat(this.iconPosition)),this.type&&n.push("btn-".concat(this.type)),this.disabled&&n.push("btn-disabled"),n.join(" ")}}},c=(i(231),i(1)),a=Object(c.a)(e,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("button",{staticClass:"s-button",class:n.btnClass,on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?i("s-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?i("s-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):n._e(),n._v(" "),i("div",{staticClass:"btn-content"},[n._t("default")],2)],1)},[],!1,null,"421725ba",null);t.a=a.exports},231:function(n,t,i){"use strict";var e=i(224);i.n(e).a},290:function(n,t,i){},532:function(n,t,i){"use strict";var e=i(290);i.n(e).a},562:function(n,t,i){"use strict";i.r(t);i(12);var e=i(0),c=(i(221),i(222),i(14),i(32),i(4),i(227)),a=i(230),o={name:"s-modal",props:{title:{default:"这是标题"},content:{default:"这是内容"},btnConfig:{type:Object,validator:function(n){return(!n.confrimCallback||"function"==typeof n.confrimCallback)&&((!n.cancelCallback||"function"==typeof n.cancelCallback)&&(Object.keys(n).forEach(function(n){if(!["confrimCallback","cancelCallback","cancelModalCallback","confirmText","cancelText"].includes(n))return!1}),!0))}},enableContentHtml:{type:Boolean,default:!1}},data:function(){return{isVisible:!1}},computed:{modalStyle:function(){return this.isVisible?"":{display:"none"}}},mounted:function(){this.init()},methods:{init:function(){this.bindBtnEvent(),this.bindIcoEvent()},bindBtnEvent:function(){var n=this;this.$refs.confirmBtn.$el.addEventListener("click",function(){n.isVisible=!1,n.btnConfig.confirmCallback&&n.btnConfig.confirmCallback()}),this.btnConfig.cancelText&&this.$refs.cancelBtn.$el.addEventListener("click",function(){n.isVisible=!1,n.btnConfig.cancelCallback&&n.btnConfig.cancelCallback()})},bindIcoEvent:function(){var n=this;console.log(this.$refs.closeIco),this.$refs.closeIco.$el.addEventListener("click",function(){n.isVisible=!1,n.btnConfig.cancelModalCallback&&n.btnConfig.cancelModalCallback()})}},components:{"s-icon":c.a,"s-button":a.a}},l=(i(532),i(1)),s=Object(l.a)(o,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"mask",style:n.modalStyle}),n._v(" "),i("div",{staticClass:"modal",style:n.modalStyle},[i("div",{staticClass:"modal-header"},[i("span",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),i("s-icon",{ref:"closeIco",attrs:{name:"false"}})],1),n._v(" "),n.enableContentHtml?i("div",{staticClass:"modal-body",domProps:{innerHTML:n._s(n.content)}}):i("div",{staticClass:"modal-body"},[n._v(n._s(n.content))]),n._v(" "),i("div",{staticClass:"modal-action"},[n.btnConfig.cancelText?i("s-button",{ref:"cancelBtn"},[n._v(n._s(n.btnConfig.cancelText))]):n._e(),n._v(" "),i("s-button",{ref:"confirmBtn",attrs:{type:"primary"}},[n._v(n._s(n.btnConfig.confirmText))])],1)])])},[],!1,null,"6fc06f23",null).exports,r={install:function(n,t){var i,e,c=n.extend(s);n.prototype.$modal=function(n){e!==JSON.stringify(n)&&(
//! modalVm
(i=new c({propsData:n})).$mount(),document.body.append(i.$el)),e=JSON.stringify(n),i.isVisible=!0}}},u=i(246),f=i.n(u);e.a.use(f.a),e.a.use(r);var d={data:function(){return{code:"\n        <s-button @click=\"clickHandler\" icon=\"gift-fill\">点我</s-button>\n        import Vue from \"vue\";\n        import ModalPlugin from \"../../../src/plugins/modal\";\n\n        Vue.use(ModalPlugin);\n        export default {\n          methods: {\n            clickHandler () {\n              let func1 = () => {\n                this.$toast({\n                  message: '报名成功',\n                  duration: 1500 })\n              }\n              let func2 = () => {\n                this.$toast({\n                  message: '期待你下次再来',\n                  duration: 1500 })\n              }\n              let func3 = () => {\n                this.$toast({\n                  message: '你为什么啥都没点就跑了',\n                  duration: 2500 })\n              }\n              this.$modal({\n                title: '一个来自朋友的邀请',\n                content: '今天晚上去大学城吗',\n                btnConfig: {\n                  'confirmText': '确认',\n                  'confirmCallback': func1,\n                  'cancelText': '取消',\n                  'cancelCallback': func2,\n                  'cancelModalCallback': func3\n                } \n              })\n          }\n        }\n    ".replace(/^ {8}/gm,"").trim()}},components:{"s-button":a.a},methods:{clickHandler:function(){var n=this;this.$modal({title:"一个来自朋友的邀请",content:"今天晚上去大学城吗",btnConfig:{confirmText:"确认",confirmCallback:function(){n.$toast({message:"报名成功",duration:1500})},cancelText:"取消",cancelCallback:function(){n.$toast({message:"期待你下次再来",duration:1500})},cancelModalCallback:function(){n.$toast({message:"你为什么啥都没点就跑了",duration:2500})}}})},clickHandler2:function(){var n=this;this.$modal({title:"换肤测试",content:'<p style="color:orange">这个颜色你喜欢吗</p>',enableContentHtml:!0,btnConfig:{confirmText:"确认",confirmCallback:function(){n.$toast({message:"阿里嘎多~~",duration:1500})}}})}}},b=Object(l.a)(d,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",[i("sakura-card",{scopedSlots:n._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[n._v(n._s(n.code))])])]},proxy:!0}])},[i("s-button",{attrs:{icon:"gift-fill"},on:{click:n.clickHandler}},[n._v("点我")]),n._v(" "),i("s-button",{staticStyle:{"margin-left":"30px",background:"#91AD70"},attrs:{icon:"discovery"},on:{click:n.clickHandler2}},[n._v("点我")])],1)],1)},[],!1,null,"4eb9c7a4",null);t.default=b.exports}}]);