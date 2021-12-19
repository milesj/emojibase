"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7256],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6627:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],s={title:"Translations"},l=void 0,c={unversionedId:"translations",id:"translations",title:"Translations",description:"Emojibase aims to provide full translations for all of its supported locales. However, this is a",source:"@site/docs/translations.md",sourceDirName:".",slug:"/translations",permalink:"/docs/translations",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/translations.md",tags:[],version:"current",frontMatter:{title:"Translations"},sidebar:"docs",previous:{title:"Emoticons",permalink:"/docs/emoticons"},next:{title:"TypeScript support",permalink:"/docs/typescript"}},p=[{value:"Messages",id:"messages",children:[],level:2},{value:"Shortcodes",id:"shortcodes",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Emojibase aims to provide full translations for all of its supported locales. However, this is a\nlofty goal that has not been met yet, so any contributions or localization suggestions are entirely\nwelcome!"),(0,a.kt)("p",null,"Translations are localized using\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html"},"GNU gettext"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/milesj/emojibase/tree/master/po"},".po files")," and can be modified using a po\neditor like ",(0,a.kt)("a",{parentName:"p",href:"https://poedit.net/"},"Poedit")," (please do not edit these files manually). Once you have\nmade your changes, please commit the changes and submit a pull request."),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"messages.po")," file contains localized strings for emoji groups, sub-groups, keywords, and any\nother emoji related messages."),(0,a.kt)("p",null,"Each message breaks down to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#"),": When a group/sub-group, is their unique order and key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgctxt"),": Contextul information. Whether an emoji group, sub-group, or annotation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgid"),": English message to translate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgstr"),": Localized translation.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# 1: people-body\nmsgctxt "EMOJI GROUP: people-body"\nmsgid "people & body"\nmsgstr "Menschen & K\xf6rper"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At this point in time, most ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.po")," files were automatically translated using a service and may\nnot be 100% accurate. Contributions are welcome!")),(0,a.kt)("h2",{id:"shortcodes"},"Shortcodes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"shortcodes.po")," file contains ",(0,a.kt)("a",{parentName:"p",href:"/docs/shortcodes#emojibase"},"Emojibase preset")," shortcodes for every\nnon-modification emoji character. Seeing as how these messages are shortcodes, the translation\nshould match the ",(0,a.kt)("inlineCode",{parentName:"p"},"msgid")," as close as possible, including using underscores (no spaces), and in all\nlowercase."),(0,a.kt)("p",null,"Each message breaks down to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#"),": The emoji hexcode (without zero-width joiners and variation selectors)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgctxt"),": Contextul information. The emoji character and official Unicode annotation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgid"),": English message to translate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgstr"),": Localized translation.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# 1F40D\nmsgctxt "EMOJI: \ud83d\udc0d snake"\nmsgid "snake"\nmsgstr "\u0437\u043c\u0435\u044f"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Most locales have not translated their shortcodes yet. Contributions are welcome!")))}m.isMDXComponent=!0}}]);