import{a as r}from"./chunk-AOTTFTHW.js";import"./chunk-6T4APQIW.js";import"./chunk-N7IVJGNV.js";import"./chunk-BSPLJHNP.js";import"./chunk-GCFZKOIQ.js";import"./chunk-QI74C7BQ.js";import"./chunk-PWIKXZ6E.js";import"./chunk-VTL7OYUD.js";import"./chunk-73GIXY73.js";import"./chunk-WL6N6SLT.js";import"./chunk-64BGN5RD.js";import"./chunk-34JSETBR.js";import"./chunk-QFTVA365.js";import"./chunk-LNYZIAUP.js";import"./chunk-HYE6JRVA.js";import"./chunk-YTUM3KNK.js";import"./chunk-BEBWNCBB.js";import"./chunk-SLSEXWRZ.js";import"./chunk-4L6P5Z5M.js";import"./chunk-JM67XKKX.js";import{Db as n,cc as i,na as o,wb as l}from"./chunk-VIO7ZK3G.js";import"./chunk-3EYC4JTX.js";var s=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"SaleInvoices",Join:!0,JoinTables:["Storages Storage","Clients Client"],JoinConditions:["T.StoreId = Storage.Id","T.ClientId = Client.Id"],Columns:["T.Id","T.DocNo","T.DocDate","Storage.Name AS StoreName","Client.Name AS ClientName","T.TotalInvoice","T.TotalDisc","T.TotalInvoiceVatAmount","T.TotalInvoiceAfterVat","T.Notes"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"ClientName",CellName:"SaleInvoice.Client",ExistSearchField:"Client.Name"},{SortName:"StoreName",CellName:"BuyInvoice.Storage",ExistSearchField:"Storage.Name"},{SortName:"TotalInvoice",CellName:"Table.Total"},{SortName:"TotalDisc",CellName:"Table.Discount"},{SortName:"TotalInvoiceVatAmount",CellName:"Table.Vat"},{SortName:"TotalInvoiceAfterVat",CellName:"Table.NetTotal"},{SortName:"Notes",CellName:"Table.Notes"}]}}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o({type:e,selectors:[["app-sale-invoice"]],standalone:!0,features:[i],decls:1,vars:9,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","AddUrl","UpdateUrl","DeleteUrl","GetById","PrintUrl"]],template:function(t,m){t&1&&n(0,"app-dynamic-invoice",0),t&2&&l("SignalR",!0)("PageTitle","SaleInvoice.SaleInvoiceTitle")("ScreenName","SaleInvoice")("TablePaging",m.TablePaging)("AddUrl","SaleInvoiceEP/Add")("UpdateUrl","SaleInvoiceEP/Update")("DeleteUrl","SaleInvoiceEP/Delete")("GetById","SaleInvoiceEP/GetById")("PrintUrl","SaleInvoice")},dependencies:[r],styles:[`input.form-check-input{width:2rem!important;height:2rem!important}label{cursor:pointer}.nav-pills .nav-link.active{background-color:#172d50!important;color:#fff!important;box-shadow:none!important}.nav-pills .nav-link{box-shadow:3px 5px 3px 1px #eee;border:1px solid #eee}table p{word-wrap:break-word!important;word-spacing:wrap!important;overflow-wrap:break-word!important}#editing-view-port{overflow-wrap:break-word!important}svg{cursor:pointer}.ProductButton button{background-color:#fff!important;color:#333!important}
`],encapsulation:2});let a=e;return a})();export{s as SaleInvoiceComponent};