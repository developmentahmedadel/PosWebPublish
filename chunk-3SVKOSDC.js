import{a as i}from"./chunk-NAS5TTWF.js";import"./chunk-6T4APQIW.js";import"./chunk-TB4TCGTI.js";import"./chunk-EHX2YHES.js";import"./chunk-7N7H2ETQ.js";import"./chunk-QI74C7BQ.js";import"./chunk-PWIKXZ6E.js";import"./chunk-S52O5BXQ.js";import"./chunk-KOJPIKRQ.js";import"./chunk-WL6N6SLT.js";import"./chunk-JZVD3M6G.js";import"./chunk-34JSETBR.js";import"./chunk-QFTVA365.js";import"./chunk-LNYZIAUP.js";import"./chunk-HYE6JRVA.js";import"./chunk-DVVEKPVL.js";import"./chunk-GTD5WNPP.js";import"./chunk-M24M3PNC.js";import"./chunk-4L6P5Z5M.js";import"./chunk-JM67XKKX.js";import{Db as l,cc as r,na as o,wb as n}from"./chunk-VIO7ZK3G.js";import"./chunk-3EYC4JTX.js";var T=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"ReturnBuyInvoice",Join:!0,JoinTables:["Storages Storage","Suppliers Supplier"],JoinConditions:["T.StoreId = Storage.Id","T.SupplierId = Supplier.Id"],Columns:["T.Id","T.DocNo","T.BuyInvoiceDocNo","T.DocDate","Storage.Name AS StoreName","Supplier.Name AS SupplierName","T.TotalInvoice","T.TotalDisc","T.TotalInvoiceVatAmount","T.TotalInvoiceAfterVat","T.Notes"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"BuyInvoiceDocNo",CellName:"Table.BuyInvoiceReturnNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"SupplierName",CellName:"BuyInvoice.Supplier",ExistSearchField:"Supplier.Name"},{SortName:"StoreName",CellName:"BuyInvoice.Storage",ExistSearchField:"Storage.Name"},{SortName:"TotalInvoice",CellName:"Table.Total"},{SortName:"TotalDisc",CellName:"Table.Discount"},{SortName:"TotalInvoiceVatAmount",CellName:"Table.Vat"},{SortName:"TotalInvoiceAfterVat",CellName:"Table.NetTotal"},{SortName:"Notes",CellName:"Table.Notes"}]}}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o({type:e,selectors:[["app-return-buy-invoice"]],standalone:!0,features:[r],decls:1,vars:10,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","PrintUrl","InvoiceName","AddUrl","UpdateUrl","DeleteUrl","GetById"]],template:function(t,u){t&1&&l(0,"app-dynamic-return-invoice",0),t&2&&n("SignalR",!0)("PageTitle","ReturnBuyInvoice.ReturnBuyInvoice")("ScreenName","ReturnBuyInvoice")("TablePaging",u.TablePaging)("PrintUrl","ReturnBuyInvoice")("InvoiceName","BuyInvoice")("AddUrl","ReturnBuyInvoiceEP/Add")("UpdateUrl","ReturnBuyInvoiceEP/Update")("DeleteUrl","ReturnBuyInvoiceEP/Delete")("GetById","ReturnBuyInvoiceEP/GetById")},dependencies:[i],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}.Info[_ngcontent-%COMP%]{border:1px solid #007bff;border-radius:5px;padding:10px}"]});let a=e;return a})();export{T as ReturnBuyInvoiceComponent};