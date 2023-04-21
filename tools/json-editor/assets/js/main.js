!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e){var d=document.createElement("a");return d.href=e||window.location.href,{source:e,protocol:d.protocol.replace(":",""),host:d.hostname,port:d.port,origin:d.origin,search:d.search,query:d.search,file:(d.pathname.match(/\/([^/?#]+)$/i)||["",""])[1],hash:d.hash.replace("#",""),path:d.pathname.replace(/^([^/])/,"/$1"),relative:(d.href.match(/tps?:\/\/[^/]+(.+)/)||["",""])[1],params:function(){for(var e={},t=[],n=d.search.replace(/^\?/,"").split("&"),o=0;o<n.length;o++){var r=n[o];""!==r&&r.indexOf("=")&&t.push(r)}for(var i=0;i<t.length;i++){var s=t[i],a=s.indexOf("="),c=s.substring(0,a),s=s.substring(a+1);c?e[c]=s:e[s]=null}return e}()}}var t=["code","tree","form","text","view","preview"];let n=e(location.href).params.mode||"code";const r={editor:{mode:n=-1===t.indexOf(n)?"code":n,modes:t},hotkeys:[{desc:"自定义快捷键",key:"$mod+k $mod+s",command:"customHotkeys",disabled:!1},{desc:"保存文件",key:"$mod+s",command:"save",disabled:!1},{desc:"打开本地JSON文件",key:"$mod+o $mod+o",command:"openLocalFile",disabled:!1},{desc:"打开URL下的JSON文件",key:"$mod+o $mod+u",command:"openURL",disabled:!1},{desc:"弹窗新开一个JSON编辑器",key:"$mod+o $mod+n",command:"openNewEditor",disabled:!1},{desc:"弹窗新开一个JSON编辑器",key:"$mod+shift+m",command:"openNewEditor",disabled:!1},{desc:"弹窗新开一个JSON编辑器",key:"$mod+n",command:"openNewEditor",disabled:!1},{desc:"格式化JSON",key:"shift+alt+f",command:"formatter",disabled:!1},{desc:"压缩JSON",key:"$mod+alt+f",command:"compress",disabled:!1},{desc:"格式化JSON和压缩JSON间来回切换",key:"alt+f",command:"toggleFormatter",disabled:!1}]};function i(e){return new Promise((t,n)=>{fetch(e).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{n(e)})})}function s(n,o){if(window.jsonEditorSaveHandler instanceof Function)window.jsonEditorSaveHandler(n);else if(o&&window[o]instanceof Function)window[o](n);else{let e=window.prompt("要保存的文件名："),t=(-1===e.indexOf(".")?e+=".json":"json"!==e.split(".").pop().toLowerCase()&&(e=e.split(".")[0]+".json"),n.getText());try{t=JSON.stringify(n.get(),null,2)}catch(e){if(!confirm("JSON 格式错误，继续保存？"))return;t=n.getText()}var r,o=new Blob([t],{type:"application/json;charset=utf-8"});n=o,o=e,r=document.createElement("a"),document.body.appendChild(r),r.style="display: none",n=window.URL.createObjectURL(n),r.href=n,r.download=o,r.click(),window.URL.revokeObjectURL(n),document.body.removeChild(r)}}const a=e(location.href);const c=window.Map,o=window.WeakMap;function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function l(e){return Array.isArray(e)?e:void 0===e?[]:[e]}function h(e){return["ctrl","controlleft","controlright","shift","shiftleft","shiftright","alt","altleft","altright","meta","metaleft","metaright","capsLock"].includes(e.toLowerCase())}const m={ControlLeft:"ctrl",ControlRight:"ctrl",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta"},u=function(){const r=new c,i=new o;return{combinationKeysState:r,getCombinationKeys:function(){const n=new c;return r.forEach((e,t)=>{!0===e&&n.set(t,e)}),n},init:function(e=window){if(!e||e!==e.self||!e.addEventListener||i.get(e))return!1;const t={};function n(e){h(e.code)&&r.set(e.code,!0)}function o(e){if(!(e instanceof KeyboardEvent))return r.forEach((e,t)=>{r.set(t,!1)}),!0;h(e.code)&&(clearTimeout(t[e.code]),t[e.code]=setTimeout(()=>{r.set(e.code,!1)},50))}e.addEventListener("keydown",n,!0),e.addEventListener("keypress",n,!0),e.addEventListener("keyup",o,!0),e.addEventListener("blur",o,!0),i.set(e,!0)}}}();class f{constructor(e,t=window){this.window=t,this.MOD="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Ctrl",this.prevPress=null,this._prevTimer_=null,this.setHotkeys(e),u.init(t)}setCombinationKeysMonitor(e){this.window=e,u.init(e)}hotkeysPreprocess(e){return!!Array.isArray(e)&&(e.forEach(e=>{if(!d(e)||!e.key||"string"!=typeof e.key)return!1;var t=e.key.trim().toLowerCase();const o=this.MOD.toLowerCase();e.keyBindings=t.split(" ").map(e=>{e=e.split(/\b\+/);const t=[];let n="";return e.forEach(e=>{h(e="$mod"===e?o:e)?t.push(e):n=e}),[t,n]})}),e)}setHotkeys(e){this.hotkeys=this.hotkeysPreprocess(e)||[]}isMatch(e,t){if(!e||!Array.isArray(t))return!1;var n=e.combinationKeys||u.getCombinationKeys(),o=t[0],t=t[1];if(o.length!==n.size)return!1;if(t&&e.key.toLowerCase()!==t&&e.code.toLowerCase()!==t)return!1;let r=!0;const i=new c;return n.forEach((e,t)=>{i.set(t,e),i.set(t.toLowerCase(),e),m[t]&&i.set(m[t],e)}),o.forEach(e=>{i.has(e)||(r=!1)}),r}isMatchPrevPress(e){return this.isMatch(this.prevPress,e)}run(i={}){var e=this.window.KeyboardEvent;if(!(i.event instanceof e))return!1;const s=i.event,a=i.target||null,c=i.conditionHandler||i.whenHandler;let d=null;return this.hotkeys.forEach(e=>{if(e.disabled||!e.keyBindings)return!1;let t=e.keyBindings[0];if(this.prevPress&&(e.keyBindings.length<=1||!this.isMatchPrevPress(t)))return!1;if(this.prevPress&&1<e.keyBindings.length&&this.isMatchPrevPress(t)&&(t=e.keyBindings[1]),!this.isMatch(s,t))return!1;d=e;var n=i.stopPropagation||e.stopPropagation,o=i.preventDefault||e.preventDefault;if(n&&s.stopPropagation(),o&&s.preventDefault(),t===e.keyBindings[0]&&1<e.keyBindings.length)return this.prevPress={combinationKeys:u.getCombinationKeys(),code:s.code,key:s.key,keyCode:s.keyCode,altKey:s.altKey,shiftKey:s.shiftKey,ctrlKey:s.ctrlKey,metaKey:s.metaKey},clearTimeout(this._prevTimer_),this._prevTimer_=setTimeout(()=>{this.prevPress=null},1e3),!0;1<e.keyBindings.length&&t!==e.keyBindings[0]&&setTimeout(()=>{this.prevPress=null},0);n=l(e.args);let r=e.command;if(!((r=a&&"string"==typeof e.command?function(e,t){var n=(t=t||"").split(".");let o=e;for(let e=0;e<n.length&&o;e++)o=o[n[e]];return o}(a,e.command):r)instanceof Function)&&a)throw new Error(`[hotkeysRunner] 未找到command: ${e.command} 对应的函数`);e.when&&c instanceof Function&&!0!==c.apply(a,l(e.when))||r.apply(a,n)}),d}binding(t={}){if(!d(t)||!Array.isArray(t.hotkeys))throw new Error("[hotkeysRunner] 提供给binding的参数不正确");t.el=t.el||this.window,t.type=t.type||"keydown",t.debug&&(this.debug=!0),this.setHotkeys(t.hotkeys),"string"==typeof t.el&&(t.el=document.querySelector(t.el)),t.el.addEventListener(t.type,e=>{t.event=e,this.run(t)},!0)}}t=async function(){let e=null,n={};var o,t;return t=document.getElementById("jsoneditor"),e=new window.JSONEditor(t,{mode:r.editor.mode,modes:r.editor.modes,search:!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),mainMenuBar:!0,navigationBar:!0,statusBar:!0,onModeChange:function(e,t){console.log("Mode switched from",t,"to",e),n.createSaveButton()}}),window.jsonEditor=e,(n=(o=e,{async getDefaultText(){let t={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},Corlor:"#FF0000",String:"Hello World",Hello:"这是JSON示例数据"};if(a.params.url){var n=decodeURIComponent(a.params.url);try{t=await i(n)}catch(e){console.error("URL获取到的JSON数据异常：",e,n),alert(`URL获取到的JSON数据异常：${n}  `+e)}}if(a.params.json){n=decodeURIComponent(a.params.json);try{t=JSON.parse(n)}catch(e){t=n,console.error("JSON parse error:",e,n),alert(`URL参数里的JSON数据格式异常： ${n}  `+e)}}return t="object"==typeof t?JSON.stringify(t,null,2):t},save(){s(o,a.params.saveHandlerName)},formatter(){try{var e=o.get(),t=JSON.stringify(e,null,2);o.setText(t)}catch(e){alert("JSON 格式错误，无法格式化： "+e),console.error("JSON 格式错误，无法格式化：",e)}},compress(){try{var e=o.get(),t=JSON.stringify(e);o.setText(t)}catch(e){alert("JSON 格式错误，无法压缩： "+e),console.error("JSON 格式错误，无法压缩：",e)}},toggleFormatter(){try{var e,t=o.get(),n=JSON.stringify(t,null,2);o.getText().trim().length===n.length?(e=JSON.stringify(t),o.setText(e)):o.setText(n)}catch(e){alert("JSON 格式错误，无法格式化： "+e),console.error("JSON 格式错误，无法格式化：",e)}},customHotkeys(){o.set(r.hotkeys)},openURL(){const t=prompt("请输入URL地址");t&&i(t).then(e=>{o.set(e)}).catch(e=>{alert(`URL获取到的JSON数据异常：${t}  `+e),console.error("URL获取到的JSON数据异常：",e,t)})},openLocalFile(){const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=function(){var e,t=n.files[0];t&&((e=new FileReader).onload=function(e){e=JSON.parse(e.target.result);o.set(e)},e.readAsText(t))},n.click()},openNewEditor(){window.open(location.href,"_blank","width=1024,height=768")},createSaveButton(){var e;o.menu.querySelector(".jsoneditor-save")||((e=document.createElement("button")).className="jsoneditor-save",e.innerText="💾",e.style="background-image: none; border: 1px dashed #aaa; border-radius: 3px;",e.onclick=()=>{this.save()},o.menu.insertBefore(e,o.menu.firstChild))}})).createSaveButton(),await!e.setText(await n.getDefaultText()),(new f).binding({el:document.documentElement,type:"keydown",hotkeys:r.hotkeys,target:n,stopPropagation:!0,preventDefault:!0,debug:!0,conditionHandler(e){if(e)return!0}}),n}();t.init instanceof Function||(t.init=function(){}),t.init()});
