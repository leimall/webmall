(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{7345:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,s,l,f,p,d={exports:{}};d.exports=(function(){if(p)return f;p=1;var e=l?s:(l=1,s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,f=function(){function r(t,n,r,o,i,c){if(c!==e){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function o(){return r}r.isRequired=r;var i={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}})()();var m=(a=d.exports)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,h=function(e,n,r){var o=!!r,i=t.useRef(r);t.useEffect(function(){i.current=r},[r]),t.useEffect(function(){if(!o||!e)return function(){};var t=function(){i.current&&i.current.apply(i,arguments)};return e.on(n,t),function(){e.off(n,t)}},[o,n,e,i])},v=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},y=function(e){return null!==e&&"object"===o(e)},g="[object Object]",b=function e(t,n){if(!y(t)||!y(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===g;if(o!==(Object.prototype.toString.call(n)===g))return!1;if(!o&&!r)return t===n;var i=Object.keys(t),c=Object.keys(n);if(i.length!==c.length)return!1;for(var u={},a=0;a<i.length;a+=1)u[i[a]]=!0;for(var s=0;s<c.length;s+=1)u[c[s]]=!0;var l=Object.keys(u);return l.length===i.length&&l.every(function(r){return e(t[r],n[r])})},C=function(e,t,n){return y(e)?Object.keys(e).reduce(function(o,c){var u=!y(t)||!b(e[c],t[c]);return n.includes(c)?(u&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):u?r(r({},o||{}),{},i({},c,e[c])):o},null):null},E="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;if(null===e||y(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error(t)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;if(y(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(function(e){return k(e,t)})};var n=k(e,t);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},w=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.7.1"}),e.registerAppInfo({name:"react-stripe-js",version:"2.7.1",url:"https://stripe.com/docs/stripe-js/react"}))},x=t.createContext(null);x.displayName="ElementsContext";var O=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},j=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useMemo(function(){return S(n)},[n]),u=c(t.useState(function(){return{stripe:"sync"===i.tag?i.stripe:null,elements:"sync"===i.tag?i.stripe.elements(r):null}}),2),a=u[0],s=u[1];t.useEffect(function(){var e=!0,t=function(e){s(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==i.tag||a.stripe?"sync"!==i.tag||a.stripe||t(i.stripe):i.stripePromise.then(function(n){n&&e&&t(n)}),function(){e=!1}},[i,a,r]);var l=v(n);t.useEffect(function(){null!==l&&l!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[l,n]);var f=v(r);return t.useEffect(function(){if(a.elements){var e=C(r,f,["clientSecret","fonts"]);e&&a.elements.update(e)}},[r,f,a.elements]),t.useEffect(function(){w(a.stripe)},[a.stripe]),t.createElement(x.Provider,{value:a},o)};j.propTypes={stripe:m.any,options:m.object};var P=function(e){return O(t.useContext(x),e)},T=function(e){return(0,e.children)(P("mounts <ElementsConsumer>"))};T.propTypes={children:m.func.isRequired};var A=["on","session"],I=t.createContext(null);I.displayName="CustomCheckoutSdkContext";var N=function(e,t){if(!e)throw Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e},R=t.createContext(null);R.displayName="CustomCheckoutContext";var B=function(e,t){if(!e)return null;e.on,e.session;var n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,A);return t?r(r({},n),t):r(r({},n),e.session())},M=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),u=c(t.useState(null),2),a=u[0],s=u[1],l=c(t.useState(function(){return{stripe:"sync"===i.tag?i.stripe:null,customCheckoutSdk:null}}),2),f=l[0],p=l[1],d=function(e,t){p(function(n){return n.stripe&&n.customCheckoutSdk?n:{stripe:e,customCheckoutSdk:t}})},m=t.useRef(!1);t.useEffect(function(){var e=!0;return"async"!==i.tag||f.stripe?"sync"===i.tag&&i.stripe&&!m.current&&(m.current=!0,i.stripe.initCustomCheckout(r).then(function(e){e&&(d(i.stripe,e),e.on("change",s))})):i.stripePromise.then(function(t){t&&e&&!m.current&&(m.current=!0,t.initCustomCheckout(r).then(function(e){e&&(d(t,e),e.on("change",s))}))}),function(){e=!1}},[i,f,r,s]);var h=v(n);t.useEffect(function(){null!==h&&h!==n&&console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[h,n]);var g=v(r);t.useEffect(function(){if(f.customCheckoutSdk){!r.clientSecret||y(g)||b(r.clientSecret,g.clientSecret)||console.warn("Unsupported prop change: options.client_secret is not a mutable property.");var e,t,n=null==g?void 0:null===(e=g.elementsOptions)||void 0===e?void 0:e.appearance,o=null==r?void 0:null===(t=r.elementsOptions)||void 0===t?void 0:t.appearance;o&&!b(o,n)&&f.customCheckoutSdk.changeAppearance(o)}},[r,g,f.customCheckoutSdk]),t.useEffect(function(){w(f.stripe)},[f.stripe]);var C=t.useMemo(function(){return B(f.customCheckoutSdk,a)},[f.customCheckoutSdk,a]);return f.customCheckoutSdk?t.createElement(I.Provider,{value:f},t.createElement(R.Provider,{value:C},o)):null};M.propTypes={stripe:m.any,options:m.shape({clientSecret:m.string.isRequired,elementsOptions:m.object}).isRequired};var _=function(e){var n=t.useContext(I),r=t.useContext(x);if(n&&r)throw Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?N(n,e):O(r,e)},L=function(e,n){var r="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),o=n?function(e){_("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,i=n.id,u=n.className,a=n.options,s=void 0===a?{}:a,l=n.onBlur,f=n.onFocus,p=n.onReady,d=n.onChange,m=n.onEscape,y=n.onClick,g=n.onLoadError,b=n.onLoaderStart,E=n.onNetworksChange,k=n.onConfirm,S=n.onCancel,w=n.onShippingAddressChange,x=n.onShippingRateChange,O=_("mounts <".concat(r,">")),j="elements"in O?O.elements:null,P="customCheckoutSdk"in O?O.customCheckoutSdk:null,T=c(t.useState(null),2),A=T[0],I=T[1],N=t.useRef(null),R=t.useRef(null);h(A,"blur",l),h(A,"focus",f),h(A,"escape",m),h(A,"click",y),h(A,"loaderror",g),h(A,"loaderstart",b),h(A,"networkschange",E),h(A,"confirm",k),h(A,"cancel",S),h(A,"shippingaddresschange",w),h(A,"shippingratechange",x),h(A,"change",d),p&&(o="expressCheckout"===e?p:function(){p(A)}),h(A,"ready",o),t.useLayoutEffect(function(){if(null===N.current&&null!==R.current&&(j||P)){var t=null;P?t=P.createElement(e,s):j&&(t=j.create(e,s)),N.current=t,I(t),t&&t.mount(R.current)}},[j,P,s]);var B=v(s);return t.useEffect(function(){if(N.current){var e=C(s,B,["paymentRequest"]);e&&N.current.update(e)}},[s,B]),t.useLayoutEffect(function(){return function(){if(N.current&&"function"==typeof N.current.destroy)try{N.current.destroy(),N.current=null}catch(e){}}},[]),t.createElement("div",{id:i,className:u,ref:R})};return o.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onEscape:m.func,onClick:m.func,onLoadError:m.func,onLoaderStart:m.func,onNetworksChange:m.func,onConfirm:m.func,onCancel:m.func,onShippingAddressChange:m.func,onShippingRateChange:m.func,options:m.object},o.displayName=r,o.__elementType=e,o},z="undefined"==typeof window,W=t.createContext(null);W.displayName="EmbeddedCheckoutProviderContext";var U=function(){var e=t.useContext(W);if(!e)throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");return e},Y=z?function(e){var n=e.id,r=e.className;return U(),t.createElement("div",{id:n,className:r})}:function(e){var n=e.id,r=e.className,o=U().embeddedCheckout,i=t.useRef(!1),c=t.useRef(null);return t.useLayoutEffect(function(){return!i.current&&o&&null!==c.current&&(o.mount(c.current),i.current=!0),function(){if(i.current&&o)try{o.unmount(),i.current=!1}catch(e){}}},[o]),t.createElement("div",{ref:c,id:n,className:r})},q=L("auBankAccount",z),D=L("card",z),F=L("cardNumber",z),H=L("cardExpiry",z),G=L("cardCvc",z),$=L("fpxBank",z),J=L("iban",z),V=L("idealBank",z),X=L("p24Bank",z),Z=L("epsBank",z),K=L("payment",z),Q=L("expressCheckout",z),ee=L("paymentRequestButton",z),et=L("linkAuthentication",z),en=L("address",z),er=L("shippingAddress",z),eo=L("paymentMethodMessaging",z),ei=L("affirmMessage",z),ec=L("afterpayClearpayMessage",z);e.AddressElement=en,e.AffirmMessageElement=ei,e.AfterpayClearpayMessageElement=ec,e.AuBankAccountElement=q,e.CardCvcElement=G,e.CardElement=D,e.CardExpiryElement=H,e.CardNumberElement=F,e.CustomCheckoutProvider=M,e.Elements=j,e.ElementsConsumer=T,e.EmbeddedCheckout=Y,e.EmbeddedCheckoutProvider=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),u=t.useRef(null),a=t.useRef(null),s=c(t.useState({embeddedCheckout:null}),2),l=s[0],f=s[1];t.useEffect(function(){if(!a.current&&!u.current){var e=function(e){a.current||u.current||(a.current=e,u.current=a.current.initEmbeddedCheckout(r).then(function(e){f({embeddedCheckout:e})}))};"async"===i.tag&&!a.current&&(r.clientSecret||r.fetchClientSecret)?i.stripePromise.then(function(t){t&&e(t)}):"sync"===i.tag&&!a.current&&(r.clientSecret||r.fetchClientSecret)&&e(i.stripe)}},[i,r,l,a]),t.useEffect(function(){return function(){l.embeddedCheckout?(u.current=null,l.embeddedCheckout.destroy()):u.current&&u.current.then(function(){u.current=null,l.embeddedCheckout&&l.embeddedCheckout.destroy()})}},[l.embeddedCheckout]),t.useEffect(function(){w(a)},[a]);var p=v(n);t.useEffect(function(){null!==p&&p!==n&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[p,n]);var d=v(r);return t.useEffect(function(){if(null!=d){if(null==r){console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");return}void 0===r.clientSecret&&void 0===r.fetchClientSecret&&console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."),null!=d.clientSecret&&r.clientSecret!==d.clientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.fetchClientSecret&&r.fetchClientSecret!==d.fetchClientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.onComplete&&r.onComplete!==d.onComplete&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.")}},[d,r]),t.createElement(W.Provider,{value:l},o)},e.EpsBankElement=Z,e.ExpressCheckoutElement=Q,e.FpxBankElement=$,e.IbanElement=J,e.IdealBankElement=V,e.LinkAuthenticationElement=et,e.P24BankElement=X,e.PaymentElement=K,e.PaymentMethodMessagingElement=eo,e.PaymentRequestButtonElement=ee,e.ShippingAddressElement=er,e.useCustomCheckout=function(){e="calls useCustomCheckout()",N(t.useContext(I),e);var e,n=t.useContext(R);if(!n)throw Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");return n},e.useElements=function(){return P("calls useElements()").elements},e.useStripe=function(){return _("calls useStripe()").stripe}}(t,n(2265))},4110:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2265),o=n(6800),i=n.n(o),c=n(8750),u=n(2034),a=n(8170),s=n(3561),l=n(3204);let f=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o,textPaddingInline:i,orientationMargin:c,verticalMarginInline:s}=e;return{[t]:Object.assign(Object.assign({},(0,a.Wf)(e)),{borderBlockStart:"".concat((0,u.bf)(o)," solid ").concat(r),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,u.bf)(o)," solid ").concat(r)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,u.bf)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,u.bf)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(r),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,u.bf)(o)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"calc(".concat(c," * 100%)")},"&::after":{width:"calc(100% - ".concat(c," * 100%)")}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(c," * 100%)")},"&::after":{width:"calc(".concat(c," * 100%)")}},["".concat(t,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:"".concat((0,u.bf)(o)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:n}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:n}}})}};var p=(0,s.I$)("Divider",e=>[f((0,l.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0}))],e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}}),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},m=e=>{let{getPrefixCls:t,direction:n,divider:o}=r.useContext(c.E_),{prefixCls:u,type:a="horizontal",orientation:s="center",orientationMargin:l,className:f,rootClassName:m,children:h,dashed:v,plain:y,style:g}=e,b=d(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),C=t("divider",u),[E,k,S]=p(C),w=!!h,x="left"===s&&null!=l,O="right"===s&&null!=l,j=i()(C,null==o?void 0:o.className,k,S,"".concat(C,"-").concat(a),{["".concat(C,"-with-text")]:w,["".concat(C,"-with-text-").concat(s)]:w,["".concat(C,"-dashed")]:!!v,["".concat(C,"-plain")]:!!y,["".concat(C,"-rtl")]:"rtl"===n,["".concat(C,"-no-default-orientation-margin-left")]:x,["".concat(C,"-no-default-orientation-margin-right")]:O},f,m),P=r.useMemo(()=>"number"==typeof l?l:/^\d+$/.test(l)?Number(l):l,[l]),T=Object.assign(Object.assign({},x&&{marginLeft:P}),O&&{marginRight:P});return E(r.createElement("div",Object.assign({className:j,style:Object.assign(Object.assign({},null==o?void 0:o.style),g)},b,{role:"separator"}),h&&"vertical"!==a&&r.createElement("span",{className:"".concat(C,"-inner-text"),style:T},h)))}},357:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8081)},8081:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var a=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?a=r.concat(a):l=-1,a.length&&p())}function p(){if(!s){var e=u(f);s=!0;for(var t=a.length;t;){for(r=a,a=[];++l<t;)r&&r[l].run();l=-1,t=a.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||s||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},c=!0;try{t[e](i,i.exports,r),c=!1}finally{c&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},3537:function(e,t,n){"use strict";n.d(t,{J:function(){return h}});var r,o="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(i.test(n.src))return n}return null},u=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},a=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"3.5.0",startTime:t})},s=null,l=null,f=null,p=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return a(r,n),r},d=!1,m=function(){return r||(r=(null!==s?s:(s=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var n,r=c();r?r&&null!==f&&null!==l&&(r.removeEventListener("load",f),r.removeEventListener("error",l),null===(n=r.parentNode)||void 0===n||n.removeChild(r),r=u(null)):r=u(null),f=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},l=function(){t(Error("Failed to load Stripe.js"))},r.addEventListener("load",f),r.addEventListener("error",l)}catch(e){t(e);return}})).catch(function(e){return s=null,Promise.reject(e)})).catch(function(e){return r=null,Promise.reject(e)}))};Promise.resolve().then(function(){return m()}).catch(function(e){d||console.warn(e)});var h=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];d=!0;var r=Date.now();return m().then(function(e){return p(e,t,r)})}}}]);