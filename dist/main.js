(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>m});var o=e(601),r=e.n(o),a=e(314),c=e.n(a),i=e(417),s=e.n(i),d=new URL(e(29),e.b),l=new URL(e(157),e.b),u=c()(r()),p=s()(d),f=s()(l);u.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@Font-face {\n    font-family: MainFontBold;\n    src: url(${p});\n}\n\n@font-face {\n    font-family: MainFontRegular;\n    src: url(${f});\n}\n\n:root{\n    --bg-color: #ecfeff;\n    --footer-bg-color: #083344;\n    --header-color: #0891b2;\n    --navigation-non-focus-color: #58585f;\n    --navigation-focus-color: #18181b;\n    --navigation-underline-color: #083344;\n    --focus-border-color : black;\n    --time-containers-color : white;\n    --time-container-shadow: #64748b;\n    --sub-head-color: #64748b;\n    --time-color: #f87171;\n}\n\n\n/* Button */\n\n/* \nbutton{\n    font-family: MainFontRegular;\n    font-size: clamp(1rem, 2vw, 1.5rem);\n    padding: 0.5rem 1rem;\n    border: none;\n    cursor: pointer;\n    background-color: inherit;\n}  */\n\nbody{\n    background-color: var(--bg-color);\n    height: 90vh;\n    display: grid;\n    grid-template-rows: 1fr 8fr 2fr;\n}\n\nfooter{\n    height: 10vh;\n    background-color: var(--footer-bg-color);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n/* Content Body */\n\n.main-body-container{\n    padding-top: 2vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n    height: calc(90vh - 2vh);\n    overflow-y: auto;\n}\n\n/* Header */\n\n.header-text{\n    font-family: MainFontBold;\n    font-size: clamp(2rem, 3vw, 3.5rem);\n    color: var(--header-color);\n    padding-bottom: 2vh;\n}\n\n/* Content Container */\n\n.content-container{\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 2vh;\n    padding: 1vh 3vw;\n}\n\n/* Tomer Containers */\n\n.content-container{\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 2vh;\n\n}\n\n.focus-container,\n.short-break-container,\n.long-break-container{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 1.3vh;\n    border: 1px solid var(--focus-border-color);\n    border-radius: 1rem;\n    padding: 1vh 3vw;\n    background-color: var(--time-containers-color);\n    box-shadow: 10px 10px 10px var(--time-container-shadow);\n}\n\n.sub-heading-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sub-heading{\n    font-family: MainFontBold;\n    font-size: clamp(1rem, 1.7vw, 2rem);\n    color: var(--sub-head-color);\n    margin: 0;\n    padding: 0;\n}\n\n.time-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.focus-time,\n.short-break-time,\n.long-break-time{\n    font-family: MainFontRegular;\n    font-size: clamp(1.8rem, 2.15vw, 2.5rem);\n    color: var(--time-color);\n    margin: 0;\n    padding: 0;\n}\n\n.buttons-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1vw;\n    padding-bottom: 0.5vh;\n}\n\n.start-button,\n.stop-button{\n    font-family: MainFontRegular;\n    font-size: clamp(1rem, 1.5vw, 1.5rem);\n    padding: 0.5rem 1rem;\n    border: 0.08rem solid var(--time-container-shadow);\n    cursor: pointer;\n    background-color: inherit;\n    transition: background-color 0.5s ease-in 0.01s;\n}\n\n.start-button:hover,\n.stop-button:hover{\n    background-color: var(--time-container-shadow);\n    color: var(--time-containers-color);\n    transform: scale(0.95);\n}`,""]);const m=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},29:(n,t,e)=>{n.exports=e.p+"53644f958c0761b34783.ttf"},157:(n,t,e)=>{n.exports=e.p+"f6f56d95833b43b26d1c.ttf"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(72),t=e.n(n),o=e(825),r=e.n(o),a=e(659),c=e.n(a),i=e(56),s=e.n(i),d=e(540),l=e.n(d),u=e(113),p=e.n(u),f=e(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=document.querySelectorAll(".header-contanier");let v=null,b=!1;function g(n,t){if(!b){let e=60*n;const o=document.querySelector(`.${t}`);v&&clearInterval(v),y(e,o),v=setInterval((()=>{e--,y(e,o),e<0&&clearInterval(v)}),1e3),b=!b}}function y(n,t){const e=Math.floor(n/60);let o=n%60;o=o<10?"0"+o:o,t.innerHTML=`${e}:${o}`}function C(n,t){document.querySelector(`.${t}`).innerHTML=n}function x(n){v&&(clearInterval(v),b=!b,v=null)}const w=document.querySelector(".focus-container");function L(){g(25,"focus-time")}function E(){x(),C("25:00","focus-time")}const k=document.querySelector(".short-break-container");function S(){g(5,"short-break-time")}function M(){x(),C("5:00","short-break-time")}const T=document.querySelector(".long-break-container");function F(){g(15,"long-break-time")}function A(){x(),C("15:00","long-break-time")}document.addEventListener("DOMContentLoaded",(()=>{(function(){const n=document.createElement("p");n.classList.add("header-text"),n.textContent="FocusFlow",function(n){h[0].appendChild(n)}(n)})(),function(){const n=document.createElement("div");n.classList.add("sub-heading-container");const t=function(){const n=document.createElement("p");return n.classList.add("sub-heading"),n.textContent="Focus",n}();n.appendChild(t),w.appendChild(n);const e=function(n,t){const e=document.createElement("div");e.classList.add("time-container");let o=document.createElement("p");return o.classList.add("focus-time"),o.textContent="25:00",e.appendChild(o),e}();w.appendChild(e);const o=function(){const n=document.createElement("div");n.classList.add("buttons-container");let t=document.createElement("button");t.classList.add("start-button"),t.textContent="Start",t.addEventListener("click",L);let e=document.createElement("button");return e.classList.add("stop-button"),e.textContent="Reset",e.addEventListener("click",E),n.appendChild(t),n.appendChild(e),n}();w.appendChild(o)}(),function(){const n=document.createElement("div");n.classList.add("sub-heading-container");const t=function(){const n=document.createElement("p");return n.classList.add("sub-heading"),n.textContent="Short Break",n}();n.appendChild(t),k.appendChild(n);const e=function(n,t){const e=document.createElement("div");e.classList.add("time-container");let o=document.createElement("p");return o.classList.add("short-break-time"),o.textContent="5:00",e.appendChild(o),e}();k.appendChild(e);const o=function(){const n=document.createElement("div");n.classList.add("buttons-container");const t=document.createElement("button");t.classList.add("start-button"),t.textContent="Start",t.addEventListener("click",S);const e=document.createElement("button");return e.classList.add("stop-button"),e.textContent="Reset",e.addEventListener("click",M),n.appendChild(t),n.appendChild(e),n}();k.appendChild(o)}(),function(){const n=document.createElement("div");n.classList.add("sub-heading-container");const t=function(){const n=document.createElement("p");return n.classList.add("sub-heading"),n.textContent="Long Break",n}();n.appendChild(t),T.appendChild(n);const e=function(n,t){const e=document.createElement("div");e.classList.add("time-container");let o=document.createElement("p");return o.classList.add("long-break-time"),o.textContent="15:00",e.appendChild(o),e}();T.appendChild(e);const o=function(){const n=document.createElement("div");n.classList.add("buttons-container");const t=document.createElement("button");t.classList.add("start-button"),t.textContent="Start",t.addEventListener("click",F);const e=document.createElement("button");return e.classList.add("stop-button"),e.textContent="Reset",e.addEventListener("click",A),n.appendChild(t),n.appendChild(e),n}();T.appendChild(o)}()}))})()})();