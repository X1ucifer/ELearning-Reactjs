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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),
      _React$useState4 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      isOpen = _React$useState4[0],
      setIsOpen = _React$useState4[1];

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
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: course.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            "class": "minutes",
            children: ["Lessons ", parseInt(course.lessons)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            "class": "type",
            children: [course.enroled_courses, " Students"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            "class": "minutes",
            children: ["\u20B9 ", course.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "movie_desc",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            "class": "text",
            children: course.overview
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "movie_social",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                "class": "material-icons",
                children: "share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                "class": "material-icons",
                children: "\uE87D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                "class": "material-icons",
                children: "chat_bubble"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "blur_back",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: course.coverPhoto
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal_video__WEBPACK_IMPORTED_MODULE_5___default.a, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: youtube_parser(course_preview_video),
      onClose: function onClose() {
        return setIsOpen(!isOpen);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "courses-details-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "image",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: profilePhoto,
          alt: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick(e) {
            e.preventDefault();
            openModal();
          },
          className: "link-btn popup-youtube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "flaticon-play"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Course Preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "price",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-tag"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 35
              }, _this), " Price"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, _this), "$", price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-teacher"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 35
              }, _this), " Instructor"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, _this), user.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-time"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 35
              }, _this), " Duration"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, _this), duration]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-distance-learning"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 35
              }, _this), " Lessons"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, _this), parseInt(lessons)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-web"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 35
              }, _this), " Enrolled"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, _this), enrolled, " students"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-lock"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 35
              }, _this), " Access"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, _this), "Lifetime"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
              lineNumber: 170,
              columnNumber: 37
            }, _this), " Enrolled ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 79
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckoutButton_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
            handleCheckout: handleCheckout,
            image: profilePhoto,
            name: title,
            price: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 33
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
            lineNumber: 183,
            columnNumber: 29
          }, _this), " Login To Buy ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 75
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
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
              lineNumber: 190,
              columnNumber: 49
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
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
                  lineNumber: 193,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
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
                  lineNumber: 194,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
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
                  lineNumber: 195,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
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
                  lineNumber: 196,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(CoursesDetailsSidebar, "8tEht1VB4guUQtuSFvOFZNRjvgg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = CoursesDetailsSidebar;

Details.getInitialProps = /*#__PURE__*/function () {
  var _ref5 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(ctx) {
    var id, url, response;
    return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.query.id;
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__["default"], "/api/v1/courses/course/").concat(id);
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDb3Vyc2VzL0NvdXJzZXNEZXRhaWxzU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJDb3Vyc2VzRGV0YWlsc1NpZGViYXIiLCJpZCIsInByaWNlIiwidXNlciIsInByb2ZpbGVQaG90byIsImxlc3NvbnMiLCJkdXJhdGlvbiIsInRpdGxlIiwiY291cnNlX3ByZXZpZXdfdmlkZW8iLCJsb2dnZWRJblVzZXIiLCJlbnJvbGVkX2NvdXJzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZW5yb2xsZWQiLCJzZXRFbnJvbGxlZCIsImlzT3BlbiIsInNldElzT3BlbiIsIm9wZW5Nb2RhbCIsInVzZUVmZmVjdCIsImNvdW50RW5yb2xsZWQiLCJ1cmwiLCJiYXNlVXJsIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJjaGVja0JvdWdodEFscmVhZHkiLCJmaWx0ZXIiLCJ2YWwiLCJjb3Vyc2VJZCIsImxlbmd0aCIsInlvdXR1YmVfcGFyc2VyIiwicmVnRXhwIiwibWF0Y2giLCJoYW5kbGVDaGVja291dCIsInBheW1lbnREYXRhIiwidG9rZW4iLCJjb29raWUiLCJzdHJpcGVUb3RhbCIsIk51bWJlciIsInRvRml4ZWQiLCJwYXlsb2FkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwb3N0IiwidG9hc3QiLCJzdWNjZXNzIiwiY2F0Y2hFcnJvcnMiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY291cnNlIiwibmFtZSIsInBhcnNlSW50Iiwib3ZlcnZpZXciLCJjb3ZlclBob3RvIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIkRldGFpbHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBJSCxDQWhNRDs7R0FBTTlELHFCO1VBS2FZLHNEOzs7S0FMYloscUI7O0FBa01OK0QsT0FBTyxDQUFDQyxlQUFSO0FBQUEseVdBQTBCLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkaEUsY0FEYyxHQUNQZ0UsR0FBRyxDQUFDQyxLQURHLENBQ2RqRSxFQURjO0FBRWhCcUIsZUFGZ0IsYUFFUEMsc0RBRk8sb0NBRTBCdEIsRUFGMUI7QUFBQTtBQUFBLG1CQUdDdUIsNENBQUssQ0FBQ0MsR0FBTixDQUFVSCxHQUFWLENBSEQ7O0FBQUE7QUFHaEJJLG9CQUhnQjtBQUFBLDhDQUtmQSxRQUFRLENBQUNDLElBTE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWUzQixvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Vyc2VzL1tpZF0uY2E4YzcwZTVkMjljM2I1ZmI3ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgQ2hlY2tvdXRCdG4gZnJvbSAnQC9jb21wb25lbnRzL0NoZWNrb3V0QnV0dG9uL0NoZWNrb3V0QnRuJ1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnQC91dGlscy9iYXNlVXJsJ1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJ0AvdXRpbHMvY2F0Y2hFcnJvcnMnXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IENvdXJzZXNEZXRhaWxzU2lkZWJhciA9ICh7XG4gICAgaWQsIHByaWNlLCB1c2VyLCBwcm9maWxlUGhvdG8sIGxlc3NvbnMsIGR1cmF0aW9uLCB0aXRsZSwgY291cnNlX3ByZXZpZXdfdmlkZW8sIGxvZ2dlZEluVXNlclxufSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGxvZ2dlZEluVXNlcilcbiAgICBjb25zdCB7IGVucm9sZWRfY291cnNlcyB9ID0gbG9nZ2VkSW5Vc2VyID8gbG9nZ2VkSW5Vc2VyIDogJydcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIC8vIFBvcHVwIFZpZGVvXG4gICAgY29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pXG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRFbnJvbGxlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9jb3Vyc2VzL2Vucm9sbGVkLyR7aWR9YFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgc2V0RW5yb2xsZWQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRFbnJvbGxlZChyZXNwb25zZS5kYXRhLmVucm9sbGVkKVxuICAgICAgICBjb3VudEVucm9sbGVkKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNoZWNrQm91Z2h0QWxyZWFkeSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVucm9sZWRfY291cnNlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWwuY291cnNlSWQgPT09IGlkKTtcbiAgICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JvdWdodEFscmVhZHkoKSlcblxuICAgIGNvbnN0IHlvdXR1YmVfcGFyc2VyID0gKHVybCkgPT4ge1xuICAgICAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteIyY/XSopLiovO1xuICAgICAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFs3XS5sZW5ndGggPT0gMTEpID8gbWF0Y2hbN10gOiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGVja291dCA9IGFzeW5jIChwYXltZW50RGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIilcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZVRvdGFsID0gTnVtYmVyKChwcmljZSAqIDEwMCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICBwYXltZW50RGF0YVsnY291cnNlSWQnXSA9IGlkXG4gICAgICAgICAgICBwYXltZW50RGF0YVsnc3RyaXBlVG90YWwnXSA9IHN0cmlwZVRvdGFsXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9jaGVja291dGA7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBwYXltZW50RGF0YSB9O1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9IH07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXlsb2FkLCBoZWFkZXJzKTtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhdGNoRXJyb3JzKGVycm9yLCB3aW5kb3cuYWxlcnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX2NhcmRcIiBpZD1cImJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJsb2NhbmRpbmFcIiBzcmM9e2NvdXJzZS5jb3ZlclBob3RvfSBhbHQ9e2NvdXJzZS50aXRsZX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntjb3Vyc2UudXNlci5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj5MZXNzb25zIHtwYXJzZUludChjb3Vyc2UubGVzc29ucyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0eXBlXCI+e2NvdXJzZS5lbnJvbGVkX2NvdXJzZXN9IFN0dWRlbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+4oK5IHtjb3Vyc2UucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2Uub3ZlcnZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVfc29jaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zaGFyZTwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+7qG9PC9pPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGF0X2J1YmJsZTwvaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsdXJfYmFja1wiPjxpbWcgc3JjPXtjb3Vyc2UuY292ZXJQaG90b30gLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIElmIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgdmlkZW8gbmVlZCB0byB1cGRhdGUgdmlkZW9JRCAqL31cbiAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgICAgY2hhbm5lbD0neW91dHViZSdcbiAgICAgICAgICAgICAgICBpc09wZW49eyFpc09wZW59XG4gICAgICAgICAgICAgICAgdmlkZW9JZD17eW91dHViZV9wYXJzZXIoY291cnNlX3ByZXZpZXdfdmlkZW8pfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1kZXRhaWxzLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlUGhvdG99IGFsdD17dGl0bGV9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb3Blbk1vZGFsKCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstYnRuIHBvcHVwLXlvdXR1YmVcIlxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1wbGF5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q291cnNlIFByZXZpZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJmbGF0aWNvbi10YWdcIj48L2k+IFByaWNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tdGVhY2hlclwiPjwvaT4gSW5zdHJ1Y3Rvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXRpbWVcIj48L2k+IER1cmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1kaXN0YW5jZS1sZWFybmluZ1wiPjwvaT4gTGVzc29uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQobGVzc29ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24td2ViXCI+PC9pPiBFbnJvbGxlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW5yb2xsZWR9IHN0dWRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tbG9ja1wiPjwvaT4gQWNjZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpZmV0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaG9wcGluZy1jYXJ0XCI+PC9pPiBBZGQgdG8gQ2FydCA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tdGFnXCI+PC9pPiBCdXkgTm93IDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrQm91Z2h0QWxyZWFkeSgpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi10YWdcIj48L2k+IEVucm9sbGVkIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrb3V0QnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja291dD17aGFuZGxlQ2hlY2tvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvZmlsZVBob3RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goJy9hdXRoZW50aWNhdGlvbicpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXRhZ1wiPjwvaT4gTG9naW4gVG8gQnV5IDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VzLXNoYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmUgVGhpcyBDb3Vyc2UgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc2hhcmVcIj48L2k+PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPSdieCBieGwtZmFjZWJvb2snPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPSdieCBieGwtdHdpdHRlcic+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC1pbnN0YWdyYW0nPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPSdieCBieGwtbGlua2VkaW4nPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5EZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnlcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9jb3Vyc2UvJHtpZH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZXNEZXRhaWxzU2lkZWJhcjsiXSwic291cmNlUm9vdCI6IiJ9