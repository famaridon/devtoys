"use strict";(self.webpackChunkdevtoys_web=self.webpackChunkdevtoys_web||[]).push([[169],{169:(Rt,le,T)=>{T.r(le),T.d(le,{ColorPickerModule:()=>St});var m,$,ue,K,de,ce=T(6895),he=T(9132),A={},J=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function I(e,n){for(var r in n)e[r]=n[r];return e}function fe(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,r){var t,i,o,a,s=arguments;if(n=I({},n),arguments.length>3)for(r=[r],t=3;t<arguments.length;t++)r.push(s[t]);if(null!=r&&(n.children=r),null!=e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===n[i]&&(n[i]=e.defaultProps[i]);return a=n.key,null!=(o=n.ref)&&delete n.ref,null!=a&&delete n.key,q(e,n,a,o)}function q(e,n,r,t){var i={type:e,props:n,key:r,ref:t,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return m.vnode&&m.vnode(i),i}function B(e){return e.children}function j(e,n){this.props=e,this.context=n}function G(e,n){if(null==n)return e.__p?G(e.__p,e.__p.__k.indexOf(e)+1):null;for(var r;n<e.__k.length;n++)if(null!=(r=e.__k[n])&&null!=r.__e)return r.__e;return"function"==typeof e.type?G(e):null}function ve(e){var n,r;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(r=e.__k[n])&&null!=r.__e){e.__e=e.__c.base=r.__e;break}return ve(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&1===$.push(e)||K!==m.debounceRendering)&&(K=m.debounceRendering,(m.debounceRendering||ue)(Le))}function Le(){var e,n,r,t,i,o,a,s;for($.sort(function(c,h){return h.__v.__b-c.__v.__b});e=$.pop();)e.__d&&(r=void 0,t=void 0,o=(i=(n=e).__v).__e,a=n.__P,s=n.u,n.u=!1,a&&(r=[],t=ee(a,i,I({},i),n.__n,void 0!==a.ownerSVGElement,null,r,s,o??G(i)),ye(r,i),t!=o&&ve(i)))}function ge(e,n,r,t,i,o,a,s,c){var h,u,l,d,f,g,b,x=r&&r.__k||J,p=x.length;if(s==A&&(s=null!=o?o[0]:p?G(r,0):null),h=0,n.__k=Q(n.__k,function(y){if(null!=y){if(y.__p=n,y.__b=n.__b+1,null===(l=x[h])||l&&y.key==l.key&&y.type===l.type)x[h]=void 0;else for(u=0;u<p;u++){if((l=x[u])&&y.key==l.key&&y.type===l.type){x[u]=void 0;break}l=null}if(d=ee(e,y,l=l||A,t,i,o,a,null,s,c),(u=y.ref)&&l.ref!=u&&(b||(b=[])).push(u,y.__c||d,y),null!=d){if(null==g&&(g=d),null!=y.l)d=y.l,y.l=null;else if(o==l||d!=s||null==d.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(d);else{for(f=s,u=0;(f=f.nextSibling)&&u<p;u+=2)if(f==d)break e;e.insertBefore(d,s)}"option"==n.type&&(e.value="")}s=d.nextSibling,"function"==typeof n.type&&(n.l=d)}}return h++,y}),n.__e=g,null!=o&&"function"!=typeof n.type)for(h=o.length;h--;)null!=o[h]&&fe(o[h]);for(h=p;h--;)null!=x[h]&&ke(x[h],x[h]);if(b)for(h=0;h<b.length;h++)pe(b[h],b[++h],b[++h])}function Q(e,n,r){if(null==r&&(r=[]),null==e||"boolean"==typeof e)n&&r.push(n(null));else if(Array.isArray(e))for(var t=0;t<e.length;t++)Q(e[t],n,r);else r.push(n?n(function We(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return q(null,e,null,null);if(null!=e.__e||null!=e.__c){var n=q(e.type,e.props,e.key,null);return n.__e=e.__e,n}return e}(e)):e);return r}function _e(e,n,r){"-"===n[0]?e.setProperty(n,r):e[n]="number"==typeof r&&!1===je.test(n)?r+"px":r??""}function be(e,n,r,t,i){var o,a,s,c,h;if("key"!==(n=i?"className"===n?"class":n:"class"===n?"className":n)&&"children"!==n)if("style"===n)if(o=e.style,"string"==typeof r)o.cssText=r;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(a in t)r&&a in r||_e(o,a,"");if(r)for(s in r)t&&r[s]===t[s]||_e(o,s,r[s])}else"o"===n[0]&&"n"===n[1]?(c=n!==(n=n.replace(/Capture$/,"")),h=n.toLowerCase(),n=(h in e?h:n).slice(2),r?(t||e.addEventListener(n,me,c),(e.t||(e.t={}))[n]=r):e.removeEventListener(n,me,c)):"list"!==n&&"tagName"!==n&&"form"!==n&&!i&&n in e?e[n]=r??"":"function"!=typeof r&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==r||!1===r?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),r):null==r||!1===r?e.removeAttribute(n):e.setAttribute(n,r))}function me(e){return this.t[e.type](m.event?m.event(e):e)}function ee(e,n,r,t,i,o,a,s,c,h){var u,l,d,f,g,b,x,p,y,P,R=n.type;if(void 0!==n.constructor)return null;(u=m.__b)&&u(n);try{e:if("function"==typeof R){if(p=n.props,y=(u=R.contextType)&&t[u.__c],P=u?y?y.props.value:u.__p:t,r.__c?x=(l=n.__c=r.__c).__p=l.__E:("prototype"in R&&R.prototype.render?n.__c=l=new R(p,P):(n.__c=l=new j(p,P),l.constructor=R,l.render=Be),y&&y.sub(l),l.props=p,l.state||(l.state={}),l.context=P,l.__n=t,d=l.__d=!0,l.__h=[]),null==l.__s&&(l.__s=l.state),null!=R.getDerivedStateFromProps&&I(l.__s==l.state?l.__s=I({},l.__s):l.__s,R.getDerivedStateFromProps(p,l.__s)),d)null==R.getDerivedStateFromProps&&null!=l.componentWillMount&&l.componentWillMount(),null!=l.componentDidMount&&a.push(l);else{if(null==R.getDerivedStateFromProps&&null==s&&null!=l.componentWillReceiveProps&&l.componentWillReceiveProps(p,P),!s&&null!=l.shouldComponentUpdate&&!1===l.shouldComponentUpdate(p,l.__s,P)){for(l.props=p,l.state=l.__s,l.__d=!1,l.__v=n,n.__e=null!=c?c!==r.__e?c:r.__e:null,n.__k=r.__k,u=0;u<n.__k.length;u++)n.__k[u]&&(n.__k[u].__p=n);break e}null!=l.componentWillUpdate&&l.componentWillUpdate(p,l.__s,P)}for(f=l.props,g=l.state,l.context=P,l.props=p,l.state=l.__s,(u=m.__r)&&u(n),l.__d=!1,l.__v=n,l.__P=e,u=l.render(l.props,l.state,l.context),n.__k=Q(null!=u&&u.type==B&&null==u.key?u.props.children:u),null!=l.getChildContext&&(t=I(I({},t),l.getChildContext())),d||null==l.getSnapshotBeforeUpdate||(b=l.getSnapshotBeforeUpdate(f,g)),ge(e,n,r,t,i,o,a,c,h),l.base=n.__e;u=l.__h.pop();)l.__s&&(l.state=l.__s),u.call(l);d||null==f||null==l.componentDidUpdate||l.componentDidUpdate(f,g,b),x&&(l.__E=l.__p=null)}else n.__e=function $e(e,n,r,t,i,o,a,s){var c,h,u,l,d=r.props,f=n.props;if(i="svg"===n.type||i,null==e&&null!=o)for(c=0;c<o.length;c++)if(null!=(h=o[c])&&(null===n.type?3===h.nodeType:h.localName===n.type)){e=h,o[c]=null;break}if(null==e){if(null===n.type)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),o=null}return null===n.type?d!==f&&(null!=o&&(o[o.indexOf(e)]=null),e.data=f):n!==r&&(null!=o&&(o=J.slice.call(e.childNodes)),u=(d=r.props||A).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,s||(l||u)&&(l&&u&&l.__html==u.__html||(e.innerHTML=l&&l.__html||"")),function Ue(e,n,r,t,i){var o;for(o in r)o in n||be(e,o,null,r[o],t);for(o in n)i&&"function"!=typeof n[o]||"value"===o||"checked"===o||r[o]===n[o]||be(e,o,n[o],r[o],t)}(e,f,d,i,s),n.__k=n.props.children,l||ge(e,n,r,t,"foreignObject"!==n.type&&i,o,a,A,s),s||("value"in f&&void 0!==f.value&&f.value!==e.value&&(e.value=f.value??""),"checked"in f&&void 0!==f.checked&&f.checked!==e.checked&&(e.checked=f.checked))),e}(r.__e,n,r,t,i,o,a,h);(u=m.diffed)&&u(n)}catch(Ct){m.__e(Ct,n,r)}return n.__e}function ye(e,n){for(var r;r=e.pop();)try{r.componentDidMount()}catch(t){m.__e(t,r.__v)}m.__c&&m.__c(n)}function pe(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(t){m.__e(t,r)}}function ke(e,n,r){var t,i,o;if(m.unmount&&m.unmount(e),(t=e.ref)&&pe(t,null,n),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.l=null,null!=(t=e.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(a){m.__e(a,n)}t.base=t.__P=null}if(t=e.__k)for(o=0;o<t.length;o++)t[o]&&ke(t[o],n,r);null!=i&&fe(i)}function Be(e,n,r){return this.constructor(e,r)}function xe(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function w(){return w=Object.assign||function(e){for(var n=arguments,r=1;r<arguments.length;r++){var t=n[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},w.apply(this,arguments)}m={},j.prototype.setState=function(e,n){var r=this.__s!==this.state&&this.__s||(this.__s=I({},this.state));("function"!=typeof e||(e=e(r,this.props)))&&I(r,e),null!=e&&this.__v&&(this.u=!1,n&&this.__h.push(n),Y(this))},j.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,Y(this))},j.prototype.render=B,$=[],ue="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=m.debounceRendering,m.__e=function(e,n,r){for(var t;n=n.__p;)if((t=n.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(e));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(e)}return Y(t.__E=t)}catch(i){e=i}throw e},de=A;var M="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",we="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",Ee="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",Ze=new RegExp("rgb"+we),Ve=new RegExp("rgba"+Ee),Ke=new RegExp("hsl"+we),Je=new RegExp("hsla"+Ee),z="^(?:#?|0x?)",H="([0-9a-fA-F]{1})",N="([0-9a-fA-F]{2})",qe=new RegExp(z+H+H+H+"$"),Ye=new RegExp(z+H+H+H+H+"$"),Qe=new RegExp(z+N+N+N+"$"),et=new RegExp(z+N+N+N+N+"$"),F=Math.log,W=Math.round,U=Math.floor;function C(e,n,r){return Math.min(Math.max(e,n),r)}function E(e,n){var r=e.indexOf("%")>-1,t=parseFloat(e);return r?n/100*t:t}function S(e){return parseInt(e,16)}function O(e){return e.toString(16).padStart(2,"0")}var L=function(){function e(r,t){this.$={h:0,s:0,v:0,a:1},r&&this.set(r),this.onChange=t,this.initialValue=w({},this.$)}var n=e.prototype;return n.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof e?this.hsva=t.hsva:"r"in t&&"g"in t&&"b"in t?this.rgb=t:"h"in t&&"s"in t&&"v"in t?this.hsv=t:"h"in t&&"s"in t&&"l"in t?this.hsl=t:"kelvin"in t&&(this.kelvin=t.kelvin)}},n.setChannel=function(t,i,o){var a;this[t]=w({},this[t],((a={})[i]=o,a))},n.reset=function(){this.hsva=this.initialValue},n.clone=function(){return new e(this)},n.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(t){var i=t.h/60,o=t.s/100,a=t.v/100,s=U(i),c=i-s,h=a*(1-o),u=a*(1-c*o),l=a*(1-(1-c)*o),d=s%6,g=[l,a,a,u,h,h][d],b=[h,h,l,a,a,u][d];return{r:C(255*[a,u,h,h,l,a][d],0,255),g:C(255*g,0,255),b:C(255*b,0,255)}},e.rgbToHsv=function(t){var i=t.r/255,o=t.g/255,a=t.b/255,s=Math.max(i,o,a),c=Math.min(i,o,a),h=s-c,u=0,l=s,d=0===s?0:h/s;switch(s){case c:u=0;break;case i:u=(o-a)/h+(o<a?6:0);break;case o:u=(a-i)/h+2;break;case a:u=(i-o)/h+4}return{h:60*u%360,s:C(100*d,0,100),v:C(100*l,0,100)}},e.hsvToHsl=function(t){var i=t.s/100,o=t.v/100,a=(2-i)*o,s=a<=1?a:2-a;return{h:t.h,s:C(100*(s<1e-9?0:i*o/s),0,100),l:C(50*a,0,100)}},e.hslToHsv=function(t){var i=2*t.l,o=t.s*(i<=100?i:200-i)/100;return{h:t.h,s:C(100*(i+o<1e-9?0:2*o/(i+o)),0,100),v:C((i+o)/2,0,100)}},e.kelvinToRgb=function(t){var o,a,s,i=t/100;return i<66?(o=255,a=-155.25485562709179-.44596950469579133*(a=i-2)+104.49216199393888*F(a),s=i<20?0:.8274096064007395*(s=i-10)-254.76935184120902+115.67994401066147*F(s)):(o=351.97690566805693+.114206453784165*(o=i-55)-40.25366309332127*F(o),a=325.4494125711974+.07943456536662342*(a=i-50)-28.0852963507957*F(a),s=255),{r:C(U(o),0,255),g:C(U(a),0,255),b:C(U(s),0,255)}},e.rgbToKelvin=function(t){for(var h,i=t.r,o=t.b,s=2e3,c=4e4;c-s>.4;){var u=e.kelvinToRgb(h=.5*(c+s));u.b/u.r>=o/i?c=h:s=h}return h},function ze(e,n,r){n&&xe(e.prototype,n),r&&xe(e,r)}(e,[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var i=this.$;if(t=w({},i,t),this.onChange){var o={h:!1,v:!1,s:!1,a:!1};for(var a in i)o[a]=t[a]!=i[a];this.$=t,(o.h||o.s||o.v||o.a)&&this.onChange(this,o)}else this.$=t}},{key:"hsva",get:function(){return w({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=w({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:"red",get:function(){return this.rgb.r},set:function(t){this.rgb=w({},this.rgb,{r:t})}},{key:"green",get:function(){return this.rgb.g},set:function(t){this.rgb=w({},this.rgb,{g:t})}},{key:"blue",get:function(){return this.rgb.b},set:function(t){this.rgb=w({},this.rgb,{b:t})}},{key:"rgb",get:function(){var t=e.hsvToRgb(this.$),o=t.g,a=t.b;return{r:W(t.r),g:W(o),b:W(a)}},set:function(t){this.hsv=w({},e.rgbToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"rgba",get:function(){return w({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var t=e.hsvToHsl(this.$),o=t.s,a=t.l;return{h:W(t.h),s:W(o),l:W(a)}},set:function(t){this.hsv=w({},e.hslToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"hsla",get:function(){return w({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var i,o,a,s,c=1;if((i=Ze.exec(t))?(o=E(i[1],255),a=E(i[2],255),s=E(i[3],255)):(i=Ve.exec(t))&&(o=E(i[1],255),a=E(i[2],255),s=E(i[3],255),c=E(i[4],1)),!i)throw new Error("Invalid rgb string");this.rgb={r:o,g:a,b:s,a:c}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+O(t.r)+O(t.g)+O(t.b)},set:function(t){var i,o,a,s,c=255;if((i=qe.exec(t))?(o=17*S(i[1]),a=17*S(i[2]),s=17*S(i[3])):(i=Ye.exec(t))?(o=17*S(i[1]),a=17*S(i[2]),s=17*S(i[3]),c=17*S(i[4])):(i=Qe.exec(t))?(o=S(i[1]),a=S(i[2]),s=S(i[3])):(i=et.exec(t))&&(o=S(i[1]),a=S(i[2]),s=S(i[3]),c=S(i[4])),!i)throw new Error("Invalid hex string");this.rgb={r:o,g:a,b:s,a:c/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+O(t.r)+O(t.g)+O(t.b)+O(U(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var i,o,a,s,c=1;if((i=Ke.exec(t))?(o=E(i[1],360),a=E(i[2],100),s=E(i[3],100)):(i=Je.exec(t))&&(o=E(i[1],360),a=E(i[2],100),s=E(i[3],100),c=E(i[4],1)),!i)throw new Error("Invalid hsl string");this.hsl={h:o,s:a,l:s,a:c}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}]),e}();function te(e){var n,r=e.width,t=e.sliderSize,o=e.handleRadius,a=e.padding,c="horizontal"===e.layoutDirection;return t=null!=(n=t)?n:2*a+2*o,"circle"===e.sliderShape?{handleStart:e.padding+e.handleRadius,handleRange:r-2*a-2*o,width:r,height:r,cx:r/2,cy:r/2,radius:r/2-e.borderWidth/2}:{handleStart:t/2,handleRange:r-t,radius:t/2,x:0,y:0,width:c?t:r,height:c?r:t}}var ne,Se=2*Math.PI,Ce=function(n,r){return Math.sqrt(n*n+r*r)};function Re(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function X(e){var n=e.width/2;return{width:e.width,radius:n-e.borderWidth,cx:n,cy:n}}function Ae(e,n,r){var t=e.wheelAngle,i=e.wheelDirection;return r&&"clockwise"===i?n=t+n:"clockwise"===i?n=360-t+n:r&&"anticlockwise"===i?n=t+180-n:"anticlockwise"===i&&(n=t-n),function(n,r){return(n%360+360)%360}(n)}function Ie(e,n,r){var t=X(e),i=t.cx,o=t.cy,a=Re(e);n=i-n,r=o-r;var s=Ae(e,Math.atan2(-r,-n)*(360/Se)),c=Math.min(Ce(n,r),a);return{h:Math.round(s),s:Math.round(100/a*c)}}function re(e){var n=e.width;return{width:n,height:e.boxHeight??n,radius:e.padding+e.handleRadius}}function Pe(e,n,r){var t=re(e),a=t.radius,l=(r-a)/(t.height-2*a)*100;return{s:Math.max(0,Math.min((n-a)/(t.width-2*a)*100,100)),v:Math.max(0,Math.min(100-l,100))}}function ft(e){ne||(ne=document.getElementsByTagName("base"));var n=window.navigator.userAgent,r=/^((?!chrome|android).)*safari/i.test(n),t=/iPhone|iPod|iPad/i.test(n),i=window.location;return(r||t)&&ne.length>0?i.protocol+"//"+i.host+i.pathname+i.search+e:e}function Te(e,n,r,t){for(var i=0;i<t.length;i++){var o=t[i].x-n,a=t[i].y-r;if(Math.sqrt(o*o+a*a)<e.handleRadius)return i}return null}function ie(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function oe(e,n,r){return e+"-gradient("+n+", "+r.map(function(t){return t[1]+" "+t[0]+"%"}).join(",")+")"}function k(e){return"string"==typeof e?e:e+"px"}var Me=["mousemove","touchmove","mouseup","touchend"],Z=function(e){function n(r){e.call(this,r),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.render=function(t){var i=this.handleEvent.bind(this),o={onMouseDown:i,ontouchstart:i},a="horizontal"===t.layoutDirection,c={overflow:"visible",display:a?"inline-block":"block"};return t.index>0&&(c[a?"marginLeft":"marginTop"]=null===t.margin?t.sliderMargin:t.margin),_(B,null,t.children(this.uid,o,c))},n.prototype.handleEvent=function(t){var i=this,o=this.props.onInput,a=this.base.getBoundingClientRect();t.preventDefault();var s=t.touches?t.changedTouches[0]:t,c=s.clientX-a.left,h=s.clientY-a.top;switch(t.type){case"mousedown":case"touchstart":!1!==o(c,h,0)&&Me.forEach(function(l){document.addEventListener(l,i,{passive:!1})});break;case"mousemove":case"touchmove":o(c,h,1);break;case"mouseup":case"touchend":o(c,h,2),Me.forEach(function(l){document.removeEventListener(l,i,{passive:!1})})}},n}(j);function D(e){var n=e.r,r=e.url,t=n,i=n;return _("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+k(e.x)+", "+k(e.y)+")",willChange:"transform",top:k(-n),left:k(-n),width:k(2*n),height:k(2*n),position:"absolute",overflow:"visible"}},r&&_("use",Object.assign({xlinkHref:ft(r)},e.props)),!r&&_("circle",{cx:t,cy:i,r:n,fill:"none","stroke-width":2,stroke:"#000"}),!r&&_("circle",{cx:t,cy:i,r:n-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}function V(e){var n=e.activeIndex,r=void 0!==n&&n<e.colors.length?e.colors[n]:e.color,t=te(e),i=t.width,o=t.height,a=t.radius,s=function at(e,n){var r=te(e),t=r.width,i=r.height,o=r.handleRange,a=r.handleStart,s="horizontal"===e.layoutDirection,c=function it(e,n){var r=n.hsva,t=n.rgb;switch(e.sliderType){case"red":return t.r/2.55;case"green":return t.g/2.55;case"blue":return t.b/2.55;case"alpha":return 100*r.a;case"kelvin":var i=e.minTemperature;return Math.max(0,Math.min((n.kelvin-i)/(e.maxTemperature-i)*100,100));case"hue":return r.h/=3.6;case"saturation":return r.s;default:return r.v}}(e,n),h=s?t/2:i/2,u=a+c/100*o;return s&&(u=-1*u+o+2*a),{x:s?h:u,y:s?u:h}}(e,r),c=function st(e,n){var r=n.hsv,t=n.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+t.g+","+t.b+")"],[100,"rgb(255,"+t.g+","+t.b+")"]];case"green":return[[0,"rgb("+t.r+",0,"+t.b+")"],[100,"rgb("+t.r+",255,"+t.b+")"]];case"blue":return[[0,"rgb("+t.r+","+t.g+",0)"],[100,"rgb("+t.r+","+t.g+",255)"]];case"alpha":return[[0,"rgba("+t.r+","+t.g+","+t.b+",0)"],[100,"rgb("+t.r+","+t.g+","+t.b+")"]];case"kelvin":for(var i=[],o=e.minTemperature,a=e.maxTemperature,c=a-o,h=o,u=0;h<a;h+=c/8,u+=1){var l=L.kelvinToRgb(h);i.push([12.5*u,"rgb("+l.r+","+l.g+","+l.b+")"])}return i;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var b=L.hsvToHsl({h:r.h,s:0,v:r.v}),x=L.hsvToHsl({h:r.h,s:100,v:r.v});return[[0,"hsl("+b.h+","+b.s+"%,"+b.l+"%)"],[100,"hsl("+x.h+","+x.s+"%,"+x.l+"%)"]];default:var p=L.hsvToHsl({h:r.h,s:r.s,v:100});return[[0,"#000"],[100,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"]]}}(e,r);return _(Z,Object.assign({},e,{onInput:function h(u,l,d){var f=function ot(e,n,r){var a,t=te(e),i=t.handleRange,o=t.handleStart;a="horizontal"===e.layoutDirection?-1*r+i+o:n-o,a=Math.max(Math.min(a,i),0);var s=Math.round(100/i*a);switch(e.sliderType){case"kelvin":var c=e.minTemperature;return c+s/100*(e.maxTemperature-c);case"alpha":return s/100;case"hue":return 3.6*s;case"red":case"blue":case"green":return 2.55*s;default:return s}}(e,u,l);e.parent.inputActive=!0,r[e.sliderType]=f,e.onInput(d,e.id)}}),function(u,l,d){return _("div",Object.assign({},l,{className:"IroSlider",style:Object.assign({},{position:"relative",width:k(i),height:k(o),borderRadius:k(a),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},d)}),_("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:k(a),background:oe("linear","horizontal"===e.layoutDirection?"to top":"to right",c)},ie(e))}),_(D,{isActive:!0,index:r.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:s.x,y:s.y}))})}function He(e){var r=X(e).width,t=e.colors,o=e.parent,a=e.color,s=a.hsv,c=t.map(function(l){return function ht(e,n){var r=n.hsv,t=X(e),i=t.cx,o=t.cy,a=Re(e),s=(180+Ae(e,r.h,!0))*(Se/360),c=r.s/100*a,h="clockwise"===e.wheelDirection?-1:1;return{x:i+c*Math.cos(s)*h,y:o+c*Math.sin(s)*h}}(e,l)}),h={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return _(Z,Object.assign({},e,{onInput:function u(l,d,f){if(0===f){if(!function ct(e,n,r){var t=X(e),a=e.width/2;return Ce(t.cx-n,t.cy-r)<a}(e,l,d))return!1;var g=Te(e,l,d,c);null!==g?o.setActiveColor(g):(o.inputActive=!0,a.hsv=Ie(e,l,d),e.onInput(f,e.id))}else 1===f&&(o.inputActive=!0,a.hsv=Ie(e,l,d));e.onInput(f,e.id)}}),function(l,d,f){return _("div",Object.assign({},d,{className:"IroWheel",style:Object.assign({},{width:k(r),height:k(r),position:"relative"},f)}),_("div",{className:"IroWheelHue",style:Object.assign({},h,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:"clockwise"===e.wheelDirection?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"})}),_("div",{className:"IroWheelSaturation",style:Object.assign({},h,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&_("div",{className:"IroWheelLightness",style:Object.assign({},h,{background:"#000",opacity:1-s.v/100})}),_("div",{className:"IroWheelBorder",style:Object.assign({},h,ie(e))}),t.filter(function(g){return g!==a}).map(function(g){return _(D,{isActive:!1,index:g.index,fill:g.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[g.index].x,y:c[g.index].y})}),_(D,{isActive:!0,index:a.index,fill:a.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[a.index].x,y:c[a.index].y}))})}D.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},V.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var Ne=function(e){function n(r){var t=this;e.call(this,r),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=r.id,(r.colors.length>0?r.colors:[r.color]).forEach(function(o){return t.addColor(o)}),this.setActiveColor(0),this.state=Object.assign({},r,{color:this.color,colors:this.colors,layout:r.layout})}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.addColor=function(t,i){void 0===i&&(i=this.colors.length);var o=new L(t,this.onColorChange.bind(this));this.colors.splice(i,0,o),this.colors.forEach(function(a,s){return a.index=s}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",o)},n.prototype.removeColor=function(t){var i=this.colors.splice(t,1)[0];i.unbind(),this.colors.forEach(function(o,a){return o.index=a}),this.state&&this.setState({colors:this.colors}),i.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",i)},n.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},n.prototype.setColors=function(t,i){var o=this;void 0===i&&(i=0),this.colors.forEach(function(a){return a.unbind()}),this.colors=[],t.forEach(function(a){return o.addColor(a)}),this.setActiveColor(i),this.emit("color:setAll",this.colors)},n.prototype.on=function(t,i){var o=this,a=this.events;(Array.isArray(t)?t:[t]).forEach(function(s){(a[s]||(a[s]=[])).push(i),o.deferredEvents[s]&&(o.deferredEvents[s].forEach(function(c){i.apply(null,c)}),o.deferredEvents[s]=[])})},n.prototype.off=function(t,i){var o=this;(Array.isArray(t)?t:[t]).forEach(function(a){var s=o.events[a];s&&s.splice(s.indexOf(i),1)})},n.prototype.emit=function(t){for(var i=this,o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];var s=this.activeEvents,c=!!s.hasOwnProperty(t)&&s[t];if(!c){s[t]=!0;var h=this.events[t]||[];h.forEach(function(u){return u.apply(i,o)}),s[t]=!1}},n.prototype.deferredEmit=function(t){for(var i,o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];var s=this.deferredEvents;(i=this).emit.apply(i,[t].concat(o)),(s[t]||(s[t]=[])).push(o)},n.prototype.setOptions=function(t){this.setState(t)},n.prototype.resize=function(t){this.setOptions({width:t})},n.prototype.reset=function(){this.colors.forEach(function(t){return t.reset()}),this.setState({colors:this.colors})},n.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},n.prototype.onColorChange=function(t,i){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,i)),this.emit("color:change",t,i)},n.prototype.emitInputEvent=function(t,i){0===t?this.emit("input:start",this.color,i):1===t?this.emit("input:move",this.color,i):2===t&&this.emit("input:end",this.color,i)},n.prototype.render=function(t,i){var o=this,a=i.layout;return Array.isArray(a)||(a=[{component:He},{component:V}],i.transparency&&a.push({component:V,options:{sliderType:"alpha"}})),_("div",{class:"IroColorPicker",id:i.id,style:{display:i.display}},a.map(function(s,c){return _(s.component,Object.assign({},i,s.options,{ref:void 0,onInput:o.emitInputEvent.bind(o),parent:o,index:c}))}))},n}(j);Ne.defaultProps=Object.assign({},{width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},{colors:[],display:"block",id:null,layout:"default",margin:null});var ae,e,r,yt=function mt(e){var n=function(r,t){var i,o=document.createElement("div");function a(){var s=r instanceof Element?r:document.querySelector(r);s.appendChild(i.base),i.onMount(s)}return function Ge(e,n,r){var t,i,o;m.__p&&m.__p(e,n),i=(t=r===de)?null:r&&r.__k||n.__k,e=_(B,null,[e]),o=[],ee(n,t?n.__k=e:(r||n).__k=e,i||A,A,void 0!==n.ownerSVGElement,r&&!t?[r]:i?null:J.slice.call(n.childNodes),o,!1,r||A,t),ye(o,e)}(_(e,Object.assign({},{ref:function(s){return i=s}},t)),o),"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a),i};return n.prototype=e.prototype,Object.assign(n,e),n.__component=e,n}(Ne);(e=ae||(ae={})).version="5.5.2",e.Color=L,e.ColorPicker=yt,(r=e.ui||(e.ui={})).h=_,r.ComponentBase=Z,r.Handle=D,r.Slider=V,r.Wheel=He,r.Box=function gt(e){var n=re(e),r=n.width,t=n.height,i=n.radius,o=e.colors,a=e.parent,s=e.activeIndex,c=void 0!==s&&s<e.colors.length?e.colors[s]:e.color,h=function dt(e,n){return[[[0,"#fff"],[100,"hsl("+n.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}(0,c),u=o.map(function(d){return function ut(e,n){var r=re(e),o=r.radius,a=n.hsv,h=r.height-2*o;return{x:o+a.s/100*(r.width-2*o),y:o+(h-a.v/100*h)}}(e,d)});return _(Z,Object.assign({},e,{onInput:function l(d,f,g){if(0===g){var b=Te(e,d,f,u);null!==b?a.setActiveColor(b):(a.inputActive=!0,c.hsv=Pe(e,d,f),e.onInput(g,e.id))}else 1===g&&(a.inputActive=!0,c.hsv=Pe(e,d,f));e.onInput(g,e.id)}}),function(d,f,g){return _("div",Object.assign({},f,{className:"IroBox",style:Object.assign({},{width:k(r),height:k(t),position:"relative"},g)}),_("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:k(i)},ie(e),{background:oe("linear","to bottom",h[1])+","+oe("linear","to right",h[0])})}),o.filter(function(b){return b!==c}).map(function(b){return _(D,{isActive:!1,index:b.index,fill:b.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[b.index].x,y:u[b.index].y})}),_(D,{isActive:!0,index:c.index,fill:c.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[c.index].x,y:u[c.index].y}))})};const Oe=ae;var v=T(4650),se=T(4006);const kt=["picker"],xt=[{path:"",component:(()=>{class e{constructor(){this.pickerElementRef=null,this.picker=null,this.color=new Oe.Color("#ff0000")}ngAfterViewInit(){null!=this.pickerElementRef&&(this.picker=Oe.ColorPicker(this.pickerElementRef.nativeElement,{color:this.color}),this.picker.on("color:change",r=>this.color=r))}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["app-color-picker"]],viewQuery:function(r,t){if(1&r&&v.Gf(kt,5),2&r){let i;v.iGM(i=v.CRH())&&(t.pickerElementRef=i.first)}},decls:17,vars:10,consts:[["picker",""],[3,"ngModel","ngModelChange"]],template:function(r,t){1&r&&(v.TgZ(0,"div")(1,"h1"),v._uU(2,"ColorPicker"),v.qZA(),v._UZ(3,"div",null,0),v.TgZ(5,"div"),v._uU(6,"HEX: "),v.TgZ(7,"input",1),v.NdJ("ngModelChange",function(o){return t.color.hexString=o}),v.qZA()(),v.TgZ(8,"div"),v._uU(9),v.ALo(10,"json"),v.qZA(),v.TgZ(11,"div"),v._uU(12),v.ALo(13,"json"),v.qZA(),v.TgZ(14,"div"),v._uU(15),v.ALo(16,"json"),v.qZA()()),2&r&&(v.xp6(7),v.Q6J("ngModel",t.color.hexString),v.xp6(2),v.hij("RGBA: ",v.lcZ(10,4,t.color.rgba),""),v.xp6(3),v.hij("HSVA: ",v.lcZ(13,6,t.color.hsva),""),v.xp6(3),v.hij("HSLA: ",v.lcZ(16,8,t.color.hsla),""))},dependencies:[se.Fj,se.JJ,se.On,ce.Ts],encapsulation:2}),e})()}];let wt=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[he.Bz.forChild(xt),he.Bz]}),e})();var Et=T(8961);let St=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[ce.ez,wt,Et.m]}),e})()}}]);