"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[127],{9114:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(4942),n=a(1413),r=a(9439),l=a(2791),i=a(184);function c(e){var t=e.handleToggleDialog,a=(0,l.useState)({name:"",email:"",number:"",message:""}),c=(0,r.Z)(a,2),o=c[0],d=c[1],u=function(e){d((0,n.Z)((0,n.Z)({},o),{},(0,s.Z)({},e.target.name,e.target.value)))};return(0,i.jsx)("div",{className:"fixed z-10 overflow-y-scroll top-0 w-full left-0",children:(0,i.jsxs)("div",{className:"flex items-center justify-center min-h-[80vh] pt-4 px-4  pb-20 text-center sm:block sm:p-0",children:[(0,i.jsx)("div",{className:"fixed inset-0 transition-opacity",children:(0,i.jsx)("div",{className:"absolute inset-0 bg-gray-900 opacity-75"})}),(0,i.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"\u200b"}),(0,i.jsxs)("div",{className:"inline-block align-center bg-white rounded-lg text-left  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:[(0,i.jsxs)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[(0,i.jsx)("label",{className:"font-medium text-gray-800",children:"Name"}),(0,i.jsx)("input",{type:"text",onChange:u,name:"name",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",required:!0}),(0,i.jsx)("label",{className:"font-medium text-gray-800",children:"Email"}),(0,i.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-email",type:"email",name:"email",onChange:u,placeholder:"********@*****.***",required:!0}),(0,i.jsx)("label",{className:"font-medium text-gray-800",children:"Number"}),(0,i.jsx)("input",{type:"text",onChange:u,name:"number",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",required:!0}),(0,i.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Your Message"}),(0,i.jsx)("textarea",{rows:"10",onChange:u,name:"message",className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",required:!0})]}),(0,i.jsxs)("div",{className:"bg-gray-200 px-4 py-3 text-right",children:[(0,i.jsxs)("button",{onClick:t,type:"button",className:"py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2",children:[(0,i.jsx)("i",{className:"fas fa-times"})," Cancel"]}),(0,i.jsxs)("button",{onClick:function(e){e.preventDefault()},type:"button",className:"py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2",children:[(0,i.jsx)("i",{className:"fas fa-plus"})," Send"]})]})]})]})})}},3127:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(4165),n=a(5861),r=a(9439),l=a(2791),i=a(1243),c=a(5895),o=a(9114),d=a(9544),u=a(1514),m=a(184);function x(){var e=(0,l.useState)([]),t=(0,r.Z)(e,2),a=t[0],x=t[1],g=(0,l.useState)(!0),p=(0,r.Z)(g,2),f=p[0],h=p[1],b=(0,l.useState)(null),y=(0,r.Z)(b,2),j=y[0],v=y[1],N=(0,l.useState)(!1),w=(0,r.Z)(N,2),k=w[0],Z=w[1];(0,l.useEffect)((function(){var e=!0,t=function(){var t=(0,n.Z)((0,s.Z)().mark((function t(){var a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(u.H,"/api/post/"));case 3:a=t.sent,e&&(x(a.data.allPost),h(!1)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&(v(t.t0.message),h(!1));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[]);var C=function(){Z((function(e){return!e}))};return j?(0,m.jsxs)("div",{className:"w-screen h-screen flex justify-center items-center",children:["Error: ",j]}):(0,m.jsxs)("div",{className:"w-full border-t min-h-[80vh] py-4 flex-col flex justify-center items-center",children:[(0,m.jsxs)("div",{className:"container mx-auto",children:[(0,m.jsx)("div",{className:"flex w-full px-6",children:(0,m.jsx)("h2",{className:"text-2xl font-semibold",children:"Available Property"})}),(0,m.jsxs)("div",{className:"mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-items-center justify-center gap-y-20 gap-x-1 mt-10 mb-5",children:[f&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)(d.Z,{}),(0,m.jsx)(d.Z,{})]}),null===a||void 0===a?void 0:a.map((function(e,t){var a=e._id,s=e.users,n=e.title,r=e.description,l=e.imageUrl,i=e.address,o=e.price;return(0,m.jsx)(c.Z,{id:a,users:s._id,title:n,description:r,imageUrl:l,address:i,price:o,handleToggleDialog:C},t)}))]})]}),k&&(0,m.jsx)(o.Z,{handleToggleDialog:C})]})}},5895:function(e,t,a){a.d(t,{Z:function(){return g}});var s=a(4165),n=a(5861),r=a(9439),l=a(2791),i=a(458),c=a(6856),o=a(1243),d=a(7689),u=a(1514),m=a(184);function x(e){var t=e.onConfirm,a=e.onCancel;return(0,m.jsx)("div",{className:"fixed z-10 overflow-y-scroll top-0 right-0 mx-auto left-0",children:(0,m.jsxs)("div",{className:"flex items-center justify-center min-h-[80vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,m.jsx)("div",{className:"fixed inset-0 transition-opacity",children:(0,m.jsx)("div",{className:"absolute inset-0 bg-gray-900 opacity-75"})}),(0,m.jsx)("div",{className:"inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:(0,m.jsxs)("div",{className:"bg-gray-200 flex flex-col justify-center items-center gap-4 w-full px-4 py-3 text-center",children:[(0,m.jsx)("h2",{className:"font-semibold text-lg",children:"Are you sure?"}),(0,m.jsxs)("div",{className:"flex py-2",children:[(0,m.jsx)("button",{onClick:a,type:"button",className:"py-2 px-4 border text-black border-teal-400 outline-none rounded hover:bg-teal-700 hover:text-white mr-2 shadow",children:"Cancel"}),(0,m.jsx)("button",{onClick:t,type:"button",className:"py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2",children:"Delete"})]})]})})]})})}function g(e){var t=e.id,a=e.users,g=e.title,p=e.description,f=e.imageUrl,h=e.address,b=e.price,y=e.handleToggleDialog,j=(0,l.useState)(!1),v=(0,r.Z)(j,2),N=v[0],w=v[1],k=(0,l.useState)(null),Z=(0,r.Z)(k,2),C=Z[0],S=Z[1],z=localStorage.getItem("userId"),D=(0,d.s0)(),q=localStorage.getItem("token"),E=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.delete("".concat(u.H,"/api/post/").concat(t),{headers:{authorization:q}});case 3:window.location.reload(),D("/dash"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),S(e.t0.message),w(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"w-[90%] relative bg-white shadow-md rounded-xl",children:[(0,m.jsx)("img",{src:f,alt:g,className:"object-cover rounded-t-xl"}),(0,m.jsxs)("div",{className:"flex justify-between px-2 py-3",children:[(0,m.jsxs)("div",{className:"flex items-start flex-col",children:[(0,m.jsx)("p",{className:"text-lg font-bold text-black py-2 block capitalize",children:g}),(0,m.jsx)("span",{className:"text-gray-600 w-full uppercase text-xs",children:p}),(0,m.jsx)("p",{className:"text-lg font-bold text-black mt-2 block capitalize",children:h}),(0,m.jsxs)("p",{className:"text-lg font-semibold text-black cursor-auto mt-2",children:["$",b," per week"]}),!z&&(0,m.jsx)("button",{onClick:y,className:"w-[120px] p-3 mt-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-500",children:"Book Now"})]}),a===z&&(0,m.jsxs)("div",{className:"flex justify-start items-start gap-2",children:[(0,m.jsx)("button",{className:"p-2 bg-teal-600 text-white rounded-full",onClick:function(){D("/post/update/".concat(t))},children:(0,m.jsx)(i.FNg,{size:"20px"})}),(0,m.jsx)("button",{className:"p-2 bg-teal-600 text-white rounded-full",onClick:function(){return w(!0)},children:(0,m.jsx)(c.FH3,{size:"20px"})})]})]}),N&&(0,m.jsx)(x,{onConfirm:E,onCancel:function(){return w(!1)}}),C&&(0,m.jsxs)("div",{children:["Error is: ",C]})]})}},9544:function(e,t,a){a.d(t,{Z:function(){return n}});a(2791);var s=a(184);function n(){return(0,s.jsxs)("div",{className:"h-[480px] w-[90%] border-2 border-gray-200 rounded-lg overflow-hidden",children:[(0,s.jsx)("div",{className:"bg-gray-200 animate-pulse w-full h-[55%]"}),(0,s.jsxs)("div",{className:"p-3 mb-2",children:[(0,s.jsx)("p",{className:"mb-4 h-6 animate-pulse bg-gray-200 mt-6 "}),(0,s.jsx)("p",{className:"leading-relaxed h-9 animate-pulse bg-gray-200 "}),(0,s.jsx)("div",{className:"flex mt-4 bg-gray-200 h-9  animate-pulse"}),(0,s.jsx)("div",{className:"flex mt-4 bg-gray-200 h-6 animate-pulse mb-4"})]})]})}}}]);
//# sourceMappingURL=127.8b6ade7c.chunk.js.map