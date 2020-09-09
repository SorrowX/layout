webpackJsonp([11],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_6bd4a40d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_6bd4a40d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_6bd4a40d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_6bd4a40d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_6bd4a40d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var cityOptions = ['上海', '北京', '广州', '深圳'];
exports.default = {
    data: function data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
        };
    },

    methods: {
        handleCheckAllChange: function handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
            var checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
};

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "test-checkout" }, [_c('lay-checkbox', { attrs: { "indeterminate": _vm.isIndeterminate }, on: { "change": _vm.handleCheckAllChange }, model: { value: _vm.checkAll, callback: function callback($$v) {
        _vm.checkAll = $$v;
      }, expression: "checkAll" } }, [_vm._v("全选")]), _vm._v(" "), _c('div', { staticStyle: { "margin": "15px 0" } }), _vm._v(" "), _c('lay-checkbox-group', { on: { "change": _vm.handleCheckedCitiesChange }, model: { value: _vm.checkedCities, callback: function callback($$v) {
        _vm.checkedCities = $$v;
      }, expression: "checkedCities" } }, _vm._l(_vm.cities, function (city) {
    return _c('lay-checkbox', { key: city, attrs: { "label": city } }, [_vm._v(_vm._s(city))]);
  }), 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })

});