(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const y of h)if(y.type==="childList")for(const N of y.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&c(N)}).observe(document,{childList:!0,subtree:!0});function l(h){const y={};return h.integrity&&(y.integrity=h.integrity),h.referrerPolicy&&(y.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?y.credentials="include":h.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function c(h){if(h.ep)return;h.ep=!0;const y=l(h);fetch(h.href,y)}})();function Sm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Js={exports:{}},Xn={},qs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function jm(){if(hd)return ne;hd=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),F=Symbol.iterator;function B(g){return g===null||typeof g!="object"?null:(g=F&&g[F]||g["@@iterator"],typeof g=="function"?g:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,Y={};function K(g,b,G){this.props=g,this.context=b,this.refs=Y,this.updater=G||q}K.prototype.isReactComponent={},K.prototype.setState=function(g,b){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,b,"setState")},K.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function me(){}me.prototype=K.prototype;function le(g,b,G){this.props=g,this.context=b,this.refs=Y,this.updater=G||q}var ae=le.prototype=new me;ae.constructor=le,ie(ae,K.prototype),ae.isPureReactComponent=!0;var te=Array.isArray,pe=Object.prototype.hasOwnProperty,Q={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Te(g,b,G){var X,oe={},re=null,fe=null;if(b!=null)for(X in b.ref!==void 0&&(fe=b.ref),b.key!==void 0&&(re=""+b.key),b)pe.call(b,X)&&!H.hasOwnProperty(X)&&(oe[X]=b[X]);var se=arguments.length-2;if(se===1)oe.children=G;else if(1<se){for(var ue=Array(se),Ae=0;Ae<se;Ae++)ue[Ae]=arguments[Ae+2];oe.children=ue}if(g&&g.defaultProps)for(X in se=g.defaultProps,se)oe[X]===void 0&&(oe[X]=se[X]);return{$$typeof:o,type:g,key:re,ref:fe,props:oe,_owner:Q.current}}function nt(g,b){return{$$typeof:o,type:g.type,key:b,ref:g.ref,props:g.props,_owner:g._owner}}function bt(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Rt(g){var b={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return b[G]})}var ut=/\/+/g;function $e(g,b){return typeof g=="object"&&g!==null&&g.key!=null?Rt(""+g.key):b.toString(36)}function ot(g,b,G,X,oe){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var fe=!1;if(g===null)fe=!0;else switch(re){case"string":case"number":fe=!0;break;case"object":switch(g.$$typeof){case o:case d:fe=!0}}if(fe)return fe=g,oe=oe(fe),g=X===""?"."+$e(fe,0):X,te(oe)?(G="",g!=null&&(G=g.replace(ut,"$&/")+"/"),ot(oe,b,G,"",function(Ae){return Ae})):oe!=null&&(bt(oe)&&(oe=nt(oe,G+(!oe.key||fe&&fe.key===oe.key?"":(""+oe.key).replace(ut,"$&/")+"/")+g)),b.push(oe)),1;if(fe=0,X=X===""?".":X+":",te(g))for(var se=0;se<g.length;se++){re=g[se];var ue=X+$e(re,se);fe+=ot(re,b,G,ue,oe)}else if(ue=B(g),typeof ue=="function")for(g=ue.call(g),se=0;!(re=g.next()).done;)re=re.value,ue=X+$e(re,se++),fe+=ot(re,b,G,ue,oe);else if(re==="object")throw b=String(g),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return fe}function dt(g,b,G){if(g==null)return g;var X=[],oe=0;return ot(g,X,"","",function(re){return b.call(G,re,oe++)}),X}function Be(g){if(g._status===-1){var b=g._result;b=b(),b.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=b)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},L={transition:null},A={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:L,ReactCurrentOwner:Q};function z(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:dt,forEach:function(g,b,G){dt(g,function(){b.apply(this,arguments)},G)},count:function(g){var b=0;return dt(g,function(){b++}),b},toArray:function(g){return dt(g,function(b){return b})||[]},only:function(g){if(!bt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=K,ne.Fragment=l,ne.Profiler=h,ne.PureComponent=le,ne.StrictMode=c,ne.Suspense=E,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,ne.act=z,ne.cloneElement=function(g,b,G){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var X=ie({},g.props),oe=g.key,re=g.ref,fe=g._owner;if(b!=null){if(b.ref!==void 0&&(re=b.ref,fe=Q.current),b.key!==void 0&&(oe=""+b.key),g.type&&g.type.defaultProps)var se=g.type.defaultProps;for(ue in b)pe.call(b,ue)&&!H.hasOwnProperty(ue)&&(X[ue]=b[ue]===void 0&&se!==void 0?se[ue]:b[ue])}var ue=arguments.length-2;if(ue===1)X.children=G;else if(1<ue){se=Array(ue);for(var Ae=0;Ae<ue;Ae++)se[Ae]=arguments[Ae+2];X.children=se}return{$$typeof:o,type:g.type,key:oe,ref:re,props:X,_owner:fe}},ne.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:y,_context:g},g.Consumer=g},ne.createElement=Te,ne.createFactory=function(g){var b=Te.bind(null,g);return b.type=g,b},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:M,render:g}},ne.isValidElement=bt,ne.lazy=function(g){return{$$typeof:$,_payload:{_status:-1,_result:g},_init:Be}},ne.memo=function(g,b){return{$$typeof:J,type:g,compare:b===void 0?null:b}},ne.startTransition=function(g){var b=L.transition;L.transition={};try{g()}finally{L.transition=b}},ne.unstable_act=z,ne.useCallback=function(g,b){return xe.current.useCallback(g,b)},ne.useContext=function(g){return xe.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},ne.useEffect=function(g,b){return xe.current.useEffect(g,b)},ne.useId=function(){return xe.current.useId()},ne.useImperativeHandle=function(g,b,G){return xe.current.useImperativeHandle(g,b,G)},ne.useInsertionEffect=function(g,b){return xe.current.useInsertionEffect(g,b)},ne.useLayoutEffect=function(g,b){return xe.current.useLayoutEffect(g,b)},ne.useMemo=function(g,b){return xe.current.useMemo(g,b)},ne.useReducer=function(g,b,G){return xe.current.useReducer(g,b,G)},ne.useRef=function(g){return xe.current.useRef(g)},ne.useState=function(g){return xe.current.useState(g)},ne.useSyncExternalStore=function(g,b,G){return xe.current.useSyncExternalStore(g,b,G)},ne.useTransition=function(){return xe.current.useTransition()},ne.version="18.3.1",ne}var gd;function pl(){return gd||(gd=1,qs.exports=jm()),qs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Cm(){if(xd)return Xn;xd=1;var o=pl(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function N(M,E,J){var $,F={},B=null,q=null;J!==void 0&&(B=""+J),E.key!==void 0&&(B=""+E.key),E.ref!==void 0&&(q=E.ref);for($ in E)c.call(E,$)&&!y.hasOwnProperty($)&&(F[$]=E[$]);if(M&&M.defaultProps)for($ in E=M.defaultProps,E)F[$]===void 0&&(F[$]=E[$]);return{$$typeof:d,type:M,key:B,ref:q,props:F,_owner:h.current}}return Xn.Fragment=l,Xn.jsx=N,Xn.jsxs=N,Xn}var vd;function Nm(){return vd||(vd=1,Js.exports=Cm()),Js.exports}var s=Nm(),mi={},Qs={exports:{}},tt={},Gs={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Em(){return yd||(yd=1,(function(o){function d(L,A){var z=L.length;L.push(A);e:for(;0<z;){var g=z-1>>>1,b=L[g];if(0<h(b,A))L[g]=A,L[z]=b,z=g;else break e}}function l(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var A=L[0],z=L.pop();if(z!==A){L[0]=z;e:for(var g=0,b=L.length,G=b>>>1;g<G;){var X=2*(g+1)-1,oe=L[X],re=X+1,fe=L[re];if(0>h(oe,z))re<b&&0>h(fe,oe)?(L[g]=fe,L[re]=z,g=re):(L[g]=oe,L[X]=z,g=X);else if(re<b&&0>h(fe,z))L[g]=fe,L[re]=z,g=re;else break e}}return A}function h(L,A){var z=L.sortIndex-A.sortIndex;return z!==0?z:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;o.unstable_now=function(){return y.now()}}else{var N=Date,M=N.now();o.unstable_now=function(){return N.now()-M}}var E=[],J=[],$=1,F=null,B=3,q=!1,ie=!1,Y=!1,K=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(L){for(var A=l(J);A!==null;){if(A.callback===null)c(J);else if(A.startTime<=L)c(J),A.sortIndex=A.expirationTime,d(E,A);else break;A=l(J)}}function te(L){if(Y=!1,ae(L),!ie)if(l(E)!==null)ie=!0,Be(pe);else{var A=l(J);A!==null&&xe(te,A.startTime-L)}}function pe(L,A){ie=!1,Y&&(Y=!1,me(Te),Te=-1),q=!0;var z=B;try{for(ae(A),F=l(E);F!==null&&(!(F.expirationTime>A)||L&&!Rt());){var g=F.callback;if(typeof g=="function"){F.callback=null,B=F.priorityLevel;var b=g(F.expirationTime<=A);A=o.unstable_now(),typeof b=="function"?F.callback=b:F===l(E)&&c(E),ae(A)}else c(E);F=l(E)}if(F!==null)var G=!0;else{var X=l(J);X!==null&&xe(te,X.startTime-A),G=!1}return G}finally{F=null,B=z,q=!1}}var Q=!1,H=null,Te=-1,nt=5,bt=-1;function Rt(){return!(o.unstable_now()-bt<nt)}function ut(){if(H!==null){var L=o.unstable_now();bt=L;var A=!0;try{A=H(!0,L)}finally{A?$e():(Q=!1,H=null)}}else Q=!1}var $e;if(typeof le=="function")$e=function(){le(ut)};else if(typeof MessageChannel!="undefined"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=ut,$e=function(){dt.postMessage(null)}}else $e=function(){K(ut,0)};function Be(L){H=L,Q||(Q=!0,$e())}function xe(L,A){Te=K(function(){L(o.unstable_now())},A)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){ie||q||(ie=!0,Be(pe))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nt=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_getFirstCallbackNode=function(){return l(E)},o.unstable_next=function(L){switch(B){case 1:case 2:case 3:var A=3;break;default:A=B}var z=B;B=A;try{return L()}finally{B=z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=B;B=L;try{return A()}finally{B=z}},o.unstable_scheduleCallback=function(L,A,z){var g=o.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?g+z:g):z=g,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=z+b,L={id:$++,callback:A,priorityLevel:L,startTime:z,expirationTime:b,sortIndex:-1},z>g?(L.sortIndex=z,d(J,L),l(E)===null&&L===l(J)&&(Y?(me(Te),Te=-1):Y=!0,xe(te,z-g))):(L.sortIndex=b,d(E,L),ie||q||(ie=!0,Be(pe))),L},o.unstable_shouldYield=Rt,o.unstable_wrapCallback=function(L){var A=B;return function(){var z=B;B=A;try{return L.apply(this,arguments)}finally{B=z}}}})(Ks)),Ks}var wd;function Lm(){return wd||(wd=1,Gs.exports=Em()),Gs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function zm(){if(bd)return tt;bd=1;var o=pl(),d=Lm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,h={};function y(e,t){N(e,t),N(e+"Capture",t)}function N(e,t){for(h[e]=t,e=0;e<t.length;e++)c.add(t[e])}var M=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,J=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},F={};function B(e){return E.call(F,e)?!0:E.call($,e)?!1:J.test(e)?F[e]=!0:($[e]=!0,!1)}function q(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,t,r,n){if(t===null||typeof t=="undefined"||q(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,r,n,i,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,le);K[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,le);K[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,le);K[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,t,r,n){var i=K.hasOwnProperty(t)?K[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ie(t,r,i,n)&&(r=null),n||i===null?B(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var te=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),Q=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),Rt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),L=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,g;function b(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var G=!1;function X(e,t){if(!e||G)return"";G=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var n=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){n=w}e.call(t.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),a=n.stack.split(`
`),u=i.length-1,p=a.length-1;1<=u&&0<=p&&i[u]!==a[p];)p--;for(;1<=u&&0<=p;u--,p--)if(i[u]!==a[p]){if(u!==1||p!==1)do if(u--,p--,0>p||i[u]!==a[p]){var f=`
`+i[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=p);break}}}finally{G=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?b(e):""}function oe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case Q:return"Portal";case nt:return"Profiler";case Te:return"StrictMode";case $e:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rt:return(e.displayName||"Context")+".Consumer";case bt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=ue(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){n=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){e._valueTracker||(e._valueTracker=Ae(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ue(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var r=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function kl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=se(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sl(e,t){t=t.checked,t!=null&&ae(e,"checked",t,!1)}function ta(e,t){Sl(e,t);var r=se(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ra(e,t.type,r):t.hasOwnProperty("defaultValue")&&ra(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ra(e,t,r){(t!=="number"||oo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fn=Array.isArray;function Mr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(fn(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:se(r)}}function Nl(e,t){var r=se(t.value),n=se(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function El(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ll(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ll(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,zl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(hn).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hn[t]=hn[e]})});function Tl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||hn.hasOwnProperty(e)&&hn[e]?(""+t).trim():t+"px"}function Pl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Tl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Ep=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,Ir=null,_r=null;function Ml(e){if(e=An(e)){if(typeof ca!="function")throw Error(l(280));var t=e.stateNode;t&&(t=zo(t),ca(e.stateNode,e.type,t))}}function Il(e){Ir?_r?_r.push(e):_r=[e]:Ir=e}function _l(){if(Ir){var e=Ir,t=_r;if(_r=Ir=null,Ml(e),t)for(e=0;e<t.length;e++)Ml(t[e])}}function Ol(e,t){return e(t)}function Dl(){}var ua=!1;function Al(e,t,r){if(ua)return e(t,r);ua=!0;try{return Ol(e,t,r)}finally{ua=!1,(Ir!==null||_r!==null)&&(Dl(),_l())}}function gn(e,t){var r=e.stateNode;if(r===null)return null;var n=zo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var da=!1;if(M)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){da=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{da=!1}function Lp(e,t,r,n,i,a,u,p,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(S){this.onError(S)}}var vn=!1,ao=null,so=!1,pa=null,zp={onError:function(e){vn=!0,ao=e}};function Tp(e,t,r,n,i,a,u,p,f){vn=!1,ao=null,Lp.apply(zp,arguments)}function Pp(e,t,r,n,i,a,u,p,f){if(Tp.apply(this,arguments),vn){if(vn){var w=ao;vn=!1,ao=null}else throw Error(l(198));so||(so=!0,pa=w)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Rl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fl(e){if(hr(e)!==e)throw Error(l(188))}function Mp(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Fl(i),e;if(a===n)return Fl(i),t;a=a.sibling}throw Error(l(188))}if(r.return!==n.return)r=i,n=a;else{for(var u=!1,p=i.child;p;){if(p===r){u=!0,r=i,n=a;break}if(p===n){u=!0,n=i,r=a;break}p=p.sibling}if(!u){for(p=a.child;p;){if(p===r){u=!0,r=a,n=i;break}if(p===n){u=!0,n=a,r=i;break}p=p.sibling}if(!u)throw Error(l(189))}}if(r.alternate!==n)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Bl(e){return e=Mp(e),e!==null?Ul(e):null}function Ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ul(e);if(t!==null)return t;e=e.sibling}return null}var Wl=d.unstable_scheduleCallback,Hl=d.unstable_cancelCallback,Ip=d.unstable_shouldYield,_p=d.unstable_requestPaint,Ne=d.unstable_now,Op=d.unstable_getCurrentPriorityLevel,fa=d.unstable_ImmediatePriority,Vl=d.unstable_UserBlockingPriority,lo=d.unstable_NormalPriority,Dp=d.unstable_LowPriority,$l=d.unstable_IdlePriority,co=null,Pt=null;function Ap(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Bp,Rp=Math.log,Fp=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Rp(e)/Fp|0)|0}var uo=64,po=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,u=r&268435455;if(u!==0){var p=u&~i;p!==0?n=yn(p):(a&=u,a!==0&&(n=yn(a)))}else u=r&~i,u!==0?n=yn(u):a!==0&&(n=yn(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-St(t),i=1<<r,n|=e[r],t&=~i;return n}function Up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-St(a),p=1<<u,f=i[u];f===-1?((p&r)===0||(p&n)!==0)&&(i[u]=Up(p,t)):f<=t&&(e.expiredLanes|=p),a&=~p}}function ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yl(){var e=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),e}function ha(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function wn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=r}function Hp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-St(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function ga(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-St(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function Jl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ql,xa,Ql,Gl,Kl,va=!1,mo=[],Qt=null,Gt=null,Kt=null,bn=new Map,kn=new Map,Xt=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Sn(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=An(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $p(e,t,r,n,i){switch(t){case"focusin":return Qt=Sn(Qt,e,t,r,n,i),!0;case"dragenter":return Gt=Sn(Gt,e,t,r,n,i),!0;case"mouseover":return Kt=Sn(Kt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return bn.set(a,Sn(bn.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,kn.set(a,Sn(kn.get(a)||null,e,t,r,n,i)),!0}return!1}function Zl(e){var t=gr(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=Rl(r),t!==null){e.blockedOn=t,Kl(e.priority,function(){Ql(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);sa=n,r.target.dispatchEvent(n),sa=null}else return t=An(r),t!==null&&xa(t),e.blockedOn=r,!1;t.shift()}return!0}function ec(e,t,r){ho(e)&&r.delete(t)}function Yp(){va=!1,Qt!==null&&ho(Qt)&&(Qt=null),Gt!==null&&ho(Gt)&&(Gt=null),Kt!==null&&ho(Kt)&&(Kt=null),bn.forEach(ec),kn.forEach(ec)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,va||(va=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Yp)))}function Cn(e){function t(i){return jn(i,e)}if(0<mo.length){jn(mo[0],e);for(var r=1;r<mo.length;r++){var n=mo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Qt!==null&&jn(Qt,e),Gt!==null&&jn(Gt,e),Kt!==null&&jn(Kt,e),bn.forEach(t),kn.forEach(t),r=0;r<Xt.length;r++)n=Xt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)Zl(r),r.blockedOn===null&&Xt.shift()}var Or=te.ReactCurrentBatchConfig,go=!0;function Jp(e,t,r,n){var i=ge,a=Or.transition;Or.transition=null;try{ge=1,ya(e,t,r,n)}finally{ge=i,Or.transition=a}}function qp(e,t,r,n){var i=ge,a=Or.transition;Or.transition=null;try{ge=4,ya(e,t,r,n)}finally{ge=i,Or.transition=a}}function ya(e,t,r,n){if(go){var i=wa(e,t,r,n);if(i===null)Aa(e,t,n,xo,r),Xl(e,n);else if($p(i,e,t,r,n))n.stopPropagation();else if(Xl(e,n),t&4&&-1<Vp.indexOf(e)){for(;i!==null;){var a=An(i);if(a!==null&&ql(a),a=wa(e,t,r,n),a===null&&Aa(e,t,n,xo,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Aa(e,t,n,null,r)}}var xo=null;function wa(e,t,r,n){if(xo=null,e=la(n),e=gr(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Rl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function tc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case fa:return 1;case Vl:return 4;case lo:case Dp:return 16;case $l:return 536870912;default:return 16}default:return 16}}var Zt=null,ba=null,vo=null;function rc(){if(vo)return vo;var e,t=ba,r=t.length,n,i="value"in Zt?Zt.value:Zt.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(n=1;n<=u&&t[r-n]===i[a-n];n++);return vo=i.slice(e,1<n?1-n:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function nc(){return!1}function it(e){function t(r,n,i,a,u){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wo:nc,this.isPropagationStopped=nc,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=it(Dr),Nn=z({},Dr,{view:0,detail:0}),Qp=it(Nn),Sa,ja,En,bo=z({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Sa=e.screenX-En.screenX,ja=e.screenY-En.screenY):ja=Sa=0,En=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),oc=it(bo),Gp=z({},bo,{dataTransfer:0}),Kp=it(Gp),Xp=z({},Nn,{relatedTarget:0}),Ca=it(Xp),Zp=z({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),ef=it(Zp),tf=z({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rf=it(tf),nf=z({},Dr,{data:0}),ic=it(nf),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function Na(){return lf}var cf=z({},Nn,{key:function(e){if(e.key){var t=of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=it(cf),df=z({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=it(df),pf=z({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),ff=it(pf),mf=z({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=it(mf),gf=z({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=it(gf),vf=[9,13,27,32],Ea=M&&"CompositionEvent"in window,Ln=null;M&&"documentMode"in document&&(Ln=document.documentMode);var yf=M&&"TextEvent"in window&&!Ln,sc=M&&(!Ea||Ln&&8<Ln&&11>=Ln),lc=" ",cc=!1;function uc(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function wf(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(cc=!0,lc);case"textInput":return e=t.data,e===lc&&cc?null:e;default:return null}}function bf(e,t){if(Ar)return e==="compositionend"||!Ea&&uc(e,t)?(e=rc(),vo=ba=Zt=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sc&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function fc(e,t,r,n){Il(n),t=No(t,"onChange"),0<t.length&&(r=new ka("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var zn=null,Tn=null;function Sf(e){Pc(e,0)}function ko(e){var t=Wr(e);if(kt(t))return e}function jf(e,t){if(e==="change")return t}var mc=!1;if(M){var La;if(M){var za="oninput"in document;if(!za){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),za=typeof hc.oninput=="function"}La=za}else La=!1;mc=La&&(!document.documentMode||9<document.documentMode)}function gc(){zn&&(zn.detachEvent("onpropertychange",xc),Tn=zn=null)}function xc(e){if(e.propertyName==="value"&&ko(Tn)){var t=[];fc(t,Tn,e,la(e)),Al(Sf,t)}}function Cf(e,t,r){e==="focusin"?(gc(),zn=t,Tn=r,zn.attachEvent("onpropertychange",xc)):e==="focusout"&&gc()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Tn)}function Ef(e,t){if(e==="click")return ko(t)}function Lf(e,t){if(e==="input"||e==="change")return ko(t)}function zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:zf;function Pn(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!E.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var r=vc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vc(r)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oo(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=bc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&wc(r.ownerDocument.documentElement,r)){if(n!==null&&Ta(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=yc(r,a);var u=yc(r,n);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=M&&"documentMode"in document&&11>=document.documentMode,Rr=null,Pa=null,Mn=null,Ma=!1;function kc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ma||Rr==null||Rr!==oo(n)||(n=Rr,"selectionStart"in n&&Ta(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mn&&Pn(Mn,n)||(Mn=n,n=No(Pa,"onSelect"),0<n.length&&(t=new ka("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Rr)))}function So(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Fr={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Ia={},Sc={};M&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function jo(e){if(Ia[e])return Ia[e];if(!Fr[e])return e;var t=Fr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Sc)return Ia[e]=t[r];return e}var jc=jo("animationend"),Cc=jo("animationiteration"),Nc=jo("animationstart"),Ec=jo("transitionend"),Lc=new Map,zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){Lc.set(e,t),y(t,[e])}for(var _a=0;_a<zc.length;_a++){var Oa=zc[_a],Mf=Oa.toLowerCase(),If=Oa[0].toUpperCase()+Oa.slice(1);er(Mf,"on"+If)}er(jc,"onAnimationEnd"),er(Cc,"onAnimationIteration"),er(Nc,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Ec,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function Tc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Pp(n,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var u=n.length-1;0<=u;u--){var p=n[u],f=p.instance,w=p.currentTarget;if(p=p.listener,f!==a&&i.isPropagationStopped())break e;Tc(i,p,w),a=f}else for(u=0;u<n.length;u++){if(p=n[u],f=p.instance,w=p.currentTarget,p=p.listener,f!==a&&i.isPropagationStopped())break e;Tc(i,p,w),a=f}}}if(so)throw e=pa,so=!1,pa=null,e}function ye(e,t){var r=t[Ha];r===void 0&&(r=t[Ha]=new Set);var n=e+"__bubble";r.has(n)||(Mc(t,e,2,!1),r.add(n))}function Da(e,t,r){var n=0;t&&(n|=4),Mc(r,e,n,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function _n(e){if(!e[Co]){e[Co]=!0,c.forEach(function(r){r!=="selectionchange"&&(_f.has(r)||Da(r,!1,e),Da(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,Da("selectionchange",!1,t))}}function Mc(e,t,r,n){switch(tc(t)){case 1:var i=Jp;break;case 4:i=qp;break;default:i=ya}r=i.bind(null,t,r,e),i=void 0,!da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Aa(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(u===4)for(u=n.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;u=u.return}for(;p!==null;){if(u=gr(p),u===null)return;if(f=u.tag,f===5||f===6){n=a=u;continue e}p=p.parentNode}}n=n.return}Al(function(){var w=a,S=la(r),j=[];e:{var k=Lc.get(e);if(k!==void 0){var T=ka,_=e;switch(e){case"keypress":if(yo(r)===0)break e;case"keydown":case"keyup":T=uf;break;case"focusin":_="focus",T=Ca;break;case"focusout":_="blur",T=Ca;break;case"beforeblur":case"afterblur":T=Ca;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=ff;break;case jc:case Cc:case Nc:T=ef;break;case Ec:T=hf;break;case"scroll":T=Qp;break;case"wheel":T=xf;break;case"copy":case"cut":case"paste":T=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ac}var O=(t&4)!==0,Ee=!O&&e==="scroll",x=O?k!==null?k+"Capture":null:k;O=[];for(var m=w,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,x!==null&&(C=gn(m,x),C!=null&&O.push(On(m,C,v)))),Ee)break;m=m.return}0<O.length&&(k=new T(k,_,null,r,S),j.push({event:k,listeners:O}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",k&&r!==sa&&(_=r.relatedTarget||r.fromElement)&&(gr(_)||_[Bt]))break e;if((T||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,T?(_=r.relatedTarget||r.toElement,T=w,_=_?gr(_):null,_!==null&&(Ee=hr(_),_!==Ee||_.tag!==5&&_.tag!==6)&&(_=null)):(T=null,_=w),T!==_)){if(O=oc,C="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(O=ac,C="onPointerLeave",x="onPointerEnter",m="pointer"),Ee=T==null?k:Wr(T),v=_==null?k:Wr(_),k=new O(C,m+"leave",T,r,S),k.target=Ee,k.relatedTarget=v,C=null,gr(S)===w&&(O=new O(x,m+"enter",_,r,S),O.target=v,O.relatedTarget=Ee,C=O),Ee=C,T&&_)t:{for(O=T,x=_,m=0,v=O;v;v=Br(v))m++;for(v=0,C=x;C;C=Br(C))v++;for(;0<m-v;)O=Br(O),m--;for(;0<v-m;)x=Br(x),v--;for(;m--;){if(O===x||x!==null&&O===x.alternate)break t;O=Br(O),x=Br(x)}O=null}else O=null;T!==null&&Ic(j,k,T,O,!1),_!==null&&Ee!==null&&Ic(j,Ee,_,O,!0)}}e:{if(k=w?Wr(w):window,T=k.nodeName&&k.nodeName.toLowerCase(),T==="select"||T==="input"&&k.type==="file")var D=jf;else if(pc(k))if(mc)D=Lf;else{D=Nf;var U=Cf}else(T=k.nodeName)&&T.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(D=Ef);if(D&&(D=D(e,w))){fc(j,D,r,S);break e}U&&U(e,k,w),e==="focusout"&&(U=k._wrapperState)&&U.controlled&&k.type==="number"&&ra(k,"number",k.value)}switch(U=w?Wr(w):window,e){case"focusin":(pc(U)||U.contentEditable==="true")&&(Rr=U,Pa=w,Mn=null);break;case"focusout":Mn=Pa=Rr=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,kc(j,r,S);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":kc(j,r,S)}var W;if(Ea)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Ar?uc(e,r)&&(V="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(V="onCompositionStart");V&&(sc&&r.locale!=="ko"&&(Ar||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ar&&(W=rc()):(Zt=S,ba="value"in Zt?Zt.value:Zt.textContent,Ar=!0)),U=No(w,V),0<U.length&&(V=new ic(V,e,null,r,S),j.push({event:V,listeners:U}),W?V.data=W:(W=dc(r),W!==null&&(V.data=W)))),(W=yf?wf(e,r):bf(e,r))&&(w=No(w,"onBeforeInput"),0<w.length&&(S=new ic("onBeforeInput","beforeinput",null,r,S),j.push({event:S,listeners:w}),S.data=W))}Pc(j,t)})}function On(e,t,r){return{instance:e,listener:t,currentTarget:r}}function No(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=gn(e,r),a!=null&&n.unshift(On(e,a,i)),a=gn(e,t),a!=null&&n.push(On(e,a,i))),e=e.return}return n}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ic(e,t,r,n,i){for(var a=t._reactName,u=[];r!==null&&r!==n;){var p=r,f=p.alternate,w=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&w!==null&&(p=w,i?(f=gn(r,a),f!=null&&u.unshift(On(r,f,p))):i||(f=gn(r,a),f!=null&&u.push(On(r,f,p)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var Of=/\r\n?/g,Df=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(Of,`
`).replace(Df,"")}function Eo(e,t,r){if(t=_c(t),_c(e)!==t&&r)throw Error(l(425))}function Lo(){}var Ra=null,Fa=null;function Ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc!="undefined"?function(e){return Oc.resolve(null).then(e).catch(Ff)}:Ua;function Ff(e){setTimeout(function(){throw e})}function Wa(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Cn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Cn(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ur,Dn="__reactProps$"+Ur,Bt="__reactContainer$"+Ur,Ha="__reactEvents$"+Ur,Bf="__reactListeners$"+Ur,Uf="__reactHandles$"+Ur;function gr(e){var t=e[Mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Bt]||r[Mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Dc(e);e!==null;){if(r=e[Mt])return r;e=Dc(e)}return t}e=r,r=e.parentNode}return null}function An(e){return e=e[Mt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function zo(e){return e[Dn]||null}var Va=[],Hr=-1;function rr(e){return{current:e}}function we(e){0>Hr||(e.current=Va[Hr],Va[Hr]=null,Hr--)}function ve(e,t){Hr++,Va[Hr]=e.current,e.current=t}var nr={},Ue=rr(nr),Ge=rr(!1),xr=nr;function Vr(e,t){var r=e.type.contextTypes;if(!r)return nr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function To(){we(Ge),we(Ue)}function Ac(e,t,r){if(Ue.current!==nr)throw Error(l(168));ve(Ue,t),ve(Ge,r)}function Rc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(l(108,fe(e)||"Unknown",i));return z({},r,n)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,xr=Ue.current,ve(Ue,e),ve(Ge,Ge.current),!0}function Fc(e,t,r){var n=e.stateNode;if(!n)throw Error(l(169));r?(e=Rc(e,t,xr),n.__reactInternalMemoizedMergedChildContext=e,we(Ge),we(Ue),ve(Ue,e)):we(Ge),ve(Ge,r)}var Ut=null,Mo=!1,$a=!1;function Bc(e){Ut===null?Ut=[e]:Ut.push(e)}function Wf(e){Mo=!0,Bc(e)}function or(){if(!$a&&Ut!==null){$a=!0;var e=0,t=ge;try{var r=Ut;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ut=null,Mo=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Wl(fa,or),i}finally{ge=t,$a=!1}}return null}var $r=[],Yr=0,Io=null,_o=0,pt=[],ft=0,vr=null,Wt=1,Ht="";function yr(e,t){$r[Yr++]=_o,$r[Yr++]=Io,Io=e,_o=t}function Uc(e,t,r){pt[ft++]=Wt,pt[ft++]=Ht,pt[ft++]=vr,vr=e;var n=Wt;e=Ht;var i=32-St(n)-1;n&=~(1<<i),r+=1;var a=32-St(t)+i;if(30<a){var u=i-i%5;a=(n&(1<<u)-1).toString(32),n>>=u,i-=u,Wt=1<<32-St(t)+i|r<<i|n,Ht=a+e}else Wt=1<<a|r<<i|n,Ht=e}function Ya(e){e.return!==null&&(yr(e,1),Uc(e,1,0))}function Ja(e){for(;e===Io;)Io=$r[--Yr],$r[Yr]=null,_o=$r[--Yr],$r[Yr]=null;for(;e===vr;)vr=pt[--ft],pt[ft]=null,Ht=pt[--ft],pt[ft]=null,Wt=pt[--ft],pt[ft]=null}var at=null,st=null,ke=!1,Ct=null;function Wc(e,t){var r=xt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vr!==null?{id:Wt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,st=null,!0):!1;default:return!1}}function qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qa(e){if(ke){var t=st;if(t){var r=t;if(!Hc(e,t)){if(qa(e))throw Error(l(418));t=tr(r.nextSibling);var n=at;t&&Hc(e,t)?Wc(n,r):(e.flags=e.flags&-4097|2,ke=!1,at=e)}}else{if(qa(e))throw Error(l(418));e.flags=e.flags&-4097|2,ke=!1,at=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Oo(e){if(e!==at)return!1;if(!ke)return Vc(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ba(e.type,e.memoizedProps)),t&&(t=st)){if(qa(e))throw $c(),Error(l(418));for(;t;)Wc(e,t),t=tr(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){st=tr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?tr(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=st;e;)e=tr(e.nextSibling)}function Jr(){st=at=null,ke=!1}function Ga(e){Ct===null?Ct=[e]:Ct.push(e)}var Hf=te.ReactCurrentBatchConfig;function Rn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var n=r.stateNode}if(!n)throw Error(l(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var p=i.refs;u===null?delete p[a]:p[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function Jc(e){function t(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function r(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function n(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=pr(x,m),x.index=0,x.sibling=null,x}function a(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function u(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,m,v,C){return m===null||m.tag!==6?(m=Us(v,x.mode,C),m.return=x,m):(m=i(m,v),m.return=x,m)}function f(x,m,v,C){var D=v.type;return D===H?S(x,m,v.props.children,C,v.key):m!==null&&(m.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Be&&Yc(D)===m.type)?(C=i(m,v.props),C.ref=Rn(x,m,v),C.return=x,C):(C=ai(v.type,v.key,v.props,null,x.mode,C),C.ref=Rn(x,m,v),C.return=x,C)}function w(x,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ws(v,x.mode,C),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function S(x,m,v,C,D){return m===null||m.tag!==7?(m=Er(v,x.mode,C,D),m.return=x,m):(m=i(m,v),m.return=x,m)}function j(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Us(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pe:return v=ai(m.type,m.key,m.props,null,x.mode,v),v.ref=Rn(x,null,m),v.return=x,v;case Q:return m=Ws(m,x.mode,v),m.return=x,m;case Be:var C=m._init;return j(x,C(m._payload),v)}if(fn(m)||A(m))return m=Er(m,x.mode,v,null),m.return=x,m;Do(x,m)}return null}function k(x,m,v,C){var D=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:p(x,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:return v.key===D?f(x,m,v,C):null;case Q:return v.key===D?w(x,m,v,C):null;case Be:return D=v._init,k(x,m,D(v._payload),C)}if(fn(v)||A(v))return D!==null?null:S(x,m,v,C,null);Do(x,v)}return null}function T(x,m,v,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(v)||null,p(m,x,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:return x=x.get(C.key===null?v:C.key)||null,f(m,x,C,D);case Q:return x=x.get(C.key===null?v:C.key)||null,w(m,x,C,D);case Be:var U=C._init;return T(x,m,v,U(C._payload),D)}if(fn(C)||A(C))return x=x.get(v)||null,S(m,x,C,D,null);Do(m,C)}return null}function _(x,m,v,C){for(var D=null,U=null,W=m,V=m=0,Oe=null;W!==null&&V<v.length;V++){W.index>V?(Oe=W,W=null):Oe=W.sibling;var de=k(x,W,v[V],C);if(de===null){W===null&&(W=Oe);break}e&&W&&de.alternate===null&&t(x,W),m=a(de,m,V),U===null?D=de:U.sibling=de,U=de,W=Oe}if(V===v.length)return r(x,W),ke&&yr(x,V),D;if(W===null){for(;V<v.length;V++)W=j(x,v[V],C),W!==null&&(m=a(W,m,V),U===null?D=W:U.sibling=W,U=W);return ke&&yr(x,V),D}for(W=n(x,W);V<v.length;V++)Oe=T(W,x,V,v[V],C),Oe!==null&&(e&&Oe.alternate!==null&&W.delete(Oe.key===null?V:Oe.key),m=a(Oe,m,V),U===null?D=Oe:U.sibling=Oe,U=Oe);return e&&W.forEach(function(fr){return t(x,fr)}),ke&&yr(x,V),D}function O(x,m,v,C){var D=A(v);if(typeof D!="function")throw Error(l(150));if(v=D.call(v),v==null)throw Error(l(151));for(var U=D=null,W=m,V=m=0,Oe=null,de=v.next();W!==null&&!de.done;V++,de=v.next()){W.index>V?(Oe=W,W=null):Oe=W.sibling;var fr=k(x,W,de.value,C);if(fr===null){W===null&&(W=Oe);break}e&&W&&fr.alternate===null&&t(x,W),m=a(fr,m,V),U===null?D=fr:U.sibling=fr,U=fr,W=Oe}if(de.done)return r(x,W),ke&&yr(x,V),D;if(W===null){for(;!de.done;V++,de=v.next())de=j(x,de.value,C),de!==null&&(m=a(de,m,V),U===null?D=de:U.sibling=de,U=de);return ke&&yr(x,V),D}for(W=n(x,W);!de.done;V++,de=v.next())de=T(W,x,V,de.value,C),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?V:de.key),m=a(de,m,V),U===null?D=de:U.sibling=de,U=de);return e&&W.forEach(function(km){return t(x,km)}),ke&&yr(x,V),D}function Ee(x,m,v,C){if(typeof v=="object"&&v!==null&&v.type===H&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:e:{for(var D=v.key,U=m;U!==null;){if(U.key===D){if(D=v.type,D===H){if(U.tag===7){r(x,U.sibling),m=i(U,v.props.children),m.return=x,x=m;break e}}else if(U.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Be&&Yc(D)===U.type){r(x,U.sibling),m=i(U,v.props),m.ref=Rn(x,U,v),m.return=x,x=m;break e}r(x,U);break}else t(x,U);U=U.sibling}v.type===H?(m=Er(v.props.children,x.mode,C,v.key),m.return=x,x=m):(C=ai(v.type,v.key,v.props,null,x.mode,C),C.ref=Rn(x,m,v),C.return=x,x=C)}return u(x);case Q:e:{for(U=v.key;m!==null;){if(m.key===U)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){r(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{r(x,m);break}else t(x,m);m=m.sibling}m=Ws(v,x.mode,C),m.return=x,x=m}return u(x);case Be:return U=v._init,Ee(x,m,U(v._payload),C)}if(fn(v))return _(x,m,v,C);if(A(v))return O(x,m,v,C);Do(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(r(x,m.sibling),m=i(m,v),m.return=x,x=m):(r(x,m),m=Us(v,x.mode,C),m.return=x,x=m),u(x)):r(x,m)}return Ee}var qr=Jc(!0),qc=Jc(!1),Ao=rr(null),Ro=null,Qr=null,Ka=null;function Xa(){Ka=Qr=Ro=null}function Za(e){var t=Ao.current;we(Ao),e._currentValue=t}function es(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Gr(e,t){Ro=e,Ka=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(Ro===null)throw Error(l(308));Qr=e,Ro.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var wr=null;function ts(e){wr===null?wr=[e]:wr.push(e)}function Qc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,ts(t)):(r.next=i.next,i.next=r),t.interleaved=r,Vt(e,n)}function Vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Vt(e,r)}return i=n.interleaved,i===null?(t.next=t,ts(n)):(t.next=i.next,i.next=t),n.interleaved=t,Vt(e,r)}function Fo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ga(e,r)}}function Kc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=u:a=a.next=u,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Bo(e,t,r,n){var i=e.updateQueue;ir=!1;var a=i.firstBaseUpdate,u=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,w=f.next;f.next=null,u===null?a=w:u.next=w,u=f;var S=e.alternate;S!==null&&(S=S.updateQueue,p=S.lastBaseUpdate,p!==u&&(p===null?S.firstBaseUpdate=w:p.next=w,S.lastBaseUpdate=f))}if(a!==null){var j=i.baseState;u=0,S=w=f=null,p=a;do{var k=p.lane,T=p.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:T,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var _=e,O=p;switch(k=t,T=r,O.tag){case 1:if(_=O.payload,typeof _=="function"){j=_.call(T,j,k);break e}j=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=O.payload,k=typeof _=="function"?_.call(T,j,k):_,k==null)break e;j=z({},j,k);break e;case 2:ir=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[p]:k.push(p))}else T={eventTime:T,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},S===null?(w=S=T,f=j):S=S.next=T,u|=k;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(f=j),i.baseState=f,i.firstBaseUpdate=w,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Sr|=u,e.lanes=u,e.memoizedState=j}}function Xc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(l(191,i));i.call(n)}}}var Fn={},It=rr(Fn),Bn=rr(Fn),Un=rr(Fn);function br(e){if(e===Fn)throw Error(l(174));return e}function ns(e,t){switch(ve(Un,t),ve(Bn,e),ve(It,Fn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}we(It),ve(It,t)}function Kr(){we(It),we(Bn),we(Un)}function Zc(e){br(Un.current);var t=br(It.current),r=oa(t,e.type);t!==r&&(ve(Bn,e),ve(It,r))}function os(e){Bn.current===e&&(we(It),we(Bn))}var Se=rr(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=[];function as(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var Wo=te.ReactCurrentDispatcher,ss=te.ReactCurrentBatchConfig,kr=0,je=null,Pe=null,Ie=null,Ho=!1,Wn=!1,Hn=0,Vf=0;function We(){throw Error(l(321))}function ls(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function cs(e,t,r,n,i,a){if(kr=a,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?qf:Qf,e=r(n,i),Wn){a=0;do{if(Wn=!1,Hn=0,25<=a)throw Error(l(301));a+=1,Ie=Pe=null,t.updateQueue=null,Wo.current=Gf,e=r(n,i)}while(Wn)}if(Wo.current=Yo,t=Pe!==null&&Pe.next!==null,kr=0,Ie=Pe=je=null,Ho=!1,t)throw Error(l(300));return e}function us(){var e=Hn!==0;return Hn=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?je.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function ht(){if(Pe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Ie===null?je.memoizedState:Ie.next;if(t!==null)Ie=t,Pe=e;else{if(e===null)throw Error(l(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ie===null?je.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Vn(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=ht(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=Pe,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var u=i.next;i.next=a.next,a.next=u}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var p=u=null,f=null,w=a;do{var S=w.lane;if((kr&S)===S)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var j={lane:S,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(p=f=j,u=n):f=f.next=j,je.lanes|=S,Sr|=S}w=w.next}while(w!==null&&w!==a);f===null?u=n:f.next=p,jt(n,t.memoizedState)||(Xe=!0),t.memoizedState=n,t.baseState=u,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,je.lanes|=a,Sr|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ps(e){var t=ht(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var u=i=i.next;do a=e(a,u.action),u=u.next;while(u!==i);jt(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function eu(){}function tu(e,t){var r=je,n=ht(),i=t(),a=!jt(n.memoizedState,i);if(a&&(n.memoizedState=i,Xe=!0),n=n.queue,fs(ou.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,$n(9,nu.bind(null,r,n,i,t),void 0,null),_e===null)throw Error(l(349));(kr&30)!==0||ru(r,t,i)}return i}function ru(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nu(e,t,r,n){t.value=r,t.getSnapshot=n,iu(t)&&au(e)}function ou(e,t,r){return r(function(){iu(t)&&au(e)})}function iu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function au(e){var t=Vt(e,1);t!==null&&zt(t,e,1,-1)}function su(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=Jf.bind(null,je,e),[t.memoizedState,e]}function $n(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function lu(){return ht().memoizedState}function Vo(e,t,r,n){var i=_t();je.flags|=e,i.memoizedState=$n(1|t,r,void 0,n===void 0?null:n)}function $o(e,t,r,n){var i=ht();n=n===void 0?null:n;var a=void 0;if(Pe!==null){var u=Pe.memoizedState;if(a=u.destroy,n!==null&&ls(n,u.deps)){i.memoizedState=$n(t,r,a,n);return}}je.flags|=e,i.memoizedState=$n(1|t,r,a,n)}function cu(e,t){return Vo(8390656,8,e,t)}function fs(e,t){return $o(2048,8,e,t)}function uu(e,t){return $o(4,2,e,t)}function du(e,t){return $o(4,4,e,t)}function pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fu(e,t,r){return r=r!=null?r.concat([e]):null,$o(4,4,pu.bind(null,t,e),r)}function ms(){}function mu(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ls(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function hu(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ls(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function gu(e,t,r){return(kr&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=r):(jt(r,t)||(r=Yl(),je.lanes|=r,Sr|=r,e.baseState=!0),t)}function $f(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=ss.transition;ss.transition={};try{e(!1),t()}finally{ge=r,ss.transition=n}}function xu(){return ht().memoizedState}function Yf(e,t,r){var n=ur(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},vu(e))yu(t,r);else if(r=Qc(e,t,r,n),r!==null){var i=Je();zt(r,e,n,i),wu(r,t,n)}}function Jf(e,t,r){var n=ur(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(vu(e))yu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,p=a(u,r);if(i.hasEagerState=!0,i.eagerState=p,jt(p,u)){var f=t.interleaved;f===null?(i.next=i,ts(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=Qc(e,t,i,n),r!==null&&(i=Je(),zt(r,e,n,i),wu(r,t,n))}}function vu(e){var t=e.alternate;return e===je||t!==null&&t===je}function yu(e,t){Wn=Ho=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function wu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ga(e,r)}}var Yo={readContext:mt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},qf={readContext:mt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:cu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Vo(4194308,4,pu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var r=_t();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=_t();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Yf.bind(null,je,e),[n.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:su,useDebugValue:ms,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=su(!1),t=e[0];return e=$f.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=je,i=_t();if(ke){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),_e===null)throw Error(l(349));(kr&30)!==0||ru(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,cu(ou.bind(null,n,a,e),[e]),n.flags|=2048,$n(9,nu.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=_t(),t=_e.identifierPrefix;if(ke){var r=Ht,n=Wt;r=(n&~(1<<32-St(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:mt,useCallback:mu,useContext:mt,useEffect:fs,useImperativeHandle:fu,useInsertionEffect:uu,useLayoutEffect:du,useMemo:hu,useReducer:ds,useRef:lu,useState:function(){return ds(Vn)},useDebugValue:ms,useDeferredValue:function(e){var t=ht();return gu(t,Pe.memoizedState,e)},useTransition:function(){var e=ds(Vn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:xu,unstable_isNewReconciler:!1},Gf={readContext:mt,useCallback:mu,useContext:mt,useEffect:fs,useImperativeHandle:fu,useInsertionEffect:uu,useLayoutEffect:du,useMemo:hu,useReducer:ps,useRef:lu,useState:function(){return ps(Vn)},useDebugValue:ms,useDeferredValue:function(e){var t=ht();return Pe===null?t.memoizedState=e:gu(t,Pe.memoizedState,e)},useTransition:function(){var e=ps(Vn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:xu,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function hs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Jo={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Je(),i=ur(e),a=$t(n,i);a.payload=t,r!=null&&(a.callback=r),t=ar(e,a,i),t!==null&&(zt(t,e,i,n),Fo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Je(),i=ur(e),a=$t(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=ar(e,a,i),t!==null&&(zt(t,e,i,n),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),n=ur(e),i=$t(r,n);i.tag=2,t!=null&&(i.callback=t),t=ar(e,i,n),t!==null&&(zt(t,e,n,r),Fo(t,e,n))}};function bu(e,t,r,n,i,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,u):t.prototype&&t.prototype.isPureReactComponent?!Pn(r,n)||!Pn(i,a):!0}function ku(e,t,r){var n=!1,i=nr,a=t.contextType;return typeof a=="object"&&a!==null?a=mt(a):(i=Ke(t)?xr:Ue.current,n=t.contextTypes,a=(n=n!=null)?Vr(e,i):nr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Su(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function gs(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},rs(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=mt(a):(a=Ke(t)?xr:Ue.current,i.context=Vr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hs(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Jo.enqueueReplaceState(i,i.state,null),Bo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t){try{var r="",n=t;do r+=oe(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function xs(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function vs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,r){r=$t(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ei||(ei=!0,Is=n),vs(e,t)},r}function Cu(e,t,r){r=$t(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){vs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){vs(e,t),typeof n!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Nu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Kf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=dm.bind(null,e,t,r),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=$t(-1,1),t.tag=2,ar(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Xf=te.ReactCurrentOwner,Xe=!1;function Ye(e,t,r,n){t.child=e===null?qc(t,null,r,n):qr(t,e.child,r,n)}function zu(e,t,r,n,i){r=r.render;var a=t.ref;return Gr(t,i),n=cs(e,t,r,n,a,i),r=us(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ke&&r&&Ya(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Tu(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!Bs(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Pu(e,t,a,n,i)):(e=ai(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var u=a.memoizedProps;if(r=r.compare,r=r!==null?r:Pn,r(u,n)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=pr(a,n),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Pn(a,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ys(e,t,r,n,i)}function Mu(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(en,lt),lt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(en,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ve(en,lt),lt|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,ve(en,lt),lt|=n;return Ye(e,t,i,r),t.child}function Iu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,r,n,i){var a=Ke(r)?xr:Ue.current;return a=Vr(t,a),Gr(t,i),r=cs(e,t,r,n,a,i),n=us(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ke&&n&&Ya(t),t.flags|=1,Ye(e,t,r,i),t.child)}function _u(e,t,r,n,i){if(Ke(r)){var a=!0;Po(t)}else a=!1;if(Gr(t,i),t.stateNode===null)Qo(e,t),ku(t,r,n),gs(t,r,n,i),n=!0;else if(e===null){var u=t.stateNode,p=t.memoizedProps;u.props=p;var f=u.context,w=r.contextType;typeof w=="object"&&w!==null?w=mt(w):(w=Ke(r)?xr:Ue.current,w=Vr(t,w));var S=r.getDerivedStateFromProps,j=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function";j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==n||f!==w)&&Su(t,u,n,w),ir=!1;var k=t.memoizedState;u.state=k,Bo(t,n,u,i),f=t.memoizedState,p!==n||k!==f||Ge.current||ir?(typeof S=="function"&&(hs(t,r,S,n),f=t.memoizedState),(p=ir||bu(t,r,p,n,k,f,w))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),u.props=n,u.state=f,u.context=w,n=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Gc(e,t),p=t.memoizedProps,w=t.type===t.elementType?p:Nt(t.type,p),u.props=w,j=t.pendingProps,k=u.context,f=r.contextType,typeof f=="object"&&f!==null?f=mt(f):(f=Ke(r)?xr:Ue.current,f=Vr(t,f));var T=r.getDerivedStateFromProps;(S=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==j||k!==f)&&Su(t,u,n,f),ir=!1,k=t.memoizedState,u.state=k,Bo(t,n,u,i);var _=t.memoizedState;p!==j||k!==_||Ge.current||ir?(typeof T=="function"&&(hs(t,r,T,n),_=t.memoizedState),(w=ir||bu(t,r,w,n,k,_,f)||!1)?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,_,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,_,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=_),u.props=n,u.state=_,u.context=f,n=w):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return ws(e,t,r,n,a,i)}function ws(e,t,r,n,i,a){Iu(e,t);var u=(t.flags&128)!==0;if(!n&&!u)return i&&Fc(t,r,!1),Yt(e,t,a);n=t.stateNode,Xf.current=t;var p=u&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&u?(t.child=qr(t,e.child,null,a),t.child=qr(t,null,p,a)):Ye(e,t,p,a),t.memoizedState=n.state,i&&Fc(t,r,!0),t.child}function Ou(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),ns(e,t.containerInfo)}function Du(e,t,r,n,i){return Jr(),Ga(i),t.flags|=256,Ye(e,t,r,n),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,r){var n=t.pendingProps,i=Se.current,a=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Se,i&1),e===null)return Qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=n.children,e=n.fallback,a?(n=t.mode,a=t.child,u={mode:"hidden",children:u},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=si(u,n,0,null),e=Er(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ks(r),t.memoizedState=bs,e):Ss(t,u));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Zf(e,t,u,n,p,i,r);if(a){a=n.fallback,u=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(u&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=pr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=pr(p,a):(a=Er(a,u,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,u=e.child.memoizedState,u=u===null?ks(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~r,t.memoizedState=bs,n}return a=e.child,e=a.sibling,n=pr(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ss(e,t){return t=si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qo(e,t,r,n){return n!==null&&Ga(n),qr(t,e.child,null,r),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,r,n,i,a,u){if(r)return t.flags&256?(t.flags&=-257,n=xs(Error(l(422))),qo(e,t,u,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=si({mode:"visible",children:n.children},i,0,null),a=Er(a,i,u,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&qr(t,e.child,null,u),t.child.memoizedState=ks(u),t.memoizedState=bs,a);if((t.mode&1)===0)return qo(e,t,u,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,a=Error(l(419)),n=xs(a,n,void 0),qo(e,t,u,n)}if(p=(u&e.childLanes)!==0,Xe||p){if(n=_e,n!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|u))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Vt(e,i),zt(n,e,i,-1))}return Fs(),n=xs(Error(l(421))),qo(e,t,u,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,st=tr(i.nextSibling),at=t,ke=!0,Ct=null,e!==null&&(pt[ft++]=Wt,pt[ft++]=Ht,pt[ft++]=vr,Wt=e.id,Ht=e.overflow,vr=t),t=Ss(t,n.children),t.flags|=4096,t)}function Ru(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),es(e.return,t,r)}function js(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Fu(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Ye(e,t,n.children,r),n=Se.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,r,t);else if(e.tag===19)Ru(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ve(Se,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Uo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),js(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}js(t,!0,r,null,a);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function em(e,t,r){switch(t.tag){case 3:Ou(t),Jr();break;case 5:Zc(t);break;case 1:Ke(t.type)&&Po(t);break;case 4:ns(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ve(Ao,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ve(Se,Se.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Au(e,t,r):(ve(Se,Se.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);ve(Se,Se.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Fu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Se,Se.current),n)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,r)}return Yt(e,t,r)}var Bu,Cs,Uu,Wu;Bu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Cs=function(){},Uu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,br(It.current);var a=null;switch(r){case"input":i=ea(e,i),n=ea(e,n),a=[];break;case"select":i=z({},i,{value:void 0}),n=z({},n,{value:void 0}),a=[];break;case"textarea":i=na(e,i),n=na(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Lo)}ia(r,n);var u;r=null;for(w in i)if(!n.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var p=i[w];for(u in p)p.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(h.hasOwnProperty(w)?a||(a=[]):(a=a||[]).push(w,null));for(w in n){var f=n[w];if(p=i!=null?i[w]:void 0,n.hasOwnProperty(w)&&f!==p&&(f!=null||p!=null))if(w==="style")if(p){for(u in p)!p.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in f)f.hasOwnProperty(u)&&p[u]!==f[u]&&(r||(r={}),r[u]=f[u])}else r||(a||(a=[]),a.push(w,r)),r=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(h.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&ye("scroll",e),a||p===f||(a=[])):(a=a||[]).push(w,f))}r&&(a=a||[]).push("style",r);var w=a;(t.updateQueue=w)&&(t.flags|=4)}},Wu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Yn(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function tm(e,t,r){var n=t.pendingProps;switch(Ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&To(),He(t),null;case 3:return n=t.stateNode,Kr(),we(Ge),we(Ue),as(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ds(Ct),Ct=null))),Cs(e,t),He(t),null;case 5:os(t);var i=br(Un.current);if(r=t.type,e!==null&&t.stateNode!=null)Uu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(l(166));return He(t),null}if(e=br(It.current),Oo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Mt]=t,n[Dn]=a,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<In.length;i++)ye(In[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":kl(n,a),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ye("invalid",n);break;case"textarea":Cl(n,a),ye("invalid",n)}ia(r,a),i=null;for(var u in a)if(a.hasOwnProperty(u)){var p=a[u];u==="children"?typeof p=="string"?n.textContent!==p&&(a.suppressHydrationWarning!==!0&&Eo(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Eo(n.textContent,p,e),i=["children",""+p]):h.hasOwnProperty(u)&&p!=null&&u==="onScroll"&&ye("scroll",n)}switch(r){case"input":Ft(n),jl(n,a,!0);break;case"textarea":Ft(n),El(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Lo)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ll(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(r,{is:n.is}):(e=u.createElement(r),r==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,r),e[Mt]=t,e[Dn]=n,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(u=aa(r,n),r){case"dialog":ye("cancel",e),ye("close",e),i=n;break;case"iframe":case"object":case"embed":ye("load",e),i=n;break;case"video":case"audio":for(i=0;i<In.length;i++)ye(In[i],e);i=n;break;case"source":ye("error",e),i=n;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=n;break;case"details":ye("toggle",e),i=n;break;case"input":kl(e,n),i=ea(e,n),ye("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=z({},n,{value:void 0}),ye("invalid",e);break;case"textarea":Cl(e,n),i=na(e,n),ye("invalid",e);break;default:i=n}ia(r,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?Pl(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&zl(e,f)):a==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&mn(e,f):typeof f=="number"&&mn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(h.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ye("scroll",e):f!=null&&ae(e,a,f,u))}switch(r){case"input":Ft(e),jl(e,n,!1);break;case"textarea":Ft(e),El(e);break;case"option":n.value!=null&&e.setAttribute("value",""+se(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Mr(e,!!n.multiple,a,!1):n.defaultValue!=null&&Mr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Lo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(r=br(Un.current),br(It.current),Oo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Mt]=t,(a=n.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:Eo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Mt]=t,t.stateNode=n}return He(t),null;case 13:if(we(Se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$c(),Jr(),t.flags|=98560,a=!1;else if(a=Oo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Mt]=t}else Jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else Ct!==null&&(Ds(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?Me===0&&(Me=3):Fs())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Kr(),Cs(e,t),e===null&&_n(t.stateNode.containerInfo),He(t),null;case 10:return Za(t.type._context),He(t),null;case 17:return Ke(t.type)&&To(),He(t),null;case 19:if(we(Se),a=t.memoizedState,a===null)return He(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)Yn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Uo(e),u!==null){for(t.flags|=128,Yn(a,!1),n=u.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ve(Se,Se.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>tn&&(t.flags|=128,n=!0,Yn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Uo(u),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ke)return He(t),null}else 2*Ne()-a.renderingStartTime>tn&&r!==1073741824&&(t.flags|=128,n=!0,Yn(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(r=a.last,r!==null?r.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,r=Se.current,ve(Se,n?r&1|2:r&1),t):(He(t),null);case 22:case 23:return Rs(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(lt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function rm(e,t){switch(Ja(t),t.tag){case 1:return Ke(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),we(Ge),we(Ue),as(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(we(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Se),null;case 4:return Kr(),null;case 10:return Za(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var Go=!1,Ve=!1,nm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ce(e,t,n)}else r.current=null}function Ns(e,t,r){try{r()}catch(n){Ce(e,t,n)}}var Hu=!1;function om(e,t){if(Ra=go,e=bc(),Ta(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var u=0,p=-1,f=-1,w=0,S=0,j=e,k=null;t:for(;;){for(var T;j!==r||i!==0&&j.nodeType!==3||(p=u+i),j!==a||n!==0&&j.nodeType!==3||(f=u+n),j.nodeType===3&&(u+=j.nodeValue.length),(T=j.firstChild)!==null;)k=j,j=T;for(;;){if(j===e)break t;if(k===r&&++w===i&&(p=u),k===a&&++S===n&&(f=u),(T=j.nextSibling)!==null)break;j=k,k=j.parentNode}j=T}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fa={focusedElem:e,selectionRange:r},go=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var O=_.memoizedProps,Ee=_.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?O:Nt(t.type,O),Ee);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Ce(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return _=Hu,Hu=!1,_}function Jn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ns(t,r,a)}i=i.next}while(i!==n)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Es(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Dn],delete t[Ha],delete t[Bf],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Lo));else if(n!==4&&(e=e.child,e!==null))for(Ls(e,t,r),e=e.sibling;e!==null;)Ls(e,t,r),e=e.sibling}function zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(zs(e,t,r),e=e.sibling;e!==null;)zs(e,t,r),e=e.sibling}var Re=null,Et=!1;function sr(e,t,r){for(r=r.child;r!==null;)Ju(e,t,r),r=r.sibling}function Ju(e,t,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(co,r)}catch{}switch(r.tag){case 5:Ve||Zr(r,t);case 6:var n=Re,i=Et;Re=null,sr(e,t,r),Re=n,Et=i,Re!==null&&(Et?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(Et?(e=Re,r=r.stateNode,e.nodeType===8?Wa(e.parentNode,r):e.nodeType===1&&Wa(e,r),Cn(e)):Wa(Re,r.stateNode));break;case 4:n=Re,i=Et,Re=r.stateNode.containerInfo,Et=!0,sr(e,t,r),Re=n,Et=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&Ns(r,t,u),i=i.next}while(i!==n)}sr(e,t,r);break;case 1:if(!Ve&&(Zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){Ce(r,t,p)}sr(e,t,r);break;case 21:sr(e,t,r);break;case 22:r.mode&1?(Ve=(n=Ve)||r.memoizedState!==null,sr(e,t,r),Ve=n):sr(e,t,r);break;default:sr(e,t,r)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new nm),t.forEach(function(n){var i=fm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 5:Re=p.stateNode,Et=!1;break e;case 3:Re=p.stateNode.containerInfo,Et=!0;break e;case 4:Re=p.stateNode.containerInfo,Et=!0;break e}p=p.return}if(Re===null)throw Error(l(160));Ju(a,u,i),Re=null,Et=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(w){Ce(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Ot(e),n&4){try{Jn(3,e,e.return),Ko(3,e)}catch(O){Ce(e,e.return,O)}try{Jn(5,e,e.return)}catch(O){Ce(e,e.return,O)}}break;case 1:Lt(t,e),Ot(e),n&512&&r!==null&&Zr(r,r.return);break;case 5:if(Lt(t,e),Ot(e),n&512&&r!==null&&Zr(r,r.return),e.flags&32){var i=e.stateNode;try{mn(i,"")}catch(O){Ce(e,e.return,O)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,u=r!==null?r.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&Sl(i,a),aa(p,u);var w=aa(p,a);for(u=0;u<f.length;u+=2){var S=f[u],j=f[u+1];S==="style"?Pl(i,j):S==="dangerouslySetInnerHTML"?zl(i,j):S==="children"?mn(i,j):ae(i,S,j,w)}switch(p){case"input":ta(i,a);break;case"textarea":Nl(i,a);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var T=a.value;T!=null?Mr(i,!!a.multiple,T,!1):k!==!!a.multiple&&(a.defaultValue!=null?Mr(i,!!a.multiple,a.defaultValue,!0):Mr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Dn]=a}catch(O){Ce(e,e.return,O)}}break;case 6:if(Lt(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(O){Ce(e,e.return,O)}}break;case 3:if(Lt(t,e),Ot(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Cn(t.containerInfo)}catch(O){Ce(e,e.return,O)}break;case 4:Lt(t,e),Ot(e);break;case 13:Lt(t,e),Ot(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ms=Ne())),n&4&&qu(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Ve=(w=Ve)||S,Lt(t,e),Ve=w):Lt(t,e),Ot(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!S&&(e.mode&1)!==0)for(I=e,S=e.child;S!==null;){for(j=I=S;I!==null;){switch(k=I,T=k.child,k.tag){case 0:case 11:case 14:case 15:Jn(4,k,k.return);break;case 1:Zr(k,k.return);var _=k.stateNode;if(typeof _.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(O){Ce(n,r,O)}}break;case 5:Zr(k,k.return);break;case 22:if(k.memoizedState!==null){Xu(j);continue}}T!==null?(T.return=k,I=T):Xu(j)}S=S.sibling}e:for(S=null,j=e;;){if(j.tag===5){if(S===null){S=j;try{i=j.stateNode,w?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=j.stateNode,f=j.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Tl("display",u))}catch(O){Ce(e,e.return,O)}}}else if(j.tag===6){if(S===null)try{j.stateNode.nodeValue=w?"":j.memoizedProps}catch(O){Ce(e,e.return,O)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;S===j&&(S=null),j=j.return}S===j&&(S=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Lt(t,e),Ot(e),n&4&&qu(e);break;case 21:break;default:Lt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($u(r)){var n=r;break e}r=r.return}throw Error(l(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(mn(i,""),n.flags&=-33);var a=Yu(e);zs(e,a,i);break;case 3:case 4:var u=n.stateNode.containerInfo,p=Yu(e);Ls(e,p,u);break;default:throw Error(l(161))}}catch(f){Ce(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function im(e,t,r){I=e,Gu(e)}function Gu(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,a=i.child;if(i.tag===22&&n){var u=i.memoizedState!==null||Go;if(!u){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Ve;p=Go;var w=Ve;if(Go=u,(Ve=f)&&!w)for(I=i;I!==null;)u=I,f=u.child,u.tag===22&&u.memoizedState!==null?Zu(i):f!==null?(f.return=u,I=f):Zu(i);for(;a!==null;)I=a,Gu(a),a=a.sibling;I=i,Go=p,Ve=w}Ku(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,I=a):Ku(e)}}function Ku(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ko(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ve)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xc(t,a,n);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xc(t,u,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var S=w.memoizedState;if(S!==null){var j=S.dehydrated;j!==null&&Cn(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ve||t.flags&512&&Es(t)}catch(k){Ce(t,t.return,k)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function Xu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function Zu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ko(4,t)}catch(f){Ce(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){Ce(t,i,f)}}var a=t.return;try{Es(t)}catch(f){Ce(t,a,f)}break;case 5:var u=t.return;try{Es(t)}catch(f){Ce(t,u,f)}}}catch(f){Ce(t,t.return,f)}if(t===e){I=null;break}var p=t.sibling;if(p!==null){p.return=t.return,I=p;break}I=t.return}}var am=Math.ceil,Xo=te.ReactCurrentDispatcher,Ts=te.ReactCurrentOwner,gt=te.ReactCurrentBatchConfig,ce=0,_e=null,Le=null,Fe=0,lt=0,en=rr(0),Me=0,qn=null,Sr=0,Zo=0,Ps=0,Qn=null,Ze=null,Ms=0,tn=1/0,Jt=null,ei=!1,Is=null,lr=null,ti=!1,cr=null,ri=0,Gn=0,_s=null,ni=-1,oi=0;function Je(){return(ce&6)!==0?Ne():ni!==-1?ni:ni=Ne()}function ur(e){return(e.mode&1)===0?1:(ce&2)!==0&&Fe!==0?Fe&-Fe:Hf.transition!==null?(oi===0&&(oi=Yl()),oi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:tc(e.type)),e)}function zt(e,t,r,n){if(50<Gn)throw Gn=0,_s=null,Error(l(185));wn(e,r,n),((ce&2)===0||e!==_e)&&(e===_e&&((ce&2)===0&&(Zo|=r),Me===4&&dr(e,Fe)),et(e,n),r===1&&ce===0&&(t.mode&1)===0&&(tn=Ne()+500,Mo&&or()))}function et(e,t){var r=e.callbackNode;Wp(e,t);var n=fo(e,e===_e?Fe:0);if(n===0)r!==null&&Hl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Hl(r),t===1)e.tag===0?Wf(td.bind(null,e)):Bc(td.bind(null,e)),Rf(function(){(ce&6)===0&&or()}),r=null;else{switch(Jl(n)){case 1:r=fa;break;case 4:r=Vl;break;case 16:r=lo;break;case 536870912:r=$l;break;default:r=lo}r=cd(r,ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ed(e,t){if(ni=-1,oi=0,(ce&6)!==0)throw Error(l(327));var r=e.callbackNode;if(rn()&&e.callbackNode!==r)return null;var n=fo(e,e===_e?Fe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ii(e,n);else{t=n;var i=ce;ce|=2;var a=nd();(_e!==e||Fe!==t)&&(Jt=null,tn=Ne()+500,Cr(e,t));do try{cm();break}catch(p){rd(e,p)}while(!0);Xa(),Xo.current=a,ce=i,Le!==null?t=0:(_e=null,Fe=0,t=Me)}if(t!==0){if(t===2&&(i=ma(e),i!==0&&(n=i,t=Os(e,i))),t===1)throw r=qn,Cr(e,0),dr(e,n),et(e,Ne()),r;if(t===6)dr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!sm(i)&&(t=ii(e,n),t===2&&(a=ma(e),a!==0&&(n=a,t=Os(e,a))),t===1))throw r=qn,Cr(e,0),dr(e,n),et(e,Ne()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(l(345));case 2:Nr(e,Ze,Jt);break;case 3:if(dr(e,n),(n&130023424)===n&&(t=Ms+500-Ne(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ua(Nr.bind(null,e,Ze,Jt),t);break}Nr(e,Ze,Jt);break;case 4:if(dr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var u=31-St(n);a=1<<u,u=t[u],u>i&&(i=u),n&=~a}if(n=i,n=Ne()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*am(n/1960))-n,10<n){e.timeoutHandle=Ua(Nr.bind(null,e,Ze,Jt),n);break}Nr(e,Ze,Jt);break;case 5:Nr(e,Ze,Jt);break;default:throw Error(l(329))}}}return et(e,Ne()),e.callbackNode===r?ed.bind(null,e):null}function Os(e,t){var r=Qn;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=ii(e,t),e!==2&&(t=Ze,Ze=r,t!==null&&Ds(t)),e}function Ds(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function sm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!jt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Ps,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-St(t),n=1<<r;e[r]=-1,t&=~n}}function td(e){if((ce&6)!==0)throw Error(l(327));rn();var t=fo(e,0);if((t&1)===0)return et(e,Ne()),null;var r=ii(e,t);if(e.tag!==0&&r===2){var n=ma(e);n!==0&&(t=n,r=Os(e,n))}if(r===1)throw r=qn,Cr(e,0),dr(e,t),et(e,Ne()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,Ze,Jt),et(e,Ne()),null}function As(e,t){var r=ce;ce|=1;try{return e(t)}finally{ce=r,ce===0&&(tn=Ne()+500,Mo&&or())}}function jr(e){cr!==null&&cr.tag===0&&(ce&6)===0&&rn();var t=ce;ce|=1;var r=gt.transition,n=ge;try{if(gt.transition=null,ge=1,e)return e()}finally{ge=n,gt.transition=r,ce=t,(ce&6)===0&&or()}}function Rs(){lt=en.current,we(en)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Af(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(Ja(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&To();break;case 3:Kr(),we(Ge),we(Ue),as();break;case 5:os(n);break;case 4:Kr();break;case 13:we(Se);break;case 19:we(Se);break;case 10:Za(n.type._context);break;case 22:case 23:Rs()}r=r.return}if(_e=e,Le=e=pr(e.current,null),Fe=lt=t,Me=0,qn=null,Ps=Zo=Sr=0,Ze=Qn=null,wr!==null){for(t=0;t<wr.length;t++)if(r=wr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var u=a.next;a.next=i,n.next=u}r.pending=n}wr=null}return e}function rd(e,t){do{var r=Le;try{if(Xa(),Wo.current=Yo,Ho){for(var n=je.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ho=!1}if(kr=0,Ie=Pe=je=null,Wn=!1,Hn=0,Ts.current=null,r===null||r.return===null){Me=1,qn=t,Le=null;break}e:{var a=e,u=r.return,p=r,f=t;if(t=Fe,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,S=p,j=S.tag;if((S.mode&1)===0&&(j===0||j===11||j===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var T=Eu(u);if(T!==null){T.flags&=-257,Lu(T,u,p,a,t),T.mode&1&&Nu(a,w,t),t=T,f=w;var _=t.updateQueue;if(_===null){var O=new Set;O.add(f),t.updateQueue=O}else _.add(f);break e}else{if((t&1)===0){Nu(a,w,t),Fs();break e}f=Error(l(426))}}else if(ke&&p.mode&1){var Ee=Eu(u);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),Lu(Ee,u,p,a,t),Ga(Xr(f,p));break e}}a=f=Xr(f,p),Me!==4&&(Me=2),Qn===null?Qn=[a]:Qn.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=ju(a,f,t);Kc(a,x);break e;case 1:p=f;var m=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=Cu(a,p,t);Kc(a,C);break e}}a=a.return}while(a!==null)}id(r)}catch(D){t=D,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function nd(){var e=Xo.current;return Xo.current=Yo,e===null?Yo:e}function Fs(){(Me===0||Me===3||Me===2)&&(Me=4),_e===null||(Sr&268435455)===0&&(Zo&268435455)===0||dr(_e,Fe)}function ii(e,t){var r=ce;ce|=2;var n=nd();(_e!==e||Fe!==t)&&(Jt=null,Cr(e,t));do try{lm();break}catch(i){rd(e,i)}while(!0);if(Xa(),ce=r,Xo.current=n,Le!==null)throw Error(l(261));return _e=null,Fe=0,Me}function lm(){for(;Le!==null;)od(Le)}function cm(){for(;Le!==null&&!Ip();)od(Le)}function od(e){var t=ld(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?id(e):Le=t,Ts.current=null}function id(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=tm(r,t,lt),r!==null){Le=r;return}}else{if(r=rm(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function Nr(e,t,r){var n=ge,i=gt.transition;try{gt.transition=null,ge=1,um(e,t,r,n)}finally{gt.transition=i,ge=n}return null}function um(e,t,r,n){do rn();while(cr!==null);if((ce&6)!==0)throw Error(l(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Hp(e,a),e===_e&&(Le=_e=null,Fe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ti||(ti=!0,cd(lo,function(){return rn(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=gt.transition,gt.transition=null;var u=ge;ge=1;var p=ce;ce|=4,Ts.current=null,om(e,r),Qu(r,e),Tf(Fa),go=!!Ra,Fa=Ra=null,e.current=r,im(r),_p(),ce=p,ge=u,gt.transition=a}else e.current=r;if(ti&&(ti=!1,cr=e,ri=i),a=e.pendingLanes,a===0&&(lr=null),Ap(r.stateNode),et(e,Ne()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ei)throw ei=!1,e=Is,Is=null,e;return(ri&1)!==0&&e.tag!==0&&rn(),a=e.pendingLanes,(a&1)!==0?e===_s?Gn++:(Gn=0,_s=e):Gn=0,or(),null}function rn(){if(cr!==null){var e=Jl(ri),t=gt.transition,r=ge;try{if(gt.transition=null,ge=16>e?16:e,cr===null)var n=!1;else{if(e=cr,cr=null,ri=0,(ce&6)!==0)throw Error(l(331));var i=ce;for(ce|=4,I=e.current;I!==null;){var a=I,u=a.child;if((I.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var w=p[f];for(I=w;I!==null;){var S=I;switch(S.tag){case 0:case 11:case 15:Jn(8,S,a)}var j=S.child;if(j!==null)j.return=S,I=j;else for(;I!==null;){S=I;var k=S.sibling,T=S.return;if(Vu(S),S===w){I=null;break}if(k!==null){k.return=T,I=k;break}I=T}}}var _=a.alternate;if(_!==null){var O=_.child;if(O!==null){_.child=null;do{var Ee=O.sibling;O.sibling=null,O=Ee}while(O!==null)}}I=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,I=u;else e:for(;I!==null;){if(a=I,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Jn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,I=x;break e}I=a.return}}var m=e.current;for(I=m;I!==null;){u=I;var v=u.child;if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,I=v;else e:for(u=m;I!==null;){if(p=I,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Ko(9,p)}}catch(D){Ce(p,p.return,D)}if(p===u){I=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,I=C;break e}I=p.return}}if(ce=i,or(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(co,e)}catch{}n=!0}return n}finally{ge=r,gt.transition=t}}return!1}function ad(e,t,r){t=Xr(r,t),t=ju(e,t,1),e=ar(e,t,1),t=Je(),e!==null&&(wn(e,1,t),et(e,t))}function Ce(e,t,r){if(e.tag===3)ad(e,e,r);else for(;t!==null;){if(t.tag===3){ad(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(lr===null||!lr.has(n))){e=Xr(r,e),e=Cu(t,e,1),t=ar(t,e,1),e=Je(),t!==null&&(wn(t,1,e),et(t,e));break}}t=t.return}}function dm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Fe&r)===r&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>Ne()-Ms?Cr(e,0):Ps|=r),et(e,t)}function sd(e,t){t===0&&((e.mode&1)===0?t=1:(t=po,po<<=1,(po&130023424)===0&&(po=4194304)));var r=Je();e=Vt(e,t),e!==null&&(wn(e,t,r),et(e,r))}function pm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),sd(e,r)}function fm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(t),sd(e,r)}var ld;ld=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Xe=!1,em(e,t,r);Xe=(e.flags&131072)!==0}else Xe=!1,ke&&(t.flags&1048576)!==0&&Uc(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Qo(e,t),e=t.pendingProps;var i=Vr(t,Ue.current);Gr(t,r),i=cs(null,t,n,e,i,r);var a=us();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(n)?(a=!0,Po(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rs(t),i.updater=Jo,t.stateNode=i,i._reactInternals=t,gs(t,n,e,r),t=ws(null,t,n,!0,a,r)):(t.tag=0,ke&&a&&Ya(t),Ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=hm(n),e=Nt(n,e),i){case 0:t=ys(null,t,n,e,r);break e;case 1:t=_u(null,t,n,e,r);break e;case 11:t=zu(null,t,n,e,r);break e;case 14:t=Tu(null,t,n,Nt(n.type,e),r);break e}throw Error(l(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),ys(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),_u(e,t,n,i,r);case 3:e:{if(Ou(t),e===null)throw Error(l(387));n=t.pendingProps,a=t.memoizedState,i=a.element,Gc(e,t),Bo(t,n,null,r);var u=t.memoizedState;if(n=u.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Xr(Error(l(423)),t),t=Du(e,t,n,r,i);break e}else if(n!==i){i=Xr(Error(l(424)),t),t=Du(e,t,n,r,i);break e}else for(st=tr(t.stateNode.containerInfo.firstChild),at=t,ke=!0,Ct=null,r=qc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jr(),n===i){t=Yt(e,t,r);break e}Ye(e,t,n,r)}t=t.child}return t;case 5:return Zc(t),e===null&&Qa(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,u=i.children,Ba(n,i)?u=null:a!==null&&Ba(n,a)&&(t.flags|=32),Iu(e,t),Ye(e,t,u,r),t.child;case 6:return e===null&&Qa(t),null;case 13:return Au(e,t,r);case 4:return ns(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qr(t,null,n,r):Ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),zu(e,t,n,i,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,u=i.value,ve(Ao,n._currentValue),n._currentValue=u,a!==null)if(jt(a.value,u)){if(a.children===i.children&&!Ge.current){t=Yt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){u=a.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(a.tag===1){f=$t(-1,r&-r),f.tag=2;var w=a.updateQueue;if(w!==null){w=w.shared;var S=w.pending;S===null?f.next=f:(f.next=S.next,S.next=f),w.pending=f}}a.lanes|=r,f=a.alternate,f!==null&&(f.lanes|=r),es(a.return,r,t),p.lanes|=r;break}f=f.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(l(341));u.lanes|=r,p=u.alternate,p!==null&&(p.lanes|=r),es(u,r,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Gr(t,r),i=mt(i),n=n(i),t.flags|=1,Ye(e,t,n,r),t.child;case 14:return n=t.type,i=Nt(n,t.pendingProps),i=Nt(n.type,i),Tu(e,t,n,i,r);case 15:return Pu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),Qo(e,t),t.tag=1,Ke(n)?(e=!0,Po(t)):e=!1,Gr(t,r),ku(t,n,i),gs(t,n,i,r),ws(null,t,n,!0,e,r);case 19:return Fu(e,t,r);case 22:return Mu(e,t,r)}throw Error(l(156,t.tag))};function cd(e,t){return Wl(e,t)}function mm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,r,n){return new mm(e,t,r,n)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hm(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===dt)return 14}return 2}function pr(e,t){var r=e.alternate;return r===null?(r=xt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ai(e,t,r,n,i,a){var u=2;if(n=e,typeof e=="function")Bs(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case H:return Er(r.children,i,a,t);case Te:u=8,i|=8;break;case nt:return e=xt(12,r,t,i|2),e.elementType=nt,e.lanes=a,e;case $e:return e=xt(13,r,t,i),e.elementType=$e,e.lanes=a,e;case ot:return e=xt(19,r,t,i),e.elementType=ot,e.lanes=a,e;case xe:return si(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:u=10;break e;case Rt:u=9;break e;case ut:u=11;break e;case dt:u=14;break e;case Be:u=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=xt(u,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Er(e,t,r,n){return e=xt(7,e,n,t),e.lanes=r,e}function si(e,t,r,n){return e=xt(22,e,n,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Us(e,t,r){return e=xt(6,e,null,t),e.lanes=r,e}function Ws(e,t,r){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gm(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hs(e,t,r,n,i,a,u,p,f){return e=new gm(e,t,r,p,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=xt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(a),e}function xm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ud(e){if(!e)return nr;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(Ke(r))return Rc(e,r,t)}return t}function dd(e,t,r,n,i,a,u,p,f){return e=Hs(r,n,!0,e,i,a,u,p,f),e.context=ud(null),r=e.current,n=Je(),i=ur(r),a=$t(n,i),a.callback=t!=null?t:null,ar(r,a,i),e.current.lanes=i,wn(e,i,n),et(e,n),e}function li(e,t,r,n){var i=t.current,a=Je(),u=ur(i);return r=ud(r),t.context===null?t.context=r:t.pendingContext=r,t=$t(a,u),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ar(i,t,u),e!==null&&(zt(e,i,u,a),Fo(e,i,u)),u}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Vs(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function vm(){return null}var fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}ui.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));li(e,t,null,null)},ui.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){li(null,e,null,null)}),t[Bt]=null}};function ui(e){this._internalRoot=e}ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xt.length&&t!==0&&t<Xt[r].priority;r++);Xt.splice(r,0,e),r===0&&Zl(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function ym(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var w=ci(u);a.call(w)}}var u=dd(t,n,e,0,null,!1,!1,"",md);return e._reactRootContainer=u,e[Bt]=u.current,_n(e.nodeType===8?e.parentNode:e),jr(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var w=ci(f);p.call(w)}}var f=Hs(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=f,e[Bt]=f.current,_n(e.nodeType===8?e.parentNode:e),jr(function(){li(t,f,r,n)}),f}function pi(e,t,r,n,i){var a=r._reactRootContainer;if(a){var u=a;if(typeof i=="function"){var p=i;i=function(){var f=ci(u);p.call(f)}}li(t,u,e,i)}else u=ym(r,t,e,i,n);return ci(u)}ql=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yn(t.pendingLanes);r!==0&&(ga(t,r|1),et(t,Ne()),(ce&6)===0&&(tn=Ne()+500,or()))}break;case 13:jr(function(){var n=Vt(e,1);if(n!==null){var i=Je();zt(n,e,1,i)}}),Vs(e,1)}},xa=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var r=Je();zt(t,e,134217728,r)}Vs(e,134217728)}},Ql=function(e){if(e.tag===13){var t=ur(e),r=Vt(e,t);if(r!==null){var n=Je();zt(r,e,t,n)}Vs(e,t)}},Gl=function(){return ge},Kl=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},ca=function(e,t,r){switch(t){case"input":if(ta(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=zo(n);if(!i)throw Error(l(90));kt(n),ta(n,i)}}}break;case"textarea":Nl(e,r);break;case"select":t=r.value,t!=null&&Mr(e,!!r.multiple,t,!1)}},Ol=As,Dl=jr;var wm={usingClientEntryPoint:!1,Events:[An,Wr,zo,Il,_l,As]},Kn={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bl(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{co=fi.inject(bm),Pt=fi}catch{}}return tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm,tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(l(200));return xm(e,t,null,r)},tt.createRoot=function(e,t){if(!Ys(e))throw Error(l(299));var r=!1,n="",i=fd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hs(e,1,!1,null,null,r,!1,n,i),e[Bt]=t.current,_n(e.nodeType===8?e.parentNode:e),new $s(t)},tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Bl(t),e=e===null?null:e.stateNode,e},tt.flushSync=function(e){return jr(e)},tt.hydrate=function(e,t,r){if(!di(t))throw Error(l(200));return pi(null,e,t,!0,r)},tt.hydrateRoot=function(e,t,r){if(!Ys(e))throw Error(l(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",u=fd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=dd(t,null,e,1,r!=null?r:null,i,!1,a,u),e[Bt]=t.current,_n(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ui(t)},tt.render=function(e,t,r){if(!di(t))throw Error(l(200));return pi(null,e,t,!1,r)},tt.unmountComponentAtNode=function(e){if(!di(e))throw Error(l(40));return e._reactRootContainer?(jr(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},tt.unstable_batchedUpdates=As,tt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!di(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return pi(e,t,r,!1,n)},tt.version="18.3.1-next-f1338f8080-20240426",tt}var kd;function Tm(){if(kd)return Qs.exports;kd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Qs.exports=zm(),Qs.exports}var Sd;function Pm(){if(Sd)return mi;Sd=1;var o=Tm();return mi.createRoot=o.createRoot,mi.hydrateRoot=o.hydrateRoot,mi}var Mm=Pm(),ee=pl();const vt=Sm(ee);var rt=function(){return rt=Object.assign||function(d){for(var l,c=1,h=arguments.length;c<h;c++){l=arguments[c];for(var y in l)Object.prototype.hasOwnProperty.call(l,y)&&(d[y]=l[y])}return d},rt.apply(this,arguments)};function Ai(o,d,l){if(l||arguments.length===2)for(var c=0,h=d.length,y;c<h;c++)(y||!(c in d))&&(y||(y=Array.prototype.slice.call(d,0,c)),y[c]=d[c]);return o.concat(y||Array.prototype.slice.call(d))}var be="-ms-",eo="-moz-",he="-webkit-",$d="comm",$i="rule",fl="decl",Im="@import",Yd="@keyframes",_m="@layer",Jd=Math.abs,ml=String.fromCharCode,nl=Object.assign;function Om(o,d){return De(o,0)^45?(((d<<2^De(o,0))<<2^De(o,1))<<2^De(o,2))<<2^De(o,3):0}function qd(o){return o.trim()}function qt(o,d){return(o=d.exec(o))?o[0]:o}function Z(o,d,l){return o.replace(d,l)}function Mi(o,d,l){return o.indexOf(d,l)}function De(o,d){return o.charCodeAt(d)|0}function an(o,d,l){return o.slice(d,l)}function Dt(o){return o.length}function Qd(o){return o.length}function Zn(o,d){return d.push(o),o}function Dm(o,d){return o.map(d).join("")}function jd(o,d){return o.filter(function(l){return!qt(l,d)})}var Yi=1,sn=1,Gd=0,wt=0,ze=0,pn="";function Ji(o,d,l,c,h,y,N,M){return{value:o,root:d,parent:l,type:c,props:h,children:y,line:Yi,column:sn,length:N,return:"",siblings:M}}function mr(o,d){return nl(Ji("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},d)}function nn(o){for(;o.root;)o=mr(o.root,{children:[o]});Zn(o,o.siblings)}function Am(){return ze}function Rm(){return ze=wt>0?De(pn,--wt):0,sn--,ze===10&&(sn=1,Yi--),ze}function Tt(){return ze=wt<Gd?De(pn,wt++):0,sn++,ze===10&&(sn=1,Yi++),ze}function zr(){return De(pn,wt)}function Ii(){return wt}function qi(o,d){return an(pn,o,d)}function ol(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fm(o){return Yi=sn=1,Gd=Dt(pn=o),wt=0,[]}function Bm(o){return pn="",o}function Xs(o){return qd(qi(wt-1,il(o===91?o+2:o===40?o+1:o)))}function Um(o){for(;(ze=zr())&&ze<33;)Tt();return ol(o)>2||ol(ze)>3?"":" "}function Wm(o,d){for(;--d&&Tt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return qi(o,Ii()+(d<6&&zr()==32&&Tt()==32))}function il(o){for(;Tt();)switch(ze){case o:return wt;case 34:case 39:o!==34&&o!==39&&il(ze);break;case 40:o===41&&il(o);break;case 92:Tt();break}return wt}function Hm(o,d){for(;Tt()&&o+ze!==57;)if(o+ze===84&&zr()===47)break;return"/*"+qi(d,wt-1)+"*"+ml(o===47?o:Tt())}function Vm(o){for(;!ol(zr());)Tt();return qi(o,wt)}function $m(o){return Bm(_i("",null,null,null,[""],o=Fm(o),0,[0],o))}function _i(o,d,l,c,h,y,N,M,E){for(var J=0,$=0,F=N,B=0,q=0,ie=0,Y=1,K=1,me=1,le=0,ae="",te=h,pe=y,Q=c,H=ae;K;)switch(ie=le,le=Tt()){case 40:if(ie!=108&&De(H,F-1)==58){Mi(H+=Z(Xs(le),"&","&\f"),"&\f",Jd(J?M[J-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:H+=Xs(le);break;case 9:case 10:case 13:case 32:H+=Um(ie);break;case 92:H+=Wm(Ii()-1,7);continue;case 47:switch(zr()){case 42:case 47:Zn(Ym(Hm(Tt(),Ii()),d,l,E),E);break;default:H+="/"}break;case 123*Y:M[J++]=Dt(H)*me;case 125*Y:case 59:case 0:switch(le){case 0:case 125:K=0;case 59+$:me==-1&&(H=Z(H,/\f/g,"")),q>0&&Dt(H)-F&&Zn(q>32?Nd(H+";",c,l,F-1,E):Nd(Z(H," ","")+";",c,l,F-2,E),E);break;case 59:H+=";";default:if(Zn(Q=Cd(H,d,l,J,$,h,M,ae,te=[],pe=[],F,y),y),le===123)if($===0)_i(H,d,Q,Q,te,y,F,M,pe);else switch(B===99&&De(H,3)===110?100:B){case 100:case 108:case 109:case 115:_i(o,Q,Q,c&&Zn(Cd(o,Q,Q,0,0,h,M,ae,h,te=[],F,pe),pe),h,pe,F,M,c?te:pe);break;default:_i(H,Q,Q,Q,[""],pe,0,M,pe)}}J=$=q=0,Y=me=1,ae=H="",F=N;break;case 58:F=1+Dt(H),q=ie;default:if(Y<1){if(le==123)--Y;else if(le==125&&Y++==0&&Rm()==125)continue}switch(H+=ml(le),le*Y){case 38:me=$>0?1:(H+="\f",-1);break;case 44:M[J++]=(Dt(H)-1)*me,me=1;break;case 64:zr()===45&&(H+=Xs(Tt())),B=zr(),$=F=Dt(ae=H+=Vm(Ii())),le++;break;case 45:ie===45&&Dt(H)==2&&(Y=0)}}return y}function Cd(o,d,l,c,h,y,N,M,E,J,$,F){for(var B=h-1,q=h===0?y:[""],ie=Qd(q),Y=0,K=0,me=0;Y<c;++Y)for(var le=0,ae=an(o,B+1,B=Jd(K=N[Y])),te=o;le<ie;++le)(te=qd(K>0?q[le]+" "+ae:Z(ae,/&\f/g,q[le])))&&(E[me++]=te);return Ji(o,d,l,h===0?$i:M,E,J,$,F)}function Ym(o,d,l,c){return Ji(o,d,l,$d,ml(Am()),an(o,2,-2),0,c)}function Nd(o,d,l,c,h){return Ji(o,d,l,fl,an(o,0,c),an(o,c+1,-1),c,h)}function Kd(o,d,l){switch(Om(o,d)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+o+o;case 4789:return eo+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+eo+o+be+o+o;case 5936:switch(De(o,d+11)){case 114:return he+o+be+Z(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+be+Z(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+be+Z(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+be+o+o;case 6165:return he+o+be+"flex-"+o+o;case 5187:return he+o+Z(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+be+"flex-$1$2")+o;case 5443:return he+o+be+"flex-item-"+Z(o,/flex-|-self/g,"")+(qt(o,/flex-|baseline/)?"":be+"grid-row-"+Z(o,/flex-|-self/g,""))+o;case 4675:return he+o+be+"flex-line-pack"+Z(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+be+Z(o,"shrink","negative")+o;case 5292:return he+o+be+Z(o,"basis","preferred-size")+o;case 6060:return he+"box-"+Z(o,"-grow","")+he+o+be+Z(o,"grow","positive")+o;case 4554:return he+Z(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return Z(Z(Z(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return Z(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+o+o;case 4200:if(!qt(o,/flex-|baseline/))return be+"grid-column-align"+an(o,d)+o;break;case 2592:case 3360:return be+Z(o,"template-","")+o;case 4384:case 3616:return l&&l.some(function(c,h){return d=h,qt(c.props,/grid-\w+-end/)})?~Mi(o+(l=l[d].value),"span",0)?o:be+Z(o,"-start","")+o+be+"grid-row-span:"+(~Mi(l,"span",0)?qt(l,/\d+/):+qt(l,/\d+/)-+qt(o,/\d+/))+";":be+Z(o,"-start","")+o;case 4896:case 4128:return l&&l.some(function(c){return qt(c.props,/grid-\w+-start/)})?o:be+Z(Z(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return Z(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(o)-1-d>6)switch(De(o,d+1)){case 109:if(De(o,d+4)!==45)break;case 102:return Z(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+eo+(De(o,d+3)==108?"$3":"$2-$3"))+o;case 115:return~Mi(o,"stretch",0)?Kd(Z(o,"stretch","fill-available"),d,l)+o:o}break;case 5152:case 5920:return Z(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,h,y,N,M,E,J){return be+h+":"+y+J+(N?be+h+"-span:"+(M?E:+E-+y)+J:"")+o});case 4949:if(De(o,d+6)===121)return Z(o,":",":"+he)+o;break;case 6444:switch(De(o,De(o,14)===45?18:11)){case 120:return Z(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+be+"$2box$3")+o;case 100:return Z(o,":",":"+be)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(o,"scroll-","scroll-snap-")+o}return o}function Ri(o,d){for(var l="",c=0;c<o.length;c++)l+=d(o[c],c,o,d)||"";return l}function Jm(o,d,l,c){switch(o.type){case _m:if(o.children.length)break;case Im:case fl:return o.return=o.return||o.value;case $d:return"";case Yd:return o.return=o.value+"{"+Ri(o.children,c)+"}";case $i:if(!Dt(o.value=o.props.join(",")))return""}return Dt(l=Ri(o.children,c))?o.return=o.value+"{"+l+"}":""}function qm(o){var d=Qd(o);return function(l,c,h,y){for(var N="",M=0;M<d;M++)N+=o[M](l,c,h,y)||"";return N}}function Qm(o){return function(d){d.root||(d=d.return)&&o(d)}}function Gm(o,d,l,c){if(o.length>-1&&!o.return)switch(o.type){case fl:o.return=Kd(o.value,o.length,l);return;case Yd:return Ri([mr(o,{value:Z(o.value,"@","@"+he)})],c);case $i:if(o.length)return Dm(l=o.props,function(h){switch(qt(h,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(mr(o,{props:[Z(h,/:(read-\w+)/,":"+eo+"$1")]})),nn(mr(o,{props:[h]})),nl(o,{props:jd(l,c)});break;case"::placeholder":nn(mr(o,{props:[Z(h,/:(plac\w+)/,":"+he+"input-$1")]})),nn(mr(o,{props:[Z(h,/:(plac\w+)/,":"+eo+"$1")]})),nn(mr(o,{props:[Z(h,/:(plac\w+)/,be+"input-$1")]})),nn(mr(o,{props:[h]})),nl(o,{props:jd(l,c)});break}return""})}}var Km={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct={},ln=typeof process!="undefined"&&ct!==void 0&&(ct.REACT_APP_SC_ATTR||ct.SC_ATTR)||"data-styled",Xd="active",Zd="data-styled-version",Qi="6.1.18",hl=`/*!sc*/
`,Fi=typeof window!="undefined"&&typeof document!="undefined",Xm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ct!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==""?ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ct!==void 0&&ct.SC_DISABLE_SPEEDY!==void 0&&ct.SC_DISABLE_SPEEDY!==""&&ct.SC_DISABLE_SPEEDY!=="false"&&ct.SC_DISABLE_SPEEDY),Gi=Object.freeze([]),cn=Object.freeze({});function Zm(o,d,l){return l===void 0&&(l=cn),o.theme!==l.theme&&o.theme||d||l.theme}var ep=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,th=/(^-|-$)/g;function Ed(o){return o.replace(eh,"-").replace(th,"")}var rh=/(a)(d)/gi,hi=52,Ld=function(o){return String.fromCharCode(o+(o>25?39:97))};function al(o){var d,l="";for(d=Math.abs(o);d>hi;d=d/hi|0)l=Ld(d%hi)+l;return(Ld(d%hi)+l).replace(rh,"$1-$2")}var Zs,tp=5381,on=function(o,d){for(var l=d.length;l;)o=33*o^d.charCodeAt(--l);return o},rp=function(o){return on(tp,o)};function nh(o){return al(rp(o)>>>0)}function oh(o){return o.displayName||o.name||"Component"}function el(o){return typeof o=="string"&&!0}var np=typeof Symbol=="function"&&Symbol.for,op=np?Symbol.for("react.memo"):60115,ih=np?Symbol.for("react.forward_ref"):60112,ah={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lh=((Zs={})[ih]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zs[op]=ip,Zs);function zd(o){return("type"in(d=o)&&d.type.$$typeof)===op?ip:"$$typeof"in o?lh[o.$$typeof]:ah;var d}var ch=Object.defineProperty,uh=Object.getOwnPropertyNames,Td=Object.getOwnPropertySymbols,dh=Object.getOwnPropertyDescriptor,ph=Object.getPrototypeOf,Pd=Object.prototype;function ap(o,d,l){if(typeof d!="string"){if(Pd){var c=ph(d);c&&c!==Pd&&ap(o,c,l)}var h=uh(d);Td&&(h=h.concat(Td(d)));for(var y=zd(o),N=zd(d),M=0;M<h.length;++M){var E=h[M];if(!(E in sh||l&&l[E]||N&&E in N||y&&E in y)){var J=dh(d,E);try{ch(o,E,J)}catch{}}}}return o}function un(o){return typeof o=="function"}function gl(o){return typeof o=="object"&&"styledComponentId"in o}function Lr(o,d){return o&&d?"".concat(o," ").concat(d):o||d||""}function Md(o,d){if(o.length===0)return"";for(var l=o[0],c=1;c<o.length;c++)l+=o[c];return l}function to(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function sl(o,d,l){if(l===void 0&&(l=!1),!l&&!to(o)&&!Array.isArray(o))return d;if(Array.isArray(d))for(var c=0;c<d.length;c++)o[c]=sl(o[c],d[c]);else if(to(d))for(var c in d)o[c]=sl(o[c],d[c]);return o}function xl(o,d){Object.defineProperty(o,"toString",{value:d})}function no(o){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var fh=(function(){function o(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d}return o.prototype.indexOfGroup=function(d){for(var l=0,c=0;c<d;c++)l+=this.groupSizes[c];return l},o.prototype.insertRules=function(d,l){if(d>=this.groupSizes.length){for(var c=this.groupSizes,h=c.length,y=h;d>=y;)if((y<<=1)<0)throw no(16,"".concat(d));this.groupSizes=new Uint32Array(y),this.groupSizes.set(c),this.length=y;for(var N=h;N<y;N++)this.groupSizes[N]=0}for(var M=this.indexOfGroup(d+1),E=(N=0,l.length);N<E;N++)this.tag.insertRule(M,l[N])&&(this.groupSizes[d]++,M++)},o.prototype.clearGroup=function(d){if(d<this.length){var l=this.groupSizes[d],c=this.indexOfGroup(d),h=c+l;this.groupSizes[d]=0;for(var y=c;y<h;y++)this.tag.deleteRule(c)}},o.prototype.getGroup=function(d){var l="";if(d>=this.length||this.groupSizes[d]===0)return l;for(var c=this.groupSizes[d],h=this.indexOfGroup(d),y=h+c,N=h;N<y;N++)l+="".concat(this.tag.getRule(N)).concat(hl);return l},o})(),Oi=new Map,Bi=new Map,Di=1,gi=function(o){if(Oi.has(o))return Oi.get(o);for(;Bi.has(Di);)Di++;var d=Di++;return Oi.set(o,d),Bi.set(d,o),d},mh=function(o,d){Di=d+1,Oi.set(o,d),Bi.set(d,o)},hh="style[".concat(ln,"][").concat(Zd,'="').concat(Qi,'"]'),gh=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xh=function(o,d,l){for(var c,h=l.split(","),y=0,N=h.length;y<N;y++)(c=h[y])&&o.registerName(d,c)},vh=function(o,d){for(var l,c=((l=d.textContent)!==null&&l!==void 0?l:"").split(hl),h=[],y=0,N=c.length;y<N;y++){var M=c[y].trim();if(M){var E=M.match(gh);if(E){var J=0|parseInt(E[1],10),$=E[2];J!==0&&(mh($,J),xh(o,$,E[3]),o.getTag().insertRules(J,h)),h.length=0}else h.push(M)}}},Id=function(o){for(var d=document.querySelectorAll(hh),l=0,c=d.length;l<c;l++){var h=d[l];h&&h.getAttribute(ln)!==Xd&&(vh(o,h),h.parentNode&&h.parentNode.removeChild(h))}};function yh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var sp=function(o){var d=document.head,l=o||d,c=document.createElement("style"),h=(function(M){var E=Array.from(M.querySelectorAll("style[".concat(ln,"]")));return E[E.length-1]})(l),y=h!==void 0?h.nextSibling:null;c.setAttribute(ln,Xd),c.setAttribute(Zd,Qi);var N=yh();return N&&c.setAttribute("nonce",N),l.insertBefore(c,y),c},wh=(function(){function o(d){this.element=sp(d),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var c=document.styleSheets,h=0,y=c.length;h<y;h++){var N=c[h];if(N.ownerNode===l)return N}throw no(17)})(this.element),this.length=0}return o.prototype.insertRule=function(d,l){try{return this.sheet.insertRule(l,d),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},o.prototype.getRule=function(d){var l=this.sheet.cssRules[d];return l&&l.cssText?l.cssText:""},o})(),bh=(function(){function o(d){this.element=sp(d),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(d,l){if(d<=this.length&&d>=0){var c=document.createTextNode(l);return this.element.insertBefore(c,this.nodes[d]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},o.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},o})(),kh=(function(){function o(d){this.rules=[],this.length=0}return o.prototype.insertRule=function(d,l){return d<=this.length&&(this.rules.splice(d,0,l),this.length++,!0)},o.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},o.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},o})(),_d=Fi,Sh={isServer:!Fi,useCSSOMInjection:!Xm},lp=(function(){function o(d,l,c){d===void 0&&(d=cn),l===void 0&&(l={});var h=this;this.options=rt(rt({},Sh),d),this.gs=l,this.names=new Map(c),this.server=!!d.isServer,!this.server&&Fi&&_d&&(_d=!1,Id(this)),xl(this,function(){return(function(y){for(var N=y.getTag(),M=N.length,E="",J=function(F){var B=(function(me){return Bi.get(me)})(F);if(B===void 0)return"continue";var q=y.names.get(B),ie=N.getGroup(F);if(q===void 0||!q.size||ie.length===0)return"continue";var Y="".concat(ln,".g").concat(F,'[id="').concat(B,'"]'),K="";q!==void 0&&q.forEach(function(me){me.length>0&&(K+="".concat(me,","))}),E+="".concat(ie).concat(Y,'{content:"').concat(K,'"}').concat(hl)},$=0;$<M;$++)J($);return E})(h)})}return o.registerId=function(d){return gi(d)},o.prototype.rehydrate=function(){!this.server&&Fi&&Id(this)},o.prototype.reconstructWithOptions=function(d,l){return l===void 0&&(l=!0),new o(rt(rt({},this.options),d),this.gs,l&&this.names||void 0)},o.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(d=(function(l){var c=l.useCSSOMInjection,h=l.target;return l.isServer?new kh(h):c?new wh(h):new bh(h)})(this.options),new fh(d)));var d},o.prototype.hasNameForId=function(d,l){return this.names.has(d)&&this.names.get(d).has(l)},o.prototype.registerName=function(d,l){if(gi(d),this.names.has(d))this.names.get(d).add(l);else{var c=new Set;c.add(l),this.names.set(d,c)}},o.prototype.insertRules=function(d,l,c){this.registerName(d,l),this.getTag().insertRules(gi(d),c)},o.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},o.prototype.clearRules=function(d){this.getTag().clearGroup(gi(d)),this.clearNames(d)},o.prototype.clearTag=function(){this.tag=void 0},o})(),jh=/&/g,Ch=/^\s*\/\/.*$/gm;function cp(o,d){return o.map(function(l){return l.type==="rule"&&(l.value="".concat(d," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(d," ")),l.props=l.props.map(function(c){return"".concat(d," ").concat(c)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=cp(l.children,d)),l})}function Nh(o){var d,l,c,h=cn,y=h.options,N=y===void 0?cn:y,M=h.plugins,E=M===void 0?Gi:M,J=function(B,q,ie){return ie.startsWith(l)&&ie.endsWith(l)&&ie.replaceAll(l,"").length>0?".".concat(d):B},$=E.slice();$.push(function(B){B.type===$i&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(jh,l).replace(c,J))}),N.prefix&&$.push(Gm),$.push(Jm);var F=function(B,q,ie,Y){q===void 0&&(q=""),ie===void 0&&(ie=""),Y===void 0&&(Y="&"),d=Y,l=q,c=new RegExp("\\".concat(l,"\\b"),"g");var K=B.replace(Ch,""),me=$m(ie||q?"".concat(ie," ").concat(q," { ").concat(K," }"):K);N.namespace&&(me=cp(me,N.namespace));var le=[];return Ri(me,qm($.concat(Qm(function(ae){return le.push(ae)})))),le};return F.hash=E.length?E.reduce(function(B,q){return q.name||no(15),on(B,q.name)},tp).toString():"",F}var Eh=new lp,ll=Nh(),up=vt.createContext({shouldForwardProp:void 0,styleSheet:Eh,stylis:ll});up.Consumer;vt.createContext(void 0);function Od(){return ee.useContext(up)}var Lh=(function(){function o(d,l){var c=this;this.inject=function(h,y){y===void 0&&(y=ll);var N=c.name+y.hash;h.hasNameForId(c.id,N)||h.insertRules(c.id,N,y(c.rules,N,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=l,xl(this,function(){throw no(12,String(c.name))})}return o.prototype.getName=function(d){return d===void 0&&(d=ll),this.name+d.hash},o})(),zh=function(o){return o>="A"&&o<="Z"};function Dd(o){for(var d="",l=0;l<o.length;l++){var c=o[l];if(l===1&&c==="-"&&o[0]==="-")return o;zh(c)?d+="-"+c.toLowerCase():d+=c}return d.startsWith("ms-")?"-"+d:d}var dp=function(o){return o==null||o===!1||o===""},pp=function(o){var d,l,c=[];for(var h in o){var y=o[h];o.hasOwnProperty(h)&&!dp(y)&&(Array.isArray(y)&&y.isCss||un(y)?c.push("".concat(Dd(h),":"),y,";"):to(y)?c.push.apply(c,Ai(Ai(["".concat(h," {")],pp(y),!1),["}"],!1)):c.push("".concat(Dd(h),": ").concat((d=h,(l=y)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||d in Km||d.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return c};function Tr(o,d,l,c){if(dp(o))return[];if(gl(o))return[".".concat(o.styledComponentId)];if(un(o)){if(!un(y=o)||y.prototype&&y.prototype.isReactComponent||!d)return[o];var h=o(d);return Tr(h,d,l,c)}var y;return o instanceof Lh?l?(o.inject(l,c),[o.getName(c)]):[o]:to(o)?pp(o):Array.isArray(o)?Array.prototype.concat.apply(Gi,o.map(function(N){return Tr(N,d,l,c)})):[o.toString()]}function Th(o){for(var d=0;d<o.length;d+=1){var l=o[d];if(un(l)&&!gl(l))return!1}return!0}var Ph=rp(Qi),Mh=(function(){function o(d,l,c){this.rules=d,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Th(d),this.componentId=l,this.baseHash=on(Ph,l),this.baseStyle=c,lp.registerId(l)}return o.prototype.generateAndInjectStyles=function(d,l,c){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,l,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))h=Lr(h,this.staticRulesId);else{var y=Md(Tr(this.rules,d,l,c)),N=al(on(this.baseHash,y)>>>0);if(!l.hasNameForId(this.componentId,N)){var M=c(y,".".concat(N),void 0,this.componentId);l.insertRules(this.componentId,N,M)}h=Lr(h,N),this.staticRulesId=N}else{for(var E=on(this.baseHash,c.hash),J="",$=0;$<this.rules.length;$++){var F=this.rules[$];if(typeof F=="string")J+=F;else if(F){var B=Md(Tr(F,d,l,c));E=on(E,B+$),J+=B}}if(J){var q=al(E>>>0);l.hasNameForId(this.componentId,q)||l.insertRules(this.componentId,q,c(J,".".concat(q),void 0,this.componentId)),h=Lr(h,q)}}return h},o})(),fp=vt.createContext(void 0);fp.Consumer;var tl={};function Ih(o,d,l){var c=gl(o),h=o,y=!el(o),N=d.attrs,M=N===void 0?Gi:N,E=d.componentId,J=E===void 0?(function(te,pe){var Q=typeof te!="string"?"sc":Ed(te);tl[Q]=(tl[Q]||0)+1;var H="".concat(Q,"-").concat(nh(Qi+Q+tl[Q]));return pe?"".concat(pe,"-").concat(H):H})(d.displayName,d.parentComponentId):E,$=d.displayName,F=$===void 0?(function(te){return el(te)?"styled.".concat(te):"Styled(".concat(oh(te),")")})(o):$,B=d.displayName&&d.componentId?"".concat(Ed(d.displayName),"-").concat(d.componentId):d.componentId||J,q=c&&h.attrs?h.attrs.concat(M).filter(Boolean):M,ie=d.shouldForwardProp;if(c&&h.shouldForwardProp){var Y=h.shouldForwardProp;if(d.shouldForwardProp){var K=d.shouldForwardProp;ie=function(te,pe){return Y(te,pe)&&K(te,pe)}}else ie=Y}var me=new Mh(l,B,c?h.componentStyle:void 0);function le(te,pe){return(function(Q,H,Te){var nt=Q.attrs,bt=Q.componentStyle,Rt=Q.defaultProps,ut=Q.foldedComponentIds,$e=Q.styledComponentId,ot=Q.target,dt=vt.useContext(fp),Be=Od(),xe=Q.shouldForwardProp||Be.shouldForwardProp,L=Zm(H,dt,Rt)||cn,A=(function(oe,re,fe){for(var se,ue=rt(rt({},re),{className:void 0,theme:fe}),Ae=0;Ae<oe.length;Ae+=1){var Ft=un(se=oe[Ae])?se(ue):se;for(var kt in Ft)ue[kt]=kt==="className"?Lr(ue[kt],Ft[kt]):kt==="style"?rt(rt({},ue[kt]),Ft[kt]):Ft[kt]}return re.className&&(ue.className=Lr(ue.className,re.className)),ue})(nt,H,L),z=A.as||ot,g={};for(var b in A)A[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&A.theme===L||(b==="forwardedAs"?g.as=A.forwardedAs:xe&&!xe(b,z)||(g[b]=A[b]));var G=(function(oe,re){var fe=Od(),se=oe.generateAndInjectStyles(re,fe.styleSheet,fe.stylis);return se})(bt,A),X=Lr(ut,$e);return G&&(X+=" "+G),A.className&&(X+=" "+A.className),g[el(z)&&!ep.has(z)?"class":"className"]=X,Te&&(g.ref=Te),ee.createElement(z,g)})(ae,te,pe)}le.displayName=F;var ae=vt.forwardRef(le);return ae.attrs=q,ae.componentStyle=me,ae.displayName=F,ae.shouldForwardProp=ie,ae.foldedComponentIds=c?Lr(h.foldedComponentIds,h.styledComponentId):"",ae.styledComponentId=B,ae.target=c?h.target:o,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=c?(function(pe){for(var Q=[],H=1;H<arguments.length;H++)Q[H-1]=arguments[H];for(var Te=0,nt=Q;Te<nt.length;Te++)sl(pe,nt[Te],!0);return pe})({},h.defaultProps,te):te}}),xl(ae,function(){return".".concat(ae.styledComponentId)}),y&&ap(ae,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Ad(o,d){for(var l=[o[0]],c=0,h=d.length;c<h;c+=1)l.push(d[c],o[c+1]);return l}var Rd=function(o){return Object.assign(o,{isCss:!0})};function _h(o){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];if(un(o)||to(o))return Rd(Tr(Ad(Gi,Ai([o],d,!0))));var c=o;return d.length===0&&c.length===1&&typeof c[0]=="string"?Tr(c):Rd(Tr(Ad(c,d)))}function cl(o,d,l){if(l===void 0&&(l=cn),!d)throw no(1,d);var c=function(h){for(var y=[],N=1;N<arguments.length;N++)y[N-1]=arguments[N];return o(d,l,_h.apply(void 0,Ai([h],y,!1)))};return c.attrs=function(h){return cl(o,d,rt(rt({},l),{attrs:Array.prototype.concat(l.attrs,h).filter(Boolean)}))},c.withConfig=function(h){return cl(o,d,rt(rt({},l),h))},c}var mp=function(o){return cl(Ih,o)},P=mp;ep.forEach(function(o){P[o]=mp(o)});const rl={Wrapper:P.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:P.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:P.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Fd={Wrapper:P.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:P.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Oh="/java-core-notes/logo.png";var hp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bd=vt.createContext&&vt.createContext(hp),Dh=["attr","size","title"];function Ah(o,d){if(o==null)return{};var l=Rh(o,d),c,h;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(o);for(h=0;h<y.length;h++)c=y[h],!(d.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(l[c]=o[c])}return l}function Rh(o,d){if(o==null)return{};var l={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(d.indexOf(c)>=0)continue;l[c]=o[c]}return l}function Ui(){return Ui=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(o[c]=l[c])}return o},Ui.apply(this,arguments)}function Ud(o,d){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);d&&(c=c.filter(function(h){return Object.getOwnPropertyDescriptor(o,h).enumerable})),l.push.apply(l,c)}return l}function Wi(o){for(var d=1;d<arguments.length;d++){var l=arguments[d]!=null?arguments[d]:{};d%2?Ud(Object(l),!0).forEach(function(c){Fh(o,c,l[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):Ud(Object(l)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(l,c))})}return o}function Fh(o,d,l){return d=Bh(d),d in o?Object.defineProperty(o,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[d]=l,o}function Bh(o){var d=Uh(o,"string");return typeof d=="symbol"?d:d+""}function Uh(o,d){if(typeof o!="object"||!o)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var c=l.call(o,d);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(o)}function gp(o){return o&&o.map((d,l)=>vt.createElement(d.tag,Wi({key:l},d.attr),gp(d.child)))}function R(o){return d=>vt.createElement(Wh,Ui({attr:Wi({},o.attr)},d),gp(o.child))}function Wh(o){var d=l=>{var{attr:c,size:h,title:y}=o,N=Ah(o,Dh),M=h||l.size||"1em",E;return l.className&&(E=l.className),o.className&&(E=(E?E+" ":"")+o.className),vt.createElement("svg",Ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,c,N,{className:E,style:Wi(Wi({color:o.color||l.color},l.style),o.style),height:M,width:M,xmlns:"http://www.w3.org/2000/svg"}),y&&vt.createElement("title",null,y),o.children)};return Bd!==void 0?vt.createElement(Bd.Consumer,null,l=>d(l)):d(hp)}function vl(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function ro(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Hh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function xp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function dn(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Wd(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(o)}function vp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function qe(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Qe(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function yp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function Pr(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Vh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function $h(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function wp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(o)}function At(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Yh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function Jh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(o)}function bp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(o)}function qh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Qh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function kp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function Gh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(o)}function yl(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Ki(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Kh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function yt(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Xh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Zh(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Sp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function Hi(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(o)}function eg(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function tg(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function rg(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function Hd(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function wl(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(o)}function Xi(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function ng(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(o)}function Vi(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function bl(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function og(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",y1:"5",x2:"19",y2:"19"},child:[]}]})(o)}function jp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function ig(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function ag(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function Zi(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function sg(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(o)}function Cp(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function ul(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function lg(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(o)}function dl(o){return R({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const cg=()=>{const[o,d]=ee.useState(!1),[l,c]=ee.useState("dark");ee.useEffect(()=>{const M=localStorage.getItem("app-theme")||"dark";c(M),M==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ee.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const h=ee.useMemo(()=>l==="light"?"dark":"light",[l]),y=()=>{c(h)};return s.jsx(Fd.Wrapper,{children:s.jsx(Fd.Main,{children:s.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[s.jsxs("div",{className:"logoNameWrapper",children:[s.jsxs("div",{className:"logoWrapper",children:[!o&&s.jsx("div",{className:"logoSkeleton"}),s.jsx("img",{src:Oh,alt:"Java Core Notes logo",onLoad:()=>d(!0),style:{opacity:o?1:0}})]}),s.jsxs("div",{className:"nameWrapper",children:[s.jsx("div",{className:"title",children:"java-core-notes"}),s.jsx("div",{className:"subTitle",children:"At-a-glance java revision"})]})]}),s.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:y,"aria-label":`Switch to ${h} theme`,title:`Switch to ${h}`,children:[s.jsx("span",{className:"icon",children:l==="light"?s.jsx(rg,{}):s.jsx(ig,{})}),s.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function ug(o){return R({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(o)}function dg(o){return R({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(o)}function pg(o){return R({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function fg(o){return R({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(o)}function mg(o){return R({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(o)}function hg(o){return R({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(o)}const gg={Wrapper:P.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .brand { display: inline-flex; align-items: center; gap: 9px; color: var(--color-text-primary); font-weight: 700; }
        .brand img { width: 30px; height: 30px; object-fit: contain; }
        .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
        .links a { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--color-border); border-radius: 9px; color: var(--color-text-secondary); transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease; }
        .links a:hover, .links a:focus-visible { border-color: var(--color-border-light); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
        .copyright a { color: var(--color-text-secondary); font-weight: 700; }

        @media (width < 760px) {
            flex-direction: column;
            justify-content: center;
        }
    `},xg=[["Portfolio","https://www.ashishranjan.net/",lg],["GitHub","https://github.com/a2rp",pg],["CodePen","https://codepen.io/ash1198",ug],["LinkedIn","https://www.linkedin.com/in/aashishranjan",fg],["Facebook","https://www.facebook.com/theash.ashish/",dg],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",hg],["Email","mailto:ash.ranjan09@gmail.com",eg],["Support","https://a2rp-donation-page.netlify.app/",Kh],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Vh],["Patreon","https://www.patreon.com/a2rp",mg]],vg=()=>s.jsxs(gg.Wrapper,{children:[s.jsxs("div",{className:"brand",children:[s.jsx("img",{src:"/logo.png",alt:"Ashish Ranjan logo"}),s.jsx("span",{children:"Java Core Notes"})]}),s.jsx("nav",{className:"links","aria-label":"Social and support links",children:xg.map(([o,d,l])=>s.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer","aria-label":o,title:o,children:s.jsx(l,{"aria-hidden":"true"})},o))}),s.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",s.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),yg={Button:P.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 60;
        display: grid;
        width: 42px;
        height: 42px;
        place-items: center;
        border: 1px solid var(--color-border-light);
        border-radius: 50%;
        color: var(--color-text-primary);
        background: var(--color-surface-2);
        box-shadow: 0 10px 24px var(--color-shadow);
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &.isVisible { opacity: 1; pointer-events: auto; }
        &:hover, &:focus-visible { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent), 0 12px 26px var(--color-shadow); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
    `},wg=()=>{const[o,d]=ee.useState(!1);return ee.useEffect(()=>{const l=document.getElementById("notes-main");if(!l)return;const c=()=>d(l.scrollTop>220);return c(),l.addEventListener("scroll",c,{passive:!0}),()=>l.removeEventListener("scroll",c)},[]),s.jsx(yg.Button,{className:o?"isVisible":"",type:"button","aria-label":"Scroll to top",onClick:()=>{var l;return(l=document.getElementById("notes-main"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})},children:s.jsx(Hh,{"aria-hidden":"true"})})},Vd={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 20px;
    `,Content:P.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 50px;
        box-shadow: 0 12px 32px var(--color-shadow);
        position: relative;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px var(--color-shadow);
        }

        .heading {
            font-size: 34px;
            margin-bottom: 28px;
            color: var(--color-primary);
            letter-spacing: 0.6px;
            font-weight: 800;
        }

        p {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 20px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 34px;
            padding-top: 20px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 12px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 700;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-accent);
        }
    `},bg=()=>{const o="2026-10-02T14:05:56.991Z",d=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return s.jsx(Vd.Wrapper,{children:s.jsxs(Vd.Content,{children:[s.jsx("h2",{className:"heading",children:"About Java"}),s.jsx("p",{children:"Java is a class-based, object-oriented programming language designed for portability, reliability, and scalability. Code is compiled into bytecode and executed by the Java Virtual Machine, allowing applications to run consistently across platforms."}),s.jsx("p",{children:"The JVM manages memory allocation, garbage collection, class loading, and runtime execution. Concepts such as object lifecycle, heap and stack memory, exception handling, collections, multithreading, and concurrency form the foundation of robust Java applications."}),s.jsx("p",{children:"The java-core-notes project is a structured revision system. It organizes core syntax, OOP principles, JVM fundamentals, collections framework, Java 8+ features, and concurrency essentials into a clean single-page reference built for clarity and strong conceptual grounding."}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"metaLabel",children:"Last build:"}),s.jsxs("span",{className:"metaValue",children:[d," hrs"]})]})]})})},xi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        /* box-shadow: 0 12px 30px var(--color-shadow); */
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},kg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"what-is-java",icon:s.jsx(xp,{}),title:"What is Java",summary:"Java is a class-based, object-oriented language designed for portability and reliability.",points:["Write code once, run it anywhere (with a JVM).","Compiled to bytecode, executed by the JVM.","Used for backend, Android, enterprise apps, tools, and more."],code:`// Java code runs inside the JVM
// Source code (.java) -> Bytecode (.class) -> JVM executes`,note:"Java feels strict at first, but that strictness helps you write safer code."},{id:"jdk-jre-jvm",icon:s.jsx(Zi,{}),title:"JDK vs JRE vs JVM",summary:"These three terms explain how Java code is developed and executed.",points:["JVM (Java Virtual Machine) runs bytecode.","JRE (Java Runtime Environment) = JVM + core libraries to run apps.","JDK (Java Development Kit) = JRE + tools like javac to build apps."],code:`JVM  -> runs .class bytecode
JRE  -> JVM + libraries (to run)
JDK  -> JRE + dev tools (to build)`,note:"If you are writing Java code, you need JDK. If you only run Java apps, JRE is enough."},{id:"compile-execution",icon:s.jsx(At,{}),title:"Compilation and execution flow",summary:"Java has a two-step journey: compile then run.",points:["Write code in a .java file.","Compile using javac to generate .class bytecode.","Run using java, which starts the JVM and executes bytecode."],code:`// 1) Compile
javac Main.java

// 2) Run
java Main`,note:"javac creates bytecode. java launches the JVM to run it."},{id:"bytecode-platform",icon:s.jsx(yt,{}),title:"Bytecode and platform independence",summary:"Java compiles to bytecode, not directly to machine code.",points:["Bytecode is the same on every OS.","Each OS has its own JVM that converts bytecode to machine instructions.","That is why Java is platform independent."],code:`// Same bytecode runs on different systems
Windows JVM -> runs bytecode
Linux JVM   -> runs bytecode
Mac JVM     -> runs bytecode`,note:"The JVM is the key reason Java works across platforms."},{id:"hello-world",icon:s.jsx(wl,{}),title:"Hello World breakdown",summary:"The smallest Java program that shows structure and entry point.",points:["class defines a blueprint (a type).","main is the entry point where the program starts.","System.out.println prints text to the console."],code:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,note:"main must be exactly public static void main(String[] args) for normal execution."},{id:"data-types-variables",icon:s.jsx(Ki,{}),title:"Data types and variables",summary:"Java has primitive types and reference types (objects).",points:["Primitives store values directly (int, double, boolean, char).","Reference types store references to objects (String, arrays, custom classes).","Choose the smallest type that fits the data."],code:`int age = 25;
double price = 99.99;
char grade = 'A';
boolean isActive = true;

String name = "Ashish"; // reference type (object)`,note:"String is not a primitive. It is an object."},{id:"type-casting",icon:s.jsx(bl,{}),title:"Type casting",summary:"Convert one type to another: widening is automatic, narrowing needs manual cast.",points:["Widening: smaller -> larger type (int -> double) happens automatically.","Narrowing: larger -> smaller type (double -> int) requires casting.","Casting can lose data (example: 9.7 becomes 9)."],code:`// Widening (automatic)
int num = 10;
double d1 = num;

// Narrowing (manual)
double d2 = 9.7;
int x = (int) d2; // x becomes 9`,note:"Widening is safe. Narrowing can truncate or overflow."},{id:"operators",icon:s.jsx(jp,{}),title:"Operators",summary:"Operators perform actions like math, comparison, and logic checks.",points:["Arithmetic: + - * / %","Relational: > < >= <= ==","Logical: && || !","Assignment: = += -= *= /= %="],code:`int a = 10;
int b = 3;

int sum = a + b;     // 13
int mod = a % b;     // 1

boolean ok = a > b;  // true
boolean both = (a > 5) && (b > 1); // true`,note:"Use == for primitives. For objects like String, use equals()."},{id:"control-flow",icon:s.jsx(Xi,{}),title:"Control flow (if, switch, loops)",summary:"Control flow decides which code runs and how many times it runs.",points:["if/else is for decision making.","switch is good for multiple discrete cases.","for and while repeat code based on conditions."],code:`int age = 20;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

char grade = 'A';
switch (grade) {
    case 'A':
        System.out.println("Excellent");
        break;
    default:
        System.out.println("Other");
}

for (int i = 0; i < 3; i++) {
    System.out.println(i);
}

int n = 3;
while (n > 0) {
    n--;
}`,note:"Prefer switch when you have fixed options. Prefer if when logic is range-based."},{id:"break-continue",icon:s.jsx(og,{}),title:"Break and continue",summary:"break exits the loop. continue skips the current iteration.",points:["break stops the loop immediately.","continue skips the remaining code in this iteration and moves to the next one.","Use them carefully for readability."],code:`// break example
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i); // prints 0..4
}

// continue example
for (int i = 0; i < 6; i++) {
    if (i % 2 == 0) continue;
    System.out.println(i); // prints 1,3,5
}`,note:"Clean loops are easier to maintain. Do not overuse break/continue."}],[]);return s.jsx(xi.Wrapper,{children:s.jsxs(xi.Container,{className:o?"isOpen":"",children:[s.jsxs(xi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(wp,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Foundations"}),s.jsx("div",{className:"subtitle",children:"This builds syntax muscle memory"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(xi.Content,{children:[s.jsx("div",{className:"topNote",children:"Foundations is the base layer. Keep it simple, repeat it often, and your Java reading and writing speed will jump fast."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},vi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transition: all 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
        }

        &.isOpen {
            box-shadow: 0 20px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 34px;
        cursor: pointer;
        transition: background 0.18s ease;

        &:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            margin-top: 4px;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            font-size: 18px;
            color: var(--color-primary);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            color: var(--color-primary);
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .cardSummary {
            font-size: 14px;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                font-size: 14px;
                color: var(--color-text-secondary);
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Sg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"method-declaration",icon:s.jsx(Pr,{}),title:"Method declaration and invocation",summary:"A method defines reusable behavior. It has return type, name, parameters, and body.",points:["Methods improve code reuse and readability.","Signature = return type + name + parameters.","Method is executed when called."],code:`public class Demo {

    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println(result);
    }
}`,note:"Execution always starts from main method."},{id:"method-overloading",icon:s.jsx(yt,{}),title:"Method overloading",summary:"Same method name, different parameter list. Decided at compile time.",points:["Return type alone cannot differentiate overloaded methods.","Parameter count or parameter type must differ.","This is compile-time polymorphism."],code:`class MathUtil {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }
}`,note:"Overloading improves API readability."},{id:"pass-by-value",icon:s.jsx(ro,{}),title:"Pass by value (important trap)",summary:"Java is always pass by value. For objects, the reference value is passed.",points:["Primitive values are copied.","Object reference is copied, not the object itself.","Reassigning inside method does not affect original reference."],code:`class User {
    String name;
}

public class Test {

    static void change(User u) {
        u.name = "Updated"; // modifies object
        u = new User();     // reassigning local copy only
    }

    public static void main(String[] args) {
        User user = new User();
        user.name = "Ash";

        change(user);
        System.out.println(user.name); // Updated
    }
}`,note:"Java is NOT pass by reference. It passes reference value by value."},{id:"main-method",icon:s.jsx(wl,{}),title:"Main method signature",summary:"Main method is JVM entry point. It must follow exact signature.",points:["public so JVM can access it.","static so it runs without object creation.","String[] args holds command-line arguments."],code:`public class Main {

    public static void main(String[] args) {
        System.out.println("Program starts here");

        for (String arg : args) {
            System.out.println(arg);
        }
    }
}`,note:"If signature changes, JVM will not find entry point."},{id:"varargs",icon:s.jsx(Xi,{}),title:"Varargs",summary:"Varargs allow passing variable number of arguments to a method.",points:["Syntax uses ... after type.","Internally treated as array.","Only one varargs parameter allowed, and it must be last."],code:`class Demo {

    static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3, 4));
    }
}`,note:"Use varargs carefully for readability."},{id:"recursion",icon:s.jsx(wp,{}),title:"Recursion basics",summary:"A method calling itself. Must have base condition to stop.",points:["Each call creates new stack frame.","Base condition prevents infinite recursion.","Used in problems like factorial, tree traversal."],code:`public class RecursionDemo {

    static int factorial(int n) {
        if (n == 1) return 1;      // base case
        return n * factorial(n - 1); // recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`,note:"Without base case, StackOverflowError occurs."}],[]);return s.jsx(vi.Wrapper,{children:s.jsxs(vi.Container,{className:o?"isOpen":"",children:[s.jsxs(vi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Pr,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Methods and Program Structure"}),s.jsx("div",{className:"subtitle",children:"Java interview trap alert: Java is always pass by value"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(vi.Content,{children:[s.jsx("div",{className:"topNote",children:"Methods define behavior. Understanding method structure makes your program predictable and modular."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),s.jsx("pre",{className:"code",children:`${c.code}`}),s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},yi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},jg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"class-object",icon:s.jsx(dn,{}),title:"Class and object",summary:"Class is a blueprint. Object is an instance created from that blueprint.",points:["Class defines fields (data) and methods (behavior).","Object holds real values in memory at runtime.","You create objects using new."],code:`class Car {
    String model;
    void drive() { System.out.println("Driving " + model); }
}

public class Demo {
    public static void main(String[] args) {
        Car c = new Car();
        c.model = "Swift";
        c.drive();
    }
}`,note:"Class is definition. Object is the actual thing in memory."},{id:"constructors",icon:s.jsx(Zi,{}),title:"Constructors",summary:"Constructor initializes a new object. Same name as class, no return type.",points:["Default constructor exists only if you do not write any constructor.","You can overload constructors (multiple versions).","Constructor runs automatically when you use new."],code:`class User {
    String name;

    User() {
        name = "Unknown";
    }

    User(String name) {
        this.name = name;
    }
}

public class Demo {
    public static void main(String[] args) {
        User a = new User();
        User b = new User("Ash");
        System.out.println(a.name);
        System.out.println(b.name);
    }
}`,note:"If you create a parameterized constructor, default one is not provided automatically."},{id:"this-keyword",icon:s.jsx(Xh,{}),title:"this keyword",summary:"this refers to the current object. Used to access fields and methods of the same instance.",points:["Commonly used to resolve naming conflicts between fields and parameters.","Used to call another constructor in the same class: this(...).","You can return this from methods for chaining."],code:`class Box {
    int size;

    Box(int size) {
        this.size = size; // field = parameter
    }

    Box grow() {
        this.size++;
        return this; // chaining
    }
}`,note:"this is the current object reference."},{id:"encapsulation",icon:s.jsx(Vi,{}),title:"Encapsulation",summary:"Encapsulation means hiding internal state and exposing controlled access using methods.",points:["Make fields private to prevent direct access.","Provide getters and setters with validation.","Helps maintain invariants and prevents accidental misuse."],code:`class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) return;
        balance += amount;
    }
}`,note:"Encapsulation is about control, not hiding for no reason."},{id:"inheritance",icon:s.jsx(Gh,{}),title:"Inheritance",summary:"Inheritance allows a class to reuse and extend another class using extends.",points:["Child class inherits fields and methods from parent class.","Promotes code reuse, but avoid deep inheritance chains.","Use overriding to change behavior in the child class."],code:`class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Bark"); }
}

public class Demo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
        d.bark();
    }
}`,note:"Inheritance models an 'is-a' relationship (Dog is an Animal)."},{id:"super-keyword",icon:s.jsx(yt,{}),title:"super keyword",summary:"super refers to the parent class. Used to call parent constructor or parent methods.",points:["super(...) must be the first line inside a constructor.","Use super.method() to call parent version when overriding.","super helps reuse parent initialization logic."],code:`class Parent {
    Parent(String name) { System.out.println("Parent: " + name); }
    void show() { System.out.println("Parent show"); }
}

class Child extends Parent {
    Child() {
        super("Init"); // call parent constructor
    }

    @Override
    void show() {
        super.show(); // call parent method
        System.out.println("Child show");
    }
}`,note:"super is mainly about parent access and proper initialization."},{id:"method-overriding",icon:s.jsx(Xi,{}),title:"Method overriding",summary:"Overriding means child class provides a new implementation of a parent method.",points:["Same method name, parameters, and return type (or compatible).","Use @Override annotation to avoid mistakes.","Runtime decides which method runs (dynamic dispatch)."],code:`class A {
    void run() { System.out.println("A running"); }
}

class B extends A {
    @Override
    void run() { System.out.println("B running"); }
}

public class Demo {
    public static void main(String[] args) {
        A obj = new B();
        obj.run(); // B running
    }
}`,note:"Overriding enables polymorphism."},{id:"polymorphism",icon:s.jsx(bl,{}),title:"Polymorphism",summary:"Polymorphism means one interface, multiple implementations. Most common is runtime polymorphism via overriding.",points:["Parent reference can point to child object.","Method call resolves to the object's actual type at runtime.","Improves flexibility, reduces tight coupling."],code:`class Payment {
    void pay() { System.out.println("Pay default"); }
}

class CardPayment extends Payment {
    @Override
    void pay() { System.out.println("Pay by card"); }
}

class UpiPayment extends Payment {
    @Override
    void pay() { System.out.println("Pay by UPI"); }
}

public class Demo {
    static void checkout(Payment p) {
        p.pay();
    }

    public static void main(String[] args) {
        checkout(new CardPayment());
        checkout(new UpiPayment());
    }
}`,note:"This is how real systems stay extendable without rewriting old code."},{id:"abstraction",icon:s.jsx(vl,{}),title:"Abstraction",summary:"Abstraction means exposing only the necessary behavior and hiding internal details.",points:["You focus on what an object does, not how it does it.","Achieved using abstract classes and interfaces.","Helps build clean APIs and reusable components."],code:`interface Storage {
    void save(String data);
}

class DiskStorage implements Storage {
    public void save(String data) {
        System.out.println("Saved to disk: " + data);
    }
}`,note:"Abstraction is the reason large codebases stay manageable."},{id:"abstract-class",icon:s.jsx(Pr,{}),title:"Abstract class",summary:"An abstract class can have both abstract methods (no body) and concrete methods (with body).",points:["Cannot create object directly from an abstract class.","Used when you want shared code + required methods.","Child must implement all abstract methods."],code:`abstract class Shape {
    abstract double area();

    void info() {
        System.out.println("I am a shape");
    }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }

    @Override
    double area() {
        return 3.14159 * r * r;
    }
}`,note:"Abstract class is for partial implementation + shared logic."},{id:"interface",icon:s.jsx(vp,{}),title:"Interface",summary:"An interface defines a contract. Implementing class must provide the behavior.",points:["Supports multiple inheritance of type (a class can implement multiple interfaces).","In Java 8+, interfaces can have default and static methods.","Best for defining capability like Runnable, Comparable."],code:`interface Flyable {
    void fly();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird flying");
    }
}`,note:"Interface is about capability. It keeps designs flexible."},{id:"interface-vs-abstract",icon:s.jsx(yt,{}),title:"Interface vs abstract class",summary:"Use interface for capability contracts. Use abstract class for shared base behavior.",points:["Interface - multiple can be implemented, focuses on what.","Abstract class - single inheritance, can store state and shared logic.","Rule of thumb - start with interface, use abstract class only if you need shared base code."],code:`// Interface for capability
interface Logger {
    void log(String msg);
}

// Abstract class for shared base behavior
abstract class BaseLogger {
    void prefix() { System.out.print("[LOG] "); }
    abstract void log(String msg);
}`,note:"In real projects, interfaces usually scale better over time."},{id:"object-class-methods",icon:s.jsx(dn,{}),title:"Object class methods",summary:"Every Java class extends Object. Key methods are toString, equals, and hashCode.",points:["toString - readable representation for logs/debug.","equals - content equality (override for meaningful comparison).","hashCode - must match equals contract, used by HashMap/HashSet."],code:`class User {
    private final int id;
    private final String name;

    User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "'}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User other = (User) o;
        return id == other.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}`,note:"equals and hashCode should always be overridden together for correct collection behavior."}],[]);return s.jsx(yi.Wrapper,{children:s.jsxs(yi.Container,{className:o?"isOpen":"",children:[s.jsxs(yi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(yt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Object Oriented Programming Core"}),s.jsx("div",{className:"subtitle",children:"This is Java's spine"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(yi.Content,{children:[s.jsx("div",{className:"topNote",children:"OOP is the foundation of most Java codebases. If this is strong, everything else becomes easier."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},wi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Cg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"stack-vs-heap",icon:s.jsx(yt,{}),title:"Stack vs Heap",summary:"Stack stores method calls and local variables. Heap stores objects created with new.",points:["Stack is fast and automatically cleaned when a method ends.","Heap is shared across threads and managed by the Garbage Collector.","Local primitives are usually on stack. Objects live on heap, stack holds references."],code:`public class Demo {
    static class Person {
        String name;
        Person(String name) { this.name = name; }
    }

    public static void main(String[] args) {
        int age = 25;                 // stack (primitive local)
        Person p = new Person("Ash");  // p reference on stack, object on heap
        System.out.println(p.name);
    }
}`,note:"Think like this - stack = execution, heap = storage for objects."},{id:"object-lifecycle",icon:s.jsx(dn,{}),title:"Object creation lifecycle",summary:"new triggers allocation, constructor runs, reference is returned, object stays until unreachable.",points:["Memory for the object is allocated on heap.","Constructor initializes fields.","Reference is assigned to a variable (usually on stack).","Object becomes eligible for GC when no reachable references remain."],code:`class Car {
    String model;
    Car(String model) { this.model = model; }
}

public class Test {
    public static void main(String[] args) {
        Car c = new Car("Swift"); // heap object created, stack reference stored
        c = null;                 // object may become eligible for GC
    }
}`,note:"Eligible for GC does not mean it will be collected immediately."},{id:"gc-basics",icon:s.jsx(sg,{}),title:"Garbage collection basics",summary:"GC frees heap memory by removing objects that are no longer reachable.",points:["GC runs automatically. You do not manually free memory in Java.","An object is collectible when it is unreachable from GC roots (like stack references, static references).","Calling System.gc() is only a request, JVM may ignore it."],code:`public class GcDemo {
    static class A { }

    public static void main(String[] args) {
        A a = new A();
        a = null;          // now eligible for GC
        System.gc();       // request, not guarantee
    }
}`,note:"Focus on writing code that does not keep unnecessary references."},{id:"reference-types",icon:s.jsx(Ki,{}),title:"Reference types",summary:"Reference variables point to objects on heap. Multiple references can point to the same object.",points:["Reference holds address-like info, not the actual object data.","Two variables can point to the same object, changes appear through both.","Java is pass by value, but for objects the value passed is the reference value."],code:`class User {
    String name;
    User(String name) { this.name = name; }
}

public class RefDemo {
    static void rename(User u) {
        u.name = "Updated"; // modifies same object
    }

    public static void main(String[] args) {
        User a = new User("Ash");
        User b = a;         // b points to same object as a
        rename(a);
        System.out.println(b.name); // Updated
    }
}`,note:"Common confusion - objects are not passed by reference, references are passed by value."},{id:"string-pool",icon:s.jsx(dl,{}),title:"String pool",summary:"String literals are stored in a shared pool. new String creates a new heap object.",points:["String is immutable, so pooling is safe and memory-efficient.","Two identical literals can point to the same pooled object.","Use intern() only if you know why you need it."],code:`public class StringPoolDemo {
    public static void main(String[] args) {
        String a = "java";
        String b = "java";
        System.out.println(a == b); // true (same pooled literal)

        String c = new String("java");
        System.out.println(a == c); // false (new object)

        String d = c.intern();
        System.out.println(a == d); // true (d points to pool)
    }
}`,note:"Use equals() for content comparison, not ==."},{id:"wrappers-autoboxing",icon:s.jsx(At,{}),title:"Wrapper classes and autoboxing",summary:"Wrappers turn primitives into objects. Autoboxing converts automatically when needed.",points:["int -> Integer is boxing, Integer -> int is unboxing.","Collections store objects, so primitives are boxed.","Be careful with null unboxing, it causes NullPointerException."],code:`import java.util.ArrayList;

public class BoxingDemo {
    public static void main(String[] args) {
        int x = 10;
        Integer y = x;     // autoboxing

        int z = y;         // unboxing

        ArrayList<Integer> list = new ArrayList<>();
        list.add(5);       // boxing happens

        Integer n = null;
        // int bad = n;     // NullPointerException due to unboxing
    }
}`,note:"Wrappers add overhead. Prefer primitives unless you need object behavior."},{id:"immutability",icon:s.jsx(Hi,{}),title:"Immutable objects",summary:"Immutable means state cannot change after creation. String is the most common example.",points:["Immutable objects are thread-safe by default.","They are safe for caching and reuse.","To build custom immutable classes - make fields final, do not expose mutators, and do defensive copies."],code:`final class ImmutableUser {
    private final String name;
    private final int age;

    public ImmutableUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}`,note:"If a field is a mutable object (like List), return a copy in getter."}],[]);return s.jsx(wi.Wrapper,{children:s.jsxs(wi.Container,{className:o?"isOpen":"",children:[s.jsxs(wi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(At,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Memory and JVM Mental Model"}),s.jsx("div",{className:"subtitle",children:"Understanding memory = confidence in Java"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(wi.Content,{children:[s.jsx("div",{className:"topNote",children:"This section separates average dev from strong dev. Memory clarity fixes bugs faster and makes your code more predictable."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},bi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        /* box-shadow: 0 12px 30px var(--color-shadow); */
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Ng=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"string-vs-builders",icon:s.jsx(ul,{}),title:"String vs StringBuilder vs StringBuffer",summary:"String is immutable. StringBuilder is mutable and fast. StringBuffer is mutable and thread-safe (slower).",points:["String - immutable, stored in string pool for literals.","StringBuilder - mutable, best for single-threaded string building.","StringBuffer - mutable and synchronized, safer in multi-threading but slower.","Rule - use String for fixed text, StringBuilder for loops and concatenations."],code:`public class Demo {
    public static void main(String[] args) {
        // String (immutable)
        String s = "java";
        s = s + " core"; // creates new String objects

        // StringBuilder (mutable)
        StringBuilder sb = new StringBuilder("java");
        sb.append(" core").append(" notes");
        System.out.println(sb.toString());

        // StringBuffer (thread-safe)
        StringBuffer bf = new StringBuffer("java");
        bf.append(" core");
        System.out.println(bf.toString());
    }
}`,note:"In loops, prefer StringBuilder to avoid creating many temporary String objects."},{id:"common-string-methods",icon:s.jsx(bp,{}),title:"Common String methods",summary:"Most String operations return a new String because String is immutable.",points:["length(), charAt(i), substring(a,b)","toUpperCase(), toLowerCase(), trim()","equals(), equalsIgnoreCase(), compareTo()","contains(), startsWith(), endsWith()","indexOf(), lastIndexOf(), replace()","split() and join() patterns"],code:`public class StringMethods {
    public static void main(String[] args) {
        String s = "  Java Core Notes  ";

        System.out.println(s.length());          // includes spaces
        System.out.println(s.trim());            // removes outer spaces
        System.out.println(s.toLowerCase());     // java core notes
        System.out.println(s.contains("Core"));  // true
        System.out.println(s.startsWith("  J")); // true

        String t = "java";
        System.out.println(t.equals("Java"));         // false
        System.out.println(t.equalsIgnoreCase("Java"));// true

        String u = "a,b,c";
        String[] parts = u.split(",");
        System.out.println(parts.length); // 3

        String r = "hello".replace("l", "L"); // heLLo
        System.out.println(r);
    }
}`,note:"Use equals() for content comparison. == compares references."},{id:"arrays-basics",icon:s.jsx(Sp,{}),title:"Arrays basics",summary:"An array is a fixed-size container that stores elements of the same type.",points:["Arrays have a fixed length once created.","Index starts at 0.","Use arr.length (property) - not length().","Enhanced for loop is clean for reading elements."],code:`public class ArrayBasics {
    public static void main(String[] args) {
        int[] nums = new int[3];
        nums[0] = 10;
        nums[1] = 20;
        nums[2] = 30;

        System.out.println(nums.length); // 3

        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }

        for (int n : nums) {
            System.out.println(n);
        }

        String[] names = {"Ash", "Neha", "Niraj"};
        System.out.println(names[1]); // Neha
    }
}`,note:"If you need dynamic size, use ArrayList instead of arrays."},{id:"multi-dimensional",icon:s.jsx(yl,{}),title:"Multi dimensional arrays",summary:"A 2D array is an array of arrays. Rows can have different lengths (jagged arrays).",points:["int[][] matrix is the common 2D form.","matrix.length gives number of rows.","matrix[row].length gives number of columns in that row.","Jagged arrays are allowed in Java."],code:`public class TwoDArray {
    public static void main(String[] args) {
        int[][] grid = {
            {1, 2, 3},
            {4, 5, 6}
        };

        System.out.println(grid.length);      // rows = 2
        System.out.println(grid[0].length);   // cols in row 0 = 3

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                System.out.print(grid[r][c] + " ");
            }
            System.out.println();
        }

        // jagged array
        int[][] jag = new int[2][];
        jag[0] = new int[]{1, 2};
        jag[1] = new int[]{3, 4, 5};
        System.out.println(jag[1].length); // 3
    }
}`,note:"2D arrays are useful, but for large data consider specialized structures."},{id:"arrays-utility",icon:s.jsx(Zi,{}),title:"Arrays utility class",summary:"java.util.Arrays provides helpers for printing, sorting, searching, filling, and copying.",points:["Arrays.toString() is the easiest way to print an array.","Arrays.sort() sorts in ascending order.","Arrays.binarySearch() works only on a sorted array.","Arrays.copyOf() is useful for resizing or copying.","Arrays.equals() checks values, not references."],code:`import java.util.Arrays;

public class ArraysUtilDemo {
    public static void main(String[] args) {
        int[] nums = {4, 2, 9, 1};

        System.out.println(Arrays.toString(nums)); // [4, 2, 9, 1]

        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums)); // [1, 2, 4, 9]

        int idx = Arrays.binarySearch(nums, 4);
        System.out.println(idx); // index of 4

        int[] copy = Arrays.copyOf(nums, nums.length);
        System.out.println(Arrays.equals(nums, copy)); // true

        int[] bigger = Arrays.copyOf(nums, 6);
        System.out.println(Arrays.toString(bigger)); // [1, 2, 4, 9, 0, 0]
    }
}`,note:"binarySearch needs sorted array, otherwise result is unpredictable."}],[]);return s.jsx(bi.Wrapper,{children:s.jsxs(bi.Container,{className:o?"isOpen":"",children:[s.jsxs(bi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(ul,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Strings and Arrays"}),s.jsx("div",{className:"subtitle",children:"Immutability, performance, and core data storage"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(bi.Content,{children:[s.jsx("div",{className:"topNote",children:"Strings are everywhere in Java, and arrays are the base for many data structures. Learn when to use StringBuilder, how immutability impacts performance, and how to work confidently with arrays."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},ki={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition: background 0.2s ease;

        &:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;

            .hint {
                color: var(--color-text-muted);
            }
        }

        .chev {
            color: var(--color-primary);
            font-size: 20px;
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            color: var(--color-primary);
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .cardSummary {
            font-size: 14px;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Eg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"checked-vs-unchecked",icon:s.jsx(Vi,{}),title:"Checked vs Unchecked Exceptions",summary:"Checked exceptions must be handled or declared. Unchecked exceptions occur at runtime.",points:["Checked exceptions are verified at compile time.","Unchecked exceptions extend RuntimeException.","Compiler forces handling of checked exceptions."],code:`// Checked Exception
import java.io.FileReader;

public class Demo {
    public static void main(String[] args) throws Exception {
        FileReader file = new FileReader("test.txt");
    }
}

// Unchecked Exception
public class Test {
    public static void main(String[] args) {
        int x = 10 / 0; // ArithmeticException
    }
}`,note:"Checked = compile time handling required. Unchecked = runtime issues."},{id:"try-catch-finally",icon:s.jsx(Pr,{}),title:"try catch finally",summary:"try contains risky code, catch handles exception, finally always executes.",points:["try block wraps risky code.","catch block handles specific exception.","finally runs regardless of exception."],code:`public class TryCatchDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Cleanup logic");
        }
    }
}`,note:"finally is commonly used for closing resources."},{id:"throw-vs-throws",icon:s.jsx(ro,{}),title:"throw vs throws",summary:"throw is used to explicitly throw an exception. throws declares exceptions in method signature.",points:["throw is followed by an exception object.","throws appears in method declaration.","throw transfers control immediately."],code:`public class ThrowDemo {

    static void validate(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Not eligible");
        }
    }

    public static void main(String[] args) throws Exception {
        validate(15);
    }
}`,note:"throw creates and throws. throws declares responsibility."},{id:"custom-exceptions",icon:s.jsx(Zi,{}),title:"Custom Exceptions",summary:"Custom exceptions allow you to define domain-specific error types.",points:["Extend Exception for checked custom exception.","Extend RuntimeException for unchecked custom exception.","Useful for business logic validation."],code:`class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18+");
        }
    }
}`,note:"Use meaningful names for business-level errors."},{id:"exception-hierarchy",icon:s.jsx(yt,{}),title:"Exception Hierarchy",summary:"All exceptions inherit from Throwable.",points:["Throwable is root class.","Error represents serious JVM issues.","Exception represents application-level issues.","RuntimeException is unchecked."],code:`java.lang.Object
   └── Throwable
        ├── Error
        └── Exception
             └── RuntimeException`,note:"Never catch Error unless you have a very specific reason."}],[]);return s.jsx(ki.Wrapper,{children:s.jsxs(ki.Container,{className:o?"isOpen":"",children:[s.jsxs(ki.Header,{type:"button",onClick:()=>d(!o),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(ro,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Exception Handling"}),s.jsx("div",{className:"subtitle",children:"Java loves explicit error handling"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(ki.Content,{children:[s.jsx("div",{className:"topNote",children:"Strong Java developers understand the exception model deeply. Proper handling prevents crashes and improves reliability."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),s.jsx("pre",{className:"code",children:`${c.code}`}),s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Si={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 86%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `};function Lg(o){return R({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"},child:[]}]})(o)}const zg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"hierarchy",icon:s.jsx(yt,{}),title:"Collection hierarchy overview",summary:"Collection is for groups of items. Map is for key-value pairs and is not a Collection.",points:["Collection interface -> List, Set, Queue","Map interface -> HashMap, LinkedHashMap, TreeMap","Most collections store objects, primitives get autoboxed"],code:`// Very quick mental map
// Collection
//   - List (ordered, duplicates allowed)
//   - Set (no duplicates)
//   - Queue (processing order, FIFO usually)
//
// Map (key-value)
//   - keys are unique
//   - values can repeat`,note:"Interview shortcut - if you need key lookup, think Map. Otherwise think Collection."},{id:"list",icon:s.jsx(Sp,{}),title:"List (ArrayList, LinkedList)",summary:"List keeps order and allows duplicates. Pick ArrayList for reads, LinkedList for frequent inserts in middle (rare in real apps).",points:["ArrayList -> dynamic array, fast random access, slow middle inserts","LinkedList -> nodes, slow random access, faster inserts if you already have the node","Use ArrayList by default unless you have a strong reason"],code:`import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        List<String> a = new ArrayList<>();
        a.add("A");
        a.add("B");
        a.add("B");
        System.out.println(a); // [A, B, B]

        List<String> b = new LinkedList<>();
        b.add("X");
        b.add("Y");
        System.out.println(b); // [X, Y]
    }
}`,note:"Most interviewers expect you to default to ArrayList unless proven otherwise."},{id:"set",icon:s.jsx(yl,{}),title:"Set (HashSet, LinkedHashSet, TreeSet)",summary:"Set does not allow duplicates. HashSet is fastest, LinkedHashSet keeps insertion order, TreeSet keeps sorted order.",points:["HashSet -> hashing, no order guarantee, fast add and contains","LinkedHashSet -> maintains insertion order","TreeSet -> sorted set, log(n) operations, uses natural order or Comparator"],code:`import java.util.*;

public class SetDemo {
    public static void main(String[] args) {
        Set<Integer> a = new HashSet<>();
        a.add(3); a.add(1); a.add(3);
        System.out.println(a); // order not guaranteed

        Set<Integer> b = new LinkedHashSet<>();
        b.add(3); b.add(1); b.add(3);
        System.out.println(b); // [3, 1]

        Set<Integer> c = new TreeSet<>();
        c.add(3); c.add(1); c.add(3);
        System.out.println(c); // [1, 3]
    }
}`,note:"TreeSet requires elements that can be compared (Comparable) or a Comparator."},{id:"map",icon:s.jsx(tg,{}),title:"Map (HashMap, LinkedHashMap, TreeMap)",summary:"Map stores key-value pairs. Keys are unique. HashMap is default, LinkedHashMap keeps insertion order, TreeMap keeps sorted keys.",points:["HashMap -> average O(1) put/get, no order guarantee","LinkedHashMap -> preserves insertion order (or access order if configured)","TreeMap -> sorted by key, O(log n) put/get"],code:`import java.util.*;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> m = new HashMap<>();
        m.put("a", 1);
        m.put("b", 2);
        m.put("a", 9); // overwrites
        System.out.println(m.get("a")); // 9

        Map<String, Integer> lm = new LinkedHashMap<>();
        lm.put("b", 2);
        lm.put("a", 1);
        System.out.println(lm); // {b=2, a=1}

        Map<String, Integer> tm = new TreeMap<>();
        tm.put("b", 2);
        tm.put("a", 1);
        System.out.println(tm); // {a=1, b=2}
    }
}`,note:"If you override equals, you must override hashCode for keys in HashMap."},{id:"queue-deque",icon:s.jsx(bl,{}),title:"Queue and Deque",summary:"Queue is for processing order. Deque can act as both queue and stack. Prefer ArrayDeque over Stack.",points:["Queue usually FIFO -> add (offer), remove (poll), peek","Deque supports both ends -> addFirst, addLast, pollFirst, pollLast","ArrayDeque is fast and recommended for stack style operations"],code:`import java.util.*;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(10);
        q.offer(20);
        System.out.println(q.poll()); // 10
        System.out.println(q.peek()); // 20

        Deque<Integer> d = new ArrayDeque<>();
        d.addFirst(1);
        d.addLast(2);
        System.out.println(d.pollLast()); // 2

        // stack style
        d.push(5);
        System.out.println(d.pop()); // 5
    }
}`,note:"Stack class is old. Use ArrayDeque for stack behavior."},{id:"comparable-comparator",icon:s.jsx(Lg,{}),title:"Comparable vs Comparator",summary:"Comparable defines natural order inside the class. Comparator defines custom order outside.",points:["Comparable -> implement compareTo, used for default sorting","Comparator -> custom sorting logic, can have multiple strategies","TreeSet and TreeMap rely on ordering"],code:`import java.util.*;

class User implements Comparable<User> {
    int age;
    String name;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(User other) {
        return Integer.compare(this.age, other.age); // natural order by age
    }

    @Override
    public String toString() {
        return name + ":" + age;
    }
}

public class SortDemo {
    public static void main(String[] args) {
        List<User> list = new ArrayList<>();
        list.add(new User("A", 30));
        list.add(new User("B", 20));

        Collections.sort(list); // uses Comparable
        System.out.println(list); // [B:20, A:30]

        list.sort((u1, u2) -> u1.name.compareTo(u2.name)); // Comparator
        System.out.println(list); // [A:30, B:20]
    }
}`,note:"Comparator is more flexible. Comparable is good for a default natural ordering."},{id:"equals-hashcode",icon:s.jsx(Ki,{}),title:"equals and hashCode contract",summary:"If two objects are equal by equals, they must have the same hashCode. This is critical for HashMap and HashSet.",points:["equals checks logical equality","hashCode decides bucket placement in hash-based collections","Breaking contract causes missing lookups and duplicate set entries"],code:`import java.util.*;

class Key {
    int id;
    Key(int id) { this.id = id; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Key key = (Key) o;
        return id == key.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class ContractDemo {
    public static void main(String[] args) {
        Map<Key, String> map = new HashMap<>();
        map.put(new Key(1), "one");
        System.out.println(map.get(new Key(1))); // one (works only if contract is correct)
    }
}`,note:"For Map keys and Set elements, always implement equals and hashCode together."},{id:"hashmap-internal",icon:s.jsx(At,{}),title:"Internal working of HashMap",summary:"HashMap uses hashCode to pick a bucket and equals to match the exact key. Collisions are handled inside the bucket.",points:["Step 1 - compute hash from key.hashCode()","Step 2 - map hash to bucket index","Step 3 - if bucket has entries, compare keys using equals","Collisions happen when different keys land in same bucket","Resizing happens when load factor threshold is crossed"],code:`// High level put flow (conceptual)
// put(key, value)
// 1) int h = hash(key.hashCode())
// 2) int idx = (n - 1) & h
// 3) if bucket[idx] empty -> place entry
// 4) else traverse entries in bucket
//    - if existing key equals new key -> overwrite value
//    - else add new entry (collision handling)
// 5) if size exceeds threshold -> resize (rehash)`,note:"Interview focus - hashCode selects bucket, equals confirms the key match."}],[]);return s.jsx(Si.Wrapper,{children:s.jsxs(Si.Container,{className:o?"isOpen":"",children:[s.jsxs(Si.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(yt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Collections Framework"}),s.jsx("div",{className:"subtitle",children:"This section alone can get jobs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Si.Content,{children:[s.jsx("div",{className:"topNote",children:"Collections decide how your data is stored, searched, sorted, and processed. Know the tradeoffs and you will write cleaner and faster Java."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},ji={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Tg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"why-generics",icon:s.jsx(ag,{}),title:"Why generics",summary:"Generics give type safety and remove casting by letting you write reusable, type-aware code.",points:["Prevents runtime ClassCastException by catching type issues at compile time.","Makes APIs clearer - List<String> tells you exactly what it contains.","Reduces boilerplate casting and improves readability."],code:`import java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        // Without generics (raw type) - avoid this
        ArrayList list = new ArrayList();
        list.add("Ash");
        list.add(10);

        // String name = (String) list.get(0); // manual cast
        // String bad = (String) list.get(1);  // runtime ClassCastException

        // With generics - safe
        ArrayList<String> names = new ArrayList<>();
        names.add("Ash");
        // names.add(10); // compile-time error
        String name = names.get(0); // no cast
    }
}`,note:"Generics are mostly about safety + clean APIs, not performance."},{id:"generic-classes",icon:s.jsx(dn,{}),title:"Generic classes",summary:"A generic class uses a type parameter (like T) so the same class works for many types.",points:["T is a placeholder for a real type, decided when you create the object.","Common convention: T (type), E (element), K (key), V (value).","Works great for utility containers like Pair, Box, Result."],code:`class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

public class Demo {
    public static void main(String[] args) {
        Box<String> b1 = new Box<>();
        b1.set("Java");
        System.out.println(b1.get());

        Box<Integer> b2 = new Box<>();
        b2.set(99);
        System.out.println(b2.get());
    }
}`,note:"Same class, different types - no duplicate code."},{id:"generic-methods",icon:s.jsx(Pr,{}),title:"Generic methods",summary:"A generic method declares its own type parameter and works independently of the class type.",points:["Useful for helper methods like print, swap, max, convert.","Type parameter is written before return type: <T>.","Java can often infer T from arguments."],code:`public class Demo {
    public static <T> void print(T value) {
        System.out.println(value);
    }

    public static <T> T first(T[] arr) {
        return arr[0];
    }

    public static void main(String[] args) {
        print("Ash");
        print(123);
        print(true);

        Integer[] nums = { 5, 7, 9 };
        System.out.println(first(nums));
    }
}`,note:"Generic methods are a clean way to write reusable utilities."},{id:"wildcards",icon:s.jsx(kp,{}),title:"Wildcards",summary:"Wildcards (?) make generics flexible when the exact type is unknown or should vary.",points:["? means unknown type.","<?> allows reading as Object, but restricts safe writing (except null).","<? extends T> is for reading (producer).","<? super T> is for writing (consumer)."],code:`import java.util.List;

public class Demo {
    static void printAll(List<?> list) {
        for (Object x : list) {
            System.out.println(x);
        }
        // list.add("x"); // not allowed (except null)
    }

    public static void main(String[] args) {
        printAll(List.of("A", "B"));
        printAll(List.of(1, 2, 3));
    }
}`,note:"Rule of thumb: if you only need to read values, wildcards help a lot."},{id:"bounded-types",icon:s.jsx(jp,{}),title:"Bounded types",summary:"Bounds restrict allowed generic types. This gives you access to methods of the bound type.",points:["<T extends Number> means T must be Number or subclass.","Use bounds when you need operations available on a base type.","Multiple bounds use &: <T extends A & B> (class first, then interfaces)."],code:`public class Demo {
    public static <T extends Number> double sum(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }

    public static void main(String[] args) {
        System.out.println(sum(10, 20));       // Integer
        System.out.println(sum(2.5, 7.5));     // Double
        // System.out.println(sum("a", "b"));  // compile-time error
    }
}`,note:"Bounds make your generic code safer and more useful."},{id:"bounded-wildcards",icon:s.jsx(At,{}),title:"Bounded wildcards",summary:"Use extends and super wildcards to control variance and allow flexible method parameters.",points:["<? extends T> accepts T and its subclasses (good for reading).","<? super T> accepts T and its superclasses (good for writing).","PECS rule: Producer Extends, Consumer Super."],code:`import java.util.ArrayList;
import java.util.List;

public class Demo {
    static double total(List<? extends Number> nums) {
        double sum = 0;
        for (Number n : nums) sum += n.doubleValue();
        // nums.add(1); // not allowed safely
        return sum;
    }

    static void addIntegers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 2, 3);
        System.out.println(total(ints));

        List<Number> nums = new ArrayList<>();
        addIntegers(nums);
        System.out.println(nums);
    }
}`,note:"PECS is one of those interview favorites. Keep it simple and practical."}],[]);return s.jsx(ji.Wrapper,{children:s.jsxs(ji.Container,{className:o?"isOpen":"",children:[s.jsxs(ji.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(dn,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Generics"}),s.jsx("div",{className:"subtitle",children:"Type safety, reusable code, clean APIs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(ji.Content,{children:[s.jsx("div",{className:"topNote",children:"Generics let you write reusable code that stays type-safe. They reduce casting, prevent common runtime errors, and make your intent obvious."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Ci={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Pg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"lambda",icon:s.jsx(dl,{}),title:"Lambda expressions",summary:"A compact way to write anonymous functions. Mostly used with functional interfaces.",points:["Syntax: (params) -> expression or (params) -> { block }","Reduces boilerplate for small behaviors","Works with functional interfaces (single abstract method)"],code:`import java.util.Arrays;
import java.util.List;

public class Demo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Neha", "Niraj", "Ash");

        // Before Java 8 style
        // names.forEach(new Consumer<String>() {
        //     public void accept(String s) { System.out.println(s); }
        // });

        // Java 8 lambda
        names.forEach(s -> System.out.println(s));
    }
}`,note:"Lambdas make code read like intent, not ceremony."},{id:"functional-interface",icon:s.jsx(Pr,{}),title:"Functional interfaces",summary:"An interface with exactly one abstract method. Target type for lambdas.",points:["Can have default and static methods","Use @FunctionalInterface to prevent accidental extra abstract methods","Examples: Runnable, Comparator, Callable"],code:`@FunctionalInterface
interface Printer {
    void print(String msg);
}

public class Demo {
    public static void main(String[] args) {
        Printer p = m -> System.out.println("Print: " + m);
        p.print("Hello");
    }
}`,note:"One abstract method is the key. Default methods do not count."},{id:"built-in-functional",icon:s.jsx(At,{}),title:"Built in functional interfaces",summary:"Java provides common functional interfaces in java.util.function.",points:["Predicate<T> returns boolean","Function<T,R> transforms T to R","Consumer<T> consumes input, returns nothing","Supplier<T> returns a value, takes nothing"],code:`import java.util.function.*;

public class Demo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(10)); // true

        Function<String, Integer> len = s -> s.length();
        System.out.println(len.apply("java")); // 4

        Consumer<String> log = s -> System.out.println("LOG: " + s);
        log.accept("started");

        Supplier<Double> rand = () -> Math.random();
        System.out.println(rand.get());
    }
}`,note:"These cover most everyday lambda needs without custom interfaces."},{id:"streams",icon:s.jsx(yt,{}),title:"Streams API",summary:"A pipeline for processing collections in a declarative way.",points:["Stream is not a data structure, it is a view over data","Intermediate ops: map, filter, sorted","Terminal ops: forEach, collect, reduce, count"],code:`import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());

        System.out.println(evens); // [2, 4, 6]
    }
}`,note:"Streams are great for readable transformations, but avoid over-chaining blindly."},{id:"map-filter-reduce",icon:s.jsx(kp,{}),title:"map, filter, reduce",summary:"The core building blocks of stream pipelines.",points:["filter keeps items that match a condition","map transforms each item","reduce combines items into a single result"],code:`import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

        int sumOfSquaresOfOdds = nums.stream()
            .filter(n -> n % 2 != 0)   // 1,3,5
            .map(n -> n * n)           // 1,9,25
            .reduce(0, (a, b) -> a + b);

        System.out.println(sumOfSquaresOfOdds); // 35
    }
}`,note:"If you can read it left to right like a sentence, you did it right."},{id:"collectors",icon:s.jsx(dn,{}),title:"Collectors",summary:"Helpers to collect stream results into lists, sets, maps, groups, and more.",points:["toList, toSet, joining","groupingBy, partitioningBy","counting, summingInt, averagingInt"],code:`import java.util.*;
import java.util.stream.*;

public class Demo {
    static class User {
        String name;
        String role;
        User(String name, String role) { this.name = name; this.role = role; }
        public String getRole() { return role; }
        public String getName() { return name; }
    }

    public static void main(String[] args) {
        List<User> users = Arrays.asList(
            new User("Neha", "SUPER_ADMIN"),
            new User("Niraj", "SUPER_ADMIN"),
            new User("Asha", "EMPLOYEE")
        );

        Map<String, List<User>> byRole = users.stream()
            .collect(Collectors.groupingBy(User::getRole));

        System.out.println(byRole.keySet());
    }
}`,note:"Collectors turn streams into real results without manual loops."},{id:"optional",icon:s.jsx(vp,{}),title:"Optional",summary:"A container that may or may not hold a value. Helps avoid null checks everywhere.",points:["Use map, flatMap, filter to transform safely","Use orElse, orElseGet for fallback","Avoid Optional.get() unless you are 100% sure"],code:`import java.util.*;

public class Demo {
    static String findName(boolean ok) {
        return ok ? "Ash" : null;
    }

    public static void main(String[] args) {
        Optional<String> name = Optional.ofNullable(findName(false));

        String safe = name
            .map(s -> s.toUpperCase())
            .orElse("UNKNOWN");

        System.out.println(safe); // UNKNOWN
    }
}`,note:"Optional is not magic. It is a tool for safer intent and cleaner flow."},{id:"method-references",icon:s.jsx(Zh,{}),title:"Method references",summary:"A shorter form of lambda when you are only calling an existing method.",points:["Static method: ClassName::method","Instance method: instance::method","Constructor: ClassName::new"],code:`import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("java", "core", "notes");

        // Lambda
        names.forEach(s -> System.out.println(s));

        // Method reference
        names.forEach(System.out::println);

        List<Integer> lens = names.stream()
            .map(String::length)
            .collect(Collectors.toList());

        System.out.println(lens); // [4, 4, 5]
    }
}`,note:"Method references improve readability when the lambda adds no extra logic."},{id:"default-static-interface",icon:s.jsx(ng,{}),title:"Default and static methods in interface",summary:"Interfaces can provide default behavior and utility methods without breaking old implementations.",points:["default methods have a body and can be overridden","static methods belong to the interface, not the class","Useful for evolving APIs safely"],code:`interface Logger {
    default void info(String msg) {
        System.out.println("INFO: " + msg);
    }

    static String tag() {
        return "APP";
    }
}

class Service implements Logger { }

public class Demo {
    public static void main(String[] args) {
        Service s = new Service();
        s.info("started");

        System.out.println(Logger.tag());
    }
}`,note:"Default methods help you add features without forcing every class to change immediately."}],[]);return s.jsx(Ci.Wrapper,{children:s.jsxs(Ci.Container,{className:o?"isOpen":"",children:[s.jsxs(Ci.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(dl,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Java 8 and Beyond"}),s.jsx("div",{className:"subtitle",children:"Modern Java identity"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Ci.Content,{children:[s.jsx("div",{className:"topNote",children:"Java 8 changed how Java code is written. Lambdas, streams, and functional style are common in real projects, interviews, and modern codebases."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Ni={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Mg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"localdate",icon:s.jsx(Wd,{}),title:"LocalDate",summary:"Date without time and timezone. Perfect for birthdays, deadlines, invoice dates.",points:["Stores only year-month-day.","Immutable and thread-safe.","Use now(), of(), parse() and plusDays(), minusWeeks()."],code:`import java.time.LocalDate;

public class Demo {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate dob = LocalDate.of(2000, 1, 15);
        LocalDate fromText = LocalDate.parse("2026-02-22");

        System.out.println(today);
        System.out.println(dob);
        System.out.println(fromText);

        System.out.println(today.plusDays(7));
        System.out.println(today.minusMonths(1));
    }
}`,note:"Use LocalDate when time is not needed. Clean and safe."},{id:"localtime",icon:s.jsx(yp,{}),title:"LocalTime",summary:"Time without date and timezone. Useful for daily schedules, store timings, alarms.",points:["Stores only hour-minute-second-nano.","Immutable and thread-safe.","Use now(), of(), parse() and plusMinutes(), minusHours()."],code:`import java.time.LocalTime;

public class Demo {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();
        LocalTime meeting = LocalTime.of(10, 30);
        LocalTime fromText = LocalTime.parse("18:45:00");

        System.out.println(now);
        System.out.println(meeting);
        System.out.println(fromText);

        System.out.println(meeting.plusMinutes(20));
        System.out.println(meeting.minusHours(1));
    }
}`,note:"LocalTime is great for repeating daily time logic."},{id:"localdatetime",icon:s.jsx(vl,{}),title:"LocalDateTime",summary:"Date + time without timezone. Useful for logs, events, and timestamps inside a system.",points:["Combines LocalDate and LocalTime.","No timezone attached. It represents a local timestamp.","Use now(), of(), parse() and plusHours(), plusDays()."],code:`import java.time.LocalDateTime;

public class Demo {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime launch = LocalDateTime.of(2026, 2, 22, 10, 0);

        System.out.println(now);
        System.out.println(launch);

        System.out.println(launch.plusDays(2));
        System.out.println(launch.plusHours(5));
    }
}`,note:"If you need timezone, use ZonedDateTime or OffsetDateTime later."},{id:"period-duration",icon:s.jsx(Cp,{}),title:"Period and Duration",summary:"Period measures date-based amount (years-months-days). Duration measures time-based amount (hours-minutes-seconds).",points:["Period is for dates. Example: age, subscription months.","Duration is for time. Example: job runtime, timeout.","Use between() and add/subtract with plus() methods."],code:`import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Period;
import java.time.Duration;

public class Demo {
    public static void main(String[] args) {
        LocalDate startDate = LocalDate.of(2026, 1, 1);
        LocalDate endDate = LocalDate.of(2026, 2, 22);
        Period p = Period.between(startDate, endDate);
        System.out.println("Period: " + p.getMonths() + " months, " + p.getDays() + " days");

        LocalTime startTime = LocalTime.of(10, 0);
        LocalTime endTime = LocalTime.of(12, 45);
        Duration d = Duration.between(startTime, endTime);
        System.out.println("Duration minutes: " + d.toMinutes());
    }
}`,note:"Rule of thumb - Period for calendar math, Duration for clock math."},{id:"formatting",icon:s.jsx(ul,{}),title:"Formatting",summary:"Use DateTimeFormatter to format and parse dates/times safely and consistently.",points:["Avoid old Date and SimpleDateFormat for new code.","DateTimeFormatter is immutable and thread-safe.","Format using pattern or built-in constants like ISO_LOCAL_DATE."],code:`import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Demo {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 2, 22);
        DateTimeFormatter f1 = DateTimeFormatter.ofPattern("dd MMM yyyy");
        System.out.println(d.format(f1)); // 22 Feb 2026

        LocalDateTime dt = LocalDateTime.of(2026, 2, 22, 10, 30);
        DateTimeFormatter f2 = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm");
        System.out.println(dt.format(f2)); // 22 Feb 2026 10:30

        LocalDate parsed = LocalDate.parse("22-02-2026", DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        System.out.println(parsed); // 2026-02-22
    }
}`,note:"Pick one format style for the app and keep it consistent everywhere."}],[]);return s.jsx(Ni.Wrapper,{children:s.jsxs(Ni.Container,{className:o?"isOpen":"",children:[s.jsxs(Ni.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Wd,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Date and Time API"}),s.jsx("div",{className:"subtitle",children:"Modern Java date-time basics for real apps"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Ni.Content,{children:[s.jsx("div",{className:"topNote",children:"Use java.time classes for clean, safe date-time handling. They are immutable, readable, and built for production use."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Ei={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Ig=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"file-class",icon:s.jsx(Qh,{}),title:"File class",summary:"File represents file and directory paths. It can check existence, create folders, list files, but it does not read file content by itself.",points:["File works with paths and metadata (exists, isFile, isDirectory).","Use it for basic path operations and directory listing.","For modern file I/O, prefer java.nio.file (Path, Files)."],code:`import java.io.File;

public class FileDemo {
    public static void main(String[] args) {
        File f = new File("data/info.txt");

        System.out.println(f.exists());
        System.out.println(f.isFile());
        System.out.println(f.getName());
        System.out.println(f.getAbsolutePath());

        File dir = new File("data");
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }
}`,note:"File is mainly path + checks. Content read or write is done via streams or java.nio."},{id:"path-files",icon:s.jsx(qh,{}),title:"Path and Files",summary:"Path is the modern representation of a path. Files provides utility methods for creating, reading, writing, copying, and listing.",points:["Path is in java.nio.file and is more flexible than File.","Files has one-liners for reading and writing small files.","Works well with exceptions and modern APIs."],code:`import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

public class PathFilesDemo {
    public static void main(String[] args) throws Exception {
        Path p = Paths.get("data", "notes.txt");

        if (!Files.exists(p.getParent())) {
            Files.createDirectories(p.getParent());
        }

        if (!Files.exists(p)) {
            Files.createFile(p);
        }

        System.out.println("Exists: " + Files.exists(p));
        System.out.println("Size: " + Files.size(p));
    }
}`,note:"Paths.get creates Path. Files does the real work."},{id:"read-write-files",icon:s.jsx(bp,{}),title:"Reading and writing files",summary:"For small files, Files.readString, readAllLines and writeString are the cleanest approach.",points:["Use readString or readAllLines when the file is not huge.","Use writeString or write to replace or create content quickly.","For large files, prefer buffered streaming (next topic)."],code:`import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class ReadWriteDemo {
    public static void main(String[] args) throws Exception {
        Path p = Paths.get("data", "message.txt");

        Files.createDirectories(p.getParent());

        Files.writeString(p, "Hello Java\\nLine 2", StandardCharsets.UTF_8);

        String text = Files.readString(p, StandardCharsets.UTF_8);
        System.out.println(text);

        List<String> lines = Files.readAllLines(p, StandardCharsets.UTF_8);
        System.out.println("Lines: " + lines.size());
    }
}`,note:"For real apps, always handle exceptions properly and validate file paths."},{id:"bufferedreader-bufferedwriter",icon:s.jsx(xp,{}),title:"BufferedReader and BufferedWriter",summary:"BufferedReader and BufferedWriter are best for large files. They read and write efficiently using an internal buffer.",points:["Use try-with-resources to auto close streams.","Read line by line with readLine for memory safety.","Write with write and newLine for clean output."],code:`import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class BufferedDemo {
    public static void main(String[] args) {
        String inputPath = "data/input.txt";
        String outputPath = "data/output.txt";

        try (
            BufferedReader br = new BufferedReader(new FileReader(inputPath));
            BufferedWriter bw = new BufferedWriter(new FileWriter(outputPath))
        ) {
            String line;

            while ((line = br.readLine()) != null) {
                bw.write(line.toUpperCase());
                bw.newLine();
            }

            System.out.println("Done");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,note:"Buffered approach is the go-to when file size can be large."}],[]);return s.jsx(Ei.Wrapper,{children:s.jsxs(Ei.Container,{className:o?"isOpen":"",children:[s.jsxs(Ei.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Pr,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"File Handling"}),s.jsx("div",{className:"subtitle",children:"Read, write, and manage files using core Java APIs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Ei.Content,{children:[s.jsx("div",{className:"topNote",children:"File handling in Java is usually done in two styles - classic java.io (File, Reader, Writer) and modern java.nio (Path, Files). Use Files for clean utilities, and buffered streams for large files."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Li={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        /* box-shadow: 0 12px 30px var(--color-shadow); */
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},_g=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"thread-class",icon:s.jsx(wl,{}),title:"Thread class",summary:"Create a thread by extending Thread and overriding run(). Start it with start(), not run().",points:["start() creates a new call stack and runs run() on a new thread.","Calling run() directly runs on the same thread (no new thread).","Use Thread when you need a quick demo, Runnable is usually preferred in real code."],code:`class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

public class Demo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start(); // new thread starts here
        // t.run(); // runs on main thread if called directly
    }
}`,note:"Rule of thumb: start() makes it concurrent, run() is just a normal method call."},{id:"runnable-interface",icon:s.jsx(Xi,{}),title:"Runnable interface",summary:"Create a task by implementing Runnable, then pass it to a Thread.",points:["Runnable separates the task from the thread that runs it.","This is more flexible than extending Thread.","You can reuse the same Runnable with different threads if needed."],code:`class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Task running in: " + Thread.currentThread().getName());
    }
}

public class Demo {
    public static void main(String[] args) {
        Thread t = new Thread(new MyTask(), "worker-1");
        t.start();
    }
}`,note:"In production, you will usually use thread pools (ExecutorService), but Runnable is the foundation."},{id:"thread-lifecycle",icon:s.jsx(vl,{}),title:"Thread lifecycle",summary:"A thread moves through states like NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",points:["NEW: created but not started.","RUNNABLE: ready to run (or running) depending on CPU scheduling.","BLOCKED/WAITING: not running because it is waiting for a monitor or condition.","TERMINATED: run() finished or crashed."],code:`public class Demo {
    public static void main(String[] args) throws Exception {
        Thread t = new Thread(() -> {
            System.out.println("State inside run: " + Thread.currentThread().getState());
        });

        System.out.println("Before start: " + t.getState()); // NEW
        t.start();
        System.out.println("After start: " + t.getState());  // RUNNABLE (most of the time)
        t.join(); // wait for completion
        System.out.println("After join: " + t.getState());   // TERMINATED
    }
}`,note:"State can change quickly. getState() is a snapshot, not a promise."},{id:"synchronization",icon:s.jsx(Hi,{}),title:"Synchronization",summary:"Synchronization protects shared mutable data so only one thread updates it at a time.",points:["Race condition happens when multiple threads update shared state without coordination.","synchronized enforces mutual exclusion using a monitor (lock).","Without synchronization, results can be wrong even if code looks correct."],code:`class Counter {
    private int count = 0;

    public void incrementUnsafe() {
        count++; // race condition here
    }

    public synchronized void incrementSafe() {
        count++; // protected by monitor lock on 'this'
    }

    public int getCount() { return count; }
}

public class Demo {
    public static void main(String[] args) throws Exception {
        Counter c = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) c.incrementSafe();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) c.incrementSafe();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println(c.getCount()); // expected 200000
    }
}`,note:"Synchronization is about correctness first, performance second."},{id:"synchronized-keyword",icon:s.jsx(Hi,{}),title:"synchronized keyword",summary:"Use synchronized on methods or blocks. The lock can be this, a class, or a dedicated lock object.",points:["synchronized instance method locks on this.","synchronized static method locks on ClassName.class.","synchronized block locks on the object you specify."],code:`class Locker {
    private final Object lock = new Object();
    private int value = 0;

    public void incWithBlock() {
        synchronized (lock) {
            value++;
        }
    }

    public synchronized void incWithMethod() {
        value++; // locks on this
    }

    public static synchronized void staticLock() {
        // locks on Locker.class
    }
}`,note:"Prefer a dedicated lock object for fine control and to avoid accidental external locking."},{id:"volatile",icon:s.jsx(At,{}),title:"volatile",summary:"volatile ensures visibility of changes across threads. It does not make compound operations atomic.",points:["Use volatile for flags and status variables shared across threads.","volatile guarantees reads see the latest write (visibility).","count++ is not atomic even if count is volatile."],code:`public class Demo {
    private static volatile boolean running = true;

    public static void main(String[] args) throws Exception {
        Thread worker = new Thread(() -> {
            while (running) {
                // do work
            }
            System.out.println("Stopped");
        });

        worker.start();

        Thread.sleep(500);
        running = false; // worker will observe this change
    }
}`,note:"volatile is for visibility, synchronized is for mutual exclusion and atomicity."},{id:"deadlock",icon:s.jsx(ro,{}),title:"Deadlock concept",summary:"Deadlock occurs when two threads hold locks the other needs, and both wait forever.",points:["Classic cause: acquiring locks in different orders.","Prevention: consistent lock ordering, timeouts, reduce lock scope.","Deadlocks are hard to debug, design to avoid them."],code:`public class Demo {
    private static final Object lockA = new Object();
    private static final Object lockB = new Object();

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lockA) {
                sleep(50);
                synchronized (lockB) {
                    System.out.println("t1 acquired A then B");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lockB) {
                sleep(50);
                synchronized (lockA) {
                    System.out.println("t2 acquired B then A");
                }
            }
        });

        t1.start();
        t2.start();
    }

    static void sleep(long ms) {
        try { Thread.sleep(ms); } catch (Exception ignored) {}
    }
}`,note:"Fix: always lock A then B everywhere. Never mix the order."}],[]);return s.jsx(Li.Wrapper,{children:s.jsxs(Li.Container,{className:o?"isOpen":"",children:[s.jsxs(Li.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(At,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Multithreading Basics"}),s.jsx("div",{className:"subtitle",children:"Threads, synchronization, visibility, and deadlocks"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Li.Content,{children:[s.jsx("div",{className:"topNote",children:"Multithreading is powerful but dangerous without discipline. Most bugs here are timing bugs, which means they appear and disappear randomly."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},zi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition: background 0.18s ease;

        &:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            font-size: 18px;
            color: var(--color-primary);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            color: var(--color-primary);
            font-size: 18px;
        }

        .cardTitle {
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                font-size: 14px;
                color: var(--color-text-secondary);
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            border-top: 1px solid var(--color-border);
            padding-top: 10px;
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Og=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"executor-framework",icon:s.jsx(At,{}),title:"Executor framework",summary:"High level API for managing threads without manually creating them.",points:["Introduced to simplify thread management.","Separates task submission from thread execution.","Improves scalability and resource control."],code:`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDemo {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> {
            System.out.println("Task executed by thread");
        });

        executor.shutdown();
    }
}`,note:"Prefer ExecutorService over manually creating threads."},{id:"callable-future",icon:s.jsx(yp,{}),title:"Callable and Future",summary:"Callable returns a result. Future represents the result of an asynchronous computation.",points:["Runnable does not return value, Callable does.","Future allows retrieving result using get().","get() blocks until result is available."],code:`import java.util.concurrent.*;

public class CallableDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<Integer> task = () -> {
            return 10 + 20;
        };

        Future<Integer> future = executor.submit(task);

        System.out.println(future.get()); // 30

        executor.shutdown();
    }
}`,note:"Use Callable when you need computation result from a thread."},{id:"thread-pools",icon:s.jsx(yt,{}),title:"Thread pools",summary:"Thread pool reuses fixed number of threads to execute multiple tasks efficiently.",points:["Reduces overhead of creating threads repeatedly.","Fixed thread pool → fixed number of threads.","Cached thread pool → dynamic thread count."],code:`ExecutorService fixedPool =
    Executors.newFixedThreadPool(3);

ExecutorService cachedPool =
    Executors.newCachedThreadPool();

fixedPool.submit(() -> {
    System.out.println("Running task");
});

fixedPool.shutdown();`,note:"Choose pool type based on workload characteristics."},{id:"concurrent-collections",icon:s.jsx(Yh,{}),title:"Concurrent collections",summary:"Thread-safe collections designed for concurrent access without heavy synchronization.",points:["Avoid using synchronized collections manually.","ConcurrentHashMap is highly scalable.","CopyOnWriteArrayList is useful for read-heavy scenarios."],code:`import java.util.concurrent.*;

public class ConcurrentCollectionDemo {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map =
            new ConcurrentHashMap<>();

        map.put("A", 1);
        map.put("B", 2);

        System.out.println(map.get("A"));
    }
}`,note:"Use concurrent collections in multi-threaded environments."}],[]);return s.jsx(zi.Wrapper,{children:s.jsxs(zi.Container,{className:o?"isOpen":"",children:[s.jsxs(zi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(At,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Concurrency Essentials"}),s.jsx("div",{className:"subtitle",children:"Managing threads and parallel execution"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(zi.Content,{children:[s.jsx("div",{className:"topNote",children:"Concurrency enables parallel execution and scalability. Understanding thread management separates intermediate from advanced Java developers."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),s.jsx("pre",{className:"code",children:`${c.code}`}),s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Ti={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition: all 0.18s ease;

        &:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Dg=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"packages",icon:s.jsx(Hd,{}),title:"Packages",summary:"Packages group related classes and interfaces together to avoid naming conflicts and improve organization.",points:["Packages create a namespace for classes.","Folder structure must match package name.","Helps in modular structure and clean architecture."],code:`package com.example.app;

public class User {
    String name;
}`,note:"Convention: use reverse domain name format like com.company.project."},{id:"access-modifiers",icon:s.jsx(Hi,{}),title:"Access modifiers",summary:"Access modifiers control visibility of classes, methods, and variables.",points:["public → accessible everywhere.","protected → accessible within package and subclasses.","default (no modifier) → package-private.","private → accessible only inside the class."],code:`public class Demo {

    private int id;
    String name;        // default
    protected int age;
    public String city;

}`,note:"Encapsulation depends on correct use of access modifiers."},{id:"import",icon:s.jsx(Jh,{}),title:"Import",summary:"Import allows using classes from other packages without fully qualifying them.",points:["You can import specific class or entire package.","Wildcard import does not import sub-packages.","java.lang package is imported automatically."],code:`import java.util.ArrayList;
import java.util.*;

public class Test {
    ArrayList<String> list = new ArrayList<>();
}`,note:"Prefer explicit imports over wildcard in production code."},{id:"modular-system",icon:s.jsx(yt,{}),title:"Modular system overview",summary:"Java 9 introduced module system to improve strong encapsulation and scalability.",points:["Each module has a module-info.java file.","Modules explicitly declare required dependencies.","Improves security and reduces classpath issues."],code:`module com.example.app {
    requires java.sql;
    exports com.example.app.service;
}`,note:"Modules help large enterprise systems manage dependencies cleanly."}],[]);return s.jsx(Ti.Wrapper,{children:s.jsxs(Ti.Container,{className:o?"isOpen":"",children:[s.jsxs(Ti.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Hd,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Modules and Packaging"}),s.jsx("div",{className:"subtitle",children:"Structure controls clarity in large systems"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Ti.Content,{children:[s.jsx("div",{className:"topNote",children:"Clean packaging separates beginners from structured developers. Organization reduces chaos in large projects."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Pi={Wrapper:P.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:P.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:P.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:P.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Ag=()=>{const[o,d]=ee.useState(!1),l=ee.useMemo(()=>[{id:"immutability",icon:s.jsx(Vi,{}),title:"Immutability",summary:"Immutable objects cannot change state after creation. Safer, simpler, and thread-friendly.",points:["Make class final so it cannot be extended and mutated via subclassing.","Make fields private and final.","Do not provide setters.","For mutable fields (List, Date), store and return defensive copies.","String is immutable, so it is safe for pooling and caching."],code:`final class ImmutableUser {
    private final String name;
    private final int age;

    public ImmutableUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}`,note:"Immutability reduces bugs because objects do not change unexpectedly."},{id:"defensive-copying",icon:s.jsx($h,{}),title:"Defensive copying",summary:"When a class holds mutable data, return a copy to prevent outside code from mutating internal state.",points:["Do defensive copy in constructor (store a copy).","Do defensive copy in getter (return a copy).","If you return internal references directly, callers can mutate your object."],code:`import java.util.ArrayList;
import java.util.List;

final class SafeCart {
    private final List<String> items;

    public SafeCart(List<String> items) {
        this.items = new ArrayList<>(items); // copy in
    }

    public List<String> getItems() {
        return new ArrayList<>(items); // copy out
    }
}`,note:"Most interview bugs come from exposing mutable fields directly."},{id:"equals-hashcode",icon:s.jsx(Ki,{}),title:"equals and hashCode rules",summary:"If you override equals, you must override hashCode. Hash-based collections depend on this contract.",points:["equals compares logical equality.","hashCode groups objects into buckets for HashMap and HashSet.","If equals is true for two objects, their hashCode must be equal.","If hashCode changes after insertion (mutable key), HashMap lookups break."],code:`class User {
    private final int id;
    private final String name;

    User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}`,note:"Never use mutable objects as HashMap keys unless you fully control mutation."},{id:"common-mistakes",icon:s.jsx(ro,{}),title:"Common mistakes",summary:"Small Java mistakes that repeatedly appear in interviews and real projects.",points:["Using == instead of equals for String content comparison.","Forgetting break in switch (fall-through).","Ignoring null checks and causing NullPointerException.","Modifying a collection while iterating using for-each (ConcurrentModificationException).","Assuming Java passes objects by reference (it does not)."],code:`import java.util.ArrayList;
import java.util.Iterator;

public class MistakesDemo {
    public static void main(String[] args) {
        String a = "java";
        String b = new String("java");
        System.out.println(a.equals(b)); // true
        System.out.println(a == b);      // false

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);

        // safe removal using iterator
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            Integer v = it.next();
            if (v == 2) it.remove();
        }
    }
}`,note:"If you remember only one thing - Strings use equals, not ==."},{id:"performance-considerations",icon:s.jsx(Cp,{}),title:"Performance considerations",summary:"Know the common time-cost patterns so you do not pick slow approaches by accident.",points:["String concatenation inside loops is costly. Use StringBuilder.","Prefer primitives when you do not need object behavior (boxing adds overhead).","ArrayList random access is fast, LinkedList random access is slow.","HashMap average operations are O(1), TreeMap operations are O(log n).","Avoid premature optimization, but know the typical hotspots."],code:`public class PerfDemo {
    public static void main(String[] args) {
        // bad inside loops
        String s = "";
        for (int i = 0; i < 1000; i++) {
            s = s + i;
        }

        // better
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            sb.append(i);
        }
        String result = sb.toString();
    }
}`,note:"StringBuilder is a classic Java performance win for repeated concatenation."},{id:"which-collection",icon:s.jsx(yl,{}),title:"When to use which collection",summary:"Pick collections by access pattern, ordering needs, uniqueness, and lookup speed.",points:["ArrayList - fast index access, append is usually cheap, great default list.","LinkedList - good for frequent insert/remove at ends, not for random access.","HashSet - unique elements, fast lookup, order not guaranteed.","LinkedHashSet - unique with insertion order preserved.","TreeSet - unique and sorted, slower than HashSet.","HashMap - key-value, fast lookup, order not guaranteed.","LinkedHashMap - preserves insertion order, useful for LRU-style logic.","TreeMap - sorted keys, supports range queries."],code:`import java.util.*;

public class ChooseCollection {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();           // default list
        Set<String> set = new HashSet<>();                // unique + fast lookup
        Map<String, Integer> map = new HashMap<>();       // key-value lookup

        Set<Integer> sorted = new TreeSet<>();            // sorted unique
        Map<String, Integer> ordered = new LinkedHashMap<>(); // preserves insertion order
    }
}`,note:"Default choices in real projects are often ArrayList + HashMap unless ordering or sorting is required."}],[]);return s.jsx(Pi.Wrapper,{children:s.jsxs(Pi.Container,{className:o?"isOpen":"",children:[s.jsxs(Pi.Header,{type:"button",onClick:()=>d(c=>!c),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Vi,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Best Practices and Interview Traps"}),s.jsx("div",{className:"subtitle",children:"Practical rules that prevent bugs and win interviews"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(Qe,{}):s.jsx(qe,{})})]})]}),o&&s.jsxs(Pi.Content,{children:[s.jsx("div",{className:"topNote",children:"These topics show maturity. They are simple on paper, but they decide real-world reliability and interview confidence."}),s.jsx("div",{className:"grid",children:l.map(c=>s.jsxs("div",{className:"card",id:c.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:c.icon}),s.jsx("div",{className:"cardTitle",children:c.title})]}),s.jsx("div",{className:"cardSummary",children:c.summary}),s.jsx("ul",{className:"list",children:c.points.map((h,y)=>s.jsx("li",{children:h},y))}),c.code&&s.jsx("pre",{className:"code",children:`${c.code}`}),c.note&&s.jsx("div",{className:"note",children:c.note})]},c.id))})]})]})})},Rg=()=>s.jsxs(rl.Wrapper,{children:[s.jsx(rl.Header,{children:s.jsx(cg,{})}),s.jsxs(rl.Main,{id:"notes-main",children:[s.jsxs("div",{className:"contentWrapper",children:[s.jsx(bg,{}),s.jsx(kg,{}),s.jsx(Sg,{}),s.jsx(jg,{}),s.jsx(Cg,{}),s.jsx(Ng,{}),s.jsx(Eg,{}),s.jsx(zg,{}),s.jsx(Tg,{}),s.jsx(Pg,{}),s.jsx(Mg,{}),s.jsx(Ig,{}),s.jsx(_g,{}),s.jsx(Og,{}),s.jsx(Dg,{}),s.jsx(Ag,{})]}),s.jsx("div",{className:"footerWrapper",children:s.jsx(vg,{})}),s.jsx(wg,{})]})]});Mm.createRoot(document.getElementById("root")).render(s.jsx(s.Fragment,{children:s.jsx(Rg,{})}));
