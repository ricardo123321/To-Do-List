!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){""!==localStorage.getItem("projectList")&&null!==localStorage.getItem("projectList")||localStorage.setItem("projectList","[]");const n=function(e){this.name=e,this.todoItems=[]},o=function(e,t,n,o,r){this.name=e,this.projectN=t,this.description=n,this.dueDate=o,this.priority=r},r=document.getElementById("submitToDo"),c=document.getElementById("submitToP"),l=document.getElementById("submitToErz");r.addEventListener("click",()=>{const e=JSON.parse(localStorage.getItem("projectList")),t=document.getElementById("name").value,n=document.getElementById("projectN").value,r=document.getElementById("description").value,c=document.getElementById("dueDate").value,l=document.getElementById("priority").value,a=e.find(e=>e.name===n);console.log(a),toDo=new o(t,n,r,c,l),a.todoItems.push(toDo),localStorage.setItem("projectList",JSON.stringify(e))});const a=e=>{const t=JSON.parse(localStorage.getItem("projectList"));if(t.length>0&&"Default"===e)return;const o=new n(e);t.push(o),localStorage.setItem("projectList",JSON.stringify(t))};c.addEventListener("click",()=>{const e=document.getElementById("projectT").value;a(e)}),l.addEventListener("click",()=>{(e=>{const t=JSON.parse(localStorage.getItem("projectList"));if(t.length>0&&"Default"===e)return;const n=t.indexOf(t.find(t=>t.name===e));t.splice(n,1),localStorage.setItem("projectList",JSON.stringify(t))})(document.getElementById("projectT").value)}),a("Default");const i=JSON.parse(localStorage.getItem("projectList"));document.getElementById("myProjects").addEventListener("click",()=>{const e=document.createDocumentFragment();Object.values(i).forEach(t=>{const n=document.createElement("div");n.className="projectContainer",Object.values(t).forEach(t=>{const o=document.createElement("div"),r=document.createElement("p");r.textContent=t.projectN.value;const c=document.createElement("p");c.textContent=t.description.value;const l=document.createElement("p");l.textContent=t.dueDate.value;const a=document.createElement("p");a.textContent=t.priority.value,o.appendChild(r),o.appendChild(c),o.appendChild(l),o.appendChild(a),n.appendChild(o),e.appendChild(n)})});document.getElementById("pageContent").appendChild(e)})}]);