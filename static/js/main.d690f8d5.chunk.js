(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c,o=n(4),s=n.n(o),i=n(2),r=n(1),a=(n(9),n(10),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var l=function(){var t=Object(r.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)(!1),l=Object(i.a)(s,2),b=l[0],j=l[1],h=Object(r.useState)(u),N=Object(i.a)(h,2),O=N[0],d=N[1],f=function(t){return o(t)};return Object(r.useEffect)((function(){!function(){var t=[].concat(u);n===c.ALPHABET?t.sort((function(t,e){return t.localeCompare(e)})):n===c.LENGTH&&t.sort((function(t,e){return t.length-e.length})),b&&t.reverse(),d(t)}()}),[n,b]),Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:"button is-info ".concat(n===c.ALPHABET?"":"is-light"),onClick:function(){return f(c.ALPHABET)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-success ".concat(n===c.LENGTH?"":"is-light"),onClick:function(){return f(c.LENGTH)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button is-warning  ".concat(b?"":"is-light"),onClick:function(){j(!b)},children:"Reverse"}),(n!==c.NONE||b)&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(c.NONE),j(!1)},children:"Reset"})]}),Object(a.jsx)("ul",{children:O.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d690f8d5.chunk.js.map