(self.webpackChunkxr_b_website=self.webpackChunkxr_b_website||[]).push([[244],{1899:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(4938)),a=n(5893),c=(0,o.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=c},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,l,u,i,s=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),l=document.createRange(),u=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(i),l.selectNodeContents(i),u.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),i&&document.body.removeChild(i),c()}return s}},8315:function(e,t,n){"use strict";var r=n(7294),o=n(1883),a=(n(1720),n(4647));t.Z=e=>{let{activePage:t,open:n}=e;return r.createElement("section",{className:a.Mh},r.createElement("div",{className:a.ny},r.createElement(o.Link,{to:"/decal/"},r.createElement("div",{className:"home"==t?a.bB:a.wc},"Home/Announcements")),r.createElement("div",{className:a.ru},r.createElement(o.Link,{to:"/decal/homework",className:a.TN},r.createElement("div",{className:"homework"==n?a.W3:a.x7},">"),r.createElement("div",{className:"homework"==n?a.bB:a.wc},"Homework")),r.createElement("div",{className:a.u3,style:{display:"homework"==n?"flex":"none"}},r.createElement(o.Link,{to:"/decal/homework/hw1"},r.createElement("div",{className:"hw1"==t?a.bB:a.wc},"Homework 1: The Rube Goldberg Ball Machine")),r.createElement(o.Link,{to:"/decal/homework/hw2"},r.createElement("div",{className:"hw2"==t?a.bB:a.wc},"Homework 2: Music Visualizer")),r.createElement(o.Link,{to:"/decal/homework/hw3"},r.createElement("div",{className:"hw3"==t?a.bB:a.wc},"Homework 3: Fractal Generation")))),r.createElement("div",{className:a.ru},r.createElement(o.Link,{to:"/decal/labs",className:a.TN},r.createElement("div",{className:"labs"==n?a.W3:a.x7},">"),r.createElement("div",{className:"labs"==n?a.bB:a.wc},"Labs")),r.createElement("div",{className:a.u3,style:{display:n.includes("labs")?"flex":"none"}},r.createElement("div",{className:a.ru},r.createElement(o.Link,{to:"/decal/labs/oculus",className:a.TN},r.createElement("div",{className:"oculuslabs"==n?a.W3:a.x7},">"),r.createElement("div",{className:"oculuslabs"==n?a.bB:a.wc},"Oculus Labs")),r.createElement("div",{className:a.u3,style:{display:"oculuslabs"==n?"flex":"none"}},r.createElement(o.Link,{to:"/decal/labs/oculus/lab1"},r.createElement("div",{className:"oculuslab1"==t?a.bB:a.wc},"Oculus Lab 1")),r.createElement(o.Link,{to:"/decal/labs/oculus/lab2"},r.createElement("div",{className:"oculuslab2"==t?a.bB:a.wc},"Oculus Lab 2")))))),r.createElement(o.Link,{to:"/decal/lectures/"},r.createElement("div",{className:"lectures"==t?a.bB:a.wc},"Lectures")),r.createElement(o.Link,{to:"/decal/resources/"},r.createElement("div",{className:"resources"==t?a.bB:a.wc},"Extra resources"))))}},9686:function(e,t,n){"use strict";var r=n(7294),o=n(1883),a=n(1720),c=n(4647);t.Z=e=>{let{activePage:t}=e;const{0:n,1:l}=(0,r.useState)(!1);return r.createElement("section",null,r.createElement("div",{className:c.ny},r.createElement("img",{className:c.jY,src:a.Z,alt:"logo"}),r.createElement(o.Link,{to:"/home/"},r.createElement("div",{className:"home"==t?c.bB:c.wc},"Home")),r.createElement(o.Link,{to:"/about/"},r.createElement("div",{className:"about"==t?c.bB:c.wc},"Who we are")),r.createElement(o.Link,{to:"/projects/"},r.createElement("div",{className:"projects"==t?c.bB:c.wc},"Projects")),r.createElement(o.Link,{to:"/decal/"},r.createElement("div",{className:"decal"==t?c.bB:c.wc},"Decal")),r.createElement("a",{href:"https://discord.com/invite/GvGUUCN",target:"_blank"},r.createElement("div",{className:c.wc},"Discord"))),r.createElement("div",{className:c.JC},r.createElement("div",{className:c.NR},r.createElement("img",{className:c.jY,src:a.Z,alt:"logo"}),r.createElement("div",{className:c.Er,onClick:()=>l(!n)},r.createElement("div",{className:c.ej},r.createElement("h1",null,"...")))),n?r.createElement("div",{className:c.qK},r.createElement(o.Link,{to:"/home/"},r.createElement("div",{className:"home"==t?c.bB:c.wc},"Home")),r.createElement(o.Link,{to:"/about/"},r.createElement("div",{className:"about"==t?c.bB:c.wc},"Who we are")),r.createElement(o.Link,{to:"/projects/"},r.createElement("div",{className:"projects"==t?c.bB:c.wc},"Projects")),r.createElement(o.Link,{to:"/decal/"},r.createElement("div",{className:"decal"==t?c.bB:c.wc},"Decal")),r.createElement("a",{href:"https://discord.com/invite/GvGUUCN",target:"_blank"},r.createElement("div",{className:c.wc},"Discord"))):""))}},1220:function(e,t,n){"use strict";n.d(t,{BZ:function(){return o},Eu:function(){return r},JA:function(){return d},JG:function(){return l},Jb:function(){return i},TU:function(){return c},Vd:function(){return u},Xw:function(){return a},aS:function(){return s},d$:function(){return m}});var r="decal-module--bodyWrapper--7cbfc",o="decal-module--box--08640",a="decal-module--boxLine--6ea90",c="decal-module--code--9b2c6",l="decal-module--copy--cc970",u="decal-module--redLink--36893",i="decal-module--resources--ee376",s="decal-module--textWrapper--f3b49",m="decal-module--toc--fe879",d="decal-module--yellowUnderline--1be03"},4647:function(e,t,n){"use strict";n.d(t,{Er:function(){return b},JC:function(){return d},Mh:function(){return c},NR:function(){return m},TN:function(){return y},W3:function(){return a},bB:function(){return r},ej:function(){return p},jY:function(){return i},ny:function(){return s},qK:function(){return f},ru:function(){return l},u3:function(){return v},wc:function(){return u},x7:function(){return o}});var r="nav-module--active--e2142",o="nav-module--arrow--f97c8",a="nav-module--arrowOpen--0a74b",c="nav-module--decal--6e3af",l="nav-module--group--9c696",u="nav-module--item--0b430",i="nav-module--logo--d13a3",s="nav-module--navBar--cb2fc",m="nav-module--navBarSmall--0bb6d",d="nav-module--navBarSmallWrapper--b56b7",f="nav-module--navList--7fdbd",p="nav-module--smallNavButton--bf652",b="nav-module--smallNavButtonOutline--db7e1",v="nav-module--subLinks--34e84",y="nav-module--title--d190f"},4300:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(n(7294)),a=l(n(640)),c=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,l=f(u);function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(p(e=l.call.apply(l,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,c=n.onCopy,l=n.children,u=n.options,i=o.default.Children.only(l),s=(0,a.default)(r,u);c&&c(r,s),i&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t)})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,c),r=o.default.Children.only(t);return o.default.cloneElement(r,i(i({},n),{},{onClick:this.onClick}))}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.PureComponent);t.CopyToClipboard=y,v(y,"defaultProps",{onCopy:void 0,options:void 0})},594:function(e,t,n){"use strict";var r=n(4300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=b572a22db43b5e6a7224a64a5c73b59d71cd65ad-12fd44915be53dcc3278.js.map