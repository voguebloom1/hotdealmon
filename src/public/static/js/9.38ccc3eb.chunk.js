(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{351:function(e,n,t){"use strict";t.r(n);var a=t(100),l=t(101),o=t(103),i=t(102),r=t(104),c=t(0),u=t.n(c),s=t(38),m=t(105),d=t(344),p=t(327),f={items:[{name:"Food",url:"/food",icon:"icon-puzzle",children:[{name:"Foods List",url:"/food/list",icon:"icon-speedometer"},{name:"Foods insert",url:"/food/insert",icon:"icon-speedometer"},{name:"Foods Update",url:"/food/update/1",icon:"icon-speedometer"}]},{name:"ItSite",url:"/itsite",icon:"icon-puzzle",children:[{name:"Itsite List",url:"/itsite/list",icon:"icon-speedometer"}]}]},h=u.a.lazy(function(){return t.e(10).then(t.bind(null,353))}),E=[{path:"/",exact:!0,name:"Home"},{path:"/food",exact:!0,name:"FoodList",component:h},{path:"/food/list",name:"FoodList",component:h},{path:"/food/insert",name:"Create Food",component:u.a.lazy(function(){return t.e(6).then(t.bind(null,347))})},{path:"/food/update/:id",name:"Update Food",component:u.a.lazy(function(){return t.e(7).then(t.bind(null,348))})},{path:"/itsite/list",name:"ItSite List",component:u.a.lazy(function(){return t.e(12).then(t.bind(null,352))})},{path:"/itsite/:id",name:"ItSite Detail",component:u.a.lazy(function(){return t.e(11).then(t.bind(null,349))})}],b=u.a.lazy(function(){return t.e(4).then(t.bind(null,350))}),g=u.a.lazy(function(){return t.e(8).then(t.bind(null,345))}),y=u.a.lazy(function(){return t.e(5).then(t.bind(null,346))}),z=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(r)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(r.a)(n,e),Object(l.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app"},u.a.createElement(p.d,{fixed:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(y,{onLogout:function(n){return e.signOut(n)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(p.f,{fixed:!0,display:"lg"},u.a.createElement(p.i,null),u.a.createElement(p.h,null),u.a.createElement(c.Suspense,null,u.a.createElement(p.k,Object.assign({navConfig:f},this.props,{router:m}))),u.a.createElement(p.g,null),u.a.createElement(p.j,null)),u.a.createElement("main",{className:"main"},u.a.createElement(p.b,{appRoutes:E,router:m}),u.a.createElement(d.a,{fluid:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(s.g,null,E.map(function(e,n){return e.component?u.a.createElement(s.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return u.a.createElement(e.component,n)}}):null}),u.a.createElement(s.c,{from:"/",to:"/food"}))))),u.a.createElement(p.a,{fixed:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(b,null)))),u.a.createElement(p.c,null,u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(g,null))))}}]),n}(c.Component);n.default=z}}]);
//# sourceMappingURL=9.38ccc3eb.chunk.js.map