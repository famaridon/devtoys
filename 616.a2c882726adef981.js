"use strict";(self.webpackChunkdevtoys_web=self.webpackChunkdevtoys_web||[]).push([[616],{7616:(L,M,a)=>{a.r(M),a.d(M,{UuidModule:()=>K});var s,T=a(6895),S=a(858),t=a(4650),b=new Uint8Array(16);function w(){if(!s&&!(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(b)}const J=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,F=function V(e){return"string"==typeof e&&J.test(e)};for(var f=[],p=0;p<256;++p)f.push((p+256).toString(16).substr(1));const I=function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(f[e[n+0]]+f[e[n+1]]+f[e[n+2]]+f[e[n+3]]+"-"+f[e[n+4]]+f[e[n+5]]+"-"+f[e[n+6]]+f[e[n+7]]+"-"+f[e[n+8]]+f[e[n+9]]+"-"+f[e[n+10]]+f[e[n+11]]+f[e[n+12]]+f[e[n+13]]+f[e[n+14]]+f[e[n+15]]).toLowerCase();if(!F(o))throw TypeError("Stringified UUID is invalid");return o};var Z,x,y=0,h=0;let O=(()=>{class e{constructor(){}v1(){return function z(e,n,o){var r=n&&o||0,u=n||new Array(16),m=(e=e||{}).node||Z,d=void 0!==e.clockseq?e.clockseq:x;if(null==m||null==d){var i=e.random||(e.rng||w)();null==m&&(m=Z=[1|i[0],i[1],i[2],i[3],i[4],i[5]]),null==d&&(d=x=16383&(i[6]<<8|i[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),l=void 0!==e.nsecs?e.nsecs:h+1,D=c-y+(l-h)/1e4;if(D<0&&void 0===e.clockseq&&(d=d+1&16383),(D<0||c>y)&&void 0===e.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=c,h=l,x=d;var v=(1e4*(268435455&(c+=122192928e5))+l)%4294967296;u[r++]=v>>>24&255,u[r++]=v>>>16&255,u[r++]=v>>>8&255,u[r++]=255&v;var g=c/4294967296*1e4&268435455;u[r++]=g>>>8&255,u[r++]=255&g,u[r++]=g>>>24&15|16,u[r++]=g>>>16&255,u[r++]=d>>>8|128,u[r++]=255&d;for(var U=0;U<6;++U)u[r+U]=m[U];return n||I(u)}()}v4(){return function k(e,n,o){var r=(e=e||{}).random||(e.rng||w)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){o=o||0;for(var u=0;u<16;++u)n[o+u]=r[u];return n}return I(r)}()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=a(4859),A=a(9549),X=a(4144),R=a(3546),C=a(4006);const Y=[{path:"",component:(()=>{class e{constructor(o){this.uuidService=o,this.v4="",this.v1=""}ngOnInit(){this.generate()}generate(){this.v4=this.uuidService.v4(),this.v1=this.uuidService.v1()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-uuid"]],decls:14,vars:2,consts:[["mat-button","","color","primary",3,"click"],[1,"list"],["appearance","outline",1,"example-full-width"],["matInput","","readonly","",3,"ngModel"],["matInput","","readonly","true",3,"ngModel"]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2,"UUID "),t.TgZ(3,"button",0),t.NdJ("click",function(){return r.generate()}),t._uU(4," Generate "),t.qZA()(),t.TgZ(5,"div",1)(6,"mat-form-field",2)(7,"mat-label"),t._uU(8,"UUID v4"),t.qZA(),t._UZ(9,"input",3),t.qZA(),t.TgZ(10,"mat-form-field",2)(11,"mat-label"),t._uU(12,"UUID v1"),t.qZA(),t._UZ(13,"input",4),t.qZA()()()),2&o&&(t.xp6(9),t.Q6J("ngModel",r.v4),t.xp6(4),t.Q6J("ngModel",r.v1))},dependencies:[Q.lW,A.KE,A.hX,X.Nt,R.a8,R.n5,C.Fj,C.JJ,C.On],styles:[".list[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[S.Bz.forChild(Y),S.Bz]}),e})();var H=a(4466);let K=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[T.ez,G,H.m]}),e})()}}]);