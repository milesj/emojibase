"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234],{8746:(e,t,r)=>{r.d(t,{Sm:()=>m,cA:()=>p,lj:()=>j,ze:()=>b});const n=["local","version","cdnUrl"],s=["skins"],o=["compact","flat","shortcodes"];function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,o,a,i=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,s=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw s}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const h=/200D|FE0E|FE0F/g;async function p(e,t){void 0===t&&(t={});const r=t.local,s=void 0!==r&&r,o=t.version,a=void 0===o?"latest":o,i=t.cdnUrl,c=d(t,n),u=function(e,t,r){let n=`https://cdn.jsdelivr.net/npm/emojibase-data@${t}/${e}`;return"function"==typeof r?n=r(e,t):"string"==typeof r&&(n=`${r}/${e}`),n}(e,a,i),h=s?localStorage:sessionStorage,p=`emojibase/${a}/${e}`,f=h.getItem(p);if(f)return JSON.parse(f);const b=await fetch(u,l({credentials:"omit",mode:"cors",redirect:"error"},c));if(!b.ok)throw new Error("Failed to load Emojibase dataset.");const g=await b.json();try{h.setItem(p,JSON.stringify(g))}catch{}return g}const f={discord:"joypixels",slack:"iamcal"};async function b(e,t,r){return p(`${e}/shortcodes/${f[t]??t}.json`,r)}function g(e,t){if(0===t.length)return e;const r=new Set(e.shortcodes);return t.forEach((t=>{const n=t[e.hexcode];Array.isArray(n)?n.forEach((e=>r.add(e))):n&&r.add(n)})),e.shortcodes=[...r],e.skins&&e.skins.forEach((e=>{g(e,t)})),e}async function m(e,t){void 0===t&&(t={});const r=t.compact,n=void 0!==r&&r,i=t.flat,c=void 0!==i&&i,u=t.shortcodes,h=void 0===u?[]:u,f=d(t,o),m=await p(`${e}/${n?"compact":"data"}.json`,f);let j=[];return h.length>0&&(j=await Promise.all(h.map((t=>{let r;if(t.includes("/")){const e=a(t.split("/"),2);r=b(e[0],e[1],f)}else r=b(e,t,f);return r.catch((()=>({})))})))),c?function(e,t){void 0===t&&(t=[]);const r=[];return e.forEach((e=>{if(e.skins){const n=e.skins,o=d(e,s);r.push(g(o,t)),n.forEach((e=>{const n=l({},e);o.tags&&(n.tags=[...o.tags]),r.push(g(n,t))}))}else r.push(g(e,t))})),r}(m,j):function(e,t){return 0===t.length||e.forEach((e=>{g(e,t)})),e}(m,j)}async function j(e,t){return p(`${e}/messages.json`,t)}new RegExp(`(-| )?(${h.source})`,"g")},6429:(e,t,r)=>{r.d(t,{fG:()=>f,Ay:()=>j,lg:()=>b});r(9978);var n=r(3696),s=r(8746),o=r(6177),a=r.n(o),i=r(8580),c=r.n(i),l=r(9356);const u={browserFilters:"browserFilters_Tq76"};var d=r(2540);const h="undefined"!=typeof location,p={bn:"Bangla",da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hi:"Hindi",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian",vi:"Vietnamese","zh-hant":"Chinese, Traditional",zh:"Chinese"},f={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function b(e,t){let{filter:r,genders:n,group:s,subgroup:o,skinTones:a}=t;const i=[];return e.forEach((e=>{if((n||void 0===e.gender)&&!(s>=0&&e.group!==s||o>=0&&e.subgroup!==o)){if(e.shortcodes){const t=[];e.shortcodes.forEach((r=>{r instanceof Set||Array.isArray(r)?(console.debug("Non-string found",e.hexcode,e),[...r].forEach((e=>{t.push(String(e))}))):"string"==typeof r&&t.push(r)})),e.shortcodes=t}if(r){const t=e.label.toLocaleLowerCase().includes(r),n=e.shortcodes?.some((e=>e?.toLocaleLowerCase().includes(r))),s=e.tags?.some((e=>e.toLocaleLowerCase().includes(r)));if(!t&&!n&&!s)return}i.push(e),a&&e.skins&&i.push(...e.skins)}})),i.sort(((e,t)=>(e.order??1e4)-(t.order??1e4))),i}function g(e){const t={};return e.forEach((e=>{t[e.order]=e.message})),t}const m=new URLSearchParams(h?location.search:"");function j(e){let{defaultShortcodePresets:t=["emojibase"],disabled:r=!1,hideCldr:o=!1,onChange:i}=e;const[b,j]=(0,n.useState)(m.get("filter")??""),[x,y]=(0,n.useState)(b),[v,S]=(0,n.useState)(m.get("locale")??"en"),[k,w]=(0,n.useState)(Number(m.get("group")??-1)),[O,C]=(0,n.useState)(),[E,N]=(0,n.useState)(),[P,$]=(0,n.useState)(Number(m.get("subgroup")??-1)),[A,T]=(0,n.useState)(),[F,L]=(0,n.useState)("true"===m.get("genders")),[D,I]=(0,n.useState)("true"===m.get("skinTones")),[R,U]=(0,n.useState)(decodeURIComponent(m.get("shortcodePresets")??t.join(",")).split(",").filter(Boolean));(0,n.useEffect)((()=>{!async function(){const e=await(0,s.lj)("en",{version:l.b});C(g(e.groups)),T(g(e.subgroups));const t=await(0,s.cA)("meta/groups.json",{version:l.b});N(t)}()}),[]),(0,n.useEffect)((()=>{!function(e){h&&history.pushState({},document.title,`${location.origin}${location.pathname}?${e.toString()}`)}(m),i({filter:x,locale:v,genders:F,group:k,subgroup:P,skinTones:D,shortcodePresets:R})}),[x,v,F,k,P,D,R,i]);const G=a()((e=>{m.set("filter",e),y(e)}),350),B=(0,n.useCallback)((e=>{e.persist();const{value:t}=e.currentTarget;j(t),G(t)}),[G]),J=(0,n.useCallback)((e=>{const{value:t}=e.currentTarget;m.set("locale",t),S(t)}),[]),z=(0,n.useCallback)((e=>{const t=Number(e.currentTarget.value);m.set("group",String(t)),m.set("subgroup","-1"),w(t),$(-1)}),[]),H=(0,n.useCallback)((e=>{const t=Number(e.currentTarget.value);m.set("subgroup",String(t)),$(t)}),[]),M=(0,n.useCallback)((e=>{const{checked:t}=e.currentTarget;m.set("genders",String(t)),L(t)}),[]),q=(0,n.useCallback)((e=>{const{checked:t}=e.currentTarget;m.set("skinTones",String(t)),I(t)}),[]),K=(0,n.useCallback)((e=>{const{checked:t,value:r}=e.currentTarget;U((e=>{let n=[...e];const s=r;return t&&!n.includes(s)?n.push(s):n=n.filter((e=>e!==s)),n.sort(),m.set("shortcodePresets",encodeURIComponent(n.join(","))),n}))}),[]);return(0,d.jsxs)("div",{className:u.browserFilters,children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"filter",children:"Annotation"}),(0,d.jsx)("input",{disabled:r,id:"filter",name:"filter",type:"search",value:b,onChange:B})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"locale",children:"Locale"}),(0,d.jsx)("select",{disabled:r,id:"locale",name:"locale",value:v,onChange:J,children:Object.entries(p).sort(((e,t)=>e[1].localeCompare(t[1]))).map((e=>{let[t,r]=e;return(0,d.jsxs)("option",{value:t,children:[r," (",t,")"]},t)}))})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"group",children:"Group"}),(0,d.jsxs)("select",{disabled:r||!E||!O,id:"group",name:"group",value:k,onChange:z,children:[(0,d.jsx)("option",{value:"-1",children:"(none)"}),E&&O&&Object.keys(E.groups).map((e=>(0,d.jsx)("option",{value:e,children:c()(O[e])},e)))]})]}),(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("label",{htmlFor:"subgroup",children:"Subgroup"}),(0,d.jsxs)("select",{disabled:r||!E?.hierarchy[k]||!A,id:"subgroup",name:"subgroup",value:P,onChange:H,children:[(0,d.jsx)("option",{value:"-1",children:"(none)"}),E&&A&&(E.hierarchy[k]||[]).map((e=>(0,d.jsx)("option",{value:e,children:c()(A[e])},e)))]})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col col--3",children:[(0,d.jsx)("h4",{children:"Display"}),(0,d.jsxs)("label",{className:"label--inline",htmlFor:"genders",children:[(0,d.jsx)("input",{checked:F,disabled:r,id:"genders",name:"genders",type:"checkbox",onChange:M})," ","Genders?"]}),(0,d.jsxs)("label",{className:"label--inline",htmlFor:"skinTones",children:[(0,d.jsx)("input",{checked:D,disabled:r,id:"skinTones",name:"skinTones",type:"checkbox",onChange:q})," ","Skin tones?"]})]}),(0,d.jsxs)("div",{className:"col col-9",children:[(0,d.jsx)("h4",{children:"Shortcode presets"}),Object.entries(f).map((e=>{let[t,n]=e;return t.includes("cldr")&&o?null:(0,d.jsxs)("label",{className:"label--inline",htmlFor:`preset-${t}`,children:[(0,d.jsx)("input",{checked:R.includes(t),disabled:r,id:`preset-${t}`,name:"presets",type:"checkbox",value:t,onChange:K})," ",n]},t)}))]})]})]})}},2904:(e,t,r)=>{r.d(t,{A:()=>s});r(3696);var n=r(2540);function s(e){let{preset:t,shortcodes:r}=e;if(!r)return null;const s=[],o=function(e,t){void 0===t&&(t=0),t>1||("string"==typeof e?s.push(e):(e instanceof Set||Array.isArray(e))&&[...e].forEach((e=>{o(e,t+1)})))};return o(r),(0,n.jsx)(n.Fragment,{children:s.sort().map((e=>(0,n.jsx)("div",{children:`:${e}:`},`${t}-${e}`)))})}},9356:(e,t,r)=>{r.d(t,{b:()=>n});const n="latest"},5105:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(3696),s=r(8746),o=r(5841),a=r(6429),i=r(2904),c=r(9356),l=r(2540);function u(){const[e,t]=(0,n.useState)([]),[r,u]=(0,n.useState)(!1),d=(0,n.useCallback)((async e=>{const{locale:r,shortcodePresets:n}=e;u(!0);const o=await(0,s.Sm)(r,{shortcodes:n.map((e=>e.includes("cldr")?e:`en/${e}`)),version:c.b});t((0,a.lg)(o,e)),u(!1)}),[]);return(0,l.jsx)(o.A,{description:"Table of all emojis across any supported locale.",title:"Emoji table",children:(0,l.jsxs)("main",{className:"table-container",children:[(0,l.jsx)("h2",{children:"Emoji table"}),(0,l.jsx)(a.Ay,{disabled:r,onChange:d}),(0,l.jsx)("div",{className:"table-responsive",children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:"Annotation"}),(0,l.jsx)("th",{children:"Shortcodes"}),(0,l.jsx)("th",{children:"Tags"})]})}),(0,l.jsxs)("tbody",{children:[r&&(0,l.jsx)("tr",{children:(0,l.jsx)("td",{className:"text--center",colSpan:4,children:"Loading emojis\u2026"})}),!r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{className:"text--center",colSpan:4,children:[e.length.toLocaleString()," emojis"]})}),e.map((e=>(0,l.jsxs)("tr",{"data-hexcode":e.hexcode,children:[(0,l.jsx)("td",{className:"text--center emoji--large",children:e.emoji||e.text}),(0,l.jsxs)("td",{children:[e.label,e.emoticon&&(0,l.jsxs)("span",{className:"text--muted",children:[" ",e.emoticon]})]}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{preset:"emojibase",shortcodes:e.shortcodes})}),(0,l.jsx)("td",{children:e.tags?.join(", ")})]},e.hexcode)))]})]})]})})]})})}}}]);