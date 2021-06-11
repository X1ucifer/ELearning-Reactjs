webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./public/css/courseInnerCard.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./public/css/courseInnerCard.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", helvetica, arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.movie_card {\n  position: relative;\n  display: block;\n  height: 550px;\n  margin: 1px auto;\n  overflow: hidden;\n  border-radius: 0px;\n  transition: all 0.4s;\n}\n.movie_card .info_section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: multiply;\n  z-index: 2;\n  border-radius: 10px;\n}\n.movie_card .info_section .movie_header {\n  position: relative;\n  padding-left: 25px;\n  padding-top: 50px;\n  height: 40%;\n}\n.movie_card .info_section .movie_header h1 {\n  color: #fff;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header h4 {\n  color: #9ac7fa;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header .minutes {\n  display: inline-block;\n  margin-top: 10px;\n  color: #fff;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n.movie_card .info_section .movie_header .type {\n  display: inline-block;\n  color: #cee4fd;\n  margin-left: 10px;\n}\n.movie_card .info_section .movie_header .locandina {\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  height: 120px;\n  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\n}\n.movie_card .info_section .movie_desc {\n  padding: 25px;\n  height: 50%;\n}\n.movie_card .info_section .movie_desc .text {\n  color: #cfd6e1;\n}\n.movie_card .info_section .movie_social {\n  height: 10%;\n  padding-left: 15px;\n  padding-bottom: 20px;\n}\n.movie_card .info_section .movie_social ul {\n  list-style: none;\n  padding: 0;\n}\n.movie_card .info_section .movie_social ul li {\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.3s;\n  transition-delay: 0.15s;\n  margin: 0 10px;\n}\n.movie_card .info_section .movie_social ul li:hover {\n  transition: color 0.3s;\n  color: rgba(255, 255, 255, 0.8);\n}\n.movie_card .info_section .movie_social ul li i {\n  font-size: 19px;\n  cursor: pointer;\n}\n.movie_card .blur_back img {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  height: 100%;\n  right: 0;\n  background-size: cover;\n  border-radius: 11px;\n}\n\n.video-btn {\n  display: inline-block;\n  opacity: 0.8;\n  width: 80px;\n  height: 80px;\n  font-size: 35px;\n  text-align: center;\n  line-height: 80px;\n  position: absolute;\n  left: 73%;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%) translateX(-50%);\n  background-color: white;\n  border-radius: 50%;\n  color: black;\n}\n.video-btn::after, .video-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid white;\n}\n.video-btn::before {\n  -webkit-animation: ripple 2s linear infinite;\n          animation: ripple 2s linear infinite;\n}\n.video-btn::after {\n  -webkit-animation: ripple 2s linear 1s infinite;\n          animation: ripple 2s linear 1s infinite;\n}\n.video-btn:hover {\n  color: black;\n  background-color: #8ACF00;\n}\n.video-btn:hover::before, .video-btn:hover::after {\n  border-color: #8ACF00;\n}\n\n@media screen and (min-width: 768px) {\n  .movie_header {\n    width: 60%;\n  }\n\n  .movie_desc {\n    width: 50%;\n  }\n\n  .info_section {\n    background: linear-gradient(to right, #0f171e 40%, transparent 100%);\n  }\n\n  .blur_back {\n    width: 80%;\n    background-position: -100% 10% !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .movie_card {\n    width: 95%;\n    margin: 70px auto;\n    min-height: 350px;\n    height: auto;\n  }\n\n  .blur_back {\n    width: 100%;\n    background-position: 50% 50% !important;\n  }\n\n  .movie_header {\n    width: 100%;\n    margin-top: 85px;\n  }\n\n  .movie_desc {\n    width: 100%;\n  }\n\n  .info_section {\n    background: linear-gradient(to top, #141413 50%, transparent 100%);\n    display: inline-grid;\n  }\n}\n#bright {\n  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;\n}", "",{"version":3,"sources":["webpack://courseInnerCard.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,SAAA;AAAF;;AAGA;;EAEE,SAAA;EAEA,uDAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,cAAA;EAEA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;AAFF;AAOE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,+BAAA;EACA,UAAA;EACA,mBAAA;AALJ;AAMI;EACE,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;AAJN;AAKM;EACE,WAAA;EACA,gBAAA;AAHR;AAKM;EACE,cAAA;EACA,gBAAA;AAHR;AAKM;EACE,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;AAHR;AAKM;EACE,qBAAA;EACA,cAAA;EACA,iBAAA;AAHR;AAKM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,6CAAA;AAHR;AAMI;EACE,aAAA;EACA,WAAA;AAJN;AAKM;EACE,cAAA;AAHR;AAMI;EACE,WAAA;EACA,kBAAA;EACA,oBAAA;AAJN;AAKM;EACE,gBAAA;EACA,UAAA;AAHR;AAIQ;EACE,qBAAA;EACA,+BAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAFV;AAGU;EACE,sBAAA;EACA,+BAAA;AADZ;AAGU;EACE,eAAA;EACA,eAAA;AADZ;AAOE;EACE,kBAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,QAAA;EACA,sBAAA;EACA,mBAAA;AALJ;;AASA;EACE,qBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,4CAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;AANF;AAQE;EAEE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EAEA,kBAAA;EACA,uBAAA;AARJ;AAUE;EACE,4CAAA;UAAA,oCAAA;AARJ;AAUE;EACE,+CAAA;UAAA,uCAAA;AARJ;AAUE;EACE,YAAA;EACA,yBAAA;AARJ;AAUI;EAEE,qBAAA;AATN;;AAmCA;EACE;IACE,UAAA;EAhCF;;EAmCA;IACE,UAAA;EAhCF;;EAmCA;IACE,oEAAA;EAhCF;;EAmCA;IACE,UAAA;IACA,yCAAA;EAhCF;AACF;AAmCA;EACE;IACE,UAAA;IACA,iBAAA;IACA,iBAAA;IACA,YAAA;EAjCF;;EAoCA;IACE,WAAA;IACA,uCAAA;EAjCF;;EAoCA;IACE,WAAA;IACA,gBAAA;EAjCF;;EAoCA;IACE,WAAA;EAjCF;;EAoCA;IACE,kEAAA;IACA,oBAAA;EAjCF;AACF;AAoCA;EACE,4FAAA;AAlCF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  // background: 0F171E;\r\n  font-family: \"Montserrat\", helvetica, arial, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.movie_card {\r\n  position: relative;\r\n  display: block;\r\n  // width: 800px;\r\n  height: 550px;\r\n  margin: 1px auto;\r\n  overflow: hidden;\r\n  border-radius: 0px;\r\n  transition: all 0.4s;\r\n  // &:hover{\r\n  //   transform: scale(1.02);\r\n  //   transition: all 0.4s;\r\n  // }\r\n  .info_section {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-blend-mode: multiply;\r\n    z-index: 2;\r\n    border-radius: 10px;\r\n    .movie_header {\r\n      position: relative;\r\n      padding-left: 25px;\r\n      padding-top: 50px;\r\n      height: 40%;\r\n      h1 {\r\n        color: #fff;\r\n        font-weight: 400;\r\n      }\r\n      h4 {\r\n        color: #9ac7fa;\r\n        font-weight: 400;\r\n      }\r\n      .minutes {\r\n        display: inline-block;\r\n        margin-top: 10px;\r\n        color: #fff;\r\n        padding: 5px;\r\n        border-radius: 5px;\r\n        border: 1px solid rgba(255, 255, 255, 0.13);\r\n      }\r\n      .type {\r\n        display: inline-block;\r\n        color: #cee4fd;\r\n        margin-left: 10px;\r\n      }\r\n      .locandina {\r\n        position: relative;\r\n        float: left;\r\n        margin-right: 20px;\r\n        height: 120px;\r\n        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\r\n      }\r\n    }\r\n    .movie_desc {\r\n      padding: 25px;\r\n      height: 50%;\r\n      .text {\r\n        color: #cfd6e1;\r\n      }\r\n    }\r\n    .movie_social {\r\n      height: 10%;\r\n      padding-left: 15px;\r\n      padding-bottom: 20px;\r\n      ul {\r\n        list-style: none;\r\n        padding: 0;\r\n        li {\r\n          display: inline-block;\r\n          color: rgba(255, 255, 255, 0.4);\r\n          transition: color 0.3s;\r\n          transition-delay: 0.15s;\r\n          margin: 0 10px;\r\n          &:hover {\r\n            transition: color 0.3s;\r\n            color: rgba(255, 255, 255, 0.8);\r\n          }\r\n          i {\r\n            font-size: 19px;\r\n            cursor: pointer;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .blur_back img {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n    height: 100%;\r\n    right: 0;\r\n    background-size: cover;\r\n    border-radius: 11px;\r\n  }\r\n}\r\n\r\n.video-btn {\r\n  display: inline-block;\r\n  opacity: 0.8;\r\n  width: 80px;\r\n  height: 80px;\r\n  font-size: 35px;\r\n  text-align: center;\r\n  line-height: 80px;\r\n  position: absolute;\r\n  left: 73%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  transform: translateY(-50%) translateX(-50%);\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  color: black;\r\n\r\n  &::after,\r\n  &::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    bottom: 0;\r\n    left: 0;\r\n    // transition: 0.5s;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n  }\r\n  &::before {\r\n    animation: ripple 2s linear infinite;\r\n  }\r\n  &::after {\r\n    animation: ripple 2s linear 1s infinite;\r\n  }\r\n  &:hover {\r\n    color: black;\r\n    background-color: #8ACF00;\r\n\r\n    &::before,\r\n    &::after {\r\n      border-color: #8ACF00;\r\n    }\r\n  }\r\n}\r\n// &:hover {\r\n//   .image {\r\n//     img {\r\n//       transform: scale3d(1.1, 1.1, 1.1);\r\n//     }\r\n//   }\r\n// }\r\n\r\n// @keyframes ripple {\r\n//   0% {\r\n//     transform: scale(1);\r\n//   }\r\n//   75% {\r\n//     transform: scale(1.75);\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     transform: scale(2);\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie_header {\r\n    width: 60%;\r\n  }\r\n\r\n  .movie_desc {\r\n    width: 50%;\r\n  }\r\n\r\n  .info_section {\r\n    background: linear-gradient(to right, #0f171e 40%, transparent 100%);\r\n  }\r\n\r\n  .blur_back {\r\n    width: 80%;\r\n    background-position: -100% 10% !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .movie_card {\r\n    width: 95%;\r\n    margin: 70px auto;\r\n    min-height: 350px;\r\n    height: auto;\r\n  }\r\n\r\n  .blur_back {\r\n    width: 100%;\r\n    background-position: 50% 50% !important;\r\n  }\r\n\r\n  .movie_header {\r\n    width: 100%;\r\n    margin-top: 85px;\r\n  }\r\n\r\n  .movie_desc {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_section {\r\n    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);\r\n    display: inline-grid;\r\n  }\r\n}\r\n\r\n#bright {\r\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\r\n  // &:hover{\r\n  //   box-shadow: 0px 0px 120px -55px #8ACF00;\r\n  // }\r\n}\r\n\r\n// .bright_back{\r\n//   background: url(${course.coverPhoto});\r\n// }\r\n\r\n@media screen and (max-width: 2560px){\r\n  // .movie_header {\r\n  //   // width: 60%;\r\n  //   // background-color: yellow;\r\n  // }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Nzcy9jb3Vyc2VJbm5lckNhcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUyxtRkFBbUY7QUFDMUg7QUFDQSw4QkFBOEIsUUFBUyxNQUFNLDJCQUEyQixjQUFjLEdBQUcsaUJBQWlCLGNBQWMsOERBQThELG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIsdUJBQXVCLG1CQUFtQixrQkFBa0IscUJBQXFCLHFCQUFxQix1QkFBdUIseUJBQXlCLEdBQUcsNkJBQTZCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9DQUFvQyxlQUFlLHdCQUF3QixHQUFHLDJDQUEyQyx1QkFBdUIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsR0FBRyw4Q0FBOEMsZ0JBQWdCLHFCQUFxQixHQUFHLDhDQUE4QyxtQkFBbUIscUJBQXFCLEdBQUcsb0RBQW9ELDBCQUEwQixxQkFBcUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsZ0RBQWdELEdBQUcsaURBQWlELDBCQUEwQixtQkFBbUIsc0JBQXNCLEdBQUcsc0RBQXNELHVCQUF1QixnQkFBZ0IsdUJBQXVCLGtCQUFrQixrREFBa0QsR0FBRyx5Q0FBeUMsa0JBQWtCLGdCQUFnQixHQUFHLCtDQUErQyxtQkFBbUIsR0FBRywyQ0FBMkMsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsR0FBRyw4Q0FBOEMscUJBQXFCLGVBQWUsR0FBRyxpREFBaUQsMEJBQTBCLG9DQUFvQywyQkFBMkIsNEJBQTRCLG1CQUFtQixHQUFHLHVEQUF1RCwyQkFBMkIsb0NBQW9DLEdBQUcsbURBQW1ELG9CQUFvQixvQkFBb0IsR0FBRyw4QkFBOEIsdUJBQXVCLFdBQVcsZUFBZSxpQkFBaUIsYUFBYSwyQkFBMkIsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsY0FBYyxhQUFhLGVBQWUsaURBQWlELDRCQUE0Qix1QkFBdUIsaUJBQWlCLEdBQUcseUNBQXlDLGtCQUFrQixtQkFBbUIsdUJBQXVCLFdBQVcsYUFBYSxnQkFBZ0IsY0FBYyxZQUFZLHVCQUF1Qiw0QkFBNEIsR0FBRyxzQkFBc0IsaURBQWlELGlEQUFpRCxHQUFHLHFCQUFxQixvREFBb0Qsb0RBQW9ELEdBQUcsb0JBQW9CLGlCQUFpQiw4QkFBOEIsR0FBRyxxREFBcUQsMEJBQTBCLEdBQUcsMENBQTBDLG1CQUFtQixpQkFBaUIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUsscUJBQXFCLDJFQUEyRSxLQUFLLGtCQUFrQixpQkFBaUIsZ0RBQWdELEtBQUssR0FBRyx3Q0FBd0MsaUJBQWlCLGlCQUFpQix3QkFBd0Isd0JBQXdCLG1CQUFtQixLQUFLLGtCQUFrQixrQkFBa0IsOENBQThDLEtBQUsscUJBQXFCLGtCQUFrQix1QkFBdUIsS0FBSyxtQkFBbUIsa0JBQWtCLEtBQUsscUJBQXFCLHlFQUF5RSwyQkFBMkIsS0FBSyxHQUFHLFdBQVcsaUdBQWlHLEdBQUcsT0FBTyxxRkFBcUYsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyw4R0FBOEcsV0FBVyw2QkFBNkIsZ0JBQWdCLEtBQUssdUJBQXVCLGdCQUFnQiw0QkFBNEIsZ0VBQWdFLHNCQUFzQix1QkFBdUIsS0FBSyxxQkFBcUIseUJBQXlCLHFCQUFxQixzQkFBc0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLDJCQUEyQixpQkFBaUIsa0NBQWtDLGdDQUFnQyxVQUFVLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHFCQUFxQix3Q0FBd0MsbUJBQW1CLDRCQUE0Qix1QkFBdUIsNkJBQTZCLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLGNBQWMsd0JBQXdCLDZCQUE2QixXQUFXLGNBQWMsMkJBQTJCLDZCQUE2QixXQUFXLG9CQUFvQixrQ0FBa0MsNkJBQTZCLHdCQUF3Qix5QkFBeUIsK0JBQStCLHdEQUF3RCxXQUFXLGlCQUFpQixrQ0FBa0MsMkJBQTJCLDhCQUE4QixXQUFXLHNCQUFzQiwrQkFBK0Isd0JBQXdCLCtCQUErQiwwQkFBMEIsMERBQTBELFdBQVcsU0FBUyxxQkFBcUIsd0JBQXdCLHNCQUFzQixpQkFBaUIsMkJBQTJCLFdBQVcsU0FBUyx1QkFBdUIsc0JBQXNCLDZCQUE2QiwrQkFBK0IsY0FBYyw2QkFBNkIsdUJBQXVCLGdCQUFnQixvQ0FBb0MsOENBQThDLHFDQUFxQyxzQ0FBc0MsNkJBQTZCLHVCQUF1Qix1Q0FBdUMsZ0RBQWdELGVBQWUsaUJBQWlCLGdDQUFnQyxnQ0FBZ0MsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLHNCQUFzQiwyQkFBMkIsZUFBZSxtQkFBbUIscUJBQXFCLGlCQUFpQiwrQkFBK0IsNEJBQTRCLE9BQU8sS0FBSyxvQkFBb0IsNEJBQTRCLG1CQUFtQixrQkFBa0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsd0JBQXdCLHlCQUF5QixnQkFBZ0IsZUFBZSxpQkFBaUIsbURBQW1ELDhCQUE4Qix5QkFBeUIsbUJBQW1CLG9DQUFvQyxzQkFBc0IsdUJBQXVCLDJCQUEyQixlQUFlLGlCQUFpQixvQkFBb0Isa0JBQWtCLGdCQUFnQiw0QkFBNEIsMkJBQTJCLGdDQUFnQyxPQUFPLGlCQUFpQiw2Q0FBNkMsT0FBTyxnQkFBZ0IsZ0RBQWdELE9BQU8sZUFBZSxxQkFBcUIsa0NBQWtDLHdDQUF3QyxnQ0FBZ0MsU0FBUyxPQUFPLEtBQUssZ0JBQWdCLGlCQUFpQixnQkFBZ0IsK0NBQStDLFlBQVksVUFBVSxRQUFRLDhCQUE4QixhQUFhLCtCQUErQixVQUFVLGNBQWMsa0NBQWtDLHNCQUFzQixVQUFVLGVBQWUsK0JBQStCLHNCQUFzQixVQUFVLFFBQVEsOENBQThDLHFCQUFxQixtQkFBbUIsT0FBTyx1QkFBdUIsbUJBQW1CLE9BQU8seUJBQXlCLDZFQUE2RSxPQUFPLHNCQUFzQixtQkFBbUIsa0RBQWtELE9BQU8sS0FBSyw4Q0FBOEMsbUJBQW1CLG1CQUFtQiwwQkFBMEIsMEJBQTBCLHFCQUFxQixPQUFPLHNCQUFzQixvQkFBb0IsZ0RBQWdELE9BQU8seUJBQXlCLG9CQUFvQix5QkFBeUIsT0FBTyx1QkFBdUIsb0JBQW9CLE9BQU8seUJBQXlCLG1GQUFtRiw2QkFBNkIsT0FBTyxLQUFLLGlCQUFpQiw2RkFBNkYsaUJBQWlCLG1EQUFtRCxVQUFVLEtBQUssd0JBQXdCLDJCQUEyQixrQkFBa0IsRUFBRSxRQUFRLDhDQUE4Qyx3QkFBd0IseUJBQXlCLHVDQUF1QyxVQUFVLEtBQUssbUJBQW1CO0FBQzEzVjtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzBkODBjMmZhMmVkMDRhN2QxMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCw4MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vdmllX2NhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbiAgbWFyZ2luOiAxcHggYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICB6LWluZGV4OiAyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiA0MCU7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciBoNCB7XFxuICBjb2xvcjogIzlhYzdmYTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciAubWludXRlcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgLnR5cGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICNjZWU0ZmQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfaGVhZGVyIC5sb2NhbmRpbmEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9kZXNjIHtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfZGVzYyAudGV4dCB7XFxuICBjb2xvcjogI2NmZDZlMTtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfc29jaWFsIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfc29jaWFsIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfc29jaWFsIHVsIGxpOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9zb2NpYWwgdWwgbGkgaSB7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb3ZpZV9jYXJkIC5ibHVyX2JhY2sgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbn1cXG5cXG4udmlkZW8tYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA3MyU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udmlkZW8tYnRuOjphZnRlciwgLnZpZGVvLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4udmlkZW8tYnRuOjpiZWZvcmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpcHBsZSAycyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcmlwcGxlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLnZpZGVvLWJ0bjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpcHBsZSAycyBsaW5lYXIgMXMgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcmlwcGxlIDJzIGxpbmVhciAxcyBpbmZpbml0ZTtcXG59XFxuLnZpZGVvLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEFDRjAwO1xcbn1cXG4udmlkZW8tYnRuOmhvdmVyOjpiZWZvcmUsIC52aWRlby1idG46aG92ZXI6OmFmdGVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzhBQ0YwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5tb3ZpZV9oZWFkZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLm1vdmllX2Rlc2Mge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmluZm9fc2VjdGlvbiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBmMTcxZSA0MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xcbiAgfVxcblxcbiAgLmJsdXJfYmFjayB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDEwJSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1vdmllX2NhcmQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW46IDcwcHggYXV0bztcXG4gICAgbWluLWhlaWdodDogMzUwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5ibHVyX2JhY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm1vdmllX2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xcbiAgfVxcblxcbiAgLm1vdmllX2Rlc2Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5pbmZvX3NlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTQxNDEzIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgfVxcbn1cXG4jYnJpZ2h0IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42OSkgMHB4IDI2cHggMzBweCAtMTBweCwgcmdiYSgwLCAwLCAwLCAwLjczKSAwcHggMTZweCAxMHB4IC0xMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY291cnNlSW5uZXJDYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTs7RUFFRSxTQUFBO0VBRUEsdURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUZGO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUpOO0FBS007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSFI7QUFLTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFIUjtBQUtNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7QUFIUjtBQU1JO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFKTjtBQUtNO0VBQ0UsY0FBQTtBQUhSO0FBTUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpOO0FBS007RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBRlY7QUFHVTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7QUFEWjtBQUdVO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFEWjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5GO0FBUUU7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0FBUko7QUFVRTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUFSSjtBQVVFO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQVJKO0FBVUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFSSjtBQVVJO0VBRUUscUJBQUE7QUFUTjs7QUFtQ0E7RUFDRTtJQUNFLFVBQUE7RUFoQ0Y7O0VBbUNBO0lBQ0UsVUFBQTtFQWhDRjs7RUFtQ0E7SUFDRSxvRUFBQTtFQWhDRjs7RUFtQ0E7SUFDRSxVQUFBO0lBQ0EseUNBQUE7RUFoQ0Y7QUFDRjtBQW1DQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBakNGOztFQW9DQTtJQUNFLFdBQUE7SUFDQSx1Q0FBQTtFQWpDRjs7RUFvQ0E7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFqQ0Y7O0VBb0NBO0lBQ0UsV0FBQTtFQWpDRjs7RUFvQ0E7SUFDRSxrRUFBQTtJQUNBLG9CQUFBO0VBakNGO0FBQ0Y7QUFvQ0E7RUFDRSw0RkFBQTtBQWxDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDAsODAwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLy8gYmFja2dyb3VuZDogMEYxNzFFO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZV9jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgLy8gd2lkdGg6IDgwMHB4O1xcclxcbiAgaGVpZ2h0OiA1NTBweDtcXHJcXG4gIG1hcmdpbjogMXB4IGF1dG87XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxuICAvLyAmOmhvdmVye1xcclxcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgLy8gICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gIC8vIH1cXHJcXG4gIC5pbmZvX3NlY3Rpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC5tb3ZpZV9oZWFkZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgaDEge1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBoNCB7XFxyXFxuICAgICAgICBjb2xvcjogIzlhYzdmYTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5taW51dGVzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC50eXBlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGNvbG9yOiAjY2VlNGZkO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5sb2NhbmRpbmEge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAubW92aWVfZGVzYyB7XFxyXFxuICAgICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAudGV4dCB7XFxyXFxuICAgICAgICBjb2xvcjogI2NmZDZlMTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLm1vdmllX3NvY2lhbCB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICAgIHVsIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICAgIGkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5ibHVyX2JhY2sgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi52aWRlby1idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDczJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxuICAmOjphZnRlcixcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgfVxcclxcbiAgJjo6YmVmb3JlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgJjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb246IHJpcHBsZSAycyBsaW5lYXIgMXMgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEFDRjAwO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICM4QUNGMDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gJjpob3ZlciB7XFxyXFxuLy8gICAuaW1hZ2Uge1xcclxcbi8vICAgICBpbWcge1xcclxcbi8vICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXHJcXG4vLyAgICAgfVxcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cXHJcXG4vLyBAa2V5ZnJhbWVzIHJpcHBsZSB7XFxyXFxuLy8gICAwJSB7XFxyXFxuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuLy8gICB9XFxyXFxuLy8gICA3NSUge1xcclxcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xcclxcbi8vICAgICBvcGFjaXR5OiAxO1xcclxcbi8vICAgfVxcclxcbi8vICAgMTAwJSB7XFxyXFxuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuLy8gICAgIG9wYWNpdHk6IDA7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubW92aWVfaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9kZXNjIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvX3NlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwZjE3MWUgNDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ibHVyX2JhY2sge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAxMCUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb3ZpZV9jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmx1cl9iYWNrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogODVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9kZXNjIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mb19zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDIwLCAyMCwgMTkpIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jYnJpZ2h0IHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDY5JSkgMHB4IDI2cHggMzBweCAtMTBweCwgcmdiKDAgMCAwIC8gNzMlKSAwcHggMTZweCAxMHB4IC0xMHB4O1xcclxcbiAgLy8gJjpob3ZlcntcXHJcXG4gIC8vICAgYm94LXNoYWRvdzogMHB4IDBweCAxMjBweCAtNTVweCAjOEFDRjAwO1xcclxcbiAgLy8gfVxcclxcbn1cXHJcXG5cXHJcXG4vLyAuYnJpZ2h0X2JhY2t7XFxyXFxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoJHtjb3Vyc2UuY292ZXJQaG90b30pO1xcclxcbi8vIH1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNTYwcHgpe1xcclxcbiAgLy8gLm1vdmllX2hlYWRlciB7XFxyXFxuICAvLyAgIC8vIHdpZHRoOiA2MCU7XFxyXFxuICAvLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gIC8vIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=