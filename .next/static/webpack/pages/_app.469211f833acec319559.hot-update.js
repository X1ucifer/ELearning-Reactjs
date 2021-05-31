webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navbar */ "./components/_App/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./components/_App/Footer.js");
/* harmony import */ var _StudentNavbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StudentNavbar */ "./components/_App/StudentNavbar.js");
/* harmony import */ var _AdminNavbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminNavbar */ "./components/_App/AdminNavbar.js");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Preloader */ "./components/_App/Preloader.js");



var _jsxFileName = "C:\\Users\\AJ\\Downloads\\Spyberrys\\Spyberrys\\Spyberrys_app\\components\\_App\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();













var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      user = _ref.user;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      loader = _React$useState2[0],
      setLoader = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setTimeout(function () {
      setLoader(false);
    }, 1000);
  }, []);
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeStart', function () {
    setLoader(true);
  });
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComplete', function () {
    setLoader(false);
  });
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeError', function () {
    setLoader(false);
  });
  var isStudent = user && user.role === 'student';
  var isAdmin = user && user.role === 'admin';
  var isTeacher = user && user.role === 'teacher';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SpyBerrys"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "eDemy - React Next Online Courses & Education Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "og:title",
        property: "og:title",
        content: "eDemy - React Next Online Courses & Education Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "eDemy - React Next Online Courses & Education Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "https://edemy-react.envytheme.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), loader && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Preloader__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 24
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["Toaster"], {
      position: "top-left",
      reverseOrder: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastProvider"], {
      placement: "bottom-left",
      autoDismissTimeout: 10000,
      autoDismiss: true,
      children: [isStudent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StudentNavbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, _this) : isAdmin || isTeacher ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AdminNavbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoTop__WEBPACK_IMPORTED_MODULE_7__["default"], {
        scrollStepInPx: "100",
        delayInMs: "10.50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(Layout, "v9Gmr36LIRqHprS819AlpxmZHdc=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGVyIiwic2V0TG9hZGVyIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiaXNTdHVkZW50Iiwicm9sZSIsImlzQWRtaW4iLCJpc1RlYWNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHdCQUNQQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQURPO0FBQUE7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBRW5DSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDbEJDLGNBQVUsQ0FBQyxZQUFNO0FBQ2JGLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FKRCxFQUlHLEVBSkg7QUFNQUcsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxZQUFNO0FBQ3ZDTCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsR0FGRDtBQUdBRyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQU07QUFDMUNMLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxHQUZEO0FBR0FHLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsWUFBTTtBQUN2Q0wsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBRkQ7QUFJQSxNQUFNTSxTQUFTLEdBQUdWLElBQUksSUFBSUEsSUFBSSxDQUFDVyxJQUFMLEtBQWMsU0FBeEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdaLElBQUksSUFBSUEsSUFBSSxDQUFDVyxJQUFMLEtBQWMsT0FBdEM7QUFDQSxNQUFNRSxTQUFTLEdBQUdiLElBQUksSUFBSUEsSUFBSSxDQUFDVyxJQUFMLEtBQWMsU0FBeEM7QUFHQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGdCQUFRLEVBQUMsVUFBL0I7QUFBMEMsZUFBTyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQU1JO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQVVLUixNQUFNLGlCQUFJLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWZixlQVlJLHFFQUFDLHVEQUFEO0FBQ0ksY0FBUSxFQUFDLFVBRGI7QUFFSSxrQkFBWSxFQUFFO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSixlQWlCSSxxRUFBQyx1RUFBRDtBQUNJLGVBQVMsRUFBRyxhQURoQjtBQUVJLHdCQUFrQixFQUFFLEtBRnhCO0FBR0ksaUJBQVcsTUFIZjtBQUFBLGlCQUtLTyxTQUFTLGdCQUNOLHFFQUFDLHVEQUFEO0FBQWUsWUFBSSxFQUFFVjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE0sR0FFTFksT0FBTyxJQUFJQyxTQUFaLGdCQUNBLHFFQUFDLHFEQUFEO0FBQWEsWUFBSSxFQUFFYjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZ0JBR0EscUVBQUMsK0NBQUQ7QUFBUSxZQUFJLEVBQUVBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZSLEVBYUtELFFBYkwsZUFlSSxxRUFBQyw4Q0FBRDtBQUFPLHNCQUFjLEVBQUMsS0FBdEI7QUFBNEIsaUJBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUFnQkkscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1Q0gsQ0E5REQ7O0dBQU1ELE07O0tBQUFBLE07QUFnRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDY5MjExZjgzM2FjZWMzMTk1NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBHb1RvcCBmcm9tICcuL0dvVG9wJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5pbXBvcnQgU3R1ZGVudE5hdmJhciBmcm9tICcuL1N0dWRlbnROYXZiYXInXG5pbXBvcnQgQWRtaW5OYXZiYXIgZnJvbSAnLi9BZG1pbk5hdmJhcidcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9QcmVsb2FkZXInXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB1c2VyIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRlcihmYWxzZSlcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSwgW10pXG5cbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZXIodHJ1ZSlcbiAgICB9KVxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcbiAgICB9KVxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGlzU3R1ZGVudCA9IHVzZXIgJiYgdXNlci5yb2xlID09PSAnc3R1ZGVudCdcbiAgICBjb25zdCBpc0FkbWluID0gdXNlciAmJiB1c2VyLnJvbGUgPT09ICdhZG1pbidcbiAgICBjb25zdCBpc1RlYWNoZXIgPSB1c2VyICYmIHVzZXIucm9sZSA9PT0gJ3RlYWNoZXInXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlNweUJlcnJ5czwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiZURlbXkgLSBSZWFjdCBOZXh0IE9ubGluZSBDb3Vyc2VzICYgRWR1Y2F0aW9uIFRlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cImVEZW15IC0gUmVhY3QgTmV4dCBPbmxpbmUgQ291cnNlcyAmIEVkdWNhdGlvbiBUZW1wbGF0ZVwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cImVEZW15IC0gUmVhY3QgTmV4dCBPbmxpbmUgQ291cnNlcyAmIEVkdWNhdGlvbiBUZW1wbGF0ZVwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9lZGVteS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAge2xvYWRlciAmJiA8UHJlbG9hZGVyIC8+fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8VG9hc3RlclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxuICAgICAgICAgICAgICAgIHJldmVyc2VPcmRlcj17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VG9hc3RQcm92aWRlclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9ICdib3R0b20tbGVmdCdcbiAgICAgICAgICAgICAgICBhdXRvRGlzbWlzc1RpbWVvdXQ9ezEwMDAwfVxuICAgICAgICAgICAgICAgIGF1dG9EaXNtaXNzXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzU3R1ZGVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPFN0dWRlbnROYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgICApIDogKGlzQWRtaW4gfHwgaXNUZWFjaGVyKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFkbWluTmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPiAgXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1RvYXN0UHJvdmlkZXI+XG4gIFxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9