import{c as W,d as N,g as L}from"./chunk-IFVWP3QJ.js";import{I,L as T,N as A,Q as F,_ as V,d as P,n as C}from"./chunk-OQMSVWK6.js";import{$b as B,Cb as n,Db as i,Eb as U,Ib as x,Mb as f,Nb as h,X as O,Xb as p,Yb as k,Zb as u,ac as _,bc as M,db as a,dc as E,eb as w,na as y,nc as l,oc as d,vb as b,xa as S,xb as g,ya as v}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";function j(c,m){if(c&1){let s=x();n(0,"div",24)(1,"div",25)(2,"label",26),p(3),l(4,"translate"),i(),n(5,"input",27),M("ngModelChange",function(e){S(s);let t=h();return _(t.SeedOptions.EmailMega,e)||(t.SeedOptions.EmailMega=e),v(e)}),i()(),n(6,"div",25)(7,"label",28),p(8),l(9,"translate"),i(),n(10,"input",29),M("ngModelChange",function(e){S(s);let t=h();return _(t.SeedOptions.PasswordMega,e)||(t.SeedOptions.PasswordMega=e),v(e)}),i()()()}if(c&2){let s=h();a(3),u(" ",d(4,4,"Seed.EmailMega"),""),a(2),B("ngModel",s.SeedOptions.EmailMega),a(3),u(" ",d(9,6,"Seed.PasswordMega"),""),a(2),B("ngModel",s.SeedOptions.PasswordMega)}}function R(c,m){if(c&1){let s=x();n(0,"div",24)(1,"div",25)(2,"label",30),p(3),l(4,"translate"),i(),n(5,"input",31),M("ngModelChange",function(e){S(s);let t=h();return _(t.SeedOptions.FileIdDrive,e)||(t.SeedOptions.FileIdDrive=e),v(e)}),i(),U(6,"span",32),i()()}if(c&2){let s=h();a(3),u(" ",d(4,3,"Seed.FileIdDrive"),""),a(2),B("ngModel",s.SeedOptions.FileIdDrive),a(),g("innerText",s.sss)}}var $=(()=>{let m=class m{constructor(o,e){this._AppModeService=o,this._Apiservice=e,this.sss="myposapp@level-array-381114.iam.gserviceaccount.com",this.SeedOptions={UserName:"",Password:"",User:!1,BackupDataBase:!1,UploadDataBaseMega:!1,EmailMega:"",PasswordMega:"",UploadDataBaseDrive:!1,FileIdDrive:"",BackupDataBaseDownloadDevice:!1,DefaultData:!1}}SelectOption(o){let e=o.target.checked,t=Number(o.target.value);e==!0&&t==2&&(this.SeedOptions.User=!0),e==!1&&t==2&&(this.SeedOptions.User=!1),e==!0&&t==3&&(this.SeedOptions.BackupDataBase=!0,this.SeedOptions.BackupDataBaseDownloadDevice=!1,this.SeedOptions.UploadDataBaseMega=!1,this.SeedOptions.EmailMega="",this.SeedOptions.PasswordMega="",this.SeedOptions.UploadDataBaseDrive=!1,this.SeedOptions.FileIdDrive=""),e==!1&&t==3&&(this.SeedOptions.BackupDataBase=!1),e==!0&&t==4&&(this.SeedOptions.UploadDataBaseMega=!0,this.SeedOptions.BackupDataBase=!1,this.SeedOptions.BackupDataBaseDownloadDevice=!1,this.SeedOptions.UploadDataBaseDrive=!1,this.SeedOptions.FileIdDrive=""),e==!1&&t==4&&(this.SeedOptions.UploadDataBaseMega=!1),e==!0&&t==5&&(this.SeedOptions.UploadDataBaseDrive=!0,this.SeedOptions.BackupDataBase=!1,this.SeedOptions.BackupDataBaseDownloadDevice=!1,this.SeedOptions.UploadDataBaseMega=!1,this.SeedOptions.EmailMega="",this.SeedOptions.PasswordMega=""),e==!1&&t==5&&(this.SeedOptions.UploadDataBaseDrive=!1),e==!0&&t==6&&(this.SeedOptions.BackupDataBaseDownloadDevice=!0,this.SeedOptions.BackupDataBase=!1,this.SeedOptions.UploadDataBaseDrive=!1,this.SeedOptions.FileIdDrive="",this.SeedOptions.UploadDataBaseMega=!1,this.SeedOptions.EmailMega="",this.SeedOptions.PasswordMega=""),e==!1&&t==6&&(this.SeedOptions.BackupDataBaseDownloadDevice=!1)}Send(){if(this.SeedOptions.UploadDataBaseMega==!0){if(this.SeedOptions.EmailMega.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Seed.Error.EmailMega"));return}if(this.SeedOptions.PasswordMega.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Seed.Error.PasswordMega"));return}}if(this.SeedOptions.UploadDataBaseDrive==!0&&this.SeedOptions.FileIdDrive.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Seed.Error.FileIdDrive"));return}this.SeedOptions.User==!1&&this.SeedOptions.BackupDataBase==!1&&this.SeedOptions.UploadDataBaseMega==!1&&this.SeedOptions.UploadDataBaseDrive==!1&&this.SeedOptions.BackupDataBaseDownloadDevice==!1||this._Apiservice.post("ProgramSettingsEP/Seed",this.SeedOptions,!0).pipe(O(this._Apiservice.destroy$)).subscribe({next:o=>{o.IsSuccess==!0?(this._AppModeService._Toastr.success(this._AppModeService._Translate.instant("Success.AddSuccess")),this.SeedOptions.BackupDataBaseDownloadDevice==!0&&this.DownloadFile(o.Obj),this.Empty()):this._AppModeService._Toastr.error(o.Message)}})}DownloadFile(o){o==1&&this._Apiservice.Download("Download/Database",!0).pipe(O(this._Apiservice.destroy$)).subscribe({next:e=>{if(this._Apiservice.isLoading=!0,e.type==C.Response){this._Apiservice.isLoading=!1;let t=new Blob([e.body],{type:e.body.type}),r=document.createElement("a");document.body.appendChild(r),r.download="DataBase"+this._Apiservice.NowDate(),r.href=URL.createObjectURL(t),r.target="_blank",r.click()}}})}Empty(){this.SeedOptions={UserName:"",Password:"",User:!1,BackupDataBase:!1,UploadDataBaseMega:!1,EmailMega:"",PasswordMega:"",UploadDataBaseDrive:!1,FileIdDrive:"",BackupDataBaseDownloadDevice:!1,DefaultData:!1}}ngOnDestroy(){this._Apiservice.destroy$.next(),this._Apiservice.destroy$.complete()}};m.\u0275fac=function(e){return new(e||m)(w(L),w(I))},m.\u0275cmp=y({type:m,selectors:[["app-program-settings"]],standalone:!0,features:[E],decls:40,vars:24,consts:[["clas","bg-light"],["id","container-page",1,"container-page","m-2"],[1,"page-wrapper"],[1,"main-content","min-vh-100"],[1,"inner-box","min-vh-100"],[1,"title-box","font-weight-normal"],[1,"PageTitle","fs-1","fw-bold","px-2"],[1,"row","align-items-end","px-3","py-2","justify-content-center"],[1,"col-12","col-sm-6","col-lg-3","text-center"],["for","BackupDataBase"],["for","BackupDataBase",1,"form-check-label","m-0","col-12","text-center","text-transparent"],["type","checkbox","id","BackupDataBase","value","3",1,"form-check-input","mx-auto",3,"change","checked"],["for","UploadDataBaseMega"],["for","UploadDataBaseMega",1,"form-check-label","m-0","col-12","text-center","text-transparent"],["type","checkbox","id","UploadDataBaseMega","value","4",1,"form-check-input","mx-auto",3,"change","checked"],["for","UploadDataBaseDrive"],["for","UploadDataBaseDrive",1,"form-check-label","m-0","col-12","text-center","text-transparent"],["type","checkbox","id","UploadDataBaseDrive","value","5",1,"form-check-input","mx-auto",3,"change","checked"],["for","BackupDataBaseDownloadDevice"],["for","BackupDataBaseDownloadDevice",1,"form-check-label","m-0","col-12","text-center","text-transparent"],["type","checkbox","id","BackupDataBaseDownloadDevice","value","6",1,"form-check-input","mx-auto",3,"change","checked"],[1,"col-12","text-center","mt-5","mb-3"],[1,"btn","btn-success","my-2","py-3","my-md-0","mx-3","px-5","shadow-none",3,"click"],["class","col-12 row",4,"ngIf"],[1,"col-12","row"],[1,"col-12","col-md-4"],["for","EmailMega"],["type","text","name","UserName","id","EmailMega",1,"form-control","text-center","shadow-none",3,"ngModelChange","ngModel"],["for","PasswordMega"],["type","password","name","PasswordMega","id","PasswordMega",1,"form-control","text-center","shadow-none",3,"ngModelChange","ngModel"],["for","FileIdDrive"],["type","text","name","FileIdDrive","id","FileIdDrive",1,"form-control","text-center","shadow-none",3,"ngModelChange","ngModel"],[1,"my-3",3,"innerText"]],template:function(e,t){e&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"i",6),p(7),l(8,"translate"),i()(),n(9,"div",7)(10,"div",8)(11,"label",9),p(12),l(13,"translate"),i(),n(14,"label",10)(15,"input",11),f("change",function(D){return t.SelectOption(D)}),i()()(),n(16,"div",8)(17,"label",12),p(18),l(19,"translate"),i(),n(20,"label",13)(21,"input",14),f("change",function(D){return t.SelectOption(D)}),i()()(),n(22,"div",8)(23,"label",15),p(24),l(25,"translate"),i(),n(26,"label",16)(27,"input",17),f("change",function(D){return t.SelectOption(D)}),i()()(),n(28,"div",8)(29,"label",18),p(30),l(31,"translate"),i(),n(32,"label",19)(33,"input",20),f("change",function(D){return t.SelectOption(D)}),i()()(),n(34,"div",21)(35,"button",22),f("click",function(){return t.Send()}),p(36),l(37,"translate"),i()(),b(38,j,11,8,"div",23)(39,R,7,5,"div",23),i()()()()()()),e&2&&(a(7),k(d(8,12,"Menu.ProgramSettings")),a(5),u(" ",d(13,14,"Seed.BackupDataBase")," "),a(3),g("checked",t.SeedOptions.BackupDataBase==!0),a(3),u(" ",d(19,16,"Seed.UploadDataBaseMega")," "),a(3),g("checked",t.SeedOptions.UploadDataBaseMega==!0),a(3),u(" ",d(25,18,"Seed.UploadDataBaseDrive")," "),a(3),g("checked",t.SeedOptions.UploadDataBaseDrive==!0),a(3),u(" ",d(31,20,"Seed.BackupDataBaseDownloadDevice")," "),a(3),g("checked",t.SeedOptions.BackupDataBaseDownloadDevice==!0),a(3),k(d(37,22,"Model.Send")),a(2),g("ngIf",t.SeedOptions.UploadDataBaseMega==!0),a(),g("ngIf",t.SeedOptions.UploadDataBaseDrive==!0))},dependencies:[V,T,A,F,N,W,P],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}.logout[_ngcontent-%COMP%]{cursor:pointer}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none!important}.d-inline-block[_ngcontent-%COMP%]{display:inline-block!important}span[_ngcontent-%COMP%]{cursor:pointer}"]});let c=m;return c})();export{$ as ProgramSettingsComponent};