(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{1606:function(e,t,r){Promise.resolve().then(r.bind(r,2036)),Promise.resolve().then(r.bind(r,2022))},4110:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var i=r(2265),a=r(6800),n=r.n(a),o=r(8750),s=r(7540),c=r(8170),l=r(2330),d=r(5413);let u=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:i,lineWidth:a,textPaddingInline:n,orientationMargin:o,verticalMarginInline:l}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{borderBlockStart:"".concat((0,s.bf)(a)," solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:l,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,s.bf)(a)," solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,s.bf)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,s.bf)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,s.bf)(a)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"calc(".concat(o," * 100%)")},"&::after":{width:"calc(100% - ".concat(o," * 100%)")}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(o," * 100%)")},"&::after":{width:"calc(".concat(o," * 100%)")}},["".concat(t,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:n},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat((0,s.bf)(a)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:i,borderStyle:"dotted",borderWidth:"".concat((0,s.bf)(a)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dotted")]:{"&::before, &::after":{borderStyle:"dotted none none"}},["&-vertical".concat(t,"-dotted")]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:r}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:r}}})}};var m=(0,l.I$)("Divider",e=>[u((0,d.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0}))],e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}}),p=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)0>t.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]]);return r},f=e=>{let{getPrefixCls:t,direction:r,divider:a}=i.useContext(o.E_),{prefixCls:s,type:c="horizontal",orientation:l="center",orientationMargin:d,className:u,rootClassName:f,children:h,dashed:x,variant:g="solid",plain:b,style:y}=e,v=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),w=t("divider",s),[j,S,I]=m(w),N=!!h,C="left"===l&&null!=d,k="right"===l&&null!=d,_=n()(w,null==a?void 0:a.className,S,I,"".concat(w,"-").concat(c),{["".concat(w,"-with-text")]:N,["".concat(w,"-with-text-").concat(l)]:N,["".concat(w,"-dashed")]:!!x,["".concat(w,"-").concat(g)]:"solid"!==g,["".concat(w,"-plain")]:!!b,["".concat(w,"-rtl")]:"rtl"===r,["".concat(w,"-no-default-orientation-margin-left")]:C,["".concat(w,"-no-default-orientation-margin-right")]:k},u,f),z=i.useMemo(()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d,[d]),P=Object.assign(Object.assign({},C&&{marginLeft:z}),k&&{marginRight:z});return j(i.createElement("div",Object.assign({className:_,style:Object.assign(Object.assign({},null==a?void 0:a.style),y)},v,{role:"separator"}),h&&"vertical"!==c&&i.createElement("span",{className:"".concat(w,"-inner-text"),style:P},h)))}},6463:function(e,t,r){"use strict";var i=r(1169);r.o(i,"useParams")&&r.d(t,{useParams:function(){return i.useParams}}),r.o(i,"usePathname")&&r.d(t,{usePathname:function(){return i.usePathname}}),r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}}),r.o(i,"useSearchParams")&&r.d(t,{useSearchParams:function(){return i.useSearchParams}})},2036:function(e,t,r){"use strict";r.d(t,{message:function(){return i.ZP}});var i=r(7928)},9921:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(7437),a=r(2265),n=r(6122);function o(e){let{rating:t}=e,[r,o]=a.useState(4.5);return(0,a.useEffect)(()=>{o(t)},[t]),(0,i.jsx)("div",{children:(0,i.jsx)(n.Z,{disabled:!0,defaultValue:r,style:{fontSize:14,color:"#FFA407FF"}})})}},2022:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var i=r(7437),a=r(2265),n=r(4871),o=r(4110);let s=(0,r(9099).Ue)(e=>({selectedImageIndex:0,setSelectedImageIndex:t=>e(()=>({selectedImageIndex:t}))}));var c=r(6648);function l(e){let{product:t}=e,[r,n]=a.useState("0"),[o,s]=a.useState("0"),[c,l]=a.useState("0");return(0,a.useEffect)(()=>{if(t.priceOff>0){let e=t.price,r=(100-t.priceOff).toFixed(0)+"%";s((t.priceOff/100*e).toFixed(0)+".99"),n(e.toFixed(2)),l(r)}},[t]),(0,i.jsxs)("div",{className:"font-sans tracking-wide mx-auto ",children:[(0,i.jsx)("h3",{className:"text-md font-bold text-gray-800",children:"Price"}),(0,i.jsxs)("div",{className:"flex items-end space-x-4 mt-2",children:[(0,i.jsxs)("span",{className:"line-through text-md text-gray-500 pt-2",children:["$",r]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("div",{className:"text-gray-800 text-3xl font-bold",children:["$",o]}),(0,i.jsx)("div",{className:"text-red-600 text-sm font-bold px-2",children:t.priceOff>0?"(-".concat(c,")"):""})]})]})]})}var d=r(9910),u=r(4069),m=r(6463);function p(e){let{product:t}=e;(0,m.useRouter)();let{addItem:r,setQuantity:n,setSkuValue:s,items:c,fetchCartItems:l}=(0,d.x)(),{user:p}=(0,u.t)(),[f,h]=(0,a.useState)(""),[x,g]=(0,a.useState)(null),[b,y]=(0,a.useState)(1),[v,w]=(0,a.useState)(0),[j,S]=(0,a.useState)("Size"),[I,N]=(0,a.useState)("M"),[C,k]=(0,a.useState)(["L","M","S","XS"]),[_,z]=(0,a.useState)(!0),[P,q]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(null==c?void 0:c.length)>0&&c.find(e=>e.product_id===t.productId)&&z(!0)},[c]),(0,a.useEffect)(()=>{t&&p&&O()},[t,null==p?void 0:p.userId]);let O=()=>{if(t.Sku.title&&S(t.Sku.title),t.Sku.List&&t.Sku.List.length>0&&k(t.Sku.List.map(e=>e.title)),(null==p?void 0:p.userId)&&h(p.userId),w(parseFloat((t.price*(t.priceOff/100)).toFixed(0)+".99")),(null==c?void 0:c.length)>0){let e=c.find(e=>e.product_id===t.productId);e?(g(e),y(e.quantity),E(e.size)):g({sku:t.productId,size_title:j,size:I,color:"",old_price:t.price,price_off:t.priceOff,user_id:f,product_id:t.productId,quantity:b,stock:t.stock,price:v,main_img:t.mainImg,title:t.title,status:1})}else g({sku:t.productId,size_title:j,size:I,color:"",old_price:t.price,price_off:t.priceOff,user_id:f,product_id:t.productId,quantity:b,stock:t.stock,price:v,main_img:t.mainImg,title:t.title,status:1})};(0,a.useEffect)(()=>{x&&(null==c?void 0:c.length)>0&&c.find(e=>e.product_id===t.productId)&&n(x.product_id,x.quantity)},[x,b]),(0,a.useEffect)(()=>{x&&(null==c?void 0:c.length)>0&&c.find(e=>e.product_id===t.productId)&&s(x.product_id,x.size)},[null==x?void 0:x.size]);let Z=async()=>{q(!0),x&&(x.user_id=f,x.size=I,x.price=v,x.quantity=b,r(x),new Date().getTime(),x.price,x.quantity,x.product_id,x.quantity,x.price,x.title,x.size,x.color,x.main_img)},E=e=>{N(e),x&&g({...x,size:e})};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{className:"text-md md:text-md font-bold text-gray-800",children:["Choose a ",j]}),(0,i.jsx)("div",{className:"flex flex-wrap gap-4 mt-4",children:C.map((e,t)=>(0,i.jsx)("button",{type:"button",className:"w-10 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ".concat(e===I?"border-gray-800 bg-slate-100":"border-fta-primary-50 bg-white"),onClick:()=>E(e),children:e},t))}),(0,i.jsx)(o.Z,{}),(0,i.jsx)("h3",{className:"text-md font-bold text-gray-800",children:"Quantity"}),(0,i.jsxs)("div",{className:"flex md:justify-between md:flex-row gap-1 items-center md:mt-2",children:[_&&(0,i.jsx)("div",{className:"md:w-1/3 pt-4",children:(0,i.jsx)("div",{className:"w-28",children:(0,i.jsx)("div",{className:"bg-white",children:(0,i.jsxs)("div",{className:"flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded",children:[(0,i.jsx)("div",{onClick:()=>{if(b>1){let e=b-1;x&&(g({...x,quantity:e}),y(e))}},className:"px-3 py-3 bg-orange-50 cursor-pointer rounded-l ",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-2.5 fill-current",viewBox:"0 0 124 124",children:(0,i.jsx)("path",{d:"M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z","data-original":"#000000"})})}),(0,i.jsx)("span",{className:"mx-2.5 w-5 text-center",children:b}),(0,i.jsx)("div",{onClick:()=>{let e=b+1;x&&(g({...x,quantity:e}),y(e))},className:"px-3 py-3 bg-orange-50 cursor-pointer rounded-r",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-2.5 fill-current",viewBox:"0 0 42 42",children:(0,i.jsx)("path",{d:"M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z","data-original":"#000000"})})})]})})})}),(0,i.jsx)("div",{className:"md:w-2/3 pt-4",children:(0,i.jsxs)("div",{className:"flex gap-1 md:gap-4",children:[(0,i.jsx)("button",{type:"button",onClick:Z,className:"min-w-[100px] md:min-w-[120px] py-1 px-2 md:px-4 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded",children:"Buy now"}),(0,i.jsx)("button",{type:"button",onClick:()=>{x&&(x.user_id=f,x.size=I,x.price=v,x.quantity=b,r(x))},className:"min-w-[120px] px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-zinc-50 text-gray-800 text-sm font-semibold rounded",children:"Add to cart"})]})})]})]})}var f=r(9921);function h(e){let{product:t}=e,{selectedImageIndex:r,setSelectedImageIndex:d}=s(),u=(0,a.useRef)(null),[m,h]=a.useState(5);return(0,a.useEffect)(()=>{u.current&&u.current.goTo(r,!1),t.Review.average&&h(t.Review.average)},[r,t.Review.average]),(0,i.jsx)("div",{className:"font-sans tracking-wide mx-auto ",children:(0,i.jsxs)("div",{className:"grid items-start grid-cols-1 lg:grid-cols-12 gap-8",children:[(0,i.jsxs)("div",{className:"lg:col-span-7 text-center",children:[(0,i.jsx)("div",{className:"md:p-4 relative before:absolute before:inset-0 befo before:rounded",children:(0,i.jsx)(n.Z,{ref:u,afterChange:d,children:t.ImageList.map((e,r)=>(0,i.jsx)("div",{className:"relative w-full h-0 pb-[100%] overflow-hidden rounded-t mx-auto",children:(0,i.jsx)(c.default,{src:e.img_url,alt:t.title,fill:!0,priority:!0,sizes:"100vw",className:"w-full h-auto rounded"})},r))})}),(0,i.jsx)("div",{className:"flex flex-wrap gap-4 mx-auto mt-4 md:pl-4",children:t.ImageList.map((e,a)=>(0,i.jsx)("img",{src:e.img_url,alt:t.title,className:"w-16 h-16 border-2 rounded cursor-pointer ".concat(r===a?"border-gray-800 bg-slate-100":"border-fta-primary-50"," "),onClick:()=>d(a)},a))})]}),(0,i.jsxs)("div",{className:"lg:col-span-5 md:p-4",children:[(0,i.jsx)("div",{className:"flex flex-wrap items-start gap-4",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("div",{className:"text-sm font-extrabold line-clamp-2 overflow-hidden",children:(0,i.jsx)("h1",{style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,lineHeight:"1.5em",maxHeight:"4.5em"},children:t.title})}),(0,i.jsxs)("div",{className:"text-xs text-gray-500 pt-2",children:["SKU: ",t.productId]}),(0,i.jsx)("div",{className:"flex space-x-1 mt-4",children:(0,i.jsx)(f.Z,{rating:m})})]})}),(0,i.jsx)(o.Z,{}),(0,i.jsx)("div",{children:(0,i.jsx)(l,{product:t})}),(0,i.jsx)(o.Z,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-md font-bold text-gray-800",children:"Description"}),(0,i.jsx)("p",{className:"text-gray-700 text-sm mt-2",children:t.desction})]}),(0,i.jsx)(o.Z,{}),(0,i.jsx)("div",{children:(0,i.jsx)(p,{product:t})})]})]})})}},9910:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var i=r(9099),a=r(9291),n=r(6508);let o=()=>(0,n.Z)({url:"/cart/list",method:"post"}),s=e=>(0,n.Z)({url:"/cart/add",method:"post",data:e}),c=e=>(0,n.Z)({url:"/cart/update",method:"post",data:e}),l=e=>(0,n.Z)({url:"/cart/delete",method:"post",data:e}),d=e=>(0,n.Z)({url:"/cart/deleteone",method:"post",data:e}),u=(0,i.Ue)()((0,a.tJ)((e,t)=>({items:[],totalQuantity:0,totalPrice:0,price:0,discount:0,couponCode:null,addItem:r=>e(e=>{let i,a=e.items.filter(e=>null!==e);a.find(e=>e.product_id===r.product_id)?(i=a.map(e=>e.product_id===r.product_id?{...e,quantity:e.quantity+r.quantity}:e),setImmediate(async()=>{await t().updateCart(r)})):(i=[...a,r],setImmediate(async()=>{await t().createCart(r)}));let n=i.reduce((e,t)=>e+t.price*t.quantity,0);return{items:i,totalQuantity:i.reduce((e,t)=>e+t.quantity,0),price:i.reduce((e,t)=>e+t.old_price*t.quantity,0),totalPrice:n-t().discount}}),removeItem:r=>e(e=>{if(e.items.filter(e=>e.product_id===r).length>0){let i=e.items.filter(e=>e.product_id!==r),a=i.reduce((e,t)=>e+t.price*t.quantity,0);return{items:i,totalQuantity:i.reduce((e,t)=>e+t.quantity,0),price:i.reduce((e,t)=>e+t.old_price*t.quantity,0),totalPrice:a-t().discount}}return e}),clearCart:()=>{e({items:[],totalQuantity:0,totalPrice:0,discount:0,couponCode:null})},clearCartItem:e=>{t().deleteCart(e),t().clearCart()},setQuantity:(r,i)=>e(e=>{let a=e.items.filter(e=>null!==e),n=a.map(e=>e.product_id===r?{...e,quantity:Math.max(0,i)}:e).filter(e=>e.quantity>0),o=n.reduce((e,t)=>e+t.price*t.quantity,0),s=a.find(e=>e.product_id===r);return s&&setImmediate(async()=>{await t().updateCart({...s,quantity:i})}),{items:n,totalQuantity:n.reduce((e,t)=>e+t.quantity,0),price:n.reduce((e,t)=>e+t.old_price*t.quantity,0),totalPrice:o-t().discount}}),setSkuValue:(r,i)=>e(e=>{let a=e.items.filter(e=>null!==e),n=a.map(e=>e.product_id===r?{...e,size:i}:e).filter(e=>e.quantity>0),o=a.find(e=>e.product_id===r);return o&&setImmediate(async()=>{await t().updateCart(o)}),{items:n}}),applyCoupon:(r,i)=>{e({couponCode:r,discount:i,totalPrice:t().items.reduce((e,t)=>e+t.price*t.quantity,0)-i})},removeCoupon:()=>{e({couponCode:null,discount:0,totalPrice:t().items.reduce((e,t)=>e+t.price*t.quantity,0)})},fetchCartItems:async()=>{let t=await o();console.error("fetchCartItems response  object",t);let r=t.data;if(null==r?void 0:r.length){let t=r.reduce((e,t)=>e+t.price*t.quantity,0),i=r.reduce((e,t)=>e+t.quantity,0),a=r.reduce((e,t)=>e+t.old_price*t.quantity,0);e({items:r,totalPrice:t,totalQuantity:i,price:a})}else e({items:[]})},updateCart:async e=>{console.error("updateCartItem",await c(e))},deleteCart:async e=>{console.error("deleteCartItem",await l(e))},deleteCartOne:async e=>{console.error("deleteCartItemOne",await d(e))},createCart:async e=>{console.error("createCartItem",await s(e))}}),{name:"cart-storage",storage:(0,a.FL)(()=>localStorage)}))},4069:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});var i=r(9099),a=r(9291);let n=(0,i.Ue)()((0,a.tJ)(e=>({token:null,user:null,setUser:t=>e({user:t}),setAuth:(t,r)=>e({token:t,user:r}),clearAuth:()=>e({token:null,user:null})}),{name:"auth-storage",storage:(0,a.FL)(()=>localStorage),migrate:e=>!e.expiresAt||new Date(e.expiresAt)<new Date?{token:null,user:null}:e}))},6508:function(e,t,r){"use strict";var i=r(8472),a=r(7928),n=r(4069);let o=i.Z.create({baseURL:"https://api.dms.pub/api/web",timeout:5e3});o.interceptors.request.use(e=>{let{token:t,user:r}=n.t.getState();return t&&(e.headers=e.headers||{},e.headers["x-token"]=t),(null==r?void 0:r.userId)&&(e.headers=e.headers||{},e.headers["x-user-id"]=r.userId),e.headers=e.headers||{},e.headers["Content-Type"]="application/json",e},e=>(a.ZP.destroy,a.ZP.error({content:"请求错误，请稍后再试",duration:5}),Promise.reject(e))),o.interceptors.response.use(e=>{let{status:t,data:r}=e;if(200===t)return 0===r.code?r:Promise.reject(r)},e=>{let{response:t}=e,{clearAuth:r}=n.t.getState();return a.ZP.destroy(),JSON.stringify(e).includes("Network Error")?a.ZP.error({content:"网络超时",duration:5}):t&&401===t.status?(a.ZP.error({content:"未授权，请重新登录",duration:5}),r()):a.ZP.error({content:"请求错误，状态码：".concat(null==t?void 0:t.status),duration:5}),Promise.reject(e)}),t.Z=o}},function(e){e.O(0,[925,633,648,566,625,617,971,23,744],function(){return e(e.s=1606)}),_N_E=e.O()}]);