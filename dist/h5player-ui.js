!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.h5playerUi=t():e.h5playerUi=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="QfWi")}({QfWi:function(e,t,n){"use strict";n.r(t);
/*!
 * @name         index.js
 * @description  ui界面
 * @version      0.0.1
 * @author       xxxily
 * @date         2020/4/13 am 10:12
 * @github       https://github.com/xxxily
 */
const o={init(){const e=document.createElement("h5-player-ui");e.attachShadow({mode:"open"});const t=e.shadowRoot,n=document.createElement("div");n.id="h5-player-app",n.innerHTML="{{message}}",t.appendChild(n);new window.Vue({el:n,data:{message:"Hello Vue!"}});document.querySelector("h5-player-ui")||document.body.appendChild(e)}};t.default=o}})}));