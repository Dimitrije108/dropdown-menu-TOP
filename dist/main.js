(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);"]),a.push([n.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\n.page-wrapper {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n  padding: 0.5rem;\n  background-color: gainsboro;\n}\n\n.library {\n  padding: 0.3rem;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.library-options {\n  position: relative;\n}\n\n.library-options-btn {\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 20px;\n  line-height: 0;\n  cursor: pointer;\n}\n\n.library-options-btn:hover {\n  background-color: gainsboro;\n}\n\n.library-options-btn > img {\n  vertical-align: middle;\n}\n\n.three-dots-menu {\n  margin: 0;\n  padding: 0;\n  background-color: rgba(236, 236, 236, 0.5);\n  border-radius: 4px;\n  top: 0.5rem;\n  left: 1rem;\n  cursor: pointer;\n}\n\n.three-dots-menu > li {\n  margin: 0;\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.three-dots-menu > li:hover {\n  background-color: rgba(91, 218, 211, 0.5);\n}\n\n.navbar {\n  padding: 0.5rem;\n  background-color: whitesmoke;\n}\n\n.navbar-menu {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-item {\n  margin: 0 1.5rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  list-style: none;\n  cursor: pointer;\n}\n\n.nav-item:hover {\n  background-color: gainsboro;\n}\n\n.nav-item > a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.dropdown-list {\n  margin: 0;\n  padding: 0;\n  background-color: rgba(236, 236, 236, 0.9);\n  border-radius: 4px;\n  top: 1.7rem;\n  left: 0;\n}\n\n.dropdown-list > li {\n  margin: 0;\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.dropdown-list > li:hover {\n  background-color: rgba(91, 218, 211, 0.5);\n}\n",""]);const s=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},564:function(n){var e;e=()=>(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".dropdown-menu {\n  position: absolute;\n  visibility: hidden;\n}\n\n.visible {\n  visibility: visible;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:[".dropdown-menu {\n  position: absolute;\n  visibility: hidden;\n}\n\n.visible {\n  visibility: visible;\n}\n"],sourceRoot:""}]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var d=t(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0;var r={};return(()=>{t.r(r),t.d(r,{dropdownOnClick:()=>h,dropdownOnHover:()=>b});var n=t(72),e=t.n(n),o=t(825),i=t.n(o),a=t(659),s=t.n(a),c=t(56),u=t.n(c),d=t(540),l=t.n(d),p=t(113),f=t.n(p),v=t(208),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),e()(v.A,m),v.A&&v.A.locals&&v.A.locals;var b=function(n,e){(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&(n.style.position="relative"),e.classList.add("dropdown-menu"),n.addEventListener("mouseenter",(function(){e.classList.add("visible")})),n.addEventListener("mouseleave",(function(){e.classList.remove("visible")}))},h=function(n,e){(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&(n.style.position="relative"),e.classList.add("dropdown-menu"),n.addEventListener("click",(function(n){e.classList.toggle("visible"),n.stopPropagation()})),window.addEventListener("click",(function(t){n.contains(t.target)||e.contains(t.target)||e.classList.remove("visible")}))}})(),r})(),n.exports=e()},385:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var d=t(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},149:(n,e,t)=>{"use strict";n.exports=t.p+"3803d130a397bcc6c90f.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(385),e=t.n(n),r=new URL(t(149),t.b);e()(r);var o=t(72),i=t.n(o),a=t(825),s=t.n(a),c=t(659),u=t.n(c),d=t(56),l=t.n(d),p=t(540),f=t.n(p),v=t(113),m=t.n(v),b=t(208),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),i()(b.A,h),b.A&&b.A.locals&&b.A.locals;var g=t(564);[...document.querySelectorAll(".nav-item")].forEach((n=>{const e=n.querySelector(".dropdown-list");(0,g.dropdownOnHover)(n,e)}));const y=document.querySelector(".library-options-btn"),w=document.querySelector(".three-dots-menu");(0,g.dropdownOnClick)(y,w,!1)})()})();