!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(x,t),d?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function x(){var e=g();if(S(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=h(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",S={},x={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};x.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.textarea.value||""===x.input.value)return alert("Please fill in all the fields!");console.log("отправляем форму"),console.log(S),e.currentTarget.reset(),localStorage.removeItem(j)})),x.form.addEventListener("input",e(t)((function(e){e.preventDefault(),S[e.target.name]=e.target.value;var t=JSON.stringify(S);localStorage.setItem(j,t)}),500)),function(){var e={};try{e=JSON.parse(localStorage.getItem(j)),console.log(e),e.message&&(x.textarea.value=e.message),e.email&&(x.input.value=e.email)}catch(e){console.log(e)}}()}();
//# sourceMappingURL=03-feedback.89709945.js.map
