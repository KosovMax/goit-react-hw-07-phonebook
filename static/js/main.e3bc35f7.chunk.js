(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{41:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),o=n(6),a=n.n(o),u=n(3),i=n(12),s=n(35),b=(n(41),n(18)),j=(n(42),n(8)),l=n(14),f=function(t){return t.phonebook.filter},d=function(t){return t.phonebook.contacts},O={getFilter:f,getContacts:d,getLoading:function(t){return t.phonebook.loading},getFilterContacts:Object(l.a)([f,d],(function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))},p=n(9),h=n.n(p),v=n(17),x=n(13),m=n.n(x),g=n(2),C=Object(g.b)("phonebook/fetchContactRequest"),k=Object(g.b)("phonebook/fetchContactSuccess"),y=Object(g.b)("phonebook/fetchContactError"),F=Object(g.b)("phonebook/addContactRequest"),w=Object(g.b)("phonebook/addContactSuccess"),S=Object(g.b)("phonebook/addContactError"),L=Object(g.b)("phonebook/deleteContactRequest"),P=Object(g.b)("phonebook/deleteContactSuccess"),_=Object(g.b)("phonebook/deleteContactError"),A=Object(g.b)("phonebook/changeFilter");m.a.defaults.baseURL="http://localhost:3030";var q,E,N=function(){return function(){var t=Object(v.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,c=n.data,e(k(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(y(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},R=function(t,e){return function(){var n=Object(v.a)(h.a.mark((function n(c){var r,o,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:t,phone:e},c(F()),n.prev=2,n.next=5,m.a.post("/contacts",r);case 5:o=n.sent,a=o.data,c(w(a)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(S(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},D=function(t){return function(){var e=Object(v.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,m.a.delete("/contacts/".concat(t));case 4:n(P(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(_(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},I=n(16),B=n(4),H=Object(g.c)([],(q={},Object(u.a)(q,k,(function(t,e){return e.payload})),Object(u.a)(q,w,(function(t,e){var n=e.payload;return[].concat(Object(I.a)(t),[n])})),Object(u.a)(q,P,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),J=Object(g.c)("",Object(u.a)({},A,(function(t,e){return e.payload}))),z=Object(g.c)(!1,(E={},Object(u.a)(E,C,(function(){return!0})),Object(u.a)(E,k,(function(){return!1})),Object(u.a)(E,y,(function(){return!1})),Object(u.a)(E,F,(function(){return!0})),Object(u.a)(E,w,(function(){return!1})),Object(u.a)(E,S,(function(){return!1})),Object(u.a)(E,L,(function(){return!0})),Object(u.a)(E,P,(function(){return!1})),Object(u.a)(E,_,(function(){return!1})),E)),T=Object(B.c)({contacts:H,filter:J,loading:z}),U={name:"",phone:""},G=function(t){var e=t.contacts,n=t.onAddContact,o=Object(r.useState)(Object(i.a)({},U)),a=Object(s.a)(o,2),j=a[0],l=a[1],f=j.name,d=j.phone,O=function(t){var e=t.target,n=e.name,c=e.value;l((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(u.a)({},n,c))}))},p=function(){l(Object(i.a)({},U))},h=function(t){return e.filter((function(e){return e.name===t}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"phonebook",onSubmit:function(t){return t.preventDefault(),f&&d?0!==h(f).length?(b.b.warn(f+" is already in contacts.",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1):(n(f,d),void p()):(b.b.error("Name or phone filed is empty.",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1)},children:[Object(c.jsx)("label",{htmlFor:"name_1",children:"Name"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",id:"name_1",value:f,onChange:O}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"phone_1",children:"Number"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"tel",name:"phone",id:"phone_1",value:d,onChange:O}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(c.jsx)(b.a,{})]})};G.defaultProps={contacts:[],onAddContact:function(){}};var K=Object(j.b)((function(t){return{contacts:O.getContacts(t)}}),(function(t){return{onAddContact:function(e,n){return t(R(e,n))}}}))(G),M=function(t){var e=t.loading,n=t.contacts,o=t.fetchContacts,a=t.removeContactId;return Object(r.useEffect)((function(){console.log(o())}),[o]),Object(c.jsxs)(c.Fragment,{children:[e&&Object(c.jsx)("h3",{children:"Loading"}),Object(c.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.name,r=t.phone;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{children:[" ",n,": ",r," "]}),Object(c.jsx)("button",{onClick:function(){a(e)},children:"Delete"})," "]},e)}))})]})};M.defaultProps={contacts:[],removeContactId:function(){}};var Q=Object(j.b)((function(t){return{loading:O.getLoading(t),contacts:O.getFilterContacts(t)}}),(function(t){return{fetchContacts:function(){return t(N())},removeContactId:function(e){return t(D(e))}}}))(M),V=function(t){var e=t.filter,n=t.onFilter;return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault()},children:[Object(c.jsx)("label",{htmlFor:"filter_1",children:"Find contacts by name"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"filter",id:"filter_1",value:e,onChange:n})]})};V.defaultProps={filter:"",onFilter:function(){}};var W=Object(j.b)((function(t){return{filter:O.getFilter(t)}}),(function(t){return{onFilter:function(e){return t(A(e.target.value))}}}))(V);function X(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(K,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(W,{}),Object(c.jsx)(Q,{})]})}var Y=n(34),Z=n.n(Y),$=n(10),tt=[].concat(Object(I.a)(Object(g.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),[Z.a]),et=Object(g.a)({reducer:{phonebook:T},middleware:tt,devTools:!1});a.a.render(Object(c.jsx)(j.a,{store:et,children:Object(c.jsx)(X,{})}),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e3bc35f7.chunk.js.map