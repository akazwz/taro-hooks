"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3117],{"6881":function(e,t,n){var r=n(969),o=n(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}t.Z=function usePromise(e){return function(t){var n;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var u=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,c){try{if(!(0,r.mf)(e))throw new TypeError("["+u+"] not vaild for Taro");var i;null==(i=e(_extends({},t||{},{"success":n,"fail":c})))||null==i.catch||i.catch(c)}catch(e){c((0,o.Hv)(u,e.message))}}))}}},"9524":function(e,t,n){n.d(t,{"BB":function(){return u},"kM":function(){return c},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=n(969),o=n(9059);var u=!0,c=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return u||(0,r.H)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&(0,r.hM)(t,"Object")){var u=n.includes("?");n+=(u?"&":"?")+(0,o.stringify)(t)}return n}},"3117":function(e,t,n){n.r(t),n.d(t,{"default":function(){return v}});var r=n(2535),o=n(4012),u=n(969),c=n(6881);var i=function useManualPullDownRefresh(){var e=(0,o.sO)(),t=(0,c.Z)(r.startPullDownRefresh),n=(0,c.Z)(r.stopPullDownRefresh);return[function start(r){return e.current&&clearTimeout(e.current),t().then((function(t){return(0,u.hj)(r)&&r&&(e.current=setTimeout((function(){n(),e.current&&clearTimeout(e.current)}),r)),t}))},n]},a=n(5043),s=["textStyle"];var l=function useBackground(e){var t=(0,c.Z)(r.setBackgroundColor),n=(0,c.Z)(r.setBackgroundTextStyle),u=function setStyle(e){return n({"textStyle":e})};return(0,o.d4)((function(){if(e){var n=e.textStyle,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s);t(r),n&&u(n)}}),[e]),[t,u]},f=n(2053),p=n(3932),d=n.n(p);var v=(0,f.defineComponent)({"__name":"index","setup":function setup(e){l({"textStyle":"dark","backgroundColor":d().Random.color()});var t=i(),n=(0,a.Z)(t,2),r=n[0],o=n[1];return function(e,t){var n=(0,f.resolveComponent)("nut-button"),u=(0,f.resolveComponent)("demo-content");return(0,f.openBlock)(),(0,f.createBlock)(u,null,{"default":(0,f.withCtx)((function(){return[(0,f.createVNode)(n,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[0]||(t[0]=function(e){return(0,f.unref)(r)()})},{"default":(0,f.withCtx)((function(){return[(0,f.createTextVNode)("开始下拉刷新")]})),"_":1}),(0,f.createVNode)(n,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[1]||(t[1]=function(e){return(0,f.unref)(o)()})},{"default":(0,f.withCtx)((function(){return[(0,f.createTextVNode)("结束下拉刷新")]})),"_":1}),(0,f.createVNode)(n,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[2]||(t[2]=function(e){return(0,f.unref)(r)(2e3)})},{"default":(0,f.withCtx)((function(){return[(0,f.createTextVNode)("开始下拉刷新2S后停止")]})),"_":1})]})),"_":1})}}})}}]);