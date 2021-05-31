webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Index_MainBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Index/MainBanner */ "./components/Index/MainBanner.js");
/* harmony import */ var _components_Index_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Index/Features */ "./components/Index/Features.js");
/* harmony import */ var _components_Index_TopCourses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Index/TopCourses */ "./components/Index/TopCourses.js");
/* harmony import */ var _components_Index_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Index/About */ "./components/Index/About.js");
/* harmony import */ var _components_Index_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Index/Testimonials */ "./components/Index/Testimonials.js");
/* harmony import */ var _components_Index_Instance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Index/Instance */ "./components/Index/Instance.js");
/* harmony import */ var _components_Index_Partner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Index/Partner */ "./components/Index/Partner.js");
/* harmony import */ var _components_Index_Ad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Index/Ad */ "./components/Index/Ad.js");
/* harmony import */ var _components_Index_Funfacts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Index/Funfacts */ "./components/Index/Funfacts.js");
/* harmony import */ var _components_Index_Blog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Index/Blog */ "./components/Index/Blog.js");
/* harmony import */ var _components_Index_EdemyPremium__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Index/EdemyPremium */ "./components/Index/EdemyPremium.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/baseUrl */ "./utils/baseUrl.js");




var _jsxFileName = "C:\\Users\\AJ\\Downloads\\Spyberrys\\Spyberrys\\Spyberrys_app\\pages\\index.js",
    _this = undefined;
















var Index = function Index(_ref) {
  var courses = _ref.courses;
  // console.log(courses)
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Index_MainBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Index_EdemyPremium__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, response;
  return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_16__["default"], "/api/v1/courses/homepage-courses");
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(url);

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb3Vyc2VzIiwiZ2V0SW5pdGlhbFByb3BzIiwidXJsIiwiYmFzZVVybCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNCO0FBQ0Esc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0kscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FqQkQ7O0tBQU1ELEs7QUFtQk5BLEtBQUssQ0FBQ0UsZUFBTix1VUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLGFBRGMsYUFDTEMsdURBREs7QUFBQTtBQUFBLGlCQUVHQyw2Q0FBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsQ0FGSDs7QUFBQTtBQUVkSSxrQkFGYztBQUFBLDJDQUliQSxRQUFRLENBQUNDLElBSkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFPZVIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTFiYjM1NGQ5OGFmZTJlZDFlOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWluQmFubmVyIGZyb20gJ0AvY29tcG9uZW50cy9JbmRleC9NYWluQmFubmVyJ1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJ0AvY29tcG9uZW50cy9JbmRleC9GZWF0dXJlcydcbmltcG9ydCBUb3BDb3Vyc2VzIGZyb20gJ0AvY29tcG9uZW50cy9JbmRleC9Ub3BDb3Vyc2VzJ1xuaW1wb3J0IEFib3V0IGZyb20gJ0AvY29tcG9uZW50cy9JbmRleC9BYm91dCdcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnQC9jb21wb25lbnRzL0luZGV4L1Rlc3RpbW9uaWFscydcbmltcG9ydCBJbnN0YW5jZSBmcm9tICdAL2NvbXBvbmVudHMvSW5kZXgvSW5zdGFuY2UnXG5pbXBvcnQgUGFydG5lciBmcm9tICdAL2NvbXBvbmVudHMvSW5kZXgvUGFydG5lcidcbmltcG9ydCBBZCBmcm9tICdAL2NvbXBvbmVudHMvSW5kZXgvQWQnXG5pbXBvcnQgRnVuZmFjdHMgZnJvbSAnQC9jb21wb25lbnRzL0luZGV4L0Z1bmZhY3RzJ1xuaW1wb3J0IEJsb2cgZnJvbSAnQC9jb21wb25lbnRzL0luZGV4L0Jsb2cnXG5pbXBvcnQgRWRlbXlQcmVtaXVtIGZyb20gJ0AvY29tcG9uZW50cy9JbmRleC9FZGVteVByZW1pdW0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgYmFzZVVybCBmcm9tICdAL3V0aWxzL2Jhc2VVcmwnXG5cbmNvbnN0IEluZGV4ID0gKHsgY291cnNlcyB9KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY291cnNlcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TWFpbkJhbm5lciAvPlxuICAgICAgICAgICAgey8qIDxGZWF0dXJlcyAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8VG9wQ291cnNlcyBjb3Vyc2VzPXtjb3Vyc2VzfSAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8QWJvdXQgLz4gKi99XG4gICAgICAgICAgICB7LyogPFRlc3RpbW9uaWFscyAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8SW5zdGFuY2UgLz4gKi99XG4gICAgICAgICAgICB7LyogPFBhcnRuZXIgLz4gKi99XG4gICAgICAgICAgICB7LyogPEFkIC8+ICovfVxuICAgICAgICAgICAgey8qIDxGdW5mYWN0cyAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8QmxvZyAvPiAqL31cbiAgICAgICAgICAgIDxFZGVteVByZW1pdW0gLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9ob21lcGFnZS1jb3Vyc2VzYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=