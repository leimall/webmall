(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{4010:function(e,s,t){Promise.resolve().then(t.bind(t,9183))},9183:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return k}});var a=t(7437),r=t(9910),n=t(2265),l=t(3537),i=t(7345),c=t(357);function d(){let e=(0,i.useStripe)(),s=(0,i.useElements)(),[t,r]=(0,n.useState)(null),[l,d]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!e)return;let s=new URLSearchParams(window.location.search).get("payment_intent_client_secret");s&&(null==e||e.retrievePaymentIntent(s).then(e=>{let{paymentIntent:s}=e;switch(null==s?void 0:s.status){case"succeeded":r("Payment succeeded!");break;case"processing":r("Your payment is processing.");break;case"requires_payment_method":r("Your payment was not successful, please try again.");break;default:r("Something went wrong.")}}))},[e]);let o=async t=>{if(t.preventDefault(),!e||!s)return;d(!0);let{error:a}=await e.confirmPayment({elements:s,confirmParams:{return_url:"".concat(c.env.DOMAIN_URL,"/order/success")}});"card_error"===a.type||"validation_error"===a.type?r(a.message||"An unexpected error occurred."):r("An unexpected error occurred."),d(!1)};return(0,a.jsxs)("form",{id:"payment-form",onSubmit:o,children:[(0,a.jsx)(i.PaymentElement,{id:"payment-element",options:{layout:"accordion"}}),(0,a.jsx)("button",{disabled:l||!e||!s,id:"submit",className:"mt-4 w-full text-white bg-fta-primary-500 hover:bg-fta-primary-600 focus:ring-4 focus:outline-none focus:ring-fta-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:(0,a.jsx)("span",{id:"button-text",children:l?(0,a.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),t&&(0,a.jsx)("div",{id:"payment-message",children:t})]})}var o=t(1063),m=t(7394),x=t(1080),u=t(4110),p=t(7138),h=t(9262),f=t(4069),j=t(6463),g=t(6508);let b=e=>(0,g.Z)({url:"/orders/create",method:"post",data:e}),y=()=>(0,g.Z)({url:"/orders/orderid",method:"get"}),N=()=>{let{items:e,totalPrice:s,clearCart:t}=(0,r.x)(),{createOrder:a}=(0,h.L)(),{user:n}=(0,f.t)(),l=(0,j.useRouter)();return{handleBuyNow:async r=>{let i;if(0===e.length){alert("No products selected");return}if(!n||!n.userId){alert("Plase log in to complete the purchase."),l.push("/login");return}try{i=(await y()).data}catch(e){console.error("Error creating order:",e);return}let c=[],d=!1;r.length>0?c=r:(c=e,d=!0);let o={orderId:i,userId:n.userId,totalPrice:s,paymentMethod:"pending",orderStatus:"pending",shippingMethod:"standard",shippingPrice:10,shippingAddressId:0,products:c.map(e=>({order_id:i,user_id:n.userId,product_id:e.product_id,title:e.title,old_price:e.old_price,price_off:e.price_off,price:e.price,quantity:e.quantity,main_img:e.main_img,size:e.size,color:e.color}))};a(o);try{let e=await b(o);console.log("订单创建成功:",e),0===e.code&&d&&t(),l.push("/checkout")}catch(e){console.error("订单创建失败:",e),alert("订单创建失败，请稍后再试。")}}}};function w(){let[e,s]=(0,n.useState)(!1),{items:t,totalPrice:l,price:i}=(0,r.x)(),{handleBuyNow:c}=N();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m.Z,{gap:"middle",vertical:!0,children:(0,a.jsx)(x.Z,{spinning:e,size:"large",tip:"Loading...",children:(0,a.jsxs)("div",{className:"flex flex-col  md:flex-row ",children:[(0,a.jsx)("div",{className:"flex-1 bg-background-back0 border rounded-md p-2 md:p-4",children:(0,a.jsx)("div",{className:"p-0 md:p-4",children:t.map((e,s)=>(0,a.jsx)(o.Z,{item:e,length:t.length,index:s},e.product_id))})}),(0,a.jsx)("div",{className:"w-full md:w-1/4 md:ml-8 sx:ml-0 ",children:(0,a.jsxs)("div",{className:"border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1",children:[(0,a.jsx)("div",{className:"px-4",children:(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Cart total"})}),(0,a.jsx)(u.Z,{}),(0,a.jsxs)("div",{className:"px-4 text-gray-800 space-y-2",children:[(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Now Total"}),(0,a.jsxs)("span",{className:"ml-auto text-red-500 font-bold",children:["$",l]})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Total"}),(0,a.jsxs)("span",{className:"ml-auto line-through",children:["$",i.toFixed(2)]})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Save"}),(0,a.jsxs)("span",{className:"ml-auto",children:["$",(i-l).toFixed(2)]})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Discount"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Tax"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]}),(0,a.jsxs)("p",{className:"flex justify-between py-1",children:[(0,a.jsx)("span",{className:"text-base",children:"Fee"}),(0,a.jsx)("span",{className:"ml-auto font-bold",children:"$0.00"})]})]}),(0,a.jsx)(u.Z,{}),(0,a.jsx)("div",{className:"px-4",children:(0,a.jsxs)("div",{className:"flex justify-between font-bold text-lg mt-4",children:[(0,a.jsx)("span",{children:"Total"}),(0,a.jsxs)("span",{className:"text-red-500",children:["$",l]})]})}),(0,a.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,a.jsx)("button",{onClick:()=>{s(!0),c(t)},className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-primary-500 hover:bg-fta-primary-600 text-white rounded-md",children:"Buy Now"}),(0,a.jsx)("div",{className:"w-4"}),(0,a.jsx)(p.default,{href:"/",children:(0,a.jsx)("button",{className:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-background-100 hover:bg-fta-background-100 border text-fta-primary-500 rounded-md",children:"Continue Shopping"})})]})]})})]})})})})}var v=t(357);let _=(0,l.J)(v.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);function k(){let{items:e,addItem:s,removeItem:t,totalPrice:l}=(0,r.x)(),[c,o]=(0,n.useState)(null);return(0,a.jsxs)("div",{className:"relative mx-auto max-w-c-1280 py-5 justify-between align-items:flex-end px-2 md:px-8 2xl:px-0",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"flex items-center font-[sans-serif] space-x-4 mb-4",children:[(0,a.jsx)(p.default,{href:"/",passHref:!0,children:(0,a.jsx)("li",{className:"text-gray-500 text-base cursor-pointer",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-gray-400 w-3.5 -rotate-90",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z",clipRule:"evenodd","data-original":"#000000"})})}),(0,a.jsx)("li",{className:"text-gray-800 text-base font-bold cursor-pointer",children:"Shopping Cart"})]})}),(0,a.jsx)("h1",{className:"text-xl md:text-3xl py-1 md:py-4 mb-2",children:"Shopping Cart"}),0===e.length?(0,a.jsx)("div",{className:"w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"bg-white sm:rounded-lg p-6 text-center",children:(0,a.jsx)("p",{className:"text-3xl lg:h-96",children:"Your cart is empty"})})}):(0,a.jsx)(w,{}),(0,a.jsx)("div",{className:"mb-8",children:c&&(0,a.jsx)(i.Elements,{stripe:_,options:{clientSecret:c},children:(0,a.jsx)(d,{})})})]})}}},function(e){e.O(0,[453,925,633,648,138,566,181,752,203,885,971,23,744],function(){return e(e.s=4010)}),_N_E=e.O()}]);