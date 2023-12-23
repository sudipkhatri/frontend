"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[160],{2160:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(4942),a=r(1413),l=r(4165),s=r(5861),o=r(9439),i=r(2791),c=r(7689),d=r(1243),u=r(1514),p=r(184);function m(){var e=localStorage.getItem("token"),t=(0,i.useState)({title:"",description:"",price:"",address:"",imageUrl:""}),r=(0,o.Z)(t,2),m=r[0],f=r[1],h=(0,c.UO)().id,x=(0,c.s0)();(0,i.useEffect)((function(){var t=function(){var t=(0,s.Z)((0,l.Z)().mark((function t(){var r,n;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.Z.get("".concat(u.H,"/api/post/").concat(h),{headers:{authorization:e}}).catch((function(e){return console.log(e)}));case 2:return r=t.sent,t.next=5,r.data.postData;case 5:n=t.sent,f({title:n.title,description:n.description,imageUrl:n.imageUrl,price:n.price,address:n.address});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[h,e]);var b=function(){var t=(0,s.Z)((0,l.Z)().mark((function t(){var r,n;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.Z.patch("".concat(u.H,"/api/post/update/").concat(h),{title:m.title,description:m.description,imageUrl:m.imageUrl,price:m.price,address:m.address},{headers:{authorization:e}}).catch((function(e){return console.log(e)}));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(e){e.preventDefault(),f((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,n.Z)({},e.target.name,e.target.value))}))};return(0,p.jsx)("div",{className:"w-full min-h-[90vh] border-t py-8",children:(0,p.jsxs)("div",{className:"flex sm:w-1/2 lg:w-2/4 bg-[#f4f4f4] py-8 rounded-lg 2xl:w-1/4 flex-col gap-4 mx-auto flex-col mt-8",children:[(0,p.jsx)("div",{className:"flex w-3/4 mx-auto",children:(0,p.jsx)("h2",{className:"font-semibold text-3xl pb-4",children:" Add Details Below"})}),(0,p.jsxs)("form",{className:"flex flex-col w-3/4 mx-auto justify-center gap-3 items-start",onSubmit:function(e){e.preventDefault(),b().then((function(){return x("/dash")}))},children:[(0,p.jsx)("label",{className:"font-semibold",htmlFor:"html",children:"Title:"}),(0,p.jsx)("input",{className:"border w-full rounded p-2 border-teal-400 outline-none",type:"text",name:"title",value:m.title,onChange:g,required:!0}),(0,p.jsx)("label",{className:"font-semibold",htmlFor:"html",children:"Video URL:"}),(0,p.jsx)("input",{className:"border w-full rounded p-2 border-teal-400 outline-none",type:"text",name:"imageUrl",value:m.imageUrl,onChange:g,required:!0}),(0,p.jsx)("label",{className:"font-semibold",htmlFor:"html",children:"Price:"}),(0,p.jsx)("input",{className:"border w-full rounded p-2 border-teal-400 outline-none",type:"number",name:"price",value:m.price,onChange:g,required:!0}),(0,p.jsx)("label",{className:"font-semibold",htmlFor:"html",children:"Full Address:"}),(0,p.jsx)("input",{className:"border w-full rounded p-2 border-teal-400 outline-none",type:"text",name:"address",value:m.address,onChange:g,required:!0}),(0,p.jsx)("label",{className:"font-semibold",htmlFor:"html",children:"Description:"}),(0,p.jsx)("textarea",{className:"border w-full rounded p-2 border-teal-400 outline-none",type:"description",name:"description",value:m.description,onChange:g,required:!0}),(0,p.jsx)("button",{className:"w-[120px] mt-2 border-teal-200 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded",type:"submit",children:"Update"})]})]})})}}}]);
//# sourceMappingURL=160.a28e21e8.chunk.js.map