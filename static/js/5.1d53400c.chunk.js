(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[5],{291:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(53),r=n(54),o=n(56),s=n(55),i=n(0),l=n.n(i),u=n(10),c=n(16),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(s.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"./login"})}}]),i}(l.a.Component);return Object(c.b)(f)(t)}},292:function(e,t,n){e.exports=n.p+"static/media/userpic.e9fbda13.svg"},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(97);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},295:function(e,t,n){e.exports={findElems:"Users_findElems__SY7Jy",title:"Users_title__2S65O",findInput:"Users_findInput__3xGxo",findButton:"Users_findButton__Sdp77",friendsPage:"Users_friendsPage__3hvZu",preloaderContainer:"Users_preloaderContainer__L2PXX"}},308:function(e,t,n){e.exports={pagination:"Paginator_pagination__3fj_E",paginationButton:"Paginator_paginationButton__1cAwd",prev:"Paginator_prev__2TmXD",next:"Paginator_next__2TNRZ",pageNumber:"Paginator_pageNumber__2hBAu",pageNumberSelected:"Paginator_pageNumberSelected__rtDjU"}},309:function(e,t,n){e.exports={followingItems:"User_followingItems__2rvrx",navUserpic:"User_navUserpic__251Vw",userpic:"User_userpic__h6Gm6",followButton:"User_followButton__O8m87",unfollow:"User_unfollow__3jo4s",follow:"User_follow__21fFT",infoItems:"User_infoItems__6iGwR",infoItem:"User_infoItem__2aNht",mainText:"User_mainText__i6oRi",plainText:"User_plainText__1GS3s"}},314:function(e,t,n){"use strict";n.r(t);var a=n(53),r=n(54),o=n(56),s=n(55),i=n(0),l=n.n(i),u=n(16),c=n(9),f=n(131),p=n(87),m=n(295),g=n.n(m),d=n(293),_=n(308),h=n.n(_),b=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,u=Math.ceil(t/n),c=[],f=1;f<=u;f++)c.push(f);var p=Math.ceil(u/s),m=Object(i.useState)(1),g=Object(d.a)(m,2),_=g[0],b=g[1],w=(_-1)*s+1,P=_*s;return l.a.createElement("div",{className:h.a.pagination},_>1&&l.a.createElement("button",{onClick:function(){b(_-1)},className:"".concat(h.a.paginationButton," ").concat(h.a.prev)}),c.filter((function(e){return e>=w&&e<=P})).map((function(e,t){return l.a.createElement("span",{className:a===e?"".concat(h.a.pageNumber," ").concat(h.a.pageNumberSelected):"".concat(h.a.pageNumber),onClick:function(t){r(e)},key:t},e)})),p>_&&l.a.createElement("button",{onClick:function(){b(_+1)},className:"".concat(h.a.paginationButton," ").concat(h.a.next)}))},w=n(309),P=n.n(w),v=n(292),E=n.n(v),I=n(20),N=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return l.a.createElement("div",{className:P.a.followingItems},l.a.createElement(I.b,{to:"/profile/"+t.id,className:P.a.navUserpic},l.a.createElement("img",{src:null!=t.photos.large?t.photos.large:E.a,alt:"UserPic",className:P.a.userpic})),l.a.createElement("div",{className:P.a.infoItems},l.a.createElement("div",{className:P.a.infoItem},l.a.createElement("p",{className:P.a.mainText},t.name),l.a.createElement("p",{className:P.a.plainText},null===t.status?"\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d":t.status)),l.a.createElement("div",null,l.a.createElement("p",{className:P.a.mainText},"\u0417\u0434\u0435\u0441\u044c \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0443"),l.a.createElement("div",null,t.followed?l.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},className:"".concat(P.a.followButton," ").concat(P.a.unfollow)},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):l.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},className:"".concat(P.a.followButton," ").concat(P.a.follow)},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")))))},C=function(e){var t=e.currentPage,n=e.totalItemsCount,a=e.pageSize,r=e.onPageChanged,o=e.users,s=Object(p.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return l.a.createElement("div",{className:g.a.friendsPage},l.a.createElement("div",{className:g.a.findElems},l.a.createElement("h1",{className:g.a.title},"\u041d\u0430\u0439\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439"),l.a.createElement("input",{type:"text",className:g.a.findInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),l.a.createElement("button",{className:g.a.findButton},"\u041d\u0430\u0439\u0442\u0438")),l.a.createElement(b,{currentPage:t,onPageChanged:r,totalItemsCount:n,pageSize:a}),o.map((function(e){return l.a.createElement(N,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow,key:e.id})})))},U=n(95),y=n(291),S=function(e){return e.usersPage.users},j=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.totalItemsCount},O=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},B=function(e){return e.usersPage.followingInProgress},z=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,n)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:g.a.preloaderContainer},this.props.isFetching?l.a.createElement(U.a,null):null),l.a.createElement(C,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(l.a.Component);t.default=Object(c.d)(y.a,Object(u.b)((function(e){return{users:S(e),pageSize:j(e),totalItemsCount:x(e),currentPage:O(e),isFetching:k(e),followingInProgress:B(e)}}),{follow:f.b,unfollow:f.f,setCurrentPage:f.d,toggleFollowingProgress:f.e,requestUsers:f.c}))(z)}}]);
//# sourceMappingURL=5.1d53400c.chunk.js.map