(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))l(m);new MutationObserver(m=>{for(const y of m)if(y.type==="childList")for(const C of y.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&l(C)}).observe(document,{childList:!0,subtree:!0});function c(m){const y={};return m.integrity&&(y.integrity=m.integrity),m.referrerPolicy&&(y.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?y.credentials="include":m.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function l(m){if(m.ep)return;m.ep=!0;const y=c(m);fetch(m.href,y)}})();function Nm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qs={exports:{}},to={},Qs={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Em(){if(vd)return ie;vd=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),C=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),W=Symbol.iterator;function Z(g){return g===null||typeof g!="object"?null:(g=W&&g[W]||g["@@iterator"],typeof g=="function"?g:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,H={};function q(g,b,ee){this.props=g,this.context=b,this.refs=H,this.updater=ee||ce}q.prototype.isReactComponent={},q.prototype.setState=function(g,b){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,b,"setState")},q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ge(){}ge.prototype=q.prototype;function de(g,b,ee){this.props=g,this.context=b,this.refs=H,this.updater=ee||ce}var oe=de.prototype=new ge;oe.constructor=de,K(oe,q.prototype),oe.isPureReactComponent=!0;var P=Array.isArray,X=Object.prototype.hasOwnProperty,V={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function R(g,b,ee){var te,le={},ae=null,pe=null;if(b!=null)for(te in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(ae=""+b.key),b)X.call(b,te)&&!z.hasOwnProperty(te)&&(le[te]=b[te]);var ue=arguments.length-2;if(ue===1)le.children=ee;else if(1<ue){for(var xe=Array(ue),Ee=0;Ee<ue;Ee++)xe[Ee]=arguments[Ee+2];le.children=xe}if(g&&g.defaultProps)for(te in ue=g.defaultProps,ue)le[te]===void 0&&(le[te]=ue[te]);return{$$typeof:o,type:g,key:ae,ref:pe,props:le,_owner:V.current}}function ye(g,b){return{$$typeof:o,type:g.type,key:b,ref:g.ref,props:g.props,_owner:g._owner}}function Me(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function se(g){var b={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return b[ee]})}var Te=/\/+/g;function Ce(g,b){return typeof g=="object"&&g!==null&&g.key!=null?se(""+g.key):b.toString(36)}function $e(g,b,ee,te,le){var ae=typeof g;(ae==="undefined"||ae==="boolean")&&(g=null);var pe=!1;if(g===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(g.$$typeof){case o:case u:pe=!0}}if(pe)return pe=g,le=le(pe),g=te===""?"."+Ce(pe,0):te,P(le)?(ee="",g!=null&&(ee=g.replace(Te,"$&/")+"/"),$e(le,b,ee,"",function(Ee){return Ee})):le!=null&&(Me(le)&&(le=ye(le,ee+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(Te,"$&/")+"/")+g)),b.push(le)),1;if(pe=0,te=te===""?".":te+":",P(g))for(var ue=0;ue<g.length;ue++){ae=g[ue];var xe=te+Ce(ae,ue);pe+=$e(ae,b,ee,xe,le)}else if(xe=Z(g),typeof xe=="function")for(g=xe.call(g),ue=0;!(ae=g.next()).done;)ae=ae.value,xe=te+Ce(ae,ue++),pe+=$e(ae,b,ee,xe,le);else if(ae==="object")throw b=String(g),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function Ke(g,b,ee){if(g==null)return g;var te=[],le=0;return $e(g,te,"","",function(ae){return b.call(ee,ae,le++)}),te}function Ye(g){if(g._status===-1){var b=g._result;b=b(),b.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=b)}if(g._status===1)return g._result.default;throw g._result}var we={current:null},L={transition:null},B={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:L,ReactCurrentOwner:V};function M(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Ke,forEach:function(g,b,ee){Ke(g,function(){b.apply(this,arguments)},ee)},count:function(g){var b=0;return Ke(g,function(){b++}),b},toArray:function(g){return Ke(g,function(b){return b})||[]},only:function(g){if(!Me(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ie.Component=q,ie.Fragment=c,ie.Profiler=m,ie.PureComponent=de,ie.StrictMode=l,ie.Suspense=E,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,ie.act=M,ie.cloneElement=function(g,b,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=K({},g.props),le=g.key,ae=g.ref,pe=g._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,pe=V.current),b.key!==void 0&&(le=""+b.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(xe in b)X.call(b,xe)&&!z.hasOwnProperty(xe)&&(te[xe]=b[xe]===void 0&&ue!==void 0?ue[xe]:b[xe])}var xe=arguments.length-2;if(xe===1)te.children=ee;else if(1<xe){ue=Array(xe);for(var Ee=0;Ee<xe;Ee++)ue[Ee]=arguments[Ee+2];te.children=ue}return{$$typeof:o,type:g.type,key:le,ref:ae,props:te,_owner:pe}},ie.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:y,_context:g},g.Consumer=g},ie.createElement=R,ie.createFactory=function(g){var b=R.bind(null,g);return b.type=g,b},ie.createRef=function(){return{current:null}},ie.forwardRef=function(g){return{$$typeof:T,render:g}},ie.isValidElement=Me,ie.lazy=function(g){return{$$typeof:J,_payload:{_status:-1,_result:g},_init:Ye}},ie.memo=function(g,b){return{$$typeof:G,type:g,compare:b===void 0?null:b}},ie.startTransition=function(g){var b=L.transition;L.transition={};try{g()}finally{L.transition=b}},ie.unstable_act=M,ie.useCallback=function(g,b){return we.current.useCallback(g,b)},ie.useContext=function(g){return we.current.useContext(g)},ie.useDebugValue=function(){},ie.useDeferredValue=function(g){return we.current.useDeferredValue(g)},ie.useEffect=function(g,b){return we.current.useEffect(g,b)},ie.useId=function(){return we.current.useId()},ie.useImperativeHandle=function(g,b,ee){return we.current.useImperativeHandle(g,b,ee)},ie.useInsertionEffect=function(g,b){return we.current.useInsertionEffect(g,b)},ie.useLayoutEffect=function(g,b){return we.current.useLayoutEffect(g,b)},ie.useMemo=function(g,b){return we.current.useMemo(g,b)},ie.useReducer=function(g,b,ee){return we.current.useReducer(g,b,ee)},ie.useRef=function(g){return we.current.useRef(g)},ie.useState=function(g){return we.current.useState(g)},ie.useSyncExternalStore=function(g,b,ee){return we.current.useSyncExternalStore(g,b,ee)},ie.useTransition=function(){return we.current.useTransition()},ie.version="18.3.1",ie}var yd;function ml(){return yd||(yd=1,Qs.exports=Em()),Qs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Lm(){if(wd)return to;wd=1;var o=ml(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function C(T,E,G){var J,W={},Z=null,ce=null;G!==void 0&&(Z=""+G),E.key!==void 0&&(Z=""+E.key),E.ref!==void 0&&(ce=E.ref);for(J in E)l.call(E,J)&&!y.hasOwnProperty(J)&&(W[J]=E[J]);if(T&&T.defaultProps)for(J in E=T.defaultProps,E)W[J]===void 0&&(W[J]=E[J]);return{$$typeof:u,type:T,key:Z,ref:ce,props:W,_owner:m.current}}return to.Fragment=c,to.jsx=C,to.jsxs=C,to}var bd;function zm(){return bd||(bd=1,qs.exports=Lm()),qs.exports}var s=zm(),yi={},Gs={exports:{}},st={},Ks={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Tm(){return kd||(kd=1,(function(o){function u(L,B){var M=L.length;L.push(B);e:for(;0<M;){var g=M-1>>>1,b=L[g];if(0<m(b,B))L[g]=B,L[M]=b,M=g;else break e}}function c(L){return L.length===0?null:L[0]}function l(L){if(L.length===0)return null;var B=L[0],M=L.pop();if(M!==B){L[0]=M;e:for(var g=0,b=L.length,ee=b>>>1;g<ee;){var te=2*(g+1)-1,le=L[te],ae=te+1,pe=L[ae];if(0>m(le,M))ae<b&&0>m(pe,le)?(L[g]=pe,L[ae]=M,g=ae):(L[g]=le,L[te]=M,g=te);else if(ae<b&&0>m(pe,M))L[g]=pe,L[ae]=M,g=ae;else break e}}return B}function m(L,B){var M=L.sortIndex-B.sortIndex;return M!==0?M:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;o.unstable_now=function(){return y.now()}}else{var C=Date,T=C.now();o.unstable_now=function(){return C.now()-T}}var E=[],G=[],J=1,W=null,Z=3,ce=!1,K=!1,H=!1,q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(L){for(var B=c(G);B!==null;){if(B.callback===null)l(G);else if(B.startTime<=L)l(G),B.sortIndex=B.expirationTime,u(E,B);else break;B=c(G)}}function P(L){if(H=!1,oe(L),!K)if(c(E)!==null)K=!0,Ye(X);else{var B=c(G);B!==null&&we(P,B.startTime-L)}}function X(L,B){K=!1,H&&(H=!1,ge(R),R=-1),ce=!0;var M=Z;try{for(oe(B),W=c(E);W!==null&&(!(W.expirationTime>B)||L&&!se());){var g=W.callback;if(typeof g=="function"){W.callback=null,Z=W.priorityLevel;var b=g(W.expirationTime<=B);B=o.unstable_now(),typeof b=="function"?W.callback=b:W===c(E)&&l(E),oe(B)}else l(E);W=c(E)}if(W!==null)var ee=!0;else{var te=c(G);te!==null&&we(P,te.startTime-B),ee=!1}return ee}finally{W=null,Z=M,ce=!1}}var V=!1,z=null,R=-1,ye=5,Me=-1;function se(){return!(o.unstable_now()-Me<ye)}function Te(){if(z!==null){var L=o.unstable_now();Me=L;var B=!0;try{B=z(!0,L)}finally{B?Ce():(V=!1,z=null)}}else V=!1}var Ce;if(typeof de=="function")Ce=function(){de(Te)};else if(typeof MessageChannel!="undefined"){var $e=new MessageChannel,Ke=$e.port2;$e.port1.onmessage=Te,Ce=function(){Ke.postMessage(null)}}else Ce=function(){q(Te,0)};function Ye(L){z=L,V||(V=!0,Ce())}function we(L,B){R=q(function(){L(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){K||ce||(K=!0,Ye(X))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return Z},o.unstable_getFirstCallbackNode=function(){return c(E)},o.unstable_next=function(L){switch(Z){case 1:case 2:case 3:var B=3;break;default:B=Z}var M=Z;Z=B;try{return L()}finally{Z=M}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var M=Z;Z=L;try{return B()}finally{Z=M}},o.unstable_scheduleCallback=function(L,B,M){var g=o.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?g+M:g):M=g,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=M+b,L={id:J++,callback:B,priorityLevel:L,startTime:M,expirationTime:b,sortIndex:-1},M>g?(L.sortIndex=M,u(G,L),c(E)===null&&L===c(G)&&(H?(ge(R),R=-1):H=!0,we(P,M-g))):(L.sortIndex=b,u(E,L),K||ce||(K=!0,Ye(X))),L},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(L){var B=Z;return function(){var M=Z;Z=B;try{return L.apply(this,arguments)}finally{Z=M}}}})(Xs)),Xs}var Sd;function Pm(){return Sd||(Sd=1,Ks.exports=Tm()),Ks.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Mm(){if(jd)return st;jd=1;var o=ml(),u=Pm();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,m={};function y(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(m[e]=t,e=0;e<t.length;e++)l.add(t[e])}var T=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},W={};function Z(e){return E.call(W,e)?!0:E.call(J,e)?!1:G.test(e)?W[e]=!0:(J[e]=!0,!1)}function ce(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,r,n){if(t===null||typeof t=="undefined"||ce(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,r,n,i,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ge,de);q[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ge,de);q[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ge,de);q[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,r,n){var i=q.hasOwnProperty(t)?q[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,r,i,n)&&(r=null),n||i===null?Z(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var P=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),V=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),L=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,g;function b(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var ee=!1;function te(e,t){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var n=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){n=w}e.call(t.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),a=n.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var f=`
`+i[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?b(e):""}function le(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case V:return"Portal";case ye:return"Profiler";case R:return"StrictMode";case Ce:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qt(e){e._valueTracker||(e._valueTracker=Ee(e))}function xr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xe(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function St(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,t){var r=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function Cl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nl(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function ra(e,t){Nl(e,t);var r=ue(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,r):t.hasOwnProperty("defaultValue")&&na(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function El(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function na(e,t,r){(t!=="number"||St(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function Dr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ll(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(gn(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function zl(e,t){var r=ue(t.value),n=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Tl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,Ml=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zp=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(e){zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vn[t]=vn[e]})});function _l(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vn.hasOwnProperty(e)&&vn[e]?(""+t).trim():t+"px"}function Il(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=_l(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Tp=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(Tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,Rr=null,Fr=null;function Al(e){if(e=Bn(e)){if(typeof ua!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Io(t),ua(e.stateNode,e.type,t))}}function Ol(e){Rr?Fr?Fr.push(e):Fr=[e]:Rr=e}function Dl(){if(Rr){var e=Rr,t=Fr;if(Fr=Rr=null,Al(e),t)for(e=0;e<t.length;e++)Al(t[e])}}function Rl(e,t){return e(t)}function Fl(){}var da=!1;function Bl(e,t,r){if(da)return e(t,r);da=!0;try{return Rl(e,t,r)}finally{da=!1,(Rr!==null||Fr!==null)&&(Fl(),Dl())}}function yn(e,t){var r=e.stateNode;if(r===null)return null;var n=Io(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var pa=!1;if(T)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){pa=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{pa=!1}function Pp(e,t,r,n,i,a,d,p,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(S){this.onError(S)}}var bn=!1,po=null,fo=!1,fa=null,Mp={onError:function(e){bn=!0,po=e}};function _p(e,t,r,n,i,a,d,p,f){bn=!1,po=null,Pp.apply(Mp,arguments)}function Ip(e,t,r,n,i,a,d,p,f){if(_p.apply(this,arguments),bn){if(bn){var w=po;bn=!1,po=null}else throw Error(c(198));fo||(fo=!0,fa=w)}}function vr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ul(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wl(e){if(vr(e)!==e)throw Error(c(188))}function Ap(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Wl(i),e;if(a===n)return Wl(i),t;a=a.sibling}throw Error(c(188))}if(r.return!==n.return)r=i,n=a;else{for(var d=!1,p=i.child;p;){if(p===r){d=!0,r=i,n=a;break}if(p===n){d=!0,n=i,r=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===r){d=!0,r=a,n=i;break}if(p===n){d=!0,n=a,r=i;break}p=p.sibling}if(!d)throw Error(c(189))}}if(r.alternate!==n)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Hl(e){return e=Ap(e),e!==null?Vl(e):null}function Vl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vl(e);if(t!==null)return t;e=e.sibling}return null}var $l=u.unstable_scheduleCallback,Yl=u.unstable_cancelCallback,Op=u.unstable_shouldYield,Dp=u.unstable_requestPaint,_e=u.unstable_now,Rp=u.unstable_getCurrentPriorityLevel,ma=u.unstable_ImmediatePriority,Jl=u.unstable_UserBlockingPriority,mo=u.unstable_NormalPriority,Fp=u.unstable_LowPriority,ql=u.unstable_IdlePriority,ho=null,_t=null;function Bp(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Hp,Up=Math.log,Wp=Math.LN2;function Hp(e){return e>>>=0,e===0?32:31-(Up(e)/Wp|0)|0}var go=64,xo=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,d=r&268435455;if(d!==0){var p=d&~i;p!==0?n=kn(p):(a&=d,a!==0&&(n=kn(a)))}else d=r&~i,d!==0?n=kn(d):a!==0&&(n=kn(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-jt(t),i=1<<r,n|=e[r],t&=~i;return n}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-jt(a),p=1<<d,f=i[d];f===-1?((p&r)===0||(p&n)!==0)&&(i[d]=Vp(p,t)):f<=t&&(e.expiredLanes|=p),a&=~p}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ql(){var e=go;return go<<=1,(go&4194240)===0&&(go=64),e}function ga(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Yp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-jt(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function xa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-jt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ve=0;function Gl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Kl,va,Xl,Zl,ec,ya=!1,yo=[],Gt=null,Kt=null,Xt=null,jn=new Map,Cn=new Map,Zt=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Nn(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Bn(t),t!==null&&va(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qp(e,t,r,n,i){switch(t){case"focusin":return Gt=Nn(Gt,e,t,r,n,i),!0;case"dragenter":return Kt=Nn(Kt,e,t,r,n,i),!0;case"mouseover":return Xt=Nn(Xt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return jn.set(a,Nn(jn.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Cn.set(a,Nn(Cn.get(a)||null,e,t,r,n,i)),!0}return!1}function rc(e){var t=yr(e.target);if(t!==null){var r=vr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ul(r),t!==null){e.blockedOn=t,ec(e.priority,function(){Xl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);la=n,r.target.dispatchEvent(n),la=null}else return t=Bn(r),t!==null&&va(t),e.blockedOn=r,!1;t.shift()}return!0}function nc(e,t,r){wo(e)&&r.delete(t)}function Qp(){ya=!1,Gt!==null&&wo(Gt)&&(Gt=null),Kt!==null&&wo(Kt)&&(Kt=null),Xt!==null&&wo(Xt)&&(Xt=null),jn.forEach(nc),Cn.forEach(nc)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Qp)))}function Ln(e){function t(i){return En(i,e)}if(0<yo.length){En(yo[0],e);for(var r=1;r<yo.length;r++){var n=yo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Gt!==null&&En(Gt,e),Kt!==null&&En(Kt,e),Xt!==null&&En(Xt,e),jn.forEach(t),Cn.forEach(t),r=0;r<Zt.length;r++)n=Zt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Zt.length&&(r=Zt[0],r.blockedOn===null);)rc(r),r.blockedOn===null&&Zt.shift()}var Br=P.ReactCurrentBatchConfig,bo=!0;function Gp(e,t,r,n){var i=ve,a=Br.transition;Br.transition=null;try{ve=1,wa(e,t,r,n)}finally{ve=i,Br.transition=a}}function Kp(e,t,r,n){var i=ve,a=Br.transition;Br.transition=null;try{ve=4,wa(e,t,r,n)}finally{ve=i,Br.transition=a}}function wa(e,t,r,n){if(bo){var i=ba(e,t,r,n);if(i===null)Ra(e,t,n,ko,r),tc(e,n);else if(qp(i,e,t,r,n))n.stopPropagation();else if(tc(e,n),t&4&&-1<Jp.indexOf(e)){for(;i!==null;){var a=Bn(i);if(a!==null&&Kl(a),a=ba(e,t,r,n),a===null&&Ra(e,t,n,ko,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Ra(e,t,n,null,r)}}var ko=null;function ba(e,t,r,n){if(ko=null,e=ca(n),e=yr(e),e!==null)if(t=vr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ul(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rp()){case ma:return 1;case Jl:return 4;case mo:case Fp:return 16;case ql:return 536870912;default:return 16}default:return 16}}var er=null,ka=null,So=null;function ic(){if(So)return So;var e,t=ka,r=t.length,n,i="value"in er?er.value:er.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var d=r-e;for(n=1;n<=d&&t[r-n]===i[a-n];n++);return So=i.slice(e,1<n?1-n:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function ac(){return!1}function ct(e){function t(r,n,i,a,d){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Co:ac,this.isPropagationStopped=ac,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=ct(Ur),zn=M({},Ur,{view:0,detail:0}),Xp=ct(zn),ja,Ca,Tn,No=M({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(ja=e.screenX-Tn.screenX,Ca=e.screenY-Tn.screenY):Ca=ja=0,Tn=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),sc=ct(No),Zp=M({},No,{dataTransfer:0}),ef=ct(Zp),tf=M({},zn,{relatedTarget:0}),Na=ct(tf),rf=M({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=ct(rf),of=M({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=ct(of),sf=M({},Ur,{data:0}),lc=ct(sf),lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function Ea(){return df}var pf=M({},zn,{key:function(e){if(e.key){var t=lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=ct(pf),mf=M({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=ct(mf),hf=M({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),gf=ct(hf),xf=M({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=ct(xf),yf=M({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=ct(yf),bf=[9,13,27,32],La=T&&"CompositionEvent"in window,Pn=null;T&&"documentMode"in document&&(Pn=document.documentMode);var kf=T&&"TextEvent"in window&&!Pn,uc=T&&(!La||Pn&&8<Pn&&11>=Pn),dc=" ",pc=!1;function fc(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function Sf(e,t){switch(e){case"compositionend":return mc(t);case"keypress":return t.which!==32?null:(pc=!0,dc);case"textInput":return e=t.data,e===dc&&pc?null:e;default:return null}}function jf(e,t){if(Wr)return e==="compositionend"||!La&&fc(e,t)?(e=ic(),So=ka=er=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uc&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function gc(e,t,r,n){Ol(n),t=Po(t,"onChange"),0<t.length&&(r=new Sa("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mn=null,_n=null;function Nf(e){Ic(e,0)}function Eo(e){var t=Jr(e);if(xr(t))return e}function Ef(e,t){if(e==="change")return t}var xc=!1;if(T){var za;if(T){var Ta="oninput"in document;if(!Ta){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),Ta=typeof vc.oninput=="function"}za=Ta}else za=!1;xc=za&&(!document.documentMode||9<document.documentMode)}function yc(){Mn&&(Mn.detachEvent("onpropertychange",wc),_n=Mn=null)}function wc(e){if(e.propertyName==="value"&&Eo(_n)){var t=[];gc(t,_n,e,ca(e)),Bl(Nf,t)}}function Lf(e,t,r){e==="focusin"?(yc(),Mn=t,_n=r,Mn.attachEvent("onpropertychange",wc)):e==="focusout"&&yc()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(_n)}function Tf(e,t){if(e==="click")return Eo(t)}function Pf(e,t){if(e==="input"||e==="change")return Eo(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Mf;function In(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!E.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var r=bc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bc(r)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jc(){for(var e=window,t=St();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=St(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _f(e){var t=jc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Sc(r.ownerDocument.documentElement,r)){if(n!==null&&Pa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=kc(r,a);var d=kc(r,n);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=T&&"documentMode"in document&&11>=document.documentMode,Hr=null,Ma=null,An=null,_a=!1;function Cc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_a||Hr==null||Hr!==St(n)||(n=Hr,"selectionStart"in n&&Pa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),An&&In(An,n)||(An=n,n=Po(Ma,"onSelect"),0<n.length&&(t=new Sa("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Hr)))}function Lo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Vr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Ia={},Nc={};T&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function zo(e){if(Ia[e])return Ia[e];if(!Vr[e])return e;var t=Vr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Nc)return Ia[e]=t[r];return e}var Ec=zo("animationend"),Lc=zo("animationiteration"),zc=zo("animationstart"),Tc=zo("transitionend"),Pc=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){Pc.set(e,t),y(t,[e])}for(var Aa=0;Aa<Mc.length;Aa++){var Oa=Mc[Aa],Af=Oa.toLowerCase(),Of=Oa[0].toUpperCase()+Oa.slice(1);tr(Af,"on"+Of)}tr(Ec,"onAnimationEnd"),tr(Lc,"onAnimationIteration"),tr(zc,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Tc,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function _c(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ip(n,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var d=n.length-1;0<=d;d--){var p=n[d],f=p.instance,w=p.currentTarget;if(p=p.listener,f!==a&&i.isPropagationStopped())break e;_c(i,p,w),a=f}else for(d=0;d<n.length;d++){if(p=n[d],f=p.instance,w=p.currentTarget,p=p.listener,f!==a&&i.isPropagationStopped())break e;_c(i,p,w),a=f}}}if(fo)throw e=fa,fo=!1,fa=null,e}function ke(e,t){var r=t[Va];r===void 0&&(r=t[Va]=new Set);var n=e+"__bubble";r.has(n)||(Ac(t,e,2,!1),r.add(n))}function Da(e,t,r){var n=0;t&&(n|=4),Ac(r,e,n,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[To]){e[To]=!0,l.forEach(function(r){r!=="selectionchange"&&(Df.has(r)||Da(r,!1,e),Da(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,Da("selectionchange",!1,t))}}function Ac(e,t,r,n){switch(oc(t)){case 1:var i=Gp;break;case 4:i=Kp;break;default:i=wa}r=i.bind(null,t,r,e),i=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ra(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;d=d.return}for(;p!==null;){if(d=yr(p),d===null)return;if(f=d.tag,f===5||f===6){n=a=d;continue e}p=p.parentNode}}n=n.return}Bl(function(){var w=a,S=ca(r),j=[];e:{var k=Pc.get(e);if(k!==void 0){var _=Sa,O=e;switch(e){case"keypress":if(jo(r)===0)break e;case"keydown":case"keyup":_=ff;break;case"focusin":O="focus",_=Na;break;case"focusout":O="blur",_=Na;break;case"beforeblur":case"afterblur":_=Na;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=gf;break;case Ec:case Lc:case zc:_=nf;break;case Tc:_=vf;break;case"scroll":_=Xp;break;case"wheel":_=wf;break;case"copy":case"cut":case"paste":_=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=cc}var D=(t&4)!==0,Ie=!D&&e==="scroll",x=D?k!==null?k+"Capture":null:k;D=[];for(var h=w,v;h!==null;){v=h;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,x!==null&&(N=yn(h,x),N!=null&&D.push(Rn(h,N,v)))),Ie)break;h=h.return}0<D.length&&(k=new _(k,O,null,r,S),j.push({event:k,listeners:D}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",k&&r!==la&&(O=r.relatedTarget||r.fromElement)&&(yr(O)||O[Ft]))break e;if((_||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,_?(O=r.relatedTarget||r.toElement,_=w,O=O?yr(O):null,O!==null&&(Ie=vr(O),O!==Ie||O.tag!==5&&O.tag!==6)&&(O=null)):(_=null,O=w),_!==O)){if(D=sc,N="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(D=cc,N="onPointerLeave",x="onPointerEnter",h="pointer"),Ie=_==null?k:Jr(_),v=O==null?k:Jr(O),k=new D(N,h+"leave",_,r,S),k.target=Ie,k.relatedTarget=v,N=null,yr(S)===w&&(D=new D(x,h+"enter",O,r,S),D.target=v,D.relatedTarget=Ie,N=D),Ie=N,_&&O)t:{for(D=_,x=O,h=0,v=D;v;v=$r(v))h++;for(v=0,N=x;N;N=$r(N))v++;for(;0<h-v;)D=$r(D),h--;for(;0<v-h;)x=$r(x),v--;for(;h--;){if(D===x||x!==null&&D===x.alternate)break t;D=$r(D),x=$r(x)}D=null}else D=null;_!==null&&Oc(j,k,_,D,!1),O!==null&&Ie!==null&&Oc(j,Ie,O,D,!0)}}e:{if(k=w?Jr(w):window,_=k.nodeName&&k.nodeName.toLowerCase(),_==="select"||_==="input"&&k.type==="file")var F=Ef;else if(hc(k))if(xc)F=Pf;else{F=zf;var $=Lf}else(_=k.nodeName)&&_.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=Tf);if(F&&(F=F(e,w))){gc(j,F,r,S);break e}$&&$(e,k,w),e==="focusout"&&($=k._wrapperState)&&$.controlled&&k.type==="number"&&na(k,"number",k.value)}switch($=w?Jr(w):window,e){case"focusin":(hc($)||$.contentEditable==="true")&&(Hr=$,Ma=w,An=null);break;case"focusout":An=Ma=Hr=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Cc(j,r,S);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Cc(j,r,S)}var Y;if(La)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Wr?fc(e,r)&&(Q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Q="onCompositionStart");Q&&(uc&&r.locale!=="ko"&&(Wr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Wr&&(Y=ic()):(er=S,ka="value"in er?er.value:er.textContent,Wr=!0)),$=Po(w,Q),0<$.length&&(Q=new lc(Q,e,null,r,S),j.push({event:Q,listeners:$}),Y?Q.data=Y:(Y=mc(r),Y!==null&&(Q.data=Y)))),(Y=kf?Sf(e,r):jf(e,r))&&(w=Po(w,"onBeforeInput"),0<w.length&&(S=new lc("onBeforeInput","beforeinput",null,r,S),j.push({event:S,listeners:w}),S.data=Y))}Ic(j,t)})}function Rn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Po(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=yn(e,r),a!=null&&n.unshift(Rn(e,a,i)),a=yn(e,t),a!=null&&n.push(Rn(e,a,i))),e=e.return}return n}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,r,n,i){for(var a=t._reactName,d=[];r!==null&&r!==n;){var p=r,f=p.alternate,w=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&w!==null&&(p=w,i?(f=yn(r,a),f!=null&&d.unshift(Rn(r,f,p))):i||(f=yn(r,a),f!=null&&d.push(Rn(r,f,p)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Rf=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Ff,"")}function Mo(e,t,r){if(t=Dc(t),Dc(e)!==t&&r)throw Error(c(425))}function _o(){}var Fa=null,Ba=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc!="undefined"?function(e){return Rc.resolve(null).then(e).catch(Wf)}:Wa;function Wf(e){setTimeout(function(){throw e})}function Ha(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ln(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ln(t)}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),It="__reactFiber$"+Yr,Fn="__reactProps$"+Yr,Ft="__reactContainer$"+Yr,Va="__reactEvents$"+Yr,Hf="__reactListeners$"+Yr,Vf="__reactHandles$"+Yr;function yr(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ft]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fc(e);e!==null;){if(r=e[It])return r;e=Fc(e)}return t}e=r,r=e.parentNode}return null}function Bn(e){return e=e[It]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Io(e){return e[Fn]||null}var $a=[],qr=-1;function nr(e){return{current:e}}function Se(e){0>qr||(e.current=$a[qr],$a[qr]=null,qr--)}function be(e,t){qr++,$a[qr]=e.current,e.current=t}var or={},Je=nr(or),rt=nr(!1),wr=or;function Qr(e,t){var r=e.type.contextTypes;if(!r)return or;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function Ao(){Se(rt),Se(Je)}function Bc(e,t,r){if(Je.current!==or)throw Error(c(168));be(Je,t),be(rt,r)}function Uc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(c(108,pe(e)||"Unknown",i));return M({},r,n)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,wr=Je.current,be(Je,e),be(rt,rt.current),!0}function Wc(e,t,r){var n=e.stateNode;if(!n)throw Error(c(169));r?(e=Uc(e,t,wr),n.__reactInternalMemoizedMergedChildContext=e,Se(rt),Se(Je),be(Je,e)):Se(rt),be(rt,r)}var Bt=null,Do=!1,Ya=!1;function Hc(e){Bt===null?Bt=[e]:Bt.push(e)}function $f(e){Do=!0,Hc(e)}function ir(){if(!Ya&&Bt!==null){Ya=!0;var e=0,t=ve;try{var r=Bt;for(ve=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Bt=null,Do=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),$l(ma,ir),i}finally{ve=t,Ya=!1}}return null}var Gr=[],Kr=0,Ro=null,Fo=0,ht=[],gt=0,br=null,Ut=1,Wt="";function kr(e,t){Gr[Kr++]=Fo,Gr[Kr++]=Ro,Ro=e,Fo=t}function Vc(e,t,r){ht[gt++]=Ut,ht[gt++]=Wt,ht[gt++]=br,br=e;var n=Ut;e=Wt;var i=32-jt(n)-1;n&=~(1<<i),r+=1;var a=32-jt(t)+i;if(30<a){var d=i-i%5;a=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Ut=1<<32-jt(t)+i|r<<i|n,Wt=a+e}else Ut=1<<a|r<<i|n,Wt=e}function Ja(e){e.return!==null&&(kr(e,1),Vc(e,1,0))}function qa(e){for(;e===Ro;)Ro=Gr[--Kr],Gr[Kr]=null,Fo=Gr[--Kr],Gr[Kr]=null;for(;e===br;)br=ht[--gt],ht[gt]=null,Wt=ht[--gt],ht[gt]=null,Ut=ht[--gt],ht[gt]=null}var ut=null,dt=null,Ne=!1,Nt=null;function $c(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Yc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=br!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ut=e,dt=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(Ne){var t=dt;if(t){var r=t;if(!Yc(e,t)){if(Qa(e))throw Error(c(418));t=rr(r.nextSibling);var n=ut;t&&Yc(e,t)?$c(n,r):(e.flags=e.flags&-4097|2,Ne=!1,ut=e)}}else{if(Qa(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ne=!1,ut=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Bo(e){if(e!==ut)return!1;if(!Ne)return Jc(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=dt)){if(Qa(e))throw qc(),Error(c(418));for(;t;)$c(e,t),t=rr(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=rr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?rr(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=dt;e;)e=rr(e.nextSibling)}function Xr(){dt=ut=null,Ne=!1}function Ka(e){Nt===null?Nt=[e]:Nt.push(e)}var Yf=P.ReactCurrentBatchConfig;function Un(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var n=r.stateNode}if(!n)throw Error(c(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qc(e){var t=e._init;return t(e._payload)}function Gc(e){function t(x,h){if(e){var v=x.deletions;v===null?(x.deletions=[h],x.flags|=16):v.push(h)}}function r(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function n(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=fr(x,h),x.index=0,x.sibling=null,x}function a(x,h,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<h?(x.flags|=2,h):v):(x.flags|=2,h)):(x.flags|=1048576,h)}function d(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,h,v,N){return h===null||h.tag!==6?(h=Ws(v,x.mode,N),h.return=x,h):(h=i(h,v),h.return=x,h)}function f(x,h,v,N){var F=v.type;return F===z?S(x,h,v.props.children,N,v.key):h!==null&&(h.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ye&&Qc(F)===h.type)?(N=i(h,v.props),N.ref=Un(x,h,v),N.return=x,N):(N=di(v.type,v.key,v.props,null,x.mode,N),N.ref=Un(x,h,v),N.return=x,N)}function w(x,h,v,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Hs(v,x.mode,N),h.return=x,h):(h=i(h,v.children||[]),h.return=x,h)}function S(x,h,v,N,F){return h===null||h.tag!==7?(h=Tr(v,x.mode,N,F),h.return=x,h):(h=i(h,v),h.return=x,h)}function j(x,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ws(""+h,x.mode,v),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case X:return v=di(h.type,h.key,h.props,null,x.mode,v),v.ref=Un(x,null,h),v.return=x,v;case V:return h=Hs(h,x.mode,v),h.return=x,h;case Ye:var N=h._init;return j(x,N(h._payload),v)}if(gn(h)||B(h))return h=Tr(h,x.mode,v,null),h.return=x,h;Uo(x,h)}return null}function k(x,h,v,N){var F=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return F!==null?null:p(x,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===F?f(x,h,v,N):null;case V:return v.key===F?w(x,h,v,N):null;case Ye:return F=v._init,k(x,h,F(v._payload),N)}if(gn(v)||B(v))return F!==null?null:S(x,h,v,N,null);Uo(x,v)}return null}function _(x,h,v,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return x=x.get(v)||null,p(h,x,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case X:return x=x.get(N.key===null?v:N.key)||null,f(h,x,N,F);case V:return x=x.get(N.key===null?v:N.key)||null,w(h,x,N,F);case Ye:var $=N._init;return _(x,h,v,$(N._payload),F)}if(gn(N)||B(N))return x=x.get(v)||null,S(h,x,N,F,null);Uo(h,N)}return null}function O(x,h,v,N){for(var F=null,$=null,Y=h,Q=h=0,We=null;Y!==null&&Q<v.length;Q++){Y.index>Q?(We=Y,Y=null):We=Y.sibling;var me=k(x,Y,v[Q],N);if(me===null){Y===null&&(Y=We);break}e&&Y&&me.alternate===null&&t(x,Y),h=a(me,h,Q),$===null?F=me:$.sibling=me,$=me,Y=We}if(Q===v.length)return r(x,Y),Ne&&kr(x,Q),F;if(Y===null){for(;Q<v.length;Q++)Y=j(x,v[Q],N),Y!==null&&(h=a(Y,h,Q),$===null?F=Y:$.sibling=Y,$=Y);return Ne&&kr(x,Q),F}for(Y=n(x,Y);Q<v.length;Q++)We=_(Y,x,Q,v[Q],N),We!==null&&(e&&We.alternate!==null&&Y.delete(We.key===null?Q:We.key),h=a(We,h,Q),$===null?F=We:$.sibling=We,$=We);return e&&Y.forEach(function(mr){return t(x,mr)}),Ne&&kr(x,Q),F}function D(x,h,v,N){var F=B(v);if(typeof F!="function")throw Error(c(150));if(v=F.call(v),v==null)throw Error(c(151));for(var $=F=null,Y=h,Q=h=0,We=null,me=v.next();Y!==null&&!me.done;Q++,me=v.next()){Y.index>Q?(We=Y,Y=null):We=Y.sibling;var mr=k(x,Y,me.value,N);if(mr===null){Y===null&&(Y=We);break}e&&Y&&mr.alternate===null&&t(x,Y),h=a(mr,h,Q),$===null?F=mr:$.sibling=mr,$=mr,Y=We}if(me.done)return r(x,Y),Ne&&kr(x,Q),F;if(Y===null){for(;!me.done;Q++,me=v.next())me=j(x,me.value,N),me!==null&&(h=a(me,h,Q),$===null?F=me:$.sibling=me,$=me);return Ne&&kr(x,Q),F}for(Y=n(x,Y);!me.done;Q++,me=v.next())me=_(Y,x,Q,me.value,N),me!==null&&(e&&me.alternate!==null&&Y.delete(me.key===null?Q:me.key),h=a(me,h,Q),$===null?F=me:$.sibling=me,$=me);return e&&Y.forEach(function(Cm){return t(x,Cm)}),Ne&&kr(x,Q),F}function Ie(x,h,v,N){if(typeof v=="object"&&v!==null&&v.type===z&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var F=v.key,$=h;$!==null;){if($.key===F){if(F=v.type,F===z){if($.tag===7){r(x,$.sibling),h=i($,v.props.children),h.return=x,x=h;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ye&&Qc(F)===$.type){r(x,$.sibling),h=i($,v.props),h.ref=Un(x,$,v),h.return=x,x=h;break e}r(x,$);break}else t(x,$);$=$.sibling}v.type===z?(h=Tr(v.props.children,x.mode,N,v.key),h.return=x,x=h):(N=di(v.type,v.key,v.props,null,x.mode,N),N.ref=Un(x,h,v),N.return=x,x=N)}return d(x);case V:e:{for($=v.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(x,h.sibling),h=i(h,v.children||[]),h.return=x,x=h;break e}else{r(x,h);break}else t(x,h);h=h.sibling}h=Hs(v,x.mode,N),h.return=x,x=h}return d(x);case Ye:return $=v._init,Ie(x,h,$(v._payload),N)}if(gn(v))return O(x,h,v,N);if(B(v))return D(x,h,v,N);Uo(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(r(x,h.sibling),h=i(h,v),h.return=x,x=h):(r(x,h),h=Ws(v,x.mode,N),h.return=x,x=h),d(x)):r(x,h)}return Ie}var Zr=Gc(!0),Kc=Gc(!1),Wo=nr(null),Ho=null,en=null,Xa=null;function Za(){Xa=en=Ho=null}function es(e){var t=Wo.current;Se(Wo),e._currentValue=t}function ts(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function tn(e,t){Ho=e,Xa=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(Ho===null)throw Error(c(308));en=e,Ho.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Sr=null;function rs(e){Sr===null?Sr=[e]:Sr.push(e)}function Xc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,rs(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ht(e,n)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ar=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ht(e,r)}return i=n.interleaved,i===null?(t.next=t,rs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ht(e,r)}function Vo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xa(e,r)}}function eu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=d:a=a.next=d,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $o(e,t,r,n){var i=e.updateQueue;ar=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,w=f.next;f.next=null,d===null?a=w:d.next=w,d=f;var S=e.alternate;S!==null&&(S=S.updateQueue,p=S.lastBaseUpdate,p!==d&&(p===null?S.firstBaseUpdate=w:p.next=w,S.lastBaseUpdate=f))}if(a!==null){var j=i.baseState;d=0,S=w=f=null,p=a;do{var k=p.lane,_=p.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:_,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var O=e,D=p;switch(k=t,_=r,D.tag){case 1:if(O=D.payload,typeof O=="function"){j=O.call(_,j,k);break e}j=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=D.payload,k=typeof O=="function"?O.call(_,j,k):O,k==null)break e;j=M({},j,k);break e;case 2:ar=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[p]:k.push(p))}else _={eventTime:_,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},S===null?(w=S=_,f=j):S=S.next=_,d|=k;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(f=j),i.baseState=f,i.firstBaseUpdate=w,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Nr|=d,e.lanes=d,e.memoizedState=j}}function tu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(c(191,i));i.call(n)}}}var Wn={},At=nr(Wn),Hn=nr(Wn),Vn=nr(Wn);function jr(e){if(e===Wn)throw Error(c(174));return e}function os(e,t){switch(be(Vn,t),be(Hn,e),be(At,Wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ia(t,e)}Se(At),be(At,t)}function rn(){Se(At),Se(Hn),Se(Vn)}function ru(e){jr(Vn.current);var t=jr(At.current),r=ia(t,e.type);t!==r&&(be(Hn,e),be(At,r))}function is(e){Hn.current===e&&(Se(At),Se(Hn))}var Le=nr(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function ss(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var Jo=P.ReactCurrentDispatcher,ls=P.ReactCurrentBatchConfig,Cr=0,ze=null,De=null,Be=null,qo=!1,$n=!1,Yn=0,Jf=0;function qe(){throw Error(c(321))}function cs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function us(e,t,r,n,i,a){if(Cr=a,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?Kf:Xf,e=r(n,i),$n){a=0;do{if($n=!1,Yn=0,25<=a)throw Error(c(301));a+=1,Be=De=null,t.updateQueue=null,Jo.current=Zf,e=r(n,i)}while($n)}if(Jo.current=Ko,t=De!==null&&De.next!==null,Cr=0,Be=De=ze=null,qo=!1,t)throw Error(c(300));return e}function ds(){var e=Yn!==0;return Yn=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ze.memoizedState=Be=e:Be=Be.next=e,Be}function vt(){if(De===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Be===null?ze.memoizedState:Be.next;if(t!==null)Be=t,De=e;else{if(e===null)throw Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?ze.memoizedState=Be=e:Be=Be.next=e}return Be}function Jn(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=vt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=De,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var p=d=null,f=null,w=a;do{var S=w.lane;if((Cr&S)===S)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var j={lane:S,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(p=f=j,d=n):f=f.next=j,ze.lanes|=S,Nr|=S}w=w.next}while(w!==null&&w!==a);f===null?d=n:f.next=p,Ct(n,t.memoizedState)||(ot=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,ze.lanes|=a,Nr|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fs(e){var t=vt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);Ct(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function nu(){}function ou(e,t){var r=ze,n=vt(),i=t(),a=!Ct(n.memoizedState,i);if(a&&(n.memoizedState=i,ot=!0),n=n.queue,ms(su.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,qn(9,au.bind(null,r,n,i,t),void 0,null),Ue===null)throw Error(c(349));(Cr&30)!==0||iu(r,t,i)}return i}function iu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function au(e,t,r,n){t.value=r,t.getSnapshot=n,lu(t)&&cu(e)}function su(e,t,r){return r(function(){lu(t)&&cu(e)})}function lu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function cu(e){var t=Ht(e,1);t!==null&&Tt(t,e,1,-1)}function uu(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,ze,e),[t.memoizedState,e]}function qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function du(){return vt().memoizedState}function Qo(e,t,r,n){var i=Ot();ze.flags|=e,i.memoizedState=qn(1|t,r,void 0,n===void 0?null:n)}function Go(e,t,r,n){var i=vt();n=n===void 0?null:n;var a=void 0;if(De!==null){var d=De.memoizedState;if(a=d.destroy,n!==null&&cs(n,d.deps)){i.memoizedState=qn(t,r,a,n);return}}ze.flags|=e,i.memoizedState=qn(1|t,r,a,n)}function pu(e,t){return Qo(8390656,8,e,t)}function ms(e,t){return Go(2048,8,e,t)}function fu(e,t){return Go(4,2,e,t)}function mu(e,t){return Go(4,4,e,t)}function hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gu(e,t,r){return r=r!=null?r.concat([e]):null,Go(4,4,hu.bind(null,t,e),r)}function hs(){}function xu(e,t){var r=vt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&cs(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function vu(e,t){var r=vt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&cs(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function yu(e,t,r){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=r):(Ct(r,t)||(r=Ql(),ze.lanes|=r,Nr|=r,e.baseState=!0),t)}function qf(e,t){var r=ve;ve=r!==0&&4>r?r:4,e(!0);var n=ls.transition;ls.transition={};try{e(!1),t()}finally{ve=r,ls.transition=n}}function wu(){return vt().memoizedState}function Qf(e,t,r){var n=dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},bu(e))ku(t,r);else if(r=Xc(e,t,r,n),r!==null){var i=Ze();Tt(r,e,n,i),Su(r,t,n)}}function Gf(e,t,r){var n=dr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(bu(e))ku(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,p=a(d,r);if(i.hasEagerState=!0,i.eagerState=p,Ct(p,d)){var f=t.interleaved;f===null?(i.next=i,rs(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=Xc(e,t,i,n),r!==null&&(i=Ze(),Tt(r,e,n,i),Su(r,t,n))}}function bu(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function ku(e,t){$n=qo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Su(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xa(e,r)}}var Ko={readContext:xt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Kf={readContext:xt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:pu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Qo(4194308,4,hu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var r=Ot();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ot();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Qf.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:hs,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=qf.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ze,i=Ot();if(Ne){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ue===null)throw Error(c(349));(Cr&30)!==0||iu(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,pu(su.bind(null,n,a,e),[e]),n.flags|=2048,qn(9,au.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ot(),t=Ue.identifierPrefix;if(Ne){var r=Wt,n=Ut;r=(n&~(1<<32-jt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Jf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xf={readContext:xt,useCallback:xu,useContext:xt,useEffect:ms,useImperativeHandle:gu,useInsertionEffect:fu,useLayoutEffect:mu,useMemo:vu,useReducer:ps,useRef:du,useState:function(){return ps(Jn)},useDebugValue:hs,useDeferredValue:function(e){var t=vt();return yu(t,De.memoizedState,e)},useTransition:function(){var e=ps(Jn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ou,useId:wu,unstable_isNewReconciler:!1},Zf={readContext:xt,useCallback:xu,useContext:xt,useEffect:ms,useImperativeHandle:gu,useInsertionEffect:fu,useLayoutEffect:mu,useMemo:vu,useReducer:fs,useRef:du,useState:function(){return fs(Jn)},useDebugValue:hs,useDeferredValue:function(e){var t=vt();return De===null?t.memoizedState=e:yu(t,De.memoizedState,e)},useTransition:function(){var e=fs(Jn)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ou,useId:wu,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function gs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:M({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xo={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ze(),i=dr(e),a=Vt(n,i);a.payload=t,r!=null&&(a.callback=r),t=sr(e,a,i),t!==null&&(Tt(t,e,i,n),Vo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ze(),i=dr(e),a=Vt(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=sr(e,a,i),t!==null&&(Tt(t,e,i,n),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ze(),n=dr(e),i=Vt(r,n);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,n),t!==null&&(Tt(t,e,n,r),Vo(t,e,n))}};function ju(e,t,r,n,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,d):t.prototype&&t.prototype.isPureReactComponent?!In(r,n)||!In(i,a):!0}function Cu(e,t,r){var n=!1,i=or,a=t.contextType;return typeof a=="object"&&a!==null?a=xt(a):(i=nt(t)?wr:Je.current,n=t.contextTypes,a=(n=n!=null)?Qr(e,i):or),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Nu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function xs(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ns(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=xt(a):(a=nt(t)?wr:Je.current,i.context=Qr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(gs(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),$o(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var r="",n=t;do r+=le(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function vs(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function ys(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var em=typeof WeakMap=="function"?WeakMap:Map;function Eu(e,t,r){r=Vt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ii||(ii=!0,Is=n),ys(e,t)},r}function Lu(e,t,r){r=Vt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ys(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){ys(e,t),typeof n!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function zu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new em;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=mm.bind(null,e,t,r),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Vt(-1,1),t.tag=2,sr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var tm=P.ReactCurrentOwner,ot=!1;function Xe(e,t,r,n){t.child=e===null?Kc(t,null,r,n):Zr(t,e.child,r,n)}function Mu(e,t,r,n,i){r=r.render;var a=t.ref;return tn(t,i),n=us(e,t,r,n,a,i),r=ds(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Ne&&r&&Ja(t),t.flags|=1,Xe(e,t,n,i),t.child)}function _u(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!Us(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Iu(e,t,a,n,i)):(e=di(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(r=r.compare,r=r!==null?r:In,r(d,n)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=fr(a,n),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(In(a,n)&&e.ref===t.ref)if(ot=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,$t(e,t,i)}return ws(e,t,r,n,i)}function Au(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(an,pt),pt|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(an,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,be(an,pt),pt|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,be(an,pt),pt|=n;return Xe(e,t,i,r),t.child}function Ou(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ws(e,t,r,n,i){var a=nt(r)?wr:Je.current;return a=Qr(t,a),tn(t,i),r=us(e,t,r,n,a,i),n=ds(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Ne&&n&&Ja(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Du(e,t,r,n,i){if(nt(r)){var a=!0;Oo(t)}else a=!1;if(tn(t,i),t.stateNode===null)ei(e,t),Cu(t,r,n),xs(t,r,n,i),n=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var f=d.context,w=r.contextType;typeof w=="object"&&w!==null?w=xt(w):(w=nt(r)?wr:Je.current,w=Qr(t,w));var S=r.getDerivedStateFromProps,j=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function";j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==n||f!==w)&&Nu(t,d,n,w),ar=!1;var k=t.memoizedState;d.state=k,$o(t,n,d,i),f=t.memoizedState,p!==n||k!==f||rt.current||ar?(typeof S=="function"&&(gs(t,r,S,n),f=t.memoizedState),(p=ar||ju(t,r,p,n,k,f,w))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),d.props=n,d.state=f,d.context=w,n=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,Zc(e,t),p=t.memoizedProps,w=t.type===t.elementType?p:Et(t.type,p),d.props=w,j=t.pendingProps,k=d.context,f=r.contextType,typeof f=="object"&&f!==null?f=xt(f):(f=nt(r)?wr:Je.current,f=Qr(t,f));var _=r.getDerivedStateFromProps;(S=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==j||k!==f)&&Nu(t,d,n,f),ar=!1,k=t.memoizedState,d.state=k,$o(t,n,d,i);var O=t.memoizedState;p!==j||k!==O||rt.current||ar?(typeof _=="function"&&(gs(t,r,_,n),O=t.memoizedState),(w=ar||ju(t,r,w,n,k,O,f)||!1)?(S||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,O,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,O,f)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),d.props=n,d.state=O,d.context=f,n=w):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return bs(e,t,r,n,a,i)}function bs(e,t,r,n,i,a){Ou(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return i&&Wc(t,r,!1),$t(e,t,a);n=t.stateNode,tm.current=t;var p=d&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=Zr(t,e.child,null,a),t.child=Zr(t,null,p,a)):Xe(e,t,p,a),t.memoizedState=n.state,i&&Wc(t,r,!0),t.child}function Ru(e){var t=e.stateNode;t.pendingContext?Bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bc(e,t.context,!1),os(e,t.containerInfo)}function Fu(e,t,r,n,i){return Xr(),Ka(i),t.flags|=256,Xe(e,t,r,n),t.child}var ks={dehydrated:null,treeContext:null,retryLane:0};function Ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,r){var n=t.pendingProps,i=Le.current,a=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Le,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,a?(n=t.mode,a=t.child,d={mode:"hidden",children:d},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=pi(d,n,0,null),e=Tr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ss(r),t.memoizedState=ks,e):js(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return rm(e,t,d,n,p,i,r);if(a){a=n.fallback,d=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=fr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=fr(p,a):(a=Tr(a,d,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,d=e.child.memoizedState,d=d===null?Ss(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~r,t.memoizedState=ks,n}return a=e.child,e=a.sibling,n=fr(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function js(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zo(e,t,r,n){return n!==null&&Ka(n),Zr(t,e.child,null,r),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,r,n,i,a,d){if(r)return t.flags&256?(t.flags&=-257,n=vs(Error(c(422))),Zo(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=pi({mode:"visible",children:n.children},i,0,null),a=Tr(a,i,d,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&Zr(t,e.child,null,d),t.child.memoizedState=Ss(d),t.memoizedState=ks,a);if((t.mode&1)===0)return Zo(e,t,d,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,a=Error(c(419)),n=vs(a,n,void 0),Zo(e,t,d,n)}if(p=(d&e.childLanes)!==0,ot||p){if(n=Ue,n!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ht(e,i),Tt(n,e,i,-1))}return Bs(),n=vs(Error(c(421))),Zo(e,t,d,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,dt=rr(i.nextSibling),ut=t,Ne=!0,Nt=null,e!==null&&(ht[gt++]=Ut,ht[gt++]=Wt,ht[gt++]=br,Ut=e.id,Wt=e.overflow,br=t),t=js(t,n.children),t.flags|=4096,t)}function Uu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ts(e.return,t,r)}function Cs(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Wu(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Xe(e,t,n.children,r),n=Le.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,r,t);else if(e.tag===19)Uu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Le,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Yo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Cs(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Cs(t,!0,r,null,a);break;case"together":Cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function nm(e,t,r){switch(t.tag){case 3:Ru(t),Xr();break;case 5:ru(t);break;case 1:nt(t.type)&&Oo(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;be(Wo,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Le,Le.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Bu(e,t,r):(be(Le,Le.current&1),e=$t(e,t,r),e!==null?e.sibling:null);be(Le,Le.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Wu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Le,Le.current),n)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,r)}return $t(e,t,r)}var Hu,Ns,Vu,$u;Hu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ns=function(){},Vu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,jr(At.current);var a=null;switch(r){case"input":i=ta(e,i),n=ta(e,n),a=[];break;case"select":i=M({},i,{value:void 0}),n=M({},n,{value:void 0}),a=[];break;case"textarea":i=oa(e,i),n=oa(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_o)}aa(r,n);var d;r=null;for(w in i)if(!n.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var p=i[w];for(d in p)p.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(m.hasOwnProperty(w)?a||(a=[]):(a=a||[]).push(w,null));for(w in n){var f=n[w];if(p=i!=null?i[w]:void 0,n.hasOwnProperty(w)&&f!==p&&(f!=null||p!=null))if(w==="style")if(p){for(d in p)!p.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in f)f.hasOwnProperty(d)&&p[d]!==f[d]&&(r||(r={}),r[d]=f[d])}else r||(a||(a=[]),a.push(w,r)),r=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(m.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&ke("scroll",e),a||p===f||(a=[])):(a=a||[]).push(w,f))}r&&(a=a||[]).push("style",r);var w=a;(t.updateQueue=w)&&(t.flags|=4)}},$u=function(e,t,r,n){r!==n&&(t.flags|=4)};function Qn(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function om(e,t,r){var n=t.pendingProps;switch(qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return nt(t.type)&&Ao(),Qe(t),null;case 3:return n=t.stateNode,rn(),Se(rt),Se(Je),ss(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Ds(Nt),Nt=null))),Ns(e,t),Qe(t),null;case 5:is(t);var i=jr(Vn.current);if(r=t.type,e!==null&&t.stateNode!=null)Vu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Qe(t),null}if(e=jr(At.current),Bo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[It]=t,n[Fn]=a,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(i=0;i<On.length;i++)ke(On[i],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":Cl(n,a),ke("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ke("invalid",n);break;case"textarea":Ll(n,a),ke("invalid",n)}aa(r,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?n.textContent!==p&&(a.suppressHydrationWarning!==!0&&Mo(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Mo(n.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&ke("scroll",n)}switch(r){case"input":Qt(n),El(n,a,!0);break;case"textarea":Qt(n),Tl(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=_o)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(r,{is:n.is}):(e=d.createElement(r),r==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,r),e[It]=t,e[Fn]=n,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(d=sa(r,n),r){case"dialog":ke("cancel",e),ke("close",e),i=n;break;case"iframe":case"object":case"embed":ke("load",e),i=n;break;case"video":case"audio":for(i=0;i<On.length;i++)ke(On[i],e);i=n;break;case"source":ke("error",e),i=n;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=n;break;case"details":ke("toggle",e),i=n;break;case"input":Cl(e,n),i=ta(e,n),ke("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=M({},n,{value:void 0}),ke("invalid",e);break;case"textarea":Ll(e,n),i=oa(e,n),ke("invalid",e);break;default:i=n}aa(r,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?Il(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ml(e,f)):a==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&xn(e,f):typeof f=="number"&&xn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ke("scroll",e):f!=null&&oe(e,a,f,d))}switch(r){case"input":Qt(e),El(e,n,!1);break;case"textarea":Qt(e),Tl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ue(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Dr(e,!!n.multiple,a,!1):n.defaultValue!=null&&Dr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_o)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(r=jr(Vn.current),jr(At.current),Bo(t)){if(n=t.stateNode,r=t.memoizedProps,n[It]=t,(a=n.nodeValue!==r)&&(e=ut,e!==null))switch(e.tag){case 3:Mo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[It]=t,t.stateNode=n}return Qe(t),null;case 13:if(Se(Le),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qc(),Xr(),t.flags|=98560,a=!1;else if(a=Bo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[It]=t}else Xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),a=!1}else Nt!==null&&(Ds(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Re===0&&(Re=3):Bs())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return rn(),Ns(e,t),e===null&&Dn(t.stateNode.containerInfo),Qe(t),null;case 10:return es(t.type._context),Qe(t),null;case 17:return nt(t.type)&&Ao(),Qe(t),null;case 19:if(Se(Le),a=t.memoizedState,a===null)return Qe(t),null;if(n=(t.flags&128)!==0,d=a.rendering,d===null)if(n)Qn(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Yo(e),d!==null){for(t.flags|=128,Qn(a,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Le,Le.current&1|2),t.child}e=e.sibling}a.tail!==null&&_e()>sn&&(t.flags|=128,n=!0,Qn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Yo(d),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Qn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ne)return Qe(t),null}else 2*_e()-a.renderingStartTime>sn&&r!==1073741824&&(t.flags|=128,n=!0,Qn(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(r=a.last,r!==null?r.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=_e(),t.sibling=null,r=Le.current,be(Le,n?r&1|2:r&1),t):(Qe(t),null);case 22:case 23:return Fs(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function im(e,t){switch(qa(t),t.tag){case 1:return nt(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),Se(rt),Se(Je),ss(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(Se(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Le),null;case 4:return rn(),null;case 10:return es(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var ti=!1,Ge=!1,am=typeof WeakSet=="function"?WeakSet:Set,A=null;function on(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Pe(e,t,n)}else r.current=null}function Es(e,t,r){try{r()}catch(n){Pe(e,t,n)}}var Yu=!1;function sm(e,t){if(Fa=bo,e=jc(),Pa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var d=0,p=-1,f=-1,w=0,S=0,j=e,k=null;t:for(;;){for(var _;j!==r||i!==0&&j.nodeType!==3||(p=d+i),j!==a||n!==0&&j.nodeType!==3||(f=d+n),j.nodeType===3&&(d+=j.nodeValue.length),(_=j.firstChild)!==null;)k=j,j=_;for(;;){if(j===e)break t;if(k===r&&++w===i&&(p=d),k===a&&++S===n&&(f=d),(_=j.nextSibling)!==null)break;j=k,k=j.parentNode}j=_}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ba={focusedElem:e,selectionRange:r},bo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var D=O.memoizedProps,Ie=O.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?D:Et(t.type,D),Ie);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){Pe(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return O=Yu,Yu=!1,O}function Gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Es(t,r,a)}i=i.next}while(i!==n)}}function ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ls(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ju(e){var t=e.alternate;t!==null&&(e.alternate=null,Ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Fn],delete t[Va],delete t[Hf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_o));else if(n!==4&&(e=e.child,e!==null))for(zs(e,t,r),e=e.sibling;e!==null;)zs(e,t,r),e=e.sibling}function Ts(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ts(e,t,r),e=e.sibling;e!==null;)Ts(e,t,r),e=e.sibling}var He=null,Lt=!1;function lr(e,t,r){for(r=r.child;r!==null;)Gu(e,t,r),r=r.sibling}function Gu(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ho,r)}catch{}switch(r.tag){case 5:Ge||on(r,t);case 6:var n=He,i=Lt;He=null,lr(e,t,r),He=n,Lt=i,He!==null&&(Lt?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(Lt?(e=He,r=r.stateNode,e.nodeType===8?Ha(e.parentNode,r):e.nodeType===1&&Ha(e,r),Ln(e)):Ha(He,r.stateNode));break;case 4:n=He,i=Lt,He=r.stateNode.containerInfo,Lt=!0,lr(e,t,r),He=n,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&Es(r,t,d),i=i.next}while(i!==n)}lr(e,t,r);break;case 1:if(!Ge&&(on(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){Pe(r,t,p)}lr(e,t,r);break;case 21:lr(e,t,r);break;case 22:r.mode&1?(Ge=(n=Ge)||r.memoizedState!==null,lr(e,t,r),Ge=n):lr(e,t,r);break;default:lr(e,t,r)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new am),t.forEach(function(n){var i=gm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function zt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,Lt=!1;break e;case 3:He=p.stateNode.containerInfo,Lt=!0;break e;case 4:He=p.stateNode.containerInfo,Lt=!0;break e}p=p.return}if(He===null)throw Error(c(160));Gu(a,d,i),He=null,Lt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(w){Pe(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Dt(e),n&4){try{Gn(3,e,e.return),ri(3,e)}catch(D){Pe(e,e.return,D)}try{Gn(5,e,e.return)}catch(D){Pe(e,e.return,D)}}break;case 1:zt(t,e),Dt(e),n&512&&r!==null&&on(r,r.return);break;case 5:if(zt(t,e),Dt(e),n&512&&r!==null&&on(r,r.return),e.flags&32){var i=e.stateNode;try{xn(i,"")}catch(D){Pe(e,e.return,D)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=r!==null?r.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&Nl(i,a),sa(p,d);var w=sa(p,a);for(d=0;d<f.length;d+=2){var S=f[d],j=f[d+1];S==="style"?Il(i,j):S==="dangerouslySetInnerHTML"?Ml(i,j):S==="children"?xn(i,j):oe(i,S,j,w)}switch(p){case"input":ra(i,a);break;case"textarea":zl(i,a);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var _=a.value;_!=null?Dr(i,!!a.multiple,_,!1):k!==!!a.multiple&&(a.defaultValue!=null?Dr(i,!!a.multiple,a.defaultValue,!0):Dr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Fn]=a}catch(D){Pe(e,e.return,D)}}break;case 6:if(zt(t,e),Dt(e),n&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(D){Pe(e,e.return,D)}}break;case 3:if(zt(t,e),Dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(D){Pe(e,e.return,D)}break;case 4:zt(t,e),Dt(e);break;case 13:zt(t,e),Dt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(_s=_e())),n&4&&Ku(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(w=Ge)||S,zt(t,e),Ge=w):zt(t,e),Dt(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!S&&(e.mode&1)!==0)for(A=e,S=e.child;S!==null;){for(j=A=S;A!==null;){switch(k=A,_=k.child,k.tag){case 0:case 11:case 14:case 15:Gn(4,k,k.return);break;case 1:on(k,k.return);var O=k.stateNode;if(typeof O.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(D){Pe(n,r,D)}}break;case 5:on(k,k.return);break;case 22:if(k.memoizedState!==null){td(j);continue}}_!==null?(_.return=k,A=_):td(j)}S=S.sibling}e:for(S=null,j=e;;){if(j.tag===5){if(S===null){S=j;try{i=j.stateNode,w?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=j.stateNode,f=j.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=_l("display",d))}catch(D){Pe(e,e.return,D)}}}else if(j.tag===6){if(S===null)try{j.stateNode.nodeValue=w?"":j.memoizedProps}catch(D){Pe(e,e.return,D)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;S===j&&(S=null),j=j.return}S===j&&(S=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:zt(t,e),Dt(e),n&4&&Ku(e);break;case 21:break;default:zt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(qu(r)){var n=r;break e}r=r.return}throw Error(c(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(xn(i,""),n.flags&=-33);var a=Qu(e);Ts(e,a,i);break;case 3:case 4:var d=n.stateNode.containerInfo,p=Qu(e);zs(e,p,d);break;default:throw Error(c(161))}}catch(f){Pe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lm(e,t,r){A=e,Zu(e)}function Zu(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&n){var d=i.memoizedState!==null||ti;if(!d){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Ge;p=ti;var w=Ge;if(ti=d,(Ge=f)&&!w)for(A=i;A!==null;)d=A,f=d.child,d.tag===22&&d.memoizedState!==null?rd(i):f!==null?(f.return=d,A=f):rd(i);for(;a!==null;)A=a,Zu(a),a=a.sibling;A=i,ti=p,Ge=w}ed(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,A=a):ed(e)}}function ed(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ri(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ge)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Et(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&tu(t,a,n);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}tu(t,d,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var S=w.memoizedState;if(S!==null){var j=S.dehydrated;j!==null&&Ln(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ge||t.flags&512&&Ls(t)}catch(k){Pe(t,t.return,k)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function td(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function rd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ri(4,t)}catch(f){Pe(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){Pe(t,i,f)}}var a=t.return;try{Ls(t)}catch(f){Pe(t,a,f)}break;case 5:var d=t.return;try{Ls(t)}catch(f){Pe(t,d,f)}}}catch(f){Pe(t,t.return,f)}if(t===e){A=null;break}var p=t.sibling;if(p!==null){p.return=t.return,A=p;break}A=t.return}}var cm=Math.ceil,ni=P.ReactCurrentDispatcher,Ps=P.ReactCurrentOwner,yt=P.ReactCurrentBatchConfig,fe=0,Ue=null,Ae=null,Ve=0,pt=0,an=nr(0),Re=0,Kn=null,Nr=0,oi=0,Ms=0,Xn=null,it=null,_s=0,sn=1/0,Yt=null,ii=!1,Is=null,cr=null,ai=!1,ur=null,si=0,Zn=0,As=null,li=-1,ci=0;function Ze(){return(fe&6)!==0?_e():li!==-1?li:li=_e()}function dr(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ve!==0?Ve&-Ve:Yf.transition!==null?(ci===0&&(ci=Ql()),ci):(e=ve,e!==0||(e=window.event,e=e===void 0?16:oc(e.type)),e)}function Tt(e,t,r,n){if(50<Zn)throw Zn=0,As=null,Error(c(185));Sn(e,r,n),((fe&2)===0||e!==Ue)&&(e===Ue&&((fe&2)===0&&(oi|=r),Re===4&&pr(e,Ve)),at(e,n),r===1&&fe===0&&(t.mode&1)===0&&(sn=_e()+500,Do&&ir()))}function at(e,t){var r=e.callbackNode;$p(e,t);var n=vo(e,e===Ue?Ve:0);if(n===0)r!==null&&Yl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Yl(r),t===1)e.tag===0?$f(od.bind(null,e)):Hc(od.bind(null,e)),Uf(function(){(fe&6)===0&&ir()}),r=null;else{switch(Gl(n)){case 1:r=ma;break;case 4:r=Jl;break;case 16:r=mo;break;case 536870912:r=ql;break;default:r=mo}r=pd(r,nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nd(e,t){if(li=-1,ci=0,(fe&6)!==0)throw Error(c(327));var r=e.callbackNode;if(ln()&&e.callbackNode!==r)return null;var n=vo(e,e===Ue?Ve:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ui(e,n);else{t=n;var i=fe;fe|=2;var a=ad();(Ue!==e||Ve!==t)&&(Yt=null,sn=_e()+500,Lr(e,t));do try{pm();break}catch(p){id(e,p)}while(!0);Za(),ni.current=a,fe=i,Ae!==null?t=0:(Ue=null,Ve=0,t=Re)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(n=i,t=Os(e,i))),t===1)throw r=Kn,Lr(e,0),pr(e,n),at(e,_e()),r;if(t===6)pr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!um(i)&&(t=ui(e,n),t===2&&(a=ha(e),a!==0&&(n=a,t=Os(e,a))),t===1))throw r=Kn,Lr(e,0),pr(e,n),at(e,_e()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(c(345));case 2:zr(e,it,Yt);break;case 3:if(pr(e,n),(n&130023424)===n&&(t=_s+500-_e(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wa(zr.bind(null,e,it,Yt),t);break}zr(e,it,Yt);break;case 4:if(pr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var d=31-jt(n);a=1<<d,d=t[d],d>i&&(i=d),n&=~a}if(n=i,n=_e()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cm(n/1960))-n,10<n){e.timeoutHandle=Wa(zr.bind(null,e,it,Yt),n);break}zr(e,it,Yt);break;case 5:zr(e,it,Yt);break;default:throw Error(c(329))}}}return at(e,_e()),e.callbackNode===r?nd.bind(null,e):null}function Os(e,t){var r=Xn;return e.current.memoizedState.isDehydrated&&(Lr(e,t).flags|=256),e=ui(e,t),e!==2&&(t=it,it=r,t!==null&&Ds(t)),e}function Ds(e){it===null?it=e:it.push.apply(it,e)}function um(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Ct(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Ms,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),n=1<<r;e[r]=-1,t&=~n}}function od(e){if((fe&6)!==0)throw Error(c(327));ln();var t=vo(e,0);if((t&1)===0)return at(e,_e()),null;var r=ui(e,t);if(e.tag!==0&&r===2){var n=ha(e);n!==0&&(t=n,r=Os(e,n))}if(r===1)throw r=Kn,Lr(e,0),pr(e,t),at(e,_e()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,it,Yt),at(e,_e()),null}function Rs(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(sn=_e()+500,Do&&ir())}}function Er(e){ur!==null&&ur.tag===0&&(fe&6)===0&&ln();var t=fe;fe|=1;var r=yt.transition,n=ve;try{if(yt.transition=null,ve=1,e)return e()}finally{ve=n,yt.transition=r,fe=t,(fe&6)===0&&ir()}}function Fs(){pt=an.current,Se(an)}function Lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Bf(r)),Ae!==null)for(r=Ae.return;r!==null;){var n=r;switch(qa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ao();break;case 3:rn(),Se(rt),Se(Je),ss();break;case 5:is(n);break;case 4:rn();break;case 13:Se(Le);break;case 19:Se(Le);break;case 10:es(n.type._context);break;case 22:case 23:Fs()}r=r.return}if(Ue=e,Ae=e=fr(e.current,null),Ve=pt=t,Re=0,Kn=null,Ms=oi=Nr=0,it=Xn=null,Sr!==null){for(t=0;t<Sr.length;t++)if(r=Sr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var d=a.next;a.next=i,n.next=d}r.pending=n}Sr=null}return e}function id(e,t){do{var r=Ae;try{if(Za(),Jo.current=Ko,qo){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}qo=!1}if(Cr=0,Be=De=ze=null,$n=!1,Yn=0,Ps.current=null,r===null||r.return===null){Re=1,Kn=t,Ae=null;break}e:{var a=e,d=r.return,p=r,f=t;if(t=Ve,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,S=p,j=S.tag;if((S.mode&1)===0&&(j===0||j===11||j===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var _=Tu(d);if(_!==null){_.flags&=-257,Pu(_,d,p,a,t),_.mode&1&&zu(a,w,t),t=_,f=w;var O=t.updateQueue;if(O===null){var D=new Set;D.add(f),t.updateQueue=D}else O.add(f);break e}else{if((t&1)===0){zu(a,w,t),Bs();break e}f=Error(c(426))}}else if(Ne&&p.mode&1){var Ie=Tu(d);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),Pu(Ie,d,p,a,t),Ka(nn(f,p));break e}}a=f=nn(f,p),Re!==4&&(Re=2),Xn===null?Xn=[a]:Xn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Eu(a,f,t);eu(a,x);break e;case 1:p=f;var h=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var N=Lu(a,p,t);eu(a,N);break e}}a=a.return}while(a!==null)}ld(r)}catch(F){t=F,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function ad(){var e=ni.current;return ni.current=Ko,e===null?Ko:e}function Bs(){(Re===0||Re===3||Re===2)&&(Re=4),Ue===null||(Nr&268435455)===0&&(oi&268435455)===0||pr(Ue,Ve)}function ui(e,t){var r=fe;fe|=2;var n=ad();(Ue!==e||Ve!==t)&&(Yt=null,Lr(e,t));do try{dm();break}catch(i){id(e,i)}while(!0);if(Za(),fe=r,ni.current=n,Ae!==null)throw Error(c(261));return Ue=null,Ve=0,Re}function dm(){for(;Ae!==null;)sd(Ae)}function pm(){for(;Ae!==null&&!Op();)sd(Ae)}function sd(e){var t=dd(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?ld(e):Ae=t,Ps.current=null}function ld(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=om(r,t,pt),r!==null){Ae=r;return}}else{if(r=im(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Re===0&&(Re=5)}function zr(e,t,r){var n=ve,i=yt.transition;try{yt.transition=null,ve=1,fm(e,t,r,n)}finally{yt.transition=i,ve=n}return null}function fm(e,t,r,n){do ln();while(ur!==null);if((fe&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Yp(e,a),e===Ue&&(Ae=Ue=null,Ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ai||(ai=!0,pd(mo,function(){return ln(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=yt.transition,yt.transition=null;var d=ve;ve=1;var p=fe;fe|=4,Ps.current=null,sm(e,r),Xu(r,e),_f(Ba),bo=!!Fa,Ba=Fa=null,e.current=r,lm(r),Dp(),fe=p,ve=d,yt.transition=a}else e.current=r;if(ai&&(ai=!1,ur=e,si=i),a=e.pendingLanes,a===0&&(cr=null),Bp(r.stateNode),at(e,_e()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ii)throw ii=!1,e=Is,Is=null,e;return(si&1)!==0&&e.tag!==0&&ln(),a=e.pendingLanes,(a&1)!==0?e===As?Zn++:(Zn=0,As=e):Zn=0,ir(),null}function ln(){if(ur!==null){var e=Gl(si),t=yt.transition,r=ve;try{if(yt.transition=null,ve=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,si=0,(fe&6)!==0)throw Error(c(331));var i=fe;for(fe|=4,A=e.current;A!==null;){var a=A,d=a.child;if((A.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var w=p[f];for(A=w;A!==null;){var S=A;switch(S.tag){case 0:case 11:case 15:Gn(8,S,a)}var j=S.child;if(j!==null)j.return=S,A=j;else for(;A!==null;){S=A;var k=S.sibling,_=S.return;if(Ju(S),S===w){A=null;break}if(k!==null){k.return=_,A=k;break}A=_}}}var O=a.alternate;if(O!==null){var D=O.child;if(D!==null){O.child=null;do{var Ie=D.sibling;D.sibling=null,D=Ie}while(D!==null)}}A=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,A=d;else e:for(;A!==null;){if(a=A,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Gn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}var h=e.current;for(A=h;A!==null;){d=A;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,A=v;else e:for(d=h;A!==null;){if(p=A,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ri(9,p)}}catch(F){Pe(p,p.return,F)}if(p===d){A=null;break e}var N=p.sibling;if(N!==null){N.return=p.return,A=N;break e}A=p.return}}if(fe=i,ir(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ho,e)}catch{}n=!0}return n}finally{ve=r,yt.transition=t}}return!1}function cd(e,t,r){t=nn(r,t),t=Eu(e,t,1),e=sr(e,t,1),t=Ze(),e!==null&&(Sn(e,1,t),at(e,t))}function Pe(e,t,r){if(e.tag===3)cd(e,e,r);else for(;t!==null;){if(t.tag===3){cd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cr===null||!cr.has(n))){e=nn(r,e),e=Lu(t,e,1),t=sr(t,e,1),e=Ze(),t!==null&&(Sn(t,1,e),at(t,e));break}}t=t.return}}function mm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Ve&r)===r&&(Re===4||Re===3&&(Ve&130023424)===Ve&&500>_e()-_s?Lr(e,0):Ms|=r),at(e,t)}function ud(e,t){t===0&&((e.mode&1)===0?t=1:(t=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var r=Ze();e=Ht(e,t),e!==null&&(Sn(e,t,r),at(e,r))}function hm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ud(e,r)}function gm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(t),ud(e,r)}var dd;dd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)ot=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ot=!1,nm(e,t,r);ot=(e.flags&131072)!==0}else ot=!1,Ne&&(t.flags&1048576)!==0&&Vc(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ei(e,t),e=t.pendingProps;var i=Qr(t,Je.current);tn(t,r),i=us(null,t,n,e,i,r);var a=ds();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(n)?(a=!0,Oo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ns(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,xs(t,n,e,r),t=bs(null,t,n,!0,a,r)):(t.tag=0,Ne&&a&&Ja(t),Xe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=vm(n),e=Et(n,e),i){case 0:t=ws(null,t,n,e,r);break e;case 1:t=Du(null,t,n,e,r);break e;case 11:t=Mu(null,t,n,e,r);break e;case 14:t=_u(null,t,n,Et(n.type,e),r);break e}throw Error(c(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),ws(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),Du(e,t,n,i,r);case 3:e:{if(Ru(t),e===null)throw Error(c(387));n=t.pendingProps,a=t.memoizedState,i=a.element,Zc(e,t),$o(t,n,null,r);var d=t.memoizedState;if(n=d.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=nn(Error(c(423)),t),t=Fu(e,t,n,r,i);break e}else if(n!==i){i=nn(Error(c(424)),t),t=Fu(e,t,n,r,i);break e}else for(dt=rr(t.stateNode.containerInfo.firstChild),ut=t,Ne=!0,Nt=null,r=Kc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xr(),n===i){t=$t(e,t,r);break e}Xe(e,t,n,r)}t=t.child}return t;case 5:return ru(t),e===null&&Ga(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Ua(n,i)?d=null:a!==null&&Ua(n,a)&&(t.flags|=32),Ou(e,t),Xe(e,t,d,r),t.child;case 6:return e===null&&Ga(t),null;case 13:return Bu(e,t,r);case 4:return os(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Zr(t,null,n,r):Xe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),Mu(e,t,n,i,r);case 7:return Xe(e,t,t.pendingProps,r),t.child;case 8:return Xe(e,t,t.pendingProps.children,r),t.child;case 12:return Xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,d=i.value,be(Wo,n._currentValue),n._currentValue=d,a!==null)if(Ct(a.value,d)){if(a.children===i.children&&!rt.current){t=$t(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(a.tag===1){f=Vt(-1,r&-r),f.tag=2;var w=a.updateQueue;if(w!==null){w=w.shared;var S=w.pending;S===null?f.next=f:(f.next=S.next,S.next=f),w.pending=f}}a.lanes|=r,f=a.alternate,f!==null&&(f.lanes|=r),ts(a.return,r,t),p.lanes|=r;break}f=f.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(c(341));d.lanes|=r,p=d.alternate,p!==null&&(p.lanes|=r),ts(d,r,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Xe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,tn(t,r),i=xt(i),n=n(i),t.flags|=1,Xe(e,t,n,r),t.child;case 14:return n=t.type,i=Et(n,t.pendingProps),i=Et(n.type,i),_u(e,t,n,i,r);case 15:return Iu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),ei(e,t),t.tag=1,nt(n)?(e=!0,Oo(t)):e=!1,tn(t,r),Cu(t,n,i),xs(t,n,i,r),bs(null,t,n,!0,e,r);case 19:return Wu(e,t,r);case 22:return Au(e,t,r)}throw Error(c(156,t.tag))};function pd(e,t){return $l(e,t)}function xm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,n){return new xm(e,t,r,n)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Ke)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function di(e,t,r,n,i,a){var d=2;if(n=e,typeof e=="function")Us(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case z:return Tr(r.children,i,a,t);case R:d=8,i|=8;break;case ye:return e=wt(12,r,t,i|2),e.elementType=ye,e.lanes=a,e;case Ce:return e=wt(13,r,t,i),e.elementType=Ce,e.lanes=a,e;case $e:return e=wt(19,r,t,i),e.elementType=$e,e.lanes=a,e;case we:return pi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:d=10;break e;case se:d=9;break e;case Te:d=11;break e;case Ke:d=14;break e;case Ye:d=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=wt(d,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Tr(e,t,r,n){return e=wt(7,e,n,t),e.lanes=r,e}function pi(e,t,r,n){return e=wt(22,e,n,t),e.elementType=we,e.lanes=r,e.stateNode={isHidden:!1},e}function Ws(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Hs(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vs(e,t,r,n,i,a,d,p,f){return e=new ym(e,t,r,p,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=wt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(a),e}function wm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function fd(e){if(!e)return or;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(nt(r))return Uc(e,r,t)}return t}function md(e,t,r,n,i,a,d,p,f){return e=Vs(r,n,!0,e,i,a,d,p,f),e.context=fd(null),r=e.current,n=Ze(),i=dr(r),a=Vt(n,i),a.callback=t!=null?t:null,sr(r,a,i),e.current.lanes=i,Sn(e,i,n),at(e,n),e}function fi(e,t,r,n){var i=t.current,a=Ze(),d=dr(i);return r=fd(r),t.context===null?t.context=r:t.pendingContext=r,t=Vt(a,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=sr(i,t,d),e!==null&&(Tt(e,i,d,a),Vo(e,i,d)),d}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function $s(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function bm(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}hi.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));fi(e,t,null,null)},hi.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){fi(null,e,null,null)}),t[Ft]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Zt.length&&t!==0&&t<Zt[r].priority;r++);Zt.splice(r,0,e),r===0&&rc(e)}};function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function km(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var w=mi(d);a.call(w)}}var d=md(t,n,e,0,null,!1,!1,"",xd);return e._reactRootContainer=d,e[Ft]=d.current,Dn(e.nodeType===8?e.parentNode:e),Er(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var w=mi(f);p.call(w)}}var f=Vs(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=f,e[Ft]=f.current,Dn(e.nodeType===8?e.parentNode:e),Er(function(){fi(t,f,r,n)}),f}function xi(e,t,r,n,i){var a=r._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var f=mi(d);p.call(f)}}fi(t,d,e,i)}else d=km(r,t,e,i,n);return mi(d)}Kl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kn(t.pendingLanes);r!==0&&(xa(t,r|1),at(t,_e()),(fe&6)===0&&(sn=_e()+500,ir()))}break;case 13:Er(function(){var n=Ht(e,1);if(n!==null){var i=Ze();Tt(n,e,1,i)}}),$s(e,1)}},va=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=Ze();Tt(t,e,134217728,r)}$s(e,134217728)}},Xl=function(e){if(e.tag===13){var t=dr(e),r=Ht(e,t);if(r!==null){var n=Ze();Tt(r,e,t,n)}$s(e,t)}},Zl=function(){return ve},ec=function(e,t){var r=ve;try{return ve=e,t()}finally{ve=r}},ua=function(e,t,r){switch(t){case"input":if(ra(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Io(n);if(!i)throw Error(c(90));xr(n),ra(n,i)}}}break;case"textarea":zl(e,r);break;case"select":t=r.value,t!=null&&Dr(e,!!r.multiple,t,!1)}},Rl=Rs,Fl=Er;var Sm={usingClientEntryPoint:!1,Events:[Bn,Jr,Io,Ol,Dl,Rs]},eo={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jm={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hl(e),e===null?null:e.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{ho=vi.inject(jm),_t=vi}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,st.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Js(t))throw Error(c(200));return wm(e,t,null,r)},st.createRoot=function(e,t){if(!Js(e))throw Error(c(299));var r=!1,n="",i=gd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vs(e,1,!1,null,null,r,!1,n,i),e[Ft]=t.current,Dn(e.nodeType===8?e.parentNode:e),new Ys(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Hl(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Er(e)},st.hydrate=function(e,t,r){if(!gi(t))throw Error(c(200));return xi(null,e,t,!0,r)},st.hydrateRoot=function(e,t,r){if(!Js(e))throw Error(c(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",d=gd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=md(t,null,e,1,r!=null?r:null,i,!1,a,d),e[Ft]=t.current,Dn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new hi(t)},st.render=function(e,t,r){if(!gi(t))throw Error(c(200));return xi(null,e,t,!1,r)},st.unmountComponentAtNode=function(e){if(!gi(e))throw Error(c(40));return e._reactRootContainer?(Er(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1},st.unstable_batchedUpdates=Rs,st.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!gi(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return xi(e,t,r,!1,n)},st.version="18.3.1-next-f1338f8080-20240426",st}var Cd;function _m(){if(Cd)return Gs.exports;Cd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Gs.exports=Mm(),Gs.exports}var Nd;function Im(){if(Nd)return yi;Nd=1;var o=_m();return yi.createRoot=o.createRoot,yi.hydrateRoot=o.hydrateRoot,yi}var Am=Im(),ne=ml();const mt=Nm(ne);var lt=function(){return lt=Object.assign||function(u){for(var c,l=1,m=arguments.length;l<m;l++){c=arguments[l];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},lt.apply(this,arguments)};function Bi(o,u,c){if(c||arguments.length===2)for(var l=0,m=u.length,y;l<m;l++)(y||!(l in u))&&(y||(y=Array.prototype.slice.call(u,0,l)),y[l]=u[l]);return o.concat(y||Array.prototype.slice.call(u))}var je="-ms-",oo="-moz-",he="-webkit-",Qd="comm",Ji="rule",hl="decl",Om="@import",Dm="@namespace",Gd="@keyframes",Rm="@layer",Kd=Math.abs,gl=String.fromCharCode,il=Object.assign;function Fm(o,u){return Fe(o,0)^45?(((u<<2^Fe(o,0))<<2^Fe(o,1))<<2^Fe(o,2))<<2^Fe(o,3):0}function Xd(o){return o.trim()}function Jt(o,u){return(o=u.exec(o))?o[0]:o}function re(o,u,c){return o.replace(u,c)}function Ai(o,u,c){return o.indexOf(u,c)}function Fe(o,u){return o.charCodeAt(u)|0}function Ar(o,u,c){return o.slice(u,c)}function Pt(o){return o.length}function Zd(o){return o.length}function ro(o,u){return u.push(o),o}function Bm(o,u){return o.map(u).join("")}function Ed(o,u){return o.filter(function(c){return!Jt(c,u)})}var qi=1,un=1,ep=0,kt=0,Oe=0,hn="";function Qi(o,u,c,l,m,y,C,T){return{value:o,root:u,parent:c,type:l,props:m,children:y,line:qi,column:un,length:C,return:"",siblings:T}}function hr(o,u){return il(Qi("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function cn(o){for(;o.root;)o=hr(o.root,{children:[o]});ro(o,o.siblings)}function Um(){return Oe}function Wm(){return Oe=kt>0?Fe(hn,--kt):0,un--,Oe===10&&(un=1,qi--),Oe}function Mt(){return Oe=kt<ep?Fe(hn,kt++):0,un++,Oe===10&&(un=1,qi++),Oe}function gr(){return Fe(hn,kt)}function Oi(){return kt}function Gi(o,u){return Ar(hn,o,u)}function ao(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hm(o){return qi=un=1,ep=Pt(hn=o),kt=0,[]}function Vm(o){return hn="",o}function Zs(o){return Xd(Gi(kt-1,al(o===91?o+2:o===40?o+1:o)))}function $m(o){for(;(Oe=gr())&&Oe<33;)Mt();return ao(o)>2||ao(Oe)>3?"":" "}function Ym(o,u){for(;--u&&Mt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Gi(o,Oi()+(u<6&&gr()==32&&Mt()==32))}function al(o){for(;Mt();)switch(Oe){case o:return kt;case 34:case 39:o!==34&&o!==39&&al(Oe);break;case 40:o===41&&al(o);break;case 92:Mt();break}return kt}function Jm(o,u){for(;Mt()&&o+Oe!==57;)if(o+Oe===84&&gr()===47)break;return"/*"+Gi(u,kt-1)+"*"+gl(o===47?o:Mt())}function qm(o){for(;!ao(gr());)Mt();return Gi(o,kt)}function Qm(o){return Vm(Di("",null,null,null,[""],o=Hm(o),0,[0],o))}function Di(o,u,c,l,m,y,C,T,E){for(var G=0,J=0,W=C,Z=0,ce=0,K=0,H=1,q=1,ge=1,de=0,oe="",P=m,X=y,V=l,z=oe;q;)switch(K=de,de=Mt()){case 40:if(K!=108&&Fe(z,W-1)==58){Ai(z+=re(Zs(de),"&","&\f"),"&\f",Kd(G?T[G-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:z+=Zs(de);break;case 9:case 10:case 13:case 32:z+=$m(K);break;case 92:z+=Ym(Oi()-1,7);continue;case 47:switch(gr()){case 42:case 47:ro(Gm(Jm(Mt(),Oi()),u,c,E),E),(ao(K||1)==5||ao(gr()||1)==5)&&Pt(z)&&Ar(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*H:T[G++]=Pt(z)*ge;case 125*H:case 59:case 0:switch(de){case 0:case 125:q=0;case 59+J:ge==-1&&(z=re(z,/\f/g,"")),ce>0&&(Pt(z)-W||H===0&&K===47)&&ro(ce>32?zd(z+";",l,c,W-1,E):zd(re(z," ","")+";",l,c,W-2,E),E);break;case 59:z+=";";default:if(ro(V=Ld(z,u,c,G,J,m,T,oe,P=[],X=[],W,y),y),de===123)if(J===0)Di(z,u,V,V,P,y,W,T,X);else{switch(Z){case 99:if(Fe(z,3)===110)break;case 108:if(Fe(z,2)===97)break;default:J=0;case 100:case 109:case 115:}J?Di(o,V,V,l&&ro(Ld(o,V,V,0,0,m,T,oe,m,P=[],W,X),X),m,X,W,T,l?P:X):Di(z,V,V,V,[""],X,0,T,X)}}G=J=ce=0,H=ge=1,oe=z="",W=C;break;case 58:W=1+Pt(z),ce=K;default:if(H<1){if(de==123)--H;else if(de==125&&H++==0&&Wm()==125)continue}switch(z+=gl(de),de*H){case 38:ge=J>0?1:(z+="\f",-1);break;case 44:T[G++]=(Pt(z)-1)*ge,ge=1;break;case 64:gr()===45&&(z+=Zs(Mt())),Z=gr(),J=W=Pt(oe=z+=qm(Oi())),de++;break;case 45:K===45&&Pt(z)==2&&(H=0)}}return y}function Ld(o,u,c,l,m,y,C,T,E,G,J,W){for(var Z=m-1,ce=m===0?y:[""],K=Zd(ce),H=0,q=0,ge=0;H<l;++H)for(var de=0,oe=Ar(o,Z+1,Z=Kd(q=C[H])),P=o;de<K;++de)(P=Xd(q>0?ce[de]+" "+oe:re(oe,/&\f/g,ce[de])))&&(E[ge++]=P);return Qi(o,u,c,m===0?Ji:T,E,G,J,W)}function Gm(o,u,c,l){return Qi(o,u,c,Qd,gl(Um()),Ar(o,2,-2),0,l)}function zd(o,u,c,l,m){return Qi(o,u,c,hl,Ar(o,0,l),Ar(o,l+1,-1),l,m)}function tp(o,u,c){switch(Fm(o,u)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+o+o;case 4855:return he+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return oo+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+oo+o+je+o+o;case 5936:switch(Fe(o,u+11)){case 114:return he+o+je+re(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+je+re(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+je+re(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+je+o+o;case 6165:return he+o+je+"flex-"+o+o;case 5187:return he+o+re(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+je+"flex-$1$2")+o;case 5443:return he+o+je+"flex-item-"+re(o,/flex-|-self/g,"")+(Jt(o,/flex-|baseline/)?"":je+"grid-row-"+re(o,/flex-|-self/g,""))+o;case 4675:return he+o+je+"flex-line-pack"+re(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+je+re(o,"shrink","negative")+o;case 5292:return he+o+je+re(o,"basis","preferred-size")+o;case 6060:return he+"box-"+re(o,"-grow","")+he+o+je+re(o,"grow","positive")+o;case 4554:return he+re(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return re(re(re(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return re(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+je+"flex-pack:$3"),/space-between/,"justify")+he+o+o;case 4200:if(!Jt(o,/flex-|baseline/))return je+"grid-column-align"+Ar(o,u)+o;break;case 2592:case 3360:return je+re(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(l,m){return u=m,Jt(l.props,/grid-\w+-end/)})?~Ai(o+(c=c[u].value),"span",0)?o:je+re(o,"-start","")+o+je+"grid-row-span:"+(~Ai(c,"span",0)?Jt(c,/\d+/):+Jt(c,/\d+/)-+Jt(o,/\d+/))+";":je+re(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(l){return Jt(l.props,/grid-\w+-start/)})?o:je+re(re(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return re(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(o)-1-u>6)switch(Fe(o,u+1)){case 109:if(Fe(o,u+4)!==45)break;case 102:return re(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+oo+(Fe(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~Ai(o,"stretch",0)?tp(re(o,"stretch","fill-available"),u,c)+o:o}break;case 5152:case 5920:return re(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,m,y,C,T,E,G){return je+m+":"+y+G+(C?je+m+"-span:"+(T?E:+E-+y)+G:"")+o});case 4949:if(Fe(o,u+6)===121)return re(o,":",":"+he)+o;break;case 6444:switch(Fe(o,Fe(o,14)===45?18:11)){case 120:return re(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Fe(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+je+"$2box$3")+o;case 100:return re(o,":",":"+je)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(o,"scroll-","scroll-snap-")+o}return o}function Ui(o,u){for(var c="",l=0;l<o.length;l++)c+=u(o[l],l,o,u)||"";return c}function Km(o,u,c,l){switch(o.type){case Rm:if(o.children.length)break;case Om:case Dm:case hl:return o.return=o.return||o.value;case Qd:return"";case Gd:return o.return=o.value+"{"+Ui(o.children,l)+"}";case Ji:if(!Pt(o.value=o.props.join(",")))return""}return Pt(c=Ui(o.children,l))?o.return=o.value+"{"+c+"}":""}function Xm(o){var u=Zd(o);return function(c,l,m,y){for(var C="",T=0;T<u;T++)C+=o[T](c,l,m,y)||"";return C}}function Zm(o){return function(u){u.root||(u=u.return)&&o(u)}}function eh(o,u,c,l){if(o.length>-1&&!o.return)switch(o.type){case hl:o.return=tp(o.value,o.length,c);return;case Gd:return Ui([hr(o,{value:re(o.value,"@","@"+he)})],l);case Ji:if(o.length)return Bm(c=o.props,function(m){switch(Jt(m,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(hr(o,{props:[re(m,/:(read-\w+)/,":"+oo+"$1")]})),cn(hr(o,{props:[m]})),il(o,{props:Ed(c,l)});break;case"::placeholder":cn(hr(o,{props:[re(m,/:(plac\w+)/,":"+he+"input-$1")]})),cn(hr(o,{props:[re(m,/:(plac\w+)/,":"+oo+"$1")]})),cn(hr(o,{props:[re(m,/:(plac\w+)/,je+"input-$1")]})),cn(hr(o,{props:[m]})),il(o,{props:Ed(c,l)});break}return""})}}var th={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft={},dn=typeof process!="undefined"&&ft!==void 0&&(ft.REACT_APP_SC_ATTR||ft.SC_ATTR)||"data-styled",rp="active",np="data-styled-version",Ki="6.3.10",xl=`/*!sc*/
`,io=typeof window!="undefined"&&typeof document!="undefined",rh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ft!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==""?ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ft!==void 0&&ft.SC_DISABLE_SPEEDY!==void 0&&ft.SC_DISABLE_SPEEDY!==""&&ft.SC_DISABLE_SPEEDY!=="false"&&ft.SC_DISABLE_SPEEDY);function co(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Ri=new Map,Wi=new Map,Fi=1,no=function(o){if(Ri.has(o))return Ri.get(o);for(;Wi.has(Fi);)Fi++;var u=Fi++;return Ri.set(o,u),Wi.set(u,o),u},nh=function(o,u){Fi=u+1,Ri.set(o,u),Wi.set(u,o)},vl=Object.freeze([]),pn=Object.freeze({});function oh(o,u,c){return c===void 0&&(c=pn),o.theme!==c.theme&&o.theme||u||c.theme}var op=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ih=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ah=/(^-|-$)/g;function Td(o){return o.replace(ih,"-").replace(ah,"")}var sh=/(a)(d)/gi,Pd=function(o){return String.fromCharCode(o+(o>25?39:97))};function sl(o){var u,c="";for(u=Math.abs(o);u>52;u=u/52|0)c=Pd(u%52)+c;return(Pd(u%52)+c).replace(sh,"$1-$2")}var el,Pr=function(o,u){for(var c=u.length;c;)o=33*o^u.charCodeAt(--c);return o},ip=function(o){return Pr(5381,o)};function lh(o){return sl(ip(o)>>>0)}function ch(o){return o.displayName||o.name||"Component"}function tl(o){return typeof o=="string"&&!0}var ap=typeof Symbol=="function"&&Symbol.for,sp=ap?Symbol.for("react.memo"):60115,uh=ap?Symbol.for("react.forward_ref"):60112,dh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ph={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fh=((el={})[uh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[sp]=lp,el);function Md(o){return("type"in(u=o)&&u.type.$$typeof)===sp?lp:"$$typeof"in o?fh[o.$$typeof]:dh;var u}var mh=Object.defineProperty,hh=Object.getOwnPropertyNames,_d=Object.getOwnPropertySymbols,gh=Object.getOwnPropertyDescriptor,xh=Object.getPrototypeOf,Id=Object.prototype;function cp(o,u,c){if(typeof u!="string"){if(Id){var l=xh(u);l&&l!==Id&&cp(o,l,c)}var m=hh(u);_d&&(m=m.concat(_d(u)));for(var y=Md(o),C=Md(u),T=0;T<m.length;++T){var E=m[T];if(!(E in ph||c&&c[E]||C&&E in C||y&&E in y)){var G=gh(u,E);try{mh(o,E,G)}catch{}}}}return o}function fn(o){return typeof o=="function"}function yl(o){return typeof o=="object"&&"styledComponentId"in o}function _r(o,u){return o&&u?"".concat(o," ").concat(u):o||u||""}function Ad(o,u){return o.join("")}function so(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function ll(o,u,c){if(c===void 0&&(c=!1),!c&&!so(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(var l=0;l<u.length;l++)o[l]=ll(o[l],u[l]);else if(so(u))for(var l in u)o[l]=ll(o[l],u[l]);return o}function wl(o,u){Object.defineProperty(o,"toString",{value:u})}var vh=(function(){function o(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(u){if(u===this._cGroup)return this._cIndex;var c=this._cIndex;if(u>this._cGroup)for(var l=this._cGroup;l<u;l++)c+=this.groupSizes[l];else for(l=this._cGroup-1;l>=u;l--)c-=this.groupSizes[l];return this._cGroup=u,this._cIndex=c,c},o.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var l=this.groupSizes,m=l.length,y=m;u>=y;)if((y<<=1)<0)throw co(16,"".concat(u));this.groupSizes=new Uint32Array(y),this.groupSizes.set(l),this.length=y;for(var C=m;C<y;C++)this.groupSizes[C]=0}for(var T=this.indexOfGroup(u+1),E=0,G=(C=0,c.length);C<G;C++)this.tag.insertRule(T,c[C])&&(this.groupSizes[u]++,T++,E++);E>0&&this._cGroup>u&&(this._cIndex+=E)},o.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],l=this.indexOfGroup(u),m=l+c;this.groupSizes[u]=0;for(var y=l;y<m;y++)this.tag.deleteRule(l);c>0&&this._cGroup>u&&(this._cIndex-=c)}},o.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var l=this.groupSizes[u],m=this.indexOfGroup(u),y=m+l,C=m;C<y;C++)c+=this.tag.getRule(C)+xl;return c},o})(),yh="style[".concat(dn,"][").concat(np,'="').concat(Ki,'"]'),wh=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Od=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},cl=function(o){if(!o)return document;if(Od(o))return o;if("getRootNode"in o){var u=o.getRootNode();if(Od(u))return u}return document},bh=function(o,u,c){for(var l,m=c.split(","),y=0,C=m.length;y<C;y++)(l=m[y])&&o.registerName(u,l)},kh=function(o,u){for(var c,l=((c=u.textContent)!==null&&c!==void 0?c:"").split(xl),m=[],y=0,C=l.length;y<C;y++){var T=l[y].trim();if(T){var E=T.match(wh);if(E){var G=0|parseInt(E[1],10),J=E[2];G!==0&&(nh(J,G),bh(o,J,E[3]),o.getTag().insertRules(G,m)),m.length=0}else m.push(T)}}},rl=function(o){for(var u=cl(o.options.target).querySelectorAll(yh),c=0,l=u.length;c<l;c++){var m=u[c];m&&m.getAttribute(dn)!==rp&&(kh(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function Sh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var up=function(o){var u=document.head,c=o||u,l=document.createElement("style"),m=(function(T){var E=Array.from(T.querySelectorAll("style[".concat(dn,"]")));return E[E.length-1]})(c),y=m!==void 0?m.nextSibling:null;l.setAttribute(dn,rp),l.setAttribute(np,Ki);var C=Sh();return C&&l.setAttribute("nonce",C),c.insertBefore(l,y),l},jh=(function(){function o(u){this.element=up(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var l;if(c.sheet)return c.sheet;for(var m=(l=c.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,y=0,C=m.length;y<C;y++){var T=m[y];if(T.ownerNode===c)return T}throw co(17)})(this.element),this.length=0}return o.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},o.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},o})(),Ch=(function(){function o(u){this.element=up(u),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var l=document.createTextNode(c);return this.element.insertBefore(l,this.nodes[u]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},o.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},o})(),Nh=(function(){function o(u){this.rules=[],this.length=0}return o.prototype.insertRule=function(u,c){return u<=this.length&&(u===this.length?this.rules.push(c):this.rules.splice(u,0,c),this.length++,!0)},o.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},o.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},o})(),Dd=io,Eh={isServer:!io,useCSSOMInjection:!rh},dp=(function(){function o(u,c,l){u===void 0&&(u=pn),c===void 0&&(c={});var m=this;this.options=lt(lt({},Eh),u),this.gs=c,this.names=new Map(l),this.server=!!u.isServer,!this.server&&io&&Dd&&(Dd=!1,rl(this)),wl(this,function(){return(function(y){for(var C=y.getTag(),T=C.length,E="",G=function(W){var Z=(function(ge){return Wi.get(ge)})(W);if(Z===void 0)return"continue";var ce=y.names.get(Z);if(ce===void 0||!ce.size)return"continue";var K=C.getGroup(W);if(K.length===0)return"continue";var H=dn+".g"+W+'[id="'+Z+'"]',q="";ce.forEach(function(ge){ge.length>0&&(q+=ge+",")}),E+=K+H+'{content:"'+q+'"}'+xl},J=0;J<T;J++)G(J);return E})(m)})}return o.registerId=function(u){return no(u)},o.prototype.rehydrate=function(){!this.server&&io&&rl(this)},o.prototype.reconstructWithOptions=function(u,c){c===void 0&&(c=!0);var l=new o(lt(lt({},this.options),u),this.gs,c&&this.names||void 0);return!this.server&&io&&u.target!==this.options.target&&cl(this.options.target)!==cl(u.target)&&rl(l),l},o.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(c){var l=c.useCSSOMInjection,m=c.target;return c.isServer?new Nh(m):l?new jh(m):new Ch(m)})(this.options),new vh(u)));var u},o.prototype.hasNameForId=function(u,c){var l,m;return(m=(l=this.names.get(u))===null||l===void 0?void 0:l.has(c))!==null&&m!==void 0&&m},o.prototype.registerName=function(u,c){no(u);var l=this.names.get(u);l?l.add(c):this.names.set(u,new Set([c]))},o.prototype.insertRules=function(u,c,l){this.registerName(u,c),this.getTag().insertRules(no(u),l)},o.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},o.prototype.clearRules=function(u){this.getTag().clearGroup(no(u)),this.clearNames(u)},o.prototype.clearTag=function(){this.tag=void 0},o})(),Lh=/&/g,qt=47,Mr=42;function Rd(o){if(o.indexOf("}")===-1)return!1;for(var u=o.length,c=0,l=0,m=!1,y=0;y<u;y++){var C=o.charCodeAt(y);if(l!==0||m||C!==qt||o.charCodeAt(y+1)!==Mr)if(m)C===Mr&&o.charCodeAt(y+1)===qt&&(m=!1,y++);else if(C!==34&&C!==39||y!==0&&o.charCodeAt(y-1)===92){if(l===0){if(C===123)c++;else if(C===125&&--c<0)return!0}}else l===0?l=C:l===C&&(l=0);else m=!0,y++}return c!==0||l!==0}function pp(o,u){return o.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(l){return"".concat(u," ").concat(l)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=pp(c.children,u)),c})}function zh(o){var u,c,l,m=pn,y=m.options,C=y===void 0?pn:y,T=m.plugins,E=T===void 0?vl:T,G=function(K,H,q){return q.startsWith(c)&&q.endsWith(c)&&q.replaceAll(c,"").length>0?".".concat(u):K},J=E.slice();J.push(function(K){K.type===Ji&&K.value.includes("&")&&(l||(l=new RegExp("\\".concat(c,"\\b"),"g")),K.props[0]=K.props[0].replace(Lh,c).replace(l,G))}),C.prefix&&J.push(eh),J.push(Km);var W=[],Z=Xm(J.concat(Zm(function(K){return W.push(K)}))),ce=function(K,H,q,ge){H===void 0&&(H=""),q===void 0&&(q=""),ge===void 0&&(ge="&"),u=ge,c=H,l=void 0;var de=(function(P){if(!Rd(P))return P;for(var X=P.length,V="",z=0,R=0,ye=0,Me=!1,se=0;se<X;se++){var Te=P.charCodeAt(se);if(ye!==0||Me||Te!==qt||P.charCodeAt(se+1)!==Mr)if(Me)Te===Mr&&P.charCodeAt(se+1)===qt&&(Me=!1,se++);else if(Te!==34&&Te!==39||se!==0&&P.charCodeAt(se-1)===92){if(ye===0)if(Te===123)R++;else if(Te===125){if(--R<0){for(var Ce=se+1;Ce<X;){var $e=P.charCodeAt(Ce);if($e===59||$e===10)break;Ce++}Ce<X&&P.charCodeAt(Ce)===59&&Ce++,R=0,se=Ce-1,z=Ce;continue}R===0&&(V+=P.substring(z,se+1),z=se+1)}else Te===59&&R===0&&(V+=P.substring(z,se+1),z=se+1)}else ye===0?ye=Te:ye===Te&&(ye=0);else Me=!0,se++}if(z<X){var Ke=P.substring(z);Rd(Ke)||(V+=Ke)}return V})((function(P){if(P.indexOf("//")===-1)return P;for(var X=P.length,V=[],z=0,R=0,ye=0,Me=0;R<X;){var se=P.charCodeAt(R);if(se!==34&&se!==39||R!==0&&P.charCodeAt(R-1)===92)if(ye===0)if(se===qt&&R+1<X&&P.charCodeAt(R+1)===Mr){for(R+=2;R+1<X&&(P.charCodeAt(R)!==Mr||P.charCodeAt(R+1)!==qt);)R++;R+=2}else if(se===40&&R>=3&&(32|P.charCodeAt(R-1))==108&&(32|P.charCodeAt(R-2))==114&&(32|P.charCodeAt(R-3))==117)Me=1,R++;else if(Me>0)se===41?Me--:se===40&&Me++,R++;else if(se===Mr&&R+1<X&&P.charCodeAt(R+1)===qt)R>z&&V.push(P.substring(z,R)),z=R+=2;else if(se===qt&&R+1<X&&P.charCodeAt(R+1)===qt){for(R>z&&V.push(P.substring(z,R));R<X&&P.charCodeAt(R)!==10;)R++;z=R}else R++;else R++;else ye===0?ye=se:ye===se&&(ye=0),R++}return z===0?P:(z<X&&V.push(P.substring(z)),V.join(""))})(K)),oe=Qm(q||H?"".concat(q," ").concat(H," { ").concat(de," }"):de);return C.namespace&&(oe=pp(oe,C.namespace)),W=[],Ui(oe,Z),W};return ce.hash=E.length?E.reduce(function(K,H){return H.name||co(15),Pr(K,H.name)},5381).toString():"",ce}var Th=new dp,ul=zh(),fp=mt.createContext({shouldForwardProp:void 0,styleSheet:Th,stylis:ul});fp.Consumer;mt.createContext(void 0);function Fd(){return mt.useContext(fp)}var Ph=(function(){function o(u,c){var l=this;this.inject=function(m,y){y===void 0&&(y=ul);var C=l.name+y.hash;m.hasNameForId(l.id,C)||m.insertRules(l.id,C,y(l.rules,C,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,wl(this,function(){throw co(12,String(l.name))})}return o.prototype.getName=function(u){return u===void 0&&(u=ul),this.name+u.hash},o})();function Mh(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in th||o.startsWith("--")?String(u).trim():"".concat(u,"px")}var _h=function(o){return o>="A"&&o<="Z"};function Bd(o){for(var u="",c=0;c<o.length;c++){var l=o[c];if(c===1&&l==="-"&&o[0]==="-")return o;_h(l)?u+="-"+l.toLowerCase():u+=l}return u.startsWith("ms-")?"-"+u:u}var mp=function(o){return o==null||o===!1||o===""},hp=function(o){var u=[];for(var c in o){var l=o[c];o.hasOwnProperty(c)&&!mp(l)&&(Array.isArray(l)&&l.isCss||fn(l)?u.push("".concat(Bd(c),":"),l,";"):so(l)?u.push.apply(u,Bi(Bi(["".concat(c," {")],hp(l),!1),["}"],!1)):u.push("".concat(Bd(c),": ").concat(Mh(c,l),";")))}return u};function Ir(o,u,c,l,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(mp(o))return m;if(yl(o))return m.push(".".concat(o.styledComponentId)),m;if(fn(o)){if(!fn(C=o)||C.prototype&&C.prototype.isReactComponent||!u)return m.push(o),m;var y=o(u);return Ir(y,u,c,l,m)}var C;if(o instanceof Ph)return c?(o.inject(c,l),m.push(o.getName(l))):m.push(o),m;if(so(o)){for(var T=hp(o),E=0;E<T.length;E++)m.push(T[E]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(E=0;E<o.length;E++)Ir(o[E],u,c,l,m);return m}function Ih(o){for(var u=0;u<o.length;u+=1){var c=o[u];if(fn(c)&&!yl(c))return!1}return!0}var Ah=ip(Ki),Oh=(function(){function o(u,c,l){this.rules=u,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Ih(u),this.componentId=c,this.baseHash=Pr(Ah,c),this.baseStyle=l,dp.registerId(c)}return o.prototype.generateAndInjectStyles=function(u,c,l){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=_r(m,this.staticRulesId);else{var y=Ad(Ir(this.rules,u,c,l)),C=sl(Pr(this.baseHash,y)>>>0);if(!c.hasNameForId(this.componentId,C)){var T=l(y,".".concat(C),void 0,this.componentId);c.insertRules(this.componentId,C,T)}m=_r(m,C),this.staticRulesId=C}else{for(var E=Pr(this.baseHash,l.hash),G="",J=0;J<this.rules.length;J++){var W=this.rules[J];if(typeof W=="string")G+=W;else if(W){var Z=Ad(Ir(W,u,c,l));E=Pr(Pr(E,String(J)),Z),G+=Z}}if(G){var ce=sl(E>>>0);if(!c.hasNameForId(this.componentId,ce)){var K=l(G,".".concat(ce),void 0,this.componentId);c.insertRules(this.componentId,ce,K)}m=_r(m,ce)}}return{className:m,css:typeof window=="undefined"?c.getTag().getGroup(no(this.componentId)):""}},o})(),gp=mt.createContext(void 0);gp.Consumer;var nl={};function Dh(o,u,c){var l=yl(o),m=o,y=!tl(o),C=u.attrs,T=C===void 0?vl:C,E=u.componentId,G=E===void 0?(function(P,X){var V=typeof P!="string"?"sc":Td(P);nl[V]=(nl[V]||0)+1;var z="".concat(V,"-").concat(lh(Ki+V+nl[V]));return X?"".concat(X,"-").concat(z):z})(u.displayName,u.parentComponentId):E,J=u.displayName,W=J===void 0?(function(P){return tl(P)?"styled.".concat(P):"Styled(".concat(ch(P),")")})(o):J,Z=u.displayName&&u.componentId?"".concat(Td(u.displayName),"-").concat(u.componentId):u.componentId||G,ce=l&&m.attrs?m.attrs.concat(T).filter(Boolean):T,K=u.shouldForwardProp;if(l&&m.shouldForwardProp){var H=m.shouldForwardProp;if(u.shouldForwardProp){var q=u.shouldForwardProp;K=function(P,X){return H(P,X)&&q(P,X)}}else K=H}var ge=new Oh(c,Z,l?m.componentStyle:void 0);function de(P,X){return(function(V,z,R){var ye=V.attrs,Me=V.componentStyle,se=V.defaultProps,Te=V.foldedComponentIds,Ce=V.styledComponentId,$e=V.target,Ke=mt.useContext(gp),Ye=Fd(),we=V.shouldForwardProp||Ye.shouldForwardProp,L=oh(z,Ke,se)||pn,B=(function(ae,pe,ue){for(var xe,Ee=lt(lt({},pe),{className:void 0,theme:ue}),Qt=0;Qt<ae.length;Qt+=1){var xr=fn(xe=ae[Qt])?xe(Ee):xe;for(var St in xr)St==="className"?Ee.className=_r(Ee.className,xr[St]):St==="style"?Ee.style=lt(lt({},Ee.style),xr[St]):Ee[St]=xr[St]}return"className"in pe&&typeof pe.className=="string"&&(Ee.className=_r(Ee.className,pe.className)),Ee})(ye,z,L),M=B.as||$e,g={};for(var b in B)B[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&B.theme===L||(b==="forwardedAs"?g.as=B.forwardedAs:we&&!we(b,M)||(g[b]=B[b]));var ee=(function(ae,pe){var ue=Fd(),xe=ae.generateAndInjectStyles(pe,ue.styleSheet,ue.stylis);return xe})(Me,B),te=ee.className,le=_r(Te,Ce);return te&&(le+=" "+te),B.className&&(le+=" "+B.className),g[tl(M)&&!op.has(M)?"class":"className"]=le,R&&(g.ref=R),ne.createElement(M,g)})(oe,P,X)}de.displayName=W;var oe=mt.forwardRef(de);return oe.attrs=ce,oe.componentStyle=ge,oe.displayName=W,oe.shouldForwardProp=K,oe.foldedComponentIds=l?_r(m.foldedComponentIds,m.styledComponentId):"",oe.styledComponentId=Z,oe.target=l?m.target:o,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=l?(function(X){for(var V=[],z=1;z<arguments.length;z++)V[z-1]=arguments[z];for(var R=0,ye=V;R<ye.length;R++)ll(X,ye[R],!0);return X})({},m.defaultProps,P):P}}),wl(oe,function(){return".".concat(oe.styledComponentId)}),y&&cp(oe,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function Ud(o,u){for(var c=[o[0]],l=0,m=u.length;l<m;l+=1)c.push(u[l],o[l+1]);return c}var Wd=function(o){return Object.assign(o,{isCss:!0})};function Rh(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(fn(o)||so(o))return Wd(Ir(Ud(vl,Bi([o],u,!0))));var l=o;return u.length===0&&l.length===1&&typeof l[0]=="string"?Ir(l):Wd(Ir(Ud(l,u)))}function dl(o,u,c){if(c===void 0&&(c=pn),!u)throw co(1,u);var l=function(m){for(var y=[],C=1;C<arguments.length;C++)y[C-1]=arguments[C];return o(u,c,Rh.apply(void 0,Bi([m],y,!1)))};return l.attrs=function(m){return dl(o,u,lt(lt({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},l.withConfig=function(m){return dl(o,u,lt(lt({},c),m))},l}var xp=function(o){return dl(Dh,o)},I=xp;op.forEach(function(o){I[o]=xp(o)});const ol={Wrapper:I.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:I.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:I.main`
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
    `},Hd={Wrapper:I.header`
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
    `,Main:I.div`
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
    `},Fh="/java-core-notes/logo.png";var vp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vd=mt.createContext&&mt.createContext(vp),Bh=["attr","size","title"];function Uh(o,u){if(o==null)return{};var c=Wh(o,u),l,m;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(o);for(m=0;m<y.length;m++)l=y[m],!(u.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(o,l)&&(c[l]=o[l])}return c}function Wh(o,u){if(o==null)return{};var c={};for(var l in o)if(Object.prototype.hasOwnProperty.call(o,l)){if(u.indexOf(l)>=0)continue;c[l]=o[l]}return c}function Hi(){return Hi=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(o[l]=c[l])}return o},Hi.apply(this,arguments)}function $d(o,u){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);u&&(l=l.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),c.push.apply(c,l)}return c}function Vi(o){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?$d(Object(c),!0).forEach(function(l){Hh(o,l,c[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):$d(Object(c)).forEach(function(l){Object.defineProperty(o,l,Object.getOwnPropertyDescriptor(c,l))})}return o}function Hh(o,u,c){return u=Vh(u),u in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,o}function Vh(o){var u=$h(o,"string");return typeof u=="symbol"?u:u+""}function $h(o,u){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var l=c.call(o,u);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function yp(o){return o&&o.map((u,c)=>mt.createElement(u.tag,Vi({key:c},u.attr),yp(u.child)))}function U(o){return u=>mt.createElement(Yh,Hi({attr:Vi({},o.attr)},u),yp(o.child))}function Yh(o){var u=c=>{var{attr:l,size:m,title:y}=o,C=Uh(o,Bh),T=m||c.size||"1em",E;return c.className&&(E=c.className),o.className&&(E=(E?E+" ":"")+o.className),mt.createElement("svg",Hi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,l,C,{className:E,style:Vi(Vi({color:o.color||c.color},c.style),o.style),height:T,width:T,xmlns:"http://www.w3.org/2000/svg"}),y&&mt.createElement("title",null,y),o.children)};return Vd!==void 0?mt.createElement(Vd.Consumer,null,c=>u(c)):u(vp)}function bl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function lo(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Jh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function wp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function mn(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Yd(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(o)}function bp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function et(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function tt(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function kp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function Or(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function qh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function Qh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function Sp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(o)}function Rt(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Gh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function Kh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(o)}function jp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(o)}function Xh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Zh(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function Cp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function eg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(o)}function kl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Xi(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function tg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function bt(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function rg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function ng(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Np(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function $i(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(o)}function og(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function ig(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function ag(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function Jd(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Sl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(o)}function Zi(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function sg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(o)}function Yi(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function jl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function lg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",y1:"5",x2:"19",y2:"19"},child:[]}]})(o)}function Ep(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function cg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function ug(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function ea(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function dg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(o)}function Lp(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function pl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function pg(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(o)}function fl(o){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const fg=()=>{const[o,u]=ne.useState(!1),[c,l]=ne.useState("dark");ne.useEffect(()=>{const T=localStorage.getItem("app-theme")||"dark";l(T),T==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ne.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const m=ne.useMemo(()=>c==="light"?"dark":"light",[c]),y=()=>{l(m)};return s.jsx(Hd.Wrapper,{children:s.jsx(Hd.Main,{children:s.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[s.jsxs("div",{className:"logoNameWrapper",children:[s.jsxs("div",{className:"logoWrapper",children:[!o&&s.jsx("div",{className:"logoSkeleton"}),s.jsx("img",{src:Fh,alt:"Java Core Notes logo",onLoad:()=>u(!0),style:{opacity:o?1:0}})]}),s.jsxs("div",{className:"nameWrapper",children:[s.jsx("div",{className:"title",children:"java-core-notes"}),s.jsx("div",{className:"subTitle",children:"At-a-glance java revision"})]})]}),s.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:y,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[s.jsx("span",{className:"icon",children:c==="light"?s.jsx(ag,{}):s.jsx(cg,{})}),s.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})};function mg(o){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(o)}function hg(o){return U({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(o)}function gg(o){return U({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function xg(o){return U({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(o)}function vg(o){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(o)}function yg(o){return U({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(o)}const wg={Wrapper:I.footer`
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
    `},bg=[["Portfolio","https://www.ashishranjan.net/",pg],["GitHub","https://github.com/a2rp",gg],["CodePen","https://codepen.io/ash1198",mg],["LinkedIn","https://www.linkedin.com/in/aashishranjan",xg],["Facebook","https://www.facebook.com/theash.ashish/",hg],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",yg],["Email","mailto:ash.ranjan09@gmail.com",og],["Support","https://a2rp-donation-page.netlify.app/",tg],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",qh],["Patreon","https://www.patreon.com/a2rp",vg]],kg=()=>s.jsxs(wg.Wrapper,{children:[s.jsxs("div",{className:"brand",children:[s.jsx("img",{src:"/logo.png",alt:"Ashish Ranjan logo"}),s.jsx("span",{children:"Java Core Notes"})]}),s.jsx("nav",{className:"links","aria-label":"Social and support links",children:bg.map(([o,u,c])=>s.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer","aria-label":o,title:o,children:s.jsx(c,{"aria-hidden":"true"})},o))}),s.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",s.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Sg={Button:I.button`
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
    `},jg=()=>{const[o,u]=ne.useState(!1);return ne.useEffect(()=>{const c=document.getElementById("notes-main");if(!c)return;const l=()=>u(c.scrollTop>220);return l(),c.addEventListener("scroll",l,{passive:!0}),()=>c.removeEventListener("scroll",l)},[]),s.jsx(Sg.Button,{className:o?"isVisible":"",type:"button","aria-label":"Scroll to top",onClick:()=>{var c;return(c=document.getElementById("notes-main"))==null?void 0:c.scrollTo({top:0,behavior:"smooth"})},children:s.jsx(Jh,{"aria-hidden":"true"})})},qd={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 20px;
    `,Content:I.div`
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
    `},Cg=()=>{const o="2026-09-24T00:33:03.941Z",u=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return s.jsx(qd.Wrapper,{children:s.jsxs(qd.Content,{children:[s.jsx("h2",{className:"heading",children:"About Java"}),s.jsx("p",{children:"Java is a class-based, object-oriented programming language designed for portability, reliability, and scalability. Code is compiled into bytecode and executed by the Java Virtual Machine, allowing applications to run consistently across platforms."}),s.jsx("p",{children:"The JVM manages memory allocation, garbage collection, class loading, and runtime execution. Concepts such as object lifecycle, heap and stack memory, exception handling, collections, multithreading, and concurrency form the foundation of robust Java applications."}),s.jsx("p",{children:"The java-core-notes project is a structured revision system. It organizes core syntax, OOP principles, JVM fundamentals, collections framework, Java 8+ features, and concurrency essentials into a clean single-page reference built for clarity and strong conceptual grounding."}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"metaLabel",children:"Last build:"}),s.jsxs("span",{className:"metaValue",children:[u," hrs"]})]})]})})},wi={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Ng=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"what-is-java",icon:s.jsx(wp,{}),title:"What is Java",summary:"Java is a class-based, object-oriented language designed for portability and reliability.",points:["Write code once, run it anywhere (with a JVM).","Compiled to bytecode, executed by the JVM.","Used for backend, Android, enterprise apps, tools, and more."],code:`// Java code runs inside the JVM
// Source code (.java) -> Bytecode (.class) -> JVM executes`,note:"Java feels strict at first, but that strictness helps you write safer code."},{id:"jdk-jre-jvm",icon:s.jsx(ea,{}),title:"JDK vs JRE vs JVM",summary:"These three terms explain how Java code is developed and executed.",points:["JVM (Java Virtual Machine) runs bytecode.","JRE (Java Runtime Environment) = JVM + core libraries to run apps.","JDK (Java Development Kit) = JRE + tools like javac to build apps."],code:`JVM  -> runs .class bytecode
JRE  -> JVM + libraries (to run)
JDK  -> JRE + dev tools (to build)`,note:"If you are writing Java code, you need JDK. If you only run Java apps, JRE is enough."},{id:"compile-execution",icon:s.jsx(Rt,{}),title:"Compilation and execution flow",summary:"Java has a two-step journey: compile then run.",points:["Write code in a .java file.","Compile using javac to generate .class bytecode.","Run using java, which starts the JVM and executes bytecode."],code:`// 1) Compile
javac Main.java

// 2) Run
java Main`,note:"javac creates bytecode. java launches the JVM to run it."},{id:"bytecode-platform",icon:s.jsx(bt,{}),title:"Bytecode and platform independence",summary:"Java compiles to bytecode, not directly to machine code.",points:["Bytecode is the same on every OS.","Each OS has its own JVM that converts bytecode to machine instructions.","That is why Java is platform independent."],code:`// Same bytecode runs on different systems
Windows JVM -> runs bytecode
Linux JVM   -> runs bytecode
Mac JVM     -> runs bytecode`,note:"The JVM is the key reason Java works across platforms."},{id:"hello-world",icon:s.jsx(Sl,{}),title:"Hello World breakdown",summary:"The smallest Java program that shows structure and entry point.",points:["class defines a blueprint (a type).","main is the entry point where the program starts.","System.out.println prints text to the console."],code:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,note:"main must be exactly public static void main(String[] args) for normal execution."},{id:"data-types-variables",icon:s.jsx(Xi,{}),title:"Data types and variables",summary:"Java has primitive types and reference types (objects).",points:["Primitives store values directly (int, double, boolean, char).","Reference types store references to objects (String, arrays, custom classes).","Choose the smallest type that fits the data."],code:`int age = 25;
double price = 99.99;
char grade = 'A';
boolean isActive = true;

String name = "Ashish"; // reference type (object)`,note:"String is not a primitive. It is an object."},{id:"type-casting",icon:s.jsx(jl,{}),title:"Type casting",summary:"Convert one type to another: widening is automatic, narrowing needs manual cast.",points:["Widening: smaller -> larger type (int -> double) happens automatically.","Narrowing: larger -> smaller type (double -> int) requires casting.","Casting can lose data (example: 9.7 becomes 9)."],code:`// Widening (automatic)
int num = 10;
double d1 = num;

// Narrowing (manual)
double d2 = 9.7;
int x = (int) d2; // x becomes 9`,note:"Widening is safe. Narrowing can truncate or overflow."},{id:"operators",icon:s.jsx(Ep,{}),title:"Operators",summary:"Operators perform actions like math, comparison, and logic checks.",points:["Arithmetic: + - * / %","Relational: > < >= <= ==","Logical: && || !","Assignment: = += -= *= /= %="],code:`int a = 10;
int b = 3;

int sum = a + b;     // 13
int mod = a % b;     // 1

boolean ok = a > b;  // true
boolean both = (a > 5) && (b > 1); // true`,note:"Use == for primitives. For objects like String, use equals()."},{id:"control-flow",icon:s.jsx(Zi,{}),title:"Control flow (if, switch, loops)",summary:"Control flow decides which code runs and how many times it runs.",points:["if/else is for decision making.","switch is good for multiple discrete cases.","for and while repeat code based on conditions."],code:`int age = 20;

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
}`,note:"Prefer switch when you have fixed options. Prefer if when logic is range-based."},{id:"break-continue",icon:s.jsx(lg,{}),title:"Break and continue",summary:"break exits the loop. continue skips the current iteration.",points:["break stops the loop immediately.","continue skips the remaining code in this iteration and moves to the next one.","Use them carefully for readability."],code:`// break example
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i); // prints 0..4
}

// continue example
for (int i = 0; i < 6; i++) {
    if (i % 2 == 0) continue;
    System.out.println(i); // prints 1,3,5
}`,note:"Clean loops are easier to maintain. Do not overuse break/continue."}],[]);return s.jsx(wi.Wrapper,{children:s.jsxs(wi.Container,{className:o?"isOpen":"",children:[s.jsxs(wi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Sp,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Foundations"}),s.jsx("div",{className:"subtitle",children:"This builds syntax muscle memory"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(wi.Content,{children:[s.jsx("div",{className:"topNote",children:"Foundations is the base layer. Keep it simple, repeat it often, and your Java reading and writing speed will jump fast."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},bi={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Eg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"method-declaration",icon:s.jsx(Or,{}),title:"Method declaration and invocation",summary:"A method defines reusable behavior. It has return type, name, parameters, and body.",points:["Methods improve code reuse and readability.","Signature = return type + name + parameters.","Method is executed when called."],code:`public class Demo {

    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println(result);
    }
}`,note:"Execution always starts from main method."},{id:"method-overloading",icon:s.jsx(bt,{}),title:"Method overloading",summary:"Same method name, different parameter list. Decided at compile time.",points:["Return type alone cannot differentiate overloaded methods.","Parameter count or parameter type must differ.","This is compile-time polymorphism."],code:`class MathUtil {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }
}`,note:"Overloading improves API readability."},{id:"pass-by-value",icon:s.jsx(lo,{}),title:"Pass by value (important trap)",summary:"Java is always pass by value. For objects, the reference value is passed.",points:["Primitive values are copied.","Object reference is copied, not the object itself.","Reassigning inside method does not affect original reference."],code:`class User {
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
}`,note:"Java is NOT pass by reference. It passes reference value by value."},{id:"main-method",icon:s.jsx(Sl,{}),title:"Main method signature",summary:"Main method is JVM entry point. It must follow exact signature.",points:["public so JVM can access it.","static so it runs without object creation.","String[] args holds command-line arguments."],code:`public class Main {

    public static void main(String[] args) {
        System.out.println("Program starts here");

        for (String arg : args) {
            System.out.println(arg);
        }
    }
}`,note:"If signature changes, JVM will not find entry point."},{id:"varargs",icon:s.jsx(Zi,{}),title:"Varargs",summary:"Varargs allow passing variable number of arguments to a method.",points:["Syntax uses ... after type.","Internally treated as array.","Only one varargs parameter allowed, and it must be last."],code:`class Demo {

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
}`,note:"Use varargs carefully for readability."},{id:"recursion",icon:s.jsx(Sp,{}),title:"Recursion basics",summary:"A method calling itself. Must have base condition to stop.",points:["Each call creates new stack frame.","Base condition prevents infinite recursion.","Used in problems like factorial, tree traversal."],code:`public class RecursionDemo {

    static int factorial(int n) {
        if (n == 1) return 1;      // base case
        return n * factorial(n - 1); // recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`,note:"Without base case, StackOverflowError occurs."}],[]);return s.jsx(bi.Wrapper,{children:s.jsxs(bi.Container,{className:o?"isOpen":"",children:[s.jsxs(bi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Or,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Methods and Program Structure"}),s.jsx("div",{className:"subtitle",children:"Java interview trap alert: Java is always pass by value"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(bi.Content,{children:[s.jsx("div",{className:"topNote",children:"Methods define behavior. Understanding method structure makes your program predictable and modular."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),s.jsx("pre",{className:"code",children:`${l.code}`}),s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},ki={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Lg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"class-object",icon:s.jsx(mn,{}),title:"Class and object",summary:"Class is a blueprint. Object is an instance created from that blueprint.",points:["Class defines fields (data) and methods (behavior).","Object holds real values in memory at runtime.","You create objects using new."],code:`class Car {
    String model;
    void drive() { System.out.println("Driving " + model); }
}

public class Demo {
    public static void main(String[] args) {
        Car c = new Car();
        c.model = "Swift";
        c.drive();
    }
}`,note:"Class is definition. Object is the actual thing in memory."},{id:"constructors",icon:s.jsx(ea,{}),title:"Constructors",summary:"Constructor initializes a new object. Same name as class, no return type.",points:["Default constructor exists only if you do not write any constructor.","You can overload constructors (multiple versions).","Constructor runs automatically when you use new."],code:`class User {
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
}`,note:"If you create a parameterized constructor, default one is not provided automatically."},{id:"this-keyword",icon:s.jsx(rg,{}),title:"this keyword",summary:"this refers to the current object. Used to access fields and methods of the same instance.",points:["Commonly used to resolve naming conflicts between fields and parameters.","Used to call another constructor in the same class: this(...).","You can return this from methods for chaining."],code:`class Box {
    int size;

    Box(int size) {
        this.size = size; // field = parameter
    }

    Box grow() {
        this.size++;
        return this; // chaining
    }
}`,note:"this is the current object reference."},{id:"encapsulation",icon:s.jsx(Yi,{}),title:"Encapsulation",summary:"Encapsulation means hiding internal state and exposing controlled access using methods.",points:["Make fields private to prevent direct access.","Provide getters and setters with validation.","Helps maintain invariants and prevents accidental misuse."],code:`class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) return;
        balance += amount;
    }
}`,note:"Encapsulation is about control, not hiding for no reason."},{id:"inheritance",icon:s.jsx(eg,{}),title:"Inheritance",summary:"Inheritance allows a class to reuse and extend another class using extends.",points:["Child class inherits fields and methods from parent class.","Promotes code reuse, but avoid deep inheritance chains.","Use overriding to change behavior in the child class."],code:`class Animal {
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
}`,note:"Inheritance models an 'is-a' relationship (Dog is an Animal)."},{id:"super-keyword",icon:s.jsx(bt,{}),title:"super keyword",summary:"super refers to the parent class. Used to call parent constructor or parent methods.",points:["super(...) must be the first line inside a constructor.","Use super.method() to call parent version when overriding.","super helps reuse parent initialization logic."],code:`class Parent {
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
}`,note:"super is mainly about parent access and proper initialization."},{id:"method-overriding",icon:s.jsx(Zi,{}),title:"Method overriding",summary:"Overriding means child class provides a new implementation of a parent method.",points:["Same method name, parameters, and return type (or compatible).","Use @Override annotation to avoid mistakes.","Runtime decides which method runs (dynamic dispatch)."],code:`class A {
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
}`,note:"Overriding enables polymorphism."},{id:"polymorphism",icon:s.jsx(jl,{}),title:"Polymorphism",summary:"Polymorphism means one interface, multiple implementations. Most common is runtime polymorphism via overriding.",points:["Parent reference can point to child object.","Method call resolves to the object's actual type at runtime.","Improves flexibility, reduces tight coupling."],code:`class Payment {
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
}`,note:"This is how real systems stay extendable without rewriting old code."},{id:"abstraction",icon:s.jsx(bl,{}),title:"Abstraction",summary:"Abstraction means exposing only the necessary behavior and hiding internal details.",points:["You focus on what an object does, not how it does it.","Achieved using abstract classes and interfaces.","Helps build clean APIs and reusable components."],code:`interface Storage {
    void save(String data);
}

class DiskStorage implements Storage {
    public void save(String data) {
        System.out.println("Saved to disk: " + data);
    }
}`,note:"Abstraction is the reason large codebases stay manageable."},{id:"abstract-class",icon:s.jsx(Or,{}),title:"Abstract class",summary:"An abstract class can have both abstract methods (no body) and concrete methods (with body).",points:["Cannot create object directly from an abstract class.","Used when you want shared code + required methods.","Child must implement all abstract methods."],code:`abstract class Shape {
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
}`,note:"Abstract class is for partial implementation + shared logic."},{id:"interface",icon:s.jsx(bp,{}),title:"Interface",summary:"An interface defines a contract. Implementing class must provide the behavior.",points:["Supports multiple inheritance of type (a class can implement multiple interfaces).","In Java 8+, interfaces can have default and static methods.","Best for defining capability like Runnable, Comparable."],code:`interface Flyable {
    void fly();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird flying");
    }
}`,note:"Interface is about capability. It keeps designs flexible."},{id:"interface-vs-abstract",icon:s.jsx(bt,{}),title:"Interface vs abstract class",summary:"Use interface for capability contracts. Use abstract class for shared base behavior.",points:["Interface - multiple can be implemented, focuses on what.","Abstract class - single inheritance, can store state and shared logic.","Rule of thumb - start with interface, use abstract class only if you need shared base code."],code:`// Interface for capability
interface Logger {
    void log(String msg);
}

// Abstract class for shared base behavior
abstract class BaseLogger {
    void prefix() { System.out.print("[LOG] "); }
    abstract void log(String msg);
}`,note:"In real projects, interfaces usually scale better over time."},{id:"object-class-methods",icon:s.jsx(mn,{}),title:"Object class methods",summary:"Every Java class extends Object. Key methods are toString, equals, and hashCode.",points:["toString - readable representation for logs/debug.","equals - content equality (override for meaningful comparison).","hashCode - must match equals contract, used by HashMap/HashSet."],code:`class User {
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
}`,note:"equals and hashCode should always be overridden together for correct collection behavior."}],[]);return s.jsx(ki.Wrapper,{children:s.jsxs(ki.Container,{className:o?"isOpen":"",children:[s.jsxs(ki.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(bt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Object Oriented Programming Core"}),s.jsx("div",{className:"subtitle",children:"This is Java's spine"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(ki.Content,{children:[s.jsx("div",{className:"topNote",children:"OOP is the foundation of most Java codebases. If this is strong, everything else becomes easier."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Si={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},zg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"stack-vs-heap",icon:s.jsx(bt,{}),title:"Stack vs Heap",summary:"Stack stores method calls and local variables. Heap stores objects created with new.",points:["Stack is fast and automatically cleaned when a method ends.","Heap is shared across threads and managed by the Garbage Collector.","Local primitives are usually on stack. Objects live on heap, stack holds references."],code:`public class Demo {
    static class Person {
        String name;
        Person(String name) { this.name = name; }
    }

    public static void main(String[] args) {
        int age = 25;                 // stack (primitive local)
        Person p = new Person("Ash");  // p reference on stack, object on heap
        System.out.println(p.name);
    }
}`,note:"Think like this - stack = execution, heap = storage for objects."},{id:"object-lifecycle",icon:s.jsx(mn,{}),title:"Object creation lifecycle",summary:"new triggers allocation, constructor runs, reference is returned, object stays until unreachable.",points:["Memory for the object is allocated on heap.","Constructor initializes fields.","Reference is assigned to a variable (usually on stack).","Object becomes eligible for GC when no reachable references remain."],code:`class Car {
    String model;
    Car(String model) { this.model = model; }
}

public class Test {
    public static void main(String[] args) {
        Car c = new Car("Swift"); // heap object created, stack reference stored
        c = null;                 // object may become eligible for GC
    }
}`,note:"Eligible for GC does not mean it will be collected immediately."},{id:"gc-basics",icon:s.jsx(dg,{}),title:"Garbage collection basics",summary:"GC frees heap memory by removing objects that are no longer reachable.",points:["GC runs automatically. You do not manually free memory in Java.","An object is collectible when it is unreachable from GC roots (like stack references, static references).","Calling System.gc() is only a request, JVM may ignore it."],code:`public class GcDemo {
    static class A { }

    public static void main(String[] args) {
        A a = new A();
        a = null;          // now eligible for GC
        System.gc();       // request, not guarantee
    }
}`,note:"Focus on writing code that does not keep unnecessary references."},{id:"reference-types",icon:s.jsx(Xi,{}),title:"Reference types",summary:"Reference variables point to objects on heap. Multiple references can point to the same object.",points:["Reference holds address-like info, not the actual object data.","Two variables can point to the same object, changes appear through both.","Java is pass by value, but for objects the value passed is the reference value."],code:`class User {
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
}`,note:"Common confusion - objects are not passed by reference, references are passed by value."},{id:"string-pool",icon:s.jsx(fl,{}),title:"String pool",summary:"String literals are stored in a shared pool. new String creates a new heap object.",points:["String is immutable, so pooling is safe and memory-efficient.","Two identical literals can point to the same pooled object.","Use intern() only if you know why you need it."],code:`public class StringPoolDemo {
    public static void main(String[] args) {
        String a = "java";
        String b = "java";
        System.out.println(a == b); // true (same pooled literal)

        String c = new String("java");
        System.out.println(a == c); // false (new object)

        String d = c.intern();
        System.out.println(a == d); // true (d points to pool)
    }
}`,note:"Use equals() for content comparison, not ==."},{id:"wrappers-autoboxing",icon:s.jsx(Rt,{}),title:"Wrapper classes and autoboxing",summary:"Wrappers turn primitives into objects. Autoboxing converts automatically when needed.",points:["int -> Integer is boxing, Integer -> int is unboxing.","Collections store objects, so primitives are boxed.","Be careful with null unboxing, it causes NullPointerException."],code:`import java.util.ArrayList;

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
}`,note:"Wrappers add overhead. Prefer primitives unless you need object behavior."},{id:"immutability",icon:s.jsx($i,{}),title:"Immutable objects",summary:"Immutable means state cannot change after creation. String is the most common example.",points:["Immutable objects are thread-safe by default.","They are safe for caching and reuse.","To build custom immutable classes - make fields final, do not expose mutators, and do defensive copies."],code:`final class ImmutableUser {
    private final String name;
    private final int age;

    public ImmutableUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}`,note:"If a field is a mutable object (like List), return a copy in getter."}],[]);return s.jsx(Si.Wrapper,{children:s.jsxs(Si.Container,{className:o?"isOpen":"",children:[s.jsxs(Si.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Rt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Memory and JVM Mental Model"}),s.jsx("div",{className:"subtitle",children:"Understanding memory = confidence in Java"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Si.Content,{children:[s.jsx("div",{className:"topNote",children:"This section separates average dev from strong dev. Memory clarity fixes bugs faster and makes your code more predictable."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},ji={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Tg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"string-vs-builders",icon:s.jsx(pl,{}),title:"String vs StringBuilder vs StringBuffer",summary:"String is immutable. StringBuilder is mutable and fast. StringBuffer is mutable and thread-safe (slower).",points:["String - immutable, stored in string pool for literals.","StringBuilder - mutable, best for single-threaded string building.","StringBuffer - mutable and synchronized, safer in multi-threading but slower.","Rule - use String for fixed text, StringBuilder for loops and concatenations."],code:`public class Demo {
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
}`,note:"In loops, prefer StringBuilder to avoid creating many temporary String objects."},{id:"common-string-methods",icon:s.jsx(jp,{}),title:"Common String methods",summary:"Most String operations return a new String because String is immutable.",points:["length(), charAt(i), substring(a,b)","toUpperCase(), toLowerCase(), trim()","equals(), equalsIgnoreCase(), compareTo()","contains(), startsWith(), endsWith()","indexOf(), lastIndexOf(), replace()","split() and join() patterns"],code:`public class StringMethods {
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
}`,note:"Use equals() for content comparison. == compares references."},{id:"arrays-basics",icon:s.jsx(Np,{}),title:"Arrays basics",summary:"An array is a fixed-size container that stores elements of the same type.",points:["Arrays have a fixed length once created.","Index starts at 0.","Use arr.length (property) - not length().","Enhanced for loop is clean for reading elements."],code:`public class ArrayBasics {
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
}`,note:"If you need dynamic size, use ArrayList instead of arrays."},{id:"multi-dimensional",icon:s.jsx(kl,{}),title:"Multi dimensional arrays",summary:"A 2D array is an array of arrays. Rows can have different lengths (jagged arrays).",points:["int[][] matrix is the common 2D form.","matrix.length gives number of rows.","matrix[row].length gives number of columns in that row.","Jagged arrays are allowed in Java."],code:`public class TwoDArray {
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
}`,note:"2D arrays are useful, but for large data consider specialized structures."},{id:"arrays-utility",icon:s.jsx(ea,{}),title:"Arrays utility class",summary:"java.util.Arrays provides helpers for printing, sorting, searching, filling, and copying.",points:["Arrays.toString() is the easiest way to print an array.","Arrays.sort() sorts in ascending order.","Arrays.binarySearch() works only on a sorted array.","Arrays.copyOf() is useful for resizing or copying.","Arrays.equals() checks values, not references."],code:`import java.util.Arrays;

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
}`,note:"binarySearch needs sorted array, otherwise result is unpredictable."}],[]);return s.jsx(ji.Wrapper,{children:s.jsxs(ji.Container,{className:o?"isOpen":"",children:[s.jsxs(ji.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(pl,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Strings and Arrays"}),s.jsx("div",{className:"subtitle",children:"Immutability, performance, and core data storage"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(ji.Content,{children:[s.jsx("div",{className:"topNote",children:"Strings are everywhere in Java, and arrays are the base for many data structures. Learn when to use StringBuilder, how immutability impacts performance, and how to work confidently with arrays."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ci={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Pg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"checked-vs-unchecked",icon:s.jsx(Yi,{}),title:"Checked vs Unchecked Exceptions",summary:"Checked exceptions must be handled or declared. Unchecked exceptions occur at runtime.",points:["Checked exceptions are verified at compile time.","Unchecked exceptions extend RuntimeException.","Compiler forces handling of checked exceptions."],code:`// Checked Exception
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
}`,note:"Checked = compile time handling required. Unchecked = runtime issues."},{id:"try-catch-finally",icon:s.jsx(Or,{}),title:"try catch finally",summary:"try contains risky code, catch handles exception, finally always executes.",points:["try block wraps risky code.","catch block handles specific exception.","finally runs regardless of exception."],code:`public class TryCatchDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Cleanup logic");
        }
    }
}`,note:"finally is commonly used for closing resources."},{id:"throw-vs-throws",icon:s.jsx(lo,{}),title:"throw vs throws",summary:"throw is used to explicitly throw an exception. throws declares exceptions in method signature.",points:["throw is followed by an exception object.","throws appears in method declaration.","throw transfers control immediately."],code:`public class ThrowDemo {

    static void validate(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Not eligible");
        }
    }

    public static void main(String[] args) throws Exception {
        validate(15);
    }
}`,note:"throw creates and throws. throws declares responsibility."},{id:"custom-exceptions",icon:s.jsx(ea,{}),title:"Custom Exceptions",summary:"Custom exceptions allow you to define domain-specific error types.",points:["Extend Exception for checked custom exception.","Extend RuntimeException for unchecked custom exception.","Useful for business logic validation."],code:`class InvalidAgeException extends Exception {
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
}`,note:"Use meaningful names for business-level errors."},{id:"exception-hierarchy",icon:s.jsx(bt,{}),title:"Exception Hierarchy",summary:"All exceptions inherit from Throwable.",points:["Throwable is root class.","Error represents serious JVM issues.","Exception represents application-level issues.","RuntimeException is unchecked."],code:`java.lang.Object
   └── Throwable
        ├── Error
        └── Exception
             └── RuntimeException`,note:"Never catch Error unless you have a very specific reason."}],[]);return s.jsx(Ci.Wrapper,{children:s.jsxs(Ci.Container,{className:o?"isOpen":"",children:[s.jsxs(Ci.Header,{type:"button",onClick:()=>u(!o),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(lo,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Exception Handling"}),s.jsx("div",{className:"subtitle",children:"Java loves explicit error handling"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Ci.Content,{children:[s.jsx("div",{className:"topNote",children:"Strong Java developers understand the exception model deeply. Proper handling prevents crashes and improves reliability."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),s.jsx("pre",{className:"code",children:`${l.code}`}),s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ni={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `};function Mg(o){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"},child:[]}]})(o)}const _g=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"hierarchy",icon:s.jsx(bt,{}),title:"Collection hierarchy overview",summary:"Collection is for groups of items. Map is for key-value pairs and is not a Collection.",points:["Collection interface -> List, Set, Queue","Map interface -> HashMap, LinkedHashMap, TreeMap","Most collections store objects, primitives get autoboxed"],code:`// Very quick mental map
// Collection
//   - List (ordered, duplicates allowed)
//   - Set (no duplicates)
//   - Queue (processing order, FIFO usually)
//
// Map (key-value)
//   - keys are unique
//   - values can repeat`,note:"Interview shortcut - if you need key lookup, think Map. Otherwise think Collection."},{id:"list",icon:s.jsx(Np,{}),title:"List (ArrayList, LinkedList)",summary:"List keeps order and allows duplicates. Pick ArrayList for reads, LinkedList for frequent inserts in middle (rare in real apps).",points:["ArrayList -> dynamic array, fast random access, slow middle inserts","LinkedList -> nodes, slow random access, faster inserts if you already have the node","Use ArrayList by default unless you have a strong reason"],code:`import java.util.*;

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
}`,note:"Most interviewers expect you to default to ArrayList unless proven otherwise."},{id:"set",icon:s.jsx(kl,{}),title:"Set (HashSet, LinkedHashSet, TreeSet)",summary:"Set does not allow duplicates. HashSet is fastest, LinkedHashSet keeps insertion order, TreeSet keeps sorted order.",points:["HashSet -> hashing, no order guarantee, fast add and contains","LinkedHashSet -> maintains insertion order","TreeSet -> sorted set, log(n) operations, uses natural order or Comparator"],code:`import java.util.*;

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
}`,note:"TreeSet requires elements that can be compared (Comparable) or a Comparator."},{id:"map",icon:s.jsx(ig,{}),title:"Map (HashMap, LinkedHashMap, TreeMap)",summary:"Map stores key-value pairs. Keys are unique. HashMap is default, LinkedHashMap keeps insertion order, TreeMap keeps sorted keys.",points:["HashMap -> average O(1) put/get, no order guarantee","LinkedHashMap -> preserves insertion order (or access order if configured)","TreeMap -> sorted by key, O(log n) put/get"],code:`import java.util.*;

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
}`,note:"If you override equals, you must override hashCode for keys in HashMap."},{id:"queue-deque",icon:s.jsx(jl,{}),title:"Queue and Deque",summary:"Queue is for processing order. Deque can act as both queue and stack. Prefer ArrayDeque over Stack.",points:["Queue usually FIFO -> add (offer), remove (poll), peek","Deque supports both ends -> addFirst, addLast, pollFirst, pollLast","ArrayDeque is fast and recommended for stack style operations"],code:`import java.util.*;

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
}`,note:"Stack class is old. Use ArrayDeque for stack behavior."},{id:"comparable-comparator",icon:s.jsx(Mg,{}),title:"Comparable vs Comparator",summary:"Comparable defines natural order inside the class. Comparator defines custom order outside.",points:["Comparable -> implement compareTo, used for default sorting","Comparator -> custom sorting logic, can have multiple strategies","TreeSet and TreeMap rely on ordering"],code:`import java.util.*;

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
}`,note:"Comparator is more flexible. Comparable is good for a default natural ordering."},{id:"equals-hashcode",icon:s.jsx(Xi,{}),title:"equals and hashCode contract",summary:"If two objects are equal by equals, they must have the same hashCode. This is critical for HashMap and HashSet.",points:["equals checks logical equality","hashCode decides bucket placement in hash-based collections","Breaking contract causes missing lookups and duplicate set entries"],code:`import java.util.*;

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
}`,note:"For Map keys and Set elements, always implement equals and hashCode together."},{id:"hashmap-internal",icon:s.jsx(Rt,{}),title:"Internal working of HashMap",summary:"HashMap uses hashCode to pick a bucket and equals to match the exact key. Collisions are handled inside the bucket.",points:["Step 1 - compute hash from key.hashCode()","Step 2 - map hash to bucket index","Step 3 - if bucket has entries, compare keys using equals","Collisions happen when different keys land in same bucket","Resizing happens when load factor threshold is crossed"],code:`// High level put flow (conceptual)
// put(key, value)
// 1) int h = hash(key.hashCode())
// 2) int idx = (n - 1) & h
// 3) if bucket[idx] empty -> place entry
// 4) else traverse entries in bucket
//    - if existing key equals new key -> overwrite value
//    - else add new entry (collision handling)
// 5) if size exceeds threshold -> resize (rehash)`,note:"Interview focus - hashCode selects bucket, equals confirms the key match."}],[]);return s.jsx(Ni.Wrapper,{children:s.jsxs(Ni.Container,{className:o?"isOpen":"",children:[s.jsxs(Ni.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(bt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Collections Framework"}),s.jsx("div",{className:"subtitle",children:"This section alone can get jobs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Ni.Content,{children:[s.jsx("div",{className:"topNote",children:"Collections decide how your data is stored, searched, sorted, and processed. Know the tradeoffs and you will write cleaner and faster Java."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ei={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Ig=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"why-generics",icon:s.jsx(ug,{}),title:"Why generics",summary:"Generics give type safety and remove casting by letting you write reusable, type-aware code.",points:["Prevents runtime ClassCastException by catching type issues at compile time.","Makes APIs clearer - List<String> tells you exactly what it contains.","Reduces boilerplate casting and improves readability."],code:`import java.util.ArrayList;

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
}`,note:"Generics are mostly about safety + clean APIs, not performance."},{id:"generic-classes",icon:s.jsx(mn,{}),title:"Generic classes",summary:"A generic class uses a type parameter (like T) so the same class works for many types.",points:["T is a placeholder for a real type, decided when you create the object.","Common convention: T (type), E (element), K (key), V (value).","Works great for utility containers like Pair, Box, Result."],code:`class Box<T> {
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
}`,note:"Same class, different types - no duplicate code."},{id:"generic-methods",icon:s.jsx(Or,{}),title:"Generic methods",summary:"A generic method declares its own type parameter and works independently of the class type.",points:["Useful for helper methods like print, swap, max, convert.","Type parameter is written before return type: <T>.","Java can often infer T from arguments."],code:`public class Demo {
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
}`,note:"Generic methods are a clean way to write reusable utilities."},{id:"wildcards",icon:s.jsx(Cp,{}),title:"Wildcards",summary:"Wildcards (?) make generics flexible when the exact type is unknown or should vary.",points:["? means unknown type.","<?> allows reading as Object, but restricts safe writing (except null).","<? extends T> is for reading (producer).","<? super T> is for writing (consumer)."],code:`import java.util.List;

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
}`,note:"Rule of thumb: if you only need to read values, wildcards help a lot."},{id:"bounded-types",icon:s.jsx(Ep,{}),title:"Bounded types",summary:"Bounds restrict allowed generic types. This gives you access to methods of the bound type.",points:["<T extends Number> means T must be Number or subclass.","Use bounds when you need operations available on a base type.","Multiple bounds use &: <T extends A & B> (class first, then interfaces)."],code:`public class Demo {
    public static <T extends Number> double sum(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }

    public static void main(String[] args) {
        System.out.println(sum(10, 20));       // Integer
        System.out.println(sum(2.5, 7.5));     // Double
        // System.out.println(sum("a", "b"));  // compile-time error
    }
}`,note:"Bounds make your generic code safer and more useful."},{id:"bounded-wildcards",icon:s.jsx(Rt,{}),title:"Bounded wildcards",summary:"Use extends and super wildcards to control variance and allow flexible method parameters.",points:["<? extends T> accepts T and its subclasses (good for reading).","<? super T> accepts T and its superclasses (good for writing).","PECS rule: Producer Extends, Consumer Super."],code:`import java.util.ArrayList;
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
}`,note:"PECS is one of those interview favorites. Keep it simple and practical."}],[]);return s.jsx(Ei.Wrapper,{children:s.jsxs(Ei.Container,{className:o?"isOpen":"",children:[s.jsxs(Ei.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(mn,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Generics"}),s.jsx("div",{className:"subtitle",children:"Type safety, reusable code, clean APIs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Ei.Content,{children:[s.jsx("div",{className:"topNote",children:"Generics let you write reusable code that stays type-safe. They reduce casting, prevent common runtime errors, and make your intent obvious."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Li={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Ag=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"lambda",icon:s.jsx(fl,{}),title:"Lambda expressions",summary:"A compact way to write anonymous functions. Mostly used with functional interfaces.",points:["Syntax: (params) -> expression or (params) -> { block }","Reduces boilerplate for small behaviors","Works with functional interfaces (single abstract method)"],code:`import java.util.Arrays;
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
}`,note:"Lambdas make code read like intent, not ceremony."},{id:"functional-interface",icon:s.jsx(Or,{}),title:"Functional interfaces",summary:"An interface with exactly one abstract method. Target type for lambdas.",points:["Can have default and static methods","Use @FunctionalInterface to prevent accidental extra abstract methods","Examples: Runnable, Comparator, Callable"],code:`@FunctionalInterface
interface Printer {
    void print(String msg);
}

public class Demo {
    public static void main(String[] args) {
        Printer p = m -> System.out.println("Print: " + m);
        p.print("Hello");
    }
}`,note:"One abstract method is the key. Default methods do not count."},{id:"built-in-functional",icon:s.jsx(Rt,{}),title:"Built in functional interfaces",summary:"Java provides common functional interfaces in java.util.function.",points:["Predicate<T> returns boolean","Function<T,R> transforms T to R","Consumer<T> consumes input, returns nothing","Supplier<T> returns a value, takes nothing"],code:`import java.util.function.*;

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
}`,note:"These cover most everyday lambda needs without custom interfaces."},{id:"streams",icon:s.jsx(bt,{}),title:"Streams API",summary:"A pipeline for processing collections in a declarative way.",points:["Stream is not a data structure, it is a view over data","Intermediate ops: map, filter, sorted","Terminal ops: forEach, collect, reduce, count"],code:`import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());

        System.out.println(evens); // [2, 4, 6]
    }
}`,note:"Streams are great for readable transformations, but avoid over-chaining blindly."},{id:"map-filter-reduce",icon:s.jsx(Cp,{}),title:"map, filter, reduce",summary:"The core building blocks of stream pipelines.",points:["filter keeps items that match a condition","map transforms each item","reduce combines items into a single result"],code:`import java.util.*;
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
}`,note:"If you can read it left to right like a sentence, you did it right."},{id:"collectors",icon:s.jsx(mn,{}),title:"Collectors",summary:"Helpers to collect stream results into lists, sets, maps, groups, and more.",points:["toList, toSet, joining","groupingBy, partitioningBy","counting, summingInt, averagingInt"],code:`import java.util.*;
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
}`,note:"Collectors turn streams into real results without manual loops."},{id:"optional",icon:s.jsx(bp,{}),title:"Optional",summary:"A container that may or may not hold a value. Helps avoid null checks everywhere.",points:["Use map, flatMap, filter to transform safely","Use orElse, orElseGet for fallback","Avoid Optional.get() unless you are 100% sure"],code:`import java.util.*;

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
}`,note:"Optional is not magic. It is a tool for safer intent and cleaner flow."},{id:"method-references",icon:s.jsx(ng,{}),title:"Method references",summary:"A shorter form of lambda when you are only calling an existing method.",points:["Static method: ClassName::method","Instance method: instance::method","Constructor: ClassName::new"],code:`import java.util.*;
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
}`,note:"Method references improve readability when the lambda adds no extra logic."},{id:"default-static-interface",icon:s.jsx(sg,{}),title:"Default and static methods in interface",summary:"Interfaces can provide default behavior and utility methods without breaking old implementations.",points:["default methods have a body and can be overridden","static methods belong to the interface, not the class","Useful for evolving APIs safely"],code:`interface Logger {
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
}`,note:"Default methods help you add features without forcing every class to change immediately."}],[]);return s.jsx(Li.Wrapper,{children:s.jsxs(Li.Container,{className:o?"isOpen":"",children:[s.jsxs(Li.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(fl,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Java 8 and Beyond"}),s.jsx("div",{className:"subtitle",children:"Modern Java identity"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Li.Content,{children:[s.jsx("div",{className:"topNote",children:"Java 8 changed how Java code is written. Lambdas, streams, and functional style are common in real projects, interviews, and modern codebases."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},zi={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Og=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"localdate",icon:s.jsx(Yd,{}),title:"LocalDate",summary:"Date without time and timezone. Perfect for birthdays, deadlines, invoice dates.",points:["Stores only year-month-day.","Immutable and thread-safe.","Use now(), of(), parse() and plusDays(), minusWeeks()."],code:`import java.time.LocalDate;

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
}`,note:"Use LocalDate when time is not needed. Clean and safe."},{id:"localtime",icon:s.jsx(kp,{}),title:"LocalTime",summary:"Time without date and timezone. Useful for daily schedules, store timings, alarms.",points:["Stores only hour-minute-second-nano.","Immutable and thread-safe.","Use now(), of(), parse() and plusMinutes(), minusHours()."],code:`import java.time.LocalTime;

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
}`,note:"LocalTime is great for repeating daily time logic."},{id:"localdatetime",icon:s.jsx(bl,{}),title:"LocalDateTime",summary:"Date + time without timezone. Useful for logs, events, and timestamps inside a system.",points:["Combines LocalDate and LocalTime.","No timezone attached. It represents a local timestamp.","Use now(), of(), parse() and plusHours(), plusDays()."],code:`import java.time.LocalDateTime;

public class Demo {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime launch = LocalDateTime.of(2026, 2, 22, 10, 0);

        System.out.println(now);
        System.out.println(launch);

        System.out.println(launch.plusDays(2));
        System.out.println(launch.plusHours(5));
    }
}`,note:"If you need timezone, use ZonedDateTime or OffsetDateTime later."},{id:"period-duration",icon:s.jsx(Lp,{}),title:"Period and Duration",summary:"Period measures date-based amount (years-months-days). Duration measures time-based amount (hours-minutes-seconds).",points:["Period is for dates. Example: age, subscription months.","Duration is for time. Example: job runtime, timeout.","Use between() and add/subtract with plus() methods."],code:`import java.time.LocalDate;
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
}`,note:"Rule of thumb - Period for calendar math, Duration for clock math."},{id:"formatting",icon:s.jsx(pl,{}),title:"Formatting",summary:"Use DateTimeFormatter to format and parse dates/times safely and consistently.",points:["Avoid old Date and SimpleDateFormat for new code.","DateTimeFormatter is immutable and thread-safe.","Format using pattern or built-in constants like ISO_LOCAL_DATE."],code:`import java.time.LocalDate;
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
}`,note:"Pick one format style for the app and keep it consistent everywhere."}],[]);return s.jsx(zi.Wrapper,{children:s.jsxs(zi.Container,{className:o?"isOpen":"",children:[s.jsxs(zi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Yd,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Date and Time API"}),s.jsx("div",{className:"subtitle",children:"Modern Java date-time basics for real apps"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(zi.Content,{children:[s.jsx("div",{className:"topNote",children:"Use java.time classes for clean, safe date-time handling. They are immutable, readable, and built for production use."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ti={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Dg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"file-class",icon:s.jsx(Zh,{}),title:"File class",summary:"File represents file and directory paths. It can check existence, create folders, list files, but it does not read file content by itself.",points:["File works with paths and metadata (exists, isFile, isDirectory).","Use it for basic path operations and directory listing.","For modern file I/O, prefer java.nio.file (Path, Files)."],code:`import java.io.File;

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
}`,note:"File is mainly path + checks. Content read or write is done via streams or java.nio."},{id:"path-files",icon:s.jsx(Xh,{}),title:"Path and Files",summary:"Path is the modern representation of a path. Files provides utility methods for creating, reading, writing, copying, and listing.",points:["Path is in java.nio.file and is more flexible than File.","Files has one-liners for reading and writing small files.","Works well with exceptions and modern APIs."],code:`import java.nio.file.Path;
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
}`,note:"Paths.get creates Path. Files does the real work."},{id:"read-write-files",icon:s.jsx(jp,{}),title:"Reading and writing files",summary:"For small files, Files.readString, readAllLines and writeString are the cleanest approach.",points:["Use readString or readAllLines when the file is not huge.","Use writeString or write to replace or create content quickly.","For large files, prefer buffered streaming (next topic)."],code:`import java.nio.file.Path;
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
}`,note:"For real apps, always handle exceptions properly and validate file paths."},{id:"bufferedreader-bufferedwriter",icon:s.jsx(wp,{}),title:"BufferedReader and BufferedWriter",summary:"BufferedReader and BufferedWriter are best for large files. They read and write efficiently using an internal buffer.",points:["Use try-with-resources to auto close streams.","Read line by line with readLine for memory safety.","Write with write and newLine for clean output."],code:`import java.io.BufferedReader;
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
}`,note:"Buffered approach is the go-to when file size can be large."}],[]);return s.jsx(Ti.Wrapper,{children:s.jsxs(Ti.Container,{className:o?"isOpen":"",children:[s.jsxs(Ti.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Or,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"File Handling"}),s.jsx("div",{className:"subtitle",children:"Read, write, and manage files using core Java APIs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Ti.Content,{children:[s.jsx("div",{className:"topNote",children:"File handling in Java is usually done in two styles - classic java.io (File, Reader, Writer) and modern java.nio (Path, Files). Use Files for clean utilities, and buffered streams for large files."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Pi={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Rg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"thread-class",icon:s.jsx(Sl,{}),title:"Thread class",summary:"Create a thread by extending Thread and overriding run(). Start it with start(), not run().",points:["start() creates a new call stack and runs run() on a new thread.","Calling run() directly runs on the same thread (no new thread).","Use Thread when you need a quick demo, Runnable is usually preferred in real code."],code:`class MyThread extends Thread {
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
}`,note:"Rule of thumb: start() makes it concurrent, run() is just a normal method call."},{id:"runnable-interface",icon:s.jsx(Zi,{}),title:"Runnable interface",summary:"Create a task by implementing Runnable, then pass it to a Thread.",points:["Runnable separates the task from the thread that runs it.","This is more flexible than extending Thread.","You can reuse the same Runnable with different threads if needed."],code:`class MyTask implements Runnable {
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
}`,note:"In production, you will usually use thread pools (ExecutorService), but Runnable is the foundation."},{id:"thread-lifecycle",icon:s.jsx(bl,{}),title:"Thread lifecycle",summary:"A thread moves through states like NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",points:["NEW: created but not started.","RUNNABLE: ready to run (or running) depending on CPU scheduling.","BLOCKED/WAITING: not running because it is waiting for a monitor or condition.","TERMINATED: run() finished or crashed."],code:`public class Demo {
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
}`,note:"State can change quickly. getState() is a snapshot, not a promise."},{id:"synchronization",icon:s.jsx($i,{}),title:"Synchronization",summary:"Synchronization protects shared mutable data so only one thread updates it at a time.",points:["Race condition happens when multiple threads update shared state without coordination.","synchronized enforces mutual exclusion using a monitor (lock).","Without synchronization, results can be wrong even if code looks correct."],code:`class Counter {
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
}`,note:"Synchronization is about correctness first, performance second."},{id:"synchronized-keyword",icon:s.jsx($i,{}),title:"synchronized keyword",summary:"Use synchronized on methods or blocks. The lock can be this, a class, or a dedicated lock object.",points:["synchronized instance method locks on this.","synchronized static method locks on ClassName.class.","synchronized block locks on the object you specify."],code:`class Locker {
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
}`,note:"Prefer a dedicated lock object for fine control and to avoid accidental external locking."},{id:"volatile",icon:s.jsx(Rt,{}),title:"volatile",summary:"volatile ensures visibility of changes across threads. It does not make compound operations atomic.",points:["Use volatile for flags and status variables shared across threads.","volatile guarantees reads see the latest write (visibility).","count++ is not atomic even if count is volatile."],code:`public class Demo {
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
}`,note:"volatile is for visibility, synchronized is for mutual exclusion and atomicity."},{id:"deadlock",icon:s.jsx(lo,{}),title:"Deadlock concept",summary:"Deadlock occurs when two threads hold locks the other needs, and both wait forever.",points:["Classic cause: acquiring locks in different orders.","Prevention: consistent lock ordering, timeouts, reduce lock scope.","Deadlocks are hard to debug, design to avoid them."],code:`public class Demo {
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
}`,note:"Fix: always lock A then B everywhere. Never mix the order."}],[]);return s.jsx(Pi.Wrapper,{children:s.jsxs(Pi.Container,{className:o?"isOpen":"",children:[s.jsxs(Pi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Rt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Multithreading Basics"}),s.jsx("div",{className:"subtitle",children:"Threads, synchronization, visibility, and deadlocks"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Pi.Content,{children:[s.jsx("div",{className:"topNote",children:"Multithreading is powerful but dangerous without discipline. Most bugs here are timing bugs, which means they appear and disappear randomly."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Mi={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Fg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"executor-framework",icon:s.jsx(Rt,{}),title:"Executor framework",summary:"High level API for managing threads without manually creating them.",points:["Introduced to simplify thread management.","Separates task submission from thread execution.","Improves scalability and resource control."],code:`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDemo {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> {
            System.out.println("Task executed by thread");
        });

        executor.shutdown();
    }
}`,note:"Prefer ExecutorService over manually creating threads."},{id:"callable-future",icon:s.jsx(kp,{}),title:"Callable and Future",summary:"Callable returns a result. Future represents the result of an asynchronous computation.",points:["Runnable does not return value, Callable does.","Future allows retrieving result using get().","get() blocks until result is available."],code:`import java.util.concurrent.*;

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
}`,note:"Use Callable when you need computation result from a thread."},{id:"thread-pools",icon:s.jsx(bt,{}),title:"Thread pools",summary:"Thread pool reuses fixed number of threads to execute multiple tasks efficiently.",points:["Reduces overhead of creating threads repeatedly.","Fixed thread pool → fixed number of threads.","Cached thread pool → dynamic thread count."],code:`ExecutorService fixedPool =
    Executors.newFixedThreadPool(3);

ExecutorService cachedPool =
    Executors.newCachedThreadPool();

fixedPool.submit(() -> {
    System.out.println("Running task");
});

fixedPool.shutdown();`,note:"Choose pool type based on workload characteristics."},{id:"concurrent-collections",icon:s.jsx(Gh,{}),title:"Concurrent collections",summary:"Thread-safe collections designed for concurrent access without heavy synchronization.",points:["Avoid using synchronized collections manually.","ConcurrentHashMap is highly scalable.","CopyOnWriteArrayList is useful for read-heavy scenarios."],code:`import java.util.concurrent.*;

public class ConcurrentCollectionDemo {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map =
            new ConcurrentHashMap<>();

        map.put("A", 1);
        map.put("B", 2);

        System.out.println(map.get("A"));
    }
}`,note:"Use concurrent collections in multi-threaded environments."}],[]);return s.jsx(Mi.Wrapper,{children:s.jsxs(Mi.Container,{className:o?"isOpen":"",children:[s.jsxs(Mi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Rt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Concurrency Essentials"}),s.jsx("div",{className:"subtitle",children:"Managing threads and parallel execution"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Mi.Content,{children:[s.jsx("div",{className:"topNote",children:"Concurrency enables parallel execution and scalability. Understanding thread management separates intermediate from advanced Java developers."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),s.jsx("pre",{className:"code",children:`${l.code}`}),s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},_i={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Bg=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"packages",icon:s.jsx(Jd,{}),title:"Packages",summary:"Packages group related classes and interfaces together to avoid naming conflicts and improve organization.",points:["Packages create a namespace for classes.","Folder structure must match package name.","Helps in modular structure and clean architecture."],code:`package com.example.app;

public class User {
    String name;
}`,note:"Convention: use reverse domain name format like com.company.project."},{id:"access-modifiers",icon:s.jsx($i,{}),title:"Access modifiers",summary:"Access modifiers control visibility of classes, methods, and variables.",points:["public → accessible everywhere.","protected → accessible within package and subclasses.","default (no modifier) → package-private.","private → accessible only inside the class."],code:`public class Demo {

    private int id;
    String name;        // default
    protected int age;
    public String city;

}`,note:"Encapsulation depends on correct use of access modifiers."},{id:"import",icon:s.jsx(Kh,{}),title:"Import",summary:"Import allows using classes from other packages without fully qualifying them.",points:["You can import specific class or entire package.","Wildcard import does not import sub-packages.","java.lang package is imported automatically."],code:`import java.util.ArrayList;
import java.util.*;

public class Test {
    ArrayList<String> list = new ArrayList<>();
}`,note:"Prefer explicit imports over wildcard in production code."},{id:"modular-system",icon:s.jsx(bt,{}),title:"Modular system overview",summary:"Java 9 introduced module system to improve strong encapsulation and scalability.",points:["Each module has a module-info.java file.","Modules explicitly declare required dependencies.","Improves security and reduces classpath issues."],code:`module com.example.app {
    requires java.sql;
    exports com.example.app.service;
}`,note:"Modules help large enterprise systems manage dependencies cleanly."}],[]);return s.jsx(_i.Wrapper,{children:s.jsxs(_i.Container,{className:o?"isOpen":"",children:[s.jsxs(_i.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Jd,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Modules and Packaging"}),s.jsx("div",{className:"subtitle",children:"Structure controls clarity in large systems"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(_i.Content,{children:[s.jsx("div",{className:"topNote",children:"Clean packaging separates beginners from structured developers. Organization reduces chaos in large projects."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ii={Wrapper:I.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:I.div`
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
    `,Header:I.button`
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
    `,Content:I.div`
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
    `},Ug=()=>{const[o,u]=ne.useState(!1),c=ne.useMemo(()=>[{id:"immutability",icon:s.jsx(Yi,{}),title:"Immutability",summary:"Immutable objects cannot change state after creation. Safer, simpler, and thread-friendly.",points:["Make class final so it cannot be extended and mutated via subclassing.","Make fields private and final.","Do not provide setters.","For mutable fields (List, Date), store and return defensive copies.","String is immutable, so it is safe for pooling and caching."],code:`final class ImmutableUser {
    private final String name;
    private final int age;

    public ImmutableUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}`,note:"Immutability reduces bugs because objects do not change unexpectedly."},{id:"defensive-copying",icon:s.jsx(Qh,{}),title:"Defensive copying",summary:"When a class holds mutable data, return a copy to prevent outside code from mutating internal state.",points:["Do defensive copy in constructor (store a copy).","Do defensive copy in getter (return a copy).","If you return internal references directly, callers can mutate your object."],code:`import java.util.ArrayList;
import java.util.List;

final class SafeCart {
    private final List<String> items;

    public SafeCart(List<String> items) {
        this.items = new ArrayList<>(items); // copy in
    }

    public List<String> getItems() {
        return new ArrayList<>(items); // copy out
    }
}`,note:"Most interview bugs come from exposing mutable fields directly."},{id:"equals-hashcode",icon:s.jsx(Xi,{}),title:"equals and hashCode rules",summary:"If you override equals, you must override hashCode. Hash-based collections depend on this contract.",points:["equals compares logical equality.","hashCode groups objects into buckets for HashMap and HashSet.","If equals is true for two objects, their hashCode must be equal.","If hashCode changes after insertion (mutable key), HashMap lookups break."],code:`class User {
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
}`,note:"Never use mutable objects as HashMap keys unless you fully control mutation."},{id:"common-mistakes",icon:s.jsx(lo,{}),title:"Common mistakes",summary:"Small Java mistakes that repeatedly appear in interviews and real projects.",points:["Using == instead of equals for String content comparison.","Forgetting break in switch (fall-through).","Ignoring null checks and causing NullPointerException.","Modifying a collection while iterating using for-each (ConcurrentModificationException).","Assuming Java passes objects by reference (it does not)."],code:`import java.util.ArrayList;
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
}`,note:"If you remember only one thing - Strings use equals, not ==."},{id:"performance-considerations",icon:s.jsx(Lp,{}),title:"Performance considerations",summary:"Know the common time-cost patterns so you do not pick slow approaches by accident.",points:["String concatenation inside loops is costly. Use StringBuilder.","Prefer primitives when you do not need object behavior (boxing adds overhead).","ArrayList random access is fast, LinkedList random access is slow.","HashMap average operations are O(1), TreeMap operations are O(log n).","Avoid premature optimization, but know the typical hotspots."],code:`public class PerfDemo {
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
}`,note:"StringBuilder is a classic Java performance win for repeated concatenation."},{id:"which-collection",icon:s.jsx(kl,{}),title:"When to use which collection",summary:"Pick collections by access pattern, ordering needs, uniqueness, and lookup speed.",points:["ArrayList - fast index access, append is usually cheap, great default list.","LinkedList - good for frequent insert/remove at ends, not for random access.","HashSet - unique elements, fast lookup, order not guaranteed.","LinkedHashSet - unique with insertion order preserved.","TreeSet - unique and sorted, slower than HashSet.","HashMap - key-value, fast lookup, order not guaranteed.","LinkedHashMap - preserves insertion order, useful for LRU-style logic.","TreeMap - sorted keys, supports range queries."],code:`import java.util.*;

public class ChooseCollection {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();           // default list
        Set<String> set = new HashSet<>();                // unique + fast lookup
        Map<String, Integer> map = new HashMap<>();       // key-value lookup

        Set<Integer> sorted = new TreeSet<>();            // sorted unique
        Map<String, Integer> ordered = new LinkedHashMap<>(); // preserves insertion order
    }
}`,note:"Default choices in real projects are often ArrayList + HashMap unless ordering or sorting is required."}],[]);return s.jsx(Ii.Wrapper,{children:s.jsxs(Ii.Container,{className:o?"isOpen":"",children:[s.jsxs(Ii.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Yi,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Best Practices and Interview Traps"}),s.jsx("div",{className:"subtitle",children:"Practical rules that prevent bugs and win interviews"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(tt,{}):s.jsx(et,{})})]})]}),o&&s.jsxs(Ii.Content,{children:[s.jsx("div",{className:"topNote",children:"These topics show maturity. They are simple on paper, but they decide real-world reliability and interview confidence."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,y)=>s.jsx("li",{children:m},y))}),l.code&&s.jsx("pre",{className:"code",children:`${l.code}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Wg=()=>s.jsxs(ol.Wrapper,{children:[s.jsx(ol.Header,{children:s.jsx(fg,{})}),s.jsxs(ol.Main,{id:"notes-main",children:[s.jsxs("div",{className:"contentWrapper",children:[s.jsx(Cg,{}),s.jsx(Ng,{}),s.jsx(Eg,{}),s.jsx(Lg,{}),s.jsx(zg,{}),s.jsx(Tg,{}),s.jsx(Pg,{}),s.jsx(_g,{}),s.jsx(Ig,{}),s.jsx(Ag,{}),s.jsx(Og,{}),s.jsx(Dg,{}),s.jsx(Rg,{}),s.jsx(Fg,{}),s.jsx(Bg,{}),s.jsx(Ug,{})]}),s.jsx("div",{className:"footerWrapper",children:s.jsx(kg,{})}),s.jsx(jg,{})]})]});Am.createRoot(document.getElementById("root")).render(s.jsx(s.Fragment,{children:s.jsx(Wg,{})}));
