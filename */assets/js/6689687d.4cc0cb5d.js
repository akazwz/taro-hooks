"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[8515],{7570:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>d});n(79);var r=n(8570),o=n(1285),a=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const u={title:"\u8282\u6d41",sidebar_position:9},p=void 0,m={unversionedId:"useRequest/throttle",id:"useRequest/throttle",title:"\u8282\u6d41",description:"\u901a\u8fc7\u8bbe\u7f6e options.throttleWait\uff0c\u8fdb\u5165\u8282\u6d41\u6a21\u5f0f\uff0c\u6b64\u65f6\u5982\u679c\u9891\u7e41\u89e6\u53d1 run \u6216\u8005 runAsync\uff0c\u5219\u4f1a\u4ee5\u8282\u6d41\u7b56\u7565\u8fdb\u884c\u8bf7\u6c42\u3002",source:"@site/../packages/hooks/src/useRequest/throttle.mdx",sourceDirName:"useRequest",slug:"/useRequest/throttle",permalink:"/taro-hooks/hooks/useRequest/throttle",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/throttle.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1693750628,formattedLastUpdatedAt:"2023\u5e749\u67083\u65e5",sidebarPosition:9,frontMatter:{title:"\u8282\u6d41",sidebar_position:9},sidebar:"hooks",previous:{title:"\u9632\u6296",permalink:"/taro-hooks/hooks/useRequest/debounce"},next:{title:"\u7f13\u5b58 & SWR",permalink:"/taro-hooks/hooks/useRequest/cache"}},c={},d=[{value:"API",id:"api",level:3},{value:"Options",id:"options",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],k={toc:d},h="wrapper";function g(t){var{components:e}=t,n=s(t,["components"]);return(0,r.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"options.throttleWait"),"\uff0c\u8fdb\u5165\u8282\u6d41\u6a21\u5f0f\uff0c\u6b64\u65f6\u5982\u679c\u9891\u7e41\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"runAsync"),"\uff0c\u5219\u4f1a\u4ee5\u8282\u6d41\u7b56\u7565\u8fdb\u884c\u8bf7\u6c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { data, run } = useRequest(getUsername, {\n  throttleWait: 300,\n  manual: true,\n});\n")),(0,r.kt)("p",null,"\u5982\u4e0a\u793a\u4f8b\u4ee3\u7801\uff0c\u9891\u7e41\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"\uff0c\u53ea\u4f1a\u6bcf\u9694 300ms \u6267\u884c\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762 input \u6846\u4e2d\u5feb\u901f\u8f93\u5165\u6587\u672c\uff0c\u4f53\u9a8c\u6548\u679c"),(0,r.kt)(a.ZP,{VueTab:(0,r.kt)(o.Z,{language:"html",title:"network/useRequest/throttle/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/throttle/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/throttle/index",mdxType:"CodeDisplay"},'<template>\n  <block>\n    <demo-content title="\u8282\u6d41">\n      <nut-row>\n        <nut-input\n          placeholder="Search Emails"\n          @update:model-value="request.run($event)"\n        />\n      </nut-row>\n      <view v-if="request.loading">Loading...</view>\n      <template v-else>\n        <view v-for="item in request.data" :key="item">{{ item }}</view>\n      </template>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from \'taro-hooks\';\n\nimport Mock from \'mockjs\';\n\nasync function getEmail(search) {\n  console.log(\'throttle getEmail\', search);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock({ \'data|5\': [\'@email()\'] }).data);\n    }, 300);\n  });\n}\n\nexport default {\n  setup() {\n    const request = useRequest(getEmail, {\n      throttleWait: 1000,\n      manual: true,\n    });\n\n    return { request };\n  },\n};\n<\/script>\n'),ReactTab:(0,r.kt)(o.Z,{language:"tsx",title:"network/useRequest/throttle/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/throttle/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/throttle/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Field, Input } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nasync function getEmail(search?: string): Promise<string[]> {\n  console.log('throttle getEmail', search);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock({ 'data|5': ['@email()'] }).data);\n    }, 300);\n  });\n}\n\nexport default () => {\n  const { data, loading, run } = useRequest(getEmail, {\n    throttleWait: 1000,\n    manual: true,\n  });\n\n  return (\n    <DemoContent title=\"\u8282\u6d41\">\n      <Field align=\"center\">\n        <Input\n          placeholder=\"Search Emails\"\n          onChange={(event) => run(event.detail.value)}\n        />\n      </Field>\n      {loading ? (\n        <Field>loading...</Field>\n      ) : (\n        <>\n          {data?.map?.((v) => (\n            <Cell key={v}>{v}</Cell>\n          ))}\n        </>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"throttle \u6240\u6709\u53c2\u6570\u7528\u6cd5\u548c\u6548\u679c\u540c ",(0,r.kt)("a",{parentName:"p",href:"https://www.lodashjs.com/docs/lodash.throttle/"},"lodash.throttle")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throttleWait"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u6d41\u7b49\u5f85\u65f6\u95f4, \u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u8bbe\u7f6e\u540e\uff0c\u8fdb\u5165\u8282\u6d41\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throttleLeading"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8282\u6d41\u5f00\u59cb\u524d\u6267\u884c\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throttleTrailing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8282\u6d41\u7ed3\u675f\u540e\u6267\u884c\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.throttleWait"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"options.throttleLeading"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"options.throttleTrailing")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runAsync")," \u5728\u771f\u6b63\u6267\u884c\u65f6\uff0c\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"\u3002\u5728\u672a\u88ab\u6267\u884c\u65f6\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u8fd4\u56de\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cancel")," \u53ef\u4ee5\u4e2d\u6b62\u6b63\u5728\u7b49\u5f85\u6267\u884c\u7684\u51fd\u6570\u3002")))}g.isMDXComponent=!0}}]);