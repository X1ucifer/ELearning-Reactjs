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
      className: "courses-details-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: profilePhoto,
          alt: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "btn-box",
        children: loggedInUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: checkBoughtAlready() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "default-btn",
            disabled: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-tag"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 33
            }, _this), " Enrolled ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 75
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckoutButton_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
            handleCheckout: handleCheckout,
            image: profilePhoto,
            name: title,
            price: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
            lineNumber: 100,
            columnNumber: 29
          }, _this), " Login To Buy ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 75
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "courses-share",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "share-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Share This Course ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 49
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "social-link",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "bx bxl-facebook"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "bx bxl-twitter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "bx bxl-instagram"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "bx bxl-linkedin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDb3Vyc2VzL0NvdXJzZXNEZXRhaWxzU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJDb3Vyc2VzRGV0YWlsc1NpZGViYXIiLCJpZCIsInByaWNlIiwidXNlciIsInByb2ZpbGVQaG90byIsImxlc3NvbnMiLCJkdXJhdGlvbiIsInRpdGxlIiwiY291cnNlX3ByZXZpZXdfdmlkZW8iLCJsb2dnZWRJblVzZXIiLCJlbnJvbGVkX2NvdXJzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZW5yb2xsZWQiLCJzZXRFbnJvbGxlZCIsInVzZUVmZmVjdCIsImNvdW50RW5yb2xsZWQiLCJ1cmwiLCJiYXNlVXJsIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJjaGVja0JvdWdodEFscmVhZHkiLCJmaWx0ZXIiLCJ2YWwiLCJjb3Vyc2VJZCIsImxlbmd0aCIsImhhbmRsZUNoZWNrb3V0IiwicGF5bWVudERhdGEiLCJ0b2tlbiIsImNvb2tpZSIsInN0cmlwZVRvdGFsIiwiTnVtYmVyIiwidG9GaXhlZCIsInBheWxvYWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjYXRjaEVycm9ycyIsIndpbmRvdyIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BRXhCO0FBQUE7O0FBQUEsTUFERkMsRUFDRSxRQURGQSxFQUNFO0FBQUEsTUFERUMsS0FDRixRQURFQSxLQUNGO0FBQUEsTUFEU0MsSUFDVCxRQURTQSxJQUNUO0FBQUEsTUFEZUMsWUFDZixRQURl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OztHQUFNakQscUI7VUFLYVksc0Q7OztLQUxiWixxQjtBQStHU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY291cnNlcy9baWRdLmUxOGIzNzhlMzdkNjhlMWQwY2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IENoZWNrb3V0QnRuIGZyb20gJ0AvY29tcG9uZW50cy9DaGVja291dEJ1dHRvbi9DaGVja291dEJ0bidcbmltcG9ydCBiYXNlVXJsIGZyb20gJ0AvdXRpbHMvYmFzZVVybCdcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICdAL3V0aWxzL2NhdGNoRXJyb3JzJ1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBDb3Vyc2VzRGV0YWlsc1NpZGViYXIgPSAoe1xuICAgIGlkLCBwcmljZSwgdXNlciwgcHJvZmlsZVBob3RvLCBsZXNzb25zLCBkdXJhdGlvbiwgdGl0bGUsIGNvdXJzZV9wcmV2aWV3X3ZpZGVvLCBsb2dnZWRJblVzZXJcbn0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhsb2dnZWRJblVzZXIpXG4gICAgY29uc3QgeyBlbnJvbGVkX2NvdXJzZXMgfSA9IGxvZ2dlZEluVXNlciA/IGxvZ2dlZEluVXNlciA6ICcnXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBQb3B1cCBWaWRlb1xuXHRjb25zdCBbZW5yb2xsZWQsIHNldEVucm9sbGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApXG5cdFxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRFbnJvbGxlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9jb3Vyc2VzL2Vucm9sbGVkLyR7aWR9YFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgc2V0RW5yb2xsZWQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRFbnJvbGxlZChyZXNwb25zZS5kYXRhLmVucm9sbGVkKVxuICAgICAgICBjb3VudEVucm9sbGVkKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNoZWNrQm91Z2h0QWxyZWFkeSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVucm9sZWRfY291cnNlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWwuY291cnNlSWQgPT09IGlkKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JvdWdodEFscmVhZHkoKSlcblxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNoZWNrb3V0ID0gYXN5bmMgKHBheW1lbnREYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKVxuICAgICAgICAgICAgY29uc3Qgc3RyaXBlVG90YWwgPSBOdW1iZXIoKHByaWNlICogMTAwKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIHBheW1lbnREYXRhWydjb3Vyc2VJZCddID0gaWRcbiAgICAgICAgICAgIHBheW1lbnREYXRhWydzdHJpcGVUb3RhbCddID0gc3RyaXBlVG90YWxcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9jb3Vyc2VzL2NoZWNrb3V0YDtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7IHBheW1lbnREYXRhIH07XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiB0b2tlbn19O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGF5bG9hZCwgaGVhZGVycyk7XG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXRjaEVycm9ycyhlcnJvciwgd2luZG93LmFsZXJ0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBJZiB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIHZpZGVvIG5lZWQgdG8gdXBkYXRlIHZpZGVvSUQgKi99XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtZGV0YWlscy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlUGhvdG99IGFsdD17dGl0bGV9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaG9wcGluZy1jYXJ0XCI+PC9pPiBBZGQgdG8gQ2FydCA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tdGFnXCI+PC9pPiBCdXkgTm93IDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tCb3VnaHRBbHJlYWR5KCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi10YWdcIj48L2k+IEVucm9sbGVkIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrb3V0QnRuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja291dD17aGFuZGxlQ2hlY2tvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9maWxlUGhvdG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7cm91dGVyLnB1c2goJy9hdXRoZW50aWNhdGlvbicpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tdGFnXCI+PC9pPiBMb2dpbiBUbyBCdXkgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaGFyZSBUaGlzIENvdXJzZSA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaGFyZVwiPjwvaT48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC1mYWNlYm9vayc+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC10d2l0dGVyJz48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT0nYnggYnhsLWluc3RhZ3JhbSc+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC1saW5rZWRpbic+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZXNEZXRhaWxzU2lkZWJhcjsiXSwic291cmNlUm9vdCI6IiJ9