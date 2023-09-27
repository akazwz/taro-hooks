"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6921],{6974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>c});n(79);var a=n(8570),o=n(1285),r=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"usePromise",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},m="usePromise",u={unversionedId:"usePromise/index",id:"usePromise/index",title:"usePromise",description:"\u63d0\u4f9bPromise\u5316\u65b9\u5f0f",source:"@site/../packages/hooks/src/usePromise/index.md",sourceDirName:"usePromise",slug:"/usePromise/",permalink:"/taro-hooks/hooks/usePromise/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/usePromise/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1693750628,formattedLastUpdatedAt:"2023\u5e749\u67083\u65e5",frontMatter:{title:"usePromise",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"usePage",permalink:"/taro-hooks/hooks/usePage/"},next:{title:"useRouter",permalink:"/taro-hooks/hooks/useRouter/"}},k={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],h={toc:c},d="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(d,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usepromise"},"usePromise"),(0,a.kt)("p",null,"\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5316\u65b9\u5f0f"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1x"),"\u7248\u672c\u4e3a\u76f4\u63a5\u6267\u884c\u4f20\u5165\u7684\u65b9\u6cd5. \u5728",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u7248\u672c"),"\u4e2d\u5219\u91c7\u7528\u541e\u5410\u81ea\u5b9a\u4e49",(0,a.kt)("strong",{parentName:"p"},"hook"),"\u7684\u5f62\u5f0f. \u8fd9\u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"break change"),(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0d\u8fc7\u73b0\u5728\u5927\u90e8\u5206\u7684",(0,a.kt)("strong",{parentName:"p"},"API"),"\u5b98\u65b9\u5df2\u7ecf\u63d0\u4f9b\u4e86",(0,a.kt)("strong",{parentName:"p"},"Promise"),"\u7684\u8c03\u7528\u5f62\u5f0f. \u8fd9\u91cc\u66f4\u63a8\u8350\u5927\u5bb6\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u7684",(0,a.kt)("strong",{parentName:"p"},"Promise"))),(0,a.kt)("p",null,"\u60f3\u5f02\u6b65\u5f62\u5f0f\u8c03\u7528\u5f53\u524d\u65b9\u6cd5\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"\u4e3b\u8981\u9002\u7528\u4e8e\u539f\u5148\u7531\u4ee5\u4e0b\u65b9\u5f0f\u8c03\u7528\u7684\u65b9\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Taro.makePhoneCall({\n  phoneNumber: '110',\n});\n")),(0,a.kt)("p",null,"\u8f6c\u6362\u540e\u4f7f\u7528\u65b9\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { makePhoneCall } from '@tarojs/taro';\ntype Option = Taro.makePhoneCall.Option;\nconst makePhoneCall = usePromise<Option>('makePhoneCall');\n\n// \u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\nconst handleMakePhoneCall = () => {\n  makePhoneCall({ phoneNumber: '110' }).then(\n    () => {\n      console.log('makePhoneCall success');\n    },\n    ({ errMsg }) => {\n      console.log('makePhoneCall failed', errMsg);\n    },\n  );\n};\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"implementMethod"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f85\u6267\u884c\u7684\u65b9\u6cd5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"promiseMetod"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Promise\u65b9\u5f0fAPI")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(option?: T) => Promise<TaroGeneral.CallbackResult>"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"basic/usePromise/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/usePromise/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/usePromise/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-button shape=\"square\" type=\"primary\" block @click=\"handleClick()\"\n      >Click me!</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { usePromise } from 'taro-hooks';\nimport { showToast, makePhoneCall } from '@tarojs/taro';\n\ntype MakePhoneCallOption = Taro.makePhoneCall.Option;\ntype MakePhoneCallResult = TaroGeneral.CallbackResult;\n\nconst useMakePhoneCall = usePromise<MakePhoneCallOption, MakePhoneCallResult>(\n  makePhoneCall,\n);\n\nconst handleClick = () => {\n  useMakePhoneCall({ phoneNumber: '1300000' }).then(\n    () => {\n      showToast({\n        title: '\u62e8\u53f7\u6210\u529f',\n        mask: true,\n        icon: 'success',\n      });\n    },\n    ({ errMsg }) => {\n      showToast({\n        title: errMsg,\n        mask: true,\n        icon: 'error',\n      });\n    },\n  );\n};\n<\/script>\n"),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"basic/usePromise/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/usePromise/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/usePromise/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { usePromise } from 'taro-hooks';\nimport { showToast, makePhoneCall } from '@tarojs/taro';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\ntype MakePhoneCallOption = Taro.makePhoneCall.Option;\ntype MakePhoneCallResult = TaroGeneral.CallbackResult;\nexport default () => {\n  const makePhoneCallPromise = usePromise<\n    MakePhoneCallOption,\n    MakePhoneCallResult\n  >(makePhoneCall);\n\n  const handleClick = () => {\n    makePhoneCallPromise({ phoneNumber: '1300000' }).then(\n      () => {\n        showToast({\n          title: '\u62e8\u53f7\u6210\u529f',\n          mask: true,\n          icon: 'success',\n        });\n      },\n      ({ errMsg }) => {\n        showToast({\n          title: errMsg,\n          mask: true,\n          icon: 'error',\n        });\n      },\n    );\n  };\n\n  return (\n    <DemoContent>\n      <Button block color=\"primary\" onClick={handleClick} shape=\"square\">\n        Click me!\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);