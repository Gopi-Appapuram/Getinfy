"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[1557],{9663:function(e,t,n){n.d(t,{NW:function(){return o},TZ:function(){return u},Yi:function(){return m},aw:function(){return i},h8:function(){return h},sq:function(){return p}});var r=n(74165),s=n(15861),a=n(31114);function o(e){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.fetchData({url:"/partner/sales/dashboard",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.fetchData({url:"/account/password-policies",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.fetchData({url:"/account/roles/child-roles/drop-down//".concat(t.enterAccount),method:"get"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a.Z.fetchData({url:"/account/password-policies",method:"post",data:t}),e.abrupt("return",{status:"success",data:n});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{status:"failed",message:(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data)||e.t0.toString()});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a.Z.fetchData({url:"/account/password-policies/".concat(t.id),method:"put",data:t}),e.abrupt("return",{status:"success",data:n});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{status:"failed",message:(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data)||e.t0.toString()});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function h(e,t){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.fetchData({url:"/account/password-policies?id=".concat(t,"&passStatus=").concat(n),method:"patch"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},44630:function(e,t,n){var r=n(29439),s=n(72791);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,t=(0,s.useState)(""),n=(0,r.Z)(t,2),a=n[0],o=n[1];return(0,s.useEffect)((function(){if(a){var t=setTimeout((function(){return o("")}),e);return function(){clearTimeout(t)}}}),[a]),[a,o]}},13800:function(e,t,n){var r=n(74165),s=n(15861),a=n(29439),o=(n(72791),n(92506)),c=n(50662),i=n(11087),l=n(85358),u=n(62797),d=n(54110),p=n(44630),f=n(16030),m=n(54664),x=n(80184),h=u.Ry().shape({password:u.Z_().required("Please enter your  current password"),newPassword:u.Z_().required("Please enter your password"),confirmPassword:u.Z_().oneOf([u.iH("newPassword"),null],"Your passwords do not match")});t.Z=function(){var e=(0,f.v9)((function(e){return e.auth.user})).email,t=(0,p.Z)(),n=(0,a.Z)(t,2),u=n[0],w=n[1],v=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n,s){var a,o,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.resetForm,(0,s.setSubmitting)(!0),o={old_password:n.password,new_password:n.newPassword,confirm_password:n.confirmPassword,user_id:e},t.next=5,(0,m.vV)(o);case 5:"success"===(c=t.sent).status&&setTimeout((function(){(0,d.By)("success","SuccessFully Updated "),a()}),2e3),"failed"===c.status&&w((0,d.ld)(c));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[u&&(0,x.jsx)(c.bZ,{className:"mb-4",type:"danger",showIcon:!0,children:Array.isArray(u)?u.join(", "):u}),(0,x.jsx)("div",{children:(0,x.jsx)(o.J9,{initialValues:{password:"",newPassword:"",confirmPassword:""},validationSchema:h,onSubmit:v,children:function(e){e.values;var t=e.touched,n=e.errors,r=(e.isSubmitting,e.handleSubmit),s=e.resetForm;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(o.l0,{onSubmit:r,children:[(0,x.jsx)(c.Yb,{children:(0,x.jsx)("div",{style:{backgroundColor:"#F5F5F5",padding:"15px 15px ",marginTop:"10px"},children:(0,x.jsx)("div",{style:{backgroundColor:"white",padding:"14px 14px",marginBelow:"10px"},children:(0,x.jsxs)("div",{className:"md:grid grid-cols-4 gap-4 mx-4 ",children:[(0,x.jsx)(c.xJ,{label:"Current Password",invalid:n.password&&t.password,errorMessage:n.password,children:(0,x.jsx)(o.gN,{type:"text",autoComplete:"off",name:"password",placeholder:"Enter Your Current Password",component:l.Z})}),(0,x.jsx)(c.xJ,{label:"New Password",invalid:n.newPassword&&t.newPassword,errorMessage:n.newPassword,children:(0,x.jsx)(o.gN,{type:"text",autoComplete:"off",name:"newPassword",placeholder:"Enter Your New Password",component:l.Z})}),(0,x.jsx)(c.xJ,{label:"Confirm New Password",invalid:n.confirmPassword&&t.confirmPassword,errorMessage:n.confirmPassword,children:(0,x.jsx)(o.gN,{type:"text",autoComplete:"off",name:"confirmPassword",placeholder:"Confirm New Password",component:l.Z})})]})})})}),(0,x.jsx)("div",{className:"mt-4 text-right",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.rU,{className:"block lg:inline-block md:mb-0 mb-4",to:"",children:(0,x.jsx)(c.zx,{style:{backgroundColor:"#4D4D4D"},className:"mx-2",variant:"solid",type:"button",onClick:s,children:"Reset"})}),(0,x.jsx)(c.zx,{className:"mx-2",variant:"solid",type:"submit",children:"Save"})]})})]})})}})})]})}},41557:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(29439),s=n(7869),a=n(72791),o=n(87781),c=n(93433),i=n(95273),l=n(92546),u=(0,i.oM)({name:"passwordPolicy/state",initialState:{selectedRows:[],selectedRow:[],deleteMode:""},reducers:{setSelectedRows:function(e,t){e.selectedRows=t.payload},setSelectedRow:function(e,t){e.selectedRow=t.payload},addRowItem:function(e,t){var n=t.payload,r=(0,l.Vk)(e);if(!r.selectedRows.includes(n))return{selectedRows:[].concat((0,c.Z)(r.selectedRows),(0,c.Z)(n))}},removeRowItem:function(e,t){var n=t.payload,r=(0,l.Vk)(e);if(r.selectedRows.includes(n))return{selectedRows:r.selectedRows.filter((function(e){return e!==n}))}},setDeleteMode:function(e,t){e.deleteMode=t.payload}}}),d=u.actions,p=d.setSelectedRows,f=(d.setSelectedRow,d.addRowItem,d.removeRowItem,d.toggleDeleteConfirmation,d.setDeleteMode,u.reducer),m=n(81994),x=(0,o.UY)({state:f,data:m.ZP}),h=n(69564),w=n(74165),v=n(15861),g=n(50662),y=n(16030),b=n(23532),Z=n(57689),P=n(58121),j=n.n(P),C=n(16856),N=n(17425),A=n(39126),k=n(9663),D=n(54110),I=n(80184),S={ACTIVE:{label:"Active",dotClass:"bg-black-500",textClass:"text-black-500",backgroundColor:"bg-[#F5F5F5]"},PENDING_APPROVAL:{label:"Pending Approval",dotClass:"bg-blue-500",textClass:"text-black-500",backgroundColor:"bg-[#F0F7FF]"},IN_ACTIVE:{label:"Inactive",dotClass:"bg-blue-500",textClass:"text-black-500",backgroundColor:"bg- [#F5F5F5]"}},E=function(e){var t=e.actionPermissions,n=(0,a.useState)(!1),o=(0,r.Z)(n,2),c=o[0],i=o[1],l=(0,a.useRef)(null),u=(0,y.I0)(),d=(0,y.v9)((function(e){return e.auth.user})),f=d.enterAccount,x=(d.password,d.rememberMe,d.usernameOrEmail,(0,y.v9)((function(e){return e.passwordPolicy.data.tableData}))),h=x.pageIndex,P=x.pageSize,E=x.sort,T=x.sort_field,R=x.query,V=(x.total,(0,y.v9)((function(e){return e.passwordPolicy.data.loading}))),_=(0,a.useState)(""),F=(0,r.Z)(_,2),z=F[0],L=F[1],q=(0,y.v9)((function(e){var t,n;return null===(t=e.passwordPolicy)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.getAllData.res})),M=(0,y.v9)((function(e){var t,n;return null===(t=e.passwordPolicy)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.usersList})),U=(0,y.v9)((function(e){var t,n;return null===(t=e.passwordPolicy)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.getAllData.total})),G=function(e){var n=e.row,r=(0,b.Z)().textTheme,s=(0,Z.s0)(),o=(0,a.useCallback)((function(){s("/settings-menu-password-policy-add",{state:{data:n,mode:"EDIT"}})}),[s,n]),c="ACTIVE"!==n.status?"green":"rose",l="ACTIVE"!==n.status?N.vUq:N.qGf,u={color:"grey",pointerEvents:"none"},d=(t.canAdd,t.canEdit),p=(t.canView,t.canActivate);t.canClone,t.canApprove;return(0,I.jsxs)("div",{className:"text-lg",children:[(0,I.jsx)(g.u,{title:"Edit",children:(0,I.jsx)("span",{className:"cursor-pointer p-1 text-blue-500 hover:".concat(r),onClick:o,style:d?null:u,children:(0,I.jsx)(C.U$P,{})})}),(0,I.jsx)(g.u,{title:"".concat("ACTIVE"!==n.status?"Activate":"Deactivate"),children:(0,I.jsx)("span",{className:"cursor-pointer p-1 text-".concat(c,"-800 hover:text-").concat(c,"-800"),onClick:function(){i(!0),L(n)},style:p?null:u,children:(0,I.jsx)(l,{})})})]})},O=function(){var e=(0,v.Z)((0,w.Z)().mark((function e(){var t,n;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="ACTIVE"===z.status?"IN_ACTIVE":"ACTIVE",e.next=3,(0,k.h8)(z.id,t);case 3:(n=e.sent).data.success&&"ACTIVE"===t?(i(!1),(0,D.By)("success","Activated  successfully")):n.data.success&&"IN_ACTIVE"===t&&(i(!1),(0,D.By)("success","Deactivated successfully"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){u(p([])),u((0,m.jl)({page_no:h-1,page_size:P,sort_feild:T||"id",unq_id:f})),u((0,m.Jm)({enterAccount:f}))}),[u,c,h,P,T,R]),(0,a.useEffect)((function(){var e;l&&(null===(e=l.current)||void 0===e||e.resetSelected())}),[q]);var Y=(0,a.useMemo)((function(){return{pageIndex:h,pageSize:P,sort:E,query:R,total:U}}),[h,P,E,R,U]),B=(0,a.useMemo)((function(){return[{header:"Actions",id:"action",cell:function(e){return(0,I.jsx)(G,{row:e.row.original})}},{header:"User Role",accessorKey:"role_id",cell:function(e){var t=e.row.original.role_id;return(0,I.jsx)("span",{children:(0,D.ZP)(t,M)})}},{header:"Policy Title",accessorKey:"policy_name"},{header:"Status",accessorKey:"status",cell:function(e){var t,n,r,s=e.row.original.status;return(0,I.jsx)("div",{className:"flex items-center",children:(0,I.jsxs)("span",{className:"flex ml-2 rtl:mr-2 capitalize font-semibold rounded-full border ".concat(null===(t=S[s])||void 0===t?void 0:t.backgroundColor," mt-4 px-2 py-1 text-").concat(null===(n=S[s])||void 0===n?void 0:n.dotClass),children:["ACTIVE"===s&&(0,I.jsx)(N.vUq,{className:"mt-1 mr-2 text-[#3B8C59]"}),"IN_ACTIVE"===s&&(0,I.jsx)(N.qGf,{className:"mt-1 mr-2 text-[#FF0000]"}),"PENDING_APPROVAL"===s&&(0,I.jsx)(A.LHN,{className:"mt-1 mr-2 text-blue-500"}),null===(r=S[s])||void 0===r?void 0:r.label]})})}}]}),[M]),J=(0,a.useCallback)((function(e,t){if(e){var n=t.map((function(e){return e.original})),r=[];n.forEach((function(e){r.push(e.id)})),u(p(r))}else u(p([]))}),[u]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(s.wQ,{ref:l,columns:B,data:q,loading:V,pagingData:Y,onPaginationChange:function(e){var t=j()(Y);t.pageIndex=e,u((0,m.N3)(t))},onSelectChange:function(e){var t=j()(Y);t.pageSize=Number(e),t.pageIndex=1,u((0,m.N3)(t))},onSort:function(e){var t=j()(Y),n=(0,D.TD)(e.key);t.sort_field=n,t.sort=e,u((0,m.N3)(t))},onIndeterminateCheckBoxChange:J,selectable:!0}),(0,I.jsxs)(g.Vq,{isOpen:c,onClose:function(){return i(!1)},children:[(0,I.jsx)("h6",{style:{fontStyle:"normal",fontSize:"18px",color:"#212121"},children:"ACTIVE"!==z.status?"Activate":"Deactivate"}),(0,I.jsx)("hr",{className:"text-gary-500 mt-4 mb-4"}),(0,I.jsx)("p",{children:"ACTIVE"!==z.status?"Are you sure you want to activate this password policy ?":"Are you sure you want to deactivate this password policy ?"}),(0,I.jsxs)("div",{className:"mt-6 text-end",children:[(0,I.jsx)(g.zx,{style:{backgroundColor:"#4D4D4D",color:"white"},className:"mr-3",onClick:function(){return i(!1)},children:"No"}),(0,I.jsx)(g.zx,{variant:"solid",onClick:function(){return O()},children:"Yes"})]})]})]})},T=n(58617),R=n(11087),V=(n(13800),function(){return(0,I.jsx)(g.II,{ref:{},className:"lg:w-52",size:"sm",placeholder:"Search Password Policy",prefix:(0,I.jsx)(T.O6C,{className:"text-lg"}),onChange:""})}),_=function(e){var t=e.actionPermissions.canAdd;return(0,I.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center",children:[(0,I.jsx)(V,{}),(0,I.jsx)(R.rU,{className:"block lg:inline-block md:mx-2 md:mb-0 mb-4",target:"_blank",download:!0,children:(0,I.jsx)(g.zx,{block:!0,size:"sm",icon:(0,I.jsx)(T.H_7,{}),children:"Export"})}),(0,I.jsx)(R.rU,{className:"block lg:inline-block md:mb-0 mb-4",to:"/settings-menu-password-policy-add",children:(0,I.jsxs)(g.zx,{block:!0,style:{fontStyle:"normal"},className:"flex justify-center pt-[6px] gap-1",variant:"solid",size:"sm",disabled:!t,children:[(0,I.jsx)("p",{className:"pt-[2px]",children:(0,I.jsx)(T.yEd,{})}),"Add Password Policy"]})})]})};(0,h.fn)("passwordPolicy",x);var F=function(){var e=(0,y.v9)((function(e){return e.auth.user})).permissionsList,t=(0,a.useState)(e.includes("SETPPCADD")),n=(0,r.Z)(t,2),o=n[0],c=(n[1],(0,a.useState)(e.includes("SETPPCEDI"))),i=(0,r.Z)(c,2),l=i[0],u=(i[1],(0,a.useState)(e.includes("SETPPCVIE"))),d=(0,r.Z)(u,2),p=d[0],f=(d[1],(0,a.useState)(e.includes("SETPPCDEA"))),m=(0,r.Z)(f,2),x=m[0],h=(m[1],(0,a.useState)(e.includes("SETPPCCLO"))),w=(0,r.Z)(h,2),v=w[0],g=(w[1],(0,a.useState)(e.includes("SETPPCAPP"))),b=(0,r.Z)(g,2),Z=b[0],P=(b[1],{canAdd:o,canEdit:l,canClone:v,canView:p,canActivate:x,canApprove:Z});return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(s.lG,{className:"h-full",bodyClass:"h-full",children:[(0,I.jsxs)("div",{className:"lg:flex items-center justify-between mb-4",children:[(0,I.jsx)("h3",{className:"mb-4 lg:mb-0",children:"Password Policy"}),(0,I.jsx)(_,{actionPermissions:P})]}),(0,I.jsx)(E,{actionPermissions:P})]})})}},81994:function(e,t,n){n.d(t,{Jm:function(){return d},N3:function(){return m},jl:function(){return u}});var r,s=n(4942),a=n(74165),o=n(15861),c=n(95273),i=n(9663),l=(0,c.hg)("passwordPolicy/data/getItems",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.NW)();case 2:return n=e.sent,e.abrupt("return",n.data.response);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=(0,c.hg)("passwordPolicy/data/getAllData",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.aw)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=(0,c.hg)("passwordPolicy/data/getUserRoles",function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.TZ)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(0,c.oM)({name:"passwordPolicy/data",initialState:{loading:!1,ItemList:[],tableData:{total:0,pageIndex:1,pageSize:10,query:"",sort:{Item:"",key:""}},getAllData:[],usersList:[]},reducers:{setItemList:function(e,t){e.ItemList=t.payload},setTableData:function(e,t){e.tableData=t.payload},setDocTypeData:function(e,t){e.DocTypeData=t.payload},setGetAllData:function(e,t){e.getAllData=t.payload},setUsersList:function(e,t){e.usersList=t.payload}},extraReducers:(r={},(0,s.Z)(r,l.fulfilled,(function(e,t){e.ItemList=t.payload,e.tableData.total=t.payload.total,e.loading=!1})),(0,s.Z)(r,l.pending,(function(e){e.loading=!0})),(0,s.Z)(r,u.fulfilled,(function(e,t){e.getAllData=t.payload,e.loading=!1})),(0,s.Z)(r,u.pending,(function(e){e.loading=!0})),(0,s.Z)(r,d.fulfilled,(function(e,t){var n;e.usersList=null===(n=t.payload.res)||void 0===n?void 0:n.map((function(e){return{value:e.id,label:e.name}})),e.loading=!1})),(0,s.Z)(r,d.pending,(function(e,t){e.loading=!0})),r)}),f=p.actions,m=(f.setItemList,f.setTableData);f.setGetAllData,f.setUsersList;t.ZP=p.reducer}}]);
//# sourceMappingURL=1557.ab358005.chunk.js.map