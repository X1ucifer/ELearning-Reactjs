module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/v1/courses/homepage-courses.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"development\":{\"username\":\"postgres\",\"password\":\"akhil\",\"database\":\"spyberrys_db\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"postgres\",\"password\":\"akhil\",\"database\":\"spyberrys_db\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"production\":{\"username\":\"postgres\",\"password\":\"akhil\",\"database\":\"spyberrys_db\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"}}");

/***/ }),

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
//
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./models/course.js":
/*!**************************!*\
  !*** ./models/course.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     Course.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         onDelete: 'CASCADE'
    //     });
    // }
  }

  ;
  Course.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.FLOAT
    },
    free: {
      type: Sequelize.BOOLEAN
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    coverPhoto: {
      type: Sequelize.STRING
    },
    courese_preview_img: {
      type: Sequelize.STRING
    },
    course_preview_video: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    lessons: {
      type: Sequelize.STRING
    },
    access: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Course'
  });
  return Course;
};

/***/ }),

/***/ "./models/enroled_courses.js":
/*!***********************************!*\
  !*** ./models/enroled_courses.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Enroled_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here
    }

  }

  ;
  Enroled_courses.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    payment_email: {
      type: Sequelize.STRING
    },
    cost: {
      type: Sequelize.INTEGER
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Enroled_courses'
  });
  return Enroled_courses;
};

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) { // main model file

var _user = _interopRequireDefault(__webpack_require__(/*! ./user */ "./models/user.js"));

var _course = _interopRequireDefault(__webpack_require__(/*! ./course */ "./models/course.js"));

var _video = _interopRequireDefault(__webpack_require__(/*! ./video */ "./models/video.js"));

var _enroled_courses = _interopRequireDefault(__webpack_require__(/*! ./enroled_courses */ "./models/enroled_courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || false;

const config = __webpack_require__(/*! ./models/../config/config.json */ "./config/config.json")[env];

const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = (0, _user.default)(sequelize, Sequelize);
db.courses = (0, _course.default)(sequelize, Sequelize);
db.videos = (0, _video.default)(sequelize, Sequelize);
db.enroled_courses = (0, _enroled_courses.default)(sequelize, Sequelize); // hasMany relationshipt with user and course

db.users.hasMany(db.courses, {
  as: 'courses',
  foreignKey: 'userId'
});
db.courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and videos

db.courses.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'courseId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and videos

db.users.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'userId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and enroled

db.courses.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'courseId'
});
db.enroled_courses.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and enroled

db.users.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'userId'
});
db.enroled_courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // console.log('######', db)

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     User.hasMany(models.Course, {
    //         foreignKey: 'userId'
    //     })
    // }
  }

  ;
  User.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    isEmailPublic: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    password: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    location: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    companyUrl: {
      type: Sequelize.STRING
    },
    interests: {
      type: Sequelize.STRING
    },
    passwordResetToken: {
      type: Sequelize.UUID
    },
    passwordUpdatedAt: {
      type: Sequelize.DATE
    },
    emailResetToken: {
      type: Sequelize.UUID
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    fb_url: {
      type: Sequelize.STRING
    },
    tw_url: {
      type: Sequelize.STRING
    },
    insta_url: {
      type: Sequelize.STRING
    },
    in_url: {
      type: Sequelize.STRING
    },
    emailConfirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    emailConfirmedAt: {
      type: Sequelize.DATE
    },
    as_teacher_apply: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    as_teacher_confirmed: {
      type: Sequelize.BOOLEAN
    },
    as_teacher_confirmed_at: {
      type: Sequelize.DATE
    },
    as_teacher_req_desc: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.ENUM,
      values: ['student', 'admin', 'teacher'],
      defaultValue: 'student'
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    agreedTerms: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};

/***/ }),

/***/ "./models/video.js":
/*!*************************!*\
  !*** ./models/video.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }

  ;
  Video.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    video_url: {
      type: Sequelize.TEXT
    },
    order: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Video'
  });
  return Video;
};

/***/ }),

/***/ "./pages/api/v1/courses/homepage-courses.js":
/*!**************************************************!*\
  !*** ./pages/api/v1/courses/homepage-courses.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/init-middleware */ "./lib/init-middleware.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/index */ "./models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_2__);


 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await cors(req, res);

  try {
    const courses = await _models_index__WEBPACK_IMPORTED_MODULE_2__["courses"].findAll({
      order: [['createdAt', 'DESC']],
      limit: 3,
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__["users"],
        as: 'user',
        attributes: ['name', 'profilePhoto']
      }, {
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__["enroled_courses"],
        as: 'enroled_courses',
        attributes: ['courseId']
      }]
    });
    res.send({
      courses
    });
  } catch (error) {
    console.log(error);
  }
});

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyLmpzIiwid2VicGFjazovLy8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdjEvY291cnNlcy9ob21lcGFnZS1jb3Vyc2VzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiTW9kZWwiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIlNlcXVlbGl6ZSIsIkNvdXJzZSIsImluaXQiLCJpZCIsInR5cGUiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSIsInRpdGxlIiwiU1RSSU5HIiwib3ZlcnZpZXciLCJURVhUIiwicHJpY2UiLCJGTE9BVCIsImZyZWUiLCJCT09MRUFOIiwicHVibGlzaGVkIiwicHJvZmlsZVBob3RvIiwiY292ZXJQaG90byIsImNvdXJlc2VfcHJldmlld19pbWciLCJjb3Vyc2VfcHJldmlld192aWRlbyIsImR1cmF0aW9uIiwibGVzc29ucyIsImFjY2VzcyIsImNhdGVnb3J5IiwidXNlcklkIiwib25EZWxldGUiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJrZXkiLCJhcyIsIm1vZGVsTmFtZSIsIkVucm9sZWRfY291cnNlcyIsImFzc29jaWF0ZSIsIm1vZGVscyIsInBheW1lbnRfZW1haWwiLCJjb3N0IiwiSU5URUdFUiIsImNvdXJzZUlkIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZW52IiwiY29uZmlnIiwiX19kaXJuYW1lIiwiZGIiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicHJvY2VzcyIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzIiwiY291cnNlcyIsInZpZGVvcyIsImVucm9sZWRfY291cnNlcyIsImhhc01hbnkiLCJmb3JlaWduS2V5IiwiYmVsb25nc1RvIiwiVXNlciIsIm5hbWUiLCJlbWFpbCIsImlzRW1haWxQdWJsaWMiLCJkZXNpZ25hdGlvbiIsImFib3V0IiwibG9jYXRpb24iLCJwaG9uZSIsImNvbXBhbnkiLCJjb21wYW55VXJsIiwiaW50ZXJlc3RzIiwicGFzc3dvcmRSZXNldFRva2VuIiwicGFzc3dvcmRVcGRhdGVkQXQiLCJEQVRFIiwiZW1haWxSZXNldFRva2VuIiwiZ2VuZGVyIiwiZmJfdXJsIiwidHdfdXJsIiwiaW5zdGFfdXJsIiwiaW5fdXJsIiwiZW1haWxDb25maXJtZWQiLCJlbWFpbENvbmZpcm1lZEF0IiwiYXNfdGVhY2hlcl9hcHBseSIsImFzX3RlYWNoZXJfY29uZmlybWVkIiwiYXNfdGVhY2hlcl9jb25maXJtZWRfYXQiLCJhc190ZWFjaGVyX3JlcV9kZXNjIiwicm9sZSIsIkVOVU0iLCJ2YWx1ZXMiLCJhY3RpdmUiLCJhZ3JlZWRUZXJtcyIsImFsbG93TnVsbCIsIlZpZGVvIiwidmlkZW9fdXJsIiwib3JkZXIiLCJkZXNjcmlwdGlvbiIsImNvcnMiLCJDb3JzIiwibWV0aG9kcyIsImZpbmRBbGwiLCJsaW1pdCIsImluY2x1ZGUiLCJhdHRyaWJ1dGVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztR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Q0FGbUIsQ0FBM0I7QUFRZSxzRUFBTzlHLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNMkcsSUFBSSxDQUFDNUcsR0FBRCxFQUFNQyxHQUFOLENBQVY7O0FBRUEsTUFBSTtBQUNBLFVBQU1pRSxPQUFPLEdBQUcsTUFBTXJELHFEQUFNLENBQUNrRyxPQUFQLENBQWU7QUFDakNMLFdBQUssRUFBRSxDQUNILENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FERyxDQUQwQjtBQUlqQ00sV0FBSyxFQUFFLENBSjBCO0FBS2pDQyxhQUFPLEVBQUUsQ0FBQztBQUNOeEUsYUFBSyxFQUFFK0IsbURBREQ7QUFDTzdCLFVBQUUsRUFBRSxNQURYO0FBRU51RSxrQkFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLGNBQVQ7QUFGTixPQUFELEVBR1A7QUFDRXpFLGFBQUssRUFBRUksNkRBRFQ7QUFDMEJGLFVBQUUsRUFBRSxpQkFEOUI7QUFFRXVFLGtCQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRmQsT0FITztBQUx3QixLQUFmLENBQXRCO0FBY0FqSCxPQUFHLENBQUNrSCxJQUFKLENBQVM7QUFBQ2pEO0FBQUQsS0FBVDtBQUNILEdBaEJELENBZ0JFLE9BQU9rRCxLQUFQLEVBQWM7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDtBQUVKLENBdkJELEU7Ozs7Ozs7Ozs7O0FDakJBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InBhZ2VzL2FwaS92MS9jb3Vyc2VzL2hvbWVwYWdlLWNvdXJzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS92MS9jb3Vyc2VzL2hvbWVwYWdlLWNvdXJzZXMuanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBDb3Vyc2UgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIENvdXJzZS5iZWxvbmdzVG8obW9kZWxzLlVzZXIsIHtcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgICAgLy8gICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgXG4gICAgQ291cnNlLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJ2aWV3OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICAgIH0sXG4gICAgICAgIGZyZWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIHB1Ymxpc2hlZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3ZlclBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJlc2VfcHJldmlld19pbWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgbGVzc29uczoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBhY2Nlc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcklkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICAgICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdDb3Vyc2UnLFxuICAgIH0pO1xuICAgIHJldHVybiBDb3Vyc2U7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gIGNsYXNzIEVucm9sZWRfY291cnNlcyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIH1cbiAgfTtcbiAgRW5yb2xlZF9jb3Vyc2VzLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHBheW1lbnRfZW1haWw6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvc3Q6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBjb3Vyc2VJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAnY291cnNlSWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgIH1cbiAgICB9LFxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ0Vucm9sZWRfY291cnNlcycsXG4gIH0pO1xuICByZXR1cm4gRW5yb2xlZF9jb3Vyc2VzO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyBtYWluIG1vZGVsIGZpbGVcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcbmNvbnN0IGRiID0ge307XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgQ291cnNlIGZyb20gJy4vY291cnNlJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nXG5pbXBvcnQgRW5yb2xlZF9jb3Vyc2VzIGZyb20gJy4vZW5yb2xlZF9jb3Vyc2VzJ1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpO1xufVxuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmRiLnVzZXJzID0gVXNlcihzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmNvdXJzZXMgPSBDb3Vyc2Uoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi52aWRlb3MgPSBWaWRlbyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmVucm9sZWRfY291cnNlcyA9IEVucm9sZWRfY291cnNlcyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgY291cnNlXG5kYi51c2Vycy5oYXNNYW55KGRiLmNvdXJzZXMsIHsgXG4gIGFzOiAnY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIGNvdXJzZSBhbmQgdmlkZW9zXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCB2aWRlb3NcbmRiLnVzZXJzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIGVucm9sZWRcbmRiLmNvdXJzZXMuaGFzTWFueShkYi5lbnJvbGVkX2NvdXJzZXMsIHsgXG4gIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxuICBhczogJ2NvdXJzZSdcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGVucm9sZWRcbmRiLnVzZXJzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gY29uc29sZS5sb2coJyMjIyMjIycsIGRiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICAgIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIFVzZXIuaGFzTWFueShtb2RlbHMuQ291cnNlLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCdcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFVzZXIuaW5pdCh7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpc0VtYWlsUHVibGljOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgYWJvdXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueVVybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbnRlcmVzdHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZFVwZGF0ZWRBdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGZiX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICB0d191cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsQ29uZmlybWVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfYXBwbHk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2NvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWRfYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfcmVxX2Rlc2M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5FTlVNLFxuICAgICAgICAgICAgdmFsdWVzOiBbJ3N0dWRlbnQnLCAnYWRtaW4nLCAndGVhY2hlciddLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnc3R1ZGVudCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZ3JlZWRUZXJtczoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzZXF1ZWxpemUsXG4gICAgICAgIG1vZGVsTmFtZTogJ1VzZXInLFxuICAgIH0pO1xuICAgIHJldHVybiBVc2VyO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBWaWRlbyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgLy8gICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIC8vIH1cbiAgfTtcbiAgVmlkZW8uaW5pdCh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9fdXJsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgIH0sXG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ1ZpZGVvJyxcbiAgfSk7XG4gIHJldHVybiBWaWRlbztcbn07IiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICdAL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5pbXBvcnQgeyBcbiAgICBjb3Vyc2VzIGFzIENvdXJzZSxcbiAgICB1c2VycyBhcyBVc2VyLFxuICAgIGVucm9sZWRfY291cnNlcyBhcyBFbnJvbGVkX2NvdXJzZXNcbn0gZnJvbSAnQC9tb2RlbHMvaW5kZXgnXG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAgIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gICAgQ29ycyh7XG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QgYW5kIE9QVElPTlNcbiAgICAgICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJywgJ0RFTEVURScsICdQVVQnXSxcbiAgICB9KVxuKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY291cnNlcyA9IGF3YWl0IENvdXJzZS5maW5kQWxsKHtcbiAgICAgICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgICAgICAgWydjcmVhdGVkQXQnLCAnREVTQyddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGltaXQ6IDMsXG4gICAgICAgICAgICBpbmNsdWRlOiBbe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBVc2VyLCBhczogJ3VzZXInLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnbmFtZScsICdwcm9maWxlUGhvdG8nXVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbW9kZWw6IEVucm9sZWRfY291cnNlcywgYXM6ICdlbnJvbGVkX2NvdXJzZXMnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnY291cnNlSWQnXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzLnNlbmQoe2NvdXJzZXN9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==