(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{6622:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2988),a=n(2265),o={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},c=n(5636),l=a.forwardRef(function(e,t){return a.createElement(c.Z,(0,r.Z)({},e,{ref:t,icon:o}))})},4759:function(e,t,n){"use strict";n.d(t,{Cn:function(){return s},u6:function(){return c}});var r=n(2265),a=n(5360),o=n(4086);let c=1e3,l={Modal:100,Drawer:100,Popover:100,Popconfirm:100,Tooltip:100,Tour:100},i={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function s(e,t){let n;let[,c]=(0,a.ZP)(),s=r.useContext(o.Z);if(void 0!==t)n=[t,t];else{let r=null!=s?s:0;e in l?r+=(s?0:c.zIndexPopupBase)+l[e]:r+=i[e],n=[void 0===s?t:r,r]}return n}},4035:function(e,t,n){"use strict";n.d(t,{G8:function(){return o},ln:function(){return c}});var r=n(2265);function a(){}n(7638);let o=r.createContext({}),c=()=>{let e=()=>{};return e.deprecated=a,e}},4086:function(e,t,n){"use strict";let r=n(2265).createContext(void 0);t.Z=r},8059:function(e,t,n){"use strict";var r=n(5360);t.Z=e=>{let[,,,,t]=(0,r.ZP)();return t?"".concat(e,"-css-var"):""}},9257:function(e,t,n){"use strict";let r,a,o,c;n.d(t,{ZP:function(){return Y},w6:function(){return K}});var l=n(2265),i=n.t(l,2),s=n(7540),u=n(4815),d=n(4597),m=n(6274),p=n(4035),g=n(3992),f=n(1548);Object.assign({},f.Z.Modal);let h=[],E=()=>h.reduce((e,t)=>Object.assign(Object.assign({},e),t),f.Z.Modal);var v=n(2821),C=e=>{let{locale:t={},children:n,_ANT_MARK__:r}=e;l.useEffect(()=>(function(e){if(e){let t=Object.assign({},e);return h.push(t),E(),()=>{h=h.filter(e=>e!==t),E()}}Object.assign({},f.Z.Modal)})(null==t?void 0:t.Modal),[t]);let a=l.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return l.createElement(v.Z.Provider,{value:a},n)},b=n(9023),y=n(9101),S=n(8750),O=n(7783),P=n(142),T=n(9282),M=n(9292);let N="-ant-".concat(Date.now(),"-").concat(Math.random());var x=n(2135),_=n(5609),A=n(9373);let{useId:w}=Object.assign({},i);var R=void 0===w?()=>"":w,U=n(7842),I=n(5360);function j(e){let{children:t}=e,[,n]=(0,I.ZP)(),{motion:r}=n,a=l.useRef(!1);return(a.current=a.current||!1===r,a.current)?l.createElement(U.zt,{motion:r},t):t}var k=()=>null,L=n(3916),F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let D=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];function Z(){return r||S.Rf}function $(){return a||S.oR}let K=()=>({getPrefixCls:(e,t)=>t||(e?"".concat(Z(),"-").concat(e):Z()),getIconPrefixCls:$,getRootPrefixCls:()=>r||Z(),getTheme:()=>o,holderRender:c}),V=e=>{let{children:t,csp:n,autoInsertSpaceInButton:r,alert:a,anchor:o,form:c,locale:i,componentSize:h,direction:E,space:v,virtual:O,dropdownMatchSelectWidth:P,popupMatchSelectWidth:T,popupOverflow:M,legacyLocale:N,parentContext:w,iconPrefixCls:U,theme:I,componentDisabled:Z,segmented:$,statistic:K,spin:V,calendar:H,carousel:Y,cascader:G,collapse:W,typography:B,checkbox:Q,descriptions:z,divider:q,drawer:X,skeleton:J,steps:ee,image:et,layout:en,list:er,mentions:ea,modal:eo,progress:ec,result:el,slider:ei,breadcrumb:es,menu:eu,pagination:ed,input:em,textArea:ep,empty:eg,badge:ef,radio:eh,rate:eE,switch:ev,transfer:eC,avatar:eb,message:ey,tag:eS,table:eO,card:eP,tabs:eT,timeline:eM,timePicker:eN,upload:ex,notification:e_,tree:eA,colorPicker:ew,datePicker:eR,rangePicker:eU,flex:eI,wave:ej,dropdown:ek,warning:eL,tour:eF,floatButtonGroup:eD,variant:eZ,inputNumber:e$,treeSelect:eK}=e,eV=l.useCallback((t,n)=>{let{prefixCls:r}=e;if(n)return n;let a=r||w.getPrefixCls("");return t?"".concat(a,"-").concat(t):a},[w.getPrefixCls,e.prefixCls]),eH=U||w.iconPrefixCls||S.oR,eY=n||w.csp;(0,L.Z)(eH,eY);let eG=function(e,t,n){var r;(0,p.ln)("ConfigProvider");let a=e||{},o=!1!==a.inherit&&t?t:Object.assign(Object.assign({},b.u_),{hashed:null!==(r=null==t?void 0:t.hashed)&&void 0!==r?r:b.u_.hashed,cssVar:null==t?void 0:t.cssVar}),c=R();return(0,d.Z)(()=>{var r,l;if(!e)return t;let i=Object.assign({},o.components);Object.keys(e.components||{}).forEach(t=>{i[t]=Object.assign(Object.assign({},i[t]),e.components[t])});let s="css-var-".concat(c.replace(/:/g,"")),u=(null!==(r=a.cssVar)&&void 0!==r?r:o.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:null==n?void 0:n.prefixCls},"object"==typeof o.cssVar?o.cssVar:{}),"object"==typeof a.cssVar?a.cssVar:{}),{key:"object"==typeof a.cssVar&&(null===(l=a.cssVar)||void 0===l?void 0:l.key)||s});return Object.assign(Object.assign(Object.assign({},o),a),{token:Object.assign(Object.assign({},o.token),a.token),components:i,cssVar:u})},[a,o],(e,t)=>e.some((e,n)=>{let r=t[n];return!(0,A.Z)(e,r,!0)}))}(I,w.theme,{prefixCls:eV("")}),eW={csp:eY,autoInsertSpaceInButton:r,alert:a,anchor:o,locale:i||N,direction:E,space:v,virtual:O,popupMatchSelectWidth:null!=T?T:P,popupOverflow:M,getPrefixCls:eV,iconPrefixCls:eH,theme:eG,segmented:$,statistic:K,spin:V,calendar:H,carousel:Y,cascader:G,collapse:W,typography:B,checkbox:Q,descriptions:z,divider:q,drawer:X,skeleton:J,steps:ee,image:et,input:em,textArea:ep,layout:en,list:er,mentions:ea,modal:eo,progress:ec,result:el,slider:ei,breadcrumb:es,menu:eu,pagination:ed,empty:eg,badge:ef,radio:eh,rate:eE,switch:ev,transfer:eC,avatar:eb,message:ey,tag:eS,table:eO,card:eP,tabs:eT,timeline:eM,timePicker:eN,upload:ex,notification:e_,tree:eA,colorPicker:ew,datePicker:eR,rangePicker:eU,flex:eI,wave:ej,dropdown:ek,warning:eL,tour:eF,floatButtonGroup:eD,variant:eZ,inputNumber:e$,treeSelect:eK},eB=Object.assign({},w);Object.keys(eW).forEach(e=>{void 0!==eW[e]&&(eB[e]=eW[e])}),D.forEach(t=>{let n=e[t];n&&(eB[t]=n)}),void 0!==r&&(eB.button=Object.assign({autoInsertSpace:r},eB.button));let eQ=(0,d.Z)(()=>eB,eB,(e,t)=>{let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||n.some(n=>e[n]!==t[n])}),ez=l.useMemo(()=>({prefixCls:eH,csp:eY}),[eH,eY]),eq=l.createElement(l.Fragment,null,l.createElement(k,{dropdownMatchSelectWidth:P}),t),eX=l.useMemo(()=>{var e,t,n,r;return(0,m.T)((null===(e=f.Z.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(n=null===(t=eQ.locale)||void 0===t?void 0:t.Form)||void 0===n?void 0:n.defaultValidateMessages)||{},(null===(r=eQ.form)||void 0===r?void 0:r.validateMessages)||{},(null==c?void 0:c.validateMessages)||{})},[eQ,null==c?void 0:c.validateMessages]);Object.keys(eX).length>0&&(eq=l.createElement(g.Z.Provider,{value:eX},eq)),i&&(eq=l.createElement(C,{locale:i,_ANT_MARK__:"internalMark"},eq)),(eH||eY)&&(eq=l.createElement(u.Z.Provider,{value:ez},eq)),h&&(eq=l.createElement(_.q,{size:h},eq)),eq=l.createElement(j,null,eq);let eJ=l.useMemo(()=>{let e=eG||{},{algorithm:t,token:n,components:r,cssVar:a}=e,o=F(e,["algorithm","token","components","cssVar"]),c=t&&(!Array.isArray(t)||t.length>0)?(0,s.jG)(t):b.uH,l={};Object.entries(r||{}).forEach(e=>{let[t,n]=e,r=Object.assign({},n);"algorithm"in r&&(!0===r.algorithm?r.theme=c:(Array.isArray(r.algorithm)||"function"==typeof r.algorithm)&&(r.theme=(0,s.jG)(r.algorithm)),delete r.algorithm),l[t]=r});let i=Object.assign(Object.assign({},y.Z),n);return Object.assign(Object.assign({},o),{theme:c,token:i,components:l,override:Object.assign({override:i},l),cssVar:a})},[eG]);return I&&(eq=l.createElement(b.Mj.Provider,{value:eJ},eq)),eQ.warning&&(eq=l.createElement(p.G8.Provider,{value:eQ.warning},eq)),void 0!==Z&&(eq=l.createElement(x.n,{disabled:Z},eq)),l.createElement(S.E_.Provider,{value:eQ},eq)},H=e=>{let t=l.useContext(S.E_),n=l.useContext(v.Z);return l.createElement(V,Object.assign({parentContext:t,legacyLocale:n},e))};H.ConfigContext=S.E_,H.SizeContext=_.Z,H.config=e=>{let{prefixCls:t,iconPrefixCls:n,theme:l,holderRender:i}=e;void 0!==t&&(r=t),void 0!==n&&(a=n),"holderRender"in e&&(c=i),l&&(Object.keys(l).some(e=>e.endsWith("Color"))?function(e,t){let n=function(e,t){let n={},r=(e,t)=>{let n=e.clone();return(n=(null==t?void 0:t(n))||n).toRgbString()},a=(e,t)=>{let a=new P.C(e),o=(0,O.R_)(a.toRgbString());n["".concat(t,"-color")]=r(a),n["".concat(t,"-color-disabled")]=o[1],n["".concat(t,"-color-hover")]=o[4],n["".concat(t,"-color-active")]=o[6],n["".concat(t,"-color-outline")]=a.clone().setAlpha(.2).toRgbString(),n["".concat(t,"-color-deprecated-bg")]=o[0],n["".concat(t,"-color-deprecated-border")]=o[2]};if(t.primaryColor){a(t.primaryColor,"primary");let e=new P.C(t.primaryColor),o=(0,O.R_)(e.toRgbString());o.forEach((e,t)=>{n["primary-".concat(t+1)]=e}),n["primary-color-deprecated-l-35"]=r(e,e=>e.lighten(35)),n["primary-color-deprecated-l-20"]=r(e,e=>e.lighten(20)),n["primary-color-deprecated-t-20"]=r(e,e=>e.tint(20)),n["primary-color-deprecated-t-50"]=r(e,e=>e.tint(50)),n["primary-color-deprecated-f-12"]=r(e,e=>e.setAlpha(.12*e.getAlpha()));let c=new P.C(o[0]);n["primary-color-active-deprecated-f-30"]=r(c,e=>e.setAlpha(.3*e.getAlpha())),n["primary-color-active-deprecated-d-02"]=r(c,e=>e.darken(2))}t.successColor&&a(t.successColor,"success"),t.warningColor&&a(t.warningColor,"warning"),t.errorColor&&a(t.errorColor,"error"),t.infoColor&&a(t.infoColor,"info");let o=Object.keys(n).map(t=>"--".concat(e,"-").concat(t,": ").concat(n[t],";"));return"\n  :root {\n    ".concat(o.join("\n"),"\n  }\n  ").trim()}(e,t);(0,T.Z)()&&(0,M.hq)(n,"".concat(N,"-dynamic-theme"))}(Z(),l):o=l)},H.useConfig=function(){return{componentDisabled:(0,l.useContext)(x.Z),componentSize:(0,l.useContext)(_.Z)}},Object.defineProperty(H,"SizeContext",{get:()=>_.Z});var Y=H},3992:function(e,t,n){"use strict";var r=n(2265);t.Z=(0,r.createContext)(void 0)},2821:function(e,t,n){"use strict";let r=(0,n(2265).createContext)(void 0);t.Z=r},1548:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7753),a=n(2897),o=(0,a.Z)((0,a.Z)({},{yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",dateFormat:"M/D/YYYY",dateTimeFormat:"M/D/YYYY HH:mm:ss",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),c={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};let l={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},o),timePickerLocale:Object.assign({},c)},i="${label} is not a valid ${type}";var s={locale:"en",Pagination:r.Z,DatePicker:l,TimePicker:c,Calendar:l,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}}},357:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(8081)},8081:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var i=[],s=!1,u=-1;function d(){s&&r&&(s=!1,r.length?i=r.concat(i):u=-1,i.length&&m())}function m(){if(!s){var e=l(d);s=!0;for(var t=i.length;t;){for(r=i,i=[];++u<t;)r&&r[u].run();u=-1,t=i.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new p(e,t)),1!==i.length||s||l(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},c=!0;try{t[e](o,o.exports,r),c=!1}finally{c&&delete n[e]}return o.exports}r.ab="//";var a=r(229);e.exports=a}()},7753:function(e,t){"use strict";t.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},882:function(e,t){"use strict";var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=n.F1&&t<=n.F12)return!1;switch(t){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=n.ZERO&&e<=n.NINE||e>=n.NUM_ZERO&&e<=n.NUM_MULTIPLY||e>=n.A&&e<=n.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.Z=n},8884:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2897),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function o(e,t){return 0===e.indexOf(t)}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,r.Z)({},n);var c={};return Object.keys(e).forEach(function(n){(t.aria&&("role"===n||o(n,"aria-"))||t.data&&o(n,"data-")||t.attr&&a.includes(n))&&(c[n]=e[n])}),c}}}]);