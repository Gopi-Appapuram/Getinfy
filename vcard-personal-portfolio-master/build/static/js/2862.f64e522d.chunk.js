(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[2862],{9754:function(e,t,n){"use strict";n.d(t,{A3:function(){return m},BW:function(){return h},Dn:function(){return f},HO:function(){return s},Mx:function(){return u},UH:function(){return y},Vc:function(){return b},fW:function(){return l}});var r=n(74165),a=n(15861),o=n(31114);function s(e){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/warehouse/sales/orders",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/roles/master/".concat(t.acc_mno_parent_unq_id),method:"get",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/roles?id=".concat(t,"&mdRoleStatus=").concat(n),method:"patch"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/roles/unqId/1",method:"get"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/role-permissions",method:"get"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/role-permissions/role/".concat(t.roleId),method:"get"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/roles",method:"post",params:n,data:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.fetchData({url:"/account/roles",method:"post",params:n,data:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},32862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(72791),a=n(7869),o=n(58617),s=n(11087),i=n(50662),u=n(16856),c=n(16030),l=n(19640),d=n(48573),f=n.n(d),p=n(58121),m=n.n(p),v=n(80184),h=function(){var e=(0,c.I0)(),t=(0,r.useRef)(),n=(0,c.v9)((function(e){return e.publicRoles.data.tableData})),a=f()((function(e){var t=m()(n);t.query=e,t.pageIndex=1,"string"===typeof e&&e.length>1&&s(t);"string"===typeof e&&0===e.length&&s(t)}),500);var s=function(t){e((0,l.N3)(t)),e((0,l.AU)(t))};return(0,v.jsx)(i.II,{ref:t,className:"lg:w-52",size:"sm",placeholder:"Search",prefix:(0,v.jsx)(o.O6C,{className:"text-lg"}),onChange:function(e){a(e.target.value)}})},x=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(i.zx,{size:"sm",className:"block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4",icon:(0,v.jsx)(o.Yv7,{}),onClick:function(){},children:"Filter"})})},b=function(){var e=(0,c.I0)();return(0,v.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center",children:[(0,v.jsx)(h,{}),(0,v.jsx)(x,{}),(0,v.jsx)(s.rU,{className:"block lg:inline-block md:mx-2 md:mb-0 mb-4",target:"_blank",download:!0,children:(0,v.jsx)(i.zx,{block:!0,size:"sm",icon:(0,v.jsx)(o.H_7,{}),children:"Export"})}),(0,v.jsx)(s.rU,{className:"block lg:inline-block md:mx-2 md:mb-0 mb-4",target:"_blank",download:!0,children:(0,v.jsx)(i.zx,{block:!0,size:"sm",icon:(0,v.jsx)(u.cgG,{}),children:"Columns"})}),(0,v.jsx)(s.rU,{to:"/accounts-new-public-roles",className:"block lg:inline-block md:mb-0 mb-4",onClick:function(){e((0,l.ai)())},children:(0,v.jsx)(i.zx,{block:!0,variant:"solid",size:"sm",icon:(0,v.jsx)(o.yEd,{}),children:"Create"})})]})},g=n(74165),y=n(15861),w=n(29439),Z=n(93433),R=n(95273),k=n(92546),C=(0,R.oM)({name:"retailsList/state",initialState:{selectedRows:[],selectedRow:[],deleteMode:""},reducers:{setSelectedRows:function(e,t){e.selectedRows=t.payload},setSelectedRow:function(e,t){e.selectedRow=t.payload},addRowItem:function(e,t){var n=t.payload,r=(0,k.Vk)(e);if(!r.selectedRows.includes(n))return{selectedRows:[].concat((0,Z.Z)(r.selectedRows),(0,Z.Z)(n))}},removeRowItem:function(e,t){var n=t.payload,r=(0,k.Vk)(e);if(r.selectedRows.includes(n))return{selectedRows:r.selectedRows.filter((function(e){return e!==n}))}},setDeleteMode:function(e,t){e.deleteMode=t.payload}}}),j=C.actions,I=j.setSelectedRows,N=(j.setSelectedRow,j.addRowItem),D=j.removeRowItem,E=(j.toggleDeleteConfirmation,j.setDeleteMode,C.reducer),T=n(23532),A=n(57689),S=n(17425),P=n(39126),F=n(9754),_=n(54110),z={ACTIVE:{label:"Active",dotClass:"bg-black-500",textClass:"text-black-500",backgroundColor:"bg-[#F5F5F5]"},SUBMITTED:{label:"Submitted",dotClass:"bg-blue-500",textClass:"text-black-500",backgroundColor:"bg-[#F0F7FF]"},IN_ACTIVE:{label:"Inactive",dotClass:"bg-red-500",textClass:"text-red-500",backgroundColor:"bg- #F5F5F5"}},V=function(){var e=(0,r.useRef)(null),t=(0,c.I0)(),n=(0,c.v9)((function(e){return e.publicRoles.data.tableData})),o=n.pageIndex,s=n.pageSize,d=n.sort,f=n.query,p=(n.total,(0,c.v9)((function(e){var t,n;return null===e||void 0===e||null===(t=e.publicRoles)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.loading}))),h=(0,c.v9)((function(e){var t,n;return null===e||void 0===e||null===(t=e.publicRoles)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.publicRoles.res})),x=(0,c.v9)((function(e){var t,n;return null===e||void 0===e||null===(t=e.publicRoles)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.publicRoles.total})),b=(0,c.v9)((function(e){return e.auth.user})),Z=b.enterAccount,R=(b.password,b.rememberMe,b.usernameOrEmail,b.acc_mno_parent_unq_id),k=(0,r.useCallback)((function(){}),[]),C=(0,r.useState)(!1),j=(0,w.Z)(C,2),E=j[0],V=j[1],M=(0,r.useState)(""),q=(0,w.Z)(M,2),U=q[0],L=q[1],O=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){var t;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="ACTIVE"===U.status?"IN_ACTIVE":"ACTIVE",e.next=3,(0,F.fW)(U.id,t);case 3:e.sent.data.success&&("ACTIVE"===t?(V(!1),(0,_.By)("success","Activated successfully")):(V(!1),(0,_.By)("success","Deactivated successfully")));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){t(I([]));var e=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,l.jc)({acc_mno_parent_unq_id:R,page_no:o-1,page_size:s,sort:"id"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,k,o,s,d,f,E,Z]),(0,r.useEffect)((function(){var t;e&&(null===(t=e.current)||void 0===t||t.resetSelected())}),[h]);var B=(0,r.useMemo)((function(){return{pageIndex:o,pageSize:s,sort:d,total:x}}),[o,s,d,x]),W=function(e){var t=e.row,n=(0,c.I0)(),a=(0,T.Z)().textTheme,o=(0,A.s0)(),s=((0,r.useCallback)((function(){o("/app/sales/Item-details/".concat(t.id))}),[o,t]),"ACTIVE"!=t.status?"green":"rose"),d="ACTIVE"!=t.status?S.vUq:S.qGf;return(0,v.jsxs)("div",{className:"text-lg",children:[(0,v.jsx)(i.u,{title:"Edit",children:(0,v.jsx)("span",{className:"cursor-pointer p-1 text-blue-500 hover:".concat(a),onClick:function(){n((0,l.rQ)({roleId:t.id})),o("/accounts-new-public-roles",{state:{data:t,mode:"EDIT"}})},children:(0,v.jsx)(u.U$P,{})})}),(0,v.jsx)(i.u,{title:"".concat("ACTIVE"!=t.status?"Activate":"Deactivate"),children:(0,v.jsx)("span",{className:"cursor-pointer p-1 text-".concat(s,"-800 hover:text-").concat(s,"-800"),onClick:function(){V(!0),L(t)},children:(0,v.jsx)(d,{})})})]})},H=(0,r.useMemo)((function(){return[{header:"Actions",id:"action",cell:function(e){return(0,v.jsx)(W,{row:e.row.original})}},{header:"Role Title",accessorKey:"role_name"},{header:"Status",accessorKey:"status",cell:function(e){var t,n,r,a=e.row.original.status;return(0,v.jsx)("div",{className:"flex items-center",children:(0,v.jsxs)("span",{className:"flex ml-2 rtl:mr-2 capitalize font-semibold rounded-full border ".concat(null===(t=z[a])||void 0===t?void 0:t.backgroundColor," mt-4 px-2 py-1 text-").concat(null===(n=z[a])||void 0===n?void 0:n.dotClass),children:["ACTIVE"===a&&(0,v.jsx)(S.vUq,{className:"mt-1 mr-2 text-[#3B8C59]"}),"IN_ACTIVE"===a&&(0,v.jsx)(S.qGf,{className:"mt-1 mr-2 text-[#FF0000]"}),"SUBMITTED"===a&&(0,v.jsx)(P.LHN,{className:"mt-1 mr-2 text-blue-500"}),null===(r=z[a])||void 0===r?void 0:r.label]})})}}]}),[]),G=(0,r.useCallback)((function(e,n){if(e){var r=n.map((function(e){return e.original})),a=[];r.forEach((function(e){a.push(e.id)})),t(I(a))}else t(I([]))}),[t]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.wQ,{ref:e,columns:H,data:h,loading:p,pagingData:B,onPaginationChange:function(e){var n=m()(B);n.pageIndex=e,t((0,l.N3)(n))},onSelectChange:function(e){var n=m()(B);n.pageSize=Number(e),n.pageIndex=1,t((0,l.N3)(n))},onSort:function(e){var n=m()(B);n.sort=e,t((0,l.N3)(n))},onCheckBoxChange:function(e,n){t(e?N([n.id]):D(n.id))},onIndeterminateCheckBoxChange:G,selectable:!0}),(0,v.jsxs)(i.Vq,{isOpen:E,onClose:function(){return V(!1)},children:[(0,v.jsx)("h6",{style:{fontStyle:"normal",fontWeight:700,fontSize:"18px"},children:"ACTIVE"!=U.status?"Activate":"Deactivate"}),(0,v.jsx)("hr",{className:"text-gary-500 mt-4 mb-4"}),(0,v.jsx)("p",{style:{fontStyle:"normal",fontWeight:400,fontSize:"15px"},children:"ACTIVE"!=U.status?"Are you sure you want to activate this master role ?":"Are you sure you want to deactivate this master role ?"}),(0,v.jsxs)("div",{className:"mt-6 text-end",children:[(0,v.jsx)(i.zx,{style:{backgroundColor:"#4D4D4D",color:"white",borderRadius:"2px"},className:"mr-3",onClick:function(){return V(!1)},children:"No"}),(0,v.jsx)(i.zx,{variant:"solid",onClick:function(){return O()},children:"Yes"})]})]})]})},M=(0,n(87781).UY)({state:E,data:l.ZP});(0,n(69564).fn)("publicRoles",M);var q=function(){return(0,v.jsxs)(a.lG,{className:"h-full",bodyClass:"h-full",children:[(0,v.jsxs)("div",{className:"lg:flex items-center justify-between mb-4",children:[(0,v.jsx)("h3",{className:"mb-4 lg:mb-0",children:"Master Roles"}),(0,v.jsx)(b,{})]}),(0,v.jsx)(V,{})]})}},19640:function(e,t,n){"use strict";n.d(t,{AU:function(){return c},N3:function(){return h},ai:function(){return f},jc:function(){return l},rQ:function(){return p}});var r,a=n(4942),o=n(74165),s=n(15861),i=n(95273),u=n(9754),c=(0,i.hg)("publicRoles/data/getOrders",function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.HO)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=(0,i.hg)("publicRoles/data/getPublicRoles",function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Mx)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=(0,i.hg)("publicRoles/data/getPublicRolesData",function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Dn)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(0,i.hg)("publicRoles/data/getRolePermissions",function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.A3)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(0,i.hg)("publicRoles/data/getRolePermissionsForEdit",function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.BW)(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=(0,i.oM)({name:"publicRoles/data",initialState:{loading:!1,orderList:[],tableData:{total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},publicRoles:[],publicRolesList:[],rolePermissions:{},rolePermissionsForEdit:{}},reducers:{setOrderList:function(e,t){e.orderList=t.payload},setTableData:function(e,t){e.tableData=t.payload},setPublicRoles:function(e,t){e.tableData=t.payload},setPublicRolesData:function(e,t){e.publicRolesList=t.payload},setRolePermissions:function(e,t){e.rolePermissions=t.payload},setRolePermissionsForEdit:function(e,t){e.rolePermissionsForEdit=t.payload}},extraReducers:(r={},(0,a.Z)(r,c.fulfilled,(function(e,t){e.orderList=t.payload.data,e.tableData.total=t.payload.total,e.loading=!1})),(0,a.Z)(r,c.pending,(function(e){e.loading=!0})),(0,a.Z)(r,l.fulfilled,(function(e,t){e.publicRoles=t.payload,e.loading=!1})),(0,a.Z)(r,d.pending,(function(e){e.loading=!0})),(0,a.Z)(r,d.fulfilled,(function(e,t){var n,r;e.publicRolesList=null===(n=t.payload)||void 0===n||null===(r=n.response)||void 0===r?void 0:r.map((function(e){return{value:e.id,label:e.name}}))})),(0,a.Z)(r,l.pending,(function(e,t){e.loading=!0})),(0,a.Z)(r,f.fulfilled,(function(e,t){e.rolePermissions=t.payload,e.loading=!1})),(0,a.Z)(r,f.pending,(function(e){e.loading=!0})),(0,a.Z)(r,p.fulfilled,(function(e,t){e.rolePermissionsForEdit=t.payload,e.loading=!1})),(0,a.Z)(r,p.pending,(function(e){e.loading=!0})),r)}),v=m.actions,h=(v.setOrderList,v.setTableData);v.setPublicRoles,v.setPublicRolesData,v.setRolePermissions,v.setRolePermissionsForEdit;t.ZP=m.reducer},20821:function(e,t,n){var r=n(26050),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},26050:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},48573:function(e,t,n){var r=n(8092),a=n(50072),o=n(42582),s=Math.max,i=Math.min;e.exports=function(e,t,n){var u,c,l,d,f,p,m=0,v=!1,h=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=u,r=c;return u=c=void 0,m=t,d=e.apply(r,n)}function g(e){return m=e,f=setTimeout(w,t),v?b(e):d}function y(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-m>=l}function w(){var e=a();if(y(e))return Z(e);f=setTimeout(w,function(e){var n=t-(e-p);return h?i(n,l-(e-m)):n}(e))}function Z(e){return f=void 0,x&&u?b(e):(u=c=void 0,d)}function R(){var e=a(),n=y(e);if(u=arguments,c=this,p=e,n){if(void 0===f)return g(p);if(h)return clearTimeout(f),f=setTimeout(w,t),b(p)}return void 0===f&&(f=setTimeout(w,t)),d}return t=o(t)||0,r(n)&&(v=!!n.leading,l=(h="maxWait"in n)?s(o(n.maxWait)||0,t):l,x="trailing"in n?!!n.trailing:x),R.cancel=function(){void 0!==f&&clearTimeout(f),m=0,u=p=c=f=void 0},R.flush=function(){return void 0===f?d:Z(a())},R}},50072:function(e,t,n){var r=n(97009);e.exports=function(){return r.Date.now()}},42582:function(e,t,n){var r=n(20821),a=n(8092),o=n(70152),s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=i.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):s.test(e)?NaN:+e}}}]);
//# sourceMappingURL=2862.f64e522d.chunk.js.map