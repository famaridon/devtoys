"use strict";(self.webpackChunkdevtoys_web=self.webpackChunkdevtoys_web||[]).push([[346],{9346:(Rt,le,M)=>{M.r(le),M.d(le,{GraphicModule:()=>St});var b,U,ue,K,de,ce=M(6895),he=M(9132),A={},q=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function I(e,r){for(var n in r)e[n]=r[n];return e}function fe(e){var r=e.parentNode;r&&r.removeChild(e)}function _(e,r,n){var t,i,o,a,s=arguments;if(r=I({},r),arguments.length>3)for(n=[n],t=3;t<arguments.length;t++)n.push(s[t]);if(null!=n&&(r.children=n),null!=e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===r[i]&&(r[i]=e.defaultProps[i]);return a=r.key,null!=(o=r.ref)&&delete r.ref,null!=a&&delete r.key,J(e,r,a,o)}function J(e,r,n,t){var i={type:e,props:r,key:n,ref:t,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return b.vnode&&b.vnode(i),i}function $(e){return e.children}function j(e,r){this.props=e,this.context=r}function B(e,r){if(null==r)return e.__p?B(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;r<e.__k.length;r++)if(null!=(n=e.__k[r])&&null!=n.__e)return n.__e;return"function"==typeof e.type?B(e):null}function ve(e){var r,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,r=0;r<e.__k.length;r++)if(null!=(n=e.__k[r])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return ve(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&1===U.push(e)||K!==b.debounceRendering)&&(K=b.debounceRendering,(b.debounceRendering||ue)(We))}function We(){var e,r,n,t,i,o,a,s;for(U.sort(function(c,h){return h.__v.__b-c.__v.__b});e=U.pop();)e.__d&&(n=void 0,t=void 0,o=(i=(r=e).__v).__e,a=r.__P,s=r.u,r.u=!1,a&&(n=[],t=ee(a,i,I({},i),r.__n,void 0!==a.ownerSVGElement,null,n,s,o??B(i)),pe(n,i),t!=o&&ve(i)))}function ge(e,r,n,t,i,o,a,s,c){var h,u,l,d,v,g,m,x=n&&n.__k||q,y=x.length;if(s==A&&(s=null!=o?o[0]:y?B(n,0):null),h=0,r.__k=Q(r.__k,function(p){if(null!=p){if(p.__p=r,p.__b=r.__b+1,null===(l=x[h])||l&&p.key==l.key&&p.type===l.type)x[h]=void 0;else for(u=0;u<y;u++){if((l=x[u])&&p.key==l.key&&p.type===l.type){x[u]=void 0;break}l=null}if(d=ee(e,p,l=l||A,t,i,o,a,null,s,c),(u=p.ref)&&l.ref!=u&&(m||(m=[])).push(u,p.__c||d,p),null!=d){if(null==g&&(g=d),null!=p.l)d=p.l,p.l=null;else if(o==l||d!=s||null==d.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(d);else{for(v=s,u=0;(v=v.nextSibling)&&u<y;u+=2)if(v==d)break e;e.insertBefore(d,s)}"option"==r.type&&(e.value="")}s=d.nextSibling,"function"==typeof r.type&&(r.l=d)}}return h++,p}),r.__e=g,null!=o&&"function"!=typeof r.type)for(h=o.length;h--;)null!=o[h]&&fe(o[h]);for(h=y;h--;)null!=x[h]&&ke(x[h],x[h]);if(m)for(h=0;h<m.length;h++)ye(m[h],m[++h],m[++h])}function Q(e,r,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)r&&n.push(r(null));else if(Array.isArray(e))for(var t=0;t<e.length;t++)Q(e[t],r,n);else n.push(r?r(function Ge(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return J(null,e,null,null);if(null!=e.__e||null!=e.__c){var r=J(e.type,e.props,e.key,null);return r.__e=e.__e,r}return e}(e)):e);return n}function _e(e,r,n){"-"===r[0]?e.setProperty(r,n):e[r]="number"==typeof n&&!1===je.test(r)?n+"px":n??""}function me(e,r,n,t,i){var o,a,s,c,h;if("key"!==(r=i?"className"===r?"class":r:"class"===r?"className":r)&&"children"!==r)if("style"===r)if(o=e.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(a in t)n&&a in n||_e(o,a,"");if(n)for(s in n)t&&n[s]===t[s]||_e(o,s,n[s])}else"o"===r[0]&&"n"===r[1]?(c=r!==(r=r.replace(/Capture$/,"")),h=r.toLowerCase(),r=(h in e?h:r).slice(2),n?(t||e.addEventListener(r,be,c),(e.t||(e.t={}))[r]=n):e.removeEventListener(r,be,c)):"list"!==r&&"tagName"!==r&&"form"!==r&&!i&&r in e?e[r]=n??"":"function"!=typeof n&&"dangerouslySetInnerHTML"!==r&&(r!==(r=r.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase(),n):null==n||!1===n?e.removeAttribute(r):e.setAttribute(r,n))}function be(e){return this.t[e.type](b.event?b.event(e):e)}function ee(e,r,n,t,i,o,a,s,c,h){var u,l,d,v,g,m,x,y,p,T,R=r.type;if(void 0!==r.constructor)return null;(u=b.__b)&&u(r);try{e:if("function"==typeof R){if(y=r.props,p=(u=R.contextType)&&t[u.__c],T=u?p?p.props.value:u.__p:t,n.__c?x=(l=r.__c=n.__c).__p=l.__E:("prototype"in R&&R.prototype.render?r.__c=l=new R(y,T):(r.__c=l=new j(y,T),l.constructor=R,l.render=$e),p&&p.sub(l),l.props=y,l.state||(l.state={}),l.context=T,l.__n=t,d=l.__d=!0,l.__h=[]),null==l.__s&&(l.__s=l.state),null!=R.getDerivedStateFromProps&&I(l.__s==l.state?l.__s=I({},l.__s):l.__s,R.getDerivedStateFromProps(y,l.__s)),d)null==R.getDerivedStateFromProps&&null!=l.componentWillMount&&l.componentWillMount(),null!=l.componentDidMount&&a.push(l);else{if(null==R.getDerivedStateFromProps&&null==s&&null!=l.componentWillReceiveProps&&l.componentWillReceiveProps(y,T),!s&&null!=l.shouldComponentUpdate&&!1===l.shouldComponentUpdate(y,l.__s,T)){for(l.props=y,l.state=l.__s,l.__d=!1,l.__v=r,r.__e=null!=c?c!==n.__e?c:n.__e:null,r.__k=n.__k,u=0;u<r.__k.length;u++)r.__k[u]&&(r.__k[u].__p=r);break e}null!=l.componentWillUpdate&&l.componentWillUpdate(y,l.__s,T)}for(v=l.props,g=l.state,l.context=T,l.props=y,l.state=l.__s,(u=b.__r)&&u(r),l.__d=!1,l.__v=r,l.__P=e,u=l.render(l.props,l.state,l.context),r.__k=Q(null!=u&&u.type==$&&null==u.key?u.props.children:u),null!=l.getChildContext&&(t=I(I({},t),l.getChildContext())),d||null==l.getSnapshotBeforeUpdate||(m=l.getSnapshotBeforeUpdate(v,g)),ge(e,r,n,t,i,o,a,c,h),l.base=r.__e;u=l.__h.pop();)l.__s&&(l.state=l.__s),u.call(l);d||null==v||null==l.componentDidUpdate||l.componentDidUpdate(v,g,m),x&&(l.__E=l.__p=null)}else r.__e=function Ue(e,r,n,t,i,o,a,s){var c,h,u,l,d=n.props,v=r.props;if(i="svg"===r.type||i,null==e&&null!=o)for(c=0;c<o.length;c++)if(null!=(h=o[c])&&(null===r.type?3===h.nodeType:h.localName===r.type)){e=h,o[c]=null;break}if(null==e){if(null===r.type)return document.createTextNode(v);e=i?document.createElementNS("http://www.w3.org/2000/svg",r.type):document.createElement(r.type),o=null}return null===r.type?d!==v&&(null!=o&&(o[o.indexOf(e)]=null),e.data=v):r!==n&&(null!=o&&(o=q.slice.call(e.childNodes)),u=(d=n.props||A).dangerouslySetInnerHTML,l=v.dangerouslySetInnerHTML,s||(l||u)&&(l&&u&&l.__html==u.__html||(e.innerHTML=l&&l.__html||"")),function Le(e,r,n,t,i){var o;for(o in n)o in r||me(e,o,null,n[o],t);for(o in r)i&&"function"!=typeof r[o]||"value"===o||"checked"===o||n[o]===r[o]||me(e,o,r[o],n[o],t)}(e,v,d,i,s),r.__k=r.props.children,l||ge(e,r,n,t,"foreignObject"!==r.type&&i,o,a,A,s),s||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=v.value??""),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))),e}(n.__e,r,n,t,i,o,a,h);(u=b.diffed)&&u(r)}catch(Ct){b.__e(Ct,r,n)}return r.__e}function pe(e,r){for(var n;n=e.pop();)try{n.componentDidMount()}catch(t){b.__e(t,n.__v)}b.__c&&b.__c(r)}function ye(e,r,n){try{"function"==typeof e?e(r):e.current=r}catch(t){b.__e(t,n)}}function ke(e,r,n){var t,i,o;if(b.unmount&&b.unmount(e),(t=e.ref)&&ye(t,null,r),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.l=null,null!=(t=e.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(a){b.__e(a,r)}t.base=t.__P=null}if(t=e.__k)for(o=0;o<t.length;o++)t[o]&&ke(t[o],r,n);null!=i&&fe(i)}function $e(e,r,n){return this.constructor(e,n)}function xe(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function w(){return w=Object.assign||function(e){for(var r=arguments,n=1;n<arguments.length;n++){var t=r[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},w.apply(this,arguments)}b={},j.prototype.setState=function(e,r){var n=this.__s!==this.state&&this.__s||(this.__s=I({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&I(n,e),null!=e&&this.__v&&(this.u=!1,r&&this.__h.push(r),Y(this))},j.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,Y(this))},j.prototype.render=$,U=[],ue="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=b.debounceRendering,b.__e=function(e,r,n){for(var t;r=r.__p;)if((t=r.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(e));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(e)}return Y(t.__E=t)}catch(i){e=i}throw e},de=A;var P="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",we="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",Ee="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",Ze=new RegExp("rgb"+we),Ve=new RegExp("rgba"+Ee),Ke=new RegExp("hsl"+we),qe=new RegExp("hsla"+Ee),F="^(?:#?|0x?)",H="([0-9a-fA-F]{1})",N="([0-9a-fA-F]{2})",Je=new RegExp(F+H+H+H+"$"),Ye=new RegExp(F+H+H+H+H+"$"),Qe=new RegExp(F+N+N+N+"$"),et=new RegExp(F+N+N+N+N+"$"),z=Math.log,G=Math.round,L=Math.floor;function C(e,r,n){return Math.min(Math.max(e,r),n)}function E(e,r){var n=e.indexOf("%")>-1,t=parseFloat(e);return n?r/100*t:t}function S(e){return parseInt(e,16)}function O(e){return e.toString(16).padStart(2,"0")}var W=function(){function e(n,t){this.$={h:0,s:0,v:0,a:1},n&&this.set(n),this.onChange=t,this.initialValue=w({},this.$)}var r=e.prototype;return r.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof e?this.hsva=t.hsva:"r"in t&&"g"in t&&"b"in t?this.rgb=t:"h"in t&&"s"in t&&"v"in t?this.hsv=t:"h"in t&&"s"in t&&"l"in t?this.hsl=t:"kelvin"in t&&(this.kelvin=t.kelvin)}},r.setChannel=function(t,i,o){var a;this[t]=w({},this[t],((a={})[i]=o,a))},r.reset=function(){this.hsva=this.initialValue},r.clone=function(){return new e(this)},r.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(t){var i=t.h/60,o=t.s/100,a=t.v/100,s=L(i),c=i-s,h=a*(1-o),u=a*(1-c*o),l=a*(1-(1-c)*o),d=s%6,g=[l,a,a,u,h,h][d],m=[h,h,l,a,a,u][d];return{r:C(255*[a,u,h,h,l,a][d],0,255),g:C(255*g,0,255),b:C(255*m,0,255)}},e.rgbToHsv=function(t){var i=t.r/255,o=t.g/255,a=t.b/255,s=Math.max(i,o,a),c=Math.min(i,o,a),h=s-c,u=0,l=s,d=0===s?0:h/s;switch(s){case c:u=0;break;case i:u=(o-a)/h+(o<a?6:0);break;case o:u=(a-i)/h+2;break;case a:u=(i-o)/h+4}return{h:60*u%360,s:C(100*d,0,100),v:C(100*l,0,100)}},e.hsvToHsl=function(t){var i=t.s/100,o=t.v/100,a=(2-i)*o,s=a<=1?a:2-a;return{h:t.h,s:C(100*(s<1e-9?0:i*o/s),0,100),l:C(50*a,0,100)}},e.hslToHsv=function(t){var i=2*t.l,o=t.s*(i<=100?i:200-i)/100;return{h:t.h,s:C(100*(i+o<1e-9?0:2*o/(i+o)),0,100),v:C((i+o)/2,0,100)}},e.kelvinToRgb=function(t){var o,a,s,i=t/100;return i<66?(o=255,a=-155.25485562709179-.44596950469579133*(a=i-2)+104.49216199393888*z(a),s=i<20?0:.8274096064007395*(s=i-10)-254.76935184120902+115.67994401066147*z(s)):(o=351.97690566805693+.114206453784165*(o=i-55)-40.25366309332127*z(o),a=325.4494125711974+.07943456536662342*(a=i-50)-28.0852963507957*z(a),s=255),{r:C(L(o),0,255),g:C(L(a),0,255),b:C(L(s),0,255)}},e.rgbToKelvin=function(t){for(var h,i=t.r,o=t.b,s=2e3,c=4e4;c-s>.4;){var u=e.kelvinToRgb(h=.5*(c+s));u.b/u.r>=o/i?c=h:s=h}return h},function Fe(e,r,n){r&&xe(e.prototype,r),n&&xe(e,n)}(e,[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var i=this.$;if(t=w({},i,t),this.onChange){var o={h:!1,v:!1,s:!1,a:!1};for(var a in i)o[a]=t[a]!=i[a];this.$=t,(o.h||o.s||o.v||o.a)&&this.onChange(this,o)}else this.$=t}},{key:"hsva",get:function(){return w({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=w({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:"red",get:function(){return this.rgb.r},set:function(t){this.rgb=w({},this.rgb,{r:t})}},{key:"green",get:function(){return this.rgb.g},set:function(t){this.rgb=w({},this.rgb,{g:t})}},{key:"blue",get:function(){return this.rgb.b},set:function(t){this.rgb=w({},this.rgb,{b:t})}},{key:"rgb",get:function(){var t=e.hsvToRgb(this.$),o=t.g,a=t.b;return{r:G(t.r),g:G(o),b:G(a)}},set:function(t){this.hsv=w({},e.rgbToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"rgba",get:function(){return w({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var t=e.hsvToHsl(this.$),o=t.s,a=t.l;return{h:G(t.h),s:G(o),l:G(a)}},set:function(t){this.hsv=w({},e.hslToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"hsla",get:function(){return w({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var i,o,a,s,c=1;if((i=Ze.exec(t))?(o=E(i[1],255),a=E(i[2],255),s=E(i[3],255)):(i=Ve.exec(t))&&(o=E(i[1],255),a=E(i[2],255),s=E(i[3],255),c=E(i[4],1)),!i)throw new Error("Invalid rgb string");this.rgb={r:o,g:a,b:s,a:c}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+O(t.r)+O(t.g)+O(t.b)},set:function(t){var i,o,a,s,c=255;if((i=Je.exec(t))?(o=17*S(i[1]),a=17*S(i[2]),s=17*S(i[3])):(i=Ye.exec(t))?(o=17*S(i[1]),a=17*S(i[2]),s=17*S(i[3]),c=17*S(i[4])):(i=Qe.exec(t))?(o=S(i[1]),a=S(i[2]),s=S(i[3])):(i=et.exec(t))&&(o=S(i[1]),a=S(i[2]),s=S(i[3]),c=S(i[4])),!i)throw new Error("Invalid hex string");this.rgb={r:o,g:a,b:s,a:c/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+O(t.r)+O(t.g)+O(t.b)+O(L(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var i,o,a,s,c=1;if((i=Ke.exec(t))?(o=E(i[1],360),a=E(i[2],100),s=E(i[3],100)):(i=qe.exec(t))&&(o=E(i[1],360),a=E(i[2],100),s=E(i[3],100),c=E(i[4],1)),!i)throw new Error("Invalid hsl string");this.hsl={h:o,s:a,l:s,a:c}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}]),e}();function te(e){var r,n=e.width,t=e.sliderSize,o=e.handleRadius,a=e.padding,c="horizontal"===e.layoutDirection;return t=null!=(r=t)?r:2*a+2*o,"circle"===e.sliderShape?{handleStart:e.padding+e.handleRadius,handleRange:n-2*a-2*o,width:n,height:n,cx:n/2,cy:n/2,radius:n/2-e.borderWidth/2}:{handleStart:t/2,handleRange:n-t,radius:t/2,x:0,y:0,width:c?t:n,height:c?n:t}}var re,Se=2*Math.PI,Ce=function(r,n){return Math.sqrt(r*r+n*n)};function Re(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function X(e){var r=e.width/2;return{width:e.width,radius:r-e.borderWidth,cx:r,cy:r}}function Ae(e,r,n){var t=e.wheelAngle,i=e.wheelDirection;return n&&"clockwise"===i?r=t+r:"clockwise"===i?r=360-t+r:n&&"anticlockwise"===i?r=t+180-r:"anticlockwise"===i&&(r=t-r),function(r,n){return(r%360+360)%360}(r)}function Ie(e,r,n){var t=X(e),i=t.cx,o=t.cy,a=Re(e);r=i-r,n=o-n;var s=Ae(e,Math.atan2(-n,-r)*(360/Se)),c=Math.min(Ce(r,n),a);return{h:Math.round(s),s:Math.round(100/a*c)}}function ne(e){var r=e.width;return{width:r,height:e.boxHeight??r,radius:e.padding+e.handleRadius}}function Te(e,r,n){var t=ne(e),a=t.radius,l=(n-a)/(t.height-2*a)*100;return{s:Math.max(0,Math.min((r-a)/(t.width-2*a)*100,100)),v:Math.max(0,Math.min(100-l,100))}}function ft(e){re||(re=document.getElementsByTagName("base"));var r=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(r),t=/iPhone|iPod|iPad/i.test(r),i=window.location;return(n||t)&&re.length>0?i.protocol+"//"+i.host+i.pathname+i.search+e:e}function Me(e,r,n,t){for(var i=0;i<t.length;i++){var o=t[i].x-r,a=t[i].y-n;if(Math.sqrt(o*o+a*a)<e.handleRadius)return i}return null}function ie(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function oe(e,r,n){return e+"-gradient("+r+", "+n.map(function(t){return t[1]+" "+t[0]+"%"}).join(",")+")"}function k(e){return"string"==typeof e?e:e+"px"}var Pe=["mousemove","touchmove","mouseup","touchend"],Z=function(e){function r(n){e.call(this,n),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.render=function(t){var i=this.handleEvent.bind(this),o={onMouseDown:i,ontouchstart:i},a="horizontal"===t.layoutDirection,c={overflow:"visible",display:a?"inline-block":"block"};return t.index>0&&(c[a?"marginLeft":"marginTop"]=null===t.margin?t.sliderMargin:t.margin),_($,null,t.children(this.uid,o,c))},r.prototype.handleEvent=function(t){var i=this,o=this.props.onInput,a=this.base.getBoundingClientRect();t.preventDefault();var s=t.touches?t.changedTouches[0]:t,c=s.clientX-a.left,h=s.clientY-a.top;switch(t.type){case"mousedown":case"touchstart":!1!==o(c,h,0)&&Pe.forEach(function(l){document.addEventListener(l,i,{passive:!1})});break;case"mousemove":case"touchmove":o(c,h,1);break;case"mouseup":case"touchend":o(c,h,2),Pe.forEach(function(l){document.removeEventListener(l,i,{passive:!1})})}},r}(j);function D(e){var r=e.r,n=e.url,t=r,i=r;return _("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+k(e.x)+", "+k(e.y)+")",willChange:"transform",top:k(-r),left:k(-r),width:k(2*r),height:k(2*r),position:"absolute",overflow:"visible"}},n&&_("use",Object.assign({xlinkHref:ft(n)},e.props)),!n&&_("circle",{cx:t,cy:i,r,fill:"none","stroke-width":2,stroke:"#000"}),!n&&_("circle",{cx:t,cy:i,r:r-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}function V(e){var r=e.activeIndex,n=void 0!==r&&r<e.colors.length?e.colors[r]:e.color,t=te(e),i=t.width,o=t.height,a=t.radius,s=function at(e,r){var n=te(e),t=n.width,i=n.height,o=n.handleRange,a=n.handleStart,s="horizontal"===e.layoutDirection,c=function it(e,r){var n=r.hsva,t=r.rgb;switch(e.sliderType){case"red":return t.r/2.55;case"green":return t.g/2.55;case"blue":return t.b/2.55;case"alpha":return 100*n.a;case"kelvin":var i=e.minTemperature;return Math.max(0,Math.min((r.kelvin-i)/(e.maxTemperature-i)*100,100));case"hue":return n.h/=3.6;case"saturation":return n.s;default:return n.v}}(e,r),h=s?t/2:i/2,u=a+c/100*o;return s&&(u=-1*u+o+2*a),{x:s?h:u,y:s?u:h}}(e,n),c=function st(e,r){var n=r.hsv,t=r.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+t.g+","+t.b+")"],[100,"rgb(255,"+t.g+","+t.b+")"]];case"green":return[[0,"rgb("+t.r+",0,"+t.b+")"],[100,"rgb("+t.r+",255,"+t.b+")"]];case"blue":return[[0,"rgb("+t.r+","+t.g+",0)"],[100,"rgb("+t.r+","+t.g+",255)"]];case"alpha":return[[0,"rgba("+t.r+","+t.g+","+t.b+",0)"],[100,"rgb("+t.r+","+t.g+","+t.b+")"]];case"kelvin":for(var i=[],o=e.minTemperature,a=e.maxTemperature,c=a-o,h=o,u=0;h<a;h+=c/8,u+=1){var l=W.kelvinToRgb(h);i.push([12.5*u,"rgb("+l.r+","+l.g+","+l.b+")"])}return i;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var m=W.hsvToHsl({h:n.h,s:0,v:n.v}),x=W.hsvToHsl({h:n.h,s:100,v:n.v});return[[0,"hsl("+m.h+","+m.s+"%,"+m.l+"%)"],[100,"hsl("+x.h+","+x.s+"%,"+x.l+"%)"]];default:var y=W.hsvToHsl({h:n.h,s:n.s,v:100});return[[0,"#000"],[100,"hsl("+y.h+","+y.s+"%,"+y.l+"%)"]]}}(e,n);return _(Z,Object.assign({},e,{onInput:function h(u,l,d){var v=function ot(e,r,n){var a,t=te(e),i=t.handleRange,o=t.handleStart;a="horizontal"===e.layoutDirection?-1*n+i+o:r-o,a=Math.max(Math.min(a,i),0);var s=Math.round(100/i*a);switch(e.sliderType){case"kelvin":var c=e.minTemperature;return c+s/100*(e.maxTemperature-c);case"alpha":return s/100;case"hue":return 3.6*s;case"red":case"blue":case"green":return 2.55*s;default:return s}}(e,u,l);e.parent.inputActive=!0,n[e.sliderType]=v,e.onInput(d,e.id)}}),function(u,l,d){return _("div",Object.assign({},l,{className:"IroSlider",style:Object.assign({},{position:"relative",width:k(i),height:k(o),borderRadius:k(a),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},d)}),_("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:k(a),background:oe("linear","horizontal"===e.layoutDirection?"to top":"to right",c)},ie(e))}),_(D,{isActive:!0,index:n.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:s.x,y:s.y}))})}function He(e){var n=X(e).width,t=e.colors,o=e.parent,a=e.color,s=a.hsv,c=t.map(function(l){return function ht(e,r){var n=r.hsv,t=X(e),i=t.cx,o=t.cy,a=Re(e),s=(180+Ae(e,n.h,!0))*(Se/360),c=n.s/100*a,h="clockwise"===e.wheelDirection?-1:1;return{x:i+c*Math.cos(s)*h,y:o+c*Math.sin(s)*h}}(e,l)}),h={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return _(Z,Object.assign({},e,{onInput:function u(l,d,v){if(0===v){if(!function ct(e,r,n){var t=X(e),a=e.width/2;return Ce(t.cx-r,t.cy-n)<a}(e,l,d))return!1;var g=Me(e,l,d,c);null!==g?o.setActiveColor(g):(o.inputActive=!0,a.hsv=Ie(e,l,d),e.onInput(v,e.id))}else 1===v&&(o.inputActive=!0,a.hsv=Ie(e,l,d));e.onInput(v,e.id)}}),function(l,d,v){return _("div",Object.assign({},d,{className:"IroWheel",style:Object.assign({},{width:k(n),height:k(n),position:"relative"},v)}),_("div",{className:"IroWheelHue",style:Object.assign({},h,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:"clockwise"===e.wheelDirection?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"})}),_("div",{className:"IroWheelSaturation",style:Object.assign({},h,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&_("div",{className:"IroWheelLightness",style:Object.assign({},h,{background:"#000",opacity:1-s.v/100})}),_("div",{className:"IroWheelBorder",style:Object.assign({},h,ie(e))}),t.filter(function(g){return g!==a}).map(function(g){return _(D,{isActive:!1,index:g.index,fill:g.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[g.index].x,y:c[g.index].y})}),_(D,{isActive:!0,index:a.index,fill:a.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[a.index].x,y:c[a.index].y}))})}D.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},V.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var Ne=function(e){function r(n){var t=this;e.call(this,n),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=n.id,(n.colors.length>0?n.colors:[n.color]).forEach(function(o){return t.addColor(o)}),this.setActiveColor(0),this.state=Object.assign({},n,{color:this.color,colors:this.colors,layout:n.layout})}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.addColor=function(t,i){void 0===i&&(i=this.colors.length);var o=new W(t,this.onColorChange.bind(this));this.colors.splice(i,0,o),this.colors.forEach(function(a,s){return a.index=s}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",o)},r.prototype.removeColor=function(t){var i=this.colors.splice(t,1)[0];i.unbind(),this.colors.forEach(function(o,a){return o.index=a}),this.state&&this.setState({colors:this.colors}),i.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",i)},r.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},r.prototype.setColors=function(t,i){var o=this;void 0===i&&(i=0),this.colors.forEach(function(a){return a.unbind()}),this.colors=[],t.forEach(function(a){return o.addColor(a)}),this.setActiveColor(i),this.emit("color:setAll",this.colors)},r.prototype.on=function(t,i){var o=this,a=this.events;(Array.isArray(t)?t:[t]).forEach(function(s){(a[s]||(a[s]=[])).push(i),o.deferredEvents[s]&&(o.deferredEvents[s].forEach(function(c){i.apply(null,c)}),o.deferredEvents[s]=[])})},r.prototype.off=function(t,i){var o=this;(Array.isArray(t)?t:[t]).forEach(function(a){var s=o.events[a];s&&s.splice(s.indexOf(i),1)})},r.prototype.emit=function(t){for(var i=this,o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];var s=this.activeEvents,c=!!s.hasOwnProperty(t)&&s[t];if(!c){s[t]=!0;var h=this.events[t]||[];h.forEach(function(u){return u.apply(i,o)}),s[t]=!1}},r.prototype.deferredEmit=function(t){for(var i,o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];var s=this.deferredEvents;(i=this).emit.apply(i,[t].concat(o)),(s[t]||(s[t]=[])).push(o)},r.prototype.setOptions=function(t){this.setState(t)},r.prototype.resize=function(t){this.setOptions({width:t})},r.prototype.reset=function(){this.colors.forEach(function(t){return t.reset()}),this.setState({colors:this.colors})},r.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},r.prototype.onColorChange=function(t,i){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,i)),this.emit("color:change",t,i)},r.prototype.emitInputEvent=function(t,i){0===t?this.emit("input:start",this.color,i):1===t?this.emit("input:move",this.color,i):2===t&&this.emit("input:end",this.color,i)},r.prototype.render=function(t,i){var o=this,a=i.layout;return Array.isArray(a)||(a=[{component:He},{component:V}],i.transparency&&a.push({component:V,options:{sliderType:"alpha"}})),_("div",{class:"IroColorPicker",id:i.id,style:{display:i.display}},a.map(function(s,c){return _(s.component,Object.assign({},i,s.options,{ref:void 0,onInput:o.emitInputEvent.bind(o),parent:o,index:c}))}))},r}(j);Ne.defaultProps=Object.assign({},{width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},{colors:[],display:"block",id:null,layout:"default",margin:null});var ae,e,n,pt=function bt(e){var r=function(n,t){var i,o=document.createElement("div");function a(){var s=n instanceof Element?n:document.querySelector(n);s.appendChild(i.base),i.onMount(s)}return function Be(e,r,n){var t,i,o;b.__p&&b.__p(e,r),i=(t=n===de)?null:n&&n.__k||r.__k,e=_($,null,[e]),o=[],ee(r,t?r.__k=e:(n||r).__k=e,i||A,A,void 0!==r.ownerSVGElement,n&&!t?[n]:i?null:q.slice.call(r.childNodes),o,!1,n||A,t),pe(o,e)}(_(e,Object.assign({},{ref:function(s){return i=s}},t)),o),"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a),i};return r.prototype=e.prototype,Object.assign(r,e),r.__component=e,r}(Ne);(e=ae||(ae={})).version="5.5.2",e.Color=W,e.ColorPicker=pt,(n=e.ui||(e.ui={})).h=_,n.ComponentBase=Z,n.Handle=D,n.Slider=V,n.Wheel=He,n.Box=function gt(e){var r=ne(e),n=r.width,t=r.height,i=r.radius,o=e.colors,a=e.parent,s=e.activeIndex,c=void 0!==s&&s<e.colors.length?e.colors[s]:e.color,h=function dt(e,r){return[[[0,"#fff"],[100,"hsl("+r.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}(0,c),u=o.map(function(d){return function ut(e,r){var n=ne(e),o=n.radius,a=r.hsv,h=n.height-2*o;return{x:o+a.s/100*(n.width-2*o),y:o+(h-a.v/100*h)}}(e,d)});return _(Z,Object.assign({},e,{onInput:function l(d,v,g){if(0===g){var m=Me(e,d,v,u);null!==m?a.setActiveColor(m):(a.inputActive=!0,c.hsv=Te(e,d,v),e.onInput(g,e.id))}else 1===g&&(a.inputActive=!0,c.hsv=Te(e,d,v));e.onInput(g,e.id)}}),function(d,v,g){return _("div",Object.assign({},v,{className:"IroBox",style:Object.assign({},{width:k(n),height:k(t),position:"relative"},g)}),_("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:k(i)},ie(e),{background:oe("linear","to bottom",h[1])+","+oe("linear","to right",h[0])})}),o.filter(function(m){return m!==c}).map(function(m){return _(D,{isActive:!1,index:m.index,fill:m.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[m.index].x,y:u[m.index].y})}),_(D,{isActive:!0,index:c.index,fill:c.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[c.index].x,y:u[c.index].y}))})};const Oe=ae;var f=M(4650),se=M(4006);const kt=["picker"],xt=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-graphic"]],decls:2,vars:0,template:function(n,t){1&n&&(f.TgZ(0,"p"),f._uU(1,"graphic works!"),f.qZA())},encapsulation:2}),e})()},{path:"color-picker",component:(()=>{class e{constructor(){this.pickerElementRef=null,this.picker=null,this.color=new Oe.Color("#ff0000")}ngAfterViewInit(){null!=this.pickerElementRef&&(this.picker=Oe.ColorPicker(this.pickerElementRef.nativeElement,{color:this.color}),this.picker.on("color:change",n=>this.color=n))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-color-picker"]],viewQuery:function(n,t){if(1&n&&f.Gf(kt,5),2&n){let i;f.iGM(i=f.CRH())&&(t.pickerElementRef=i.first)}},decls:17,vars:10,consts:[["picker",""],[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(f.TgZ(0,"div")(1,"h1"),f._uU(2,"ColorPicker"),f.qZA(),f._UZ(3,"div",null,0),f.TgZ(5,"div"),f._uU(6,"HEX: "),f.TgZ(7,"input",1),f.NdJ("ngModelChange",function(o){return t.color.hexString=o}),f.qZA()(),f.TgZ(8,"div"),f._uU(9),f.ALo(10,"json"),f.qZA(),f.TgZ(11,"div"),f._uU(12),f.ALo(13,"json"),f.qZA(),f.TgZ(14,"div"),f._uU(15),f.ALo(16,"json"),f.qZA()()),2&n&&(f.xp6(7),f.Q6J("ngModel",t.color.hexString),f.xp6(2),f.hij("RGBA: ",f.lcZ(10,4,t.color.rgba),""),f.xp6(3),f.hij("HSVA: ",f.lcZ(13,6,t.color.hsva),""),f.xp6(3),f.hij("HSLA: ",f.lcZ(16,8,t.color.hsla),""))},dependencies:[se.Fj,se.JJ,se.On,ce.Ts],encapsulation:2}),e})()}];let wt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[he.Bz.forChild(xt),he.Bz]}),e})();var Et=M(8961);let St=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[ce.ez,wt,Et.m]}),e})()}}]);