(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(15),i=n.n(r),s=(n(21),n(22),n(0)),u=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Home"}),Object(s.jsx)("li",{children:"About"}),Object(s.jsx)("li",{children:"Contact"})]})})},j=n(5),l=n.n(j),a=n(16),b=n(3),h=n(6),d=n.n(h);var p=function(){var t=Object(c.useState)(""),e=Object(b.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),i=Object(b.a)(r,2),u=i[0],j=i[1],h=function(){var t=Object(a.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"DELET"),t.next=3,d()("https://jsonplaceholder.typicode.com/posts/1",{method:"delete"}).then((function(t){return t}));case 3:n=t.sent,console.log("With async",n),n.status;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"Title"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(t){return o(t.target.value)}}),Object(s.jsx)("label",{children:"Body"}),Object(s.jsx)("input",{type:"text",value:u,onChange:function(t){return j(t.target.value)}}),Object(s.jsx)("button",{onClick:function(){var t={title:n,body:u};d()("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t)}).then((function(t){alert("Success"),console.log(t)}))},children:"Submit"}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{onClick:h,children:"Delete product 1"})]})},O=function(){var t=Object(c.useState)([]),e=Object(b.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return t.json()})).then((function(t){return o(t)}))})),Object(c.useEffect)((function(){return function(){console.log("Component Will MOunt")}}),[]),Object(s.jsx)("div",{children:n.map((function(t,e){var n=t.title,c=t.thumbnailUrl;return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{width:"200",src:c,alt:n}),Object(s.jsx)("h5",{children:n})]})}))})};var f=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{}),Object(s.jsx)(p,{}),Object(s.jsx)(O,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};n(43);i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.533486e7.chunk.js.map