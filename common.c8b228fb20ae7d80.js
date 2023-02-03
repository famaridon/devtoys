"use strict";(self.webpackChunkdevtoys_web=self.webpackChunkdevtoys_web||[]).push([[592],{8893:(m,u,i)=>{i.d(u,{J:()=>s});var t=i(4650);const l=["*"];class s{constructor(){this.title="",this.description=""}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-configuration-option"]],inputs:{title:"title",description:"description"},ngContentSelectors:l,decls:8,vars:2,consts:[[1,"dt-configuration-option"],[1,"dt-configuration-option-content"],[1,"dt-configuration-option-title"],[1,"dt-configuration-option-description"],[1,"dt-configuration-option-input"]],template:function(r,d){1&r&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA()(),t.TgZ(6,"div",4),t.Hsn(7),t.qZA()()),2&r&&(t.xp6(3),t.Oqu(d.title),t.xp6(2),t.Oqu(d.description))},encapsulation:2})}},76:(m,u,i)=>{i.d(u,{B:()=>s});var t=i(4650);const l=["*"];class s{constructor(){}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-configuration"]],ngContentSelectors:l,decls:5,vars:0,consts:[[1,"dt-configuration"]],template:function(r,d){1&r&&(t.F$t(),t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Configuration"),t.qZA(),t.TgZ(3,"div"),t.Hsn(4),t.qZA()())},encapsulation:2})}},235:(m,u,i)=>{i.d(u,{a:()=>d});var t=i(4650),l=i(6895),s=i(4006),f=i(4144),_=i(9549);function r(g,C){if(1&g&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&g){const p=t.oxw();t.xp6(1),t.Oqu(p.error)}}class d{constructor(){this.error=null,this.rows=10,this._input="",this.inputChange=new t.vpe}get input(){return this._input}set input(C){this._input=C,this.inputChange.emit(C)}static#t=this.\u0275fac=function(p){return new(p||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-input"]],inputs:{error:"error",rows:"rows",input:"input"},outputs:{inputChange:"inputChange"},decls:6,vars:3,consts:[[1,"dt-text-area-input"],["matInput","","name","input",3,"rows","ngModel","ngModelChange"],[4,"ngIf"]],template:function(p,c){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Input"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"textarea",1),t.NdJ("ngModelChange",function(e){return c.input=e}),t.qZA(),t.YNc(5,r,2,1,"mat-error",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("rows",c.rows)("ngModel",c.input),t.xp6(1),t.Q6J("ngIf",c.error))},dependencies:[l.O5,s.Fj,s.JJ,s.On,f.Nt,_.KE,_.TO],encapsulation:2})}},2411:(m,u,i)=>{i.d(u,{Z:()=>p});var t=i(4650),l=i(6895);class s{constructor(n,e){this._document=e;const o=this._textarea=this._document.createElement("textarea"),a=o.style;a.position="fixed",a.top=a.opacity="0",a.left="-999em",o.setAttribute("aria-hidden","true"),o.value=n,o.readOnly=!0,this._document.body.appendChild(o)}copy(){const n=this._textarea;let e=!1;try{if(n){const o=this._document.activeElement;n.select(),n.setSelectionRange(0,n.value.length),e=this._document.execCommand("copy"),o&&o.focus()}}catch{}return e}destroy(){const n=this._textarea;n&&(n.remove(),this._textarea=void 0)}}let f=(()=>{class c{constructor(e){this._document=e}copy(e){const o=this.beginCopy(e),a=o.copy();return o.destroy(),a}beginCopy(e){return new s(e,this._document)}}return c.\u0275fac=function(e){return new(e||c)(t.LFG(l.K0))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var g=i(3336);const C=["*"];class p{constructor(n){this.clipboard=n,this.title="Output"}copy(){const n=document.getElementById(this.title)?.textContent;null!=n&&this.clipboard.copy(n)}static#t=this.\u0275fac=function(e){return new(e||p)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-output"]],inputs:{title:"title"},ngContentSelectors:C,decls:8,vars:2,consts:[[1,"dt-output"],[2,"float","right","cursor","pointer",3,"click"],[1,"dt-output-content",3,"id"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"h3"),t._uU(2),t.TgZ(3,"div",1),t.NdJ("click",function(){return o.copy()}),t.TgZ(4,"mat-icon"),t._uU(5,"content_copy"),t.qZA()()(),t.TgZ(6,"div",2),t.Hsn(7),t.qZA()()),2&e&&(t.xp6(2),t.hij(" ",o.title," "),t.xp6(4),t.s9C("id",o.title))},dependencies:[g.Hw],encapsulation:2})}}}]);