/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage(){\nconst theDiv = document.getElementById(\"content\");\n\nconst contactBack=document.createElement(\"div\");\ncontactBack.classList.add(\"businessCard\");\ncontactBack.style.height=\"300px\";\ncontactBack.style.width=\"600px\";\ncontactBack.style.borderRadius=\"10px\";\ncontactBack.style.background=\"white\";\n;\nconst manager = document.createElement(\"p\");\nmanager.textContent = \"Manager\";\nmanager.classList.add(\"info\");\nmanager.style.marginLeft=\"50px\";\nmanager.style.fontSize=\"40px\";\n\nconst phone = document.createElement(\"p\");\nphone.textContent = \"555-555-5555\";\nphone.classList.add(\"info\");\nphone.style.marginLeft=\"50px\";\nphone.style.fontSize=\"35px\";\n\nconst email = document.createElement(\"p\");\nemail.textContent = \"perfectlypink@PitayaRocks.com\";\nemail.classList.add(\"info\");\nemail.style.marginLeft=\"50px\";\nemail.style.fontSize=\"35px\";\n\n\ncontactBack.appendChild(manager);\ncontactBack.appendChild(phone);\ncontactBack.appendChild(email);\ntheDiv.appendChild(contactBack)\n\n}\n\n\n//# sourceURL=webpack://resturaunt-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _menuLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuLink.js */ \"./src/menuLink.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\n\n\nfunction homePage() {\n  const theDiv = document.getElementById(\"content\");\n\n  //nav bar\n  const navBar = document.createElement(\"div\");\n\n  const homeLink = document.createElement(\"a\");\n  homeLink.textContent = \"Home\";\n  homeLink.style.color = \"black\"; \n  homeLink.style.fontSize = \"35px\"; \n  navBar.appendChild(homeLink);\n\n  //hover home link\n  homeLink.addEventListener(\"mouseover\", function() {\n    homeLink.style.fontWeight = \"bold\";\n  });\n  homeLink.addEventListener(\"mouseout\", function() {\n    homeLink.style.fontWeight = \"normal\";\n  });\n\n  const menuLink = document.createElement(\"a\");\n  menuLink.classList.add(\"menuButtonClass\");\n  menuLink.textContent = \"Menu\";\n  menuLink.style.color = \"black\";\n  menuLink.style.fontSize = \"35px\"; \n  navBar.appendChild(menuLink);\n\n  //hover menu link\n  menuLink.addEventListener(\"mouseover\", function() {\n    menuLink.style.fontWeight = \"bold\";\n  });\n  menuLink.addEventListener(\"mouseout\", function() {\n    menuLink.style.fontWeight = \"normal\";\n  });\n\n\n  const contactLink = document.createElement(\"a\");\n  contactLink.textContent = \"Contact\";\n  contactLink.style.color = \"black\"; \n  contactLink.style.fontSize = \"35px\"; \n  navBar.appendChild(contactLink);\n\n  //hover contact link\n  contactLink.addEventListener(\"mouseover\", function() {\n    contactLink.style.fontWeight = \"bold\";\n  });\n  contactLink.addEventListener(\"mouseout\", function() {\n    contactLink.style.fontWeight = \"normal\";\n  });\n\n\n  navBar.style.display = \"flex\"; // display the links in a row\n  navBar.style.justifyContent = \"space-around\"; // space the links evenly\n  theDiv.appendChild(navBar);\n\n  navBar.classList.add(\"nav-bar\")\n  homeLink.classList.add(\"link\")\n  menuLink.classList.add(\"link\")\n  contactLink.classList.add(\"link\")\n\n  //title\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Pitaya Palace\";\n  title.style.color = \"black\";\n  title.style.fontSize = \"90px\"; \n  \n  theDiv.appendChild(title);\n\n  //subtitle\n  const description = document.createElement(\"h3\");\n  description.textContent = \"Rolls, Bowls, and More\";\n  description.style.fontSize = \"35px\"; \n  description.style.color = \"black\"; \n  theDiv.appendChild(description);\n\n  //menu button\n  const menuButton = document.createElement(\"button\");\nmenuButton.textContent = \"Menu\";\nmenuButton.style.fontSize = \"20px\";\nmenuButton.style.fontFamily=\"'Merienda', cursive\"\n\n  menuButton.style.width=\"300px\";\n  menuButton.classList.add(\"menuButtonClass\");\n  theDiv.appendChild(menuButton);\n\n  //menu toggle\n\n  function clearContent() {\n    theDiv.innerHTML = '';\n    theDiv.appendChild(navBar);\n  }\n  //menuPage\n  document.addEventListener(\"click\", (event) => {\n    if (event.target.matches(\".menuButtonClass\")) {\n      clearContent(); // clear the content and add the nav bar back\n      (0,_menuLink_js__WEBPACK_IMPORTED_MODULE_0__.menuPage)(); // add the menu content\n      const element = document.querySelector('.menuPaper');\n  element.style.marginTop = '50px';\n    }\n  });\n  \n\n  //return to homePage\n  homeLink.addEventListener(\"click\", function() {\n    theDiv.innerHTML = ''; // clear any existing content from theDiv\n    homePage(); // re-create the content for the home page\n  });\n\n   //contact page toggle\n   contactLink.addEventListener(\"click\", function() {\n    clearContent(); // clear any existing content from theDiv\n    (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_1__.contactPage)(); // re-create the content for the home page\n    const element2 = document.querySelector('.businessCard');\n  element2.style.marginTop = '100px';\n  });\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://resturaunt-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLink.js */ \"./src/menuLink.js\");\n\n\n\n\n\nwindow.addEventListener('load', function() {\n  (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n});\n\n\n\n//# sourceURL=webpack://resturaunt-page/./src/index.js?");

/***/ }),

/***/ "./src/menuLink.js":
/*!*************************!*\
  !*** ./src/menuLink.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n//going to menu from nav\n function menuPage() {\n  const theDiv = document.getElementById(\"content\");\n    const menuBackground = document.createElement(\"div\");\n    menuBackground.classList.add(\"menuPaper\");\n    //choko moko\n    const itemOne = document.createElement(\"h2\");\n    itemOne.textContent = \"CHOKO MOCO \"\n    itemOne.classList.add(\"bowlName\");\n    const itemOneSub = document.createElement(\"h3\");\n    itemOneSub.textContent = \"Acai, banana, strawberries, peanut butter, almond milk / topped with granola, strawberries, banana, cacao nibs\"\n    itemOneSub.classList.add(\"subName\");\n    itemOneSub.style.fontFamily=\"'Merienda', cursive\"\n    //sweet cheeks\n    const itemTwo = document.createElement(\"h2\");\n    itemTwo.textContent = \"SWEET CHEEKS\"\n    itemTwo.classList.add(\"bowlName\");\n    const itemTwoSub = document.createElement(\"h3\");\n    itemTwoSub.textContent = \"Acai, banana, blueberries, dates, coconut milk / topped with granola, cashews, blueberries\"\n    itemTwoSub.classList.add(\"subName\");\n    itemTwoSub.style.fontFamily=\"'Merienda', cursive\"\n    //gold magic\n    const itemThree = document.createElement(\"h2\");\n    itemThree.textContent = \"GOLD MAGIC\"\n    itemThree.classList.add(\"bowlName\");\n    const itemThreeSub = document.createElement(\"h3\");\n    itemThreeSub.textContent = \"Banana, mango, turmeric, coconut oil, coconut milk/ topped with granola, banana, blueberries, chia seeds, coconut flakes\"\n    itemThreeSub.classList.add(\"subName\");\n    itemThreeSub.style.fontFamily=\"'Merienda', cursive\"\n    //cinnamonRoll\n    const itemFour = document.createElement(\"h2\");\n    itemFour.textContent = \"CINNAMON ROLL\"\n    itemFour.classList.add(\"bowlName\");\n    const itemFourSub = document.createElement(\"h3\");\n    itemFourSub.textContent = \"Vanilla almond milk, gluten free oats, mayan honey, cinnamon, banana\"\n    itemFourSub.classList.add(\"subName\");\n    itemFourSub.style.fontFamily=\"'Merienda', cursive\"\n\n    // add the new elements to the DOM\n    menuBackground.appendChild(itemOne);\n    menuBackground.appendChild(itemOneSub);\n\n    menuBackground.appendChild(itemTwo);\n    menuBackground.appendChild(itemTwoSub);\n\n    menuBackground.appendChild(itemThree);\n    menuBackground.appendChild(itemThreeSub);\n\n    menuBackground.appendChild(itemFour);\n    menuBackground.appendChild(itemFourSub);\n    theDiv.appendChild(menuBackground);\n\n\n  };\n \n\n//# sourceURL=webpack://resturaunt-page/./src/menuLink.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;