import{a as i}from"./chunk-DTBDAYNO.js";import"./chunk-N7IVJGNV.js";import"./chunk-BSPLJHNP.js";import"./chunk-GCFZKOIQ.js";import"./chunk-QI74C7BQ.js";import"./chunk-PWIKXZ6E.js";import"./chunk-VTL7OYUD.js";import"./chunk-73GIXY73.js";import"./chunk-WL6N6SLT.js";import"./chunk-64BGN5RD.js";import"./chunk-34JSETBR.js";import"./chunk-QFTVA365.js";import"./chunk-LNYZIAUP.js";import"./chunk-HYE6JRVA.js";import"./chunk-YTUM3KNK.js";import"./chunk-BEBWNCBB.js";import"./chunk-SLSEXWRZ.js";import"./chunk-4L6P5Z5M.js";import"./chunk-JM67XKKX.js";import{Db as o,cc as l,na as r,wb as n}from"./chunk-VIO7ZK3G.js";import"./chunk-3EYC4JTX.js";var T=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",ReportName:"TreasuryIn",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"TreasuryOut",Join:!0,JoinTables:["BankAccounts BankAccount","Treasury Tre"],JoinConditions:["T.BankAccountId = BankAccount.Id","T.TreasuryId = Tre.Id"],Columns:["T.Id","T.DocNo","T.DocDate","T.TotalAmount","T.Notes","BankAccount.Name AS BankAccountName","Tre.Name AS TreasuryName"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"TotalAmount",CellName:"Table.Total"},{SortName:"BankAccountName",CellName:"MoneyIn.Bank",ExistSearchField:"BankAccount.Name"},{SortName:"TreasuryName",CellName:"MoneyIn.Treasury",ExistSearchField:"Tre.Name"},{SortName:"Notes",CellName:"Table.Notes"}]}}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["app-treasury-out"]],standalone:!0,features:[l],decls:1,vars:9,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","AddUrl","UpdateUrl","DeleteUrl","GetById","PrintUrl"]],template:function(t,c){t&1&&o(0,"app-dynamic-cash-receipt",0),t&2&&n("SignalR",!0)("PageTitle","MoneyOut.MoneyOut")("ScreenName","TreasuryOut")("TablePaging",c.TablePaging)("AddUrl","TreasuryOutEP/Add")("UpdateUrl","TreasuryOutEP/Update")("DeleteUrl","TreasuryOutEP/Delete")("GetById","TreasuryOutEP/GetById")("PrintUrl","TreasuryOut")},dependencies:[i],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}"]});let a=e;return a})();export{T as TreasuryOutComponent};