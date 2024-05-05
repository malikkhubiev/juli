/*! For license information please see 340.bundle.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[340],{5327:(e,t,o)=>{"use strict";var n;o.d(t,{A:()=>d});var r=o(6540),i=o(173),a=o(7340),s=o(3951);function c(e,t,o,n,a){const[s,c]=r.useState((()=>a&&o?o(e).matches:n?n(e).matches:t));return(0,i.A)((()=>{let t=!0;if(!o)return;const n=o(e),r=()=>{t&&c(n.matches)};return r(),n.addListener(r),()=>{t=!1,n.removeListener(r)}}),[e,o]),s}const h=(n||(n=o.t(r,2))).useSyncExternalStore;function p(e,t,o,n,i){const a=r.useCallback((()=>t),[t]),s=r.useMemo((()=>{if(i&&o)return()=>o(e).matches;if(null!==n){const{matches:t}=n(e);return()=>t}return a}),[a,e,n,i,o]),[c,p]=r.useMemo((()=>{if(null===o)return[a,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[a,o,e]);return h(p,c,s)}function d(e,t={}){const o=(0,s.A)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:i=(n?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:u=!1}=(0,a.A)({name:"MuiUseMediaQuery",props:t,theme:o});let l="function"==typeof e?e(o):e;return l=l.replace(/^@media( ?)/m,""),(void 0!==h?p:c)(l,r,i,d,u)}},4030:(e,t,o)=>{e.exports=o(777)},7700:e=>{"use strict";var t=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t};e.exports=o},8751:e=>{var t,o,n,r,i,a,s,c,h,p,d,u,l,m,f,v=!1;function g(){if(!v){v=!0;var e=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),w=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(u=/\b(iPhone|iP[ao]d)/.exec(e),l=/\b(iP[ao]d)/.exec(e),p=/Android/i.exec(e),m=/FBAN\/\w+;/i.exec(e),f=/Mobile/i.exec(e),d=!!/Win64/.exec(e),g){(t=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN)&&document&&document.documentMode&&(t=document.documentMode);var C=/(?:Trident\/(\d+.\d+))/.exec(e);a=C?parseFloat(C[1])+4:t,o=g[2]?parseFloat(g[2]):NaN,n=g[3]?parseFloat(g[3]):NaN,(r=g[4]?parseFloat(g[4]):NaN)?(g=/(?:Chrome\/(\d+\.\d+))/.exec(e),i=g&&g[1]?parseFloat(g[1]):NaN):i=NaN}else t=o=n=i=r=NaN;if(w){if(w[1]){var y=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);s=!y||parseFloat(y[1].replace("_","."))}else s=!1;c=!!w[2],h=!!w[3]}else s=c=h=!1}}var w={ie:function(){return g()||t},ieCompatibilityMode:function(){return g()||a>t},ie64:function(){return w.ie()&&d},firefox:function(){return g()||o},opera:function(){return g()||n},webkit:function(){return g()||r},safari:function(){return w.webkit()},chrome:function(){return g()||i},windows:function(){return g()||c},osx:function(){return g()||s},linux:function(){return g()||h},iphone:function(){return g()||u},mobile:function(){return g()||u||l||p||f},nativeApp:function(){return g()||m},android:function(){return g()||p},ipad:function(){return g()||l}};e.exports=w},8125:(e,t,o)=>{"use strict";var n,r=o(7700);r.canUseDOM&&(n=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=function(e,t){if(!r.canUseDOM||t&&!("addEventListener"in document))return!1;var o="on"+e,i=o in document;if(!i){var a=document.createElement("div");a.setAttribute(o,"return;"),i="function"==typeof a[o]}return!i&&n&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}},777:(e,t,o)=>{"use strict";var n=o(8751),r=o(8125);function i(e){var t=0,o=0,n=0,r=0;return"detail"in e&&(o=e.detail),"wheelDelta"in e&&(o=-e.wheelDelta/120),"wheelDeltaY"in e&&(o=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=o,o=0),n=10*t,r=10*o,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||r)&&e.deltaMode&&(1==e.deltaMode?(n*=40,r*=40):(n*=800,r*=800)),n&&!t&&(t=n<1?-1:1),r&&!o&&(o=r<1?-1:1),{spinX:t,spinY:o,pixelX:n,pixelY:r}}i.getEventType=function(){return n.firefox()?"DOMMouseScroll":r("wheel")?"wheel":"mousewheel"},e.exports=i},190:(e,t,o)=>{"use strict";o.d(t,{A:()=>w});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},r=function(){return r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.create,Object.create;var i=o(6540),a=o(4030),s=o.n(a);function c(e,t,o,n,r){void 0===r&&(r=0);var i=f(t.width,t.height,r),a=i.width,s=i.height;return{x:h(e.x,a,o.width,n),y:h(e.y,s,o.height,n)}}function h(e,t,o,n){var r=t*n/2-o/2;return v(e,-r,r)}function p(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function d(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}function u(e,t){return Math.min(e,Math.max(0,t))}function l(e,t){return t}function m(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function f(e,t,o){var n=o*Math.PI/180;return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function v(e,t,o){return Math.min(Math.max(e,t),o)}function g(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"==typeof e&&e.length>0})).join(" ").trim()}const w=function(e){function t(){var o=null!==e&&e.apply(this,arguments)||this;return o.imageRef=i.createRef(),o.videoRef=i.createRef(),o.containerRef=null,o.styleRef=null,o.containerRect=null,o.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},o.dragStartPosition={x:0,y:0},o.dragStartCrop={x:0,y:0},o.lastPinchDistance=0,o.lastPinchRotation=0,o.rafDragTimeout=null,o.rafPinchTimeout=null,o.wheelTimer=null,o.state={cropSize:null,hasWheelJustStarted:!1},o.preventZoomSafari=function(e){return e.preventDefault()},o.cleanEvents=function(){document.removeEventListener("mousemove",o.onMouseMove),document.removeEventListener("mouseup",o.onDragStopped),document.removeEventListener("touchmove",o.onTouchMove),document.removeEventListener("touchend",o.onDragStopped)},o.clearScrollEvent=function(){o.containerRef&&o.containerRef.removeEventListener("wheel",o.onWheel),o.wheelTimer&&clearTimeout(o.wheelTimer)},o.onMediaLoad=function(){var e=o.computeSizes();e&&(o.emitCropData(),o.setInitialCrop(e)),o.props.onMediaLoaded&&o.props.onMediaLoaded(o.mediaSize)},o.setInitialCrop=function(e){if(o.props.initialCroppedAreaPercentages){var t=function(e,t,o,n,r,i){var a=f(t.width,t.height,o),s=v(n.width/a.width*(100/e.width),r,i);return{crop:{x:s*a.width/2-n.width/2-a.width*s*(e.x/100),y:s*a.height/2-n.height/2-a.height*s*(e.y/100)},zoom:s}}(o.props.initialCroppedAreaPercentages,o.mediaSize,o.props.rotation,e,o.props.minZoom,o.props.maxZoom),n=t.crop,r=t.zoom;o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}else if(o.props.initialCroppedAreaPixels){var i=function(e,t,o,n,r,i){void 0===o&&(o=0);var a=f(t.naturalWidth,t.naturalHeight,o),s=v(function(e,t,o){var n=function(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}(t);return o.height>o.width?o.height/(e.height*n):o.width/(e.width*n)}(e,t,n),r,i),c=n.height>n.width?n.height/e.height:n.width/e.width;return{crop:{x:((a.width-e.width)/2-e.x)*c,y:((a.height-e.height)/2-e.y)*c},zoom:s}}(o.props.initialCroppedAreaPixels,o.mediaSize,o.props.rotation,e,o.props.minZoom,o.props.maxZoom);n=i.crop,r=i.zoom,o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}},o.computeSizes=function(){var e,t,n,i,a,s,c=o.imageRef.current||o.videoRef.current;if(c&&o.containerRef){o.containerRect=o.containerRef.getBoundingClientRect();var h=o.containerRect.width/o.containerRect.height,p=(null===(e=o.imageRef.current)||void 0===e?void 0:e.naturalWidth)||(null===(t=o.videoRef.current)||void 0===t?void 0:t.videoWidth)||0,d=(null===(n=o.imageRef.current)||void 0===n?void 0:n.naturalHeight)||(null===(i=o.videoRef.current)||void 0===i?void 0:i.videoHeight)||0,u=p/d,l=void 0;if(c.offsetWidth<p||c.offsetHeight<d)switch(o.props.objectFit){default:case"contain":l=h>u?{width:o.containerRect.height*u,height:o.containerRect.height}:{width:o.containerRect.width,height:o.containerRect.width/u};break;case"horizontal-cover":l={width:o.containerRect.width,height:o.containerRect.width/u};break;case"vertical-cover":l={width:o.containerRect.height*u,height:o.containerRect.height};break;case"auto-cover":l=p>d?{width:o.containerRect.width,height:o.containerRect.width/u}:{width:o.containerRect.height*u,height:o.containerRect.height}}else l={width:c.offsetWidth,height:c.offsetHeight};o.mediaSize=r(r({},l),{naturalWidth:p,naturalHeight:d});var m=o.props.cropSize?o.props.cropSize:function(e,t,o,n,r,i){void 0===i&&(i=0);var a=f(e,t,i),s=a.width,c=a.height,h=Math.min(s,o),p=Math.min(c,n);return h>p*r?{width:p*r,height:p}:{width:h,height:h/r}}(o.mediaSize.width,o.mediaSize.height,o.containerRect.width,o.containerRect.height,o.props.aspect,o.props.rotation);return(null===(a=o.state.cropSize)||void 0===a?void 0:a.height)===m.height&&(null===(s=o.state.cropSize)||void 0===s?void 0:s.width)===m.width||o.props.onCropSizeChange&&o.props.onCropSizeChange(m),o.setState({cropSize:m},o.recomputeCropPosition),m}},o.onMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",o.onMouseMove),document.addEventListener("mouseup",o.onDragStopped),o.onDragStart(t.getMousePoint(e))},o.onMouseMove=function(e){return o.onDrag(t.getMousePoint(e))},o.onTouchStart=function(e){o.props.onTouchRequest&&!o.props.onTouchRequest(e)||(document.addEventListener("touchmove",o.onTouchMove,{passive:!1}),document.addEventListener("touchend",o.onDragStopped),2===e.touches.length?o.onPinchStart(e):1===e.touches.length&&o.onDragStart(t.getTouchPoint(e.touches[0])))},o.onTouchMove=function(e){e.preventDefault(),2===e.touches.length?o.onPinchMove(e):1===e.touches.length&&o.onDrag(t.getTouchPoint(e.touches[0]))},o.onDragStart=function(e){var t,n,i=e.x,a=e.y;o.dragStartPosition={x:i,y:a},o.dragStartCrop=r({},o.props.crop),null===(n=(t=o.props).onInteractionStart)||void 0===n||n.call(t)},o.onDrag=function(e){var t=e.x,n=e.y;o.rafDragTimeout&&window.cancelAnimationFrame(o.rafDragTimeout),o.rafDragTimeout=window.requestAnimationFrame((function(){if(o.state.cropSize&&void 0!==t&&void 0!==n){var e=t-o.dragStartPosition.x,r=n-o.dragStartPosition.y,i={x:o.dragStartCrop.x+e,y:o.dragStartCrop.y+r},a=o.props.restrictPosition?c(i,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):i;o.props.onCropChange(a)}}))},o.onDragStopped=function(){var e,t;o.cleanEvents(),o.emitCropData(),null===(t=(e=o.props).onInteractionEnd)||void 0===t||t.call(e)},o.onWheel=function(e){if(!o.props.onWheelRequest||o.props.onWheelRequest(e)){e.preventDefault();var n=t.getMousePoint(e),r=s()(e).pixelY,i=o.props.zoom-r*o.props.zoomSpeed/200;o.setNewZoom(i,n),o.state.hasWheelJustStarted||o.setState({hasWheelJustStarted:!0},(function(){var e,t;return null===(t=(e=o.props).onInteractionStart)||void 0===t?void 0:t.call(e)})),o.wheelTimer&&clearTimeout(o.wheelTimer),o.wheelTimer=window.setTimeout((function(){return o.setState({hasWheelJustStarted:!1},(function(){var e,t;return null===(t=(e=o.props).onInteractionEnd)||void 0===t?void 0:t.call(e)}))}),250)}},o.getPointOnContainer=function(e){var t=e.x,n=e.y;if(!o.containerRect)throw new Error("The Cropper is not mounted");return{x:o.containerRect.width/2-(t-o.containerRect.left),y:o.containerRect.height/2-(n-o.containerRect.top)}},o.getPointOnMedia=function(e){var t=e.x,n=e.y,r=o.props,i=r.crop,a=r.zoom;return{x:(t+i.x)/a,y:(n+i.y)/a}},o.setNewZoom=function(e,t){if(o.state.cropSize&&o.props.onZoomChange){var n=o.getPointOnContainer(t),r=o.getPointOnMedia(n),i=v(e,o.props.minZoom,o.props.maxZoom),a={x:r.x*i-n.x,y:r.y*i-n.y},s=o.props.restrictPosition?c(a,o.mediaSize,o.state.cropSize,i,o.props.rotation):a;o.props.onCropChange(s),o.props.onZoomChange(i)}},o.getCropData=function(){return o.state.cropSize?function(e,t,o,n,i,a,s){void 0===a&&(a=0),void 0===s&&(s=!0);var c=s?u:l,h=f(t.width,t.height,a),p=f(t.naturalWidth,t.naturalHeight,a),d={x:c(100,((h.width-o.width/i)/2-e.x/i)/h.width*100),y:c(100,((h.height-o.height/i)/2-e.y/i)/h.height*100),width:c(100,o.width/h.width*100/i),height:c(100,o.height/h.height*100/i)},m=Math.round(c(p.width,d.width*p.width/100)),v=Math.round(c(p.height,d.height*p.height/100)),g=p.width>=p.height*n?{width:Math.round(v*n),height:v}:{width:m,height:Math.round(m/n)};return{croppedAreaPercentages:d,croppedAreaPixels:r(r({},g),{x:Math.round(c(p.width-g.width,d.x*p.width/100)),y:Math.round(c(p.height-g.height,d.y*p.height/100))})}}(o.props.restrictPosition?c(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop,o.mediaSize,o.state.cropSize,o.getAspect(),o.props.zoom,o.props.rotation,o.props.restrictPosition):null},o.emitCropData=function(){var e=o.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;o.props.onCropComplete&&o.props.onCropComplete(t,n),o.props.onCropAreaChange&&o.props.onCropAreaChange(t,n)}},o.emitCropAreaChange=function(){var e=o.getCropData();if(e){var t=e.croppedAreaPercentages,n=e.croppedAreaPixels;o.props.onCropAreaChange&&o.props.onCropAreaChange(t,n)}},o.recomputeCropPosition=function(){if(o.state.cropSize){var e=o.props.restrictPosition?c(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop;o.props.onCropChange(e),o.emitCropData()}},o}return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",document.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef)},t.prototype.componentWillUnmount=function(){var e;window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&(null===(e=this.styleRef.parentNode)||void 0===e||e.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},t.prototype.componentDidUpdate=function(e){var t,o,n,r,i,a,s,c,h;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(t=e.cropSize)||void 0===t?void 0:t.height)!==(null===(o=this.props.cropSize)||void 0===o?void 0:o.height)||(null===(n=e.cropSize)||void 0===n?void 0:n.width)!==(null===(r=this.props.cropSize)||void 0===r?void 0:r.width)?this.computeSizes():(null===(i=e.crop)||void 0===i?void 0:i.x)===(null===(a=this.props.crop)||void 0===a?void 0:a.x)&&(null===(s=e.crop)||void 0===s?void 0:s.y)===(null===(c=this.props.crop)||void 0===c?void 0:c.y)||this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&(null===(h=this.videoRef.current)||void 0===h||h.load())},t.prototype.getAspect=function(){var e=this.props,t=e.cropSize,o=e.aspect;return t?t.width/t.height:o},t.prototype.onPinchStart=function(e){var o=t.getTouchPoint(e.touches[0]),n=t.getTouchPoint(e.touches[1]);this.lastPinchDistance=p(o,n),this.lastPinchRotation=d(o,n),this.onDragStart(m(o,n))},t.prototype.onPinchMove=function(e){var o=this,n=t.getTouchPoint(e.touches[0]),r=t.getTouchPoint(e.touches[1]),i=m(n,r);this.onDrag(i),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame((function(){var e=p(n,r),t=o.props.zoom*(e/o.lastPinchDistance);o.setNewZoom(t,i),o.lastPinchDistance=e;var a=d(n,r),s=o.props.rotation+(a-o.lastPinchRotation);o.props.onRotationChange&&o.props.onRotationChange(s),o.lastPinchRotation=a}))},t.prototype.render=function(){var e=this,t=this.props,o=t.image,n=t.video,a=t.mediaProps,s=t.transform,c=t.crop,h=c.x,p=c.y,d=t.rotation,u=t.zoom,l=t.cropShape,m=t.showGrid,f=t.style,v=f.containerStyle,w=f.cropAreaStyle,C=f.mediaStyle,y=t.classes,S=y.containerClassName,x=y.cropAreaClassName,z=y.mediaClassName,R=t.objectFit;return i.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(t){return e.containerRef=t},"data-testid":"container",style:v,className:g("reactEasyCrop_Container",S)},o?i.createElement("img",r({alt:"",className:g("reactEasyCrop_Image","contain"===R&&"reactEasyCrop_Contain","horizontal-cover"===R&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===R&&"reactEasyCrop_Cover_Vertical","auto-cover"===R&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),z)},a,{src:o,ref:this.imageRef,style:r(r({},C),{transform:s||"translate("+h+"px, "+p+"px) rotate("+d+"deg) scale("+u+")"}),onLoad:this.onMediaLoad})):n&&i.createElement("video",r({autoPlay:!0,loop:!0,muted:!0,className:g("reactEasyCrop_Video","contain"===R&&"reactEasyCrop_Contain","horizontal-cover"===R&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===R&&"reactEasyCrop_Cover_Vertical","auto-cover"===R&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),z)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:r(r({},C),{transform:s||"translate("+h+"px, "+p+"px) rotate("+d+"deg) scale("+u+")"}),controls:!1}),(Array.isArray(n)?n:[{src:n}]).map((function(e){return i.createElement("source",r({key:e.src},e))}))),this.state.cropSize&&i.createElement("div",{style:r(r({},w),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:g("reactEasyCrop_CropArea","round"===l&&"reactEasyCrop_CropAreaRound",m&&"reactEasyCrop_CropAreaGrid",x)}))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},t.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},t}(i.Component)}}]);