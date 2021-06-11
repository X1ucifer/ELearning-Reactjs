webpackHotUpdate_N_E("pages/courses/[id]",{

/***/ "./pages/courses/[id].js":
/*!*******************************!*\
  !*** ./pages/courses/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);





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

  var openModal = function openModal() {
    setIsOpen(!isOpen);
  };

  var youtube_parser = function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }; // console.log(course)


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "courses-details-area pb-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        "class": "movie_card",
        id: "bright",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "info_section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "movie_header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
              children: course.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
              children: course.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              "class": "minutes",
              children: course.duration
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              "class": "type",
              children: [course.enroled_courses, " Students"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              "class": "minutes",
              children: ["\u20B9 ", course.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "movie_desc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              "class": "text",
              children: course.overview
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "movie_social",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "social-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bxl-facebook"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 85
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bxl-twitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 85
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bxl-instagram"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 85
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bxl-linkedin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 85
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "blur_back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: course.coverPhoto
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 44
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "video-box mt-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                onClick: function onClick(e) {
                  e.preventDefault();
                  openModal();
                },
                className: "video-btn popup-youtube",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  className: "flaticon-play"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_modal_video__WEBPACK_IMPORTED_MODULE_12___default.a, {
        channel: "youtube",
        isOpen: !isOpen,
        videoId: youtube_parser(course.course_preview_video),
        onClose: function onClose() {
          return setIsOpen(!isOpen);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-lg-8 col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "courses-details-desc",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabList"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Curriculum"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Instructor"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
                    children: "Reviews"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "courses-overview",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                      children: "Course Description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                      children: course.overview
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Courses_CoursesCurriculum__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    videos: course.videos
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "courses-instructor",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "single-advisor-box",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "row align-items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "advisor-image",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                              src: "".concat(course.user.profilePhoto ? course.user.profilePhoto : "/images/advisor/advisor2.jpg"),
                              alt: course.user.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 114,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "col-lg-8 col-md-8",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "advisor-content",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                              children: course.user.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 120,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                              className: "sub-title",
                              children: course.user.designation || "Empty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 121,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                              children: course.user.about || "Empty"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 122,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                              className: "social-link",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                                  href: course.user.fb_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                                    className: "bx bxl-facebook"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 127,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 126,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 125,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                                  href: course.user.tw_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                                    className: "bx bxl-twitter"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 132,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 131,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 130,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                                  href: course.user.insta_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                                    className: "bx bxl-instagram"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 137,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 136,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 135,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                                  href: course.user.in_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                                    className: "bx bxl-linkedin"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 142,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 141,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 140,
                                columnNumber: 65
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 61
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 119,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "courses-reviews",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                      children: "Course Rating"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "rating",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "bx bxs-star checked"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "bx bxs-star"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "rating-count",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        children: "4.1 average based on 4 reviews."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "row",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "5 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "bar-5"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 172,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "02"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "4 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 179,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "bar-4"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 183,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 182,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "03"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "3 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "bar-3"
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
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "04"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "2 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "bar-2"
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
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "05"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "1 star"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "middle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "bar-1"
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
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "side right",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          children: "00"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "courses-review-comments",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                      children: "3 Reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                        src: "/images/user1.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 232,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 233,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 234,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 235,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "James Anderson"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 239,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Excellent"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        children: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                        src: "/images/user2.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 252,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 254,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 250,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "Sarah Taylor"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 258,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 249,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Video Quality!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        children: "Was really easy to implement and they quickly answer my additional questions!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                        src: "/images/user3.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 274,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 269,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "David Warner"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Coding!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 280,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                        src: "/images/user4.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 285,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 289,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 290,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 291,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star checked"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 292,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            className: "bx bxs-star"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 293,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 288,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                          className: "d-inline-block",
                          children: "King Kong"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Video!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 300,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-lg-4 col-md-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Details, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");

_c = Details;

Details.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var id, url, response;
    return C_Users_AJ_Downloads_Spyberrys_Spyberrys_Spyberrys_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.query.id;
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__["default"], "/api/v1/courses/course/").concat(id);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url);

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291cnNlcy8uanMiXSwibmFtZXMiOlsicmVzZXRJZENvdW50ZXIiLCJEZXRhaWxzIiwiY291cnNlIiwidXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJvcGVuTW9kYWwiLCJ5b3V0dWJlX3BhcnNlciIsInVybCIsInJlZ0V4cCIsIm1hdGNoIiwibGVuZ3RoIiwidGl0bGUiLCJuYW1lIiwiZHVyYXRpb24iLCJlbnJvbGVkX2NvdXJzZXMiLCJwcmljZSIsIm92ZXJ2aWV3IiwiY292ZXJQaG90byIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvdXJzZV9wcmV2aWV3X3ZpZGVvIiwidmlkZW9zIiwicHJvZmlsZVBob3RvIiwiZGVzaWduYXRpb24iLCJhYm91dCIsImZiX3VybCIsInR3X3VybCIsImluc3RhX3VybCIsImluX3VybCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImlkIiwicXVlcnkiLCJiYXNlVXJsIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLGlFQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBRU5DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRk07QUFBQTtBQUFBLE1BRTNCQyxNQUYyQjtBQUFBLE1BRW5CQyxTQUZtQjs7QUFHbEMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkQsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNILEdBRkQ7O0FBR0EsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFELEVBQVM7QUFDNUIsUUFBSUMsTUFBTSxHQUFHLDJFQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixHQUFHLENBQUNFLEtBQUosQ0FBVUQsTUFBVixDQUFaO0FBQ0EsV0FBUUMsS0FBSyxJQUFFQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLE1BQVQsSUFBaUIsRUFBekIsR0FBOEJELEtBQUssQ0FBQyxDQUFELENBQW5DLEdBQXlDLEtBQWhEO0FBQ0gsR0FKRCxDQU5rQyxDQVdsQzs7O0FBQ0Esc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBR0k7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFNLFlBQVg7QUFBd0IsVUFBRSxFQUFDLFFBQTNCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBTSxjQUFYO0FBQUEsa0NBQ0k7QUFBSyxxQkFBTSxjQUFYO0FBQUEsb0NBRUk7QUFBQSx3QkFBS1YsTUFBTSxDQUFDWTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFBLHdCQUFLWixNQUFNLENBQUNDLElBQVAsQ0FBWVk7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQU0sdUJBQU0sU0FBWjtBQUFBLHdCQUF1QmIsTUFBTSxDQUFDYztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBRyx1QkFBTSxNQUFUO0FBQUEseUJBQWlCZCxNQUFNLENBQUNlLGVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQU1JO0FBQU0sdUJBQU0sU0FBWjtBQUFBLG9DQUF5QmYsTUFBTSxDQUFDZ0IsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVNJO0FBQUsscUJBQU0sWUFBWDtBQUFBLG1DQUNJO0FBQUcsdUJBQU0sTUFBVDtBQUFBLHdCQUNLaEIsTUFBTSxDQUFDaUI7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQWNJO0FBQUsscUJBQU0sY0FBWDtBQUFBLG1DQUVJO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUEsc0NBQ0k7QUFBQSx1Q0FBSTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLDJCQUFTLEVBQUMsU0FBdEI7QUFBZ0Msd0JBQU0sRUFBQyxRQUF2QztBQUFBLHlDQUFnRDtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSx1Q0FBSTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLDJCQUFTLEVBQUMsU0FBdEI7QUFBZ0Msd0JBQU0sRUFBQyxRQUF2QztBQUFBLHlDQUFnRDtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSx1Q0FBSTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLDJCQUFTLEVBQUMsU0FBdEI7QUFBZ0Msd0JBQU0sRUFBQyxRQUF2QztBQUFBLHlDQUFnRDtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBQSx1Q0FBSTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLDJCQUFTLEVBQUMsU0FBdEI7QUFBZ0Msd0JBQU0sRUFBQyxRQUF2QztBQUFBLHlDQUFnRDtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBeUJJO0FBQUssbUJBQU0sV0FBWDtBQUFBLGlDQUF1QjtBQUFLLGVBQUcsRUFBRWpCLE1BQU0sQ0FBQ2tCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFnQ0k7QUFBQSwrQkFDUTtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLG1DQUlJLHFFQUFDLGlEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0k7QUFDSSx1QkFBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFBRUEsbUJBQUMsQ0FBQ0MsY0FBRjtBQUFvQmQsMkJBQVM7QUFBSSxpQkFEckQ7QUFFSSx5QkFBUyxFQUFDLHlCQUZkO0FBQUEsdUNBSUk7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENKLGVBaURRLHFFQUFDLHlEQUFEO0FBQ0ksZUFBTyxFQUFDLFNBRFo7QUFFSSxjQUFNLEVBQUUsQ0FBQ0YsTUFGYjtBQUdJLGVBQU8sRUFBRUcsY0FBYyxDQUFDUCxNQUFNLENBQUNxQixvQkFBUixDQUgzQjtBQUlJLGVBQU8sRUFBRTtBQUFBLGlCQUFNaEIsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpEUixlQXdESTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLHNCQUFmO0FBQUEscUNBQ0kscUVBQUMsK0NBQUQ7QUFBQSx3Q0FDSSxxRUFBQyxrREFBRDtBQUFBLDBDQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUkscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISixlQUlJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQVFJLHFFQUFDLG1EQUFEO0FBQUEseUNBQ0k7QUFBSyw2QkFBUyxFQUFDLGtCQUFmO0FBQUEsNENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFBLGdDQUFJSixNQUFNLENBQUNpQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSSixlQWVJLHFFQUFDLG1EQUFEO0FBQUEseUNBQ0kscUVBQUMsOEVBQUQ7QUFBbUIsMEJBQU0sRUFBRWpCLE1BQU0sQ0FBQ3NCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWZKLGVBbUJJLHFFQUFDLG1EQUFEO0FBQUEseUNBQ0k7QUFBSyw2QkFBUyxFQUFDLG9CQUFmO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFDLG9CQUFmO0FBQUEsNkNBQ0k7QUFBSyxpQ0FBUyxFQUFDLHdCQUFmO0FBQUEsZ0RBQ0k7QUFBSyxtQ0FBUyxFQUFDLG1CQUFmO0FBQUEsaURBQ0k7QUFBSyxxQ0FBUyxFQUFDLGVBQWY7QUFBQSxtREFDSTtBQUFLLGlDQUFHLFlBQUt0QixNQUFNLENBQUNDLElBQVAsQ0FBWXNCLFlBQVosR0FBMkJ2QixNQUFNLENBQUNDLElBQVAsQ0FBWXNCLFlBQXZDLEdBQXNELDhCQUEzRCxDQUFSO0FBQXFHLGlDQUFHLEVBQUV2QixNQUFNLENBQUNDLElBQVAsQ0FBWVk7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBT0k7QUFBSyxtQ0FBUyxFQUFDLG1CQUFmO0FBQUEsaURBQ0k7QUFBSyxxQ0FBUyxFQUFDLGlCQUFmO0FBQUEsb0RBQ0k7QUFBQSx3Q0FBS2IsTUFBTSxDQUFDQyxJQUFQLENBQVlZO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREosZUFFSTtBQUFNLHVDQUFTLEVBQUMsV0FBaEI7QUFBQSx3Q0FBNkJiLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdUIsV0FBWixJQUEyQjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZKLGVBR0k7QUFBQSx3Q0FBSXhCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZd0IsS0FBWixJQUFxQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUhKLGVBS0k7QUFBSSx1Q0FBUyxFQUFDLGFBQWQ7QUFBQSxzREFDSTtBQUFBLHVEQUNJO0FBQUcsc0NBQUksRUFBRXpCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeUIsTUFBWixJQUFzQixHQUEvQjtBQUFvQywyQ0FBUyxFQUFDLFNBQTlDO0FBQXdELHdDQUFNLEVBQUMsUUFBL0Q7QUFBQSx5REFDSTtBQUFHLDZDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREosZUFNSTtBQUFBLHVEQUNJO0FBQUcsc0NBQUksRUFBRTFCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMEIsTUFBWixJQUFzQixHQUEvQjtBQUFvQywyQ0FBUyxFQUFDLFNBQTlDO0FBQXdELHdDQUFNLEVBQUMsUUFBL0Q7QUFBQSx5REFDSTtBQUFHLDZDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBTkosZUFXSTtBQUFBLHVEQUNJO0FBQUcsc0NBQUksRUFBRTNCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMkIsU0FBWixJQUF5QixHQUFsQztBQUF1QywyQ0FBUyxFQUFDLFNBQWpEO0FBQTJELHdDQUFNLEVBQUMsUUFBbEU7QUFBQSx5REFDSTtBQUFHLDZDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBWEosZUFnQkk7QUFBQSx1REFDSTtBQUFHLHNDQUFJLEVBQUU1QixNQUFNLENBQUNDLElBQVAsQ0FBWTRCLE1BQVosSUFBc0IsR0FBL0I7QUFBb0MsMkNBQVMsRUFBQyxTQUE5QztBQUF3RCx3Q0FBTSxFQUFDLFFBQS9EO0FBQUEseURBQ0k7QUFBRyw2Q0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJKLGVBZ0VJLHFFQUFDLG1EQUFEO0FBQUEsMENBQ0k7QUFBSyw2QkFBUyxFQUFDLGlCQUFmO0FBQUEsNENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFLLCtCQUFTLEVBQUMsUUFBZjtBQUFBLDhDQUNJO0FBQU0saUNBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFBTSxpQ0FBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkosZUFHSTtBQUFNLGlDQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFISixlQUlJO0FBQU0saUNBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpKLGVBS0k7QUFBTSxpQ0FBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKLGVBU0k7QUFBSywrQkFBUyxFQUFDLGNBQWY7QUFBQSw2Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVEosZUFZSTtBQUFLLCtCQUFTLEVBQUMsS0FBZjtBQUFBLDhDQUNJO0FBQUssaUNBQVMsRUFBQyxNQUFmO0FBQUEsK0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBSUk7QUFBSyxpQ0FBUyxFQUFDLFFBQWY7QUFBQSwrQ0FDSTtBQUFLLG1DQUFTLEVBQUMsZUFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKSixlQVNJO0FBQUssaUNBQVMsRUFBQyxZQUFmO0FBQUEsK0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRKLGVBWUk7QUFBSyxpQ0FBUyxFQUFDLE1BQWY7QUFBQSwrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWkosZUFlSTtBQUFLLGlDQUFTLEVBQUMsUUFBZjtBQUFBLCtDQUNJO0FBQUssbUNBQVMsRUFBQyxlQUFmO0FBQUEsaURBQ0k7QUFBSyxxQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWZKLGVBb0JJO0FBQUssaUNBQVMsRUFBQyxZQUFmO0FBQUEsK0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBCSixlQXVCSTtBQUFLLGlDQUFTLEVBQUMsTUFBZjtBQUFBLCtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkF2QkosZUEwQkk7QUFBSyxpQ0FBUyxFQUFDLFFBQWY7QUFBQSwrQ0FDSTtBQUFLLG1DQUFTLEVBQUMsZUFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkExQkosZUErQkk7QUFBSyxpQ0FBUyxFQUFDLFlBQWY7QUFBQSwrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBL0JKLGVBa0NJO0FBQUssaUNBQVMsRUFBQyxNQUFmO0FBQUEsK0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWxDSixlQXFDSTtBQUFLLGlDQUFTLEVBQUMsUUFBZjtBQUFBLCtDQUNJO0FBQUssbUNBQVMsRUFBQyxlQUFmO0FBQUEsaURBQ0k7QUFBSyxxQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXJDSixlQTBDSTtBQUFLLGlDQUFTLEVBQUMsWUFBZjtBQUFBLCtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkExQ0osZUE2Q0k7QUFBSyxpQ0FBUyxFQUFDLE1BQWY7QUFBQSwrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBN0NKLGVBZ0RJO0FBQUssaUNBQVMsRUFBQyxRQUFmO0FBQUEsK0NBQ0k7QUFBSyxtQ0FBUyxFQUFDLGVBQWY7QUFBQSxpREFDSTtBQUFLLHFDQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBaERKLGVBcURJO0FBQUssaUNBQVMsRUFBQyxZQUFmO0FBQUEsK0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBd0VJO0FBQUssNkJBQVMsRUFBQyx5QkFBZjtBQUFBLDRDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBRUk7QUFBSywrQkFBUyxFQUFDLGFBQWY7QUFBQSw4Q0FDSTtBQUFLLDJCQUFHLEVBQUMsbUJBQVQ7QUFBNkIsMkJBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBR0k7QUFBSyxpQ0FBUyxFQUFDLGVBQWY7QUFBQSxnREFDSTtBQUFLLG1DQUFTLEVBQUMsY0FBZjtBQUFBLGtEQUNJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREosZUFFSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZKLGVBR0k7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FISixlQUlJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSkosZUFLSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQVNJO0FBQU0sbUNBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhKLGVBZUk7QUFBTSxpQ0FBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFmSixlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKLGVBcUJJO0FBQUssK0JBQVMsRUFBQyxhQUFmO0FBQUEsOENBQ0k7QUFBSywyQkFBRyxFQUFDLG1CQUFUO0FBQTZCLDJCQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUdJO0FBQUssaUNBQVMsRUFBQyxlQUFmO0FBQUEsZ0RBQ0k7QUFBSyxtQ0FBUyxFQUFDLGNBQWY7QUFBQSxrREFDSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLGVBRUk7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FGSixlQUdJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSEosZUFJSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpKLGVBS0k7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosZUFTSTtBQUFNLG1DQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFISixlQWVJO0FBQU0saUNBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBZkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFyQkosZUF3Q0k7QUFBSywrQkFBUyxFQUFDLGFBQWY7QUFBQSw4Q0FDSTtBQUFLLDJCQUFHLEVBQUMsbUJBQVQ7QUFBNkIsMkJBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBR0k7QUFBSyxpQ0FBUyxFQUFDLGVBQWY7QUFBQSxnREFDSTtBQUFLLG1DQUFTLEVBQUMsY0FBZjtBQUFBLGtEQUNJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREosZUFFSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZKLGVBR0k7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FISixlQUlJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSkosZUFLSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQVNJO0FBQU0sbUNBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhKLGVBZUk7QUFBTSxpQ0FBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFmSixlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXhDSixlQTJESTtBQUFLLCtCQUFTLEVBQUMsYUFBZjtBQUFBLDhDQUNJO0FBQUssMkJBQUcsRUFBQyxtQkFBVDtBQUE2QiwyQkFBRyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFHSTtBQUFLLGlDQUFTLEVBQUMsZUFBZjtBQUFBLGdEQUNJO0FBQUssbUNBQVMsRUFBQyxjQUFmO0FBQUEsa0RBQ0k7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FESixlQUVJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkosZUFHSTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUhKLGVBSUk7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FKSixlQUtJO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBU0k7QUFBTSxtQ0FBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSEosZUFlSTtBQUFNLGlDQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWZKLGVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBM0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF4RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQThOSTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFTSCxDQWpURDs7R0FBTTlCLE87O0tBQUFBLE87O0FBbVROQSxPQUFPLENBQUMrQixlQUFSO0FBQUEseVdBQTBCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxjQURjLEdBQ1BELEdBQUcsQ0FBQ0UsS0FERyxDQUNkRCxFQURjO0FBRWhCeEIsZUFGZ0IsYUFFUDBCLHVEQUZPLG9DQUUwQkYsRUFGMUI7QUFBQTtBQUFBLG1CQUdDRyw0Q0FBSyxDQUFDQyxHQUFOLENBQVU1QixHQUFWLENBSEQ7O0FBQUE7QUFHaEI2QixvQkFIZ0I7QUFBQSw2Q0FLZkEsUUFBUSxDQUFDQyxJQUxNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFldkMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY291cnNlcy9baWRdLmNlYWQ4ZWEwODY5OTNiZGZiYjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tICdAL2NvbXBvbmVudHMvU2luZ2xlQ291cnNlcy9QYWdlQmFubmVyJ1xuaW1wb3J0IENvdXJzZXNEZXRhaWxzU2lkZWJhciBmcm9tICdAL2NvbXBvbmVudHMvU2luZ2xlQ291cnNlcy9Db3Vyc2VzRGV0YWlsc1NpZGViYXInXG5pbXBvcnQgWW91TWlnaHRMaWtlVGhlQ291cnNlcyBmcm9tICdAL2NvbXBvbmVudHMvQ291cnNlcy9Zb3VNaWdodExpa2VUaGVDb3Vyc2VzJ1xuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJ1xucmVzZXRJZENvdW50ZXIoKVxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnQC91dGlscy9iYXNlVXJsJ1xuaW1wb3J0IENvdXJzZXNDdXJyaWN1bHVtIGZyb20gJ0AvY29tcG9uZW50cy9Db3Vyc2VzL0NvdXJzZXNDdXJyaWN1bHVtJ1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IERldGFpbHMgPSAoeyBjb3Vyc2UsIHVzZXIgfSkgPT4ge1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cbiAgICBjb25zdCB5b3V0dWJlX3BhcnNlciA9ICh1cmwpID0+IHtcbiAgICAgICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiMmP10qKS4qLztcbiAgICAgICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgICAgIHJldHVybiAobWF0Y2gmJm1hdGNoWzddLmxlbmd0aD09MTEpPyBtYXRjaFs3XSA6IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhjb3Vyc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1kZXRhaWxzLWFyZWEgcGItMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX2NhcmRcIiBpZD1cImJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVfaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3M9XCJsb2NhbmRpbmFcIiBzcmM9e2NvdXJzZS5jb3ZlclBob3RvfSBhbHQ9e2NvdXJzZS50aXRsZX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjb3Vyc2UudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2NvdXJzZS51c2VyLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj57Y291cnNlLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInR5cGVcIj57Y291cnNlLmVucm9sZWRfY291cnNlc30gU3R1ZGVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+4oK5IHtjb3Vyc2UucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVfZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLm92ZXJ2aWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllX3NvY2lhbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC1mYWNlYm9vayc+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPSdieCBieGwtdHdpdHRlcic+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9J2J4IGJ4bC1saW5rZWRpbic+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibHVyX2JhY2tcIj48aW1nIHNyYz17Y291cnNlLmNvdmVyUGhvdG99IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIE1haW4gQ2FyZCAqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJveCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdmlkZW8taW1nMi5qcGdcIiBjbGFzc05hbWU9XCJzaGFkb3dcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb3Blbk1vZGFsKCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1idG4gcG9wdXAteW91dHViZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tcGxheVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxWaWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD0neW91dHViZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17IWlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3lvdXR1YmVfcGFyc2VyKGNvdXJzZS5jb3Vyc2VfcHJldmlld192aWRlbyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtZGV0YWlscy1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYj5PdmVydmlldzwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+Q3VycmljdWx1bTwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+SW5zdHJ1Y3RvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+UmV2aWV3czwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VzLW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db3Vyc2UgRGVzY3JpcHRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291cnNlc0N1cnJpY3VsdW0gdmlkZW9zPXtjb3Vyc2UudmlkZW9zfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWFkdmlzb3ItYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2aXNvci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2NvdXJzZS51c2VyLnByb2ZpbGVQaG90byA/IGNvdXJzZS51c2VyLnByb2ZpbGVQaG90byA6IFwiL2ltYWdlcy9hZHZpc29yL2Fkdmlzb3IyLmpwZ1wifWB9IGFsdD17Y291cnNlLnVzZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2aXNvci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NvdXJzZS51c2VyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntjb3Vyc2UudXNlci5kZXNpZ25hdGlvbiB8fCBcIkVtcHR5XCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXJzZS51c2VyLmFib3V0IHx8IFwiRW1wdHlcIn08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuZmJfdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtZmFjZWJvb2snPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb3Vyc2UudXNlci50d191cmwgfHwgJyMnfSBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4bC10d2l0dGVyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuaW5zdGFfdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y291cnNlLnVzZXIuaW5fdXJsIHx8ICcjJ30gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtbGlua2VkaW4nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtcmV2aWV3c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q291cnNlIFJhdGluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJieCBieHMtc3RhciBjaGVja2VkXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnggYnhzLXN0YXIgY2hlY2tlZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ4IGJ4cy1zdGFyIGNoZWNrZWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJieCBieHMtc3RhciBjaGVja2VkXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnggYnhzLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NC4xIGF2ZXJhZ2UgYmFzZWQgb24gNCByZXZpZXdzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjUgc3RhcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZSByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj40IHN0YXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItNFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjAzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MyBzdGFyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4wNDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjIgc3RhcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci0yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZSByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MDU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4xIHN0YXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZXMtcmV2aWV3LWNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4zIFJldmlld3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdXNlcjEuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1yYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPkphbWVzIEFuZGVyc29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgc3ViLWNvbW1lbnRcIj5FeGNlbGxlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WZXJ5IHdlbGwgYnVpbHQgdGhlbWUsIGNvdWxkbid0IGJlIGhhcHBpZXIgd2l0aCBpdC4gQ2FuJ3Qgd2FpdCBmb3IgZnV0dXJlIHVwZGF0ZXMgdG8gc2VlIHdoYXQgZWxzZSB0aGV5IGFkZCBpbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyMi5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2tcIj5TYXJhaCBUYXlsb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayBzdWItY29tbWVudFwiPlZpZGVvIFF1YWxpdHkhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2FzIHJlYWxseSBlYXN5IHRvIGltcGxlbWVudCBhbmQgdGhleSBxdWlja2x5IGFuc3dlciBteSBhZGRpdGlvbmFsIHF1ZXN0aW9ucyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyMy5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrXCI+RGF2aWQgV2FybmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgc3ViLWNvbW1lbnRcIj5QZXJmZWN0IENvZGluZyE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHVubmluZyBkZXNpZ24sIHZlcnkgZGVkaWNhdGVkIGNyZXcgd2hvIHdlbGNvbWUgbmV3IGlkZWFzIHN1Z2dlc3RlZCBieSBjdXN0b21lcnMsIG5pY2Ugc3VwcG9ydC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VyNC5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyIGNoZWNrZWQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3RhciBjaGVja2VkJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXIgY2hlY2tlZCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPktpbmcgS29uZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHN1Yi1jb21tZW50XCI+UGVyZmVjdCBWaWRlbyE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHVubmluZyBkZXNpZ24sIHZlcnkgZGVkaWNhdGVkIGNyZXcgd2hvIHdlbGNvbWUgbmV3IGlkZWFzIHN1Z2dlc3RlZCBieSBjdXN0b21lcnMsIG5pY2Ugc3VwcG9ydC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDb3Vyc2VzRGV0YWlsc1NpZGViYXIgey4uLmNvdXJzZX0gbG9nZ2VkSW5Vc2VyPXt1c2VyfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogPFlvdU1pZ2h0TGlrZVRoZUNvdXJzZXMgLz4gKi99XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5EZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnlcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvY291cnNlcy9jb3Vyc2UvJHtpZH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=