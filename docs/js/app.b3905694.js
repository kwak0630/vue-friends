(function(t){function e(e){for(var i,a,c=e[0],r=e[1],d=e[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,c=1;c<o.length;c++){var r=o[c];0!==s[r]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},s={app:0},n=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-friends/docs/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=r;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"14f6":function(t,e,o){"use strict";o("a160")},"1a4f":function(t,e,o){t.exports=o.p+"img/ico-del.b614f503.png"},"1e20":function(t,e,o){},"3db4":function(t,e,o){},"41d6":function(t,e,o){"use strict";o("aaa4")},4706:function(t,e,o){},"55c2":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],a=(o("5c0b"),o("2877")),c={},r=Object(a["a"])(c,s,n,!1,null,null,null),d=r.exports,l=o("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"todo-wrap"},[i("Header"),i("div",{staticClass:"todo-body"},[i("div",{staticClass:"filter-wrap"},[i("div",{staticClass:"filter all-area"},[t.todoList.length>0?i("button",{staticClass:"btn-all",on:{click:function(e){return t.popOpen()}}},[i("img",{staticClass:"ico-del",attrs:{src:o("1a4f")}}),i("span",[t._v("전체 삭제")])]):t._e()]),i("div",{staticClass:"filter select-area"},[i("select-field",{attrs:{options:t.options},on:{input:t.listChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),i("board-list",{staticClass:"todo-list",attrs:{listData:t.todoList,isChecked:t.isChecked,noDataString:t.noDataString},on:{check:t.checkTodo,delete:t.deleteTodo}})],1),i("popup",{attrs:{visible:t.popVisible},on:{PopUpclose:function(e){t.popVisible=!1}}},[i("h2",{attrs:{slot:"text"},slot:"text"},[t._v("전체 할 일 목록이 없어집니다. "),i("br"),t._v("정말로 삭제하시겠습니까?")]),i("div",{staticClass:"btn-wrap"},[i("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAll(e)}}},[t._v("예")]),i("a",{staticClass:"btn v2",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.popVisible=!1}}},[t._v("아니요")])])]),i("Footer")],1)},p=[],f=o("5530"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-header"},[i("div",{staticClass:"time-box"},[t._v(" "+t._s(t.time)+" "),"morning"===t.type?i("span",[i("img",{staticClass:"ico-time",attrs:{src:o("a855")}})]):"afternoon"===t.type?i("span",[i("img",{staticClass:"ico-time",attrs:{src:o("6ed3")}})]):"night"===t.type?i("span",[i("img",{staticClass:"ico-time",attrs:{src:o("6737")}})]):t._e()]),i("div",{staticClass:"date-box"},[i("div",[i("span",{staticClass:"day"},[t._v(t._s(t.day))])]),i("div",[i("span",{staticClass:"year"},[t._v(t._s(t.year))]),i("br"),i("span",{staticClass:"month"},[t._v(t._s(t.month))]),i("span",{staticClass:"date"},[t._v(t._s(t.date))])])]),i("div",{staticClass:"task-box"},[i("strong",[t._v(t._s(t.todoChkNum))]),i("span",[t._v(t._s(t.todoList.length))])]),i("div",{staticClass:"add-box",class:{active:t.isShow}},[i("button",{staticClass:"add-btn",on:{click:t.todoShow}},[t._v("추가")]),i("form",[i("div",{staticClass:"form"},[i("div",{staticClass:"form-group"},[i("input-field",{attrs:{type:"text",id:"todo",placeholder:"Add New Task!"},on:{add:t.addNewTodo},model:{value:t.addTodo.title,callback:function(e){t.$set(t.addTodo,"title",e)},expression:"addTodo.title"}})],1),i("button",{attrs:{type:"button"},on:{click:t.addNewTodo}},[i("span",{staticClass:"hide"},[t._v("입력")]),i("i",{staticClass:"i-arr"})])])])]),i("popup",{attrs:{visible:t.popVisible},on:{PopUpclose:function(e){t.popVisible=!1}}},[i("h2",{attrs:{slot:"text"},slot:"text"},[t._v("할 일을 입력해주세요.")]),i("div",{staticClass:"btn-wrap"},[i("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.popVisible=!1}}},[t._v("확인")])])])],1)},h=[],v=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-item"},[o("input",{attrs:{type:t.type,id:t.id,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.change,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addNew(e))}}})])}),g=[],b={name:"inputField",props:["type","name","id","value","placeholder"],methods:{change:function(t){this.$emit("input",t.target.value)},addNew:function(t){this.$emit("add",t.target.value)}}},y=b,_=Object(a["a"])(y,v,g,!1,null,null,null),T=_.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"popup",appear:"",disappear:""}},[t.visible?o("div",{staticClass:"popup-wrap",attrs:{visible:t.visible}},[o("div",{staticClass:"dim"}),o("div",{staticClass:"popup-inner"},[o("div",{staticClass:"popup-content"},[t._t("text"),t._t("default")],2),o("button",{staticClass:"btn-close",on:{click:t.close}},[t._v("팝업닫기")])])]):t._e()])},D=[],L={name:"Popup",props:{visible:{}},methods:{close:function(){this.$emit("PopUpclose")}}},k=L,w=(o("e19b"),Object(a["a"])(k,C,D,!1,null,"fede6f88",null)),S=w.exports,x=o("2f62"),O={name:"Header",components:{InputField:T,Popup:S},data:function(){return{year:"",month:"",day:"",date:"",time:"",timeText:"",addTodo:{title:null,date:new Date,isEnd:!1},isShow:!1,isActive:!1,popVisible:!1,type:"morning"}},methods:{dateInfo:function(){var t=this.$store.state.toDayDate,e=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.date=t.getDate();var o=["일","월","화","수","목","금","토"];this.day=o[t.getDay()],this.time=this.timeLeft(""+e.getHours())+":"+this.timeLeft(""+e.getMinutes());var i=t.getHours();this.type=i<12?"morning":i<18?"afternoon":"night"},timeLeft:function(t){var e="00";return e.substring(0,e.length-t.length)+t},todoShow:function(){this.isShow=!this.isShow},addNewTodo:function(){var t=this.addTodo;""===t.title||null===t.title?(console.log("빈값"),this.popVisible=!0):(this.$store.dispatch("addToDoItem",Object(f["a"])({},t)),this.addTodo.title="")}},mounted:function(){setInterval(this.dateInfo,100)},computed:Object(f["a"])(Object(f["a"])({},Object(x["b"])(["todoList"])),{},{todoListCompleted:function(){return this.$store.getters.getTodoListCompleted},todoChkNum:function(){return this.$store.state.todoList.filter((function(t){return t.isEnd})).length}})},I=O,$=(o("d340"),Object(a["a"])(I,m,h,!1,null,null,null)),j=$.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-footer"},[t._v(" vue-friends ")])},N=[],P=(o("62e4"),{}),V=Object(a["a"])(P,E,N,!1,null,null,null),M=V.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.listData.length>0?i("ul",{staticClass:"list-wrap"},t._l(t.listData,(function(e,o){return i("todo-item",{key:o,attrs:{isChecked:t.isChecked,todoItem:e},on:{check:t.checkTodo,delete:t.toggleTodo}})})),1):i("div",{staticClass:"nodata-wrap"},[i("div",{staticClass:"nodata"},[i("img",{staticClass:"ico-nodata",attrs:{src:o("acf9")}}),i("p",[t._v(t._s(t.noDataString))])])])])},A=[],F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"list",class:{checked:t.todoItem.isEnd}},[o("button",{on:{click:function(e){return t.$emit("check",t.todoItem)}}},[o("span",{staticClass:"btn-chk"},[t._v(" 체크 ")]),o("div",{staticClass:"content"},[o("p",{staticClass:"label"},[t._v(t._s(t.todoItem.title))]),o("p",{staticClass:"date"},[t._v(t._s(t._f("moment")(t.todoItem.date,"MM.D. ddd")))])])]),o("div",{staticClass:"side"},[o("button",{staticClass:"btn-del",on:{click:function(e){return t.$emit("delete",t.todoItem)}}},[t._v("삭제")])])])},H=[],B={name:"TodoItem",props:{todoItem:{type:Object},isChecked:{type:Boolean,default:!1}}},U=B,Y=(o("97a1"),Object(a["a"])(U,F,H,!1,null,"72633b86",null)),z=Y.exports,q={name:"BoardList",components:{TodoItem:z},props:{listData:{type:Array},isChecked:{type:Boolean,default:!1},noDataString:{default:"게시글이 없습니다."}},methods:{checkTodo:function(t){this.$emit("check",t)},toggleTodo:function(t){this.$emit("delete",t)}}},G=q,K=(o("41d6"),Object(a["a"])(G,J,A,!1,null,"d9bddef8",null)),Q=K.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("select",{staticClass:"select",attrs:{name:t.name,id:t.id},domProps:{value:t.value},on:{change:t.updateInput}},t._l(t.options,(function(e,i){return o("option",{key:i,domProps:{value:e.value}},[t._v(t._s(e.text))])})),0)},W=[],X={name:"SelectStyle",props:{value:{typs:String},name:{typs:String},id:{typs:String},options:{typs:String}},methods:{updateInput:function(t){this.$emit("input",t.target.value)}}},Z=X,tt=(o("bd6c"),Object(a["a"])(Z,R,W,!1,null,"2de2035e",null)),et=tt.exports,ot={name:"Todo",components:{Header:j,Footer:M,BoardList:Q,SelectField:et,Popup:S},data:function(){return{isChecked:!1,todoInput:"",addTodo:{title:null,date:new Date,isEnd:!1},noDataString:"목록이 없습니다.",selected:"",options:[{text:"정렬",value:""},{text:"latest",value:"A"},{text:"oldest",value:"B"}],popVisible:!1}},computed:Object(f["a"])({},Object(x["b"])(["todoList"])),methods:{deleteTodo:function(t){this.$store.dispatch("deleteToDoItem",Object(f["a"])({},t))},checkTodo:function(t){this.$store.dispatch("completedToDo",Object(f["a"])({},t))},popOpen:function(){this.popVisible=!0},clearAll:function(){this.popVisible=!1,this.$store.dispatch("clearToToList")},listChange:function(){"A"===this.selected?this.$store.dispatch("sortTodoList"):this.$store.dispatch("reverseTodoList")}}},it=ot,st=(o("14f6"),Object(a["a"])(it,u,p,!1,null,"496f23f8",null)),nt=st.exports;o("159b"),o("a434");i["a"].use(x["a"]);var at=new x["a"].Store({strict:!1,state:{todoList:[{title:"달리기",date:"2021-05-22 03:33:21",isEnd:!1,id:1}],toDayDate:new Date,time:new Date},mutations:{addToDoItem:function(t,e){t.todoList.push(e);var o=JSON.stringify(t.todoList);localStorage.setItem("todoList",o)},deleteToDoItem:function(t,e){t.todoList.forEach((function(o,i){o.id===e.id&&t.todoList.splice(i,1);var s=JSON.stringify(t.todoList);localStorage.setItem("todoList",s)}))},clearToToList:function(t){localStorage.clear(),t.todoList=[]},completedToDo:function(t,e){t.todoList.forEach((function(t){t.id===e.id&&(t.isEnd=!t.isEnd)}));var o=JSON.stringify(t.todoList);localStorage.setItem("todoList",o)},initTodoList:function(t){localStorage.getItem("todoList")&&(t.todoList=JSON.parse(localStorage.getItem("todoList")))},sortTodoList:function(t){t.todoList.sort((function(t,e){return new Date(t.date)-new Date(e.date)}));var e=JSON.stringify(t.todoList);localStorage.setItem("todoList",e)},reverseTodoList:function(t){t.todoList.sort((function(t,e){return new Date(e.date)-new Date(t.date)}));var e=JSON.stringify(t.todoList);localStorage.setItem("todoList",e)},updateDateTime:function(t){t.toDayDate=new Date,t.time=new Date}},actions:{completedToDo:function(t,e){var o=t.commit;o("completedToDo",e)},deleteToDoItem:function(t,e){var o=t.commit;o("deleteToDoItem",e)},addToDoItem:function(t,e){var o=t.commit;this.state.todoList.length>0?e.id=this.state.todoList[this.state.todoList.length-1].id+1:e.id=1,o("updateDateTime");var i=this.getters.toDayDate,s=this.getters.time;e.date=i+" "+s,o("addToDoItem",e)},initTodoList:function(t){var e=t.commit;e("initTodoList")},clearToToList:function(t){var e=t.commit;e("clearToToList")},sortTodoList:function(t){var e=t.commit;e("sortTodoList")},reverseTodoList:function(t){var e=t.commit;e("reverseTodoList")},updateDateTime:function(t){var e=t.commit;e("updateDateTime")},updateTodoChkNum:function(t){var e=t.commit;e("updateTodoChkNum")}},modules:{},getters:{toDayDate:function(t){var e=t.toDayDate;return e=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),e},time:function(t){var e=t.time;return e=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),e}},methods:{}});i["a"].use(l["a"]);var ct=[{path:"/",name:"Todo",component:nt,beforeEnter:function(t,e,o){try{at.dispatch("initTodoList")}catch(i){console.error("initialize failed.",i.message)}finally{o()}}}],rt=new l["a"]({mode:"history",base:"/vue-friends/docs/",routes:ct}),dt=rt,lt=o("2ead"),ut=o.n(lt);o("712d"),o("3db4"),o("1e20");i["a"].use(ut.a),i["a"].config.productionTip=!1,new i["a"]({router:dt,store:at,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"62e4":function(t,e,o){"use strict";o("63ad")},"63ad":function(t,e,o){},6737:function(t,e,o){t.exports=o.p+"img/ico-night.ab70dfcf.png"},"6ed3":function(t,e,o){t.exports=o.p+"img/ico-afternoon.0cd4cfe8.png"},"712d":function(t,e,o){},7753:function(t,e,o){},"97a1":function(t,e,o){"use strict";o("a8e4")},"9c0c":function(t,e,o){},a160:function(t,e,o){},a855:function(t,e,o){t.exports=o.p+"img/ico-morning.326da1a2.png"},a8e4:function(t,e,o){},aaa4:function(t,e,o){},acf9:function(t,e,o){t.exports=o.p+"img/ico-nodata.278e4f4c.png"},bd6c:function(t,e,o){"use strict";o("55c2")},d340:function(t,e,o){"use strict";o("7753")},e19b:function(t,e,o){"use strict";o("4706")}});
//# sourceMappingURL=app.b3905694.js.map