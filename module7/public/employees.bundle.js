(()=>{var e,t,n,r={42:()=>{},324:(e,t,n)=>{"use strict";var r=n(294),l=n(745),o=n(655),a=n(79),i=n(91),c=n(250),u=n(25),m=n(977),f=n(147),p=n(5),y=n(881),s=n(682),d=n(51),E=n(555);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(l)?l:String(l)),r)}var l}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(l);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(g(e)),e.handleShowModal=e.handleShowModal.bind(g(e)),e.handleHideModal=e.handleHideModal.bind(g(e)),e}return t=i,(n=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(p.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(y.Z,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},r.createElement(y.Z.Header,{closeButton:!0},r.createElement(y.Z.Title,null,"Add New Employee")),r.createElement(y.Z.Body,null,r.createElement(s.Z,{fluid:!0},r.createElement("form",{name:"employeeAdd"},r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Name:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name"}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Ext:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Email:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Title:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(y.Z.Footer,null,r.createElement(p.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){var e,t,n=(0,c.s0)(),l=(e=(0,o.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Filter"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"Currently Employed:"," ",r.createElement("select",{value:l.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Z(l)?l:String(l)),r)}var l}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function T(e){var t=(0,c.TH)().search,n=new URLSearchParams(t).get("employed"),l=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(A,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"All Employees ",r.createElement(m.Z,{bg:"secondary"}," ",l.length," ")),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,r.createElement(f.Z,{striped:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null,"Delete Employee"))),r.createElement("tbody",null,l)))))}function A(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(o.rU,{to:"/edit/".concat(e.employee._id)},e.employee.name)),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement(p.Z,{variant:"danger",size:"sm",onClick:function(){e.deleteEmployee(e.employee._id)}},"X")))}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(l);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(k(e)),e.deleteEmployee=e.deleteEmployee.bind(k(e)),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(w,{createEmployee:this.createEmployee}),r.createElement(S,null),r.createElement(T,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function M(){return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Filter"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"This is a placeholder for the employee report.")))}var C=n(42),R=n.n(C);function D(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/employees",element:r.createElement(H,null)}),r.createElement(c.AW,{path:"/edit/:id",element:r.createElement(R(),null)}),r.createElement(c.AW,{path:"/report",element:r.createElement(M,null)}),r.createElement(c.AW,{path:"/",element:r.createElement(c.Fg,{replace:!0,to:"/employees"})}),r.createElement(c.AW,{path:"*",element:r.createElement(e,null)}))}function B(){return r.createElement(a.Z,{bg:"dark",variant:"dark"},r.createElement(a.Z.Brand,{href:"/"},"Employee Management Application"),r.createElement(i.Z,null,r.createElement(i.Z.Link,{href:"/employees"},"All Employees"),r.createElement(i.Z.Link,{href:"/report"},"Reports")))}function N(){return r.createElement("div",null,r.createElement(B,null),r.createElement(D,null))}(0,l.s)(document.getElementById("content")).render(r.createElement(o.VK,null,r.createElement(r.StrictMode,null,r.createElement(N,null))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,r,l]=e[m],i=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(l,a),l},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,i,c]=n,u=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var m=c(o)}for(t&&t(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},n=self.webpackChunkmodule1=self.webpackChunkmodule1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[736],(()=>o(324)));a=o.O(a)})();
//# sourceMappingURL=employees.bundle.js.map