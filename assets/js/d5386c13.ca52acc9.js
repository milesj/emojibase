"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[919],{5894:function(e,t,n){n.d(t,{JK:function(){return p},W4:function(){return x},tt:function(){return k},uU:function(){return m}});var r=n(808),a=n(7791),o=n(7135),c=n.n(o),s=["skins"],l=["local","version","cdnUrl"],u=["compact","flat","shortcodes"];var i=/200D|FE0E|FE0F/g;function d(e,t,n){var r="https://cdn.jsdelivr.net/npm/emojibase-data@"+t+"/"+e;return"function"==typeof n?r=n(e,t):"string"==typeof n&&(r=n+"/"+e),r}function m(e,t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(c().mark((function e(t,n){var a,o,s,u,i,m,h,f,p,v,g,b,E;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n={}),o=(a=n).local,s=void 0!==o&&o,u=a.version,i=void 0===u?"latest":u,m=a.cdnUrl,h=(0,r.Z)(a,l),f=d(t,i,m),p=s?localStorage:sessionStorage,v="emojibase/"+i+"/"+t,!(g=p.getItem(v))){e.next=8;break}return e.abrupt("return",JSON.parse(g));case 8:return e.next=10,fetch(f,Object.assign({credentials:"omit",mode:"cors",redirect:"error"},h));case 10:if((b=e.sent).ok){e.next=13;break}throw new Error("Failed to load Emojibase dataset.");case 13:return e.next=15,b.json();case 15:E=e.sent;try{p.setItem(v,JSON.stringify(E))}catch(c){}return e.abrupt("return",E);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={discord:"joypixels",slack:"iamcal"};function p(e,t,n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(c().mark((function e(t,n,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m(t+"/shortcodes/"+(null!==(a=f[n])&&void 0!==a?a:n)+".json",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){if(0===t.length)return e;var n=new Set(e.shortcodes);return t.forEach((function(t){var r=t[e.hexcode];Array.isArray(r)?r.forEach((function(e){return n.add(e)})):r&&n.add(r)})),e.shortcodes=[].concat(n),e.skins&&e.skins.forEach((function(e){g(e,t)})),e}function b(e,t){void 0===t&&(t=[]);var n=[];return e.forEach((function(e){if(e.skins){var a=e.skins,o=(0,r.Z)(e,s);n.push(g(o,t)),a.forEach((function(e){var r=Object.assign({},e);o.tags&&(r.tags=[].concat(o.tags)),n.push(g(r,t))}))}else n.push(g(e,t))})),n}function E(e,t){return 0===t.length||e.forEach((function(e){g(e,t)})),e}function k(e,t){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(c().mark((function e(t,n){var a,o,s,l,i,d,h,f,v,g;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),o=(a=n).compact,s=void 0!==o&&o,l=a.flat,i=void 0!==l&&l,d=a.shortcodes,h=void 0===d?[]:d,f=(0,r.Z)(a,u),e.next=4,m(t+"/"+(s?"compact":"data")+".json",f);case 4:if(v=e.sent,g=[],!(h.length>0)){e.next=10;break}return e.next=9,Promise.all(h.map((function(e){var n;if(e.includes("/")){var r=e.split("/");n=p(r[0],r[1],f)}else n=p(t,e,f);return n.catch((function(){return{}}))})));case 9:g=e.sent;case 10:return e.abrupt("return",i?b(v,g):E(v,g));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m(t+"/messages.json",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}new RegExp("(-| )?("+i.source+")","g")},6101:function(e,t,n){n.d(t,{PG:function(){return v},ZP:function(){return k},$O:function(){return g}});var r=n(7791),a=n(7135),o=n.n(a),c=(n(2328),n(7378)),s=n(5894),l=n(6726),u=n.n(l),i=n(6744),d=n.n(i),m=n(593),h="browserFilters_Tq76",f="undefined"!=typeof location,p={da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},v={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function g(e,t){var n=t.filter,r=t.genders,a=t.group,o=t.subgroup,c=t.skinTones,s=[];return e.forEach((function(e){if((r||void 0===e.gender)&&!(a>=0&&e.group!==a||o>=0&&e.subgroup!==o)){if(n){var t,l,u=e.label.toLocaleLowerCase().includes(n),i=null==(t=e.shortcodes)?void 0:t.some((function(e){return null==e?void 0:e.toLocaleLowerCase().includes(n)})),d=null==(l=e.tags)?void 0:l.some((function(e){return null==e?void 0:e.toLocaleLowerCase().includes(n)}));if(!u&&!i&&!d)return}s.push(e),c&&e.skins&&s.push.apply(s,e.skins)}})),s.sort((function(e,t){var n,r;return(null!=(n=e.order)?n:1e4)-(null!=(r=t.order)?r:1e4)})),s}function b(e){var t={};return e.forEach((function(e){t[e.order]=e.message})),t}var E=new URLSearchParams(f?location.search:"");function k(e){var t,n,a,l,i,g=e.defaultShortcodePresets,k=void 0===g?["emojibase"]:g,y=e.disabled,x=void 0!==y&&y,S=e.hideCldr,j=void 0!==S&&S,C=e.onChange,w=(0,c.useState)(null!=(t=E.get("filter"))?t:""),N=w[0],T=w[1],Z=(0,c.useState)(N),F=Z[0],P=Z[1],L=(0,c.useState)(null!=(n=E.get("locale"))?n:"en"),O=L[0],D=L[1],R=(0,c.useState)(Number(null!=(a=E.get("group"))?a:-1)),U=R[0],G=R[1],J=(0,c.useState)(),I=J[0],A=J[1],K=(0,c.useState)(),B=K[0],z=K[1],H=(0,c.useState)(Number(null!=(l=E.get("subgroup"))?l:-1)),M=H[0],W=H[1],$=(0,c.useState)(),q=$[0],_=$[1],Q=(0,c.useState)("true"===E.get("genders")),V=Q[0],X=Q[1],Y=(0,c.useState)("true"===E.get("skinTones")),ee=Y[0],te=Y[1],ne=(0,c.useState)(decodeURIComponent(null!=(i=E.get("shortcodePresets"))?i:k.join(",")).split(",").filter(Boolean)),re=ne[0],ae=ne[1];(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.W4)("en",{version:m.e});case 2:return t=e.sent,A(b(t.groups)),_(b(t.subgroups)),e.next=7,(0,s.uU)("meta/groups.json",{version:m.e});case 7:n=e.sent,z(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,c.useEffect)((function(){!function(e){f&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}(E),C({filter:F,locale:O,genders:V,group:U,subgroup:M,skinTones:ee,shortcodePresets:re})}),[F,O,V,U,M,ee,re,C]);var oe=u()((function(e){E.set("filter",e),P(e)}),350),ce=(0,c.useCallback)((function(e){e.persist();var t=e.currentTarget.value;T(t),oe(t)}),[oe]),se=(0,c.useCallback)((function(e){var t=e.currentTarget.value;E.set("locale",t),D(t)}),[]),le=(0,c.useCallback)((function(e){var t=Number(e.currentTarget.value);E.set("group",String(t)),E.set("subgroup","-1"),G(t),W(-1)}),[]),ue=(0,c.useCallback)((function(e){var t=Number(e.currentTarget.value);E.set("subgroup",String(t)),W(t)}),[]),ie=(0,c.useCallback)((function(e){var t=e.currentTarget.checked;E.set("genders",String(t)),X(t)}),[]),de=(0,c.useCallback)((function(e){var t=e.currentTarget.checked;E.set("skinTones",String(t)),te(t)}),[]),me=(0,c.useCallback)((function(e){var t=e.currentTarget,n=t.checked,r=t.value;ae((function(e){var t=[].concat(e),a=r;return n&&!t.includes(a)?t.push(a):t=t.filter((function(e){return e!==a})),t.sort(),E.set("shortcodePresets",encodeURIComponent(t.join(","))),t}))}),[]);return c.createElement("div",{className:h},c.createElement("div",{className:"row"},c.createElement("div",{className:"col col--3"},c.createElement("label",{htmlFor:"filter"},"Annotation"),c.createElement("input",{disabled:x,id:"filter",name:"filter",type:"search",value:N,onChange:ce})),c.createElement("div",{className:"col col--3"},c.createElement("label",{htmlFor:"locale"},"Locale"),c.createElement("select",{disabled:x,id:"locale",name:"locale",value:O,onChange:se},Object.entries(p).sort((function(e,t){return e[1].localeCompare(t[1])})).map((function(e){var t=e[0],n=e[1];return c.createElement("option",{key:t,value:t},n," (",t,")")})))),c.createElement("div",{className:"col col--3"},c.createElement("label",{htmlFor:"group"},"Group"),c.createElement("select",{disabled:x||!B||!I,id:"group",name:"group",value:U,onChange:le},c.createElement("option",{value:"-1"},"(none)"),B&&I&&Object.keys(B.groups).map((function(e){return c.createElement("option",{key:e,value:e},d()(I[e]))})))),c.createElement("div",{className:"col col--3"},c.createElement("label",{htmlFor:"subgroup"},"Subgroup"),c.createElement("select",{disabled:x||!B||!B.hierarchy[U]||!q,id:"subgroup",name:"subgroup",value:M,onChange:ue},c.createElement("option",{value:"-1"},"(none)"),B&&q&&(B.hierarchy[U]||[]).map((function(e){return c.createElement("option",{key:e,value:e},d()(q[e]))}))))),c.createElement("br",null),c.createElement("div",{className:"row"},c.createElement("div",{className:"col col--3"},c.createElement("h4",null,"Display"),c.createElement("label",{className:"label--inline",htmlFor:"genders"},c.createElement("input",{checked:V,disabled:x,id:"genders",name:"genders",type:"checkbox",onChange:ie})," ","Genders?"),c.createElement("label",{className:"label--inline",htmlFor:"skinTones"},c.createElement("input",{checked:ee,disabled:x,id:"skinTones",name:"skinTones",type:"checkbox",onChange:de})," ","Skin tones?")),c.createElement("div",{className:"col col-9"},c.createElement("h4",null,"Shortcode presets"),Object.entries(v).map((function(e){var t=e[0],n=e[1];return t.includes("cldr")&&j?null:c.createElement("label",{key:t,className:"label--inline",htmlFor:"preset-"+t},c.createElement("input",{checked:re.includes(t),disabled:x,id:"preset-"+t,name:"presets",type:"checkbox",value:t,onChange:me})," ",n)})))))}},9888:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7378);function a(e){var t=e.preset,n=e.shortcodes;return n?r.createElement(r.Fragment,null,("string"==typeof n?[n]:[].concat(n)).sort().map((function(e){return r.createElement("div",{key:t+"-"+e},":"+e+":")}))):null}},593:function(e,t,n){n.d(t,{e:function(){return r}});var r="latest"},4307:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(7791),a=n(8549),o=n(7135),c=n.n(o),s=n(7378),l=n(5894),u=n(9966),i=n(6101),d=n(9888),m=n(593);function h(e){return e}function f(){var e=(0,s.useState)(!1),t=e[0],n=e[1],o=(0,s.useState)([]),f=o[0],p=o[1],v=(0,s.useState)({}),g=v[0],b=v[1],E=(0,s.useState)([]),k=E[0],y=E[1],x=(0,s.useState)(["emojibase","github","iamcal","joypixels"]),S=x[0],j=x[1],C=(0,s.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(t){var r,a,o,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.locale,a=t.shortcodePresets,n(!0),e.next=4,(0,l.tt)(r,{shortcodes:S,version:m.e});case 4:return o=e.sent,e.next=7,(0,l.JK)(r,"cldr",{version:m.e});case 7:return s=e.sent,e.next=10,Promise.all(a.map((function(e){return(0,l.JK)(r,e,{version:m.e}).catch(h)})));case 10:u=e.sent,p((0,i.$O)(o,t)),b(s),y(u),j(a),n(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[S]);return s.createElement(u.Z,{description:"Table of all shortcodes for every emoji character.",title:"Shortcodes table"},s.createElement("main",{className:"table-container"},s.createElement("h2",null,"Shortcodes table"),s.createElement(i.ZP,{hideCldr:!0,defaultShortcodePresets:S,disabled:t,onChange:C}),s.createElement("div",{className:"table-responsive"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{colSpan:2}),s.createElement("th",null,"CLDR"),S.map((function(e){return s.createElement("th",{key:"header-"+e},i.PG[e])})),s.createElement("th",null))),s.createElement("tbody",null,t&&s.createElement("tr",null,s.createElement("td",{className:"text--center",colSpan:4+S.length},"Loading emojis\u2026")),!t&&s.createElement(s.Fragment,null,s.createElement("tr",null,s.createElement("td",{className:"text--center",colSpan:4+S.length},f.length.toLocaleString()," emojis")),f.map((function(e){var t=function(e){var t="";if(0===e.length)return!1;for(var n,r=(0,a.Z)(e);!(n=r()).done;){var o=n.value,c=Array.isArray(o)?o.sort().join(","):o;if(t){if(t!==c)return!1}else t=c}return!0}(k.map((function(t){return t[e.hexcode]})));return s.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},s.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text),s.createElement("td",null,s.createElement("div",null,e.label),s.createElement("div",{className:"text--muted no-wrap"},e.hexcode)),s.createElement("td",null,s.createElement(d.Z,{preset:"cldr",shortcodes:g[e.hexcode]})),t?s.createElement("td",{colSpan:S.length},s.createElement(d.Z,{preset:S[0],shortcodes:k[0][e.hexcode]})):S.map((function(t,n){return s.createElement("td",{key:e.hexcode+t},s.createElement(d.Z,{preset:t,shortcodes:k[n][e.hexcode]}))})),s.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text))}))))))))}}}]);