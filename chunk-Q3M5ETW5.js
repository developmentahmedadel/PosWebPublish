import{a as z,b as U}from"./chunk-FF7KVUSC.js";import"./chunk-VNF6RC2R.js";import"./chunk-O7NQZYPY.js";import"./chunk-EWI5J5KH.js";import{d as W}from"./chunk-X4LTGZKH.js";import{c as $,d as k,g as j}from"./chunk-OFZNSK7N.js";import{I as R,N as L,Q as O,_ as G,c as b,d as P}from"./chunk-CXJLKQ4R.js";import{$b as D,Cb as t,Db as e,Eb as E,Ib as F,Mb as C,Nb as S,Wb as y,X as T,Xb as u,Yb as N,Zb as o,ac as B,bc as M,db as i,dc as V,eb as x,na as w,nc as h,oc as v,vb as A,xa as _,xb as s,ya as g,za as I}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";function Y(r,l){r&1&&(I(),t(0,"svg",21),E(1,"path",22),e())}function q(r,l){r&1&&(I(),t(0,"svg",23),E(1,"path",22),e())}function H(r,l){if(r&1&&(t(0,"span"),u(1),e()),r&2){let m=S(2).$implicit;i(),o(" ",m.NetBalance," ")}}function J(r,l){if(r&1&&(t(0,"span",26),u(1),e()),r&2){let m=S(2).$implicit;i(),o(" ( ",m.NetBalance," ) ")}}function K(r,l){if(r&1&&(t(0,"span"),A(1,H,2,1,"span",24)(2,J,2,1,"span",25),e()),r&2){let m=S().$implicit;i(),s("ngIf",m.Level==4),i(),s("ngIf",m.Level==5)}}function Q(r,l){if(r&1&&(t(0,"span"),u(1),e()),r&2){let m=S().$implicit;i(),o(" ",m.NetBalance," ")}}function X(r,l){if(r&1&&(t(0,"tr")(1,"td"),u(2),e(),t(3,"td"),A(4,K,3,2,"span",24),e(),t(5,"td"),A(6,Q,2,1,"span",24),e()()),r&2){let m=l.$implicit;i(2),o(" ",m.AccTreeName," "),i(2),s("ngIf",m.IncomeType==2),i(2),s("ngIf",m.IncomeType==1)}}var p0=(()=>{let l=class l{constructor(p,a){this._AppModeService=p,this._Apiservice=a,this.SearchModel={FromDate:"",ToDate:""},this.Arr=[],this.CostAvailableInvetory=0,this.CostSaleInvetory=0,this.GrossProfit=0,this.NetProfitBeforVat=0,this.VatAmount=0,this.NetProfitAfterVat=0,this.FirstPeriod=0,this.StorageBalance=0,this.LastSorageBalance=0,this.SalesAmount=0,this.ReturnSalesAmount=0,this.SalesAllowedAmount=0,this.SalesDiscountAmount=0,this.NetSale=0,this.BuysAmount=0,this.ReturnBuysAmount=0,this.BuysAllowedAmount=0,this.BuysDiscountAmount=0,this.BuysExpenses=0,this.NetBuy=0,this.TotalErad=0,this.TotalMasrof=0,this.InitGlReceptStorageBalance=0}ngOnInit(){this.SearchModel.FromDate=new Date(this._Apiservice.FromDate()),this.SearchModel.ToDate=new Date(this._Apiservice.ToNowDate())}Search(){if(this.SearchModel.FromDate==null||`${this.SearchModel.FromDate}`.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Interval.Error.FromDate"));return}if(this.SearchModel.ToDate==null||`${this.SearchModel.ToDate}`.trim()==""){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("Interval.Error.ToDate"));return}let p={FromDate:this._Apiservice.ConvertISODate(this.SearchModel.FromDate),ToDate:this._Apiservice.ConvertISODate(this.SearchModel.ToDate)};if(this._Apiservice.ValidateDate(p.FromDate,p.ToDate)==!1){this._AppModeService._Toastr.error(this._AppModeService._Translate.instant("StatementOfFinancial.Error.SmallDate"));return}this._Apiservice.post("ReportViewEP/IncomeStatement",p,!0).pipe(T(this._Apiservice.destroy$)).subscribe({next:a=>{a.IsSuccess==!0?(this.Arr=a.List,this.CostAvailableInvetory=a.CostAvailableInvetory,this.CostSaleInvetory=a.CostSaleInvetory,this.GrossProfit=a.GrossProfit,this.NetProfitBeforVat=a.NetProfitBeforVat,this.VatAmount=a.VatAmount,this.NetProfitAfterVat=a.NetProfitAfterVat,this.FirstPeriod=a.FirstPeriod,this.StorageBalance=a.StorageBalance,this.LastSorageBalance=a.LastSorageBalance,this.SalesAmount=a.SalesAmount,this.ReturnSalesAmount=a.ReturnSalesAmount,this.SalesAllowedAmount=a.SalesAllowedAmount,this.SalesDiscountAmount=a.SalesDiscountAmount,this.NetSale=a.NetSale,this.BuysAmount=a.BuysAmount,this.ReturnBuysAmount=a.ReturnBuysAmount,this.BuysAllowedAmount=a.BuysAllowedAmount,this.BuysDiscountAmount=a.BuysDiscountAmount,this.BuysExpenses=a.BuysExpenses,this.NetBuy=a.NetBuy,this.TotalErad=a.TotalErad,this.TotalMasrof=a.TotalMasrof,this.InitGlReceptStorageBalance=a.InitGlReceptStorageBalance):this._AppModeService._Toastr.error(a.Message)}})}ngOnDestroy(){this._Apiservice.destroy$.next(),this._Apiservice.destroy$.complete()}};l.\u0275fac=function(a){return new(a||l)(x(j),x(R))},l.\u0275cmp=w({type:l,selectors:[["app-income-statement"]],standalone:!0,features:[V],decls:104,vars:49,consts:[["ddddd",""],["dddd",""],["clas","bg-light"],["id","container-page",1,"container-page","me-2"],[1,"page-wrapper"],[1,"main-content"],[1,"inner-box"],[1,"title-box","font-weight-normal"],[1,"my-3","row","align-items-end","px-3","PrintNone"],[1,"col-12","col-md-6","col-lg-2","p-2"],[1,"my-1"],[1,"formdate"],["placeholder","D-M-Y","dateFormat","dd-mm-yy","hourFormat","12",1,"shadow-none","text-center","w-100",3,"ngModelChange","showClear","appendTo","showOtherMonths","ngModel","showTime"],[1,"col-12","col-md-6","col-lg-3","p-2","text-center"],[1,"btn","btn-success","my-2","my-md-0","mx-3","px-5","shadow-none","Save",3,"click"],["width","35","height","35","fill","#198754","class","bi bi-geo-fill","viewBox","0 0 16 16",4,"ngIf"],["width","35","height","35","fill","#dc3545","class","bi bi-geo-fill","viewBox","0 0 16 16",4,"ngIf"],[1,"table-responsive","mt-4"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[1,"d-none"],["width","35","height","35","fill","#198754","viewBox","0 0 16 16",1,"bi","bi-geo-fill"],["fill-rule","evenodd","d","M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"],["width","35","height","35","fill","#dc3545","viewBox","0 0 16 16",1,"bi","bi-geo-fill"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(a,n){if(a&1){let c=F();t(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7),u(6),h(7,"translate"),e(),t(8,"div",8)(9,"div",9)(10,"p",10),u(11),h(12,"translate"),e(),t(13,"div",11,0)(15,"p-calendar",12),M("ngModelChange",function(d){return _(c),B(n.SearchModel.FromDate,d)||(n.SearchModel.FromDate=d),g(d)}),e()()(),t(16,"div",9)(17,"p",10),u(18),h(19,"translate"),e(),t(20,"div",11,1)(22,"p-calendar",12),M("ngModelChange",function(d){return _(c),B(n.SearchModel.ToDate,d)||(n.SearchModel.ToDate=d),g(d)}),e()()(),t(23,"div",13)(24,"button",14),C("click",function(){return _(c),g(n.Search())}),u(25),h(26,"translate"),e(),A(27,Y,2,0,"svg",15)(28,q,2,0,"svg",16),e()(),t(29,"div",17)(30,"table",18)(31,"thead")(32,"th"),u(33," \u0627\u0644\u0628\u064A\u0627\u0646 "),e(),t(34,"th"),u(35," \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u062C\u0632\u0626\u0649 "),e(),t(36,"th"),u(37," \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0643\u0644\u064A "),e()(),t(38,"tbody"),A(39,X,7,3,"tr",19),E(40,"tr"),e()()(),t(41,"div",20)(42,"p"),u(43," \u0627\u0644\u0645\u0639\u0637\u064A\u0627\u062A "),e(),t(44,"p"),u(45),e(),t(46,"p"),u(47),e(),t(48,"p"),u(49),e(),t(50,"p"),u(51),e(),t(52,"p"),u(53),e(),t(54,"p"),u(55),e(),t(56,"p"),u(57,"----------------------------------------------------------------------------------------------------------------------------"),e(),t(58,"p"),u(59," \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A "),e(),t(60,"p"),u(61),e(),t(62,"p"),u(63),e(),t(64,"p"),u(65),e(),t(66,"p"),u(67),e(),t(68,"p"),u(69),e(),t(70,"p"),u(71),e(),t(72,"p"),u(73),e(),t(74,"p"),u(75,"----------------------------------------------------------------------------------------------------------------------------"),e(),t(76,"p"),u(77," \u0627\u0644\u0645\u062E\u0632\u0648\u0646 "),e(),t(78,"p"),u(79),e(),t(80,"p"),u(81),e(),t(82,"p"),u(83),e(),t(84,"p"),u(85),e(),t(86,"p"),u(87,"----------------------------------------------------------------------------------------------------------------------------"),e(),t(88,"p"),u(89,"----------------------------------------------------------------------------------------------------------------------------"),e(),t(90,"p"),u(91),e(),t(92,"p"),u(93),e(),t(94,"p"),u(95),e(),t(96,"p"),u(97),e(),t(98,"p"),u(99),e(),t(100,"p"),u(101),e(),t(102,"p"),u(103),e()()()()()()()}if(a&2){let c=y(14),f=y(21);i(6),o(" ",v(7,41,"IncomeStatement.IncomeStatement")," "),i(5),o(" ",v(12,43,"SupplierAccount.FromDate"),""),i(4),s("showClear",n.SearchModel.FromDate!=null&&n.SearchModel.FromDate!="")("appendTo",c)("showOtherMonths",!0),D("ngModel",n.SearchModel.FromDate),s("showTime",!0),i(3),o(" ",v(19,45,"SupplierAccount.ToDate"),""),i(4),s("showClear",n.SearchModel.ToDate!=null&&n.SearchModel.ToDate!="")("appendTo",f)("showOtherMonths",!0),D("ngModel",n.SearchModel.ToDate),s("showTime",!0),i(3),N(v(26,47,"Model.Search")),i(2),s("ngIf",n.NetProfitAfterVat>=0),i(),s("ngIf",n.NetProfitAfterVat<0),i(11),s("ngForOf",n.Arr),i(6),o(" \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.SalesAmount," "),i(2),o(" \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.ReturnSalesAmount," "),i(2),o(" \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.SalesAllowedAmount," "),i(2),o(" \u0627\u0644\u062E\u0635\u0645 \u0639\u0644\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.SalesDiscountAmount," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.NetSale," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A = \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A - ( \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A + \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A + \u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0628\u0647) => ",n.NetSale," "),i(6),o(" \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.BuysAmount," "),i(2),o(" \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.ReturnBuysAmount," "),i(2),o(" \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.BuysAllowedAmount," "),i(2),o(" \u0627\u0644\u062E\u0635\u0645 \u0639\u0644\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.BuysDiscountAmount," "),i(2),o(" \u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.BuysExpenses," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.NetBuy," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A = ( \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A ) - ( \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0643\u062A\u0633\u0628 ) => ",n.NetBuy,""),i(6),o(" \u0627\u0648\u0644 \u0627\u0644\u0645\u062F\u0629 => ",n.FirstPeriod," "),i(2),o(" \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u062F\u0629 => ",n.StorageBalance," "),i(2),o(" \u0627\u062E\u0631 \u0627\u0644\u0645\u062F\u0629 => ",n.LastSorageBalance," "),i(2),o(" \u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A = \u0645\u062E\u0632\u0648\u0646 \u0627\u0648\u0644 + \u062E\u0644\u0627\u0644 - \u0628\u0636\u0627\u0639\u0629 \u0627\u062E\u0631 \u0627\u0644\u0645\u062F\u0629 => ",n.CostSaleInvetory," "),i(6),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A = \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A - ( \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A + \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A + \u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0628\u0647 ) => ",n.NetSale," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A = ( \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A ) - ( \u0645\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0643\u062A\u0633\u0628 ) => ",n.NetBuy,""),i(2),o(" \u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A = \u0645\u062E\u0632\u0648\u0646 \u0627\u0648\u0644 + \u062E\u0644\u0627\u0644 - \u0628\u0636\u0627\u0639\u0629 \u0627\u062E\u0631 \u0627\u0644\u0645\u062F\u0629 => ",n.CostSaleInvetory," "),i(2),o(" \u0645\u062C\u0645\u0644 \u0627\u0644\u0631\u0628\u062D = \u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A - \u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A => ",n.GrossProfit," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D \u0642\u0628\u0644 \u0627\u0644\u0636\u0631\u064A\u0628\u0629 = \u0645\u062C\u0645\u0644 \u0627\u0644\u0631\u0628\u062D + \u0627\u064A\u0631\u0627\u062F\u0627\u062A - \u0645\u0635\u0631\u0648\u0641\u0627\u062A => ",n.NetProfitBeforVat," "),i(2),o(" \u0627\u0644\u0636\u0631\u064A\u0628\u0629 = \u0627\u0644\u0636\u0631\u064A\u0628\u0629 \u0639\u0644\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A - \u0627\u0644\u0636\u0631\u064A\u0628\u0629 \u0639\u0644\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A => ",n.VatAmount," "),i(2),o(" \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D \u0628\u0639\u062F \u0627\u0644\u0636\u0631\u064A\u0628\u0629 = \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D \u0642\u0628\u0644 \u0627\u0644\u0636\u0631\u064A\u0628\u0629 - \u0635\u0627\u0641\u064A \u0627\u0644\u0636\u0631\u064A\u0628\u0629 => ",n.NetProfitAfterVat," ")}},dependencies:[U,z,k,$,b,P,G,L,O,W]});let r=l;return r})();export{p0 as IncomeStatementComponent};