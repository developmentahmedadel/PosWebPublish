import{a as i}from"./chunk-IKOITUIZ.js";import"./chunk-BZPR73YG.js";import"./chunk-D7RC4W4V.js";import"./chunk-R22ILC4E.js";import"./chunk-JSAFLJSP.js";import"./chunk-EDAXKXER.js";import"./chunk-VSYXDL23.js";import"./chunk-ZFVZF6NJ.js";import"./chunk-CCUNZCGD.js";import"./chunk-6KCN6SOZ.js";import"./chunk-OFCF557E.js";import"./chunk-PHRVA4P6.js";import"./chunk-5KZZH3PQ.js";import"./chunk-ENJ54XRO.js";import"./chunk-ZWNSIIKM.js";import"./chunk-KZSRC3MR.js";import"./chunk-TQD4QWDO.js";import"./chunk-JS2GAZTB.js";import"./chunk-WSHLQXZC.js";import{Eb as o,dc as l,na as r,xb as n}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var T=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",ReportName:"TreasuryIn",GlobalData:{BranchFilter:!0,Url:"Global/GetAll",TableName:"TreasuryOut",Join:!0,JoinTables:["BankAccounts BankAccount","Treasury Tre"],JoinConditions:["T.BankAccountId = BankAccount.Id","T.TreasuryId = Tre.Id"],Columns:["T.Id","T.DocNo","T.DocDate","T.TotalAmount","T.Notes","BankAccount.Name AS BankAccountName","Tre.Name AS TreasuryName"]},Required:!1,TableCell:[{SortName:"DocNo",CellName:"Table.DocNo"},{SortName:"DocDate",CellName:"Table.DocDate",CellDateTime:!0},{SortName:"TotalAmount",CellName:"Table.Total"},{SortName:"BankAccountName",CellName:"MoneyIn.Bank",ExistSearchField:"BankAccount.Name"},{SortName:"TreasuryName",CellName:"MoneyIn.Treasury",ExistSearchField:"Tre.Name"},{SortName:"Notes",CellName:"Table.Notes",ExistSearchField:"T.Notes"}]}}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["app-treasury-out"]],standalone:!0,features:[l],decls:1,vars:9,consts:[[3,"SignalR","PageTitle","ScreenName","TablePaging","AddUrl","UpdateUrl","DeleteUrl","GetById","PrintUrl"]],template:function(t,c){t&1&&o(0,"app-dynamic-cash-receipt",0),t&2&&n("SignalR",!0)("PageTitle","MoneyOut.MoneyOut")("ScreenName","TreasuryOut")("TablePaging",c.TablePaging)("AddUrl","TreasuryOutEP/Add")("UpdateUrl","TreasuryOutEP/Update")("DeleteUrl","TreasuryOutEP/Delete")("GetById","TreasuryOutEP/GetById")("PrintUrl","TreasuryOut")},dependencies:[i],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}"]});let a=e;return a})();export{T as TreasuryOutComponent};