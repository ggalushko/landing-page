function Jp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function e0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sr={},t0={get exports(){return Sr},set exports(e){Sr=e}},yi={},R={},n0={get exports(){return R},set exports(e){R=e}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),r0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),ms=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Jc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ef(){}ef.prototype=Bn.prototype;function Za(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}var Ja=Za.prototype=new ef;Ja.constructor=Za;Zc(Ja,Bn.prototype);Ja.isPureReactComponent=!0;var hs=Array.isArray,tf=Object.prototype.hasOwnProperty,eu={current:null},nf={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)tf.call(t,r)&&!nf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Hr,type:e,key:i,ref:l,props:o,_owner:eu.current}}function m0(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function h0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ys=/\/+/g;function al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h0(""+e.key):t.toString(36)}function So(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hr:case r0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+al(l,0):r,hs(o)?(n="",e!=null&&(n=e.replace(ys,"$&/")+"/"),So(o,t,n,"",function(s){return s})):o!=null&&(tu(o)&&(o=m0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ys,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",hs(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+al(i,a);l+=So(i,t,n,u,o)}else if(u=p0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+al(i,a++),l+=So(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],o=0;return So(e,r,"","",function(i){return t.call(n,i,o++)}),r}function y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ko={transition:null},v0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ko,ReactCurrentOwner:eu};j.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Bn;j.Fragment=o0;j.Profiler=l0;j.PureComponent=Za;j.StrictMode=i0;j.Suspense=c0;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=eu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)tf.call(t,u)&&!nf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Hr,type:e.type,key:o,ref:i,props:r,_owner:l}};j.createContext=function(e){return e={$$typeof:u0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a0,_context:e},e.Consumer=e};j.createElement=rf;j.createFactory=function(e){var t=rf.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:s0,render:e}};j.isValidElement=tu;j.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:y0}};j.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return ke.current.useCallback(e,t)};j.useContext=function(e){return ke.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};j.useEffect=function(e,t){return ke.current.useEffect(e,t)};j.useId=function(){return ke.current.useId()};j.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ke.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};j.useRef=function(e){return ke.current.useRef(e)};j.useState=function(e){return ke.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ke.current.useTransition()};j.version="18.2.0";(function(e){e.exports=j})(n0);const nu=e0(R),vs=Jp({__proto__:null,default:nu},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=R,w0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,k0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S0.call(t,r)&&!E0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:w0,type:e,key:i,ref:l,props:o,_owner:k0.current}}yi.Fragment=x0;yi.jsx=of;yi.jsxs=of;(function(e){e.exports=yi})(t0);const Hn=Sr.Fragment,w=Sr.jsx,z=Sr.jsxs;var Bl={},Mo={},C0={get exports(){return Mo},set exports(e){Mo=e}},be={},Hl={},N0={get exports(){return Hl},set exports(e){Hl=e}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var L=_.length;_.push(I);e:for(;0<L;){var Z=L-1>>>1,ie=_[Z];if(0<o(ie,I))_[Z]=I,_[L]=ie,L=Z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var I=_[0],L=_.pop();if(L!==I){_[0]=L;e:for(var Z=0,ie=_.length,Zr=ie>>>1;Z<Zr;){var Ht=2*(Z+1)-1,ll=_[Ht],Qt=Ht+1,Jr=_[Qt];if(0>o(ll,L))Qt<ie&&0>o(Jr,ll)?(_[Z]=Jr,_[Qt]=L,Z=Qt):(_[Z]=ll,_[Ht]=L,Z=Ht);else if(Qt<ie&&0>o(Jr,L))_[Z]=Jr,_[Qt]=L,Z=Qt;else break e}}return I}function o(_,I){var L=_.sortIndex-I.sortIndex;return L!==0?L:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,d=null,m=3,v=!1,g=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var I=n(s);I!==null;){if(I.callback===null)r(s);else if(I.startTime<=_)r(s),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(s)}}function x(_){if(y=!1,h(_),!g)if(n(u)!==null)g=!0,ol(k);else{var I=n(s);I!==null&&il(x,I.startTime-_)}}function k(_,I){g=!1,y&&(y=!1,p($),$=-1),v=!0;var L=m;try{for(h(I),d=n(u);d!==null&&(!(d.expirationTime>I)||_&&!se());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,m=d.priorityLevel;var ie=Z(d.expirationTime<=I);I=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(u)&&r(u),h(I)}else r(u);d=n(u)}if(d!==null)var Zr=!0;else{var Ht=n(s);Ht!==null&&il(x,Ht.startTime-I),Zr=!1}return Zr}finally{d=null,m=L,v=!1}}var P=!1,E=null,$=-1,M=5,T=-1;function se(){return!(e.unstable_now()-T<M)}function Gn(){if(E!==null){var _=e.unstable_now();T=_;var I=!0;try{I=E(!0,_)}finally{I?qn():(P=!1,E=null)}}else P=!1}var qn;if(typeof c=="function")qn=function(){c(Gn)};else if(typeof MessageChannel<"u"){var ps=new MessageChannel,Zp=ps.port2;ps.port1.onmessage=Gn,qn=function(){Zp.postMessage(null)}}else qn=function(){N(Gn,0)};function ol(_){E=_,P||(P=!0,qn())}function il(_,I){$=N(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,ol(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var L=m;m=I;try{return _()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=m;m=_;try{return I()}finally{m=L}},e.unstable_scheduleCallback=function(_,I,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,_={id:f++,callback:I,priorityLevel:_,startTime:L,expirationTime:ie,sortIndex:-1},L>Z?(_.sortIndex=L,t(s,_),n(u)===null&&_===n(s)&&(y?(p($),$=-1):y=!0,il(x,L-Z))):(_.sortIndex=ie,t(u,_),g||v||(g=!0,ol(k))),_},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(_){var I=m;return function(){var L=m;m=I;try{return _.apply(this,arguments)}finally{m=L}}}})(lf);(function(e){e.exports=lf})(N0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=R,Le=Hl;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,kr={};function cn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(kr[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,P0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gs={},ws={};function O0(e){return Ql.call(ws,e)?!0:Ql.call(gs,e)?!1:P0.test(e)?ws[e]=!0:(gs[e]=!0,!1)}function _0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,t,n,r){if(t===null||typeof t>"u"||_0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,ou);pe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,ou);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,ou);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function iu(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($0(t,n,o,r)&&(n=null),r||o===null?O0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),xs=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,ul;function ar(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var sl=!1;function cl(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ar(e):""}function R0(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=cl(e.type,!1),e;case 11:return e=cl(e.type.render,!1),e;case 1:return e=cl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Yl:return"Profiler";case lu:return"StrictMode";case Kl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case sf:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function z0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=T0(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&iu(e,"checked",t,!1)}function Zl(e,t){mf(e,t);var n=At(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ur(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function hf(e,t){var n=At(t.value),r=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I0=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){I0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var L0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(L0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,Pn=null,On=null;function Ns(e){if(e=Kr(e)){if(typeof ia!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Si(t),ia(e.stateNode,e.type,t))}}function xf(e){Pn?On?On.push(e):On=[e]:Pn=e}function Sf(){if(Pn){var e=Pn,t=On;if(On=Pn=null,Ns(e),t)for(e=0;e<t.length;e++)Ns(t[e])}}function kf(e,t){return e(t)}function Ef(){}var fl=!1;function Cf(e,t,n){if(fl)return e(t,n);fl=!0;try{return kf(e,t,n)}finally{fl=!1,(Pn!==null||On!==null)&&(Ef(),Sf())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=Si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var la=!1;if(mt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){la=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{la=!1}function j0(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(f){this.onError(f)}}var pr=!1,Do=null,Fo=!1,aa=null,b0={onError:function(e){pr=!0,Do=e}};function M0(e,t,n,r,o,i,l,a,u){pr=!1,Do=null,j0.apply(b0,arguments)}function A0(e,t,n,r,o,i,l,a,u){if(M0.apply(this,arguments),pr){if(pr){var s=Do;pr=!1,Do=null}else throw Error(S(198));Fo||(Fo=!0,aa=s)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ps(e){if(fn(e)!==e)throw Error(S(188))}function D0(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ps(o),e;if(i===r)return Ps(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Pf(e){return e=D0(e),e!==null?Of(e):null}function Of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Of(e);if(t!==null)return t;e=e.sibling}return null}var _f=Le.unstable_scheduleCallback,Os=Le.unstable_cancelCallback,F0=Le.unstable_shouldYield,U0=Le.unstable_requestPaint,ee=Le.unstable_now,V0=Le.unstable_getCurrentPriorityLevel,cu=Le.unstable_ImmediatePriority,$f=Le.unstable_UserBlockingPriority,Uo=Le.unstable_NormalPriority,W0=Le.unstable_LowPriority,Rf=Le.unstable_IdlePriority,vi=null,it=null;function B0(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Y0,H0=Math.log,Q0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(H0(e)/Q0|0)|0}var oo=64,io=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=sr(a):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function K0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=K0(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function G0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var If,du,Lf,jf,bf,sa=!1,lo=[],_t=null,$t=null,Rt=null,Nr=new Map,Pr=new Map,Et=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function er(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Z0(e,t,n,r,o){switch(t){case"focusin":return _t=er(_t,e,t,n,r,o),!0;case"dragenter":return $t=er($t,e,t,n,r,o),!0;case"mouseover":return Rt=er(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Nr.set(i,er(Nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,er(Pr.get(i)||null,e,t,n,r,o)),!0}return!1}function Mf(e){var t=Gt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nf(n),t!==null){e.blockedOn=t,bf(e.priority,function(){Lf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oa=r,n.target.dispatchEvent(r),oa=null}else return t=Kr(n),t!==null&&du(t),e.blockedOn=n,!1;t.shift()}return!0}function $s(e,t,n){Eo(e)&&n.delete(t)}function J0(){sa=!1,_t!==null&&Eo(_t)&&(_t=null),$t!==null&&Eo($t)&&($t=null),Rt!==null&&Eo(Rt)&&(Rt=null),Nr.forEach($s),Pr.forEach($s)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,J0)))}function Or(e){function t(o){return tr(o,e)}if(0<lo.length){tr(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&tr(_t,e),$t!==null&&tr($t,e),Rt!==null&&tr(Rt,e),Nr.forEach(t),Pr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)Mf(n),n.blockedOn===null&&Et.shift()}var _n=wt.ReactCurrentBatchConfig,Wo=!0;function em(e,t,n,r){var o=F,i=_n.transition;_n.transition=null;try{F=1,pu(e,t,n,r)}finally{F=o,_n.transition=i}}function tm(e,t,n,r){var o=F,i=_n.transition;_n.transition=null;try{F=4,pu(e,t,n,r)}finally{F=o,_n.transition=i}}function pu(e,t,n,r){if(Wo){var o=ca(e,t,n,r);if(o===null)kl(e,t,r,Bo,n),_s(e,r);else if(Z0(o,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<q0.indexOf(e)){for(;o!==null;){var i=Kr(o);if(i!==null&&If(i),i=ca(e,t,n,r),i===null&&kl(e,t,r,Bo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else kl(e,t,r,null,n)}}var Bo=null;function ca(e,t,n,r){if(Bo=null,e=su(r),e=Gt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V0()){case cu:return 1;case $f:return 4;case Uo:case W0:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var Pt=null,mu=null,Co=null;function Df(){if(Co)return Co;var e,t=mu,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Co=o.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Rs(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:Rs,this.isPropagationStopped=Rs,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Me(Qn),Yr=G({},Qn,{view:0,detail:0}),nm=Me(Yr),pl,ml,nr,gi=G({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(pl=e.screenX-nr.screenX,ml=e.screenY-nr.screenY):ml=pl=0,nr=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),zs=Me(gi),rm=G({},gi,{dataTransfer:0}),om=Me(rm),im=G({},Yr,{relatedTarget:0}),hl=Me(im),lm=G({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Me(lm),um=G({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Me(um),cm=G({},Qn,{data:0}),Ts=Me(cm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function yu(){return mm}var hm=G({},Yr,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Me(hm),vm=G({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Me(vm),gm=G({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),wm=Me(gm),xm=G({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Me(xm),km=G({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=Me(km),Cm=[9,13,27,32],vu=mt&&"CompositionEvent"in window,mr=null;mt&&"documentMode"in document&&(mr=document.documentMode);var Nm=mt&&"TextEvent"in window&&!mr,Ff=mt&&(!vu||mr&&8<mr&&11>=mr),Ls=String.fromCharCode(32),js=!1;function Uf(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Pm(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(js=!0,Ls);case"textInput":return e=t.data,e===Ls&&js?null:e;default:return null}}function Om(e,t){if(hn)return e==="compositionend"||!vu&&Uf(e,t)?(e=Df(),Co=mu=Pt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Wf(e,t,n,r){xf(r),t=Ho(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,_r=null;function $m(e){ed(e,0)}function wi(e){var t=gn(e);if(pf(t))return e}function Rm(e,t){if(e==="change")return t}var Bf=!1;if(mt){var yl;if(mt){var vl="oninput"in document;if(!vl){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),vl=typeof Ms.oninput=="function"}yl=vl}else yl=!1;Bf=yl&&(!document.documentMode||9<document.documentMode)}function As(){hr&&(hr.detachEvent("onpropertychange",Hf),_r=hr=null)}function Hf(e){if(e.propertyName==="value"&&wi(_r)){var t=[];Wf(t,_r,e,su(e)),Cf($m,t)}}function zm(e,t,n){e==="focusin"?(As(),hr=t,_r=n,hr.attachEvent("onpropertychange",Hf)):e==="focusout"&&As()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(_r)}function Im(e,t){if(e==="click")return wi(t)}function Lm(e,t){if(e==="input"||e==="change")return wi(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:jm;function $r(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ql.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bm(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qf(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fs(n,i);var l=Fs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mm=mt&&"documentMode"in document&&11>=document.documentMode,yn=null,fa=null,yr=null,da=!1;function Us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;da||yn==null||yn!==Ao(r)||(r=yn,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&$r(yr,r)||(yr=r,r=Ho(fa,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},gl={},Kf={};mt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function xi(e){if(gl[e])return gl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return gl[e]=t[n];return e}var Xf=xi("animationend"),Gf=xi("animationiteration"),qf=xi("animationstart"),Zf=xi("transitionend"),Jf=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Jf.set(e,t),cn(t,[e])}for(var wl=0;wl<Vs.length;wl++){var xl=Vs[wl],Am=xl.toLowerCase(),Dm=xl[0].toUpperCase()+xl.slice(1);Vt(Am,"on"+Dm)}Vt(Xf,"onAnimationEnd");Vt(Gf,"onAnimationIteration");Vt(qf,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Zf,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Ws(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A0(r,t,void 0,e),e.currentTarget=null}function ed(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Ws(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Ws(o,a,s),i=u}}}if(Fo)throw e=aa,Fo=!1,aa=null,e}function B(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[so]){e[so]=!0,uf.forEach(function(n){n!=="selectionchange"&&(Fm.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Sl("selectionchange",!1,t))}}function td(e,t,n,r){switch(Af(t)){case 1:var o=em;break;case 4:o=tm;break;default:o=pu}n=o.bind(null,t,n,e),o=void 0,!la||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function kl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Gt(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Cf(function(){var s=i,f=su(n),d=[];e:{var m=Jf.get(e);if(m!==void 0){var v=hu,g=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":v=ym;break;case"focusin":g="focus",v=hl;break;case"focusout":g="blur",v=hl;break;case"beforeblur":case"afterblur":v=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wm;break;case Xf:case Gf:case qf:v=am;break;case Zf:v=Sm;break;case"scroll":v=nm;break;case"wheel":v=Em;break;case"copy":case"cut":case"paste":v=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Is}var y=(t&4)!==0,N=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var c=s,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=Cr(c,p),x!=null&&y.push(zr(c,x,h)))),N)break;c=c.return}0<y.length&&(m=new v(m,g,null,n,f),d.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==oa&&(g=n.relatedTarget||n.fromElement)&&(Gt(g)||g[ht]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=s,g=g?Gt(g):null,g!==null&&(N=fn(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=s),v!==g)){if(y=zs,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Is,x="onPointerLeave",p="onPointerEnter",c="pointer"),N=v==null?m:gn(v),h=g==null?m:gn(g),m=new y(x,c+"leave",v,n,f),m.target=N,m.relatedTarget=h,x=null,Gt(f)===s&&(y=new y(p,c+"enter",g,n,f),y.target=h,y.relatedTarget=N,x=y),N=x,v&&g)t:{for(y=v,p=g,c=0,h=y;h;h=dn(h))c++;for(h=0,x=p;x;x=dn(x))h++;for(;0<c-h;)y=dn(y),c--;for(;0<h-c;)p=dn(p),h--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=dn(y),p=dn(p)}y=null}else y=null;v!==null&&Bs(d,m,v,y,!1),g!==null&&N!==null&&Bs(d,N,g,y,!0)}}e:{if(m=s?gn(s):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=Rm;else if(bs(m))if(Bf)k=Lm;else{k=Tm;var P=zm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Im);if(k&&(k=k(e,s))){Wf(d,k,n,f);break e}P&&P(e,m,s),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Jl(m,"number",m.value)}switch(P=s?gn(s):window,e){case"focusin":(bs(P)||P.contentEditable==="true")&&(yn=P,fa=s,yr=null);break;case"focusout":yr=fa=yn=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,Us(d,n,f);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":Us(d,n,f)}var E;if(vu)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else hn?Uf(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Ff&&n.locale!=="ko"&&(hn||$!=="onCompositionStart"?$==="onCompositionEnd"&&hn&&(E=Df()):(Pt=f,mu="value"in Pt?Pt.value:Pt.textContent,hn=!0)),P=Ho(s,$),0<P.length&&($=new Ts($,e,null,n,f),d.push({event:$,listeners:P}),E?$.data=E:(E=Vf(n),E!==null&&($.data=E)))),(E=Nm?Pm(e,n):Om(e,n))&&(s=Ho(s,"onBeforeInput"),0<s.length&&(f=new Ts("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:s}),f.data=E))}ed(d,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Cr(e,n),i!=null&&r.unshift(zr(e,i,o)),i=Cr(e,t),i!=null&&r.push(zr(e,i,o))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Cr(n,i),u!=null&&l.unshift(zr(n,u,a))):o||(u=Cr(n,i),u!=null&&l.push(zr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Um=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(Um,`
`).replace(Vm,"")}function co(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(S(425))}function Qo(){}var pa=null,ma=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(Hm)}:ya;function Hm(e){setTimeout(function(){throw e})}function El(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Yn,Tr="__reactProps$"+Yn,ht="__reactContainer$"+Yn,va="__reactEvents$"+Yn,Qm="__reactListeners$"+Yn,Ym="__reactHandles$"+Yn;function Gt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ys(e);e!==null;){if(n=e[ot])return n;e=Ys(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[ot]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Si(e){return e[Tr]||null}var ga=[],wn=-1;function Wt(e){return{current:e}}function H(e){0>wn||(e.current=ga[wn],ga[wn]=null,wn--)}function W(e,t){wn++,ga[wn]=e.current,e.current=t}var Dt={},we=Wt(Dt),Pe=Wt(!1),rn=Dt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Yo(){H(Pe),H(we)}function Ks(e,t,n){if(we.current!==Dt)throw Error(S(168));W(we,t),W(Pe,n)}function nd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,z0(e)||"Unknown",o));return G({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,rn=we.current,W(we,e),W(Pe,Pe.current),!0}function Xs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=nd(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,H(Pe),H(we),W(we,e)):H(Pe),W(Pe,n)}var ct=null,ki=!1,Cl=!1;function rd(e){ct===null?ct=[e]:ct.push(e)}function Km(e){ki=!0,rd(e)}function Bt(){if(!Cl&&ct!==null){Cl=!0;var e=0,t=F;try{var n=ct;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,ki=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),_f(cu,Bt),o}finally{F=t,Cl=!1}}return null}var xn=[],Sn=0,Xo=null,Go=0,De=[],Fe=0,on=null,ft=1,dt="";function Yt(e,t){xn[Sn++]=Go,xn[Sn++]=Xo,Xo=e,Go=t}function od(e,t,n){De[Fe++]=ft,De[Fe++]=dt,De[Fe++]=on,on=e;var r=ft;e=dt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-qe(t)+o|n<<o|r,dt=i+e}else ft=1<<i|n<<o|r,dt=e}function wu(e){e.return!==null&&(Yt(e,1),od(e,1,0))}function xu(e){for(;e===Xo;)Xo=xn[--Sn],xn[Sn]=null,Go=xn[--Sn],xn[Sn]=null;for(;e===on;)on=De[--Fe],De[Fe]=null,dt=De[--Fe],De[Fe]=null,ft=De[--Fe],De[Fe]=null}var Te=null,ze=null,Y=!1,Xe=null;function id(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,ze=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,ze=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(Y){var t=ze;if(t){var n=t;if(!Gs(e,t)){if(wa(e))throw Error(S(418));t=zt(n.nextSibling);var r=Te;t&&Gs(e,t)?id(r,n):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(wa(e))throw Error(S(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function fo(e){if(e!==Te)return!1;if(!Y)return qs(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=ze)){if(wa(e))throw ld(),Error(S(418));for(;t;)id(e,t),t=zt(t.nextSibling)}if(qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Te?zt(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=ze;e;)e=zt(e.nextSibling)}function Mn(){ze=Te=null,Y=!1}function Su(e){Xe===null?Xe=[e]:Xe.push(e)}var Xm=wt.ReactCurrentBatchConfig;function Ye(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=Wt(null),Zo=null,kn=null,ku=null;function Eu(){ku=kn=Zo=null}function Cu(e){var t=qo.current;H(qo),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Zo=e,ku=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Zo===null)throw Error(S(308));kn=e,Zo.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var qt=null;function Nu(e){qt===null?qt=[e]:qt.push(e)}function ad(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Nu(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Nu(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}function Zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var o=e.updateQueue;kt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;l=0,f=s=u=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(m=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(v,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,m=typeof g=="function"?g.call(v,d,m):g,m==null)break e;d=G({},d,m);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=v,u=d):f=f.next=v,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(f===null&&(u=d),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);an|=l,e.lanes=l,e.memoizedState=d}}function Js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var sd=new af.Component().refs;function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Lt(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Ze(t,e,o,r),Po(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Lt(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Ze(t,e,o,r),Po(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Lt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Tt(e,o,r),t!==null&&(Ze(t,e,r,n),Po(t,e,r))}};function ec(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(o,i):!0}function cd(e,t,n){var r=!1,o=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Oe(t)?rn:we.current,r=t.contextTypes,i=(r=r!=null)?bn(e,o):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function Ea(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=sd,Pu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Oe(t)?rn:we.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ka(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ei.enqueueReplaceState(o,o.state,null),Jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===sd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function fd(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=jt(p,c),p.index=0,p.sibling=null,p}function i(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,h,x){return c===null||c.tag!==6?(c=zl(h,p.mode,x),c.return=p,c):(c=o(c,h),c.return=p,c)}function u(p,c,h,x){var k=h.type;return k===mn?f(p,c,h.props.children,x,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&nc(k)===c.type)?(x=o(c,h.props),x.ref=rr(p,c,h),x.return=p,x):(x=To(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,c,h),x.return=p,x)}function s(p,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Tl(h,p.mode,x),c.return=p,c):(c=o(c,h.children||[]),c.return=p,c)}function f(p,c,h,x,k){return c===null||c.tag!==7?(c=en(h,p.mode,x,k),c.return=p,c):(c=o(c,h),c.return=p,c)}function d(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=zl(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case to:return h=To(c.type,c.key,c.props,null,p.mode,h),h.ref=rr(p,null,c),h.return=p,h;case pn:return c=Tl(c,p.mode,h),c.return=p,c;case St:var x=c._init;return d(p,x(c._payload),h)}if(ur(c)||Zn(c))return c=en(c,p.mode,h,null),c.return=p,c;po(p,c)}return null}function m(p,c,h,x){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(p,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case to:return h.key===k?u(p,c,h,x):null;case pn:return h.key===k?s(p,c,h,x):null;case St:return k=h._init,m(p,c,k(h._payload),x)}if(ur(h)||Zn(h))return k!==null?null:f(p,c,h,x,null);po(p,h)}return null}function v(p,c,h,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,a(c,p,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return p=p.get(x.key===null?h:x.key)||null,u(c,p,x,k);case pn:return p=p.get(x.key===null?h:x.key)||null,s(c,p,x,k);case St:var P=x._init;return v(p,c,h,P(x._payload),k)}if(ur(x)||Zn(x))return p=p.get(h)||null,f(c,p,x,k,null);po(c,x)}return null}function g(p,c,h,x){for(var k=null,P=null,E=c,$=c=0,M=null;E!==null&&$<h.length;$++){E.index>$?(M=E,E=null):M=E.sibling;var T=m(p,E,h[$],x);if(T===null){E===null&&(E=M);break}e&&E&&T.alternate===null&&t(p,E),c=i(T,c,$),P===null?k=T:P.sibling=T,P=T,E=M}if($===h.length)return n(p,E),Y&&Yt(p,$),k;if(E===null){for(;$<h.length;$++)E=d(p,h[$],x),E!==null&&(c=i(E,c,$),P===null?k=E:P.sibling=E,P=E);return Y&&Yt(p,$),k}for(E=r(p,E);$<h.length;$++)M=v(E,p,$,h[$],x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?$:M.key),c=i(M,c,$),P===null?k=M:P.sibling=M,P=M);return e&&E.forEach(function(se){return t(p,se)}),Y&&Yt(p,$),k}function y(p,c,h,x){var k=Zn(h);if(typeof k!="function")throw Error(S(150));if(h=k.call(h),h==null)throw Error(S(151));for(var P=k=null,E=c,$=c=0,M=null,T=h.next();E!==null&&!T.done;$++,T=h.next()){E.index>$?(M=E,E=null):M=E.sibling;var se=m(p,E,T.value,x);if(se===null){E===null&&(E=M);break}e&&E&&se.alternate===null&&t(p,E),c=i(se,c,$),P===null?k=se:P.sibling=se,P=se,E=M}if(T.done)return n(p,E),Y&&Yt(p,$),k;if(E===null){for(;!T.done;$++,T=h.next())T=d(p,T.value,x),T!==null&&(c=i(T,c,$),P===null?k=T:P.sibling=T,P=T);return Y&&Yt(p,$),k}for(E=r(p,E);!T.done;$++,T=h.next())T=v(E,p,$,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?$:T.key),c=i(T,c,$),P===null?k=T:P.sibling=T,P=T);return e&&E.forEach(function(Gn){return t(p,Gn)}),Y&&Yt(p,$),k}function N(p,c,h,x){if(typeof h=="object"&&h!==null&&h.type===mn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case to:e:{for(var k=h.key,P=c;P!==null;){if(P.key===k){if(k=h.type,k===mn){if(P.tag===7){n(p,P.sibling),c=o(P,h.props.children),c.return=p,p=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&nc(k)===P.type){n(p,P.sibling),c=o(P,h.props),c.ref=rr(p,P,h),c.return=p,p=c;break e}n(p,P);break}else t(p,P);P=P.sibling}h.type===mn?(c=en(h.props.children,p.mode,x,h.key),c.return=p,p=c):(x=To(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,c,h),x.return=p,p=x)}return l(p);case pn:e:{for(P=h.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=o(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Tl(h,p.mode,x),c.return=p,p=c}return l(p);case St:return P=h._init,N(p,c,P(h._payload),x)}if(ur(h))return g(p,c,h,x);if(Zn(h))return y(p,c,h,x);po(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,h),c.return=p,p=c):(n(p,c),c=zl(h,p.mode,x),c.return=p,p=c),l(p)):n(p,c)}return N}var An=fd(!0),dd=fd(!1),Xr={},lt=Wt(Xr),Ir=Wt(Xr),Lr=Wt(Xr);function Zt(e){if(e===Xr)throw Error(S(174));return e}function Ou(e,t){switch(W(Lr,t),W(Ir,e),W(lt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}H(lt),W(lt,t)}function Dn(){H(lt),H(Ir),H(Lr)}function pd(e){Zt(Lr.current);var t=Zt(lt.current),n=ta(t,e.type);t!==n&&(W(Ir,e),W(lt,n))}function _u(e){Ir.current===e&&(H(lt),H(Ir))}var K=Wt(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function $u(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Oo=wt.ReactCurrentDispatcher,Pl=wt.ReactCurrentBatchConfig,ln=0,X=null,re=null,le=null,ti=!1,vr=!1,jr=0,Gm=0;function me(){throw Error(S(321))}function Ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function zu(e,t,n,r,o,i){if(ln=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?eh:th,e=n(r,o),vr){i=0;do{if(vr=!1,jr=0,25<=i)throw Error(S(301));i+=1,le=re=null,t.updateQueue=null,Oo.current=nh,e=n(r,o)}while(vr)}if(Oo.current=ni,t=re!==null&&re.next!==null,ln=0,le=re=X=null,ti=!1,t)throw Error(S(300));return e}function Tu(){var e=jr!==0;return jr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Be(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function br(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var f=s.lane;if((ln&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=d,l=r):u=u.next=d,X.lanes|=f,an|=f}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,Je(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,an|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function md(){}function hd(e,t){var n=X,r=Be(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Iu(gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Mr(9,vd.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));ln&30||yd(n,t,o)}return o}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,wd(t)&&xd(e)}function gd(e,t,n){return n(function(){wd(t)&&xd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function xd(e){var t=yt(e,1);t!==null&&Ze(t,e,1,-1)}function rc(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=Jm.bind(null,X,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sd(){return Be().memoizedState}function _o(e,t,n,r){var o=tt();X.flags|=e,o.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function Ci(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(re!==null){var l=re.memoizedState;if(i=l.destroy,r!==null&&Ru(r,l.deps)){o.memoizedState=Mr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Mr(1|t,n,i,r)}function oc(e,t){return _o(8390656,8,e,t)}function Iu(e,t){return Ci(2048,8,e,t)}function kd(e,t){return Ci(4,2,e,t)}function Ed(e,t){return Ci(4,4,e,t)}function Cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4,4,Cd.bind(null,t,e),n)}function Lu(){}function Pd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Od(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _d(e,t,n){return ln&21?(Je(n,t)||(n=zf(),X.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function qm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{F=n,Pl.transition=r}}function $d(){return Be().memoizedState}function Zm(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rd(e))zd(t,n);else if(n=ad(e,t,n,r),n!==null){var o=Se();Ze(n,e,r,o),Td(n,t,r)}}function Jm(e,t,n){var r=Lt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))zd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Je(a,l)){var u=t.interleaved;u===null?(o.next=o,Nu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=ad(e,t,o,r),n!==null&&(o=Se(),Ze(n,e,r,o),Td(n,t,r))}}function Rd(e){var t=e.alternate;return e===X||t!==null&&t===X}function zd(e,t){vr=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}var ni={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},eh={readContext:We,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,Cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:rc,useDebugValue:Lu,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=rc(!1),t=e[0];return e=qm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=tt();if(Y){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));ln&30||yd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,oc(gd.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(Y){var n=dt,r=ft;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},th={readContext:We,useCallback:Pd,useContext:We,useEffect:Iu,useImperativeHandle:Nd,useInsertionEffect:kd,useLayoutEffect:Ed,useMemo:Od,useReducer:Ol,useRef:Sd,useState:function(){return Ol(br)},useDebugValue:Lu,useDeferredValue:function(e){var t=Be();return _d(t,re.memoizedState,e)},useTransition:function(){var e=Ol(br)[0],t=Be().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:hd,useId:$d,unstable_isNewReconciler:!1},nh={readContext:We,useCallback:Pd,useContext:We,useEffect:Iu,useImperativeHandle:Nd,useInsertionEffect:kd,useLayoutEffect:Ed,useMemo:Od,useReducer:_l,useRef:Sd,useState:function(){return _l(br)},useDebugValue:Lu,useDeferredValue:function(e){var t=Be();return re===null?t.memoizedState=e:_d(t,re.memoizedState,e)},useTransition:function(){var e=_l(br)[0],t=Be().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:hd,useId:$d,unstable_isNewReconciler:!1};function Fn(e,t){try{var n="",r=t;do n+=R0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rh=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,La=r),Ca(e,t)},n}function Ld(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ca(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=vh.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var oh=wt.ReactCurrentOwner,Ne=!1;function xe(e,t,n,r){t.child=e===null?dd(t,null,n,r):An(t,e.child,n,r)}function uc(e,t,n,r,o){n=n.render;var i=t.ref;return $n(t,o),r=zu(e,t,n,r,i,o),n=Tu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Y&&n&&wu(t),t.flags|=1,xe(e,t,r,o),t.child)}function sc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jd(e,t,i,r,o)):(e=To(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Na(e,t,n,r,o)}function bd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Cn,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Cn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Cn,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Cn,Re),Re|=r;return xe(e,t,o,n),t.child}function Md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Na(e,t,n,r,o){var i=Oe(n)?rn:we.current;return i=bn(t,i),$n(t,o),n=zu(e,t,n,r,i,o),r=Tu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Y&&r&&wu(t),t.flags|=1,xe(e,t,n,o),t.child)}function cc(e,t,n,r,o){if(Oe(n)){var i=!0;Ko(t)}else i=!1;if($n(t,o),t.stateNode===null)$o(e,t),cd(t,n,r),Ea(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=We(s):(s=Oe(n)?rn:we.current,s=bn(t,s));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&tc(t,l,r,s),kt=!1;var m=t.memoizedState;l.state=m,Jo(t,r,l,o),u=t.memoizedState,a!==r||m!==u||Pe.current||kt?(typeof f=="function"&&(ka(t,n,f,r),u=t.memoizedState),(a=kt||ec(t,n,a,r,m,u,s))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ud(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Ye(t.type,a),l.props=s,d=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=Oe(n)?rn:we.current,u=bn(t,u));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||m!==u)&&tc(t,l,r,u),kt=!1,m=t.memoizedState,l.state=m,Jo(t,r,l,o);var g=t.memoizedState;a!==d||m!==g||Pe.current||kt?(typeof v=="function"&&(ka(t,n,v,r),g=t.memoizedState),(s=kt||ec(t,n,s,r,m,g,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Pa(e,t,n,r,i,o)}function Pa(e,t,n,r,o,i){Md(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Xs(t,n,!1),vt(e,t,i);r=t.stateNode,oh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=An(t,e.child,null,i),t.child=An(t,null,a,i)):xe(e,t,a,i),t.memoizedState=r.state,o&&Xs(t,n,!0),t.child}function Ad(e){var t=e.stateNode;t.pendingContext?Ks(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ks(e,t.context,!1),Ou(e,t.containerInfo)}function fc(e,t,n,r,o){return Mn(),Su(o),t.flags|=256,xe(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dd(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(K,o&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Oi(l,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_a(n),t.memoizedState=Oa,e):ju(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return ih(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=jt(a,i):(i=en(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?_a(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&Su(r),An(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(S(422))),mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Oi({mode:"visible",children:r.children},o,0,null),i=en(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,l),t.child.memoizedState=_a(l),t.memoizedState=Oa,i);if(!(t.mode&1))return mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=$l(i,r,void 0),mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ne||a){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Ze(r,e,o,-1))}return Uu(),r=$l(Error(S(421))),mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ze=zt(o.nextSibling),Te=t,Y=!0,Xe=null,e!==null&&(De[Fe++]=ft,De[Fe++]=dt,De[Fe++]=on,ft=e.id,dt=e.overflow,on=t),t=ju(t,r.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function Rl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Fd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Rl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ei(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Rl(t,!0,n,null,i);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lh(e,t,n){switch(t.tag){case 3:Ad(t),Mn();break;case 5:pd(t);break;case 1:Oe(t.type)&&Ko(t);break;case 4:Ou(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Dd(e,t,n):(W(K,K.current&1),e=vt(e,t,n),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,n)}return vt(e,t,n)}var Ud,$a,Vd,Wd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$a=function(){};Vd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(lt.current);var i=null;switch(n){case"input":o=ql(e,o),r=ql(e,r),i=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":o=ea(e,o),r=ea(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}na(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(kr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(kr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&B("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ah(e,t,n){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Oe(t.type)&&Yo(),he(t),null;case 3:return r=t.stateNode,Dn(),H(Pe),H(we),$u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Ma(Xe),Xe=null))),$a(e,t),he(t),null;case 5:_u(t);var o=Zt(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=Zt(lt.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[Tr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<cr.length;o++)B(cr[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ss(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Es(r,i),B("invalid",r)}na(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&co(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&co(r.textContent,a,e),o=["children",""+a]):kr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":no(r),ks(r,i,!0);break;case"textarea":no(r),Cs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Tr]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(l=ra(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<cr.length;o++)B(cr[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":Ss(e,r),o=ql(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Es(e,r),o=ea(e,r),B("invalid",e);break;default:o=r}na(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?wf(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vf(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Er(e,u):typeof u=="number"&&Er(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(kr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&iu(e,i,u,l))}switch(n){case"input":no(e),ks(e,r,!1);break;case"textarea":no(e),Cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+At(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Zt(Lr.current),Zt(lt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return he(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&ze!==null&&t.mode&1&&!(t.flags&128))ld(),Mn(),t.flags|=98560,i=!1;else if(i=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ot]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Xe!==null&&(Ma(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Uu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Dn(),$a(e,t),e===null&&Rr(t.stateNode.containerInfo),he(t),null;case 10:return Cu(t.type._context),he(t),null;case 17:return Oe(t.type)&&Yo(),he(t),null;case 19:if(H(K),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)or(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ei(e),l!==null){for(t.flags|=128,or(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Un&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304)}else{if(!r)if(e=ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return he(t),null}else 2*ee()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=K.current,W(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function uh(e,t){switch(xu(t),t.tag){case 1:return Oe(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),H(Pe),H(we),$u(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _u(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return Dn(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var ho=!1,ge=!1,sh=typeof WeakSet=="function"?WeakSet:Set,O=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Ra(e,t,n){try{n()}catch(r){q(e,t,r)}}var pc=!1;function ch(e,t){if(pa=Wo,e=Yf(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,f=0,d=e,m=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===e)break t;if(m===n&&++s===o&&(a=l),m===i&&++f===r&&(u=l),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},Wo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,N=g.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),N);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=pc,pc=!1,g}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ra(t,n,i)}o=o.next}while(o!==r)}}function Ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Tr],delete t[va],delete t[Qm],delete t[Ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var ce=null,Ke=!1;function xt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:ge||En(n,t);case 6:var r=ce,o=Ke;ce=null,xt(e,t,n),ce=r,Ke=o,ce!==null&&(Ke?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ke?(e=ce,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),Or(e)):El(ce,n.stateNode));break;case 4:r=ce,o=Ke,ce=n.stateNode.containerInfo,Ke=!0,xt(e,t,n),ce=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ra(n,t,l),o=o.next}while(o!==r)}xt(e,t,n);break;case 1:if(!ge&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,xt(e,t,n),ge=r):xt(e,t,n);break;default:xt(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sh),t.forEach(function(r){var o=wh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ke=!1;break e;case 3:ce=a.stateNode.containerInfo,Ke=!0;break e;case 4:ce=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ce===null)throw Error(S(160));Qd(i,l,o),ce=null,Ke=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){q(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}function Yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),et(e),r&4){try{gr(3,e,e.return),Ni(3,e)}catch(y){q(e,e.return,y)}try{gr(5,e,e.return)}catch(y){q(e,e.return,y)}}break;case 1:Qe(t,e),et(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(Qe(t,e),et(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{Er(o,"")}catch(y){q(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&mf(o,i),ra(a,l);var s=ra(a,i);for(l=0;l<u.length;l+=2){var f=u[l],d=u[l+1];f==="style"?wf(o,d):f==="dangerouslySetInnerHTML"?vf(o,d):f==="children"?Er(o,d):iu(o,f,d,s)}switch(a){case"input":Zl(o,i);break;case"textarea":hf(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Nn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Tr]=i}catch(y){q(e,e.return,y)}}break;case 6:if(Qe(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){q(e,e.return,y)}}break;case 3:if(Qe(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(y){q(e,e.return,y)}break;case 4:Qe(t,e),et(e);break;case 13:Qe(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=ee())),r&4&&hc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(s=ge)||f,Qe(t,e),ge=s):Qe(t,e),et(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(m=O,v=m.child,m.tag){case 0:case 11:case 14:case 15:gr(4,m,m.return);break;case 1:En(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){q(r,n,y)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){vc(d);continue}}v!==null?(v.return=m,O=v):vc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gf("display",l))}catch(y){q(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(y){q(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(t,e),et(e),r&4&&hc(e);break;case 21:break;default:Qe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Er(o,""),r.flags&=-33);var i=mc(e);Ia(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=mc(e);Ta(e,a,l);break;default:throw Error(S(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e,t,n){O=e,Kd(e)}function Kd(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ho;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ge;a=ho;var s=ge;if(ho=l,(ge=u)&&!s)for(O=o;O!==null;)l=O,u=l.child,l.tag===22&&l.memoizedState!==null?gc(o):u!==null?(u.return=l,O=u):gc(o);for(;i!==null;)O=i,Kd(i),i=i.sibling;O=o,ho=a,ge=s}yc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):yc(e)}}function yc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Ni(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Js(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Js(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Or(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&za(t)}catch(m){q(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function vc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function gc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ni(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){q(t,o,u)}}var i=t.return;try{za(t)}catch(u){q(t,i,u)}break;case 5:var l=t.return;try{za(t)}catch(u){q(t,l,u)}}}catch(u){q(t,t.return,u)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var dh=Math.ceil,ri=wt.ReactCurrentDispatcher,bu=wt.ReactCurrentOwner,Ve=wt.ReactCurrentBatchConfig,b=0,ae=null,ne=null,de=0,Re=0,Cn=Wt(0),oe=0,Ar=null,an=0,Pi=0,Mu=0,wr=null,Ce=null,Au=0,Un=1/0,st=null,oi=!1,La=null,It=null,yo=!1,Ot=null,ii=0,xr=0,ja=null,Ro=-1,zo=0;function Se(){return b&6?ee():Ro!==-1?Ro:Ro=ee()}function Lt(e){return e.mode&1?b&2&&de!==0?de&-de:Xm.transition!==null?(zo===0&&(zo=zf()),zo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Af(e.type)),e):1}function Ze(e,t,n,r){if(50<xr)throw xr=0,ja=null,Error(S(185));Qr(e,n,r),(!(b&2)||e!==ae)&&(e===ae&&(!(b&2)&&(Pi|=n),oe===4&&Ct(e,de)),_e(e,r),n===1&&b===0&&!(t.mode&1)&&(Un=ee()+500,ki&&Bt()))}function _e(e,t){var n=e.callbackNode;X0(e,t);var r=Vo(e,e===ae?de:0);if(r===0)n!==null&&Os(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Os(n),t===1)e.tag===0?Km(wc.bind(null,e)):rd(wc.bind(null,e)),Bm(function(){!(b&6)&&Bt()}),n=null;else{switch(Tf(r)){case 1:n=cu;break;case 4:n=$f;break;case 16:n=Uo;break;case 536870912:n=Rf;break;default:n=Uo}n=np(n,Xd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xd(e,t){if(Ro=-1,zo=0,b&6)throw Error(S(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Vo(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=li(e,r);else{t=r;var o=b;b|=2;var i=qd();(ae!==e||de!==t)&&(st=null,Un=ee()+500,Jt(e,t));do try{hh();break}catch(a){Gd(e,a)}while(1);Eu(),ri.current=i,b=o,ne!==null?t=0:(ae=null,de=0,t=oe)}if(t!==0){if(t===2&&(o=ua(e),o!==0&&(r=o,t=ba(e,o))),t===1)throw n=Ar,Jt(e,0),Ct(e,r),_e(e,ee()),n;if(t===6)Ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!ph(o)&&(t=li(e,r),t===2&&(i=ua(e),i!==0&&(r=i,t=ba(e,i))),t===1))throw n=Ar,Jt(e,0),Ct(e,r),_e(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Kt(e,Ce,st);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=Au+500-ee(),10<t)){if(Vo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ya(Kt.bind(null,e,Ce,st),t);break}Kt(e,Ce,st);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dh(r/1960))-r,10<r){e.timeoutHandle=ya(Kt.bind(null,e,Ce,st),r);break}Kt(e,Ce,st);break;case 5:Kt(e,Ce,st);break;default:throw Error(S(329))}}}return _e(e,ee()),e.callbackNode===n?Xd.bind(null,e):null}function ba(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=li(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Ma(t)),e}function Ma(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function ph(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~Mu,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function wc(e){if(b&6)throw Error(S(327));Rn();var t=Vo(e,0);if(!(t&1))return _e(e,ee()),null;var n=li(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=Ar,Jt(e,0),Ct(e,t),_e(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ce,st),_e(e,ee()),null}function Du(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Un=ee()+500,ki&&Bt())}}function un(e){Ot!==null&&Ot.tag===0&&!(b&6)&&Rn();var t=b;b|=1;var n=Ve.transition,r=F;try{if(Ve.transition=null,F=1,e)return e()}finally{F=r,Ve.transition=n,b=t,!(b&6)&&Bt()}}function Fu(){Re=Cn.current,H(Cn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wm(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:Dn(),H(Pe),H(we),$u();break;case 5:_u(r);break;case 4:Dn();break;case 13:H(K);break;case 19:H(K);break;case 10:Cu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(ae=e,ne=e=jt(e.current,null),de=Re=t,oe=0,Ar=null,Mu=Pi=an=0,Ce=wr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}qt=null}return e}function Gd(e,t){do{var n=ne;try{if(Eu(),Oo.current=ni,ti){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ti=!1}if(ln=0,le=re=X=null,vr=!1,jr=0,bu.current=null,n===null||n.return===null){oe=1,Ar=t,ne=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=de,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=lc(l);if(v!==null){v.flags&=-257,ac(v,l,a,i,t),v.mode&1&&ic(i,s,t),t=v,u=s;var g=t.updateQueue;if(g===null){var y=new Set;y.add(u),t.updateQueue=y}else g.add(u);break e}else{if(!(t&1)){ic(i,s,t),Uu();break e}u=Error(S(426))}}else if(Y&&a.mode&1){var N=lc(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ac(N,l,a,i,t),Su(Fn(u,a));break e}}i=u=Fn(u,a),oe!==4&&(oe=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Id(i,u,t);Zs(i,p);break e;case 1:a=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(It===null||!It.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Ld(i,a,t);Zs(i,x);break e}}i=i.return}while(i!==null)}Jd(n)}catch(k){t=k,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function qd(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Uu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(an&268435455)&&!(Pi&268435455)||Ct(ae,de)}function li(e,t){var n=b;b|=2;var r=qd();(ae!==e||de!==t)&&(st=null,Jt(e,t));do try{mh();break}catch(o){Gd(e,o)}while(1);if(Eu(),b=n,ri.current=r,ne!==null)throw Error(S(261));return ae=null,de=0,oe}function mh(){for(;ne!==null;)Zd(ne)}function hh(){for(;ne!==null&&!F0();)Zd(ne)}function Zd(e){var t=tp(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Jd(e):ne=t,bu.current=null}function Jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uh(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(n=ah(n,t,Re),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Kt(e,t,n){var r=F,o=Ve.transition;try{Ve.transition=null,F=1,yh(e,t,n,r)}finally{Ve.transition=o,F=r}return null}function yh(e,t,n,r){do Rn();while(Ot!==null);if(b&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(G0(e,i),e===ae&&(ne=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,np(Uo,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=F;F=1;var a=b;b|=4,bu.current=null,ch(e,n),Yd(n,e),bm(ma),Wo=!!pa,ma=pa=null,e.current=n,fh(n),U0(),b=a,F=l,Ve.transition=i}else e.current=n;if(yo&&(yo=!1,Ot=e,ii=o),i=e.pendingLanes,i===0&&(It=null),B0(n.stateNode),_e(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(oi)throw oi=!1,e=La,La=null,e;return ii&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===ja?xr++:(xr=0,ja=e):xr=0,Bt(),null}function Rn(){if(Ot!==null){var e=Tf(ii),t=Ve.transition,n=F;try{if(Ve.transition=null,F=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,ii=0,b&6)throw Error(S(331));var o=b;for(b|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(O=s;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:gr(8,f,i)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var m=f.sibling,v=f.return;if(Bd(f),f===s){O=null;break}if(m!==null){m.return=v,O=m;break}O=v}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,O=p;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,O=h;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ni(9,a)}}catch(k){q(a,a.return,k)}if(a===l){O=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}if(b=o,Bt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{F=n,Ve.transition=t}}return!1}function xc(e,t,n){t=Fn(n,t),t=Id(e,t,1),e=Tt(e,t,1),t=Se(),e!==null&&(Qr(e,1,t),_e(e,t))}function q(e,t,n){if(e.tag===3)xc(e,e,n);else for(;t!==null;){if(t.tag===3){xc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Fn(n,e),e=Ld(t,e,1),t=Tt(t,e,1),e=Se(),t!==null&&(Qr(t,1,e),_e(t,e));break}}t=t.return}}function vh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(oe===4||oe===3&&(de&130023424)===de&&500>ee()-Au?Jt(e,0):Mu|=n),_e(e,t)}function ep(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Se();e=yt(e,t),e!==null&&(Qr(e,t,n),_e(e,n))}function gh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ep(e,n)}function wh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),ep(e,n)}var tp;tp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,lh(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Y&&t.flags&1048576&&od(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var o=bn(t,we.current);$n(t,n),o=zu(null,t,r,e,o,n);var i=Tu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,Ko(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pu(t),o.updater=Ei,t.stateNode=o,o._reactInternals=t,Ea(t,r,e,n),t=Pa(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&wu(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Sh(r),e=Ye(r,e),o){case 0:t=Na(null,t,r,e,n);break e;case 1:t=cc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=sc(null,t,r,Ye(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Na(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),cc(e,t,r,o,n);case 3:e:{if(Ad(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ud(e,t),Jo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fn(Error(S(423)),t),t=fc(e,t,r,n,o);break e}else if(r!==o){o=Fn(Error(S(424)),t),t=fc(e,t,r,n,o);break e}else for(ze=zt(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,Xe=null,n=dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=vt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return pd(t),e===null&&xa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ha(r,o)?l=null:i!==null&&ha(r,i)&&(t.flags|=32),Md(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&xa(t),null;case 13:return Dd(e,t,n);case 4:return Ou(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),uc(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(qo,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!Pe.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=pt(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Sa(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Sa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$n(t,n),o=We(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Ye(r,t.pendingProps),o=Ye(r.type,o),sc(e,t,r,o,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),$o(e,t),t.tag=1,Oe(r)?(e=!0,Ko(t)):e=!1,$n(t,n),cd(t,r,o),Ea(t,r,o,n),Pa(null,t,r,!0,e,n);case 19:return Fd(e,t,n);case 22:return bd(e,t,n)}throw Error(S(156,t.tag))};function np(e,t){return _f(e,t)}function xh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new xh(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sh(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===uu)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Vu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mn:return en(n.children,o,i,t);case lu:l=8,o|=8;break;case Yl:return e=Ue(12,n,t,o|2),e.elementType=Yl,e.lanes=i,e;case Kl:return e=Ue(13,n,t,o),e.elementType=Kl,e.lanes=i,e;case Xl:return e=Ue(19,n,t,o),e.elementType=Xl,e.lanes=i,e;case ff:return Oi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sf:l=10;break e;case cf:l=9;break e;case au:l=11;break e;case uu:l=14;break e;case St:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function Oi(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=ff,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,o,i,l,a,u){return e=new kh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(i),e}function Eh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rp(e){if(!e)return Dt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Oe(n))return nd(e,n,t)}return t}function op(e,t,n,r,o,i,l,a,u){return e=Wu(n,r,!0,e,o,i,l,a,u),e.context=rp(null),n=e.current,r=Se(),o=Lt(n),i=pt(r,o),i.callback=t??null,Tt(n,i,o),e.current.lanes=o,Qr(e,o,r),_e(e,r),e}function _i(e,t,n,r){var o=t.current,i=Se(),l=Lt(o);return n=rp(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(o,t,l),e!==null&&(Ze(e,o,l,i),Po(e,o,l)),l}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){Sc(e,t),(e=e.alternate)&&Sc(e,t)}function Ch(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hu(e){this._internalRoot=e}$i.prototype.render=Hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));_i(e,t,null,null)};$i.prototype.unmount=Hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){_i(null,e,null,null)}),t[ht]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&Mf(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function Nh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=ai(l);i.call(s)}}var l=op(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=l,e[ht]=l.current,Rr(e.nodeType===8?e.parentNode:e),un(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=ai(u);a.call(s)}}var u=Wu(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=u,e[ht]=u.current,Rr(e.nodeType===8?e.parentNode:e),un(function(){_i(t,u,n,r)}),u}function zi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=ai(l);a.call(u)}}_i(t,l,e,o)}else l=Nh(n,t,e,o,r);return ai(l)}If=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(fu(t,n|1),_e(t,ee()),!(b&6)&&(Un=ee()+500,Bt()))}break;case 13:un(function(){var r=yt(e,1);if(r!==null){var o=Se();Ze(r,e,1,o)}}),Bu(e,1)}};du=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=Se();Ze(t,e,134217728,n)}Bu(e,134217728)}};Lf=function(e){if(e.tag===13){var t=Lt(e),n=yt(e,t);if(n!==null){var r=Se();Ze(n,e,t,r)}Bu(e,t)}};jf=function(){return F};bf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ia=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Si(r);if(!o)throw Error(S(90));pf(r),Zl(r,o)}}}break;case"textarea":hf(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};kf=Du;Ef=un;var Ph={usingClientEntryPoint:!1,Events:[Kr,gn,Si,xf,Sf,Du]},ir={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Oh={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pf(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||Ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{vi=vo.inject(Oh),it=vo}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ph;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(S(200));return Eh(e,t,null,n)};be.createRoot=function(e,t){if(!Qu(e))throw Error(S(299));var n=!1,r="",o=ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wu(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,Rr(e.nodeType===8?e.parentNode:e),new Hu(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Pf(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return un(e)};be.hydrate=function(e,t,n){if(!Ri(t))throw Error(S(200));return zi(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ip;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=op(t,null,e,1,n??null,o,!1,i,l),e[ht]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $i(t)};be.render=function(e,t,n){if(!Ri(t))throw Error(S(200));return zi(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(S(40));return e._reactRootContainer?(un(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};be.unstable_batchedUpdates=Du;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return zi(e,t,n,!1,r)};be.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=be})(C0);var Ec=Mo;Bl.createRoot=Ec.createRoot,Bl.hydrateRoot=Ec.hydrateRoot;var Aa={},_h={get exports(){return Aa},set exports(e){Aa=e}},lp={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vn=R;function $h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rh=typeof Object.is=="function"?Object.is:$h,zh=Vn.useState,Th=Vn.useEffect,Ih=Vn.useLayoutEffect,Lh=Vn.useDebugValue;function jh(e,t){var n=t(),r=zh({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Ih(function(){o.value=n,o.getSnapshot=t,Il(o)&&i({inst:o})},[e,n,t]),Th(function(){return Il(o)&&i({inst:o}),e(function(){Il(o)&&i({inst:o})})},[e]),Lh(n),n}function Il(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rh(e,n)}catch{return!0}}function bh(e,t){return t()}var Mh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?bh:jh;lp.useSyncExternalStore=Vn.useSyncExternalStore!==void 0?Vn.useSyncExternalStore:Mh;(function(e){e.exports=lp})(_h);var Da={},Ah={get exports(){return Da},set exports(e){Da=e}},ap={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=R,Dh=Aa;function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Uh=typeof Object.is=="function"?Object.is:Fh,Vh=Dh.useSyncExternalStore,Wh=Ti.useRef,Bh=Ti.useEffect,Hh=Ti.useMemo,Qh=Ti.useDebugValue;ap.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Wh(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=Hh(function(){function u(v){if(!s){if(s=!0,f=v,v=r(v),o!==void 0&&l.hasValue){var g=l.value;if(o(g,v))return d=g}return d=v}if(g=d,Uh(f,v))return g;var y=r(v);return o!==void 0&&o(g,y)?g:(f=v,d=y)}var s=!1,f,d,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,o]);var a=Vh(e,i[0],i[1]);return Bh(function(){l.hasValue=!0,l.value=a},[a]),Qh(a),a};(function(e){e.exports=ap})(Ah);function Yh(e){e()}let up=Yh;const Kh=e=>up=e,Xh=()=>up,Ft=R.createContext(null);function sp(){return R.useContext(Ft)}const Gh=()=>{throw new Error("uSES not initialized!")};let cp=Gh;const qh=e=>{cp=e},Zh=(e,t)=>e===t;function Jh(e=Ft){const t=e===Ft?sp:()=>R.useContext(e);return function(r,o=Zh){const{store:i,subscription:l,getServerState:a}=t(),u=cp(l.addNestedSub,i.getState,a||i.getState,r,o);return R.useDebugValue(u),u}}const fp=Jh();var Fa={},ey={get exports(){return Fa},set exports(e){Fa=e}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=typeof Symbol=="function"&&Symbol.for,Yu=ue?Symbol.for("react.element"):60103,Ku=ue?Symbol.for("react.portal"):60106,Ii=ue?Symbol.for("react.fragment"):60107,Li=ue?Symbol.for("react.strict_mode"):60108,ji=ue?Symbol.for("react.profiler"):60114,bi=ue?Symbol.for("react.provider"):60109,Mi=ue?Symbol.for("react.context"):60110,Xu=ue?Symbol.for("react.async_mode"):60111,Ai=ue?Symbol.for("react.concurrent_mode"):60111,Di=ue?Symbol.for("react.forward_ref"):60112,Fi=ue?Symbol.for("react.suspense"):60113,ty=ue?Symbol.for("react.suspense_list"):60120,Ui=ue?Symbol.for("react.memo"):60115,Vi=ue?Symbol.for("react.lazy"):60116,ny=ue?Symbol.for("react.block"):60121,ry=ue?Symbol.for("react.fundamental"):60117,oy=ue?Symbol.for("react.responder"):60118,iy=ue?Symbol.for("react.scope"):60119;function Ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yu:switch(e=e.type,e){case Xu:case Ai:case Ii:case ji:case Li:case Fi:return e;default:switch(e=e&&e.$$typeof,e){case Mi:case Di:case Vi:case Ui:case bi:return e;default:return t}}case Ku:return t}}}function dp(e){return Ae(e)===Ai}U.AsyncMode=Xu;U.ConcurrentMode=Ai;U.ContextConsumer=Mi;U.ContextProvider=bi;U.Element=Yu;U.ForwardRef=Di;U.Fragment=Ii;U.Lazy=Vi;U.Memo=Ui;U.Portal=Ku;U.Profiler=ji;U.StrictMode=Li;U.Suspense=Fi;U.isAsyncMode=function(e){return dp(e)||Ae(e)===Xu};U.isConcurrentMode=dp;U.isContextConsumer=function(e){return Ae(e)===Mi};U.isContextProvider=function(e){return Ae(e)===bi};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};U.isForwardRef=function(e){return Ae(e)===Di};U.isFragment=function(e){return Ae(e)===Ii};U.isLazy=function(e){return Ae(e)===Vi};U.isMemo=function(e){return Ae(e)===Ui};U.isPortal=function(e){return Ae(e)===Ku};U.isProfiler=function(e){return Ae(e)===ji};U.isStrictMode=function(e){return Ae(e)===Li};U.isSuspense=function(e){return Ae(e)===Fi};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ii||e===Ai||e===ji||e===Li||e===Fi||e===ty||typeof e=="object"&&e!==null&&(e.$$typeof===Vi||e.$$typeof===Ui||e.$$typeof===bi||e.$$typeof===Mi||e.$$typeof===Di||e.$$typeof===ry||e.$$typeof===oy||e.$$typeof===iy||e.$$typeof===ny)};U.typeOf=Ae;(function(e){e.exports=U})(ey);var pp=Fa,ly={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ay={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mp={};mp[pp.ForwardRef]=ly;mp[pp.Memo]=ay;var Ua={},uy={get exports(){return Ua},set exports(e){Ua=e}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Bi=Symbol.for("react.strict_mode"),Hi=Symbol.for("react.profiler"),Qi=Symbol.for("react.provider"),Yi=Symbol.for("react.context"),sy=Symbol.for("react.server_context"),Ki=Symbol.for("react.forward_ref"),Xi=Symbol.for("react.suspense"),Gi=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),cy=Symbol.for("react.offscreen"),hp;hp=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gu:switch(e=e.type,e){case Wi:case Hi:case Bi:case Xi:case Gi:return e;default:switch(e=e&&e.$$typeof,e){case sy:case Yi:case Ki:case Zi:case qi:case Qi:return e;default:return t}}case qu:return t}}}V.ContextConsumer=Yi;V.ContextProvider=Qi;V.Element=Gu;V.ForwardRef=Ki;V.Fragment=Wi;V.Lazy=Zi;V.Memo=qi;V.Portal=qu;V.Profiler=Hi;V.StrictMode=Bi;V.Suspense=Xi;V.SuspenseList=Gi;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return He(e)===Yi};V.isContextProvider=function(e){return He(e)===Qi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gu};V.isForwardRef=function(e){return He(e)===Ki};V.isFragment=function(e){return He(e)===Wi};V.isLazy=function(e){return He(e)===Zi};V.isMemo=function(e){return He(e)===qi};V.isPortal=function(e){return He(e)===qu};V.isProfiler=function(e){return He(e)===Hi};V.isStrictMode=function(e){return He(e)===Bi};V.isSuspense=function(e){return He(e)===Xi};V.isSuspenseList=function(e){return He(e)===Gi};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wi||e===Hi||e===Bi||e===Xi||e===Gi||e===cy||typeof e=="object"&&e!==null&&(e.$$typeof===Zi||e.$$typeof===qi||e.$$typeof===Qi||e.$$typeof===Yi||e.$$typeof===Ki||e.$$typeof===hp||e.getModuleId!==void 0)};V.typeOf=He;(function(e){e.exports=V})(uy);function fy(){const e=Xh();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Cc={notify(){},get:()=>[]};function dy(e,t){let n,r=Cc;function o(d){return u(),r.subscribe(d)}function i(){r.notify()}function l(){f.onStateChange&&f.onStateChange()}function a(){return!!n}function u(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=fy())}function s(){n&&(n(),n=void 0,r.clear(),r=Cc)}const f={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:a,trySubscribe:u,tryUnsubscribe:s,getListeners:()=>r};return f}const py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",my=py?R.useLayoutEffect:R.useEffect;function hy({store:e,context:t,children:n,serverState:r}){const o=R.useMemo(()=>{const a=dy(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),i=R.useMemo(()=>e.getState(),[e]);my(()=>{const{subscription:a}=o;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),i!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[o,i]);const l=t||Ft;return nu.createElement(l.Provider,{value:o},n)}function yp(e=Ft){const t=e===Ft?sp:()=>R.useContext(e);return function(){const{store:r}=t();return r}}const yy=yp();function vy(e=Ft){const t=e===Ft?yy:yp(e);return function(){return t().dispatch}}const Ji=vy();qh(Da.useSyncExternalStoreWithSelector);Kh(Mo.unstable_batchedUpdates);function gy(){const e=fp(t=>t.alert.isVisible);return z("div",{className:`max-w-[320px] h-[60px] bg-[#20df5688] fixed top-4 right-4 p-3 box-content flex items-center gap-5 rounded-lg z-10
    transition-opacity duration-1000 pointer-events-none ${e?"opacity-100":"opacity-0 "}`,children:[w("div",{className:"w-10 h-10 bg-checkAlert bg-contain"}),z("div",{className:"flex flex-col text-[#c9fdd7] text-lg opacity-100",children:[w("p",{className:" font-bold",children:"Success"}),w("p",{children:" We will contact you soon! "})]})]})}function wy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Sy=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=wy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ui="-moz-",A="-webkit-",vp="comm",Zu="rule",Ju="decl",ky="@import",gp="@keyframes",Ey=Math.abs,el=String.fromCharCode,Cy=Object.assign;function Ny(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function wp(e){return e.trim()}function Py(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Va(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function es(e){return e.length}function go(e,t){return t.push(e),e}function Oy(e,t){return e.map(t).join("")}var tl=1,Wn=1,xp=0,$e=0,te=0,Kn="";function nl(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:tl,column:Wn,length:l,return:""}}function lr(e,t){return Cy(nl("",null,null,"",null,null,0),e,{length:-e.length},t)}function _y(){return te}function $y(){return te=$e>0?fe(Kn,--$e):0,Wn--,te===10&&(Wn=1,tl--),te}function Ie(){return te=$e<xp?fe(Kn,$e++):0,Wn++,te===10&&(Wn=1,tl++),te}function at(){return fe(Kn,$e)}function Io(){return $e}function Gr(e,t){return Dr(Kn,e,t)}function Fr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sp(e){return tl=Wn=1,xp=nt(Kn=e),$e=0,[]}function kp(e){return Kn="",e}function Lo(e){return wp(Gr($e-1,Wa(e===91?e+2:e===40?e+1:e)))}function Ry(e){for(;(te=at())&&te<33;)Ie();return Fr(e)>2||Fr(te)>3?"":" "}function zy(e,t){for(;--t&&Ie()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Gr(e,Io()+(t<6&&at()==32&&Ie()==32))}function Wa(e){for(;Ie();)switch(te){case e:return $e;case 34:case 39:e!==34&&e!==39&&Wa(te);break;case 40:e===41&&Wa(e);break;case 92:Ie();break}return $e}function Ty(e,t){for(;Ie()&&e+te!==47+10;)if(e+te===42+42&&at()===47)break;return"/*"+Gr(t,$e-1)+"*"+el(e===47?e:Ie())}function Iy(e){for(;!Fr(at());)Ie();return Gr(e,$e)}function Ly(e){return kp(jo("",null,null,null,[""],e=Sp(e),0,[0],e))}function jo(e,t,n,r,o,i,l,a,u){for(var s=0,f=0,d=l,m=0,v=0,g=0,y=1,N=1,p=1,c=0,h="",x=o,k=i,P=r,E=h;N;)switch(g=c,c=Ie()){case 40:if(g!=108&&fe(E,d-1)==58){Va(E+=D(Lo(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Lo(c);break;case 9:case 10:case 13:case 32:E+=Ry(g);break;case 92:E+=zy(Io()-1,7);continue;case 47:switch(at()){case 42:case 47:go(jy(Ty(Ie(),Io()),t,n),u);break;default:E+="/"}break;case 123*y:a[s++]=nt(E)*p;case 125*y:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+f:v>0&&nt(E)-d&&go(v>32?Pc(E+";",r,n,d-1):Pc(D(E," ","")+";",r,n,d-2),u);break;case 59:E+=";";default:if(go(P=Nc(E,t,n,s,f,o,a,h,x=[],k=[],d),i),c===123)if(f===0)jo(E,t,P,P,x,i,d,a,k);else switch(m===99&&fe(E,3)===110?100:m){case 100:case 109:case 115:jo(e,P,P,r&&go(Nc(e,P,P,0,0,o,a,h,o,x=[],d),k),o,k,d,a,r?x:k);break;default:jo(E,P,P,P,[""],k,0,a,k)}}s=f=v=0,y=p=1,h=E="",d=l;break;case 58:d=1+nt(E),v=g;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&$y()==125)continue}switch(E+=el(c),c*y){case 38:p=f>0?1:(E+="\f",-1);break;case 44:a[s++]=(nt(E)-1)*p,p=1;break;case 64:at()===45&&(E+=Lo(Ie())),m=at(),f=d=nt(h=E+=Iy(Io())),c++;break;case 45:g===45&&nt(E)==2&&(y=0)}}return i}function Nc(e,t,n,r,o,i,l,a,u,s,f){for(var d=o-1,m=o===0?i:[""],v=es(m),g=0,y=0,N=0;g<r;++g)for(var p=0,c=Dr(e,d+1,d=Ey(y=l[g])),h=e;p<v;++p)(h=wp(y>0?m[p]+" "+c:D(c,/&\f/g,m[p])))&&(u[N++]=h);return nl(e,t,n,o===0?Zu:a,u,s,f)}function jy(e,t,n){return nl(e,t,n,vp,el(_y()),Dr(e,2,-2),0)}function Pc(e,t,n,r){return nl(e,t,n,Ju,Dr(e,0,r),Dr(e,r+1,-1),r)}function zn(e,t){for(var n="",r=es(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function by(e,t,n,r){switch(e.type){case ky:case Ju:return e.return=e.return||e.value;case vp:return"";case gp:return e.return=e.value+"{"+zn(e.children,r)+"}";case Zu:e.value=e.props.join(",")}return nt(n=zn(e.children,r))?e.return=e.value+"{"+n+"}":""}function My(e){var t=es(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Ay(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Fy=function(t,n,r){for(var o=0,i=0;o=i,i=at(),o===38&&i===12&&(n[r]=1),!Fr(i);)Ie();return Gr(t,$e)},Uy=function(t,n){var r=-1,o=44;do switch(Fr(o)){case 0:o===38&&at()===12&&(n[r]=1),t[r]+=Fy($e-1,n,r);break;case 2:t[r]+=Lo(o);break;case 4:if(o===44){t[++r]=at()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=el(o)}while(o=Ie());return t},Vy=function(t,n){return kp(Uy(Sp(t),n))},Oc=new WeakMap,Wy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Oc.get(r))&&!o){Oc.set(t,!0);for(var i=[],l=Vy(n,i),a=r.props,u=0,s=0;u<l.length;u++)for(var f=0;f<a.length;f++,s++)t.props[s]=i[u]?l[u].replace(/&\f/g,a[f]):a[f]+" "+l[u]}}},By=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ep(e,t){switch(Ny(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+ui+e+ye+e+e;case 6828:case 4268:return A+e+ye+e+e;case 6165:return A+e+ye+"flex-"+e+e;case 5187:return A+e+D(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return A+e+ye+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return A+e+ye+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+ye+D(e,"shrink","negative")+e;case 5292:return A+e+ye+D(e,"basis","preferred-size")+e;case 6060:return A+"box-"+D(e,"-grow","")+A+e+ye+D(e,"grow","positive")+e;case 4554:return A+D(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+ui+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Va(e,"stretch")?Ep(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,nt(e)-3-(~Va(e,"!important")&&10))){case 107:return D(e,":",":"+A)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(fe(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+ye+e+e}return e}var Hy=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ju:t.return=Ep(t.value,t.length);break;case gp:return zn([lr(t,{value:D(t.value,"@","@"+A)})],o);case Zu:if(t.length)return Oy(t.props,function(i){switch(Py(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zn([lr(t,{props:[D(i,/:(read-\w+)/,":"+ui+"$1")]})],o);case"::placeholder":return zn([lr(t,{props:[D(i,/:(plac\w+)/,":"+A+"input-$1")]}),lr(t,{props:[D(i,/:(plac\w+)/,":"+ui+"$1")]}),lr(t,{props:[D(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Qy=[Hy],Yy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var N=y.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Qy,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var N=y.getAttribute("data-emotion").split(" "),p=1;p<N.length;p++)i[N[p]]=!0;a.push(y)});var u,s=[Wy,By];{var f,d=[by,Ay(function(y){f.insert(y)})],m=My(s.concat(o,d)),v=function(N){return zn(Ly(N),m)};u=function(N,p,c,h){f=c,v(N?N+"{"+p.styles+"}":p.styles),h&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new Sy({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:u};return g.sheet.hydrate(a),g},Ky=!0;function Cp(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ts=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Ky===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Np=function(t,n,r){ts(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Xy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Gy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qy=/[A-Z]|^ms/g,Zy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pp=function(t){return t.charCodeAt(1)===45},_c=function(t){return t!=null&&typeof t!="boolean"},Ll=Dy(function(e){return Pp(e)?e:e.replace(qy,"-$&").toLowerCase()}),$c=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zy,function(r,o,i){return rt={name:o,styles:i,next:rt},o})}return Gy[t]!==1&&!Pp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ur(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var o=n.styles+";";return o}return Jy(e,t,n)}case"function":{if(e!==void 0){var i=rt,l=n(e);return rt=i,Ur(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Jy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ur(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":_c(l)&&(r+=Ll(i)+":"+$c(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)_c(l[a])&&(r+=Ll(i)+":"+$c(i,l[a])+";");else{var u=Ur(e,t,l);switch(i){case"animation":case"animationName":{r+=Ll(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var Rc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,ns=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";rt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Ur(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Ur(r,n,t[a]),o&&(i+=l[a]);Rc.lastIndex=0;for(var u="",s;(s=Rc.exec(i))!==null;)u+="-"+s[1];var f=Xy(i)+u;return{name:f,styles:i,next:rt}},e1=function(t){return t()},t1=vs["useInsertionEffect"]?vs["useInsertionEffect"]:!1,Op=t1||e1,rs={}.hasOwnProperty,_p=R.createContext(typeof HTMLElement<"u"?Yy({key:"css"}):null);_p.Provider;var $p=function(t){return R.forwardRef(function(n,r){var o=R.useContext(_p);return t(n,o,r)})},Rp=R.createContext({}),Ba="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",n1=function(t,n){var r={};for(var o in n)rs.call(n,o)&&(r[o]=n[o]);return r[Ba]=t,r},r1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ts(n,r,o),Op(function(){return Np(n,r,o)}),null},o1=$p(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ba],i=[r],l="";typeof e.className=="string"?l=Cp(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=ns(i,void 0,R.useContext(Rp));l+=t.key+"-"+a.name;var u={};for(var s in e)rs.call(e,s)&&s!=="css"&&s!==Ba&&(u[s]=e[s]);return u.ref=n,u.className=l,R.createElement(R.Fragment,null,R.createElement(r1,{cache:t,serialized:a,isStringTag:typeof o=="string"}),R.createElement(o,u))});function zp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ns(t)}var C=function(){var t=zp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},i1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function l1(e,t,n){var r=[],o=Cp(e,r,n);return r.length<2?n:o+t(r)}var a1=function(t){var n=t.cache,r=t.serializedArr;return Op(function(){for(var o=0;o<r.length;o++)Np(n,r[o],!1)}),null},jl=$p(function(e,t){var n=!1,r=[],o=function(){for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];var m=ns(f,t.registered);return r.push(m),ts(t,m,!1),t.key+"-"+m.name},i=function(){for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];return l1(t.registered,o,i1(f))},l={css:o,cx:i,theme:R.useContext(Rp)},a=e.children(l);return n=!0,R.createElement(R.Fragment,null,R.createElement(a1,{cache:t,serializedArr:r}),a)});function Ha(){return Ha=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}function u1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Qa=new Map,wo=new WeakMap;let zc=0,s1;function c1(e){return e?(wo.has(e)||(zc+=1,wo.set(e,zc.toString())),wo.get(e)):"0"}function f1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?c1(e.root):e[t]}`).toString()}function d1(e){let t=f1(e),n=Qa.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var u;const s=a.isIntersecting&&o.some(f=>a.intersectionRatio>=f);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=s),(u=r.get(a.target))==null||u.forEach(f=>{f(s,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Qa.set(t,n)}return n}function Tp(e,t,n={},r=s1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:i,elements:l}=d1(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Qa.delete(o))}}const p1=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Tc(e){return typeof e.children!="function"}class Ic extends R.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()},this.handleChange=(n,r)=>{n&&this.props.triggerOnce&&this.unobserve(),Tc(this.props)||this.setState({inView:n,entry:r}),this.props.onChange&&this.props.onChange(n,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i,fallbackInView:l}=this.props;this._unobserveCb=Tp(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Tc(this.props)){const{inView:i,entry:l}=this.state;return this.props.children({inView:i,entry:l,ref:this.handleNode})}const t=this.props,{children:n,as:r}=t,o=u1(t,p1);return R.createElement(r||"div",Ha({ref:this.handleNode},o),n)}}function Ip({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:u,onChange:s}={}){var f;const[d,m]=R.useState(null),v=R.useRef(),[g,y]=R.useState({inView:!!a,entry:void 0});v.current=s,R.useEffect(()=>{if(l||!d)return;let h;return h=Tp(d,(x,k)=>{y({inView:x,entry:k}),v.current&&v.current(x,k),k.isIntersecting&&i&&h&&(h(),h=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,d,o,r,i,l,n,u,t]);const N=(f=g.entry)==null?void 0:f.target,p=R.useRef();!d&&N&&!i&&!l&&p.current!==N&&(p.current=N,y({inView:!!a,entry:void 0}));const c=[m,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var m1=Hn;function J(e,t,n){return rs.call(t,"css")?w(o1,n1(e,t),n):w(e,t,n)}C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var h1=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,y1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,g1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,os=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x1=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k1=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function O1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=os,iterationCount:o=1}){return zp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function _1(e){return e==null}function $1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Lp(e,t){return n=>n?e():t()}function si(e){return Lp(e,()=>null)}var qr=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=os,triggerOnce:a=!1,className:u,style:s,childClassName:f,childStyle:d,children:m,onVisibilityChange:v}=e,g=R.useMemo(()=>O1({keyframes:l,duration:o}),[o,l]);return _1(m)?null:$1(m)?J(z1,{...e,animationStyles:g,children:String(m)}):Ua.isFragment(m)?J(jp,{...e,animationStyles:g}):J(m1,{children:R.Children.map(m,(y,N)=>{if(!R.isValidElement(y))return null;const p=r+(t?N*o*n:0);switch(y.type){case"ol":case"ul":return J(jl,{children:({cx:c})=>J(y.type,{...y.props,className:c(u,y.props.className),style:Object.assign({},s,y.props.style),children:J(qr,{...e,children:y.props.children})})});case"li":return J(Ic,{threshold:i,triggerOnce:a,onChange:v,children:({inView:c,ref:h})=>J(jl,{children:({cx:x})=>J(y.type,{...y.props,ref:h,className:x(f,y.props.className),css:si(()=>g)(c),style:Object.assign({},d,y.props.style,{animationDelay:p+"ms"})})})});default:return J(Ic,{threshold:i,triggerOnce:a,onChange:v,children:({inView:c,ref:h})=>J("div",{ref:h,className:u,css:si(()=>g)(c),style:Object.assign({},s,{animationDelay:p+"ms"}),children:J(jl,{children:({cx:x})=>J(y.type,{...y.props,className:x(f,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},R1={display:"inline-block",whiteSpace:"pre"},z1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:u,style:s,children:f,onVisibilityChange:d}=e,{ref:m,inView:v}=Ip({triggerOnce:a,threshold:l,onChange:d});return Lp(()=>J("div",{ref:m,className:u,style:Object.assign({},s,R1),children:f.split("").map((g,y)=>J("span",{css:si(()=>t)(v),style:{animationDelay:o+y*i*r+"ms"},children:g},y))}),()=>J(jp,{...e,children:f}))(n)},jp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:u,inView:s}=Ip({triggerOnce:r,threshold:n,onChange:a});return J("div",{ref:u,className:o,css:si(()=>t)(s),style:i,children:l})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var T1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,I1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,L1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,j1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,b1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,M1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,A1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,D1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,F1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,U1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,V1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,W1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,B1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function H1(e,t,n){switch(n){case"bottom-left":return t?I1:y1;case"bottom-right":return t?L1:v1;case"down":return e?t?b1:w1:t?j1:g1;case"left":return e?t?A1:x1:t?M1:os;case"right":return e?t?F1:k1:t?D1:S1;case"top-left":return t?U1:E1;case"top-right":return t?V1:C1;case"up":return e?t?B1:P1:t?W1:N1;default:return t?T1:h1}}var tn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=R.useMemo(()=>H1(t,r,n),[t,n,r]);return J(qr,{keyframes:i,...o})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;var Q1=C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;var Y1=e=>J(qr,{keyframes:Q1,...e});C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var K1=C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,X1=C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,G1=C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,q1=C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Z1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,J1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,ev=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tv=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function nv(e,t){switch(t){case"down":return e?Z1:K1;case"right":return e?ev:G1;case"up":return e?tv:q1;case"left":default:return e?J1:X1}}var nn=e=>{const{direction:t,reverse:n=!1,...r}=e,o=R.useMemo(()=>nv(n,t),[t,n]);return J(qr,{keyframes:o,...r})},rv=C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,ov=C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,iv=C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,lv=C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,av=C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,uv=C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,sv=C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,cv=C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,fv=C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,dv=C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function pv(e,t){switch(t){case"down":return e?sv:ov;case"left":return e?cv:iv;case"right":return e?fv:lv;case"up":return e?dv:av;default:return e?uv:rv}}var bp=e=>{const{direction:t,reverse:n=!1,...r}=e,o=R.useMemo(()=>pv(n,t),[t,n]);return J(qr,{keyframes:o,...r})};function is(e){return w("a",{href:"#pricing",className:"w-fit",children:w("button",{className:`w-36 p-3 bg-button rounded-md my-3 text-xl font-semibold \r
      hover:scale-105 transition-transform duration-500`,children:e.text})})}function mv(){return w(tn,{delay:1e3,triggerOnce:!0,children:z("section",{className:`bg-dark flex flex-col gap-8 sm:gap-14 rounded-3xl px-2 xs:px-10 py-5  \r
    items-center text-center max-w-screen-xl mx-auto mt-20`,id:"about",children:[z("h2",{className:"text-4xl sm:text-5xl font-bold",children:["Transforming Lives, ",w("br",{})," One Prosthetic at a Time."]}),w("p",{className:" xs:text-xl text-shadowed md:w-5/6 xs:leading-8",children:"Discover the Comfort and Functionality of Robotic Prosthetics with Robotica. Our team of experts is dedicated to creating prosthetic limbs that are not only advanced in their technology but are also comfortable and functional. We understand the importance of finding a prosthetic limb that fits your body and your lifestyle, which is why we offer a range of customizable options. From the size and shape of the limb to the level of functionality and control, our prosthetic limbs can be tailored to your unique needs. Join us in experiencing the future of prosthetics and take the first step towards transforming your life today"}),w(is,{text:"Experience"})]})})}function rl({header:e,text:t}){return z("div",{className:"max-w-[700px] mx-auto text-center",children:[w("h2",{className:"text-4xl sm:text-5xl font-bold",children:e}),w("p",{className:"text-secondary font-medium text-xl mt-10",children:t})]})}function hv(){return z("div",{className:"flex gap-5 justify-center",children:[w("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener",children:w("img",{src:"/assets/images/facebook.png",alt:"facebook logo",className:`w-10 h-10 bg-center bg-contain \r
            grayscale hover:grayscale-0 transition-[filter] duration-300`})}),w("a",{href:"https://www.telegram.org",target:"_blank",rel:"noopener",children:w("img",{src:"/assets/images/telegram.png",alt:"telegram logo",className:`w-10 h-10 bg-center bg-contain\r
            grayscale hover:grayscale-0 transition-[filter] duration-300`})}),w("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener",children:w("img",{src:"/assets/images/twitter.png",alt:"twitter logo",className:`w-10 h-10 bg-center bg-contain\r
            grayscale hover:grayscale-0 transition-[filter] duration-300`})})]})}function Ge(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ut(e){return!!e&&!!e[Q]}function gt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Cv}(e)||Array.isArray(e)||!!e[Fc]||!!(!((t=e.constructor)===null||t===void 0)&&t[Fc])||ls(e)||as(e))}function sn(e,t,n){n===void 0&&(n=!1),Xn(e)===0?(n?Object.keys:In)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Xn(e){var t=e[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ls(e)?2:as(e)?3:0}function Tn(e,t){return Xn(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function yv(e,t){return Xn(e)===2?e.get(t):e[t]}function Mp(e,t,n){var r=Xn(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ap(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ls(e){return kv&&e instanceof Map}function as(e){return Ev&&e instanceof Set}function Xt(e){return e.o||e.t}function us(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Fp(e);delete t[Q];for(var n=In(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function ss(e,t){return t===void 0&&(t=!1),cs(e)||Ut(e)||!gt(e)||(Xn(e)>1&&(e.set=e.add=e.clear=e.delete=vv),Object.freeze(e),t&&sn(e,function(n,r){return ss(r,!0)},!0)),e}function vv(){Ge(2)}function cs(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ut(e){var t=Ga[e];return t||Ge(18,e),t}function gv(e,t){Ga[e]||(Ga[e]=t)}function Ya(){return Vr}function bl(e,t){t&&(ut("Patches"),e.u=[],e.s=[],e.v=t)}function ci(e){Ka(e),e.p.forEach(wv),e.p=null}function Ka(e){e===Vr&&(Vr=e.l)}function Lc(e){return Vr={p:[],l:Vr,h:e,m:!0,_:0}}function wv(e){var t=e[Q];t.i===0||t.i===1?t.j():t.g=!0}function Ml(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ut("ES5").S(t,e,r),r?(n[Q].P&&(ci(t),Ge(4)),gt(e)&&(e=fi(t,e),t.l||di(t,e)),t.u&&ut("Patches").M(n[Q].t,e,t.u,t.s)):e=fi(t,n,[]),ci(t),t.u&&t.v(t.u,t.s),e!==Dp?e:void 0}function fi(e,t,n){if(cs(t))return t;var r=t[Q];if(!r)return sn(t,function(a,u){return jc(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return di(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=us(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),sn(i,function(a,u){return jc(e,r,o,a,u,n,l)}),di(e,o,!1),n&&e.u&&ut("Patches").N(r,n,e.u,e.s)}return r.o}function jc(e,t,n,r,o,i,l){if(Ut(o)){var a=fi(e,o,i&&t&&t.i!==3&&!Tn(t.R,r)?i.concat(r):void 0);if(Mp(n,r,a),!Ut(a))return;e.m=!1}else l&&n.add(o);if(gt(o)&&!cs(o)){if(!e.h.D&&e._<1)return;fi(e,o),t&&t.A.l||di(e,o)}}function di(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&ss(t,n)}function Al(e,t){var n=e[Q];return(n?Xt(n):e)[t]}function bc(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Nt(e){e.P||(e.P=!0,e.l&&Nt(e.l))}function Dl(e){e.o||(e.o=us(e.t))}function Xa(e,t,n){var r=ls(t)?ut("MapSet").F(t,n):as(t)?ut("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),a={i:l?1:0,A:i?i.A:Ya(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},u=a,s=Wr;l&&(u=[a],s=fr);var f=Proxy.revocable(u,s),d=f.revoke,m=f.proxy;return a.k=m,a.j=d,m}(t,n):ut("ES5").J(t,n);return(n?n.A:Ya()).p.push(r),r}function xv(e){return Ut(e)||Ge(22,e),function t(n){if(!gt(n))return n;var r,o=n[Q],i=Xn(n);if(o){if(!o.P&&(o.i<4||!ut("ES5").K(o)))return o.t;o.I=!0,r=Mc(n,i),o.I=!1}else r=Mc(n,i);return sn(r,function(l,a){o&&yv(o.t,l)===a||Mp(r,l,t(a))}),i===3?new Set(r):r}(e)}function Mc(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return us(e)}function Sv(){function e(i,l){var a=o[i];return a?a.enumerable=l:o[i]=a={configurable:!0,enumerable:l,get:function(){var u=this[Q];return Wr.get(u,i)},set:function(u){var s=this[Q];Wr.set(s,i,u)}},a}function t(i){for(var l=i.length-1;l>=0;l--){var a=i[l][Q];if(!a.P)switch(a.i){case 5:r(a)&&Nt(a);break;case 4:n(a)&&Nt(a)}}}function n(i){for(var l=i.t,a=i.k,u=In(a),s=u.length-1;s>=0;s--){var f=u[s];if(f!==Q){var d=l[f];if(d===void 0&&!Tn(l,f))return!0;var m=a[f],v=m&&m[Q];if(v?v.t!==d:!Ap(m,d))return!0}}var g=!!l[Q];return u.length!==In(l).length+(g?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var a=Object.getOwnPropertyDescriptor(l,l.length-1);if(a&&!a.get)return!0;for(var u=0;u<l.length;u++)if(!l.hasOwnProperty(u))return!0;return!1}var o={};gv("ES5",{J:function(i,l){var a=Array.isArray(i),u=function(f,d){if(f){for(var m=Array(d.length),v=0;v<d.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var g=Fp(d);delete g[Q];for(var y=In(g),N=0;N<y.length;N++){var p=y[N];g[p]=e(p,f||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(d),g)}(a,i),s={i:a?5:4,A:l?l.A:Ya(),P:!1,I:!1,R:{},l,t:i,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,Q,{value:s,writable:!0}),u},S:function(i,l,a){a?Ut(l)&&l[Q].A===i&&t(i.p):(i.u&&function u(s){if(s&&typeof s=="object"){var f=s[Q];if(f){var d=f.t,m=f.k,v=f.R,g=f.i;if(g===4)sn(m,function(h){h!==Q&&(d[h]!==void 0||Tn(d,h)?v[h]||u(m[h]):(v[h]=!0,Nt(f)))}),sn(d,function(h){m[h]!==void 0||Tn(m,h)||(v[h]=!1,Nt(f))});else if(g===5){if(r(f)&&(Nt(f),v.length=!0),m.length<d.length)for(var y=m.length;y<d.length;y++)v[y]=!1;else for(var N=d.length;N<m.length;N++)v[N]=!0;for(var p=Math.min(m.length,d.length),c=0;c<p;c++)m.hasOwnProperty(c)||(v[c]=!0),v[c]===void 0&&u(m[c])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Ac,Vr,fs=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kv=typeof Map<"u",Ev=typeof Set<"u",Dc=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Dp=fs?Symbol.for("immer-nothing"):((Ac={})["immer-nothing"]=!0,Ac),Fc=fs?Symbol.for("immer-draftable"):"__$immer_draftable",Q=fs?Symbol.for("immer-state"):"__$immer_state",Cv=""+Object.prototype.constructor,In=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Fp=Object.getOwnPropertyDescriptors||function(e){var t={};return In(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ga={},Wr={get:function(e,t){if(t===Q)return e;var n=Xt(e);if(!Tn(n,t))return function(o,i,l){var a,u=bc(i,l);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!gt(r)?r:r===Al(e.t,t)?(Dl(e),e.o[t]=Xa(e.A.h,r,e)):r},has:function(e,t){return t in Xt(e)},ownKeys:function(e){return Reflect.ownKeys(Xt(e))},set:function(e,t,n){var r=bc(Xt(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Al(Xt(e),t),i=o==null?void 0:o[Q];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ap(n,o)&&(n!==void 0||Tn(e.t,t)))return!0;Dl(e),Nt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Al(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Dl(e),Nt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Xt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ge(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ge(12)}},fr={};sn(Wr,function(e,t){fr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),fr.deleteProperty=function(e,t){return fr.set.call(this,e,t,void 0)},fr.set=function(e,t,n){return Wr.set.call(this,e[0],t,n,e[0])};var Nv=function(){function e(n){var r=this;this.O=Dc,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var a=i;i=o;var u=r;return function(y){var N=this;y===void 0&&(y=a);for(var p=arguments.length,c=Array(p>1?p-1:0),h=1;h<p;h++)c[h-1]=arguments[h];return u.produce(y,function(x){var k;return(k=i).call.apply(k,[N,x].concat(c))})}}var s;if(typeof i!="function"&&Ge(6),l!==void 0&&typeof l!="function"&&Ge(7),gt(o)){var f=Lc(r),d=Xa(r,o,void 0),m=!0;try{s=i(d),m=!1}finally{m?ci(f):Ka(f)}return typeof Promise<"u"&&s instanceof Promise?s.then(function(y){return bl(f,l),Ml(y,f)},function(y){throw ci(f),y}):(bl(f,l),Ml(s,f))}if(!o||typeof o!="object"){if((s=i(o))===void 0&&(s=o),s===Dp&&(s=void 0),r.D&&ss(s,!0),l){var v=[],g=[];ut("Patches").M(o,s,v,g),l(v,g)}return s}Ge(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(s){for(var f=arguments.length,d=Array(f>1?f-1:0),m=1;m<f;m++)d[m-1]=arguments[m];return r.produceWithPatches(s,function(v){return o.apply(void 0,[v].concat(d))})};var l,a,u=r.produce(o,i,function(s,f){l=s,a=f});return typeof Promise<"u"&&u instanceof Promise?u.then(function(s){return[s,l,a]}):[u,l,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){gt(n)||Ge(8),Ut(n)&&(n=xv(n));var r=Lc(this),o=Xa(this,n,void 0);return o[Q].C=!0,Ka(r),o},t.finishDraft=function(n,r){var o=n&&n[Q],i=o.A;return bl(i,r),Ml(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Dc&&Ge(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=ut("Patches").$;return Ut(n)?l(n,r):this.produce(n,function(a){return l(a,r)})},e}(),je=new Nv,Up=je.produce;je.produceWithPatches.bind(je);je.setAutoFreeze.bind(je);je.setUseProxies.bind(je);je.applyPatches.bind(je);je.createDraft.bind(je);je.finishDraft.bind(je);function Br(e){return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Br(e)}function Pv(e,t){if(Br(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Br(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ov(e){var t=Pv(e,"string");return Br(t)==="symbol"?t:String(t)}function _v(e,t,n){return t=Ov(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uc(Object(n),!0).forEach(function(r){_v(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ve(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Wc=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fl=function(){return Math.random().toString(36).substring(7).split("").join(".")},pi={INIT:"@@redux/INIT"+Fl(),REPLACE:"@@redux/REPLACE"+Fl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fl()}};function $v(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Vp(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ve(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ve(1));return n(Vp)(e,t)}if(typeof e!="function")throw new Error(ve(2));var o=e,i=t,l=[],a=l,u=!1;function s(){a===l&&(a=l.slice())}function f(){if(u)throw new Error(ve(3));return i}function d(y){if(typeof y!="function")throw new Error(ve(4));if(u)throw new Error(ve(5));var N=!0;return s(),a.push(y),function(){if(N){if(u)throw new Error(ve(6));N=!1,s();var c=a.indexOf(y);a.splice(c,1),l=null}}}function m(y){if(!$v(y))throw new Error(ve(7));if(typeof y.type>"u")throw new Error(ve(8));if(u)throw new Error(ve(9));try{u=!0,i=o(i,y)}finally{u=!1}for(var N=l=a,p=0;p<N.length;p++){var c=N[p];c()}return y}function v(y){if(typeof y!="function")throw new Error(ve(10));o=y,m({type:pi.REPLACE})}function g(){var y,N=d;return y={subscribe:function(c){if(typeof c!="object"||c===null)throw new Error(ve(11));function h(){c.next&&c.next(f())}h();var x=N(h);return{unsubscribe:x}}},y[Wc]=function(){return this},y}return m({type:pi.INIT}),r={dispatch:m,subscribe:d,getState:f,replaceReducer:v},r[Wc]=g,r}function Rv(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:pi.INIT});if(typeof r>"u")throw new Error(ve(12));if(typeof n(void 0,{type:pi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ve(13))})}function zv(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{Rv(n)}catch(a){l=a}return function(u,s){if(u===void 0&&(u={}),l)throw l;for(var f=!1,d={},m=0;m<i.length;m++){var v=i[m],g=n[v],y=u[v],N=g(y,s);if(typeof N>"u")throw s&&s.type,new Error(ve(14));d[v]=N,f=f||N!==y}return f=f||i.length!==Object.keys(u).length,f?d:u}}function mi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function Tv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(ve(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=t.map(function(u){return u(l)});return i=mi.apply(void 0,a)(o.dispatch),Vc(Vc({},o),{},{dispatch:i})}}}function Wp(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(a){return typeof a=="function"?a(o,i,e):l(a)}}};return t}var Bp=Wp();Bp.withExtraArgument=Wp;const Bc=Bp;var Iv=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Lv=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(s){return function(f){return u([s,f])}}function u(s){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=s[0]&2?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,o=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1],i=s;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(s);break}i[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(f){s=[6,f],o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},hi=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},jv=Object.defineProperty,bv=Object.defineProperties,Mv=Object.getOwnPropertyDescriptors,Hc=Object.getOwnPropertySymbols,Av=Object.prototype.hasOwnProperty,Dv=Object.prototype.propertyIsEnumerable,Qc=function(e,t,n){return t in e?jv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},bt=function(e,t){for(var n in t||(t={}))Av.call(t,n)&&Qc(e,n,t[n]);if(Hc)for(var r=0,o=Hc(t);r<o.length;r++){var n=o[r];Dv.call(t,n)&&Qc(e,n,t[n])}return e},Ul=function(e,t){return bv(e,Mv(t))},Fv=function(e,t,n){return new Promise(function(r,o){var i=function(u){try{a(n.next(u))}catch(s){o(s)}},l=function(u){try{a(n.throw(u))}catch(s){o(s)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(i,l)};a((n=n.apply(e,t)).next())})},Uv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?mi:mi.apply(null,arguments)};function Vv(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Wv=function(e){Iv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,hi([void 0],n[0].concat(this)))):new(t.bind.apply(t,hi([void 0],n.concat(this))))},t}(Array);function qa(e){return gt(e)?Up(e,function(){}):e}function Bv(e){return typeof e=="boolean"}function Hv(){return function(t){return Qv(t)}}function Qv(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Wv;return n&&(Bv(n)?r.push(Bc):r.push(Bc.withExtraArgument(n.extraArgument))),r}var Yv=!0;function Kv(e){var t=Hv(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,a=n.devTools,u=a===void 0?!0:a,s=n.preloadedState,f=s===void 0?void 0:s,d=n.enhancers,m=d===void 0?void 0:d,v;if(typeof o=="function")v=o;else if(Vv(o))v=zv(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=l;typeof g=="function"&&(g=g(t));var y=Tv.apply(void 0,g),N=mi;u&&(N=Uv(bt({trace:!Yv},typeof u=="object"&&u)));var p=[y];Array.isArray(m)?p=hi([y],m):typeof m=="function"&&(p=m(p));var c=N.apply(void 0,p);return Vp(v,f,c)}function Mt(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return bt(bt({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Hp(e){var t={},n=[],r,o={addCase:function(i,l){var a=typeof i=="string"?i:i.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function Xv(e){return typeof e=="function"}function Gv(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Hp(t):[t,n,r],i=o[0],l=o[1],a=o[2],u;if(Xv(e))u=function(){return qa(e())};else{var s=qa(e);u=function(){return s}}function f(d,m){d===void 0&&(d=u());var v=hi([i[m.type]],l.filter(function(g){var y=g.matcher;return y(m)}).map(function(g){var y=g.reducer;return y}));return v.filter(function(g){return!!g}).length===0&&(v=[a]),v.reduce(function(g,y){if(y)if(Ut(g)){var N=g,p=y(N,m);return p===void 0?g:p}else{if(gt(g))return Up(g,function(c){return y(c,m)});var p=y(g,m);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},d)}return f.getInitialState=u,f}function qv(e,t){return e+"/"+t}function Qp(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:qa(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},a={};o.forEach(function(f){var d=r[f],m=qv(t,f),v,g;"reducer"in d?(v=d.reducer,g=d.prepare):v=d,i[f]=v,l[m]=v,a[f]=g?Mt(m,g):Mt(m)});function u(){var f=typeof e.extraReducers=="function"?Hp(e.extraReducers):[e.extraReducers],d=f[0],m=d===void 0?{}:d,v=f[1],g=v===void 0?[]:v,y=f[2],N=y===void 0?void 0:y,p=bt(bt({},m),l);return Gv(n,function(c){for(var h in p)c.addCase(h,p[h]);for(var x=0,k=g;x<k.length;x++){var P=k[x];c.addMatcher(P.matcher,P.reducer)}N&&c.addDefaultCase(N)})}var s;return{name:t,reducer:function(f,d){return s||(s=u()),s(f,d)},actions:a,caseReducers:i,getInitialState:function(){return s||(s=u()),s.getInitialState()}}}var Zv="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Jv=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Zv[Math.random()*64|0];return t},eg=["name","message","stack","code"],Vl=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Yc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),tg=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=eg;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Mt(t+"/fulfilled",function(s,f,d,m){return{payload:s,meta:Ul(bt({},m||{}),{arg:d,requestId:f,requestStatus:"fulfilled"})}}),i=Mt(t+"/pending",function(s,f,d){return{payload:void 0,meta:Ul(bt({},d||{}),{arg:f,requestId:s,requestStatus:"pending"})}}),l=Mt(t+"/rejected",function(s,f,d,m,v){return{payload:m,error:(r&&r.serializeError||tg)(s||"Rejected"),meta:Ul(bt({},v||{}),{arg:d,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(s==null?void 0:s.name)==="AbortError",condition:(s==null?void 0:s.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function s(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return s.prototype.abort=function(){},s}();function u(s){return function(f,d,m){var v=r!=null&&r.idGenerator?r.idGenerator(s):Jv(),g=new a,y;function N(c){y=c,g.abort()}var p=function(){return Fv(this,null,function(){var c,h,x,k,P,E,$;return Lv(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),k=(c=r==null?void 0:r.condition)==null?void 0:c.call(r,s,{getState:d,extra:m}),rg(k)?[4,k]:[3,2];case 1:k=M.sent(),M.label=2;case 2:if(k===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(T,se){return g.signal.addEventListener("abort",function(){return se({name:"AbortError",message:y||"Aborted"})})}),f(i(v,s,(h=r==null?void 0:r.getPendingMeta)==null?void 0:h.call(r,{requestId:v,arg:s},{getState:d,extra:m}))),[4,Promise.race([P,Promise.resolve(n(s,{dispatch:f,getState:d,extra:m,requestId:v,signal:g.signal,abort:N,rejectWithValue:function(T,se){return new Vl(T,se)},fulfillWithValue:function(T,se){return new Yc(T,se)}})).then(function(T){if(T instanceof Vl)throw T;return T instanceof Yc?o(T.payload,v,s,T.meta):o(T,v,s)})])];case 3:return x=M.sent(),[3,5];case 4:return E=M.sent(),x=E instanceof Vl?l(null,v,s,E.payload,E.meta):l(E,v,s),[3,5];case 5:return $=r&&!r.dispatchConditionRejection&&l.match(x)&&x.meta.condition,$||f(x),[2,x]}})})}();return Object.assign(p,{abort:N,requestId:v,arg:s,unwrap:function(){return p.then(ng)}})}}return Object.assign(u,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function ng(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function rg(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ds="listenerMiddleware";Mt(ds+"/add");Mt(ds+"/removeAll");Mt(ds+"/remove");var Kc;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Sv();const Yp=Qp({name:"alert",initialState:{isVisible:!1},reducers:{showAlert(e){e.isVisible=!0},hideAlert(e){e.isVisible=!1}}}),{showAlert:Kp,hideAlert:Xp}=Yp.actions,og=Yp.reducer;function ig(){const[e,t]=R.useState({name:"",email:"",question:""}),n={name:e.name.length>0,email:e.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),question:e.question.length>5},r=n.name&&n.question&&n.email,o="px-3 py-2 mt-2 rounded-lg bg-transparent border-opacity-60 focus:outline-none",i=Ji();return z("div",{className:" mt-48 flex flex-col md:flex-row justify-between lg:justify-center lg:gap-20",id:"contact",children:[z("div",{className:"md:w-[40%] flex flex-col gap-14 mt-10",children:[w(nn,{direction:"up",delay:1e3,triggerOnce:!0,children:w(rl,{header:"Any questions left?",text:`Feel free to contact us anytime. Our specialist are available 24/7 and would be glad to answer \r
          all your questions and provide any information you need. Fill the form, and we will contact you ASAP`})}),w(tn,{delay:1e3,triggerOnce:!0,children:w(hv,{})})]}),w(Y1,{triggerOnce:!0,delay:1e3,duration:1500,className:"md:w-[48%] max-w-[500px] mt-10",children:z("form",{className:" bg-dark p-4 lg:p-8 rounded-xl flex flex-col text-xl gap-4 mt-10 md:mt-0 ",children:[z("label",{className:"flex flex-col gap-1 ",children:["Name",w("input",{required:!0,value:e.name,type:"text",placeholder:"Enter name",onInput:l=>{l.target.value.match(/^([a-z|а-я|\s])*$/i)&&t({...e,name:l.target.value})},className:`${o} ${n.name?"border border-green-600":"border border-secondary"}`})]}),z("label",{className:"flex flex-col gap-1",children:["Email",w("input",{required:!0,value:e.email,type:"email",placeholder:"yourname@mail.com",onInput:l=>{t({...e,email:l.target.value})},className:`${o} ${n.email?"border border-green-600":"border border-secondary"}`})]}),z("label",{className:"flex flex-col gap-1",children:["Question",w("textarea",{required:!0,value:e.question,placeholder:"Enter question",onInput:l=>{t({...e,question:l.target.value})},className:`px-3 py-2 text- rounded-lg bg-transparent border-opacity-60 mt-2 h-36
             resize-none focus:outline-none ${n.question?"border border-green-600":"border border-secondary"}`})]}),w("button",{className:`w-36 p-2 bg-button font-semibold rounded-md mt-3 block m-auto 
          hover:scale-105 transition-transform duration-500 ${r?"":" pointer-events-none opacity-50"}`,onClick:l=>{l.preventDefault(),t({name:"",question:"",email:""}),i(Kp()),setTimeout(()=>{i(Xp())},3e3)},children:"Submit"})]})})]})}function lg(){return z("footer",{className:"py-14",children:[w("figure",{className:"w-full h-1 bg-dark my-6"}),z("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0",children:[z("div",{className:"flex flex-col lg:flex-row gap-5 items-center",children:[w("img",{src:"/assets/images/logo.png",className:"w-20 rounded-md bg-contain bg-center"}),w("p",{className:" text-3xl pb-1 font-semibold tracking-wider",children:"Robotica"})]}),z("p",{className:" text-base text-shadowed text-center mx-3",children:["2077. All rights reserved. ",w("br",{}),"Robotica LTC, Japan, Tokyo, Kagaku-teki 1234",w("br",{}),"+ 1 (2345) 1932 020"]}),z("div",{className:"flex  items-center justify-center gap-3 h-10 mt-10 sm:mt-0",children:[z("div",{className:"flex items-center border border-secondary border-opacity-60 h-10 rounded-md",children:[w("div",{className:" bg-mail w-7 h-5 bg-center bg-contain bg-no-repeat ml-1"}),w("input",{type:"email",placeholder:"Enter email",className:"px-3 py-2 rounded-lg bg-transparent focus:outline-none"})]}),w("button",{className:`max-w-24 p-2 bg-button font-semibold block rounded-md\r
          hover:scale-105 transition-transform duration-500 `,children:"Subscribe"})]})]})]})}function Gp(){const e="hover:opacity-60 transition-opacity";return z(Hn,{children:[w("a",{href:"#about",className:e,children:"About"}),w("a",{href:"#feedback",className:e,children:"Feedback"}),w("a",{href:"#advantages",className:e,children:"Advantages"}),w("a",{href:"#mission",className:e,children:"Mission"}),w("a",{href:"#pricing",className:e,children:"Pricing"}),w("a",{href:"#contact",className:e,children:"Contact"})]})}function ag(e){return document.body.style.overflow=`${e.isOpened?"hidden":""}`,w("div",{className:`${e.isOpened?"":"opacity-0 pointer-events-none"} w-full h-full fixed top-0 right-0 bg-modal grid place-content-center duration-700 transition-opacity z-40`,children:w("div",{className:` transition-transform duration-500 w-1/2 bg-gray-600 z-50 h-screen absolute -right-[50%] top-0 opacity-95 
        ${e.isOpened?" translate-x-[-100%]":""}`,children:w("nav",{className:"text-white flex flex-col gap-16 items-center mt-40 text-xl",onClick:t=>{t.target.href&&e.setIsOpened(!1)},children:w(Gp,{})})})})}function ug(e){const t="w-10 h-[6px] bg-secondary rounded-lg transition-transform  duration-1000  ease-in-out";return w("button",{onClick:()=>e.setIsOpened(!e.isOpened),className:"z-50",children:z("div",{className:"flex flex-col gap-y-2",children:[w("figure",{className:t+`${e.isOpened?" rotate-[225deg] translate-y-3":""}`}),w("figure",{className:t+`${e.isOpened?" transition-opacity  rotate-180 opacity-0":""}`}),w("figure",{className:t+`${e.isOpened?" -rotate-[225deg] -translate-y-4":""}`})]})})}function sg(){const[e,t]=R.useState(!1);return z(Hn,{children:[w(ug,{isOpened:e,setIsOpened:t}),w(ag,{isOpened:e,setIsOpened:t})]})}function cg(){const e=window.innerWidth<1090;return Ji(),z("header",{className:"flex justify-between w-full py-10 items-center gap-6",children:[z("div",{className:"flex gap-5 items-center h-10",children:[w("img",{src:"/assets/images/logo.png",className:"w-20 rounded-md bg-contain bg-center"}),w("p",{className:" text-xl md:text-3xl pb-1 font-semibold tracking-wider",children:"Robotica"})]}),e?null:w("nav",{className:"text-link text-xl flex gap-7 items-center",children:w(Gp,{})}),e?w(sg,{}):w(is,{text:"Discover"})]})}function fg(){const e="w-36 h-36 sm:w-48 sm:h-48 transition-transform duration-500 rounded-4xl object-contain",[t,n]=R.useState(0);return z("section",{className:"my-12 mb-20",children:[w(tn,{duration:2e3,triggerOnce:!0,children:z("div",{className:"flex h-1/5",children:[w(nn,{duration:3e3,className:"w-1/2",triggerOnce:!0,children:w("img",{src:"/assets/images/hand-2.png",className:"-translate-x-[15px] xs:-translate-x-[60px] "})}),w(nn,{duration:3e3,className:"w-1/2 ",direction:"right",triggerOnce:!0,children:w("img",{src:"/assets/images/hand.png",className:" translate-x-[15px] xs:translate-x-[50px] ml-0 mr-auto w-full"})})]})}),z("h1",{className:"font-bold text-5xl md:text-7xl text-left",children:["The"," ",w(tn,{cascade:!0,duration:1e3,damping:.2,triggerOnce:!0,children:"Revolution."})," ",w("br",{}),w(nn,{duration:2e3,triggerOnce:!0,fraction:1,children:"Experience the Future of Prosthetics."})]}),z(tn,{duration:1500,cascade:!0,triggerOnce:!0,fraction:1,children:[w("p",{className:" text-secondary text-left max-w-[540px] text-xl my-10",children:"Welcome to Robotica, where we are committed to providing cutting-edge robotic prosthetics that are designed to improve the mobility and independence of our customers."}),z("div",{className:"sm:ml-0 sm:mr-auto w-fit flex gap-6 flex-col sm:flex-row mb-16 sm:mb-32 text-xl font-semibold",children:[w("a",{href:"#pricing",children:w("button",{className:"w-60 bg-button v rounded-md py-[9.25px] block hover:scale-105 transition-transform duration-500",children:"Pricing"})}),w("a",{href:"#contact",children:w("button",{className:`w-60 bg-transparent rounded-md py-2 border border-secondary block \r
            hover:scale-105 transition-transform duration-500`,children:"More information"})})]})]}),z("div",{className:"flex flex-wrap justify-center lg:justify-between items-end px-4 gap-14  max-w-screen-xl",children:[w("img",{className:e+`${t==1?" scale-150":""}`,onMouseEnter:()=>{n(1)},src:"/assets/images//hero-1.png"}),w("img",{src:"/assets/images/hero-2.png",className:e+`${t==2?" scale-150":""}`,onMouseEnter:()=>{n(2)}}),w("img",{src:"/assets/images/hero-3.png",className:e+`${t==3?" scale-150":""}`,onMouseEnter:()=>{n(3)}}),w("img",{src:"/assets/images/hero-4.png",className:e+`${t==4?" scale-150":""}`,onMouseEnter:()=>{n(4)}})]})]})}const qp=Qp({name:"modal",initialState:{isOpened:!1,hideClass:"opacity-0 pointer-events-none",chosenPackage:"",chosenPrice:0},reducers:{closeModal(e){e.isOpened=!1},openModal(e){e.isOpened=!0},setPrice(e,t){e.chosenPrice=t.payload.price},setPackage(e,t){e.chosenPackage=t.payload.name}}}),{closeModal:Xc,openModal:dg,setPrice:pg,setPackage:mg}=qp.actions,hg=qp.reducer;function yg(){const e=R.useRef(null),t=R.useRef(null),n=fp(d=>d.modal),r=Ji(),[o,i]=R.useState({name:"",phone:"",email:""}),l={name:o.name.length>0,email:o.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),phone:o.phone.length>10},a=l.name&&l.phone&&l.email,u="px-3 py-2 rounded-lg bg-transparent border-opacity-60 focus:outline-none",s="flex flex-col gap-1";return document.body.style.overflow=`${n.isOpened?"hidden":""}`,w("div",{ref:e,className:` w-full h-full fixed top-0 right-0 bg-modal grid place-content-center
       duration-700 transition-opacity z-40 ${n.isOpened?"":n.hideClass}`,onMouseDown:d=>{d.stopPropagation(),(d.target==e.current||d.target==t.current)&&(r(Xc()),f())},children:z("form",{className:" bg-dark p-8 rounded-xl flex flex-col text-xl gap-5 relative xs:w-[450px]",children:[w("button",{ref:t,className:`right-0 top-0 absolute -translate-y-[100%] sm:translate-x-[100%] bg-cross w-10 h-10 bg-contain bg-center\r
          hover:opacity-60 transition-opacity`,onClick:d=>d.preventDefault()}),z("p",{className:"m-auto text-4xl font-bold text-center",children:[n.chosenPackage," package"]}),w("p",{className:"m-auto  text-lg text-shadowed text-center",children:`Your price is $${n.chosenPrice}. 
          To complete your purchase, fill out the form below and our team will 
          process your order promptly. `}),z("label",{className:s,children:["Name",w("input",{minLength:1,maxLength:20,required:!0,type:"text",placeholder:"Enter name",className:`${u} ${l.name?"border border-green-600":"border border-secondary"}`,value:o.name,onInput:d=>{d.target.value.match(/^([a-z|а-я|\s])*$/i)&&i({...o,name:d.target.value})}})]}),z("label",{className:s,children:["Email",w("input",{value:o.email,minLength:6,maxLength:25,required:!0,type:"email",placeholder:"Enter email",className:`${u} ${l.email?"border border-green-600":"border border-secondary"}`,onInput:d=>{i({...o,email:d.target.value})}})]}),z("label",{className:s,children:["Phone number",z("div",{className:`flex items-center border-opacity-60 rounded-md ${l.phone?"border border-green-600":"border border-secondary"}`,children:[w("p",{className:" font-bold text-2xl pb-[6px] pl-2",children:"+"}),w("input",{required:!0,minLength:11,maxLength:15,type:"tel",value:o.phone,placeholder:"Enter phone",className:u,onInput:d=>{o.phone.length==1&&i({...o,phone:""}),d.target.value.match(/^[+{1}1-9]\d*$/)&&i({...o,phone:d.target.value})}})]})]}),w("button",{className:`w-36 p-2 bg-button rounded-md block m-auto ${a?"":" pointer-events-none opacity-50"}`,onClick:d=>{d.preventDefault(),r(Xc()),r(Kp()),setTimeout(()=>{r(Xp())},3e3),f()},children:"Submit"})]})});function f(){i({name:"",phone:"",email:""})}}function Gc({name:e,included:t,price:n,totalPrice:r,setTotalPrice:o}){const i=R.useRef(null),[l,a]=R.useState(!1);return z("div",{className:"flex items-center justify-center ",children:[t?w("div",{className:"ml-0 mr-4 w-8 h-8  shrink-0 bg-checkGreen bg-contain bg-center rounded-md"}):w("input",{ref:i,checked:l,type:"checkbox",className:`ml-0 mr-4 w-8 h-8 appearance-none relative checked:bg-checkBlue shrink-0 bg-plus bg-contain bg-center\r
          before:absolute before:top-0 before:right-0 before:w-8 before:h-8 before:rounded-md before:transition-colors cursor-pointer\r
         `,onChange:()=>{var u;(u=i.current)!=null&&u.checked?o(r+n):o(r-n),a(!l)}}),w("p",{className:"ml-0 mr-auto text-sm ",children:e}),z("span",{className:"ml-3 text-right",children:[n?"$"+n:""," "]})]})}function bo({pack:e}){const t=Ji(),[n,r]=R.useState(e.initialPrice);return z("div",{className:`w-[320px]  xs:w-[420px] lg:w-[300px] xl:w-[340px] px-6 py-4  bg-white rounded-3xl flex flex-col text-black shrink-0\r
    shadow-2xl hover:shadow-sky-500 transition-all hover:scale-105 duration-500`,children:[w("h3",{className:"text-xl font-bold",children:e.name}),z("p",{className:"text-4xl font-bold mt-7",children:["$",e.initialPrice]}),w("p",{className:"text-shadowed font-semibold text-lg mt-6",children:e.description}),z("form",{className:"flex flex-col gap-4 mt-6 text-black font-semibold h-[350px]",children:[z(Hn,{children:[e.includedOptions.map(o=>w(Gc,{name:o,included:!0},o)),e.extraOptions.map(o=>w(Gc,{name:o.name,included:!1,price:o.price,totalPrice:n,setTotalPrice:r},o.name))]}),z("p",{className:"mt-auto mb-0 text-xl",children:["Total: ",`$ ${n}`]}),w("button",{className:` w-full bg-button py-2 rounded-lg text-white mt-3 mb-0 block \r
          hover:bg-blue-600 transition-colors duration-500`,onClick:o=>{o.preventDefault(),t(pg({price:n})),t(mg({name:e.name})),t(dg())},children:"BUY"})]})]})}const vg={name:"Basic",initialPrice:1199,description:"Affordable and Reliable",includedOptions:["Basic robotic prosthetic limb"],extraOptions:[{name:"One-year warranty",price:110}]},gg={name:"Advanced",initialPrice:3199,description:"Control and Flexibility",includedOptions:["Advanced robotic prosthetic limb","Free maintenance and repairs for the first year"],extraOptions:[{name:"AI modules for greater control and precision",price:309},{name:"Two-year warranty",price:169}]},wg={name:"Elite",initialPrice:9999,description:"The Ultimate Experience",includedOptions:["Elite robotic prosthetic limb with advanced AI modules","Advanced control and functionality","Free maintenance and repairs for the first two years"],extraOptions:[{name:"Dedicated customer support for the life of the prosthetic",price:999}]},Ln={basic:vg,advanced:gg,elite:wg};function xg(){return z("section",{className:"pt-20",id:"pricing",children:[w(nn,{duration:2e3,direction:"right",triggerOnce:!0,children:w(rl,{header:"Affordable Robotic Prosthetics for Everyone",text:`We believe that everyone should have access to the latest technology in prosthetics. \r
        That's why we offer a range of affordable options that are designed to fit a variety of budgets`})}),w("div",{className:"flex lg:justify-between mb-40 mt-20 xl:justify-center xl:gap-20",children:z(bp,{cascade:!0,duration:1200,className:"mb-20",triggerOnce:!0,children:[w(bo,{pack:Ln.basic}),w(bo,{pack:Ln.advanced}),w(bo,{pack:Ln.elite})]})})]})}function Sg({sliderPosition:e,setSliderPosition:t}){return z("div",{className:` w-72 py-3 flex gap-6  bg-white text-black rounded-3xl justify-center relative
      before:w-[33%] before:h-[88%] before:bg-black before:absolute before:left-[3%] before:bottom-[5%] before:rounded-3xl
       before:z-0 before:transition-transform cursor-pointer ${n(e)} 
       }`,children:[w("p",{className:`z-10  transition-colors duration-300 ${e==1?"text-white":""}`,onClick:()=>{t(1)},children:"Option A"}),w("p",{className:`z-10 transition-colors duration-300  ${e==2?"text-white":""}`,onClick:()=>{t(2)},children:"Option B"}),w("p",{className:`z-10 transition-colors duration-300  ${e==3?"text-white":""}`,onClick:()=>{t(3)},children:"Option C"})]});function n(r){switch(r){case 1:return"";case 2:return"before:translate-x-[94%]";case 3:return"before:translate-x-[186%]"}}}const kg={1:Ln.basic,2:Ln.advanced,3:Ln.elite};function Eg(){const[e,t]=R.useState(1);return z("section",{className:"flex flex-col gap-12 items-center mt-20",id:"pricing",children:[w(rl,{header:"Affordable Robotic Prosthetics for Everyone",text:`We believe that everyone should have access to the latest technology in prosthetics. \r
        That's why we offer a range of affordable options that are designed to fit a variety of budgets`}),w(Sg,{sliderPosition:e,setSliderPosition:t}),w(bo,{pack:kg[e]})]})}function Cg(){return z(Hn,{children:[w("figure",{className:"w-full h-1 bg-dark mb-2 sm:mb-6 mt-12"}),z("section",{className:"flex flex-col sm:flex-row items-center  justify-between sm:gap-[8%]",id:"mission",children:[w(nn,{duration:2e3,delay:1e3,triggerOnce:!0,className:" w-3/5",children:z("div",{className:"md:leading-10",children:[w("p",{className:"font-semibold text-sm sm:text-base md:text-xl lg:text-3xl",children:"As a robot myself, I understand the value and potential of technology, and I am committed to leading our team in creating innovative solutions that are accessible and affordable for everyone"}),w("p",{className:"font-semibold text-sm md:text-base text-shadowed mt-3 md:mt-7",children:"Aizek Roboterri, CEO of Robotica"})]})}),w(tn,{className:"w-2/5",delay:1e3,triggerOnce:!0,children:w("img",{src:"/assets/images/robot.png",className:"w-full mt-5"})})]}),w("figure",{className:"w-full h-1 bg-dark"})]})}function Wl({imgSrc:e,imgCaption:t,header:n,text:r}){return z("div",{className:"flex flex-col w-[350px] gap-4",children:[w("img",{className:"h-[200px] mb-4 rounded-4xl bg-white bg-center object-cover",src:e,alt:t}),w("p",{className:"font-semibold text-shadowed",children:t}),w("h3",{className:"text-2xl sm:text-3xl font-bold",children:n}),w("p",{className:"text-secondary text-xl",children:r})]})}function Ng(){return z("section",{className:"mt-32",id:"advantages",children:[w(nn,{duration:1500,delay:1e3,triggerOnce:!0,children:w(rl,{header:"Experience the Future of Mobility",text:`Robotica is dedicated to transforming the lives of individuals with our advanced and customizable robotic prosthetics. \r
        With our commitment to quality and innovation, we have become a trusted leader in the industry`})}),w("div",{className:"flex gap-10 flex-wrap justify-center mt-12 sm:mt-24 mb-10",children:z(bp,{duration:1500,delay:700,cascade:!0,triggerOnce:!0,children:[w(Wl,{imgSrc:"/assets/images/factory.jpg",imgCaption:"Factories in Tokyo",header:"Quality control",text:`At Robotica, we take great pride in the quality of our robotic prostheses. \r
          Our products are made using the latest technology and materials, ensuring durability and comfort for our customers. \r
          We use rigorous testing and quality control measures to ensure that each product meets our high standards.`}),w(Wl,{imgSrc:"/assets/images/ai.jpg",imgCaption:"The best AI",header:"AI modules",text:`Our robotic prostheses are equipped with AI modules, which can learn and adapt to the user's movements over time, \r
          providing a more natural and intuitive experience. With our AI modules, you can experience a level of control \r
          and functionality that was previously unavailable in traditional prostheses.`}),w(Wl,{imgSrc:"/assets/images/customization.jpg",imgCaption:"The entire universe of options",header:"Customization",text:`We understand that every individual's needs and preferences are unique. \r
          That's why we offer a range of customizable options for our robotic prostheses. \r
          From the size and shape of the limb to the level of functionality and control, we can tailor our products to match your\r
           specific requirements. `})]})}),w("div",{className:"mx-auto w-fit",children:w(is,{text:"Checkout"})})]})}const Pg={text:"I was blown away by the quality of the prosthetic limb I received from Robotica. It's comfortable to wear and has held up to all of my daily activities. The customer service was exceptional and they helped guide me through the entire process. I couldn't be happier with my purchase.",name:"Johanna Henson",link:"@jhnhnsn"},Og={text:"I can't thank Robotica enough for the amazing robotic prosthetic limb they created for me. The customization options were perfect for my needs and the AI module has greatly improved my control and mobility. I highly recommend this company.",name:"Ethan Burton",link:"@3_burt0n"},_g={text:"As an athlete, finding a prosthetic limb that could keep up with my level of activity was essential. Robotica delivered exactly what I needed with their sports prosthetic limb. The range of motion and control is incredible and it's helped me to excel in my sport. Thank you, Robotica!",name:"Elijah Wilmer",link:"@wilmer92"},$g={first:Pg,second:Og,third:_g},xo=$g;function Rg(){const[e,t]=R.useState(xo.second),n=R.useRef(null),r=R.useRef(null),o=R.useRef(null),i=R.useRef(null),[l,a]=R.useState(o);return w(tn,{delay:700,triggerOnce:!0,children:z("section",{className:"mt-16 sm:mt-48 flex flex-col items-center gap-16",id:"feedback",children:[z("div",{className:"flex gap-2 justify-center items-center h-32",children:[w("img",{src:"/assets/images/face-1.png",ref:r,className:"w-16 h-16 rounded-full transition-all duration-1000 cursor-pointer opacity-50",onClick:()=>{u(r),s(xo.first)}}),w("img",{ref:o,src:"/assets/images/face-2.png",className:"w-32 h-32 rounded-full transition-all duration-1000 cursor-pointer",onClick:()=>{s(xo.second),u(o)}}),w("img",{ref:i,src:"/assets/images/face-3.png",className:"w-16 h-16 rounded-full transition-all duration-1000 cursor-pointer opacity-50",onClick:()=>{s(xo.third),u(i)}})]}),z("div",{ref:n,className:" transition-opacity duration-700",children:[w("p",{className:"text-xl md:text-3xl font-semibold max-w-[820px] text-center",children:e.text}),z("div",{className:"flex flex-col mt-4 gap-2 items-center",children:[w("p",{className:"text-xl",children:e.name}),w("p",{className:"text-secondary",children:e.link})]})]})]})});function u(f){var d,m,v,g,y,N,p,c,h,x,k,P,E,$,M;if(f!=l){switch((d=l.current)==null||d.classList.remove("w-32","h-32"),(m=l.current)==null||m.classList.add("w-16","h-16","opacity-50"),(v=f.current)==null||v.classList.remove("w-16","h-16","opacity-50"),(g=f.current)==null||g.classList.add("w-32","h-32"),l){case r:(y=l.current)==null||y.classList.remove("translate-x-[calc(50%+8px)]"),(N=o.current)==null||N.classList.remove("-translate-x-[calc(200%+8px)]"),f==i&&((p=f.current)==null||p.classList.add("-translate-x-[calc(50%+8px)]"));case o:{f==r?((c=r.current)==null||c.classList.add("translate-x-[calc(50%+8px)]"),(h=l.current)==null||h.classList.add("-translate-x-[calc(200%+8px)]")):f==i&&((x=i.current)==null||x.classList.add("-translate-x-[calc(50%+8px)]"),(k=o.current)==null||k.classList.add("translate-x-[calc(200%+8px)]"));break}case i:{(P=o.current)==null||P.classList.remove("translate-x-[calc(200%+8px)]"),(E=l.current)==null||E.classList.remove("-translate-x-[calc(50%+8px)]"),f==r&&(($=r.current)==null||$.classList.add("translate-x-[calc(50%+8px)]"),(M=o.current)==null||M.classList.add("-translate-x-[calc(200%+8px)]"));break}}a(f)}}function s(f){var d;(d=n.current)==null||d.classList.add("opacity-0"),setTimeout(()=>{var m;t(f),(m=n.current)==null||m.classList.remove("opacity-0")},800)}}function zg(){return z(Hn,{children:[w(cg,{}),w(fg,{}),w(mv,{}),w(Rg,{}),w(Ng,{}),w(Cg,{}),window.innerWidth>1024?w(xg,{}):w(Eg,{}),w(ig,{}),w(lg,{}),w(yg,{}),w(gy,{})]})}const Tg=Kv({reducer:{modal:hg,alert:og}});Bl.createRoot(document.getElementById("root")).render(w(nu.StrictMode,{children:w(hy,{store:Tg,children:w(zg,{})})}));
