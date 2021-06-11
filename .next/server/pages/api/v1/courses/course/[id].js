module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/v1/courses/course/[id].js");
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

/***/ "./pages/api/v1/courses/course/[id].js":
/*!*********************************************!*\
  !*** ./pages/api/v1/courses/course/[id].js ***!
  \*********************************************/
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
  const {
    id
  } = req.query; // console.log(id)

  try {
    const course = await _models_index__WEBPACK_IMPORTED_MODULE_2__["courses"].findOne({
      where: {
        id: id
      },
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__["users"],
        as: 'user'
      }, {
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__["videos"],
        as: 'videos',
        attributes: ['name'],
        order: [['createdAt', 'ASC']]
      }]
    }); // console.log(course)

    res.send({
      course
    });
  } catch (error) {
    // console.log(error)
    res.send(error.message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyLmpzIiwid2VicGFjazovLy8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdjEvY291cnNlcy9jb3Vyc2UvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiTW9kZWwiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIlNlcXVlbGl6ZSIsIkNvdXJzZSIsImluaXQiLCJpZCIsInR5cGUiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSIsInRpdGxlIiwiU1RSSU5HIiwib3ZlcnZpZXciLCJURVhUIiwicHJpY2UiLCJGTE9BVCIsImZyZWUiLCJCT09MRUFOIiwicHVibGlzaGVkIiwicHJvZmlsZVBob3RvIiwiY292ZXJQaG90byIsImNvdXJlc2VfcHJldmlld19pbWciLCJjb3Vyc2VfcHJldmlld192aWRlbyIsImR1cmF0aW9uIiwibGVzc29ucyIsImFjY2VzcyIsImNhdGVnb3J5IiwidXNlcklkIiwib25EZWxldGUiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJrZXkiLCJhcyIsIm1vZGVsTmFtZSIsIkVucm9sZWRfY291cnNlcyIsImFzc29jaWF0ZSIsIm1vZGVscyIsInBheW1lbnRfZW1haWwiLCJjb3N0IiwiSU5URUdFUiIsImNvdXJzZUlkIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZW52IiwiY29uZmlnIiwiX19kaXJuYW1lIiwiZGIiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicHJvY2VzcyIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzIiwiY291cnNlcyIsInZpZGVvcyIsImVucm9sZWRfY291cnNlcyIsImhhc01hbnkiLCJmb3JlaWduS2V5IiwiYmVsb25nc1RvIiwiVXNlciIsIm5hbWUiLCJlbWFpbCIsImlzRW1haWxQdWJsaWMiLCJkZXNpZ25hdGlvbiIsImFib3V0IiwibG9jYXRpb24iLCJwaG9uZSIsImNvbXBhbnkiLCJjb21wYW55VXJsIiwiaW50ZXJlc3RzIiwicGFzc3dvcmRSZXNldFRva2VuIiwicGFzc3dvcmRVcGRhdGVkQXQiLCJEQVRFIiwiZW1haWxSZXNldFRva2VuIiwiZ2VuZGVyIiwiZmJfdXJsIiwidHdfdXJsIiwiaW5zdGFfdXJsIiwiaW5fdXJsIiwiZW1haWxDb25maXJtZWQiLCJlbWFpbENvbmZpcm1lZEF0IiwiYXNfdGVhY2hlcl9hcHBseSIsImFzX3RlYWNoZXJfY29uZmlybWVkIiwiYXNfdGVhY2hlcl9jb25maXJtZWRfYXQiLCJhc190ZWFjaGVyX3JlcV9kZXNjIiwicm9sZSIsIkVOVU0iLCJ2YWx1ZXMiLCJhY3RpdmUiLCJhZ3JlZWRUZXJtcyIsImFsbG93TnVsbCIsIlZpZGVvIiwidmlkZW9fdXJsIiwib3JkZXIiLCJkZXNjcmlwdGlvbiIsImNvcnMiLCJDb3JzIiwibWV0aG9kcyIsInF1ZXJ5IiwiY291cnNlIiwiZmluZE9uZSIsIndoZXJlIiwiaW5jbHVkZSIsImF0dHJpYnV0ZXMiLCJzZW5kIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQy9DLFNBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQ0gsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUM3QkwsY0FBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFZO0FBQzdCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNILEtBTFMsQ0FBVjtBQU1ILEdBUEQsQ0FESjtBQVNILEM7Ozs7Ozs7Ozs7OztBQ2JZOztBQUNiLE1BQU07QUFDRkU7QUFERSxJQUVGQyxtQkFBTyxDQUFDLDRCQUFELENBRlg7O0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDQyxTQUFELEVBQVlDLFNBQVosS0FBMEI7QUFDdkMsUUFBTUMsTUFBTixTQUFxQk4sS0FBckIsQ0FBMkI7QUFDdkI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWnVCOztBQWExQjtBQUVETSxRQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxNQUFFLEVBQUU7QUFDQUMsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRGhCO0FBRUFDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGeEI7QUFHQUMsZ0JBQVUsRUFBRTtBQUhaLEtBREk7QUFNUkMsU0FBSyxFQUFFO0FBQ0hMLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURiLEtBTkM7QUFTUkMsWUFBUSxFQUFFO0FBQ05QLFVBQUksRUFBRUosU0FBUyxDQUFDWTtBQURWLEtBVEY7QUFZUkMsU0FBSyxFQUFFO0FBQ0hULFVBQUksRUFBRUosU0FBUyxDQUFDYztBQURiLEtBWkM7QUFlUkMsUUFBSSxFQUFFO0FBQ0ZYLFVBQUksRUFBRUosU0FBUyxDQUFDZ0I7QUFEZCxLQWZFO0FBa0JSQyxhQUFTLEVBQUU7QUFDUGIsVUFBSSxFQUFFSixTQUFTLENBQUNnQixPQURUO0FBRVBWLGtCQUFZLEVBQUU7QUFGUCxLQWxCSDtBQXNCUlksZ0JBQVksRUFBRTtBQUNWZCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFETixLQXRCTjtBQXlCUlMsY0FBVSxFQUFFO0FBQ1JmLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURSLEtBekJKO0FBNEJSVSx1QkFBbUIsRUFBRTtBQUNqQmhCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURDLEtBNUJiO0FBK0JSVyx3QkFBb0IsRUFBRTtBQUNsQmpCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURFLEtBL0JkO0FBa0NSWSxZQUFRLEVBQUU7QUFDTmxCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBbENGO0FBcUNSWSxZQUFRLEVBQUU7QUFDTmxCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBckNGO0FBd0NSYSxXQUFPLEVBQUU7QUFDTG5CLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURYLEtBeENEO0FBMkNSYyxVQUFNLEVBQUU7QUFDSnBCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBM0NBO0FBOENSZSxZQUFRLEVBQUU7QUFDTnJCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBOUNGO0FBaURSZ0IsVUFBTSxFQUFFO0FBQ0p0QixVQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEWjtBQUVKc0IsY0FBUSxFQUFFLFNBRk47QUFHSkMsZ0JBQVUsRUFBRTtBQUNSQyxhQUFLLEVBQUUsT0FEQztBQUVSQyxXQUFHLEVBQUUsSUFGRztBQUdSQyxVQUFFLEVBQUU7QUFISTtBQUhSO0FBakRBLEdBQVosRUEwREc7QUFDQ2hDLGFBREQ7QUFFQ2lDLGFBQVMsRUFBRTtBQUZaLEdBMURIO0FBOERBLFNBQU8vQixNQUFQO0FBQ0gsQ0EvRUQsQzs7Ozs7Ozs7Ozs7O0FDSmE7O0FBQ2IsTUFBTTtBQUNKTjtBQURJLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN6QyxRQUFNaUMsZUFBTixTQUE4QnRDLEtBQTlCLENBQW9DO0FBQ2xDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxXQUFPdUMsU0FBUCxDQUFpQkMsTUFBakIsRUFBeUIsQ0FDdkI7QUFDRDs7QUFSaUM7O0FBU25DO0FBQ0RGLGlCQUFlLENBQUMvQixJQUFoQixDQUFxQjtBQUNuQkMsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURkO0FBRUZDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGdEI7QUFHRkMsZ0JBQVUsRUFBRTtBQUhWLEtBRGU7QUFNbkI0QixpQkFBYSxFQUFFO0FBQ2JoQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFESCxLQU5JO0FBU25CMkIsUUFBSSxFQUFFO0FBQ0pqQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ3NDO0FBRFosS0FUYTtBQVluQkMsWUFBUSxFQUFFO0FBQ1JuQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEUjtBQUVSc0IsY0FBUSxFQUFFLFNBRkY7QUFHUkMsZ0JBQVUsRUFBRTtBQUNWQyxhQUFLLEVBQUUsU0FERztBQUVWQyxXQUFHLEVBQUUsSUFGSztBQUdWQyxVQUFFLEVBQUU7QUFITTtBQUhKLEtBWlM7QUFxQm5CTCxVQUFNLEVBQUU7QUFDTnRCLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURWO0FBRU5zQixjQUFRLEVBQUUsU0FGSjtBQUdOQyxnQkFBVSxFQUFFO0FBQ1ZDLGFBQUssRUFBRSxPQURHO0FBRVZDLFdBQUcsRUFBRSxJQUZLO0FBR1ZDLFVBQUUsRUFBRTtBQUhNO0FBSE47QUFyQlcsR0FBckIsRUE4Qkc7QUFDRGhDLGFBREM7QUFFRGlDLGFBQVMsRUFBRTtBQUZWLEdBOUJIO0FBa0NBLFNBQU9DLGVBQVA7QUFDRCxDQTlDRCxDOzs7Ozs7Ozs7Ozs7QUNKQSxrRCxDQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBVkEsTUFBTU8sRUFBRSxHQUFHNUMsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQU02QyxJQUFJLEdBQUc3QyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLE1BQU1JLFNBQVMsR0FBR0osbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFDQSxNQUFNOEMsUUFBUSxHQUFHRCxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsVUFBZCxDQUFqQjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxpQkFBd0IsS0FBcEM7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHakQsbUJBQU8sQ0FBQ2tELDREQUFELENBQVAsQ0FBOENGLEdBQTlDLENBQWY7O0FBQ0EsTUFBTUcsRUFBRSxHQUFHLEVBQVg7QUFNQSxJQUFJaEQsU0FBSjs7QUFDQSxJQUFJOEMsTUFBTSxDQUFDRyxnQkFBWCxFQUE2QjtBQUMzQmpELFdBQVMsR0FBRyxJQUFJQyxTQUFKLENBQWNpRCxPQUFPLENBQUNMLEdBQVIsQ0FBWUMsTUFBTSxDQUFDRyxnQkFBbkIsQ0FBZCxFQUFvREgsTUFBcEQsQ0FBWjtBQUNELENBRkQsTUFFTztBQUNMOUMsV0FBUyxHQUFHLElBQUlDLFNBQUosQ0FBYzZDLE1BQU0sQ0FBQ0ssUUFBckIsRUFBK0JMLE1BQU0sQ0FBQ00sUUFBdEMsRUFBZ0ROLE1BQU0sQ0FBQ08sUUFBdkQsRUFBaUVQLE1BQWpFLENBQVo7QUFDRDs7QUFFREUsRUFBRSxDQUFDaEQsU0FBSCxHQUFlQSxTQUFmO0FBQ0FnRCxFQUFFLENBQUMvQyxTQUFILEdBQWVBLFNBQWY7QUFFQStDLEVBQUUsQ0FBQ00sS0FBSCxHQUFXLG1CQUFLdEQsU0FBTCxFQUFnQkMsU0FBaEIsQ0FBWDtBQUNBK0MsRUFBRSxDQUFDTyxPQUFILEdBQWEscUJBQU92RCxTQUFQLEVBQWtCQyxTQUFsQixDQUFiO0FBQ0ErQyxFQUFFLENBQUNRLE1BQUgsR0FBWSxvQkFBTXhELFNBQU4sRUFBaUJDLFNBQWpCLENBQVo7QUFDQStDLEVBQUUsQ0FBQ1MsZUFBSCxHQUFxQiw4QkFBZ0J6RCxTQUFoQixFQUEyQkMsU0FBM0IsQ0FBckIsQyxDQUVBOztBQUNBK0MsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ08sT0FBcEIsRUFBNkI7QUFDM0J2QixJQUFFLEVBQUUsU0FEdUI7QUFFM0IyQixZQUFVLEVBQUU7QUFGZSxDQUE3QjtBQUlBWCxFQUFFLENBQUNPLE9BQUgsQ0FBV0ssU0FBWCxDQUFxQlosRUFBRSxDQUFDTSxLQUF4QixFQUErQjtBQUM3QkssWUFBVSxFQUFFLFFBRGlCO0FBRTdCM0IsSUFBRSxFQUFFO0FBRnlCLENBQS9CLEUsQ0FLQTs7QUFDQWdCLEVBQUUsQ0FBQ08sT0FBSCxDQUFXRyxPQUFYLENBQW1CVixFQUFFLENBQUNRLE1BQXRCLEVBQThCO0FBQzVCeEIsSUFBRSxFQUFFLFFBRHdCO0FBRTVCMkIsWUFBVSxFQUFFO0FBRmdCLENBQTlCO0FBSUFYLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVSSxTQUFWLENBQW9CWixFQUFFLENBQUNPLE9BQXZCLEVBQWdDO0FBQzlCSSxZQUFVLEVBQUUsVUFEa0I7QUFFOUIzQixJQUFFLEVBQUU7QUFGMEIsQ0FBaEMsRSxDQUtBOztBQUNBZ0IsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ1EsTUFBcEIsRUFBNEI7QUFDMUJ4QixJQUFFLEVBQUUsUUFEc0I7QUFFMUIyQixZQUFVLEVBQUU7QUFGYyxDQUE1QjtBQUlBWCxFQUFFLENBQUNRLE1BQUgsQ0FBVUksU0FBVixDQUFvQlosRUFBRSxDQUFDTyxPQUF2QixFQUFnQztBQUM5QkksWUFBVSxFQUFFLFFBRGtCO0FBRTlCM0IsSUFBRSxFQUFFO0FBRjBCLENBQWhDLEUsQ0FLQTs7QUFDQWdCLEVBQUUsQ0FBQ08sT0FBSCxDQUFXRyxPQUFYLENBQW1CVixFQUFFLENBQUNTLGVBQXRCLEVBQXVDO0FBQ3JDekIsSUFBRSxFQUFFLGlCQURpQztBQUVyQzJCLFlBQVUsRUFBRTtBQUZ5QixDQUF2QztBQUlBWCxFQUFFLENBQUNTLGVBQUgsQ0FBbUJHLFNBQW5CLENBQTZCWixFQUFFLENBQUNPLE9BQWhDLEVBQXlDO0FBQ3ZDSSxZQUFVLEVBQUUsVUFEMkI7QUFFdkMzQixJQUFFLEVBQUU7QUFGbUMsQ0FBekMsRSxDQUtBOztBQUNBZ0IsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ1MsZUFBcEIsRUFBcUM7QUFDbkN6QixJQUFFLEVBQUUsaUJBRCtCO0FBRW5DMkIsWUFBVSxFQUFFO0FBRnVCLENBQXJDO0FBSUFYLEVBQUUsQ0FBQ1MsZUFBSCxDQUFtQkcsU0FBbkIsQ0FBNkJaLEVBQUUsQ0FBQ00sS0FBaEMsRUFBdUM7QUFDckNLLFlBQVUsRUFBRSxRQUR5QjtBQUVyQzNCLElBQUUsRUFBRTtBQUZpQyxDQUF2QyxFLENBS0E7O0FBRUFsQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJpRCxFQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDakZhOztBQUNiLE1BQU07QUFDRnBEO0FBREUsSUFFRkMsbUJBQU8sQ0FBQyw0QkFBRCxDQUZYOztBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLEtBQTBCO0FBQ3ZDLFFBQU00RCxJQUFOLFNBQW1CakUsS0FBbkIsQ0FBeUI7QUFDckI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhxQjs7QUFZeEI7QUFDRGlFLE1BQUksQ0FBQzFELElBQUwsQ0FBVTtBQUNOQyxNQUFFLEVBQUU7QUFDQUMsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRGhCO0FBRUFDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGeEI7QUFHQUMsZ0JBQVUsRUFBRTtBQUhaLEtBREU7QUFNTnFELFFBQUksRUFBRTtBQUNGekQsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRGQsS0FOQTtBQVNOb0QsU0FBSyxFQUFFO0FBQ0gxRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEYixLQVREO0FBWU5xRCxpQkFBYSxFQUFFO0FBQ1gzRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BREw7QUFFWFYsa0JBQVksRUFBRTtBQUZILEtBWlQ7QUFnQk44QyxZQUFRLEVBQUU7QUFDTmhELFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBaEJKO0FBbUJOc0QsZUFBVyxFQUFFO0FBQ1Q1RCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1k7QUFEUCxLQW5CUDtBQXNCTnFELFNBQUssRUFBRTtBQUNIN0QsVUFBSSxFQUFFSixTQUFTLENBQUNZO0FBRGIsS0F0QkQ7QUF5Qk5zRCxZQUFRLEVBQUU7QUFDTjlELFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBekJKO0FBNEJOeUQsU0FBSyxFQUFFO0FBQ0gvRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEYixLQTVCRDtBQStCTjBELFdBQU8sRUFBRTtBQUNMaEUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFgsS0EvQkg7QUFrQ04yRCxjQUFVLEVBQUU7QUFDUmpFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURSLEtBbENOO0FBcUNONEQsYUFBUyxFQUFFO0FBQ1BsRSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEVCxLQXJDTDtBQXdDTjZELHNCQUFrQixFQUFFO0FBQ2hCbkUsVUFBSSxFQUFFSixTQUFTLENBQUNLO0FBREEsS0F4Q2Q7QUEyQ05tRSxxQkFBaUIsRUFBRTtBQUNmcEUsVUFBSSxFQUFFSixTQUFTLENBQUN5RTtBQURELEtBM0NiO0FBOENOQyxtQkFBZSxFQUFFO0FBQ2J0RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0s7QUFESCxLQTlDWDtBQWlETmEsZ0JBQVksRUFBRTtBQUNWZCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFETixLQWpEUjtBQW9ETmlFLFVBQU0sRUFBRTtBQUNKdkUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFosS0FwREY7QUF1RE5rRSxVQUFNLEVBQUU7QUFDSnhFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBdkRGO0FBMERObUUsVUFBTSxFQUFFO0FBQ0p6RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEWixLQTFERjtBQTZETm9FLGFBQVMsRUFBRTtBQUNQMUUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFQsS0E3REw7QUFnRU5xRSxVQUFNLEVBQUU7QUFDSjNFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBaEVGO0FBbUVOc0Usa0JBQWMsRUFBRTtBQUNaNUUsVUFBSSxFQUFFSixTQUFTLENBQUNnQixPQURKO0FBRVpWLGtCQUFZLEVBQUU7QUFGRixLQW5FVjtBQXVFTjJFLG9CQUFnQixFQUFFO0FBQ2Q3RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ3lFO0FBREYsS0F2RVo7QUEwRU5TLG9CQUFnQixFQUFFO0FBQ2Q5RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BREY7QUFFZFYsa0JBQVksRUFBRTtBQUZBLEtBMUVaO0FBOEVONkUsd0JBQW9CLEVBQUU7QUFDbEIvRSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCO0FBREUsS0E5RWhCO0FBaUZOb0UsMkJBQXVCLEVBQUU7QUFDckJoRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3lFO0FBREssS0FqRm5CO0FBb0ZOWSx1QkFBbUIsRUFBRTtBQUNqQmpGLFVBQUksRUFBRUosU0FBUyxDQUFDWTtBQURDLEtBcEZmO0FBdUZOMEUsUUFBSSxFQUFFO0FBQ0ZsRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3VGLElBRGQ7QUFFRkMsWUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsU0FBckIsQ0FGTjtBQUdGbEYsa0JBQVksRUFBRTtBQUhaLEtBdkZBO0FBNEZObUYsVUFBTSxFQUFFO0FBQ0pyRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BRFo7QUFFSlYsa0JBQVksRUFBRTtBQUZWLEtBNUZGO0FBZ0dOb0YsZUFBVyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxLQURGO0FBRVR2RixVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BRlA7QUFHVFYsa0JBQVksRUFBRTtBQUhMO0FBaEdQLEdBQVYsRUFxR0c7QUFDQ1AsYUFERDtBQUVDaUMsYUFBUyxFQUFFO0FBRlosR0FyR0g7QUF5R0EsU0FBTzRCLElBQVA7QUFDSCxDQXhIRCxDOzs7Ozs7Ozs7Ozs7QUNKYTs7QUFDYixNQUFNO0FBQ0pqRTtBQURJLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN6QyxRQUFNNEYsS0FBTixTQUFvQmpHLEtBQXBCLENBQTBCO0FBQ3hCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFSd0I7O0FBU3pCO0FBQ0RpRyxPQUFLLENBQUMxRixJQUFOLENBQVc7QUFDVEMsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURkO0FBRUZDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGdEI7QUFHRkMsZ0JBQVUsRUFBRTtBQUhWLEtBREs7QUFNVHFGLGFBQVMsRUFBRTtBQUNUekYsVUFBSSxFQUFFSixTQUFTLENBQUNZO0FBRFAsS0FORjtBQVNUa0YsU0FBSyxFQUFFO0FBQ0wxRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3NDO0FBRFgsS0FURTtBQVlUdUIsUUFBSSxFQUFFO0FBQ0p6RCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEWixLQVpHO0FBZVRxRixlQUFXLEVBQUU7QUFDWDNGLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURMLEtBZko7QUFrQlQ2QixZQUFRLEVBQUU7QUFDUm5DLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURSO0FBRVJzQixjQUFRLEVBQUUsU0FGRjtBQUdSQyxnQkFBVSxFQUFFO0FBQ1ZDLGFBQUssRUFBRSxTQURHO0FBRVZDLFdBQUcsRUFBRSxJQUZLO0FBR1ZDLFVBQUUsRUFBRTtBQUhNO0FBSEosS0FsQkQ7QUEyQlRMLFVBQU0sRUFBRTtBQUNOdEIsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRFY7QUFFTnNCLGNBQVEsRUFBRSxTQUZKO0FBR05DLGdCQUFVLEVBQUU7QUFDVkMsYUFBSyxFQUFFLE9BREc7QUFFVkMsV0FBRyxFQUFFLElBRks7QUFHVkMsVUFBRSxFQUFFO0FBSE07QUFITjtBQTNCQyxHQUFYLEVBb0NHO0FBQ0RoQyxhQURDO0FBRURpQyxhQUFTLEVBQUU7QUFGVixHQXBDSDtBQXdDQSxTQUFPNEQsS0FBUDtBQUNELENBcERELEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FPQTs7QUFDQSxNQUFNSSxJQUFJLEdBQUc5RyxvRUFBYyxFQUN2QjtBQUNBK0csMkNBQUksQ0FBQztBQUNEO0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQXFDLEtBQXJDO0FBRlIsQ0FBRCxDQUZtQixDQUEzQjtBQVFlLHNFQUFPOUcsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU0yRyxJQUFJLENBQUM1RyxHQUFELEVBQU1DLEdBQU4sQ0FBVjtBQUNBLFFBQU07QUFBRWM7QUFBRixNQUFTZixHQUFHLENBQUMrRyxLQUFuQixDQUYrQixDQUkvQjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1uRyxxREFBTSxDQUFDb0csT0FBUCxDQUFlO0FBQ2hDQyxXQUFLLEVBQUU7QUFBRW5HLFVBQUUsRUFBRUE7QUFBTixPQUR5QjtBQUdoQ29HLGFBQU8sRUFBRSxDQUFDO0FBQ04xRSxhQUFLLEVBQUUrQixtREFERDtBQUNPN0IsVUFBRSxFQUFFO0FBRFgsT0FBRCxFQUVQO0FBQ0VGLGFBQUssRUFBRStELG9EQURUO0FBQ2dCN0QsVUFBRSxFQUFFLFFBRHBCO0FBRUV5RSxrQkFBVSxFQUFFLENBQUMsTUFBRCxDQUZkO0FBR0VWLGFBQUssRUFBRSxDQUNILENBQUMsV0FBRCxFQUFjLEtBQWQsQ0FERztBQUhULE9BRk87QUFIdUIsS0FBZixDQUFyQixDQURBLENBZUE7O0FBRUF6RyxPQUFHLENBQUNvSCxJQUFKLENBQVM7QUFBRUw7QUFBRixLQUFUO0FBQ0gsR0FsQkQsQ0FrQkUsT0FBT00sS0FBUCxFQUFjO0FBQ1o7QUFDQXJILE9BQUcsQ0FBQ29ILElBQUosQ0FBU0MsS0FBSyxDQUFDQyxPQUFmO0FBQ0g7QUFDSixDQTNCRCxFOzs7Ozs7Ozs7OztBQ2pCQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJwYWdlcy9hcGkvdjEvY291cnNlcy9jb3Vyc2UvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3YxL2NvdXJzZXMvY291cnNlL1tpZF0uanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBDb3Vyc2UgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIENvdXJzZS5iZWxvbmdzVG8obW9kZWxzLlVzZXIsIHtcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgICAgLy8gICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgXG4gICAgQ291cnNlLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJ2aWV3OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICAgIH0sXG4gICAgICAgIGZyZWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIHB1Ymxpc2hlZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3ZlclBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJlc2VfcHJldmlld19pbWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgbGVzc29uczoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBhY2Nlc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcklkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICAgICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdDb3Vyc2UnLFxuICAgIH0pO1xuICAgIHJldHVybiBDb3Vyc2U7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gIGNsYXNzIEVucm9sZWRfY291cnNlcyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIH1cbiAgfTtcbiAgRW5yb2xlZF9jb3Vyc2VzLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHBheW1lbnRfZW1haWw6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvc3Q6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBjb3Vyc2VJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAnY291cnNlSWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgIH1cbiAgICB9LFxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ0Vucm9sZWRfY291cnNlcycsXG4gIH0pO1xuICByZXR1cm4gRW5yb2xlZF9jb3Vyc2VzO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyBtYWluIG1vZGVsIGZpbGVcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcbmNvbnN0IGRiID0ge307XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgQ291cnNlIGZyb20gJy4vY291cnNlJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nXG5pbXBvcnQgRW5yb2xlZF9jb3Vyc2VzIGZyb20gJy4vZW5yb2xlZF9jb3Vyc2VzJ1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpO1xufVxuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmRiLnVzZXJzID0gVXNlcihzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmNvdXJzZXMgPSBDb3Vyc2Uoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi52aWRlb3MgPSBWaWRlbyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmVucm9sZWRfY291cnNlcyA9IEVucm9sZWRfY291cnNlcyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgY291cnNlXG5kYi51c2Vycy5oYXNNYW55KGRiLmNvdXJzZXMsIHsgXG4gIGFzOiAnY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIGNvdXJzZSBhbmQgdmlkZW9zXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCB2aWRlb3NcbmRiLnVzZXJzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIGVucm9sZWRcbmRiLmNvdXJzZXMuaGFzTWFueShkYi5lbnJvbGVkX2NvdXJzZXMsIHsgXG4gIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxuICBhczogJ2NvdXJzZSdcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGVucm9sZWRcbmRiLnVzZXJzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gY29uc29sZS5sb2coJyMjIyMjIycsIGRiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICAgIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIFVzZXIuaGFzTWFueShtb2RlbHMuQ291cnNlLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCdcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFVzZXIuaW5pdCh7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpc0VtYWlsUHVibGljOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgYWJvdXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueVVybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbnRlcmVzdHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZFVwZGF0ZWRBdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGZiX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICB0d191cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsQ29uZmlybWVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfYXBwbHk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2NvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWRfYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfcmVxX2Rlc2M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5FTlVNLFxuICAgICAgICAgICAgdmFsdWVzOiBbJ3N0dWRlbnQnLCAnYWRtaW4nLCAndGVhY2hlciddLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnc3R1ZGVudCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZ3JlZWRUZXJtczoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzZXF1ZWxpemUsXG4gICAgICAgIG1vZGVsTmFtZTogJ1VzZXInLFxuICAgIH0pO1xuICAgIHJldHVybiBVc2VyO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBWaWRlbyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgLy8gICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIC8vIH1cbiAgfTtcbiAgVmlkZW8uaW5pdCh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9fdXJsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgIH0sXG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ1ZpZGVvJyxcbiAgfSk7XG4gIHJldHVybiBWaWRlbztcbn07IiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICdAL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5pbXBvcnQgeyBcbiAgICBjb3Vyc2VzIGFzIENvdXJzZSwgXG4gICAgdXNlcnMgYXMgVXNlcixcbiAgICB2aWRlb3MgYXMgVmlkZW9cbn0gZnJvbSAnQC9tb2RlbHMvaW5kZXgnXG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAgIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gICAgQ29ycyh7XG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QgYW5kIE9QVElPTlNcbiAgICAgICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJywgJ0RFTEVURScsICdQVVQnXSxcbiAgICB9KVxuKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeVxuXG4gICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY291cnNlID0gYXdhaXQgQ291cnNlLmZpbmRPbmUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGlkIH0sXG5cbiAgICAgICAgICAgIGluY2x1ZGU6IFt7XG4gICAgICAgICAgICAgICAgbW9kZWw6IFVzZXIsIGFzOiAndXNlcidcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG1vZGVsOiBWaWRlbywgYXM6ICd2aWRlb3MnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnbmFtZSddLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBbXG4gICAgICAgICAgICAgICAgICAgIFsnY3JlYXRlZEF0JywgJ0FTQyddXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY291cnNlKVxuXG4gICAgICAgIHJlcy5zZW5kKHsgY291cnNlIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJlcy5zZW5kKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==