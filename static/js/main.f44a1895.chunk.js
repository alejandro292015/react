(this.webpackJsonpreacproyect=this.webpackJsonpreacproyect||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=(a(43),a(14)),i=a(15),m=a(17),s=a(18),u=a(10),d=a.n(u),p=a(16),b=a(7),f=a(3),E=a(11),v=a.n(E);function h(e){var t=Object(n.useState)({id:""}),a=Object(b.a)(t,2),c=a[0];a[1];function l(e){c.id=e,fetch("https://api-new-03.herokuapp.com/delete.php",{method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8 "},body:JSON.stringify(c)}).catch((function(e){return console.log(e)})),v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Eliminados Correctamente"}).then(),window.location="/home"}var o=r.a.useState([]),i=Object(b.a)(o,2),m=i[0],s=i[1];r.a.useEffect((function(){u()}),[]);var u=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api-new-03.herokuapp.com/read.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mr-0 mt-4\r "},r.a.createElement("div",{className:"flex-large mt-5"},r.a.createElement(f.b,{to:"/agregar",className:"btn btn-success"},"AGREGAR"),r.a.createElement("table",{class:" table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Apellido"),r.a.createElement("th",null,"Identificacion"),r.a.createElement("th",null,"Correo"))),r.a.createElement("tbody",null,m.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.apellido),r.a.createElement("td",null,e.identificacion),r.a.createElement("td",null,e.correo),r.a.createElement("td",null,r.a.createElement(f.b,{to:"/editar/".concat(e.id),class:"btn btn-success"},"EDITAR"),r.a.createElement("button",{type:"button",onClick:function(){return l(e.id)},class:"btn btn btn-danger ml-2"},"Eliminar")))}))))))}a(22);var g=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-danger bg-danger"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"}))))},y=a(2),N=a(20),O=a(19),x=a.n(O);function j(e){var t=Object(n.useState)({nombre:"",apellido:"",identificacion:"",correo:""}),a=Object(b.a)(t,2),c=a[0],l=a[1];function o(e){var t=Object(N.a)({},c);t[e.target.id]=e.target.value,l(t)}return r.a.createElement("div",{className:"container mr-0"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),x.a.post("https://api-new-03.herokuapp.com/insert.php",JSON.stringify(c)).then((function(e){e.data=c,v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Datos Insertados Correctamente"}).then(window.history.back())}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"nombre"},"Nombre"),r.a.createElement("input",{onChange:function(e){return o(e)},value:c.nombre,type:"text",name:"nombre",className:"form-control is-valid",id:"nombre",placeholder:"nombre"}),r.a.createElement("label",{for:"apellido"},"Apellido"),r.a.createElement("input",{onChange:function(e){return o(e)},value:c.apellido,type:"text",name:"apellido",className:"form-control is-valid",id:"apellido",placeholder:"apellido"}),r.a.createElement("label",{for:"identificacion"},"Identificacion"),r.a.createElement("input",{onChange:function(e){return o(e)},value:c.identificacion,type:"text",name:"identificacion",className:"form-control is-valid",id:"identificacion",placeholder:"identificacion"}),r.a.createElement("label",{for:"correo"},"Correo"),r.a.createElement("input",{onChange:function(e){return o(e)},value:c.correo,type:"text",name:"correo",className:"form-control data.noombre != is-valid ",id:"correo",placeholder:"correo"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Agregar"),r.a.createElement(f.b,{type:"button",to:"/home",className:"btn btn-danger ml-3"},"Cancelar")))}var w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null)}}]),a}(n.Component),C=function(e){var t=Object(n.useState)({id:"",nombre:"",apellido:"",identificacion:"",correo:""}),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({id:"",nombre:"",apellido:"",identificacion:"",correo:""}),i=Object(b.a)(o,2),m=i[0],s=(i[1],r.a.useState([])),u=Object(b.a)(s,2),E=u[0],h=u[1];r.a.useEffect((function(){g()}),[]);var g=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api-new-03.herokuapp.com/read.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=Object(y.f)().id;function j(e){var t=Object(N.a)({},c);t[e.target.id]=e.target.value,l(t)}return c.id=O,E.forEach((function(e){m.id=O,m.id===e.id&&(m.nombre=e.nombre,m.apellido=e.apellido,m.identificacion=e.identificacion,m.correo=e.correo)})),r.a.createElement("div",{className:"container mr-0"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""===c.nombre&&(c.nombre=m.nombre),""===c.apellido&&(c.apellido=m.apellido),""===c.identificacion&&(c.identificacion=m.identificacion),""===c.correo&&(c.correo=m.correo),x.a.post("https://api-new-03.herokuapp.com/update.php",JSON.stringify(c)).then((function(e){e.data=c,v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Datos Insertados Correctamente",buttonFuncion:r.a.createElement(f.b,{to:"/"},"Editar")}).then(window.history.back())}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"nombre"},"ID"),r.a.createElement("input",{onChange:function(e){return j(e)},disabled:!0,value:c.id,type:"text",name:"nombre",className:"form-control is-valid ",id:"nombre",placeholder:c.id}),r.a.createElement("label",{for:"nombre"},"Nombre"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.nombre,type:"text",name:"nombre",className:"form-control is-valid",id:"nombre",placeholder:m.nombre}),r.a.createElement("label",{for:"apellido"},"Apellido"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.apellido,type:"text",name:"apellido",className:"form-control is-valid",id:"apellido",placeholder:m.apellido}),r.a.createElement("label",{for:"identificacion"},"Identificacion"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.identificacion,type:"text",name:"identificacion",className:"form-control is-valid",id:"identificacion",placeholder:m.identificacion}),r.a.createElement("label",{for:"correo"},"Correo"),r.a.createElement("input",{onChange:function(e){return j(e)},value:c.correo,type:"text",name:"correo",className:"form-control is-valid",id:"correo",placeholder:m.correo})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit",className:"btn btn-success ml-3"},"Editar"),r.a.createElement(f.b,{type:"button",to:"/home",className:"btn btn-danger ml-3"},"Cancelar"))))};function k(e){var t=Object(n.useState)({id:""}),a=Object(b.a)(t,2),c=a[0];a[1];var l=r.a.useState([]),o=Object(b.a)(l,2),i=o[0],m=o[1];r.a.useEffect((function(){s()}),[]);var s=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api-new-03.herokuapp.com/read.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,m(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mr-0 mt-4\r "},r.a.createElement("div",{className:"flex-large mt-5"},r.a.createElement(f.b,{to:"/agregar",className:"btn btn-success"},"AGREGAR"),r.a.createElement("table",{class:" table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Apellido"),r.a.createElement("th",null,"Identificacion"),r.a.createElement("th",null,"Correo"))),r.a.createElement("tbody",null,i.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.apellido),r.a.createElement("td",null,e.identificacion),r.a.createElement("td",null,e.correo),r.a.createElement("td",null,r.a.createElement(f.b,{to:"/editar/".concat(e.id),class:"btn btn-success"},"EDITAR"),r.a.createElement("button",{type:"button",onClick:function(){return t=e.id,c.id=t,fetch("https://api-new-03.herokuapp.com/delete.php",{method:"DELETE",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8 "},body:JSON.stringify(c)}).catch((function(e){return console.log(e)})),void v.a.fire({icon:"success",title:"Operacion Exitosa",text:"Eliminados Correctamente"}).then(window.location="/tabla");var t},class:"btn btn btn-danger ml-2"},"Eliminar")))}))))))}var S=function(){return r.a.createElement("div",null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/home",component:h}),r.a.createElement(y.a,{path:"/tabla",component:k}),r.a.createElement(y.a,{path:"/agregar",component:w}),r.a.createElement(y.a,{path:"/editar/:id",component:C})))},T=a(12),A=a.n(T),I=(a(71),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-danger bg-danger"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"})),r.a.createElement("h4",null,"CRUD REACT JS"))),r.a.createElement(A.a,null,r.a.createElement(A.a.Toggle,null),r.a.createElement(A.a.Nav,{defaultSelected:"home"},r.a.createElement(T.NavItem,{eventKey:"home"},r.a.createElement(T.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),r.a.createElement(T.NavText,null,r.a.createElement(f.b,{className:"btn btn",to:"/home"},"home"))))))}}]),a}(n.Component)),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(I,null),r.a.createElement(S,null))}}]),a}(n.Component);l.a.render(r.a.createElement(f.a,null,r.a.createElement(D,null)," "),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f44a1895.chunk.js.map