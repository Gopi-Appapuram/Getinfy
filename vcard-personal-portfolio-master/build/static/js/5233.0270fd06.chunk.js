"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[5233],{44630:function(e,n,t){var r=t(29439),l=t(72791);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=(0,l.useState)(""),t=(0,r.Z)(n,2),s=t[0],a=t[1];return(0,l.useEffect)((function(){if(s){var n=setTimeout((function(){return a("")}),e);return function(){clearTimeout(n)}}}),[s]),[s,a]}},15233:function(e,n,t){t.r(n);var r=t(74165),l=t(15861),s=t(1413),a=t(29439),i=t(72791),c=t(7869),o=t(50662),u=t(92506),d=t(57689),_=t(11087),m=t(62797),f=t(8939),x=t(16030),h=t(64963),g=t(69811),v=t(44630),p=t(54110),j=t(67202),b=t(37450),y=t(36064),w=t(80184),N=[{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"Arabic",value:"ar"},{label:"Portuguese",value:"pt"}],S=[{label:"DD-MM-YYYY",value:"DD-MM-YYYY"},{label:"MM-DD-YYYY",value:"MM-DD-YYYY"},{label:"YYYY-MM-DD",value:"YYYY-MM-DD"},{label:"MM-YYYY-DD",value:"MM-YYYY-DD"}],k=[{label:"12 hrs",value:"12 hrs"},{label:"24 hrs",value:"24 hrs"}],Z=[{label:"UP",value:"up"},{label:"Down",value:"down"}],Y=[{label:"Inclusive",value:"inclusive"},{label:"Exclusive",value:"exclusive"}],D=[{label:"CI",value:"ci"},{label:"SI",value:"si"}],F=m.Ry().shape({gen_set_lang_pref:m.Z_().required("Please select language preferences").nullable(),gen_set_timezone:m.Z_().required("Please select language preferences").nullable(),gen_set_date_format:m.Z_().required("Please  select  date format").nullable(),gen_set_time_format:m.Z_().required("Please  select  time format").nullable(),rel_gen_set_curncy_pref:m.Z_().required("Please  select currency preferences").nullable(),gen_set_tokenvalue:m.Z_().required("Please enter no of tokens as per one USD").nullable()}),C={gen_set_rndoff_val:"",gen_set_measr_unit:"",gen_set_lang_pref:"",gen_set_timezone:"",gen_set_date_format:"",gen_set_time_format:"",rel_gen_set_curncy_pref:"",gen_set_tokenvalue:"",post_ent_cust_wait:"",sales_exec_wait:"",retail_cust_wait:"",pre_ent_cust_wait:"",solPrice:""};n.default=function(){var e,n,t,M=(0,d.s0)(),P=(0,x.I0)(),E=(0,v.Z)(),J=(0,a.Z)(E,2),q=J[0],I=J[1],z=(0,x.v9)((function(e){return e.auth.user})).unq_id,T=(0,d.TH)(),V=null!==(e=T.state)&&void 0!==e&&e.mode?T.state.mode:"ADD",R=null===(n=T.state)||void 0===n?void 0:n.data,A=null===(t=T.state)||void 0===t?void 0:t.account,B=(0,i.useState)((0,s.Z)((0,s.Z)({},C),{},{postEnterPrise:!1,salesExec:!1,EntRetPaid:!1})),U=(0,a.Z)(B,2),G=U[0],L=U[1],X=(0,i.useState)(!1),H=(0,a.Z)(X,2),O=H[0],W=H[1],K=(0,i.useState)(!1),Q=(0,a.Z)(K,2),$=Q[0],ee=Q[1],ne=(0,i.useState)(!1),te=(0,a.Z)(ne,2),re=te[0],le=te[1],se=null===f.E||void 0===f.E?void 0:f.E.map((function(e){return{value:e.id,label:e.value}})),ae=(0,x.v9)((function(e){return e.auth.user})).enterAccount,ie=(0,x.v9)((function(e){var n,t;return null===(n=e.genSettings)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.currencyList}));(0,i.useEffect)((function(){P((0,h.zC)({enterAccount:ae}))}),[P,ae]),(0,i.useEffect)((function(){if(R&&R.id){var e=(0,j.rN)(R,G);L(e),R.post_ent_cust_wait&&W(!0),R.sales_exec_wait&&ee(!0),R.retail_cust_wait&&le(!0)}else L(C),W(!1),ee(!1),le(!1)}),[R,G]);var ce=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n){var t,l,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="up"===n.gen_set_rndoff_val,l="ci"===n.gen_set_measr_unit,n.gen_set_rndoff_val=t,n.gen_set_measr_unit=l,n.id=null===R||void 0===R?void 0:R.id,n.unq_id=A,n.gen_set_tax=!0,n.pre_ent_cust_wait=1,void 0!=(null===R||void 0===R?void 0:R.id)){e.next=14;break}return e.next=11,(0,g.rq)(n);case 11:s=e.sent,e.next=17;break;case 14:return e.next=16,(0,g.df)(n);case 16:s=e.sent;case 17:"success"===s.status&&((0,p.By)("success","Updated successfully "),M("/settings-menu-general-settings"),z==A&&(P((0,y.Wg)(n.gen_set_lang_pref)),P((0,y.iH)(n.gen_set_date_format)))),"failed"===s.status&&((0,p.By)("warning","Something went wrong "),I((0,p.ld)(s)));case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=function(e,n,t){"post_ent_cust_wait"===t&&(W(n),e.setFieldValue("post_ent_cust_wait","")),"sales_exec_wait"===t&&(ee(n),e.setFieldValue("sales_exec_wait","")),"retail_cust_wait"===t&&(le(n),e.setFieldValue("retail_cust_wait",""))},ue=[{name:"Settings"},{name:"General Settings",link:"/settings-menu-general-settings"}];return"EDIT"===V&&(ue=[{name:"Settings"},{name:"General Settings",link:"/settings-menu-general-settings"},{name:"Edit General Settings"}]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(b.Z,{list:ue}),q&&(0,w.jsx)(o.bZ,{className:"mb-4",type:"danger",showIcon:!0,children:Array.isArray(q)?q.join(", "):q}),(0,w.jsxs)("div",{className:"mt-3",children:[(0,w.jsx)("h3",{children:"Edit General Settings"}),(0,w.jsx)(u.J9,{initialValues:G,validationSchema:F,onSubmit:function(e,n){(0,n.setSubmitting)(!0),ce(e)},children:function(e){var n=e.values,t=e.touched,s=e.errors,a=(e.isSubmitting,e.handleSubmit),i=e.resetForm;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(u.l0,{onSubmit:a,children:[(0,w.jsx)("div",{style:{backgroundColor:"#F5F5F5",padding:"15px 15px ",marginTop:"10px"},children:(0,w.jsx)(o.Yb,{children:(0,w.jsxs)(c.lG,{className:"h-full p-4",bodyClass:"h-full",children:[(0,w.jsxs)("div",{className:"md:grid grid-cols-2 ml-1 mt-3 ",children:[(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Roundoff Values",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),children:(0,w.jsx)("div",{className:"flex",children:Z.map((function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.gN,{className:"mr-2",type:"radio",autoComplete:"off",name:"gen_set_rndoff_val",component:o.Y8,value:e.value}),(0,w.jsx)("div",{className:"mr-3",children:(0,w.jsx)("label",{children:e.label})})]})}))})}),(0,w.jsx)(o.xJ,{label:(0,w.jsx)("p",{children:"Solution Price"}),children:(0,w.jsx)("div",{className:"flex",children:Y.map((function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.gN,{className:"mr-2",type:"radio",autoComplete:"off",name:"solPrice",component:o.Y8,value:e.value}),(0,w.jsx)("div",{className:"mr-3",children:(0,w.jsx)("label",{children:e.label})})]})}))})})]}),(0,w.jsxs)("div",{className:"md:grid grid-cols-2",children:[(0,w.jsx)("div",{className:"mt-5",style:{width:"90%"},children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Language Preferences",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.gen_set_lang_pref&&t.gen_set_lang_pref,errorMessage:s.gen_set_lang_pref,children:(0,w.jsx)(u.gN,{name:"gen_set_lang_pref",style:{width:"30%",paddingLeft:"10px"},children:function(e){var t=e.field,r=e.form;return(0,w.jsx)(o.Ph,{placeholder:"Select Language",field:t,form:r,options:N,value:N.filter((function(e){return e.value===n.gen_set_lang_pref})),onChange:function(e){return r.setFieldValue(t.name,e.value)}})}})})}),(0,w.jsx)("div",{className:"mt-5",children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Select Measurement Unit",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),children:(0,w.jsx)("div",{className:"flex",children:D.map((function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.gN,{className:"mr-2",type:"radio",autoComplete:"off",name:"gen_set_measr_unit",component:o.Y8,value:e.value}),(0,w.jsx)("div",{className:"mr-3",children:(0,w.jsx)("label",{children:e.label})})]})}))})})})]}),(0,w.jsxs)("div",{className:"md:grid grid-cols-2",children:[(0,w.jsx)("div",{className:"mt-5 mr-4",style:{width:"90%"},children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Time Zone",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.gen_set_timezone&&t.gen_set_timezone,errorMessage:s.gen_set_timezone,children:(0,w.jsx)(u.gN,{name:"gen_set_timezone",children:function(e){var t=e.field,r=e.form;return(0,w.jsx)(o.Ph,{placeholder:" Select Time Zone",field:t,form:r,options:se,value:se.filter((function(e){return e.value===n.gen_set_timezone})),onChange:function(e){return r.setFieldValue(t.name,e.value)}})}})})}),(0,w.jsxs)("div",{style:{display:"flex"},children:[(0,w.jsx)("div",{className:"mt-5 mr-4",children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Select Date Format",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.gen_set_date_format&&t.gen_set_date_format,errorMessage:s.gen_set_date_format,children:(0,w.jsx)(u.gN,{name:"gen_set_date_format",children:function(e){var t=e.field,r=e.form;return(0,w.jsx)(o.Ph,{placeholder:"Select Date Format",field:t,form:r,style:{width:"50%"},options:S,value:S.filter((function(e){return e.value===n.gen_set_date_format})),onChange:function(e){return r.setFieldValue(t.name,e.value)}})}})})}),(0,w.jsx)("div",{className:"mt-5",children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Select Time Format",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.gen_set_time_format&&t.gen_set_time_format,errorMessage:s.gen_set_time_format,children:(0,w.jsx)(u.gN,{name:"gen_set_time_format",children:function(e){var t=e.field,r=e.form;return(0,w.jsx)(o.Ph,{placeholder:"Select Time Format",field:t,form:r,style:{width:"50%"},options:k,value:k.filter((function(e){return e.value===n.gen_set_time_format})),onChange:function(e){return r.setFieldValue(t.name,e.value)}})}})})})]})]}),(0,w.jsxs)("div",{className:"md:grid grid-cols-2",children:[(0,w.jsx)("div",{className:"mt-5",style:{width:"90%"},children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["Currency Preferences",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.rel_gen_set_curncy_pref&&t.rel_gen_set_curncy_pref,errorMessage:s.rel_gen_set_curncy_pref,children:(0,w.jsx)(u.gN,{name:"rel_gen_set_curncy_pref",children:function(e){var t=e.field,r=e.form;return(0,w.jsx)(o.Ph,{placeholder:"Select currency",field:t,form:r,style:{width:"50%"},options:ie,value:null===ie||void 0===ie?void 0:ie.filter((function(e){return e.value===n.rel_gen_set_curncy_pref})),onChange:function(e){return r.setFieldValue(t.name,e.value)}})}})})}),(0,w.jsx)("div",{className:"mt-5",style:{width:"90%"},children:(0,w.jsx)(o.xJ,{label:(0,w.jsxs)("p",{children:["One USD = No of Tokens",(0,w.jsx)("span",{style:{color:"red"},children:"*"})]}),invalid:s.gen_set_tokenvalue&&t.gen_set_tokenvalue,errorMessage:s.gen_set_tokenvalue,children:(0,w.jsx)(u.gN,{type:"text",autoComplete:"off",placeholder:"Enter no of tokens",name:"gen_set_tokenvalue",component:o.II})})})]}),(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:"md:grid grid-cols-1",children:[(0,w.jsx)("h6",{children:"Select Customer Type and Duration For Blocking Inventory"}),(0,w.jsxs)("div",{className:"flex gap-8 mt-4",children:[(0,w.jsxs)(o.xJ,{className:"mr-4",children:[(0,w.jsx)(u.gN,{name:"",children:function(e){e.field;var n=e.form;return(0,w.jsx)(o.XZ,{checked:O,onChange:function(e){return oe(n,e,"post_ent_cust_wait")}})}}),(0,w.jsx)("label",{children:"Enterprise Postpaid"})]}),(0,w.jsxs)(o.xJ,{className:"ml-2 mr-8",children:[(0,w.jsx)(u.gN,{name:"",children:function(e){e.field;var n=e.form;return(0,w.jsx)(o.XZ,{checked:$,onChange:function(e){return oe(n,e,"sales_exec_wait")}})}}),(0,w.jsx)("label",{className:"",children:"Sales Executive"})]}),(0,w.jsxs)(o.xJ,{className:"ml-4",children:[(0,w.jsx)(u.gN,{name:"",children:function(e){e.field;var n=e.form;return(0,w.jsx)(o.XZ,{checked:re,onChange:function(e){return oe(n,e,"retail_cust_wait")}})}}),(0,w.jsx)("label",{className:"",children:"Enterprise & Retail Paid"})]})]})]})}),(0,w.jsxs)("div",{className:"flex ",children:[(0,w.jsxs)(o.xJ,{children:[(0,w.jsx)(u.gN,{style:{width:"80%"},type:"text",autoComplete:"off",placeholder:"Enter Duration",name:"post_ent_cust_wait",component:o.II,disabled:!O,validate:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=9;break}return e.prev=1,e.next=4,m.Z_().required("Required").validate(n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}()}),(0,w.jsx)(u.Bc,{name:"post_ent_cust_wait",children:function(e){return(0,w.jsx)("div",{style:{color:"red"},children:e})}})]}),(0,w.jsxs)(o.xJ,{errorMessage:s.sales_exec_wait,children:[(0,w.jsx)(u.gN,{style:{width:"80%"},type:"text",autoComplete:"off",placeholder:"Enter Duration",name:"sales_exec_wait",component:o.II,disabled:!$,validate:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!$){e.next=9;break}return e.prev=1,e.next=4,m.Z_().required("Required").validate(n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}()}),(0,w.jsx)(u.Bc,{name:"sales_exec_wait",children:function(e){return(0,w.jsx)("div",{style:{color:"red"},children:e})}})]}),(0,w.jsxs)(o.xJ,{errorMessage:s.retail_cust_wait,children:[(0,w.jsx)(u.gN,{style:{width:"80%"},type:"text",autoComplete:"off",placeholder:"Enter Duration",name:"retail_cust_wait",component:o.II,disabled:!re,validate:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!re){e.next=9;break}return e.prev=1,e.next=4,m.Z_().required("Required").validate(n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}()}),(0,w.jsx)(u.Bc,{name:"retail_cust_wait",children:function(e){return(0,w.jsx)("div",{style:{color:"red"},children:e})}})]})]})]})})}),(0,w.jsx)("div",{className:"mt-4 text-right flex justify-end",children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.zx,{className:"block lg:inline-block md:mb-0 mb-4 mx-2 flex gap-2 text-[#0080FF] border border-[#0080FF]",style:{fontStyle:"normal",fontSize:"18px"},type:"button",onClick:function(){return function(e){e(),W(!1),ee(!1),le(!1)}(i)},children:"Reset"}),(0,w.jsx)(_.rU,{className:"block lg:inline-block md:mb-0 mb-4",to:"/settings-menu-general-settings",children:(0,w.jsx)(o.zx,{className:"mx-2",variant:"solid",style:{backgroundColor:"#4D4D4D",fontStyle:"normal",fontSize:"18px"},children:"Cancel"})}),(0,w.jsx)(o.zx,{variant:"solid",type:"submit",style:{color:"white",fontStyle:"normal",fontSize:"18px"},children:"Publish"})]})})]})})}})]})]})}}}]);
//# sourceMappingURL=5233.0270fd06.chunk.js.map