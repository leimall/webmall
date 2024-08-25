(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{6847:function(e,t,r){Promise.resolve().then(r.bind(r,6963))},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"useParams")&&r.d(t,{useParams:function(){return a.useParams}}),r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},638:function(e,t,r){"use strict";r.d(t,{an:function(){return s},bG:function(){return i},gS:function(){return c},y1:function(){return l},zB:function(){return n}});var a=r(6508);let s=()=>(0,a.Z)({url:"/auth/captcha",method:"post"}),n=e=>(0,a.Z)({url:"/auth/signin",method:"post",data:e}),l=e=>(0,a.Z)({url:"auth/signup",method:"post",data:e}),i=()=>(0,a.Z)({url:"/myself/info",method:"post"}),c=e=>(0,a.Z)({url:"/myself/update",method:"post",data:e})},6963:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var a=r(7437),s=r(638),n=r(7928),l=r(6648),i=r(7138),c=r(2265),o=r(6463);function u(){let[e,t]=(0,c.useState)(null),[r,u]=(0,c.useState)(""),[d,m]=(0,c.useState)(""),[h,x]=(0,c.useState)(""),[p,f]=(0,c.useState)(""),[b,g]=(0,c.useState)(""),[v,y]=(0,c.useState)(!1),j=(0,o.useRouter)(),w=async()=>{try{let e=await (0,s.an)();t(e.data),m(e.data.captchaId)}catch(e){n.ZP.error("Failed to fetch captcha")}};(0,c.useEffect)(()=>{w()},[]);let N=()=>r?h?p?b?!!v||(n.ZP.error("I agree to the terms and conditions is required"),!1):(n.ZP.error("Captcha is required"),!1):(n.ZP.error("Password is required"),!1):(n.ZP.error("Email is required"),!1):(n.ZP.error("User name is required"),!1),P=async e=>{if(e.preventDefault(),N()&&v)try{await (0,s.y1)({userName:r,email:h,password:p,captcha:b,captchaId:d}),n.ZP.success("Signed up successfully"),j.push("/auth/signin")}catch(e){n.ZP.error(" to sign in"),g(""),w()}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"py-4 md:py-20",children:(0,a.jsx)("div",{className:"font-[sans-serif] relative",children:(0,a.jsx)("div",{className:"relative m-4",children:(0,a.jsxs)("form",{className:"bg-white max-w-xl w-full mx-auto shadow-md p-4 md:p-16 rounded-2xl",children:[(0,a.jsx)("div",{className:"mb-12",children:(0,a.jsx)("h3",{className:"text-gray-800 text-3xl font-bold text-center",children:"Create account"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Your Name"}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",{name:"userName",type:"text",required:!0,value:r,onChange:e=>u(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter your name"}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{cx:"10",cy:"7",r:"6","data-original":"#000000"}),(0,a.jsx)("path",{d:"M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z","data-original":"#000000"})]})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Email"}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",{name:"email",type:"text",required:!0,value:h,onChange:e=>x(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter email"}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2",viewBox:"0 0 682.667 682.667",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"a",clipPathUnits:"userSpaceOnUse",children:(0,a.jsx)("path",{d:"M0 512h512V0H0Z","data-original":"#000000"})})}),(0,a.jsxs)("g",{clipPath:"url(#a)",transform:"matrix(1.33 0 0 -1.33 0 682.667)",children:[(0,a.jsx)("path",{fill:"none",strokeMiterlimit:"10",strokeWidth:"40",d:"M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z","data-original":"#000000"}),(0,a.jsx)("path",{d:"M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z","data-original":"#000000"})]})]})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Password"}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",{name:"password",type:"password",required:!0,value:p,onChange:e=>f(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter password"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2 cursor-pointer",viewBox:"0 0 128 128",children:(0,a.jsx)("path",{d:"M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z","data-original":"#000000"})})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Captcha"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"w-2/3 relative flex items-center",children:(0,a.jsx)("input",{name:"captcha",type:"text",required:!0,value:b,onChange:e=>g(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter captcha"})}),(0,a.jsx)("div",{className:"pl-4",onClick:w,style:{cursor:"pointer"},children:(null==e?void 0:e.picPath)&&(0,a.jsx)(l.default,{src:e.picPath,alt:"Captcha",width:140,height:60})})]})]}),(0,a.jsxs)("div",{className:"flex items-center mt-8",children:[(0,a.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",checked:v,onChange:e=>y(e.target.checked),className:"h-4 w-4 shrink-0 rounded bg-fta-primary-500"}),(0,a.jsxs)("label",{className:"ml-3 block text-sm",children:["I accept the ",(0,a.jsx)("a",{href:"/;",className:"text-fta-primary-400 font-semibold hover:underline ml-1",children:"Terms and Conditions"})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("button",{type:"button",className:"w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white  bg-fta-primary-500 hover:bg-fta-primary-400 focus:outline-none transition-all",onClick:P,children:"Register"}),(0,a.jsxs)("p",{className:"text-gray-800 text-sm mt-8 text-center",children:["Already have an account?",(0,a.jsx)(i.default,{href:"/auth/signin",children:(0,a.jsx)("span",{className:"text-fta-primary-400 font-semibold hover:underline ml-1",children:"Sign in here"})})]})]})]})})})})})}},4069:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});var a=r(9099),s=r(9291);let n=(0,a.Ue)()((0,s.tJ)(e=>({token:null,user:null,setUser:t=>e({user:t}),setAuth:(t,r)=>e({token:t,user:r}),clearAuth:()=>e({token:null,user:null})}),{name:"auth-storage",storage:(0,s.FL)(()=>localStorage),migrate:e=>!e.expiresAt||new Date(e.expiresAt)<new Date?{token:null,user:null}:e}))},6508:function(e,t,r){"use strict";var a=r(8472),s=r(7928),n=r(4069);let l=a.Z.create({baseURL:"http://api.dms.pub/api/web",timeout:5e3});l.interceptors.request.use(e=>{let{token:t,user:r}=n.t.getState();return t&&(e.headers["x-token"]=t),(null==r?void 0:r.userId)&&(e.headers["x-user-id"]=r.userId),e.headers["Content-Type"]="application/json",e},e=>(s.ZP.destroy,s.ZP.error({content:"请求错误，请稍后再试",duration:5}),Promise.reject(e))),l.interceptors.response.use(e=>{let{status:t,data:r}=e;if(200===t)return 0===r.code?r:Promise.reject(r)},e=>{let{response:t}=e,{clearAuth:r}=n.t.getState();return s.ZP.destroy(),JSON.stringify(e).includes("Network Error")?s.ZP.error({content:"网络超时",duration:5}):t&&401===t.status?(s.ZP.error({content:"未授权，请重新登录",duration:5}),r()):s.ZP.error({content:"请求错误，状态码：".concat(null==t?void 0:t.status),duration:5}),Promise.reject(e)}),t.Z=l}},function(e){e.O(0,[169,612,227,151,974,69,472,971,23,744],function(){return e(e.s=6847)}),_N_E=e.O()}]);