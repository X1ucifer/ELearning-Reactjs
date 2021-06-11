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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", helvetica, arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.movie_card {\n  position: relative;\n  display: block;\n  height: 550px;\n  margin: 1px auto;\n  overflow: hidden;\n  border-radius: 0px;\n  transition: all 0.4s;\n}\n.movie_card .info_section {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: multiply;\n  z-index: 2;\n  border-radius: 10px;\n}\n.movie_card .info_section .movie_header {\n  position: relative;\n  padding-left: 25px;\n  padding-top: 50px;\n  height: 40%;\n}\n.movie_card .info_section .movie_header h1 {\n  color: #fff;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header h4 {\n  color: #9ac7fa;\n  font-weight: 400;\n}\n.movie_card .info_section .movie_header .minutes {\n  display: inline-block;\n  margin-top: 10px;\n  color: #fff;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n.movie_card .info_section .movie_header .type {\n  display: inline-block;\n  color: #cee4fd;\n  margin-left: 10px;\n}\n.movie_card .info_section .movie_header .locandina {\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  height: 120px;\n  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\n}\n.movie_card .info_section .movie_desc {\n  padding: 25px;\n  height: 50%;\n}\n.movie_card .info_section .movie_desc .text {\n  color: #cfd6e1;\n}\n.movie_card .info_section .movie_social {\n  height: 10%;\n  padding-left: 15px;\n  padding-bottom: 20px;\n}\n.movie_card .info_section .movie_social ul {\n  list-style: none;\n  padding: 0;\n}\n.movie_card .info_section .movie_social ul li {\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.4);\n  transition: color 0.3s;\n  transition-delay: 0.15s;\n  margin: 0 10px;\n}\n.movie_card .info_section .movie_social ul li:hover {\n  transition: color 0.3s;\n  color: rgba(255, 255, 255, 0.8);\n}\n.movie_card .info_section .movie_social ul li i {\n  font-size: 19px;\n  cursor: pointer;\n}\n.movie_card .blur_back img {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  height: 100%;\n  right: 0;\n  background-size: cover;\n  border-radius: 11px;\n}\n\n.video-btn {\n  display: inline-block;\n  opacity: 0.8;\n  width: 80px;\n  height: 80px;\n  font-size: 35px;\n  text-align: center;\n  line-height: 80px;\n  position: absolute;\n  left: 73%;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%) translateX(-50%);\n  background-color: #8ACF00;\n  border-radius: 50%;\n  color: black;\n}\n.video-btn::after, .video-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid #8ACF00;\n}\n.video-btn::before {\n  -webkit-animation: ripple 2s linear infinite;\n          animation: ripple 2s linear infinite;\n}\n.video-btn::after {\n  -webkit-animation: ripple 2s linear 1s infinite;\n          animation: ripple 2s linear 1s infinite;\n}\n.video-btn:hover {\n  color: black;\n  background-color: white;\n}\n.video-btn:hover::before, .video-btn:hover::after {\n  border-color: white;\n}\n\n@media screen and (min-width: 768px) {\n  .movie_header {\n    width: 60%;\n  }\n\n  .movie_desc {\n    width: 50%;\n  }\n\n  .info_section {\n    background: linear-gradient(to right, #0f171e 40%, transparent 100%);\n  }\n\n  .blur_back {\n    width: 80%;\n    background-position: -100% 10% !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .movie_card {\n    width: 95%;\n    margin: 70px auto;\n    min-height: 350px;\n    height: auto;\n  }\n\n  .blur_back {\n    width: 100%;\n    background-position: 50% 50% !important;\n  }\n\n  .movie_header {\n    width: 100%;\n    margin-top: 85px;\n  }\n\n  .movie_desc {\n    width: 100%;\n  }\n\n  .info_section {\n    background: linear-gradient(to top, #141413 50%, transparent 100%);\n    display: inline-grid;\n  }\n}\n#bright {\n  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;\n}", "",{"version":3,"sources":["webpack://courseInnerCard.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,SAAA;AAAF;;AAGA;;EAEE,SAAA;EAEA,uDAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,cAAA;EAEA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;AAFF;AAOE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,+BAAA;EACA,UAAA;EACA,mBAAA;AALJ;AAMI;EACE,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;AAJN;AAKM;EACE,WAAA;EACA,gBAAA;AAHR;AAKM;EACE,cAAA;EACA,gBAAA;AAHR;AAKM;EACE,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;AAHR;AAKM;EACE,qBAAA;EACA,cAAA;EACA,iBAAA;AAHR;AAKM;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,6CAAA;AAHR;AAMI;EACE,aAAA;EACA,WAAA;AAJN;AAKM;EACE,cAAA;AAHR;AAMI;EACE,WAAA;EACA,kBAAA;EACA,oBAAA;AAJN;AAKM;EACE,gBAAA;EACA,UAAA;AAHR;AAIQ;EACE,qBAAA;EACA,+BAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;AAFV;AAGU;EACE,sBAAA;EACA,+BAAA;AADZ;AAGU;EACE,eAAA;EACA,eAAA;AADZ;AAOE;EACE,kBAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,QAAA;EACA,sBAAA;EACA,mBAAA;AALJ;;AASA;EACE,qBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,4CAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;AANF;AAQE;EAEE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EAEA,kBAAA;EACA,yBAAA;AARJ;AAUE;EACE,4CAAA;UAAA,oCAAA;AARJ;AAUE;EACE,+CAAA;UAAA,uCAAA;AARJ;AAUE;EACE,YAAA;EACA,uBAAA;AARJ;AAUI;EAEE,mBAAA;AATN;;AAmCA;EACE;IACE,UAAA;EAhCF;;EAmCA;IACE,UAAA;EAhCF;;EAmCA;IACE,oEAAA;EAhCF;;EAmCA;IACE,UAAA;IACA,yCAAA;EAhCF;AACF;AAmCA;EACE;IACE,UAAA;IACA,iBAAA;IACA,iBAAA;IACA,YAAA;EAjCF;;EAoCA;IACE,WAAA;IACA,uCAAA;EAjCF;;EAoCA;IACE,WAAA;IACA,gBAAA;EAjCF;;EAoCA;IACE,WAAA;EAjCF;;EAoCA;IACE,kEAAA;IACA,oBAAA;EAjCF;AACF;AAoCA;EACE,4FAAA;AAlCF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  // background: 0F171E;\r\n  font-family: \"Montserrat\", helvetica, arial, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.movie_card {\r\n  position: relative;\r\n  display: block;\r\n  // width: 800px;\r\n  height: 550px;\r\n  margin: 1px auto;\r\n  overflow: hidden;\r\n  border-radius: 0px;\r\n  transition: all 0.4s;\r\n  // &:hover{\r\n  //   transform: scale(1.02);\r\n  //   transition: all 0.4s;\r\n  // }\r\n  .info_section {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-blend-mode: multiply;\r\n    z-index: 2;\r\n    border-radius: 10px;\r\n    .movie_header {\r\n      position: relative;\r\n      padding-left: 25px;\r\n      padding-top: 50px;\r\n      height: 40%;\r\n      h1 {\r\n        color: #fff;\r\n        font-weight: 400;\r\n      }\r\n      h4 {\r\n        color: #9ac7fa;\r\n        font-weight: 400;\r\n      }\r\n      .minutes {\r\n        display: inline-block;\r\n        margin-top: 10px;\r\n        color: #fff;\r\n        padding: 5px;\r\n        border-radius: 5px;\r\n        border: 1px solid rgba(255, 255, 255, 0.13);\r\n      }\r\n      .type {\r\n        display: inline-block;\r\n        color: #cee4fd;\r\n        margin-left: 10px;\r\n      }\r\n      .locandina {\r\n        position: relative;\r\n        float: left;\r\n        margin-right: 20px;\r\n        height: 120px;\r\n        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\r\n      }\r\n    }\r\n    .movie_desc {\r\n      padding: 25px;\r\n      height: 50%;\r\n      .text {\r\n        color: #cfd6e1;\r\n      }\r\n    }\r\n    .movie_social {\r\n      height: 10%;\r\n      padding-left: 15px;\r\n      padding-bottom: 20px;\r\n      ul {\r\n        list-style: none;\r\n        padding: 0;\r\n        li {\r\n          display: inline-block;\r\n          color: rgba(255, 255, 255, 0.4);\r\n          transition: color 0.3s;\r\n          transition-delay: 0.15s;\r\n          margin: 0 10px;\r\n          &:hover {\r\n            transition: color 0.3s;\r\n            color: rgba(255, 255, 255, 0.8);\r\n          }\r\n          i {\r\n            font-size: 19px;\r\n            cursor: pointer;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .blur_back img {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n    height: 100%;\r\n    right: 0;\r\n    background-size: cover;\r\n    border-radius: 11px;\r\n  }\r\n}\r\n\r\n.video-btn {\r\n  display: inline-block;\r\n  opacity: 0.8;\r\n  width: 80px;\r\n  height: 80px;\r\n  font-size: 35px;\r\n  text-align: center;\r\n  line-height: 80px;\r\n  position: absolute;\r\n  left: 73%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  transform: translateY(-50%) translateX(-50%);\r\n  background-color: #8ACF00;\r\n  border-radius: 50%;\r\n  color: black;\r\n\r\n  &::after,\r\n  &::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    bottom: 0;\r\n    left: 0;\r\n    // transition: 0.5s;\r\n    border-radius: 50%;\r\n    border: 1px solid #8ACF00;\r\n  }\r\n  &::before {\r\n    animation: ripple 2s linear infinite;\r\n  }\r\n  &::after {\r\n    animation: ripple 2s linear 1s infinite;\r\n  }\r\n  &:hover {\r\n    color: black;\r\n    background-color: white;\r\n\r\n    &::before,\r\n    &::after {\r\n      border-color: white;\r\n    }\r\n  }\r\n}\r\n// &:hover {\r\n//   .image {\r\n//     img {\r\n//       transform: scale3d(1.1, 1.1, 1.1);\r\n//     }\r\n//   }\r\n// }\r\n\r\n// @keyframes ripple {\r\n//   0% {\r\n//     transform: scale(1);\r\n//   }\r\n//   75% {\r\n//     transform: scale(1.75);\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     transform: scale(2);\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie_header {\r\n    width: 60%;\r\n  }\r\n\r\n  .movie_desc {\r\n    width: 50%;\r\n  }\r\n\r\n  .info_section {\r\n    background: linear-gradient(to right, #0f171e 40%, transparent 100%);\r\n  }\r\n\r\n  .blur_back {\r\n    width: 80%;\r\n    background-position: -100% 10% !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .movie_card {\r\n    width: 95%;\r\n    margin: 70px auto;\r\n    min-height: 350px;\r\n    height: auto;\r\n  }\r\n\r\n  .blur_back {\r\n    width: 100%;\r\n    background-position: 50% 50% !important;\r\n  }\r\n\r\n  .movie_header {\r\n    width: 100%;\r\n    margin-top: 85px;\r\n  }\r\n\r\n  .movie_desc {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_section {\r\n    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);\r\n    display: inline-grid;\r\n  }\r\n}\r\n\r\n#bright {\r\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\r\n  // &:hover{\r\n  //   box-shadow: 0px 0px 120px -55px #8ACF00;\r\n  // }\r\n}\r\n\r\n// .bright_back{\r\n//   background: url(${course.coverPhoto});\r\n// }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Nzcy9jb3Vyc2VJbm5lckNhcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUyxtRkFBbUY7QUFDMUg7QUFDQSw4QkFBOEIsUUFBUyxNQUFNLDJCQUEyQixjQUFjLEdBQUcsaUJBQWlCLGNBQWMsOERBQThELG9CQUFvQixxQkFBcUIsR0FBRyxpQkFBaUIsdUJBQXVCLG1CQUFtQixrQkFBa0IscUJBQXFCLHFCQUFxQix1QkFBdUIseUJBQXlCLEdBQUcsNkJBQTZCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9DQUFvQyxlQUFlLHdCQUF3QixHQUFHLDJDQUEyQyx1QkFBdUIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsR0FBRyw4Q0FBOEMsZ0JBQWdCLHFCQUFxQixHQUFHLDhDQUE4QyxtQkFBbUIscUJBQXFCLEdBQUcsb0RBQW9ELDBCQUEwQixxQkFBcUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsZ0RBQWdELEdBQUcsaURBQWlELDBCQUEwQixtQkFBbUIsc0JBQXNCLEdBQUcsc0RBQXNELHVCQUF1QixnQkFBZ0IsdUJBQXVCLGtCQUFrQixrREFBa0QsR0FBRyx5Q0FBeUMsa0JBQWtCLGdCQUFnQixHQUFHLCtDQUErQyxtQkFBbUIsR0FBRywyQ0FBMkMsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsR0FBRyw4Q0FBOEMscUJBQXFCLGVBQWUsR0FBRyxpREFBaUQsMEJBQTBCLG9DQUFvQywyQkFBMkIsNEJBQTRCLG1CQUFtQixHQUFHLHVEQUF1RCwyQkFBMkIsb0NBQW9DLEdBQUcsbURBQW1ELG9CQUFvQixvQkFBb0IsR0FBRyw4QkFBOEIsdUJBQXVCLFdBQVcsZUFBZSxpQkFBaUIsYUFBYSwyQkFBMkIsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixvQkFBb0Is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Z0RBQWdELE9BQU8seUJBQXlCLG9CQUFvQix5QkFBeUIsT0FBTyx1QkFBdUIsb0JBQW9CLE9BQU8seUJBQXlCLG1GQUFtRiw2QkFBNkIsT0FBTyxLQUFLLGlCQUFpQiw2RkFBNkYsaUJBQWlCLG1EQUFtRCxVQUFVLEtBQUssd0JBQXdCLDJCQUEyQixrQkFBa0IsRUFBRSxRQUFRLHVCQUF1QjtBQUN6dVY7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM0ZDA2ZGJjNjJhYzY3ODY1Zjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDAsODAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb3ZpZV9jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIG1hcmdpbjogMXB4IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIGhlaWdodDogNDAlO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgaDQge1xcbiAgY29sb3I6ICM5YWM3ZmE7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgLm1pbnV0ZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfaGVhZGVyIC50eXBlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjY2VlNGZkO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciAubG9jYW5kaW5hIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfZGVzYyB7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2Rlc2MgLnRleHQge1xcbiAgY29sb3I6ICNjZmQ2ZTE7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9zb2NpYWwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB1bCBsaTpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfc29jaWFsIHVsIGxpIGkge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW92aWVfY2FyZCAuYmx1cl9iYWNrIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG59XFxuXFxuLnZpZGVvLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNzMlO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEFDRjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udmlkZW8tYnRuOjphZnRlciwgLnZpZGVvLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QUNGMDA7XFxufVxcbi52aWRlby1idG46OmJlZm9yZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmlwcGxlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4udmlkZW8tYnRuOjphZnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmlwcGxlIDJzIGxpbmVhciAxcyBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMnMgbGluZWFyIDFzIGluZmluaXRlO1xcbn1cXG4udmlkZW8tYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udmlkZW8tYnRuOmhvdmVyOjpiZWZvcmUsIC52aWRlby1idG46aG92ZXI6OmFmdGVyIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubW92aWVfaGVhZGVyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG5cXG4gIC5tb3ZpZV9kZXNjIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5pbmZvX3NlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwZjE3MWUgNDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcXG4gIH1cXG5cXG4gIC5ibHVyX2JhY2sge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAxMCUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tb3ZpZV9jYXJkIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuYmx1cl9iYWNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5tb3ZpZV9oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogODVweDtcXG4gIH1cXG5cXG4gIC5tb3ZpZV9kZXNjIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuaW5mb19zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzE0MTQxMyA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIH1cXG59XFxuI2JyaWdodCB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNjkpIDBweCAyNnB4IDMwcHggLTEwcHgsIHJnYmEoMCwgMCwgMCwgMC43MykgMHB4IDE2cHggMTBweCAtMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvdXJzZUlubmVyQ2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7O0VBRUUsU0FBQTtFQUVBLHVEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFNSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFKTjtBQUtNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSFI7QUFLTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUhSO0FBS007RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBSFI7QUFLTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBSFI7QUFNSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBSk47QUFLTTtFQUNFLGNBQUE7QUFIUjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKTjtBQUtNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBSFI7QUFJUTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUZWO0FBR1U7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0FBRFo7QUFHVTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRFo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFORjtBQVFFO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQVJKO0FBVUU7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0FBUko7QUFVRTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUFSSjtBQVVFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBUko7QUFVSTtFQUVFLG1CQUFBO0FBVE47O0FBbUNBO0VBQ0U7SUFDRSxVQUFBO0VBaENGOztFQW1DQTtJQUNFLFVBQUE7RUFoQ0Y7O0VBbUNBO0lBQ0Usb0VBQUE7RUFoQ0Y7O0VBbUNBO0lBQ0UsVUFBQTtJQUNBLHlDQUFBO0VBaENGO0FBQ0Y7QUFtQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQWpDRjs7RUFvQ0E7SUFDRSxXQUFBO0lBQ0EsdUNBQUE7RUFqQ0Y7O0VBb0NBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBakNGOztFQW9DQTtJQUNFLFdBQUE7RUFqQ0Y7O0VBb0NBO0lBQ0Usa0VBQUE7SUFDQSxvQkFBQTtFQWpDRjtBQUNGO0FBb0NBO0VBQ0UsNEZBQUE7QUFsQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwLDgwMFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8vIGJhY2tncm91bmQ6IDBGMTcxRTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVfY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8vIHdpZHRoOiA4MDBweDtcXHJcXG4gIGhlaWdodDogNTUwcHg7XFxyXFxuICBtYXJnaW46IDFweCBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbiAgLy8gJjpob3ZlcntcXHJcXG4gIC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gIC8vICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxuICAvLyB9XFxyXFxuICAuaW5mb19zZWN0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAubW92aWVfaGVhZGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaDQge1xcclxcbiAgICAgICAgY29sb3I6ICM5YWM3ZmE7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAubWludXRlcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAudHlwZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBjb2xvcjogI2NlZTRmZDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAubG9jYW5kaW5hIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLm1vdmllX2Rlc2Mge1xcclxcbiAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgLnRleHQge1xcclxcbiAgICAgICAgY29sb3I6ICNjZmQ2ZTE7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5tb3ZpZV9zb2NpYWwge1xcclxcbiAgICAgIGhlaWdodDogMTAlO1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICB1bCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuYmx1cl9iYWNrIGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udmlkZW8tYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA3MyU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4QUNGMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxuICAmOjphZnRlcixcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QUNGMDA7XFxyXFxuICB9XFxyXFxuICAmOjpiZWZvcmUge1xcclxcbiAgICBhbmltYXRpb246IHJpcHBsZSAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICAmOjphZnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogcmlwcGxlIDJzIGxpbmVhciAxcyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi8vICY6aG92ZXIge1xcclxcbi8vICAgLmltYWdlIHtcXHJcXG4vLyAgICAgaW1nIHtcXHJcXG4vLyAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gQGtleWZyYW1lcyByaXBwbGUge1xcclxcbi8vICAgMCUge1xcclxcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbi8vICAgfVxcclxcbi8vICAgNzUlIHtcXHJcXG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcXHJcXG4vLyAgICAgb3BhY2l0eTogMTtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIDEwMCUge1xcclxcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbi8vICAgICBvcGFjaXR5OiAwO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1vdmllX2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfZGVzYyB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mb19zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGYxNzFlIDQwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmx1cl9iYWNrIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMTAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubW92aWVfY2FyZCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJsdXJfYmFjayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDg1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfZGVzYyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmluZm9fc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigyMCwgMjAsIDE5KSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2JyaWdodCB7XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA2OSUpIDBweCAyNnB4IDMwcHggLTEwcHgsIHJnYigwIDAgMCAvIDczJSkgMHB4IDE2cHggMTBweCAtMTBweDtcXHJcXG4gIC8vICY6aG92ZXJ7XFxyXFxuICAvLyAgIGJveC1zaGFkb3c6IDBweCAwcHggMTIwcHggLTU1cHggIzhBQ0YwMDtcXHJcXG4gIC8vIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLmJyaWdodF9iYWNre1xcclxcbi8vICAgYmFja2dyb3VuZDogdXJsKCR7Y291cnNlLmNvdmVyUGhvdG99KTtcXHJcXG4vLyB9XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=