_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"Fv2/":function(a,e,s){"use strict";var i=s("1OyB"),l=s("vuIU"),t=s("JX7q"),c=s("Ji7U"),n=s("md7G"),r=s("foSv"),o=s("rePB"),m=s("q1tI"),v=s.n(m),d=s("0Yqi"),u=v.a.createElement;function N(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,i=Object(r.a)(a);if(e){var l=Object(r.a)(this).constructor;s=Reflect.construct(i,arguments,l)}else s=i.apply(this,arguments);return Object(n.a)(this,s)}}var f=function(a){Object(c.a)(s,a);var e=N(s);function s(){var a;Object(i.a)(this,s);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return a=e.call.apply(e,[this].concat(c)),Object(o.a)(Object(t.a)(a),"state",{searchForm:!1}),Object(o.a)(Object(t.a)(a),"handleSearchForm",(function(){a.setState((function(a){return{searchForm:!a.searchForm}}))})),Object(o.a)(Object(t.a)(a),"_isMounted",!1),Object(o.a)(Object(t.a)(a),"state",{display:!1,collapsed:!0}),Object(o.a)(Object(t.a)(a),"toggleNavbar",(function(){a.setState({collapsed:!a.state.collapsed})})),a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var a=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?a.classList.add("is-sticky"):a.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var a=this.state.collapsed,e=a?"collapse navbar-collapse":"collapse navbar-collapse show",s=a?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return u(v.a.Fragment,null,u("div",{id:"navbar",className:"navbar-area"},u("div",{className:"main-nav"},u("div",{className:"container"},u("nav",{className:"navbar navbar-expand-md navbar-light"},u(d.a,{href:"/"},u("a",{className:"navbar-brand"},u("img",{src:"/images/white-logo.png",className:"main-logo",alt:"logo"}),u("img",{src:"/images/black-logo.png",className:"optional-logo",alt:"logo"}))),u("button",{onClick:this.toggleNavbar,className:s,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},u("span",{className:"icon-bar top-bar"}),u("span",{className:"icon-bar middle-bar"}),u("span",{className:"icon-bar bottom-bar"})),u("div",{className:e,id:"navbarSupportedContent"},u("ul",{className:"navbar-nav"},u("li",{className:"nav-item"},u(d.a,{href:"/#",activeClassName:"active"},u("a",{className:"nav-link",onClick:function(a){return a.preventDefault()}},"Home ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/",activeClassName:"active"},u("a",{className:"nav-link"},"Home Demo - 1"))),u("li",{className:"nav-item"},u(d.a,{href:"/index-2",activeClassName:"active"},u("a",{className:"nav-link"},"Home Demo - 2"))),u("li",{className:"nav-item"},u(d.a,{href:"/index-3",activeClassName:"active"},u("a",{className:"nav-link"},"Home Demo - 3"))),u("li",{className:"nav-item"},u(d.a,{href:"/index-4",activeClassName:"active"},u("a",{className:"nav-link"},"Home Demo - 4"))),u("li",{className:"nav-item"},u(d.a,{href:"/index-5",activeClassName:"active"},u("a",{className:"nav-link"},"Home Demo - 5"))))),u("li",{className:"nav-item"},u(d.a,{href:"/#"},u("a",{className:"nav-link",onClick:function(a){return a.preventDefault()}},"Pages ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/about",activeClassName:"active"},u("a",{className:"nav-link"},"About Us"))),u("li",{className:"nav-item"},u(d.a,{href:"/about-two",activeClassName:"active"},u("a",{className:"nav-link"},"About Us Two"))),u("li",{className:"nav-item"},u(d.a,{href:"/team",activeClassName:"active"},u("a",{className:"nav-link"},"Team"))),u("li",{className:"nav-item"},u(d.a,{href:"/pricing",activeClassName:"active"},u("a",{className:"nav-link"},"Pricing"))),u("li",{className:"nav-item"},u(d.a,{href:"/feedback",activeClassName:"active"},u("a",{className:"nav-link"},"Feedback"))),u("li",{className:"nav-item"},u(d.a,{href:"/partner",activeClassName:"active"},u("a",{className:"nav-link"},"Partner"))),u("li",{className:"nav-item"},u(d.a,{href:"/faq",activeClassName:"active"},u("a",{className:"nav-link"},"Faq"))),u("li",{className:"nav-item"},u(d.a,{href:"/coming-soon",activeClassName:"active"},u("a",{className:"nav-link"},"Coming Soon"))),u("li",{className:"nav-item"},u(d.a,{href:"/404",activeClassName:"active"},u("a",{className:"nav-link"},"404 Error"))))),u("li",{className:"nav-item"},u(d.a,{href:"/#",activeClassName:"active"},u("a",{className:"nav-link"},"Services ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/services",activeClassName:"active"},u("a",{className:"nav-link"},"Services Style One"))),u("li",{className:"nav-item"},u(d.a,{href:"/services-two",activeClassName:"active"},u("a",{className:"nav-link"},"Services Style Two"))),u("li",{className:"nav-item"},u(d.a,{href:"/services-three",activeClassName:"active"},u("a",{className:"nav-link"},"Services Style Three"))),u("li",{className:"nav-item"},u(d.a,{href:"/services-four",activeClassName:"active"},u("a",{className:"nav-link"},"Services Style Four"))),u("li",{className:"nav-item"},u(d.a,{href:"/service-details",activeClassName:"active"},u("a",{className:"nav-link"},"Service Details"))))),u("li",{className:"nav-item"},u(d.a,{href:"/#"},u("a",{className:"nav-link"},"Projects ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/projects",activeClassName:"active"},u("a",{className:"nav-link"},"Projects"))),u("li",{className:"nav-item"},u(d.a,{href:"/projects-details",activeClassName:"active"},u("a",{className:"nav-link"},"Projects Details"))))),u("li",{className:"nav-item"},u(d.a,{href:"/#"},u("a",{className:"nav-link"},"Shop ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/shop",activeClassName:"active"},u("a",{className:"nav-link"},"Shop"))),u("li",{className:"nav-item"},u(d.a,{href:"/single-products",activeClassName:"active"},u("a",{className:"nav-link"},"Single Products"))),u("li",{className:"nav-item"},u(d.a,{href:"/cart",activeClassName:"active"},u("a",{className:"nav-link"},"Cart"))),u("li",{className:"nav-item"},u(d.a,{href:"/checkout",activeClassName:"active"},u("a",{className:"nav-link"},"Checkout"))))),u("li",{className:"nav-item"},u(d.a,{href:"/#"},u("a",{className:"nav-link"},"Blog ",u("i",{className:"fas fa-chevron-down"}))),u("ul",{className:"dropdown-menu"},u("li",{className:"nav-item"},u(d.a,{href:"/blog",activeClassName:"active"},u("a",{className:"nav-link"},"Blog Grid"))),u("li",{className:"nav-item"},u(d.a,{href:"/blog2",activeClassName:"active"},u("a",{className:"nav-link"},"Blog Right Sidebar"))),u("li",{className:"nav-item"},u(d.a,{href:"/blog-details",activeClassName:"active"},u("a",{className:"nav-link"},"Blog Details"))))),u("li",{className:"nav-item"},u(d.a,{href:"/contact",activeClassName:"active"},u("a",{className:"nav-link"},"Contact")))),u("div",{className:"others-options"},u(d.a,{href:"/cart"},u("a",{className:"cart-btn"},u("i",{className:"flaticon-commerce-and-shopping"}),u("span",null,"1"))),u("div",{className:"option-item"},u("i",{onClick:this.handleSearchForm,className:"search-btn flaticon-search",style:{display:this.state.searchForm?"none":"block"}}),u("i",{onClick:this.handleSearchForm,className:"close-btn fas fa-times ".concat(this.state.searchForm?"active":"")}),u("div",{className:"search-overlay search-popup",style:{display:this.state.searchForm?"block":"none"}},u("div",{className:"search-box"},u("form",{className:"search-form"},u("input",{className:"search-input",name:"search",placeholder:"Search",type:"text"}),u("button",{className:"search-button",type:"submit"},u("i",{className:"fas fa-search"})))))),u(d.a,{href:"/contact"},u("a",{className:"btn btn-primary"},"Schedule a Demo")))))))))}}]),s}(m.Component);e.a=f},Ix5F:function(a,e,s){"use strict";var i=s("1OyB"),l=s("vuIU"),t=s("Ji7U"),c=s("md7G"),n=s("foSv"),r=s("q1tI"),o=s.n(r),m=s("YFqc"),v=s.n(m),d=o.a.createElement;function u(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,i=Object(n.a)(a);if(e){var l=Object(n.a)(this).constructor;s=Reflect.construct(i,arguments,l)}else s=i.apply(this,arguments);return Object(c.a)(this,s)}}var N=function(a){Object(t.a)(s,a);var e=u(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var a=this.props,e=a.pageTitle,s=a.homePageUrl,i=a.homePageText,l=a.activePageText,t=a.bgImgClass;return d("div",{className:"page-title-area ".concat(t)},d("div",{className:"container"},d("div",{className:"page-title-content"},d("h2",null,e),d("ul",null,d("li",null,d(v.a,{href:s},d("a",null,i))),d("li",null,l)))),d("div",{className:"lines"},d("div",{className:"line"}),d("div",{className:"line"}),d("div",{className:"line"})))}}]),s}(r.Component);e.a=N},SSIw:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services-three",function(){return s("Xl5W")}])},Xl5W:function(a,e,s){"use strict";s.r(e);var i=s("1OyB"),l=s("vuIU"),t=s("Ji7U"),c=s("md7G"),n=s("foSv"),r=s("q1tI"),o=s.n(r),m=s("YFqc"),v=s.n(m),d=s("Fv2/"),u=s("Ix5F"),N=s("g7ta"),f=o.a.createElement;function h(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,i=Object(n.a)(a);if(e){var l=Object(n.a)(this).constructor;s=Reflect.construct(i,arguments,l)}else s=i.apply(this,arguments);return Object(c.a)(this,s)}}var p=function(a){Object(t.a)(s,a);var e=h(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return f(o.a.Fragment,null,f(d.a,null),f(u.a,{pageTitle:"Services Three",homePageUrl:"/",homePageText:"Home",activePageText:"Services Three",bgImgClass:"item-bg1"}),f("div",{className:"main-services-area ptb-110"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-robot-1"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Robotic Process Automation"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-neural"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Machine Learning"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-machine-learning"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Cognitive Engagement"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-income"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Data Analysts"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-automatic"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Automatic Optimization"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-locked"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Security & Surveillance"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-molecular"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Healthcare & Manufacturing"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-gear"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"Software Engineers"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More")))),f("div",{className:"col-lg-4 col-sm-6 col-md-6"},f("div",{className:"single-main-services-box"},f("div",{className:"icon"},f("i",{className:"flaticon-ceo"})),f("h3",null,f(v.a,{href:"/service-details"},f("a",null,"IT Professionals"))),f("p",null,"Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam."),f(v.a,{href:"/service-details"},f("a",{className:"link-btn"},"Read More"))))))),f(N.a,null))}}]),s}(r.Component);e.default=p}},[["SSIw",0,2,1,3]]]);