webpackHotUpdate_N_E("pages/courses/[id]",{

/***/ "./components/SingleCourses/CoursesDetailsSidebar.js":
/*!***********************************************************!*\
  !*** ./components/SingleCourses/CoursesDetailsSidebar.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CheckoutButton_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CheckoutButton/CheckoutBtn */ "./components/CheckoutButton/CheckoutBtn.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\AJ\\Downloads\\Spyberrys\\Spyberrys\\Spyberrys_app\\components\\SingleCourses\\CoursesDetailsSidebar.js",
    _this = undefined,
    _s = $RefreshSig$();











var CoursesDetailsSidebar = function CoursesDetailsSidebar(_ref) {
  _s();

  var id = _ref.id,
      price = _ref.price,
      user = _ref.user,
      profilePhoto = _ref.profilePhoto,
      lessons = _ref.lessons,
      duration = _ref.duration,
      title = _ref.title,
      course_preview_video = _ref.course_preview_video,
      loggedInUser = _ref.loggedInUser;

  // console.log(loggedInUser)
  var _ref2 = loggedInUser ? loggedInUser : '',
      enroled_courses = _ref2.enroled_courses;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])(); // Popup Video

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState2 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      enrolled = _React$useState2[0],
      setEnrolled = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    var countEnrolled = /*#__PURE__*/function () {
      var _ref3 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, response;
        return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__["default"], "/api/v1/courses/enrolled/").concat(id);
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url);

              case 3:
                response = _context.sent;
                setEnrolled(response.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function countEnrolled() {
        return _ref3.apply(this, arguments);
      };
    }(); // setEnrolled(response.data.enrolled)


    countEnrolled();
  }, []);

  var checkBoughtAlready = function checkBoughtAlready() {
    return enroled_courses.filter(function (val) {
      return val.courseId === id;
    }).length > 0;
  }; // console.log(checkBoughtAlready())


  var handleCheckout = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(paymentData) {
      var token, stripeTotal, url, payload, headers, response;
      return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              token = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get("token");
              stripeTotal = Number((price * 100).toFixed(2));
              paymentData['courseId'] = id;
              paymentData['stripeTotal'] = stripeTotal;
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__["default"], "/api/v1/courses/checkout");
              payload = {
                paymentData: paymentData
              };
              headers = {
                headers: {
                  Authorization: token
                }
              };
              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, payload, headers);

            case 10:
              response = _context2.sent;
              react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].success(response.data);
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__["default"])(_context2.t0, window.alert);
              console.log(_context2.t0.message);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function handleCheckout(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: loggedInUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: checkBoughtAlready() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "default-btn",
            disabled: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-tag"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 33
            }, _this), " Enrolled ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 75
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 29
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckoutButton_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
            handleCheckout: handleCheckout,
            image: profilePhoto,
            name: title,
            price: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, _this)
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "default-btn",
          onClick: function onClick() {
            router.push('/authentication');
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "flaticon-tag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, _this), " Login To Buy ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 75
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, _this);
};

_s(CoursesDetailsSidebar, "SZtzEI7uaViAyBOcKLTc9+KdKtA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = CoursesDetailsSidebar;
/* harmony default export */ __webpack_exports__["default"] = (CoursesDetailsSidebar);

var _c;

$RefreshReg$(_c, "CoursesDetailsSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDb3Vyc2VzL0NvdXJzZXNEZXRhaWxzU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJDb3Vyc2VzRGV0YWlsc1NpZGViYXIiLCJpZCIsInByaWNlIiwidXNlciIsInByb2ZpbGVQaG90byIsImxlc3NvbnMiLCJkdXJhdGlvbiIsInRpdGxlIiwiY291cnNlX3ByZXZpZXdfdmlkZW8iLCJsb2dnZWRJblVzZXIiLCJlbnJvbGVkX2NvdXJzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZW5yb2xsZWQiLCJzZXRFbnJvbGxlZCIsInVzZUVmZmVjdCIsImNvdW50RW5yb2xsZWQiLCJ1cmwiLCJiYXNlVXJsIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJjaGVja0JvdWdodEFscmVhZHkiLCJmaWx0ZXIiLCJ2YWwiLCJjb3Vyc2VJZCIsImxlbmd0aCIsImhhbmRsZUNoZWNrb3V0IiwicGF5bWVudERhdGEiLCJ0b2tlbiIsImNvb2tpZSIsInN0cmlwZVRvdGFsIiwiTnVtYmVyIiwidG9GaXhlZCIsInBheWxvYWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjYXRjaEVycm9ycyIsIndpbmRvdyIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BRXhCO0FBQUE7O0FBQUEsTUFERkMsRUFDRSxRQURGQSxFQUNFO0FBQUEsTUFERUMsS0FDRixRQURFQSxLQUNGO0FBQUEsTUFEU0MsSUFDVCxRQURTQSxJQUNUO0FBQUEsTUFEZUMsWUFDZixRQURl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LGFBQWxCO0FBQWdDLG9CQUFRLE1BQXhDO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESiw2QkFDOEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlLGdCQUtmLHFFQUFDLDhFQUFEO0FBQ0ksMEJBQWMsRUFBRUssY0FEcEI7QUFFSSxpQkFBSyxFQUFFMUIsWUFGWDtBQUdJLGdCQUFJLEVBQUVHLEtBSFY7QUFJSSxpQkFBSyxFQUFFTDtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSix5QkFEUyxnQkFnQlQ7QUFBUSxtQkFBUyxFQUFDLGFBQWxCO0FBQWdDLGlCQUFPLEVBQUUsbUJBQU07QUFBQ1Msa0JBQU0sQ0FBQ3NDLElBQVAsQ0FBWSxpQkFBWjtBQUErQixXQUEvRTtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosaUNBQ2tEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStDSCxDQTdGRDs7R0FBTWpELHFCO1VBS2FZLHNEOzs7S0FMYloscUI7QUErRlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdXJzZXMvW2lkXS44OWVhMGQ3OTBkZTFjYTM5NDljYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBDaGVja291dEJ0biBmcm9tICdAL2NvbXBvbmVudHMvQ2hlY2tvdXRCdXR0b24vQ2hlY2tvdXRCdG4nXG5pbXBvcnQgYmFzZVVybCBmcm9tICdAL3V0aWxzL2Jhc2VVcmwnXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnQC91dGlscy9jYXRjaEVycm9ycydcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgQ291cnNlc0RldGFpbHNTaWRlYmFyID0gKHtcbiAgICBpZCwgcHJpY2UsIHVzZXIsIHByb2ZpbGVQaG90bywgbGVzc29ucywgZHVyYXRpb24sIHRpdGxlLCBjb3Vyc2VfcHJldmlld192aWRlbywgbG9nZ2VkSW5Vc2VyXG59KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobG9nZ2VkSW5Vc2VyKVxuICAgIGNvbnN0IHsgZW5yb2xlZF9jb3Vyc2VzIH0gPSBsb2dnZWRJblVzZXIgPyBsb2dnZWRJblVzZXIgOiAnJ1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgLy8gUG9wdXAgVmlkZW9cblx0Y29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXHRcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50RW5yb2xsZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9lbnJvbGxlZC8ke2lkfWBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIHNldEVucm9sbGVkKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0RW5yb2xsZWQocmVzcG9uc2UuZGF0YS5lbnJvbGxlZClcbiAgICAgICAgY291bnRFbnJvbGxlZCgpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBjaGVja0JvdWdodEFscmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbnJvbGVkX2NvdXJzZXMuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsLmNvdXJzZUlkID09PSBpZCk7XG4gICAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coY2hlY2tCb3VnaHRBbHJlYWR5KCkpXG5cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDaGVja291dCA9IGFzeW5jIChwYXltZW50RGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIilcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZVRvdGFsID0gTnVtYmVyKChwcmljZSAqIDEwMCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICBwYXltZW50RGF0YVsnY291cnNlSWQnXSA9IGlkXG4gICAgICAgICAgICBwYXltZW50RGF0YVsnc3RyaXBlVG90YWwnXSA9IHN0cmlwZVRvdGFsXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9jaGVja291dGA7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBwYXltZW50RGF0YSB9O1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogdG9rZW59fTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQsIGhlYWRlcnMpO1xuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2F0Y2hFcnJvcnMoZXJyb3IsIHdpbmRvdy5hbGVydCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogSWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSB2aWRlbyBuZWVkIHRvIHVwZGF0ZSB2aWRlb0lEICovfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNob3BwaW5nLWNhcnRcIj48L2k+IEFkZCB0byBDYXJ0IDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi10YWdcIj48L2k+IEJ1eSBOb3cgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja0JvdWdodEFscmVhZHkoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXRhZ1wiPjwvaT4gRW5yb2xsZWQgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRCdG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrb3V0PXtoYW5kbGVDaGVja291dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2ZpbGVQaG90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHtyb3V0ZXIucHVzaCgnL2F1dGhlbnRpY2F0aW9uJyl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi10YWdcIj48L2k+IExvZ2luIFRvIEJ1eSA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzRGV0YWlsc1NpZGViYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==