"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6647],{5318:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(a),k=r,N=s["".concat(d,".").concat(k)]||s[k]||m[k]||i;return a?n.createElement(N,l(l({ref:e},p),{},{components:a})):n.createElement(N,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6782:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=a(5773),r=a(808),i=(a(7378),a(5318)),l=["components"],o={title:"Shortcodes"},d=void 0,c={unversionedId:"shortcodes",id:"shortcodes",isDocsHomePage:!1,title:"Shortcodes",description:"Shortcodes are short and succinct words, surrounded by colons, representing emoji (). They're",source:"@site/docs/shortcodes.md",sourceDirName:".",slug:"/shortcodes",permalink:"/docs/shortcodes",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/shortcodes.md",tags:[],version:"current",frontMatter:{title:"Shortcodes"},sidebar:"docs",previous:{title:"Regex patterns",permalink:"/docs/regex"},next:{title:"Emoticons",permalink:"/docs/emoticons"}},p=[{value:"Presets",id:"presets",children:[{value:"<code>cldr</code>",id:"cldr",children:[]},{value:"<code>cldr-native</code>",id:"cldr-native",children:[]},{value:"<code>discord</code>",id:"discord",children:[]},{value:"<code>emojibase</code>",id:"emojibase",children:[]},{value:"<code>emojibase-native</code>",id:"emojibase-native",children:[]},{value:"<code>emojibase-legacy</code>",id:"emojibase-legacy",children:[]},{value:"<code>github</code>",id:"github",children:[]},{value:"<code>iamcal</code>",id:"iamcal",children:[]},{value:"<code>joypixels</code>",id:"joypixels",children:[]},{value:"<code>slack</code>",id:"slack",children:[]}]},{value:"Localization",id:"localization",children:[{value:"Submitting translations",id:"submitting-translations",children:[]}]},{value:"Caveats",id:"caveats",children:[]}],m={toc:p};function s(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shortcodes are short and succinct words, surrounded by colons, representing emoji (",(0,i.kt)("inlineCode",{parentName:"p"},":cat:"),"). They're\nprimarily used within forums, comments, message posts, and basically anywhere with user-to-user\ncommunication. They exist for situations where an emoji keyboard is not present, but emoji\ncharacters should be supported."),(0,i.kt)("p",null,"That being said, shortcodes are not officially supported by Unicode or any standard, and are\nentirely community driven. Because of this, shortcodes (also known as shortnames), may differ\nbetween implementations, websites, or libraries."),(0,i.kt)("p",null,"Emojibase aims to solve this problem by providing shortcode presets. Each preset is a distinct\ncollection of shortcodes that map to emoji hexcodes. They're entirely platform dependent."),(0,i.kt)("h2",{id:"presets"},"Presets"),(0,i.kt)("h3",{id:"cldr"},(0,i.kt)("inlineCode",{parentName:"h3"},"cldr")),(0,i.kt)("p",null,"Localized shortcodes derived from the official Unicode ",(0,i.kt)("a",{parentName:"p",href:"http://cldr.unicode.org/index/downloads/cldr-40"},"CLDR")," annotations. Non-Latin languages\nare transliterated to a Latin character equivalent, but may not be entirely accurate. These are\nbasically slugified variations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," field in the Emojibase emoji object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \ud83d\ude01 beaming face with smiling eyes\n:beaming_face_with_smiling_eyes: // English\n:ni_yatto_warau: // Japanese\n:svetitsya_ot_schastya: // Russian\n")),(0,i.kt)("h3",{id:"cldr-native"},(0,i.kt)("inlineCode",{parentName:"h3"},"cldr-native")),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"#cldr"},(0,i.kt)("inlineCode",{parentName:"a"},"cldr"))," but shortcodes are not transliterated to Latin characters. Furthermore, this\npreset will only include shortcodes that do not contain shortcodes that already exist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cldr"),"\npreset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \ud83d\ude01 beaming face with smiling eyes\n:\ubbf8\uc18c_\uc9d3\ub294_\ub208\uc73c\ub85c_\uc6c3\ub294_\uc5bc\uad74: // Korean\n:\u043e\u0441\u044f\u0439\u043d\u043e_\u0432\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0435_\u043e\u0431\u043b\u0438\u0447\u0447\u044f_\u0439_\u043e\u0447\u0456: // Ukrainian\n")),(0,i.kt)("h3",{id:"discord"},(0,i.kt)("inlineCode",{parentName:"h3"},"discord")),(0,i.kt)("p",null,"An alias for the ",(0,i.kt)("a",{parentName:"p",href:"#joypixels"},(0,i.kt)("inlineCode",{parentName:"a"},"joypixels"))," preset."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This preset may not be accurate as Discord does not provide an official implementation for its\nshortcodes. If you would like to improve this solution, please create an issue!")),(0,i.kt)("h3",{id:"emojibase"},(0,i.kt)("inlineCode",{parentName:"h3"},"emojibase")),(0,i.kt)("p",null,'Emojibase shortcodes that are carefully crafted and maintained in an effort to push forward an\n"official" shortcode standard. It does this by accomplishing the following:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All emoji (including skin tones) will have a shortcode based on their annotation or Unicode name."),(0,i.kt)("li",{parentName:"ul"},"Many emoji will provide shorthand and alternative shortcodes (primarily in regards to smileys and\npeople)."),(0,i.kt)("li",{parentName:"ul"},"Commonly used shortcodes from other presets will be supported for interoperability and backwards\ncompatibility. This does not guarantee 100% compatibility across the board.")),(0,i.kt)("p",null,"With this standard in place, we would also like to provide localized versions in the future. For\nlanguages that are localized, all shortcodes are transliterated to Latin characters."),(0,i.kt)("h3",{id:"emojibase-native"},(0,i.kt)("inlineCode",{parentName:"h3"},"emojibase-native")),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"#emojibase"},(0,i.kt)("inlineCode",{parentName:"a"},"emojibase"))," but shortcodes are ",(0,i.kt)("em",{parentName:"p"},"not")," transliterated to Latin characters.\nFurthermore, this preset will only include shortcodes that do not contain shortcodes that already\nexist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"emojibase")," preset."),(0,i.kt)("h3",{id:"emojibase-legacy"},(0,i.kt)("inlineCode",{parentName:"h3"},"emojibase-legacy")),(0,i.kt)("p",null,"Deprecated Emojibase shortcodes that preferred emotions/feelings for smiley faces, instead of\nliteral terms. This caused discrepencies between other platforms, and often did not align visually."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This preset is no longer maintained but exists for backwards compatibility. It was deprecated\nbased on community feedback.")),(0,i.kt)("h3",{id:"github"},(0,i.kt)("inlineCode",{parentName:"h3"},"github")),(0,i.kt)("p",null,"Official emoji shortcodes for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," platform, powered by the\n",(0,i.kt)("a",{parentName:"p",href:"https://api.github.com/emojis"},"official v3 API"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This preset ",(0,i.kt)("em",{parentName:"p"},"does not")," define shortcodes for skin tone variations.")),(0,i.kt)("h3",{id:"iamcal"},(0,i.kt)("inlineCode",{parentName:"h3"},"iamcal")),(0,i.kt)("p",null,"Emoji shortcodes provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iamcal/emoji-data"},"emoji-data")," library, owned\nand maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iamcal"},"Cal Henderson"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This preset ",(0,i.kt)("em",{parentName:"p"},"does not")," define shortcodes for skin tone variations, nor does it support the latest\nv13 specification.")),(0,i.kt)("h3",{id:"joypixels"},(0,i.kt)("inlineCode",{parentName:"h3"},"joypixels")),(0,i.kt)("p",null,"Emoji shortcodes provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joypixels/emoji-toolkit"},"emoji-toolkit"),"\nlibrary, owned and maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joypixels"},"JoyPixels")," (formerly EmojiOne)."),(0,i.kt)("h3",{id:"slack"},(0,i.kt)("inlineCode",{parentName:"h3"},"slack")),(0,i.kt)("p",null,"An alias for the ",(0,i.kt)("a",{parentName:"p",href:"#iamcal"},(0,i.kt)("inlineCode",{parentName:"a"},"iamcal"))," preset."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This preset may not be accurate as Slack does not provide an official implementation for its\nshortcodes. If you would like to improve this solution, please create an issue!")),(0,i.kt)("h2",{id:"localization"},"Localization"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Locale"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"cldr")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"cldr-native")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"emojibase")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"emojibase-legacy")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"github")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"iamcal")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"joypixels")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chinese (zh)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2733\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chinese, Trad. (zh-hant)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Danish (da)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dutch (nl)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"English (en)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"English, GB (en-gb)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Estonian (et)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Finnish (fi)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"French (fr)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"German (de)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hungarian (hu)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Italian (it)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Japanese (ja)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2733\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Korean (ko)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lithuanian (lt)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Malay (ms)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Norwegian (nb)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polish (pl)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Portuguese (pt)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Russian (ru)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2733\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spanish (es)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spanish, Mexico (es-mx)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Swedish (sv)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Thai (th)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ukrainian (uk)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2734\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 Fully translated and released"),(0,i.kt)("li",{parentName:"ul"},"\u2733\ufe0f Partially translated and released"),(0,i.kt)("li",{parentName:"ul"},"\u2734\ufe0f In progress but not released")),(0,i.kt)("h3",{id:"submitting-translations"},"Submitting translations"),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("p",null,"Some caveats to be aware of when using shortcodes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shortcodes are non-standard and the names/terminology will differ between presets."),(0,i.kt)("li",{parentName:"ul"},"Some emojis may be missing shortcodes depending on the preset."),(0,i.kt)("li",{parentName:"ul"},"There may be duplicate and/or conflicting shortcodes when using multiple presets."),(0,i.kt)("li",{parentName:"ul"},"Presets may not provide shortcodes for the latest emoji/Unicode specifications.")))}s.isMDXComponent=!0}}]);