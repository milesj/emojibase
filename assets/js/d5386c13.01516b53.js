"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[666],{8746:(e,t,r)=>{r.d(t,{Sm:()=>m,cA:()=>f,lj:()=>j,ze:()=>b});const n=["local","version","cdnUrl"],s=["skins"],o=["compact","flat","shortcodes"];function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,o,a,l=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){c=!0,s=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw s}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const h=/200D|FE0E|FE0F/g;async function f(e,t){void 0===t&&(t={});const r=t.local,s=void 0!==r&&r,o=t.version,a=void 0===o?"latest":o,l=t.cdnUrl,i=d(t,n),u=function(e,t,r){let n="https://cdn.jsdelivr.net/npm/emojibase-data@"+t+"/"+e;return"function"==typeof r?n=r(e,t):"string"==typeof r&&(n=r+"/"+e),n}(e,a,l),h=s?localStorage:sessionStorage,f="emojibase/"+a+"/"+e,p=h.getItem(f);if(p)return JSON.parse(p);const b=await fetch(u,c({credentials:"omit",mode:"cors",redirect:"error"},i));if(!b.ok)throw new Error("Failed to load Emojibase dataset.");const g=await b.json();try{h.setItem(f,JSON.stringify(g))}catch{}return g}const p={discord:"joypixels",slack:"iamcal"};async function b(e,t,r){var n;return f(e+"/shortcodes/"+(null!=(n=p[t])?n:t)+".json",r)}function g(e,t){if(0===t.length)return e;const r=new Set(e.shortcodes);return t.forEach((t=>{const n=t[e.hexcode];Array.isArray(n)?n.forEach((e=>r.add(e))):n&&r.add(n)})),e.shortcodes=[...r],e.skins&&e.skins.forEach((e=>{g(e,t)})),e}async function m(e,t){void 0===t&&(t={});const r=t.compact,n=void 0!==r&&r,l=t.flat,i=void 0!==l&&l,u=t.shortcodes,h=void 0===u?[]:u,p=d(t,o),m=await f(e+"/"+(n?"compact":"data")+".json",p);let j=[];return h.length>0&&(j=await Promise.all(h.map((t=>{let r;if(t.includes("/")){const e=a(t.split("/"),2);r=b(e[0],e[1],p)}else r=b(e,t,p);return r.catch((()=>({})))})))),i?function(e,t){void 0===t&&(t=[]);const r=[];return e.forEach((e=>{if(e.skins){const n=e.skins,o=d(e,s);r.push(g(o,t)),n.forEach((e=>{const n=c({},e);o.tags&&(n.tags=[...o.tags]),r.push(g(n,t))}))}else r.push(g(e,t))})),r}(m,j):function(e,t){return 0===t.length||e.forEach((e=>{g(e,t)})),e}(m,j)}async function j(e,t){return f(e+"/messages.json",t)}new RegExp("(-| )?("+h.source+")","g")},6429:(e,t,r)=>{r.d(t,{fG:()=>p,Ay:()=>j,lg:()=>b});r(9978);var n=r(3696),s=r(8746),o=r(6177),a=r.n(o),l=r(8580),i=r.n(l),c=r(9356);const u={browserFilters:"browserFilters_Tq76"};var d=r(2540);const h="undefined"!=typeof location,f={bn:"Bangla",da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hi:"Hindi",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},p={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function b(e,t){let{filter:r,genders:n,group:s,subgroup:o,skinTones:a}=t;const l=[];return e.forEach((e=>{if((n||void 0===e.gender)&&!(s>=0&&e.group!==s||o>=0&&e.subgroup!==o)){if(e.shortcodes){const t=[];e.shortcodes.forEach((r=>{r instanceof Set||Array.isArray(r)?(console.debug("Non-string found",e.hexcode,e),[...r].forEach((e=>{t.push(String(e))}))):"string"==typeof r&&t.push(r)})),e.shortcodes=t}if(r){var t,i;const n=e.label.toLocaleLowerCase().includes(r),s=null==(t=e.shortcodes)?void 0:t.some((e=>null==e?void 0:e.toLocaleLowerCase().includes(r))),o=null==(i=e.tags)?void 0:i.some((e=>e.toLocaleLowerCase().includes(r)));if(!n&&!s&&!o)return}l.push(e),a&&e.skins&&l.push(...e.skins)}})),l.sort(((e,t)=>{var r,n;return(null!=(r=e.order)?r:1e4)-(null!=(n=t.order)?n:1e4)})),l}function g(e){const t={};return e.forEach((e=>{t[e.order]=e.message})),t}const m=new URLSearchParams(h?location.search:"");function j(e){var t,r,o,l,b;let{defaultShortcodePresets:j=["emojibase"],disabled:x=!1,hideCldr:v=!1,onChange:y}=e;const[S,k]=(0,n.useState)(null!=(t=m.get("filter"))?t:""),[w,C]=(0,n.useState)(S),[O,E]=(0,n.useState)(null!=(r=m.get("locale"))?r:"en"),[N,P]=(0,n.useState)(Number(null!=(o=m.get("group"))?o:-1)),[A,T]=(0,n.useState)(),[F,L]=(0,n.useState)(),[D,I]=(0,n.useState)(Number(null!=(l=m.get("subgroup"))?l:-1)),[R,G]=(0,n.useState)(),[U,z]=(0,n.useState)("true"===m.get("genders")),[B,J]=(0,n.useState)("true"===m.get("skinTones")),[H,M]=(0,n.useState)(decodeURIComponent(null!=(b=m.get("shortcodePresets"))?b:j.join(",")).split(",").filter(Boolean));(0,n.useEffect)((()=>{!async function(){const e=await(0,s.lj)("en",{version:c.b});T(g(e.groups)),G(g(e.subgroups));const t=await(0,s.cA)("meta/groups.json",{version:c.b});L(t)}()}),[]),(0,n.useEffect)((()=>{!function(e){h&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}(m),y({filter:w,locale:O,genders:U,group:N,subgroup:D,skinTones:B,shortcodePresets:H})}),[w,O,U,N,D,B,H,y]);const q=a()((e=>{m.set("filter",e),C(e)}),350),K=(0,n.useCallback)((e=>{e.persist();const{value:t}=e.currentTarget;k(t),q(t)}),[q]),$=(0,n.useCallback)((e=>{const{value:t}=e.currentTarget;m.set("locale",t),E(t)}),[]),_=(0,n.useCallback)((e=>{const t=Number(e.currentTarget.value);m.set("group",String(t)),m.set("subgroup","-1"),P(t),I(-1)}),[]),Q=(0,n.useCallback)((e=>{const t=Number(e.currentTarget.value);m.set("subgroup",String(t)),I(t)}),[]),V=(0,n.useCallback)((e=>{const{checked:t}=e.currentTarget;m.set("genders",String(t)),z(t)}),[]),W=(0,n.useCallback)((e=>{const{checked:t}=e.currentTarget;m.set("skinTones",String(t)),J(t)}),[]),X=(0,n.useCallback)((e=>{const{checked:t,value:r}=e.currentTarget;M((e=>{let n=[...e];const s=r;return t&&!n.includes(s)?n.push(s):n=n.filter((e=>e!==s)),n.sort(),m.set("shortcodePresets",encodeURIComponent(n.join(","))),n}))}),[]);return(0,d.jsxs)("div",{className:u.browserFilters,children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"filter",children:"Annotation"}),(0,d.jsx)("input",{disabled:x,id:"filter",name:"filter",type:"search",value:S,onChange:K})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"locale",children:"Locale"}),(0,d.jsx)("select",{disabled:x,id:"locale",name:"locale",value:O,onChange:$,children:Object.entries(f).sort(((e,t)=>e[1].localeCompare(t[1]))).map((e=>{let[t,r]=e;return(0,d.jsxs)("option",{value:t,children:[r," (",t,")"]},t)}))})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"group",children:"Group"}),(0,d.jsxs)("select",{disabled:x||!F||!A,id:"group",name:"group",value:N,onChange:_,children:[(0,d.jsx)("option",{value:"-1",children:"(none)"}),F&&A&&Object.keys(F.groups).map((e=>(0,d.jsx)("option",{value:e,children:i()(A[e])},e)))]})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"subgroup",children:"Subgroup"}),(0,d.jsxs)("select",{disabled:x||!(null!=F&&F.hierarchy[N])||!R,id:"subgroup",name:"subgroup",value:D,onChange:Q,children:[(0,d.jsx)("option",{value:"-1",children:"(none)"}),F&&R&&(F.hierarchy[N]||[]).map((e=>(0,d.jsx)("option",{value:e,children:i()(R[e])},e)))]})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("h4",{children:"Display"}),(0,d.jsxs)("label",{className:"label--inline",htmlFor:"genders",children:[(0,d.jsx)("input",{checked:U,disabled:x,id:"genders",name:"genders",type:"checkbox",onChange:V})," ","Genders?"]}),(0,d.jsxs)("label",{className:"label--inline",htmlFor:"skinTones",children:[(0,d.jsx)("input",{checked:B,disabled:x,id:"skinTones",name:"skinTones",type:"checkbox",onChange:W})," ","Skin tones?"]})]}),(0,d.jsxs)("div",{className:"col col-9",children:[(0,d.jsx)("h4",{children:"Shortcode presets"}),Object.entries(p).map((e=>{let[t,r]=e;return t.includes("cldr")&&v?null:(0,d.jsxs)("label",{className:"label--inline",htmlFor:"preset-"+t,children:[(0,d.jsx)("input",{checked:H.includes(t),disabled:x,id:"preset-"+t,name:"presets",type:"checkbox",value:t,onChange:X})," ",r]},t)}))]})]})]})}},2904:(e,t,r)=>{r.d(t,{A:()=>s});r(3696);var n=r(2540);function s(e){let{preset:t,shortcodes:r}=e;if(!r)return null;const s=[],o=function(e,t){void 0===t&&(t=0),t>1||("string"==typeof e?s.push(e):(e instanceof Set||Array.isArray(e))&&[...e].forEach((e=>{o(e,t+1)})))};return o(r),(0,n.jsx)(n.Fragment,{children:s.sort().map((e=>(0,n.jsx)("div",{children:":"+e+":"},t+"-"+e)))})}},9356:(e,t,r)=>{r.d(t,{b:()=>n});const n="latest"},2444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(3696),s=r(8746),o=r(5841),a=r(6429),l=r(2904),i=r(9356),c=r(2540);function u(e){return e}function d(){const[e,t]=(0,n.useState)(!1),[r,d]=(0,n.useState)([]),[h,f]=(0,n.useState)({}),[p,b]=(0,n.useState)([]),[g,m]=(0,n.useState)(["emojibase","github","iamcal","joypixels"]),j=(0,n.useCallback)((async e=>{const{locale:r,shortcodePresets:n}=e;t(!0);const o=await(0,s.Sm)(r,{shortcodes:g,version:i.b}),l=await(0,s.ze)(r,"cldr",{version:i.b}),c=await Promise.all(n.map((e=>(0,s.ze)(r,e,{version:i.b}).catch(u))));d((0,a.lg)(o,e)),f(l),b(c),m(n),t(!1)}),[g]);return(0,c.jsx)(o.A,{description:"Table of all shortcodes for every emoji character.",title:"Shortcodes table",children:(0,c.jsxs)("main",{className:"table-container",children:[(0,c.jsx)("h2",{children:"Shortcodes table"}),(0,c.jsx)(a.Ay,{hideCldr:!0,defaultShortcodePresets:g,disabled:e,onChange:j}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{colSpan:2}),(0,c.jsx)("th",{children:"CLDR"}),g.map((e=>(0,c.jsx)("th",{children:a.fG[e]},"header-"+e))),(0,c.jsx)("th",{})]})}),(0,c.jsxs)("tbody",{children:[e&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{className:"text--center",colSpan:4+g.length,children:"Loading emojis\u2026"})}),!e&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("tr",{children:(0,c.jsxs)("td",{className:"text--center",colSpan:4+g.length,children:[r.length.toLocaleString()," emojis"]})}),r.map((e=>{const t=function(e){let t="";if(0===e.length)return!1;for(const r of e){const e=Array.isArray(r)?r.sort().join(","):r;if(t){if(t!==e)return!1}else t=e}return!0}(p.map((t=>t[e.hexcode])));return(0,c.jsxs)("tr",{"data-hexcode":e.hexcode,children:[(0,c.jsx)("td",{className:"text--center emoji--large",children:e.emoji||e.text}),(0,c.jsxs)("td",{children:[(0,c.jsx)("div",{children:e.label}),(0,c.jsx)("div",{className:"text--muted no-wrap",children:e.hexcode})]}),(0,c.jsx)("td",{children:(0,c.jsx)(l.A,{preset:"cldr",shortcodes:h[e.hexcode]})}),t?(0,c.jsx)("td",{colSpan:g.length,children:(0,c.jsx)(l.A,{preset:g[0],shortcodes:p[0][e.hexcode]})}):g.map(((t,r)=>(0,c.jsx)("td",{children:(0,c.jsx)(l.A,{preset:t,shortcodes:p[r][e.hexcode]})},e.hexcode+t))),(0,c.jsx)("td",{className:"text--center emoji--large",children:e.emoji||e.text})]},e.hexcode)}))]})]})]})})]})})}}}]);