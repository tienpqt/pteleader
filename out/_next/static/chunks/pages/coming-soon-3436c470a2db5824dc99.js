_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,o){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),r=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(r,e.href,!0),n=o(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(r,e.as):i||a}}),[r,e.href,e.as]),d=f.href,m=f.as,p=e.children,v=e.replace,b=e.shallow,y=e.scroll,h=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=a.Children.only(p),w=g&&"object"===typeof g&&g.ref,N=(0,u.useIntersection)({rootMargin:"200px"}),O=o(N,2),_=O[0],j=O[1],k=a.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);(0,a.useEffect)((function(){var e=j&&t&&(0,c.isLocalURL)(d),o="undefined"!==typeof h?h:n&&n.locale,r=s[d+"%"+m+(o?"%"+o:"")];e&&!r&&l(n,d,m,{locale:o})}),[m,d,j,h,t,n]);var E={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,m,v,b,y,h)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,m,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof h?h:n&&n.locale,S=(0,c.getDomainLocale)(m,M,n&&n.locales,n&&n.domainLocales);E.href=S||(0,c.addBasePath)((0,c.addLocale)(m,M,n&&n.defaultLocale))}return a.default.cloneElement(g,E)};t.default=f},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},grO0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var r=n("JX7q");function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(r.a)(e):t}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},vNVm:function(e,t,n){"use strict";var o=n("zoAU"),r=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,r=(0,a.useRef)(),s=(0,a.useState)(!1),l=o(s,2),f=l[0],d=l[1],m=(0,a.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||f||e&&e.tagName&&(r.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,c=o.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[m,f]};var a=n("q1tI"),c=r(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))},"w/X4":function(e,t,n){"use strict";n.r(t);var o=n("1OyB"),r=n("vuIU"),a=n("JX7q"),c=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),l=n("q1tI"),f=n.n(l),d=n("YFqc"),m=n.n(d),p=f.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(i.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=v(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),Object(s.a)(Object(a.a)(e),"state",{days:"",hours:"",minutes:"",seconds:""}),Object(s.a)(Object(a.a)(e),"commingSoonTime",(function(){var t=new Date("August 23, 2022 17:00:00 PDT"),n=Date.parse(t)/1e3,o=new Date,r=n-Date.parse(o)/1e3,a=Math.floor(r/86400),c=Math.floor((r-86400*a)/3600),i=Math.floor((r-86400*a-3600*c)/60),u=Math.floor(r-86400*a-3600*c-60*i);c<"10"&&(c="0"+c),i<"10"&&(i="0"+i),u<"10"&&(u="0"+u),e.setState({days:a,hours:c,minutes:i,seconds:u})})),Object(s.a)(Object(a.a)(e),"onSubmit",(function(e){e.preventDefault()})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return p("div",{className:"coming-soon-area"},p("div",{className:"container-fluid p-0"},p("div",{className:"row m-0"},p("div",{className:"col-lg-6 col-md-12 p-0"},p("div",{className:"coming-soon-time"},p("img",{src:"/images/coming-soon-bg.jpg",alt:"image"}),p("div",{id:"timer"},p("div",{id:"days"},this.state.days," ",p("span",null,"Days")),p("div",{id:"hours"},this.state.hours," ",p("span",null,"Hours")),p("div",{id:"minutes"},this.state.minutes," ",p("span",null,"Minutes")),p("div",{id:"seconds"},this.state.seconds," ",p("span",null,"Seconds"))))),p("div",{className:"col-lg-6 col-md-12 p-0"},p("div",{className:"coming-soon-content"},p("div",{className:"d-table"},p("div",{className:"d-table-cell"},p("div",{className:"logo"},p(m.a,{href:"/"},p("a",null,p("img",{src:"/images/black-logo.png",alt:"logo"})))),p("h3",null,"Our website is Coming Soon, follow us for update now!"),p("form",null,p("div",{className:"form-group"},p("input",{type:"text",className:"form-control",name:"name",id:"name",placeholder:"Your Name"})),p("div",{className:"form-group"},p("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email Address"})),p("button",{type:"submit",className:"btn btn-primary"},"Subscribe"),p("p",null,"And don\u2019t worry, we hate spam too! You can unsubscribe at anytime.")),p("div",{className:"social"},p("ul",null,p("li",null,p(m.a,{href:"#"},p("a",{target:"_blank",className:"twitter"},p("i",{className:"fab fa-twitter"})))),p("li",null,p(m.a,{href:"#"},p("a",{target:"_blank",className:"youtube"},p("i",{className:"fab fa-youtube"})))),p("li",null,p(m.a,{href:"#"},p("a",{target:"_blank",className:"facebook"},p("i",{className:"fab fa-facebook-f"})))),p("li",null,p(m.a,{href:"#"},p("a",{target:"_blank",className:"linkedin"},p("i",{className:"fab fa-linkedin-in"})))),p("li",null,p(m.a,{href:"#"},p("a",{target:"_blank",className:"instagram"},p("i",{className:"fab fa-instagram"})))))))))))))}}]),n}(l.Component);t.default=b}},[["grO0",0,2,1]]]);