(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(103),r=a.n(n),l=a(104);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function o(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}var s=a(0),i=a.n(s),u=a(85),m=a(114),d=a(93),h=a(94);function b(e){return e}function p(){var e=Object(s.useState)(!1),t=e[0],a=e[1],n=Object(s.useState)([]),c=n[0],p=n[1],g=Object(s.useState)({}),f=g[0],E=g[1],v=Object(s.useState)([]),j=v[0],S=v[1],y=Object(s.useState)(["emojibase","github","iamcal","joypixels"]),k=y[0],O=y[1],x=Object(s.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(n){var l,c,o,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n.locale,c=n.shortcodePresets,!t){e.next=3;break}return e.abrupt("return");case 3:return a(!0),e.next=6,Object(m.fetchEmojis)(l,{shortcodes:k,version:"next"});case 6:return o=e.sent,e.next=9,Object(m.fetchShortcodes)(l,"cldr",{version:"next"}).catch(b);case 9:return s=e.sent,e.next=12,Promise.all(c.map((function(e){return Object(m.fetchShortcodes)(l,e,{version:"next"}).catch(b)})));case 12:i=e.sent,p(Object(h.c)(o,n)),E(s),S(i),O(c),a(!1);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return i.a.createElement(u.a,{title:"Shortcodes table",description:"Table of all shortcodes for every emoji character."},i.a.createElement("main",{className:"table-container"},i.a.createElement("h2",null,"Shortcodes table"),i.a.createElement(h.b,{hideCldr:!0,disabled:t,defaultShortcodePresets:k,onChange:x}),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:2}),i.a.createElement("th",null,"CLDR"),k.map((function(e){return i.a.createElement("th",{key:"header-"+e},h.a[e])})),i.a.createElement("th",null))),i.a.createElement("tbody",null,t&&i.a.createElement("tr",null,i.a.createElement("td",{colSpan:4+k.length,className:"text--center"},"Loading emojis\u2026")),!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:4+k.length,className:"text--center"},c.length.toLocaleString()," emojis")),c.map((function(e){var t=function(e){var t="";if(0===e.length)return!1;for(var a,n=o(e);!(a=n()).done;){var r=a.value,l=Array.isArray(r)?r.sort().join(","):r;if(t){if(t!==l)return!1}else t=l}return!0}(j.map((function(t){return t[e.hexcode]})));return i.a.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},i.a.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text),i.a.createElement("td",null,i.a.createElement("div",null,e.annotation),i.a.createElement("div",{className:"text--muted no-wrap"},e.hexcode)),i.a.createElement("td",null,i.a.createElement(d.a,{preset:"cldr",shortcodes:f[e.hexcode]})),t?i.a.createElement("td",{colSpan:k.length},i.a.createElement(d.a,{preset:k[0],shortcodes:j[0][e.hexcode]})):k.map((function(t,a){return i.a.createElement("td",{key:e.hexcode+t},i.a.createElement(d.a,{preset:t,shortcodes:j[a][e.hexcode]}))})),i.a.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text))}))))))))}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l(e){var t=e.preset,a=e.shortcodes;return a&&0!==a.length?r.a.createElement(r.a.Fragment,null,(Array.isArray(a)?a:[a]).sort().map((function(e){return r.a.createElement("div",{key:t+"-"+e},":"+e+":")}))):null}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return v}));a(105);var n=a(0),r=a.n(n),l=a(112),c=a(113),o=a(106),s=a.n(o),i=a(110),u=a.n(i),m=a(48),d=a.n(m);const h="undefined"!=typeof location,b={da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},p={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function g(e,{filter:t,genders:a,group:n,subgroup:r,skinTones:l}){const c=[];return e.forEach(e=>{if((a||void 0===e.gender)&&!(n>=0&&e.group!==n||r>=0&&e.subgroup!==r)){if(t){var o,s;const a=e.annotation.toLocaleLowerCase().includes(t),n=null===(o=e.shortcodes)||void 0===o?void 0:o.some(e=>e.toLocaleLowerCase().includes(t)),r=null===(s=e.tags)||void 0===s?void 0:s.some(e=>e.toLocaleLowerCase().includes(t));if(!a&&!n&&!r)return}c.push(e),l&&e.skins&&c.push(...e.skins)}}),c.sort((e,t)=>(e.order||1e4)-(t.order||1e4)),c}function f(e){const t={};return e.forEach(e=>{t[e.order]=e.message}),t}const E=new URLSearchParams(h?location.search:"");function v({defaultShortcodePresets:e=["emojibase"],disabled:t=!1,hideCldr:a=!1,onChange:o}){var i,m,g,v,j;const[S,y]=Object(n.useState)(null!==(i=E.get("filter"))&&void 0!==i?i:""),[k,O]=Object(n.useState)(S),[x,C]=Object(n.useState)(null!==(m=E.get("locale"))&&void 0!==m?m:"en"),[N,w]=Object(n.useState)(Number(null!==(g=E.get("group"))&&void 0!==g?g:-1)),[T]=Object(n.useState)(f(l.groups)),[L]=Object(n.useState)(c),[A,F]=Object(n.useState)(Number(null!==(v=E.get("subgroup"))&&void 0!==v?v:-1)),[P]=Object(n.useState)(f(l.subgroups)),[D,I]=Object(n.useState)("true"===E.get("genders")),[R,G]=Object(n.useState)("true"===E.get("skinTones")),[U,J]=Object(n.useState)(decodeURIComponent(null!==(j=E.get("shortcodePresets"))&&void 0!==j?j:e.join(",")).split(",").filter(Boolean));Object(n.useEffect)(()=>{!function(e){h&&history.pushState({},document.title,`${location.origin}${location.pathname}?${e.toString()}`)}(E),o({filter:k,locale:x,genders:D,group:N,subgroup:A,skinTones:R,shortcodePresets:U})},[k,x,D,N,A,R,U]);const $=s()(e=>{E.set("filter",e),O(e)},350),B=Object(n.useCallback)(e=>{e.persist();const{value:t}=e.currentTarget;y(t),$(t)},[]),M=Object(n.useCallback)(e=>{const{value:t}=e.currentTarget;E.set("locale",t),C(t)},[]),z=Object(n.useCallback)(e=>{const t=Number(e.currentTarget.value);E.set("group",String(t)),E.set("subgroup","-1"),w(t),F(-1)},[]),H=Object(n.useCallback)(e=>{const t=Number(e.currentTarget.value);E.set("subgroup",String(t)),F(t)},[]),K=Object(n.useCallback)(e=>{const{checked:t}=e.currentTarget;E.set("genders",String(t)),I(t)},[]),q=Object(n.useCallback)(e=>{const{checked:t}=e.currentTarget;E.set("skinTones",String(t)),G(t)},[]),Q=Object(n.useCallback)(e=>{const{checked:t,value:a}=e.currentTarget;J(e=>{const n=new Set(e);t?n.add(a):n.delete(a);const r=Array.from(n).sort();return E.set("shortcodePresets",encodeURIComponent(r.join(","))),r})},[]);return r.a.createElement("div",{className:d.a.browserFilters},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"filter"},"Annotation"),r.a.createElement("input",{type:"search",id:"filter",name:"filter",value:S,onChange:B,disabled:t})),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"locale"},"Locale"),r.a.createElement("select",{id:"locale",name:"locale",value:x,onChange:M,disabled:t},Object.entries(b).sort((e,t)=>e[1].localeCompare(t[1])).map(([e,t])=>r.a.createElement("option",{key:e,value:e},t," (",e,")")))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"group"},"Group"),r.a.createElement("select",{id:"group",name:"group",value:N,onChange:z,disabled:t},r.a.createElement("option",{value:"-1"},"(none)"),Object.keys(L.groups).map(e=>r.a.createElement("option",{key:e,value:e},u()(T[e]))))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"subgroup"},"Subgroup"),r.a.createElement("select",{id:"subgroup",name:"subgroup",value:A,onChange:H,disabled:t||!L.hierarchy[N]},r.a.createElement("option",{value:"-1"},"(none)"),(L.hierarchy[N]||[]).map(e=>r.a.createElement("option",{key:e,value:e},u()(P[e])))))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("h4",null,"Display"),r.a.createElement("label",{htmlFor:"genders",className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"genders",name:"genders",checked:D,onChange:K,disabled:t})," ","Genders?"),r.a.createElement("label",{htmlFor:"skinTones",className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"skinTones",name:"skinTones",checked:R,onChange:q,disabled:t})," ","Skin tones?")),r.a.createElement("div",{className:"col col-9"},r.a.createElement("h4",null,"Shortcode presets"),Object.entries(p).map(([e,n])=>e.includes("cldr")&&a?null:r.a.createElement("label",{key:e,htmlFor:"preset-"+e,className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"preset-"+e,name:"presets",value:e,checked:U.includes(e),onChange:Q,disabled:t})," ",n)))))}}}]);