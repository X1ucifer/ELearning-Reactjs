_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{Ix5F:function(e,s,c){"use strict";var t=c("nKUr"),i=(c("q1tI"),c("YFqc")),a=c.n(i);s.a=function(e){var s=e.pageTitle,c=e.homePageUrl,i=e.homePageText,r=e.activePageText;return Object(t.jsxs)("div",{className:"page-title-area",children:[Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"page-title-content",children:[Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(a.a,{href:c,children:Object(t.jsx)("a",{children:i})})}),Object(t.jsx)("li",{className:"active",children:r})]}),Object(t.jsx)("h2",{children:s})]})}),Object(t.jsx)("div",{className:"shape9",children:Object(t.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},M39Z:function(e,s,c){"use strict";c.r(s);var t=c("o0o1"),i=c.n(t),a=c("HaE+"),r=c("nKUr"),n=c("q1tI"),l=c.n(n),o=c("Ix5F"),j=c("YFqc"),d=c.n(j),h=c("vDqi"),x=c.n(h),b=c("rjN7"),u=function(e){var s=e.courses;return Object(r.jsxs)(l.a.Fragment,{children:[Object(r.jsx)(o.a,{pageTitle:"Courses Grid 01",homePageUrl:"/",homePageText:"Home",activePageText:"Courses Grid 01"}),Object(r.jsx)("div",{className:"courses-area courses-section pt-100 pb-70",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"edemy-grid-sorting row align-items-center",children:[Object(r.jsx)("div",{className:"col-lg-8 col-md-6 result-count",children:Object(r.jsxs)("p",{children:["We found ",Object(r.jsx)("span",{className:"count",children:s.length})," courses available for you"]})}),Object(r.jsx)("div",{className:"col-lg-4 col-md-6 ordering",children:Object(r.jsx)("div",{className:"select-box",children:Object(r.jsxs)("select",{className:"form-control",children:[Object(r.jsx)("option",{children:"Sort By"}),Object(r.jsx)("option",{children:"Popularity"}),Object(r.jsx)("option",{children:"Latest"}),Object(r.jsx)("option",{children:"Price: low to high"}),Object(r.jsx)("option",{children:"Price: high to low"})]})})})]}),Object(r.jsx)("div",{className:"row",children:s?s.map((function(e){return Object(r.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(r.jsxs)("div",{className:"single-courses-box",children:[Object(r.jsxs)("div",{className:"courses-image",children:[Object(r.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(r.jsx)("a",{className:"d-block image",children:Object(r.jsx)("img",{src:e.profilePhoto,alt:e.title})})}),Object(r.jsx)(d.a,{href:"#",children:Object(r.jsx)("a",{className:"fav",children:Object(r.jsx)("i",{className:"flaticon-heart"})})}),Object(r.jsxs)("div",{className:"price shadow",children:["$",e.price]})]}),Object(r.jsxs)("div",{className:"courses-content",children:[Object(r.jsxs)("div",{className:"course-author d-flex align-items-center",children:[Object(r.jsx)("img",{src:"".concat(e.user.profilePhoto?e.user.profilePhoto:"/images/user1.jpg"),className:"rounded-circle",alt:e.user.name}),Object(r.jsx)("span",{children:e.user.name})]}),Object(r.jsx)("h3",{title:e.title,children:Object(r.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(r.jsxs)("a",{children:[e.title.slice(0,20),"..."]})})}),Object(r.jsxs)("p",{children:[e.overview.slice(0,100),"..."]}),Object(r.jsxs)("ul",{className:"courses-box-footer d-flex justify-content-between align-items-center",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-agenda"})," ",parseInt(e.lessons)," Lessons"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"flaticon-people"})," ",e.enroled_courses.length," Students"]})]})]})]})},e.id)})):Object(r.jsx)("h2",{children:"Empty"})})]})})]})};u.getInitialProps=Object(a.a)(i.a.mark((function e(){var s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(b.a,"/api/v1/courses/homepage-courses"),e.next=3,x.a.get(s);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)}))),s.default=u},VgsY:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses-1",function(){return c("M39Z")}])}},[["VgsY",0,2,1,4]]]);