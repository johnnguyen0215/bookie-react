(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var express = __webpack_require__(0);
var logger = __webpack_require__(9);
var bodyParser = __webpack_require__(7);
var root = __webpack_require__(6);
var cookieParser = __webpack_require__(8);
var routes = __webpack_require__(5);
var app = express();
// view engine setup
app.set('views', root + "/server/views/");
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use('/', routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
var app = __webpack_require__(1);
var http = __webpack_require__(3);
var debug = __webpack_require__(2);
// binding to console
var log = debug('modern-express:server');
log.log = console.log.bind(console);
/**
 * Get port from environment and store in Express.
 */
var PORT = process.env.PORT || '3000';
function getPort(val) {
    /**
     * Normalize a port into a number, string, or false.
     */
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
app.set('port', PORT);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT);
server.on('error', function (error) {
    /**
     * Event listener for HTTP server "error" event.
     */
    if (error) {
        throw error;
    }
});
server.on('listening', function () {
    /**
     * Event listener for HTTP server "listening" event.
     */
    var addr = server.address();
    var bind = (typeof addr === 'string' ? "pipe " + addr : "port " + addr.port);
    log("Listening on " + bind);
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var express = __webpack_require__(0);
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
module.exports = router;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("app-root-path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ })
/******/ ])));