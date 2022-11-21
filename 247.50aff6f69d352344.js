"use strict";(self.webpackChunkdevtoys_web=self.webpackChunkdevtoys_web||[]).push([[247],{7247:(Vt,L,a)=>{a.r(L),a.d(L,{EncodersDecodersModule:()=>D});var x=a(6895),z=a(9132),l=a(590),t=a(4650);const _t="function"==typeof atob,Ct="function"==typeof btoa,h="function"==typeof Buffer,G="function"==typeof TextDecoder?new TextDecoder:void 0,H="function"==typeof TextEncoder?new TextEncoder:void 0,A=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),Z=(n=>{let e={};return n.forEach((o,i)=>e[o]=i),e})(A),yt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),K="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(n,e=(o=>o))=>new Uint8Array(Array.prototype.slice.call(n,0).map(e)),X=n=>n.replace(/[^A-Za-z0-9\+\/]/g,""),P=Ct?n=>btoa(n):h?n=>Buffer.from(n,"binary").toString("base64"):n=>{let e,o,i,s,r="";const u=n.length%3;for(let N=0;N<n.length;){if((o=n.charCodeAt(N++))>255||(i=n.charCodeAt(N++))>255||(s=n.charCodeAt(N++))>255)throw new TypeError("invalid character found");e=o<<16|i<<8|s,r+=A[e>>18&63]+A[e>>12&63]+A[e>>6&63]+A[63&e]}return u?r.slice(0,u-3)+"===".substring(u):r},q=h?n=>Buffer.from(n).toString("base64"):n=>{let o=[];for(let i=0,s=n.length;i<s;i+=4096)o.push(c.apply(null,n.subarray(i,i+4096)));return P(o.join(""))},xt=n=>{if(n.length<2)return(e=n.charCodeAt(0))<128?n:e<2048?c(192|e>>>6)+c(128|63&e):c(224|e>>>12&15)+c(128|e>>>6&63)+c(128|63&e);var e=65536+1024*(n.charCodeAt(0)-55296)+(n.charCodeAt(1)-56320);return c(240|e>>>18&7)+c(128|e>>>12&63)+c(128|e>>>6&63)+c(128|63&e)},Zt=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,k=h?n=>Buffer.from(n,"utf8").toString("base64"):H?n=>q(H.encode(n)):n=>P((n=>n.replace(Zt,xt))(n)),vt=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Tt=n=>{switch(n.length){case 4:var o=((7&n.charCodeAt(0))<<18|(63&n.charCodeAt(1))<<12|(63&n.charCodeAt(2))<<6|63&n.charCodeAt(3))-65536;return c(55296+(o>>>10))+c(56320+(1023&o));case 3:return c((15&n.charCodeAt(0))<<12|(63&n.charCodeAt(1))<<6|63&n.charCodeAt(2));default:return c((31&n.charCodeAt(0))<<6|63&n.charCodeAt(1))}},Q=_t?n=>atob(X(n)):h?n=>Buffer.from(n,"base64").toString("binary"):n=>{if(n=n.replace(/\s+/g,""),!yt.test(n))throw new TypeError("malformed base64.");n+="==".slice(2-(3&n.length));let e,i,s,o="";for(let r=0;r<n.length;)e=Z[n.charAt(r++)]<<18|Z[n.charAt(r++)]<<12|(i=Z[n.charAt(r++)])<<6|(s=Z[n.charAt(r++)]),o+=64===i?c(e>>16&255):64===s?c(e>>16&255,e>>8&255):c(e>>16&255,e>>8&255,255&e);return o},ot=h?n=>K(Buffer.from(n,"base64")):n=>K(Q(n),e=>e.charCodeAt(0)),bt=h?n=>Buffer.from(n,"base64").toString("utf8"):G?n=>G.decode(ot(n)):n=>(n=>n.replace(vt,Tt))(Q(n)),ut_encode=(n,e=!1)=>e?(n=>n.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"))(k(n)):k(n),ut_decode=n=>bt((n=>X(n.replace(/[-_]/g,e=>"-"==e?"+":"/")))(n));var f=a(2076);class p{constructor(){}encode(e,o){return(0,f.D)(new Promise((i,s)=>{try{if(e instanceof File){const r=new FileReader;r.addEventListener("load",()=>{i(r.result)},!1),r.readAsDataURL(e)}else i(ut_encode(e,o))}catch(r){s(r)}}))}decode(e){return(0,f.D)(new Promise((o,i)=>{try{o(ut_decode(e))}catch(s){i(s)}}))}static#t=this.\u0275fac=function(o){return new(o||p)};static#e=this.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac})}var T=a(357),d=a(4006),b=a(6338),E=a(455),U=a(76),y=a(235),S=a(9804);const Ut={encode:!0,input:""};class I{constructor(e,o){this.base64Service=e,this.localStorageService=o,this._encode=!0,this._input="",this.output="",this.localStorageService.getItem("base64",Ut).subscribe(i=>{this._encode=i.encode,this._input=i.input})}get encode(){return this._encode}set encode(e){this._encode=e,this.somethingChanged()}set input(e){this._input=e,this.somethingChanged()}get input(){return this._input}somethingChanged(){this.localStorageService.setItem("base64",{encode:this._encode,input:this._input}),this.encode?this.base64Service.encode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e):this.base64Service.decode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e)}static#t=this.\u0275fac=function(o){return new(o||I)(t.Y36(p),t.Y36(T.n))};static#e=this.\u0275cmp=t.Xpm({type:I,selectors:[["app-base64"]],decls:14,vars:4,consts:[[1,"encoder-decoder"],["matLine",""],[3,"ngModel","ngModelChange"],[3,"input","inputChange"],[3,"output"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Base64 Text Encoder / Decoder"),t.qZA(),t.TgZ(3,"app-configuration")(4,"mat-list-item")(5,"h4",1),t._uU(6,"Convertion"),t.qZA(),t.TgZ(7,"p",1)(8,"span"),t._uU(9,"Select witch convertion mode you want to use"),t.qZA()(),t.TgZ(10,"mat-slide-toggle",2),t.NdJ("ngModelChange",function(r){return i.encode=r}),t._uU(11),t.qZA()()(),t.TgZ(12,"app-input",3),t.NdJ("inputChange",function(r){return i.input=r}),t.qZA(),t._UZ(13,"app-output",4),t.qZA()),2&o&&(t.xp6(10),t.Q6J("ngModel",i.encode),t.xp6(1),t.Oqu(i.encode?"Encode":"Decode"),t.xp6(1),t.Q6J("input",i.input),t.xp6(1),t.Q6J("output",i.output))},dependencies:[d.JJ,d.On,b.Tg,E.Rr,U.B,y.a,S.Z],encapsulation:2})}const{replace:dt}="",St=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,It=/[&<>'"]/g,Bt={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Jt=n=>Bt[n],wt={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},Rt=n=>wt[n];class m{constructor(){}encode(e){return(0,f.D)(new Promise((o,i)=>{try{o(dt.call(e,It,Jt))}catch(s){i(s)}}))}decode(e){return(0,f.D)(new Promise((o,i)=>{try{o(dt.call(e,St,Rt))}catch(s){i(s)}}))}static#t=this.\u0275fac=function(o){return new(o||m)};static#e=this.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac})}const Dt={encode:!0,input:""};class B{constructor(e,o){this.htmlService=e,this.localStorageService=o,this._encode=!0,this._input="",this.output="",this.localStorageService.getItem("html",Dt).subscribe(i=>{this._encode=i.encode,this._input=i.input})}get encode(){return this._encode}set encode(e){this._encode=e,this.somethingChanged()}set input(e){this._input=e,this.somethingChanged()}get input(){return this._input}somethingChanged(){this.localStorageService.setItem("html",{encode:this._encode,input:this._input}),this.encode?this.htmlService.encode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e):this.htmlService.decode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e)}static#t=this.\u0275fac=function(o){return new(o||B)(t.Y36(m),t.Y36(T.n))};static#e=this.\u0275cmp=t.Xpm({type:B,selectors:[["app-html"]],decls:14,vars:4,consts:[[1,"encoder-decoder"],["matLine",""],[3,"ngModel","ngModelChange"],[3,"input","inputChange"],[3,"output"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"HTML"),t.qZA(),t.TgZ(3,"app-configuration")(4,"mat-list-item")(5,"h4",1),t._uU(6,"Convertion"),t.qZA(),t.TgZ(7,"p",1)(8,"span"),t._uU(9,"Select witch convertion mode you want to use"),t.qZA()(),t.TgZ(10,"mat-slide-toggle",2),t.NdJ("ngModelChange",function(r){return i.encode=r}),t._uU(11),t.qZA()()(),t.TgZ(12,"app-input",3),t.NdJ("inputChange",function(r){return i.input=r}),t.qZA(),t._UZ(13,"app-output",4),t.qZA()),2&o&&(t.xp6(10),t.Q6J("ngModel",i.encode),t.xp6(1),t.Oqu(i.encode?"Encode":"Decode"),t.xp6(1),t.Q6J("input",i.input),t.xp6(1),t.Q6J("output",i.output))},dependencies:[d.JJ,d.On,b.Tg,E.Rr,U.B,y.a,S.Z],encapsulation:2})}var Nt=a(4859);const Pt=["fileUpload"];function qt(n,e){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",5)(2,"h3"),t._uU(3,"Input"),t.qZA(),t.TgZ(4,"div")(5,"button",6),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.openFileChooser())}),t._uU(6," Browse "),t.qZA(),t.TgZ(7,"input",7,8),t.NdJ("change",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.onFileSelected())}),t.qZA()()(),t._UZ(9,"app-output",9),t.BQk()}if(2&n){const o=t.oxw();t.xp6(9),t.Q6J("output",o.base64)}}function Qt(n,e){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",12),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("src",o.base64,t.LSH)}}function Ot(n,e){1&n&&t._uU(0,"Image is too big")}function Yt(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",5)(1,"app-input",10),t.NdJ("inputChange",function(s){t.CHM(o);const r=t.oxw();return t.KtG(r.base64=s)}),t.qZA(),t.YNc(2,Qt,2,1,"div",3),t.YNc(3,Ot,1,0,"ng-template",null,11,t.W1O),t.qZA()}if(2&n){const o=t.MAs(4),i=t.oxw();t.xp6(1),t.Q6J("input",i.base64),t.xp6(1),t.Q6J("ngIf",i.base64.length<35840)("ngIfElse",o)}}const ht="imageBase64",Lt={encode:!0};class J{constructor(e,o){this.base64Service=e,this.localStorageService=o,this.fileChooser=null,this._encode=!0,this.base64="",this.localStorageService.getItem(ht,Lt).subscribe(i=>this.encode=i.encode)}get encode(){return this._encode}set encode(e){this._encode=e,this.localStorageService.setItem(ht,{encode:this._encode})}openFileChooser(){this.fileChooser?.nativeElement.click()}onFileSelected(){const o=this.fileChooser?.nativeElement.files?.item(0);null!=o&&this.base64Service.encode(o).pipe((0,l.P)()).subscribe(i=>this.base64=i)}static#t=this.\u0275fac=function(o){return new(o||J)(t.Y36(p),t.Y36(T.n))};static#e=this.\u0275cmp=t.Xpm({type:J,selectors:[["app-image-base64"]],viewQuery:function(o,i){if(1&o&&t.Gf(Pt,5),2&o){let s;t.iGM(s=t.CRH())&&(i.fileChooser=s.first)}},decls:15,vars:4,consts:[[1,"encoder-decoder"],["matLine",""],[3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["decode",""],[1,"section"],["mat-raised-button","","color","primary",3,"click"],["type","file","accept","image/*","multiple","false",3,"change"],["fileUpload",""],[3,"output"],[3,"input","inputChange"],["imageTooBig",""],[3,"src"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Base64 Text Encoder / Decoder"),t.qZA(),t.TgZ(3,"app-configuration")(4,"mat-list-item")(5,"h4",1),t._uU(6,"Convertion"),t.qZA(),t.TgZ(7,"p",1)(8,"span"),t._uU(9,"Select witch convertion mode you want to use"),t.qZA()(),t.TgZ(10,"mat-slide-toggle",2),t.NdJ("ngModelChange",function(r){return i.encode=r}),t._uU(11),t.qZA()()(),t.YNc(12,qt,10,1,"ng-container",3),t.YNc(13,Yt,5,3,"ng-template",null,4,t.W1O),t.qZA()),2&o){const s=t.MAs(14);t.xp6(10),t.Q6J("ngModel",i.encode),t.xp6(1),t.Oqu(i.encode?"Encode":"Decode"),t.xp6(1),t.Q6J("ngIf",i.encode)("ngIfElse",s)}},dependencies:[x.O5,d.JJ,d.On,Nt.lW,b.Tg,E.Rr,U.B,y.a,S.Z],encapsulation:2})}var Y=a(4004),zt=a(9646),jt=a(9841);class _{constructor(e){this.base64Service=e}formatte(e){const o=e.split("."),i=this.base64Service.decode(o[0]).pipe((0,Y.U)(u=>JSON.parse(u))),s=this.base64Service.decode(o[1]).pipe((0,Y.U)(u=>JSON.parse(u))),r=(0,zt.of)(o[2]);return(0,jt.a)([i,s,r]).pipe((0,Y.U)(u=>({header:u[0],payload:u[1],signature:u[2]})))}static#t=this.\u0275fac=function(o){return new(o||_)(t.LFG(p))};static#e=this.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac})}var gt=a(7866);function Gt(n,e){if(1&n&&(t.TgZ(0,"div",4)(1,"h4"),t._uU(2,"Header"),t.qZA(),t.TgZ(3,"pre"),t._UZ(4,"code",5),t.qZA(),t.TgZ(5,"h4"),t._uU(6,"Payload"),t.qZA(),t.TgZ(7,"pre"),t._UZ(8,"code",5),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Signature"),t.qZA(),t.TgZ(11,"pre"),t._UZ(12,"code",5),t.qZA()()),2&n){const o=e.ngIf,i=t.oxw();t.xp6(4),t.Q6J("highlight",i.stringify(o.header)),t.xp6(4),t.Q6J("highlight",i.stringify(o.payload)),t.xp6(4),t.Q6J("highlight",o.signature)}}class F{constructor(e){this.jwtService=e,this._input="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",this.output=this.onInputChange(this._input)}get input(){return this._input}set input(e){this._input=e,this.output=this.onInputChange(e)}onInputChange(e){return this.jwtService.formatte(e)}stringify(e){return JSON.stringify(e,null,4)}static#t=this.\u0275fac=function(o){return new(o||F)(t.Y36(_))};static#e=this.\u0275cmp=t.Xpm({type:F,selectors:[["app-jwt"]],decls:9,vars:5,consts:[[1,"encoder-decoder"],[3,"input","rows","inputChange"],[1,"section"],["class","output",4,"ngIf"],[1,"output"],[3,"highlight"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"JwT decode"),t.qZA(),t.TgZ(3,"app-input",1),t.NdJ("inputChange",function(r){return i.input=r}),t.qZA(),t.TgZ(4,"div",2)(5,"h3"),t._uU(6,"JWT"),t.qZA(),t.YNc(7,Gt,13,3,"div",3),t.ALo(8,"async"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("input",i.input)("rows",3),t.xp6(4),t.Q6J("ngIf",t.lcZ(8,3,i.output)))},dependencies:[x.O5,y.a,gt.y$,x.Ov],encapsulation:2})}class C{constructor(){}encode(e){return(0,f.D)(new Promise((o,i)=>{try{o(encodeURIComponent(e))}catch(s){i(s)}}))}decode(e){return(0,f.D)(new Promise((o,i)=>{try{o(decodeURIComponent(e))}catch(s){i(s)}}))}static#t=this.\u0275fac=function(o){return new(o||C)};static#e=this.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac})}const Kt={encode:!0,input:""};class w{constructor(e,o){this.uriService=e,this.localStorageService=o,this._encode=!0,this._input="",this.output="",this.localStorageService.getItem("uri",Kt).subscribe(i=>{this._encode=i.encode,this._input=i.input})}get encode(){return this._encode}set encode(e){this._encode=e,this.somethingChanged()}set input(e){this._input=e,this.somethingChanged()}get input(){return this._input}somethingChanged(){this.localStorageService.setItem("uri",{encode:this._encode,input:this._input}),this.encode?this.uriService.encode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e):this.uriService.decode(this._input).pipe((0,l.P)()).subscribe(e=>this.output=e)}static#t=this.\u0275fac=function(o){return new(o||w)(t.Y36(C),t.Y36(T.n))};static#e=this.\u0275cmp=t.Xpm({type:w,selectors:[["app-uri"]],decls:14,vars:4,consts:[[1,"encoder-decoder"],["matLine",""],[3,"ngModel","ngModelChange"],[3,"input","inputChange"],[3,"output"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"URI"),t.qZA(),t.TgZ(3,"app-configuration")(4,"mat-list-item")(5,"h4",1),t._uU(6,"Convertion"),t.qZA(),t.TgZ(7,"p",1)(8,"span"),t._uU(9,"Select witch convertion mode you want to use"),t.qZA()(),t.TgZ(10,"mat-slide-toggle",2),t.NdJ("ngModelChange",function(r){return i.encode=r}),t._uU(11),t.qZA()()(),t.TgZ(12,"app-input",3),t.NdJ("inputChange",function(r){return i.input=r}),t.qZA(),t._UZ(13,"app-output",4),t.qZA()),2&o&&(t.xp6(10),t.Q6J("ngModel",i.encode),t.xp6(1),t.Oqu(i.encode?"Encode":"Decode"),t.xp6(1),t.Q6J("input",i.input),t.xp6(1),t.Q6J("output",i.output))},dependencies:[d.JJ,d.On,b.Tg,E.Rr,U.B,y.a,S.Z],encapsulation:2})}class R{constructor(){}static#t=this.\u0275fac=function(o){return new(o||R)};static#e=this.\u0275cmp=t.Xpm({type:R,selectors:[["app-encoders-decoders"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"encoders-decoders works!"),t.qZA())},encapsulation:2})}const Wt=[{path:"",component:R},{path:"base64",component:I},{path:"image-base64",component:J},{path:"html",component:B},{path:"jwt",component:F},{path:"uri",component:w}];class M{static#t=this.\u0275fac=function(o){return new(o||M)};static#e=this.\u0275mod=t.oAB({type:M});static#n=this.\u0275inj=t.cJS({imports:[z.Bz.forChild(Wt),z.Bz]})}var Xt=a(5142);class D{static#t=this.\u0275fac=function(o){return new(o||D)};static#e=this.\u0275mod=t.oAB({type:D});static#n=this.\u0275inj=t.cJS({providers:[p,m,_,C],imports:[x.ez,M,Xt.m,gt._l]})}}}]);