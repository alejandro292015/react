(this.webpackJsonpreacproyect=this.webpackJsonpreacproyect||[]).push([[0],{27:function(e,a,t){e.exports=t(55)},32:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(8),t(32),t(3)),i=t(4),s=t(1),u=t.n(s),m=t(6),d=function(){var e=r.a.useState([]),a=Object(i.a)(e,2),t=a[0],n=a[1];r.a.useEffect((function(){l()}),[]);var l=function(){var e=Object(m.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reac-api-rest.000webhostapp.com/api/read.php");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("table",{class:"table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Apellido"),r.a.createElement("th",null,"Identificacion"),r.a.createElement("th",null,"Correo"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.apellido),r.a.createElement("td",null,e.identificacion),r.a.createElement("td",null,e.correo),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn btn-success ml-2"},"Editar"),r.a.createElement("button",{type:"button",class:"btn btn btn-danger ml-2"},"Eliminar")))}))))},p=t(26),b=t(14);t(34);function E(e){var a=Object(n.useState)({nombre:"",apellido:"",identificacion:"",correo:""}),t=Object(i.a)(a,2),l=t[0],c=t[1];function o(e){var a=Object(p.a)({},l);a[e.target.id]=e.target.value,c(a)}return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),fetch("https://reac-api-rest.000webhostapp.com/api/insert.php",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return console.log("Success:",e)}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"nombre"},"Nombre"),r.a.createElement("input",{onChange:function(e){return o(e)},value:l.nombre,type:"text",name:"nombre",className:"form-control",id:"nombre",placeholder:"nombre"}),r.a.createElement("label",{for:"apellido"},"Apellido"),r.a.createElement("input",{onChange:function(e){return o(e)},value:l.apellido,type:"text",name:"apellido",className:"form-control",id:"apellido",placeholder:"apellido"}),r.a.createElement("label",{for:"identificacion"},"Identificacion"),r.a.createElement("input",{onChange:function(e){return o(e)},value:l.identificacion,type:"text",name:"identificacion",className:"form-control",id:"identificacion",placeholder:"identificacion"}),r.a.createElement("label",{for:"correo"},"Correo"),r.a.createElement("input",{onChange:function(e){return o(e)},value:l.correo,type:"text",name:"correo",className:"form-control",id:"correo",placeholder:"correo"})),r.a.createElement("button",{className:"btn-primary"},"Agregar ")))}var f=t(15),v=function(e){var a,t,n,l=Object(b.a)({defaultValues:e.currentUser}),c=l.register,o=l.errors,i=l.handleSubmit,s=l.setValue;s("name",e.currentUser.name),s("username",e.currentUser.username),s("correo",e.currentUser.correo);return r.a.createElement("form",{onSubmit:i((function(a,t){a.id=e.currentUser.id,e.updateUser(e.currentUser.id,a),t.target.reset()}))},r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{type:"text",name:"name",ref:c({required:{value:!0,menssage:"campo requerido"}})}),r.a.createElement("div",null,null===o||void 0===o||null===(a=o.name)||void 0===a?void 0:a.menssage),r.a.createElement("label",null,"Nombre de usuario"),r.a.createElement("input",{type:"text",name:"username",ref:c({required:{value:!0,menssage:"campo requerido"}})}),r.a.createElement("div",null,null===o||void 0===o||null===(t=o.username)||void 0===t?void 0:t.menssage),r.a.createElement("label",null,"Correo"),r.a.createElement("input",{type:"text",name:"correo",ref:c({required:{value:!0,menssage:"campo requerido"}})}),r.a.createElement("div",null,null===o||void 0===o||null===(n=o.correo)||void 0===n?void 0:n.menssage),r.a.createElement("button",{className:"btn btn-success"},r.a.createElement(f.a,null),r.a.createElement("span",{className:"mt-2  ml-2"},"Editar usuario")))},h=t(10),g=t(11),y=t(12),j=t(13),x=function(e){Object(j.a)(t,e);var a=Object(y.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",{class:"form-row"},r.a.createElement("div",{class:"col"},r.a.createElement("label",{for:"exampleInputEmail1"},"Edad"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Pais"})),r.a.createElement("div",{class:"col"},r.a.createElement("label",{for:"exampleInputEmail1"},"Peso"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Ciudad"})),r.a.createElement("div",{class:"col"},r.a.createElement("label",{for:"exampleInputEmail1"},"Estatura"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Ciudad"})),r.a.createElement("div",{class:"col mt-5"},r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Buscar rutina ")))))}}]),t}(n.Component),N=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Vida Sana"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Actividad fisica")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Rutinas")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Dieta")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},r.a.createElement("i",{class:"fa fa-circle-thin","aria-hidden":"true"},e.registros)))))))},O=t(57),q=(t(52),t(53),t(54),function(e){Object(j.a)(t,e);var a=Object(y.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",null,r.a.createElement("p",{className:"text",style:{textAlign:"center"}}," ","El workout, o tambi\xe9n conocido como body workout, es una t\xe9cnica de fitness y deporte que se practica para trabajar la resistencia y estilizar a su vez la figura. Este tipo de ejercicios implican parte de entrenamiento aer\xf3bico, fitness e incluso trabajos de calistenia. Lo que se pretende al practicar este deporte, adem\xe1s de sentirse mucho m\xe1s sano y saludable, es una modificaci\xf3n real est\xe9tica del cuerpo. Vamos, que funcione y se noten los resultados.")),r.a.createElement("li",null,r.a.createElement("p",{className:"text",style:{textAlign:"center"}}," ","Comer de forma saludable no s\xf3lo depende del tipo de alimentos que se consuman, sino que los h\xe1bitos y costumbres que se sigan a la hora de alimentarse cumplen un papel importante de cara a lograr mantener una buena salud. Es tan necesario conocer los alimentos que reportan beneficios como aquellos que son m\xe1s perjudiciales o que est\xe1n menos recomendados, de manera que se pueda establecer una dieta variada y equilibrada que no excluya nutrientes, vitaminas y minerales necesarios para que el organismo lleve a cabo sus funciones."))))}}]),t}(n.Component)),k=function(){var e=[{id:Object(O.a)(),name:"Tania",username:"floppydiskette",correo:"aaa@gmail.com"},{id:Object(O.a)(),name:"Craig",username:"siliconeidolon"},{id:Object(O.a)(),name:"Ben",username:"benisphere"}],a=Object(n.useState)(e),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],p=u[1],b=Object(n.useState)({id:null,name:"",username:"",correo:""}),f=Object(i.a)(b,2),h=f[0],g=f[1];return r.a.createElement("div",null,r.a.createElement(N,{registros:l.length}),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},m?r.a.createElement("div",{className:"ml-5"},r.a.createElement("h2",null,"Edit user"),r.a.createElement(v,{currentUser:h,updateUser:function(e,a){p(!1),c(l.map((function(t){return t.id===e?a:t})))}})):r.a.createElement("div",{className:"ml-3 container"},r.a.createElement(E,{addUser:function(e){e.id=Object(O.a)(),c([].concat(Object(o.a)(l),[e]))}}))),r.a.createElement("div",{className:"flex-large mt-5"},r.a.createElement(d,{users:l,registros:l.length,deleteUser:function(e){c(l.filter((function(a){return a.id!==e})))},editRow:function(e){p(!0),g({id:e.id,name:e.name,username:e.username,correo:e.correo})}}))),r.a.createElement("div",{className:"ml-4"},r.a.createElement(x,null),r.a.createElement(q,null)))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6f8d612e.chunk.js.map