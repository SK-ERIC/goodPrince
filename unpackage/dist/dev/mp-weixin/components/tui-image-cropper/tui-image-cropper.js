(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tui-image-cropper/tui-image-cropper"],{

/***/ 183:
/*!****************************************************************************!*\
  !*** D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tui-image-cropper.vue?vue&type=template&id=2cebc490&scoped=true& */ 184);
/* harmony import */ var _tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tui-image-cropper.vue?vue&type=script&scoped=true&lang=js& */ 186);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tui-image-cropper.vue?vue&type=style&index=0&id=2cebc490&scoped=true&lang=css& */ 188);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cebc490",
  null,
  false,
  _tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 184:
/*!***********************************************************************************************************************!*\
  !*** D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=template&id=2cebc490&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tui-image-cropper.vue?vue&type=template&id=2cebc490&scoped=true& */ 185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_template_id_2cebc490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 185:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=template&id=2cebc490&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 186:
/*!*****************************************************************************************************************!*\
  !*** D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=script&scoped=true&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tui-image-cropper.vue?vue&type=script&scoped=true&lang=js& */ 187);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_script_scoped_true_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 187:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=script&scoped=true&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 注意：组件中使用的图片地址，将文件复制到自己项目中
 * 如果图片位置与组件同级，编译成小程序时图片会丢失
 * 拷贝static下整个components文件夹
 *也可直接转成base64（不建议）
 * */var _default =
{
  name: 'tuiImageCropper',
  props: {
    //图片路径
    imageUrl: {
      type: String,
      default: '' },

    /*
                      默认正方形，可修改大小控制比例
                      裁剪框高度 px
                     */
    height: {
      type: Number,
      default: 280 },

    //裁剪框宽度 px
    width: {
      type: Number,
      default: 280 },

    //裁剪框最小宽度 px
    minWidth: {
      type: Number,
      default: 100 },

    //裁剪框最小高度 px
    minHeight: {
      type: Number,
      default: 100 },

    //裁剪框最大宽度 px
    maxWidth: {
      type: Number,
      default: 360 },

    //裁剪框最大高度 px
    maxHeight: {
      type: Number,
      default: 360 },

    //裁剪框border颜色
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,0.1)' },

    //裁剪框边缘线颜色
    edgeColor: {
      type: String,
      default: '#FFFFFF' },

    //裁剪框边缘线宽度 w=h
    edgeWidth: {
      type: String,
      default: '34rpx' },

    //裁剪框边缘线border宽度
    edgeBorderWidth: {
      type: String,
      default: '6rpx' },

    //偏移距离，根据edgeBorderWidth进行调整
    edgeOffsets: {
      type: String,
      default: '6rpx' },

    /**
                          * 如果宽度和高度都为true则裁剪框禁止拖动
                          * 裁剪框宽度锁定
                          */
    lockWidth: {
      type: Boolean,
      default: false },

    //裁剪框高度锁定
    lockHeight: {
      type: Boolean,
      default: false },

    //锁定裁剪框比例（放大或缩小）
    lockRatio: {
      type: Boolean,
      default: false },

    //生成的图片尺寸相对剪裁框的比例
    scaleRatio: {
      type: Number,
      default: 3 },

    //图片的质量，取值范围为 (0, 1]，不在范围内时当作1.0处理
    quality: {
      type: Number,
      default: 1 },

    //图片旋转角度
    rotateAngle: {
      type: Number,
      default: 0 },

    //图片最小缩放比
    minScale: {
      type: Number,
      default: 0.5 },

    //图片最大缩放比
    maxScale: {
      type: Number,
      default: 2 },

    //是否禁用触摸旋转（为false则可以触摸转动图片，limitMove为false生效）
    disableRotate: {
      type: Boolean,
      default: true },

    //是否限制移动范围(剪裁框只能在图片内,为true不可触摸转动图片)
    limitMove: {
      type: Boolean,
      default: true },

    //自定义操作栏（为true时隐藏底部操作栏）
    custom: {
      type: Boolean,
      default: false },

    //值发生改变开始裁剪（custom为true时生效）
    startCutting: {
      type: [Number, Boolean],
      default: 0 },

    /**
                     * 是否返回base64(H5端默认base64)
                     * 支持平台：App，微信小程序，支付宝小程序,H5(默认url就是base64)
                     **/
    isBase64: {
      type: Boolean,
      default: false },

    //裁剪时是否显示loadding
    loadding: {
      type: Boolean,
      default: true },

    //旋转icon
    rotateImg: {
      type: String,
      default: '/static/components/cropper/img_rotate.png' } },


  data: function data() {
    return {
      MOVE_THROTTLE: null, //触摸移动节流setTimeout
      MOVE_THROTTLE_FLAG: true, //节流标识
      TIME_CUT_CENTER: null,
      CROPPER_WIDTH: 200, //裁剪框宽
      CROPPER_HEIGHT: 200, //裁剪框高
      CUT_START: null,
      cutX: 0, //画布x轴起点
      cutY: 0, //画布y轴起点0
      touchRelative: [
      {
        x: 0,
        y: 0 }],

      //手指或鼠标和图片中心的相对位置
      flagCutTouch: false, //是否是拖动裁剪框
      hypotenuseLength: 0, //双指触摸时斜边长度
      flagEndTouch: false, //是否结束触摸
      canvasWidth: 0,
      canvasHeight: 0,
      imgWidth: 0, //图片宽度
      imgHeight: 0, //图片高度
      scale: 1, //图片缩放比
      angle: 0, //图片旋转角度
      cutAnimation: false, //是否开启图片和裁剪框过渡
      cutAnimationTime: null,
      imgTop: 0, //图片上边距
      imgLeft: 0, //图片左边距
      ctx: null,
      sysInfo: null };

  },
  computed: {
    imgTransform: function imgTransform() {
      return "translate3d(".concat(this.imgLeft - this.imgWidth / 2, "px,").concat(this.imgTop - this.imgHeight / 2, "px,0) scale(").concat(this.scale, ") rotate(").concat(this.angle, "deg)");
    } },


  watch: {
    imageUrl: function imageUrl(val, oldVal) {var _this = this;
      this.imageReset();
      this.showLoading();
      uni.getImageInfo({
        src: val,
        success: function success(res) {
          //计算图片尺寸
          _this.imgComputeSize(res.width, res.height);
          if (_this.limitMove) {
            //限制移动，不留空白处理
            _this.imgMarginDetectionScale();
          }
        },
        fail: function fail(err) {
          _this.imgComputeSize();
          if (_this.limitMove) {
            _this.imgMarginDetectionScale();
          }
        } });

    },
    //监听截取框宽高变化
    canvasWidth: function canvasWidth(val) {
      if (val < this.minWidth) {
        this.canvasWidth = this.minWidth;
      }
      this.computeCutSize();
    },
    canvasHeight: function canvasHeight(val) {
      if (val < this.minHeight) {
        this.canvasHeight = this.minHeight;
      }
      this.computeCutSize();
    },
    rotateAngle: function rotateAngle(val) {
      this.cutAnimation = true;
      this.angle = val;
    },
    angle: function angle(val) {
      this.moveStop();
      if (this.limitMove && val % 90) {
        this.angle = Math.round(val / 90) * 90;
      }
      this.imgMarginDetectionScale();
    },
    cutAnimation: function cutAnimation(val) {var _this2 = this;
      //开启过渡300毫秒之后自动关闭
      clearTimeout(this.cutAnimationTime);
      if (val) {
        this.cutAnimationTime = setTimeout(function () {
          _this2.cutAnimation = false;
        }, 300);
      }
    },
    limitMove: function limitMove(val) {
      if (val) {
        if (this.angle % 90) {
          this.angle = Math.round(this.angle / 90) * 90;
        }
        this.imgMarginDetectionScale();
      }
    },
    cutY: function cutY(value) {
      this.cutDetectionPosition();
    },
    cutX: function cutX(value) {
      this.cutDetectionPosition();
    },
    startCutting: function startCutting(val) {
      if (this.custom && val) {
        this.getImage();
      }
    } },

  mounted: function mounted() {var _this3 = this;
    this.sysInfo = uni.getSystemInfoSync();
    this.imgTop = this.sysInfo.windowHeight / 2;
    this.imgLeft = this.sysInfo.windowWidth / 2;
    this.CROPPER_WIDTH = this.width;
    this.CROPPER_HEIGHT = this.height;
    this.canvasHeight = this.height;
    this.canvasWidth = this.width;
    this.ctx = uni.createCanvasContext('tui-image-cropper', this);
    this.setCutCenter();
    //设置裁剪框大小>设置图片尺寸>绘制canvas
    this.computeCutSize();
    //检查裁剪框是否在范围内
    this.cutDetectionPosition();
    setTimeout(function () {
      _this3.$emit('ready', {});
    }, 200);
  },
  methods: {
    //返回裁剪后图片信息
    getImage: function getImage() {var _this4 = this;
      if (!this.imageUrl) {
        uni.showToast({
          title: '请选择图片',
          icon: 'none' });

        return;
      }
      this.loadding && this.showLoading();
      var draw = function draw() {
        //图片实际大小
        var imgWidth = _this4.imgWidth * _this4.scale * _this4.scaleRatio;
        var imgHeight = _this4.imgHeight * _this4.scale * _this4.scaleRatio;
        //canvas和图片的相对距离
        var xpos = _this4.imgLeft - _this4.cutX;
        var ypos = _this4.imgTop - _this4.cutY;
        //旋转画布
        _this4.ctx.translate(xpos * _this4.scaleRatio, ypos * _this4.scaleRatio);
        _this4.ctx.rotate(_this4.angle * Math.PI / 180);
        _this4.ctx.drawImage(_this4.imageUrl, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
        _this4.ctx.draw(false, function () {
          var params = {
            width: _this4.canvasWidth * _this4.scaleRatio,
            height: Math.round(_this4.canvasHeight * _this4.scaleRatio),
            destWidth: _this4.canvasWidth * _this4.scaleRatio,
            destHeight: Math.round(_this4.canvasHeight) * _this4.scaleRatio,
            fileType: 'png',
            quality: _this4.quality };

          var data = {
            url: '',
            base64: '',
            width: _this4.canvasWidth * _this4.scaleRatio,
            height: _this4.canvasHeight * _this4.scaleRatio };

























          if (_this4.isBase64) {
            uni.canvasGetImageData({
              canvasId: 'tui-image-cropper',
              x: 0,
              y: 0,
              width: _this4.canvasWidth * _this4.scaleRatio,
              height: Math.round(_this4.canvasHeight * _this4.scaleRatio),
              success: function success(res) {
                var arrayBuffer = new Uint8Array(res.data);
                var base64 = uni.arrayBufferToBase64(arrayBuffer);
                data.base64 = dataURL;
                this.loadding && uni.hideLoading();
                this.$emit('cropper', data);
              } });

          } else {
            uni.canvasToTempFilePath(_objectSpread({},

            params, {
              canvasId: 'tui-image-cropper',
              success: function success(res) {
                data.url = res.tempFilePath;



                _this4.loadding && uni.hideLoading();
                _this4.$emit('cropper', data);
              } }),

            _this4);

          }

        });
      };
      if (this.CROPPER_WIDTH != this.canvasWidth || this.CROPPER_HEIGHT != this.canvasHeight) {
        this.CROPPER_WIDTH = this.canvasWidth;
        this.CROPPER_HEIGHT = this.canvasHeight;
        this.$nextTick(function () {
          setTimeout(function () {
            draw();
          }, 50);
        });
      } else {
        draw();
      }
    },
    /**
        * 设置剪裁框和图片居中
        */
    setCutCenter: function setCutCenter() {
      var sys = this.sysInfo || uni.getSystemInfoSync();
      var cutY = (sys.windowHeight - this.canvasHeight) * 0.5;
      var cutX = (sys.windowWidth - this.canvasWidth) * 0.5;
      //顺序不能变
      this.imgTop = this.imgTop - this.cutY + cutY;
      this.cutY = cutY; //截取的框上边距
      this.imgLeft = this.imgLeft - this.cutX + cutX;
      this.cutX = cutX; //截取的框左边距
    },
    imageReset: function imageReset() {
      // this.cutAnimation = true;
      this.scale = 1;
      this.angle = 0;
      var sys = this.sysInfo || uni.getSystemInfoSync();
      this.imgTop = sys.windowHeight / 2;
      this.imgLeft = sys.windowWidth / 2;
    },
    imageLoad: function imageLoad(e) {
      this.imageReset();
      uni.hideLoading();
      this.$emit('imageLoad', {});
    },
    //检测剪裁框位置是否在允许的范围内(屏幕内)
    cutDetectionPosition: function cutDetectionPosition() {var _this5 = this;
      var cutDetectionPositionTop = function cutDetectionPositionTop() {
        //检测上边距是否在范围内
        if (_this5.cutY < 0) {
          _this5.cutY = 0;
        }
        if (_this5.cutY > _this5.sysInfo.windowHeight - _this5.canvasHeight) {
          _this5.cutY = _this5.sysInfo.windowHeight - _this5.canvasHeight;
        }
      },
      cutDetectionPositionLeft = function cutDetectionPositionLeft() {
        //检测左边距是否在范围内
        if (_this5.cutX < 0) {
          _this5.cutX = 0;
        }
        if (_this5.cutX > _this5.sysInfo.windowWidth - _this5.canvasWidth) {
          _this5.cutX = _this5.sysInfo.windowWidth - _this5.canvasWidth;
        }
      };
      //裁剪框坐标处理（如果只写一个参数则另一个默认为0，都不写默认居中）
      if (this.cutY == null && this.cutX == null) {
        var cutY = (this.sysInfo.windowHeight - this.canvasHeight) * 0.5;
        var cutX = (this.sysInfo.windowWidth - this.canvasWidth) * 0.5;
        this.cutY = cutY; //截取的框上边距
        this.cutX = cutX; //截取的框左边距
      } else if (this.cutY != null && this.cutX != null) {
        cutDetectionPositionTop();
        cutDetectionPositionLeft();
      } else if (this.cutY != null && this.cutX == null) {
        cutDetectionPositionTop();
        this.cutX = (this.sysInfo.windowWidth - this.canvasWidth) / 2;
      } else if (this.cutY == null && this.cutX != null) {
        cutDetectionPositionLeft();
        this.cutY = (this.sysInfo.windowHeight - this.canvasHeight) / 2;
      }
    },
    /**
        * 图片边缘检测-位置
        */
    imgMarginDetectionPosition: function imgMarginDetectionPosition(scale) {
      if (!this.limitMove) return;
      var left = this.imgLeft;
      var top = this.imgTop;
      scale = scale || this.scale;
      var imgWidth = this.imgWidth;
      var imgHeight = this.imgHeight;
      if (this.angle / 90 % 2) {
        imgWidth = this.imgHeight;
        imgHeight = this.imgWidth;
      }
      left = this.cutX + imgWidth * scale / 2 >= left ? left : this.cutX + imgWidth * scale / 2;
      left = this.cutX + this.canvasWidth - imgWidth * scale / 2 <= left ? left : this.cutX + this.canvasWidth - imgWidth * scale / 2;
      top = this.cutY + imgHeight * scale / 2 >= top ? top : this.cutY + imgHeight * scale / 2;
      top = this.cutY + this.canvasHeight - imgHeight * scale / 2 <= top ? top : this.cutY + this.canvasHeight - imgHeight * scale / 2;
      this.imgLeft = left;
      this.imgTop = top;
      this.scale = scale;
    },
    /**
        * 图片边缘检测-缩放
        */
    imgMarginDetectionScale: function imgMarginDetectionScale() {
      if (!this.limitMove) return;
      var scale = this.scale;
      var imgWidth = this.imgWidth;
      var imgHeight = this.imgHeight;
      if (this.angle / 90 % 2) {
        imgWidth = this.imgHeight;
        imgHeight = this.imgWidth;
      }
      if (imgWidth * scale < this.canvasWidth) {
        scale = this.canvasWidth / imgWidth;
      }
      if (imgHeight * scale < this.canvasHeight) {
        scale = Math.max(scale, this.canvasHeight / imgHeight);
      }
      this.imgMarginDetectionPosition(scale);
    },
    /**
        * 计算图片尺寸
        */
    imgComputeSize: function imgComputeSize(width, height) {
      //默认按图片最小边 = 对应裁剪框尺寸
      var imgWidth = width,
      imgHeight = height;
      if (imgWidth && imgHeight) {
        if (imgWidth / imgHeight > (this.canvasWidth || this.width) / (this.canvasHeight || this.height)) {
          imgHeight = this.canvasHeight || this.height;
          imgWidth = width / height * imgHeight;
        } else {
          imgWidth = this.canvasWidth || this.width;
          imgHeight = height / width * imgWidth;
        }
      } else {
        var sys = this.sysInfo || uni.getSystemInfoSync();
        imgWidth = sys.windowWidth;
        imgHeight = 0;
      }
      this.imgWidth = imgWidth;
      this.imgHeight = imgHeight;
    },
    //改变截取框大小
    computeCutSize: function computeCutSize() {
      if (this.canvasWidth > this.sysInfo.windowWidth) {
        this.canvasWidth = this.sysInfo.windowWidth;
      } else if (this.canvasWidth + this.cutX > this.sysInfo.windowWidth) {
        this.cutX = this.sysInfo.windowWidth - this.cutX;
      }
      if (this.canvasHeight > this.sysInfo.windowHeight) {
        this.canvasHeight = this.sysInfo.windowHeight;
      } else if (this.canvasHeight + this.cutY > this.sysInfo.windowHeight) {
        this.cutY = this.sysInfo.windowHeight - this.cutY;
      }
    },
    //开始触摸
    start: function start(e) {
      this.flagEndTouch = false;
      if (e.touches.length == 1) {
        //单指拖动
        this.touchRelative[0] = {
          x: e.touches[0].clientX - this.imgLeft,
          y: e.touches[0].clientY - this.imgTop };

      } else {
        //双指放大
        var width = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
        var height = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
        this.touchRelative = [
        {
          x: e.touches[0].clientX - this.imgLeft,
          y: e.touches[0].clientY - this.imgTop },

        {
          x: e.touches[1].clientX - this.imgLeft,
          y: e.touches[1].clientY - this.imgTop }];


        this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
      }
    },
    moveThrottle: function moveThrottle() {var _this6 = this;
      if (this.sysInfo.platform == 'android') {
        clearTimeout(this.MOVE_THROTTLE);
        this.MOVE_THROTTLE = setTimeout(function () {
          _this6.MOVE_THROTTLE_FLAG = true;
        }, 1000 / 40);
        return this.MOVE_THROTTLE_FLAG;
      } else {
        this.MOVE_THROTTLE_FLAG = true;
      }
    },
    move: function move(e) {
      if (this.flagEndTouch || !this.MOVE_THROTTLE_FLAG) return;
      this.MOVE_THROTTLE_FLAG = false;
      this.moveThrottle();
      this.moveDuring();
      if (e.touches.length == 1) {
        //单指拖动
        var left = e.touches[0].clientX - this.touchRelative[0].x,
        top = e.touches[0].clientY - this.touchRelative[0].y;
        //图像边缘检测,防止截取到空白
        this.imgLeft = left;
        this.imgTop = top;
        this.imgMarginDetectionPosition();
      } else {
        //双指放大
        var width = Math.abs(e.touches[0].clientX - e.touches[1].clientX),
        height = Math.abs(e.touches[0].clientY - e.touches[1].clientY),
        hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)),
        scale = this.scale * (hypotenuse / this.hypotenuseLength),
        current_deg = 0;
        scale = scale <= this.minScale ? this.minScale : scale;
        scale = scale >= this.maxScale ? this.maxScale : scale;
        //图像边缘检测,防止截取到空白
        this.scale = scale;
        this.imgMarginDetectionScale();
        //双指旋转(如果没禁用旋转)
        var touchRelative = [
        {
          x: e.touches[0].clientX - this.imgLeft,
          y: e.touches[0].clientY - this.imgTop },

        {
          x: e.touches[1].clientX - this.imgLeft,
          y: e.touches[1].clientY - this.imgTop }];


        if (!this.disableRotate) {
          var first_atan = 180 / Math.PI * Math.atan2(touchRelative[0].y, touchRelative[0].x);
          var first_atan_old = 180 / Math.PI * Math.atan2(this.touchRelative[0].y, this.touchRelative[0].x);
          var second_atan = 180 / Math.PI * Math.atan2(touchRelative[1].y, touchRelative[1].x);
          var second_atan_old = 180 / Math.PI * Math.atan2(this.touchRelative[1].y, this.touchRelative[1].x);
          //当前旋转的角度
          var first_deg = first_atan - first_atan_old,
          second_deg = second_atan - second_atan_old;
          if (first_deg != 0) {
            current_deg = first_deg;
          } else if (second_deg != 0) {
            current_deg = second_deg;
          }
        }
        this.touchRelative = touchRelative;
        this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        //更新视图
        this.angle = this.angle + current_deg;
        this.scale = this.scale;
      }
    },
    //结束操作
    end: function end(e) {
      this.flagEndTouch = true;
      this.moveStop();
    },
    //裁剪框处理
    cutTouchMove: function cutTouchMove(e) {var _this7 = this;
      if (this.flagCutTouch && this.MOVE_THROTTLE_FLAG) {
        if (this.lockRatio && (this.lockWidth || this.lockHeight)) return;
        //节流
        this.MOVE_THROTTLE_FLAG = false;
        this.moveThrottle();
        var width = this.canvasWidth,
        height = this.canvasHeight,
        cutY = this.cutY,
        cutX = this.cutX,
        size_correct = function size_correct() {
          width = width <= _this7.maxWidth ? width >= _this7.minWidth ? width : _this7.minWidth : _this7.maxWidth;
          height = height <= _this7.maxHeight ? height >= _this7.minHeight ? height : _this7.minHeight : _this7.maxHeight;
        },
        size_inspect = function size_inspect() {
          if ((width > _this7.maxWidth || width < _this7.minWidth || height > _this7.maxHeight || height < _this7.minHeight) && _this7.lockRatio) {
            size_correct();
            return false;
          } else {
            size_correct();
            return true;
          }
        };
        height = this.CUT_START.height + (this.CUT_START.corner > 1 && this.CUT_START.corner < 4 ? 1 : -1) * (this.CUT_START.y - e.touches[0].clientY);
        switch (this.CUT_START.corner) {
          case 1:
            width = this.CUT_START.width - this.CUT_START.x + e.touches[0].clientX;
            if (this.lockRatio) {
              height = width / (this.canvasWidth / this.canvasHeight);
            }
            if (!size_inspect()) return;
            break;
          case 2:
            width = this.CUT_START.width - this.CUT_START.x + e.touches[0].clientX;
            if (this.lockRatio) {
              height = width / (this.canvasWidth / this.canvasHeight);
            }
            if (!size_inspect()) return;
            cutY = this.CUT_START.cutY - (height - this.CUT_START.height);
            break;
          case 3:
            width = this.CUT_START.width + this.CUT_START.x - e.touches[0].clientX;
            if (this.lockRatio) {
              height = width / (this.canvasWidth / this.canvasHeight);
            }
            if (!size_inspect()) return;
            cutY = this.CUT_START.cutY - (height - this.CUT_START.height);
            cutX = this.CUT_START.cutX - (width - this.CUT_START.width);
            break;
          case 4:
            width = this.CUT_START.width + this.CUT_START.x - e.touches[0].clientX;
            if (this.lockRatio) {
              height = width / (this.canvasWidth / this.canvasHeight);
            }
            if (!size_inspect()) return;
            cutX = this.CUT_START.cutX - (width - this.CUT_START.width);
            break;
          default:
            break;}

        if (!this.lockWidth && !this.lockHeight) {
          this.canvasWidth = width;
          this.cutX = cutX;
          this.canvasHeight = height;
          this.cutY = cutY;
        } else if (!this.lockWidth) {
          this.canvasWidth = width;
          this.cutX = cutX;
        } else if (!this.lockHeight) {
          this.canvasHeight = height;
          this.cutY = cutY;
        }
        this.imgMarginDetectionScale();
      }
    },
    cutTouchStart: function cutTouchStart(e) {
      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      /*
                                            * (右下-1 右上-2 左上-3 左下-4)
                                            * left_x [3,4]
                                            * top_y [2,3]
                                            * right_x [1,2]
                                            * bottom_y [1,4]
                                            */
      var left_x1 = this.cutX - 24;
      var left_x2 = this.cutX + 24;

      var top_y1 = this.cutY - 24;
      var top_y2 = this.cutY + 24;

      var right_x1 = this.cutX + this.canvasWidth - 24;
      var right_x2 = this.cutX + this.canvasWidth + 24;

      var bottom_y1 = this.cutY + this.canvasHeight - 24;
      var bottom_y2 = this.cutY + this.canvasHeight + 24;

      if (currentX > right_x1 && currentX < right_x2 && currentY > bottom_y1 && currentY < bottom_y2) {
        this.moveDuring();
        this.flagCutTouch = true;
        this.flagEndTouch = true;
        this.CUT_START = {
          width: this.canvasWidth,
          height: this.canvasHeight,
          x: currentX,
          y: currentY,
          corner: 1 };

      } else if (currentX > right_x1 && currentX < right_x2 && currentY > top_y1 && currentY < top_y2) {
        this.moveDuring();
        this.flagCutTouch = true;
        this.flagEndTouch = true;
        this.CUT_START = {
          width: this.canvasWidth,
          height: this.canvasHeight,
          x: currentX,
          y: currentY,
          cutY: this.cutY,
          cutX: this.cutX,
          corner: 2 };

      } else if (currentX > left_x1 && currentX < left_x2 && currentY > top_y1 && currentY < top_y2) {
        this.moveDuring();
        this.flagCutTouch = true;
        this.flagEndTouch = true;
        this.CUT_START = {
          width: this.canvasWidth,
          height: this.canvasHeight,
          cutY: this.cutY,
          cutX: this.cutX,
          x: currentX,
          y: currentY,
          corner: 3 };

      } else if (currentX > left_x1 && currentX < left_x2 && currentY > bottom_y1 && currentY < bottom_y2) {
        this.moveDuring();
        this.flagCutTouch = true;
        this.flagEndTouch = true;
        this.CUT_START = {
          width: this.canvasWidth,
          height: this.canvasHeight,
          cutY: this.cutY,
          cutX: this.cutX,
          x: currentX,
          y: currentY,
          corner: 4 };

      }
    },
    cutTouchEnd: function cutTouchEnd(e) {
      this.moveStop();
      this.flagCutTouch = false;
    },
    //停止移动时需要做的操作
    moveStop: function moveStop() {var _this8 = this;
      //清空之前的自动居中延迟函数并添加最新的
      clearTimeout(this.TIME_CUT_CENTER);
      this.TIME_CUT_CENTER = setTimeout(function () {
        //动画启动
        if (!_this8.cutAnimation) {
          _this8.cutAnimation = true;
        }
        _this8.setCutCenter();
      }, 800);
    },
    //移动中
    moveDuring: function moveDuring() {
      //清空之前的自动居中延迟函数
      clearTimeout(this.TIME_CUT_CENTER);
    },
    showLoading: function showLoading() {
      uni.showLoading({
        title: '请稍候...',
        mask: true });

    },
    stop: function stop() {},
    back: function back() {
      uni.navigateBack();
    },
    setAngle: function setAngle() {
      this.cutAnimation = true;
      this.angle = this.angle + 90;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 188:
/*!*************************************************************************************************************************************!*\
  !*** D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=style&index=0&id=2cebc490&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Download/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tui-image-cropper.vue?vue&type=style&index=0&id=2cebc490&scoped=true&lang=css& */ 189);
/* harmony import */ var _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Download_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tui_image_cropper_vue_vue_type_style_index_0_id_2cebc490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UNI/goodPrince/components/tui-image-cropper/tui-image-cropper.vue?vue&type=style&index=0&id=2cebc490&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tui-image-cropper/tui-image-cropper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-image-cropper/tui-image-cropper-create-component',
    {
        'components/tui-image-cropper/tui-image-cropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(183))
        })
    },
    [['components/tui-image-cropper/tui-image-cropper-create-component']]
]);
