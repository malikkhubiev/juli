(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{5327:(e,t,n)=>{"use strict";var r;n.d(t,{A:()=>f});var a=n(6540),i=n(173),o=n(7340),c=n(3951);function u(e,t,n,r,o){const[c,u]=a.useState((()=>o&&n?n(e).matches:r?r(e).matches:t));return(0,i.A)((()=>{let t=!0;if(!n)return;const r=n(e),a=()=>{t&&u(r.matches)};return a(),r.addListener(a),()=>{t=!1,r.removeListener(a)}}),[e,n]),c}const s=(r||(r=n.t(a,2))).useSyncExternalStore;function l(e,t,n,r,i){const o=a.useCallback((()=>t),[t]),c=a.useMemo((()=>{if(i&&n)return()=>n(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return o}),[o,e,r,i,n]),[u,l]=a.useMemo((()=>{if(null===n)return[o,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,n,e]);return s(l,u,c)}function f(e,t={}){const n=(0,c.A)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:i=(r?window.matchMedia:null),ssrMatchMedia:f=null,noSsr:m=!1}=(0,o.A)({name:"MuiUseMediaQuery",props:t,theme:n});let d="function"==typeof e?e(n):e;return d=d.replace(/^@media( ?)/m,""),(void 0!==s?l:u)(d,a,i,f,m)}},181:(e,t,n)=>{var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")(),f=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||o.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var r,a,i,o,c,u,s=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=r,i=a;return r=a=void 0,s=t,o=e.apply(i,n)}function y(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-s>=i}function x(){var e=p();if(y(e))return E(e);c=setTimeout(x,function(e){var n=t-(e-u);return f?d(n,i-(e-s)):n}(e))}function E(e){return c=void 0,v&&r?w(e):(r=a=void 0,o)}function b(){var e=p(),n=y(e);if(r=arguments,a=this,u=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(x,t),l?w(e):o}(u);if(f)return c=setTimeout(x,t),w(u)}return void 0===c&&(c=setTimeout(x,t)),o}return t=h(t)||0,g(n)&&(l=!!n.leading,i=(f="maxWait"in n)?m(h(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),b.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=a=c=void 0},b.flush=function(){return void 0===c?o:E(p())},b}},3222:(e,t,n)=>{"use strict";n.d(t,{z:()=>f});var r=n(6540),a=n(8106),i=n(4540),o=n(8890),c=n(7707);const u={pageHeader:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:"0.5s",zIndex:5e3},fixedPageHeader:{top:0,left:0,position:"fixed",transform:"translateY(-150%)"},visibleHeader:{transform:"translateY(0)"},back:{cursor:"pointer"},stack:{width:"100%",padding:{md:"25px 45px",xs:"25px"}}};var s=n(9067),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},f=function(e){var t=e.children,n=e.onArrowBackClickCallback,f=e.isShowing,m=(0,r.useState)(!1),d=m[0],p=m[1],g=(0,r.useState)(!0),h=g[0],v=g[1],w=(0,a.Zp)(),y=(0,a.zy)(),x=0;(0,r.useEffect)((function(){!1!==f&&(window.onscroll=function(){var e=window.scrollY;if(0===e)return p((function(e){return!1}));p((function(e){return!0})),v(e>x?function(e){return!1}:function(e){return!0}),x=e})}),[]);var E=u.pageHeader;return d&&(E=l(l({},E),u.fixedPageHeader)),h&&(E=l(l({},E),u.visibleHeader)),r.createElement(s.A,{sx:E},r.createElement(o.Ai,{sx:u.stack},"/"===y.pathname?r.createElement(c.F,null):r.createElement(s.A,{sx:u.back,onClick:function(){n?n():w(-1)}},r.createElement(i.p,{type:"arrow_back"})),t))}},7707:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var r=n(6540);const a={plug:{width:"25px"}};var i=n(9067),o=function(){return r.createElement(i.A,{sx:a.plug})}},9119:(e,t,n)=>{"use strict";n.d(t,{T:()=>l});var r=n(9067),a=n(6540),i=n(3222),o=n(7707),c=n(8890);const u={imagesComponent:{width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"},image:{width:"100%"},imageLine:{width:"38.19820590666498%"}};var s=n(2458),l=function(e){var t=e.images,n=e.children,l=(0,a.useState)(null),f=l[0],m=l[1],d=function(e){m((function(t){return+e.target.id}))};return a.createElement(r.A,{sx:u.imagesComponent},f?a.createElement(c.Ai,{sx:{flexDirection:"column"}},a.createElement(i.z,{onArrowBackClickCallback:function(){m((function(e){return null}))}},a.createElement(o.F,null),a.createElement(o.F,null)),a.createElement(s.Y,{images:t,idOfSelected:f})):a.createElement(c.Ai,{sx:{flexDirection:"column"}},n,a.createElement(c.qM,{sx:{flexWrap:"wrap"}},t&&t.map((function(e){return a.createElement(r.A,{key:e.id,sx:{width:{lg:"18vw",xs:"33vw"},height:{lg:"18vw",xs:"33vw"},margin:{lg:"1vw"}}},a.createElement("img",{onClick:d,id:e.id,style:u.image,src:"https://memories-3-ov6w.onrender.com/"+e.src}))})))))}},2458:(e,t,n)=>{"use strict";n.d(t,{Y:()=>p});var r=n(6540),a=n(3288),i=n(5834),o=n(9753),c=n(1467),u=n(8890),s=n(4745),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},f={},m={},d={},p=(0,r.memo)((function(e){var t=e.images,n=e.idOfSelected,p=e.onScrollHomePageFunc,g=(0,r.useState)(t),h=g[0],v=g[1],w=(0,a.o)(null),y=w.data,x=w.isLoading,E=w.error,b=(0,a.G$)()[0],k=(0,o.j)();(0,r.useEffect)((function(){E&&k((0,i.g)(E.data.message))}),[E]),(0,r.useEffect)((function(){k(x?(0,i.F6)(!0):(0,i.F6)(!1))}),[x]),(0,r.useEffect)((function(){y&&y.forEach((function(e){m[e.name]=e.rating}))}),[y]),(0,r.useEffect)((function(){v((function(e){return t}))}),[t]);var F=window.innerHeight,O=null,S={},j=(0,r.useCallback)((function(e,t,n){S[e]=t,n&&(O=n)}),[]),C=null,A=0,I=0,H=(0,r.useCallback)((function(){var e,t=Math.round((I-A)/1e3);if(d){var n=d[C]||0;d=l(l({},d),((e={})[C]=n+t,e))}}),[]);(0,r.useEffect)((function(){h&&h.length&&h.forEach((function(e){f[e.id]=e.tags.map((function(e){return e.name}))}))}),[h]);var M=(0,c.Sx)()[0];(0,r.useEffect)((function(){return window.onscroll=function(){p&&p();for(var e=window.scrollY+F/2,t=0,n=Object.entries(S);t<n.length;t++){var r=n[t],a=r[0],i=r[1];Math.abs(e-i)<O/2&&C!==+a&&(null===C?(C=+a,A=Date.now()):(I=Date.now(),H(),C=+a,A=Date.now()))}},function(){Object.keys(d).forEach((function(e){f[e].forEach((function(t){m[t]||(m[t]=0),m[t]=m[t]+d[e]}))}));var e=[];Object.entries(m).forEach((function(t){e.push({name:t[0],rating:t[1]})})),k((0,i.F6)(!0)),b({preferences:e,isFirstTime:!1}).unwrap().catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1));var t=Object.keys(d).map((function(e){return+e}));k((0,i.F6)(!0)),M({imagesIds:t}).unwrap().then((function(){return k((0,i.F6)(!1))}))}}),[]);var z=(0,c.wc)()[0],L=(0,c.D8)()[0],N=(0,c.nH)()[0],D=(0,c.Ws)()[0],P=(0,c.Fj)()[0],T=(0,c.UK)()[0],W=function(e,t){"Save"===t?(k((0,i.F6)(!0)),z({imageId:e}).unwrap().then((function(t){v((function(t){var n=JSON.parse(JSON.stringify(h));return n.forEach((function(t){t.id===e&&(t.isSaved=!0)})),n}))})).catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1))):"Unsave"===t?(k((0,i.F6)(!0)),L({imageId:e}).unwrap().then((function(t){v((function(t){var n=JSON.parse(JSON.stringify(h));return n.forEach((function(t){t.id===e&&(t.isSaved=!1)})),n}))})).catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1))):"Hide"===t?(k((0,i.F6)(!0)),N({imageId:e}).unwrap().then((function(t){v((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1))):"Delete"===t?(k((0,i.F6)(!0)),D({imageId:e}).unwrap().then((function(t){v((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1))):"Not interested"===t?(k((0,i.F6)(!0)),P({imageId:e}).unwrap().then((function(){v((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return k((0,i.g)(e.data.message))})),k((0,i.F6)(!1))):"Show"===t&&(k((0,i.F6)(!0)),T({imageId:e}),k((0,i.F6)(!1)))};return r.createElement(u.J,null,h&&h.map((function(e){return r.createElement(s._,{key:e.id,menuOptionsHandlerCallback:W,setImagePosition:j,idOfSelected:n,authorId:e.authorId,authorName:e.authorName,isOwn:e.isOwn,avatar:e.avatar,id:e.id,createdAt:e.createdAt,numberOfViews:e.numberOfViews,src:e.src,isLiked:e.isLiked,description:e.description,tags:e.tags,numberOfComments:e.numberOfComments,numberOfLikes:e.numberOfLikes,isPrivate:e.isPrivate,isSaved:e.isSaved})})))}))},7630:(e,t,n)=>{"use strict";n.d(t,{I:()=>f});var r=n(6540),a=n(4540);const i=function(e){return{margin:"25px",padding:"30px 40px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid",backgroundColor:"dark"===e.palette.mode?e.palette.primary.violet:e.palette.primary.mainBg,borderColor:e.palette.primary.violet}},o=function(e){return{outline:"none",fontSize:"20px",border:"0",maxWidth:"80%",backgroundColor:"transparent",color:e.palette.primary.main}};var c=n(4675),u=n(2389),s=n(6248),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},f=function(e){var t=e.searchHandler,n=(0,r.useState)(""),f=n[0],m=n[1],d=(0,u.Bd)("authorized").t;(0,r.useEffect)((function(){(0,s.o)("authorized")}),[]);var p=(0,c.A)(),g="\n    ::-webkit-input-placeholder {\n      color: ".concat(p.palette.primary.main,";\n    }\n    :-moz-placeholder {\n      color: ").concat(p.palette.primary.main,";\n    }\n    ::-moz-placeholder {\n      color: ").concat(p.palette.primary.main,";\n    }\n    :-ms-input-placeholder {\n      color: ").concat(p.palette.primary.main,";\n    }\n  ");return r.createElement(r.Fragment,null,r.createElement("style",null,g),r.createElement("div",{style:i(p)},r.createElement("input",{value:f,onChange:function(e){var n=e.target.value;m((function(e){return n})),""!==n.trim()&&t(n)},placeholder:d("search_placeholder")+"...",style:l({},o(p))}),r.createElement(a.p,{type:"search"})))}},4564:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(6540),a=n(9119),i=n(3222),o=n(4675),c=n(5327),u=n(9067),s=n(5001),l=n(8651),f=n(1469),m=n(2062),d=n(8890),p=n(7630);const g={rel:{position:"relative"},container:function(e,t){return{top:"100%",width:"100%",overflow:"scroll",position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",padding:function(){return t?"50px 15px":"50px"},backgroundColor:e.palette.primary.mainBg}},link:{width:"100%",marginTop:"10px",display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"30px",fontFamily:"Century Gothic",textDecoration:"none",color:"unset",overflow:"hidden"},item:{maxWidth:"75%",marginLeft:"10px"}};var h=function(e){var t=e.searchHandler,n=e.searchResults,a=(0,r.useState)(n),i=a[0],h=a[1];(0,r.useEffect)((function(){h((function(e){return n}))}),[n]);var v=(0,o.A)(),w=(0,c.A)(v.breakpoints.down("md"));return r.createElement(d.J,{sx:g.rel},r.createElement(f.R,{removePadding:!0},r.createElement(p.I,{searchHandler:t}),0!==i.results.length&&r.createElement(u.A,{sx:g.container(v,w)},i.results.map((function(e){return r.createElement(s.A,{component:l.N_,key:e.name,sx:g.link,to:"tag"===i.type?"/tags/:".concat(e.id,"/:").concat(e.name):"/profile:".concat(e.id)},"tag"!==i.type?r.createElement(m.z,{src:e.avatar,width:55}):"",r.createElement(u.A,{sx:g.item},r.createElement(d.$e,null,"tag"===i.type?"#".concat(e.name):e.name)))})))))},v=n(7707),w=n(3288),y=n(4122),x=n(5834),E=n(9753),b=n(181),k=n.n(b);const F={stack:{flexDirection:"column"}},O=function(){var e=(0,E.j)(),t=(0,r.useState)({results:[]}),n=t[0],o=t[1],c=(0,y.zW)()[0],u=(0,y.Gi)()[0],s=k()((function(t){"#"===t[0]?(e((0,x.F6)(!0)),c({substring:t.slice(1)}).unwrap().then((function(e){o((function(t){return{type:"tag",results:e}}))})).catch((function(t){return e((0,x.g)(t.data.message))})),e((0,x.F6)(!1))):(e((0,x.F6)(!0)),u({substring:t.slice(1)}).unwrap().then((function(e){o((function(t){return{type:"user",results:e}}))})).catch((function(t){return e((0,x.g)(t.data.message))})),e((0,x.F6)(!1)))}),500),l=(0,w.V9)(null),f=l.data,m=l.isLoading,p=l.error;return(0,r.useEffect)((function(){p&&e((0,x.g)(p.data.message))}),[p]),(0,r.useEffect)((function(){e(m?(0,x.F6)(!0):(0,x.F6)(!1))}),[m]),r.createElement(d.Ai,{sx:F.stack},(null==f?void 0:f.rows)&&r.createElement(a.T,{images:f.rows},r.createElement(i.z,null,r.createElement(v.F,null),r.createElement(v.F,null)),r.createElement(h,{searchHandler:s,searchResults:n})))}}}]);