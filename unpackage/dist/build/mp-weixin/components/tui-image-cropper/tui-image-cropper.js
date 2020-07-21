(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tui-image-cropper/tui-image-cropper"],{"134e":function(t,i,e){"use strict";e.r(i);var h=e("1a6a"),s=e("b10f");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("7629");var n,c=e("f0c5"),o=Object(c["a"])(s["default"],h["b"],h["c"],!1,null,"18401450",null,!1,h["a"],n);i["default"]=o.exports},"1a6a":function(t,i,e){"use strict";var h,s=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return h}))},7629:function(t,i,e){"use strict";var h=e("bff7"),s=e.n(h);s.a},a866:function(t,i,e){"use strict";(function(t){function e(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);i&&(h=h.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,h)}return e}function h(t){for(var i=1;i<arguments.length;i++){var h=null!=arguments[i]?arguments[i]:{};i%2?e(Object(h),!0).forEach((function(i){s(t,i,h[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(h)):e(Object(h)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(h,i))}))}return t}function s(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiImageCropper",props:{imageUrl:{type:String,default:""},height:{type:Number,default:280},width:{type:Number,default:280},minWidth:{type:Number,default:100},minHeight:{type:Number,default:100},maxWidth:{type:Number,default:360},maxHeight:{type:Number,default:360},borderColor:{type:String,default:"rgba(255,255,255,0.1)"},edgeColor:{type:String,default:"#FFFFFF"},edgeWidth:{type:String,default:"34rpx"},edgeBorderWidth:{type:String,default:"6rpx"},edgeOffsets:{type:String,default:"6rpx"},lockWidth:{type:Boolean,default:!1},lockHeight:{type:Boolean,default:!1},lockRatio:{type:Boolean,default:!1},scaleRatio:{type:Number,default:3},quality:{type:Number,default:1},rotateAngle:{type:Number,default:0},minScale:{type:Number,default:.5},maxScale:{type:Number,default:2},disableRotate:{type:Boolean,default:!0},limitMove:{type:Boolean,default:!0},custom:{type:Boolean,default:!1},startCutting:{type:[Number,Boolean],default:0},isBase64:{type:Boolean,default:!1},loadding:{type:Boolean,default:!0},rotateImg:{type:String,default:"/static/components/cropper/img_rotate.png"}},data:function(){return{MOVE_THROTTLE:null,MOVE_THROTTLE_FLAG:!0,TIME_CUT_CENTER:null,CROPPER_WIDTH:200,CROPPER_HEIGHT:200,CUT_START:null,cutX:0,cutY:0,touchRelative:[{x:0,y:0}],flagCutTouch:!1,hypotenuseLength:0,flagEndTouch:!1,canvasWidth:0,canvasHeight:0,imgWidth:0,imgHeight:0,scale:1,angle:0,cutAnimation:!1,cutAnimationTime:null,imgTop:0,imgLeft:0,ctx:null,sysInfo:null}},computed:{imgTransform:function(){return"translate3d(".concat(this.imgLeft-this.imgWidth/2,"px,").concat(this.imgTop-this.imgHeight/2,"px,0) scale(").concat(this.scale,") rotate(").concat(this.angle,"deg)")}},watch:{imageUrl:function(i,e){var h=this;this.imageReset(),this.showLoading(),t.getImageInfo({src:i,success:function(t){h.imgComputeSize(t.width,t.height),h.limitMove&&h.imgMarginDetectionScale()},fail:function(t){h.imgComputeSize(),h.limitMove&&h.imgMarginDetectionScale()}})},canvasWidth:function(t){t<this.minWidth&&(this.canvasWidth=this.minWidth),this.computeCutSize()},canvasHeight:function(t){t<this.minHeight&&(this.canvasHeight=this.minHeight),this.computeCutSize()},rotateAngle:function(t){this.cutAnimation=!0,this.angle=t},angle:function(t){this.moveStop(),this.limitMove&&t%90&&(this.angle=90*Math.round(t/90)),this.imgMarginDetectionScale()},cutAnimation:function(t){var i=this;clearTimeout(this.cutAnimationTime),t&&(this.cutAnimationTime=setTimeout((function(){i.cutAnimation=!1}),300))},limitMove:function(t){t&&(this.angle%90&&(this.angle=90*Math.round(this.angle/90)),this.imgMarginDetectionScale())},cutY:function(t){this.cutDetectionPosition()},cutX:function(t){this.cutDetectionPosition()},startCutting:function(t){this.custom&&t&&this.getImage()}},mounted:function(){var i=this;this.sysInfo=t.getSystemInfoSync(),this.imgTop=this.sysInfo.windowHeight/2,this.imgLeft=this.sysInfo.windowWidth/2,this.CROPPER_WIDTH=this.width,this.CROPPER_HEIGHT=this.height,this.canvasHeight=this.height,this.canvasWidth=this.width,this.ctx=t.createCanvasContext("tui-image-cropper",this),this.setCutCenter(),this.computeCutSize(),this.cutDetectionPosition(),setTimeout((function(){i.$emit("ready",{})}),200)},methods:{getImage:function(){var i=this;if(this.imageUrl){this.loadding&&this.showLoading();var e=function(){var e=i.imgWidth*i.scale*i.scaleRatio,s=i.imgHeight*i.scale*i.scaleRatio,a=i.imgLeft-i.cutX,n=i.imgTop-i.cutY;i.ctx.translate(a*i.scaleRatio,n*i.scaleRatio),i.ctx.rotate(i.angle*Math.PI/180),i.ctx.drawImage(i.imageUrl,-e/2,-s/2,e,s),i.ctx.draw(!1,(function(){var e={width:i.canvasWidth*i.scaleRatio,height:Math.round(i.canvasHeight*i.scaleRatio),destWidth:i.canvasWidth*i.scaleRatio,destHeight:Math.round(i.canvasHeight)*i.scaleRatio,fileType:"png",quality:i.quality},s={url:"",base64:"",width:i.canvasWidth*i.scaleRatio,height:i.canvasHeight*i.scaleRatio};i.isBase64?t.canvasGetImageData({canvasId:"tui-image-cropper",x:0,y:0,width:i.canvasWidth*i.scaleRatio,height:Math.round(i.canvasHeight*i.scaleRatio),success:function(i){var e=new Uint8Array(i.data);t.arrayBufferToBase64(e);s.base64=dataURL,this.loadding&&t.hideLoading(),this.$emit("cropper",s)}}):t.canvasToTempFilePath(h({},e,{canvasId:"tui-image-cropper",success:function(e){s.url=e.tempFilePath,i.loadding&&t.hideLoading(),i.$emit("cropper",s)}}),i)}))};this.CROPPER_WIDTH!=this.canvasWidth||this.CROPPER_HEIGHT!=this.canvasHeight?(this.CROPPER_WIDTH=this.canvasWidth,this.CROPPER_HEIGHT=this.canvasHeight,this.$nextTick((function(){setTimeout((function(){e()}),50)}))):e()}else t.showToast({title:"请选择图片",icon:"none"})},setCutCenter:function(){var i=this.sysInfo||t.getSystemInfoSync(),e=.5*(i.windowHeight-this.canvasHeight),h=.5*(i.windowWidth-this.canvasWidth);this.imgTop=this.imgTop-this.cutY+e,this.cutY=e,this.imgLeft=this.imgLeft-this.cutX+h,this.cutX=h},imageReset:function(){this.scale=1,this.angle=0;var i=this.sysInfo||t.getSystemInfoSync();this.imgTop=i.windowHeight/2,this.imgLeft=i.windowWidth/2},imageLoad:function(i){this.imageReset(),t.hideLoading(),this.$emit("imageLoad",{})},cutDetectionPosition:function(){var t=this,i=function(){t.cutY<0&&(t.cutY=0),t.cutY>t.sysInfo.windowHeight-t.canvasHeight&&(t.cutY=t.sysInfo.windowHeight-t.canvasHeight)},e=function(){t.cutX<0&&(t.cutX=0),t.cutX>t.sysInfo.windowWidth-t.canvasWidth&&(t.cutX=t.sysInfo.windowWidth-t.canvasWidth)};if(null==this.cutY&&null==this.cutX){var h=.5*(this.sysInfo.windowHeight-this.canvasHeight),s=.5*(this.sysInfo.windowWidth-this.canvasWidth);this.cutY=h,this.cutX=s}else null!=this.cutY&&null!=this.cutX?(i(),e()):null!=this.cutY&&null==this.cutX?(i(),this.cutX=(this.sysInfo.windowWidth-this.canvasWidth)/2):null==this.cutY&&null!=this.cutX&&(e(),this.cutY=(this.sysInfo.windowHeight-this.canvasHeight)/2)},imgMarginDetectionPosition:function(t){if(this.limitMove){var i=this.imgLeft,e=this.imgTop;t=t||this.scale;var h=this.imgWidth,s=this.imgHeight;this.angle/90%2&&(h=this.imgHeight,s=this.imgWidth),i=this.cutX+h*t/2>=i?i:this.cutX+h*t/2,i=this.cutX+this.canvasWidth-h*t/2<=i?i:this.cutX+this.canvasWidth-h*t/2,e=this.cutY+s*t/2>=e?e:this.cutY+s*t/2,e=this.cutY+this.canvasHeight-s*t/2<=e?e:this.cutY+this.canvasHeight-s*t/2,this.imgLeft=i,this.imgTop=e,this.scale=t}},imgMarginDetectionScale:function(){if(this.limitMove){var t=this.scale,i=this.imgWidth,e=this.imgHeight;this.angle/90%2&&(i=this.imgHeight,e=this.imgWidth),i*t<this.canvasWidth&&(t=this.canvasWidth/i),e*t<this.canvasHeight&&(t=Math.max(t,this.canvasHeight/e)),this.imgMarginDetectionPosition(t)}},imgComputeSize:function(i,e){var h=i,s=e;if(h&&s)h/s>(this.canvasWidth||this.width)/(this.canvasHeight||this.height)?(s=this.canvasHeight||this.height,h=i/e*s):(h=this.canvasWidth||this.width,s=e/i*h);else{var a=this.sysInfo||t.getSystemInfoSync();h=a.windowWidth,s=0}this.imgWidth=h,this.imgHeight=s},computeCutSize:function(){this.canvasWidth>this.sysInfo.windowWidth?this.canvasWidth=this.sysInfo.windowWidth:this.canvasWidth+this.cutX>this.sysInfo.windowWidth&&(this.cutX=this.sysInfo.windowWidth-this.cutX),this.canvasHeight>this.sysInfo.windowHeight?this.canvasHeight=this.sysInfo.windowHeight:this.canvasHeight+this.cutY>this.sysInfo.windowHeight&&(this.cutY=this.sysInfo.windowHeight-this.cutY)},start:function(t){if(this.flagEndTouch=!1,1==t.touches.length)this.touchRelative[0]={x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop};else{var i=Math.abs(t.touches[0].clientX-t.touches[1].clientX),e=Math.abs(t.touches[0].clientY-t.touches[1].clientY);this.touchRelative=[{x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop},{x:t.touches[1].clientX-this.imgLeft,y:t.touches[1].clientY-this.imgTop}],this.hypotenuseLength=Math.sqrt(Math.pow(i,2)+Math.pow(e,2))}},moveThrottle:function(){var t=this;if("android"==this.sysInfo.platform)return clearTimeout(this.MOVE_THROTTLE),this.MOVE_THROTTLE=setTimeout((function(){t.MOVE_THROTTLE_FLAG=!0}),25),this.MOVE_THROTTLE_FLAG;this.MOVE_THROTTLE_FLAG=!0},move:function(t){if(!this.flagEndTouch&&this.MOVE_THROTTLE_FLAG)if(this.MOVE_THROTTLE_FLAG=!1,this.moveThrottle(),this.moveDuring(),1==t.touches.length){var i=t.touches[0].clientX-this.touchRelative[0].x,e=t.touches[0].clientY-this.touchRelative[0].y;this.imgLeft=i,this.imgTop=e,this.imgMarginDetectionPosition()}else{var h=Math.abs(t.touches[0].clientX-t.touches[1].clientX),s=Math.abs(t.touches[0].clientY-t.touches[1].clientY),a=Math.sqrt(Math.pow(h,2)+Math.pow(s,2)),n=this.scale*(a/this.hypotenuseLength),c=0;n=n<=this.minScale?this.minScale:n,n=n>=this.maxScale?this.maxScale:n,this.scale=n,this.imgMarginDetectionScale();var o=[{x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop},{x:t.touches[1].clientX-this.imgLeft,y:t.touches[1].clientY-this.imgTop}];if(!this.disableRotate){var u=180/Math.PI*Math.atan2(o[0].y,o[0].x),g=180/Math.PI*Math.atan2(this.touchRelative[0].y,this.touchRelative[0].x),l=180/Math.PI*Math.atan2(o[1].y,o[1].x),r=180/Math.PI*Math.atan2(this.touchRelative[1].y,this.touchRelative[1].x),d=u-g,f=l-r;0!=d?c=d:0!=f&&(c=f)}this.touchRelative=o,this.hypotenuseLength=Math.sqrt(Math.pow(h,2)+Math.pow(s,2)),this.angle=this.angle+c,this.scale=this.scale}},end:function(t){this.flagEndTouch=!0,this.moveStop()},cutTouchMove:function(t){var i=this;if(this.flagCutTouch&&this.MOVE_THROTTLE_FLAG){if(this.lockRatio&&(this.lockWidth||this.lockHeight))return;this.MOVE_THROTTLE_FLAG=!1,this.moveThrottle();var e=this.canvasWidth,h=this.canvasHeight,s=this.cutY,a=this.cutX,n=function(){e=e<=i.maxWidth?e>=i.minWidth?e:i.minWidth:i.maxWidth,h=h<=i.maxHeight?h>=i.minHeight?h:i.minHeight:i.maxHeight},c=function(){return(e>i.maxWidth||e<i.minWidth||h>i.maxHeight||h<i.minHeight)&&i.lockRatio?(n(),!1):(n(),!0)};switch(h=this.CUT_START.height+(this.CUT_START.corner>1&&this.CUT_START.corner<4?1:-1)*(this.CUT_START.y-t.touches[0].clientY),this.CUT_START.corner){case 1:if(e=this.CUT_START.width-this.CUT_START.x+t.touches[0].clientX,this.lockRatio&&(h=e/(this.canvasWidth/this.canvasHeight)),!c())return;break;case 2:if(e=this.CUT_START.width-this.CUT_START.x+t.touches[0].clientX,this.lockRatio&&(h=e/(this.canvasWidth/this.canvasHeight)),!c())return;s=this.CUT_START.cutY-(h-this.CUT_START.height);break;case 3:if(e=this.CUT_START.width+this.CUT_START.x-t.touches[0].clientX,this.lockRatio&&(h=e/(this.canvasWidth/this.canvasHeight)),!c())return;s=this.CUT_START.cutY-(h-this.CUT_START.height),a=this.CUT_START.cutX-(e-this.CUT_START.width);break;case 4:if(e=this.CUT_START.width+this.CUT_START.x-t.touches[0].clientX,this.lockRatio&&(h=e/(this.canvasWidth/this.canvasHeight)),!c())return;a=this.CUT_START.cutX-(e-this.CUT_START.width);break;default:break}this.lockWidth||this.lockHeight?this.lockWidth?this.lockHeight||(this.canvasHeight=h,this.cutY=s):(this.canvasWidth=e,this.cutX=a):(this.canvasWidth=e,this.cutX=a,this.canvasHeight=h,this.cutY=s),this.imgMarginDetectionScale()}},cutTouchStart:function(t){var i=t.touches[0].clientX,e=t.touches[0].clientY,h=this.cutX-24,s=this.cutX+24,a=this.cutY-24,n=this.cutY+24,c=this.cutX+this.canvasWidth-24,o=this.cutX+this.canvasWidth+24,u=this.cutY+this.canvasHeight-24,g=this.cutY+this.canvasHeight+24;i>c&&i<o&&e>u&&e<g?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,x:i,y:e,corner:1}):i>c&&i<o&&e>a&&e<n?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,x:i,y:e,cutY:this.cutY,cutX:this.cutX,corner:2}):i>h&&i<s&&e>a&&e<n?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,cutY:this.cutY,cutX:this.cutX,x:i,y:e,corner:3}):i>h&&i<s&&e>u&&e<g&&(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,cutY:this.cutY,cutX:this.cutX,x:i,y:e,corner:4})},cutTouchEnd:function(t){this.moveStop(),this.flagCutTouch=!1},moveStop:function(){var t=this;clearTimeout(this.TIME_CUT_CENTER),this.TIME_CUT_CENTER=setTimeout((function(){t.cutAnimation||(t.cutAnimation=!0),t.setCutCenter()}),800)},moveDuring:function(){clearTimeout(this.TIME_CUT_CENTER)},showLoading:function(){t.showLoading({title:"请稍候...",mask:!0})},stop:function(){},back:function(){t.navigateBack()},setAngle:function(){this.cutAnimation=!0,this.angle=this.angle+90}}};i.default=a}).call(this,e("543d")["default"])},b10f:function(t,i,e){"use strict";e.r(i);var h=e("a866"),s=e.n(h);for(var a in h)"default"!==a&&function(t){e.d(i,t,(function(){return h[t]}))}(a);i["default"]=s.a},bff7:function(t,i,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-image-cropper/tui-image-cropper-create-component',
    {
        'components/tui-image-cropper/tui-image-cropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("134e"))
        })
    },
    [['components/tui-image-cropper/tui-image-cropper-create-component']]
]);
