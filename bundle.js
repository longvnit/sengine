/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Gomoku.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Board.js":
/*!******************!*\
  !*** ./Board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Cell = __webpack_require__(/*! ./Cell */ \"./Cell.js\");\n\nclass Board {\n\n\tconstructor(col_number, row_number, width, height) {\n\t\t// init board config\n\t\tthis.setColNumber(col_number);\n\t\tthis.setRowNumber(row_number);\n\t\tthis.setWidth(width);\n\t\tthis.setHeight(height);\n\n\t\tthis.cells = [];\n\n\t\t\n\t\tfor(let i = 0; i < this.getColNumber(); i++) {\n\t\t\tlet cellRow = [];\n\t\t\tfor(let j = 0; j < this.getRowNumber(); j++) {\n\t\t\t\t// init cells on board\n\t\t\t\tcellRow[j] = new Cell();\n\t\t\t\tcellRow[j].setCol(i);\n\t\t\t\tcellRow[j].setRow(j);\n\t\t\t}\n\n\t\t\tthis.cells[i] = cellRow;\n\t\t}\n\t}\n\n\tsetColNumber(colNumber) {\n\t\tthis.colNumber = colNumber;\n\t}\n\n\tgetColNumber() {\n\t\treturn this.colNumber;\n\t}\n\n\tsetRowNumber(rowNumber) {\n\t\tthis.rowNumber = rowNumber;\n\t}\n\n\tgetRowNumber() {\n\t\treturn this.rowNumber;\n\t}\n\n\tsetWidth(width) {\n\t\tthis.width = width;\n\t}\n\n\tgetWidth() {\n\t\treturn this.width;\n\t}\n\n\tsetHeight(height) {\n\t\tthis.height = height;\n\t}\n\n\tgetHeight() {\n\t\treturn this.height;\n\t}\n\n\tgetCells() {\n\t\treturn this.cells;\n\t}\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./Board.js?");

/***/ }),

/***/ "./Cell.js":
/*!*****************!*\
  !*** ./Cell.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nclass Cell {\n\n\tconstructor() {\n\n\t}\n\n\tstatic get SIGN() {\n\t\treturn {\n\t\t\tBLACK: 'x',\n\t\t\tWHITE: 'o'\n\t\t};\n\t}\n\n\tsetRow(value) {\n\t\tthis.row = value;\n\t}\n\n\tgetRow() {\n\t\treturn this.row;\n\t}\n\n\tsetCol(value) {\n\t\tthis.col = value;\n\t}\n\n\tgetCol() {\n\t\treturn this.col;\n\t}\n\n\tsetMoveSign(value) {\n\t\tthis.moveSign = value;\n\t}\n\n\tgetMoveSign() {\n\t\treturn this.moveSign;\n\t}\n\n\tisChecked() {\n\t\tif(this.moveSign !== undefined) {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t}\n}\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack:///./Cell.js?");

/***/ }),

/***/ "./Config.js":
/*!*******************!*\
  !*** ./Config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Config = {\n\tcol_number \t\t: 15,\n\trow_number \t\t: 15,\n\tmax_width \t\t: 600,\n\tmax_heighh \t\t: 800,\n\tcell_white_color: '#FFF',\n\tcell_black_color: '#555'\n}\n\nmodule.exports = Config;\n\n//# sourceURL=webpack:///./Config.js?");

/***/ }),

/***/ "./Gomoku.js":
/*!*******************!*\
  !*** ./Gomoku.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst SEngine = __webpack_require__(/*! ./sengine/SEngine */ \"./sengine/SEngine.js\");\nconst Config = __webpack_require__(/*! ./Config */ \"./Config.js\");\nconst Board = __webpack_require__(/*! ./Board */ \"./Board.js\");\n//const Cell = require('./Cell');\n\nclass Gomoku {\n\tconstructor() {\n\n\t}\n\n\tdetectScreenSize() {\n\t\treturn {\n\t\t\twidth: document.body.clientWidth,\n\t\t\theigh: document.body.clientWidth\n\t\t};\n\t}\n}\n\n\n\n\nwindow.onload = function() {\n\tvar game = new Gomoku();\n\t\n\tvar sengine = new SEngine('display', 50 * Config.col_number, 50 * Config.row_number);\n\tsengine.init();\n\n\n\tfunction actionX(e) {\n\n\t\t// get mouse positon\n\t\tconsole.log(sengine.Input.getMousePos(e));\n\t}\n\n\tsengine.Input.enableInputHandler(sengine.Input.getEvent().MOUSE_MOVE, actionX);\n\t//console.log(sengine);\n\n\tvar board = new Board(Config.col_number, Config.row_number, 50 * Config.col_number, 50 * Config.row_number);\n\t//console.log(board);\n\n\n\tsengine.Display.clear();\n\t//sengine.Graphic.drawFillRec(10, 10, 100, 100, 'red');\n\n\tlet cells = board.getCells();\n\tlet sequenceColor;\n\tlet color;\n\tif(cells.length > 0) {\n\t\tfor(let i = 0; i < cells.length; i++) {\n\t\t\tlet cellRow = cells[i];\n\t\t\tfor(let j = 0; j < cellRow.length; j++) {\n\t\t\t\t//console.log(cellRow[j]);\n\n\t\t\t\t// draw rect\n\t\t\t\tlet x = i * 50;\n\t\t\t\tlet y = j * 50;\n\t\t\t\tlet w = 50;\n\t\t\t\tlet h = 50;\n\n\t\t\t\t\n\t\t\t\tif(sequenceColor == Config.cell_white_color) {\n\t\t\t\t\tsequenceColor = Config.cell_black_color;\n\t\t\t\t} else {\n\t\t\t\t\tsequenceColor = Config.cell_white_color;\n\t\t\t\t}\n\n\t\t\t\tcolor = sequenceColor;\n\n\t\t\t\tif(i == (Math.floor((Math.random() * 10) + 1)) && j == 4) {\n\t\t\t\t\tcolor = 'green';\n\t\t\t\t}\n\n\t\t\t\tconsole.log(sequenceColor);\n\n\t\t\t\tsengine.Graphic.drawFillRec(x, y, w, h, color);\n\t\t\t}\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./Gomoku.js?");

/***/ }),

/***/ "./sengine/Display.js":
/*!****************************!*\
  !*** ./sengine/Display.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Display {\n\tconstructor() {\n\n\t}\n\n\tinit(displayId, width, height) {\n\t\tthis.setDisplayId(displayId);\n\t\tthis.setWidth(width);\n\t\tthis.setHeight(height);\n\n\t\tthis.display = document.getElementById(this.getDisplayId());\n\t\tthis.display.width = this.getWidth();\n\t\tthis.display.height = this.getHeight();\n\t\tthis.context = this.display.getContext('2d');\n\t\t\n\n\t\treturn this;\n\t}\n\n\trender() {\n\n\t}\n\n\tclear() {\n\t\tthis.context.clearRect(0, 0, this.getWidth(), this.getHeight());\n\t}\n\n\tsetDisplayId(displayId) {\n\t\tthis.displayId = displayId;\n\t}\n\n\tgetDisplayId() {\n\t\treturn this.displayId;\n\t}\n\n\tsetWidth(width) {\n\t\tthis.width = width;\n\t}\n\n\tgetWidth() {\n\t\treturn this.width;\n\t}\n\n\tsetHeight(height) {\n\t\tthis.height = height;\n\t}\n\n\tgetHeight() {\n\t\treturn this.height;\n\t}\n\n\tgetContext() {\n\t\treturn this.context;\n\t}\n\n\tgetDisplay() {\n\t\treturn this.display;\n\t}\n}\n\nmodule.exports = Display;\n\n//# sourceURL=webpack:///./sengine/Display.js?");

/***/ }),

/***/ "./sengine/Graphic.js":
/*!****************************!*\
  !*** ./sengine/Graphic.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Graphic {\n\t\n\tconstructor(display) {\n\t\tthis.display = display;\n\t\tthis.context = this.display.getContext();\n\t}\n\n\tdrawLine(mX, mY, tX, tY, width, color) {\n\t\tthis.context.beginPath();\n\t\tif(width !== undefined) {\n\t\t\tthis.context.lineWidth = width;\n\t\t}\n\n\t\tif(color !== undefined) {\n\t\t\tthis.context.strokeStyle = color;\n\t\t}\n\n\t\tthis.context.moveTo(mX, mY);\n\t\tthis.context.lineTo(tX, tY);\n\n\t\tthis.context.stroke();\n\t}\n\n\tdrawText(str, x, y, color, font) {\n\t\tif(color !== undefined) {\n\t\t\tthis.context.fillStyle = font;\n\t\t}\n\n\t\tif(font !== undefined) {\n\t\t\tthis.context.font = font;\n\t\t}\n\n\t\tthis.context.fillText(str, x, y);\n\t}\n\n\tdrawRec(x, y, w, h, lineWidth, color) {\n\t\tthis.context.beginPath();\n\t\tif(lineWidth !== undefined) {\n\t\t\tthis.context.lineWidth = lineWidth;\n\t\t}\n\n\t\tif(color !== undefined) {\n\t\t\tthis.context.color = color;\n\t\t}\n\n\t\tthis.context.rect(x, y, w, h);\n\t\tthis.context.stroke();\n\t}\n\n\tdrawFillRec(x, y, w, h, color) {\n\t\tif(color !== undefined) {\n\t\t\tthis.context.fillStyle = color;\n\t\t}\n\n\t\tthis.context.fillRect(x, y, w, h);\n\t}\n\n\tdrawImage(src, x, y, w, h) {\n\t\tvar img = new Image();\n\t\timg.src = src;\n\t\tthis.context.drawImage(img, x, y, w, h);\n\t}\n}\n\nmodule.exports = Graphic;\n\n//# sourceURL=webpack:///./sengine/Graphic.js?");

/***/ }),

/***/ "./sengine/Input.js":
/*!**************************!*\
  !*** ./sengine/Input.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Input {\n\tconstructor(display) {\n\t\tthis.setDisplay(display);\n\t\tif(display === undefined) {\n\t\t\tconsole.log('Input set Display error');\n\t\t}\n\t}\n\n\tgetEvent() {\n\t\treturn {\n\t\t\tTOUCH_START: 'touchstart',\n\t\t\tTOUCH_END: 'touchend',\n\t\t\tTOUCH_MOVE: 'touchmove',\n\t\t\tMOUSE_DOWN: 'mousedown',\n\t\t\tMOUSE_UP: 'mouseup',\n\t\t\tMOUSE_MOVE: 'mousemove'\n\t\t}\n\t}\n\n\tgetMousePos(e) {\n\n\t\tthis.e = e;\n\n\t\tif(this.e !== undefined) {\n\n\t\t\tvar rect = this.getDisplay().getDisplay().getBoundingClientRect();\n\t\t\tvar x = this.e.clientX - rect.left;\n\t\t\tvar y = this.e.clientY - rect.top;\n\n\t\t\tthis.setPosX(x);\n\t\t\tthis.setPosY(y);\n\n\t\t\treturn {\n\t\t\t\tx: this.getPosX(),\n\t\t\t\ty: this.getPosY()\n\t\t\t};\n\t\t} else {\n\t\t\treturn {\n\t\t\t\tx: 0,\n\t\t\t\ty: 0\n\t\t\t};\n\t\t}\n\t}\n\n\tenableInputHandler(event, handler) {\n\t\tif(handler !== undefined && typeof handler === 'function') {\n\t\t\tthis.display.getDisplay().addEventListener(event, function(e) {\n\t\t\t\thandler(e);\n\t\t\t}, false);\n\t\t} else {\n\t\t\tconsole.log('Can\\'t set event handler for event: ' + event);\n\t\t}\n\t}\n\n\tsetDisplay(display) {\n\t\tthis.display = display;\n\t}\n\n\tgetDisplay() {\n\t\treturn this.display;\n\t}\n\n\tsetPosX(posX) {\n\t\tthis.posX = posX;\n\t}\n\n\tgetPosX() {\n\t\treturn this.posX;\n\t}\n\n\tsetPosY(posY) {\n\t\tthis.posY = posY;\n\t}\n\n\tgetPosY() {\n\t\treturn this.posY;\n\t}\n\n}\n\nmodule.exports = Input;\n\n//# sourceURL=webpack:///./sengine/Input.js?");

/***/ }),

/***/ "./sengine/SEngine.js":
/*!****************************!*\
  !*** ./sengine/SEngine.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Display = __webpack_require__(/*! ./Display */ \"./sengine/Display.js\");\nconst Input = __webpack_require__(/*! ./Input */ \"./sengine/Input.js\");\nconst Graphic = __webpack_require__(/*! ./Graphic */ \"./sengine/Graphic.js\");\n\nclass SEngine {\n\tconstructor(displayId, width, height) {\n\t\tthis.displayId = displayId;\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t}\n\n\tinit() {\n\t\tthis.Display = new Display();\n\t\tthis.Display.init(this.displayId, this.width, this.height);\n\t\tthis.Input = new Input(this.Display);\n\t\tthis.Graphic = new Graphic(this.Display);\t\n\t}\n\n\tcreate() {\n\n\t}\n\n\tupdate() {\n\n\t}\n\n\tdebug() {\n\n\t}\n}\n\nmodule.exports = SEngine;\n\n//# sourceURL=webpack:///./sengine/SEngine.js?");

/***/ })

/******/ });