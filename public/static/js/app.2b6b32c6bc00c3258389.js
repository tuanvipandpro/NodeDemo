webpackJsonp([1],{"0cNO":function(e,t){},LShJ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(e){n("0cNO")},null,null).exports,s=n("/ocq"),i=n("Xxa5"),u=n.n(i),c=n("exGp"),l=n.n(c),d=n("Dd8w"),m=n.n(d),f=n("NYxO"),p=n("uLgv"),h=(n("dih4"),{data:function(){return{value:"",GGProvider:{}}},computed:{},mounted:function(){this.initPage()},methods:m()({},Object(f.b)("welcome",["login"]),{initPage:function(){p.a.apps.length||p.a.initializeApp({apiKey:"AIzaSyC__udfBeXgjaCmtTFQ0P-tCzdM1zhvb6g",authDomain:"authengg-a25b9.firebaseapp.com",databaseURL:"https://authengg-a25b9.firebaseio.com",projectId:"authengg-a25b9",storageBucket:"authengg-a25b9.appspot.com",messagingSenderId:"217900106617",appId:"1:217900106617:web:3ca4208e39f0a78a50e5a8",measurementId:"G-W8YTJC4GW4"}),this.GGProvider=new p.a.auth.GoogleAuthProvider},loginGG:function(){var e=this;return l()(u.a.mark(function t(){var n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.auth().signInWithPopup(e.GGProvider);case 3:return n=t.sent,console.log(n),t.next=7,p.a.auth().currentUser.getIdToken(!0);case 7:a=t.sent,console.log(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error",t.t0);case 14:case"end":return t.stop()}},t,e,[[0,11]])}))()},buttonClick:function(){var e=this;this.login({username:"leminhtuan",password:"1"}).then(function(t){sessionStorage.setItem("ACCESS_TOKEN","Bearer "+t.data.access_token),sessionStorage.setItem("USERNAME",t.data.user.username),sessionStorage.setItem("FULLNAME",t.data.user.fullname),sessionStorage.setItem("EMAIL",t.data.user.email),e.$router.push({name:"Test1",params:{id:123}})}).catch(function(e){return console.error(e)})}})}),g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-main",[t("el-row",[t("el-button",{on:{click:this.buttonClick}},[this._v("\n            Login\n        ")]),this._v(" "),t("el-button",{on:{click:this.loginGG}},[this._v("\n            Google\n        ")])],1)],1)},staticRenderFns:[]};var v=n("VU/8")(h,g,!1,function(e){n("LShJ")},null,null).exports,_={data:function(){return{value:new Date}},mounted:function(){this.initPage()},methods:{initPage:function(){},onClick:function(){this.$router.push("/")}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("el-row",[n("el-calendar",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("el-row",[n("el-button",{on:{click:e.onClick}},[e._v("Back")])],1)],1)},staticRenderFns:[]};var w=n("VU/8")(_,b,!1,function(e){n("Vk7/")},null,null).exports;a.default.use(s.a);var k=new s.a({routes:[{path:"/",name:"Welcome",component:v},{path:"/Test1",name:"Test1",component:w}]}),G=n("zL8q"),I=n.n(G),S=(n("tvR6"),n("wUZ8")),x=n.n(S),P=n("//Fk"),C=n.n(P),E=n("mtWM"),L=n.n(E),U={namespaced:!0,state:{_demo:"dsdsd"},getters:{_getDemo:function(e){return e._demo}},mutations:{_setDemo:function(e,t){e._demo=t}},actions:{login:function(e,t){return new C.a(function(e,n){L.a.post("/auth/login",t).then(function(t){e(t)}).catch(function(e){n(e)})})}}},A={state:{_dem:"dsdsd"},getters:{_getDem:function(e){return e._dem}},mutations:{_setDem:function(e,t){e._dem=t}},actions:{}};a.default.use(f.a);var N=new f.a.Store({namespaced:!0,modules:{welcome:U,test1:A}});L.a.defaults.baseURL="",a.default.config.productionTip=!1,a.default.use(I.a,{locale:x.a}),new a.default({el:"#app",router:k,store:N,render:function(e){return e(r)}})},"Vk7/":function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2b6b32c6bc00c3258389.js.map