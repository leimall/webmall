(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[123],{705:function(e,t,s){Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,4944)),Promise.resolve().then(s.bind(s,4049))},8474:function(e,t,s){"use strict";function r(e,t){var s=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(e){delete s[e]}),s}s.d(t,{Z:function(){return r}})},4944:function(e,t,s){"use strict";s.d(t,{default:function(){return x}});var r=s(7437),a=s(2265),l=s(7138);function i(e){let{item:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{href:"/category/".concat(t.title_en),children:(0,r.jsx)("div",{className:"bg-white pt-10 pb-5 w-40 max-w-sm hover:scale-[1.03] rounded shadow font-[sans-serif] overflow-hidden mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[t.ID%2==0?(0,r.jsx)("img",{src:"/images/category/1.png",className:"w-20 h-20 object-cover"}):(0,r.jsx)("img",{src:"/images/category/2.png",className:"w-20 h-20 object-cover"}),(0,r.jsx)("div",{className:"mt-5 text-center",children:(0,r.jsx)("h3",{className:"text-main font-bold text-md leading-relaxed",children:t.title_en})})]})})})})}var n=s(6508);let c=()=>(0,n.Z)({url:"/category/list",method:"get"});var o=s(7928),d=s(4609),u=s(549);function m(){return(0,r.jsx)("div",{className:"bg-white pt-10 pb-5 w-40 max-w-sm rounded-md font-[sans-serif] overflow-hidden mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)(u.Z.Avatar,{active:!0,size:80,shape:"square",className:"w-20 h-20"}),(0,r.jsx)("div",{className:"mt-5 text-center w-full",children:(0,r.jsx)(u.Z.Input,{active:!0,size:"default",className:"w-[60%] mx-auto"})})]})})}function x(){let[e,t]=(0,a.useState)(!0),[s,l]=a.useState([]),n=async()=>{try{let e=await c();l(e.data),setTimeout(()=>{t(!1)},2e3)}catch(e){t(!1),o.ZP.error("Failed to fetch captcha")}};return(0,a.useEffect)(()=>{n()},[]),(0,r.jsxs)("div",{className:"gap-4 py-8",children:[(0,r.jsx)(d.Z,{title:"Featured Category"}),(0,r.jsx)("div",{className:"flex justify-between flex-wrap gap-4 py-8",children:e?Array.from({length:8}).map((e,t)=>(0,r.jsx)(m,{},t)):s.map(e=>(0,r.jsx)(i,{item:{...e}},e.id))})]})}},4609:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(7437);function a(e){let{title:t}=e;return(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 my-2",children:t})}},4049:function(e,t,s){"use strict";s.d(t,{default:function(){return h}});var r=s(7437),a=s(2265),l=s(6648),i=s(7138);function n(e){let{product:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.default,{href:"/product/".concat(t.productId),children:(0,r.jsxs)("div",{className:"bg-white cursor-pointer shadow rounded hover:scale-[1.01] transition-all relative",children:[(0,r.jsxs)("div",{className:"relative w-full h-0 pb-[100%] rounded-t overflow-hidden mx-auto",children:[(0,r.jsx)(l.default,{src:t.mainImg,alt:t.title,fill:!0,sizes:"100vw",className:"h-full w-full object-cover object-top "}),(0,r.jsx)("div",{className:"absolute inset-0"})]}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsx)("h3",{className:"text-lg font-extrabold text-fta-primary-800",children:t.title}),(0,r.jsx)("p",{className:"text-fta-primary-600 text-md mt-2",children:t.desction}),(0,r.jsxs)("div",{className:"flex items-center mt-2.5 mb-3",children:[(0,r.jsx)("div",{className:"flex items-center space-x-1 rtl:space-x-reverse",children:(0,r.jsx)("svg",{className:"w-4 h-4 text-yellow-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:(0,r.jsx)("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})})}),(0,r.jsx)("span",{className:"bg-fta-accent1 text-fta-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3",children:"5.0"}),(0,r.jsxs)("span",{className:"text-sm text-fta-black-100 font-medium ms-3",children:["(",t.price," reviews)"]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between text-fta-black-100",children:[(0,r.jsxs)("h4",{className:"text-lg text-fta-primary-500 font-bold",children:["$",t.price]}),(0,r.jsx)("div",{className:"bg-fta-primary-500 text-white p-2 rounded-md",children:"Add to cart"})]})]})]})})})}var c=s(4609),o=s(6508);let d=()=>(0,o.Z)({url:"/product/lastest",method:"get"});var u=s(7928),m=s(549);function x(){return(0,r.jsxs)("div",{className:"bg-white hover:shadow-md transition-all relative cursor-pointer",children:[(0,r.jsx)("div",{className:"relative w-full h-0 pb-[100%] overflow-hidden mx-auto bg-gray-200 rounded-md",children:(0,r.jsx)("div",{className:"absolute inset-0 flex justify-center items-center animate-pulse",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 text-gray-400",fill:"none",viewBox:"0 0 36 36",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M3 3v18h18V3H3zM12 12l4 4H8l4-4zm0-2l-4-4h8l-4 4z"})})})}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)(m.Z.Input,{active:!0,size:"small",className:"w-full mb-2",style:{height:"20px"}}),(0,r.jsxs)("div",{className:"flex items-center mt-2.5 mb-3",children:[(0,r.jsx)(m.Z.Avatar,{active:!0,size:"small",className:"mr-2"}),(0,r.jsx)(m.Z.Input,{active:!0,size:"small",className:"w-1/4",style:{height:"16px"}})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(m.Z.Input,{active:!0,size:"default",className:"w-1/4",style:{height:"24px"}}),(0,r.jsx)(m.Z.Button,{active:!0,style:{width:"40%",height:"32px"}})]})]})]})}function h(){let[e,t]=(0,a.useState)(!0),[s,l]=a.useState([]),i=async()=>{try{let e=await d();l(e.data),setTimeout(()=>{t(!1)},2e3)}catch(e){t(!1),u.ZP.error("Failed to fetch products")}};return(0,a.useEffect)(()=>{i()},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{title:"Lastest Products"}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-8 gap-4 sm:gap-6 md:gap-8",children:e?Array.from({length:8}).map((e,t)=>(0,r.jsx)(x,{},t)):s.map(e=>(0,r.jsx)(n,{product:e},e.ID))})]})}},4069:function(e,t,s){"use strict";s.d(t,{t:function(){return l}});var r=s(9099),a=s(9291);let l=(0,r.Ue)()((0,a.tJ)(e=>({token:null,user:null,setUser:t=>e({user:t}),setAuth:(t,s)=>e({token:t,user:s}),clearAuth:()=>e({token:null,user:null})}),{name:"auth-storage",storage:(0,a.FL)(()=>localStorage),migrate:e=>!e.expiresAt||new Date(e.expiresAt)<new Date?{token:null,user:null}:e}))},6508:function(e,t,s){"use strict";var r=s(8472),a=s(7928),l=s(4069);let i=r.Z.create({baseURL:"//api.dms.pub/api/web",timeout:5e3});i.interceptors.request.use(e=>{let{token:t,user:s}=l.t.getState();return t&&(e.headers["x-token"]=t),(null==s?void 0:s.userId)&&(e.headers["x-user-id"]=s.userId),e.headers["Content-Type"]="application/json",e},e=>(a.ZP.destroy,a.ZP.error({content:"请求错误，请稍后再试",duration:5}),Promise.reject(e))),i.interceptors.response.use(e=>{let{status:t,data:s}=e;if(200===t)return 0===s.code?s:Promise.reject(s)},e=>{let{response:t}=e,{clearAuth:s}=l.t.getState();return a.ZP.destroy(),JSON.stringify(e).includes("Network Error")?a.ZP.error({content:"网络超时",duration:5}):t&&401===t.status?(a.ZP.error({content:"未授权，请重新登录",duration:5}),s()):a.ZP.error({content:"请求错误，状态码：".concat(null==t?void 0:t.status),duration:5}),Promise.reject(e)}),t.Z=i}},function(e){e.O(0,[169,227,151,974,281,472,549,971,23,744],function(){return e(e.s=705)}),_N_E=e.O()}]);