import{a as p}from"./chunk-4NAPMDYE.js";import"./chunk-VMH4N7SN.js";import"./chunk-6T4APQIW.js";import"./chunk-7ELVQQOT.js";import"./chunk-I5RCRK26.js";import"./chunk-IVKAI2XA.js";import"./chunk-RNDF35OI.js";import"./chunk-VSYXDL23.js";import"./chunk-3ZAIJ4IV.js";import"./chunk-XEA7AGRV.js";import"./chunk-J2IHKXEM.js";import"./chunk-JXX5AHQH.js";import"./chunk-4BXLEV7L.js";import"./chunk-LX6PZKCM.js";import"./chunk-72L526W2.js";import"./chunk-KFOBXQQL.js";import"./chunk-4NNWIUMA.js";import"./chunk-PXT6JROT.js";import"./chunk-IFVWP3QJ.js";import{I as m}from"./chunk-OQMSVWK6.js";import{Eb as c,dc as s,eb as n,na as i,xb as r}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var S=(()=>{let e=class e{constructor(o){this._Apiservice=o,this.DeleteUrl="SaleInvoiceEP/Delete",this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"SaleInvoices",Join:!0,JoinTables:["Storages Storage","Clients Client"],JoinConditions:["T.StoreId = Storage.Id","T.ClientId = Client.Id"],Columns:["T.Id","T.DocNo","T.DocDate","Storage.Name AS StoreName","Client.Name AS ClientName","T.TotalInvoice","T.TotalDisc","T.TotalDiscRate","T.TotalInvoiceAfterDisc","T.TotalInvoiceVatAmount","T.TotalVatRate","T.TotalInvoiceAfterVat","T.Notes"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"ClientName",CellName:"SaleInvoice.Client",ExistSearchField:"Client.Name"},{SortName:"StoreName",CellName:"BuyInvoice.Storage",ExistSearchField:"Storage.Name"},{SortName:"TotalInvoice",CellName:"Table.Total"},{SortName:"TotalDisc",CellName:"Table.Discount"},{SortName:"TotalInvoiceVatAmount",CellName:"Table.Vat"},{SortName:"TotalInvoiceAfterVat",CellName:"Table.NetTotal"},{SortName:"Notes",CellName:"Table.Notes",ExistSearchField:"T.Notes"}]}}ngOnInit(){this._Apiservice.environment.SystemUpdate==!1&&(this.DeleteUrl="")}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)(n(m))},e.\u0275cmp=i({type:e,selectors:[["app-sale-invoice"]],standalone:!0,features:[s],decls:1,vars:10,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","GlResponse","AddUrl","UpdateUrl","DeleteUrl","GetById","PrintUrl"]],template:function(t,l){t&1&&c(0,"app-dynamic-invoice",0),t&2&&r("SignalR",!0)("PageTitle","SaleInvoice.SaleInvoiceTitle")("ScreenName","SaleInvoice")("TablePaging",l.TablePaging)("GlResponse",!0)("AddUrl","SaleInvoiceEP/Add")("UpdateUrl","SaleInvoiceEP/Update")("DeleteUrl",l.DeleteUrl)("GetById","SaleInvoiceEP/GetById")("PrintUrl","SaleInvoice")},dependencies:[p],styles:[`input.form-check-input{width:2rem!important;height:2rem!important}label{cursor:pointer}.nav-pills .nav-link.active{background-color:#172d50!important;color:#fff!important;box-shadow:none!important}.nav-pills .nav-link{box-shadow:3px 5px 3px 1px #eee;border:1px solid #eee}table p{word-wrap:break-word!important;word-spacing:wrap!important;overflow-wrap:break-word!important}#editing-view-port{overflow-wrap:break-word!important}svg{cursor:pointer}.ProductButton button{background-color:#fff!important;color:#333!important}
`],encapsulation:2});let a=e;return a})();export{S as SaleInvoiceComponent};