import{c as E,d as j}from"./chunk-DVVEKPVL.js";import{b as G}from"./chunk-GTD5WNPP.js";import{J as D,c as w,f as k,h as B,i as I,j as A,k as L,l as T,t as N,u as U}from"./chunk-M24M3PNC.js";import{c as W,d as z}from"./chunk-4L6P5Z5M.js";import{C as x,G as S}from"./chunk-JM67XKKX.js";import{$b as h,Bb as l,Cb as o,Db as a,Lb as _,Pb as M,Qb as P,Wb as v,Yb as O,_b as m,ac as u,cb as c,cc as y,db as g,mc as p,na as b,nc as d,wb as C}from"./chunk-VIO7ZK3G.js";import"./chunk-3EYC4JTX.js";var ee=(()=>{let r=class r{constructor(t,n,e){this._Router=t,this._AppModeService=n,this._Apiservice=e,this.SubscriptionArr=[],this.UserName="",this.Password="",this.BranchId=null,this.Branches=[]}ngOnInit(){localStorage.removeItem("UserToken"),this.GetBranches()}GetBranches(){let t=this._Apiservice.get("Branch/GetAll").subscribe({next:n=>{n.IsSuccess==!0&&n.Obj!=null?this.Branches=n.Obj:this._AppModeService._Toastr.error(n.Message)}});this.SubscriptionArr.push(t)}SelectBranch(t){if(t>0){let n=this.Branches.find(e=>e.Id==t);n!=null&&(this.BranchId=n.Id)}}Send(){if(this.UserName.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Login.EnterUserName"));return}if(this.Password.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Login.EnterPassword"));return}if(this.BranchId==null){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Login.EnterBranch"));return}let t={UserName:this.UserName,Password:this.Password,BranchId:this.BranchId},n=this._Apiservice.post("User/Login",t,!0).subscribe({next:e=>{e.IsSuccess==!0&&e.Obj!=null?(localStorage.removeItem("UserToken"),localStorage.setItem("UserToken",JSON.stringify(e.Obj.AccesToken)),this._Router.navigate(["/Dashboard"])):this._AppModeService._Toastr.error(e.Message)}});this.SubscriptionArr.push(n)}ngOnDestroy(){for(let t=0;t<this.SubscriptionArr.length;t++)this.SubscriptionArr[t].unsubscribe()}};r.\u0275fac=function(n){return new(n||r)(g(x),g(G),g(w))},r.\u0275cmp=b({type:r,selectors:[["app-login"]],standalone:!0,features:[y],decls:26,vars:17,consts:[[1,""],[1,"d-flex","flex-wrap","justify-content-center"],[1,"col-12","col-sm-6","divLogin","login-container"],[1,"col-12","col-md-9","mx-auto","form-container"],[1,"col-12"],[1,"user-box","form-group"],["type","text","name","UserName","required","",1,"form-control","my-3",3,"ngModelChange","ngModel","placeholder"],[1,"pi","pi-user"],["type","password","name","Password","required","",1,"form-control","my-3",3,"ngModelChange","ngModel","placeholder"],[1,"pi","pi-lock"],[1,"user-box"],["name","BranchId","bindLabel","Name","bindValue","Id",1,"p-0",3,"focusin","change","ngModelChange","items","placeholder","ngModel"],[1,"text-center","mt-4"],[1,"",3,"click"],[1,"col-12","col-sm-6","divImage"],[1,"-box","col-12","col-md-6","col-lg-4"]],template:function(n,e){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"input",6),p(7,"translate"),u("ngModelChange",function(i){return h(e.UserName,i)||(e.UserName=i),i}),o(),a(8,"i",7),o(),l(9,"div",5)(10,"input",8),p(11,"translate"),u("ngModelChange",function(i){return h(e.Password,i)||(e.Password=i),i}),o(),a(12,"i",9),o(),l(13,"div",10)(14,"ng-select",11),p(15,"translate"),_("focusin",function(){return e.GetBranches()})("change",function(){return e.SelectBranch(e.BranchId)}),u("ngModelChange",function(i){return h(e.BranchId,i)||(e.BranchId=i),i}),o()(),l(16,"div",12)(17,"a",13),_("click",function(){return e.Send()}),a(18,"span")(19,"span")(20,"span")(21,"span"),v(22),p(23,"translate"),o()()()()(),a(24,"div",14),o(),a(25,"div",15),o()),n&2&&(c(6),M("placeholder",d(7,9,"Login.UserName")),m("ngModel",e.UserName),c(4),M("placeholder",d(11,11,"Login.Password")),m("ngModel",e.Password),c(4),P("placeholder","  ",d(15,13,"Employee.ChooseBranch"),""),C("items",e.Branches),m("ngModel",e.BranchId),c(8),O(" ",d(23,15,"Login.EnterLogin")," "))},dependencies:[D,j,E,U,T,k,B,I,N,L,A,z,W,S],styles:["section[_ngcontent-%COMP%]{margin:0;padding:0;min-height:100vh;font-family:sans-serif}.divImage[_ngcontent-%COMP%]{background-image:url(/assets/images/home2.png);background-position:center!important;background-repeat:no-repeat!important;background-size:cover;min-height:100vh}.divLogin[_ngcontent-%COMP%]{min-height:100vh;display:flex;justify-content:center;align-items:center}.divLogin[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{border-radius:10px}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#e6edf8}.form-container[_ngcontent-%COMP%]{min-height:50vh;display:flex;justify-content:center;align-items:center}.form-container[_ngcontent-%COMP%]{background:#fff;padding:30px 40px;box-shadow:0 8px 20px #0000001a;border-radius:10px;text-align:center}.form-group[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;text-align:center;padding:12px 40px;font-size:14px;border:1px solid #ddd;border-radius:5px;outline:none;transition:all .3s ease}.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#aaa;font-size:16px}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:#161d3080;box-shadow:0 0 5px #c8c8c8b3}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:10px 40px;color:#03e9f4;font-size:20px;text-decoration:none;text-transform:uppercase;overflow:hidden;transition:.5s;margin-top:40px;border:1px solid #03e9f4}a[_ngcontent-%COMP%]:hover{background:#03e9f4;color:#fff!important;border-radius:5px;box-shadow:0 0 5px #03e9f4,0 0 25px #03e9f4,0 0 50px #03e9f4,0 0 100px #03e9f4}a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block}a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:-100%;width:100%;height:2px;background:linear-gradient(90deg,transparent,#03e9f4);animation:_ngcontent-%COMP%_btn-anim1 1s linear infinite}@keyframes _ngcontent-%COMP%_btn-anim1{0%{left:-100%}50%,to{left:100%}}a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:-100%;right:0;width:2px;height:100%;background:linear-gradient(180deg,transparent,#03e9f4);animation:_ngcontent-%COMP%_btn-anim2 1s linear infinite;animation-delay:.25s}@keyframes _ngcontent-%COMP%_btn-anim2{0%{top:-100%}50%,to{top:100%}}a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){bottom:0;right:-100%;width:100%;height:2px;background:linear-gradient(270deg,transparent,#03e9f4);animation:_ngcontent-%COMP%_btn-anim3 1s linear infinite;animation-delay:.5s}@keyframes _ngcontent-%COMP%_btn-anim3{0%{right:-100%}50%,to{right:100%}}a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){bottom:-100%;left:0;width:2px;height:100%;background:linear-gradient(360deg,transparent,#03e9f4);animation:_ngcontent-%COMP%_btn-anim4 1s linear infinite;animation-delay:.75s}@keyframes _ngcontent-%COMP%_btn-anim4{0%{bottom:-100%}50%,to{bottom:100%}}@media (max-width:768px){.divImage[_ngcontent-%COMP%]{display:none}section[_ngcontent-%COMP%]{background-image:url(/assets/images/home2.png);background-position:center!important;background-repeat:no-repeat!important;background-size:cover}.divLogin[_ngcontent-%COMP%]{width:90%}.login-container[_ngcontent-%COMP%]{background-color:transparent}}"]});let f=r;return f})();export{ee as LoginComponent};