"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[5546],{44630:function(e,s,t){var a=t(29439),r=t(72791);s.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,s=(0,r.useState)(""),t=(0,a.Z)(s,2),n=t[0],i=t[1];return(0,r.useEffect)((function(){if(n){var s=setTimeout((function(){return i("")}),e);return function(){clearTimeout(s)}}}),[n]),[n,i]}},5546:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var a=t(72791),r=t(74165),n=t(15861),i=t(29439),l=t(50662),c=t(7869),o=t(54664),u=t(44630),d=t(92506),m=t(62797),x=t(57689),f=t(54110),p=t(80184),h=m.Ry().shape({email:m.Z_().required("Please enter your registered email id")}),g=function(e){var s=(0,x.s0)(),t=e.disableSubmit,m=void 0!==t&&t,g=e.className,b=e.signInUrl,v=void 0===b?"/sign-in":b,j=(0,a.useState)(""),y=(0,i.Z)(j,2),w=y[0],Z=y[1],S=(0,u.Z)(),N=(0,i.Z)(S,2),k=N[0],I=N[1],E=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(s,t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),a={user_id:s.email},e.next=4,(0,o.tH)(a);case 4:"success"===(i=e.sent).status&&setTimeout((0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(!1),console.log(i.data.data.response),(0,f.By)("success","Successfully Submitted"),Z(i.data.data.response);case 4:case"end":return e.stop()}}),e)}))),2e3),"failed"===i.status&&(I((0,f.ld)(i)),t(!1));case 7:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){w&&s("/changePassword",{state:{data:w}})}),[w]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:g,class:"bg-white p-6",style:{padding:"24px 32px 48px",width:"560px",height:"",opacity:.9,borderRadius:"4px"},children:[k&&(0,p.jsx)(l.bZ,{className:"mb-4",type:"danger",showIcon:!0,children:k}),(0,p.jsx)(d.J9,{initialValues:{email:" "},validationSchema:h,onSubmit:function(e,s){var t=s.setSubmitting;m?t(!1):E(e,t)},children:function(e){var s=e.touched,t=e.errors,a=e.isSubmitting;return(0,p.jsx)(d.l0,{children:(0,p.jsxs)(l.Yb,{children:[(0,p.jsxs)("div",{className:"grid justify-center gap-8 mb-3",children:[(0,p.jsx)("p",{className:"ml-16",children:(0,p.jsx)("img",{className:"w-20",src:"/img/avatars/Primary Logo_Large.png"})}),(0,p.jsx)("h4",{className:"font-bold text-2xl text-center",children:"Forgot Password"})]}),(0,p.jsx)(l.xJ,{label:"Email ID",invalid:t.email&&s.email,errorMessage:t.email,children:(0,p.jsx)(d.gN,{type:"email",autoComplete:"off",name:"email",placeholder:"Enter Email Id",component:l.II})}),(0,p.jsx)(l.zx,{block:!0,loading:a,variant:"solid",type:"submit",placeholder:"Enter your Email ID to reset password",children:"Submit"}),(0,p.jsxs)("div",{class:"flex items-center py-3",children:[(0,p.jsx)("div",{class:"flex-grow h-px bg-gray-400"}),(0,p.jsx)("span",{class:"flex-shrink  text-black px-4",children:"Or"}),(0,p.jsx)("div",{class:"flex-grow h-px bg-gray-400"})]}),(0,p.jsx)("div",{className:" text-center",children:(0,p.jsx)("p",{className:"border-2 border-blue-400 text-blue-500  justify-center p-3 w-full font-bold h-11 rounded",children:(0,p.jsx)(c.vm,{to:v,className:"text-[#0080FF]",children:"Back To Sign In page"})})})]})})}})]})})},b=function(){return(0,p.jsx)(g,{disableSubmit:!1})}}}]);
//# sourceMappingURL=5546.7d5b295a.chunk.js.map