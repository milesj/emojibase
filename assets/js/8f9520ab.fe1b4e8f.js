"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[450,893,514],{2214:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var a=n(7378),r=n(7140),i=n(1123),l=n(5484),o=n(3149),c=n(5161),d=n(5611),s=n(2095),u=n(6938),m=n(9213),b=n(9169),p="backToTopButton_iEvu",f="backToTopButtonShow_DO8w";function v(){var e=(0,b.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,p,t&&f),type:"button",onClick:n})}var h=n(6903),E=n(5331),g=n(8357),k=n(624),C=n(898),_=n(5773);function I(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var S="collapseSidebarButton_oTwn",N="collapseSidebarButtonIcon_pMEX";function y(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(I,{className:N}))}var Z=n(10),x=n(3457),T=n(808),w=n(6666),A=n(8215),L=n(376),M=n(8862),P=n(1884),B=n(6457),F=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){var t=e.item,n=e.onItemClick,i=e.activePath,o=e.level,d=e.index,s=(0,T.Z)(e,F),u=t.items,m=t.label,b=t.collapsible,p=t.className,f=t.href,v=(0,k.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,B.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,i),g=(0,M.Mg)(f,i),C=(0,L.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,N=(0,w.f)(),y=N.expandedItem,Z=N.setExpandedItem,x=function(e){void 0===e&&(e=!I),Z(e?null:d),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,i=(0,A.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&r(!1)}),[t,i,n,r])}({isActive:E,collapsed:I,updateCollapsed:x}),(0,a.useEffect)((function(){b&&null!=y&&y!==d&&v&&S(!0)}),[b,y,d,S,v]),a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(P.default,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),f?x(!1):(e.preventDefault(),x())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=h?h:"#":h},s),m),f&&b&&a.createElement(H,{categoryLabel:m,onClick:function(e){e.preventDefault(),x()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(q,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:i,level:o+1})))}var O=n(5626),R=n(6125),j="menuExternalLink_BiEj",W=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,n=e.onItemClick,i=e.activePath,o=e.level,d=(e.index,(0,T.Z)(e,W)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,i),f=(0,O.Z)(s);return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(P.default,(0,_.Z)({className:(0,r.Z)("menu__link",!f&&j,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},f&&{onClick:n?function(){return n(t)}:void 0},d),u,!f&&a.createElement(R.Z,null)))}var Y="menuHtmlItem_OniL";function z(e){var t=e.item,n=e.level,i=e.index,o=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),c&&[Y,"menu__list-item"],d),key:i,dangerouslySetInnerHTML:{__html:o}})}var U=["item"];function G(e){var t=e.item,n=(0,T.Z)(e,U);switch(t.type){case"category":return a.createElement(D,(0,_.Z)({item:t},n));case"html":return a.createElement(z,(0,_.Z)({item:t},n));default:return a.createElement(V,(0,_.Z)({item:t},n))}}var K=["items"];function J(e){var t=e.items,n=(0,T.Z)(e,K);return a.createElement(w.D,null,t.map((function(e,t){return a.createElement(G,(0,_.Z)({key:t,item:e,index:t},n))})))}var q=(0,a.memo)(J),Q="menu_jmj1",X="menuWithAnnouncementBar_YufC";function $(e){var t=e.path,n=e.sidebar,i=e.className,o=function(){var e=(0,Z.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,x.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",Q,o&&X,i)},a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}var ee="sidebar_CUen",te="sidebarWithHideableNavbar_w4KB",ne="sidebarHidden_k6VE",ae="sidebarLogo_CYvI";function re(e){var t=e.path,n=e.sidebar,i=e.onCollapse,l=e.isHidden,o=(0,k.L)(),c=o.navbar.hideOnScroll,d=o.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(ee,c&&te,l&&ne)},c&&a.createElement(C.Z,{tabIndex:-1,className:ae}),a.createElement($,{path:t,sidebar:n}),d&&a.createElement(y,{onClick:i}))}var ie=a.memo(re),le=n(3471),oe=n(5536),ce=function(e){var t=e.sidebar,n=e.path,i=(0,oe.e)();return a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1}))};function de(e){return a.createElement(le.Zo,{component:ce,props:e})}var se=a.memo(de);function ue(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ie,e),r&&a.createElement(se,e))}var me="expandButton_YOoA",be="expandButtonIcon_GZLG";function pe(e){var t=e.toggleSidebar;return a.createElement("div",{className:me,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:be}))}var fe={docSidebarContainer:"docSidebarContainer_y0RQ",docSidebarContainerHidden:"docSidebarContainerHidden_uArb",sidebarViewport:"sidebarViewport_EJ1r"};function ve(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],u=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,h.n)()&&s(!0),i((function(e){return!e}))}),[i,d]);return a.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,fe.docSidebarContainer,n&&fe.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe.docSidebarContainer)&&n&&s(!0)}},a.createElement(ve,null,a.createElement("div",{className:(0,r.Z)(fe.sidebarViewport,d&&fe.sidebarViewportHidden)},a.createElement(ue,{sidebar:t,path:o,onCollapse:u,isHidden:d}),d&&a.createElement(pe,{toggleSidebar:u}))))}var Ee={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function ge(e){var t=e.hiddenSidebarContainer,n=e.children,i=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(Ee.docMainContainer,(t||!i)&&Ee.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},n))}var ke="docPage_KLoz",Ce="docsWrapper_ct1J";function _e(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),i=r[0],l=r[1];return a.createElement(u.Z,{wrapperClassName:Ce},a.createElement(v,null),a.createElement("div",{className:ke},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:l}),a.createElement(ge,{hiddenSidebarContainer:i},t)))}var Ie=n(3893),Se=n(505);function Ne(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Se.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(i.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ye(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Ie.default,null);var o=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ne,e),a.createElement(i.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:u,items:m},a.createElement(_e,null,o)))))}},3893:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7378),r=n(9213),i=n(1123),l=n(6938);function o(){return a.createElement(a.Fragment,null,a.createElement(i.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6666:function(e,t,n){n.d(t,{D:function(){return o},f:function(){return c}});var a=n(7378),r=n(8215),i=Symbol("EmptyContext"),l=a.createContext(i);function o(e){var t=e.children,n=(0,a.useState)(null),r=n[0],i=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:i}}),[r]);return a.createElement(l.Provider,{value:o},t)}function c(){var e=(0,a.useContext)(l);if(e===i)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},9169:function(e,t,n){n.d(t,{a:function(){return l}});var a=n(7378),r=n(3457),i=n(4993);function l(e){var t=e.threshold,n=(0,a.useState)(!1),l=n[0],o=n[1],c=(0,a.useRef)(!1),d=(0,r.Ct)(),s=d.startScroll,u=d.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(u(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,i.S)((function(e){e.location.hash&&(c.current=!0,o(!1))})),{shown:l,scrollToTop:function(){return s(0)}}}},9746:function(e,t,n){var a=n(7378).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},6723:function(e,t,n){var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(4675),n(3335);var i=n(7378),l=n(2214),o=n(9746),c=function(e){return e&&e.__esModule?e:{default:e}},d=c(i),s=c(l);function u(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],i=a[1];if("id"===r){var l="type"in e;(!l||l&&"reference"!==e.type)&&(t[Number(i)]=e,n&&(e.parentId=n.id))}else Array.isArray(i)?i.forEach((function(n){u(n)&&m(n,t,e)})):u(i)&&m(i,t,e)})),t}function b(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,l=r(e,a),c=i.useMemo((function(){return{options:t,reflections:b(n)}}),[t,n]);return d.default.createElement(o.ApiDataContext.Provider,{value:c},d.default.createElement("div",{className:"apiPage"},d.default.createElement(s.default,l)))}},4675:function(e,t,n){n.r(t)},3335:function(e,t,n){n.r(t)}}]);