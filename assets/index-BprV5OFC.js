(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function cd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},Li=[],er=()=>{},L0=()=>!1,Pc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ud=t=>t.startsWith("onUpdate:"),St=Object.assign,hd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},M0=Object.prototype.hasOwnProperty,qe=(t,e)=>M0.call(t,e),be=Array.isArray,Mi=t=>Rc(t)==="[object Map]",kg=t=>Rc(t)==="[object Set]",Ae=t=>typeof t=="function",wt=t=>typeof t=="string",Dr=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",xg=t=>(nt(t)||Ae(t))&&Ae(t.then)&&Ae(t.catch),Og=Object.prototype.toString,Rc=t=>Og.call(t),F0=t=>Rc(t).slice(8,-1),Dg=t=>Rc(t)==="[object Object]",dd=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bo=cd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},U0=/-(\w)/g,An=Sc(t=>t.replace(U0,(e,n)=>n?n.toUpperCase():"")),B0=/\B([A-Z])/g,ri=Sc(t=>t.replace(B0,"-$1").toLowerCase()),kc=Sc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bu=Sc(t=>t?`on${kc(t)}`:""),ss=(t,e)=>!Object.is(t,e),Ml=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ng=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_h=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qf;const xc=()=>Qf||(Qf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fd(t){if(be(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=wt(r)?H0(r):fd(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(wt(t)||nt(t))return t}const $0=/;(?![^(]*\))/g,j0=/:([^]+)/,q0=/\/\*[^]*?\*\//g;function H0(t){const e={};return t.replace(q0,"").split($0).forEach(n=>{if(n){const r=n.split(j0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pd(t){let e="";if(wt(t))e=t;else if(be(t))for(let n=0;n<t.length;n++){const r=pd(t[n]);r&&(e+=r+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const z0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W0=cd(z0);function Vg(t){return!!t||t===""}const Lg=t=>!!(t&&t.__v_isRef===!0),Ar=t=>wt(t)?t:t==null?"":be(t)||nt(t)&&(t.toString===Og||!Ae(t.toString))?Lg(t)?Ar(t.value):JSON.stringify(t,Mg,2):String(t),Mg=(t,e)=>Lg(e)?Mg(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$u(r,i)+" =>"]=s,n),{})}:kg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$u(n))}:Dr(e)?$u(e):nt(e)&&!be(e)&&!Dg(e)?String(e):e,$u=(t,e="")=>{var n;return Dr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class Fg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function K0(t){return new Fg(t)}function G0(){return mn}let Xe;const ju=new WeakSet;class Ug{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ju.has(this)&&(ju.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$g(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yf(this),jg(this);const e=Xe,n=Nn;Xe=this,Nn=!0;try{return this.fn()}finally{qg(this),Xe=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yd(e);this.deps=this.depsTail=void 0,Yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ju.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vh(this)&&this.run()}get dirty(){return vh(this)}}let Bg=0,$o,jo;function $g(t,e=!1){if(t.flags|=8,e){t.next=jo,jo=t;return}t.next=$o,$o=t}function md(){Bg++}function gd(){if(--Bg>0)return;if(jo){let e=jo;for(jo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$o;){let e=$o;for($o=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function jg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yd(r),Q0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function vh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Hg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ea))return;t.globalVersion=ea;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vh(t)){t.flags&=-3;return}const n=Xe,r=Nn;Xe=t,Nn=!0;try{jg(t);const s=t.fn(t._value);(e.version===0||ss(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Xe=n,Nn=r,qg(t),t.flags&=-3}}function yd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Q0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const zg=[];function fs(){zg.push(Nn),Nn=!1}function ps(){const t=zg.pop();Nn=t===void 0?!0:t}function Yf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Xe;Xe=void 0;try{e()}finally{Xe=n}}}let ea=0;class Y0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Xe||!Nn||Xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Xe)n=this.activeLink=new Y0(Xe,this),Xe.deps?(n.prevDep=Xe.depsTail,Xe.depsTail.nextDep=n,Xe.depsTail=n):Xe.deps=Xe.depsTail=n,Wg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Xe.depsTail,n.nextDep=void 0,Xe.depsTail.nextDep=n,Xe.depsTail=n,Xe.deps===n&&(Xe.deps=r)}return n}trigger(e){this.version++,ea++,this.notify(e)}notify(e){md();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gd()}}}function Wg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const bh=new WeakMap,Us=Symbol(""),Eh=Symbol(""),ta=Symbol("");function qt(t,e,n){if(Nn&&Xe){let r=bh.get(t);r||bh.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new wd),s.map=r,s.key=n),s.track()}}function vr(t,e,n,r,s,i){const o=bh.get(t);if(!o){ea++;return}const l=c=>{c&&c.trigger()};if(md(),e==="clear")o.forEach(l);else{const c=be(t),f=c&&dd(n);if(c&&n==="length"){const p=Number(r);o.forEach((y,_)=>{(_==="length"||_===ta||!Dr(_)&&_>=p)&&l(y)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),f&&l(o.get(ta)),e){case"add":c?f&&l(o.get("length")):(l(o.get(Us)),Mi(t)&&l(o.get(Eh)));break;case"delete":c||(l(o.get(Us)),Mi(t)&&l(o.get(Eh)));break;case"set":Mi(t)&&l(o.get(Us));break}}gd()}function Ri(t){const e=je(t);return e===t?e:(qt(e,"iterate",ta),In(t)?e:e.map(Ht))}function Oc(t){return qt(t=je(t),"iterate",ta),t}const X0={__proto__:null,[Symbol.iterator](){return qu(this,Symbol.iterator,Ht)},concat(...t){return Ri(this).concat(...t.map(e=>be(e)?Ri(e):e))},entries(){return qu(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return yr(this,"every",t,e,void 0,arguments)},filter(t,e){return yr(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return yr(this,"find",t,e,Ht,arguments)},findIndex(t,e){return yr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yr(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return yr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hu(this,"includes",t)},indexOf(...t){return Hu(this,"indexOf",t)},join(t){return Ri(this).join(t)},lastIndexOf(...t){return Hu(this,"lastIndexOf",t)},map(t,e){return yr(this,"map",t,e,void 0,arguments)},pop(){return Ro(this,"pop")},push(...t){return Ro(this,"push",t)},reduce(t,...e){return Xf(this,"reduce",t,e)},reduceRight(t,...e){return Xf(this,"reduceRight",t,e)},shift(){return Ro(this,"shift")},some(t,e){return yr(this,"some",t,e,void 0,arguments)},splice(...t){return Ro(this,"splice",t)},toReversed(){return Ri(this).toReversed()},toSorted(t){return Ri(this).toSorted(t)},toSpliced(...t){return Ri(this).toSpliced(...t)},unshift(...t){return Ro(this,"unshift",t)},values(){return qu(this,"values",Ht)}};function qu(t,e,n){const r=Oc(t),s=r[e]();return r!==t&&!In(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const J0=Array.prototype;function yr(t,e,n,r,s,i){const o=Oc(t),l=o!==t&&!In(t),c=o[e];if(c!==J0[e]){const y=c.apply(t,i);return l?Ht(y):y}let f=n;o!==t&&(l?f=function(y,_){return n.call(this,Ht(y),_,t)}:n.length>2&&(f=function(y,_){return n.call(this,y,_,t)}));const p=c.call(o,f,r);return l&&s?s(p):p}function Xf(t,e,n,r){const s=Oc(t);let i=n;return s!==t&&(In(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Ht(l),c,t)}),s[e](i,...r)}function Hu(t,e,n){const r=je(t);qt(r,"iterate",ta);const s=r[e](...n);return(s===-1||s===!1)&&bd(n[0])?(n[0]=je(n[0]),r[e](...n)):s}function Ro(t,e,n=[]){fs(),md();const r=je(t)[e].apply(t,n);return gd(),ps(),r}const Z0=cd("__proto__,__v_isRef,__isVue"),Kg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr));function eE(t){Dr(t)||(t=String(t));const e=je(this);return qt(e,"has",t),e.hasOwnProperty(t)}class Gg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uE:Jg:i?Xg:Yg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=be(e);if(!s){let c;if(o&&(c=X0[n]))return c;if(n==="hasOwnProperty")return eE}const l=Reflect.get(e,n,Gt(e)?e:r);return(Dr(n)?Kg.has(n):Z0(n))||(s||qt(e,"get",n),i)?l:Gt(l)?o&&dd(n)?l:l.value:nt(l)?s?ey(l):Dc(l):l}}class Qg extends Gg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=zs(i);if(!In(r)&&!zs(r)&&(i=je(i),r=je(r)),!be(e)&&Gt(i)&&!Gt(r))return c?!1:(i.value=r,!0)}const o=be(e)&&dd(n)?Number(n)<e.length:qe(e,n),l=Reflect.set(e,n,r,Gt(e)?e:s);return e===je(s)&&(o?ss(r,i)&&vr(e,"set",n,r):vr(e,"add",n,r)),l}deleteProperty(e,n){const r=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dr(n)||!Kg.has(n))&&qt(e,"has",n),r}ownKeys(e){return qt(e,"iterate",be(e)?"length":Us),Reflect.ownKeys(e)}}class tE extends Gg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nE=new Qg,rE=new tE,sE=new Qg(!0);const Th=t=>t,Al=t=>Reflect.getPrototypeOf(t);function iE(t,e,n){return function(...r){const s=this.__v_raw,i=je(s),o=Mi(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),p=n?Th:e?Ih:Ht;return!e&&qt(i,"iterate",c?Eh:Us),{next(){const{value:y,done:_}=f.next();return _?{value:y,done:_}:{value:l?[p(y[0]),p(y[1])]:p(y),done:_}},[Symbol.iterator](){return this}}}}function Cl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oE(t,e){const n={get(s){const i=this.__v_raw,o=je(i),l=je(s);t||(ss(s,l)&&qt(o,"get",s),qt(o,"get",l));const{has:c}=Al(o),f=e?Th:t?Ih:Ht;if(c.call(o,s))return f(i.get(s));if(c.call(o,l))return f(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&qt(je(s),"iterate",Us),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=je(i),l=je(s);return t||(ss(s,l)&&qt(o,"has",s),qt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=je(l),f=e?Th:t?Ih:Ht;return!t&&qt(c,"iterate",Us),l.forEach((p,y)=>s.call(i,f(p),f(y),o))}};return St(n,t?{add:Cl("add"),set:Cl("set"),delete:Cl("delete"),clear:Cl("clear")}:{add(s){!e&&!In(s)&&!zs(s)&&(s=je(s));const i=je(this);return Al(i).has.call(i,s)||(i.add(s),vr(i,"add",s,s)),this},set(s,i){!e&&!In(i)&&!zs(i)&&(i=je(i));const o=je(this),{has:l,get:c}=Al(o);let f=l.call(o,s);f||(s=je(s),f=l.call(o,s));const p=c.call(o,s);return o.set(s,i),f?ss(i,p)&&vr(o,"set",s,i):vr(o,"add",s,i),this},delete(s){const i=je(this),{has:o,get:l}=Al(i);let c=o.call(i,s);c||(s=je(s),c=o.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return c&&vr(i,"delete",s,void 0),f},clear(){const s=je(this),i=s.size!==0,o=s.clear();return i&&vr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=iE(s,t,e)}),n}function _d(t,e){const n=oE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(qe(n,s)&&s in r?n:r,s,i)}const aE={get:_d(!1,!1)},lE={get:_d(!1,!0)},cE={get:_d(!0,!1)};const Yg=new WeakMap,Xg=new WeakMap,Jg=new WeakMap,uE=new WeakMap;function hE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dE(t){return t.__v_skip||!Object.isExtensible(t)?0:hE(F0(t))}function Dc(t){return zs(t)?t:vd(t,!1,nE,aE,Yg)}function Zg(t){return vd(t,!1,sE,lE,Xg)}function ey(t){return vd(t,!0,rE,cE,Jg)}function vd(t,e,n,r,s){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=dE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Fi(t){return zs(t)?Fi(t.__v_raw):!!(t&&t.__v_isReactive)}function zs(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function bd(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function ty(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&Ng(t,"__v_skip",!0),t}const Ht=t=>nt(t)?Dc(t):t,Ih=t=>nt(t)?ey(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function Kt(t){return ny(t,!1)}function fE(t){return ny(t,!0)}function ny(t,e){return Gt(t)?t:new pE(t,e)}class pE{constructor(e,n){this.dep=new wd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||In(e)||zs(e);e=r?e:je(e),ss(e,n)&&(this._rawValue=e,this._value=r?e:Ht(e),this.dep.trigger())}}function Bs(t){return Gt(t)?t.value:t}const mE={get:(t,e,n)=>e==="__v_raw"?t:Bs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Gt(s)&&!Gt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ry(t){return Fi(t)?t:new Proxy(t,mE)}class gE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ea-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return $g(this,!0),!0}get value(){const e=this.dep.track();return Hg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yE(t,e,n=!1){let r,s;return Ae(t)?r=t:(r=t.get,s=t.set),new gE(r,s,n)}const Pl={},Jl=new WeakMap;let Vs;function wE(t,e=!1,n=Vs){if(n){let r=Jl.get(n);r||Jl.set(n,r=[]),r.push(t)}}function _E(t,e,n=Qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,f=W=>s?W:In(W)||s===!1||s===0?br(W,1):br(W);let p,y,_,b,D=!1,L=!1;if(Gt(t)?(y=()=>t.value,D=In(t)):Fi(t)?(y=()=>f(t),D=!0):be(t)?(L=!0,D=t.some(W=>Fi(W)||In(W)),y=()=>t.map(W=>{if(Gt(W))return W.value;if(Fi(W))return f(W);if(Ae(W))return c?c(W,2):W()})):Ae(t)?e?y=c?()=>c(t,2):t:y=()=>{if(_){fs();try{_()}finally{ps()}}const W=Vs;Vs=p;try{return c?c(t,3,[b]):t(b)}finally{Vs=W}}:y=er,e&&s){const W=y,me=s===!0?1/0:s;y=()=>br(W(),me)}const F=G0(),Y=()=>{p.stop(),F&&hd(F.effects,p)};if(i&&e){const W=e;e=(...me)=>{W(...me),Y()}}let G=L?new Array(t.length).fill(Pl):Pl;const Q=W=>{if(!(!(p.flags&1)||!p.dirty&&!W))if(e){const me=p.run();if(s||D||(L?me.some((_e,R)=>ss(_e,G[R])):ss(me,G))){_&&_();const _e=Vs;Vs=p;try{const R=[me,G===Pl?void 0:L&&G[0]===Pl?[]:G,b];c?c(e,3,R):e(...R),G=me}finally{Vs=_e}}}else p.run()};return l&&l(Q),p=new Ug(y),p.scheduler=o?()=>o(Q,!1):Q,b=W=>wE(W,!1,p),_=p.onStop=()=>{const W=Jl.get(p);if(W){if(c)c(W,4);else for(const me of W)me();Jl.delete(p)}},e?r?Q(!0):G=p.run():o?o(Q.bind(null,!0),!0):p.run(),Y.pause=p.pause.bind(p),Y.resume=p.resume.bind(p),Y.stop=Y,Y}function br(t,e=1/0,n){if(e<=0||!nt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Gt(t))br(t.value,e,n);else if(be(t))for(let r=0;r<t.length;r++)br(t[r],e,n);else if(kg(t)||Mi(t))t.forEach(r=>{br(r,e,n)});else if(Dg(t)){for(const r in t)br(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&br(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,r){try{return r?t(...r):t()}catch(s){Nc(s,e,n)}}function ar(t,e,n,r){if(Ae(t)){const s=wa(t,e,n,r);return s&&xg(s)&&s.catch(i=>{Nc(i,e,n)}),s}if(be(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ar(t[i],e,n,r));return s}}function Nc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let y=0;y<p.length;y++)if(p[y](t,c,f)===!1)return}l=l.parent}if(i){fs(),wa(i,null,10,[t,c,f]),ps();return}}vE(t,n,s,r,o)}function vE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const rn=[];let Kn=-1;const Ui=[];let Kr=null,Si=0;const sy=Promise.resolve();let Zl=null;function iy(t){const e=Zl||sy;return t?e.then(this?t.bind(this):t):e}function bE(t){let e=Kn+1,n=rn.length;for(;e<n;){const r=e+n>>>1,s=rn[r],i=na(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ed(t){if(!(t.flags&1)){const e=na(t),n=rn[rn.length-1];!n||!(t.flags&2)&&e>=na(n)?rn.push(t):rn.splice(bE(e),0,t),t.flags|=1,oy()}}function oy(){Zl||(Zl=sy.then(ly))}function EE(t){be(t)?Ui.push(...t):Kr&&t.id===-1?Kr.splice(Si+1,0,t):t.flags&1||(Ui.push(t),t.flags|=1),oy()}function Jf(t,e,n=Kn+1){for(;n<rn.length;n++){const r=rn[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;rn.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ay(t){if(Ui.length){const e=[...new Set(Ui)].sort((n,r)=>na(n)-na(r));if(Ui.length=0,Kr){Kr.push(...e);return}for(Kr=e,Si=0;Si<Kr.length;Si++){const n=Kr[Si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kr=null,Si=0}}const na=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ly(t){try{for(Kn=0;Kn<rn.length;Kn++){const e=rn[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<rn.length;Kn++){const e=rn[Kn];e&&(e.flags&=-2)}Kn=-1,rn.length=0,ay(),Zl=null,(rn.length||Ui.length)&&ly()}}let Vt=null,cy=null;function ec(t){const e=Vt;return Vt=t,cy=t&&t.type.__scopeId||null,e}function on(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ap(-1);const i=ec(e);let o;try{o=t(...s)}finally{ec(i),r._d&&ap(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(t,e){if(Vt===null)return t;const n=Bc(Vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Qe]=e[s];i&&(Ae(i)&&(i={mounted:i,updated:i}),i.deep&&br(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Os(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(fs(),ar(c,n,8,[t.el,l,t,e]),ps())}}const TE=Symbol("_vte"),IE=t=>t.__isTeleport;function Td(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Td(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function uy(t,e){return Ae(t)?St({name:t.name},e,{setup:t}):t}function hy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ah(t,e,n,r,s=!1){if(be(t)){t.forEach((D,L)=>Ah(D,e&&(be(e)?e[L]:e),n,r,s));return}if(Bi(r)&&!s)return;const i=r.shapeFlag&4?Bc(r.component):r.el,o=s?null:i,{i:l,r:c}=t,f=e&&e.r,p=l.refs===Qe?l.refs={}:l.refs,y=l.setupState,_=je(y),b=y===Qe?()=>!1:D=>qe(_,D);if(f!=null&&f!==c&&(wt(f)?(p[f]=null,b(f)&&(y[f]=null)):Gt(f)&&(f.value=null)),Ae(c))wa(c,l,12,[o,p]);else{const D=wt(c),L=Gt(c);if(D||L){const F=()=>{if(t.f){const Y=D?b(c)?y[c]:p[c]:c.value;s?be(Y)&&hd(Y,i):be(Y)?Y.includes(i)||Y.push(i):D?(p[c]=[i],b(c)&&(y[c]=p[c])):(c.value=[i],t.k&&(p[t.k]=c.value))}else D?(p[c]=o,b(c)&&(y[c]=o)):L&&(c.value=o,t.k&&(p[t.k]=o))};o?(F.id=-1,pn(F,n)):F()}}}xc().requestIdleCallback;xc().cancelIdleCallback;const Bi=t=>!!t.type.__asyncLoader,dy=t=>t.type.__isKeepAlive;function AE(t,e){fy(t,"a",e)}function CE(t,e){fy(t,"da",e)}function fy(t,e,n=Wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dy(s.parent.vnode)&&PE(r,e,n,s),s=s.parent}}function PE(t,e,n,r){const s=Vc(e,t,r,!0);py(()=>{hd(r[e],s)},n)}function Vc(t,e,n=Wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fs();const l=_a(n),c=ar(e,n,t,o);return l(),ps(),c});return r?s.unshift(i):s.push(i),i}}const Nr=t=>(e,n=Wt)=>{(!ia||t==="sp")&&Vc(t,(...r)=>e(...r),n)},RE=Nr("bm"),Lc=Nr("m"),SE=Nr("bu"),kE=Nr("u"),xE=Nr("bum"),py=Nr("um"),OE=Nr("sp"),DE=Nr("rtg"),NE=Nr("rtc");function VE(t,e=Wt){Vc("ec",t,e)}const LE="components";function my(t,e){return FE(LE,t,!0,e)||t}const ME=Symbol.for("v-ndc");function FE(t,e,n=!0,r=!1){const s=Vt||Wt;if(s){const i=s.type;{const l=AT(i,!1);if(l&&(l===e||l===An(e)||l===kc(An(e))))return i}const o=Zf(s[t]||i[t],e)||Zf(s.appContext[t],e);return!o&&r?i:o}}function Zf(t,e){return t&&(t[e]||t[An(e)]||t[kc(An(e))])}function gy(t,e,n,r){let s;const i=n,o=be(t);if(o||wt(t)){const l=o&&Fi(t);let c=!1;l&&(c=!In(t),t=Oc(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?Ht(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(nt(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const p=l[c];s[c]=e(t[p],p,c,i)}}else s=[];return s}function yy(t,e,n={},r,s){if(Vt.ce||Vt.parent&&Bi(Vt.parent)&&Vt.parent.ce)return Je(),Gi(dt,null,[ve("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Je();const o=i&&wy(i(n)),l=n.key||o&&o.key,c=Gi(dt,{key:(l&&!Dr(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function wy(t){return t.some(e=>sa(e)?!(e.type===cs||e.type===dt&&!wy(e.children)):!0)?t:null}const Ch=t=>t?Fy(t)?Bc(t):Ch(t.parent):null,qo=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ch(t.parent),$root:t=>Ch(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Id(t),$forceUpdate:t=>t.f||(t.f=()=>{Ed(t.update)}),$nextTick:t=>t.n||(t.n=iy.bind(t.proxy)),$watch:t=>iT.bind(t)}),zu=(t,e)=>t!==Qe&&!t.__isScriptSetup&&qe(t,e),UE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zu(r,e))return o[e]=1,r[e];if(s!==Qe&&qe(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&qe(f,e))return o[e]=3,i[e];if(n!==Qe&&qe(n,e))return o[e]=4,n[e];Ph&&(o[e]=0)}}const p=qo[e];let y,_;if(p)return e==="$attrs"&&qt(t.attrs,"get",""),p(t);if((y=l.__cssModules)&&(y=y[e]))return y;if(n!==Qe&&qe(n,e))return o[e]=4,n[e];if(_=c.config.globalProperties,qe(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zu(s,e)?(s[e]=n,!0):r!==Qe&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Qe&&qe(t,o)||zu(e,o)||(l=i[0])&&qe(l,o)||qe(r,o)||qe(qo,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ep(t){return be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ph=!0;function BE(t){const e=Id(t),n=t.proxy,r=t.ctx;Ph=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:f,created:p,beforeMount:y,mounted:_,beforeUpdate:b,updated:D,activated:L,deactivated:F,beforeDestroy:Y,beforeUnmount:G,destroyed:Q,unmounted:W,render:me,renderTracked:_e,renderTriggered:R,errorCaptured:I,serverPrefetch:P,expose:S,inheritAttrs:k,components:v,directives:C,filters:Me}=e;if(f&&$E(f,r,null),o)for(const ie in o){const Ce=o[ie];Ae(Ce)&&(r[ie]=Ce.bind(n))}if(s){const ie=s.call(n,n);nt(ie)&&(t.data=Dc(ie))}if(Ph=!0,i)for(const ie in i){const Ce=i[ie],Ft=Ae(Ce)?Ce.bind(n,n):Ae(Ce.get)?Ce.get.bind(n,n):er,Ut=!Ae(Ce)&&Ae(Ce.set)?Ce.set.bind(n):er,Xt=On({get:Ft,set:Ut});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ye=>Xt.value=Ye})}if(l)for(const ie in l)_y(l[ie],r,n,ie);if(c){const ie=Ae(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(Ce=>{Fl(Ce,ie[Ce])})}p&&tp(p,t,"c");function Le(ie,Ce){be(Ce)?Ce.forEach(Ft=>ie(Ft.bind(n))):Ce&&ie(Ce.bind(n))}if(Le(RE,y),Le(Lc,_),Le(SE,b),Le(kE,D),Le(AE,L),Le(CE,F),Le(VE,I),Le(NE,_e),Le(DE,R),Le(xE,G),Le(py,W),Le(OE,P),be(S))if(S.length){const ie=t.exposed||(t.exposed={});S.forEach(Ce=>{Object.defineProperty(ie,Ce,{get:()=>n[Ce],set:Ft=>n[Ce]=Ft})})}else t.exposed||(t.exposed={});me&&t.render===er&&(t.render=me),k!=null&&(t.inheritAttrs=k),v&&(t.components=v),C&&(t.directives=C),P&&hy(t)}function $E(t,e,n=er){be(t)&&(t=Rh(t));for(const r in t){const s=t[r];let i;nt(s)?"default"in s?i=tr(s.from||r,s.default,!0):i=tr(s.from||r):i=tr(s),Gt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tp(t,e,n){ar(be(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _y(t,e,n,r){let s=r.includes(".")?Dy(n,r):()=>n[r];if(wt(t)){const i=e[t];Ae(i)&&Ul(s,i)}else if(Ae(t))Ul(s,t.bind(n));else if(nt(t))if(be(t))t.forEach(i=>_y(i,e,n,r));else{const i=Ae(t.handler)?t.handler.bind(n):e[t.handler];Ae(i)&&Ul(s,i,t)}}function Id(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>tc(c,f,o,!0)),tc(c,e,o)),nt(e)&&i.set(e,c),c}function tc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&tc(t,i,n,!0),s&&s.forEach(o=>tc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=jE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const jE={data:np,props:rp,emits:rp,methods:Do,computed:Do,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Do,directives:Do,watch:HE,provide:np,inject:qE};function np(t,e){return e?t?function(){return St(Ae(t)?t.call(this,this):t,Ae(e)?e.call(this,this):e)}:e:t}function qE(t,e){return Do(Rh(t),Rh(e))}function Rh(t){if(be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nn(t,e){return t?[...new Set([].concat(t,e))]:e}function Do(t,e){return t?St(Object.create(null),t,e):e}function rp(t,e){return t?be(t)&&be(e)?[...new Set([...t,...e])]:St(Object.create(null),ep(t),ep(e??{})):e}function HE(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const r in e)n[r]=nn(t[r],e[r]);return n}function vy(){return{app:null,config:{isNativeTag:L0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zE=0;function WE(t,e){return function(r,s=null){Ae(r)||(r=St({},r)),s!=null&&!nt(s)&&(s=null);const i=vy(),o=new WeakSet,l=[];let c=!1;const f=i.app={_uid:zE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:PT,get config(){return i.config},set config(p){},use(p,...y){return o.has(p)||(p&&Ae(p.install)?(o.add(p),p.install(f,...y)):Ae(p)&&(o.add(p),p(f,...y))),f},mixin(p){return i.mixins.includes(p)||i.mixins.push(p),f},component(p,y){return y?(i.components[p]=y,f):i.components[p]},directive(p,y){return y?(i.directives[p]=y,f):i.directives[p]},mount(p,y,_){if(!c){const b=f._ceVNode||ve(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),y&&e?e(b,p):t(b,p,_),c=!0,f._container=p,p.__vue_app__=f,Bc(b.component)}},onUnmount(p){l.push(p)},unmount(){c&&(ar(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(p,y){return i.provides[p]=y,f},runWithContext(p){const y=$i;$i=f;try{return p()}finally{$i=y}}};return f}}let $i=null;function Fl(t,e){if(Wt){let n=Wt.provides;const r=Wt.parent&&Wt.parent.provides;r===n&&(n=Wt.provides=Object.create(r)),n[t]=e}}function tr(t,e,n=!1){const r=Wt||Vt;if(r||$i){const s=$i?$i._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ae(e)?e.call(r&&r.proxy):e}}const by={},Ey=()=>Object.create(by),Ty=t=>Object.getPrototypeOf(t)===by;function KE(t,e,n,r=!1){const s={},i=Ey();t.propsDefaults=Object.create(null),Iy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function GE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=je(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let y=0;y<p.length;y++){let _=p[y];if(Mc(t.emitsOptions,_))continue;const b=e[_];if(c)if(qe(i,_))b!==i[_]&&(i[_]=b,f=!0);else{const D=An(_);s[D]=Sh(c,l,D,b,t,!1)}else b!==i[_]&&(i[_]=b,f=!0)}}}else{Iy(t,e,s,i)&&(f=!0);let p;for(const y in l)(!e||!qe(e,y)&&((p=ri(y))===y||!qe(e,p)))&&(c?n&&(n[y]!==void 0||n[p]!==void 0)&&(s[y]=Sh(c,l,y,void 0,t,!0)):delete s[y]);if(i!==l)for(const y in i)(!e||!qe(e,y))&&(delete i[y],f=!0)}f&&vr(t.attrs,"set","")}function Iy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Bo(c))continue;const f=e[c];let p;s&&qe(s,p=An(c))?!i||!i.includes(p)?n[p]=f:(l||(l={}))[p]=f:Mc(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=je(n),f=l||Qe;for(let p=0;p<i.length;p++){const y=i[p];n[y]=Sh(s,c,y,f[y],t,!qe(f,y))}}return o}function Sh(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=qe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ae(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const p=_a(s);r=f[n]=c.call(null,e),p()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ri(n))&&(r=!0))}return r}const QE=new WeakMap;function Ay(t,e,n=!1){const r=n?QE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ae(t)){const p=y=>{c=!0;const[_,b]=Ay(y,e,!0);St(o,_),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!i&&!c)return nt(t)&&r.set(t,Li),Li;if(be(i))for(let p=0;p<i.length;p++){const y=An(i[p]);sp(y)&&(o[y]=Qe)}else if(i)for(const p in i){const y=An(p);if(sp(y)){const _=i[p],b=o[y]=be(_)||Ae(_)?{type:_}:St({},_),D=b.type;let L=!1,F=!0;if(be(D))for(let Y=0;Y<D.length;++Y){const G=D[Y],Q=Ae(G)&&G.name;if(Q==="Boolean"){L=!0;break}else Q==="String"&&(F=!1)}else L=Ae(D)&&D.name==="Boolean";b[0]=L,b[1]=F,(L||qe(b,"default"))&&l.push(y)}}const f=[o,l];return nt(t)&&r.set(t,f),f}function sp(t){return t[0]!=="$"&&!Bo(t)}const Cy=t=>t[0]==="_"||t==="$stable",Ad=t=>be(t)?t.map(Qn):[Qn(t)],YE=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>Ad(e(...s)),n);return r._c=!1,r},Py=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cy(s))continue;const i=t[s];if(Ae(i))e[s]=YE(s,i,r);else if(i!=null){const o=Ad(i);e[s]=()=>o}}},Ry=(t,e)=>{const n=Ad(e);t.slots.default=()=>n},Sy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},XE=(t,e,n)=>{const r=t.slots=Ey();if(t.vnode.shapeFlag&32){const s=e._;s?(Sy(r,e,n),n&&Ng(r,"_",s,!0)):Py(e,r)}else e&&Ry(t,e)},JE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Sy(s,e,n):(i=!e.$stable,Py(e,s)),o=e}else e&&(Ry(t,e),o={default:1});if(i)for(const l in s)!Cy(l)&&o[l]==null&&delete s[l]},pn=dT;function ZE(t){return eT(t)}function eT(t,e){const n=xc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:f,setElementText:p,parentNode:y,nextSibling:_,setScopeId:b=er,insertStaticContent:D}=t,L=(E,A,O,j=null,B=null,q=null,X=void 0,J=null,ee=!!A.dynamicChildren)=>{if(E===A)return;E&&!So(E,A)&&(j=U(E),Ye(E,B,q,!0),E=null),A.patchFlag===-2&&(ee=!1,A.dynamicChildren=null);const{type:$,ref:ue,shapeFlag:se}=A;switch($){case Fc:F(E,A,O,j);break;case cs:Y(E,A,O,j);break;case Bl:E==null&&G(A,O,j,X);break;case dt:v(E,A,O,j,B,q,X,J,ee);break;default:se&1?me(E,A,O,j,B,q,X,J,ee):se&6?C(E,A,O,j,B,q,X,J,ee):(se&64||se&128)&&$.process(E,A,O,j,B,q,X,J,ee,oe)}ue!=null&&B&&Ah(ue,E&&E.ref,q,A||E,!A)},F=(E,A,O,j)=>{if(E==null)r(A.el=l(A.children),O,j);else{const B=A.el=E.el;A.children!==E.children&&f(B,A.children)}},Y=(E,A,O,j)=>{E==null?r(A.el=c(A.children||""),O,j):A.el=E.el},G=(E,A,O,j)=>{[E.el,E.anchor]=D(E.children,A,O,j,E.el,E.anchor)},Q=({el:E,anchor:A},O,j)=>{let B;for(;E&&E!==A;)B=_(E),r(E,O,j),E=B;r(A,O,j)},W=({el:E,anchor:A})=>{let O;for(;E&&E!==A;)O=_(E),s(E),E=O;s(A)},me=(E,A,O,j,B,q,X,J,ee)=>{A.type==="svg"?X="svg":A.type==="math"&&(X="mathml"),E==null?_e(A,O,j,B,q,X,J,ee):P(E,A,B,q,X,J,ee)},_e=(E,A,O,j,B,q,X,J)=>{let ee,$;const{props:ue,shapeFlag:se,transition:le,dirs:K}=E;if(ee=E.el=o(E.type,q,ue&&ue.is,ue),se&8?p(ee,E.children):se&16&&I(E.children,ee,null,j,B,Wu(E,q),X,J),K&&Os(E,null,j,"created"),R(ee,E,E.scopeId,X,j),ue){for(const Pe in ue)Pe!=="value"&&!Bo(Pe)&&i(ee,Pe,null,ue[Pe],q,j);"value"in ue&&i(ee,"value",null,ue.value,q),($=ue.onVnodeBeforeMount)&&Wn($,j,E)}K&&Os(E,null,j,"beforeMount");const ce=tT(B,le);ce&&le.beforeEnter(ee),r(ee,A,O),(($=ue&&ue.onVnodeMounted)||ce||K)&&pn(()=>{$&&Wn($,j,E),ce&&le.enter(ee),K&&Os(E,null,j,"mounted")},B)},R=(E,A,O,j,B)=>{if(O&&b(E,O),j)for(let q=0;q<j.length;q++)b(E,j[q]);if(B){let q=B.subTree;if(A===q||Vy(q.type)&&(q.ssContent===A||q.ssFallback===A)){const X=B.vnode;R(E,X,X.scopeId,X.slotScopeIds,B.parent)}}},I=(E,A,O,j,B,q,X,J,ee=0)=>{for(let $=ee;$<E.length;$++){const ue=E[$]=J?Gr(E[$]):Qn(E[$]);L(null,ue,A,O,j,B,q,X,J)}},P=(E,A,O,j,B,q,X)=>{const J=A.el=E.el;let{patchFlag:ee,dynamicChildren:$,dirs:ue}=A;ee|=E.patchFlag&16;const se=E.props||Qe,le=A.props||Qe;let K;if(O&&Ds(O,!1),(K=le.onVnodeBeforeUpdate)&&Wn(K,O,A,E),ue&&Os(A,E,O,"beforeUpdate"),O&&Ds(O,!0),(se.innerHTML&&le.innerHTML==null||se.textContent&&le.textContent==null)&&p(J,""),$?S(E.dynamicChildren,$,J,O,j,Wu(A,B),q):X||Ce(E,A,J,null,O,j,Wu(A,B),q,!1),ee>0){if(ee&16)k(J,se,le,O,B);else if(ee&2&&se.class!==le.class&&i(J,"class",null,le.class,B),ee&4&&i(J,"style",se.style,le.style,B),ee&8){const ce=A.dynamicProps;for(let Pe=0;Pe<ce.length;Pe++){const Se=ce[Pe],Ne=se[Se],xe=le[Se];(xe!==Ne||Se==="value")&&i(J,Se,Ne,xe,B,O)}}ee&1&&E.children!==A.children&&p(J,A.children)}else!X&&$==null&&k(J,se,le,O,B);((K=le.onVnodeUpdated)||ue)&&pn(()=>{K&&Wn(K,O,A,E),ue&&Os(A,E,O,"updated")},j)},S=(E,A,O,j,B,q,X)=>{for(let J=0;J<A.length;J++){const ee=E[J],$=A[J],ue=ee.el&&(ee.type===dt||!So(ee,$)||ee.shapeFlag&70)?y(ee.el):O;L(ee,$,ue,null,j,B,q,X,!0)}},k=(E,A,O,j,B)=>{if(A!==O){if(A!==Qe)for(const q in A)!Bo(q)&&!(q in O)&&i(E,q,A[q],null,B,j);for(const q in O){if(Bo(q))continue;const X=O[q],J=A[q];X!==J&&q!=="value"&&i(E,q,J,X,B,j)}"value"in O&&i(E,"value",A.value,O.value,B)}},v=(E,A,O,j,B,q,X,J,ee)=>{const $=A.el=E?E.el:l(""),ue=A.anchor=E?E.anchor:l("");let{patchFlag:se,dynamicChildren:le,slotScopeIds:K}=A;K&&(J=J?J.concat(K):K),E==null?(r($,O,j),r(ue,O,j),I(A.children||[],O,ue,B,q,X,J,ee)):se>0&&se&64&&le&&E.dynamicChildren?(S(E.dynamicChildren,le,O,B,q,X,J),(A.key!=null||B&&A===B.subTree)&&ky(E,A,!0)):Ce(E,A,O,ue,B,q,X,J,ee)},C=(E,A,O,j,B,q,X,J,ee)=>{A.slotScopeIds=J,E==null?A.shapeFlag&512?B.ctx.activate(A,O,j,X,ee):Me(A,O,j,B,q,X,ee):Tt(E,A,ee)},Me=(E,A,O,j,B,q,X)=>{const J=E.component=vT(E,j,B);if(dy(E)&&(J.ctx.renderer=oe),bT(J,!1,X),J.asyncDep){if(B&&B.registerDep(J,Le,X),!E.el){const ee=J.subTree=ve(cs);Y(null,ee,A,O)}}else Le(J,E,A,O,B,q,X)},Tt=(E,A,O)=>{const j=A.component=E.component;if(uT(E,A,O))if(j.asyncDep&&!j.asyncResolved){ie(j,A,O);return}else j.next=A,j.update();else A.el=E.el,j.vnode=A},Le=(E,A,O,j,B,q,X)=>{const J=()=>{if(E.isMounted){let{next:se,bu:le,u:K,parent:ce,vnode:Pe}=E;{const at=xy(E);if(at){se&&(se.el=Pe.el,ie(E,se,X)),at.asyncDep.then(()=>{E.isUnmounted||J()});return}}let Se=se,Ne;Ds(E,!1),se?(se.el=Pe.el,ie(E,se,X)):se=Pe,le&&Ml(le),(Ne=se.props&&se.props.onVnodeBeforeUpdate)&&Wn(Ne,ce,se,Pe),Ds(E,!0);const xe=Ku(E),mt=E.subTree;E.subTree=xe,L(mt,xe,y(mt.el),U(mt),E,B,q),se.el=xe.el,Se===null&&hT(E,xe.el),K&&pn(K,B),(Ne=se.props&&se.props.onVnodeUpdated)&&pn(()=>Wn(Ne,ce,se,Pe),B)}else{let se;const{el:le,props:K}=A,{bm:ce,m:Pe,parent:Se,root:Ne,type:xe}=E,mt=Bi(A);if(Ds(E,!1),ce&&Ml(ce),!mt&&(se=K&&K.onVnodeBeforeMount)&&Wn(se,Se,A),Ds(E,!0),le&&Be){const at=()=>{E.subTree=Ku(E),Be(le,E.subTree,E,B,null)};mt&&xe.__asyncHydrate?xe.__asyncHydrate(le,E,at):at()}else{Ne.ce&&Ne.ce._injectChildStyle(xe);const at=E.subTree=Ku(E);L(null,at,O,j,E,B,q),A.el=at.el}if(Pe&&pn(Pe,B),!mt&&(se=K&&K.onVnodeMounted)){const at=A;pn(()=>Wn(se,Se,at),B)}(A.shapeFlag&256||Se&&Bi(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&pn(E.a,B),E.isMounted=!0,A=O=j=null}};E.scope.on();const ee=E.effect=new Ug(J);E.scope.off();const $=E.update=ee.run.bind(ee),ue=E.job=ee.runIfDirty.bind(ee);ue.i=E,ue.id=E.uid,ee.scheduler=()=>Ed(ue),Ds(E,!0),$()},ie=(E,A,O)=>{A.component=E;const j=E.vnode.props;E.vnode=A,E.next=null,GE(E,A.props,j,O),JE(E,A.children,O),fs(),Jf(E),ps()},Ce=(E,A,O,j,B,q,X,J,ee=!1)=>{const $=E&&E.children,ue=E?E.shapeFlag:0,se=A.children,{patchFlag:le,shapeFlag:K}=A;if(le>0){if(le&128){Ut($,se,O,j,B,q,X,J,ee);return}else if(le&256){Ft($,se,O,j,B,q,X,J,ee);return}}K&8?(ue&16&&Bt($,B,q),se!==$&&p(O,se)):ue&16?K&16?Ut($,se,O,j,B,q,X,J,ee):Bt($,B,q,!0):(ue&8&&p(O,""),K&16&&I(se,O,j,B,q,X,J,ee))},Ft=(E,A,O,j,B,q,X,J,ee)=>{E=E||Li,A=A||Li;const $=E.length,ue=A.length,se=Math.min($,ue);let le;for(le=0;le<se;le++){const K=A[le]=ee?Gr(A[le]):Qn(A[le]);L(E[le],K,O,null,B,q,X,J,ee)}$>ue?Bt(E,B,q,!0,!1,se):I(A,O,j,B,q,X,J,ee,se)},Ut=(E,A,O,j,B,q,X,J,ee)=>{let $=0;const ue=A.length;let se=E.length-1,le=ue-1;for(;$<=se&&$<=le;){const K=E[$],ce=A[$]=ee?Gr(A[$]):Qn(A[$]);if(So(K,ce))L(K,ce,O,null,B,q,X,J,ee);else break;$++}for(;$<=se&&$<=le;){const K=E[se],ce=A[le]=ee?Gr(A[le]):Qn(A[le]);if(So(K,ce))L(K,ce,O,null,B,q,X,J,ee);else break;se--,le--}if($>se){if($<=le){const K=le+1,ce=K<ue?A[K].el:j;for(;$<=le;)L(null,A[$]=ee?Gr(A[$]):Qn(A[$]),O,ce,B,q,X,J,ee),$++}}else if($>le)for(;$<=se;)Ye(E[$],B,q,!0),$++;else{const K=$,ce=$,Pe=new Map;for($=ce;$<=le;$++){const It=A[$]=ee?Gr(A[$]):Qn(A[$]);It.key!=null&&Pe.set(It.key,$)}let Se,Ne=0;const xe=le-ce+1;let mt=!1,at=0;const st=new Array(xe);for($=0;$<xe;$++)st[$]=0;for($=K;$<=se;$++){const It=E[$];if(Ne>=xe){Ye(It,B,q,!0);continue}let Jt;if(It.key!=null)Jt=Pe.get(It.key);else for(Se=ce;Se<=le;Se++)if(st[Se-ce]===0&&So(It,A[Se])){Jt=Se;break}Jt===void 0?Ye(It,B,q,!0):(st[Jt-ce]=$+1,Jt>=at?at=Jt:mt=!0,L(It,A[Jt],O,null,B,q,X,J,ee),Ne++)}const Lr=mt?nT(st):Li;for(Se=Lr.length-1,$=xe-1;$>=0;$--){const It=ce+$,Jt=A[It],Un=It+1<ue?A[It+1].el:j;st[$]===0?L(null,Jt,O,Un,B,q,X,J,ee):mt&&(Se<0||$!==Lr[Se]?Xt(Jt,O,Un,2):Se--)}}},Xt=(E,A,O,j,B=null)=>{const{el:q,type:X,transition:J,children:ee,shapeFlag:$}=E;if($&6){Xt(E.component.subTree,A,O,j);return}if($&128){E.suspense.move(A,O,j);return}if($&64){X.move(E,A,O,oe);return}if(X===dt){r(q,A,O);for(let se=0;se<ee.length;se++)Xt(ee[se],A,O,j);r(E.anchor,A,O);return}if(X===Bl){Q(E,A,O);return}if(j!==2&&$&1&&J)if(j===0)J.beforeEnter(q),r(q,A,O),pn(()=>J.enter(q),B);else{const{leave:se,delayLeave:le,afterLeave:K}=J,ce=()=>r(q,A,O),Pe=()=>{se(q,()=>{ce(),K&&K()})};le?le(q,ce,Pe):Pe()}else r(q,A,O)},Ye=(E,A,O,j=!1,B=!1)=>{const{type:q,props:X,ref:J,children:ee,dynamicChildren:$,shapeFlag:ue,patchFlag:se,dirs:le,cacheIndex:K}=E;if(se===-2&&(B=!1),J!=null&&Ah(J,null,O,E,!0),K!=null&&(A.renderCache[K]=void 0),ue&256){A.ctx.deactivate(E);return}const ce=ue&1&&le,Pe=!Bi(E);let Se;if(Pe&&(Se=X&&X.onVnodeBeforeUnmount)&&Wn(Se,A,E),ue&6)vt(E.component,O,j);else{if(ue&128){E.suspense.unmount(O,j);return}ce&&Os(E,null,A,"beforeUnmount"),ue&64?E.type.remove(E,A,O,oe,j):$&&!$.hasOnce&&(q!==dt||se>0&&se&64)?Bt($,A,O,!1,!0):(q===dt&&se&384||!B&&ue&16)&&Bt(ee,A,O),j&&Ke(E)}(Pe&&(Se=X&&X.onVnodeUnmounted)||ce)&&pn(()=>{Se&&Wn(Se,A,E),ce&&Os(E,null,A,"unmounted")},O)},Ke=E=>{const{type:A,el:O,anchor:j,transition:B}=E;if(A===dt){pt(O,j);return}if(A===Bl){W(E);return}const q=()=>{s(O),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:X,delayLeave:J}=B,ee=()=>X(O,q);J?J(E.el,q,ee):ee()}else q()},pt=(E,A)=>{let O;for(;E!==A;)O=_(E),s(E),E=O;s(A)},vt=(E,A,O)=>{const{bum:j,scope:B,job:q,subTree:X,um:J,m:ee,a:$}=E;ip(ee),ip($),j&&Ml(j),B.stop(),q&&(q.flags|=8,Ye(X,E,A,O)),J&&pn(J,A),pn(()=>{E.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Bt=(E,A,O,j=!1,B=!1,q=0)=>{for(let X=q;X<E.length;X++)Ye(E[X],A,O,j,B)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=_(E.anchor||E.el),O=A&&A[TE];return O?_(O):A};let re=!1;const ne=(E,A,O)=>{E==null?A._vnode&&Ye(A._vnode,null,null,!0):L(A._vnode||null,E,A,null,null,null,O),A._vnode=E,re||(re=!0,Jf(),ay(),re=!1)},oe={p:L,um:Ye,m:Xt,r:Ke,mt:Me,mc:I,pc:Ce,pbc:S,n:U,o:t};let Re,Be;return{render:ne,hydrate:Re,createApp:WE(ne,Re)}}function Wu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function tT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ky(t,e,n=!1){const r=t.children,s=e.children;if(be(r)&&be(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Gr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ky(o,l)),l.type===Fc&&(l.el=o.el)}}function nT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<f?i=l+1:o=l;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function xy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xy(e)}function ip(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const rT=Symbol.for("v-scx"),sT=()=>tr(rT);function Ul(t,e,n){return Oy(t,e,n)}function Oy(t,e,n=Qe){const{immediate:r,deep:s,flush:i,once:o}=n,l=St({},n),c=e&&r||!e&&i!=="post";let f;if(ia){if(i==="sync"){const b=sT();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=er,b.resume=er,b.pause=er,b}}const p=Wt;l.call=(b,D,L)=>ar(b,p,D,L);let y=!1;i==="post"?l.scheduler=b=>{pn(b,p&&p.suspense)}:i!=="sync"&&(y=!0,l.scheduler=(b,D)=>{D?b():Ed(b)}),l.augmentJob=b=>{e&&(b.flags|=4),y&&(b.flags|=2,p&&(b.id=p.uid,b.i=p))};const _=_E(t,e,l);return ia&&(f?f.push(_):c&&_()),_}function iT(t,e,n){const r=this.proxy,s=wt(t)?t.includes(".")?Dy(r,t):()=>r[t]:t.bind(r,r);let i;Ae(e)?i=e:(i=e.handler,n=e);const o=_a(this),l=Oy(s,i.bind(r),n);return o(),l}function Dy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const oT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${ri(e)}Modifiers`];function aT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Qe;let s=n;const i=e.startsWith("update:"),o=i&&oT(r,e.slice(7));o&&(o.trim&&(s=n.map(p=>wt(p)?p.trim():p)),o.number&&(s=n.map(_h)));let l,c=r[l=Bu(e)]||r[l=Bu(An(e))];!c&&i&&(c=r[l=Bu(ri(e))]),c&&ar(c,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ar(f,t,6,s)}}function Ny(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ae(t)){const c=f=>{const p=Ny(f,e,!0);p&&(l=!0,St(o,p))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(nt(t)&&r.set(t,null),null):(be(i)?i.forEach(c=>o[c]=null):St(o,i),nt(t)&&r.set(t,o),o)}function Mc(t,e){return!t||!Pc(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,ri(e))||qe(t,e))}function Ku(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:f,renderCache:p,props:y,data:_,setupState:b,ctx:D,inheritAttrs:L}=t,F=ec(t);let Y,G;try{if(n.shapeFlag&4){const W=s||r,me=W;Y=Qn(f.call(me,W,p,y,b,_,D)),G=l}else{const W=e;Y=Qn(W.length>1?W(y,{attrs:l,slots:o,emit:c}):W(y,null)),G=e.props?l:lT(l)}}catch(W){Ho.length=0,Nc(W,t,1),Y=ve(cs)}let Q=Y;if(G&&L!==!1){const W=Object.keys(G),{shapeFlag:me}=Q;W.length&&me&7&&(i&&W.some(ud)&&(G=cT(G,i)),Q=Qi(Q,G,!1,!0))}return n.dirs&&(Q=Qi(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Td(Q,n.transition),Y=Q,ec(F),Y}const lT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pc(n))&&((e||(e={}))[n]=t[n]);return e},cT=(t,e)=>{const n={};for(const r in t)(!ud(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function uT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?op(r,o,f):!!o;if(c&8){const p=e.dynamicProps;for(let y=0;y<p.length;y++){const _=p[y];if(o[_]!==r[_]&&!Mc(f,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?op(r,o,f):!0:!!o;return!1}function op(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mc(n,i))return!0}return!1}function hT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vy=t=>t.__isSuspense;function dT(t,e){e&&e.pendingBranch?be(t)?e.effects.push(...t):e.effects.push(t):EE(t)}const dt=Symbol.for("v-fgt"),Fc=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),Bl=Symbol.for("v-stc"),Ho=[];let gn=null;function Je(t=!1){Ho.push(gn=t?null:[])}function fT(){Ho.pop(),gn=Ho[Ho.length-1]||null}let ra=1;function ap(t){ra+=t,t<0&&gn&&(gn.hasOnce=!0)}function Ly(t){return t.dynamicChildren=ra>0?gn||Li:null,fT(),ra>0&&gn&&gn.push(t),t}function yt(t,e,n,r,s,i){return Ly(V(t,e,n,r,s,i,!0))}function Gi(t,e,n,r,s){return Ly(ve(t,e,n,r,s,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function So(t,e){return t.type===e.type&&t.key===e.key}const My=({key:t})=>t??null,$l=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||Gt(t)||Ae(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===dt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&My(e),ref:e&&$l(e),scopeId:cy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(Cd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=wt(n)?8:16),ra>0&&!o&&gn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&gn.push(c),c}const ve=pT;function pT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ME)&&(t=cs),sa(t)){const l=Qi(t,e,!0);return n&&Cd(l,n),ra>0&&!i&&gn&&(l.shapeFlag&6?gn[gn.indexOf(t)]=l:gn.push(l)),l.patchFlag=-2,l}if(CT(t)&&(t=t.__vccOpts),e){e=mT(e);let{class:l,style:c}=e;l&&!wt(l)&&(e.class=pd(l)),nt(c)&&(bd(c)&&!be(c)&&(c=St({},c)),e.style=fd(c))}const o=wt(t)?1:Vy(t)?128:IE(t)?64:nt(t)?4:Ae(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function mT(t){return t?bd(t)||Ty(t)?St({},t):t:null}function Qi(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,f=e?yT(s||{},e):s,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&My(f),ref:e&&e.ref?n&&i?be(i)?i.concat($l(e)):[i,$l(e)]:$l(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qi(t.ssContent),ssFallback:t.ssFallback&&Qi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Td(p,c.clone(p)),p}function Ot(t=" ",e=0){return ve(Fc,null,t,e)}function Uc(t,e){const n=ve(Bl,null,t);return n.staticCount=e,n}function gT(t="",e=!1){return e?(Je(),Gi(cs,null,t)):ve(cs,null,t)}function Qn(t){return t==null||typeof t=="boolean"?ve(cs):be(t)?ve(dt,null,t.slice()):sa(t)?Gr(t):ve(Fc,null,String(t))}function Gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qi(t)}function Cd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(be(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ty(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ae(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function yT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pd([e.class,r.class]));else if(s==="style")e.style=fd([e.style,r.style]);else if(Pc(s)){const i=e[s],o=r[s];o&&i!==o&&!(be(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wn(t,e,n,r=null){ar(t,e,7,[n,r])}const wT=vy();let _T=0;function vT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wT,i={uid:_T++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ay(r,s),emitsOptions:Ny(r,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aT.bind(null,i),t.ce&&t.ce(i),i}let Wt=null,nc,kh;{const t=xc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};nc=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),kh=e("__VUE_SSR_SETTERS__",n=>ia=n)}const _a=t=>{const e=Wt;return nc(t),t.scope.on(),()=>{t.scope.off(),nc(e)}},lp=()=>{Wt&&Wt.scope.off(),nc(null)};function Fy(t){return t.vnode.shapeFlag&4}let ia=!1;function bT(t,e=!1,n=!1){e&&kh(e);const{props:r,children:s}=t.vnode,i=Fy(t);KE(t,r,i,e),XE(t,s,n);const o=i?ET(t,e):void 0;return e&&kh(!1),o}function ET(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,UE);const{setup:r}=n;if(r){fs();const s=t.setupContext=r.length>1?IT(t):null,i=_a(t),o=wa(r,t,0,[t.props,s]),l=xg(o);if(ps(),i(),(l||t.sp)&&!Bi(t)&&hy(t),l){if(o.then(lp,lp),e)return o.then(c=>{cp(t,c,e)}).catch(c=>{Nc(c,t,0)});t.asyncDep=o}else cp(t,o,e)}else Uy(t,e)}function cp(t,e,n){Ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=ry(e)),Uy(t,n)}let up;function Uy(t,e,n){const r=t.type;if(!t.render){if(!e&&up&&!r.render){const s=r.template||Id(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,f=St(St({isCustomElement:i,delimiters:l},o),c);r.render=up(s,f)}}t.render=r.render||er}{const s=_a(t);fs();try{BE(t)}finally{ps(),s()}}}const TT={get(t,e){return qt(t,"get",""),t[e]}};function IT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TT),slots:t.slots,emit:t.emit,expose:e}}function Bc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ry(ty(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qo)return qo[n](t)},has(e,n){return n in e||n in qo}})):t.proxy}function AT(t,e=!0){return Ae(t)?t.displayName||t.name:t.name||e&&t.__name}function CT(t){return Ae(t)&&"__vccOpts"in t}const On=(t,e)=>yE(t,e,ia);function By(t,e,n){const r=arguments.length;return r===2?nt(e)&&!be(e)?sa(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),ve(t,e,n))}const PT="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xh;const hp=typeof window<"u"&&window.trustedTypes;if(hp)try{xh=hp.createPolicy("vue",{createHTML:t=>t})}catch{}const $y=xh?t=>xh.createHTML(t):t=>t,RT="http://www.w3.org/2000/svg",ST="http://www.w3.org/1998/Math/MathML",_r=typeof document<"u"?document:null,dp=_r&&_r.createElement("template"),kT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_r.createElementNS(RT,t):e==="mathml"?_r.createElementNS(ST,t):n?_r.createElement(t,{is:n}):_r.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_r.createTextNode(t),createComment:t=>_r.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_r.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dp.innerHTML=$y(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=dp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xT=Symbol("_vtc");function OT(t,e,n){const r=t[xT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fp=Symbol("_vod"),DT=Symbol("_vsh"),NT=Symbol(""),VT=/(^|;)\s*display\s*:/;function LT(t,e,n){const r=t.style,s=wt(n);let i=!1;if(n&&!s){if(e)if(wt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&jl(r,l,"")}else for(const o in e)n[o]==null&&jl(r,o,"");for(const o in n)o==="display"&&(i=!0),jl(r,o,n[o])}else if(s){if(e!==n){const o=r[NT];o&&(n+=";"+o),r.cssText=n,i=VT.test(n)}}else e&&t.removeAttribute("style");fp in t&&(t[fp]=i?r.display:"",t[DT]&&(r.display="none"))}const pp=/\s*!important$/;function jl(t,e,n){if(be(n))n.forEach(r=>jl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=MT(t,e);pp.test(n)?t.setProperty(ri(r),n.replace(pp,""),"important"):t[r]=n}}const mp=["Webkit","Moz","ms"],Gu={};function MT(t,e){const n=Gu[e];if(n)return n;let r=An(e);if(r!=="filter"&&r in t)return Gu[e]=r;r=kc(r);for(let s=0;s<mp.length;s++){const i=mp[s]+r;if(i in t)return Gu[e]=i}return e}const gp="http://www.w3.org/1999/xlink";function yp(t,e,n,r,s,i=W0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gp,e.slice(6,e.length)):t.setAttributeNS(gp,e,n):n==null||i&&!Vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dr(n)?String(n):n)}function wp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$y(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ki(t,e,n,r){t.addEventListener(e,n,r)}function FT(t,e,n,r){t.removeEventListener(e,n,r)}const _p=Symbol("_vei");function UT(t,e,n,r,s=null){const i=t[_p]||(t[_p]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=BT(e);if(r){const f=i[e]=qT(r,s);ki(t,l,f,c)}else o&&(FT(t,l,o,c),i[e]=void 0)}}const vp=/(?:Once|Passive|Capture)$/;function BT(t){let e;if(vp.test(t)){e={};let r;for(;r=t.match(vp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ri(t.slice(2)),e]}let Qu=0;const $T=Promise.resolve(),jT=()=>Qu||($T.then(()=>Qu=0),Qu=Date.now());function qT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ar(HT(r,n.value),e,5,[r])};return n.value=t,n.attached=jT(),n}function HT(t,e){if(be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?OT(t,r,o):e==="style"?LT(t,n,r):Pc(e)?ud(e)||UT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WT(t,e,r,o))?(wp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(r))?wp(t,An(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yp(t,e,r,o))};function WT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bp(e)&&Ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bp(e)&&wt(n)?!1:e in t}const Ep=t=>{const e=t.props["onUpdate:modelValue"]||!1;return be(e)?n=>Ml(e,n):e};function KT(t){t.target.composing=!0}function Tp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yu=Symbol("_assign"),Xn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yu]=Ep(s);const i=r||s.props&&s.props.type==="number";ki(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=_h(l)),t[Yu](l)}),n&&ki(t,"change",()=>{t.value=t.value.trim()}),e||(ki(t,"compositionstart",KT),ki(t,"compositionend",Tp),ki(t,"change",Tp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yu]=Ep(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?_h(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},GT=["ctrl","shift","alt","meta"],QT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GT.some(n=>t[`${n}Key`]&&!e.includes(n))},Pd=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=QT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},YT=St({patchProp:zT},kT);let Ip;function XT(){return Ip||(Ip=ZE(YT))}const JT=(...t)=>{const e=XT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eI(r);if(!s)return;const i=e._component;!Ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ZT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ZT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eI(t){return wt(t)?document.querySelector(t):t}var tI=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const nI=Symbol();var Ap;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ap||(Ap={}));function rI(){const t=K0(!0),e=t.run(()=>Kt({}));let n=[],r=[];const s=ty({install(i){s._a=i,i.provide(nI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!tI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}var Cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,p=i>>2,y=(i&3)<<4|l>>4;let _=(l&15)<<2|f>>6,b=f&63;c||(b=64,o||(_=64)),r.push(n[p],n[y],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||f==null||y==null)throw new iI;const _=i<<2|l>>4;if(r.push(_),f!==64){const b=l<<4&240|f>>2;if(r.push(b),y!==64){const D=f<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oI=function(t){const e=jy(t);return qy.encodeByteArray(e,!0)},rc=function(t){return oI(t).replace(/\./g,"")},Hy=function(t){try{return qy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=()=>aI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof Cp>"u")return;const t=Cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hy(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return lI()||cI()||uI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zy=t=>{var e,n;return(n=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wy=t=>{const e=zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ky=()=>{var t;return(t=$c())===null||t===void 0?void 0:t.config},Gy=t=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function fI(){var t;const e=(t=$c())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=Qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yI(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xy(){try{return typeof indexedDB=="object"}catch{return!1}}function Jy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function wI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_I,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pn(s,l,r)}}function vI(t,e){return t.replace(bI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pp(i)&&Pp(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TI(t,e){const n=new II(t,e);return n.subscribe.bind(n)}class II{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xu),s.error===void 0&&(s.error=Xu),s.complete===void 0&&(s.complete=Xu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=1e3,PI=2,RI=4*60*60*1e3,SI=.5;function Rp(t,e=CI,n=PI){const r=e*Math.pow(n,t),s=Math.round(SI*r*(Math.random()-.5)*2);return Math.min(RI,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OI(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xI(t){return t===Ls?void 0:t}function OI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const NI={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},VI=De.INFO,LI={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=VI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const FI=(t,e)=>e.some(n=>t instanceof n);let Sp,kp;function UI(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,Oh=new WeakMap,ew=new WeakMap,Ju=new WeakMap,Rd=new WeakMap;function $I(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(is(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zy.set(n,t)}).catch(()=>{}),Rd.set(e,t),e}function jI(t){if(Oh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Oh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ew.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){Dh=t(Dh)}function HI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return ew.set(r,e.sort?e.sort():[e]),is(r)}:BI().includes(t)?function(...e){return t.apply(Zu(this),e),is(Zy.get(this))}:function(...e){return is(t.apply(Zu(this),e))}}function zI(t){return typeof t=="function"?HI(t):(t instanceof IDBTransaction&&jI(t),FI(t,UI())?new Proxy(t,Dh):t)}function is(t){if(t instanceof IDBRequest)return $I(t);if(Ju.has(t))return Ju.get(t);const e=zI(t);return e!==t&&(Ju.set(t,e),Rd.set(e,t)),e}const Zu=t=>Rd.get(t);function tw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=is(o);return r&&o.addEventListener("upgradeneeded",c=>{r(is(o.result),c.oldVersion,c.newVersion,is(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const WI=["get","getKey","getAll","getAllKeys","count"],KI=["put","add","delete","clear"],eh=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=KI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return eh.set(e,i),i}qI(t=>({...t,get:(e,n,r)=>xp(e,n)||t.get(e,n,r),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",Op="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new jc("@firebase/app"),YI="@firebase/app-compat",XI="@firebase/analytics-compat",JI="@firebase/analytics",ZI="@firebase/app-check-compat",eA="@firebase/app-check",tA="@firebase/auth",nA="@firebase/auth-compat",rA="@firebase/database",sA="@firebase/data-connect",iA="@firebase/database-compat",oA="@firebase/functions",aA="@firebase/functions-compat",lA="@firebase/installations",cA="@firebase/installations-compat",uA="@firebase/messaging",hA="@firebase/messaging-compat",dA="@firebase/performance",fA="@firebase/performance-compat",pA="@firebase/remote-config",mA="@firebase/remote-config-compat",gA="@firebase/storage",yA="@firebase/storage-compat",wA="@firebase/firestore",_A="@firebase/vertexai-preview",vA="@firebase/firestore-compat",bA="firebase",EA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="[DEFAULT]",TA={[Nh]:"fire-core",[YI]:"fire-core-compat",[JI]:"fire-analytics",[XI]:"fire-analytics-compat",[eA]:"fire-app-check",[ZI]:"fire-app-check-compat",[tA]:"fire-auth",[nA]:"fire-auth-compat",[rA]:"fire-rtdb",[sA]:"fire-data-connect",[iA]:"fire-rtdb-compat",[oA]:"fire-fn",[aA]:"fire-fn-compat",[lA]:"fire-iid",[cA]:"fire-iid-compat",[uA]:"fire-fcm",[hA]:"fire-fcm-compat",[dA]:"fire-perf",[fA]:"fire-perf-compat",[pA]:"fire-rc",[mA]:"fire-rc-compat",[gA]:"fire-gcs",[yA]:"fire-gcs-compat",[wA]:"fire-fst",[vA]:"fire-fst-compat",[_A]:"fire-vertex","fire-js":"fire-js",[bA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Map,IA=new Map,Lh=new Map;function Dp(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Lh.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of sc.values())Dp(n,t);for(const n of IA.values())Dp(n,t);return!0}function ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new si("app","Firebase",AA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=EA;function nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw os.create("bad-app-name",{appName:String(s)});if(n||(n=Ky()),!n)throw os.create("no-options");const i=sc.get(s);if(i){if(oa(n,i.options)&&oa(r,i.config))return i;throw os.create("duplicate-app",{appName:s})}const o=new DI(s);for(const c of Lh.values())o.addComponent(c);const l=new CA(n,r,o);return sc.set(s,l),l}function qc(t=Vh){const e=sc.get(t);if(!e&&t===Vh&&Ky())return nw();if(!e)throw os.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=TA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(l.join(" "));return}Ln(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firebase-heartbeat-database",RA=1,aa="firebase-heartbeat-store";let th=null;function rw(){return th||(th=tw(PA,RA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw os.create("idb-open",{originalErrorMessage:t.message})})),th}async function SA(t){try{const n=(await rw()).transaction(aa),r=await n.objectStore(aa).get(sw(t));return await n.done,r}catch(e){if(e instanceof Pn)Sr.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function Np(t,e){try{const r=(await rw()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,sw(t)),await r.done}catch(n){if(n instanceof Pn)Sr.warn(n.message);else{const r=os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,xA=30*24*60*60*1e3;class OA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=xA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vp(),{heartbeatsToSend:r,unsentEntries:s}=DA(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sr.warn(n),""}}}function Vp(){return new Date().toISOString().substring(0,10)}function DA(t,e=kA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xy()?Jy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lp(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){Ln(new Cn("platform-logger",e=>new GI(e),"PRIVATE")),Ln(new Cn("heartbeat",e=>new OA(e),"PRIVATE")),an(Nh,Op,t),an(Nh,Op,"esm2017"),an("fire-js","")}VA("");var LA="firebase",MA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(LA,MA,"app");const iw="@firebase/installations",Sd="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=1e4,aw=`w:${Sd}`,lw="FIS_v2",FA="https://firebaseinstallations.googleapis.com/v1",UA=60*60*1e3,BA="installations",$A="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ws=new si(BA,$A,jA);function cw(t){return t instanceof Pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw({projectId:t}){return`${FA}/projects/${t}/installations`}function hw(t){return{token:t.token,requestStatus:2,expiresIn:HA(t.expiresIn),creationTime:Date.now()}}async function dw(t,e){const r=(await e.json()).error;return Ws.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qA(t,{refreshToken:e}){const n=fw(t);return n.append("Authorization",zA(e)),n}async function pw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HA(t){return Number(t.replace("s","000"))}function zA(t){return`${lw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uw(t),s=fw(t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const o={fid:n,authVersion:lw,appId:t.appId,sdkVersion:aw},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await pw(()=>fetch(r,l));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:hw(f.authToken)}}else throw await dw("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=/^[cdef][\w-]{21}$/,Mh="";function QA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=YA(t);return GA.test(n)?n:Mh}catch{return Mh}}function YA(t){return KA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Map;function yw(t,e){const n=Hc(t);ww(n,e),XA(n,e)}function ww(t,e){const n=gw.get(t);if(n)for(const r of n)r(e)}function XA(t,e){const n=JA();n&&n.postMessage({key:t,fid:e}),ZA()}let Ms=null;function JA(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=t=>{ww(t.data.key,t.data.fid)}),Ms}function ZA(){gw.size===0&&Ms&&(Ms.close(),Ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="firebase-installations-database",tC=1,Ks="firebase-installations-store";let nh=null;function kd(){return nh||(nh=tw(eC,tC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ks)}}})),nh}async function ic(t,e){const n=Hc(t),s=(await kd()).transaction(Ks,"readwrite"),i=s.objectStore(Ks),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&yw(t,e.fid),e}async function _w(t){const e=Hc(t),r=(await kd()).transaction(Ks,"readwrite");await r.objectStore(Ks).delete(e),await r.done}async function zc(t,e){const n=Hc(t),s=(await kd()).transaction(Ks,"readwrite"),i=s.objectStore(Ks),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&yw(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t){let e;const n=await zc(t.appConfig,r=>{const s=nC(r),i=rC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Mh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nC(t){const e=t||{fid:QA(),registrationStatus:0};return vw(e)}function rC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ws.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iC(t)}:{installationEntry:e}}async function sC(t,e){try{const n=await WA(t,e);return ic(t.appConfig,n)}catch(n){throw cw(n)&&n.customData.serverCode===409?await _w(t.appConfig):await ic(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iC(t){let e=await Mp(t.appConfig);for(;e.registrationStatus===1;)await mw(100),e=await Mp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xd(t);return r||n}return e}function Mp(t){return zc(t,e=>{if(!e)throw Ws.create("installation-not-found");return vw(e)})}function vw(t){return oC(t)?{fid:t.fid,registrationStatus:0}:t}function oC(t){return t.registrationStatus===1&&t.registrationTime+ow<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC({appConfig:t,heartbeatServiceProvider:e},n){const r=lC(t,n),s=qA(t,n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const o={installation:{sdkVersion:aw,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await pw(()=>fetch(r,l));if(c.ok){const f=await c.json();return hw(f)}else throw await dw("Generate Auth Token",c)}function lC(t,{fid:e}){return`${uw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e=!1){let n;const r=await zc(t.appConfig,i=>{if(!bw(i))throw Ws.create("not-registered");const o=i.authToken;if(!e&&hC(o))return i;if(o.requestStatus===1)return n=cC(t,e),i;{if(!navigator.onLine)throw Ws.create("app-offline");const l=fC(i);return n=uC(t,l),l}});return n?await n:r.authToken}async function cC(t,e){let n=await Fp(t.appConfig);for(;n.authToken.requestStatus===1;)await mw(100),n=await Fp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Od(t,e):r}function Fp(t){return zc(t,e=>{if(!bw(e))throw Ws.create("not-registered");const n=e.authToken;return pC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uC(t,e){try{const n=await aC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ic(t.appConfig,r),n}catch(n){if(cw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _w(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ic(t.appConfig,r)}throw n}}function bw(t){return t!==void 0&&t.registrationStatus===2}function hC(t){return t.requestStatus===2&&!dC(t)}function dC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UA}function fC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pC(t){return t.requestStatus===1&&t.requestTime+ow<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t){const e=t,{installationEntry:n,registrationPromise:r}=await xd(e);return r?r.catch(console.error):Od(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e=!1){const n=t;return await yC(n),(await Od(n,e)).token}async function yC(t){const{registrationPromise:e}=await xd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){if(!t||!t.options)throw rh("App Configuration");if(!t.name)throw rh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rh(t){return Ws.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="installations",_C="installations-internal",vC=t=>{const e=t.getProvider("app").getImmediate(),n=wC(e),r=ms(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bC=t=>{const e=t.getProvider("app").getImmediate(),n=ms(e,Ew).getImmediate();return{getId:()=>mC(n),getToken:s=>gC(n,s)}};function EC(){Ln(new Cn(Ew,vC,"PUBLIC")),Ln(new Cn(_C,bC,"PRIVATE"))}EC();an(iw,Sd);an(iw,Sd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="analytics",TC="firebase_id",IC="origin",AC=60*1e3,CC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new jc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wn=new si("analytics","Analytics",PC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){if(!t.startsWith(Dd)){const e=wn.create("invalid-gtag-resource",{gtagURL:t});return ln.warn(e.message),""}return t}function Tw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kC(t,e){const n=SC("firebase-js-sdk-policy",{createScriptURL:RC}),r=document.createElement("script"),s=`${Dd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function xC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Tw(n)).find(f=>f.measurementId===s);c&&await e[c.appId]}}catch(l){ln.error(l)}t("config",s,i)}async function DC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Tw(n);for(const c of o){const f=l.find(y=>y.measurementId===c),p=f&&e[f.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ln.error(i)}}function NC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await DC(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await OC(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,f]=o;t("get",l,c,f)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){ln.error(l)}}return s}function VC(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=NC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function LC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=30,FC=1e3;class UC{constructor(e={},n=FC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Iw=new UC;function BC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $C(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:BC(r)},i=CC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw wn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function jC(t,e=Iw,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw wn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw wn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new zC;return setTimeout(async()=>{l.abort()},AC),Aw({appId:r,apiKey:s,measurementId:i},o,l,e)}async function Aw(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Iw){var i;const{appId:o,measurementId:l}=t;try{await qC(r,e)}catch(c){if(l)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await $C(t);return s.deleteThrottleMetadata(o),c}catch(c){const f=c;if(!HC(f)){if(s.deleteThrottleMetadata(o),l)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:l};throw c}const p=Number((i=f==null?void 0:f.customData)===null||i===void 0?void 0:i.httpStatus)===503?Rp(n,s.intervalMillis,MC):Rp(n,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(o,y),ln.debug(`Calling attemptFetch again in ${p} millis`),Aw(t,y,r,s)}}function qC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(wn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HC(t){if(!(t instanceof Pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WC(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(){if(Xy())try{await Jy()}catch(t){return ln.warn(wn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ln.warn(wn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GC(t,e,n,r,s,i,o){var l;const c=jC(t);c.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>ln.error(b)),e.push(c);const f=KC().then(b=>{if(b)return r.getId()}),[p,y]=await Promise.all([c,f]);LC(i)||kC(i,p.measurementId),s("js",new Date);const _=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return _[IC]="firebase",_.update=!0,y!=null&&(_[TC]=y),s("config",p.measurementId,_),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.app=e}_delete(){return delete zo[this.app.options.appId],Promise.resolve()}}let zo={},Up=[];const Bp={};let sh="dataLayer",YC="gtag",$p,Cw,jp=!1;function XC(){const t=[];if(Yy()&&t.push("This is a browser extension environment."),wI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=wn.create("invalid-analytics-context",{errorInfo:e});ln.warn(n.message)}}function JC(t,e,n){XC();const r=t.options.appId;if(!r)throw wn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wn.create("no-api-key");if(zo[r]!=null)throw wn.create("already-exists",{id:r});if(!jp){xC(sh);const{wrappedGtag:i,gtagCore:o}=VC(zo,Up,Bp,sh,YC);Cw=i,$p=o,jp=!0}return zo[r]=GC(t,Up,Bp,e,$p,sh,n),new QC(t)}function ZC(t=qc()){t=_t(t);const e=ms(t,oc);return e.isInitialized()?e.getImmediate():eP(t)}function eP(t,e={}){const n=ms(t,oc);if(n.isInitialized()){const s=n.getImmediate();if(oa(e,n.getOptions()))return s;throw wn.create("already-initialized")}return n.initialize({options:e})}function tP(t,e,n,r){t=_t(t),WC(Cw,zo[t.app.options.appId],e,n,r).catch(s=>ln.error(s))}const qp="@firebase/analytics",Hp="0.10.8";function nP(){Ln(new Cn(oc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return JC(r,s,n)},"PUBLIC")),Ln(new Cn("analytics-internal",t,"PRIVATE")),an(qp,Hp),an(qp,Hp,"esm2017");function t(e){try{const n=e.getProvider(oc).getImmediate();return{logEvent:(r,s,i)=>tP(n,r,s,i)}}catch(n){throw wn.create("interop-component-reg-failed",{reason:n})}}}nP();function Nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rP=Pw,Rw=new si("auth","Firebase",Pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new jc("@firebase/auth");function sP(t,...e){ac.logLevel<=De.WARN&&ac.warn(`Auth (${ii}): ${t}`,...e)}function ql(t,...e){ac.logLevel<=De.ERROR&&ac.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw Vd(t,...e)}function nr(t,...e){return Vd(t,...e)}function Sw(t,e,n){const r=Object.assign(Object.assign({},rP()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return Sw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rw.create(t,...e)}function ye(t,e,...n){if(!t)throw Vd(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function kr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iP(){return zp()==="http:"||zp()==="https:"}function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iP()||Yy()||"connection"in navigator)?navigator.onLine:!0}function aP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||mI()}get(){return oP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new ba(3e4,6e4);function gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return xw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=va(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},i);return pI()||(f.referrerPolicy="no-referrer"),kw.fetch()(Ow(t,t.config.apiHost,n,l),f)})}async function xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lP),e);try{const s=new hP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rl(t,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Sw(t,p,f);Mn(t,p)}}catch(s){if(s instanceof Pn)throw s;Mn(t,"network-request-failed",{message:String(s)})}}async function Ea(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&Mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ow(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ld(t.config,s):`${t.config.apiScheme}://${s}`}function uP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nr(this.auth,"network-request-failed")),cP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nr(t,e,r);return s.customData._tokenResponse=n,s}function Wp(t){return t!==void 0&&t.enterprise!==void 0}class dP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fP(t,e){return ys(t,"GET","/v2/recaptchaConfig",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Dw(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mP(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=Md(r);ye(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wo(ih(s.auth_time)),issuedAtTime:Wo(ih(s.iat)),expirationTime:Wo(ih(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ih(t){return Number(t)*1e3}function Md(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hy(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kp(t){const e=Md(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&gP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await la(t,Dw(n,{idToken:r}));ye(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nw(i.providerUserInfo):[],l=_P(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=c?f:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Uh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function wP(t){const e=_t(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _P(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nw(t){return t.map(e=>{var{providerId:n}=e,r=Nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){const n=await xw(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ow(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bP(t,e){return ys(t,"POST","/v2/accounts:revokeToken",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Kp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ji;return r&&(ye(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ye(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ye(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mP(this,e)}reload(){return wP(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await la(this,pP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,f,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Y=(f=n.createdAt)!==null&&f!==void 0?f:void 0,G=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Q,emailVerified:W,isAnonymous:me,providerData:_e,stsTokenManager:R}=n;ye(Q&&R,e,"internal-error");const I=ji.fromJSON(this.name,R);ye(typeof Q=="string",e,"internal-error"),Hr(y,e.name),Hr(_,e.name),ye(typeof W=="boolean",e,"internal-error"),ye(typeof me=="boolean",e,"internal-error"),Hr(b,e.name),Hr(D,e.name),Hr(L,e.name),Hr(F,e.name),Hr(Y,e.name),Hr(G,e.name);const P=new Tr({uid:Q,auth:e,email:_,emailVerified:W,displayName:y,isAnonymous:me,photoURL:D,phoneNumber:b,tenantId:L,stsTokenManager:I,createdAt:Y,lastLoginAt:G});return _e&&Array.isArray(_e)&&(P.providerData=_e.map(S=>Object.assign({},S))),F&&(P._redirectEventId=F),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new ji;s.updateFromServerResponse(n);const i=new Tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ye(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ji;l.updateFromIdToken(r);const c=new Tr({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Uh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Map;function Ir(t){kr(t instanceof Function,"Expected a class definition");let e=Gp.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vw.type="NONE";const Qp=Vw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(Ir(Qp),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Ir(Qp);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const p=await f._get(o);if(p){const y=Tr._fromJSON(e,p);f!==i&&(l=y),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qi(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new qi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(jw(e))return"Webos";if(Mw(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(Bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lw(t=Qt()){return/firefox\//i.test(t)}function Mw(t=Qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=Qt()){return/crios\//i.test(t)}function Uw(t=Qt()){return/iemobile/i.test(t)}function Bw(t=Qt()){return/android/i.test(t)}function $w(t=Qt()){return/blackberry/i.test(t)}function jw(t=Qt()){return/webos/i.test(t)}function Fd(t=Qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EP(t=Qt()){var e;return Fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TP(){return gI()&&document.documentMode===10}function qw(t=Qt()){return Fd(t)||Bw(t)||jw(t)||$w(t)||/windows phone/i.test(t)||Uw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e=[]){let n;switch(t){case"Browser":n=Yp(Qt());break;case"Worker":n=`${Yp(Qt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return ys(t,"GET","/v2/passwordPolicy",gs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=6;class PP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new IP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dw(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(Cr(this));const n=e?_t(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new PP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oi(t){return _t(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=TI(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SP(t){Wc=t}function zw(t){return Wc.loadJS(t)}function kP(){return Wc.recaptchaEnterpriseScript}function xP(){return Wc.gapiScript}function OP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DP="recaptcha-enterprise",NP="NO_RECAPTCHA";class VP{constructor(e){this.type=DP,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{fP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new dP(c);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,o(f.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Wp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(f=>{o(f)}).catch(()=>{o(NP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Wp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=kP();c.length!==0&&(c+=l),zw(c).then(()=>{s(l,i,o)}).catch(f=>{o(f)})}}).catch(l=>{o(l)})})}}async function Jp(t,e,n,r=!1){const s=new VP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){const n=ms(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return s;Mn(s,"already-initialized")}return n.initialize({options:e})}function MP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FP(t,e,n){const r=oi(t);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ww(e),{host:o,port:l}=UP(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),BP()}function Ww(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UP(t){const e=Ww(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zp(o)}}}function Zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function $P(t,e){return ys(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}async function HP(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Ud{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,n,"signInWithPassword",jP);case"emailLink":return qP(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,r,"signUpPassword",$P);case"emailLink":return HP(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="http://localhost";class Gs extends Ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Nd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:zP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KP(t){const e=No(Vo(t)).link,n=e?No(Vo(e)).deep_link_id:null,r=No(Vo(t)).deep_link_id;return(r?No(Vo(r)).link:null)||r||n||e||t}class Bd{constructor(e){var n,r,s,i,o,l;const c=No(Vo(e)),f=(n=c.apiKey)!==null&&n!==void 0?n:null,p=(r=c.oobCode)!==null&&r!==void 0?r:null,y=WP((s=c.mode)!==null&&s!==void 0?s:null);ye(f&&p&&y,"argument-error"),this.apiKey=f,this.operation=y,this.code=p,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=KP(e);try{return new Bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bd.parseLink(n);return ye(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ta{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.GOOGLE_SIGN_IN_METHOD="google.com";Xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Ta{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return Ea(t,"POST","/v1/accounts:signUp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tr._fromIdTokenResponse(e,r,s),o=em(r);return new Qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=em(r);return new Qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function em(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cc(e,n,r,s)}}function Gw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function QP(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e,n=!1){const{auth:r}=t;if(Jn(r.app))return Promise.reject(Cr(r));const s="reauthenticate";try{const i=await la(t,Gw(r,s,e,t),n);ye(i.idToken,r,"internal-error");const o=Md(i.idToken);ye(o,r,"internal-error");const{sub:l}=o;return ye(t.uid===l,r,"user-mismatch"),Qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e,n=!1){if(Jn(t.app))return Promise.reject(Cr(t));const r="signIn",s=await Gw(t,r,e),i=await Qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function XP(t,e){return Qw(oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t){const e=oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JP(t,e,n){if(Jn(t.app))return Promise.reject(Cr(t));const r=oi(t),o=await Bh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yw(t),c}),l=await Qs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ZP(t,e,n){return Jn(t.app)?Promise.reject(Cr(t)):XP(_t(t),ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yw(t),r})}function eR(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function tR(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function nR(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}const uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=1e3,sR=10;class Jw extends Xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);TP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const iR=Jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw extends Xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zw.type="SESSION";const e_=Zw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async f=>f(n.origin,i)),c=await oR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const f=$d("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const _=y;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function lR(t){rr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function cR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hR(){return t_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebaseLocalStorageDb",dR=1,hc="firebaseLocalStorage",r_="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function fR(){const t=indexedDB.deleteDatabase(n_);return new Ia(t).toPromise()}function $h(){const t=indexedDB.open(n_,dR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:r_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await fR(),e(await $h()))})})}async function tm(t,e,n){const r=Gc(t,!0).put({[r_]:e,value:n});return new Ia(r).toPromise()}async function pR(t,e){const n=Gc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function nm(t,e){const n=Gc(t,!0).delete(e);return new Ia(n).toPromise()}const mR=800,gR=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(hR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await tm(e,uc,"1"),await nm(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gc(s,!1).getAll();return new Ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const yR=s_;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){return e?Ir(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Ud{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _R(t){return Qw(t.auth,new jd(t),t.bypassAuthState)}function vR(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),YP(n,new jd(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),QP(n,new jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:Mn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new ba(2e3,1e4);class Vi extends i_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="pendingRedirect",zl=new Map;class IR extends i_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(t,e){const n=RR(e),r=PR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function CR(t,e){zl.set(t._key(),e)}function PR(t){return Ir(t._redirectPersistence)}function RR(t){return Hl(TR,t.config.apiKey,t.name)}async function SR(t,e,n=!1){if(Jn(t.app))return Promise.reject(Cr(t));const r=oi(t),s=wR(r,e),o=await new IR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=10*60*1e3;class xR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(rm(e))}saveEventToCache(e){this.cachedEventUids.add(rm(e)),this.lastProcessedEventTime=Date.now()}}function rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function LR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DR(t);for(const n of e)try{if(MR(n))return}catch{}Mn(t,"unauthorized-domain")}function MR(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VR.test(n))return!1;if(NR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new ba(3e4,6e4);function sm(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var r,s,i;function o(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(nr(t,"network-request-failed"))},timeout:FR.get()})}if(!((s=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rr().gapi)===null||i===void 0)&&i.load)o();else{const l=OP("iframefcb");return rr()[l]=()=>{gapi.load?o():n(nr(t,"network-request-failed"))},zw(`${xP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Wl=null,e})}let Wl=null;function BR(t){return Wl=Wl||UR(t),Wl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new ba(5e3,15e3),jR="__/auth/iframe",qR="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WR(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ld(e,qR):`https://${t.config.authDomain}/${jR}`,r={apiKey:e.apiKey,appName:t.name,v:ii},s=zR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${va(r).slice(1)}`}async function KR(t){const e=await BR(t),n=rr().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:WR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nr(t,"network-request-failed"),l=rr().setTimeout(()=>{i(o)},$R.get());function c(){rr().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QR=500,YR=600,XR="_blank",JR="http://localhost";class im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(t,e,n,r=QR,s=YR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},GR),{width:r.toString(),height:s.toString(),top:i,left:o}),f=Qt().toLowerCase();n&&(l=Fw(f)?XR:n),Lw(f)&&(e=e||JR,c.scrollbars="yes");const p=Object.entries(c).reduce((_,[b,D])=>`${_}${b}=${D},`,"");if(EP(f)&&l!=="_self")return eS(e||"",l),new im(null);const y=window.open(e||"",l,p);ye(y,t,"popup-blocked");try{y.focus()}catch{}return new im(y)}function eS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="__/auth/handler",nS="emulator/auth/handler",rS=encodeURIComponent("fac");async function om(t,e,n,r,s,i){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:s};if(e instanceof Kw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))o[p]=y}if(e instanceof Ta){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),f=c?`#${rS}=${encodeURIComponent(c)}`:"";return`${sS(t)}?${va(l).slice(1)}${f}`}function sS({config:t}){return t.emulator?Ld(t,nS):`https://${t.authDomain}/${tS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="webStorageSupport";class iS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e_,this._completeRedirectFn=SR,this._overrideRedirectResult=CR}async _openPopup(e,n,r,s){var i;kr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await om(e,n,r,Fh(),s);return ZR(e,o,$d())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await om(e,n,r,Fh(),s);return lR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KR(e),r=new xR(e);return n.register("authEvent",s=>(ye(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oh];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qw()||Mw()||Fd()}}const oS=iS;var am="@firebase/auth",lm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cS(t){Ln(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},f=new RP(r,s,i,c);return MP(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new Cn("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new aS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(am,lm,lS(t)),an(am,lm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=5*60,hS=Gy("authIdTokenMaxAge")||uS;let cm=null;const dS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hS)return;const s=n==null?void 0:n.token;cm!==s&&(cm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ys(t=qc()){const e=ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LP(t,{popupRedirectResolver:oS,persistence:[yR,iR,e_]}),r=Gy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=dS(i.toString());tR(n,o,()=>o(n.currentUser)),eR(n,l=>o(l))}}const s=zy("auth");return s&&FP(n,`http://${s}`),n}function fS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cS("Browser");var um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s,a_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function P(){}P.prototype=I.prototype,R.D=I.prototype,R.prototype=new P,R.prototype.constructor=R,R.C=function(S,k,v){for(var C=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)C[Me-2]=arguments[Me];return I.prototype[k].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,I,P){P||(P=0);var S=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)S[k]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(k=0;16>k;++k)S[k]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=R.g[0],P=R.g[1],k=R.g[2];var v=R.g[3],C=I+(v^P&(k^v))+S[0]+3614090360&4294967295;I=P+(C<<7&4294967295|C>>>25),C=v+(k^I&(P^k))+S[1]+3905402710&4294967295,v=I+(C<<12&4294967295|C>>>20),C=k+(P^v&(I^P))+S[2]+606105819&4294967295,k=v+(C<<17&4294967295|C>>>15),C=P+(I^k&(v^I))+S[3]+3250441966&4294967295,P=k+(C<<22&4294967295|C>>>10),C=I+(v^P&(k^v))+S[4]+4118548399&4294967295,I=P+(C<<7&4294967295|C>>>25),C=v+(k^I&(P^k))+S[5]+1200080426&4294967295,v=I+(C<<12&4294967295|C>>>20),C=k+(P^v&(I^P))+S[6]+2821735955&4294967295,k=v+(C<<17&4294967295|C>>>15),C=P+(I^k&(v^I))+S[7]+4249261313&4294967295,P=k+(C<<22&4294967295|C>>>10),C=I+(v^P&(k^v))+S[8]+1770035416&4294967295,I=P+(C<<7&4294967295|C>>>25),C=v+(k^I&(P^k))+S[9]+2336552879&4294967295,v=I+(C<<12&4294967295|C>>>20),C=k+(P^v&(I^P))+S[10]+4294925233&4294967295,k=v+(C<<17&4294967295|C>>>15),C=P+(I^k&(v^I))+S[11]+2304563134&4294967295,P=k+(C<<22&4294967295|C>>>10),C=I+(v^P&(k^v))+S[12]+1804603682&4294967295,I=P+(C<<7&4294967295|C>>>25),C=v+(k^I&(P^k))+S[13]+4254626195&4294967295,v=I+(C<<12&4294967295|C>>>20),C=k+(P^v&(I^P))+S[14]+2792965006&4294967295,k=v+(C<<17&4294967295|C>>>15),C=P+(I^k&(v^I))+S[15]+1236535329&4294967295,P=k+(C<<22&4294967295|C>>>10),C=I+(k^v&(P^k))+S[1]+4129170786&4294967295,I=P+(C<<5&4294967295|C>>>27),C=v+(P^k&(I^P))+S[6]+3225465664&4294967295,v=I+(C<<9&4294967295|C>>>23),C=k+(I^P&(v^I))+S[11]+643717713&4294967295,k=v+(C<<14&4294967295|C>>>18),C=P+(v^I&(k^v))+S[0]+3921069994&4294967295,P=k+(C<<20&4294967295|C>>>12),C=I+(k^v&(P^k))+S[5]+3593408605&4294967295,I=P+(C<<5&4294967295|C>>>27),C=v+(P^k&(I^P))+S[10]+38016083&4294967295,v=I+(C<<9&4294967295|C>>>23),C=k+(I^P&(v^I))+S[15]+3634488961&4294967295,k=v+(C<<14&4294967295|C>>>18),C=P+(v^I&(k^v))+S[4]+3889429448&4294967295,P=k+(C<<20&4294967295|C>>>12),C=I+(k^v&(P^k))+S[9]+568446438&4294967295,I=P+(C<<5&4294967295|C>>>27),C=v+(P^k&(I^P))+S[14]+3275163606&4294967295,v=I+(C<<9&4294967295|C>>>23),C=k+(I^P&(v^I))+S[3]+4107603335&4294967295,k=v+(C<<14&4294967295|C>>>18),C=P+(v^I&(k^v))+S[8]+1163531501&4294967295,P=k+(C<<20&4294967295|C>>>12),C=I+(k^v&(P^k))+S[13]+2850285829&4294967295,I=P+(C<<5&4294967295|C>>>27),C=v+(P^k&(I^P))+S[2]+4243563512&4294967295,v=I+(C<<9&4294967295|C>>>23),C=k+(I^P&(v^I))+S[7]+1735328473&4294967295,k=v+(C<<14&4294967295|C>>>18),C=P+(v^I&(k^v))+S[12]+2368359562&4294967295,P=k+(C<<20&4294967295|C>>>12),C=I+(P^k^v)+S[5]+4294588738&4294967295,I=P+(C<<4&4294967295|C>>>28),C=v+(I^P^k)+S[8]+2272392833&4294967295,v=I+(C<<11&4294967295|C>>>21),C=k+(v^I^P)+S[11]+1839030562&4294967295,k=v+(C<<16&4294967295|C>>>16),C=P+(k^v^I)+S[14]+4259657740&4294967295,P=k+(C<<23&4294967295|C>>>9),C=I+(P^k^v)+S[1]+2763975236&4294967295,I=P+(C<<4&4294967295|C>>>28),C=v+(I^P^k)+S[4]+1272893353&4294967295,v=I+(C<<11&4294967295|C>>>21),C=k+(v^I^P)+S[7]+4139469664&4294967295,k=v+(C<<16&4294967295|C>>>16),C=P+(k^v^I)+S[10]+3200236656&4294967295,P=k+(C<<23&4294967295|C>>>9),C=I+(P^k^v)+S[13]+681279174&4294967295,I=P+(C<<4&4294967295|C>>>28),C=v+(I^P^k)+S[0]+3936430074&4294967295,v=I+(C<<11&4294967295|C>>>21),C=k+(v^I^P)+S[3]+3572445317&4294967295,k=v+(C<<16&4294967295|C>>>16),C=P+(k^v^I)+S[6]+76029189&4294967295,P=k+(C<<23&4294967295|C>>>9),C=I+(P^k^v)+S[9]+3654602809&4294967295,I=P+(C<<4&4294967295|C>>>28),C=v+(I^P^k)+S[12]+3873151461&4294967295,v=I+(C<<11&4294967295|C>>>21),C=k+(v^I^P)+S[15]+530742520&4294967295,k=v+(C<<16&4294967295|C>>>16),C=P+(k^v^I)+S[2]+3299628645&4294967295,P=k+(C<<23&4294967295|C>>>9),C=I+(k^(P|~v))+S[0]+4096336452&4294967295,I=P+(C<<6&4294967295|C>>>26),C=v+(P^(I|~k))+S[7]+1126891415&4294967295,v=I+(C<<10&4294967295|C>>>22),C=k+(I^(v|~P))+S[14]+2878612391&4294967295,k=v+(C<<15&4294967295|C>>>17),C=P+(v^(k|~I))+S[5]+4237533241&4294967295,P=k+(C<<21&4294967295|C>>>11),C=I+(k^(P|~v))+S[12]+1700485571&4294967295,I=P+(C<<6&4294967295|C>>>26),C=v+(P^(I|~k))+S[3]+2399980690&4294967295,v=I+(C<<10&4294967295|C>>>22),C=k+(I^(v|~P))+S[10]+4293915773&4294967295,k=v+(C<<15&4294967295|C>>>17),C=P+(v^(k|~I))+S[1]+2240044497&4294967295,P=k+(C<<21&4294967295|C>>>11),C=I+(k^(P|~v))+S[8]+1873313359&4294967295,I=P+(C<<6&4294967295|C>>>26),C=v+(P^(I|~k))+S[15]+4264355552&4294967295,v=I+(C<<10&4294967295|C>>>22),C=k+(I^(v|~P))+S[6]+2734768916&4294967295,k=v+(C<<15&4294967295|C>>>17),C=P+(v^(k|~I))+S[13]+1309151649&4294967295,P=k+(C<<21&4294967295|C>>>11),C=I+(k^(P|~v))+S[4]+4149444226&4294967295,I=P+(C<<6&4294967295|C>>>26),C=v+(P^(I|~k))+S[11]+3174756917&4294967295,v=I+(C<<10&4294967295|C>>>22),C=k+(I^(v|~P))+S[2]+718787259&4294967295,k=v+(C<<15&4294967295|C>>>17),C=P+(v^(k|~I))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+v&4294967295}r.prototype.u=function(R,I){I===void 0&&(I=R.length);for(var P=I-this.blockSize,S=this.B,k=this.h,v=0;v<I;){if(k==0)for(;v<=P;)s(this,R,v),v+=this.blockSize;if(typeof R=="string"){for(;v<I;)if(S[k++]=R.charCodeAt(v++),k==this.blockSize){s(this,S),k=0;break}}else for(;v<I;)if(S[k++]=R[v++],k==this.blockSize){s(this,S),k=0;break}}this.h=k,this.o+=I},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;var P=8*this.o;for(I=R.length-8;I<R.length;++I)R[I]=P&255,P/=256;for(this.u(R),R=Array(16),I=P=0;4>I;++I)for(var S=0;32>S;S+=8)R[P++]=this.g[I]>>>S&255;return R};function i(R,I){var P=l;return Object.prototype.hasOwnProperty.call(P,R)?P[R]:P[R]=I(R)}function o(R,I){this.h=I;for(var P=[],S=!0,k=R.length-1;0<=k;k--){var v=R[k]|0;S&&v==I||(P[k]=v,S=!1)}this.g=P}var l={};function c(R){return-128<=R&&128>R?i(R,function(I){return new o([I|0],0>I?-1:0)}):new o([R|0],0>R?-1:0)}function f(R){if(isNaN(R)||!isFinite(R))return y;if(0>R)return F(f(-R));for(var I=[],P=1,S=0;R>=P;S++)I[S]=R/P|0,P*=4294967296;return new o(I,0)}function p(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return F(p(R.substring(1),I));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=f(Math.pow(I,8)),S=y,k=0;k<R.length;k+=8){var v=Math.min(8,R.length-k),C=parseInt(R.substring(k,k+v),I);8>v?(v=f(Math.pow(I,v)),S=S.j(v).add(f(C))):(S=S.j(P),S=S.add(f(C)))}return S}var y=c(0),_=c(1),b=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-F(this).m();for(var R=0,I=1,P=0;P<this.g.length;P++){var S=this.i(P);R+=(0<=S?S:4294967296+S)*I,I*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D(this))return"0";if(L(this))return"-"+F(this).toString(R);for(var I=f(Math.pow(R,6)),P=this,S="";;){var k=W(P,I).g;P=Y(P,k.j(I));var v=((0<P.g.length?P.g[0]:P.h)>>>0).toString(R);if(P=k,D(P))return v+S;for(;6>v.length;)v="0"+v;S=v+S}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function D(R){if(R.h!=0)return!1;for(var I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function L(R){return R.h==-1}t.l=function(R){return R=Y(this,R),L(R)?-1:D(R)?0:1};function F(R){for(var I=R.g.length,P=[],S=0;S<I;S++)P[S]=~R.g[S];return new o(P,~R.h).add(_)}t.abs=function(){return L(this)?F(this):this},t.add=function(R){for(var I=Math.max(this.g.length,R.g.length),P=[],S=0,k=0;k<=I;k++){var v=S+(this.i(k)&65535)+(R.i(k)&65535),C=(v>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);S=C>>>16,v&=65535,C&=65535,P[k]=C<<16|v}return new o(P,P[P.length-1]&-2147483648?-1:0)};function Y(R,I){return R.add(F(I))}t.j=function(R){if(D(this)||D(R))return y;if(L(this))return L(R)?F(this).j(F(R)):F(F(this).j(R));if(L(R))return F(this.j(F(R)));if(0>this.l(b)&&0>R.l(b))return f(this.m()*R.m());for(var I=this.g.length+R.g.length,P=[],S=0;S<2*I;S++)P[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<R.g.length;k++){var v=this.i(S)>>>16,C=this.i(S)&65535,Me=R.i(k)>>>16,Tt=R.i(k)&65535;P[2*S+2*k]+=C*Tt,G(P,2*S+2*k),P[2*S+2*k+1]+=v*Tt,G(P,2*S+2*k+1),P[2*S+2*k+1]+=C*Me,G(P,2*S+2*k+1),P[2*S+2*k+2]+=v*Me,G(P,2*S+2*k+2)}for(S=0;S<I;S++)P[S]=P[2*S+1]<<16|P[2*S];for(S=I;S<2*I;S++)P[S]=0;return new o(P,0)};function G(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function Q(R,I){this.g=R,this.h=I}function W(R,I){if(D(I))throw Error("division by zero");if(D(R))return new Q(y,y);if(L(R))return I=W(F(R),I),new Q(F(I.g),F(I.h));if(L(I))return I=W(R,F(I)),new Q(F(I.g),I.h);if(30<R.g.length){if(L(R)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var P=_,S=I;0>=S.l(R);)P=me(P),S=me(S);var k=_e(P,1),v=_e(S,1);for(S=_e(S,2),P=_e(P,2);!D(S);){var C=v.add(S);0>=C.l(R)&&(k=k.add(P),v=C),S=_e(S,1),P=_e(P,1)}return I=Y(R,k.j(I)),new Q(k,I)}for(k=y;0<=R.l(I);){for(P=Math.max(1,Math.floor(R.m()/I.m())),S=Math.ceil(Math.log(P)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),v=f(P),C=v.j(I);L(C)||0<C.l(R);)P-=S,v=f(P),C=v.j(I);D(v)&&(v=_),k=k.add(v),R=Y(R,C)}return new Q(k,R)}t.A=function(R){return W(this,R).h},t.and=function(R){for(var I=Math.max(this.g.length,R.g.length),P=[],S=0;S<I;S++)P[S]=this.i(S)&R.i(S);return new o(P,this.h&R.h)},t.or=function(R){for(var I=Math.max(this.g.length,R.g.length),P=[],S=0;S<I;S++)P[S]=this.i(S)|R.i(S);return new o(P,this.h|R.h)},t.xor=function(R){for(var I=Math.max(this.g.length,R.g.length),P=[],S=0;S<I;S++)P[S]=this.i(S)^R.i(S);return new o(P,this.h^R.h)};function me(R){for(var I=R.g.length+1,P=[],S=0;S<I;S++)P[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(P,R.h)}function _e(R,I){var P=I>>5;I%=32;for(var S=R.g.length-P,k=[],v=0;v<S;v++)k[v]=0<I?R.i(v+P)>>>I|R.i(v+P+1)<<32-I:R.i(v+P);return new o(k,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=p,$s=o}).apply(typeof um<"u"?um:typeof self<"u"?self:typeof window<"u"?window:{});var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l_,Lo,c_,Kl,jh,u_,h_,d_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sl=="object"&&Sl];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var m=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var x=a[w];if(!(x in m))break e;m=m[x]}a=a[a.length-1],w=m[a],d=d(w),d!=w&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var m=0,w=!1,x={next:function(){if(!w&&m<a.length){var N=m++;return{value:d(N,a[N]),done:!1}}return w=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function f(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function p(a,d,m){return a.call.apply(a.bind,arguments)}function y(a,d,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,w),a.apply(d,x)}}return function(){return a.apply(d,arguments)}}function _(a,d,m){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,_.apply(null,arguments)}function b(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function D(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,x,N){for(var te=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)te[$e-2]=arguments[$e];return d.prototype[x].apply(w,te)}}function L(a){const d=a.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=a[w];return m}return[]}function F(a,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const x=a.length||0,N=w.length||0;a.length=x+N;for(let te=0;te<N;te++)a[x+te]=w[te]}else a.push(w)}}class Y{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function G(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var me=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function _e(a,d,m){for(const w in a)d.call(m,a[w],w,a)}function R(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function I(a){const d={};for(const m in a)d[m]=a[m];return d}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let m,w;for(let x=1;x<arguments.length;x++){w=arguments[x];for(m in w)a[m]=w[m];for(let N=0;N<P.length;N++)m=P[N],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function k(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function v(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Ft;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Me{constructor(){this.h=this.g=null}add(d,m){const w=Tt.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Tt=new Y(()=>new Le,a=>a.reset());class Le{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,Ce=!1,Ft=new Me,Ut=()=>{const a=l.Promise.resolve(void 0);ie=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(m){v(m)}var d=Tt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Ce=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var pt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function vt(a,d){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(me){e:{try{W(d.nodeName);var x=!0;break e}catch{}x=!1}x||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vt.aa.h.call(this)}}D(vt,Ke);var Bt={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),re=0;function ne(a,d,m,w,x){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=x,this.key=++re,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,d,m,w,x){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var te=E(a,d,w,x);return-1<te?(d=a[te],m||(d.fa=!1)):(d=new ne(d,this.src,N,!!w,x),d.fa=m,a.push(d)),d};function Be(a,d){var m=d.type;if(m in a.g){var w=a.g[m],x=Array.prototype.indexOf.call(w,d,void 0),N;(N=0<=x)&&Array.prototype.splice.call(w,x,1),N&&(oe(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function E(a,d,m,w){for(var x=0;x<a.length;++x){var N=a[x];if(!N.da&&N.listener==d&&N.capture==!!m&&N.ha==w)return x}return-1}var A="closure_lm_"+(1e6*Math.random()|0),O={};function j(a,d,m,w,x){if(Array.isArray(d)){for(var N=0;N<d.length;N++)j(a,d[N],m,w,x);return null}return m=le(m),a&&a[U]?a.K(d,m,f(w)?!!w.capture:!!w,x):B(a,d,m,!1,w,x)}function B(a,d,m,w,x,N){if(!d)throw Error("Invalid event type");var te=f(x)?!!x.capture:!!x,$e=ue(a);if($e||(a[A]=$e=new Re(a)),m=$e.add(d,m,w,te,N),m.proxy)return m;if(w=q(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)pt||(x=te),x===void 0&&(x=!1),a.addEventListener(d.toString(),w,x);else if(a.attachEvent)a.attachEvent(ee(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function a(m){return d.call(a.src,a.listener,m)}const d=$;return a}function X(a,d,m,w,x){if(Array.isArray(d))for(var N=0;N<d.length;N++)X(a,d[N],m,w,x);else w=f(w)?!!w.capture:!!w,m=le(m),a&&a[U]?(a=a.i,d=String(d).toString(),d in a.g&&(N=a.g[d],m=E(N,m,w,x),-1<m&&(oe(N[m]),Array.prototype.splice.call(N,m,1),N.length==0&&(delete a.g[d],a.h--)))):a&&(a=ue(a))&&(d=a.g[d.toString()],a=-1,d&&(a=E(d,m,w,x)),(m=-1<a?d[a]:null)&&J(m))}function J(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[U])Be(d.i,a);else{var m=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(m,w,a.capture):d.detachEvent?d.detachEvent(ee(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=ue(d))?(Be(m,a),m.h==0&&(m.src=null,d[A]=null)):oe(a)}}}function ee(a){return a in O?O[a]:O[a]="on"+a}function $(a,d){if(a.da)a=!0;else{d=new vt(d,this);var m=a.listener,w=a.ha||a.src;a.fa&&J(a),a=m.call(w,d)}return a}function ue(a){return a=a[A],a instanceof Re?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[se]||(a[se]=function(d){return a.handleEvent(d)}),a[se])}function K(){Ye.call(this),this.i=new Re(this),this.M=this,this.F=null}D(K,Ye),K.prototype[U]=!0,K.prototype.removeEventListener=function(a,d,m,w){X(this,a,d,m,w)};function ce(a,d){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new Ke(d,a);else if(d instanceof Ke)d.target=d.target||a;else{var x=d;d=new Ke(w,a),S(d,x)}if(x=!0,m)for(var N=m.length-1;0<=N;N--){var te=d.g=m[N];x=Pe(te,w,!0,d)&&x}if(te=d.g=a,x=Pe(te,w,!0,d)&&x,x=Pe(te,w,!1,d)&&x,m)for(N=0;N<m.length;N++)te=d.g=m[N],x=Pe(te,w,!1,d)&&x}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],w=0;w<m.length;w++)oe(m[w]);delete a.g[d],a.h--}}this.F=null},K.prototype.K=function(a,d,m,w){return this.i.add(String(a),d,!1,m,w)},K.prototype.L=function(a,d,m,w){return this.i.add(String(a),d,!0,m,w)};function Pe(a,d,m,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,N=0;N<d.length;++N){var te=d[N];if(te&&!te.da&&te.capture==m){var $e=te.listener,lt=te.ha||te.src;te.fa&&Be(a.i,te),x=$e.call(lt,w)!==!1&&x}}return x&&!w.defaultPrevented}function Se(a,d,m){if(typeof a=="function")m&&(a=_(a,m));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Ne(a){a.g=Se(()=>{a.g=null,a.i&&(a.i=!1,Ne(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class xe extends Ye{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ne(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){Ye.call(this),this.h=a,this.g={}}D(mt,Ye);var at=[];function st(a){_e(a.g,function(d,m){this.g.hasOwnProperty(m)&&J(d)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),st(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=l.JSON.stringify,It=l.JSON.parse,Jt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Un(){}Un.prototype.h=null;function Ba(a){return a.h||(a.h=a.i())}function yo(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){Ke.call(this,"d")}D(ge,Ke);function wo(){Ke.call(this,"c")}D(wo,Ke);var dr={},$a=null;function hi(){return $a=$a||new K}dr.La="serverreachability";function Bn(a){Ke.call(this,dr.La,a)}D(Bn,Ke);function _s(a){const d=hi();ce(d,new Bn(d))}dr.STAT_EVENT="statevent";function ja(a,d){Ke.call(this,dr.STAT_EVENT,a),this.stat=d}D(ja,Ke);function xt(a){const d=hi();ce(d,new ja(d,a))}dr.Ma="timingevent";function qa(a,d){Ke.call(this,dr.Ma,a),this.size=d}D(qa,Ke);function vs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function gu(a,d,m,w,x,N){a.info(function(){if(a.g)if(N)for(var te="",$e=N.split("&"),lt=0;lt<$e.length;lt++){var Oe=$e[lt].split("=");if(1<Oe.length){var Ct=Oe[0];Oe=Oe[1];var Pt=Ct.split("_");te=2<=Pt.length&&Pt[1]=="type"?te+(Ct+"="+Oe+"&"):te+(Ct+"=redacted&")}}else te=null;else te=N;return"XMLHTTP REQ ("+w+") [attempt "+x+"]: "+d+`
`+m+`
`+te})}function yu(a,d,m,w,x,N,te){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+x+"]: "+d+`
`+m+`
`+N+" "+te})}function En(a,d,m,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+_u(a,m)+(w?" "+w:"")})}function wu(a,d){a.info(function(){return"TIMEOUT: "+d})}fr.prototype.info=function(){};function _u(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var x=w[1];if(Array.isArray(x)&&!(1>x.length)){var N=x[0];if(N!="noop"&&N!="stop"&&N!="close")for(var te=1;te<x.length;te++)x[te]=""}}}}return Lr(m)}catch{return d}}var di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bs;function fi(){}D(fi,Un),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},bs=new fi;function $n(a,d,m,w){this.j=a,this.i=d,this.l=m,this.R=w||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var Wa={},Ie={};function _o(a,d,m){a.L=1,a.v=kn(Sn(d)),a.m=m,a.P=!0,Ka(a,null)}function Ka(a,d){a.F=Date.now(),pi(a),a.A=Sn(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),Eo(m.i,"t",w),a.C=0,m=a.j.J,a.h=new za,a.g=Co(a.j,m?d:null,!a.m),0<a.O&&(a.M=new xe(_(a.Y,a,a.g),a.O)),d=a.U,m=a.g,w=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(at[0]=x.toString()),x=at);for(var N=0;N<x.length;N++){var te=j(m,x[N],w||d.handleEvent,!1,d.h||d);if(!te)break;d.g[te.key]=te}d=a.H?I(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),_s(),gu(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const d=this.M;d&&xn(a)==3?d.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const Pt=xn(this.g);var d=this.g.Ba();const qr=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||fl(this.g)))){this.J||Pt!=4||d==7||(d==8||0>=qr?_s(3):_s(2)),Es(this);var m=this.g.Z();this.X=m;t:if(Ga(this)){var w=fl(this.g);a="";var x=w.length,N=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Rn(this);var te="";break t}this.h.i=new l.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(N&&d==x-1)});w.length=0,this.h.g+=a,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=m==200,yu(this.i,this.u,this.A,this.l,this.R,Pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,lt=this.g;if(($e=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G($e)){var Oe=$e;break t}}Oe=null}if(m=Oe)En(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,At(this,m);else{this.o=!1,this.s=3,xt(12),jn(this),Rn(this);break e}}if(this.P){m=!0;let sn;for(;!this.J&&this.C<te.length;)if(sn=vu(this,te),sn==Ie){Pt==4&&(this.s=4,xt(14),m=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Wa){this.s=4,xt(15),En(this.i,this.l,te,"[Invalid Chunk]"),m=!1;break}else En(this.i,this.l,sn,null),At(this,sn);if(Ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||te.length!=0||this.h.h||(this.s=1,xt(16),m=!1),this.o=this.o&&m,!m)En(this.i,this.l,te,"[Invalid Chunked Response]"),jn(this),Rn(this);else if(0<te.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Br(Ct),Ct.M=!0,xt(11))}}else En(this.i,this.l,te,null),At(this,te);Pt==4&&jn(this),this.o&&!this.J&&(Pt==4?wl(this.j,this):(this.o=!1,pi(this)))}else Nu(this.g),m==400&&0<te.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),jn(this),Rn(this)}}}catch{}finally{}};function Ga(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vu(a,d){var m=a.C,w=d.indexOf(`
`,m);return w==-1?Ie:(m=Number(d.substring(m,w)),isNaN(m)?Wa:(w+=1,w+m>d.length?Ie:(d=d.slice(w,w+m),a.C=w+m,d)))}$n.prototype.cancel=function(){this.J=!0,jn(this)};function pi(a){a.S=Date.now()+a.I,Qa(a,a.I)}function Qa(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(_(a.ba,a),d)}function Es(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(wu(this.i,this.A),this.L!=2&&(_s(),xt(17)),jn(this),this.s=2,Rn(this)):Qa(this,this.S-a)};function Rn(a){a.j.G==0||a.J||wl(a.j,a)}function jn(a){Es(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,st(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function At(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||mi(m.h,a))){if(!a.K&&mi(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var x=w;if(x[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Ii(m),Ei(m);else break e;Ao(m),xt(18)}}else m.za=x[1],0<m.za-m.T&&37500>x[2]&&m.F&&m.v==0&&!m.C&&(m.C=vs(_(m.Za,m),6e3));if(1>=Ja(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else gr(m,11)}else if((a.K||m.g==a)&&Ii(m),!G(d))for(x=m.Da.g.parse(d),d=0;d<x.length;d++){let Oe=x[d];if(m.T=Oe[0],Oe=Oe[1],m.G==2)if(Oe[0]=="c"){m.K=Oe[1],m.ia=Oe[2];const Ct=Oe[3];Ct!=null&&(m.la=Ct,m.j.info("VER="+m.la));const Pt=Oe[4];Pt!=null&&(m.Aa=Pt,m.j.info("SVER="+m.Aa));const qr=Oe[5];qr!=null&&typeof qr=="number"&&0<qr&&(w=1.5*qr,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const sn=a.g;if(sn){const Ai=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var N=w.h;N.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(vo(N,N.h),N.h=null))}if(w.D){const xs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(w.ya=xs,Ge(w.I,w.D,xs))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var te=a;if(w.qa=vl(w,w.J?w.ia:null,w.W),te.K){Za(w.h,te);var $e=te,lt=w.L;lt&&($e.I=lt),$e.B&&(Es($e),pi($e)),w.g=te}else Io(w);0<m.i.length&&Rs(m)}else Oe[0]!="stop"&&Oe[0]!="close"||gr(m,7);else m.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?gr(m,7):To(m):Oe[0]!="noop"&&m.l&&m.l.ta(Oe),m.v=0)}}_s(4)}catch{}}var bu=class{constructor(a,d){this.g=a,this.map=d}};function Ya(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ja(a){return a.h?1:a.g?a.g.size:0}function mi(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function vo(a,d){a.g?a.g.add(d):a.h=d}function Za(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ya.prototype.cancel=function(){if(this.i=el(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function el(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return L(a.i)}function tl(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],m=a.length,w=0;w<m;w++)d.push(a[w]);return d}d=[],m=0;for(w in a)d[m++]=a[w];return d}function Eu(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const w in a)d[m++]=w;return d}}}function bo(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=Eu(a),w=tl(a),x=w.length,N=0;N<x;N++)d.call(void 0,w[N],m&&m[N],a)}var nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tu(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),x=null;if(0<=w){var N=a[m].substring(0,w);x=a[m].substring(w+1)}else N=a[m];d(N,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pr){this.h=a.h,gi(this,a.j),this.o=a.o,this.g=a.g,yi(this,a.s),this.l=a.l;var d=a.i,m=new Is;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),rl(this,m),this.m=a.m}else a&&(d=String(a).match(nl))?(this.h=!1,gi(this,d[1]||"",!0),this.o=Ts(d[2]||""),this.g=Ts(d[3]||"",!0),yi(this,d[4]),this.l=Ts(d[5]||"",!0),rl(this,d[6]||"",!0),this.m=Ts(d[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}pr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Mr(d,il,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Mr(d,il,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Mr(m,m.charAt(0)=="/"?Au:Iu,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Mr(m,Pu)),a.join("")};function Sn(a){return new pr(a)}function gi(a,d,m){a.j=m?Ts(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function yi(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function rl(a,d,m){d instanceof Is?(a.i=d,Ru(a.i,a.h)):(m||(d=Mr(d,Cu)),a.i=new Is(d,a.h))}function Ge(a,d,m){a.i.set(d,m)}function kn(a){return Ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mr(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,sl),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sl(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var il=/[#\/\?@]/g,Iu=/[#\?:]/g,Au=/[#\?]/g,Cu=/[#\?@]/g,Pu=/#/g;function Is(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&Tu(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Is.prototype,t.add=function(a,d){qn(this),this.i=null,a=Fr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function ol(a,d){qn(a),d=Fr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Hn(a,d){return qn(a),d=Fr(a,d),a.g.has(d)}t.forEach=function(a,d){qn(this),this.g.forEach(function(m,w){m.forEach(function(x){a.call(d,x,w,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const x=a[w];for(let N=0;N<x.length;N++)m.push(d[w])}return m},t.V=function(a){qn(this);let d=[];if(typeof a=="string")Hn(this,a)&&(d=d.concat(this.g.get(Fr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return qn(this),this.i=null,a=Fr(this,a),Hn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Eo(a,d,m){ol(a,d),0<m.length&&(a.i=null,a.g.set(Fr(a,d),L(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const N=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var x=N;te[w]!==""&&(x+="="+encodeURIComponent(String(te[w]))),a.push(x)}}return this.i=a.join("&")};function Fr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ru(a,d){d&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(m,w){var x=w.toLowerCase();w!=x&&(ol(this,w),Eo(this,x,m))},a)),a.j=d}function Su(a,d){const m=new fr;if(l.Image){const w=new Image;w.onload=b(zn,m,"TestLoadImage: loaded",!0,d,w),w.onerror=b(zn,m,"TestLoadImage: error",!1,d,w),w.onabort=b(zn,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=b(zn,m,"TestLoadImage: timeout",!1,d,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function ku(a,d){const m=new fr,w=new AbortController,x=setTimeout(()=>{w.abort(),zn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(N=>{clearTimeout(x),N.ok?zn(m,"TestPingServer: ok",!0,d):zn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),zn(m,"TestPingServer: error",!1,d)})}function zn(a,d,m,w,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),w(m)}catch{}}function xu(){this.g=new Jt}function Ou(a,d,m){const w=m||"";try{bo(a,function(x,N){let te=x;f(x)&&(te=Lr(x)),d.push(w+N+"="+encodeURIComponent(te))})}catch(x){throw d.push(w+"type="+encodeURIComponent("_badmap")),x}}function wi(a){this.l=a.Ub||null,this.j=a.eb||!1}D(wi,Un),wi.prototype.g=function(){return new _i(this.l,this.j)},wi.prototype.i=function(a){return function(){return a}}({});function _i(a,d){K.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(_i,K),t=_i.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;al(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function al(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?As(this):Cs(this),this.readyState==3&&al(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,As(this))},t.Qa=function(a){this.g&&(this.response=a,As(this))},t.ga=function(){this.g&&As(this)};function As(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ll(a){let d="";return _e(a,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function vi(a,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=ll(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ge(a,d,m))}function et(a){K.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,K);var cl=/^https?$/i,Du=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bs.g(),this.v=this.o?Ba(this.o):Ba(bs),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(N){ul(this,N);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var x in w)m.set(x,w[x]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const N of w.keys())m.set(N,w.get(N));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(N=>N.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Du,d,void 0))||w||x||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,te]of m)this.g.setRequestHeader(N,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dl(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){ul(this,N)}};function ul(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,hl(a),bi(a)}function hl(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),bi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mr(this):this.bb())},t.bb=function(){mr(this)};function mr(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)Se(a.Ea,0,a);else if(ce(a,"readystatechange"),xn(a)==4){a.h=!1;try{const te=a.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=te===0){var x=String(a.D).match(nl)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),w=!cl.test(x?x.toLowerCase():"")}m=w}if(m)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var N=2<xn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",hl(a)}}finally{bi(a)}}}}function bi(a,d){if(a.g){dl(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ce(a,"ready");try{m.onreadystatechange=w}catch{}}}function dl(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),It(d)}};function fl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Nu(a){const d={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(G(a[w]))continue;var m=k(a[w]);const x=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const N=d[x]||[];d[x]=N,N.push(m)}R(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function pl(a){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ya(a&&a.concurrentRequestLimit),this.Da=new xu,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pl.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,w){xt(0),this.W=a,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=vl(this,null,this.W),Rs(this)};function To(a){if(Ti(a),a.G==3){var d=a.U++,m=Sn(a.I);if(Ge(m,"SID",a.K),Ge(m,"RID",d),Ge(m,"TYPE","terminate"),Ss(a,m),d=new $n(a,a.j,d),d.L=2,d.v=kn(Sn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=Co(d.j,null),d.g.ea(d.v)),d.F=Date.now(),pi(d)}_l(a)}function Ei(a){a.g&&(Br(a),a.g.cancel(),a.g=null)}function Ti(a){Ei(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ii(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Rs(a){if(!Xa(a.h)&&!a.s){a.s=!0;var d=a.Ga;ie||Ut(),Ce||(ie(),Ce=!0),Ft.add(d,a),a.B=0}}function ml(a,d){return Ja(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(_(a.Ga,a,d),$r(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new $n(this,this.j,a);let N=this.o;if(this.S&&(N?(N=I(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(x.H=N,N=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Ur(this,x,d),m=Sn(this.I),Ge(m,"RID",a),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),Ss(this,m),N&&(this.O?d="headers="+encodeURIComponent(String(ll(N)))+"&"+d:this.m&&vi(m,this.m,N)),vo(this.h,x),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",d),Ge(m,"SID","null"),x.T=!0,_o(x,m,null)):_o(x,m,d),this.G=2}}else this.G==3&&(a?gl(this,a):this.i.length==0||Xa(this.h)||gl(this))};function gl(a,d){var m;d?m=d.l:m=a.U++;const w=Sn(a.I);Ge(w,"SID",a.K),Ge(w,"RID",m),Ge(w,"AID",a.T),Ss(a,w),a.m&&a.o&&vi(w,a.m,a.o),m=new $n(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Ur(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),vo(a.h,m),_o(m,w,d)}function Ss(a,d){a.H&&_e(a.H,function(m,w){Ge(d,w,m)}),a.l&&bo({},function(m,w){Ge(d,w,m)})}function Ur(a,d,m){m=Math.min(a.i.length,m);var w=a.l?_(a.l.Na,a.l,a):null;e:{var x=a.i;let N=-1;for(;;){const te=["count="+m];N==-1?0<m?(N=x[0].g,te.push("ofs="+N)):N=0:te.push("ofs="+N);let $e=!0;for(let lt=0;lt<m;lt++){let Oe=x[lt].g;const Ct=x[lt].map;if(Oe-=N,0>Oe)N=Math.max(0,x[lt].g-100),$e=!1;else try{Ou(Ct,te,"req"+Oe+"_")}catch{w&&w(Ct)}}if($e){w=te.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,w}function Io(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ie||Ut(),Ce||(ie(),Ce=!0),Ft.add(d,a),a.v=0}}function Ao(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(_(a.Fa,a),$r(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Ei(this),yl(this))};function Br(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yl(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Sn(a.qa);Ge(d,"RID","rpc"),Ge(d,"SID",a.K),Ge(d,"AID",a.T),Ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ge(d,"TO",a.ja),Ge(d,"TYPE","xmlhttp"),Ss(a,d),a.m&&a.o&&vi(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=kn(Sn(d)),m.m=null,m.P=!0,Ka(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Ei(this),Ao(this),xt(19))};function Ii(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function wl(a,d){var m=null;if(a.g==d){Ii(a),Br(a),a.g=null;var w=2}else if(mi(a.h,d))m=d.D,Za(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var x=a.B;w=hi(),ce(w,new qa(w,m)),Rs(a)}else Io(a);else if(x=d.s,x==3||x==0&&0<d.X||!(w==1&&ml(a,d)||w==2&&Ao(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),x){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function $r(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function gr(a,d){if(a.j.info("Error code "+d),d==2){var m=_(a.fb,a),w=a.Xa;const x=!w;w=new pr(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gi(w,"https"),kn(w),x?Su(w.toString(),m):ku(w.toString(),m)}else xt(2);a.G=0,a.l&&a.l.sa(d),_l(a),Ti(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function _l(a){if(a.G=0,a.ka=[],a.l){const d=el(a.h);(d.length!=0||a.i.length!=0)&&(F(a.ka,d),F(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function vl(a,d,m){var w=m instanceof pr?Sn(m):new pr(m);if(w.g!="")d&&(w.g=d+"."+w.g),yi(w,w.s);else{var x=l.location;w=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var N=new pr(null);w&&gi(N,w),d&&(N.g=d),x&&yi(N,x),m&&(N.l=m),w=N}return m=a.D,d=a.ya,m&&d&&Ge(w,m,d),Ge(w,"VER",a.la),Ss(a,w),w}function Co(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new et(new wi({eb:m})):new et(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Po(){}t=Po.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ks(){}ks.prototype.g=function(a,d){return new Zt(a,d)};function Zt(a,d){K.call(this),this.g=new pl(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!G(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!G(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new jr(this)}D(Zt,K),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){To(this.g)},Zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Lr(a),a=m);d.i.push(new bu(d.Ya++,a)),d.G==3&&Rs(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,Zt.aa.N.call(this)};function bl(a){ge.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}D(bl,ge);function El(){wo.call(this),this.status=1}D(El,wo);function jr(a){this.g=a}D(jr,Po),jr.prototype.ua=function(){ce(this.g,"a")},jr.prototype.ta=function(a){ce(this.g,new bl(a))},jr.prototype.sa=function(a){ce(this.g,new El)},jr.prototype.ra=function(){ce(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,d_=function(){return new ks},h_=function(){return hi()},u_=dr,jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,Kl=di,Ha.COMPLETE="complete",c_=Ha,yo.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",K.prototype.listen=K.prototype.K,Lo=yo,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,l_=et}).apply(typeof Sl<"u"?Sl:typeof self<"u"?self:typeof window<"u"?window:{});const hm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new jc("@firebase/firestore");function ko(){return Xs.logLevel}function ae(t,...e){if(Xs.logLevel<=De.DEBUG){const n=e.map(qd);Xs.debug(`Firestore (${lo}): ${t}`,...n)}}function xr(t,...e){if(Xs.logLevel<=De.ERROR){const n=e.map(qd);Xs.error(`Firestore (${lo}): ${t}`,...n)}}function Yi(t,...e){if(Xs.logLevel<=De.WARN){const n=e.map(qd);Xs.warn(`Firestore (${lo}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function ze(t,e){t||we()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class mS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gS{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new as;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new as,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new as)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new f_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new jt(e)}}class yS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _S{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ze(this.o===void 0);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.R=n.token,new _S(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Xi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new de(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Et(0,0))}static max(){return new Ee(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&we(),r===void 0?r=e.length-n:r>e.length-n&&we(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class tt extends ua{construct(e,n,r){return new tt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const ES=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ua{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return ES.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new de(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new de(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new de(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new de(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(tt.fromString(e))}static fromName(e){return new fe(tt.fromString(e).popFirst(5))}static empty(){return new fe(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new tt(e.slice()))}}function TS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new us(s,fe.empty(),e)}function IS(t){return new us(t.readTime,t.key,-1)}class us{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new us(Ee.min(),fe.empty(),-1)}static max(){return new us(Ee.max(),fe.empty(),-1)}}function AS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==CS)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const f=c;n(e[f]).next(p=>{o[f]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function RS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hd.oe=-1;function Qc(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function SS(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function co(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||Dt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kl(this.root,e,this.comparator,!0)}}class kl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Dt.RED,this.left=s??Dt.EMPTY,this.right=i??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Lt(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new Lt(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new g_("Invalid base64 string: "+i):i}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const kS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(t){if(ze(!!t),typeof t=="string"){let e=0;const n=kS.exec(t);if(ze(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wd(t){const e=t.mapValue.fields.__previous_value__;return zd(e)?Wd(e):e}function ha(t){const e=hs(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s,i,o,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zd(t)?4:DS(t)?9007199254740991:OS(t)?10:11:we()}function lr(t,e){if(t===e)return!0;const n=Zs(t);if(n!==Zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hs(s.timestampValue),l=hs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Js(s.bytesValue).isEqual(Js(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ht(s.doubleValue),l=ht(i.doubleValue);return o===l?dc(o)===dc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(dm(o)!==dm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!lr(o[c],l[c])))return!1;return!0}(t,e);default:return we()}}function fa(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function Ji(t,e){if(t===e)return 0;const n=Zs(t),r=Zs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ht(i.integerValue||i.doubleValue),c=ht(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return pm(t.timestampValue,e.timestampValue);case 4:return pm(ha(t),ha(e));case 5:return Fe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Js(i),c=Js(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let f=0;f<l.length&&f<c.length;f++){const p=Fe(l[f],c[f]);if(p!==0)return p}return Fe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Fe(ht(i.latitude),ht(o.latitude));return l!==0?l:Fe(ht(i.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,f,p;const y=i.fields||{},_=o.fields||{},b=(l=y.value)===null||l===void 0?void 0:l.arrayValue,D=(c=_.value)===null||c===void 0?void 0:c.arrayValue,L=Fe(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:mm(b,D)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xl.mapValue&&o===xl.mapValue)return 0;if(i===xl.mapValue)return 1;if(o===xl.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),f=o.fields||{},p=Object.keys(f);c.sort(),p.sort();for(let y=0;y<c.length&&y<p.length;++y){const _=Fe(c[y],p[y]);if(_!==0)return _;const b=Ji(l[c[y]],f[p[y]]);if(b!==0)return b}return Fe(c.length,p.length)}(t.mapValue,e.mapValue);default:throw we()}}function pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=hs(t),r=hs(e),s=Fe(n.seconds,r.seconds);return s!==0?s:Fe(n.nanos,r.nanos)}function mm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ji(n[s],r[s]);if(i)return i}return Fe(n.length,r.length)}function Zi(t){return qh(t)}function qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Js(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qh(n.fields[o])}`;return s+"}"}(t.mapValue):we()}function Hh(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function gm(t){return!!t&&"nullValue"in t}function ym(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gl(t){return!!t&&"mapValue"in t}function OS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return co(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ko(n)}setAll(e){let n=Nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ko(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){co(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tn(Ko(this.value))}}function y_(t){const e=[];return co(t.fields,(n,r)=>{const s=new Nt([n]);if(Gl(r)){const i=y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new zt(e,0,Ee.min(),Ee.min(),Ee.min(),Tn.empty(),0)}static newFoundDocument(e,n,r,s){return new zt(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new zt(e,2,n,Ee.min(),Ee.min(),Tn.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,Ee.min(),Ee.min(),Tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function wm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Ji(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n="asc"){this.field=e,this.dir=n}}function NS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{}class bt extends w_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LS(e,n,r):n==="array-contains"?new US(e,r):n==="in"?new BS(e,r):n==="not-in"?new $S(e,r):n==="array-contains-any"?new jS(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MS(e,r):new FS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ji(n,this.value)):n!==null&&Zs(this.value)===Zs(n)&&this.matchesComparison(Ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends w_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cr(e,n)}matches(e){return __(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function __(t){return t.op==="and"}function v_(t){return VS(t)&&__(t)}function VS(t){for(const e of t.filters)if(e instanceof cr)return!1;return!0}function zh(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(v_(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function b_(t,e){return t instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&lr(r.value,s.value)}(t,e):t instanceof cr?function(r,s){return s instanceof cr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&b_(o,s.filters[l]),!0):!1}(t,e):void we()}function E_(t){return t instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof cr?function(n){return n.op.toString()+" {"+n.getFilters().map(E_).join(" ,")+"}"}(t):"Filter"}class LS extends bt{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class MS extends bt{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FS extends bt{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class US extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&fa(n.arrayValue,this.value)}}class BS extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class $S extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class jS extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function vm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qS(t,e,n,r,s,i,o)}function Gd(t){const e=Te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.ue=n}return e.ue}function Qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!b_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_m(t.startAt,e.startAt)&&_m(t.endAt,e.endAt)}function Wh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HS(t,e,n,r,s,i,o,l){return new Yc(t,e,n,r,s,i,o,l)}function Xc(t){return new Yc(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zS(t){return t.collectionGroup!==null}function Go(t){const e=Te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Lt(Nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pc(i,r))}),n.has(Nt.keyField().canonicalString())||e.ce.push(new pc(Nt.keyField(),r))}return e.ce}function sr(t){const e=Te(t);return e.le||(e.le=WS(e,Go(t))),e.le}function WS(t,e){if(t.limitType==="F")return vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pc(s.field,i)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kh(t,e,n){return new Yc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return Qd(sr(t),sr(e))&&t.limitType===e.limitType}function I_(t){return`${Gd(sr(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>E_(s)).join(", ")}]`),Qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zi(s)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const f=wm(o,l,c);return o.inclusive?f<=0:f<0}(r.startAt,Go(r),s)||r.endAt&&!function(o,l,c){const f=wm(o,l,c);return o.inclusive?f>=0:f>0}(r.endAt,Go(r),s))}(t,e)}function KS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A_(t){return(e,n)=>{let r=!1;for(const s of Go(t)){const i=GS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GS(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),f=l.data.field(i);return c!==null&&f!==null?Ji(c,f):we()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){co(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return m_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new rt(fe.comparator);function Or(){return QS}const C_=new rt(fe.comparator);function Mo(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=C_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fs(){return Qo()}function R_(){return Qo()}function Qo(){return new uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const YS=new rt(fe.comparator),XS=new Lt(fe.comparator);function ke(...t){let e=XS;for(const n of t)e=e.add(n);return e}const JS=new Lt(Fe);function ZS(){return JS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function S_(t){return{integerValue:""+t}}function e1(t,e){return SS(e)?S_(e):Yd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function t1(t,e,n){return t instanceof mc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zd(i)&&(i=Wd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pa?x_(t,e):t instanceof ma?O_(t,e):function(s,i){const o=k_(s,i),l=Em(o)+Em(s.Pe);return Hh(o)&&Hh(s.Pe)?S_(l):Yd(s.serializer,l)}(t,e)}function n1(t,e,n){return t instanceof pa?x_(t,e):t instanceof ma?O_(t,e):n}function k_(t,e){return t instanceof gc?function(r){return Hh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mc extends eu{}class pa extends eu{constructor(e){super(),this.elements=e}}function x_(t,e){const n=D_(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class ma extends eu{constructor(e){super(),this.elements=e}}function O_(t,e){let n=D_(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class gc extends eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Em(t){return ht(t.integerValue||t.doubleValue)}function D_(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function r1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pa&&s instanceof pa||r instanceof ma&&s instanceof ma?Xi(r.elements,s.elements,lr):r instanceof gc&&s instanceof gc?lr(r.Pe,s.Pe):r instanceof mc&&s instanceof mc}(t.transform,e.transform)}class s1{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function N_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xd(t.key,Vn.none()):new Pa(t.key,t.data,Vn.none());{const n=t.data,r=Tn.empty();let s=new Lt(Nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ai(t.key,r,new Dn(s.toArray()),Vn.none())}}function i1(t,e,n){t instanceof Pa?function(s,i,o){const l=s.value.clone(),c=Im(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(s,i,o){if(!Ql(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Im(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(V_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Pa?function(i,o,l,c){if(!Ql(i.precondition,o))return l;const f=i.value.clone(),p=Am(i.fieldTransforms,c,o);return f.setAll(p),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(i,o,l,c){if(!Ql(i.precondition,o))return l;const f=Am(i.fieldTransforms,c,o),p=o.data;return p.setAll(V_(i)),p.setAll(f),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Ql(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function o1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=k_(r.transform,s||null);i!=null&&(n===null&&(n=Tn.empty()),n.set(r.field,i))}return n||null}function Tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xi(r,s,(i,o)=>r1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends tu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ai extends tu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function V_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Im(t,e,n){const r=new Map;ze(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,n1(o,l,n[s]))}return r}function Am(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,t1(i,o,e))}return r}class Xd extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a1 extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&i1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=N_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>Tm(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>Tm(n,r))}}class Jd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length);let s=function(){return YS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Ve;function h1(t){switch(t){default:return we();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function L_(t){if(t===void 0)return xr("GRPC error has no .code"),z.UNKNOWN;switch(t){case gt.OK:return z.OK;case gt.CANCELLED:return z.CANCELLED;case gt.UNKNOWN:return z.UNKNOWN;case gt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case gt.INTERNAL:return z.INTERNAL;case gt.UNAVAILABLE:return z.UNAVAILABLE;case gt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case gt.NOT_FOUND:return z.NOT_FOUND;case gt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case gt.ABORTED:return z.ABORTED;case gt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case gt.DATA_LOSS:return z.DATA_LOSS;default:return we()}}(Ve=gt||(gt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new $s([4294967295,4294967295],0);function Cm(t){const e=d1().encode(t),n=new a_;return n.update(e),new Uint8Array(n.digest())}function Pm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $s([n,r],0),new $s([s,i],0)]}class Zd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fo(`Invalid padding: ${n}`);if(r<0)throw new Fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$s.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply($s.fromNumber(r)));return s.compare(f1)===1&&(s=new $s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cm(e),[r,s]=Pm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zd(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Cm(e),[r,s]=Pm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu(Ee.min(),s,new rt(Fe),Or(),ke())}}class Ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class M_{constructor(e,n){this.targetId=e,this.me=n}}class F_{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rm{constructor(){this.fe=0,this.ge=km(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),n=ke(),r=ke();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:we()}}),new Ra(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=km()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ze(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class p1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Or(),this.qe=Sm(),this.Qe=new rt(Fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:we()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Wh(i))if(r===0){const o=new fe(i.path);this.Ue(n,o,zt.newNoDocument(o,Ee.min()))}else ze(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Js(r).toUint8Array()}catch(c){if(c instanceof g_)return Yi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Zd(o,s,i)}catch(c){return Yi(c instanceof Fo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Wh(l.target)){const c=new fe(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,zt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ke();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new nu(e,n,this.Qe,this.ke,r);return this.ke=Or(),this.qe=Sm(),this.Qe=new rt(Fe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Rm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Lt(Fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sm(){return new rt(fe.comparator)}function km(){return new rt(fe.comparator)}const m1={asc:"ASCENDING",desc:"DESCENDING"},g1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y1={and:"AND",or:"OR"};class w1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Qc(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _1(t,e){return yc(t,e.toTimestamp())}function ir(t){return ze(!!t),Ee.fromTimestamp(function(n){const r=hs(n);return new Et(r.seconds,r.nanos)}(t))}function ef(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function B_(t){const e=tt.fromString(t);return ze(z_(e)),e}function Yh(t,e){return ef(t.databaseId,e.path)}function ah(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new de(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new de(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(j_(n))}function $_(t,e){return ef(t.databaseId,e)}function v1(t){const e=B_(t);return e.length===4?tt.emptyPath():j_(e)}function Xh(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j_(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xm(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function b1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,p){return f.useProto3Json?(ze(p===void 0||typeof p=="string"),Mt.fromBase64String(p||"")):(ze(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Mt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(f){const p=f.code===void 0?z.UNKNOWN:L_(f.code);return new de(p,f.message||"")}(o);n=new F_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ah(t,r.document.name),i=ir(r.document.updateTime),o=r.document.createTime?ir(r.document.createTime):Ee.min(),l=new Tn({mapValue:{fields:r.document.fields}}),c=zt.newFoundDocument(s,i,o,l),f=r.targetIds||[],p=r.removedTargetIds||[];n=new Yl(f,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ah(t,r.document),i=r.readTime?ir(r.readTime):Ee.min(),o=zt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ah(t,r.document),i=r.removedTargetIds||[];n=new Yl([],i,s,null)}else{if(!("filter"in e))return we();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new u1(s,i),l=r.targetId;n=new M_(l,o)}}return n}function E1(t,e){let n;if(e instanceof Pa)n={update:xm(t,e.key,e.value)};else if(e instanceof Xd)n={delete:Yh(t,e.key)};else if(e instanceof ai)n={update:xm(t,e.key,e.data),updateMask:x1(e.fieldMask)};else{if(!(e instanceof a1))return we();n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof mc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw we()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:we()}(t,e.precondition)),n}function T1(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ir(s.updateTime):ir(i);return o.isEqual(Ee.min())&&(o=ir(i)),new s1(o,s.transformResults||[])}(n,e))):[]}function I1(t,e){return{documents:[$_(t,e.path)]}}function A1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$_(t,s);const i=function(f){if(f.length!==0)return H_(cr.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(f){if(f.length!==0)return f.map(p=>function(_){return{field:Oi(_.field),direction:R1(_.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:n,parent:s}}function C1(t){let e=v1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(y){const _=q_(y);return _ instanceof cr&&v_(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(D){return new pc(Di(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,Qc(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(y){const _=!!y.before,b=y.values||[];return new fc(b,_)}(n.startAt));let f=null;return n.endAt&&(f=function(y){const _=!y.before,b=y.values||[];return new fc(b,_)}(n.endAt)),HS(e,s,o,i,l,"F",c,f)}function P1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function q_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Di(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Di(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(t):t.fieldFilter!==void 0?function(n){return bt.create(Di(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cr.create(n.compositeFilter.filters.map(r=>q_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we()}}(n.compositeFilter.op))}(t):we()}function R1(t){return m1[t]}function S1(t){return g1[t]}function k1(t){return y1[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Di(t){return Nt.fromServerFormat(t.fieldPath)}function H_(t){return t instanceof bt?function(n){if(n.op==="=="){if(ym(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(gm(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ym(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(gm(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:S1(n.op),value:n.value}}}(t):t instanceof cr?function(n){const r=n.getFilters().map(s=>H_(s));return r.length===1?r[0]:{compositeFilter:{op:k1(n.op),filters:r}}}(t):we()}function x1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function z_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r,s,i=Ee.min(),o=Ee.min(),l=Mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.ct=e}}function D1(t){const e=C1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.un=new V1}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(us.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class V1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Lt(tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Lt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new eo(0)}static kn(){return new eo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.changes=new uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yo(r.mutation,s,Dn.empty(),Et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Mo();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Or();const o=Qo(),l=function(){return Qo()}();return n.forEach((c,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof ai)?i=i.insert(f.key,f):p!==void 0?(o.set(f.key,p.mutation.getFieldMask()),Yo(p.mutation,f,p.mutation.getFieldMask(),Et.now())):o.set(f.key,Dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((f,p)=>o.set(f,p)),n.forEach((f,p)=>{var y;return l.set(f,new M1(p,(y=o.get(f))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new rt((o,l)=>o-l),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let p=r.get(c)||Dn.empty();p=l.applyToLocalView(f,p),r.set(c,p);const y=(s.get(l.batchId)||ke()).add(c);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,p=c.value,y=R_();p.forEach(_=>{if(!i.has(_)){const b=N_(n.get(_),r.get(_));b!==null&&y.set(_,b),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,y))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Fs());let l=-1,c=i;return o.next(f=>H.forEach(f,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(p)?H.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{c=c.insert(p,_)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,c,f,ke())).next(p=>({batchId:l,changes:P_(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Mo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Mo();return this.indexManager.getCollectionParents(e,i).next(l=>H.forEach(l,c=>{const f=function(y,_){return new Yc(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(p=>{p.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,f)=>{const p=f.getKey();o.get(p)===null&&(o=o.insert(p,zt.newInvalidDocument(p)))});let l=Mo();return o.forEach((c,f)=>{const p=i.get(c);p!==void 0&&Yo(p.mutation,f,Dn.empty(),Et.now()),Zc(n,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ir(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:D1(s.bundledQuery),readTime:ir(s.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(){this.overlays=new rt(fe.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fs();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Fs(),i=n.length+1,o=new fe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new rt((f,p)=>f-p);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let p=i.get(f.largestBatchId);p===null&&(p=Fs(),i=i.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=Fs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return H.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new c1(n,r));let i=this.Ir.get(n);i===void 0&&(i=ke(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Tr=new Lt(Rt.Er),this.dr=new Lt(Rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new fe(new tt([])),r=new Rt(n,e),s=new Rt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new fe(new tt([])),r=new Rt(n,e),s=new Rt(n,e+1);let i=ke();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return fe.comparator(e.key,n.key)||Fe(e.wr,n.wr)}static Ar(e,n){return Fe(e.wr,n.wr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Lt(Rt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l1(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Rt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Rt(n,0),s=new Rt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Lt(Fe);return n.forEach(s=>{const i=new Rt(s,0),o=new Rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new Rt(new fe(i),0);let l=new Lt(Fe);return this.br.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.wr)),!0)},o),H.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new Rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Rt(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.Mr=e,this.docs=function(){return new rt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Or();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():zt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Or();const o=n.path,l=new fe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:p}}=c.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||AS(IS(p),r)<=0||(s.has(p.key)||Zc(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){we()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new H1(this)}getSize(e){return H.resolve(this.size)}}class H1 extends L1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.persistence=e,this.Nr=new uo(n=>Gd(n),Qd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tf,this.targetCount=0,this.kr=eo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hd(0),this.Kr=!1,this.Kr=!0,this.$r=new $1,this.referenceDelegate=e(this),this.Ur=new z1(this),this.indexManager=new N1,this.remoteDocumentCache=function(s){return new q1(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new O1(n),this.Gr=new U1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new B1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new j1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new K1(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class K1 extends PS{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Jr=new tf,this.Yr=null}static Zr(e){return new nf(e)}get Xr(){if(this.Yr)return this.Yr;throw we()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=fe.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ke(),s=ke();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yI()?8:RS(Qt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new G1;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ko()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ko()<=De.DEBUG&&ae("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ko()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):H.resolve())}Yi(e,n){if(bm(n))return H.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kh(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ke(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.ts(n,l);return this.ns(n,f,o,c.readTime)?this.Yi(e,Kh(n,null,"F")):this.rs(e,f,n,c)}))})))}Zi(e,n,r,s){return bm(n)||s.isEqual(Ee.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(ko()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xi(n)),this.rs(e,o,n,TS(s,-1)).next(l=>l))})}ts(e,n){let r=new Lt(A_(e));return n.forEach((s,i)=>{Zc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ko()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",xi(n)),this.Ji.getDocumentsMatchingQuery(e,n,us.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new rt(Fe),this._s=new uo(i=>Gd(i),Qd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function X1(t,e,n,r){return new Y1(t,e,n,r)}async function W_(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ke();for(const f of s){o.push(f.batchId);for(const p of f.mutations)c=c.add(p.key)}for(const f of i){l.push(f.batchId);for(const p of f.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(f=>({hs:f,removedBatchIds:o,addedBatchIds:l}))})})}function J1(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,f,p){const y=f.batch,_=y.keys();let b=H.resolve();return _.forEach(D=>{b=b.next(()=>p.getEntry(c,D)).next(L=>{const F=f.docVersions.get(D);ze(F!==null),L.version.compareTo(F)<0&&(y.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),p.addEntry(L)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ke();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function K_(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Z1(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,y)=>{const _=s.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,y)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(Mt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(y,b),function(L,F,Y){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(_,b,p)&&l.push(n.Ur.updateTargetData(i,b))});let c=Or(),f=ke();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(ek(i,o,e.documentUpdates).next(p=>{c=p.Ps,f=p.Is})),!r.isEqual(Ee.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return H.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,f)).next(()=>c)}).then(i=>(n.os=s,i))}function ek(t,e,n){let r=ke(),s=ke();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Or();return n.forEach((l,c)=>{const f=i.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function tk(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nk(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ts(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=Te(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ca(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Om(t,e,n){const r=Te(t);let s=Ee.min(),i=ke();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,f,p){const y=Te(c),_=y._s.get(p);return _!==void 0?H.resolve(y.os.get(_)):y.Ur.getTargetData(f,p)}(r,o,sr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Ee.min(),n?i:ke())).next(l=>(rk(r,KS(e),l),{documents:l,Ts:i})))}function rk(t,e,n){let r=t.us.get(e)||Ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Dm{constructor(){this.activeTargetIds=ZS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sk{constructor(){this.so=new Dm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol=null;function lh(){return Ol===null?Ol=function(){return 268435456+Math.round(2147483648*Math.random())}():Ol++,"0x"+Ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class lk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=lh(),c=this.xo(n,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,o),this.No(n,c,f,s).then(p=>(ae("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Yi("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",c,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=ok[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=lh();return new Promise((o,l)=>{const c=new l_;c.setWithCredentials(!0),c.listenOnce(c_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kl.NO_ERROR:const p=c.getResponseJson();ae($t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case Kl.TIMEOUT:ae($t,`RPC '${e}' ${i} timed out`),l(new de(z.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const y=c.getStatus();if(ae($t,`RPC '${e}' ${i} failed with status:`,y,"response text:",c.getResponseText()),y>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const D=function(F){const Y=F.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(Y)>=0?Y:z.UNKNOWN}(b.status);l(new de(D,b.message))}else l(new de(z.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new de(z.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ae($t,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);ae($t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",f,r,15)})}Bo(e,n,r){const s=lh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=d_(),l=h_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=i.join("");ae($t,`Creating RPC '${e}' stream ${s}: ${p}`,c);const y=o.createWebChannel(p,c);let _=!1,b=!1;const D=new ak({Io:F=>{b?ae($t,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(_||(ae($t,`Opening RPC '${e}' stream ${s} transport.`),y.open(),_=!0),ae($t,`RPC '${e}' stream ${s} sending:`,F),y.send(F))},To:()=>y.close()}),L=(F,Y,G)=>{F.listen(Y,Q=>{try{G(Q)}catch(W){setTimeout(()=>{throw W},0)}})};return L(y,Lo.EventType.OPEN,()=>{b||(ae($t,`RPC '${e}' stream ${s} transport opened.`),D.yo())}),L(y,Lo.EventType.CLOSE,()=>{b||(b=!0,ae($t,`RPC '${e}' stream ${s} transport closed`),D.So())}),L(y,Lo.EventType.ERROR,F=>{b||(b=!0,Yi($t,`RPC '${e}' stream ${s} transport errored:`,F),D.So(new de(z.UNAVAILABLE,"The operation could not be completed")))}),L(y,Lo.EventType.MESSAGE,F=>{var Y;if(!b){const G=F.data[0];ze(!!G);const Q=G,W=Q.error||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(W){ae($t,`RPC '${e}' stream ${s} received error:`,W);const me=W.status;let _e=function(P){const S=gt[P];if(S!==void 0)return L_(S)}(me),R=W.message;_e===void 0&&(_e=z.INTERNAL,R="Unknown error status: "+me+" with message "+W.message),b=!0,D.So(new de(_e,R)),y.close()}else ae($t,`RPC '${e}' stream ${s} received:`,G),D.bo(G)}}),L(l,u_.STAT_EVENT,F=>{F.stat===jh.PROXY?ae($t,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===jh.NOPROXY&&ae($t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new w1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new G_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new de(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ck extends Q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=b1(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?ir(o.readTime):Ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Wh(c)?{documents:I1(i,c)}:{query:A1(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=U_(i,o.resumeToken);const f=Gh(i,o.expectedCount);f!==null&&(l.expectedCount=f)}else if(o.snapshotVersion.compareTo(Ee.min())>0){l.readTime=yc(i,o.snapshotVersion.toTimestamp());const f=Gh(i,o.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=P1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.a_(n)}}class uk extends Q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ze(!!e.streamToken),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=T1(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E1(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new de(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Qh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new de(z.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Qh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new de(z.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xr(n),this.D_=!1):ae("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{li(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=Te(c);f.L_.add(4),await Sa(f),f.q_.set("Unknown"),f.L_.delete(4),await su(f)}(this))})}),this.q_=new dk(r,s)}}async function su(t){if(li(t))for(const e of t.B_)await e(!0)}async function Sa(t){for(const e of t.B_)await e(!1)}function Y_(t,e){const n=Te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lf(n)?af(n):ho(n).r_()&&of(n,e))}function sf(t,e){const n=Te(t),r=ho(n);n.N_.delete(e),r.r_()&&X_(n,e),n.N_.size===0&&(r.r_()?r.o_():li(n)&&n.q_.set("Unknown"))}function of(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).A_(e)}function X_(t,e){t.Q_.xe(e),ho(t).R_(e)}function af(t){t.Q_=new p1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.q_.v_()}function lf(t){return li(t)&&!ho(t).n_()&&t.N_.size>0}function li(t){return Te(t).L_.size===0}function J_(t){t.Q_=void 0}async function pk(t){t.q_.set("Online")}async function mk(t){t.N_.forEach((e,n)=>{of(t,e)})}async function gk(t,e){J_(t),lf(t)?(t.q_.M_(e),af(t)):t.q_.set("Unknown")}async function yk(t,e,n){if(t.q_.set("Online"),e instanceof F_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof Yl?t.Q_.Ke(e):e instanceof M_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Ee.min()))try{const r=await K_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.N_.get(f);p&&i.N_.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=i.N_.get(c);if(!p)return;i.N_.set(c,p.withResumeToken(Mt.EMPTY_BYTE_STRING,p.snapshotVersion)),X_(i,c);const y=new ts(p.target,c,f,p.sequenceNumber);of(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!Ca(e))throw e;t.L_.add(1),await Sa(t),t.q_.set("Offline"),n||(n=()=>K_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await su(t)})}function Z_(t,e){return e().catch(n=>wc(t,n,e))}async function iu(t){const e=Te(t),n=ds(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wk(e);)try{const s=await tk(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,_k(e,s)}catch(s){await wc(e,s)}ev(e)&&tv(e)}function wk(t){return li(t)&&t.O_.length<10}function _k(t,e){t.O_.push(e);const n=ds(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ev(t){return li(t)&&!ds(t).n_()&&t.O_.length>0}function tv(t){ds(t).start()}async function vk(t){ds(t).p_()}async function bk(t){const e=ds(t);for(const n of t.O_)e.m_(n.mutations)}async function Ek(t,e,n){const r=t.O_.shift(),s=Jd.from(r,e,n);await Z_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await iu(t)}async function Tk(t,e){e&&ds(t).V_&&await async function(r,s){if(function(o){return h1(o)&&o!==z.ABORTED}(s.code)){const i=r.O_.shift();ds(r).s_(),await Z_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await iu(r)}}(t,e),ev(t)&&tv(t)}async function Vm(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=li(n);n.L_.add(3),await Sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await su(n)}async function Ik(t,e){const n=Te(t);e?(n.L_.delete(2),await su(n)):e||(n.L_.add(2),await Sa(n),n.q_.set("Unknown"))}function ho(t){return t.K_||(t.K_=function(n,r,s){const i=Te(n);return i.w_(),new ck(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:pk.bind(null,t),Ro:mk.bind(null,t),mo:gk.bind(null,t),d_:yk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lf(t)?af(t):t.q_.set("Unknown")):(await t.K_.stop(),J_(t))})),t.K_}function ds(t){return t.U_||(t.U_=function(n,r,s){const i=Te(n);return i.w_(),new uk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vk.bind(null,t),mo:Tk.bind(null,t),f_:bk.bind(null,t),g_:Ek.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await iu(t)):(await t.U_.stop(),t.O_.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new cf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uf(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Ca(t))return new de(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Mo(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.W_=new rt(fe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):we():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class to{constructor(e,n,r,s,i,o,l,c,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new to(e,n,zi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ck{constructor(){this.queries=Mm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Te(n),i=s.queries;s.queries=Mm(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new de(z.ABORTED,"Firestore shutting down"))}}function Mm(){return new uo(t=>I_(t),Jc)}async function nv(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ak,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=uf(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&hf(n)}async function rv(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pk(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&hf(n)}function Rk(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function hf(t){t.Y_.forEach(e=>{e.next()})}var Zh,Fm;(Fm=Zh||(Zh={})).ea="default",Fm.Cache="cache";class sv{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new to(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.key=e}}class ov{constructor(e){this.key=e}}class Sk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ke(),this.mutatedKeys=ke(),this.Aa=A_(e),this.Ra=new zi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Lm,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const _=s.get(p),b=Zc(this.query,y)?y:null,D=!!_&&this.mutatedKeys.has(_.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;_&&b?_.data.isEqual(b.data)?D!==L&&(r.track({type:3,doc:b}),F=!0):this.ga(_,b)||(r.track({type:2,doc:b}),F=!0,(c&&this.Aa(b,c)>0||f&&this.Aa(b,f)<0)&&(l=!0)):!_&&b?(r.track({type:0,doc:b}),F=!0):_&&!b&&(r.track({type:1,doc:_}),F=!0,(c||f)&&(l=!0)),F&&(b?(o=o.add(b),i=L?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,y)=>function(b,D){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return L(b)-L(D)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,o.length!==0||f?{snapshot:new to(this.query,e.Ra,i,o,e.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Lm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ke(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ov(r))}),this.da.forEach(r=>{e.has(r)||n.push(new iv(r))}),n}ba(e){this.Ta=e.Ts,this.da=ke();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return to.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xk{constructor(e){this.key=e,this.va=!1}}class Ok{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new uo(l=>I_(l),Jc),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(fe.comparator),this.Na=new Map,this.La=new tf,this.Ba={},this.ka=new Map,this.qa=eo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Dk(t,e,n=!0){const r=dv(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await av(r,e,n,!0),s}async function Nk(t,e){const n=dv(t);await av(n,e,!0,!1)}async function av(t,e,n,r){const s=await nk(t.localStore,sr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Vk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Y_(t.remoteStore,s),l}async function Vk(t,e,n,r,s){t.Ka=(y,_,b)=>async function(L,F,Y,G){let Q=F.view.ma(Y);Q.ns&&(Q=await Om(L.localStore,F.query,!1).then(({documents:R})=>F.view.ma(R,Q)));const W=G&&G.targetChanges.get(F.targetId),me=G&&G.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(Q,L.isPrimaryClient,W,me);return Bm(L,F.targetId,_e.wa),_e.snapshot}(t,y,_,b);const i=await Om(t.localStore,e,!0),o=new Sk(e,i.Ts),l=o.ma(i.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),f=o.applyChanges(l,t.isPrimaryClient,c);Bm(t,n,f.wa);const p=new kk(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),f.snapshot}async function Lk(t,e,n){const r=Te(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Jc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sf(r.remoteStore,s.targetId),ed(r,s.targetId)}).catch(Aa)):(ed(r,s.targetId),await Jh(r.localStore,s.targetId,!0))}async function Mk(t,e){const n=Te(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sf(n.remoteStore,r.targetId))}async function Fk(t,e,n){const r=zk(t);try{const s=await function(o,l){const c=Te(o),f=Et.now(),p=l.reduce((b,D)=>b.add(D.key),ke());let y,_;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=Or(),L=ke();return c.cs.getEntries(b,p).next(F=>{D=F,D.forEach((Y,G)=>{G.isValidDocument()||(L=L.add(Y))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,D)).next(F=>{y=F;const Y=[];for(const G of l){const Q=o1(G,y.get(G.key).overlayedDocument);Q!=null&&Y.push(new ai(G.key,Q,y_(Q.value.mapValue),Vn.exists(!0)))}return c.mutationQueue.addMutationBatch(b,f,Y,l)}).next(F=>{_=F;const Y=F.applyToLocalDocumentSet(y,L);return c.documentOverlayCache.saveOverlays(b,F.batchId,Y)})}).then(()=>({batchId:_.batchId,changes:P_(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let f=o.Ba[o.currentUser.toKey()];f||(f=new rt(Fe)),f=f.insert(l,c),o.Ba[o.currentUser.toKey()]=f}(r,s.batchId,n),await ka(r,s.changes),await iu(r.remoteStore)}catch(s){const i=uf(s,"Failed to persist write");n.reject(i)}}async function lv(t,e){const n=Te(t);try{const r=await Z1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ze(o.va):s.removedDocuments.size>0&&(ze(o.va),o.va=!1))}),await ka(n,r,e)}catch(r){await Aa(r)}}function Um(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Te(o);c.onlineState=l;let f=!1;c.queries.forEach((p,y)=>{for(const _ of y.j_)_.Z_(l)&&(f=!0)}),f&&hf(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uk(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new rt(fe.comparator);o=o.insert(i,zt.newNoDocument(i,Ee.min()));const l=ke().add(i),c=new nu(Ee.min(),new Map,new rt(Fe),o,l);await lv(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),df(r)}else await Jh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(Aa)}async function Bk(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await J1(n.localStore,e);uv(n,r,null),cv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await Aa(s)}}async function $k(t,e,n){const r=Te(t);try{const s=await function(o,l){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return c.mutationQueue.lookupMutationBatch(f,l).next(y=>(ze(y!==null),p=y.keys(),c.mutationQueue.removeMutationBatch(f,y))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>c.localDocuments.getDocuments(f,p))})}(r.localStore,e);uv(r,e,n),cv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await Aa(s)}}function cv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uv(t,e,n){const r=Te(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hv(t,r)})}function hv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),df(t))}function Bm(t,e,n){for(const r of n)r instanceof iv?(t.La.addReference(r.key,e),jk(t,r)):r instanceof ov?(ae("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hv(t,r.key)):we()}function jk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ae("SyncEngine","New document in limbo: "+n),t.xa.add(r),df(t))}function df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new fe(tt.fromString(e)),r=t.qa.next();t.Na.set(r,new xk(n)),t.Oa=t.Oa.insert(n,r),Y_(t.remoteStore,new ts(sr(Xc(n.path)),r,"TargetPurposeLimboResolution",Hd.oe))}}async function ka(t,e,n){const r=Te(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(f=>{var p;if((f||n)&&r.isPrimaryClient){const y=f?!f.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,y?"current":"not-current")}if(f){s.push(f);const y=rf.Wi(c.targetId,f);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,f){const p=Te(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>H.forEach(f,_=>H.forEach(_.$i,b=>p.persistence.referenceDelegate.addReference(y,_.targetId,b)).next(()=>H.forEach(_.Ui,b=>p.persistence.referenceDelegate.removeReference(y,_.targetId,b)))))}catch(y){if(!Ca(y))throw y;ae("LocalStore","Failed to update sequence numbers: "+y)}for(const y of f){const _=y.targetId;if(!y.fromCache){const b=p.os.get(_),D=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(_,L)}}}(r.localStore,i))}async function qk(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await W_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new de(z.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.hs)}}function Hk(t,e){const n=Te(t),r=n.Na.get(e);if(r&&r.va)return ke().add(r.key);{let s=ke();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function dv(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uk.bind(null,e),e.Ca.d_=Pk.bind(null,e.eventManager),e.Ca.$a=Rk.bind(null,e.eventManager),e}function zk(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return X1(this.persistence,new Q1,e.initialUser,this.serializer)}Ga(e){return new W1(nf.Zr,this.serializer)}Wa(e){return new sk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qk.bind(null,this.syncEngine),await Ik(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ck}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=function(i){return new lk(i)}(e.databaseInfo);return function(i,o,l,c){return new hk(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new fk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Um(this.syncEngine,n,0),function(){return Nm.D()?new Nm:new ik}())}createSyncEngine(e,n){return function(s,i,o,l,c,f,p){const y=new Ok(s,i,o,l,c,f);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Te(s);ae("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Sa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}td.provider={build:()=>new td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=jt.UNAUTHENTICATED,this.clientId=p_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ae("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await W_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $m(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kk(t);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vm(e.remoteStore,s)),t._onlineComponents=e}async function Kk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Yi("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new _c)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new _c);return t._offlineComponents}async function pv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await $m(t,t._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await $m(t,new td))),t._onlineComponents}function Gk(t){return pv(t).then(e=>e.syncEngine)}async function nd(t){const e=await pv(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=Lk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Nk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Mk.bind(null,e.syncEngine),n}function Qk(t,e,n={}){const r=new as;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,f){const p=new fv({next:_=>{p.Za(),o.enqueueAndForget(()=>rv(i,y));const b=_.docs.has(l);!b&&_.fromCache?f.reject(new de(z.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&c&&c.source==="server"?f.reject(new de(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(_)},error:_=>f.reject(_)}),y=new sv(Xc(l.path),p,{includeMetadataChanges:!0,_a:!0});return nv(i,y)}(await nd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e,n){if(!n)throw new de(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yk(t,e,n,r){if(e===!0&&r===!0)throw new de(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qm(t){if(!fe.isDocumentKey(t))throw new de(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hm(t){if(fe.isDocumentKey(t))throw new de(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":we()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new de(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new de(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new de(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new de(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new de(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pS;switch(r.type){case"firstParty":return new wS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jm.get(n);r&&(ae("ComponentProvider","Removing Datastore"),jm.delete(n),r.terminate())}(this),Promise.resolve()}}function Xk(t,e,n,r={}){var s;const i=(t=or(t,ou))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=jt.MOCK_USER;else{l=Qy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new de(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new jt(f)}t._authCredentials=new mS(new f_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new au(this.firestore,e,this._query)}}class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class ls extends au{constructor(e,n,r){super(e,n,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new fe(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function Wm(t,e,...n){if(t=_t(t),gv("collection","path",e),t instanceof ou){const r=tt.fromString(e,...n);return Hm(r),new ls(t,null,r)}{if(!(t instanceof cn||t instanceof ls))throw new de(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return Hm(r),new ls(t.firestore,null,r)}}function fo(t,e,...n){if(t=_t(t),arguments.length===1&&(e=p_.newId()),gv("doc","path",e),t instanceof ou){const r=tt.fromString(e,...n);return qm(r),new cn(t,null,new fe(r))}{if(!(t instanceof cn||t instanceof ls))throw new de(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return qm(r),new cn(t.firestore,t instanceof ls?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new G_(this,"async_queue_retry"),this.Vu=()=>{const r=ch();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new as;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ca(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=cf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&we()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Gm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ei extends ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Km,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Km(e),this._firestoreClient=void 0,await e}}}function Jk(t,e){const n=typeof t=="object"?t:qc(),r=typeof t=="string"?t:"(default)",s=ms(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wy("firestore");i&&Xk(s,...i)}return s}function pf(t){if(t._terminated)throw new de(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Zk(t),t._firestoreClient}function Zk(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,f,p){return new xS(l,c,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,mv(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Wk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._byteString=e}static fromBase64String(e){try{return new no(Mt.fromBase64String(e))}catch(n){throw new de(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new no(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=/^__.*__$/;class t2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}function wv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class wf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new wf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(wv(this.Cu)&&e2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class n2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}Qu(e,n,r,s=!1){return new wf({Cu:e,methodName:n,qu:r,path:Nt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _v(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new n2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vv(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Iv("Data must be an object, but it was:",o,r);const l=Ev(r,o);let c,f;if(i.merge)c=new Dn(o.fieldMask),f=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const _=r2(e,y,n);if(!o.contains(_))throw new de(z.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);i2(p,_)||p.push(_)}c=new Dn(p),f=o.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,f=o.fieldTransforms;return new t2(new Tn(l),c,f)}function bv(t,e){if(Tv(t=_t(t)))return Iv("Unsupported field value:",e,t),Ev(t,e);if(t instanceof yv)return function(r,s){if(!wv(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=bv(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Et.fromDate(r);return{timestampValue:yc(s.serializer,i)}}if(r instanceof Et){const i=new Et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yc(s.serializer,i)}}if(r instanceof gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof no)return{bytesValue:U_(s.serializer,r._byteString)};if(r instanceof cn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ef(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Yd(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ff(r)}`)}(t,e)}function Ev(t,e){const n={};return m_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):co(t,(r,s)=>{const i=bv(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof gf||t instanceof no||t instanceof cn||t instanceof yv||t instanceof yf)}function Iv(t,e,n){if(!Tv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ff(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function r2(t,e,n){if((e=_t(e))instanceof mf)return e._internalPath;if(typeof e=="string")return Av(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const s2=new RegExp("[~\\*/\\[\\]]");function Av(t,e,n){if(e.search(s2)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mf(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new de(z.INVALID_ARGUMENT,l+t+c)}function i2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o2 extends Cv{data(){return super.data()}}function Pv(t,e){return typeof e=="string"?Av(t,e):e instanceof mf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new de(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l2{convertValue(e,n="none"){switch(Zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return co(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ht(o.doubleValue));return new yf(i)}convertGeoPoint(e){return new gf(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=hs(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=tt.fromString(e);ze(z_(r));const s=new da(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||xr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sv extends Cv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xl extends Sv{data(e={}){return super.data(e)}}class c2{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Uo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xl(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Xl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Uo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Xl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Uo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return l.type!==0&&(f=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:u2(l.type),doc:c,oldIndex:f,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function u2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){t=or(t,cn);const e=or(t.firestore,ei);return Qk(pf(e),t._key).then(n=>Dv(e,t,n))}class xv extends l2{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function Ov(t,e,n){t=or(t,cn);const r=or(t.firestore,ei),s=Rv(t.converter,e,n);return _f(r,[vv(_v(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vn.none())])}function h2(t){return _f(or(t.firestore,ei),[new Xd(t._key,Vn.none())])}function d2(t,e){const n=or(t.firestore,ei),r=fo(t),s=Rv(t.converter,e);return _f(n,[vv(_v(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Vn.exists(!1))]).then(()=>r)}function f2(t,...e){var n,r,s;t=_t(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gm(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gm(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let c,f,p;if(t instanceof cn)f=or(t.firestore,ei),p=Xc(t._key.path),c={next:y=>{e[o]&&e[o](Dv(f,t,y))},error:e[o+1],complete:e[o+2]};else{const y=or(t,au);f=or(y.firestore,ei),p=y._query;const _=new xv(f);c={next:b=>{e[o]&&e[o](new c2(f,_,y,b))},error:e[o+1],complete:e[o+2]},a2(t._query)}return function(_,b,D,L){const F=new fv(L),Y=new sv(b,F,D);return _.asyncQueue.enqueueAndForget(async()=>nv(await nd(_),Y)),()=>{F.Za(),_.asyncQueue.enqueueAndForget(async()=>rv(await nd(_),Y))}}(pf(f),p,l,c)}function _f(t,e){return function(r,s){const i=new as;return r.asyncQueue.enqueueAndForget(async()=>Fk(await Gk(r),s,i)),i.promise}(pf(t),e)}function Dv(t,e,n){const r=n.docs.get(e._key),s=new xv(t);return new Sv(t,s,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){lo=s})(ii),Ln(new Cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ei(new gS(r.getProvider("auth-internal")),new vS(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new de(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(f.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),an(hm,"4.7.3",e),an(hm,"4.7.3","esm2017")})();const p2={apiKey:"AIzaSyB8TkT37wlnZv3loaXeVRqaHMRcMKII8N0",authDomain:"pubs-91e63.firebaseapp.com",projectId:"pubs-91e63",storageBucket:"pubs-91e63.appspot.com",messagingSenderId:"721093754175",appId:"1:721093754175:web:ba2ccfc982a7d2a4fba78a",measurementId:"G-7DRNPYS5X7"},vf=nw(p2);ZC(vf);const m2=Ys(vf),js=Jk(vf);var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nv={exports:{}};/*!
* sweetalert2 v11.4.4
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(zr,function(){const n="SweetAlert2:",r=u=>{const h=[];for(let g=0;g<u.length;g++)h.indexOf(u[g])===-1&&h.push(u[g]);return h},s=u=>u.charAt(0).toUpperCase()+u.slice(1),i=u=>Array.prototype.slice.call(u),o=u=>{console.warn("".concat(n," ").concat(typeof u=="object"?u.join(" "):u))},l=u=>{console.error("".concat(n," ").concat(u))},c=[],f=u=>{c.includes(u)||(c.push(u),o(u))},p=(u,h)=>{f('"'.concat(u,'" is deprecated and will be removed in the next major release. Please use "').concat(h,'" instead.'))},y=u=>typeof u=="function"?u():u,_=u=>u&&typeof u.toPromise=="function",b=u=>_(u)?u.toPromise():Promise.resolve(u),D=u=>u&&Promise.resolve(u)===u,L={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},F=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Y={},G=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Q=u=>Object.prototype.hasOwnProperty.call(L,u),W=u=>F.indexOf(u)!==-1,me=u=>Y[u],_e=u=>{Q(u)||o('Unknown parameter "'.concat(u,'"'))},R=u=>{G.includes(u)&&o('The parameter "'.concat(u,'" is incompatible with toasts'))},I=u=>{me(u)&&p(u,me(u))},P=u=>{!u.backdrop&&u.allowOutsideClick&&o('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const h in u)_e(h),u.toast&&R(h),I(h)},S="swal2-",k=u=>{const h={};for(const g in u)h[u[g]]=S+u[g];return h},v=k(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),C=k(["success","warning","info","question","error"]),Me=()=>document.body.querySelector(".".concat(v.container)),Tt=u=>{const h=Me();return h?h.querySelector(u):null},Le=u=>Tt(".".concat(u)),ie=()=>Le(v.popup),Ce=()=>Le(v.icon),Ft=()=>Le(v.title),Ut=()=>Le(v["html-container"]),Xt=()=>Le(v.image),Ye=()=>Le(v["progress-steps"]),Ke=()=>Le(v["validation-message"]),pt=()=>Tt(".".concat(v.actions," .").concat(v.confirm)),vt=()=>Tt(".".concat(v.actions," .").concat(v.deny)),Bt=()=>Le(v["input-label"]),U=()=>Tt(".".concat(v.loader)),re=()=>Tt(".".concat(v.actions," .").concat(v.cancel)),ne=()=>Le(v.actions),oe=()=>Le(v.footer),Re=()=>Le(v["timer-progress-bar"]),Be=()=>Le(v.close),E=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,A=()=>{const u=i(ie().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((g,T)=>{const Z=parseInt(g.getAttribute("tabindex")),he=parseInt(T.getAttribute("tabindex"));return Z>he?1:Z<he?-1:0}),h=i(ie().querySelectorAll(E)).filter(g=>g.getAttribute("tabindex")!=="-1");return r(u.concat(h)).filter(g=>st(g))},O=()=>J(document.body,v.shown)&&!J(document.body,v["toast-shown"])&&!J(document.body,v["no-backdrop"]),j=()=>ie()&&J(ie(),v.toast),B=()=>ie().hasAttribute("data-loading"),q={previousBodyPadding:null},X=(u,h)=>{if(u.textContent="",h){const g=new DOMParser().parseFromString(h,"text/html");i(g.querySelector("head").childNodes).forEach(T=>{u.appendChild(T)}),i(g.querySelector("body").childNodes).forEach(T=>{u.appendChild(T)})}},J=(u,h)=>{if(!h)return!1;const g=h.split(/\s+/);for(let T=0;T<g.length;T++)if(!u.classList.contains(g[T]))return!1;return!0},ee=(u,h)=>{i(u.classList).forEach(g=>{!Object.values(v).includes(g)&&!Object.values(C).includes(g)&&!Object.values(h.showClass).includes(g)&&u.classList.remove(g)})},$=(u,h,g)=>{if(ee(u,h),h.customClass&&h.customClass[g]){if(typeof h.customClass[g]!="string"&&!h.customClass[g].forEach)return o("Invalid type of customClass.".concat(g,'! Expected string or iterable object, got "').concat(typeof h.customClass[g],'"'));K(u,h.customClass[g])}},ue=(u,h)=>{if(!h)return null;switch(h){case"select":case"textarea":case"file":return u.querySelector(".".concat(v.popup," > .").concat(v[h]));case"checkbox":return u.querySelector(".".concat(v.popup," > .").concat(v.checkbox," input"));case"radio":return u.querySelector(".".concat(v.popup," > .").concat(v.radio," input:checked"))||u.querySelector(".".concat(v.popup," > .").concat(v.radio," input:first-child"));case"range":return u.querySelector(".".concat(v.popup," > .").concat(v.range," input"));default:return u.querySelector(".".concat(v.popup," > .").concat(v.input))}},se=u=>{if(u.focus(),u.type!=="file"){const h=u.value;u.value="",u.value=h}},le=(u,h,g)=>{!u||!h||(typeof h=="string"&&(h=h.split(/\s+/).filter(Boolean)),h.forEach(T=>{Array.isArray(u)?u.forEach(Z=>{g?Z.classList.add(T):Z.classList.remove(T)}):g?u.classList.add(T):u.classList.remove(T)}))},K=(u,h)=>{le(u,h,!0)},ce=(u,h)=>{le(u,h,!1)},Pe=(u,h)=>{const g=i(u.childNodes);for(let T=0;T<g.length;T++)if(J(g[T],h))return g[T]},Se=(u,h,g)=>{g==="".concat(parseInt(g))&&(g=parseInt(g)),g||parseInt(g)===0?u.style[h]=typeof g=="number"?"".concat(g,"px"):g:u.style.removeProperty(h)},Ne=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u.style.display=h},xe=u=>{u.style.display="none"},mt=(u,h,g,T)=>{const Z=u.querySelector(h);Z&&(Z.style[g]=T)},at=(u,h,g)=>{h?Ne(u,g):xe(u)},st=u=>!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length)),Lr=()=>!st(pt())&&!st(vt())&&!st(re()),It=u=>u.scrollHeight>u.clientHeight,Jt=u=>{const h=window.getComputedStyle(u),g=parseFloat(h.getPropertyValue("animation-duration")||"0"),T=parseFloat(h.getPropertyValue("transition-duration")||"0");return g>0||T>0},Un=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const g=Re();st(g)&&(h&&(g.style.transition="none",g.style.width="100%"),setTimeout(()=>{g.style.transition="width ".concat(u/1e3,"s linear"),g.style.width="0%"},10))},Ba=()=>{const u=Re(),h=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";const g=parseInt(window.getComputedStyle(u).width),T=h/g*100;u.style.removeProperty("transition"),u.style.width="".concat(T,"%")},yo=()=>typeof window>"u"||typeof document>"u",ws=100,ge={},wo=()=>{ge.previousActiveElement&&ge.previousActiveElement.focus?(ge.previousActiveElement.focus(),ge.previousActiveElement=null):document.body&&document.body.focus()},dr=u=>new Promise(h=>{if(!u)return h();const g=window.scrollX,T=window.scrollY;ge.restoreFocusTimeout=setTimeout(()=>{wo(),h()},ws),window.scrollTo(g,T)}),$a=`
 <div aria-labelledby="`.concat(v.title,'" aria-describedby="').concat(v["html-container"],'" class="').concat(v.popup,`" tabindex="-1">
   <button type="button" class="`).concat(v.close,`"></button>
   <ul class="`).concat(v["progress-steps"],`"></ul>
   <div class="`).concat(v.icon,`"></div>
   <img class="`).concat(v.image,`" />
   <h2 class="`).concat(v.title,'" id="').concat(v.title,`"></h2>
   <div class="`).concat(v["html-container"],'" id="').concat(v["html-container"],`"></div>
   <input class="`).concat(v.input,`" />
   <input type="file" class="`).concat(v.file,`" />
   <div class="`).concat(v.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(v.select,`"></select>
   <div class="`).concat(v.radio,`"></div>
   <label for="`).concat(v.checkbox,'" class="').concat(v.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(v.label,`"></span>
   </label>
   <textarea class="`).concat(v.textarea,`"></textarea>
   <div class="`).concat(v["validation-message"],'" id="').concat(v["validation-message"],`"></div>
   <div class="`).concat(v.actions,`">
     <div class="`).concat(v.loader,`"></div>
     <button type="button" class="`).concat(v.confirm,`"></button>
     <button type="button" class="`).concat(v.deny,`"></button>
     <button type="button" class="`).concat(v.cancel,`"></button>
   </div>
   <div class="`).concat(v.footer,`"></div>
   <div class="`).concat(v["timer-progress-bar-container"],`">
     <div class="`).concat(v["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),hi=()=>{const u=Me();return u?(u.remove(),ce([document.documentElement,document.body],[v["no-backdrop"],v["toast-shown"],v["has-column"]]),!0):!1},Bn=()=>{ge.currentInstance.resetValidationMessage()},_s=()=>{const u=ie(),h=Pe(u,v.input),g=Pe(u,v.file),T=u.querySelector(".".concat(v.range," input")),Z=u.querySelector(".".concat(v.range," output")),he=Pe(u,v.select),ct=u.querySelector(".".concat(v.checkbox," input")),fn=Pe(u,v.textarea);h.oninput=Bn,g.onchange=Bn,he.onchange=Bn,ct.onchange=Bn,fn.oninput=Bn,T.oninput=()=>{Bn(),Z.value=T.value},T.onchange=()=>{Bn(),T.nextSibling.value=T.value}},ja=u=>typeof u=="string"?document.querySelector(u):u,xt=u=>{const h=ie();h.setAttribute("role",u.toast?"alert":"dialog"),h.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||h.setAttribute("aria-modal","true")},qa=u=>{window.getComputedStyle(u).direction==="rtl"&&K(Me(),v.rtl)},vs=u=>{const h=hi();if(yo()){l("SweetAlert2 requires document to initialize");return}const g=document.createElement("div");g.className=v.container,h&&K(g,v["no-transition"]),X(g,$a);const T=ja(u.target);T.appendChild(g),xt(u),qa(T),_s()},fr=(u,h)=>{u instanceof HTMLElement?h.appendChild(u):typeof u=="object"?gu(u,h):u&&X(h,u)},gu=(u,h)=>{u.jquery?yu(h,u):X(h,u.toString())},yu=(u,h)=>{if(u.textContent="",0 in h)for(let g=0;g in h;g++)u.appendChild(h[g].cloneNode(!0));else u.appendChild(h.cloneNode(!0))},En=(()=>{if(yo())return!1;const u=document.createElement("div"),h={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const g in h)if(Object.prototype.hasOwnProperty.call(h,g)&&typeof u.style[g]<"u")return h[g];return!1})(),wu=()=>{const u=document.createElement("div");u.className=v["scrollbar-measure"],document.body.appendChild(u);const h=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),h},_u=(u,h)=>{const g=ne(),T=U();!h.showConfirmButton&&!h.showDenyButton&&!h.showCancelButton?xe(g):Ne(g),$(g,h,"actions"),di(g,T,h),X(T,h.loaderHtml),$(T,h,"loader")};function di(u,h,g){const T=pt(),Z=vt(),he=re();bs(T,"confirm",g),bs(Z,"deny",g),bs(he,"cancel",g),Ha(T,Z,he,g),g.reverseButtons&&(g.toast?(u.insertBefore(he,T),u.insertBefore(Z,T)):(u.insertBefore(he,h),u.insertBefore(Z,h),u.insertBefore(T,h)))}function Ha(u,h,g,T){if(!T.buttonsStyling)return ce([u,h,g],v.styled);K([u,h,g],v.styled),T.confirmButtonColor&&(u.style.backgroundColor=T.confirmButtonColor,K(u,v["default-outline"])),T.denyButtonColor&&(h.style.backgroundColor=T.denyButtonColor,K(h,v["default-outline"])),T.cancelButtonColor&&(g.style.backgroundColor=T.cancelButtonColor,K(g,v["default-outline"]))}function bs(u,h,g){at(u,g["show".concat(s(h),"Button")],"inline-block"),X(u,g["".concat(h,"ButtonText")]),u.setAttribute("aria-label",g["".concat(h,"ButtonAriaLabel")]),u.className=v[h],$(u,g,"".concat(h,"Button")),K(u,g["".concat(h,"ButtonClass")])}function fi(u,h){typeof h=="string"?u.style.background=h:h||K([document.documentElement,document.body],v["no-backdrop"])}function $n(u,h){h in v?K(u,v[h]):(o('The "position" parameter is not valid, defaulting to "center"'),K(u,v.center))}function za(u,h){if(h&&typeof h=="string"){const g="grow-".concat(h);g in v&&K(u,v[g])}}const Wa=(u,h)=>{const g=Me();g&&(fi(g,h.backdrop),$n(g,h.position),za(g,h.grow),$(g,h,"container"))};var Ie={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const _o=["input","file","range","select","radio","checkbox","textarea"],Ka=(u,h)=>{const g=ie(),T=Ie.innerParams.get(u),Z=!T||h.input!==T.input;_o.forEach(he=>{const ct=v[he],fn=Pe(g,ct);pi(he,h.inputAttributes),fn.className=ct,Z&&xe(fn)}),h.input&&(Z&&Ga(h),Qa(h))},Ga=u=>{if(!At[u.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(u.input,'"'));const h=jn(u.input),g=At[u.input](h,u);Ne(g),setTimeout(()=>{se(g)})},vu=u=>{for(let h=0;h<u.attributes.length;h++){const g=u.attributes[h].name;["type","value","style"].includes(g)||u.removeAttribute(g)}},pi=(u,h)=>{const g=ue(ie(),u);if(g){vu(g);for(const T in h)g.setAttribute(T,h[T])}},Qa=u=>{const h=jn(u.input);u.customClass&&K(h,u.customClass.input)},Es=(u,h)=>{(!u.placeholder||h.inputPlaceholder)&&(u.placeholder=h.inputPlaceholder)},Rn=(u,h,g)=>{if(g.inputLabel){u.id=v.input;const T=document.createElement("label"),Z=v["input-label"];T.setAttribute("for",u.id),T.className=Z,K(T,g.customClass.inputLabel),T.innerText=g.inputLabel,h.insertAdjacentElement("beforebegin",T)}},jn=u=>{const h=v[u]?v[u]:v.input;return Pe(ie(),h)},At={};At.text=At.email=At.password=At.number=At.tel=At.url=(u,h)=>(typeof h.inputValue=="string"||typeof h.inputValue=="number"?u.value=h.inputValue:D(h.inputValue)||o('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h.inputValue,'"')),Rn(u,u,h),Es(u,h),u.type=h.input,u),At.file=(u,h)=>(Rn(u,u,h),Es(u,h),u),At.range=(u,h)=>{const g=u.querySelector("input"),T=u.querySelector("output");return g.value=h.inputValue,g.type=h.input,T.value=h.inputValue,Rn(g,u,h),u},At.select=(u,h)=>{if(u.textContent="",h.inputPlaceholder){const g=document.createElement("option");X(g,h.inputPlaceholder),g.value="",g.disabled=!0,g.selected=!0,u.appendChild(g)}return Rn(u,u,h),u},At.radio=u=>(u.textContent="",u),At.checkbox=(u,h)=>{const g=ue(ie(),"checkbox");g.value="1",g.id=v.checkbox,g.checked=!!h.inputValue;const T=u.querySelector("span");return X(T,h.inputPlaceholder),u},At.textarea=(u,h)=>{u.value=h.inputValue,Es(u,h),Rn(u,u,h);const g=T=>parseInt(window.getComputedStyle(T).marginLeft)+parseInt(window.getComputedStyle(T).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const T=parseInt(window.getComputedStyle(ie()).width),Z=()=>{const he=u.offsetWidth+g(u);he>T?ie().style.width="".concat(he,"px"):ie().style.width=null};new MutationObserver(Z).observe(u,{attributes:!0,attributeFilter:["style"]})}}),u};const bu=(u,h)=>{const g=Ut();$(g,h,"htmlContainer"),h.html?(fr(h.html,g),Ne(g,"block")):h.text?(g.textContent=h.text,Ne(g,"block")):xe(g),Ka(u,h)},Ya=(u,h)=>{const g=oe();at(g,h.footer),h.footer&&fr(h.footer,g),$(g,h,"footer")},Xa=(u,h)=>{const g=Be();X(g,h.closeButtonHtml),$(g,h,"closeButton"),at(g,h.showCloseButton),g.setAttribute("aria-label",h.closeButtonAriaLabel)},Ja=(u,h)=>{const g=Ie.innerParams.get(u),T=Ce();if(g&&h.icon===g.icon){tl(T,h),mi(T,h);return}if(!h.icon&&!h.iconHtml)return xe(T);if(h.icon&&Object.keys(C).indexOf(h.icon)===-1)return l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon,'"')),xe(T);Ne(T),tl(T,h),mi(T,h),K(T,h.showClass.icon)},mi=(u,h)=>{for(const g in C)h.icon!==g&&ce(u,C[g]);K(u,C[h.icon]),Eu(u,h),vo(),$(u,h,"icon")},vo=()=>{const u=ie(),h=window.getComputedStyle(u).getPropertyValue("background-color"),g=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let T=0;T<g.length;T++)g[T].style.backgroundColor=h},Za=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,el=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,tl=(u,h)=>{u.textContent="",h.iconHtml?X(u,bo(h.iconHtml)):h.icon==="success"?X(u,Za):h.icon==="error"?X(u,el):X(u,bo({question:"?",warning:"!",info:"i"}[h.icon]))},Eu=(u,h)=>{if(h.iconColor){u.style.color=h.iconColor,u.style.borderColor=h.iconColor;for(const g of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])mt(u,g,"backgroundColor",h.iconColor);mt(u,".swal2-success-ring","borderColor",h.iconColor)}},bo=u=>'<div class="'.concat(v["icon-content"],'">').concat(u,"</div>"),nl=(u,h)=>{const g=Xt();if(!h.imageUrl)return xe(g);Ne(g,""),g.setAttribute("src",h.imageUrl),g.setAttribute("alt",h.imageAlt),Se(g,"width",h.imageWidth),Se(g,"height",h.imageHeight),g.className=v.image,$(g,h,"image")},Tu=u=>{const h=document.createElement("li");return K(h,v["progress-step"]),X(h,u),h},pr=u=>{const h=document.createElement("li");return K(h,v["progress-step-line"]),u.progressStepsDistance&&(h.style.width=u.progressStepsDistance),h},Sn=(u,h)=>{const g=Ye();if(!h.progressSteps||h.progressSteps.length===0)return xe(g);Ne(g),g.textContent="",h.currentProgressStep>=h.progressSteps.length&&o("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),h.progressSteps.forEach((T,Z)=>{const he=Tu(T);if(g.appendChild(he),Z===h.currentProgressStep&&K(he,v["active-progress-step"]),Z!==h.progressSteps.length-1){const ct=pr(h);g.appendChild(ct)}})},gi=(u,h)=>{const g=Ft();at(g,h.title||h.titleText,"block"),h.title&&fr(h.title,g),h.titleText&&(g.innerText=h.titleText),$(g,h,"title")},yi=(u,h)=>{const g=Me(),T=ie();h.toast?(Se(g,"width",h.width),T.style.width="100%",T.insertBefore(U(),Ce())):Se(T,"width",h.width),Se(T,"padding",h.padding),h.color&&(T.style.color=h.color),h.background&&(T.style.background=h.background),xe(Ke()),rl(T,h)},rl=(u,h)=>{u.className="".concat(v.popup," ").concat(st(u)?h.showClass.popup:""),h.toast?(K([document.documentElement,document.body],v["toast-shown"]),K(u,v.toast)):K(u,v.modal),$(u,h,"popup"),typeof h.customClass=="string"&&K(u,h.customClass),h.icon&&K(u,v["icon-".concat(h.icon)])},Ge=(u,h)=>{yi(u,h),Wa(u,h),Sn(u,h),Ja(u,h),nl(u,h),gi(u,h),Xa(u,h),bu(u,h),_u(u,h),Ya(u,h),typeof h.didRender=="function"&&h.didRender(ie())},kn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ts=()=>{i(document.body.children).forEach(u=>{u===Me()||u.contains(Me())||(u.hasAttribute("aria-hidden")&&u.setAttribute("data-previous-aria-hidden",u.getAttribute("aria-hidden")),u.setAttribute("aria-hidden","true"))})},Mr=()=>{i(document.body.children).forEach(u=>{u.hasAttribute("data-previous-aria-hidden")?(u.setAttribute("aria-hidden",u.getAttribute("data-previous-aria-hidden")),u.removeAttribute("data-previous-aria-hidden")):u.removeAttribute("aria-hidden")})},sl=["swal-title","swal-html","swal-footer"],il=u=>{const h=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!h)return{};const g=h.content;return ol(g),Object.assign(Iu(g),Au(g),Cu(g),Pu(g),Is(g),qn(g,sl))},Iu=u=>{const h={};return i(u.querySelectorAll("swal-param")).forEach(g=>{Hn(g,["name","value"]);const T=g.getAttribute("name"),Z=g.getAttribute("value");typeof L[T]=="boolean"&&Z==="false"&&(h[T]=!1),typeof L[T]=="object"&&(h[T]=JSON.parse(Z))}),h},Au=u=>{const h={};return i(u.querySelectorAll("swal-button")).forEach(g=>{Hn(g,["type","color","aria-label"]);const T=g.getAttribute("type");h["".concat(T,"ButtonText")]=g.innerHTML,h["show".concat(s(T),"Button")]=!0,g.hasAttribute("color")&&(h["".concat(T,"ButtonColor")]=g.getAttribute("color")),g.hasAttribute("aria-label")&&(h["".concat(T,"ButtonAriaLabel")]=g.getAttribute("aria-label"))}),h},Cu=u=>{const h={},g=u.querySelector("swal-image");return g&&(Hn(g,["src","width","height","alt"]),g.hasAttribute("src")&&(h.imageUrl=g.getAttribute("src")),g.hasAttribute("width")&&(h.imageWidth=g.getAttribute("width")),g.hasAttribute("height")&&(h.imageHeight=g.getAttribute("height")),g.hasAttribute("alt")&&(h.imageAlt=g.getAttribute("alt"))),h},Pu=u=>{const h={},g=u.querySelector("swal-icon");return g&&(Hn(g,["type","color"]),g.hasAttribute("type")&&(h.icon=g.getAttribute("type")),g.hasAttribute("color")&&(h.iconColor=g.getAttribute("color")),h.iconHtml=g.innerHTML),h},Is=u=>{const h={},g=u.querySelector("swal-input");g&&(Hn(g,["type","label","placeholder","value"]),h.input=g.getAttribute("type")||"text",g.hasAttribute("label")&&(h.inputLabel=g.getAttribute("label")),g.hasAttribute("placeholder")&&(h.inputPlaceholder=g.getAttribute("placeholder")),g.hasAttribute("value")&&(h.inputValue=g.getAttribute("value")));const T=u.querySelectorAll("swal-input-option");return T.length&&(h.inputOptions={},i(T).forEach(Z=>{Hn(Z,["value"]);const he=Z.getAttribute("value"),ct=Z.innerHTML;h.inputOptions[he]=ct})),h},qn=(u,h)=>{const g={};for(const T in h){const Z=h[T],he=u.querySelector(Z);he&&(Hn(he,[]),g[Z.replace(/^swal-/,"")]=he.innerHTML.trim())}return g},ol=u=>{const h=sl.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);i(u.children).forEach(g=>{const T=g.tagName.toLowerCase();h.indexOf(T)===-1&&o("Unrecognized element <".concat(T,">"))})},Hn=(u,h)=>{i(u.attributes).forEach(g=>{h.indexOf(g.name)===-1&&o(['Unrecognized attribute "'.concat(g.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(h.length?"Allowed attributes are: ".concat(h.join(", ")):"To set the value, use HTML within the element.")])})};var Eo={email:(u,h)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid email address"),url:(u,h)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid URL")};function Fr(u){u.inputValidator||Object.keys(Eo).forEach(h=>{u.input===h&&(u.inputValidator=Eo[h])})}function Ru(u){(!u.target||typeof u.target=="string"&&!document.querySelector(u.target)||typeof u.target!="string"&&!u.target.appendChild)&&(o('Target parameter is not valid, defaulting to "body"'),u.target="body")}function Su(u){Fr(u),u.showLoaderOnConfirm&&!u.preConfirm&&o(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ru(u),typeof u.title=="string"&&(u.title=u.title.split(`
`).join("<br />")),vs(u)}class ku{constructor(h,g){this.callback=h,this.remaining=g,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(h){const g=this.running;return g&&this.stop(),this.remaining+=h,g&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const zn=()=>{q.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(q.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(q.previousBodyPadding+wu(),"px"))},xu=()=>{q.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(q.previousBodyPadding,"px"),q.previousBodyPadding=null)},Ou=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!J(document.body,v.iosfix)){const u=document.body.scrollTop;document.body.style.top="".concat(u*-1,"px"),K(document.body,v.iosfix),_i(),wi()}},wi=()=>{const u=navigator.userAgent,h=!!u.match(/iPad/i)||!!u.match(/iPhone/i),g=!!u.match(/WebKit/i);h&&g&&!u.match(/CriOS/i)&&ie().scrollHeight>window.innerHeight-44&&(Me().style.paddingBottom="".concat(44,"px"))},_i=()=>{const u=Me();let h;u.ontouchstart=g=>{h=al(g)},u.ontouchmove=g=>{h&&(g.preventDefault(),g.stopPropagation())}},al=u=>{const h=u.target,g=Me();return As(u)||Cs(u)?!1:h===g||!It(g)&&h.tagName!=="INPUT"&&h.tagName!=="TEXTAREA"&&!(It(Ut())&&Ut().contains(h))},As=u=>u.touches&&u.touches.length&&u.touches[0].touchType==="stylus",Cs=u=>u.touches&&u.touches.length>1,ll=()=>{if(J(document.body,v.iosfix)){const u=parseInt(document.body.style.top,10);ce(document.body,v.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},vi=10,et=u=>{const h=Me(),g=ie();typeof u.willOpen=="function"&&u.willOpen(g);const T=window.getComputedStyle(document.body).overflowY;hl(h,g,u),setTimeout(()=>{Du(h,g)},vi),O()&&(ul(h,u.scrollbarPadding,T),Ts()),!j()&&!ge.previousActiveElement&&(ge.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(()=>u.didOpen(g)),ce(h,v["no-transition"])},cl=u=>{const h=ie();if(u.target!==h)return;const g=Me();h.removeEventListener(En,cl),g.style.overflowY="auto"},Du=(u,h)=>{En&&Jt(h)?(u.style.overflowY="hidden",h.addEventListener(En,cl)):u.style.overflowY="auto"},ul=(u,h,g)=>{Ou(),h&&g!=="hidden"&&zn(),setTimeout(()=>{u.scrollTop=0})},hl=(u,h,g)=>{K(u,g.showClass.backdrop),h.style.setProperty("opacity","0","important"),Ne(h,"grid"),setTimeout(()=>{K(h,g.showClass.popup),h.style.removeProperty("opacity")},vi),K([document.documentElement,document.body],v.shown),g.heightAuto&&g.backdrop&&!g.toast&&K([document.documentElement,document.body],v["height-auto"])},mr=u=>{let h=ie();h||new Il,h=ie();const g=U();j()?xe(Ce()):bi(h,u),Ne(g),h.setAttribute("data-loading",!0),h.setAttribute("aria-busy",!0),h.focus()},bi=(u,h)=>{const g=ne(),T=U();!h&&st(pt())&&(h=pt()),Ne(g),h&&(xe(h),T.setAttribute("data-button-to-replace",h.className)),T.parentNode.insertBefore(T,h),K([u,g],v.loading)},dl=(u,h)=>{h.input==="select"||h.input==="radio"?pl(u,h):["text","email","number","tel","textarea"].includes(h.input)&&(_(h.inputValue)||D(h.inputValue))&&(mr(pt()),To(u,h))},xn=(u,h)=>{const g=u.getInput();if(!g)return null;switch(h.input){case"checkbox":return fl(g);case"radio":return Nu(g);case"file":return Ps(g);default:return h.inputAutoTrim?g.value.trim():g.value}},fl=u=>u.checked?1:0,Nu=u=>u.checked?u.value:null,Ps=u=>u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null,pl=(u,h)=>{const g=ie(),T=Z=>Ei[h.input](g,Ti(Z),h);_(h.inputOptions)||D(h.inputOptions)?(mr(pt()),b(h.inputOptions).then(Z=>{u.hideLoading(),T(Z)})):typeof h.inputOptions=="object"?T(h.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))},To=(u,h)=>{const g=u.getInput();xe(g),b(h.inputValue).then(T=>{g.value=h.input==="number"?parseFloat(T)||0:"".concat(T),Ne(g),g.focus(),u.hideLoading()}).catch(T=>{l("Error in inputValue promise: ".concat(T)),g.value="",Ne(g),g.focus(),u.hideLoading()})},Ei={select:(u,h,g)=>{const T=Pe(u,v.select),Z=(he,ct,fn)=>{const en=document.createElement("option");en.value=fn,X(en,ct),en.selected=Rs(fn,g.inputValue),he.appendChild(en)};h.forEach(he=>{const ct=he[0],fn=he[1];if(Array.isArray(fn)){const en=document.createElement("optgroup");en.label=ct,en.disabled=!1,T.appendChild(en),fn.forEach(Pi=>Z(en,Pi[1],Pi[0]))}else Z(T,fn,ct)}),T.focus()},radio:(u,h,g)=>{const T=Pe(u,v.radio);h.forEach(he=>{const ct=he[0],fn=he[1],en=document.createElement("input"),Pi=document.createElement("label");en.type="radio",en.name=v.radio,en.value=ct,Rs(ct,g.inputValue)&&(en.checked=!0);const Uu=document.createElement("span");X(Uu,fn),Uu.className=v.label,Pi.appendChild(en),Pi.appendChild(Uu),T.appendChild(Pi)});const Z=T.querySelectorAll("input");Z.length&&Z[0].focus()}},Ti=u=>{const h=[];return typeof Map<"u"&&u instanceof Map?u.forEach((g,T)=>{let Z=g;typeof Z=="object"&&(Z=Ti(Z)),h.push([T,Z])}):Object.keys(u).forEach(g=>{let T=u[g];typeof T=="object"&&(T=Ti(T)),h.push([g,T])}),h},Rs=(u,h)=>h&&h.toString()===u.toString();function ml(){const u=Ie.innerParams.get(this);if(!u)return;const h=Ie.domCache.get(this);xe(h.loader),j()?u.icon&&Ne(Ce()):gl(h),ce([h.popup,h.actions],v.loading),h.popup.removeAttribute("aria-busy"),h.popup.removeAttribute("data-loading"),h.confirmButton.disabled=!1,h.denyButton.disabled=!1,h.cancelButton.disabled=!1}const gl=u=>{const h=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));h.length?Ne(h[0],"inline-block"):Lr()&&xe(u.actions)};function Ss(u){const h=Ie.innerParams.get(u||this),g=Ie.domCache.get(u||this);return g?ue(g.popup,h.input):null}var Ur={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function Io(u,h,g,T){j()?Co(u,T):(dr(g).then(()=>Co(u,T)),ge.keydownTarget.removeEventListener("keydown",ge.keydownHandler,{capture:ge.keydownListenerCapture}),ge.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(h.setAttribute("style","display:none !important"),h.removeAttribute("class"),h.innerHTML=""):h.remove(),O()&&(xu(),ll(),Mr()),Ao()}function Ao(){ce([document.documentElement,document.body],[v.shown,v["height-auto"],v["no-backdrop"],v["toast-shown"]])}function Br(u){u=gr(u);const h=Ur.swalPromiseResolve.get(this),g=Ii(this);this.isAwaitingPromise()?u.isDismissed||($r(this),h(u)):g&&h(u)}function yl(){return!!Ie.awaitingPromise.get(this)}const Ii=u=>{const h=ie();if(!h)return!1;const g=Ie.innerParams.get(u);if(!g||J(h,g.hideClass.popup))return!1;ce(h,g.showClass.popup),K(h,g.hideClass.popup);const T=Me();return ce(T,g.showClass.backdrop),K(T,g.hideClass.backdrop),_l(u,h,g),!0};function wl(u){const h=Ur.swalPromiseReject.get(this);$r(this),h&&h(u)}const $r=u=>{u.isAwaitingPromise()&&(Ie.awaitingPromise.delete(u),Ie.innerParams.get(u)||u._destroy())},gr=u=>typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u),_l=(u,h,g)=>{const T=Me(),Z=En&&Jt(h);typeof g.willClose=="function"&&g.willClose(h),Z?vl(u,h,T,g.returnFocus,g.didClose):Io(u,T,g.returnFocus,g.didClose)},vl=(u,h,g,T,Z)=>{ge.swalCloseEventFinishedCallback=Io.bind(null,u,g,T,Z),h.addEventListener(En,function(he){he.target===h&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback)})},Co=(u,h)=>{setTimeout(()=>{typeof h=="function"&&h.bind(u.params)(),u._destroy()})};function Po(u,h,g){const T=Ie.domCache.get(u);h.forEach(Z=>{T[Z].disabled=g})}function ks(u,h){if(!u)return!1;if(u.type==="radio"){const g=u.parentNode.parentNode.querySelectorAll("input");for(let T=0;T<g.length;T++)g[T].disabled=h}else u.disabled=h}function Zt(){Po(this,["confirmButton","denyButton","cancelButton"],!1)}function bl(){Po(this,["confirmButton","denyButton","cancelButton"],!0)}function El(){return ks(this.getInput(),!1)}function jr(){return ks(this.getInput(),!0)}function a(u){const h=Ie.domCache.get(this),g=Ie.innerParams.get(this);X(h.validationMessage,u),h.validationMessage.className=v["validation-message"],g.customClass&&g.customClass.validationMessage&&K(h.validationMessage,g.customClass.validationMessage),Ne(h.validationMessage);const T=this.getInput();T&&(T.setAttribute("aria-invalid",!0),T.setAttribute("aria-describedby",v["validation-message"]),se(T),K(T,v.inputerror))}function d(){const u=Ie.domCache.get(this);u.validationMessage&&xe(u.validationMessage);const h=this.getInput();h&&(h.removeAttribute("aria-invalid"),h.removeAttribute("aria-describedby"),ce(h,v.inputerror))}function m(){return Ie.domCache.get(this).progressSteps}function w(u){const h=ie(),g=Ie.innerParams.get(this);if(!h||J(h,g.hideClass.popup))return o("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const T=x(u),Z=Object.assign({},g,T);Ge(this,Z),Ie.innerParams.set(this,Z),Object.defineProperties(this,{params:{value:Object.assign({},this.params,u),writable:!1,enumerable:!0}})}const x=u=>{const h={};return Object.keys(u).forEach(g=>{W(g)?h[g]=u[g]:o('Invalid parameter to update: "'.concat(g,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),h};function N(){const u=Ie.domCache.get(this),h=Ie.innerParams.get(this);if(!h){$e(this);return}u.popup&&ge.swalCloseEventFinishedCallback&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback),ge.deferDisposalTimer&&(clearTimeout(ge.deferDisposalTimer),delete ge.deferDisposalTimer),typeof h.didDestroy=="function"&&h.didDestroy(),te(this)}const te=u=>{$e(u),delete u.params,delete ge.keydownHandler,delete ge.keydownTarget,delete ge.currentInstance},$e=u=>{u.isAwaitingPromise()?(lt(Ie,u),Ie.awaitingPromise.set(u,!0)):(lt(Ur,u),lt(Ie,u))},lt=(u,h)=>{for(const g in u)u[g].delete(h)};var Oe=Object.freeze({hideLoading:ml,disableLoading:ml,getInput:Ss,close:Br,isAwaitingPromise:yl,rejectPromise:wl,handleAwaitingPromise:$r,closePopup:Br,closeModal:Br,closeToast:Br,enableButtons:Zt,disableButtons:bl,enableInput:El,disableInput:jr,showValidationMessage:a,resetValidationMessage:d,getProgressSteps:m,update:w,_destroy:N});const Ct=u=>{const h=Ie.innerParams.get(u);u.disableButtons(),h.input?sn(u,"confirm"):Vu(u,!0)},Pt=u=>{const h=Ie.innerParams.get(u);u.disableButtons(),h.returnInputValueOnDeny?sn(u,"deny"):xs(u,!1)},qr=(u,h)=>{u.disableButtons(),h(kn.cancel)},sn=(u,h)=>{const g=Ie.innerParams.get(u);if(!g.input)return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(s(h)));const T=xn(u,g);g.inputValidator?Ai(u,T,h):u.getInput().checkValidity()?h==="deny"?xs(u,T):Vu(u,T):(u.enableButtons(),u.showValidationMessage(g.validationMessage))},Ai=(u,h,g)=>{const T=Ie.innerParams.get(u);u.disableInput(),Promise.resolve().then(()=>b(T.inputValidator(h,T.validationMessage))).then(Z=>{u.enableButtons(),u.enableInput(),Z?u.showValidationMessage(Z):g==="deny"?xs(u,h):Vu(u,h)})},xs=(u,h)=>{const g=Ie.innerParams.get(u||void 0);g.showLoaderOnDeny&&mr(vt()),g.preDeny?(Ie.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>b(g.preDeny(h,g.validationMessage))).then(T=>{T===!1?(u.hideLoading(),$r(u)):u.closePopup({isDenied:!0,value:typeof T>"u"?h:T})}).catch(T=>jf(u||void 0,T))):u.closePopup({isDenied:!0,value:h})},$f=(u,h)=>{u.closePopup({isConfirmed:!0,value:h})},jf=(u,h)=>{u.rejectPromise(h)},Vu=(u,h)=>{const g=Ie.innerParams.get(u||void 0);g.showLoaderOnConfirm&&mr(),g.preConfirm?(u.resetValidationMessage(),Ie.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>b(g.preConfirm(h,g.validationMessage))).then(T=>{st(Ke())||T===!1?(u.hideLoading(),$r(u)):$f(u,typeof T>"u"?h:T)}).catch(T=>jf(u||void 0,T))):$f(u,h)},n0=(u,h,g)=>{Ie.innerParams.get(u).toast?r0(u,h,g):(i0(h),o0(h),a0(u,h,g))},r0=(u,h,g)=>{h.popup.onclick=()=>{const T=Ie.innerParams.get(u);T&&(s0(T)||T.timer||T.input)||g(kn.close)}},s0=u=>u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton;let Tl=!1;const i0=u=>{u.popup.onmousedown=()=>{u.container.onmouseup=function(h){u.container.onmouseup=void 0,h.target===u.container&&(Tl=!0)}}},o0=u=>{u.container.onmousedown=()=>{u.popup.onmouseup=function(h){u.popup.onmouseup=void 0,(h.target===u.popup||u.popup.contains(h.target))&&(Tl=!0)}}},a0=(u,h,g)=>{h.container.onclick=T=>{const Z=Ie.innerParams.get(u);if(Tl){Tl=!1;return}T.target===h.container&&y(Z.allowOutsideClick)&&g(kn.backdrop)}},l0=()=>st(ie()),qf=()=>pt()&&pt().click(),c0=()=>vt()&&vt().click(),u0=()=>re()&&re().click(),h0=(u,h,g,T)=>{h.keydownTarget&&h.keydownHandlerAdded&&(h.keydownTarget.removeEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!1),g.toast||(h.keydownHandler=Z=>f0(u,Z,T),h.keydownTarget=g.keydownListenerCapture?window:ie(),h.keydownListenerCapture=g.keydownListenerCapture,h.keydownTarget.addEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!0)},Lu=(u,h,g)=>{const T=A();if(T.length)return h=h+g,h===T.length?h=0:h===-1&&(h=T.length-1),T[h].focus();ie().focus()},Hf=["ArrowRight","ArrowDown"],d0=["ArrowLeft","ArrowUp"],f0=(u,h,g)=>{const T=Ie.innerParams.get(u);T&&(h.isComposing||h.keyCode===229||(T.stopKeydownPropagation&&h.stopPropagation(),h.key==="Enter"?p0(u,h,T):h.key==="Tab"?m0(h,T):[...Hf,...d0].includes(h.key)?g0(h.key):h.key==="Escape"&&y0(h,T,g)))},p0=(u,h,g)=>{if(y(g.allowEnterKey)&&h.target&&u.getInput()&&h.target.outerHTML===u.getInput().outerHTML){if(["textarea","file"].includes(g.input))return;qf(),h.preventDefault()}},m0=(u,h)=>{const g=u.target,T=A();let Z=-1;for(let he=0;he<T.length;he++)if(g===T[he]){Z=he;break}u.shiftKey?Lu(h,Z,-1):Lu(h,Z,1),u.stopPropagation(),u.preventDefault()},g0=u=>{const h=pt(),g=vt(),T=re();if(![h,g,T].includes(document.activeElement))return;const Z=Hf.includes(u)?"nextElementSibling":"previousElementSibling";let he=document.activeElement;for(let ct=0;ct<ne().children.length;ct++){if(he=he[Z],!he)return;if(st(he)&&he instanceof HTMLButtonElement)break}he instanceof HTMLButtonElement&&he.focus()},y0=(u,h,g)=>{y(h.allowEscapeKey)&&(u.preventDefault(),g(kn.esc))},w0=u=>typeof u=="object"&&u.jquery,zf=u=>u instanceof Element||w0(u),_0=u=>{const h={};return typeof u[0]=="object"&&!zf(u[0])?Object.assign(h,u[0]):["title","html","icon"].forEach((g,T)=>{const Z=u[T];typeof Z=="string"||zf(Z)?h[g]=Z:Z!==void 0&&l("Unexpected type of ".concat(g,'! Expected "string" or "Element", got ').concat(typeof Z))}),h};function v0(){const u=this;for(var h=arguments.length,g=new Array(h),T=0;T<h;T++)g[T]=arguments[T];return new u(...g)}function b0(u){class h extends this{_main(T,Z){return super._main(T,Object.assign({},u,Z))}}return h}const E0=()=>ge.timeout&&ge.timeout.getTimerLeft(),Wf=()=>{if(ge.timeout)return Ba(),ge.timeout.stop()},Kf=()=>{if(ge.timeout){const u=ge.timeout.start();return Un(u),u}},T0=()=>{const u=ge.timeout;return u&&(u.running?Wf():Kf())},I0=u=>{if(ge.timeout){const h=ge.timeout.increase(u);return Un(h,!0),h}},A0=()=>ge.timeout&&ge.timeout.isRunning();let Gf=!1;const Mu={};function C0(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Mu[u]=this,Gf||(document.body.addEventListener("click",P0),Gf=!0)}const P0=u=>{for(let h=u.target;h&&h!==document;h=h.parentNode)for(const g in Mu){const T=h.getAttribute(g);if(T){Mu[g].fire({template:T});return}}};var R0=Object.freeze({isValidParameter:Q,isUpdatableParameter:W,isDeprecatedParameter:me,argsToParams:_0,isVisible:l0,clickConfirm:qf,clickDeny:c0,clickCancel:u0,getContainer:Me,getPopup:ie,getTitle:Ft,getHtmlContainer:Ut,getImage:Xt,getIcon:Ce,getInputLabel:Bt,getCloseButton:Be,getActions:ne,getConfirmButton:pt,getDenyButton:vt,getCancelButton:re,getLoader:U,getFooter:oe,getTimerProgressBar:Re,getFocusableElements:A,getValidationMessage:Ke,isLoading:B,fire:v0,mixin:b0,showLoading:mr,enableLoading:mr,getTimerLeft:E0,stopTimer:Wf,resumeTimer:Kf,toggleTimer:T0,increaseTimer:I0,isTimerRunning:A0,bindClickHandler:C0});let Fu;class Ci{constructor(){if(typeof window>"u")return;Fu=this;for(var h=arguments.length,g=new Array(h),T=0;T<h;T++)g[T]=arguments[T];const Z=Object.freeze(this.constructor.argsToParams(g));Object.defineProperties(this,{params:{value:Z,writable:!1,enumerable:!0,configurable:!0}});const he=this._main(this.params);Ie.promise.set(this,he)}_main(h){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};P(Object.assign({},g,h)),ge.currentInstance&&(ge.currentInstance._destroy(),O()&&Mr()),ge.currentInstance=this;const T=k0(h,g);Su(T),Object.freeze(T),ge.timeout&&(ge.timeout.stop(),delete ge.timeout),clearTimeout(ge.restoreFocusTimeout);const Z=x0(this);return Ge(this,T),Ie.innerParams.set(this,T),S0(this,Z,T)}then(h){return Ie.promise.get(this).then(h)}finally(h){return Ie.promise.get(this).finally(h)}}const S0=(u,h,g)=>new Promise((T,Z)=>{const he=ct=>{u.closePopup({isDismissed:!0,dismiss:ct})};Ur.swalPromiseResolve.set(u,T),Ur.swalPromiseReject.set(u,Z),h.confirmButton.onclick=()=>Ct(u),h.denyButton.onclick=()=>Pt(u),h.cancelButton.onclick=()=>qr(u,he),h.closeButton.onclick=()=>he(kn.close),n0(u,h,he),h0(u,ge,g,he),dl(u,g),et(g),O0(ge,g,he),D0(h,g),setTimeout(()=>{h.container.scrollTop=0})}),k0=(u,h)=>{const g=il(u),T=Object.assign({},L,h,g,u);return T.showClass=Object.assign({},L.showClass,T.showClass),T.hideClass=Object.assign({},L.hideClass,T.hideClass),T},x0=u=>{const h={popup:ie(),container:Me(),actions:ne(),confirmButton:pt(),denyButton:vt(),cancelButton:re(),loader:U(),closeButton:Be(),validationMessage:Ke(),progressSteps:Ye()};return Ie.domCache.set(u,h),h},O0=(u,h,g)=>{const T=Re();xe(T),h.timer&&(u.timeout=new ku(()=>{g("timer"),delete u.timeout},h.timer),h.timerProgressBar&&(Ne(T),$(T,h,"timerProgressBar"),setTimeout(()=>{u.timeout&&u.timeout.running&&Un(h.timer)})))},D0=(u,h)=>{if(!h.toast){if(!y(h.allowEnterKey))return V0();N0(u,h)||Lu(h,-1,1)}},N0=(u,h)=>h.focusDeny&&st(u.denyButton)?(u.denyButton.focus(),!0):h.focusCancel&&st(u.cancelButton)?(u.cancelButton.focus(),!0):h.focusConfirm&&st(u.confirmButton)?(u.confirmButton.focus(),!0):!1,V0=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Ci.prototype,Oe),Object.assign(Ci,R0),Object.keys(Oe).forEach(u=>{Ci[u]=function(){if(Fu)return Fu[u](...arguments)}}),Ci.DismissReason=kn,Ci.version="11.4.4";const Il=Ci;return Il.default=Il,Il}),typeof zr<"u"&&zr.Sweetalert2&&(zr.swal=zr.sweetAlert=zr.Swal=zr.SweetAlert=zr.Sweetalert2)})(Nv);var y2=Nv.exports;const Dl=g2(y2);class w2{static install(e,n={}){var r;const s=Dl.mixin(n),i=function(...o){return s.fire.call(s,...o)};Object.assign(i,Dl),Object.keys(Dl).filter(o=>typeof Dl[o]=="function").forEach(o=>{i[o]=s[o].bind(s)}),(r=e.config)!=null&&r.globalProperties&&!e.config.globalProperties.$swal?(e.config.globalProperties.$swal=i,e.provide("$swal",i)):Object.prototype.hasOwnProperty.call(e,"$swal")||(e.prototype.$swal=i,e.swal=i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="firebasestorage.googleapis.com",Lv="storageBucket",_2=2*60*1e3,v2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Pn{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function hh(t){return"storage/"+t}function bf(){const t="An unknown error occurred, please check the error payload for server response.";return new ot(it.UNKNOWN,t)}function b2(t){return new ot(it.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function E2(t){return new ot(it.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function T2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(it.UNAUTHENTICATED,t)}function I2(){return new ot(it.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function A2(t){return new ot(it.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function C2(){return new ot(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P2(){return new ot(it.CANCELED,"User canceled the upload/download.")}function R2(t){return new ot(it.INVALID_URL,"Invalid URL '"+t+"'.")}function S2(t){return new ot(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function k2(){return new ot(it.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lv+"' property when initializing the app?")}function x2(){return new ot(it.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O2(){return new ot(it.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function D2(t){return new ot(it.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rd(t){return new ot(it.INVALID_ARGUMENT,t)}function Mv(){return new ot(it.APP_DELETED,"The Firebase app was deleted.")}function N2(t){return new ot(it.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xo(t,e){return new ot(it.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xo(t){throw new ot(it.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw S2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function f(W){W.path_=decodeURIComponent(W.path)}const p="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",b=new RegExp(`^https?://${y}/${p}/b/${s}/o${_}`,"i"),D={bucket:1,path:3},L=n===Vv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",Y=new RegExp(`^https?://${L}/${s}/${F}`,"i"),Q=[{regex:l,indices:c,postModify:i},{regex:b,indices:D,postModify:f},{regex:Y,indices:{bucket:1,path:2},postModify:f}];for(let W=0;W<Q.length;W++){const me=Q[W],_e=me.regex.exec(e);if(_e){const R=_e[me.indices.bucket];let I=_e[me.indices.path];I||(I=""),r=new yn(R,I),me.postModify(r);break}}if(r==null)throw R2(e);return r}}class V2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let f=!1;function p(...F){f||(f=!0,e.apply(null,F))}function y(F){s=setTimeout(()=>{s=null,t(b,c())},F)}function _(){i&&clearTimeout(i)}function b(F,...Y){if(f){_();return}if(F){_(),p.call(null,F,...Y);return}if(c()||o){_(),p.call(null,F,...Y);return}r<64&&(r*=2);let Q;l===1?(l=2,Q=0):Q=(r+Math.random())*1e3,y(Q)}let D=!1;function L(F){D||(D=!0,_(),!f&&(s!==null?(F||(l=2),clearTimeout(s),y(0)):F||(l=1)))}return y(0),i=setTimeout(()=>{o=!0,L(!0)},n),L}function M2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){return t!==void 0}function U2(t){return typeof t=="object"&&!Array.isArray(t)}function Ef(t){return typeof t=="string"||t instanceof String}function Qm(t){return Tf()&&t instanceof Blob}function Tf(){return typeof Blob<"u"}function Ym(t,e,n,r){if(r<e)throw rd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Fv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var qs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qs||(qs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,s,i,o,l,c,f,p,y,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=f,this.progressCallback_=p,this.connectionFactory_=y,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,D)=>{this.resolve_=b,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Nl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,f)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===qs.NO_ERROR,c=i.getStatus();if(!l||B2(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===qs.ABORT;r(!1,new Nl(!1,null,p));return}const f=this.successCodes_.indexOf(c)!==-1;r(!0,new Nl(f,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());F2(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=bf();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Mv():P2();o(c)}else{const c=C2();o(c)}};this.canceled_?n(!1,new Nl(!1,null,!0)):this.backoffId_=L2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&M2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function j2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function z2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function W2(t,e,n,r,s,i,o=!0){const l=Fv(t.urlParams),c=t.url+l,f=Object.assign({},t.headers);return H2(f,e),j2(f,n),q2(f,i),z2(f,r),new $2(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function G2(...t){const e=K2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tf())return new Blob(t);throw new ot(it.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Q2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){if(typeof atob>"u")throw D2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dh{constructor(e,n){this.data=e,this.contentType=n||null}}function X2(t,e){switch(t){case Zn.RAW:return new dh(Uv(e));case Zn.BASE64:case Zn.BASE64URL:return new dh(Bv(t,e));case Zn.DATA_URL:return new dh(Z2(e),ex(e))}throw bf()}function Uv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function J2(t){let e;try{e=decodeURIComponent(t)}catch{throw Xo(Zn.DATA_URL,"Malformed data URL.")}return Uv(e)}function Bv(t,e){switch(t){case Zn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Y2(e)}catch(s){throw s.message.includes("polyfill")?s:Xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $v{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xo(Zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Z2(t){const e=new $v(t);return e.base64?Bv(Zn.BASE64,e.rest):J2(e.rest)}function ex(t){return new $v(t).contentType}function tx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){let r=0,s="";Qm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qm(this.data_)){const r=this.data_,s=Q2(r,e,n);return s===null?null:new es(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new es(r,!0)}}static getBlob(...e){if(Tf()){const n=e.map(r=>r instanceof es?r.data_:r);return new es(G2.apply(null,n))}else{const n=e.map(o=>Ef(o)?X2(Zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new es(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){let e;try{e=JSON.parse(t)}catch{return null}return U2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function qv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t,e){return e}class tn{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||sx}}let Vl=null;function ix(t){return!Ef(t)||t.length<2?t:qv(t)}function Hv(){if(Vl)return Vl;const t=[];t.push(new tn("bucket")),t.push(new tn("generation")),t.push(new tn("metageneration")),t.push(new tn("name","fullPath",!0));function e(i,o){return ix(o)}const n=new tn("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new tn("size");return s.xform=r,t.push(s),t.push(new tn("timeCreated")),t.push(new tn("updated")),t.push(new tn("md5Hash",null,!0)),t.push(new tn("cacheControl",null,!0)),t.push(new tn("contentDisposition",null,!0)),t.push(new tn("contentEncoding",null,!0)),t.push(new tn("contentLanguage",null,!0)),t.push(new tn("contentType",null,!0)),t.push(new tn("metadata","customMetadata",!0)),Vl=t,Vl}function ox(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new yn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ax(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return ox(r,t),r}function zv(t,e,n){const r=jv(e);return r===null?null:ax(t,r,n)}function lx(t,e,n,r){const s=jv(e);if(s===null||!Ef(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(f=>{const p=t.bucket,y=t.fullPath,_="/b/"+o(p)+"/o/"+o(y),b=If(_,n,r),D=Fv({alt:"media",token:f});return b+D})[0]}function cx(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Wv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){if(!t)throw bf()}function ux(t,e){function n(r,s){const i=zv(t,s,e);return Kv(i!==null),i}return n}function hx(t,e){function n(r,s){const i=zv(t,s,e);return Kv(i!==null),lx(i,s,t.host,t._protocol)}return n}function Gv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=I2():s=T2():n.getStatus()===402?s=E2(t.bucket):n.getStatus()===403?s=A2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function dx(t){const e=Gv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=b2(t.path)),i.serverResponse=s.serverResponse,i}return n}function fx(t,e,n){const r=e.fullServerUrl(),s=If(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Wv(s,i,hx(t,n),o);return l.errorHandler=dx(e),l}function px(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=px(null,e)),r}function gx(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let Q="";for(let W=0;W<2;W++)Q=Q+Math.random().toString().slice(2);return Q}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const f=mx(e,r,s),p=cx(f,n),y="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+f.contentType+`\r
\r
`,_=`\r
--`+c+"--",b=es.getBlob(y,r,_);if(b===null)throw x2();const D={name:f.fullPath},L=If(i,t.host,t._protocol),F="POST",Y=t.maxUploadRetryTime,G=new Wv(L,F,ux(t,n),Y);return G.urlParams=D,G.headers=o,G.body=b.uploadData(),G.errorHandler=Gv(e),G}class yx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw xo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wx extends yx{initXhr(){this.xhr_.responseType="text"}}function Qv(){return new wx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qv(this._location.path)}get storage(){return this._service}get parent(){const e=nx(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw N2(e)}}function _x(t,e,n){t._throwIfRoot("uploadBytes");const r=gx(t.storage,t._location,Hv(),new es(e,!0),n);return t.storage.makeRequestWithTokens(r,Qv).then(s=>({metadata:s,ref:t}))}function vx(t){t._throwIfRoot("getDownloadURL");const e=fx(t.storage,t._location,Hv());return t.storage.makeRequestWithTokens(e,Qv).then(n=>{if(n===null)throw O2();return n})}function bx(t,e){const n=rx(t._location.path,e),r=new yn(t._location.bucket,n);return new ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){return/^[A-Za-z]+:\/\//.test(t)}function Tx(t,e){return new ti(t,e)}function Yv(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw k2();const r=new ti(n,n._bucket);return e!=null?Yv(r,e):r}else return e!==void 0?bx(t,e):t}function Ix(t,e){if(e&&Ex(e)){if(t instanceof Af)return Tx(t,e);throw rd("To use ref(service, url), the first argument must be a Storage instance.")}else return Yv(t,e)}function Xm(t,e){const n=e==null?void 0:e[Lv];return n==null?null:yn.makeFromBucketSpec(n,t)}function Ax(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Qy(s,t.app.options.projectId))}class Af{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Vv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_2,this._maxUploadRetryTime=v2,this._requests=new Set,s!=null?this._bucket=yn.makeFromBucketSpec(s,this._host):this._bucket=Xm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=Xm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new V2(Mv());{const o=W2(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Jm="@firebase/storage",Zm="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="storage";function Cx(t,e,n){return t=_t(t),_x(t,e,n)}function Px(t){return t=_t(t),vx(t)}function Rx(t,e){return t=_t(t),Ix(t,e)}function Sx(t=qc(),e){t=_t(t);const r=ms(t,Xv).getImmediate({identifier:e}),s=Wy("storage");return s&&kx(r,...s),r}function kx(t,e,n,r={}){Ax(t,e,n,r)}function xx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Af(n,r,s,e,ii)}function Ox(){Ln(new Cn(Xv,xx,"PUBLIC").setMultipleInstances(!0)),an(Jm,Zm,""),an(Jm,Zm,"esm2017")}Ox();const Dx=Ys(),Nx=async(t,e="")=>{try{await Ov(fo(js,"users",t.uid),{name:t.displayName||"Anonymous",email:t.email,bio:"",profilePicture:e}),console.log("User data saved!")}catch(n){console.error("Error saving user data:",n)}},Vx=async t=>{const e=fo(js,"users",t),n=await kv(e);return n.exists()?n.data():(console.log("No such document!"),null)},Lx=async t=>{const e=Sx(),n=Rx(e,`profilePictures/${t.name}`);return await Cx(n,t),await Px(n)},Mx=()=>{nR(Dx,async t=>{t?await Nx(t):console.log("No user is signed in.")})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ni=typeof document<"u";function Jv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jv(t.default)}const He=Object.assign;function fh(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fn(s)?s.map(t):t(s)}return n}const Jo=()=>{},Fn=Array.isArray,Zv=/#/g,Ux=/&/g,Bx=/\//g,$x=/=/g,jx=/\?/g,eb=/\+/g,qx=/%5B/g,Hx=/%5D/g,tb=/%5E/g,zx=/%60/g,nb=/%7B/g,Wx=/%7C/g,rb=/%7D/g,Kx=/%20/g;function Cf(t){return encodeURI(""+t).replace(Wx,"|").replace(qx,"[").replace(Hx,"]")}function Gx(t){return Cf(t).replace(nb,"{").replace(rb,"}").replace(tb,"^")}function sd(t){return Cf(t).replace(eb,"%2B").replace(Kx,"+").replace(Zv,"%23").replace(Ux,"%26").replace(zx,"`").replace(nb,"{").replace(rb,"}").replace(tb,"^")}function Qx(t){return sd(t).replace($x,"%3D")}function Yx(t){return Cf(t).replace(Zv,"%23").replace(jx,"%3F")}function Xx(t){return t==null?"":Yx(t).replace(Bx,"%2F")}function ga(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Jx=/\/$/,Zx=t=>t.replace(Jx,"");function ph(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rO(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ga(o)}}function eO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tO(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ro(e.matched[r],n.matched[s])&&sb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ro(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nO(t[n],e[n]))return!1;return!0}function nO(t,e){return Fn(t)?tg(t,e):Fn(e)?tg(e,t):t===e}function tg(t,e){return Fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ya;(function(t){t.pop="pop",t.push="push"})(ya||(ya={}));var Zo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zo||(Zo={}));function sO(t){if(!t)if(Ni){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zx(t)}const iO=/^[^#]+#/;function oO(t,e){return t.replace(iO,"#")+e}function aO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const lu=()=>({left:window.scrollX,top:window.scrollY});function lO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aO(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ng(t,e){return(history.state?history.state.position-e:-1)+t}const id=new Map;function cO(t,e){id.set(t,e)}function uO(t){const e=id.get(t);return id.delete(t),e}let hO=()=>location.protocol+"//"+location.host;function ib(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),eg(c,"")}return eg(n,t)+r+s}function dO(t,e,n,r){let s=[],i=[],o=null;const l=({state:_})=>{const b=ib(t,location),D=n.value,L=e.value;let F=0;if(_){if(n.value=b,e.value=_,o&&o===D){o=null;return}F=L?_.position-L.position:0}else r(b);s.forEach(Y=>{Y(n.value,D,{delta:F,type:ya.pop,direction:F?F>0?Zo.forward:Zo.back:Zo.unknown})})};function c(){o=n.value}function f(_){s.push(_);const b=()=>{const D=s.indexOf(_);D>-1&&s.splice(D,1)};return i.push(b),b}function p(){const{history:_}=window;_.state&&_.replaceState(He({},_.state,{scroll:lu()}),"")}function y(){for(const _ of i)_();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:f,destroy:y}}function rg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?lu():null}}function fO(t){const{history:e,location:n}=window,r={value:ib(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,f,p){const y=t.indexOf("#"),_=y>-1?(n.host&&document.querySelector("base")?t:t.slice(y))+c:hO()+t+c;try{e[p?"replaceState":"pushState"](f,"",_),s.value=f}catch(b){console.error(b),n[p?"replace":"assign"](_)}}function o(c,f){const p=He({},e.state,rg(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});i(c,p,!0),r.value=c}function l(c,f){const p=He({},s.value,e.state,{forward:c,scroll:lu()});i(p.current,p,!0);const y=He({},rg(r.value,c,null),{position:p.position+1},f);i(c,y,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pO(t){t=sO(t);const e=fO(t),n=dO(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=He({location:"",base:t,go:r,createHref:oO.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mO(t){return typeof t=="string"||t&&typeof t=="object"}function ob(t){return typeof t=="string"||typeof t=="symbol"}const ab=Symbol("");var sg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sg||(sg={}));function so(t,e){return He(new Error,{type:t,[ab]:!0},e)}function wr(t,e){return t instanceof Error&&ab in t&&(e==null||!!(t.type&e))}const ig="[^/]+?",gO={sensitive:!1,strict:!1,start:!0,end:!0},yO=/[.+*?^${}()[\]/\\]/g;function wO(t,e){const n=He({},gO,e),r=[];let s=n.start?"^":"";const i=[];for(const f of t){const p=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let y=0;y<f.length;y++){const _=f[y];let b=40+(n.sensitive?.25:0);if(_.type===0)y||(s+="/"),s+=_.value.replace(yO,"\\$&"),b+=40;else if(_.type===1){const{value:D,repeatable:L,optional:F,regexp:Y}=_;i.push({name:D,repeatable:L,optional:F});const G=Y||ig;if(G!==ig){b+=10;try{new RegExp(`(${G})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${D}" (${G}): `+W.message)}}let Q=L?`((?:${G})(?:/(?:${G}))*)`:`(${G})`;y||(Q=F&&f.length<2?`(?:/${Q})`:"/"+Q),F&&(Q+="?"),s+=Q,b+=20,F&&(b+=-8),L&&(b+=-20),G===".*"&&(b+=-50)}p.push(b)}r.push(p)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(f){const p=f.match(o),y={};if(!p)return null;for(let _=1;_<p.length;_++){const b=p[_]||"",D=i[_-1];y[D.name]=b&&D.repeatable?b.split("/"):b}return y}function c(f){let p="",y=!1;for(const _ of t){(!y||!p.endsWith("/"))&&(p+="/"),y=!1;for(const b of _)if(b.type===0)p+=b.value;else if(b.type===1){const{value:D,repeatable:L,optional:F}=b,Y=D in f?f[D]:"";if(Fn(Y)&&!L)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const G=Fn(Y)?Y.join("/"):Y;if(!G)if(F)_.length<2&&(p.endsWith("/")?p=p.slice(0,-1):y=!0);else throw new Error(`Missing required param "${D}"`);p+=G}}return p||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function _O(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_O(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(og(r))return 1;if(og(s))return-1}return s.length-r.length}function og(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vO={type:0,value:""},bO=/[a-zA-Z0-9_]/;function EO(t){if(!t)return[[]];if(t==="/")return[[vO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${f}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,f="",p="";function y(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function _(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&y(),o()):c===":"?(y(),n=1):_();break;case 4:_(),n=r;break;case 1:c==="("?n=2:bO.test(c)?_():(y(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:y(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),y(),o(),s}function TO(t,e,n){const r=wO(EO(t.path),n),s=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function IO(t,e){const n=[],r=new Map;e=ug({strict:!1,end:!0,sensitive:!1},e);function s(y){return r.get(y)}function i(y,_,b){const D=!b,L=lg(y);L.aliasOf=b&&b.record;const F=ug(e,y),Y=[L];if("alias"in y){const W=typeof y.alias=="string"?[y.alias]:y.alias;for(const me of W)Y.push(lg(He({},L,{components:b?b.record.components:L.components,path:me,aliasOf:b?b.record:L})))}let G,Q;for(const W of Y){const{path:me}=W;if(_&&me[0]!=="/"){const _e=_.record.path,R=_e[_e.length-1]==="/"?"":"/";W.path=_.record.path+(me&&R+me)}if(G=TO(W,_,F),b?b.alias.push(G):(Q=Q||G,Q!==G&&Q.alias.push(G),D&&y.name&&!cg(G)&&o(y.name)),cb(G)&&c(G),L.children){const _e=L.children;for(let R=0;R<_e.length;R++)i(_e[R],G,b&&b.children[R])}b=b||G}return Q?()=>{o(Q)}:Jo}function o(y){if(ob(y)){const _=r.get(y);_&&(r.delete(y),n.splice(n.indexOf(_),1),_.children.forEach(o),_.alias.forEach(o))}else{const _=n.indexOf(y);_>-1&&(n.splice(_,1),y.record.name&&r.delete(y.record.name),y.children.forEach(o),y.alias.forEach(o))}}function l(){return n}function c(y){const _=PO(y,n);n.splice(_,0,y),y.record.name&&!cg(y)&&r.set(y.record.name,y)}function f(y,_){let b,D={},L,F;if("name"in y&&y.name){if(b=r.get(y.name),!b)throw so(1,{location:y});F=b.record.name,D=He(ag(_.params,b.keys.filter(Q=>!Q.optional).concat(b.parent?b.parent.keys.filter(Q=>Q.optional):[]).map(Q=>Q.name)),y.params&&ag(y.params,b.keys.map(Q=>Q.name))),L=b.stringify(D)}else if(y.path!=null)L=y.path,b=n.find(Q=>Q.re.test(L)),b&&(D=b.parse(L),F=b.record.name);else{if(b=_.name?r.get(_.name):n.find(Q=>Q.re.test(_.path)),!b)throw so(1,{location:y,currentLocation:_});F=b.record.name,D=He({},_.params,y.params),L=b.stringify(D)}const Y=[];let G=b;for(;G;)Y.unshift(G.record),G=G.parent;return{name:F,path:L,params:D,matched:Y,meta:CO(Y)}}t.forEach(y=>i(y));function p(){n.length=0,r.clear()}return{addRoute:i,resolve:f,removeRoute:o,clearRoutes:p,getRoutes:l,getRecordMatcher:s}}function ag(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:AO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function AO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CO(t){return t.reduce((e,n)=>He(e,n.meta),{})}function ug(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function PO(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lb(t,e[i])<0?r=i:n=i+1}const s=RO(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function RO(t){let e=t;for(;e=e.parent;)if(cb(e)&&lb(t,e)===0)return e}function cb({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function SO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(eb," "),o=i.indexOf("="),l=ga(o<0?i:i.slice(0,o)),c=o<0?null:ga(i.slice(o+1));if(l in e){let f=e[l];Fn(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function hg(t){let e="";for(let n in t){const r=t[n];if(n=Qx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(r)?r.map(i=>i&&sd(i)):[r&&sd(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const xO=Symbol(""),dg=Symbol(""),cu=Symbol(""),ub=Symbol(""),od=Symbol("");function Oo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const f=_=>{_===!1?c(so(4,{from:n,to:e})):_ instanceof Error?c(_):mO(_)?c(so(2,{from:e,to:_})):(o&&r.enterCallbacks[s]===o&&typeof _=="function"&&o.push(_),l())},p=i(()=>t.call(r&&r.instances[s],e,n,f));let y=Promise.resolve(p);t.length<3&&(y=y.then(f)),y.catch(_=>c(_))})}function mh(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Jv(c)){const p=(c.__vccOpts||c)[e];p&&i.push(Qr(p,n,r,o,l,s))}else{let f=c();i.push(()=>f.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const y=Fx(p)?p.default:p;o.mods[l]=p,o.components[l]=y;const b=(y.__vccOpts||y)[e];return b&&Qr(b,n,r,o,l,s)()}))}}return i}function fg(t){const e=tr(cu),n=tr(ub),r=On(()=>{const c=Bs(t.to);return e.resolve(c)}),s=On(()=>{const{matched:c}=r.value,{length:f}=c,p=c[f-1],y=n.matched;if(!p||!y.length)return-1;const _=y.findIndex(ro.bind(null,p));if(_>-1)return _;const b=pg(c[f-2]);return f>1&&pg(p)===b&&y[y.length-1].path!==b?y.findIndex(ro.bind(null,c[f-2])):_}),i=On(()=>s.value>-1&&VO(n.params,r.value.params)),o=On(()=>s.value>-1&&s.value===n.matched.length-1&&sb(n.params,r.value.params));function l(c={}){return NO(c)?e[Bs(t.replace)?"replace":"push"](Bs(t.to)).catch(Jo):Promise.resolve()}return{route:r,href:On(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const OO=uy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fg,setup(t,{slots:e}){const n=Dc(fg(t)),{options:r}=tr(cu),s=On(()=>({[mg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:By("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DO=OO;function NO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VO(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mg=(t,e,n)=>t??e??n,LO=uy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tr(od),s=On(()=>t.route||r.value),i=tr(dg,0),o=On(()=>{let f=Bs(i);const{matched:p}=s.value;let y;for(;(y=p[f])&&!y.components;)f++;return f}),l=On(()=>s.value.matched[o.value]);Fl(dg,On(()=>o.value+1)),Fl(xO,l),Fl(od,s);const c=Kt();return Ul(()=>[c.value,l.value,t.name],([f,p,y],[_,b,D])=>{p&&(p.instances[y]=f,b&&b!==p&&f&&f===_&&(p.leaveGuards.size||(p.leaveGuards=b.leaveGuards),p.updateGuards.size||(p.updateGuards=b.updateGuards))),f&&p&&(!b||!ro(p,b)||!_)&&(p.enterCallbacks[y]||[]).forEach(L=>L(f))},{flush:"post"}),()=>{const f=s.value,p=t.name,y=l.value,_=y&&y.components[p];if(!_)return gg(n.default,{Component:_,route:f});const b=y.props[p],D=b?b===!0?f.params:typeof b=="function"?b(f):b:null,F=By(_,He({},D,e,{onVnodeUnmounted:Y=>{Y.component.isUnmounted&&(y.instances[p]=null)},ref:c}));return gg(n.default,{Component:F,route:f})||F}}});function gg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hb=LO;function MO(t){const e=IO(t.routes,t),n=t.parseQuery||SO,r=t.stringifyQuery||hg,s=t.history,i=Oo(),o=Oo(),l=Oo(),c=fE(Wr);let f=Wr;Ni&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=fh.bind(null,U=>""+U),y=fh.bind(null,Xx),_=fh.bind(null,ga);function b(U,re){let ne,oe;return ob(U)?(ne=e.getRecordMatcher(U),oe=re):oe=U,e.addRoute(oe,ne)}function D(U){const re=e.getRecordMatcher(U);re&&e.removeRoute(re)}function L(){return e.getRoutes().map(U=>U.record)}function F(U){return!!e.getRecordMatcher(U)}function Y(U,re){if(re=He({},re||c.value),typeof U=="string"){const A=ph(n,U,re.path),O=e.resolve({path:A.path},re),j=s.createHref(A.fullPath);return He(A,O,{params:_(O.params),hash:ga(A.hash),redirectedFrom:void 0,href:j})}let ne;if(U.path!=null)ne=He({},U,{path:ph(n,U.path,re.path).path});else{const A=He({},U.params);for(const O in A)A[O]==null&&delete A[O];ne=He({},U,{params:y(A)}),re.params=y(re.params)}const oe=e.resolve(ne,re),Re=U.hash||"";oe.params=p(_(oe.params));const Be=eO(r,He({},U,{hash:Gx(Re),path:oe.path})),E=s.createHref(Be);return He({fullPath:Be,hash:Re,query:r===hg?kO(U.query):U.query||{}},oe,{redirectedFrom:void 0,href:E})}function G(U){return typeof U=="string"?ph(n,U,c.value.path):He({},U)}function Q(U,re){if(f!==U)return so(8,{from:re,to:U})}function W(U){return R(U)}function me(U){return W(He(G(U),{replace:!0}))}function _e(U){const re=U.matched[U.matched.length-1];if(re&&re.redirect){const{redirect:ne}=re;let oe=typeof ne=="function"?ne(U):ne;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=G(oe):{path:oe},oe.params={}),He({query:U.query,hash:U.hash,params:oe.path!=null?{}:U.params},oe)}}function R(U,re){const ne=f=Y(U),oe=c.value,Re=U.state,Be=U.force,E=U.replace===!0,A=_e(ne);if(A)return R(He(G(A),{state:typeof A=="object"?He({},Re,A.state):Re,force:Be,replace:E}),re||ne);const O=ne;O.redirectedFrom=re;let j;return!Be&&tO(r,oe,ne)&&(j=so(16,{to:O,from:oe}),Xt(oe,oe,!0,!1)),(j?Promise.resolve(j):S(O,oe)).catch(B=>wr(B)?wr(B,2)?B:Ut(B):Ce(B,O,oe)).then(B=>{if(B){if(wr(B,2))return R(He({replace:E},G(B.to),{state:typeof B.to=="object"?He({},Re,B.to.state):Re,force:Be}),re||O)}else B=v(O,oe,!0,E,Re);return k(O,oe,B),B})}function I(U,re){const ne=Q(U,re);return ne?Promise.reject(ne):Promise.resolve()}function P(U){const re=pt.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(U):U()}function S(U,re){let ne;const[oe,Re,Be]=FO(U,re);ne=mh(oe.reverse(),"beforeRouteLeave",U,re);for(const A of oe)A.leaveGuards.forEach(O=>{ne.push(Qr(O,U,re))});const E=I.bind(null,U,re);return ne.push(E),Bt(ne).then(()=>{ne=[];for(const A of i.list())ne.push(Qr(A,U,re));return ne.push(E),Bt(ne)}).then(()=>{ne=mh(Re,"beforeRouteUpdate",U,re);for(const A of Re)A.updateGuards.forEach(O=>{ne.push(Qr(O,U,re))});return ne.push(E),Bt(ne)}).then(()=>{ne=[];for(const A of Be)if(A.beforeEnter)if(Fn(A.beforeEnter))for(const O of A.beforeEnter)ne.push(Qr(O,U,re));else ne.push(Qr(A.beforeEnter,U,re));return ne.push(E),Bt(ne)}).then(()=>(U.matched.forEach(A=>A.enterCallbacks={}),ne=mh(Be,"beforeRouteEnter",U,re,P),ne.push(E),Bt(ne))).then(()=>{ne=[];for(const A of o.list())ne.push(Qr(A,U,re));return ne.push(E),Bt(ne)}).catch(A=>wr(A,8)?A:Promise.reject(A))}function k(U,re,ne){l.list().forEach(oe=>P(()=>oe(U,re,ne)))}function v(U,re,ne,oe,Re){const Be=Q(U,re);if(Be)return Be;const E=re===Wr,A=Ni?history.state:{};ne&&(oe||E?s.replace(U.fullPath,He({scroll:E&&A&&A.scroll},Re)):s.push(U.fullPath,Re)),c.value=U,Xt(U,re,ne,E),Ut()}let C;function Me(){C||(C=s.listen((U,re,ne)=>{if(!vt.listening)return;const oe=Y(U),Re=_e(oe);if(Re){R(He(Re,{replace:!0}),oe).catch(Jo);return}f=oe;const Be=c.value;Ni&&cO(ng(Be.fullPath,ne.delta),lu()),S(oe,Be).catch(E=>wr(E,12)?E:wr(E,2)?(R(E.to,oe).then(A=>{wr(A,20)&&!ne.delta&&ne.type===ya.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(ne.delta&&s.go(-ne.delta,!1),Ce(E,oe,Be))).then(E=>{E=E||v(oe,Be,!1),E&&(ne.delta&&!wr(E,8)?s.go(-ne.delta,!1):ne.type===ya.pop&&wr(E,20)&&s.go(-1,!1)),k(oe,Be,E)}).catch(Jo)}))}let Tt=Oo(),Le=Oo(),ie;function Ce(U,re,ne){Ut(U);const oe=Le.list();return oe.length?oe.forEach(Re=>Re(U,re,ne)):console.error(U),Promise.reject(U)}function Ft(){return ie&&c.value!==Wr?Promise.resolve():new Promise((U,re)=>{Tt.add([U,re])})}function Ut(U){return ie||(ie=!U,Me(),Tt.list().forEach(([re,ne])=>U?ne(U):re()),Tt.reset()),U}function Xt(U,re,ne,oe){const{scrollBehavior:Re}=t;if(!Ni||!Re)return Promise.resolve();const Be=!ne&&uO(ng(U.fullPath,0))||(oe||!ne)&&history.state&&history.state.scroll||null;return iy().then(()=>Re(U,re,Be)).then(E=>E&&lO(E)).catch(E=>Ce(E,U,re))}const Ye=U=>s.go(U);let Ke;const pt=new Set,vt={currentRoute:c,listening:!0,addRoute:b,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:L,resolve:Y,options:t,push:W,replace:me,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Le.add,isReady:Ft,install(U){const re=this;U.component("RouterLink",DO),U.component("RouterView",hb),U.config.globalProperties.$router=re,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Bs(c)}),Ni&&!Ke&&c.value===Wr&&(Ke=!0,W(s.location).catch(Re=>{}));const ne={};for(const Re in Wr)Object.defineProperty(ne,Re,{get:()=>c.value[Re],enumerable:!0});U.provide(cu,re),U.provide(ub,Zg(ne)),U.provide(od,c);const oe=U.unmount;pt.add(U),U.unmount=function(){pt.delete(U),pt.size<1&&(f=Wr,C&&C(),C=null,c.value=Wr,Ke=!1,ie=!1),oe()}}};function Bt(U){return U.reduce((re,ne)=>re.then(()=>P(ne)),Promise.resolve())}return vt}function FO(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(f=>ro(f,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(f=>ro(f,c))||s.push(c))}return[n,r,s]}function db(){return tr(cu)}const UO={__name:"App",setup(t){return(e,n)=>(Je(),Gi(Bs(hb)))}},fb="/Deploy-Final-Ko/assets/logocut-BtZO3n0x.png",Vr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},BO={class:"navbar fixed top-0 left-0 w-full z-50",style:{"background-color":"#800020"}},$O={class:"navbar-start"},jO={class:"dropdown"},qO={tabindex:"0",class:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"},HO={class:"p-2"},zO={class:"navbar-center hidden lg:flex"},WO={class:"menu menu-horizontal px-1"},KO={class:"p-2"},GO={class:"navbar-end"},QO={class:"dropdown dropdown-end"},YO={tabindex:"0",role:"button",class:"btn btn-ghost btn-circle avatar"},XO={class:"w-10 rounded-full"},JO=["src"],ZO={tabindex:"0",class:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"},eD={__name:"UserLayout",setup(t){const e=Kt(""),n=Kt(""),r=Ys(),s=async()=>{const i=r.currentUser;if(i){const o=fo(js,"users",i.uid),l=await kv(o);if(l.exists()){const c=l.data();e.value=c.profilePicture||"",n.value=c.displayName||"ผู้ใช้ไม่ระบุ"}}};return Lc(()=>{s()}),(i,o)=>{const l=my("RouterLink");return Je(),yt(dt,null,[V("div",BO,[V("div",$O,[V("div",jO,[o[5]||(o[5]=V("div",{tabindex:"0",role:"button",class:"btn btn-ghost lg:hidden"},[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1)),V("ul",qO,[V("li",null,[ve(l,{to:"/"},{default:on(()=>o[0]||(o[0]=[Ot("Home")])),_:1})]),V("li",null,[o[2]||(o[2]=V("a",null,"Start",-1)),V("ul",HO,[V("li",null,[ve(l,{to:"/chat"},{default:on(()=>o[1]||(o[1]=[Ot("Chat")])),_:1})])])]),V("li",null,[ve(l,{to:"/about"},{default:on(()=>o[3]||(o[3]=[Ot("About")])),_:1})]),V("li",null,[ve(l,{to:"/contact"},{default:on(()=>o[4]||(o[4]=[Ot("Contact")])),_:1})])])]),o[6]||(o[6]=V("img",{src:fb,alt:"Logo",class:"h-16 w-16 rounded-full object-cover mr-3"},null,-1))]),V("div",zO,[V("ul",WO,[V("li",null,[ve(l,{to:"/",class:"text-white"},{default:on(()=>o[7]||(o[7]=[Ot("Home")])),_:1})]),V("li",null,[V("details",null,[o[9]||(o[9]=V("summary",{class:"text-white"},"Start",-1)),V("ul",KO,[V("li",null,[ve(l,{to:"/chat",class:"text-white"},{default:on(()=>o[8]||(o[8]=[Ot("Chat")])),_:1})])])])]),V("li",null,[ve(l,{to:"/about",class:"text-white"},{default:on(()=>o[10]||(o[10]=[Ot("About")])),_:1})]),V("li",null,[ve(l,{to:"/contact",class:"text-white"},{default:on(()=>o[11]||(o[11]=[Ot("Contact")])),_:1})])])]),V("div",GO,[V("div",QO,[V("div",YO,[V("div",XO,[V("img",{alt:"User Avatar",src:e.value},null,8,JO)])]),V("ul",ZO,[V("li",null,[ve(l,{to:"/profile",class:"justify-between"},{default:on(()=>[Ot(Ar(n.value)+" ",1),o[12]||(o[12]=V("span",{class:"badge"},"New",-1))]),_:1})]),o[14]||(o[14]=V("li",null,[V("a",null,"Settings")],-1)),V("li",null,[ve(l,{to:"/signup"},{default:on(()=>o[13]||(o[13]=[Ot("Logout")])),_:1})])])])])]),yy(i.$slots,"default",{},void 0,!0)],64)}}},xa=Vr(eD,[["__scopeId","data-v-9add39cc"]]),tD={};function nD(t,e){return Je(),yt(dt,null,[e[0]||(e[0]=Uc('<footer class="footer bg-base-200 text-base-content p-10"><aside><img src="'+fb+'" alt="Logo" class="h-20 w-25 rounded-full object-cover mr-2"><p> ACME Industries Ltd. <br> Providing reliable tech since 1992 </p></aside><nav><h6 class="footer-title">Services</h6><a class="link link-hover">Branding</a><a class="link link-hover">Design</a><a class="link link-hover">Marketing</a><a class="link link-hover">Advertisement</a></nav><nav><h6 class="footer-title">Company</h6><a class="link link-hover">About us</a><a class="link link-hover">Contact</a><a class="link link-hover">Jobs</a><a class="link link-hover">Press kit</a></nav><nav><h6 class="footer-title">Legal</h6><a class="link link-hover">Terms of use</a><a class="link link-hover">Privacy policy</a><a class="link link-hover">Cookie policy</a></nav></footer>',1)),yy(t.$slots,"default")],64)}const Oa=Vr(tD,[["render",nD]]),rD={props:{image:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,default:"No description provided."},tags:{type:Array,default:()=>[]},isNew:{type:Boolean,default:!1}}},sD={class:"card bg-base-100 w-96 shadow-xl"},iD=["src","alt"],oD={class:"card-body"},aD={class:"card-title"},lD={key:0,class:"badge badge-secondary"},cD={class:"card-actions justify-end"};function uD(t,e,n,r,s,i){return Je(),yt("div",sD,[V("figure",null,[V("img",{src:n.image,alt:n.title,class:"object-cover h-48 w-full"},null,8,iD)]),V("div",oD,[V("h2",aD,[Ot(Ar(n.title)+" ",1),n.isNew?(Je(),yt("div",lD,"NEW")):gT("",!0)]),V("p",null,Ar(n.description),1),V("div",cD,[(Je(!0),yt(dt,null,gy(n.tags,(o,l)=>(Je(),yt("div",{key:l,class:"badge badge-outline"},Ar(o),1))),128))])])])}const gh=Vr(rD,[["render",uD]]),yg="/Deploy-Final-Ko/assets/bar-DKt0wHT6.jpg",hD="/Deploy-Final-Ko/assets/bar2-CrZWtzXp.jpg",pb="/Deploy-Final-Ko/assets/bar3-C1PQTCmx.jpg",dD={},fD={class:"carousel w-full h-[500px]"};function pD(t,e){return Je(),yt("div",fD,e[0]||(e[0]=[Uc('<div id="slide1" class="carousel-item relative w-full"><img src="'+yg+'" class="w-full h-full object-cover"><div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><a href="#slide4" class="btn btn-circle">❮</a><a href="#slide2" class="btn btn-circle">❯</a></div></div><div id="slide2" class="carousel-item relative w-full"><img src="'+hD+'" class="w-full h-full object-cover"><div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><a href="#slide1" class="btn btn-circle">❮</a><a href="#slide3" class="btn btn-circle">❯</a></div></div><div id="slide3" class="carousel-item relative w-full"><img src="'+pb+'" class="w-full h-full object-cover"><div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><a href="#slide2" class="btn btn-circle">❮</a><a href="#slide4" class="btn btn-circle">❯</a></div></div><div id="slide4" class="carousel-item relative w-full"><img src="'+yg+'" class="w-full h-full object-cover"><div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><a href="#slide3" class="btn btn-circle">❮</a><a href="#slide1" class="btn btn-circle">❯</a></div></div>',4)]))}const mD=Vr(dD,[["render",pD]]),gD={},yD={class:"text-5xl text-center"};function wD(t,e){return Je(),yt("div",yD," Welcome to our bars ")}const _D=Vr(gD,[["render",wD]]),vD={},bD={type:"text",placeholder:"ค้นหา",class:"input input-bordered w-full max-w-xs"};function ED(t,e){return Je(),yt("input",bD)}const TD=Vr(vD,[["render",ED]]),ID={};function AD(t,e){return e[0]||(e[0]=Uc('<div class="carousel rounded-box w-112 h-64"><div class="carousel-item w-full h-full"><img src="'+pb+'" class="w-full h-full object-cover" alt="Tailwind CSS Carousel component"></div></div><div class="info"><article class="prose lg:prose-xl m-4 p-4"><h1>Megève Le Gallery Bar</h1><p> Located in the heart of the Casino, this chic lounge-style bar combined with a 300m2 terrace will seduce you with its vocation as an artistic springboard. Cocktail bar, theme evenings, sporting events, karaoke… The Gallery Bar is a real showcase for local, national and sometimes international artists by mixing the various current art forms and hosting ephemeral exhibitions. </p><p> But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. </p></article></div>',2))}const CD=Vr(ID,[["render",AD]]),PD={},RD={class:"btn btn-outline btn-success"};function SD(t,e){return Je(),yt("button",RD,"like")}const kD=Vr(PD,[["render",SD]]),xD={},OD={class:"btn btn-outline btn-error"};function DD(t,e){return Je(),yt("button",OD,"Dislike")}const ND=Vr(xD,[["render",DD]]),VD={class:"h-1/2 relative"},LD={class:"absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 z-10"},MD={class:"container mx-auto my-4 p-4"},FD={class:"container mx-auto my-4 p-9"},UD={class:"flex flex-row gap-10 justify-center"},BD={class:"w-full flex items-center justify-center"},$D={class:"flex items-center justify-center my-4 p-4"},jD={__name:"HomeView",setup(t){return(e,n)=>(Je(),yt(dt,null,[ve(xa,null,{default:on(()=>[V("div",VD,[V("div",LD,[ve(TD)]),ve(mD)]),V("div",MD,[ve(_D)]),V("div",FD,[V("div",UD,[ve(gh,{image:"/img/card1.jpg",title:"BoyToys",description:"A cozy and relaxing bar.",tags:["Drink","Chill"],isNew:!1}),ve(gh,{image:"/img/card2.jpg",title:"สำเพ็ง",description:"Enjoy live music and drinks.",tags:["Music","Live"],isNew:!1}),ve(gh,{image:"/img/card3.jpg",title:"Flys",description:"A rooftop bar with scenic views.",tags:["Rooftop","View"],isNew:!0})])])]),_:1}),V("div",BD,[ve(CD)]),n[0]||(n[0]=V("article",{class:"prose lg:prose-xl m-4 p-4 flex items-center justify-center"}," Do you like this info? ",-1)),V("div",$D,[ve(kD,{class:"p-2 mr-2"}),ve(ND,{class:"p-2"})]),ve(Oa)],64))}},qD="/Deploy-Final-Ko/assets/cat-dance-dancing-cat-CffggBLy.gif",HD={__name:"About",setup(t){return(e,n)=>(Je(),yt(dt,null,[ve(xa,null,{default:on(()=>n[0]||(n[0]=[V("div",{class:"flex flex-col md:flex-row w-full h-auto p-4 md:p-10"},[V("article",{class:"prose lg:prose-xl flex-1 p-40"},[V("h1",null,"About us"),V("p",null," For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween. "),V("p",null," But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. ")]),V("div",{class:"flex justify-center items-center w-full md:w-1/2 mt-4 md:mt-0"},[V("img",{src:qD,alt:"Dancing Cat",class:"max-w-full h-auto rounded"})])],-1)])),_:1}),ve(Oa)],64))}};/*!
* sweetalert2 v11.14.3
* Released under the MIT License.
*/function mb(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function zD(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function wg(t,e){return t.get(mb(t,e))}function WD(t,e,n){zD(t,e),e.set(t,n)}function KD(t,e,n){return t.set(mb(t,e),n),n}const GD=100,pe={},QD=()=>{pe.previousActiveElement instanceof HTMLElement?(pe.previousActiveElement.focus(),pe.previousActiveElement=null):document.body&&document.body.focus()},YD=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;pe.restoreFocusTimeout=setTimeout(()=>{QD(),e()},GD),window.scrollTo(n,r)}),gb="swal2-",XD=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],M=XD.reduce((t,e)=>(t[e]=gb+e,t),{}),JD=["success","warning","info","question","error"],bc=JD.reduce((t,e)=>(t[e]=gb+e,t),{}),yb="SweetAlert2:",Pf=t=>t.charAt(0).toUpperCase()+t.slice(1),hn=t=>{console.warn(`${yb} ${typeof t=="object"?t.join(" "):t}`)},ci=t=>{console.error(`${yb} ${t}`)},_g=[],ZD=t=>{_g.includes(t)||(_g.push(t),hn(t))},wb=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ZD(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},uu=t=>typeof t=="function"?t():t,Rf=t=>t&&typeof t.toPromise=="function",Da=t=>Rf(t)?t.toPromise():Promise.resolve(t),Sf=t=>t&&Promise.resolve(t)===t,dn=()=>document.body.querySelector(`.${M.container}`),Na=t=>{const e=dn();return e?e.querySelector(t):null},vn=t=>Na(`.${t}`),We=()=>vn(M.popup),Va=()=>vn(M.icon),eN=()=>vn(M["icon-content"]),_b=()=>vn(M.title),kf=()=>vn(M["html-container"]),vb=()=>vn(M.image),xf=()=>vn(M["progress-steps"]),hu=()=>vn(M["validation-message"]),ur=()=>Na(`.${M.actions} .${M.confirm}`),po=()=>Na(`.${M.actions} .${M.cancel}`),ui=()=>Na(`.${M.actions} .${M.deny}`),tN=()=>vn(M["input-label"]),mo=()=>Na(`.${M.loader}`),La=()=>vn(M.actions),bb=()=>vn(M.footer),du=()=>vn(M["timer-progress-bar"]),Of=()=>vn(M.close),nN=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Df=()=>{const t=We();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=t.querySelectorAll(nN),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>un(i))},Nf=()=>Pr(document.body,M.shown)&&!Pr(document.body,M["toast-shown"])&&!Pr(document.body,M["no-backdrop"]),fu=()=>{const t=We();return t?Pr(t,M.toast):!1},rN=()=>{const t=We();return t?t.hasAttribute("data-loading"):!1},bn=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Pr=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},sN=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(M).includes(n)&&!Object.values(bc).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},_n=(t,e,n)=>{if(sN(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){hn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}Ue(t,r)}},pu=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${M.popup} > .${M[e]}`);case"checkbox":return t.querySelector(`.${M.popup} > .${M.checkbox} input`);case"radio":return t.querySelector(`.${M.popup} > .${M.radio} input:checked`)||t.querySelector(`.${M.popup} > .${M.radio} input:first-child`);case"range":return t.querySelector(`.${M.popup} > .${M.range} input`);default:return t.querySelector(`.${M.popup} > .${M.input}`)}},Eb=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Tb=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},Ue=(t,e)=>{Tb(t,e,!0)},hr=(t,e)=>{Tb(t,e,!1)},ns=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&Pr(s,e))return s}},Hs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},kt=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},Yt=t=>{t&&(t.style.display="none")},Vf=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{Ma(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},vg=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},Ma=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?kt(t,n):Yt(t)},un=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),iN=()=>!un(ur())&&!un(ui())&&!un(po()),bg=t=>t.scrollHeight>t.clientHeight,Ib=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},Lf=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=du();n&&un(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},oN=()=>{const t=du();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},aN=()=>typeof window>"u"||typeof document>"u",lN=`
 <div aria-labelledby="${M.title}" aria-describedby="${M["html-container"]}" class="${M.popup}" tabindex="-1">
   <button type="button" class="${M.close}"></button>
   <ul class="${M["progress-steps"]}"></ul>
   <div class="${M.icon}"></div>
   <img class="${M.image}" />
   <h2 class="${M.title}" id="${M.title}"></h2>
   <div class="${M["html-container"]}" id="${M["html-container"]}"></div>
   <input class="${M.input}" id="${M.input}" />
   <input type="file" class="${M.file}" />
   <div class="${M.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${M.select}" id="${M.select}"></select>
   <div class="${M.radio}"></div>
   <label class="${M.checkbox}">
     <input type="checkbox" id="${M.checkbox}" />
     <span class="${M.label}"></span>
   </label>
   <textarea class="${M.textarea}" id="${M.textarea}"></textarea>
   <div class="${M["validation-message"]}" id="${M["validation-message"]}"></div>
   <div class="${M.actions}">
     <div class="${M.loader}"></div>
     <button type="button" class="${M.confirm}"></button>
     <button type="button" class="${M.deny}"></button>
     <button type="button" class="${M.cancel}"></button>
   </div>
   <div class="${M.footer}"></div>
   <div class="${M["timer-progress-bar-container"]}">
     <div class="${M["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),cN=()=>{const t=dn();return t?(t.remove(),hr([document.documentElement,document.body],[M["no-backdrop"],M["toast-shown"],M["has-column"]]),!0):!1},Ns=()=>{pe.currentInstance.resetValidationMessage()},uN=()=>{const t=We(),e=ns(t,M.input),n=ns(t,M.file),r=t.querySelector(`.${M.range} input`),s=t.querySelector(`.${M.range} output`),i=ns(t,M.select),o=t.querySelector(`.${M.checkbox} input`),l=ns(t,M.textarea);e.oninput=Ns,n.onchange=Ns,i.onchange=Ns,o.onchange=Ns,l.oninput=Ns,r.oninput=()=>{Ns(),s.value=r.value},r.onchange=()=>{Ns(),s.value=r.value}},hN=t=>typeof t=="string"?document.querySelector(t):t,dN=t=>{const e=We();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},fN=t=>{window.getComputedStyle(t).direction==="rtl"&&Ue(dn(),M.rtl)},pN=t=>{const e=cN();if(aN()){ci("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=M.container,e&&Ue(n,M["no-transition"]),bn(n,lN);const r=hN(t.target);r.appendChild(n),dN(t),fN(r),uN()},Mf=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?mN(t,e):t&&bn(e,t)},mN=(t,e)=>{t.jquery?gN(e,t):bn(e,t.toString())},gN=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},yN=(t,e)=>{const n=La(),r=mo();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Yt(n):kt(n),_n(n,e,"actions"),wN(n,r,e),bn(r,e.loaderHtml||""),_n(r,e,"loader"))};function wN(t,e,n){const r=ur(),s=ui(),i=po();!r||!s||!i||(yh(r,"confirm",n),yh(s,"deny",n),yh(i,"cancel",n),_N(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function _N(t,e,n,r){if(!r.buttonsStyling){hr([t,e,n],M.styled);return}Ue([t,e,n],M.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,Ue(t,M["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,Ue(e,M["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Ue(n,M["default-outline"]))}function yh(t,e,n){const r=Pf(e);Ma(t,n[`show${r}Button`],"inline-block"),bn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=M[e],_n(t,n,`${e}Button`)}const vN=(t,e)=>{const n=Of();n&&(bn(n,e.closeButtonHtml||""),_n(n,e,"closeButton"),Ma(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},bN=(t,e)=>{const n=dn();n&&(EN(n,e.backdrop),TN(n,e.position),IN(n,e.grow),_n(n,e,"container"))};function EN(t,e){typeof e=="string"?t.style.background=e:e||Ue([document.documentElement,document.body],M["no-backdrop"])}function TN(t,e){e&&(e in M?Ue(t,M[e]):(hn('The "position" parameter is not valid, defaulting to "center"'),Ue(t,M.center)))}function IN(t,e){e&&Ue(t,M[`grow-${e}`])}var Ze={innerParams:new WeakMap,domCache:new WeakMap};const AN=["input","file","range","select","radio","checkbox","textarea"],CN=(t,e)=>{const n=We();if(!n)return;const r=Ze.innerParams.get(t),s=!r||e.input!==r.input;AN.forEach(i=>{const o=ns(n,M[i]);o&&(SN(i,e.inputAttributes),o.className=M[i],s&&Yt(o))}),e.input&&(s&&PN(e),kN(e))},PN=t=>{if(!t.input)return;if(!ut[t.input]){ci(`Unexpected type of input! Expected ${Object.keys(ut).join(" | ")}, got "${t.input}"`);return}const e=Ab(t.input);if(!e)return;const n=ut[t.input](e,t);kt(e),t.inputAutoFocus&&setTimeout(()=>{Eb(n)})},RN=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},SN=(t,e)=>{const n=We();if(!n)return;const r=pu(n,t);if(r){RN(r);for(const s in e)r.setAttribute(s,e[s])}},kN=t=>{if(!t.input)return;const e=Ab(t.input);e&&_n(e,t,"input")},Ff=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Fa=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=M["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&Ue(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},Ab=t=>{const e=We();if(e)return ns(e,M[t]||M.input)},Ec=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Sf(e)||hn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},ut={};ut.text=ut.email=ut.password=ut.number=ut.tel=ut.url=ut.search=ut.date=ut["datetime-local"]=ut.time=ut.week=ut.month=(t,e)=>(Ec(t,e.inputValue),Fa(t,t,e),Ff(t,e),t.type=e.input,t);ut.file=(t,e)=>(Fa(t,t,e),Ff(t,e),t);ut.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return Ec(n,e.inputValue),n.type=e.input,Ec(r,e.inputValue),Fa(n,t,e),t};ut.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");bn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Fa(t,t,e),t};ut.radio=t=>(t.textContent="",t);ut.checkbox=(t,e)=>{const n=pu(We(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return bn(r,e.inputPlaceholder||e.inputLabel),n};ut.textarea=(t,e)=>{Ec(t,e.inputValue),Ff(t,e),Fa(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(We()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?We().style.width=`${i}px`:Hs(We(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const xN=(t,e)=>{const n=kf();n&&(Vf(n),_n(n,e,"htmlContainer"),e.html?(Mf(e.html,n),kt(n,"block")):e.text?(n.textContent=e.text,kt(n,"block")):Yt(n),CN(t,e))},ON=(t,e)=>{const n=bb();n&&(Vf(n),Ma(n,e.footer,"block"),e.footer&&Mf(e.footer,n),_n(n,e,"footer"))},DN=(t,e)=>{const n=Ze.innerParams.get(t),r=Va();if(r){if(n&&e.icon===n.icon){Tg(r,e),Eg(r,e);return}if(!e.icon&&!e.iconHtml){Yt(r);return}if(e.icon&&Object.keys(bc).indexOf(e.icon)===-1){ci(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Yt(r);return}kt(r),Tg(r,e),Eg(r,e),Ue(r,e.showClass&&e.showClass.icon)}},Eg=(t,e)=>{for(const[n,r]of Object.entries(bc))e.icon!==n&&hr(t,r);Ue(t,e.icon&&bc[e.icon]),MN(t,e),NN(),_n(t,e,"icon")},NN=()=>{const t=We();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},VN=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,LN=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Tg=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=Ig(e.iconHtml):e.icon==="success"?(r=VN,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=LN:e.icon&&(r=Ig({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&bn(t,r)},MN=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])vg(t,n,"background-color",e.iconColor);vg(t,".swal2-success-ring","border-color",e.iconColor)}},Ig=t=>`<div class="${M["icon-content"]}">${t}</div>`,FN=(t,e)=>{const n=vb();if(n){if(!e.imageUrl){Yt(n);return}kt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Hs(n,"width",e.imageWidth),Hs(n,"height",e.imageHeight),n.className=M.image,_n(n,e,"image")}},UN=(t,e)=>{const n=dn(),r=We();if(!(!n||!r)){if(e.toast){Hs(n,"width",e.width),r.style.width="100%";const s=mo();s&&r.insertBefore(s,Va())}else Hs(r,"width",e.width);Hs(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),Yt(hu()),BN(r,e)}},BN=(t,e)=>{const n=e.showClass||{};t.className=`${M.popup} ${un(t)?n.popup:""}`,e.toast?(Ue([document.documentElement,document.body],M["toast-shown"]),Ue(t,M.toast)):Ue(t,M.modal),_n(t,e,"popup"),typeof e.customClass=="string"&&Ue(t,e.customClass),e.icon&&Ue(t,M[`icon-${e.icon}`])},$N=(t,e)=>{const n=xf();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){Yt(n);return}kt(n),n.textContent="",s>=r.length&&hn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=jN(i);if(n.appendChild(l),o===s&&Ue(l,M["active-progress-step"]),o!==r.length-1){const c=qN(e);n.appendChild(c)}})},jN=t=>{const e=document.createElement("li");return Ue(e,M["progress-step"]),bn(e,t),e},qN=t=>{const e=document.createElement("li");return Ue(e,M["progress-step-line"]),t.progressStepsDistance&&Hs(e,"width",t.progressStepsDistance),e},HN=(t,e)=>{const n=_b();n&&(Vf(n),Ma(n,e.title||e.titleText,"block"),e.title&&Mf(e.title,n),e.titleText&&(n.innerText=e.titleText),_n(n,e,"title"))},Cb=(t,e)=>{UN(t,e),bN(t,e),$N(t,e),DN(t,e),FN(t,e),HN(t,e),vN(t,e),xN(t,e),yN(t,e),ON(t,e);const n=We();typeof e.didRender=="function"&&n&&e.didRender(n),pe.eventEmitter.emit("didRender",n)},zN=()=>un(We()),Pb=()=>{var t;return(t=ur())===null||t===void 0?void 0:t.click()},WN=()=>{var t;return(t=ui())===null||t===void 0?void 0:t.click()},KN=()=>{var t;return(t=po())===null||t===void 0?void 0:t.click()},go=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Rb=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},GN=(t,e,n)=>{Rb(t),e.toast||(t.keydownHandler=r=>YN(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:We(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},ad=(t,e)=>{var n;const r=Df();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=We())===null||n===void 0||n.focus()},Sb=["ArrowRight","ArrowDown"],QN=["ArrowLeft","ArrowUp"],YN=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?XN(e,t):e.key==="Tab"?JN(e):[...Sb,...QN].includes(e.key)?ZN(e.key):e.key==="Escape"&&eV(e,t,n)))},XN=(t,e)=>{if(!uu(e.allowEnterKey))return;const n=pu(We(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Pb(),t.preventDefault()}},JN=t=>{const e=t.target,n=Df();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?ad(r,-1):ad(r,1),t.stopPropagation(),t.preventDefault()},ZN=t=>{const e=La(),n=ur(),r=ui(),s=po();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=Sb.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&un(l))break}l instanceof HTMLButtonElement&&l.focus()}},eV=(t,e,n)=>{uu(e.allowEscapeKey)&&(t.preventDefault(),n(go.esc))};var io={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const tV=()=>{const t=dn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},kb=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},xb=typeof window<"u"&&!!window.GestureEvent,nV=()=>{if(xb&&!Pr(document.body,M.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Ue(document.body,M.iosfix),rV()}},rV=()=>{const t=dn();if(!t)return;let e;t.ontouchstart=n=>{e=sV(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},sV=t=>{const e=t.target,n=dn(),r=kf();return!n||!r||iV(t)||oV(t)?!1:e===n||!bg(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(bg(r)&&r.contains(e))},iV=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",oV=t=>t.touches&&t.touches.length>1,aV=()=>{if(Pr(document.body,M.iosfix)){const t=parseInt(document.body.style.top,10);hr(document.body,M.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},lV=()=>{const t=document.createElement("div");t.className=M["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Wi=null;const cV=t=>{Wi===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Wi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Wi+lV()}px`)},uV=()=>{Wi!==null&&(document.body.style.paddingRight=`${Wi}px`,Wi=null)};function Ob(t,e,n,r){fu()?Ag(t,r):(YD(n).then(()=>Ag(t,r)),Rb(pe)),xb?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Nf()&&(uV(),aV(),kb()),hV()}function hV(){hr([document.documentElement,document.body],[M.shown,M["height-auto"],M["no-backdrop"],M["toast-shown"]])}function rs(t){t=fV(t);const e=io.swalPromiseResolve.get(this),n=dV(this);this.isAwaitingPromise?t.isDismissed||(Ua(this),e(t)):n&&e(t)}const dV=t=>{const e=We();if(!e)return!1;const n=Ze.innerParams.get(t);if(!n||Pr(e,n.hideClass.popup))return!1;hr(e,n.showClass.popup),Ue(e,n.hideClass.popup);const r=dn();return hr(r,n.showClass.backdrop),Ue(r,n.hideClass.backdrop),pV(t,e,n),!0};function Db(t){const e=io.swalPromiseReject.get(this);Ua(this),e&&e(t)}const Ua=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Ze.innerParams.get(t)||t._destroy())},fV=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),pV=(t,e,n)=>{const r=dn(),s=Ib(e);typeof n.willClose=="function"&&n.willClose(e),pe.eventEmitter.emit("willClose",e),s?mV(t,e,r,n.returnFocus,n.didClose):Ob(t,r,n.returnFocus,n.didClose)},mV=(t,e,n,r,s)=>{pe.swalCloseEventFinishedCallback=Ob.bind(null,t,n,r,s);const i=function(o){o.target===e&&(pe.swalCloseEventFinishedCallback(),delete pe.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i))};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},Ag=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),pe.eventEmitter.emit("didClose"),t._destroy&&t._destroy()})},oo=t=>{let e=We();if(e||new Rr,e=We(),!e)return;const n=mo();fu()?Yt(Va()):gV(e,t),kt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},gV=(t,e)=>{const n=La(),r=mo();!n||!r||(!e&&un(ur())&&(e=ur()),kt(n),e&&(Yt(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),Ue([t,n],M.loading))},yV=(t,e)=>{e.input==="select"||e.input==="radio"?EV(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Rf(e.inputValue)||Sf(e.inputValue))&&(oo(ur()),TV(t,e))},wV=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return _V(n);case"radio":return vV(n);case"file":return bV(n);default:return e.inputAutoTrim?n.value.trim():n.value}},_V=t=>t.checked?1:0,vV=t=>t.checked?t.value:null,bV=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,EV=(t,e)=>{const n=We();if(!n)return;const r=s=>{e.input==="select"?IV(n,Tc(s),e):e.input==="radio"&&AV(n,Tc(s),e)};Rf(e.inputOptions)||Sf(e.inputOptions)?(oo(ur()),Da(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):ci(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},TV=(t,e)=>{const n=t.getInput();n&&(Yt(n),Da(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,kt(n),n.focus(),t.hideLoading()}).catch(r=>{ci(`Error in inputValue promise: ${r}`),n.value="",kt(n),n.focus(),t.hideLoading()}))};function IV(t,e,n){const r=ns(t,M.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,bn(c,o),c.selected=Nb(l,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(f=>s(c,f[1],f[0]))}else s(r,l,o)}),r.focus()}function AV(t,e,n){const r=ns(t,M.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),f=document.createElement("label");c.type="radio",c.name=M.radio,c.value=o,Nb(o,n.inputValue)&&(c.checked=!0);const p=document.createElement("span");bn(p,l),p.className=M.label,f.appendChild(c),f.appendChild(p),r.appendChild(f)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const Tc=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=Tc(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Tc(r)),e.push([n,r])}),e},Nb=(t,e)=>!!e&&e.toString()===t.toString(),CV=t=>{const e=Ze.innerParams.get(t);t.disableButtons(),e.input?Vb(t,"confirm"):Bf(t,!0)},PV=t=>{const e=Ze.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Vb(t,"deny"):Uf(t,!1)},RV=(t,e)=>{t.disableButtons(),e(go.cancel)},Vb=(t,e)=>{const n=Ze.innerParams.get(t);if(!n.input){ci(`The "input" parameter is needed to be set when using returnInputValueOn${Pf(e)}`);return}const r=t.getInput(),s=wV(t,n);n.inputValidator?SV(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?Uf(t,s):Bf(t,s)},SV=(t,e,n)=>{const r=Ze.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Da(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?Uf(t,e):Bf(t,e)})},Uf=(t,e)=>{const n=Ze.innerParams.get(t||void 0);n.showLoaderOnDeny&&oo(ui()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Da(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Ua(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Lb(t||void 0,s))):t.close({isDenied:!0,value:e})},Cg=(t,e)=>{t.close({isConfirmed:!0,value:e})},Lb=(t,e)=>{t.rejectPromise(e)},Bf=(t,e)=>{const n=Ze.innerParams.get(t||void 0);n.showLoaderOnConfirm&&oo(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Da(n.preConfirm(e,n.validationMessage))).then(s=>{un(hu())||s===!1?(t.hideLoading(),Ua(t)):Cg(t,typeof s>"u"?e:s)}).catch(s=>Lb(t||void 0,s))):Cg(t,e)};function Ic(){const t=Ze.innerParams.get(this);if(!t)return;const e=Ze.domCache.get(this);Yt(e.loader),fu()?t.icon&&kt(Va()):kV(e),hr([e.popup,e.actions],M.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const kV=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?kt(e[0],"inline-block"):iN()&&Yt(t.actions)};function Mb(){const t=Ze.innerParams.get(this),e=Ze.domCache.get(this);return e?pu(e.popup,t.input):null}function Fb(t,e,n){const r=Ze.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function Ub(t,e){const n=We();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${M.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function Bb(){Fb(this,["confirmButton","denyButton","cancelButton"],!1)}function $b(){Fb(this,["confirmButton","denyButton","cancelButton"],!0)}function jb(){Ub(this.getInput(),!1)}function qb(){Ub(this.getInput(),!0)}function Hb(t){const e=Ze.domCache.get(this),n=Ze.innerParams.get(this);bn(e.validationMessage,t),e.validationMessage.className=M["validation-message"],n.customClass&&n.customClass.validationMessage&&Ue(e.validationMessage,n.customClass.validationMessage),kt(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",M["validation-message"]),Eb(r),Ue(r,M.inputerror))}function zb(){const t=Ze.domCache.get(this);t.validationMessage&&Yt(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),hr(e,M.inputerror))}const Ki={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},xV=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],OV={allowEnterKey:void 0},DV=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Wb=t=>Object.prototype.hasOwnProperty.call(Ki,t),Kb=t=>xV.indexOf(t)!==-1,Gb=t=>OV[t],NV=t=>{Wb(t)||hn(`Unknown parameter "${t}"`)},VV=t=>{DV.includes(t)&&hn(`The parameter "${t}" is incompatible with toasts`)},LV=t=>{const e=Gb(t);e&&wb(t,e)},MV=t=>{t.backdrop===!1&&t.allowOutsideClick&&hn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)NV(e),t.toast&&VV(e),LV(e)};function Qb(t){const e=We(),n=Ze.innerParams.get(this);if(!e||Pr(e,n.hideClass.popup)){hn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const r=FV(t),s=Object.assign({},n,r);Cb(this,s),Ze.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const FV=t=>{const e={};return Object.keys(t).forEach(n=>{Kb(n)?e[n]=t[n]:hn(`Invalid parameter to update: ${n}`)}),e};function Yb(){const t=Ze.domCache.get(this),e=Ze.innerParams.get(this);if(!e){Xb(this);return}t.popup&&pe.swalCloseEventFinishedCallback&&(pe.swalCloseEventFinishedCallback(),delete pe.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),pe.eventEmitter.emit("didDestroy"),UV(this)}const UV=t=>{Xb(t),delete t.params,delete pe.keydownHandler,delete pe.keydownTarget,delete pe.currentInstance},Xb=t=>{t.isAwaitingPromise?(wh(Ze,t),t.isAwaitingPromise=!0):(wh(io,t),wh(Ze,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},wh=(t,e)=>{for(const n in t)t[n].delete(e)};var BV=Object.freeze({__proto__:null,_destroy:Yb,close:rs,closeModal:rs,closePopup:rs,closeToast:rs,disableButtons:$b,disableInput:qb,disableLoading:Ic,enableButtons:Bb,enableInput:jb,getInput:Mb,handleAwaitingPromise:Ua,hideLoading:Ic,rejectPromise:Db,resetValidationMessage:zb,showValidationMessage:Hb,update:Qb});const $V=(t,e,n)=>{t.toast?jV(t,e,n):(HV(e),zV(e),WV(t,e,n))},jV=(t,e,n)=>{e.popup.onclick=()=>{t&&(qV(t)||t.timer||t.input)||n(go.close)}},qV=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Ac=!1;const HV=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Ac=!0)}}},zV=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Ac=!0)}}},WV=(t,e,n)=>{e.container.onclick=r=>{if(Ac){Ac=!1;return}r.target===e.container&&uu(t.allowOutsideClick)&&n(go.backdrop)}},KV=t=>typeof t=="object"&&t.jquery,Pg=t=>t instanceof Element||KV(t),GV=t=>{const e={};return typeof t[0]=="object"&&!Pg(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Pg(s)?e[n]=s:s!==void 0&&ci(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function QV(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function YV(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const XV=()=>pe.timeout&&pe.timeout.getTimerLeft(),Jb=()=>{if(pe.timeout)return oN(),pe.timeout.stop()},Zb=()=>{if(pe.timeout){const t=pe.timeout.start();return Lf(t),t}},JV=()=>{const t=pe.timeout;return t&&(t.running?Jb():Zb())},ZV=t=>{if(pe.timeout){const e=pe.timeout.increase(t);return Lf(e,!0),e}},eL=()=>!!(pe.timeout&&pe.timeout.isRunning());let Rg=!1;const ld={};function tL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ld[t]=this,Rg||(document.body.addEventListener("click",nL),Rg=!0)}const nL=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in ld){const r=e.getAttribute(n);if(r){ld[n].fire({template:r});return}}};class rL{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}pe.eventEmitter=new rL;const sL=(t,e)=>{pe.eventEmitter.on(t,e)},iL=(t,e)=>{pe.eventEmitter.once(t,e)},oL=(t,e)=>{if(!t){pe.eventEmitter.reset();return}e?pe.eventEmitter.removeListener(t,e):pe.eventEmitter.removeAllListeners(t)};var aL=Object.freeze({__proto__:null,argsToParams:GV,bindClickHandler:tL,clickCancel:KN,clickConfirm:Pb,clickDeny:WN,enableLoading:oo,fire:QV,getActions:La,getCancelButton:po,getCloseButton:Of,getConfirmButton:ur,getContainer:dn,getDenyButton:ui,getFocusableElements:Df,getFooter:bb,getHtmlContainer:kf,getIcon:Va,getIconContent:eN,getImage:vb,getInputLabel:tN,getLoader:mo,getPopup:We,getProgressSteps:xf,getTimerLeft:XV,getTimerProgressBar:du,getTitle:_b,getValidationMessage:hu,increaseTimer:ZV,isDeprecatedParameter:Gb,isLoading:rN,isTimerRunning:eL,isUpdatableParameter:Kb,isValidParameter:Wb,isVisible:zN,mixin:YV,off:oL,on:sL,once:iL,resumeTimer:Zb,showLoading:oo,stopTimer:Jb,toggleTimer:JV});class lL{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const e0=["swal-title","swal-html","swal-footer"],cL=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return yL(n),Object.assign(uL(n),hL(n),dL(n),fL(n),pL(n),mL(n),gL(n,e0))},uL=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{ni(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof Ki[s]=="boolean"?e[s]=i!=="false":typeof Ki[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},hL=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},dL=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{ni(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${Pf(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},fL=t=>{const e={},n=t.querySelector("swal-image");return n&&(ni(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},pL=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ni(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},mL=t=>{const e={},n=t.querySelector("swal-input");n&&(ni(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{ni(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},gL=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(ni(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},yL=t=>{const e=e0.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||hn(`Unrecognized element <${r}>`)})},ni=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&hn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},t0=10,wL=t=>{const e=dn(),n=We();typeof t.willOpen=="function"&&t.willOpen(n),pe.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;bL(e,n,t),setTimeout(()=>{_L(e,n)},t0),Nf()&&(vL(e,t.scrollbarPadding,s),tV()),!fu()&&!pe.previousActiveElement&&(pe.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),pe.eventEmitter.emit("didOpen",n),hr(e,M["no-transition"])},Cc=t=>{const e=We();if(t.target!==e)return;const n=dn();e.removeEventListener("animationend",Cc),e.removeEventListener("transitionend",Cc),n.style.overflowY="auto"},_L=(t,e)=>{Ib(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Cc),e.addEventListener("transitionend",Cc)):t.style.overflowY="auto"},vL=(t,e,n)=>{nV(),e&&n!=="hidden"&&cV(n),setTimeout(()=>{t.scrollTop=0})},bL=(t,e,n)=>{Ue(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),kt(e,"grid"),setTimeout(()=>{Ue(e,n.showClass.popup),e.style.removeProperty("opacity")},t0)):kt(e,"grid"),Ue([document.documentElement,document.body],M.shown),n.heightAuto&&n.backdrop&&!n.toast&&Ue([document.documentElement,document.body],M["height-auto"])};var Sg={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function EL(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Sg.email),t.input==="url"&&(t.inputValidator=Sg.url))}function TL(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(hn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function IL(t){EL(t),t.showLoaderOnConfirm&&!t.preConfirm&&hn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),TL(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),pN(t)}let Gn;var Ll=new WeakMap;class ft{constructor(){if(WD(this,Ll,void 0),typeof window>"u")return;Gn=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,KD(Ll,this,this._main(Gn.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(MV(Object.assign({},n,e)),pe.currentInstance){const i=io.swalPromiseResolve.get(pe.currentInstance),{isAwaitingPromise:o}=pe.currentInstance;pe.currentInstance._destroy(),o||i({isDismissed:!0}),Nf()&&kb()}pe.currentInstance=Gn;const r=CL(e,n);IL(r),Object.freeze(r),pe.timeout&&(pe.timeout.stop(),delete pe.timeout),clearTimeout(pe.restoreFocusTimeout);const s=PL(Gn);return Cb(Gn,r),Ze.innerParams.set(Gn,r),AL(Gn,s,r)}then(e){return wg(Ll,this).then(e)}finally(e){return wg(Ll,this).finally(e)}}const AL=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};io.swalPromiseResolve.set(t,r),io.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{CV(t)},e.denyButton.onclick=()=>{PV(t)},e.cancelButton.onclick=()=>{RV(t,i)},e.closeButton.onclick=()=>{i(go.close)},$V(n,e,i),GN(pe,n,i),yV(t,n),wL(n),RL(pe,n,i),SL(e,n),setTimeout(()=>{e.container.scrollTop=0})}),CL=(t,e)=>{const n=cL(t),r=Object.assign({},Ki,e,n,t);return r.showClass=Object.assign({},Ki.showClass,r.showClass),r.hideClass=Object.assign({},Ki.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},PL=t=>{const e={popup:We(),container:dn(),actions:La(),confirmButton:ur(),denyButton:ui(),cancelButton:po(),loader:mo(),closeButton:Of(),validationMessage:hu(),progressSteps:xf()};return Ze.domCache.set(t,e),e},RL=(t,e,n)=>{const r=du();Yt(r),e.timer&&(t.timeout=new lL(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(kt(r),_n(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Lf(e.timer)})))},SL=(t,e)=>{if(!e.toast){if(!uu(e.allowEnterKey)){wb("allowEnterKey"),OL();return}kL(t)||xL(t,e)||ad(-1,1)}},kL=t=>{const e=t.popup.querySelectorAll("[autofocus]");for(const n of e)if(n instanceof HTMLElement&&un(n))return n.focus(),!0;return!1},xL=(t,e)=>e.focusDeny&&un(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&un(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&un(t.confirmButton)?(t.confirmButton.focus(),!0):!1,OL=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}ft.prototype.disableButtons=$b;ft.prototype.enableButtons=Bb;ft.prototype.getInput=Mb;ft.prototype.disableInput=qb;ft.prototype.enableInput=jb;ft.prototype.hideLoading=Ic;ft.prototype.disableLoading=Ic;ft.prototype.showValidationMessage=Hb;ft.prototype.resetValidationMessage=zb;ft.prototype.close=rs;ft.prototype.closePopup=rs;ft.prototype.closeModal=rs;ft.prototype.closeToast=rs;ft.prototype.rejectPromise=Db;ft.prototype.update=Qb;ft.prototype._destroy=Yb;Object.assign(ft,aL);Object.keys(BV).forEach(t=>{ft[t]=function(){return Gn&&Gn[t]?Gn[t](...arguments):null}});ft.DismissReason=go;ft.version="11.14.3";const Rr=ft;Rr.default=Rr;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');const DL={class:"bg-no-repeat bg-cover bg-center relative",style:{"background-color":"aliceblue"}},NL={class:"min-h-screen flex flex-col sm:flex-row justify-center"},VL={class:"flex justify-center self-center z-10"},LL={class:"p-12 bg-white mx-auto rounded-2xl shadow-lg w-full max-w-md"},ML={class:"space-y-2"},FL={class:"space-y-2"},UL={__name:"Signin",setup(t){const e=Kt(""),n=Kt(""),r=db(),s=Ys(),i=async()=>{try{await ZP(s,e.value,n.value),Rr.fire({title:"Welcome!",text:"User signed in successfully!",icon:"success",confirmButtonText:"OK"}),r.push("/")}catch(o){let l="Invalid email or password.";o.code==="auth/user-not-found"?l="User not found. Please check your email.":o.code==="auth/wrong-password"?l="Incorrect password. Please try again.":o.code==="auth/invalid-email"&&(l="The email address is not valid."),Rr.fire({title:"Error!",text:l,icon:"error",confirmButtonText:"OK"})}};return(o,l)=>(Je(),yt("div",DL,[V("div",NL,[V("div",VL,[V("div",LL,[l[5]||(l[5]=V("div",{class:"mb-4"},[V("h3",{class:"font-semibold text-2xl text-gray-800"},"Sign In"),V("p",{class:"text-gray-500"},"Please sign in to your account.")],-1)),V("form",{onSubmit:Pd(i,["prevent"]),class:"space-y-5"},[V("div",ML,[l[2]||(l[2]=V("label",{class:"text-sm font-medium text-gray-700 tracking-wide"},"Email",-1)),Yn(V("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),class:"w-full text-base px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-400",type:"email",placeholder:"mail@gmail.com",required:""},null,512),[[Xn,e.value]])]),V("div",FL,[l[3]||(l[3]=V("label",{class:"mb-5 text-sm font-medium text-gray-700 tracking-wide"},"Password",-1)),Yn(V("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c),class:"w-full text-base px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-400",type:"password",placeholder:"Enter your password",required:""},null,512),[[Xn,n.value]])]),l[4]||(l[4]=V("div",null,[V("button",{type:"submit",class:"w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"}," Sign in ")],-1))],32)])])])]))}},BL={__name:"Login",setup(t){return(e,n)=>(Je(),Gi(UL))}},$L={class:"relative flex flex-col justify-center h-screen overflow-hidden"},jL={class:"w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl"},qL={__name:"Signup",setup(t){const e=Kt(""),n=Kt(""),r=Kt(""),s=Kt(""),i=db(),o=async()=>{if(r.value!==s.value){Rr.fire({title:"Error!",text:"Passwords do not match.",icon:"error",confirmButtonText:"OK"});return}try{await JP(m2,n.value,r.value),Rr.fire({title:"Success!",text:"User signed up successfully!",icon:"success",confirmButtonText:"OK"}),i.push("/login")}catch(l){console.error("Error signing up: ",l),Rr.fire({title:"Error!",text:"Error signing up: "+l.message,icon:"error",confirmButtonText:"OK"})}};return(l,c)=>{const f=my("RouterLink");return Je(),yt("div",$L,[V("div",jL,[c[11]||(c[11]=V("h1",{class:"text-3xl font-semibold text-center text-gray-700"},"Sign up",-1)),V("form",{class:"space-y-4",onSubmit:Pd(o,["prevent"])},[V("div",null,[c[4]||(c[4]=V("label",{class:"label"},[V("span",{class:"text-base label-text"},"Name")],-1)),Yn(V("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=p=>e.value=p),placeholder:"Name",class:"w-full input input-bordered",required:""},null,512),[[Xn,e.value]])]),V("div",null,[c[5]||(c[5]=V("label",{class:"label"},[V("span",{class:"text-base label-text"},"Email")],-1)),Yn(V("input",{type:"email","onUpdate:modelValue":c[1]||(c[1]=p=>n.value=p),placeholder:"Email Address",class:"w-full input input-bordered",required:""},null,512),[[Xn,n.value]])]),V("div",null,[c[6]||(c[6]=V("label",{class:"label"},[V("span",{class:"text-base label-text"},"Password")],-1)),Yn(V("input",{type:"password","onUpdate:modelValue":c[2]||(c[2]=p=>r.value=p),placeholder:"Enter Password",class:"w-full input input-bordered",required:""},null,512),[[Xn,r.value]])]),V("div",null,[c[7]||(c[7]=V("label",{class:"label"},[V("span",{class:"text-base label-text"},"Confirm Password")],-1)),Yn(V("input",{type:"password","onUpdate:modelValue":c[3]||(c[3]=p=>s.value=p),placeholder:"Confirm Password",class:"w-full input input-bordered",required:""},null,512),[[Xn,s.value]])]),c[10]||(c[10]=V("div",null,[V("button",{type:"submit",class:"w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"}," Sign Up ")],-1)),V("span",null,[c[9]||(c[9]=Ot("Already have an account? ")),ve(f,{to:"/login",class:"text-blue-600 hover:text-blue-800 hover:underline"},{default:on(()=>c[8]||(c[8]=[Ot("Login")])),_:1})])],32)])])}}},HL={__name:"Signup",setup(t){return(e,n)=>(Je(),Gi(qL))}},zL={class:"chat-container bg-cream min-h-screen flex items-center justify-center"},WL={class:"w-full max-w-lg p-6 bg-white rounded-lg shadow-md"},KL={class:"flex gap-2 mb-4"},GL={class:"bg-gray-50 p-4 rounded-md max-h-80 overflow-y-auto"},QL={class:"space-y-2"},YL=["src"],XL=["onClick"],JL={__name:"Chat",setup(t){const e=Kt(""),n=Kt([]),r=async()=>{const o=Ys().currentUser;if(e.value.trim()===""||!o){alert("กรุณาพิมพ์ข้อความก่อนส่ง");return}try{await d2(Wm(js,"messages"),{text:e.value,timestamp:Date.now(),senderId:o.uid,senderName:o.displayName||"ผู้ใช้ไม่ระบุ",senderProfilePicture:o.photoURL||"path/to/default/profile.jpg"}),e.value=""}catch(l){console.error("Error sending message:",l),alert("เกิดข้อผิดพลาดในการส่งข้อความ: "+l.message)}};Lc(()=>{const i=Wm(js,"messages");f2(i,o=>{n.value=o.docs.map(l=>({id:l.id,...l.data()})),n.value.sort((l,c)=>l.timestamp-c.timestamp)})});const s=async i=>{try{await h2(fo(js,"messages",i)),console.log(`Message ${i} deleted successfully.`)}catch(o){console.error("Error deleting message:",o),alert("เกิดข้อผิดพลาดในการลบข้อความ: "+o.message)}};return(i,o)=>(Je(),yt(dt,null,[ve(xa),V("div",zL,[V("div",WL,[o[2]||(o[2]=V("h2",{class:"text-2xl font-semibold text-center text-gray-800 mb-6"},"ห้องแชท",-1)),V("div",KL,[Yn(V("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),placeholder:"พิมพ์ข้อความ...",class:"flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"},null,512),[[Xn,e.value]]),V("button",{onClick:r,class:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"}," ส่ง ")]),V("div",GL,[o[1]||(o[1]=V("h3",{class:"text-lg font-medium text-gray-700 mb-2"},"ข้อความ:",-1)),V("ul",QL,[(Je(!0),yt(dt,null,gy(n.value,l=>(Je(),yt("li",{key:l.id,class:"flex items-start bg-blue-100 px-3 py-2 rounded-md text-gray-800"},[V("img",{src:l.senderProfilePicture||"path/to/default/profile.jpg",alt:"Profile Picture",class:"w-10 h-10 rounded-full mr-2"},null,8,YL),V("div",null,[V("strong",null,Ar(l.senderName),1),Ot(": "+Ar(l.text)+" ",1),V("button",{onClick:c=>s(l.id),class:"text-red-500 ml-2"},"ลบ",8,XL)])]))),128))])])])]),ve(Oa)],64))}},ZL={class:"profile-container max-w-md mx-auto mt-60 p-6 bg-white rounded-lg shadow-lg"},eM={class:"flex flex-col items-center"},tM=["src"],nM={class:"user-info text-center"},rM={class:"text-lg"},sM={class:"text-lg"},iM={class:"mt-40"},oM={__name:"Profile",setup(t){const e=Kt(""),n=Kt(""),r=Kt(""),s=async l=>{const c=l.target.files[0];if(c)try{const f=await Lx(c);e.value=f,console.log("File selected:",c);const p=Ys().currentUser;p&&await i(p.uid,f)}catch(f){console.error("Failed to upload profile picture:",f)}},i=async(l,c)=>{try{const f=fo(js,"users",l);await Ov(f,{profilePicture:c},{merge:!0}),console.log("Profile picture URL saved in Firestore!")}catch(f){console.error("Error saving profile picture URL:",f)}},o=()=>{const l=document.querySelector("input[type=file]");l&&l.click()};return Lc(async()=>{const c=Ys().currentUser;if(c){const f=await Vx(c.uid);e.value=f.profilePicture||"",n.value=c.email,r.value=f.bio||"ไม่มีข้อมูล"}}),(l,c)=>(Je(),yt(dt,null,[ve(xa),V("div",ZL,[c[2]||(c[2]=V("h2",{class:"text-2xl font-bold text-center mb-4"},"โปรไฟล์ของคุณ",-1)),V("div",eM,[V("img",{src:e.value,alt:"Profile Picture",class:"profile-picture mb-4"},null,8,tM),V("input",{type:"file",onChange:s,accept:"image/*",class:"hidden",ref:"fileInput"},null,544),V("button",{onClick:o,class:"bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-600 transition"},"Upload Profile Picture")]),V("div",nM,[V("p",rM,[c[0]||(c[0]=V("strong",null,"Email:",-1)),Ot(" "+Ar(n.value),1)]),V("p",sM,[c[1]||(c[1]=V("strong",null,"Bio:",-1)),Ot(" "+Ar(r.value),1)])])]),V("div",iM,[ve(Oa)])],64))}},aM={class:"contact-container min-h-screen flex items-center justify-center"},lM={class:"w-full max-w-md p-6 bg-black rounded-lg shadow-md"},cM={__name:"Contact",setup(t){const e=Kt({name:"",email:"",message:""}),n=()=>{console.log("Form Data Submitted:",e.value),e.value={name:"",email:"",message:""},Rr.fire({title:"ขอบคุณ!",text:"ข้อความของคุณถูกส่งแล้ว!",icon:"success",confirmButtonText:"ตกลง"})};return(r,s)=>(Je(),yt(dt,null,[ve(xa),V("div",aM,[V("div",lM,[s[7]||(s[7]=V("h2",{class:"text-2xl font-semibold text-center text-white mb-6"},"ติดต่อเรา",-1)),V("form",{onSubmit:Pd(n,["prevent"]),class:"space-y-4"},[V("div",null,[s[3]||(s[3]=V("label",{for:"name",class:"block text-red-400"},"ชื่อ:",-1)),Yn(V("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.value.name=i),type:"text",id:"name",placeholder:"กรุณากรอกชื่อ",class:"w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400",required:""},null,512),[[Xn,e.value.name]])]),V("div",null,[s[4]||(s[4]=V("label",{for:"email",class:"block text-red-400"},"อีเมล:",-1)),Yn(V("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.value.email=i),type:"email",id:"email",placeholder:"กรุณากรอกอีเมล",class:"w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400",required:""},null,512),[[Xn,e.value.email]])]),V("div",null,[s[5]||(s[5]=V("label",{for:"message",class:"block text-red-400"},"ข้อความ:",-1)),Yn(V("textarea",{"onUpdate:modelValue":s[2]||(s[2]=i=>e.value.message=i),id:"message",placeholder:"กรุณากรอกข้อความ",rows:"4",class:"w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400",required:""},null,512),[[Xn,e.value.message]])]),s[6]||(s[6]=V("button",{type:"submit",class:"w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"}," ส่งข้อความ ",-1))],32),s[8]||(s[8]=Uc('<div class="mt-6 text-center"><h3 class="text-lg font-medium text-red-400">ข้อมูลการติดต่อ:</h3><p class="text-gray-300">โทร: 012-345-6789</p><p class="text-gray-300">อีเมล: contact@yourshop.com</p><p class="text-gray-300">ที่อยู่: 123 ถนนตัวอย่าง, กรุงเทพฯ, ประเทศไทย</p></div>',1))])]),ve(Oa)],64))}},uM=MO({history:pO("/Deploy-Final-Ko"),routes:[{path:"/",name:"home",component:jD},{path:"/about",name:"about",component:HD},{path:"/login",name:"login",component:BL},{path:"/signup",name:"signup",component:HL},{path:"/chat",name:"chat",component:JL},{path:"/profile",name:"profile",component:oM},{path:"/contact",name:"contact",component:cM}]}),mu=JT(UO);mu.use(w2);mu.use(rI());mu.use(uM);Mx();mu.mount("#app");
