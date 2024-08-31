(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{4010:function(e,t,s){Promise.resolve().then(s.bind(s,5300))},5300:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var a=s(7437),n=s(192),l=s(2265),r=s(3537),i=s(7345),c=s(357);function d(){let e=(0,i.useStripe)(),t=(0,i.useElements)(),[s,n]=(0,l.useState)(null),[r,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(!e)return;let t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");t&&(null==e||e.retrievePaymentIntent(t).then(e=>{let{paymentIntent:t}=e;switch(null==t?void 0:t.status){case"succeeded":n("Payment succeeded!");break;case"processing":n("Your payment is processing.");break;case"requires_payment_method":n("Your payment was not successful, please try again.");break;default:n("Something went wrong.")}}))},[e]);let m=async s=>{if(s.preventDefault(),!e||!t)return;d(!0);let{error:a}=await e.confirmPayment({elements:t,confirmParams:{return_url:"".concat(c.env.DOMAIN_URL,"/order/success")}});"card_error"===a.type||"validation_error"===a.type?n(a.message||"An unexpected error occurred."):n("An unexpected error occurred."),d(!1)};return(0,a.jsxs)("form",{id:"payment-form",onSubmit:m,children:[(0,a.jsx)(i.PaymentElement,{id:"payment-element",options:{layout:"accordion"}}),(0,a.jsx)("button",{disabled:r||!e||!t,id:"submit",className:"mt-4 w-full text-white bg-fta-primary-500 hover:bg-fta-primary-600 focus:ring-4 focus:outline-none focus:ring-fta-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:(0,a.jsx)("span",{id:"button-text",children:r?(0,a.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),s&&(0,a.jsx)("div",{id:"payment-message",children:s})]})}var m=s(6648);function x(e){let{item:t}=e,{setQuantity:s}=(0,n.x)(),[r,i]=(0,l.useState)(t.quantity);return(0,a.jsx)("div",{className:"flex flex-col md:justify-between md:flex-row md:items-center md:mt-2",children:(0,a.jsx)("div",{className:"md:w-1/2",children:(0,a.jsxs)("div",{className:"flex divide-x border w-max mt-4 rounded overflow-hidden",children:[(0,a.jsx)("button",{type:"button",onClick:()=>{let e=r-1;s(t.ID,e),i(e)},disabled:r<=1,className:"bg-gray-100 w-12 h-10 font-semibold",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 fill-current inline",viewBox:"0 0 124 124",children:(0,a.jsx)("path",{d:"M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"})})}),(0,a.jsx)("div",{className:"bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg flex items-center justify-center",children:r}),(0,a.jsx)("button",{type:"button",onClick:()=>{let e=r+1;s(t.ID,e),i(e)},className:"bg-gray-800 text-white w-12 h-10 font-semibold",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 fill-current inline",viewBox:"0 0 42 42",children:(0,a.jsx)("path",{d:"M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"})})})]})})})}var o=s(4110);function u(e){let{item:t}=e,s=(0,n.x)(e=>e.removeItem);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 items-center gap-4",children:[(0,a.jsxs)("div",{className:"col-span-2 flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-28 h-28 shrink-0 bg-white rounded-md",children:(0,a.jsx)(m.default,{src:t.mainImg,alt:t.title,objectFit:"fixed",width:96,height:96,className:"rounded-md h-full w-full "})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-base font-bold text-gray-800",children:t.title}),(0,a.jsx)("h6",{onClick:()=>s(t.ID),className:"text-xs text-red-500 cursor-pointer mt-0.5",children:"Remove"}),(0,a.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,a.jsxs)("div",{className:"relative group",children:[(0,a.jsxs)("button",{type:"button",className:"flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md",children:["XL",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-2.5 fill-gray-500 inline ml-2.5",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z",clipRule:"evenodd","data-original":"#000000"})})]}),(0,a.jsxs)("ul",{className:"group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]",children:[(0,a.jsx)("li",{className:"py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer",children:"SM"}),(0,a.jsx)("li",{className:"py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer",children:"MD"}),(0,a.jsx)("li",{className:"py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer",children:"XL"}),(0,a.jsx)("li",{className:"py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer",children:"XXL"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(x,{item:t})})]})]})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("h4",{className:"text-base font-bold text-gray-800",children:["$ ",t.price*t.quantity]})})]}),(0,a.jsx)(o.Z,{})]})}var h=s(7138);function p(e){let{items:t}=e,[s]=(0,l.useState)(t),n=s.reduce((e,t)=>e+t.price*t.quantity,0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row ",children:[(0,a.jsx)("div",{className:"flex-1 bg-white rounded-md p-4",children:s.map(e=>(0,a.jsx)(u,{item:e}))}),(0,a.jsxs)("div",{className:"w-full md:w-1/4 md:ml-8 sx:ml-0 rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-fta-background-100",children:[(0,a.jsx)("div",{className:"px-4",children:(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Cart total"})}),(0,a.jsx)(o.Z,{}),(0,a.jsxs)("div",{className:"px-4 text-gray-800 space-y-2",children:[(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Subtotal"}),(0,a.jsxs)("span",{className:"ml-auto font-bold",children:["$",n,".00"]})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Discount"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Tax"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Fee"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]})]}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("div",{className:"px-4",children:(0,a.jsxs)("div",{className:"flex justify-between font-bold text-lg mt-4",children:[(0,a.jsx)("span",{children:"Total"}),(0,a.jsxs)("span",{children:["$",n,".00"]})]})}),(0,a.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,a.jsx)("button",{className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-primary-500 hover:bg-fta-primary-600 text-white rounded-md",children:"Checkout"}),(0,a.jsx)("div",{className:"w-4"}),(0,a.jsx)(h.default,{href:"/",children:(0,a.jsx)("button",{className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-background-50 hover:bg-fta-background-100 text-fta-primary-500 rounded-md",children:"Continue Shopping"})})]})]})]})})}var f=s(357);let j=(0,r.J)(f.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);function g(){let{items:e}=(0,n.x)(),[t,s]=(0,l.useState)(null);return e.reduce((e,t)=>e+t.price*t.quantity,0),(0,a.jsxs)("div",{className:"relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0",children:[0===e.length?(0,a.jsxs)("div",{className:"w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("h1",{className:"text-2xl mb-4",children:"Shopping Cart"}),(0,a.jsx)("div",{className:"bg-white sm:rounded-lg p-6 text-center",children:(0,a.jsx)("p",{className:"text-3xl lg:h-96",children:"Your cart is empty"})})]}):(0,a.jsx)(p,{items:e}),(0,a.jsx)("div",{className:"mb-8",children:t&&(0,a.jsx)(i.Elements,{stripe:j,options:{clientSecret:t},children:(0,a.jsx)(d,{})})})]})}},192:function(e,t,s){"use strict";s.d(t,{x:function(){return l}});var a=s(9099),n=s(9291);let l=(0,a.Ue)()((0,n.tJ)((e,t)=>({items:[],totalQuantity:0,addItem:t=>e(e=>{let s;return{items:s=e.items.find(e=>e.ID===t.ID)?e.items.map(e=>e.ID===t.ID?{...e,quantity:e.quantity+t.quantity}:e):[...e.items,t],totalQuantity:s.reduce((e,t)=>e+t.quantity,0)}}),removeItem:t=>e(e=>{let s=e.items.filter(e=>e.ID!==t);return{items:s,totalQuantity:s.reduce((e,t)=>e+t.quantity,0)}}),clearCart:()=>e({items:[],totalQuantity:0}),addToCard:()=>e(e=>({totalQuantity:e.totalQuantity+1})),setQuantity:(t,s)=>e(e=>{let a=e.items.map(e=>e.ID===t?{...e,quantity:Math.max(0,s)}:e).filter(e=>e.quantity>0);return{items:a,totalQuantity:a.length}})}),{name:"cart-storage",storage:(0,n.FL)(()=>localStorage)}))}},function(e){e.O(0,[453,733,151,648,138,48,971,23,744],function(){return e(e.s=4010)}),_N_E=e.O()}]);