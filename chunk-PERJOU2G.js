import{a as p}from"./chunk-UVTB2GNB.js";import"./chunk-BZPR73YG.js";import"./chunk-D7RC4W4V.js";import"./chunk-R22ILC4E.js";import"./chunk-JSAFLJSP.js";import"./chunk-EDAXKXER.js";import"./chunk-VSYXDL23.js";import"./chunk-ZFVZF6NJ.js";import"./chunk-CCUNZCGD.js";import"./chunk-6KCN6SOZ.js";import"./chunk-OFCF557E.js";import"./chunk-PHRVA4P6.js";import"./chunk-5KZZH3PQ.js";import"./chunk-ENJ54XRO.js";import"./chunk-ZWNSIIKM.js";import"./chunk-KZSRC3MR.js";import"./chunk-TQD4QWDO.js";import"./chunk-JS2GAZTB.js";import{I as m}from"./chunk-WSHLQXZC.js";import{Eb as c,dc as u,eb as l,na as n,xb as r}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var d=(()=>{let e=class e{constructor(o){this._Apiservice=o,this.DeleteUrl="ReturnBuyInvoiceEP/Delete",this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"ReturnBuyInvoice",Join:!0,JoinTables:["Storages Storage","Suppliers Supplier"],JoinConditions:["T.StoreId = Storage.Id","T.SupplierId = Supplier.Id"],Columns:["T.Id","T.DocNo","T.BuyInvoiceDocNo","T.DocDate","Storage.Name AS StoreName","Supplier.Name AS SupplierName","T.TotalInvoice","T.TotalDisc","T.TotalDiscRate","T.TotalInvoiceAfterDisc","T.TotalInvoiceVatAmount","T.TotalVatRate","T.TotalInvoiceAfterVat","T.Notes"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"BuyInvoiceDocNo",CellName:"Table.BuyInvoiceReturnNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"SupplierName",CellName:"BuyInvoice.Supplier",ExistSearchField:"Supplier.Name"},{SortName:"StoreName",CellName:"BuyInvoice.Storage",ExistSearchField:"Storage.Name"},{SortName:"TotalInvoice",CellName:"Table.Total"},{SortName:"TotalDisc",CellName:"Table.Discount"},{SortName:"TotalInvoiceVatAmount",CellName:"Table.Vat"},{SortName:"TotalInvoiceAfterVat",CellName:"Table.NetTotal"},{SortName:"Notes",CellName:"Table.Notes",ExistSearchField:"T.Notes"}]}}ngOnInit(){this._Apiservice.environment.SystemUpdate==!1&&(this.DeleteUrl="")}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)(l(m))},e.\u0275cmp=n({type:e,selectors:[["app-return-buy-invoice"]],standalone:!0,features:[u],decls:1,vars:11,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","GlResponse","PrintUrl","InvoiceName","AddUrl","UpdateUrl","DeleteUrl","GetById"]],template:function(t,i){t&1&&c(0,"app-dynamic-return-invoice",0),t&2&&r("SignalR",!0)("PageTitle","ReturnBuyInvoice.ReturnBuyInvoice")("ScreenName","ReturnBuyInvoice")("TablePaging",i.TablePaging)("GlResponse",!0)("PrintUrl","ReturnBuyInvoice")("InvoiceName","BuyInvoice")("AddUrl","ReturnBuyInvoiceEP/Add")("UpdateUrl","ReturnBuyInvoiceEP/Update")("DeleteUrl",i.DeleteUrl)("GetById","ReturnBuyInvoiceEP/GetById")},dependencies:[p],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}.Info[_ngcontent-%COMP%]{border:1px solid #007bff;border-radius:5px;padding:10px}"]});let a=e;return a})();export{d as ReturnBuyInvoiceComponent};