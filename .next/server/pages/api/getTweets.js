"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconsole.log(\"In getTweets.ts\");\nconst feedTweetQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`*[_type == \"tweet\"]{\r\n    _id,\r\n    ...\r\n} | order(_createdAt desc)`;\nasync function handler(req, res) {\n    const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedTweetQuery);\n    console.log(\"tweet\", tweets);\n    return res.status(200).json({\n        tweets\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFbEM7QUFFVDtBQUNsQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDOUIsTUFBTUMsY0FBYyxHQUFHSCw2Q0FBSSxDQUFDO0FBUzVCO0lBS0k7SUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFSztBQUNWRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRTtRQUFDSCxNQUFNO0tBQUMsQ0FBRTtDQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRUd2VldHMudHM/YzVmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tICcuLi8uLi9zYW5pdHknXHJcbmltcG9ydCB7IFR3ZWV0IH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcclxuaW1wb3J0IHsgZ3JvcSB9IGZyb20gJ25leHQtc2FuaXR5J1xyXG5jb25zb2xlLmxvZyhcIkluIGdldFR3ZWV0cy50c1wiKVxyXG5jb25zdCBmZWVkVHdlZXRRdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInR3ZWV0XCJde1xyXG4gICAgX2lkLFxyXG4gICAgLi4uXHJcbn0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpYFxyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIHR3ZWV0czogVHdlZXRbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcblxyXG4gICAgY29uc3QgdHdlZXRzOiBUd2VldFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKGZlZWRUd2VldFF1ZXJ5KVxyXG4gICAgY29uc29sZS5sb2coXCJ0d2VldFwiLCB0d2VldHMpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oIHt0d2VldHN9IClcclxufVxyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiZ3JvcSIsImNvbnNvbGUiLCJsb2ciLCJmZWVkVHdlZXRRdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0d2VldHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\n// lib/config.js\nconst config = {\n    /**\r\n     * Find your project ID and dataset in `sanity.json` in your studio project.\r\n     * These are considered “public”, but you can use environment variables\r\n     * if you want differ between local dev and production.\r\n     *\r\n     * https://nextjs.org/docs/basic-features/environment-variables\r\n     **/ dataset: \"production\" || 0,\n    projectId: \"r6fjblbl\",\n    apiVersion: \"2021-10-21\",\n    /**\r\n     * Set useCdn to `false` if your application require the freshest possible\r\n     * data always (potentially slightly slower and a bit more expensive).\r\n     * Authenticated request (like preview) will always bypass the CDN\r\n     **/ useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVvQjtBQUVwQixnQkFBZ0I7QUFDVCxNQUFNQyxNQUFNLEdBQUc7SUFDbEI7SUFRQUssU0FBUyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csNkJBQTZCO0lBQ3BEQyxVQUFVLEVBQUUsWUFBWTtJQUN4QjtDQU1EO0FBRUQsT0FBTyxNQUFNRSxZQUFZLEdBQUdWLFlBQVksQ0FBQ0MsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2FuaXR5LmpzPzg1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7XHJcbiAgICBjcmVhdGVDbGllbnRcclxufSBmcm9tICduZXh0LXNhbml0eSdcclxuXHJcbi8vIGxpYi9jb25maWcuanNcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCB5b3VyIHByb2plY3QgSUQgYW5kIGRhdGFzZXQgaW4gYHNhbml0eS5qc29uYCBpbiB5b3VyIHN0dWRpbyBwcm9qZWN0LlxyXG4gICAgICogVGhlc2UgYXJlIGNvbnNpZGVyZWQg4oCccHVibGlj4oCdLCBidXQgeW91IGNhbiB1c2UgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbiAgICAgKiBpZiB5b3Ugd2FudCBkaWZmZXIgYmV0d2VlbiBsb2NhbCBkZXYgYW5kIHByb2R1Y3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZW52aXJvbm1lbnQtdmFyaWFibGVzXHJcbiAgICAgKiovXHJcbiAgICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gICAgYXBpVmVyc2lvbjogJzIwMjEtMTAtMjEnLCAvLyBMZWFybiBtb3JlOiBodHRwczovL3d3dy5zYW5pdHkuaW8vZG9jcy9hcGktdmVyc2lvbmluZ1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdXNlQ2RuIHRvIGBmYWxzZWAgaWYgeW91ciBhcHBsaWNhdGlvbiByZXF1aXJlIHRoZSBmcmVzaGVzdCBwb3NzaWJsZVxyXG4gICAgICogZGF0YSBhbHdheXMgKHBvdGVudGlhbGx5IHNsaWdodGx5IHNsb3dlciBhbmQgYSBiaXQgbW9yZSBleHBlbnNpdmUpLlxyXG4gICAgICogQXV0aGVudGljYXRlZCByZXF1ZXN0IChsaWtlIHByZXZpZXcpIHdpbGwgYWx3YXlzIGJ5cGFzcyB0aGUgQ0ROXHJcbiAgICAgKiovXHJcbiAgICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();