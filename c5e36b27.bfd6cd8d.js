(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(99),r=a.n(n),l=a(100),c=a(0),o=a.n(c),s=a(131),i=a(81),u=a(89),m=a(90);function d(){var e=Object(c.useState)([]),t=e[0],a=e[1],n=Object(c.useState)(!1),d=n[0],b=n[1],h=Object(c.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(t){var n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.locale,l=t.shortcodePresets,!d){e.next=3;break}return e.abrupt("return");case 3:return b(!0),e.next=6,Object(s.a)(n,{shortcodes:l.map((function(e){return e.includes("cldr")?e:"en/"+e})),version:"next"});case 6:c=e.sent,a(Object(m.c)(c,t)),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return o.a.createElement(i.a,{title:"Emoji table",description:"Table of all emojis across any supported locale."},o.a.createElement("main",{className:"table-container"},o.a.createElement("h2",null,"Emoji table"),o.a.createElement(m.b,{disabled:d,onChange:h}),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,"Annotation"),o.a.createElement("th",null,"Shortcodes"),o.a.createElement("th",null,"Tags"))),o.a.createElement("tbody",null,d&&o.a.createElement("tr",null,o.a.createElement("td",{colSpan:4,className:"text--center"},"Loading emojis\u2026")),!d&&o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:4,className:"text--center"},t.length.toLocaleString()," emojis")),t.map((function(e){var t;return o.a.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},o.a.createElement("td",{className:"text--center emoji--large"},e.emoji||e.text),o.a.createElement("td",null,e.annotation,e.emoticon&&o.a.createElement("span",{className:"text--muted"}," ",e.emoticon)),o.a.createElement("td",null,o.a.createElement(u.a,{preset:"emojibase",shortcodes:e.shortcodes})),o.a.createElement("td",null,null===(t=e.tags)||void 0===t?void 0:t.join(", ")))}))))))))}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l(e){var t=e.preset,a=e.shortcodes;return a&&0!==a.length?r.a.createElement(r.a.Fragment,null,(Array.isArray(a)?a:[a]).sort().map((function(e){return r.a.createElement("div",{key:t+"-"+e},":"+e+":")}))):null}},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return p}));a(101);var n=a(0),r=a.n(n),l=a(106),c=a(102),o=a.n(c),s=a(48),i=a.n(s),u="undefined"!=typeof location,m={da:"Danish",de:"German","en-gb":"English, Great Britain",en:"English","es-mx":"Spanish, Mexico",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",ms:"Malay",nb:"Norwegian, Bokm\xe5l",nl:"Dutch",pl:"Polish",pt:"Portuguese",ru:"Russian",sv:"Swedish",th:"Thai",uk:"Ukrainian","zh-hant":"Chinese, Traditional",zh:"Chinese"},d={cldr:"CLDR","cldr-native":"CLDR (native)",emojibase:"Emojibase","emojibase-legacy":"Emojibase (legacy)",github:"GitHub",iamcal:"IamCal (Slack)",joypixels:"JoyPixels (Discord)"};function b(e,t){var a=t.filter,n=t.genders,r=t.group,l=t.subgroup,c=t.skinTones,o=[];return e.forEach((function(e){if((n||void 0===e.gender)&&!(r>=0&&e.group!==r||l>=0&&e.subgroup!==l)){if(a){var t,s,i=e.annotation.toLocaleLowerCase().includes(a),u=null===(t=e.shortcodes)||void 0===t?void 0:t.some((function(e){return e.toLocaleLowerCase().includes(a)})),m=null===(s=e.tags)||void 0===s?void 0:s.some((function(e){return e.toLocaleLowerCase().includes(a)}));if(!i&&!u&&!m)return}o.push(e),c&&e.skins&&o.push.apply(o,e.skins)}})),o.sort((function(e,t){return(e.order||1e4)-(t.order||1e4)})),o}var h=new URLSearchParams(u?location.search:"");function p(e){var t,a,c,s,b,p=e.defaultShortcodePresets,g=void 0===p?["emojibase"]:p,v=e.disabled,E=void 0!==v&&v,f=e.hideCldr,j=void 0!==f&&f,k=e.onChange,S=Object(n.useState)(null!==(t=h.get("filter"))&&void 0!==t?t:""),C=S[0],y=S[1],O=Object(n.useState)(C),N=O[0],x=O[1],w=Object(n.useState)(null!==(a=h.get("locale"))&&void 0!==a?a:"en"),T=w[0],L=w[1],F=Object(n.useState)(Number(null!==(c=h.get("group"))&&void 0!==c?c:-1)),P=F[0],D=F[1],R=Object(n.useState)(Number(null!==(s=h.get("subgroup"))&&void 0!==s?s:-1)),A=R[0],G=R[1],I=Object(n.useState)("true"===h.get("genders")),J=I[0],U=I[1],B=Object(n.useState)("true"===h.get("skinTones")),z=B[0],H=B[1],M=Object(n.useState)(decodeURIComponent(null!==(b=h.get("shortcodePresets"))&&void 0!==b?b:g.join(",")).split(",").filter(Boolean)),K=M[0],q=M[1];Object(n.useEffect)((function(){!function(e){u&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}(h),k({filter:N,locale:T,genders:J,group:P,subgroup:A,skinTones:z,shortcodePresets:K})}),[N,T,J,P,A,z,K]);var Q=o()((function(e){h.set("filter",e),x(e)}),350),V=Object(n.useCallback)((function(e){e.persist();var t=e.currentTarget.value;y(t),Q(t)}),[]),W=Object(n.useCallback)((function(e){var t=e.currentTarget.value;h.set("locale",t),L(t)}),[]),X=Object(n.useCallback)((function(e){var t=Number(e.currentTarget.value);h.set("group",String(t)),h.set("subgroup","-1"),D(t),G(-1)}),[]),Y=Object(n.useCallback)((function(e){var t=Number(e.currentTarget.value);h.set("subgroup",String(t)),G(t)}),[]),Z=Object(n.useCallback)((function(e){var t=e.currentTarget.checked;h.set("genders",String(t)),U(t)}),[]),$=Object(n.useCallback)((function(e){var t=e.currentTarget.checked;h.set("skinTones",String(t)),H(t)}),[]),_=Object(n.useCallback)((function(e){var t=e.currentTarget,a=t.checked,n=t.value;q((function(e){var t=new Set(e);a?t.add(n):t.delete(n);var r=Array.from(t).sort();return h.set("shortcodePresets",encodeURIComponent(r.join(","))),r}))}),[]);return r.a.createElement("div",{className:i.a.browserFilters},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"filter"},"Annotation"),r.a.createElement("input",{type:"search",id:"filter",name:"filter",value:C,onChange:V,disabled:E})),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"locale"},"Locale"),r.a.createElement("select",{id:"locale",name:"locale",value:T,onChange:W,disabled:E},Object.entries(m).sort((function(e,t){return e[1].localeCompare(t[1])})).map((function(e){var t=e[0],a=e[1];return r.a.createElement("option",{key:t,value:t},a," (",t,")")})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"group"},"Group"),r.a.createElement("select",{id:"group",name:"group",value:P,onChange:X,disabled:E},r.a.createElement("option",{value:"-1"},"(none)"),Object.entries(l.groups).map((function(e){var t=e[0],a=e[1];return r.a.createElement("option",{key:t,value:t},a)})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"subgroup"},"Subgroup"),r.a.createElement("select",{id:"subgroup",name:"subgroup",value:A,onChange:Y,disabled:E||!l.hierarchy[P]},r.a.createElement("option",{value:"-1"},"(none)"),(l.hierarchy[P]||[]).map((function(e){return r.a.createElement("option",{key:e,value:e},l.subgroups[e])}))))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("h4",null,"Display"),r.a.createElement("label",{htmlFor:"genders",className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"genders",name:"genders",checked:J,onChange:Z,disabled:E})," ","Genders?"),r.a.createElement("label",{htmlFor:"skinTones",className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"skinTones",name:"skinTones",checked:z,onChange:$,disabled:E})," ","Skin tones?")),r.a.createElement("div",{className:"col col-9"},r.a.createElement("h4",null,"Shortcode presets"),Object.entries(d).map((function(e){var t=e[0],a=e[1];return t.includes("cldr")&&j?null:r.a.createElement("label",{key:t,htmlFor:"preset-"+t,className:"label--inline"},r.a.createElement("input",{type:"checkbox",id:"preset-"+t,name:"presets",value:t,checked:K.includes(t),onChange:_,disabled:E})," ",a)})))))}}}]);