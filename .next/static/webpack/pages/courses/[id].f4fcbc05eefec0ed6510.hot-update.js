webpackHotUpdate_N_E("pages/courses/[id]",{

/***/ "./pages/courses/[id].js":
/*!*******************************!*\
  !*** ./pages/courses/[id].js ***!
  \*******************************/
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
/* harmony import */ var _components_SingleCourses_PageBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SingleCourses/PageBanner */ "./components/SingleCourses/PageBanner.js");
/* harmony import */ var _components_SingleCourses_CoursesDetailsSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/SingleCourses/CoursesDetailsSidebar */ "./components/SingleCourses/CoursesDetailsSidebar.js");
/* harmony import */ var _components_Courses_YouMightLikeTheCourses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Courses/YouMightLikeTheCourses */ "./components/Courses/YouMightLikeTheCourses.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Courses_CoursesCurriculum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Courses/CoursesCurriculum */ "./components/Courses/CoursesCurriculum.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_CheckoutButton_CheckoutBtn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/CheckoutButton/CheckoutBtn */ "./components/CheckoutButton/CheckoutBtn.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_17__);





var _jsxFileName = "C:\\Users\\AJ\\Downloads\\Spyberrys\\Spyberrys\\Spyberrys_app\\pages\\courses\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






Object(react_tabs__WEBPACK_IMPORTED_MODULE_8__["resetIdCounter"])();










var Details = function Details(_ref) {
  _s();

  var course = _ref.course,
      user = _ref.user;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),
      _React$useState2 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _ref2 = loggedInUser ? loggedInUser : '',
      enroled_courses = _ref2.enroled_courses;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])(); // Popup Video

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState4 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      enrolled = _React$useState4[0],
      setEnrolled = _React$useState4[1]; // const [isOpen, setIsOpen] = React.useState(true)


  var openModal = function openModal() {
    setIsOpen(!isOpen);
  };

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    var countEnrolled = /*#__PURE__*/function () {
      var _ref3 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, response;
        return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/v1/courses/enrolled/").concat(id);
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url);

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


  var youtube_parser = function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  var handleCheckout = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(paymentData) {
      var token, stripeTotal, url, payload, headers, response;
      return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              token = js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("token");
              stripeTotal = Number((price * 100).toFixed(2));
              paymentData['courseId'] = id;
              paymentData['stripeTotal'] = stripeTotal;
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/v1/courses/checkout");
              payload = {
                paymentData: paymentData
              };
              headers = {
                headers: {
                  Authorization: token
                }
              };
              _context2.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(url, payload, headers);

            case 10:
              response = _context2.sent;
              react_hot_toast__WEBPACK_IMPORTED_MODULE_13__["default"].success(response.data);
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_12__["default"])(_context2.t0, window.alert);
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
  }(); // console.log(course)


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "courses-details-area pb-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "movie_card",
        id: "bright",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "info_section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "movie_header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: course.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: course.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "class": "minutes",
              children: ["Duration ", duration]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              "class": "type",
              children: [course.enroled_courses, " Students"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "class": "minutes",
              children: ["\u20B9 ", course.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "movie_desc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              "class": "text",
              children: course.overview
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "movie_social",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  "class": "material-icons",
                  children: "share"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  "class": "material-icons",
                  children: "\uE87D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  "class": "material-icons",
                  children: "chat_bubble"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "blur_back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: course.coverPhoto
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 44
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8 col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "courses-details-desc",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabList"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Curriculum"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Instructor"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Reviews"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "courses-overview",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "Course Description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: course.overview
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Courses_CoursesCurriculum__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    videos: course.videos
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "courses-instructor",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "single-advisor-box",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "row align-items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "advisor-image",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              src: "".concat(course.user.profilePhoto ? course.user.profilePhoto : "/images/advisor/advisor2.jpg"),
                              alt: course.user.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 136,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 134,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "col-lg-8 col-md-8",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "advisor-content",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                              children: course.user.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "sub-title",
                              children: course.user.designation || "Empty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 143,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: course.user.about || "Empty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 144,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                              className: "social-link",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                  href: course.user.fb_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                    className: "bx bxl-facebook"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 149,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 148,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 147,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                  href: course.user.tw_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                    className: "bx bxl-twitter"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 154,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 153,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 152,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                  href: course.user.insta_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                    className: "bx bxl-instagram"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 159,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 157,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                  href: course.user.in_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                    className: "bx bxl-linkedin"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 164,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 163,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 162,
                                columnNumber: 65
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 146,
                              columnNumber: 61
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 141,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 140,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "courses-reviews",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "Course Rating"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "rating",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "bx bxs-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "rating-count",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: "4.1 average based on 4 reviews."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "row",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "5 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "bar-5"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 194,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "02"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "4 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "bar-4"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 205,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 204,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "03"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "3 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "bar-3"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 216,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 215,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "04"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "2 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 223,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "bar-2"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 227,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 226,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "05"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "1 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "bar-1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 238,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 237,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 236,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "00"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 242,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "courses-review-comments",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "3 Reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/user1.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 254,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 253,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "James Anderson"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 252,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Excellent"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/user2.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 274,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 277,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 272,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "Sarah Taylor"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 280,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Video Quality!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Was really easy to implement and they quickly answer my additional questions!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/user3.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 292,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 293,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 294,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 296,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 291,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "David Warner"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 299,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Coding!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 302,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/images/user4.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 307,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 311,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 312,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 313,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 314,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 315,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 310,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "King Kong"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 318,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 309,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Video!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 306,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-md-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(Details, "w6wm/CVr1Lwg7AQ3C/2vIx9aOvQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"]];
});

_c = Details;

Details.getInitialProps = /*#__PURE__*/function () {
  var _ref5 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(ctx) {
    var id, url, response;
    return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.query.id;
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/v1/courses/course/").concat(id);
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url);

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Details);

var _c;

$RefreshReg$(_c, "Details");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291cnNlcy8uanMiXSwibmFtZXMiOlsicmVzZXRJZENvdW50ZXIiLCJEZXRhaWxzIiwiY291cnNlIiwidXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsb2dnZWRJblVzZXIiLCJlbnJvbGVkX2NvdXJzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbnJvbGxlZCIsInNldEVucm9sbGVkIiwib3Blbk1vZGFsIiwidXNlRWZmZWN0IiwiY291bnRFbnJvbGxlZCIsInVybCIsImJhc2VVcmwiLCJpZCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY2hlY2tCb3VnaHRBbHJlYWR5IiwiZmlsdGVyIiwidmFsIiwiY291cnNlSWQiLCJsZW5ndGgiLCJ5b3V0dWJlX3BhcnNlciIsInJlZ0V4cCIsIm1hdGNoIiwiaGFuZGxlQ2hlY2tvdXQiLCJwYXltZW50RGF0YSIsInRva2VuIiwiY29va2llIiwic3RyaXBlVG90YWwiLCJOdW1iZXIiLCJwcmljZSIsInRvRml4ZWQiLCJwYXlsb2FkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwb3N0IiwidG9hc3QiLCJzdWNjZXNzIiwiY2F0Y2hFcnJvcnMiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidGl0bGUiLCJuYW1lIiwiZHVyYXRpb24iLCJvdmVydmlldyIsImNvdmVyUGhvdG8iLCJ2aWRlb3MiLCJwcm9maWxlUGhvdG8iLCJkZXNpZ25hdGlvbiIsImFib3V0IiwiZmJfdXJsIiwidHdfdXJsIiwiaW5zdGFfdXJsIiwiaW5fdXJsIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsaUVBQWM7QUFDZDtBQUNBO0FBQ0E7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LGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkL0MsY0FEYyxHQUNQK0MsR0FBRyxDQUFDQyxLQURHLENBQ2RoRCxFQURjO0FBRWhCRixlQUZnQixhQUVQQyx1REFGTyxvQ0FFMEJDLEVBRjFCO0FBQUE7QUFBQSxtQkFHQ0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVSixHQUFWLENBSEQ7O0FBQUE7QUFHaEJLLG9CQUhnQjtBQUFBLDhDQUtmQSxRQUFRLENBQUNDLElBTE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWV0QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Vyc2VzL1tpZF0uZjRmY2JjMDVlZWZlYzBlZDY1MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJ0AvY29tcG9uZW50cy9TaW5nbGVDb3Vyc2VzL1BhZ2VCYW5uZXInXG5pbXBvcnQgQ291cnNlc0RldGFpbHNTaWRlYmFyIGZyb20gJ0AvY29tcG9uZW50cy9TaW5nbGVDb3Vyc2VzL0NvdXJzZXNEZXRhaWxzU2lkZWJhcidcbmltcG9ydCBZb3VNaWdodExpa2VUaGVDb3Vyc2VzIGZyb20gJ0AvY29tcG9uZW50cy9Db3Vyc2VzL1lvdU1pZ2h0TGlrZVRoZUNvdXJzZXMnXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnXG5yZXNldElkQ291bnRlcigpXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgYmFzZVVybCBmcm9tICdAL3V0aWxzL2Jhc2VVcmwnXG5pbXBvcnQgQ291cnNlc0N1cnJpY3VsdW0gZnJvbSAnQC9jb21wb25lbnRzL0NvdXJzZXMvQ291cnNlc0N1cnJpY3VsdW0nXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnQC91dGlscy9jYXRjaEVycm9ycydcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IENoZWNrb3V0QnRuIGZyb20gJ0AvY29tcG9uZW50cy9DaGVja291dEJ1dHRvbi9DaGVja291dEJ0bidcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJ1xuXG5cblxuY29uc3QgRGV0YWlscyA9ICh7IGNvdXJzZSwgdXNlciB9KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgXG4gICAgY29uc3QgeyBlbnJvbGVkX2NvdXJzZXMgfSA9IGxvZ2dlZEluVXNlciA/IGxvZ2dlZEluVXNlciA6ICcnXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBQb3B1cCBWaWRlb1xuXHRjb25zdCBbZW5yb2xsZWQsIHNldEVucm9sbGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApXG5cdC8vIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pXG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRFbnJvbGxlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9jb3Vyc2VzL2Vucm9sbGVkLyR7aWR9YFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgc2V0RW5yb2xsZWQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRFbnJvbGxlZChyZXNwb25zZS5kYXRhLmVucm9sbGVkKVxuICAgICAgICBjb3VudEVucm9sbGVkKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNoZWNrQm91Z2h0QWxyZWFkeSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVucm9sZWRfY291cnNlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWwuY291cnNlSWQgPT09IGlkKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JvdWdodEFscmVhZHkoKSlcblxuICAgIGNvbnN0IHlvdXR1YmVfcGFyc2VyID0gKHVybCkgPT4ge1xuICAgICAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteIyY/XSopLiovO1xuICAgICAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCYmbWF0Y2hbN10ubGVuZ3RoPT0xMSk/IG1hdGNoWzddIDogZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hlY2tvdXQgPSBhc3luYyAocGF5bWVudERhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpXG4gICAgICAgICAgICBjb25zdCBzdHJpcGVUb3RhbCA9IE51bWJlcigocHJpY2UgKiAxMDApLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgcGF5bWVudERhdGFbJ2NvdXJzZUlkJ10gPSBpZFxuICAgICAgICAgICAgcGF5bWVudERhdGFbJ3N0cmlwZVRvdGFsJ10gPSBzdHJpcGVUb3RhbFxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3YxL2NvdXJzZXMvY2hlY2tvdXRgO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgcGF5bWVudERhdGEgfTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IHRva2VufX07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXlsb2FkLCBoZWFkZXJzKTtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhdGNoRXJyb3JzKGVycm9yLCB3aW5kb3cuYWxlcnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKGNvdXJzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VzLWRldGFpbHMtYXJlYSBwYi0xMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVfY2FyZFwiIGlkPVwiYnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZV9oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzcz1cImxvY2FuZGluYVwiIHNyYz17Y291cnNlLmNvdmVyUGhvdG99IGFsdD17Y291cnNlLnRpdGxlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57Y291cnNlLnVzZXIubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlc1wiPkR1cmF0aW9uIHtkdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0eXBlXCI+e2NvdXJzZS5lbnJvbGVkX2NvdXJzZXN9IFN0dWRlbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlc1wiPuKCuSB7Y291cnNlLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5vdmVydmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZV9zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2hhcmU8L2k+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj7uob08L2k+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGF0X2J1YmJsZTwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibHVyX2JhY2tcIj48aW1nIHNyYz17Y291cnNlLmNvdmVyUGhvdG99Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBNYWluIENhcmQgKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtZGV0YWlscy1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYj5PdmVydmlldzwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+Q3VycmljdWx1bTwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+SW5zdHJ1Y3RvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+UmV2aWV3czwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VzLW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db3Vyc2UgRGVzY3JpcHRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cnNlc0N1cnJpY3VsdW0gdmlkZW9zPXtjb3Vyc2UudmlkZW9zfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWFkdmlzb3ItYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2aXNvci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2NvdXJzZS51c2VyLnByb2ZpbGVQaG90byA/IGNvdXJzZS51c2VyLnByb2ZpbGVQaG90byA6IFwiL2ltYWdlcy9hZHZpc29yL2Fkdmlzb3IyLmpwZ1wifWB9IGFsdD17Y291cnNlLnVzZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2aXNvci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NvdXJzZS51c2VyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntjb3Vyc2UudXNlci5kZXNpZ25hdGlvbiB8fCBcIkVtcHR5XCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXJzZS51c2VyLmFib3V0IHx8IFwiRW1wdHlcIn08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuZmJfdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtZmFjZWJvb2snPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb3Vyc2UudXNlci50d191cmwgfHwgJyMnfSBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4bC10d2l0dGVyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuaW5zdGFfdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuaW5fdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtbGlua2VkaW4nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtcmV2aWV3c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q291cnNlIFJhdGluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJieCBieHMtc3RhciBjaGVja2VkXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnggYnhzLXN0YXIgY2hlY2tlZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ4IGJ4cy1zdGFyIGNoZWNrZWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJieCBieHMtc3RhciBjaGVja2VkXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnggYnhzLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NC4xIGF2ZXJhZ2UgYmFzZWQgb24gNCByZXZpZXdzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjUgc3RhcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZSByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj40IHN0YXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItNFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjAzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MyBzdGFyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4wNDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjIgc3RhcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci0yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZSByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MDU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4xIHN0YXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtcmV2aWV3LWNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4zIFJldmlld3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdXNlcjEuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1yYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPkphbWVzIEFuZGVyc29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgc3ViLWNvbW1lbnRcIj5FeGNlbGxlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WZXJ5IHdlbGwgYnVpbHQgdGhlbWUsIGNvdWxkbid0IGJlIGhhcHBpZXIgd2l0aCBpdC4gQ2FuJ3Qgd2FpdCBmb3IgZnV0dXJlIHVwZGF0ZXMgdG8gc2VlIHdoYXQgZWxzZSB0aGV5IGFkZCBpbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyMi5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2tcIj5TYXJhaCBUYXlsb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayBzdWItY29tbWVudFwiPlZpZGVvIFF1YWxpdHkhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2FzIHJlYWxseSBlYXN5IHRvIGltcGxlbWVudCBhbmQgdGhleSBxdWlja2x5IGFuc3dlciBteSBhZGRpdGlvbmFsIHF1ZXN0aW9ucyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyMy5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrXCI+RGF2aWQgV2FybmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgc3ViLWNvbW1lbnRcIj5QZXJmZWN0IENvZGluZyE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHVubmluZyBkZXNpZ24sIHZlcnkgZGVkaWNhdGVkIGNyZXcgd2hvIHdlbGNvbWUgbmV3IGlkZWFzIHN1Z2dlc3RlZCBieSBjdXN0b21lcnMsIG5pY2Ugc3VwcG9ydC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyNC5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPktpbmcgS29uZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHN1Yi1jb21tZW50XCI+UGVyZmVjdCBWaWRlbyE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHVubmluZyBkZXNpZ24sIHZlcnkgZGVkaWNhdGVkIGNyZXcgd2hvIHdlbGNvbWUgbmV3IGlkZWFzIHN1Z2dlc3RlZCBieSBjdXN0b21lcnMsIG5pY2Ugc3VwcG9ydC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDb3Vyc2VzRGV0YWlsc1NpZGViYXIgey4uLmNvdXJzZX0gbG9nZ2VkSW5Vc2VyPXt1c2VyfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIDxZb3VNaWdodExpa2VUaGVDb3Vyc2VzIC8+ICovfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuRGV0YWlscy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3YxL2NvdXJzZXMvY291cnNlLyR7aWR9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzXG4iXSwic291cmNlUm9vdCI6IiJ9