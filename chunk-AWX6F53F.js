import{j as m}from"./chunk-DEC3NJ3K.js";import"./chunk-QI74C7BQ.js";import"./chunk-PWIKXZ6E.js";import"./chunk-S52O5BXQ.js";import"./chunk-KOJPIKRQ.js";import"./chunk-WL6N6SLT.js";import"./chunk-HOAF6CDP.js";import"./chunk-34JSETBR.js";import"./chunk-QFTVA365.js";import"./chunk-LNYZIAUP.js";import"./chunk-HYE6JRVA.js";import"./chunk-DVVEKPVL.js";import"./chunk-JCTIHYFX.js";import"./chunk-M24M3PNC.js";import"./chunk-4L6P5Z5M.js";import"./chunk-JM67XKKX.js";import{Db as n,cc as i,na as o,wb as r}from"./chunk-VIO7ZK3G.js";import"./chunk-3EYC4JTX.js";var s=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{Conditions:"Block = 0",Url:"Global/GetAll",TableName:"Employee",Join:!0,JoinTables:["RoleGroup RoleGroup"],JoinConditions:["T.RoleId = RoleGroup.Id"],Columns:["T.Id","T.Name","T.Code","T.UserName","RoleGroup.Name AS RoleName"]},Required:!1,TableCell:[{SortName:"Name",CellName:"Table.Name",ExistSearchField:"T.Name"},{SortName:"Code",CellName:"Table.Code"},{SortName:"UserName",CellName:"Employee.UserName"},{SortName:"RoleName",CellName:"Employee.Role",ExistSearchField:"RoleGroup.Name"}]},this.Data=[{Type:"Tabs",Tabs:[{TabName:"Basic Data",TabData:[{Type:"input",InputType:"text",Required:!0,LableName:"Name",MsError:"",BindValue:"",DataValue:"Name"},{Type:"input",InputType:"text",Required:!0,LableName:"Employee.Code",MsError:"",BindValue:"",DataValue:"Code"},{Type:"input",InputType:"text",Required:!0,LableName:"Employee.UserName",MsError:"",BindValue:"",DataValue:"UserName"},{Type:"input",InputType:"text",Required:!0,LableName:"Employee.Email",MsError:"",BindValue:"",DataValue:"Email"},{Type:"input",InputType:"password",Required:!1,LableName:"Employee.Password",MsError:"",BindValue:"",DataValue:"Password"},{Type:"StaticDropDown",Required:!0,LableName:"Employee.Gender",SaveData:!0,BindValue:null,DataValue:"Gender",DropDownData:[{Id:1,Name:"Male"},{Id:2,Name:"Female"}]},{Type:"MultiDropDownApi",Required:!0,Multiple:!0,LableName:"Employee.Branch",BindValue:null,DataValue:"UserBranches",BindValueName:"BranchId",GlobalData:{Conditions:"Visible = 1",Url:"Global/GetAll",TableName:"Branch",DataArr:[],Columns:["Id","Name"]}},{Type:"DropDownApi",Required:!0,LableName:"Employee.Role",BindValue:null,DataValue:"RoleId",BindValueName:"",DataValueName:"RoleName",GlobalData:{Url:"Global/GetAll",TableName:"RoleGroup",Conditions:"No != -1",DataArr:[],Columns:["Id","Name"]}}]}]}]}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=o({type:e,selectors:[["app-add-employee"]],standalone:!0,features:[i],decls:1,vars:7,consts:[[3,"PageTitle","DataView","TablePaging","AddUrl","UpdateUrl","DeleteUrl","GetById"]],template:function(a,t){a&1&&n(0,"app-dynamic-component",0),a&2&&r("PageTitle","Employee.Employee")("DataView",t.Data)("TablePaging",t.TablePaging)("AddUrl","EmployeeEP/Add")("UpdateUrl","EmployeeEP/Update")("DeleteUrl","EmployeeEP/Delete")("GetById","EmployeeEP/GetById")},dependencies:[m]});let l=e;return l})();export{s as AddEmployeeComponent};