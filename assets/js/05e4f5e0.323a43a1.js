"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5977],{5318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3666:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(5773),a=r(808),o=(r(7378),r(5318)),i=["components"],c={},p=void 0,l=[{value:"Documentation",id:"documentation",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/milesj/emojibase/actions?query=branch%3Amaster"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/milesj/emojibase/workflows/Build/badge.svg",alt:"Build Status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/emojibase"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/emojibase.svg",alt:"npm version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/emojibase"},(0,o.kt)("img",{parentName:"a",src:"https://david-dm.org/milesj/emojibase.svg?path=packages/core",alt:"npm deps"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/emojibase-data"},(0,o.kt)("img",{parentName:"a",src:"https://data.jsdelivr.com/v1/package/npm/emojibase-data/badge?style=rounded",alt:"jsDelivr Hits"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Emojibase, the ultimate emoji database.")),(0,o.kt)("p",null,"A collection of lightweight, up-to-date, pre-generated, specification compliant, localized emoji\nJSON datasets, regex patterns, and more."),(0,o.kt)("h4",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports the latest ",(0,o.kt)("a",{parentName:"li",href:"https://emojipedia.org/emoji-13.1/"},"Emoji 13.1"),",\n",(0,o.kt)("a",{parentName:"li",href:"http://unicode.org/versions/Unicode13.0.0/"},"Unicode 13"),", and\n",(0,o.kt)("a",{parentName:"li",href:"http://cldr.unicode.org/index/downloads/cldr-40"},"CLDR 40")," release versions"),(0,o.kt)("li",{parentName:"ul"},"Built directly from the ",(0,o.kt)("a",{parentName:"li",href:"http://unicode.org/Public/emoji/"},"emoji data source files")),(0,o.kt)("li",{parentName:"ul"},"Based on the official ",(0,o.kt)("a",{parentName:"li",href:"http://unicode.org/reports/tr51/"},"Unicode Technical Standard #51")," (rev 19)"),(0,o.kt)("li",{parentName:"ul"},"With localization provided by\n",(0,o.kt)("a",{parentName:"li",href:"http://unicode.org/reports/tr35/tr35-general.html#Annotations"},"Unicode Technical Standard #35"))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://emojibase.dev"},"https://emojibase.dev")))}u.isMDXComponent=!0}}]);