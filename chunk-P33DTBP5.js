import{j as o}from"./chunk-ZLLO2CPJ.js";import"./chunk-C6Q6MUFU.js";import"./chunk-VSYXDL23.js";import"./chunk-3ZAIJ4IV.js";import"./chunk-5VO5RH76.js";import"./chunk-2W5TGM3Y.js";import"./chunk-CIOY3TMC.js";import"./chunk-7XIF7JPY.js";import"./chunk-VB2SDBDM.js";import"./chunk-I6L65D3G.js";import"./chunk-KLFZIA63.js";import"./chunk-7FMAHILW.js";import"./chunk-IBMBVOFU.js";import"./chunk-DLDN7W7Q.js";import"./chunk-XINR554T.js";import{Eb as i,dc as u,na as r,xb as n}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var d=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{Url:"Global/GetAll",TableName:"Clients",Columns:["Id","Name","Code","VatNumber","PhoneNumber","Address","[Closed]","CreatedById","ModifyById","CreatedByName"]},Required:!1,TableCell:[{SortName:"Name",CellName:"Table.Name"},{SortName:"VatNumber",CellName:"Branches.VatNumber"},{SortName:"PhoneNumber",CellName:"BuyOffer.PhoneNumber"},{SortName:"Address",CellName:"BuyOffer.Address"},{SortName:"Closed",CellName:"BuyOffer.NotDealing",DataBoolean:!0}]},this.Data=[{Type:"Tabs",Tabs:[{TabName:"Basic Data",TabData:[{Type:"input",InputType:"text",Required:!0,LableName:"Name",MsError:"",BindValue:"",DataValue:"Name"},{Type:"input",InputType:"text",Required:!1,LableName:"Branches.VatNumber",MsError:"",BindValue:"",DataValue:"VatNumber"},{Type:"input",InputType:"text",Required:!1,LableName:"BuyOffer.PhoneNumber",MsError:"",BindValue:"",DataValue:"PhoneNumber"},{Type:"input",InputType:"text",Required:!1,LableName:"BuyOffer.Address",MsError:"",BindValue:"",DataValue:"Address"},{Type:"input",InputType:"checkbox",Required:!1,LableName:"BuyOffer.NotDealing",MsError:"",BindValue:!1,DataValue:"Closed"}]},{Type:"Tabs",TabName:"Files",TabData:[{Type:"Details",DataValue:"Files",DetailsColumn:[{ColumnName:"Table.Name",Type:"input",InputType:"text",Required:!1,LableName:"Table.Name",MsError:"",BindValue:"",DataValue:"Name"},{ColumnName:"Table.File",Type:"inputFile",InputType:"file",Required:!0,LableName:"Table.File",FileName:"",FileType:"",FileBase64:"",MsError:"",BindValue:"",DataValue:"File"},{ColumnName:"Table.Notes",Type:"input",InputType:"text",Required:!1,LableName:"Table.Notes",MsError:"",BindValue:"",DataValue:"Notes"}],DetailsData:[]}]}]}]}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=r({type:e,selectors:[["app-client"]],standalone:!0,features:[u],decls:1,vars:7,consts:[[3,"PageTitle","DataView","TablePaging","AddUrl","UpdateUrl","GetById","DeleteUrl"]],template:function(a,l){a&1&&i(0,"app-dynamic-component",0),a&2&&n("PageTitle","SaleInvoice.Client")("DataView",l.Data)("TablePaging",l.TablePaging)("AddUrl","ClientEP/Add")("UpdateUrl","ClientEP/Update")("GetById","ClientEP/GetById")("DeleteUrl","ClientEP/Delete")},dependencies:[o],styles:["input.form-check-input[_ngcontent-%COMP%]{width:2rem!important;height:2rem!important}"]});let t=e;return t})();export{d as ClientComponent};