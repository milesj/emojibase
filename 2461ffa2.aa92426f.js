(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(75)),i=n(81),c=n(82),l={title:"API"},b={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"What kind of emoji database would this be without a few helper functions for easily using and",source:"@site/docs/api.mdx",permalink:"/docs/api",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/api.mdx",sidebar:"docs",previous:{title:"Emoticons",permalink:"/docs/emoticons"},next:{title:"TypeScript support",permalink:"/docs/typescript"}},s=[{value:"<code>fetchFromCDN</code>",id:"fetchfromcdn",children:[]},{value:"<code>flattenEmojiData</code>",id:"flattenemojidata",children:[]},{value:"<code>fromCodepointToUnicode</code>",id:"fromcodepointtounicode",children:[]},{value:"<code>fromHexcodeToCodepoint</code>",id:"fromhexcodetocodepoint",children:[]},{value:"<code>fromUnicodeToHexcode</code>",id:"fromunicodetohexcode",children:[]},{value:"<code>generateEmoticonPermutations</code>",id:"generateemoticonpermutations",children:[]},{value:"<code>stripHexcode</code>",id:"striphexcode",children:[]}],u={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"What kind of emoji database would this be without a few helper functions for easily using and\nworking with emoji characters? A bad one, and thus, a handful of functions can be found in the\n",Object(r.b)("inlineCode",{parentName:"p"},"emojibase")," package."),Object(r.b)(i.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add emojibase\n"))),Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install emojibase\n")))),Object(r.b)("h2",{id:"fetchfromcdn"},Object(r.b)("inlineCode",{parentName:"h2"},"fetchFromCDN")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"fetchFromCDN<T",">","(path: string, version?: string, options?: FetchFromCDNOptions): Promise<T[]",">")),Object(r.b)("p",null,"This function will fetch ",Object(r.b)("inlineCode",{parentName:"p"},"emojibase-data")," JSON files from our\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/emojibase-data@latest/"}),"CDN"),", parse them, and return an array of emoji\nobjects. It requires a file path relative to the ",Object(r.b)("inlineCode",{parentName:"p"},"emojibase-data")," package as the 1st argument, the\nEmojibase release version as the 2nd argument (defaults to the latest), and an object of options to\npass to ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," as the 3rd argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { fetchFromCDN, flattenEmojiData } from 'emojibase';\n\nfetchFromCDN('ja/compact.json', '2.1.3').then(flattenEmojiData);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Only JSON datasets can be fetched from the CDN.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Successfully fetched data will be cached in session storage. If ",Object(r.b)("inlineCode",{parentName:"p"},"local")," is passed as an option,\nlocal storage will be used instead. Be sure to invalidate manually if used!")),Object(r.b)("h2",{id:"flattenemojidata"},Object(r.b)("inlineCode",{parentName:"h2"},"flattenEmojiData")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"flattenEmojiData(data: Emoji[]): Emoji[]")),Object(r.b)("p",null,"By default, emoji ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/datasets#data-structure"}),"skin modifications are nested")," under the base\nneutral skin tone emoji. To flatten the data into a single dimension array, use the\n",Object(r.b)("inlineCode",{parentName:"p"},"flattenEmojiData")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { flattenEmojiData } from 'emojibase';\n\nflattenEmojiData([\n  {\n    hexcode: '1F3CB-FE0F-200D-2642-FE0F',\n    // ...\n    skins: [\n      {\n        hexcode: '1F3CB-1F3FB-200D-2642-FE0F',\n        // ...\n      },\n      // ...\n    ],\n  },\n]);\n\n/*\n[\n  {\n    hexcode: '1F3CB-FE0F-200D-2642-FE0F',\n    // ...\n  },\n  {\n    hexcode: '1F3CB-1F3FB-200D-2642-FE0F',\n    // ...\n  },\n]\n*/\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Tags from the parent emoji will be passed down to the skin modifications.")),Object(r.b)("h2",{id:"fromcodepointtounicode"},Object(r.b)("inlineCode",{parentName:"h2"},"fromCodepointToUnicode")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"fromCodepointToUnicode(codepoint: CodePoint[]): Unicode")),Object(r.b)("p",null,"This function will convert an array of numerical codepoints to a literal emoji Unicode character."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { fromCodepointToUnicode } from 'emojibase';\n\nfromCodepointToUnicode([128104, 8205, 128105, 8205, 128103, 8205, 128102]); // \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\n")),Object(r.b)("h2",{id:"fromhexcodetocodepoint"},Object(r.b)("inlineCode",{parentName:"h2"},"fromHexcodeToCodepoint")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"fromHexcodeToCodepoint(code: Hexcode, joiner?: string): CodePoint[]")),Object(r.b)("p",null,"This function will convert a hexadecimal codepoint to an array of numerical codepoints. By default,\nit will split the hexcode using a dash, but can be customized with the 2nd argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { fromHexcodeToCodepoint } from 'emojibase';\n\nfromHexcodeToCodepoint('270A-1F3FC'); // [9994, 127996]\nfromHexcodeToCodepoint('270A 1F3FC', ' '); // [9994, 127996]\n")),Object(r.b)("h2",{id:"fromunicodetohexcode"},Object(r.b)("inlineCode",{parentName:"h2"},"fromUnicodeToHexcode")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"fromUnicodeToHexcode(unicode: Unicode, strip?: boolean): Hexcode")),Object(r.b)("p",null,"This function will convert a literal emoji Unicode character into a dash separated hexadecimal\ncodepoint. Unless ",Object(r.b)("inlineCode",{parentName:"p"},"false")," is passed as the 2nd argument, zero width joiner's and variation selectors\nare removed."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { fromUnicodeToHexcode } from 'emojibase';\n\nfromUnicodeToHexcode('\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66'); // 1F468-1F469-1F467-1F466\nfromUnicodeToHexcode('\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', false); // 1F468-200D-1F469-200D-1F467-200D-1F466\n")),Object(r.b)("h2",{id:"generateemoticonpermutations"},Object(r.b)("inlineCode",{parentName:"h2"},"generateEmoticonPermutations")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"generateEmoticonPermutations(emoticon: Emoticon, options?: PermutationOptions): Emoticon[]")),Object(r.b)("p",null,"This function will generate multiple permutations of a base emoticon character. The following\npermutations will occur:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},")")," mouth will be replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"]")," and ",Object(r.b)("inlineCode",{parentName:"li"},"}"),". The same applies to sad/frowning mouths."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/")," mouth will be replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"\\"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},":")," eyes will be replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"="),"."),Object(r.b)("li",{parentName:"ul"},"Supports a ",Object(r.b)("inlineCode",{parentName:"li"},"-")," nose, by injecting between the eyes and mouth."),Object(r.b)("li",{parentName:"ul"},"Supports both uppercase and lowercase variants.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { generateEmoticonPermutations } from 'emojibase';\n\ngenerateEmoticonPermutations(':)'); // =-), =-}, :-], =-], :-}, :-), =}, =], =), :}, :], :)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The base emoticon must follow a set of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/emoticons"}),"naming guidelines")," to work properly.")),Object(r.b)("p",null,"Furthermore, this function accepts an options object as the 2nd argument, as a means to customize\nthe output."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isFace")," (bool) - Toggles face permutations (mouth and eye variants). Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"withNose")," (bool) - Toggles nose inclusion. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"generateEmoticonPermutations(':)', { withNose: false }); // =}, =], =), :}, :], :)\ngenerateEmoticonPermutations('\\\\m/', { isFace: false }); // \\m/, \\M/\n")),Object(r.b)("h2",{id:"striphexcode"},Object(r.b)("inlineCode",{parentName:"h2"},"stripHexcode")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"stripHexcode(hexcode: Hexcode): Hexcode")),Object(r.b)("p",null,"This function will strip zero width joiners (",Object(r.b)("inlineCode",{parentName:"p"},"200D"),") and variation selectors (",Object(r.b)("inlineCode",{parentName:"p"},"FE0E"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FE0F"),") from a\nhexadecimal codepoint."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { stripHexcode } from 'emojibase';\n\nstripHexcode('1F468-200D-2695-FE0F'); // 1F468-2695\n")))}d.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},77:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},78:function(e,t,n){"use strict";var o=n(0),a=n(77);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},81:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(78),i=n(76),c=n(47),l=n.n(c),b=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,p=Object(r.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,j=Object(o.useState)(c),O=j[0],h=j[1],g=Object(o.useState)(!1),N=g[0],y=g[1];if(null!=d){var v=m[d];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&h(v)}var C=function(e){h(e),null!=d&&f(d,e)},w=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},F=function(){y(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",F)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),x(e)},onFocus:function(){return C(t)},onClick:function(){C(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},82:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);