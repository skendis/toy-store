(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="4678"},"49a5":function(t,e,n){"use strict";var a=n("ba92"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("app-header"),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("MISTER")]),n("span",{staticClass:"font-weight-light"},[t._v("TOY")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",to:"/"}},[n("span",{staticClass:"mr-2"},[t._v("home")])])],1)},c=[],l={},u=l,d=n("2877"),f=n("6544"),y=n.n(f),p=n("8336"),m=n("9910"),b=n("71d9"),v=n("2a7f"),h=Object(d["a"])(u,i,c,!1,null,null,null),j=h.exports;y()(h,{VBtn:p["a"],VSpacer:m["a"],VToolbar:b["a"],VToolbarTitle:v["a"]});var g={name:"App",components:{AppHeader:j},data:function(){return{}}},k=g,_=n("7496"),S=Object(d["a"])(k,s,r,!1,null,null,null),T=S.exports;y()(S,{VApp:_["a"]});var x=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("toy-list",{attrs:{toys:t.toys},on:{"emit-delete":t.deleteToy}}),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{flat:"",color:"green"},on:{click:t.addToy}},[t._v("Add")])],1),n("div",{staticClass:"text-xs-center"},[n("v-pagination",{attrs:{length:t.pageCount},on:{input:t.setPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},C=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"toy-container"},t._l(t.toys,function(e){return n("div",{key:e._id},[n("toy-preview",{attrs:{toy:e},on:{"emit-delete":t.emitDelete}})],1)}),0)},O=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"toy-preview"},[n("v-img",{attrs:{src:t.AdorableImgUrl,"aspect-ratio":"1.75"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h2",{staticClass:"headline mb-0"},[t._v(t._s(t.toy.name))]),n("h2",[t._v(t._s(t.toy.price)+"$")]),n("h3",[t._v(t._s(t.inStock))]),n("div",[t._v(t._s(t.toy.type))]),n("div",[t._v(t._s(t.timeFormat))])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"},on:{click:t.getDetails}},[t._v("details")]),n("v-btn",{attrs:{flat:"",color:"green"},on:{click:t.editToy}},[t._v("edit")]),n("v-btn",{attrs:{flat:"",color:"red"},on:{click:t.emitDelete}},[t._v("Delete")])],1)],1)},V=[],z=n("c1df"),I=n.n(z),M={data:function(){return{card_text:""}},props:["toy"],computed:{inStock:function(){return this.toy.inStock?"IN STOCK":"OUT OF STOCK"},timeFormat:function(){return I()(this.toy.createdAt).format("DD-MM-YYYY, HH:MM")},AdorableImgUrl:function(){return"https://api.adorable.io/avatars/285/".concat(this.toy._id,"@adorable.png")}},methods:{getDetails:function(){this.$router.push("/toy/".concat(this.toy._id))},editToy:function(){this.$router.push("/toy/edit/".concat(this.toy._id))},emitDelete:function(){this.$emit("emit-delete",this.toy._id)}}},D=M,B=(n("49a5"),n("b0af")),P=n("99d9"),L=n("12b2"),Y=n("adda"),E=Object(d["a"])(D,A,V,!1,null,null,null),F=E.exports;y()(E,{VBtn:p["a"],VCard:B["a"],VCardActions:P["a"],VCardTitle:L["a"],VImg:Y["a"]});var U={props:["toys"],components:{ToyPreview:F},methods:{emitDelete:function(t){this.$emit("emit-delete",t)}}},N=U,R=(n("e28e"),Object(d["a"])(N,w,O,!1,null,null,null)),H=R.exports,K={components:{ToyList:H},created:function(){this.$store.dispatch({type:"loadToys"})},data:function(){return{page:1}},methods:{deleteToy:function(t){this.$store.dispatch({type:"deleteToy",toyId:t}).then(function(){})},setPage:function(){this.$store.commit("setPage",this.page),this.$store.dispatch({type:"loadToys"})},addToy:function(){this.$router.push("/toy/new")}},computed:{toys:function(){return this.$store.getters.toysToShow},isLoading:function(){return this.$store.getters.isLoading},pageCount:function(){return this.$store.getters.pagesCount}}},q=K,J=n("891e"),G=Object(d["a"])(q,$,C,!1,null,null,null),Q=G.exports;y()(G,{VBtn:p["a"],VPagination:J["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"toy-preview"},[n("v-img",{attrs:{src:t.AdorableImgUrl,"aspect-ratio":"1.75"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h2",{staticClass:"headline mb-0"},[t._v(t._s(t.toy.name))]),n("h2",[t._v(t._s(t.toy.price)+"$")]),n("h3",[t._v(t._s(t.inStock))]),n("div",[t._v(t._s(t.toy.type))]),n("div",[t._v(t._s(t.timeFormat))])])])],1)},X=[],Z=n("bc3a"),tt={query:et,remove:nt,getById:at,save:ot};function et(t){return Z.get("".concat(st(),"?page=").concat(t.page)).then(function(t){return t.data})}function nt(t){return console.log(t),Z.delete("".concat(st(),"/").concat(t)).then(function(t){return t.data})}function at(t){return Z.get("".concat(st(),"/").concat(t)).then(function(t){return t.data})}function ot(t){return t=JSON.parse(JSON.stringify(t)),t._id?Z.put(st(),t).then(function(t){return t.data}):(t.createdAt=Date.now(),t.inStock=t.inStock,Z.post(st(),t).then(function(t){return t.data}))}function st(){return rt}var rt="api/toy",it={data:function(){return{toy:""}},computed:{inStock:function(){return this.toy.inStock?"IN STOCK":"OUT OF STOCK"},timeFormat:function(){return I()(this.toy.createdAt).format("DD-MM-YYYY, HH:MM")},AdorableImgUrl:function(){return"https://api.adorable.io/avatars/285/".concat(this.toy._id,"@adorable.png")}},created:function(){var t=this,e=this.$route.params.id;tt.getById(e).then(function(e){t.toy=e,console.log(t.toy)})}},ct=it,lt=Object(d["a"])(ct,W,X,!1,null,null,null),ut=lt.exports;y()(lt,{VCard:B["a"],VCardTitle:L["a"],VImg:Y["a"]});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"toy-preview"},[n("v-img",{attrs:{src:t.AdorableImgUrl,"aspect-ratio":"1.75"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy name"},model:{value:t.toy.name,callback:function(e){t.$set(t.toy,"name",e)},expression:"toy.name"}}),n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy price"},model:{value:t.toy.price,callback:function(e){t.$set(t.toy,"price",e)},expression:"toy.price"}}),n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy type"},model:{value:t.toy.type,callback:function(e){t.$set(t.toy,"type",e)},expression:"toy.type"}}),n("label",{attrs:{for:"inStock"}},[t._v("in stock")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toy.inStock,expression:"toy.inStock"}],attrs:{type:"checkbox",name:"inStock"},domProps:{checked:Array.isArray(t.toy.inStock)?t._i(t.toy.inStock,null)>-1:t.toy.inStock},on:{change:function(e){var n=t.toy.inStock,a=e.target,o=!!a.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);a.checked?r<0&&t.$set(t.toy,"inStock",n.concat([s])):r>-1&&t.$set(t.toy,"inStock",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.toy,"inStock",o)}}}),n("div",[t._v("Created At: "+t._s(t.timeFormat))])],1)]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"green"},on:{click:t.saveToy}},[t._v("Save")])],1)],1)},ft=[],yt={data:function(){return{toy:{},nameRules:[]}},computed:{inStock:function(){return this.toy.inStock?"IN STOCK":"OUT OF STOCK"},timeFormat:function(){return I()(this.toy.createdAt).format("DD-MM-YYYY, HH:MM")},AdorableImgUrl:function(){return"https://api.adorable.io/avatars/285/".concat(this.toy._id,"@adorable.png")}},methods:{saveToy:function(){var t=this;this.$store.dispatch({type:"saveToy",toy:this.toy}).then(function(){t.$router.push("/")})}},created:function(){var t=this,e=this.$route.params.id;tt.getById(e).then(function(e){t.toy=e})}},pt=yt,mt=n("2677"),bt=Object(d["a"])(pt,dt,ft,!1,null,null,null),vt=bt.exports;y()(bt,{VBtn:p["a"],VCard:B["a"],VCardActions:P["a"],VCardTitle:L["a"],VImg:Y["a"],VTextField:mt["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"toy-preview"},[n("br"),n("br"),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy name"},model:{value:t.toy.name,callback:function(e){t.$set(t.toy,"name",e)},expression:"toy.name"}}),n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy price"},model:{value:t.toy.price,callback:function(e){t.$set(t.toy,"price",e)},expression:"toy.price"}}),n("v-text-field",{attrs:{rules:t.nameRules,counter:20,label:"toy type"},model:{value:t.toy.type,callback:function(e){t.$set(t.toy,"type",e)},expression:"toy.type"}}),n("label",{attrs:{for:"inStock"}},[t._v("in stock")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toy.inStock,expression:"toy.inStock"}],attrs:{type:"checkbox",name:"inStock"},domProps:{checked:Array.isArray(t.toy.inStock)?t._i(t.toy.inStock,null)>-1:t.toy.inStock},on:{change:function(e){var n=t.toy.inStock,a=e.target,o=!!a.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);a.checked?r<0&&t.$set(t.toy,"inStock",n.concat([s])):r>-1&&t.$set(t.toy,"inStock",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.toy,"inStock",o)}}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"green"},on:{click:t.saveToy}},[t._v("Save")])],1)],1)},jt=[],gt={data:function(){return{toy:{name:"",price:null,type:"",inStock:!1},nameRules:[]}},computed:{},methods:{saveToy:function(){var t=this;this.$store.dispatch({type:"saveToy",toy:this.toy}).then(function(){t.$router.push("/")})}},created:function(){}},kt=gt,_t=Object(d["a"])(kt,ht,jt,!1,null,null,null),St=_t.exports;y()(_t,{VBtn:p["a"],VCard:B["a"],VCardActions:P["a"],VCardTitle:L["a"],VTextField:mt["a"]}),a["a"].use(x["a"]);var Tt=new x["a"]({mode:"history",routes:[{path:"/",name:"home",component:Q},{path:"/toy/new",name:"ToyAdd",component:St},{path:"/toy/:id?",name:"toyDetails",component:ut},{path:"/toy/edit/:id?",name:"toyEdit",component:vt}]}),xt=(n("7f7f"),n("6762"),n("2fdb"),n("20d6"),n("2f62"));a["a"].use(xt["a"]);var $t=new xt["a"].Store({state:{toys:[],pagesCount:"",isLoading:!1,filterBy:{text:"",status:"",page:1}},mutations:{setToys:function(t,e){var n=e.toys;t.toys=n.items,t.pagesCount=n.querySize},isLoading:function(t,e){var n=e.isLoading;t.isLoading=n},deleteToy:function(t,e){var n=e.toyId,a=t.toys.findIndex(function(t){return t._id===n});t.toys.splice(a,1)},setPage:function(t,e){t.filterBy.page=e},saveToy:function(t,e){var n=e.toy,a=t.toys.findIndex(function(t){return t._id===n._id});-1!==a?t.toys.splice(a,1,n):t.toys.unshift(n)}},actions:{loadToys:function(t){return t.commit({type:"isLoading",isLoading:!0}),tt.query(this.state.filterBy).then(function(e){return t.commit({type:"isLoading",isLoading:!1}),t.commit({type:"setToys",toys:e}),e})},deleteToy:function(t,e){console.log("Payload is: ",e),tt.remove(e.toyId).then(function(){t.commit(e)})},saveToy:function(t,e){var n=e.toy;return tt.save(n).then(function(e){return t.commit({type:"saveToy",toy:e}),e})}},getters:{toysToShow:function(t){return t.toys.filter(function(e){return(e.name.toLowerCase().includes(t.filterBy.text)||""===t.filterBy.text)&&(e.inStock===("inStock"===t.filterBy.status)||""===t.filterBy.status)})},pagesCount:function(t){return+t.pagesCount}}});a["a"].config.productionTip=!1,new a["a"]({router:Tt,store:$t,render:function(t){return t(T)}}).$mount("#app")},ba92:function(t,e,n){},d604:function(t,e,n){},e28e:function(t,e,n){"use strict";var a=n("d604"),o=n.n(a);o.a}});
//# sourceMappingURL=app.6f1e487d.js.map