exports.ids = [6];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("78ba3d24", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_3786173a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_3786173a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_3786173a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_3786173a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_style_index_0_id_3786173a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{box-sizing:border-box}h1,h2{font-weight:400}.example.horizontal{display:flex;height:100vh;overflow:hidden;width:500vw}.example-content{align-items:center;display:flex;flex-wrap:wrap;height:100%;justify-content:space-around;width:100%}.example-big-square{background-color:#000;padding-top:50vw;width:50vw}.example-small-square{background-color:#000;padding-top:25vw;width:25vw}.example-big-image img{display:block;height:auto;width:100%;width:50vw}.example.horizontal footer,.example.horizontal header{align-items:center;display:flex;height:100vh;padding:0 12.5vw;width:100vw}.example.horizontal .example-section{width:100vw}.example.vertical .example-section,.example.vertical footer{padding-top:50vw}.example-fade-text{padding:12.5vw 6.25vw}.example-fade-text h2{font-size:5vw}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo.vue?vue&type=template&id=3786173a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('LocomotiveScroll', {
    ref: "scroller",
    attrs: {
      "getted-options": {
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical'
        },
        tablet: {
          smooth: true,
          direction: 'vertical'
        }
      }
    }
  }, [_c('div', {
    staticClass: "locomotive-style vertical"
  }, [_c('header', {
    attrs: {
      "data-scroll-section": ""
    }
  }, [_c('h1', [_vm._v("\n        Vertical"), _c('br'), _vm._v("\n        Scroll\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-section",
    attrs: {
      "data-scroll-section": ""
    }
  }, [_c('div', {
    staticClass: "locomotive-style-content"
  }, [_c('div', {
    staticClass: "locomotive-style-big-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "-0.5"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-small-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "2.5"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-section",
    attrs: {
      "data-scroll-section": ""
    }
  }, [_c('div', {
    staticClass: "locomotive-style-content"
  }, [_c('div', {
    staticClass: "locomotive-style-small-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "2.5"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-big-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "-0.5"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-section",
    attrs: {
      "data-scroll-section": ""
    }
  }, [_c('div', {
    staticClass: "locomotive-style-content"
  }, [_c('div', {
    staticClass: "locomotive-style-big-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "-0.5"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "locomotive-style-small-square",
    attrs: {
      "data-scroll": "",
      "data-scroll-speed": "2.5"
    }
  })])]), _vm._v(" "), _c('footer', {
    attrs: {
      "data-scroll-section": ""
    }
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/horizontal-scroll/"
    }
  }, [_vm._v("\n        Go to Horizontal Scroll\n      ")])], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/demo.vue?vue&type=template&id=3786173a&

// EXTERNAL MODULE: ./LocomotiveScroll/component/index.vue + 4 modules
var component = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo.vue?vue&type=script&lang=js&

/* harmony default export */ var demovue_type_script_lang_js_ = ({
  components: {
    LocomotiveScroll: component["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/demo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var demo_component = Object(componentNormalizer["a" /* default */])(
  pages_demovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "656ec81c"
  
)

/* harmony default export */ var demo = __webpack_exports__["default"] = (demo_component.exports);

/***/ })

};;
//# sourceMappingURL=demo.js.map