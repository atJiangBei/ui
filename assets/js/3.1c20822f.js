(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,r){"use strict";var n=r(18),i=r(143)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(144)("includes")},222:function(t,e,r){"use strict";var n=r(18),i=r(225);n(n.P+n.F*r(226)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},224:function(t,e,r){},225:function(t,e,r){var n=r(100),i=r(30);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},226:function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},230:function(t,e,r){"use strict";r(221),r(222);var n={name:"s-button",components:{"s-icon":r(227).a},props:{type:{type:String,validator:function(t){return["primary","info","success","warning","danger"].includes(t)}},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,required:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},computed:{btnClass:function(){var t=[];return this.iconPosition&&t.push("ico-".concat(this.iconPosition)),this.type&&t.push("btn-".concat(this.type)),this.disabled&&t.push("btn-disabled"),t.join(" ")}}},i=(r(231),r(1)),o=Object(i.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"s-button",class:t.btnClass,on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.loading?r("s-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?r("s-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):t._e(),t._v(" "),r("div",{staticClass:"btn-content"},[t._t("default")],2)],1)},[],!1,null,"421725ba",null);e.a=o.exports},231:function(t,e,r){"use strict";var n=r(224);r.n(n).a},232:function(t,e,r){},234:function(t,e,r){r(239)("asyncIterator")},235:function(t,e,r){"use strict";var n=r(3),i=r(24),o=r(9),a=r(18),s=r(19),u=r(70).KEY,c=r(8),l=r(69),f=r(43),d=r(42),p=r(2),v=r(240),g=r(239),m=r(251),h=r(252),b=r(5),y=r(6),w=r(40),x=r(98),_=r(67),S=r(99),O=r(253),k=r(145),j=r(13),C=r(39),$=k.f,E=j.f,q=O.f,P=n.Symbol,F=n.JSON,N=F&&F.stringify,T=p("_hidden"),B=p("toPrimitive"),I={}.propertyIsEnumerable,A=l("symbol-registry"),L=l("symbols"),R=l("op-symbols"),D=Object.prototype,J="function"==typeof P,M=n.QObject,W=!M||!M.prototype||!M.prototype.findChild,G=o&&c(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=$(D,e);n&&delete D[e],E(t,e,r),n&&t!==D&&E(D,e,n)}:E,K=function(t){var e=L[t]=S(P.prototype);return e._k=t,e},Q=J&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Y=function(t,e,r){return t===D&&Y(R,e,r),b(t),e=x(e,!0),b(r),i(L,e)?(r.enumerable?(i(t,T)&&t[T][e]&&(t[T][e]=!1),r=S(r,{enumerable:_(0,!1)})):(i(t,T)||E(t,T,_(1,{})),t[T][e]=!0),G(t,e,r)):E(t,e,r)},z=function(t,e){b(t);for(var r,n=m(e=w(e)),i=0,o=n.length;o>i;)Y(t,r=n[i++],e[r]);return t},H=function(t){var e=I.call(this,t=x(t,!0));return!(this===D&&i(L,t)&&!i(R,t))&&(!(e||!i(this,t)||!i(L,t)||i(this,T)&&this[T][t])||e)},U=function(t,e){if(t=w(t),e=x(e,!0),t!==D||!i(L,e)||i(R,e)){var r=$(t,e);return!r||!i(L,e)||i(t,T)&&t[T][e]||(r.enumerable=!0),r}},V=function(t){for(var e,r=q(w(t)),n=[],o=0;r.length>o;)i(L,e=r[o++])||e==T||e==u||n.push(e);return n},X=function(t){for(var e,r=t===D,n=q(r?R:w(t)),o=[],a=0;n.length>a;)!i(L,e=n[a++])||r&&!i(D,e)||o.push(L[e]);return o};J||(s((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===D&&e.call(R,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),G(this,t,_(1,r))};return o&&W&&G(D,t,{configurable:!0,set:e}),K(t)}).prototype,"toString",function(){return this._k}),k.f=U,j.f=Y,r(142).f=O.f=V,r(102).f=H,r(146).f=X,o&&!r(68)&&s(D,"propertyIsEnumerable",H,!0),v.f=function(t){return K(p(t))}),a(a.G+a.W+a.F*!J,{Symbol:P});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)p(Z[tt++]);for(var et=C(p.store),rt=0;et.length>rt;)g(et[rt++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return i(A,t+="")?A[t]:A[t]=P(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!J,"Object",{create:function(t,e){return void 0===e?S(t):z(S(t),e)},defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:U,getOwnPropertyNames:V,getOwnPropertySymbols:X}),F&&a(a.S+a.F*(!J||c(function(){var t=P();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=e=n[1],(y(e)||void 0!==t)&&!Q(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Q(e))return e}),n[1]=e,N.apply(F,n)}}),P.prototype[B]||r(20)(P.prototype,B,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},239:function(t,e,r){var n=r(3),i=r(26),o=r(68),a=r(240),s=r(13).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},240:function(t,e,r){e.f=r(2)},242:function(t,e,r){"use strict";var n=r(232);r.n(n).a},243:function(t,e,r){var n=r(34),i=r(10),o=r(45);t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},244:function(t,e,r){"use strict";r(280);var n=r(5),i=r(103),o=r(9),a=/./.toString,s=function(t){r(19)(RegExp.prototype,"toString",t,!0)};r(8)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=a.name&&s(function(){return a.call(this)})},245:function(t,e,r){"use strict";var n={name:"s-input",components:{"s-icon":r(227).a},props:{icon:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String},placeholder:{type:String}}},i=(r(242),r(1)),o=Object(i.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",class:{error:t.error,disabled:t.disabled,readonly:t.readonly}},[t.icon?[r("s-icon",{attrs:{name:t.icon}})]:t._e(),t._v(" "),r("input",{ref:"input",attrs:{type:"text",readonly:t.readonly,disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},change:function(e){return t.$emit("change",e.target.value)},focus:function(e){return t.$emit("focus",e.target.value)},blur:function(e){return t.$emit("blur",e.target.value)}}}),t._v(" "),t.error?[r("s-icon",{attrs:{name:"error"}}),t._v(" "),r("span",{staticClass:"err-msg"},[t._v(t._s(t.error))])]:t._e()],2)},[],!1,null,"e93470b0",null);e.a=o.exports},247:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(108),i=r.n(n);function o(t,e,r){return e in t?i()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},248:function(t,e,r){var n=r(18),i=r(520)(!0);n(n.S,"Object",{entries:function(t){return i(t)}})},251:function(t,e,r){var n=r(39),i=r(146),o=r(102);t.exports=function(t){var e=n(t),r=i.f;if(r)for(var a,s=r(t),u=o.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},252:function(t,e,r){var n=r(31);t.exports=Array.isArray||function(t){return"Array"==n(t)}},253:function(t,e,r){var n=r(40),i=r(142).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(n(t))}},271:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r(272),i=r.n(n),o=r(275),a=r.n(o),s=r(277),u=r.n(s),c=r(247);function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=u()(r);"function"==typeof a.a&&(n=n.concat(a()(r).filter(function(t){return i()(r,t).enumerable}))),n.forEach(function(e){Object(c.a)(t,e,r[e])})}return t}},272:function(t,e,r){t.exports=r(273)},273:function(t,e,r){r(274);var n=r(10).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},274:function(t,e,r){var n=r(27),i=r(152).f;r(243)("getOwnPropertyDescriptor",function(){return function(t,e){return i(n(t),e)}})},275:function(t,e,r){t.exports=r(276)},276:function(t,e,r){r(151),t.exports=r(10).Object.getOwnPropertySymbols},277:function(t,e,r){t.exports=r(278)},278:function(t,e,r){r(279),t.exports=r(10).Object.keys},279:function(t,e,r){var n=r(105),i=r(71);r(243)("keys",function(){return function(t){return i(n(t))}})},280:function(t,e,r){r(9)&&"g"!=/./g.flags&&r(13).f(RegExp.prototype,"flags",{configurable:!0,get:r(103)})},281:function(t,e,r){},282:function(t,e,r){},283:function(t,e,r){},520:function(t,e,r){var n=r(39),i=r(40),o=r(102).f;t.exports=function(t){return function(e){for(var r,a=i(e),s=n(a),u=s.length,c=0,l=[];u>c;)o.call(a,r=s[c++])&&l.push(t?[r,a[r]]:a[r]);return l}}},521:function(t,e,r){t.exports=r(522)},522:function(t,e,r){r(107),r(72),t.exports=r(523)},523:function(t,e,r){var n=r(35),i=r(153);t.exports=r(10).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},524:function(t,e,r){"use strict";var n=r(281);r.n(n).a},525:function(t,e,r){"use strict";var n=r(282);r.n(n).a},526:function(t,e,r){"use strict";var n=r(283);r.n(n).a},557:function(t,e,r){"use strict";r.r(e);r(12);var n=r(271),i=(r(44),r(247)),o=(r(23),r(221),r(222),r(14),r(234),r(235),r(4),r(248),r(32),r(119)),a=r.n(o);var s=r(521),u=r.n(s);function c(t,e){return function(t){if(a()(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=u()(t);!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r(244);var l=r(137),f=r(138),d=function(){function t(){Object(l.a)(this,t)}return Object(f.a)(t,[{key:"validate",value:function(t,e){for(var r={},n=Object.entries(e),i=0;i<n.length;i++){var o=n[i],a=o[0];if(void 0!==t[a]){var s=!0,u=!1,c=void 0;try{for(var l,f=o[1][Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var d=l.value,p=Object.keys(d).filter(function(t){return["lengthControl","pattern","validator","required"].includes(t)})[0],v=this[p](t[a],d);if(!v){console.log(a,"checked failed in",p),r[a]=d.message;break}if("string"==typeof v){console.log(a,"checked failed in",p),r[a]=v;break}}}catch(t){u=!0,c=t}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}}}return r}},{key:"required",value:function(t){return!(void 0===t||""===t)}},{key:"lengthControl",value:function(t,e){var r=!0,n=t.toString().length,i=c(e.lengthControl,2),o=i[0],a=i[1];return o&&n<o&&(r=!1),a&&n>a&&(r=!1),r}},{key:"max",value:function(t,e){return t.toString().length<=e.max}},{key:"pattern",value:function(t,e){return e.pattern.test(t)}},{key:"validator",value:function(t,e){try{return e.validator.call(this,t)}catch(t){return t.message}}}],[{key:"add",value:function(e,r){t.prototype[e]=r}}]),t}(),p={name:"s-form",data:function(){return{errors:{},validator:new d,eventTriggerModel:{},requiredFieldsList:[]}},props:{rules:{type:Object},model:{type:Object}},mounted:function(){this.bindEvent(),this.setRequiredLabel()},methods:{findReqiredFields:function(){for(var t=Object.entries(this.rules),e=0;e<t.length;e++){var r=t[e],n=!0,i=!1,o=void 0;try{for(var a,s=r[1][Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;if(Object.keys(u).includes("required")&&u.required){this.requiredFieldsList.push(r[0]);break}}}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},setRequiredLabel:function(){var t=this;this.findReqiredFields(),this.$children.forEach(function(e){t.requiredFieldsList.includes(e.name)&&(e.required=!0)})},bindEvent:function(){var t=this;this.$children.forEach(function(e){var r=e.$props.name;e.$children.forEach(function(e){e.$on("blur",function(){var e=Object(i.a)({},r,t.model[r]);t.eventTriggerModel=Object.assign(t.eventTriggerModel,e),t.validate(t.eventTriggerModel)})})})},validate:function(t){var e=this.rules,r=this.validator;this.errors=r.validate(t,e),this.boardcast()},reset:function(t){var e=Object(n.a)({},t);Object.keys(e).forEach(function(t){e[t]=""}),this.errors={},this.boardcast()},boardcast:function(){var t=Object(n.a)({},this.errors);this.$children.forEach(function(e){e.error=t[e.$props.name]})}}},v=r(1),g=Object(v.a)(p,function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[t._t("default")],2)},[],!1,null,null,null).exports,m={name:"s-form-item",data:function(){return{error:"",required:!1}},props:{label:{type:String,required:!0},name:{required:!0}},watch:{error:function(t){t?this.$children[0].$el.classList.add("error"):this.$children[0].$el.classList.remove("error")}}},h=(r(524),r(525),Object(v.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("div",{staticClass:"label"},[r("div",{staticClass:"ico"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.required,expression:"required"}],staticClass:"required-ico"},[t._v("*")])]),t._v(" "),r("label",[t._v(t._s(t.label))])]),t._v(" "),r("div",{staticClass:"controls"},[t._t("default"),t._v(" "),r("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")])],2)])},[],!1,null,"0263523b",null).exports),b=r(230),y=r(245),w=r(0),x=r(246),_=r.n(x);w.a.use(_.a);var S={data:function(){return{code:'\n        <s-form  :model.sync="user" class="form"  :rules="rules" ref="form">\n          <h3>登录</h3>\n          <s-form-item label="姓名" name="name">\n            <s-input type="text" v-model="user.name" placeholder="试一下输入Bingo"></s-input>\n          </s-form-item>\n          <s-form-item label="年龄"  name="age"  >\n            <s-input type="number" v-model="user.age" placeholder="输入一个正常人的年龄哦"></s-input>\n          </s-form-item>\n          <s-form-item label="数量"  name="count">\n            <s-input type="number" v-model="user.count"></s-input>\n          </s-form-item>\n          <div style="display:flex;justify-content:flex-end">\n            <s-button class="ok" @click="submit" style="width:60px">提交</s-button>\n            <s-button class="ok" @click="reset" style="width:60px;margin-left:30px">重置</s-button>\n          </div>\n        </s-form>\n        export default {\n          data () {\n            var checkName = (val) => {\n            if (val === \'Bingo\') {\n                throw new Error(\'被骗了哈哈哈~\')\n            } else { return true }\n            }\n            var checkAge = (val) => {\n            if (parseInt(val) > 30) {\n                throw new Error(\'不能超过30岁\')\n            } else { return true }\n            }\n              return {\n                user: {\n                  name: \'\',\n                  age: \'\',\n                  count:\'\'\n                },\n                rules: {\n                  name: [\n                    { required: true, message: \'请输入名字\', trigger: \'blur\' },\n                    { lengthControl: [3, 5], message: \'长度在 3 到 5 个字符\', trigger: \'blur\' },\n                    { pattern: /^(D)+$/, message: \'内容不能有数字\', trigger: \'blur\' },\n                    { validator: checkName, trigger: \'blur\' }\n                  ],\n                  age: [\n                    { required: true, message: \'请输入年龄\', trigger: \'blur\' },\n                    { lengthControl: [ null, 2 ], message: \'长度不能超过2\', trigger: \'blur\' },\n                    { pattern: /d/, message: \'必须是数字\', trigger: \'blur\' },\n                    { validator: checkAge, trigger: \'blur\' }\n                  ],\n                  count: [\n                    { lengthControl: [ null, 4 ], message: \'长度不能超过4\', trigger: \'blur\' }\n                  ]\n                }\n\n              }\n            }\n    '.replace(/^ {8}/gm,"").trim(),user:{name:"",age:"",count:""},rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"},{lengthControl:[3,5],message:"长度在 3 到 5 个字符",trigger:"blur"},{pattern:/^(\D)+$/,message:"内容不能有数字",trigger:"blur"},{validator:function(t){if("Bingo"===t)throw new Error("被骗了哈哈哈~");return!0},trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{lengthControl:[null,2],message:"长度不能超过2",trigger:"blur"},{pattern:/\d/,message:"必须是数字",trigger:"blur"},{validator:function(t){if(parseInt(t)>30)throw new Error("不能超过30岁");return!0},trigger:"blur"}],count:[{lengthControl:[null,4],message:"长度不能超过4",trigger:"blur"}]}}},components:{"s-form":g,"s-form-item":h,"s-button":b.a,"s-input":y.a},methods:{submit:function(){this.$refs.form.validate(this.user)},reset:function(){this.$refs.form.reset(this.user)}}},O=(r(526),Object(v.a)(S,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("sakura-card",{scopedSlots:t._u([{key:"code",fn:function(){return[r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[r("div",{staticClass:"form-wrapper"},[r("s-form",{ref:"form",staticClass:"form",attrs:{model:t.user,rules:t.rules},on:{"update:model":function(e){t.user=e}}},[r("span",[t._v("请随意填写下方表单并提交，本例子含多种校验规则，详细可以展开代码查看~")]),t._v(" "),r("h3",[t._v("登录")]),t._v(" "),r("s-form-item",{attrs:{label:"姓名",name:"name"}},[r("s-input",{attrs:{type:"text",placeholder:"试一下输入Bingo"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),r("s-form-item",{attrs:{label:"年龄",name:"age"}},[r("s-input",{attrs:{type:"number",placeholder:"输入一个正常人的年龄哦"},model:{value:t.user.age,callback:function(e){t.$set(t.user,"age",e)},expression:"user.age"}})],1),t._v(" "),r("s-form-item",{attrs:{label:"数量",name:"count"}},[r("s-input",{attrs:{type:"number"},model:{value:t.user.count,callback:function(e){t.$set(t.user,"count",e)},expression:"user.count"}})],1),t._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[r("s-button",{staticClass:"ok",staticStyle:{width:"60px"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),r("s-button",{staticClass:"ok",staticStyle:{width:"60px","margin-left":"30px"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)])],1)},[],!1,null,"7e54365a",null));e.default=O.exports}}]);