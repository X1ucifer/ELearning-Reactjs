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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/v1/auth/account.js");
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

/***/ "./pages/api/v1/auth/account.js":
/*!**************************************!*\
  !*** ./pages/api/v1/auth/account.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/init-middleware */ "./lib/init-middleware.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator/lib/isLength */ "validator/lib/isLength");
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/index */ "./models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_5__);





 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    return res.status(401).json({
      message: "No autorization token"
    });
  }

  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;

    case "GET":
      await handleGetRequest(req, res);
      break;

    case "PUT":
      await handlePutRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
});

const handlePostRequest = async (req, res) => {
  const {
    currentPassword,
    newPassword,
    newConfirmPassword
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf"); // check email, name, password format

    if (!currentPassword) {
      return res.status(422).send({
        message: "Must be provide current Password!"
      });
    } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_4___default()(newPassword, {
      min: 6,
      max: 12
    })) {
      return res.status(422).send({
        message: "New Password must be 6-12 characters long!"
      });
    } else if (newPassword != newConfirmPassword) {
      return res.status(422).json({
        message: "Confirm password doesn't matched!"
      });
    }

    const newPasswordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.hash(newPassword, 10);
    const user = await _models_index__WEBPACK_IMPORTED_MODULE_5__["users"].findOne({
      attributes: ['password'],
      where: {
        id: userId
      }
    });
    const match = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(currentPassword, user.password);

    if (!match) {
      return res.status(422).send({
        message: "Current Password doesn't match!"
      });
    }

    await _models_index__WEBPACK_IMPORTED_MODULE_5__["users"].update({
      password: newPasswordHash
    }, {
      where: {
        id: userId
      }
    });
    res.status(200).json({
      "message": "Successfully updated the password!"
    });
  } catch (error) {
    console.error(error);
    res.status(403).json({
      message: "Invalid token"
    });
  }
};

const handlePutRequest = async (req, res) => {
  const {
    name,
    designation,
    location,
    description
  } = req.body;

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    await _models_index__WEBPACK_IMPORTED_MODULE_5__["users"].update({
      name: name,
      designation: designation,
      description: description,
      location: location
    }, {
      where: {
        id: userId
      }
    });
    res.status(200).json({
      "message": "Successfully updated the profile!"
    });
  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    const user = await _models_index__WEBPACK_IMPORTED_MODULE_5__["users"].findOne({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: userId
      },
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_5__["enroled_courses"],
        as: 'enroled_courses',
        attributes: ['courseId']
      }]
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(403).send("Invalid token");
  }
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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

/***/ }),

/***/ "validator/lib/isLength":
/*!*****************************************!*\
  !*** external "validator/lib/isLength" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isLength");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyLmpzIiwid2VicGFjazovLy8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdjEvYXV0aC9hY2NvdW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3IvbGliL2lzTGVuZ3RoXCIiXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIk1vZGVsIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXF1ZWxpemUiLCJTZXF1ZWxpemUiLCJDb3Vyc2UiLCJpbml0IiwiaWQiLCJ0eXBlIiwiVVVJRCIsImRlZmF1bHRWYWx1ZSIsIlVVSURWNCIsInByaW1hcnlLZXkiLCJ0aXRsZSIsIlNUUklORyIsIm92ZXJ2aWV3IiwiVEVYVCIsInByaWNlIiwiRkxPQVQiLCJmcmVlIiwiQk9PTEVBTiIsInB1Ymxpc2hlZCIsInByb2ZpbGVQaG90byIsImNvdmVyUGhvdG8iLCJjb3VyZXNlX3ByZXZpZXdfaW1nIiwiY291cnNlX3ByZXZpZXdfdmlkZW8iLCJkdXJhdGlvbiIsImxlc3NvbnMiLCJhY2Nlc3MiLCJjYXRlZ29yeSIsInVzZXJJZCIsIm9uRGVsZXRlIiwicmVmZXJlbmNlcyIsIm1vZGVsIiwia2V5IiwiYXMiLCJtb2RlbE5hbWUiLCJFbnJvbGVkX2NvdXJzZXMiLCJhc3NvY2lhdGUiLCJtb2RlbHMiLCJwYXltZW50X2VtYWlsIiwiY29zdCIsIklOVEVHRVIiLCJjb3Vyc2VJZCIsImZzIiwicGF0aCIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsImVudiIsImNvbmZpZyIsIl9fZGlybmFtZSIsImRiIiwidXNlX2Vudl92YXJpYWJsZSIsInByb2Nlc3MiLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VycyIsImNvdXJzZXMiLCJ2aWRlb3MiLCJlbnJvbGVkX2NvdXJzZXMiLCJoYXNNYW55IiwiZm9yZWlnbktleSIsImJlbG9uZ3NUbyIsIlVzZXIiLCJuYW1lIiwiZW1haWwiLCJpc0VtYWlsUHVibGljIiwiZGVzaWduYXRpb24iLCJhYm91dCIsImxvY2F0aW9uIiwicGhvbmUiLCJjb21wYW55IiwiY29tcGFueVVybCIsImludGVyZXN0cyIsInBhc3N3b3JkUmVzZXRUb2tlbiIsInBhc3N3b3JkVXBkYXRlZEF0IiwiREFURSIsImVtYWlsUmVzZXRUb2tlbiIsImdlbmRlciIsImZiX3VybCIsInR3X3VybCIsImluc3RhX3VybCIsImluX3VybCIsImVtYWlsQ29uZmlybWVkIiwiZW1haWxDb25maXJtZWRBdCIsImFzX3RlYWNoZXJfYXBwbHkiLCJhc190ZWFjaGVyX2NvbmZpcm1lZCIsImFzX3RlYWNoZXJfY29uZmlybWVkX2F0IiwiYXNfdGVhY2hlcl9yZXFfZGVzYyIsInJvbGUiLCJFTlVNIiwidmFsdWVzIiwiYWN0aXZlIiwiYWdyZWVkVGVybXMiLCJhbGxvd051bGwiLCJWaWRlbyIsInZpZGVvX3VybCIsIm9yZGVyIiwiZGVzY3JpcHRpb24iLCJjb3JzIiwiQ29ycyIsIm1ldGhvZHMiLCJoZWFkZXJzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtZXRob2QiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImhhbmRsZUdldFJlcXVlc3QiLCJoYW5kbGVQdXRSZXF1ZXN0Iiwic2VuZCIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwibmV3Q29uZmlybVBhc3N3b3JkIiwiYm9keSIsImp3dCIsInZlcmlmeSIsImF1dGhvcml6YXRpb24iLCJpc0xlbmd0aCIsIm1pbiIsIm1heCIsIm5ld1Bhc3N3b3JkSGFzaCIsImJjcnlwdCIsImhhc2giLCJ1c2VyIiwiZmluZE9uZSIsImF0dHJpYnV0ZXMiLCJ3aGVyZSIsIm1hdGNoIiwiY29tcGFyZSIsInVwZGF0ZSIsImVycm9yIiwiY29uc29sZSIsImV4Y2x1ZGUiLCJpbmNsdWRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQy9DLFNBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQ0gsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUM3QkwsY0FBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFZO0FBQzdCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNILEtBTFMsQ0FBVjtBQU1ILEdBUEQsQ0FESjtBQVNILEM7Ozs7Ozs7Ozs7OztBQ2JZOztBQUNiLE1BQU07QUFDRkU7QUFERSxJQUVGQyxtQkFBTyxDQUFDLDRCQUFELENBRlg7O0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUFDQyxTQUFELEVBQVlDLFNBQVosS0FBMEI7QUFDdkMsUUFBTUMsTUFBTixTQUFxQk4sS0FBckIsQ0FBMkI7QUFDdkI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWnVCOztBQWExQjtBQUVETSxRQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxNQUFFLEVBQUU7QUFDQUMsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRGhCO0FBRUFDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGeEI7QUFHQUMsZ0JBQVUsRUFBRTtBQUhaLEtBREk7QUFNUkMsU0FBSyxFQUFFO0FBQ0hMLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURiLEtBTkM7QUFTUkMsWUFBUSxFQUFFO0FBQ05QLFVBQUksRUFBRUosU0FBUyxDQUFDWTtBQURWLEtBVEY7QUFZUkMsU0FBSyxFQUFFO0FBQ0hULFVBQUksRUFBRUosU0FBUyxDQUFDYztBQURiLEtBWkM7QUFlUkMsUUFBSSxFQUFFO0FBQ0ZYLFVBQUksRUFBRUosU0FBUyxDQUFDZ0I7QUFEZCxLQWZFO0FBa0JSQyxhQUFTLEVBQUU7QUFDUGIsVUFBSSxFQUFFSixTQUFTLENBQUNnQixPQURUO0FBRVBWLGtCQUFZLEVBQUU7QUFGUCxLQWxCSDtBQXNCUlksZ0JBQVksRUFBRTtBQUNWZCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFETixLQXRCTjtBQXlCUlMsY0FBVSxFQUFFO0FBQ1JmLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURSLEtBekJKO0FBNEJSVSx1QkFBbUIsRUFBRTtBQUNqQmhCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURDLEtBNUJiO0FBK0JSVyx3QkFBb0IsRUFBRTtBQUNsQmpCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURFLEtBL0JkO0FBa0NSWSxZQUFRLEVBQUU7QUFDTmxCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBbENGO0FBcUNSWSxZQUFRLEVBQUU7QUFDTmxCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBckNGO0FBd0NSYSxXQUFPLEVBQUU7QUFDTG5CLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURYLEtBeENEO0FBMkNSYyxVQUFNLEVBQUU7QUFDSnBCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBM0NBO0FBOENSZSxZQUFRLEVBQUU7QUFDTnJCLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBOUNGO0FBaURSZ0IsVUFBTSxFQUFFO0FBQ0p0QixVQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEWjtBQUVKc0IsY0FBUSxFQUFFLFNBRk47QUFHSkMsZ0JBQVUsRUFBRTtBQUNSQyxhQUFLLEVBQUUsT0FEQztBQUVSQyxXQUFHLEVBQUUsSUFGRztBQUdSQyxVQUFFLEVBQUU7QUFISTtBQUhSO0FBakRBLEdBQVosRUEwREc7QUFDQ2hDLGFBREQ7QUFFQ2lDLGFBQVMsRUFBRTtBQUZaLEdBMURIO0FBOERBLFNBQU8vQixNQUFQO0FBQ0gsQ0EvRUQsQzs7Ozs7Ozs7Ozs7O0FDSmE7O0FBQ2IsTUFBTTtBQUNKTjtBQURJLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN6QyxRQUFNaUMsZUFBTixTQUE4QnRDLEtBQTlCLENBQW9DO0FBQ2xDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxXQUFPdUMsU0FBUCxDQUFpQkMsTUFBakIsRUFBeUIsQ0FDdkI7QUFDRDs7QUFSaUM7O0FBU25DO0FBQ0RGLGlCQUFlLENBQUMvQixJQUFoQixDQUFxQjtBQUNuQkMsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURkO0FBRUZDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGdEI7QUFHRkMsZ0JBQVUsRUFBRTtBQUhWLEtBRGU7QUFNbkI0QixpQkFBYSxFQUFFO0FBQ2JoQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFESCxLQU5JO0FBU25CMkIsUUFBSSxFQUFFO0FBQ0pqQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ3NDO0FBRFosS0FUYTtBQVluQkMsWUFBUSxFQUFFO0FBQ1JuQyxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEUjtBQUVSc0IsY0FBUSxFQUFFLFNBRkY7QUFHUkMsZ0JBQVUsRUFBRTtBQUNWQyxhQUFLLEVBQUUsU0FERztBQUVWQyxXQUFHLEVBQUUsSUFGSztBQUdWQyxVQUFFLEVBQUU7QUFITTtBQUhKLEtBWlM7QUFxQm5CTCxVQUFNLEVBQUU7QUFDTnRCLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURWO0FBRU5zQixjQUFRLEVBQUUsU0FGSjtBQUdOQyxnQkFBVSxFQUFFO0FBQ1ZDLGFBQUssRUFBRSxPQURHO0FBRVZDLFdBQUcsRUFBRSxJQUZLO0FBR1ZDLFVBQUUsRUFBRTtBQUhNO0FBSE47QUFyQlcsR0FBckIsRUE4Qkc7QUFDRGhDLGFBREM7QUFFRGlDLGFBQVMsRUFBRTtBQUZWLEdBOUJIO0FBa0NBLFNBQU9DLGVBQVA7QUFDRCxDQTlDRCxDOzs7Ozs7Ozs7Ozs7QUNKQSxrRCxDQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBVkEsTUFBTU8sRUFBRSxHQUFHNUMsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQU02QyxJQUFJLEdBQUc3QyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLE1BQU1JLFNBQVMsR0FBR0osbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFDQSxNQUFNOEMsUUFBUSxHQUFHRCxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsVUFBZCxDQUFqQjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxpQkFBd0IsS0FBcEM7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHakQsbUJBQU8sQ0FBQ2tELDREQUFELENBQVAsQ0FBOENGLEdBQTlDLENBQWY7O0FBQ0EsTUFBTUcsRUFBRSxHQUFHLEVBQVg7QUFNQSxJQUFJaEQsU0FBSjs7QUFDQSxJQUFJOEMsTUFBTSxDQUFDRyxnQkFBWCxFQUE2QjtBQUMzQmpELFdBQVMsR0FBRyxJQUFJQyxTQUFKLENBQWNpRCxPQUFPLENBQUNMLEdBQVIsQ0FBWUMsTUFBTSxDQUFDRyxnQkFBbkIsQ0FBZCxFQUFvREgsTUFBcEQsQ0FBWjtBQUNELENBRkQsTUFFTztBQUNMOUMsV0FBUyxHQUFHLElBQUlDLFNBQUosQ0FBYzZDLE1BQU0sQ0FBQ0ssUUFBckIsRUFBK0JMLE1BQU0sQ0FBQ00sUUFBdEMsRUFBZ0ROLE1BQU0sQ0FBQ08sUUFBdkQsRUFBaUVQLE1BQWpFLENBQVo7QUFDRDs7QUFFREUsRUFBRSxDQUFDaEQsU0FBSCxHQUFlQSxTQUFmO0FBQ0FnRCxFQUFFLENBQUMvQyxTQUFILEdBQWVBLFNBQWY7QUFFQStDLEVBQUUsQ0FBQ00sS0FBSCxHQUFXLG1CQUFLdEQsU0FBTCxFQUFnQkMsU0FBaEIsQ0FBWDtBQUNBK0MsRUFBRSxDQUFDTyxPQUFILEdBQWEscUJBQU92RCxTQUFQLEVBQWtCQyxTQUFsQixDQUFiO0FBQ0ErQyxFQUFFLENBQUNRLE1BQUgsR0FBWSxvQkFBTXhELFNBQU4sRUFBaUJDLFNBQWpCLENBQVo7QUFDQStDLEVBQUUsQ0FBQ1MsZUFBSCxHQUFxQiw4QkFBZ0J6RCxTQUFoQixFQUEyQkMsU0FBM0IsQ0FBckIsQyxDQUVBOztBQUNBK0MsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ08sT0FBcEIsRUFBNkI7QUFDM0J2QixJQUFFLEVBQUUsU0FEdUI7QUFFM0IyQixZQUFVLEVBQUU7QUFGZSxDQUE3QjtBQUlBWCxFQUFFLENBQUNPLE9BQUgsQ0FBV0ssU0FBWCxDQUFxQlosRUFBRSxDQUFDTSxLQUF4QixFQUErQjtBQUM3QkssWUFBVSxFQUFFLFFBRGlCO0FBRTdCM0IsSUFBRSxFQUFFO0FBRnlCLENBQS9CLEUsQ0FLQTs7QUFDQWdCLEVBQUUsQ0FBQ08sT0FBSCxDQUFXRyxPQUFYLENBQW1CVixFQUFFLENBQUNRLE1BQXRCLEVBQThCO0FBQzVCeEIsSUFBRSxFQUFFLFFBRHdCO0FBRTVCMkIsWUFBVSxFQUFFO0FBRmdCLENBQTlCO0FBSUFYLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVSSxTQUFWLENBQW9CWixFQUFFLENBQUNPLE9BQXZCLEVBQWdDO0FBQzlCSSxZQUFVLEVBQUUsVUFEa0I7QUFFOUIzQixJQUFFLEVBQUU7QUFGMEIsQ0FBaEMsRSxDQUtBOztBQUNBZ0IsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ1EsTUFBcEIsRUFBNEI7QUFDMUJ4QixJQUFFLEVBQUUsUUFEc0I7QUFFMUIyQixZQUFVLEVBQUU7QUFGYyxDQUE1QjtBQUlBWCxFQUFFLENBQUNRLE1BQUgsQ0FBVUksU0FBVixDQUFvQlosRUFBRSxDQUFDTyxPQUF2QixFQUFnQztBQUM5QkksWUFBVSxFQUFFLFFBRGtCO0FBRTlCM0IsSUFBRSxFQUFFO0FBRjBCLENBQWhDLEUsQ0FLQTs7QUFDQWdCLEVBQUUsQ0FBQ08sT0FBSCxDQUFXRyxPQUFYLENBQW1CVixFQUFFLENBQUNTLGVBQXRCLEVBQXVDO0FBQ3JDekIsSUFBRSxFQUFFLGlCQURpQztBQUVyQzJCLFlBQVUsRUFBRTtBQUZ5QixDQUF2QztBQUlBWCxFQUFFLENBQUNTLGVBQUgsQ0FBbUJHLFNBQW5CLENBQTZCWixFQUFFLENBQUNPLE9BQWhDLEVBQXlDO0FBQ3ZDSSxZQUFVLEVBQUUsVUFEMkI7QUFFdkMzQixJQUFFLEVBQUU7QUFGbUMsQ0FBekMsRSxDQUtBOztBQUNBZ0IsRUFBRSxDQUFDTSxLQUFILENBQVNJLE9BQVQsQ0FBaUJWLEVBQUUsQ0FBQ1MsZUFBcEIsRUFBcUM7QUFDbkN6QixJQUFFLEVBQUUsaUJBRCtCO0FBRW5DMkIsWUFBVSxFQUFFO0FBRnVCLENBQXJDO0FBSUFYLEVBQUUsQ0FBQ1MsZUFBSCxDQUFtQkcsU0FBbkIsQ0FBNkJaLEVBQUUsQ0FBQ00sS0FBaEMsRUFBdUM7QUFDckNLLFlBQVUsRUFBRSxRQUR5QjtBQUVyQzNCLElBQUUsRUFBRTtBQUZpQyxDQUF2QyxFLENBS0E7O0FBRUFsQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJpRCxFQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDakZhOztBQUNiLE1BQU07QUFDRnBEO0FBREUsSUFFRkMsbUJBQU8sQ0FBQyw0QkFBRCxDQUZYOztBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLEtBQTBCO0FBQ3ZDLFFBQU00RCxJQUFOLFNBQW1CakUsS0FBbkIsQ0FBeUI7QUFDckI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhxQjs7QUFZeEI7QUFDRGlFLE1BQUksQ0FBQzFELElBQUwsQ0FBVTtBQUNOQyxNQUFFLEVBQUU7QUFDQUMsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRGhCO0FBRUFDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGeEI7QUFHQUMsZ0JBQVUsRUFBRTtBQUhaLEtBREU7QUFNTnFELFFBQUksRUFBRTtBQUNGekQsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRGQsS0FOQTtBQVNOb0QsU0FBSyxFQUFFO0FBQ0gxRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEYixLQVREO0FBWU5xRCxpQkFBYSxFQUFFO0FBQ1gzRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BREw7QUFFWFYsa0JBQVksRUFBRTtBQUZILEtBWlQ7QUFnQk44QyxZQUFRLEVBQUU7QUFDTmhELFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBaEJKO0FBbUJOc0QsZUFBVyxFQUFFO0FBQ1Q1RCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1k7QUFEUCxLQW5CUDtBQXNCTnFELFNBQUssRUFBRTtBQUNIN0QsVUFBSSxFQUFFSixTQUFTLENBQUNZO0FBRGIsS0F0QkQ7QUF5Qk5zRCxZQUFRLEVBQUU7QUFDTjlELFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURWLEtBekJKO0FBNEJOeUQsU0FBSyxFQUFFO0FBQ0gvRCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEYixLQTVCRDtBQStCTjBELFdBQU8sRUFBRTtBQUNMaEUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFgsS0EvQkg7QUFrQ04yRCxjQUFVLEVBQUU7QUFDUmpFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURSLEtBbENOO0FBcUNONEQsYUFBUyxFQUFFO0FBQ1BsRSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEVCxLQXJDTDtBQXdDTjZELHNCQUFrQixFQUFFO0FBQ2hCbkUsVUFBSSxFQUFFSixTQUFTLENBQUNLO0FBREEsS0F4Q2Q7QUEyQ05tRSxxQkFBaUIsRUFBRTtBQUNmcEUsVUFBSSxFQUFFSixTQUFTLENBQUN5RTtBQURELEtBM0NiO0FBOENOQyxtQkFBZSxFQUFFO0FBQ2J0RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ0s7QUFESCxLQTlDWDtBQWlETmEsZ0JBQVksRUFBRTtBQUNWZCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFETixLQWpEUjtBQW9ETmlFLFVBQU0sRUFBRTtBQUNKdkUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFosS0FwREY7QUF1RE5rRSxVQUFNLEVBQUU7QUFDSnhFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBdkRGO0FBMERObUUsVUFBTSxFQUFFO0FBQ0p6RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEWixLQTFERjtBQTZETm9FLGFBQVMsRUFBRTtBQUNQMUUsVUFBSSxFQUFFSixTQUFTLENBQUNVO0FBRFQsS0E3REw7QUFnRU5xRSxVQUFNLEVBQUU7QUFDSjNFLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURaLEtBaEVGO0FBbUVOc0Usa0JBQWMsRUFBRTtBQUNaNUUsVUFBSSxFQUFFSixTQUFTLENBQUNnQixPQURKO0FBRVpWLGtCQUFZLEVBQUU7QUFGRixLQW5FVjtBQXVFTjJFLG9CQUFnQixFQUFFO0FBQ2Q3RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ3lFO0FBREYsS0F2RVo7QUEwRU5TLG9CQUFnQixFQUFFO0FBQ2Q5RSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BREY7QUFFZFYsa0JBQVksRUFBRTtBQUZBLEtBMUVaO0FBOEVONkUsd0JBQW9CLEVBQUU7QUFDbEIvRSxVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCO0FBREUsS0E5RWhCO0FBaUZOb0UsMkJBQXVCLEVBQUU7QUFDckJoRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3lFO0FBREssS0FqRm5CO0FBb0ZOWSx1QkFBbUIsRUFBRTtBQUNqQmpGLFVBQUksRUFBRUosU0FBUyxDQUFDWTtBQURDLEtBcEZmO0FBdUZOMEUsUUFBSSxFQUFFO0FBQ0ZsRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3VGLElBRGQ7QUFFRkMsWUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsU0FBckIsQ0FGTjtBQUdGbEYsa0JBQVksRUFBRTtBQUhaLEtBdkZBO0FBNEZObUYsVUFBTSxFQUFFO0FBQ0pyRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BRFo7QUFFSlYsa0JBQVksRUFBRTtBQUZWLEtBNUZGO0FBZ0dOb0YsZUFBVyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxLQURGO0FBRVR2RixVQUFJLEVBQUVKLFNBQVMsQ0FBQ2dCLE9BRlA7QUFHVFYsa0JBQVksRUFBRTtBQUhMO0FBaEdQLEdBQVYsRUFxR0c7QUFDQ1AsYUFERDtBQUVDaUMsYUFBUyxFQUFFO0FBRlosR0FyR0g7QUF5R0EsU0FBTzRCLElBQVA7QUFDSCxDQXhIRCxDOzs7Ozs7Ozs7Ozs7QUNKYTs7QUFDYixNQUFNO0FBQ0pqRTtBQURJLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN6QyxRQUFNNEYsS0FBTixTQUFvQmpHLEtBQXBCLENBQTBCO0FBQ3hCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFSd0I7O0FBU3pCO0FBQ0RpRyxPQUFLLENBQUMxRixJQUFOLENBQVc7QUFDVEMsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURkO0FBRUZDLGtCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFGdEI7QUFHRkMsZ0JBQVUsRUFBRTtBQUhWLEtBREs7QUFNVHFGLGFBQVMsRUFBRTtBQUNUekYsVUFBSSxFQUFFSixTQUFTLENBQUNZO0FBRFAsS0FORjtBQVNUa0YsU0FBSyxFQUFFO0FBQ0wxRixVQUFJLEVBQUVKLFNBQVMsQ0FBQ3NDO0FBRFgsS0FURTtBQVlUdUIsUUFBSSxFQUFFO0FBQ0p6RCxVQUFJLEVBQUVKLFNBQVMsQ0FBQ1U7QUFEWixLQVpHO0FBZVRxRixlQUFXLEVBQUU7QUFDWDNGLFVBQUksRUFBRUosU0FBUyxDQUFDVTtBQURMLEtBZko7QUFrQlQ2QixZQUFRLEVBQUU7QUFDUm5DLFVBQUksRUFBRUosU0FBUyxDQUFDSyxJQURSO0FBRVJzQixjQUFRLEVBQUUsU0FGRjtBQUdSQyxnQkFBVSxFQUFFO0FBQ1ZDLGFBQUssRUFBRSxTQURHO0FBRVZDLFdBQUcsRUFBRSxJQUZLO0FBR1ZDLFVBQUUsRUFBRTtBQUhNO0FBSEosS0FsQkQ7QUEyQlRMLFVBQU0sRUFBRTtBQUNOdEIsVUFBSSxFQUFFSixTQUFTLENBQUNLLElBRFY7QUFFTnNCLGNBQVEsRUFBRSxTQUZKO0FBR05DLGdCQUFVLEVBQUU7QUFDVkMsYUFBSyxFQUFFLE9BREc7QUFFVkMsV0FBRyxFQUFFLElBRks7QUFHVkMsVUFBRSxFQUFFO0FBSE07QUFITjtBQTNCQyxHQUFYLEVBb0NHO0FBQ0RoQyxhQURDO0FBRURpQyxhQUFTLEVBQUU7QUFGVixHQXBDSDtBQXdDQSxTQUFPNEQsS0FBUDtBQUNELENBcERELEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FPQTs7QUFDQSxNQUFNSSxJQUFJLEdBQUc5RyxvRUFBYyxFQUN2QjtBQUNBK0csMkNBQUksQ0FBQztBQUNEO0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQXFDLEtBQXJDO0FBRlIsQ0FBRCxDQUZtQixDQUEzQjtBQVFlLHNFQUFPOUcsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU0yRyxJQUFJLENBQUM1RyxHQUFELEVBQU1DLEdBQU4sQ0FBVjs7QUFDQSxNQUFHLEVBQUUsbUJBQW1CRCxHQUFHLENBQUMrRyxPQUF6QixDQUFILEVBQXFDO0FBQ2pDLFdBQU85RyxHQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBckIsQ0FBUDtBQUNIOztBQUNELFVBQU9sSCxHQUFHLENBQUNtSCxNQUFYO0FBQ0ksU0FBSyxNQUFMO0FBQ0ksWUFBTUMsaUJBQWlCLENBQUNwSCxHQUFELEVBQU1DLEdBQU4sQ0FBdkI7QUFDQTs7QUFDSixTQUFLLEtBQUw7QUFDSSxZQUFNb0gsZ0JBQWdCLENBQUNySCxHQUFELEVBQU1DLEdBQU4sQ0FBdEI7QUFDQTs7QUFDSixTQUFLLEtBQUw7QUFDSSxZQUFNcUgsZ0JBQWdCLENBQUN0SCxHQUFELEVBQU1DLEdBQU4sQ0FBdEI7QUFDQTs7QUFDSjtBQUNJQSxTQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBc0IsVUFBU3ZILEdBQUcsQ0FBQ21ILE1BQU8sY0FBMUM7QUFYUjtBQWFILENBbEJEOztBQW9CQSxNQUFNQyxpQkFBaUIsR0FBRyxPQUFPcEgsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzFDLFFBQU07QUFBQ3VILG1CQUFEO0FBQWtCQyxlQUFsQjtBQUErQkM7QUFBL0IsTUFBcUQxSCxHQUFHLENBQUMySCxJQUEvRDs7QUFDQSxNQUFJO0FBQ0EsVUFBTTtBQUFDckY7QUFBRCxRQUFXc0YsbURBQUcsQ0FBQ0MsTUFBSixDQUFXN0gsR0FBRyxDQUFDK0csT0FBSixDQUFZZSxhQUF2QixFQUFzQ2pFLHdCQUF0QyxDQUFqQixDQURBLENBRUE7O0FBQ0EsUUFBSSxDQUFDMkQsZUFBTCxFQUFxQjtBQUNqQixhQUFPdkgsR0FBRyxDQUFDK0csTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCO0FBQUNMLGVBQU8sRUFBRTtBQUFWLE9BQXJCLENBQVA7QUFDSCxLQUZELE1BRU8sSUFBSSxDQUFDYSw2REFBUSxDQUFDTixXQUFELEVBQWM7QUFBQ08sU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FBZCxDQUFiLEVBQThDO0FBQ2pELGFBQU9oSSxHQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUI7QUFBQ0wsZUFBTyxFQUFFO0FBQVYsT0FBckIsQ0FBUDtBQUNILEtBRk0sTUFFQSxJQUFJTyxXQUFXLElBQUlDLGtCQUFuQixFQUFzQztBQUN6QyxhQUFPekgsR0FBRyxDQUFDK0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BQXJCLENBQVA7QUFDSDs7QUFFRCxVQUFNZ0IsZUFBZSxHQUFHLE1BQU1DLDZDQUFNLENBQUNDLElBQVAsQ0FBWVgsV0FBWixFQUF5QixFQUF6QixDQUE5QjtBQUVBLFVBQU1ZLElBQUksR0FBRyxNQUFNN0QsbURBQUksQ0FBQzhELE9BQUwsQ0FBYTtBQUM1QkMsZ0JBQVUsRUFBRSxDQUFDLFVBQUQsQ0FEZ0I7QUFFNUJDLFdBQUssRUFBRTtBQUFFekgsVUFBRSxFQUFFdUI7QUFBTjtBQUZxQixLQUFiLENBQW5CO0FBS0EsVUFBTW1HLEtBQUssR0FBRyxNQUFNTiw2Q0FBTSxDQUFDTyxPQUFQLENBQWVsQixlQUFmLEVBQWdDYSxJQUFJLENBQUNyRSxRQUFyQyxDQUFwQjs7QUFFQSxRQUFHLENBQUN5RSxLQUFKLEVBQVU7QUFDTixhQUFPeEksR0FBRyxDQUFDK0csTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCO0FBQUNMLGVBQU8sRUFBRTtBQUFWLE9BQXJCLENBQVA7QUFDSDs7QUFFRCxVQUFNMUMsbURBQUksQ0FBQ21FLE1BQUwsQ0FDRjtBQUNJM0UsY0FBUSxFQUFFa0U7QUFEZCxLQURFLEVBSUY7QUFDSU0sV0FBSyxFQUFFO0FBQUN6SCxVQUFFLEVBQUV1QjtBQUFMO0FBRFgsS0FKRSxDQUFOO0FBU0FyQyxPQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQyxpQkFBVztBQUFaLEtBQXJCO0FBQ0gsR0FsQ0QsQ0FrQ0UsT0FBTzJCLEtBQVAsRUFBYztBQUNaQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBM0ksT0FBRyxDQUFDK0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQXJCO0FBQ0g7QUFDSixDQXhDRDs7QUEwQ0EsTUFBTUksZ0JBQWdCLEdBQUcsT0FBT3RILEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN6QyxRQUFNO0FBQUN3RSxRQUFEO0FBQU9HLGVBQVA7QUFBb0JFLFlBQXBCO0FBQThCNkI7QUFBOUIsTUFBNkMzRyxHQUFHLENBQUMySCxJQUF2RDs7QUFDQSxNQUFJO0FBQ0EsVUFBTTtBQUFDckY7QUFBRCxRQUFXc0YsbURBQUcsQ0FBQ0MsTUFBSixDQUFXN0gsR0FBRyxDQUFDK0csT0FBSixDQUFZZSxhQUF2QixFQUFzQ2pFLHdCQUF0QyxDQUFqQjtBQUNBLFVBQU1XLG1EQUFJLENBQUNtRSxNQUFMLENBQ0Y7QUFDSWxFLFVBQUksRUFBRUEsSUFEVjtBQUVJRyxpQkFBVyxFQUFFQSxXQUZqQjtBQUdJK0IsaUJBQVcsRUFBRUEsV0FIakI7QUFJSTdCLGNBQVEsRUFBRUE7QUFKZCxLQURFLEVBT0Y7QUFDSTBELFdBQUssRUFBRTtBQUFDekgsVUFBRSxFQUFFdUI7QUFBTDtBQURYLEtBUEUsQ0FBTjtBQVlBckMsT0FBRyxDQUFDK0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUMsaUJBQVc7QUFBWixLQUFyQjtBQUNILEdBZkQsQ0FlRSxPQUFPMkIsS0FBUCxFQUFjO0FBQ1ozSSxPQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBckI7QUFDSDtBQUNKLENBcEJEOztBQXNCQSxNQUFNRyxnQkFBZ0IsR0FBRyxPQUFPckgsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3pDLE1BQUk7QUFDQSxVQUFNO0FBQUNxQztBQUFELFFBQVdzRixtREFBRyxDQUFDQyxNQUFKLENBQVc3SCxHQUFHLENBQUMrRyxPQUFKLENBQVllLGFBQXZCLEVBQXNDakUsd0JBQXRDLENBQWpCO0FBQ0EsVUFBTXdFLElBQUksR0FBRyxNQUFNN0QsbURBQUksQ0FBQzhELE9BQUwsQ0FBYTtBQUM1QkMsZ0JBQVUsRUFBRTtBQUNSTyxlQUFPLEVBQUUsQ0FBQyxVQUFEO0FBREQsT0FEZ0I7QUFJNUJOLFdBQUssRUFBRTtBQUFFekgsVUFBRSxFQUFFdUI7QUFBTixPQUpxQjtBQUs1QnlHLGFBQU8sRUFBRSxDQUFDO0FBQ050RyxhQUFLLEVBQUVJLDZEQUREO0FBQ2tCRixVQUFFLEVBQUUsaUJBRHRCO0FBRU40RixrQkFBVSxFQUFFLENBQUMsVUFBRDtBQUZOLE9BQUQ7QUFMbUIsS0FBYixDQUFuQjs7QUFVQSxRQUFHRixJQUFILEVBQVE7QUFDSnBJLFNBQUcsQ0FBQytHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQm9CLElBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hwSSxTQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsZ0JBQXJCO0FBQ0g7QUFDSixHQWpCRCxDQWlCRSxPQUFPcUIsS0FBUCxFQUFjO0FBQ1ozSSxPQUFHLENBQUMrRyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsZUFBckI7QUFDSDtBQUNKLENBckJELEM7Ozs7Ozs7Ozs7O0FDeEdBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2FwaS92MS9hdXRoL2FjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS92MS9hdXRoL2FjY291bnQuanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBDb3Vyc2UgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIENvdXJzZS5iZWxvbmdzVG8obW9kZWxzLlVzZXIsIHtcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgICAgLy8gICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgXG4gICAgQ291cnNlLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJ2aWV3OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICAgIH0sXG4gICAgICAgIGZyZWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIHB1Ymxpc2hlZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3ZlclBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJlc2VfcHJldmlld19pbWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgbGVzc29uczoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBhY2Nlc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcklkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICAgICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdDb3Vyc2UnLFxuICAgIH0pO1xuICAgIHJldHVybiBDb3Vyc2U7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gIGNsYXNzIEVucm9sZWRfY291cnNlcyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIH1cbiAgfTtcbiAgRW5yb2xlZF9jb3Vyc2VzLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHBheW1lbnRfZW1haWw6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvc3Q6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBjb3Vyc2VJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAnY291cnNlSWQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgIGFzOiAndXNlcklkJyxcbiAgICAgIH1cbiAgICB9LFxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ0Vucm9sZWRfY291cnNlcycsXG4gIH0pO1xuICByZXR1cm4gRW5yb2xlZF9jb3Vyc2VzO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyBtYWluIG1vZGVsIGZpbGVcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcbmNvbnN0IGRiID0ge307XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgQ291cnNlIGZyb20gJy4vY291cnNlJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nXG5pbXBvcnQgRW5yb2xlZF9jb3Vyc2VzIGZyb20gJy4vZW5yb2xlZF9jb3Vyc2VzJ1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpO1xufVxuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmRiLnVzZXJzID0gVXNlcihzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmNvdXJzZXMgPSBDb3Vyc2Uoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi52aWRlb3MgPSBWaWRlbyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcbmRiLmVucm9sZWRfY291cnNlcyA9IEVucm9sZWRfY291cnNlcyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgY291cnNlXG5kYi51c2Vycy5oYXNNYW55KGRiLmNvdXJzZXMsIHsgXG4gIGFzOiAnY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIGNvdXJzZSBhbmQgdmlkZW9zXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCB2aWRlb3NcbmRiLnVzZXJzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxuICBhczogJ3ZpZGVvcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIGVucm9sZWRcbmRiLmNvdXJzZXMuaGFzTWFueShkYi5lbnJvbGVkX2NvdXJzZXMsIHsgXG4gIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxuICBhczogJ2NvdXJzZSdcbn0pXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGVucm9sZWRcbmRiLnVzZXJzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXG59KVxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gY29uc29sZS5sb2coJyMjIyMjIycsIGRiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICAgIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgLy8gICAgIFVzZXIuaGFzTWFueShtb2RlbHMuQ291cnNlLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCdcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFVzZXIuaW5pdCh7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpc0VtYWlsUHVibGljOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgYWJvdXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueVVybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbnRlcmVzdHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZFVwZGF0ZWRBdDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxSZXNldFRva2VuOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGZiX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICB0d191cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsQ29uZmlybWVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfYXBwbHk6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2NvbmZpcm1lZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWRfYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfcmVxX2Rlc2M6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5FTlVNLFxuICAgICAgICAgICAgdmFsdWVzOiBbJ3N0dWRlbnQnLCAnYWRtaW4nLCAndGVhY2hlciddLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnc3R1ZGVudCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZ3JlZWRUZXJtczoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzZXF1ZWxpemUsXG4gICAgICAgIG1vZGVsTmFtZTogJ1VzZXInLFxuICAgIH0pO1xuICAgIHJldHVybiBVc2VyO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBWaWRlbyBleHRlbmRzIE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgLy8gICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgIC8vIH1cbiAgfTtcbiAgVmlkZW8uaW5pdCh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9fdXJsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgIH0sXG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ1ZpZGVvJyxcbiAgfSk7XG4gIHJldHVybiBWaWRlbztcbn07IiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICdAL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJ3ZhbGlkYXRvci9saWIvaXNMZW5ndGgnXG5pbXBvcnQgeyBcbiAgICB1c2VycyBhcyBVc2VyLFxuICAgIGVucm9sZWRfY291cnNlcyBhcyBFbnJvbGVkX2NvdXJzZXMsXG4gICAgY291cnNlcyBhcyBDb3Vyc2Vcbn0gZnJvbSAnQC9tb2RlbHMvaW5kZXgnXG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAgIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gICAgQ29ycyh7XG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QgYW5kIE9QVElPTlNcbiAgICAgICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJywgJ0RFTEVURScsICdQVVQnXSxcbiAgICB9KVxuKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxuICAgIGlmKCEoXCJhdXRob3JpemF0aW9uXCIgaW4gcmVxLmhlYWRlcnMpKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHttZXNzYWdlOiBcIk5vIGF1dG9yaXphdGlvbiB0b2tlblwifSk7XG4gICAgfVxuICAgIHN3aXRjaChyZXEubWV0aG9kKXtcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVBvc3RSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVHZXRSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUFVUXCI6XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVQdXRSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCk7XG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVQb3N0UmVxdWVzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBuZXdDb25maXJtUGFzc3dvcmR9ID0gcmVxLmJvZHlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7dXNlcklkfSA9IGp3dC52ZXJpZnkocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgICAgICAgLy8gY2hlY2sgZW1haWwsIG5hbWUsIHBhc3N3b3JkIGZvcm1hdFxuICAgICAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCl7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLnNlbmQoe21lc3NhZ2U6IFwiTXVzdCBiZSBwcm92aWRlIGN1cnJlbnQgUGFzc3dvcmQhXCJ9KVxuICAgICAgICB9IGVsc2UgaWYgKCFpc0xlbmd0aChuZXdQYXNzd29yZCwge21pbjogNiwgbWF4OiAxMn0pKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuc2VuZCh7bWVzc2FnZTogXCJOZXcgUGFzc3dvcmQgbXVzdCBiZSA2LTEyIGNoYXJhY3RlcnMgbG9uZyFcIn0pXG4gICAgICAgIH0gZWxzZSBpZiAobmV3UGFzc3dvcmQgIT0gbmV3Q29uZmlybVBhc3N3b3JkKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7bWVzc2FnZTogXCJDb25maXJtIHBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2hlZCFcIn0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdQYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChuZXdQYXNzd29yZCwgMTApXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFxuICAgICAgICAgICAgYXR0cmlidXRlczogWydwYXNzd29yZCddLFxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG5cbiAgICAgICAgaWYoIW1hdGNoKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuc2VuZCh7bWVzc2FnZTogXCJDdXJyZW50IFBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2ghXCJ9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgVXNlci51cGRhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkSGFzaFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aGVyZToge2lkOiB1c2VySWR9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1wibWVzc2FnZVwiOiBcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHRoZSBwYXNzd29yZCFcIn0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lc3NhZ2U6IFwiSW52YWxpZCB0b2tlblwifSk7XG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVQdXRSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge25hbWUsIGRlc2lnbmF0aW9uLCBsb2NhdGlvbiwgZGVzY3JpcHRpb259ID0gcmVxLmJvZHlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7dXNlcklkfSA9IGp3dC52ZXJpZnkocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgICAgIGF3YWl0IFVzZXIudXBkYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZGVzaWduYXRpb246IGRlc2lnbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtpZDogdXNlcklkfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcIm1lc3NhZ2VcIjogXCJTdWNjZXNzZnVsbHkgdXBkYXRlZCB0aGUgcHJvZmlsZSFcIn0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lc3NhZ2U6IFwiSW52YWxpZCB0b2tlblwifSk7XG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVHZXRSZXF1ZXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge3VzZXJJZH0gPSBqd3QudmVyaWZ5KHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZTogWydwYXNzd29yZCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgICAgICAgICBtb2RlbDogRW5yb2xlZF9jb3Vyc2VzLCBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogWydjb3Vyc2VJZCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICBpZih1c2VyKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKFwiSW52YWxpZCB0b2tlblwiKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRvci9saWIvaXNMZW5ndGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==