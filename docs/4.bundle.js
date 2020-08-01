webpackJsonp([4],{

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7a4740b4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7a4740b4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7a4740b4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(13);
function injectStyle (context) {
  __webpack_require__(407)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a4740b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7a4740b4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7a4740b4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            activeNames: ['1'],
            show: false,

            activeNames1: '1'
        };
    },

    methods: {
        handleChange: function handleChange(val) {
            console.log(val, this.activeNames);
        },
        handleChange2: function handleChange2(val) {
            console.log(val, this.activeNames1);
        }
    }
};

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(165).default
var update = add("769683f1", content, true, {});

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)(false);
// imports


// module
exports.push([module.i, ".lay-collapse-demo[data-v-7a4740b4]{margin-top:20px}.box1[data-v-7a4740b4]{padding:10px;background:#ccc;border:1px solid red}.test[data-v-7a4740b4]{max-width:500px}", ""]);

// exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "lay-collapse-demo" }, [_c('lay-collapse', { on: { "change": _vm.handleChange }, model: { value: _vm.activeNames, callback: function callback($$v) {
        _vm.activeNames = $$v;
      }, expression: "activeNames" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" } }, [_c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2" } }, [_c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "100px" } }), _vm._v(" "), _c('lay-collapse', { attrs: { "accordion": "" }, on: { "change": _vm.handleChange2 }, model: { value: _vm.activeNames1, callback: function callback($$v) {
        _vm.activeNames1 = $$v;
      }, expression: "activeNames1" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" } }, [_c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2" } }, [_c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })

});