/*! For license information please see a1478d3a.1684dc28.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{107:function(e,t,a){(function(e){!function(e){"use strict";var t,a=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(t){}return null}(),n=a&&"a=1"===new a({a:1}).toString(),r=a&&"+"===new a("s=%2B").get("s"),o=!a||((t=new a).append("s"," &"),"s=+%26"===t.toString()),l=u.prototype,i=!(!e.Symbol||!e.Symbol.iterator);if(!(a&&n&&r&&o)){l.append=function(e,t){d(this.__URLSearchParams__,e,t)},l.delete=function(e){delete this.__URLSearchParams__[e]},l.get=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e][0]:null},l.getAll=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e].slice(0):[]},l.has=function(e){return v(this.__URLSearchParams__,e)},l.set=function(e,t){this.__URLSearchParams__[e]=[""+t]},l.toString=function(){var e,t,a,n,r=this.__URLSearchParams__,o=[];for(t in r)for(a=f(t),e=0,n=r[t];e<n.length;e++)o.push(a+"="+f(n[e]));return o.join("&")};var c=!!r&&a&&!n&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:c?new Proxy(a,{construct:function(e,t){return new e(new u(t[0]).toString())}}):u});var s=e.URLSearchParams.prototype;s.polyfill=!0,s.forEach=s.forEach||function(e,t){var a=p(this.toString());Object.getOwnPropertyNames(a).forEach((function(n){a[n].forEach((function(a){e.call(t,a,n,this)}),this)}),this)},s.sort=s.sort||function(){var e,t,a,n=p(this.toString()),r=[];for(e in n)r.push(e);for(r.sort(),t=0;t<r.length;t++)this.delete(r[t]);for(t=0;t<r.length;t++){var o=r[t],l=n[o];for(a=0;a<l.length;a++)this.append(o,l[a])}},s.keys=s.keys||function(){var e=[];return this.forEach((function(t,a){e.push(a)})),h(e)},s.values=s.values||function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},s.entries=s.entries||function(){var e=[];return this.forEach((function(t,a){e.push([a,t])})),h(e)},i&&(s[e.Symbol.iterator]=s[e.Symbol.iterator]||s.entries)}function u(e){((e=e||"")instanceof URLSearchParams||e instanceof u)&&(e=e.toString()),this.__URLSearchParams__=p(e)}function f(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function m(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function h(t){var a={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(a[e.Symbol.iterator]=function(){return a}),a}function p(e){var t={};if("object"==typeof e)if(g(e))for(var a=0;a<e.length;a++){var n=e[a];if(!g(n)||2!==n.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");d(t,n[0],n[1])}else for(var r in e)e.hasOwnProperty(r)&&d(t,r,e[r]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var o=e.split("&"),l=0;l<o.length;l++){var i=o[l],c=i.indexOf("=");-1<c?d(t,m(i.slice(0,c)),m(i.slice(c+1))):i&&d(t,m(i),"")}}return t}function d(e,t,a){var n="string"==typeof a?a:null!=a&&"function"==typeof a.toString?a.toString():JSON.stringify(a);v(e,t)?e[t].push(n):e[t]=[n]}function g(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==e?e:"undefined"!=typeof window?window:this)}).call(this,a(29))},108:function(e){e.exports=JSON.parse('{"groups":{"0":"smileys-emotion","1":"people-body","2":"component","3":"animals-nature","4":"food-drink","5":"travel-places","6":"activities","7":"objects","8":"symbols","9":"flags"},"hierarchy":{"0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"1":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"2":[31,32],"3":[33,34,35,36,37,38,39,40],"4":[41,42,43,44,45,46,47,48],"5":[49,50,51,52,53,54,55,56,57,58,59],"6":[60,61,62,63,64],"7":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"8":[83,84,85,86,87,88,89,90,91,92,93,94,95,96],"9":[97,98,99]},"subgroups":{"0":"face-smiling","1":"face-affection","2":"face-tongue","3":"face-hand","4":"face-neutral-skeptical","5":"face-sleepy","6":"face-unwell","7":"face-hat","8":"face-glasses","9":"face-concerned","10":"face-negative","11":"face-costume","12":"cat-face","13":"monkey-face","14":"emotion","15":"hand-fingers-open","16":"hand-fingers-partial","17":"hand-single-finger","18":"hand-fingers-closed","19":"hands","20":"hand-prop","21":"body-parts","22":"person","23":"person-gesture","24":"person-role","25":"person-fantasy","26":"person-activity","27":"person-sport","28":"person-resting","29":"family","30":"person-symbol","31":"skin-tone","32":"hair-style","33":"animal-mammal","34":"animal-bird","35":"animal-amphibian","36":"animal-reptile","37":"animal-marine","38":"animal-bug","39":"plant-flower","40":"plant-other","41":"food-fruit","42":"food-vegetable","43":"food-prepared","44":"food-asian","45":"food-marine","46":"food-sweet","47":"drink","48":"dishware","49":"place-map","50":"place-geographic","51":"place-building","52":"place-religious","53":"place-other","54":"transport-ground","55":"transport-water","56":"transport-air","57":"hotel","58":"time","59":"sky-weather","60":"event","61":"award-medal","62":"sport","63":"game","64":"arts-crafts","65":"clothing","66":"sound","67":"music","68":"musical-instrument","69":"phone","70":"computer","71":"light-video","72":"book-paper","73":"money","74":"mail","75":"writing","76":"office","77":"lock","78":"tool","79":"science","80":"medical","81":"household","82":"other-object","83":"transport-sign","84":"warning","85":"arrow","86":"religion","87":"zodiac","88":"av-symbol","89":"gender","90":"math","91":"punctuation","92":"currency","93":"other-symbol","94":"keycap","95":"alphanum","96":"geometric","97":"flag","98":"country-flag","99":"subdivision-flag"}}')},73:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));a(107);var n=a(0),r=a.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t,a){void 0===t&&(t="latest"),void 0===a&&(a={});var n=a,r=n.local,l=void 0!==r&&r,i=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(n,["local"]),c=l?localStorage:sessionStorage,s="emojibase/"+t+"/"+e,u=c.getItem(s);if(u)try{return Promise.resolve(JSON.parse(u))}catch(f){return Promise.resolve([])}return fetch("https://cdn.jsdelivr.net/npm/emojibase-data@"+t+"/"+e,o({credentials:"omit",mode:"cors",redirect:"error"},i)).then((function(e){if(!e.ok)throw new Error("Failed to load Emojibase dataset.");return e.json()})).then((function(e){try{c.setItem(s,JSON.stringify(e))}catch(f){}return e}))}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e){var t=[];return e.forEach((function(e){if(e.skins){var a=e.skins,n=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["skins"]);t.push(n),a.forEach((function(a){var n=i({},a);e.tags&&(n.tags=[].concat(e.tags)),t.push(n)}))}else t.push(e)})),t}var s=a(108),u=a(83),f=a(48),m=a.n(f),h="undefined"!=typeof location,p=[{value:"zh",label:"Chinese (zh)"},{value:"zh-hant",label:"Chinese, Traditional (zh-hant)"},{value:"da",label:"Danish (da)"},{value:"nl",label:"Dutch (nl)"},{value:"en",label:"English (en)"},{value:"en-gb",label:"English, Great Britain (en-gb)"},{value:"fr",label:"French (fr)"},{value:"de",label:"German (de)"},{value:"it",label:"Italian (it)"},{value:"ja",label:"Japanese (ja)"},{value:"ko",label:"Korean (ko)"},{value:"ms",label:"Malay (ms)"},{value:"pl",label:"Polish (pl)"},{value:"pt",label:"Portuguese (pt)"},{value:"ru",label:"Russian (ru)"},{value:"es",label:"Spanish (es)"},{value:"es-mx",label:"Spanish, Mexico (es-mx)"},{value:"sv",label:"Swedish (sv)"},{value:"th",label:"Thai (th)"}];function d(e){h&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}function g(){var e,t,a,o,i,f=new URLSearchParams(h?location.search:""),g=Object(n.useState)(null!==(e=f.get("filter"))&&void 0!==e?e:""),v=g[0],b=g[1],y=Object(n.useState)(null!==(t=f.get("locale"))&&void 0!==t?t:"en"),E=y[0],S=y[1],w=Object(n.useState)(Number(null!==(a=f.get("group"))&&void 0!==a?a:-1)),j=w[0],k=w[1],O=Object(n.useState)(Number(null!==(o=f.get("subgroup"))&&void 0!==o?o:-1)),_=O[0],P=O[1],L=Object(n.useState)(Boolean(null!==(i=f.get("skinTones"))&&void 0!==i&&i)),x=L[0],N=L[1],R=Object(n.useState)([]),U=R[0],T=R[1],C=Object(n.useState)(!0),F=C[0],J=C[1];Object(n.useEffect)((function(){J(!0),l(E+"/data.json").then((function(e){T(e)})).finally((function(){J(!1)}))}),[E]);var z=function(e,t,a,n){return e.filter((function(e){if(a>=0&&e.group!==a)return!1;if(n>=0&&e.subgroup!==n)return!1;if(t){var r=e.annotation.toLocaleLowerCase().includes(t),o=e.shortcodes.map((function(e){return e.toLocaleLowerCase().includes(t)})).indexOf(!0)>-1,l=(e.tags||[]).map((function(e){return e.toLocaleLowerCase().includes(t)})).indexOf(!0)>-1;return r||o||l}return!0})).sort((function(e,t){return e.order-t.order}))}(x?c(U):U,v.toLocaleLowerCase(),j,_);return r.a.createElement(u.a,{title:"Emoji browser",description:"Browse all emojis across any supported locale."},r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:m.a.browserFilters},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"filter"},"Filter"),r.a.createElement("input",{type:"text",id:"filter",name:"filter",value:v,onChange:function(e){var t=e.currentTarget.value;f.set("filter",t),b(t),d(f)},disabled:F})),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"locale"},"Locale"),r.a.createElement("select",{id:"locale",name:"locale",value:E,onChange:function(e){var t=e.currentTarget.value;f.set("locale",t),S(t),d(f)},disabled:F},p.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"group"},"Group"),r.a.createElement("select",{id:"group",name:"group",value:j,onChange:function(e){var t=Number(e.currentTarget.value);f.set("group",String(t)),f.set("subgroup","-1"),k(t),P(-1),d(f)},disabled:F},r.a.createElement("option",{value:"-1"},"(none)"),Object.entries(s.groups).map((function(e){var t=e[0],a=e[1];return r.a.createElement("option",{key:t,value:t},a)})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"subgroup"},"Subgroup"),r.a.createElement("select",{id:"subgroup",name:"subgroup",value:_,onChange:function(e){var t=Number(e.currentTarget.value);f.set("subgroup",String(t)),P(t),d(f)},disabled:F||!s.hierarchy[j]},r.a.createElement("option",{value:"-1"},"(none)"),(s.hierarchy[j]||[]).map((function(e){return r.a.createElement("option",{key:e,value:e},s.subgroups[e])}))))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"skinTones"},r.a.createElement("input",{type:"checkbox",id:"skinTones",name:"skinTones",checked:x,onChange:function(e){var t=e.currentTarget.checked;f.set("skinTones",String(t)),N(t),d(f)},disabled:F})," ","Include skin tone variations?")))),r.a.createElement("table",{style:{width:"100%"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Annotation"),r.a.createElement("th",null,"Shortcodes"),r.a.createElement("th",null,"Tags"))),r.a.createElement("tbody",null,F&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4,className:"text--center"},"Loading emojis\u2026")),!F&&r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4,className:"text--center"},z.length.toLocaleString()," emojis")),z.map((function(e){return r.a.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},r.a.createElement("td",{className:"text--center"},e.emoji||e.text),r.a.createElement("td",null,e.annotation,e.emoticon&&r.a.createElement("span",{className:"text--muted"}," ",e.emoticon)),r.a.createElement("td",null,e.shortcodes.map((function(e){return":"+e+":"})).join(", ")),r.a.createElement("td",null,e.tags.join(", ")))}))))))))}}}]);