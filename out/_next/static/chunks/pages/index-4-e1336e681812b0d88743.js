_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{Fgxv:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-4",function(){return t("TOAG")}])},"Fv2/":function(a,e,t){"use strict";var s=t("1OyB"),i=t("vuIU"),n=t("JX7q"),l=t("Ji7U"),c=t("md7G"),r=t("foSv"),o=t("rePB"),m=t("q1tI"),u=t.n(m),v=t("0Yqi"),d=u.a.createElement;function h(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,s=Object(r.a)(a);if(e){var i=Object(r.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(a){Object(l.a)(t,a);var e=h(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=e.call.apply(e,[this].concat(l)),Object(o.a)(Object(n.a)(a),"state",{searchForm:!1}),Object(o.a)(Object(n.a)(a),"handleSearchForm",(function(){a.setState((function(a){return{searchForm:!a.searchForm}}))})),Object(o.a)(Object(n.a)(a),"_isMounted",!1),Object(o.a)(Object(n.a)(a),"state",{display:!1,collapsed:!0}),Object(o.a)(Object(n.a)(a),"toggleNavbar",(function(){a.setState({collapsed:!a.state.collapsed})})),a}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var a=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?a.classList.add("is-sticky"):a.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var a=this.state.collapsed,e=a?"collapse navbar-collapse":"collapse navbar-collapse show",t=a?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return d(u.a.Fragment,null,d("div",{id:"navbar",className:"navbar-area"},d("div",{className:"main-nav"},d("div",{className:"container"},d("nav",{className:"navbar navbar-expand-md navbar-light"},d(v.a,{href:"/"},d("a",{className:"navbar-brand"},d("img",{src:"/images/white-logo.png",className:"main-logo",alt:"logo"}),d("img",{src:"/images/black-logo.png",className:"optional-logo",alt:"logo"}))),d("button",{onClick:this.toggleNavbar,className:t,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d("span",{className:"icon-bar top-bar"}),d("span",{className:"icon-bar middle-bar"}),d("span",{className:"icon-bar bottom-bar"})),d("div",{className:e,id:"navbarSupportedContent"},d("ul",{className:"navbar-nav"},d("li",{className:"nav-item"},d(v.a,{href:"/#",activeClassName:"active"},d("a",{className:"nav-link",onClick:function(a){return a.preventDefault()}},"Home ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/",activeClassName:"active"},d("a",{className:"nav-link"},"Home Demo - 1"))),d("li",{className:"nav-item"},d(v.a,{href:"/index-2",activeClassName:"active"},d("a",{className:"nav-link"},"Home Demo - 2"))),d("li",{className:"nav-item"},d(v.a,{href:"/index-3",activeClassName:"active"},d("a",{className:"nav-link"},"Home Demo - 3"))),d("li",{className:"nav-item"},d(v.a,{href:"/index-4",activeClassName:"active"},d("a",{className:"nav-link"},"Home Demo - 4"))),d("li",{className:"nav-item"},d(v.a,{href:"/index-5",activeClassName:"active"},d("a",{className:"nav-link"},"Home Demo - 5"))))),d("li",{className:"nav-item"},d(v.a,{href:"/#"},d("a",{className:"nav-link",onClick:function(a){return a.preventDefault()}},"Pages ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/about",activeClassName:"active"},d("a",{className:"nav-link"},"About Us"))),d("li",{className:"nav-item"},d(v.a,{href:"/about-two",activeClassName:"active"},d("a",{className:"nav-link"},"About Us Two"))),d("li",{className:"nav-item"},d(v.a,{href:"/team",activeClassName:"active"},d("a",{className:"nav-link"},"Team"))),d("li",{className:"nav-item"},d(v.a,{href:"/pricing",activeClassName:"active"},d("a",{className:"nav-link"},"Pricing"))),d("li",{className:"nav-item"},d(v.a,{href:"/feedback",activeClassName:"active"},d("a",{className:"nav-link"},"Feedback"))),d("li",{className:"nav-item"},d(v.a,{href:"/partner",activeClassName:"active"},d("a",{className:"nav-link"},"Partner"))),d("li",{className:"nav-item"},d(v.a,{href:"/faq",activeClassName:"active"},d("a",{className:"nav-link"},"Faq"))),d("li",{className:"nav-item"},d(v.a,{href:"/coming-soon",activeClassName:"active"},d("a",{className:"nav-link"},"Coming Soon"))),d("li",{className:"nav-item"},d(v.a,{href:"/404",activeClassName:"active"},d("a",{className:"nav-link"},"404 Error"))))),d("li",{className:"nav-item"},d(v.a,{href:"/#",activeClassName:"active"},d("a",{className:"nav-link"},"Services ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/services",activeClassName:"active"},d("a",{className:"nav-link"},"Services Style One"))),d("li",{className:"nav-item"},d(v.a,{href:"/services-two",activeClassName:"active"},d("a",{className:"nav-link"},"Services Style Two"))),d("li",{className:"nav-item"},d(v.a,{href:"/services-three",activeClassName:"active"},d("a",{className:"nav-link"},"Services Style Three"))),d("li",{className:"nav-item"},d(v.a,{href:"/services-four",activeClassName:"active"},d("a",{className:"nav-link"},"Services Style Four"))),d("li",{className:"nav-item"},d(v.a,{href:"/service-details",activeClassName:"active"},d("a",{className:"nav-link"},"Service Details"))))),d("li",{className:"nav-item"},d(v.a,{href:"/#"},d("a",{className:"nav-link"},"Projects ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/projects",activeClassName:"active"},d("a",{className:"nav-link"},"Projects"))),d("li",{className:"nav-item"},d(v.a,{href:"/projects-details",activeClassName:"active"},d("a",{className:"nav-link"},"Projects Details"))))),d("li",{className:"nav-item"},d(v.a,{href:"/#"},d("a",{className:"nav-link"},"Shop ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/shop",activeClassName:"active"},d("a",{className:"nav-link"},"Shop"))),d("li",{className:"nav-item"},d(v.a,{href:"/single-products",activeClassName:"active"},d("a",{className:"nav-link"},"Single Products"))),d("li",{className:"nav-item"},d(v.a,{href:"/cart",activeClassName:"active"},d("a",{className:"nav-link"},"Cart"))),d("li",{className:"nav-item"},d(v.a,{href:"/checkout",activeClassName:"active"},d("a",{className:"nav-link"},"Checkout"))))),d("li",{className:"nav-item"},d(v.a,{href:"/#"},d("a",{className:"nav-link"},"Blog ",d("i",{className:"fas fa-chevron-down"}))),d("ul",{className:"dropdown-menu"},d("li",{className:"nav-item"},d(v.a,{href:"/blog",activeClassName:"active"},d("a",{className:"nav-link"},"Blog Grid"))),d("li",{className:"nav-item"},d(v.a,{href:"/blog2",activeClassName:"active"},d("a",{className:"nav-link"},"Blog Right Sidebar"))),d("li",{className:"nav-item"},d(v.a,{href:"/blog-details",activeClassName:"active"},d("a",{className:"nav-link"},"Blog Details"))))),d("li",{className:"nav-item"},d(v.a,{href:"/contact",activeClassName:"active"},d("a",{className:"nav-link"},"Contact")))),d("div",{className:"others-options"},d(v.a,{href:"/cart"},d("a",{className:"cart-btn"},d("i",{className:"flaticon-commerce-and-shopping"}),d("span",null,"1"))),d("div",{className:"option-item"},d("i",{onClick:this.handleSearchForm,className:"search-btn flaticon-search",style:{display:this.state.searchForm?"none":"block"}}),d("i",{onClick:this.handleSearchForm,className:"close-btn fas fa-times ".concat(this.state.searchForm?"active":"")}),d("div",{className:"search-overlay search-popup",style:{display:this.state.searchForm?"block":"none"}},d("div",{className:"search-box"},d("form",{className:"search-form"},d("input",{className:"search-input",name:"search",placeholder:"Search",type:"text"}),d("button",{className:"search-button",type:"submit"},d("i",{className:"fas fa-search"})))))),d(v.a,{href:"/contact"},d("a",{className:"btn btn-primary"},"Schedule a Demo")))))))))}}]),t}(m.Component);e.a=f},TOAG:function(a,e,t){"use strict";t.r(e);var s=t("1OyB"),i=t("vuIU"),n=t("Ji7U"),l=t("md7G"),c=t("foSv"),r=t("q1tI"),o=t.n(r),m=t("Fv2/"),u=t("wx14"),v=t("ODXe"),d=t("YFqc"),h=t.n(d),f=t("Vvt1"),p=t.n(f),g=o.a.createElement,N=p()((function(){return t.e(4).then(t.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),b={loop:!0,nav:!0,dots:!1,autoplayHoverPause:!0,autoplay:!0,mouseDrag:!0,items:1,navText:["<i class='flaticon-left-chevron'></i>","<i class='flaticon-right-chevron'></i>"]},y=function(){var a=o.a.useState(!1),e=Object(v.a)(a,2),t=e[0],s=e[1];return o.a.useEffect((function(){s(!0)}),[]),g(o.a.Fragment,null,t?g(N,Object(u.a)({className:"home-slides owl-carousel owl-theme"},b),g("div",{className:"main-banner item-bg1"},g("div",{className:"container"},g("div",{className:"main-banner-content"},g("h1",null,"World\u2019s Leading Machine Learning Company"),g("p",null,"ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation."),g("div",{className:"btn-box"},g(h.a,{href:"/index-4/#"},g("a",{className:"btn btn-primary"},"Schedule a Demo")),g(h.a,{href:"/index-4/#"},g("a",{className:"optional-btn"},"Get Started Free")))))),g("div",{className:"main-banner item-bg2"},g("div",{className:"container"},g("div",{className:"main-banner-content"},g("h1",null,"World\u2019s Leading Machine Learning Company"),g("p",null,"ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation."),g("div",{className:"btn-box"},g(h.a,{href:"/index-4/#"},g("a",{className:"btn btn-primary"},"Schedule a Demo")),g(h.a,{href:"/index-4/#"},g("a",{className:"optional-btn"},"Get Started Free"))))))):"")},k=o.a.createElement;function w(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,s=Object(c.a)(a);if(e){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var O=function(a){Object(n.a)(t,a);var e=w(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return k("section",{className:"about-area ptb-110"},k("div",{className:"container"},k("div",{className:"row align-items-center"},k("div",{className:"col-lg-6 col-md-12"},k("div",{className:"about-image"},k("img",{src:"/images/about/about1.jpg",alt:"image"}),k("img",{src:"/images/about/about2.jpg",alt:"image"}))),k("div",{className:"col-lg-6 col-md-12"},k("div",{className:"about-content"},k("h2",null,"Engaging New Audiences Through Smart Approach"),k("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."),k("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't."),k(h.a,{href:"/about"},k("a",{className:"btn btn-primary"},"Discover More")))))),k("div",{className:"shape-img1"},k("img",{src:"/images/shape/shape1.png",alt:"image"})),k("div",{className:"shape-img2"},k("img",{src:"/images/shape/shape2.svg",alt:"image"})),k("div",{className:"shape-img3"},k("img",{src:"/images/shape/shape3.png",alt:"image"})),k("div",{className:"shape-img4"},k("img",{src:"/images/shape/shape4.svg",alt:"image"})),k("div",{className:"shape-img5"},k("img",{src:"/images/shape/shape5.svg",alt:"image"})),k("div",{className:"shape-img6"},k("img",{src:"/images/shape/shape6.png",alt:"image"})),k("div",{className:"dot-shape1"},k("img",{src:"/images/shape/dot1.png",alt:"image"})),k("div",{className:"dot-shape2"},k("img",{src:"/images/shape/dot2.png",alt:"image"})))}}]),t}(r.Component),j=o.a.createElement;function C(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,s=Object(c.a)(a);if(e){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var S=function(a){Object(n.a)(t,a);var e=C(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return j("section",{className:"services-area bg-f2f6f9 ptb-110"},j("div",{className:"container"},j("div",{className:"section-title"},j("h2",null,"We Offer Professional Solutions"),j("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),j("div",{className:"row"},j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-income"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"Data Analysts"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))),j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-automatic"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"Automatic Optimization"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))),j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-locked"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"Security & Surveillance"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))),j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-molecular"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"Healthcare & Manufacturing"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))),j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-gear"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"Software Engineers"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))),j("div",{className:"col-lg-4 col-sm-6"},j("div",{className:"single-services-box"},j("div",{className:"icon"},j("i",{className:"flaticon-ceo"})),j("h3",null,j(h.a,{href:"/service-details"},j("a",null,"IT Professionals"))),j("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))))),j("div",{className:"shape-img2"},j("img",{src:"/images/shape/shape2.svg",alt:"image"})),j("div",{className:"shape-img3"},j("img",{src:"/images/shape/shape3.png",alt:"image"})),j("div",{className:"shape-img4"},j("img",{src:"/images/shape/shape4.svg",alt:"image"})),j("div",{className:"shape-img5"},j("img",{src:"/images/shape/shape5.svg",alt:"image"})),j("div",{className:"shape-img3"},j("img",{src:"/images/shape/shape3.png",alt:"image"})),j("div",{className:"dot-shape1"},j("img",{src:"/images/shape/dot1.png",alt:"image"})),j("div",{className:"dot-shape2"},j("img",{src:"/images/shape/dot3.png",alt:"image"})),j("div",{className:"dot-shape2"},j("img",{src:"/images/shape/dot4.png",alt:"image"})),j("div",{className:"dot-shape2"},j("img",{src:"/images/shape/dot5.png",alt:"image"})),j("div",{className:"dot-shape2"},j("img",{src:"/images/shape/dot6.png",alt:"image"})))}}]),t}(r.Component),x=t("JX7q"),D=t("rePB"),R=t("60Bi"),E=t.n(R),F=o.a.createElement;function P(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,s=Object(c.a)(a);if(e){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var I=function(a){Object(n.a)(t,a);var e=P(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return a=e.call.apply(e,[this].concat(n)),Object(D.a)(Object(x.a)(a),"state",{isOpen:!1}),Object(D.a)(Object(x.a)(a),"openModal",(function(){a.setState({isOpen:!0})})),a}return Object(i.a)(t,[{key:"render",value:function(){var a=this;return F(o.a.Fragment,null,F("section",{className:"webinar-area"},F("div",{className:"row m-0"},F("div",{className:"col-lg-6 p-0"},F("div",{className:"webinar-content"},F("h2",null,"Check Out Our Courses"),F("p",null," PTE Leader courses provide professionally tailored lessons that focus on the sole purpose of improving students\u2019 English language ability to ace target scores with the PTE Academic test and prepare students for their studies and works in any English-speaking countries."),F(h.a,{href:"/index-4/#"},F("a",{className:"btn btn-primary"},"Watch More")))),F("div",{className:"col-lg-6 p-0"},F("div",{className:"webinar-video-image"},F("img",{src:"/images/woman.jpg",alt:"image"}),F("div",{onClick:function(e){e.preventDefault(),a.openModal()},className:"video-btn popup-youtube"},F("i",{className:"flaticon-play-button"}))))),F(E.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"_ysd-zHamjk",onClose:function(){return a.setState({isOpen:!1})}})))}}]),t}(r.Component),T=t("LbS5"),L=t("IlQe"),_=t("bflN"),q=t("azCz"),M=t("ICtC"),A=t("g7ta"),B=o.a.createElement;function H(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,s=Object(c.a)(a);if(e){var i=Object(c.a)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return Object(l.a)(this,t)}}var G=function(a){Object(n.a)(t,a);var e=H(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return B(o.a.Fragment,null,B(m.a,null),B(y,null),B(O,null),B(S,null),B(I,null),B(T.a,null),B(L.a,null),B(_.a,null),B(q.a,null),B(M.a,null),B(A.a,null))}}]),t}(r.Component);e.default=G}},[["Fgxv",0,2,1,3,5,6,9]]]);