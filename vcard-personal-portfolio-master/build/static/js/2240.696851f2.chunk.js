"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[2240],{2240:function(e,l,a){a.r(l);var n=a(1413),r=(a(72791),a(44967)),s=a(64443),t=a(80184);l.default=function(e){return(0,t.jsxs)("div",{className:"app-layout-blank flex flex-auto flex-col h-[100vh]",children:[(0,t.jsx)(r.Z,(0,n.Z)({},e)),(0,t.jsx)(s.Z,{className:"hidden"})]})}},64443:function(e,l,a){a.d(l,{Z:function(){return O}});var n=a(1413),r=a(44925),s=a(72791),t=a(81694),i=a.n(t),c=a(50662),u=a(58617),o=a(29439),d=a(21469),m=a(80184),v=function(){var e=(0,d.Z)(),l=(0,o.Z)(e,2),a=l[0],n=l[1],r=(0,s.useCallback)((function(e){n(e?"dark":"light")}),[n]);return(0,m.jsx)("div",{children:(0,m.jsx)(c.T5,{defaultChecked:a,onChange:function(e){return r(e)}})})},h=a(7869),x=a(23532),f=a(16030),j=a(21447),b=a(98669),g=[{value:b.kD,label:"Classic",src:"/img/thumbs/layouts/classic.jpg",srcDark:"/img/thumbs/layouts/classic-dark.jpg"},{value:b.HR,label:"Mordern",src:"/img/thumbs/layouts/modern.jpg",srcDark:"/img/thumbs/layouts/modern-dark.jpg"},{value:b.ig,label:"Stacked Side",src:"/img/thumbs/layouts/stackedSide.jpg",srcDark:"/img/thumbs/layouts/stackedSide-dark.jpg"},{value:b.iv,label:"Simple",src:"/img/thumbs/layouts/simple.jpg",srcDark:"/img/thumbs/layouts/simple-dark.jpg"},{value:b.$J,label:"Decked",src:"/img/thumbs/layouts/decked.jpg",srcDark:"/img/thumbs/layouts/decked-dark.jpg"},{value:b.zV,label:"Blank",src:"/img/thumbs/layouts/blank.jpg",srcDark:"/img/thumbs/layouts/blank-dark.jpg"}],p=function(){var e=(0,f.v9)((function(e){return e.theme.layout.type})),l=(0,f.I0)(),a=(0,x.Z)().textTheme;return(0,m.jsx)("div",{children:(0,m.jsx)(c.XX,{className:"w-full",value:[e],onChange:function(e){return function(e){l((0,j.jx)(e))}(e[0])},children:(0,m.jsx)("div",{className:"grid grid-cols-3 gap-4 w-full",children:g.map((function(e){return(0,m.jsx)(c.XX.Item,{value:e.value,children:function(l){var n=l.ref,r=l.active,s=l.onSegmentItemClick,t=l.disabled;return(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)(h.v0,{hoverable:!0,ref:n,active:r,disabled:t,defaultGutter:!1,onSegmentItemClick:s,className:"relative min-h-[80px] w-full",customCheck:(0,m.jsx)(u.HJi,{className:i()(a,"absolute top-2 right-2 text-lg")}),children:(0,m.jsx)(h.A9,{className:"rounded-md",src:e.src,darkModeSrc:e.srcDark,alt:""})}),(0,m.jsx)("div",{className:i()(r&&a,"mt-2 font-semibold"),children:e.label})]})}},e.value)}))})})})},k=a(74999),y=["children"],C=k.c.Control,N=[{label:"Red",value:"red"},{label:"Orange",value:"orange"},{label:"Amber",value:"amber"},{label:"Yellow",value:"yellow"},{label:"Lime",value:"lime"},{label:"Green",value:"green"},{label:"Emerald",value:"emerald"},{label:"Teal",value:"teal"},{label:"Cyan",value:"cyan"},{label:"Sky",value:"sky"},{label:"Blue",value:"blue"},{label:"Indigo",value:"indigo"},{label:"Violet",value:"violet"},{label:"Purple",value:"purple"},{label:"Fuchsia",value:"fuchsia"},{label:"Pink",value:"pink"},{label:"Rose",value:"rose"}],Z=[{label:"400",value:400},{label:"500",value:500},{label:"600",value:600},{label:"700",value:700},{label:"800",value:800},{label:"900",value:900}],w=function(e){var l=e.className,a=e.themeColor,n=(0,f.v9)((function(e){return e.theme.primaryColorLevel}));return(0,m.jsx)(c.Ct,{className:l,innerClass:i()("bg-".concat(a,"-").concat(n))})},D=function(e){var l=e.innerProps,a=e.label,r=e.value,s=e.isSelected;return(0,m.jsxs)("div",(0,n.Z)((0,n.Z)({className:"flex items-center justify-between p-2 ".concat(s?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600")},l),{},{children:[(0,m.jsxs)("div",{className:"flex items-center gap-2",children:[(0,m.jsx)(w,{themeColor:r}),(0,m.jsx)("span",{children:a})]}),s&&(0,m.jsx)(u.dZ6,{className:"text-emerald-500 text-xl"})]}))},S=function(e){var l=e.children,a=(0,r.Z)(e,y),s=a.getValue()[0],t=(0,f.v9)((function(e){return e.theme.themeColor}));return(0,m.jsxs)(C,(0,n.Z)((0,n.Z)({},a),{},{children:[s&&(0,m.jsx)(w,{themeColor:t,className:"ltr:ml-4 rtl:mr-4"}),l]}))},T=function(){var e=(0,f.I0)(),l=(0,f.v9)((function(e){return e.theme.themeColor})),a=(0,f.v9)((function(e){return e.theme.primaryColorLevel}));return(0,m.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,m.jsx)(c.Ph,{size:"sm",options:N,components:{Option:D,Control:S},value:N.filter((function(e){return e.value===l})),onChange:function(l){var a=l.value;e((0,j.gw)(a))}}),(0,m.jsx)(c.Ph,{size:"sm",options:Z,value:Z.filter((function(e){return e.value===a})),onChange:function(l){var a=l.value;e((0,j.HN)(a))}})]})},I=a(94073),R=[{value:b.Bw.DIR_LTR,label:"LTR"},{value:b.Bw.DIR_RTL,label:"RTL"}],B=function(e){var l=e.callBackClose,a=(0,I.Z)(),n=(0,o.Z)(a,2),r=n[0],s=n[1];return(0,m.jsx)(c.BZ,{size:"sm",children:R.map((function(e){return(0,m.jsx)(c.zx,{active:r===e.value,onClick:function(){return a=e.value,s(a),void(null===l||void 0===l||l());var a},children:e.label},e.value)}))})},L=function(){var e=(0,f.v9)((function(e){return e.theme.navMode})),l=(0,f.I0)();return(0,m.jsxs)(c.Y8.Group,{value:e===b.Xc?b.Xc:"default",onChange:function(e){return function(e){l((0,j.Gn)(e))}(e)},children:[(0,m.jsx)(c.Y8,{value:"default",children:"Default"}),(0,m.jsx)(c.Y8,{value:b.Xc,children:"Themed"})]})},X=a(9603),P=function(){var e=(0,f.v9)((function(e){return e.theme}));return(0,m.jsx)(c.zx,{block:!0,variant:"solid",onClick:function(){var l=(0,n.Z)((0,n.Z)((0,n.Z)({},X.c),e),{},{layout:{type:e.layout.type,sideNavCollapse:e.layout.sideNavCollapse},panelExpand:!1});navigator.clipboard.writeText(JSON.stringify(l,null,2)),c.Am.push((0,m.jsx)(c.P_,{title:"Copy Success",type:"success",children:"Please replace themeConfig in 'src/configs/themeConfig.js'"}),{placement:"top-center"})},children:"Copy config"})},z=function(e){var l=e.callBackClose;return(0,m.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-y-10 mb-6",children:[(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{children:"Dark Mode"}),(0,m.jsx)("span",{children:"Switch theme to dark mode"})]}),(0,m.jsx)(v,{})]}),(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{children:"Direction"}),(0,m.jsx)("span",{children:"Select a direction"})]}),(0,m.jsx)(B,{callBackClose:l})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"mb-3",children:"Nav Mode"}),(0,m.jsx)(L,{})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"mb-3",children:"Theme"}),(0,m.jsx)(T,{})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h6",{className:"mb-3",children:"Layout"}),(0,m.jsx)(p,{})]})]}),(0,m.jsx)(P,{})]})},M=function(e){return(0,m.jsx)(z,(0,n.Z)({},e))},_=a(68585),G=["className"],O=(0,_.Z)((function(e){var l=(0,f.I0)(),a=e.className,s=(0,r.Z)(e,G),t=(0,f.v9)((function(e){return e.theme.panelExpand})),o=(0,f.v9)((function(e){return e.theme.direction})),d=function(){l((0,j.e_)(!1));var e=document.body.classList;e.contains("drawer-lock-scroll")&&e.remove("drawer-lock-scroll","drawer-open")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",(0,n.Z)((0,n.Z)({className:i()("text-2xl",a),onClick:function(){l((0,j.e_)(!0))}},s),{},{children:(0,m.jsx)(u.XlX,{})})),(0,m.jsx)(c.dy,{title:"Theme Config",isOpen:t,onClose:d,onRequestClose:d,placement:"rtl"===o?"left":"right",width:375,children:(0,m.jsx)(M,{callBackClose:d})})]})}))},68585:function(e,l,a){var n=a(1413),r=(a(72791),a(81694)),s=a.n(r),t=a(80184);l.Z=function(e){return function(l){var a=l.className,r=l.hoverable,i=void 0===r||r;return(0,t.jsx)(e,(0,n.Z)((0,n.Z)({},l),{},{className:s()("header-action-item",i&&"header-action-item-hoverable",a)}))}}}}]);
//# sourceMappingURL=2240.696851f2.chunk.js.map