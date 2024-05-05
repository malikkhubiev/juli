"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[770],{3222:(e,t,n)=>{n.d(t,{z:()=>f});var r=n(6540),a=n(8106),o=n(4540),c=n(8890),u=n(7707);const i={pageHeader:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:"0.5s",zIndex:5e3},fixedPageHeader:{top:0,left:0,position:"fixed",transform:"translateY(-150%)"},visibleHeader:{transform:"translateY(0)"},back:{cursor:"pointer"},stack:{width:"100%",padding:{md:"25px 45px",xs:"25px"}}};var l=n(9067),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},f=function(e){var t=e.children,n=e.onArrowBackClickCallback,f=e.isShowing,d=(0,r.useState)(!1),m=d[0],p=d[1],h=(0,r.useState)(!0),g=h[0],x=h[1],E=(0,a.Zp)(),v=(0,a.zy)(),b=0;(0,r.useEffect)((function(){!1!==f&&(window.onscroll=function(){var e=window.scrollY;if(0===e)return p((function(e){return!1}));p((function(e){return!0})),x(e>b?function(e){return!1}:function(e){return!0}),b=e})}),[]);var y=i.pageHeader;return m&&(y=s(s({},y),i.fixedPageHeader)),g&&(y=s(s({},y),i.visibleHeader)),r.createElement(l.A,{sx:y},r.createElement(c.Ai,{sx:i.stack},"/"===v.pathname?r.createElement(u.F,null):r.createElement(l.A,{sx:i.back,onClick:function(){n?n():E(-1)}},r.createElement(o.p,{type:"arrow_back"})),t))}},7707:(e,t,n)=>{n.d(t,{F:()=>c});var r=n(6540);const a={plug:{width:"25px"}};var o=n(9067),c=function(){return r.createElement(o.A,{sx:a.plug})}},9571:(e,t,n)=>{n.d(t,{c:()=>d});var r=n(9067),a=n(1104),o=n(6990),c=n(6540);const u={defaultBox:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},input:{margin:"0",width:{xs:"70%",md:"80%"},height:"76px"},button:{width:{xs:"30%",md:"20%"},height:"76px"}};var i=n(2389),l=n(6248),s=n(4540),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},d=function(e){var t=e.text,n=e.placeholder,d=e.addInputCallback,m=e.isMultiline,p=e.label,h=e.sx,g=e.lines,x=e.inputTestId,E=e.buttonTestId,v=e.icon,b=e.iconExtra,y=(0,c.useState)(t),w=y[0],k=y[1],S=(0,i.Bd)("authorized").t;(0,c.useEffect)((function(){(0,l.o)("authorized")}),[]),(0,c.useEffect)((function(){k((function(e){return t}))}),[t]);var A=function(){d(w)},O=u.defaultBox;return h&&(O=f(f({},O),h)),c.createElement(r.A,{sx:O},c.createElement(a.A,{sx:u.input,"data-testid":x,multiline:m,maxRows:g||null,label:p,autoComplete:"off",placeholder:n||null,value:w,onChange:function(e){k((function(t){return e.target.value}))},onKeyPress:function(e){"Enter"===e.key&&(A(),e.preventDefault())}}),c.createElement(o.A,{sx:u.button,"data-testid":E,onClick:A,variant:"contained"},v?c.createElement(s.p,{extra:b&&b,type:v}):S("addInput_send")))}},4645:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);const a=function(e,t){var n=(0,r.useState)(!1),a=n[0],o=(n[1],(0,r.useState)(null)),c=o[0],u=o[1],i=(0,r.useState)(""),l=i[0],s=i[1],f=(0,r.useRef)(null);(0,r.useEffect)((function(){return a||(f.current=new WebSocket("ws://localhost:5000/"),f.current.onopen=function(){f.current.send(JSON.stringify({token:localStorage.getItem("token"),type:e,imageId:t,method:"connection"})),s("Соединение открыто")},f.current.onclose=function(){return s("Соединение закрыто")},d()),function(){return f.current.close()}}),[f,a]);var d=(0,r.useCallback)((function(){f.current&&(f.current.onmessage=function(e){if(!a){var t=JSON.parse(e.data);u(t)}})}),[a]);return{data:c,sendData:function(e){f.current&&"Соединение открыто"===l&&f.current.send(JSON.stringify({token:localStorage.getItem("token"),method:"message",data:e}))}}}},3770:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N,transformNumber:()=>F});var r=n(4675),a=n(9067),o=n(6540),c=n(8106),u=n(1469),i=n(3222),l=n(7707),s=n(4073),f=n(5834),d=n(9753),m=n(407),p=n(9379),h=n(5771),g=n(8890);const x={comment:{width:"100%",margin:"25px 0"},line:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center"},body:{width:"92%",textIndent:"30px",fontSize:"20px",marginTop:"10px"},like:{width:"8%"}};var E=n(2389),v=n(6248),b=[{id:1,props:{body:"comment_delete_button",icon:"delete"}}],y=function(e){var t=e.id,n=e.authorId,r=e.authorName,c=e.isOwn,u=e.avatar,i=e.menuOptionsHandlerCallback,l=e.createdAt,y=e.text,w=e.numberOfLikes,k=e.isLiked,S=(0,o.useState)([]),A=S[0],O=S[1],I=(0,E.Bd)("authorized").t;(0,o.useEffect)((function(){(0,v.o)("authorized");var e=JSON.parse(JSON.stringify(b));e.forEach((function(e){e.props.body=I(e.props.body)})),O((function(t){return e}))}),[]);var C=(0,o.useState)(k),F=C[0],N=C[1],_=(0,o.useState)(w),T=_[0],j=_[1],z=(0,m.us)()[0],J=(0,m.XR)()[0],R=(0,d.j)();return o.createElement(a.A,{sx:x.comment},o.createElement(g.Ai,{sx:{flexDirection:"column"}},o.createElement(o.Fragment,null,o.createElement(p.h,{optionActionCallback:function(e){i(t)},menuOptions:A,authorId:n,authorName:r,isOwn:c,component:"comment",avatar:u,createdAt:l}),o.createElement(a.A,{sx:x.line},o.createElement(s.A,{variant:"body2",sx:x.body},y),o.createElement(a.A,{sx:x.like},o.createElement(h.A,{isLiked:F,like:function(){R((0,f.F6)(!0)),z({commentId:t}).unwrap().then((function(){N((function(e){return!0})),j((function(e){return"".concat(+e+1)}))})).catch((function(e){return R((0,f.g)(e.data.message))})),R((0,f.F6)(!1))},unLike:function(){R((0,f.F6)(!0)),J({commentId:t}).unwrap().then((function(){N((function(e){return!1})),j((function(e){return"".concat(+e-1)}))})).catch((function(e){return R((0,f.g)(e.data.message))})),R((0,f.F6)(!1))},numberOfLikes:T}))))))},w=n(4745),k=n(9571),S=n(1467),A=n(4645);const O={comments:function(e){return{width:"100%",padding:"25px",overflowY:"scroll",borderTop:"1px solid ".concat(e.palette.primary.main),display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}},column_wrap:{paddingBottom:"80px"}};var I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},I.apply(this,arguments)},C=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},F=function(e){var t=String(e);return e>999999?t="".concat(e/1e6,"M"):e>9999&&(t="".concat(e/1e3,"K")),t};const N=function(){var e=(0,E.Bd)("authorized").t;(0,o.useEffect)((function(){(0,v.o)("authorized")}),[]);var t=+(0,c.g)().imageId.slice(1),n="true"===(0,c.g)().isCommentSectionOpened.slice(1),s=(0,o.useState)(null),p=s[0],h=s[1],x=(0,o.useState)([]),b=x[0],N=x[1],_=(0,S.oW)()[0],T=(0,d.j)();(0,o.useEffect)((function(){t&&(T((0,f.F6)(!0)),_({imageId:t}).unwrap().then((function(e){N((function(t){return e.comments}));var t=JSON.parse(JSON.stringify(e));delete t.comments,h((function(e){return t}))})).catch((function(e){return T((0,f.g)(e.data.message))})),T((0,f.F6)(!1)))}),[t]);var j=(0,A.A)("comments",t),z=j.data,J=j.sendData;(0,o.useEffect)((function(){if(z)if(b){N((function(e){return C(C([],e,!0),[z],!1)}));var e=b.length+1,t=F(e);h((function(e){return I(I({},e),{numberOfComments:t})}))}else N((function(e){return[z]})),h((function(e){return I(I({},e),{numberOfComments:"1"})}))}),[z]);var R=(0,m.yq)()[0],H=(0,m.yy)()[0],B=(0,o.useRef)(),M=(0,o.useState)(n),P=M[0],D=M[1],L=(0,o.useState)(""),X=L[0],G=L[1],Y=function(e){T((0,f.F6)(!0)),H({commentId:e}).unwrap().then((function(t){var n=JSON.parse(JSON.stringify(b));void 0!==(n=n.filter((function(t){return t.id!==e})))[0]?N((function(e){return n})):N((function(e){return[]}));var r=n.length,a=F(r);h((function(e){return I(I({},e),{numberOfComments:a})}))})).catch((function(e){return T((0,f.g)(e.data.message))})),T((0,f.F6)(!1))};(0,o.useEffect)((function(){window.scrollTo(0,Number.MAX_SAFE_INTEGER),(null==B?void 0:B.current)&&(B.current.scrollTop=Number.MAX_SAFE_INTEGER)}),[b]);var K=(0,r.A)();return o.createElement(u.R,{sx:O.column_wrap},o.createElement(i.z,{isShowing:!1},o.createElement(l.F,null),o.createElement(l.F,null)),o.createElement(g.J,null,p?o.createElement(w._,I({commentsCallback:function(e){D((function(t){return e})),e&&setTimeout((function(){window.scrollTo(0,Number.MAX_SAFE_INTEGER),B&&B.current&&(B.current.scrollTop=Number.MAX_SAFE_INTEGER)}),10)},isCommentSectionOpened:P},p)):"",P?o.createElement(o.Fragment,null,o.createElement(a.A,{ref:B,sx:O.comments(K)},b&&b.length?b.map((function(e){return o.createElement(y,I({menuOptionsHandlerCallback:Y,key:e.id},e))})):""),o.createElement(k.c,{lines:3,isMultiline:!0,text:X,addInputCallback:function(e){e&&""!==e.trim()&&p.id&&(G((function(t){return e})),T((0,f.F6)(!0)),R({imageId:p.id,text:e}).unwrap().then((function(e){G((function(e){return""})),J({type:"comments",body:I({imageId:p.id},e)})})).catch((function(e){return T((0,f.g)(e.data.message))})),T((0,f.F6)(!1)))},buttonText:e("post_buttonText"),placeholder:e("post_placeholder"),icon:"send"})):""))}}}]);