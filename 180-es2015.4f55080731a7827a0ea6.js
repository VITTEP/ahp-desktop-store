"use strict";(self.webpackChunkAHP=self.webpackChunkAHP||[]).push([[180],{3180:function(e,t,n){n.r(t),n.d(t,{AuthModule:function(){return j}});var r=n(25888),i=n(89416),o=n(93324),a=n(69324),s=n(42741);let l=(()=>{class e{constructor(e,t,n){this.toast=e,this.router=t,this.route=n}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275directiveInject(r.quB),s.\u0275\u0275directiveInject(a.F0),s.\u0275\u0275directiveInject(a.gz))},e.\u0275cmp=s.\u0275\u0275defineComponent({type:e,selectors:[["ngx-auth"]],decls:9,vars:0,consts:[[2,"height","100%"],[1,"navigation"],["href","pages","aria-label","Back",1,"link","back-link"],["icon","arrow-back"]],template:function(e,t){1&e&&(s.\u0275\u0275elementStart(0,"nb-layout"),s.\u0275\u0275elementStart(1,"nb-layout-column"),s.\u0275\u0275elementStart(2,"nb-card",0),s.\u0275\u0275elementStart(3,"nb-card-header"),s.\u0275\u0275elementStart(4,"nav",1),s.\u0275\u0275elementStart(5,"a",2),s.\u0275\u0275element(6,"nb-icon",3),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(7,"nb-card-body"),s.\u0275\u0275element(8,"router-outlet"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd())},directives:[r.Aqw,r.dP_,r.Asz,r.ndF,r.fMN,r.yKW,a.lC],styles:["[_nghost-%COMP%]{margin:auto}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}"]}),e})();var c=n(61855),d=n(77583),u=n(24766),g=n(31887);let h=(()=>{class e extends d.UP{constructor(e){super({apiUrl:u.NZ.apiUrl,entity:"auth/login"},e)}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject(g.eN))},e.\u0275prov=s.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=n(72601),p=n(26623),f=n(74044),v=n(31174),y=n(23849),b=n(16274);function k(e,t){if(1&e){const e=s.\u0275\u0275getCurrentView();s.\u0275\u0275elementStart(0,"nb-card",2),s.\u0275\u0275listener("keyup.enter",function(){return s.\u0275\u0275restoreView(e),s.\u0275\u0275nextContext().login()})("keydown.enter",function(){return s.\u0275\u0275restoreView(e),s.\u0275\u0275nextContext().login()}),s.\u0275\u0275elementStart(1,"nb-card-header"),s.\u0275\u0275text(2,"\u0110\u0103ng nh\u1eadp"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(3,"nb-card-body"),s.\u0275\u0275elementStart(4,"input",3),s.\u0275\u0275listener("ngModelChange",function(t){return s.\u0275\u0275restoreView(e),s.\u0275\u0275nextContext().username=t}),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(5,"input",4),s.\u0275\u0275listener("ngModelChange",function(t){return s.\u0275\u0275restoreView(e),s.\u0275\u0275nextContext().password=t}),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(6,"nb-card-footer"),s.\u0275\u0275elementStart(7,"button",5),s.\u0275\u0275listener("click",function(){return s.\u0275\u0275restoreView(e),s.\u0275\u0275nextContext().login()}),s.\u0275\u0275text(8," \u0110\u0103ng nh\u1eadp "),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd()}if(2&e){const e=s.\u0275\u0275nextContext();s.\u0275\u0275advance(4),s.\u0275\u0275property("ngModel",e.username),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngModel",e.password),s.\u0275\u0275advance(2),s.\u0275\u0275property("nbSpinner",e.isLoging)}}function I(e,t){1&e&&(s.\u0275\u0275elementStart(0,"section",6),s.\u0275\u0275elementStart(1,"span",7),s.\u0275\u0275text(2,"\u0110ang \u0111\u0103ng nh\u1eadp..."),s.\u0275\u0275elementEnd(),s.\u0275\u0275element(3,"span",8),s.\u0275\u0275elementEnd())}const S=[{path:"",component:l,children:[{path:"login",component:(()=>{class e{constructor(e,t,n,r,i,o,a,s,l){this.loginService=e,this.capabilitiesService=t,this.refreshTokenService=n,this.toast=r,this.router=i,this.route=o,this.eventEmitterService=a,this.userService=s,this.checkLockedUserService=l,this.isLoging=!1,this.isLoading=!0}ngOnInit(){this.autoLogin()}autoLogin(){this.username=localStorage.getItem("user_login"),this.password=localStorage.getItem("pass_login"),this.login()}checkToken(){return(0,c.mG)(this,void 0,void 0,function*(){try{(yield this.refreshTokenService.refreshToken({token:localStorage.getItem("accessToken")}).toPromise())&&this.router.navigateByUrl("pages/tao-lap-bo-tieu-chi")}catch(e){this.isLoading=!1}})}login(){var e;return(0,c.mG)(this,void 0,void 0,function*(){this.isLoging=!0,localStorage.setItem("user_login",this.username),localStorage.setItem("pass_login",this.password);try{if(this.isValid()){const e=yield this.loginService.create({username:this.username,password:this.password}).toPromise();if(!e)throw new Error("Sai t\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u");(yield this.checkLockedUserService.checkLock({id:e.userId}).toPromise())[0].KQ?(localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("userId",e.userId),localStorage.setItem("displayName",e.displayName),localStorage.setItem("roleId",e.roleId),this.reloadMenuPages(),this.router.navigateByUrl("pages/tao-lap-bo-tieu-chi")):this.toast.danger("T\xe0i kho\u1ea3n \u0111\xe3 b\u1ecb kh\xf3a")}}catch(t){this.toast.danger((null===(e=t.error)||void 0===e?void 0:e.message)?t.error.message:t),this.isLoading=!1}finally{this.isLoging=!1,this.isLoading=!1}})}isValid(){return!(!this.username||!this.password)||(this.toast.danger("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"),!1)}reloadMenuPages(){this.eventEmitterService.onCallFunciton()}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275directiveInject(h),s.\u0275\u0275directiveInject(m.n),s.\u0275\u0275directiveInject(p.$),s.\u0275\u0275directiveInject(r.quB),s.\u0275\u0275directiveInject(a.F0),s.\u0275\u0275directiveInject(a.gz),s.\u0275\u0275directiveInject(f.Y),s.\u0275\u0275directiveInject(v.K),s.\u0275\u0275directiveInject(y.u))},e.\u0275cmp=s.\u0275\u0275defineComponent({type:e,selectors:[["ngx-login"]],decls:2,vars:2,consts:[[3,"keyup.enter","keydown.enter",4,"ngIf"],["class","loading",4,"ngIf"],[3,"keyup.enter","keydown.enter"],["nbInput","","type","username","placeholder","T\xean \u0111\u0103ng nh\u1eadp","required","","fullWidth","","title","Nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp",3,"ngModel","ngModelChange"],["nbInput","","type","password","placeholder","M\u1eadt kh\u1ea9u","required","","fullWidth","","title","Nh\u1eadp m\u1eadt kh\u1ea9u",3,"ngModel","ngModelChange"],["nbButton","","submit","","fullWidth","","status","primary",3,"nbSpinner","click"],[1,"loading"],[1,"loadWords"],[1,"loading__anim"]],template:function(e,t){1&e&&(s.\u0275\u0275template(0,k,9,3,"nb-card",0),s.\u0275\u0275template(1,I,4,0,"section",1)),2&e&&(s.\u0275\u0275property("ngIf",!t.isLoading),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",t.isLoading))},directives:[b.O5,r.Asz,r.ndF,r.yKW,r.h8i,o.Fj,o.Q7,o.JJ,o.On,r.XWE,r.DPz,r.Q7R],styles:["[_nghost-%COMP%]{margin:auto}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}nb-card[_ngcontent-%COMP%]{max-width:40%;margin:10% auto auto}body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh}.loading[_ngcontent-%COMP%]{max-width:50%;line-height:1.4;font-size:1.2rem;font-weight:bold;text-align:center;margin:auto}.loadWords[_ngcontent-%COMP%]{font-weight:normal;font-size:.9rem;color:#bdbdbd;margin:.6rem 0 2rem;display:block}.loading__anim[_ngcontent-%COMP%]{width:35px;height:35px;border:5px solid rgba(189,189,189,.25);border-left-color:#039be5;border-top-color:#039be5;border-radius:50%;display:inline-block;animation:rotate .6s infinite linear}@keyframes rotate{to{transform:rotate(1turn)}}"]}),e})()},{path:"",redirectTo:"login",pathMatch:"full"}]}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({imports:[[a.Bz.forChild(S)],a.Bz]}),e})();var C=n(47684);let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({imports:[[r.j5J,r.zyh,r.nKr,C.$,r.KdK,r.T2N,r.EoG,r.CG_,b.ez,o.u5,r.uuI]]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({imports:[[w,i.O,o.u5,r.j5J,r.j7H,M,r.BW0,r.zyh,C.$,r.KdK]]}),e})()}}]);