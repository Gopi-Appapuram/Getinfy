"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[5707],{25707:function(e,l,n){n.r(l),n.d(l,{default:function(){return w}});var s=n(72791),i=n(29439),t=n(7869),a=n(50662),d=n(92506),r=(n(62797),n(57689)),o=n(16856),c=(n(763),n(16030)),u=n(80184);var v=n(64963),m=n(93433),f=n(95273),x=n(92546),h=(0,f.oM)({name:"myaccountList/state",initialState:{selectedRows:[],selectedRow:[],deleteMode:""},reducers:{setSelectedRows:function(e,l){e.selectedRows=l.payload},setSelectedRow:function(e,l){e.selectedRow=l.payload},addRowItem:function(e,l){var n=l.payload,s=(0,x.Vk)(e);if(!s.selectedRows.includes(n))return{selectedRows:[].concat((0,m.Z)(s.selectedRows),(0,m.Z)(n))}},removeRowItem:function(e,l){var n=l.payload,s=(0,x.Vk)(e);if(s.selectedRows.includes(n))return{selectedRows:s.selectedRows.filter((function(e){return e!==n}))}},setDeleteMode:function(e,l){e.deleteMode=l.payload}}}),p=h.actions,g=(p.setSelectedRows,p.setSelectedRow,p.addRowItem,p.removeRowItem,p.toggleDeleteConfirmation,p.setDeleteMode,h.reducer),j=n(54110),b=n(8939),y=[{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"Arabic",value:"ar"},{label:"Portuguese",value:"pt"}];function N(){var e=(0,r.s0)(),l=(0,c.I0)(),n=(0,s.useState)({selectedOperator:""}),m=(0,i.Z)(n,2),f=m[0],x=m[1],h=(0,c.v9)((function(e){return e.auth.user})),p=h.enterAccount,g=(h.acc_mno_id,h.user_type),N=(0,c.v9)((function(e){var l,n;return null===(l=e.genSettings)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.operatorsList})),S=(0,c.v9)((function(e){var l,n;return null===(l=e.genSettings)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.tableData})),_=S.pageIndex,w=S.pageSize,D=S.sort,R=S.query,I=(S.total,S.sort_field,S.order,(0,c.v9)((function(e){var l,n;return null===(l=e.genSettings)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.loading})),(0,c.v9)((function(e){var l,n;return null===(l=e.genSettings)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.opInfoByID}))),C=(0,c.v9)((function(e){var l,n;return null===(l=e.genSettings)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.currencyList})),P=N.length;(0,s.useEffect)((function(){l((0,v.Qu)({enterAccount:p}))}),[l,p]),(0,s.useEffect)((function(){var e,n;"GlobalMno"!==g&&(x({selectedOperator:null===(e=N[0])||void 0===e?void 0:e.value}),l((0,v.jP)(null===(n=N[0])||void 0===n?void 0:n.value)))}),[N]);(0,s.useMemo)((function(){return{pageIndex:_,pageSize:w,sort:D,query:R,total:P}}),[_,w,D,R,P]);var k=(0,s.useCallback)((function(e,n,s){e.setFieldValue(n.name,s.value),x({selectedOperator:s.value}),l((0,v.jP)(s.value))}),[l]),M=function(){e("/settings-menu-general-settings-edit",{state:{data:I[0],account:f.selectedOperator,mode:"EDIT"}})};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"mt-5",children:[(0,u.jsx)("h3",{children:"General Settings"}),(0,u.jsx)("div",{className:"mt-6  bg-gray-50 dark:bg-gray-700 rounded",children:(0,u.jsx)("div",{className:"p-5",style:{backgroundColor:"#f5f5f5"},children:(0,u.jsx)(d.J9,{initialValues:f,onSubmit:function(e){console.log("submit",e)},children:function(e){var l,n,s,i,r,c,v,m,x,h,S=e.values;e.touched,e.errors,e.isSubmitting,e.handleSubmit;return(0,u.jsxs)(d.l0,{children:[(0,u.jsx)(t.lG,{className:"h-full p-5",bodyClass:"h-full",divider:!0,children:(0,u.jsx)(a.Yb,{children:(0,u.jsx)(a.xJ,{label:"Select Operator",children:(0,u.jsx)("div",{className:"md:grid grid-cols-3 gap-4",children:(0,u.jsx)(d.gN,{name:"selectedOperator",children:function(e){var l=e.field,n=e.form;return(0,u.jsx)(a.Ph,{placeholder:"Select Operater",field:l,form:n,options:N,isDisabled:"GlobalMno"!==g,value:"GlobalMno"!==g?null===N||void 0===N?void 0:N.filter((function(e){return e.value===p})):null===N||void 0===N?void 0:N.filter((function(e){return e.value===S.selectedOperator})),onChange:function(e){return k(n,l,e)}})}})})})})}),((null===f||void 0===f?void 0:f.selectedOperator)||(null===S||void 0===S?void 0:S.selectedOperator))&&(0,u.jsxs)(t.lG,{className:"h-full p-5 mt-4",bodyClass:"h-full",divider:!0,children:[(0,u.jsxs)("div",{className:"md:grid grid-cols-2",children:[(0,u.jsxs)("h6",{className:" mb-4 mt-1 font-bold",children:["BASIC DETAILS"," "]}),(0,u.jsx)("div",{className:" text-base  font-bold flex justify-end cursor-pointer",children:(0,u.jsxs)("div",{style:{display:"flex"},onClick:M,children:[(0,u.jsx)(o.U$P,{className:"mr-2 h-6"}),(0,u.jsx)("p",{children:"EDIT"})]})})]}),(0,u.jsxs)("div",{className:"md:grid grid-cols-5 mt-4",children:[(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Roundoff Values"}),(0,u.jsx)("p",{className:"mb-3",children:!0===(null===(l=I[0])||void 0===l?void 0:l.gen_set_rndoff_val)?"Up":"Down"})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Solution Price"}),(0,u.jsx)("p",{className:"mb-3",children:"Exclusive"})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Language Preferences"}),(0,u.jsx)("p",{className:"mb-3",children:(0,j.ZP)(null===(n=I[0])||void 0===n?void 0:n.gen_set_lang_pref,y)})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Time Zone"}),(0,u.jsx)("p",{className:"mb-3",children:null===(x=null===(i=I[0])||void 0===i?void 0:i.gen_set_timezone,h=b.E,s=h.find((function(e){return(null===e||void 0===e?void 0:e.id)==x})))||void 0===s?void 0:s.value})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Date Format"}),(0,u.jsx)("p",{className:"mb-3",children:null===(r=I[0])||void 0===r?void 0:r.gen_set_date_format})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Time Format"}),(0,u.jsx)("p",{className:"mb-3",children:null===(c=I[0])||void 0===c?void 0:c.gen_set_time_format})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"10px"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Currency Preferance"}),(0,u.jsx)("p",{className:"mb-3",children:(0,j.ZP)(null===(v=I[0])||void 0===v?void 0:v.rel_gen_set_curncy_pref,C)})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"10px"},children:[(0,u.jsx)("h6",{className:"mb-3",children:"Select Measurement"}),(0,u.jsx)("p",{className:"mb-3",children:!0===(null===(m=I[0])||void 0===m?void 0:m.gen_set_measr_unit)?"CI":"SI"})]})]})]})]})}})})})]})})}var S=n(69564),_=(0,n(87781).UY)({state:g,data:v.ZP});(0,S.fn)("genSettings",_);var w=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:"Settings / GeneralSettings"}),(0,u.jsx)(N,{})]})}}}]);
//# sourceMappingURL=5707.27f09152.chunk.js.map