(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),o=t.n(r),a=t("eVuF"),i=t.n(a);function c(e,n,t,r,o,a,c){try{var s=e[a](c),l=s.value}catch(u){return void t(u)}s.done?n(l):i.a.resolve(l).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new i.a(function(r,o){var a=e.apply(n,t);function i(e){c(a,r,o,i,s,"next",e)}function s(e){c(a,r,o,i,s,"throw",e)}i(void 0)})}}var l=t("q1tI"),u=t.n(l),f=t("8Kt/"),p=t.n(f);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var y,g=t("17x9"),w=t.n(g),m=t("TSYQ"),j=t.n(m);t("I7wR");function x(e,n){return void 0===e&&(e=""),void 0===n&&(n=y),n?e.split(" ").map(function(e){return n[e]||e}).join(" "):e}var k={};function O(e){k[e]||("undefined"!==typeof console&&console.error(e),k[e]=!0)}var R="object"===typeof window&&window.Element||function(){};w.a.oneOfType([w.a.string,w.a.func,function(e,n,t){if(!(e[n]instanceof R))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},w.a.shape({current:w.a.any})]);var E=w.a.oneOfType([w.a.func,w.a.string,w.a.shape({$$typeof:w.a.symbol,render:w.a.func}),w.a.arrayOf(w.a.oneOfType([w.a.func,w.a.string,w.a.shape({$$typeof:w.a.symbol,render:w.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var T={children:w.a.node,type:w.a.string,size:w.a.string,bsSize:w.a.string,valid:w.a.bool,invalid:w.a.bool,tag:E,innerRef:w.a.oneOfType([w.a.object,w.a.func,w.a.string]),plaintext:w.a.bool,addon:w.a.bool,className:w.a.string,cssModule:w.a.object},C=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind(v(t)),t.focus=t.focus.bind(v(t)),t}h(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,r=e.type,o=e.bsSize,a=e.valid,i=e.invalid,c=e.tag,s=e.addon,l=e.plaintext,f=e.innerRef,p=b(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),y=c||("select"===r||"textarea"===r?r:"input"),g="form-control";l?(g+="-plaintext",y=c||"input"):"file"===r?g+="-file":v&&(g=s?null:"form-check-input"),p.size&&h.test(p.size)&&(O('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=p.size,delete p.size);var w=x(j()(n,i&&"is-invalid",a&&"is-valid",!!o&&"form-control-"+o,g),t);return("input"===y||c&&"function"===typeof c)&&(p.type=r),p.children&&!l&&"select"!==r&&"string"===typeof y&&"select"!==y&&(O('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete p.children),u.a.createElement(y,d({},p,{ref:f,className:w}))},n}(u.a.Component);C.propTypes=T,C.defaultProps={type:"text"};var z=C,N={active:w.a.bool,"aria-label":w.a.string,block:w.a.bool,color:w.a.string,disabled:w.a.bool,outline:w.a.bool,tag:E,innerRef:w.a.oneOfType([w.a.object,w.a.func,w.a.string]),onClick:w.a.func,size:w.a.string,children:w.a.node,className:w.a.string,cssModule:w.a.object,close:w.a.bool},P=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(v(t)),t}h(n,e);var t=n.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],r=e.block,o=e.className,a=e.close,i=e.cssModule,c=e.color,s=e.outline,l=e.size,f=e.tag,p=e.innerRef,v=b(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);a&&"undefined"===typeof v.children&&(v.children=u.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(s?"-outline":"")+"-"+c,y=x(j()(o,{close:a},a||"btn",a||h,!!l&&"btn-"+l,!!r&&"btn-block",{active:n,disabled:this.props.disabled}),i);v.href&&"button"===f&&(f="a");var g=a?"Close":null;return u.a.createElement(f,d({type:"button"===f&&v.onClick?"button":void 0},v,{className:y,ref:p,onClick:this.onClick,"aria-label":t||g}))},n}(u.a.Component);P.propTypes=N,P.defaultProps={color:"secondary",tag:"button"};var _=P,M=u.a.createElement;n.default=function(){var e=Object(l.useRef)(),n=Object(l.useRef)();return Object(l.useEffect)(function(){var t=function(){if(n.current&&e.current){var t=n.current,r=e.current,o=window.innerHeight-t.scrollHeight-12;r.style.height="".concat(o,"px")}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),M("div",{className:"p-1"},M(p.a,null,M("title",null,"Copy/Paste Textarea"),M("link",{rel:"icon",href:"/favicon.ico"}),M("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"})),M(z,{type:"textarea",innerRef:e,style:{height:"auto"},className:"mb-1"}),M("div",{className:"btn-group",role:"group",style:{display:"flex"},ref:n},M(_,{color:"warning",onClick:s(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.current){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,navigator.clipboard.readText();case 5:r=n.sent,t.value=r;case 7:case"end":return n.stop()}},n)}))},"Paste"),M(_,{color:"success",onClick:s(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.current){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,navigator.clipboard.writeText(t.value);case 5:case"end":return n.stop()}},n)}))},"Copy")))}},I7wR:function(e,n,t){(function(n){var t="[object AsyncFunction]",r="[object Function]",o="[object GeneratorFunction]",a="[object Null]",i="[object Proxy]",c="[object Undefined]",s="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),f=Object.prototype,p=f.hasOwnProperty,d=f.toString,b=u.Symbol,v=b?b.toStringTag:void 0;function h(e){return null==e?void 0===e?c:a:v&&v in Object(e)?function(e){var n=p.call(e,v),t=e[v];try{e[v]=void 0;var r=!0}catch(a){}var o=d.call(e);r&&(n?e[v]=t:delete e[v]);return o}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}(e))return!1;var n=h(e);return n==r||n==o||n==t||n==i}}).call(this,t("yLpj"))},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()}},[["/EDR",1,0]]]);