(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[774],{477:function(e,t,s){Promise.resolve().then(s.bind(s,4956))},5237:function(e,t,s){"use strict";s.d(t,{V5:function(){return a},l4:function(){return d},rZ:function(){return l}});var r=s(6508);let l=()=>(0,r.Z)({url:"/common/constry",method:"get"}),a=()=>(0,r.Z)({url:"/myself/address",method:"get"}),d=e=>(0,r.Z)({url:"/myself/address",method:"post",data:e})},4956:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var r=s(7437),l=s(2265),a=s(7928),d=s(5237);function n(){let[e,t]=(0,l.useState)([]),[s,n]=(0,l.useState)([]),[o,i]=(0,l.useState)(0),[c,m]=(0,l.useState)({firstName:"",lastName:"",street1:"",street2:"",city:"",region:"",country:"",countryCode:"",zipCode:"",phone:""}),u=async()=>{try{var e,t,s,r;let l=await (0,d.V5)();n(null!==(s=null===(e=l.data)||void 0===e?void 0:e.list)&&void 0!==s?s:[]),i(null!==(r=null===(t=l.data)||void 0===t?void 0:t.total)&&void 0!==r?r:0)}catch(e){a.ZP.error("Failed to fetch address")}},x=async()=>{try{let e=await (0,d.rZ)();t(e.data.list)}catch(e){a.ZP.error("Failed to fetch countries")}};(0,l.useEffect)(()=>{u(),x()},[]);let h=e=>{let{name:t,value:s}=e.target;m({...c,[t]:s})},p=async e=>{e.preventDefault();try{await (0,d.l4)(c),a.ZP.success("Address added successfully")}catch(e){a.ZP.error("Failed to add address")}};return(0,r.jsx)("div",{className:"relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0",children:(0,r.jsxs)("div",{className:"bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]",children:[(0,r.jsx)("div",{className:"hidden py-4 md:w-1/3 lg:w-1/4 md:block",children:(0,r.jsxs)("div",{className:"sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12",children:[(0,r.jsx)("h2",{className:"pl-3 mb-4 text-2xl font-semibold",children:"Settings"}),(0,r.jsx)("a",{href:"#",className:"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full",children:"Profile"}),(0,r.jsx)("a",{href:"#",className:"flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full",children:"Address"}),(0,r.jsx)("a",{href:"#",className:"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full",children:"Notifications"}),(0,r.jsx)("a",{href:"#",className:"flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full",children:"PRO Account"})]})}),(0,r.jsx)("div",{className:"w-full min-h-screen py-1 md:w-2/3 lg:w-3/4",children:(0,r.jsxs)("div",{className:"p-2 md:p-4",children:[o>0?(0,r.jsxs)("div",{className:"w-full px-0 md:px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Your Addresses"}),(0,r.jsx)("ul",{className:"mt-4 space-y-4",children:s.map(e=>(0,r.jsxs)("li",{className:"p-4 border border-gray-300 rounded-md",children:[(0,r.jsxs)("p",{children:[e.firstName," ",e.lastName]}),(0,r.jsx)("p",{children:e.street1}),(0,r.jsx)("p",{children:e.street2}),(0,r.jsxs)("p",{children:[e.city,", ",e.region]}),(0,r.jsxs)("p",{children:[e.country,", ",e.zipCode]}),(0,r.jsx)("p",{children:e.phone})]},e.ID))})]}):(0,r.jsx)("p",{className:"mt-8",children:"No addresses available."}),(0,r.jsxs)("div",{className:"w-full px-0 md:px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg",children:[(0,r.jsx)("h2",{className:"pl-6 text-2xl font-bold sm:text-xl",children:"Address"}),(0,r.jsxs)("form",{onSubmit:p,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"firstName",className:"text-sm font-medium",children:"First Name"}),(0,r.jsx)("input",{id:"firstName",name:"firstName",type:"text",value:c.firstName,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"lastName",className:"text-sm font-medium",children:"Last Name"}),(0,r.jsx)("input",{id:"lastName",name:"lastName",type:"text",value:c.lastName,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"street1",className:"text-sm font-medium",children:"Street 1"}),(0,r.jsx)("input",{id:"street1",name:"street1",type:"text",value:c.street1,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"street2",className:"text-sm font-medium",children:"Street 2 (optional)"}),(0,r.jsx)("input",{id:"street2",name:"street2",type:"text",value:c.street2,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"city",className:"text-sm font-medium",children:"City"}),(0,r.jsx)("input",{id:"city",name:"city",type:"text",value:c.city,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"region",className:"text-sm font-medium",children:"Region"}),(0,r.jsx)("input",{id:"region",name:"region",type:"text",value:c.region,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"country",className:"text-sm font-medium",children:"Country"}),(0,r.jsx)("select",{id:"country",name:"country",value:c.countryCode,onChange:t=>{let s=e.find(e=>e.code===t.target.value);s&&m({...c,country:s.name_en,countryCode:s.code})},className:"mt-1 p-2 border border-gray-300 rounded-md",children:e.map(e=>(0,r.jsxs)("option",{value:e.code,children:[e.name_en," - ",e.code]},e.code))})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"zipCode",className:"text-sm font-medium",children:"Zip Code"}),(0,r.jsx)("input",{id:"zipCode",name:"zipCode",type:"text",value:c.zipCode,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"phone",className:"text-sm font-medium",children:"Phone Number"}),(0,r.jsx)("input",{id:"phone",name:"phone",type:"text",value:c.phone,onChange:h,className:"mt-1 p-2 border border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"saveInfo",name:"saveInfo",type:"checkbox",className:"h-4 w-4 text-indigo-600 border-gray-300 rounded"}),(0,r.jsx)("label",{htmlFor:"saveInfo",className:"ml-2 text-sm",children:"Save this information for next time."})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",className:"w-full px-4 py-2 text-white bg-indigo-600 rounded-md",children:"save"})})]})]})]})})]})})}},4069:function(e,t,s){"use strict";s.d(t,{t:function(){return a}});var r=s(9099),l=s(9291);let a=(0,r.Ue)()((0,l.tJ)(e=>({token:null,user:null,setUser:t=>e({user:t}),setAuth:(t,s)=>e({token:t,user:s}),clearAuth:()=>e({token:null,user:null})}),{name:"auth-storage",storage:(0,l.FL)(()=>localStorage),migrate:e=>!e.expiresAt||new Date(e.expiresAt)<new Date?{token:null,user:null}:e}))},6508:function(e,t,s){"use strict";var r=s(8472),l=s(7928),a=s(4069);let d=r.Z.create({baseURL:"https://api.dms.pub/api/web",timeout:5e3});d.interceptors.request.use(e=>{let{token:t,user:s}=a.t.getState();return t&&(e.headers=e.headers||{},e.headers["x-token"]=t),(null==s?void 0:s.userId)&&(e.headers=e.headers||{},e.headers["x-user-id"]=s.userId),e.headers=e.headers||{},e.headers["Content-Type"]="application/json",e},e=>(l.ZP.destroy,l.ZP.error({content:"请求错误，请稍后再试",duration:5}),Promise.reject(e))),d.interceptors.response.use(e=>{let{status:t,data:s}=e;if(200===t)return 0===s.code?s:Promise.reject(s)},e=>{let{response:t}=e,{clearAuth:s}=a.t.getState();return l.ZP.destroy(),JSON.stringify(e).includes("Network Error")?l.ZP.error({content:"网络超时",duration:5}):t&&401===t.status?(l.ZP.error({content:"未授权，请重新登录",duration:5}),s()):l.ZP.error({content:"请求错误，状态码：".concat(null==t?void 0:t.status),duration:5}),Promise.reject(e)}),t.Z=d}},function(e){e.O(0,[925,633,971,23,744],function(){return e(e.s=477)}),_N_E=e.O()}]);