import{j as m}from"./chunk-ZLLO2CPJ.js";import"./chunk-C6Q6MUFU.js";import"./chunk-VSYXDL23.js";import"./chunk-3ZAIJ4IV.js";import"./chunk-5VO5RH76.js";import"./chunk-2W5TGM3Y.js";import"./chunk-CIOY3TMC.js";import"./chunk-7XIF7JPY.js";import"./chunk-VB2SDBDM.js";import"./chunk-I6L65D3G.js";import"./chunk-KLFZIA63.js";import"./chunk-7FMAHILW.js";import"./chunk-IBMBVOFU.js";import"./chunk-DLDN7W7Q.js";import"./chunk-XINR554T.js";import{Eb as o,dc as i,na as n,xb as r}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var u=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{Url:"Global/GetAll",TableName:"Partners",BranchFilter:!0,Join:!0,JoinTables:["Employee Emp"],JoinConditions:["T.EmployeeId = Emp.Id"],Columns:["T.Id","Emp.Name AS EmployeeName","T.Rate"]},Required:!1,TableCell:[{SortName:"EmployeeName",CellName:"Partners.Employee",ExistSearchField:"Emp.Name"},{SortName:"Rate",CellName:"Partners.Rate"}]},this.Data=[{Type:"Tabs",Tabs:[{TabName:"Basic Data",TabData:[{Type:"DropDownApi",Required:!0,LableName:"Partners.Employee",BindValue:null,DataValue:"EmployeeId",BindValueName:"",DataValueName:"EmployeeName",GlobalData:{Conditions:"Block = 0",DataArr:[],Url:"Global/GetAll",TableName:"Employee",Columns:["Id","Name"]}},{Type:"input",InputType:"number",Required:!0,LableName:"Partners.Rate",MsError:"",BindValue:"",DataValue:"Rate"}]}]}]}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["app-partners"]],standalone:!0,features:[i],decls:1,vars:7,consts:[[3,"PageTitle","DataView","TablePaging","AddUrl","UpdateUrl","DeleteUrl","GetById"]],template:function(a,l){a&1&&o(0,"app-dynamic-component",0),a&2&&r("PageTitle","Partners.Partners")("DataView",l.Data)("TablePaging",l.TablePaging)("AddUrl","PartnersEP/Add")("UpdateUrl","PartnersEP/Update")("DeleteUrl","PartnersEP/Delete")("GetById","PartnersEP/GetById")},dependencies:[m]});let t=e;return t})();export{u as PartnersComponent};