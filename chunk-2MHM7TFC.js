import{j as p}from"./chunk-D4UU44IK.js";import"./chunk-4LHCKT7C.js";import"./chunk-VSYXDL23.js";import"./chunk-3ZAIJ4IV.js";import"./chunk-PPWB5S3T.js";import"./chunk-FF7KVUSC.js";import"./chunk-VNF6RC2R.js";import"./chunk-H6HTMPGV.js";import"./chunk-GKF6IR3T.js";import"./chunk-76NAH4W4.js";import"./chunk-O7NQZYPY.js";import"./chunk-EWI5J5KH.js";import"./chunk-X4LTGZKH.js";import"./chunk-OFZNSK7N.js";import"./chunk-CXJLKQ4R.js";import{Eb as o,dc as i,na as n,xb as r}from"./chunk-J5UB44FZ.js";import"./chunk-3EYC4JTX.js";var D=(()=>{let e=class e{constructor(){this.TablePaging={InputType:"Table",Type:"TablePaging",GlobalData:{Url:"Global/GetAll",Conditions:"Closed = 0",TableName:"Interval",BranchFilter:!0,Columns:["Id","FromDate","ToDate","[Open]"]},Required:!1,TableCell:[{SortName:"FromDate",CellName:"Table.FromDate",CellDate:!0},{SortName:"ToDate",CellName:"Table.ToDate",CellDate:!0},{SortName:"Open",CellName:"Table.Close",DataBoolean:!0}]},this.Data=[{Type:"Tabs",Tabs:[{TabName:"Basic Data",TabData:[{Type:"Date",InputType:"text",Required:!0,LableName:"Table.FromDate",MsError:"",BindValue:"",DataValue:"FromDate"},{Type:"Date",InputType:"text",Required:!0,LableName:"Table.ToDate",MsError:"",BindValue:"",DataValue:"ToDate"},{Type:"input",InputType:"checkbox",Required:!1,LableName:"Table.Close",MsError:"",BindValue:!1,DataValue:"Open"}]}]}]}ngOnInit(){}ngOnDestroy(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["app-interval"]],standalone:!0,features:[i],decls:1,vars:6,consts:[[3,"PageTitle","DataView","TablePaging","AddUrl","UpdateUrl","DeleteUrl"]],template:function(a,l){a&1&&o(0,"app-dynamic-component",0),a&2&&r("PageTitle","Interval.Interval")("DataView",l.Data)("TablePaging",l.TablePaging)("AddUrl","IntervalEP/Add")("UpdateUrl","IntervalEP/Update")("DeleteUrl","IntervalEP/Delete")},dependencies:[p]});let t=e;return t})();export{D as IntervalComponent};