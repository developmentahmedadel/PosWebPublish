import{j as oe}from"./chunk-ZLLO2CPJ.js";import"./chunk-C6Q6MUFU.js";import"./chunk-VSYXDL23.js";import"./chunk-3ZAIJ4IV.js";import{j as ee,n as te,s as ne}from"./chunk-5VO5RH76.js";import"./chunk-2W5TGM3Y.js";import{h as Y,i as Z}from"./chunk-CIOY3TMC.js";import{a as ie}from"./chunk-7XIF7JPY.js";import"./chunk-VB2SDBDM.js";import"./chunk-I6L65D3G.js";import"./chunk-KLFZIA63.js";import{k as X}from"./chunk-7FMAHILW.js";import{d as q}from"./chunk-IBMBVOFU.js";import{c as H,d as J,g as Q}from"./chunk-DLDN7W7Q.js";import{F as D,I as U,L as W,N as z,Q as K,_ as L,d as $}from"./chunk-XINR554T.js";import{$b as N,Cb as l,Db as r,Eb as G,Ib as A,Mb as f,Nb as h,Qb as w,Rb as C,Wb as F,X as V,Xb as d,Yb as I,Zb as v,ac as E,bc as P,db as c,dc as B,eb as M,ec as k,na as O,nc as b,oc as R,qc as j,vb as y,xa as g,xb as u,ya as S}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var le=()=>({"min-width":"50rem"}),re=()=>["Name"];function pe(o,p){o&1&&(l(0,"span"),d(1),b(2,"translate"),r()),o&2&&(c(),v(" ",R(2,1,"Model.Save"),""))}function ae(o,p){o&1&&(l(0,"span"),d(1),b(2,"translate"),r()),o&2&&(c(),v(" ",R(2,1,"Model.Update"),""))}function ce(o,p){if(o&1){let i=A();l(0,"div",8)(1,"div",9)(2,"p-button",10),f("onClick",function(){g(i);let e=h(2);return S(e.ExpandAll())}),r(),l(3,"p-button",11),f("onClick",function(){g(i);let e=h(2);return S(e.CollapseAll())}),r(),l(4,"div",12)(5,"input",13),f("change",function(e){g(i);let n=h(2);return S(n.SelectAll(e))}),r()()(),l(6,"div",14)(7,"input",15),b(8,"translate"),P("ngModelChange",function(e){g(i);let n=h(2);return E(n.RoleGroup.Name,e)||(n.RoleGroup.Name=e),S(e)}),r()(),l(9,"div",14)(10,"input",16),b(11,"translate"),P("ngModelChange",function(e){g(i);let n=h(2);return E(n.RoleGroup.Notes,e)||(n.RoleGroup.Notes=e),S(e)}),r()(),l(12,"div",17)(13,"button",18),f("click",function(){g(i);let e=h(2);return S(e.Send())}),y(14,pe,3,3,"span",19)(15,ae,3,3,"span",19),G(16,"i",20),r(),l(17,"button",21),f("click",function(){g(i);let e=h().$implicit;return S(e.close("close"))}),d(18),b(19,"translate"),r()()()}if(o&2){let i=h(2);c(5),w("value",-1),u("checked",i.RoleGroup.SelectAll==!0),c(2),w("placeholder",R(8,9,"Table.Name")),N("ngModel",i.RoleGroup.Name),c(3),w("placeholder",R(11,11,"Table.Notes")),N("ngModel",i.RoleGroup.Notes),c(4),u("ngIf",i.RoleGroup.Id==0),c(),u("ngIf",i.RoleGroup.Id!=0),c(3),I(R(19,13,"Model.Close"))}}function se(o,p){o&1&&(l(0,"tr")(1,"th",22),d(2,"#"),r(),l(3,"th",22),d(4),b(5,"translate"),r(),l(6,"th"),d(7,"-"),r()()),o&2&&(c(4),I(R(5,1,"RoleGroup.SectionName")))}function _e(o,p){if(o&1&&G(0,"p-button",28),o&2){let i=h(),t=i.$implicit,e=i.expanded,n=h(2);u("pRowToggler",t)("text",!0)("rounded",!0)("plain",!0)("icon",e?"pi pi-chevron-down":n._Apiservice.Language=="ar"?"pi pi-chevron-left":"pi pi-chevron-right")}}function me(o,p){if(o&1){let i=A();l(0,"tr")(1,"td"),y(2,_e,1,5,"p-button",23),r(),l(3,"td")(4,"span",24),d(5),r()(),l(6,"td",25)(7,"label",26)(8,"input",27),f("change",function(){let e=g(i).$implicit;return S(e.Visible=!e.Visible)}),r()()()()}if(o&2){let i=p.$implicit,t=p.rowIndex;c(2),u("ngIf",i.ScreenType==1&&i.Screen>1),c(3),v(" ",i.Name,""),c(2),C("for","country",t,""),c(),C("id","country",t,""),w("value",i.Id),u("checked",i.Visible==!0)}}function de(o,p){o&1&&(l(0,"tr")(1,"th"),d(2,"-"),r(),l(3,"th"),d(4),b(5,"translate"),r(),l(6,"th"),d(7," - "),r()()),o&2&&(c(4),v("",R(5,1,"RoleGroup.ScreenName")," "))}function ue(o,p){if(o&1){let i=A();l(0,"tr")(1,"td"),G(2,"p-button",28),r(),l(3,"td")(4,"span",24),d(5),r()(),l(6,"td")(7,"label",26)(8,"input",27),f("change",function(){let e=g(i).$implicit;return S(e.Visible=!e.Visible)}),r()()()()}if(o&2){let i=p.$implicit,t=p.Subexpanded,e=p.rowIndex,n=h(3);c(2),u("pRowToggler",i)("text",!0)("rounded",!0)("plain",!0)("icon",t?"pi pi-chevron-down":n._Apiservice.Language=="ar"?"pi pi-chevron-left":"pi pi-chevron-right"),c(3),v(" ",i.Name," "),c(2),C("for","SubScreen",e,""),c(),C("id","SubScreen",e,""),w("value",i.Id),u("checked",i.Visible==!0)}}function ge(o,p){o&1&&(l(0,"tr")(1,"th",31),d(2),b(3,"translate"),r(),l(4,"th",31),d(5," - "),r()()),o&2&&(c(2),v("",R(3,1,"RoleGroup.ActionName")," "))}function Se(o,p){if(o&1){let i=A();l(0,"tr")(1,"td")(2,"span",24),d(3),r()(),l(4,"td")(5,"span",24)(6,"label",26)(7,"input",27),f("change",function(){let e=g(i).$implicit;return S(e.Visible=!e.Visible)}),r()()()()()}if(o&2){let i=p.$implicit,t=p.rowIndex;c(3),v(" ",i.Name," "),c(3),C("for","Action",t,""),c(),C("id","Action",t,""),w("value",i.Id),u("checked",i.Visible==!0)}}function he(o,p){if(o&1&&(l(0,"tr")(1,"td",29)(2,"p-table",30),y(3,ge,6,3,"ng-template",5)(4,Se,8,7,"ng-template",6),r()()()),o&2){let i=p.$implicit;c(2),u("value",i.ViewActions)}}function fe(o,p){if(o&1&&(l(0,"tr")(1,"td",29)(2,"p-table",30),y(3,de,8,3,"ng-template",5)(4,ue,9,12,"ng-template",6)(5,he,5,1,"ng-template",7),r()()()),o&2){let i=p.$implicit;c(2),u("value",i.RoleScreens)}}function xe(o,p){if(o&1&&(l(0,"p-table",3,1),y(2,ce,20,15,"ng-template",4)(3,se,8,3,"ng-template",5)(4,me,9,8,"ng-template",6)(5,fe,6,1,"ng-template",7),r()),o&2){let i=h();u("expandedRowKeys",i.expandedRows)("value",i.RoleScreenForSelect)("paginator",!1)("tableStyle",k(5,le))("globalFilterFields",k(6,re))}}var Be=(()=>{let p=class p{constructor(t,e,n){this._SharedObjectModelService=t,this._AppModeService=e,this._Apiservice=n,this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{Url:"Global/GetAll",TableName:"RoleGroup",Columns:["Id","Name","Notes"]},Required:!1,TableCell:[{SortName:"Name",CellName:"Table.Name"},{SortName:"Notes",CellName:"Table.Notes"}]},this.RoleGroup={RoleScreens:[],Id:0,Name:"",Notes:"",Code:"",SelectAll:!1},this.expandedRows={},this.RoleScreenForSelect=[]}ngOnInit(){}OpenModal(){this.GetPageInfo(),this.ResetPage()}ConvertRole(t){this.RoleScreenForSelect=[];for(let e=0;e<t.length;e++){let n=t[e];n.ParentNo==0&&(n.RoleScreens=t.filter(a=>a.ParentNo==n.Screen),this.RoleScreenForSelect.push(n))}}GetPageInfo(){this._Apiservice.get("RoleGroupEP/GetPageInfo",!1).pipe(V(this._Apiservice.destroy$)).subscribe({next:t=>{t.IsSuccess==!0&&t.Obj!=null?this.ConvertRole(t.Obj):this._AppModeService._Toastr.error(t.Message)}})}ExpandAll(){this.expandedRows=this.RoleScreenForSelect.reduce((t,e)=>(t[e.Screen]=!0)&&t,{})}CollapseAll(){this.expandedRows={}}ShowToEdite(){this.RoleGroup.Id=this._SharedObjectModelService.PageModel.model.Id,this.RoleGroup.Name=this._SharedObjectModelService.PageModel.model.Name,this.RoleGroup.Notes=this._SharedObjectModelService.PageModel.model.Notes,this.RoleGroup.SelectAll=this._SharedObjectModelService.PageModel.model.SelectAll;let t=this._SharedObjectModelService.PageModel.RoleScreens,e=this._SharedObjectModelService.PageModel.model.RoleScreens;for(let n=0;n<t.length;n++){let a=t[n],s=e.find(m=>m.Screen==a.Screen);if(s!=null){a.Visible=s.Visible;for(let m=0;m<a.ViewActions.length;m++){let _=a.ViewActions[m],x=s.ViewActions.find(T=>T.Action==_.Action);x!=null&&(_.Visible=x.Visible)}}}this.ConvertRole(t)}SelectAll(t){let e=t.target.checked;for(let n=0;n<this.RoleScreenForSelect.length;n++){let a=this.RoleScreenForSelect[n];a.Visible=e;for(let s=0;s<a.RoleScreens.length;s++){let m=a.RoleScreens[s];m.Visible=e;for(let _=0;_<m.ViewActions.length;_++){let x=m.ViewActions[_];x.Visible=e}}}}Send(){if(this.RoleGroup.Name.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("RoleGroup.Error.NameAr"));return}let t=[];for(let n=0;n<this.RoleScreenForSelect.length;n++){let a={Id:0,Name:"",Visible:!1,Screen:0,ScreenType:0,SelectAll:!1,ParentNo:0,ViewActions:[]},s=this.RoleScreenForSelect[n];s.Visible&&(a={Id:s.Id,Name:s.Name,Visible:!0,Screen:s.Screen,ScreenType:s.ScreenType,SelectAll:s.SelectAll,ParentNo:s.ParentNo,ViewActions:[]},t.push(a));for(let m=0;m<s.RoleScreens.length;m++){let _=s.RoleScreens[m];_.Visible&&(a={Id:_.Id,Name:_.Name,Visible:!0,Screen:_.Screen,ScreenType:_.ScreenType,SelectAll:_.SelectAll,ParentNo:_.ParentNo,ViewActions:[]},t.push(a));for(let x=0;x<_.ViewActions.length;x++){let T=_.ViewActions[x];T.Visible&&a.ViewActions.push(T)}if(a.Screen>0){let x=a.ViewActions}}}if(t.length<=0||t.filter(n=>n.ScreenType>=2).length==0){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("RoleGroup.Error.SelectOneRole"));return}let e={Id:this.RoleGroup.Id,Name:this.RoleGroup.Name,Code:"",SelectAll:this.RoleGroup.SelectAll,RoleScreens:t};e.Id==0&&this._Apiservice.post("RoleGroupEP/Add",e,!0).pipe(V(this._Apiservice.destroy$)).subscribe({next:n=>{n.IsSuccess==!0&&n.Obj!=null?(this._AppModeService._Toastr.success(n.Message),this.ResetPage()):this._AppModeService._Toastr.error(n.Message)}}),e.Id>0&&this._Apiservice.put("RoleGroupEP/Update",e,!0).pipe(V(this._Apiservice.destroy$)).subscribe({next:n=>{n.IsSuccess==!0&&n.Obj!=null?(this._AppModeService._Toastr.success(n.Message),this.ResetPage()):this._AppModeService._Toastr.error(n.Message)}})}ResetPage(){this.RoleGroup={SelectAll:!1,RoleScreens:[],Id:0,Name:"",Notes:"",Code:""};for(let t=0;t<this.RoleScreenForSelect.length;t++){let e=this.RoleScreenForSelect[t];e.Visible=!1;for(let n=0;n<e.RoleScreens.length;n++){let a=e.RoleScreens[n];a.Visible=!1;for(let s=0;s<a.ViewActions.length;s++){let m=a.ViewActions[s];m.Visible=!1}}}}ngOnDestroy(){this._Apiservice.destroy$.next(),this._Apiservice.destroy$.complete()}};p.\u0275fac=function(e){return new(e||p)(M(ie),M(Q),M(U))},p.\u0275cmp=O({type:p,selectors:[["app-role-group"]],standalone:!0,features:[B],decls:3,vars:6,consts:[["content",""],["dt1",""],[3,"OpenModalEvent","ShowToEditeEvent","PageTitle","TablePaging","FullScreen","GetById","DeleteUrl","OutModal"],["dataKey","Screen",3,"expandedRowKeys","value","paginator","tableStyle","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3","px-4"],[1,"col-12","col-sm-3","d-flex","flex-wrap","align-items-center"],["label","Expand All","icon","pi pi-plus","text","",1,"mx-2",3,"onClick"],["label","Collapse All","icon","pi pi-minus","text","",1,"mx-2",3,"onClick"],[1,"text-center","mx-3"],["type","checkbox","id","SelectAll",1,"form-check-input","mx-auto",3,"change","checked","value"],[1,"col-12","col-sm-3","p-2"],["id","Name","type","text",1,"form-control","shadow-none","text-center",3,"ngModelChange","ngModel","placeholder"],["id","Notes","type","text",1,"form-control","shadow-none","text-center",3,"ngModelChange","ngModel","placeholder"],[1,"col-12","col-sm-3","p-2","text-center","mx-auto"],[1,"mx-2","px-5","py-3","btn","btn-success",3,"click"],[4,"ngIf"],[1,"mx-1","pi","pi-save"],[1,"btn","btn-light","border","border-1","border-dark","px-5","py-3",3,"click"],[1,"col-2"],["type","button","pRipple","",3,"pRowToggler","text","rounded","plain","icon",4,"ngIf"],[1,"text-dark"],[1,"cursor","p-0"],[1,"form-check-label","my-3","col-12","text-center","text-transparent",3,"for"],["type","checkbox",1,"form-check-input","mx-auto",3,"change","checked","id","value"],["type","button","pRipple","",3,"pRowToggler","text","rounded","plain","icon"],["colspan","7",1,"p-0"],["dataKey","Screen",3,"value"],[1,"col-6"]],template:function(e,n){if(e&1){let a=A();l(0,"app-dynamic-component",2),f("OpenModalEvent",function(){return g(a),S(n.OpenModal())})("ShowToEditeEvent",function(){return g(a),S(n.ShowToEdite())}),r(),y(1,xe,6,7,"ng-template",null,0,j)}if(e&2){let a=F(2);u("PageTitle","RoleGroup.AddRoleGroup")("TablePaging",n.TablePaging)("FullScreen",!0)("GetById","RoleGroupEP/GetById")("DeleteUrl","RoleGroupEP/Delete")("OutModal",a)}},dependencies:[ne,ee,X,te,Z,Y,L,W,z,K,D,J,H,$,q,oe],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:transparent!important}td.cursor[_ngcontent-%COMP%], td.cursor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}"]});let o=p;return o})();export{Be as RoleGroupComponent};