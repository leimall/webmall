(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{7696:function(e,t,r){Promise.resolve().then(r.bind(r,7398))},4110:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(2265),n=r(6800),i=r.n(n),o=r(8750),s=r(7540),c=r(8170),l=r(2330),d=r(5413);let u=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:a,lineWidth:n,textPaddingInline:i,orientationMargin:o,verticalMarginInline:l}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{borderBlockStart:"".concat((0,s.bf)(n)," solid ").concat(a),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:l,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,s.bf)(n)," solid ").concat(a)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,s.bf)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,s.bf)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(a),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,s.bf)(n)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"calc(".concat(o," * 100%)")},"&::after":{width:"calc(100% - ".concat(o," * 100%)")}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(o," * 100%)")},"&::after":{width:"calc(".concat(o," * 100%)")}},["".concat(t,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:"".concat((0,s.bf)(n)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:a,borderStyle:"dotted",borderWidth:"".concat((0,s.bf)(n)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dotted")]:{"&::before, &::after":{borderStyle:"dotted none none"}},["&-vertical".concat(t,"-dotted")]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:r}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:r}}})}};var h=(0,l.I$)("Divider",e=>[u((0,d.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0}))],e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}}),m=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},p=e=>{let{getPrefixCls:t,direction:r,divider:n}=a.useContext(o.E_),{prefixCls:s,type:c="horizontal",orientation:l="center",orientationMargin:d,className:u,rootClassName:p,children:f,dashed:x,variant:b="solid",plain:g,style:v}=e,y=m(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),w=t("divider",s),[j,N,k]=h(w),S=!!f,P="left"===l&&null!=d,C="right"===l&&null!=d,z=i()(w,null==n?void 0:n.className,N,k,"".concat(w,"-").concat(c),{["".concat(w,"-with-text")]:S,["".concat(w,"-with-text-").concat(l)]:S,["".concat(w,"-dashed")]:!!x,["".concat(w,"-").concat(b)]:"solid"!==b,["".concat(w,"-plain")]:!!g,["".concat(w,"-rtl")]:"rtl"===r,["".concat(w,"-no-default-orientation-margin-left")]:P,["".concat(w,"-no-default-orientation-margin-right")]:C},u,p),Z=a.useMemo(()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d,[d]),E=Object.assign(Object.assign({},P&&{marginLeft:Z}),C&&{marginRight:Z});return j(a.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},null==n?void 0:n.style),v)},y,{role:"separator"}),f&&"vertical"!==c&&a.createElement("span",{className:"".concat(w,"-inner-text"),style:E},f)))}},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"useParams")&&r.d(t,{useParams:function(){return a.useParams}}),r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},638:function(e,t,r){"use strict";r.d(t,{an:function(){return n},bG:function(){return s},gS:function(){return c},y1:function(){return o},zB:function(){return i}});var a=r(6508);let n=()=>(0,a.Z)({url:"/auth/captcha",method:"post"}),i=e=>(0,a.Z)({url:"/auth/signin",method:"post",data:e}),o=e=>(0,a.Z)({url:"auth/signup",method:"post",data:e}),s=()=>(0,a.Z)({url:"/myself/info",method:"post"}),c=e=>(0,a.Z)({url:"/myself/update",method:"post",data:e})},7398:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var a=r(7437),n=r(7928),i=r(4110),o=r(638),s=r(6648),c=r(7138),l=r(2265),d=r(6463),u=r(4069);function h(){let[e,t]=(0,l.useState)(null),[r,h]=(0,l.useState)(""),[m,p]=(0,l.useState)(""),[f,x]=(0,l.useState)(""),[b,g]=(0,l.useState)(""),[v,y]=(0,l.useState)(!1),w=(0,d.useRouter)(),j=(0,u.t)(e=>e.setAuth),N=async()=>{try{let e=await (0,o.an)();t(e.data),h(e.data.captchaId)}catch(e){n.ZP.error("Failed to fetch captcha")}};(0,l.useEffect)(()=>{N()},[]);let k=()=>m?f?b?!!v||(n.ZP.error("I agree to the terms and conditions is required"),!1):(n.ZP.error("Captcha is required"),!1):(n.ZP.error("Password is required"),!1):(n.ZP.error("Email is required"),!1),S=async e=>{if(e.preventDefault(),k()&&v)try{let{token:e,user:t}=(await (0,o.zB)({email:m,password:f,captcha:b,captchaId:r})).data;j(e,t),n.ZP.success("Signed in successfully"),w.push("/")}catch(e){n.ZP.error(" to sign in"),g(""),N()}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"py-4 md:py-20",children:(0,a.jsx)("div",{className:"font-[sans-serif] relative",children:(0,a.jsx)("div",{className:"relative m-4",children:(0,a.jsxs)("form",{className:"bg-white max-w-xl w-full mx-auto shadow-md p-4 md:p-16 rounded-2xl",children:[(0,a.jsx)("div",{className:"mb-12",children:(0,a.jsx)("h3",{className:"text-gray-800 text-3xl font-bold text-center",children:"Sign in"})}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Email"}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",{name:"email",type:"text",required:!0,value:m,onChange:e=>p(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter email"}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2",viewBox:"0 0 682.667 682.667",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"a",clipPathUnits:"userSpaceOnUse",children:(0,a.jsx)("path",{d:"M0 512h512V0H0Z","data-original":"#000000"})})}),(0,a.jsxs)("g",{clipPath:"url(#a)",transform:"matrix(1.33 0 0 -1.33 0 682.667)",children:[(0,a.jsx)("path",{fill:"none",strokeMiterlimit:"10",strokeWidth:"40",d:"M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z","data-original":"#000000"}),(0,a.jsx)("path",{d:"M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z","data-original":"#000000"})]})]})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Password"}),(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",{name:"password",type:"password",required:!0,value:f,onChange:e=>x(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter password"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2 cursor-pointer",viewBox:"0 0 128 128",children:(0,a.jsx)("path",{d:"M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z","data-original":"#000000"})})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("label",{className:"text-gray-800 text-xs block mb-2",children:"Captcha"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"w-2/3 relative flex items-center",children:(0,a.jsx)("input",{name:"captcha",type:"text",required:!0,value:b,onChange:e=>g(e.target.value),className:"w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-fta-primary-400 px-2 py-3 outline-none",placeholder:"Enter captcha"})}),(0,a.jsx)("div",{className:"pl-4 cursor-pointer",onClick:N,children:(null==e?void 0:e.picPath)&&(0,a.jsx)(s.default,{src:e.picPath,alt:"Captcha",width:140,height:60})})]})]}),(0,a.jsxs)("div",{className:"flex items-center mt-8",children:[(0,a.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",checked:v,onChange:e=>y(e.target.checked),className:"h-4 w-4 shrink-0 rounded bg-fta-primary-500"}),(0,a.jsxs)("label",{className:"ml-3 block text-sm",children:["I accept the ",(0,a.jsx)("a",{href:"/",className:"text-fta-primary-400 font-semibold hover:underline ml-1",children:"Terms and Conditions"})]})]}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)("button",{type:"button",className:"w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-fta-primary-500 hover:bg-fta-primary-400 focus:outline-none transition-all",onClick:S,children:"Sign in"})}),(0,a.jsxs)("div",{className:"pt-10",children:[(0,a.jsx)(i.Z,{children:(0,a.jsx)("span",{className:"text-gray-800 text-sm mt-8 text-center",children:" New to FTAnails? "})}),(0,a.jsx)(c.default,{href:"/auth/signup",children:(0,a.jsx)("p",{className:"border-2 border-fta-background-200 p-1 rounded-md text-fta-primary-400 text-center font-semibold hover:underline ml-1 border-spacing-1",children:"Create your FTAnails account"})})]})]})})})})})}},4069:function(e,t,r){"use strict";r.d(t,{t:function(){return i}});var a=r(9099),n=r(9291);let i=(0,a.Ue)()((0,n.tJ)(e=>({token:null,user:null,setUser:t=>e({user:t}),setAuth:(t,r)=>e({token:t,user:r}),clearAuth:()=>e({token:null,user:null})}),{name:"auth-storage",storage:(0,n.FL)(()=>localStorage),migrate:e=>!e.expiresAt||new Date(e.expiresAt)<new Date?{token:null,user:null}:e}))},6508:function(e,t,r){"use strict";var a=r(8472),n=r(7928),i=r(4069);let o=a.Z.create({baseURL:"https://api.dms.pub/api/web",timeout:5e3});o.interceptors.request.use(e=>{let{token:t,user:r}=i.t.getState();return t&&(e.headers=e.headers||{},e.headers["x-token"]=t),(null==r?void 0:r.userId)&&(e.headers=e.headers||{},e.headers["x-user-id"]=r.userId),e.headers=e.headers||{},e.headers["Content-Type"]="application/json",e},e=>(n.ZP.destroy,n.ZP.error({content:"请求错误，请稍后再试",duration:5}),Promise.reject(e))),o.interceptors.response.use(e=>{let{status:t,data:r}=e;if(200===t)return 0===r.code?r:Promise.reject(r)},e=>{let{response:t}=e,{clearAuth:r}=i.t.getState();return n.ZP.destroy(),JSON.stringify(e).includes("Network Error")?n.ZP.error({content:"网络超时",duration:5}):t&&401===t.status?(n.ZP.error({content:"未授权，请重新登录",duration:5}),r()):n.ZP.error({content:"请求错误，状态码：".concat(null==t?void 0:t.status),duration:5}),Promise.reject(e)}),t.Z=o}},function(e){e.O(0,[733,122,106,151,69,472,138,648,971,23,744],function(){return e(e.s=7696)}),_N_E=e.O()}]);