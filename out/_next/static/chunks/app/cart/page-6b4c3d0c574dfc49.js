(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{4010:function(e,t,s){Promise.resolve().then(s.bind(s,1568))},1568:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(7437),n=s(192),r=s(2265),l=s(3537),i=s(7345),c=s(357);function d(){let e=(0,i.useStripe)(),t=(0,i.useElements)(),[s,n]=(0,r.useState)(null),[l,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!e)return;let t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");t&&(null==e||e.retrievePaymentIntent(t).then(e=>{let{paymentIntent:t}=e;switch(null==t?void 0:t.status){case"succeeded":n("Payment succeeded!");break;case"processing":n("Your payment is processing.");break;case"requires_payment_method":n("Your payment was not successful, please try again.");break;default:n("Something went wrong.")}}))},[e]);let o=async s=>{if(s.preventDefault(),!e||!t)return;d(!0);let{error:a}=await e.confirmPayment({elements:t,confirmParams:{return_url:"".concat(c.env.DOMAIN_URL,"/order/success")}});"card_error"===a.type||"validation_error"===a.type?n(a.message||"An unexpected error occurred."):n("An unexpected error occurred."),d(!1)};return(0,a.jsxs)("form",{id:"payment-form",onSubmit:o,children:[(0,a.jsx)(i.PaymentElement,{id:"payment-element",options:{layout:"accordion"}}),(0,a.jsx)("button",{disabled:l||!e||!t,id:"submit",className:"mt-4 w-full text-white bg-fta-primary-500 hover:bg-fta-primary-600 focus:ring-4 focus:outline-none focus:ring-fta-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:(0,a.jsx)("span",{id:"button-text",children:l?(0,a.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),s&&(0,a.jsx)("div",{id:"payment-message",children:s})]})}var o=s(4110),u=s(7138);function m(){let{items:e}=(0,n.x)(),t=e.reduce((e,t)=>e+t.price*t.quantity,0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col  md:flex-row ",children:[(0,a.jsx)("div",{className:"flex-1 bg-background-back0 border rounded-md p-4",children:(0,a.jsx)("div",{className:"p-0 md:p-4"})}),(0,a.jsxs)("div",{className:"w-full md:w-1/4 md:ml-8 sx:ml-0 border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1",children:[(0,a.jsx)("div",{className:"px-4",children:(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Cart total"})}),(0,a.jsx)(o.Z,{}),(0,a.jsxs)("div",{className:"px-4 text-gray-800 space-y-2",children:[(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Subtotal"}),(0,a.jsxs)("span",{className:"ml-auto font-bold",children:["$",t,".00"]})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Discount"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Tax"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Fee"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]})]}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("div",{className:"px-4",children:(0,a.jsxs)("div",{className:"flex justify-between font-bold text-lg mt-4",children:[(0,a.jsx)("span",{children:"Total"}),(0,a.jsxs)("span",{children:["$",t,".00"]})]})}),(0,a.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,a.jsx)("button",{className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-primary-500 hover:bg-fta-primary-600 text-white rounded-md",children:"Checkout"}),(0,a.jsx)("div",{className:"w-4"}),(0,a.jsx)(u.default,{href:"/",children:(0,a.jsx)("button",{className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-background-100 hover:bg-fta-background-100 border text-fta-primary-500 rounded-md",children:"Continue Shopping"})})]})]})]})})}var x=s(357);let p=(0,l.J)(x.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);function f(){let{items:e,addItem:t,removeItem:s}=(0,n.x)(),[l,c]=(0,r.useState)(null);return e.reduce((e,t)=>e+t.price*t.quantity,0),(0,a.jsxs)("div",{className:"relative mx-auto max-w-c-1280 py-5 justify-between align-items:flex-end px-4 md:px-8 2xl:px-0",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"flex items-center font-[sans-serif] space-x-4 mb-4",children:[(0,a.jsx)(u.default,{href:"/",passHref:!0,children:(0,a.jsx)("li",{className:"text-gray-500 text-base cursor-pointer",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-gray-400 w-3.5 -rotate-90",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z","clip-rule":"evenodd","data-original":"#000000"})})}),(0,a.jsx)("li",{className:"text-gray-800 text-base font-bold cursor-pointer",children:"Shopping Cart"})]})}),(0,a.jsx)("h1",{className:"text-xl md:text-3xl py-1 md:py-4 mb-4",children:"Shopping Cart"}),0===e.length?(0,a.jsx)("div",{className:"w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"bg-white sm:rounded-lg p-6 text-center",children:(0,a.jsx)("p",{className:"text-3xl lg:h-96",children:"Your cart is empty"})})}):(0,a.jsx)(m,{}),(0,a.jsx)("div",{className:"mb-8",children:l&&(0,a.jsx)(i.Elements,{stripe:p,options:{clientSecret:l},children:(0,a.jsx)(d,{})})})]})}},192:function(e,t,s){"use strict";s.d(t,{x:function(){return r}});var a=s(9099),n=s(9291);let r=(0,a.Ue)()((0,n.tJ)((e,t)=>({items:[],totalQuantity:0,totalPrice:0,discount:0,couponCode:null,addItem:s=>e(e=>{let a,n=e.items.filter(e=>null!==e),r=(a=n.find(e=>e.product_id===s.product_id)?n.map(e=>e.product_id===s.product_id?{...e,quantity:e.quantity+s.quantity}:e):[...n,s]).reduce((e,t)=>e+t.price*t.quantity,0);return{items:a,totalQuantity:a.reduce((e,t)=>e+t.quantity,0),totalPrice:r-t().discount}}),removeItem:s=>e(e=>{let a=e.items.filter(e=>e.product_id!==s),n=a.reduce((e,t)=>e+t.price*t.quantity,0);return{items:a,totalQuantity:a.reduce((e,t)=>e+t.quantity,0),totalPrice:n-t().discount}}),clearCart:()=>e({items:[],totalQuantity:0,totalPrice:0,discount:0,couponCode:null}),setQuantity:(s,a)=>e(e=>{let n=e.items.filter(e=>null!==e).map(e=>e.product_id===s?{...e,quantity:Math.max(0,a)}:e).filter(e=>e.quantity>0),r=n.reduce((e,t)=>e+t.price*t.quantity,0);return{items:n,totalQuantity:n.reduce((e,t)=>e+t.quantity,0),totalPrice:r-t().discount}}),applyCoupon:(s,a)=>{e({couponCode:s,discount:a,totalPrice:t().items.reduce((e,t)=>e+t.price*t.quantity,0)-a})},removeCoupon:()=>{e({couponCode:null,discount:0,totalPrice:t().items.reduce((e,t)=>e+t.price*t.quantity,0)})}}),{name:"cart-storage",storage:(0,n.FL)(()=>localStorage)}))}},function(e){e.O(0,[453,733,151,138,48,971,23,744],function(){return e(e.s=4010)}),_N_E=e.O()}]);