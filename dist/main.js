(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>m});var r=e(601),o=e.n(r),a=e(314),c=e.n(a),i=e(417),s=e.n(i),d=new URL(e(29),e.b),l=new URL(e(157),e.b),u=c()(o()),p=s()(d),f=s()(l);u.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@Font-face {\n    font-family: MainFontBold;\n    src: url(${p});\n}\n\n@font-face {\n    font-family: MainFontRegular;\n    src: url(${f});\n}\n\n:root{\n    --bg-color: #ecfeff;\n    --footer-bg-color: #083344;\n    --header-color: #0891b2;\n    --navigation-non-focus-color: #58585f;\n    --navigation-focus-color: #18181b;\n    --navigation-underline-color: #083344;\n}\n\n\n/* Button */\n\n/* \nbutton{\n    font-family: MainFontRegular;\n    font-size: clamp(1rem, 2vw, 1.5rem);\n    padding: 0.5rem 1rem;\n    border: none;\n    cursor: pointer;\n    background-color: inherit;\n}  */\n\nbody{\n    background-color: var(--bg-color);\n    height: 90vh;\n    display: grid;\n    grid-template-rows: 1fr 8fr 2fr;\n}\n\nfooter{\n    height: 10vh;\n    background-color: var(--footer-bg-color);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n/* Content Body */\n\n.main-body-container{\n    padding-top: 2vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n    height: calc(90vh - 2vh);\n    overflow-y: auto;\n}\n\n/* Header */\n\n.header-text{\n    font-family: MainFontBold;\n    font-size: clamp(2rem, 3vw, 3.5rem);\n    color: var(--header-color);\n    padding-bottom: 2vh;\n}\n\n/* Content Container */\n\n.content-container{\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 2vh;\n}`,""]);const m=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},29:(n,t,e)=>{n.exports=e.p+"53644f958c0761b34783.ttf"},157:(n,t,e)=>{n.exports=e.p+"f6f56d95833b43b26d1c.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),c=e.n(a),i=e(56),s=e.n(i),d=e(540),l=e.n(d),u=e(113),p=e.n(u),f=e(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=document.querySelectorAll(".header-contanier");let h=null,g=!1;function b(n,t){const e=Math.floor(n/60);let r=n%60;r=r<10?"0"+r:r,t.innerHTML=`${e}:${r}`}const y=document.querySelector(".focus-container");function x(){!function(n){for(;g;){let n=1500;const t=document.querySelector(".time");h&&clearInterval(h),h=setInterval((()=>{b(n,t),n--,n<0&&clearInterval(h)}),1e3),g=!g}}()}function w(){h&&(clearInterval(h),g=!g,h=null),document.querySelector(".time").innerHTML="25:00"}document.addEventListener("DOMContentLoaded",(()=>{(function(){const n=document.createElement("p");n.classList.add("header-text"),n.textContent="FocusFlow",function(n){v[0].appendChild(n)}(n)})(),function(){const n=document.createElement("div");n.classList.add("sub-headeing-container");const t=function(){const n=document.createElement("p");return n.classList.add("sub-heading"),n.textContent="Focus",n}();n.appendChild(t),y.appendChild(n);const e=function(n){const t=document.createElement("div");t.classList.add("time-container");const e=document.createElement("p");return e.classList.remove("time"),e.textContent="",e.classList.add("time"),e.textContent="25:00",t.appendChild(e),t}();y.appendChild(e);const r=function(){const n=document.createElement("div");n.classList.add("buttons-container");const t=document.createElement("button");t.classList.add("start-button"),t.textContent="Start",t.addEventListener("click",x);const e=document.createElement("button");return e.classList.add("stop-button"),e.textContent="Reset",e.addEventListener("click",w),n.appendChild(t),n.appendChild(e),n}();y.appendChild(r)}()}))})()})();