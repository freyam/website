module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/GitHub.vue?vue&type=template&id=2291127a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"iconify iconify--uil",attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true","role":"img","width":"100%","height":"100%","preserveAspectRatio":"xMidYMid meet","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z\" class=\"transition-all\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/GitHub.vue?vue&type=template&id=2291127a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/GitHub.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GitHubvue_type_script_lang_js_ = ({
  name: 'GitHub'
});
// CONCATENATED MODULE: ./components/Icons/GitHub.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_GitHubvue_type_script_lang_js_ = (GitHubvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/GitHub.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_GitHubvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75a04a8f"
  
)

/* harmony default export */ var GitHub = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Controls/MenuToggle.vue?vue&type=template&id=6e1a2b6f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"px-2 h-10 w-10 md:hidden transition hover:bg-blue-100 dark:hover:bg-gray-700 outline-none rounded-full z-20",class:{ 'bg-blue-100 dark:bg-gray-800': _vm.menu },on:{"click":_vm.toggleMenu}},[_vm._ssrNode("<span"+(_vm._ssrClass("ml-auto transform h-0.5 w-6 block bg-blue-500 dark:bg-cyan-400 rounded-full transition duration-300",{ 'my-2': !_vm.menu, 'rotate-45': _vm.menu }))+"></span> <span"+(_vm._ssrClass("ml-auto my-2 h-0.5 w-4 block bg-blue-500 dark:bg-cyan-400 rounded-full transition duration-300",{ hidden: _vm.menu }))+"></span> <span"+(_vm._ssrClass("ml-auto transform h-0.5 block bg-blue-500 dark:bg-cyan-400 rounded-full transition duration-300",{ 'my-2 w-2': !_vm.menu, '-my-0.5 w-6 -rotate-45': _vm.menu }))+"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Controls/MenuToggle.vue?vue&type=template&id=6e1a2b6f&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Controls/MenuToggle.vue?vue&type=script&lang=js&
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

/* harmony default export */ var MenuTogglevue_type_script_lang_js_ = ({
  name: 'MenuToggle',
  computed: Object(external_vuex_["mapGetters"])({
    menu: 'menu'
  }),
  methods: Object(external_vuex_["mapActions"])({
    toggleMenu: 'toggleMenu'
  })
});
// CONCATENATED MODULE: ./components/Controls/MenuToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_MenuTogglevue_type_script_lang_js_ = (MenuTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Controls/MenuToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_MenuTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9d906a36"
  
)

/* harmony default export */ var MenuToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Controls/ThemeToggle.vue?vue&type=template&id=7b04d68b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button class=\"h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none\""+(_vm._ssrStyle(null,null, { display: (_vm.theme === 'dark') ? '' : 'none' }))+">","</button>",[_c('light',{staticClass:"h-2/3 w-2/3"})],1),_vm._ssrNode(" "),_vm._ssrNode("<button class=\"h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none\""+(_vm._ssrStyle(null,null, { display: (_vm.theme === 'light') ? '' : 'none' }))+">","</button>",[_c('dark',{staticClass:"h-2/3 w-2/3"})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Controls/ThemeToggle.vue?vue&type=template&id=7b04d68b&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Icons/Dark.vue + 4 modules
var Dark = __webpack_require__(19);

// EXTERNAL MODULE: ./components/Icons/Light.vue + 4 modules
var Light = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Controls/ThemeToggle.vue?vue&type=script&lang=js&
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



/* harmony default export */ var ThemeTogglevue_type_script_lang_js_ = ({
  name: 'ThemeToggle',
  components: {
    Light: Light["default"],
    Dark: Dark["default"]
  },
  computed: Object(external_vuex_["mapGetters"])({
    theme: 'theme'
  }),

  mounted() {
    this.setTheme();
  },

  methods: Object(external_vuex_["mapActions"])({
    setTheme: 'setTheme'
  })
});
// CONCATENATED MODULE: ./components/Controls/ThemeToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_ThemeTogglevue_type_script_lang_js_ = (ThemeTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Controls/ThemeToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_ThemeTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8fc014ca"
  
)

/* harmony default export */ var ThemeToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Facebook.vue?vue&type=template&id=14d46682&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 256 256"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M236 128a108 108 0 1 0-108.026 108L128 236l.026-.001A108.122 108.122 0 0 0 236 128zm-96 83.129V156h20a12 12 0 0 0 0-24h-20v-20a12.014 12.014 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36.04 36.04 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.128a84 84 0 1 1 24 0z\" class=\"transition-all\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Facebook.vue?vue&type=template&id=14d46682&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Facebook.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Facebookvue_type_script_lang_js_ = ({
  name: 'Facebook'
});
// CONCATENATED MODULE: ./components/Icons/Facebook.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Facebookvue_type_script_lang_js_ = (Facebookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Facebook.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Facebookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a2929dc"
  
)

/* harmony default export */ var Facebook = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/LinkedIn.vue?vue&type=template&id=5e7ece52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1zm-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457zm-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228z\" class=\"transition-all\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/LinkedIn.vue?vue&type=template&id=5e7ece52&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/LinkedIn.vue?vue&type=script&lang=js&
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
/* harmony default export */ var LinkedInvue_type_script_lang_js_ = ({
  name: 'LinkedIn'
});
// CONCATENATED MODULE: ./components/Icons/LinkedIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_LinkedInvue_type_script_lang_js_ = (LinkedInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/LinkedIn.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_LinkedInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5a0e716a"
  
)

/* harmony default export */ var LinkedIn = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Medium.vue?vue&type=template&id=69b05586&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 256 256"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M56.07 136a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h8V64h-8a8 8 0 1 1 0-16h16c.086 0 .169.011.254.014c.088.003.176.007.264.013a8.001 8.001 0 0 1 1.128.145l.009.002a7.863 7.863 0 0 1 1.115.33c.053.019.106.037.158.057a7.875 7.875 0 0 1 1.025.49c.052.03.102.062.153.093a8.04 8.04 0 0 1 .917.634l.052.04a8.081 8.081 0 0 1 .826.794l.15.164a8.071 8.071 0 0 1 .686.921c.014.023.033.041.047.064l33.216 53.146l33.216-53.146c.015-.023.033-.04.047-.064a8.028 8.028 0 0 1 .687-.92c.05-.057.1-.11.15-.165a7.985 7.985 0 0 1 .826-.795l.053-.04a8.046 8.046 0 0 1 .914-.632c.052-.031.102-.064.156-.094a7.919 7.919 0 0 1 1.022-.489c.054-.021.109-.04.163-.06a7.897 7.897 0 0 1 1.104-.326l.019-.005a8.01 8.01 0 0 1 1.122-.144c.09-.005.18-.01.271-.013c.084-.003.166-.013.25-.013h16a8 8 0 0 1 0 16h-8v64h8a8 8 0 0 1 0 16h-24a8 8 0 0 1 0-16V83.895l-25.216 40.346a8 8 0 0 1-13.568 0L48.07 83.895v44.106a8 8 0 0 1 8 8zm112-24h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16zm72 16h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16zm0 32h-168a8 8 0 0 0 0 16h168a8 8 0 0 0 0-16zm0 32h-168a8 8 0 0 0 0 16h168a8 8 0 0 0 0-16z\" class=\"transition-all\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Medium.vue?vue&type=template&id=69b05586&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Medium.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Mediumvue_type_script_lang_js_ = ({
  name: 'Medium'
});
// CONCATENATED MODULE: ./components/Icons/Medium.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Mediumvue_type_script_lang_js_ = (Mediumvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Medium.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Mediumvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "327d0d41"
  
)

/* harmony default export */ var Medium = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Twitter.vue?vue&type=template&id=4c444c32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524z\" class=\"transition-all\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Twitter.vue?vue&type=template&id=4c444c32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Twitter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Twittervue_type_script_lang_js_ = ({
  name: 'Twitter'
});
// CONCATENATED MODULE: ./components/Icons/Twitter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Twittervue_type_script_lang_js_ = (Twittervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Twitter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Twittervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79a31457"
  
)

/* harmony default export */ var Twitter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/YouTube.vue?vue&type=template&id=72ada82b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"transition-all\"><path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z\"></path> <path d=\"M9.75 15.02l5.75-3.27l-5.75-3.27v6.54z\"></path></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/YouTube.vue?vue&type=template&id=72ada82b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/YouTube.vue?vue&type=script&lang=js&
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
/* harmony default export */ var YouTubevue_type_script_lang_js_ = ({
  name: 'YouTube'
});
// CONCATENATED MODULE: ./components/Icons/YouTube.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_YouTubevue_type_script_lang_js_ = (YouTubevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/YouTube.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_YouTubevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3421bdb2"
  
)

/* harmony default export */ var YouTube = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/ExternalLink.vue?vue&type=template&id=f7c12d2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"transition\"><path d=\"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5\"></path> <path d=\"M10 14L20 4\"></path> <path d=\"M15 4h5v5\"></path></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/ExternalLink.vue?vue&type=template&id=f7c12d2a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/ExternalLink.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ExternalLinkvue_type_script_lang_js_ = ({
  name: 'ExternalLink'
});
// CONCATENATED MODULE: ./components/Icons/ExternalLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_ExternalLinkvue_type_script_lang_js_ = (ExternalLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/ExternalLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_ExternalLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12bc1931"
  
)

/* harmony default export */ var ExternalLink = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {//
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
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Contact',

  data() {
    return {
      status: null,
      busy: false,
      form: {
        name: null,
        email: null,
        subject: null,
        message: null
      }
    };
  },

  methods: {
    encode(data) {
      const formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      return new URLSearchParams(formData).toString();
    },

    submitForm() {
      this.status = null;
      this.busy = true;
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      }).then(() => {
        this.status = 'success';
        this.busy = false;
        this.form.name = null;
        this.form.email = null;
        this.form.subject = null;
        this.form.message = null;
      }).catch(err => {
        this.status = 'error';
        this.busy = false; // eslint-disable-next-line no-console

        console.error(err);
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54)["URLSearchParams"]))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/Navbar.vue?vue&type=template&id=492288d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:"navbar",staticClass:"px-8 py-4 flex items-center justify-between fixed top-0 w-full bg-blur bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 transition-all duration-300 z-20"},[_c('logo'),_vm._ssrNode(" "),_c('nav-menu'),_vm._ssrNode(" "),_c('menu-toggle'),_vm._ssrNode(" "),_c('theme-toggle',{staticClass:"hidden md:block"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/Navbar.vue?vue&type=template&id=492288d9&

// EXTERNAL MODULE: ./components/Icons/Logo.vue + 4 modules
var Logo = __webpack_require__(17);

// EXTERNAL MODULE: ./components/Controls/MenuToggle.vue + 4 modules
var MenuToggle = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Navigation/NavMenu.vue + 4 modules
var NavMenu = __webpack_require__(18);

// EXTERNAL MODULE: ./components/Controls/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/Navbar.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: 'Navbar',
  components: {
    Logo: Logo["default"],
    NavMenu: NavMenu["default"],
    MenuToggle: MenuToggle["default"],
    ThemeToggle: ThemeToggle["default"]
  },

  mounted() {
    this.animateNav();
  },

  methods: {
    animateNav() {
      let prevScrollpos = window.pageYOffset;

      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          this.$refs.navbar.style.top = '0';
        } else {
          this.$refs.navbar.style.top = '-6rem';
        }

        prevScrollpos = currentScrollPos;
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Navigation/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Navigation/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4179b4f8"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Logo.vue?vue&type=template&id=350a7046&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-12 w-12"},[_c('nuxt-link',{staticClass:"text-blue-500 dark:text-cyan-400 transform scale-90",attrs:{"to":"/"}},[_c('svg',{attrs:{"height":"100%","width":"100%","viewBox":"0 0 500 500","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{staticClass:"tranition-all",attrs:{"d":"M265 20.2073L441.506 122.113C450.788 127.472 456.506 137.376 456.506 148.094V351.906C456.506 362.624 450.788 372.528 441.506 377.887L265 479.793C255.718 485.152 244.282 485.152 235 479.793L58.4937 377.887C49.2116 372.528 43.4937 362.624 43.4937 351.906V148.094C43.4937 137.376 49.2116 127.472 58.4937 122.113L235 20.2073C244.282 14.8483 255.718 14.8483 265 20.2073Z","stroke":"currentColor","stroke-width":"20"}}),_vm._v(" "),_c('path',{staticClass:"tranition-all",attrs:{"d":"M320.379 140.52C323 140.52Z","fill":"currentColor"}})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Logo.vue?vue&type=template&id=350a7046&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Logo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  name: 'Logo'
});
// CONCATENATED MODULE: ./components/Icons/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Logo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0661d512"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/NavMenu.vue?vue&type=template&id=1fa34038&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"hidden static font-sourcecode text-sm md:flex justify-start items-center"},[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#skills"}},[_vm._v("Skills")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#experience"}},[_vm._v("Experience")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#projects"}},[_vm._v("Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#contact"}},[_vm._v("Contact")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/NavMenu.vue?vue&type=template&id=1fa34038&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/NavMenu.vue?vue&type=script&lang=js&
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
/* harmony default export */ var NavMenuvue_type_script_lang_js_ = ({
  name: 'NavMenu'
});
// CONCATENATED MODULE: ./components/Navigation/NavMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_NavMenuvue_type_script_lang_js_ = (NavMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Navigation/NavMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_NavMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5436375e"
  
)

/* harmony default export */ var NavMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Dark.vue?vue&type=template&id=1686f40b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"><path fill=\"#202834\" d=\"M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22C6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8a8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045c-5.523 0-10-4.477-10-10c0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z\"></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Dark.vue?vue&type=template&id=1686f40b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Dark.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Darkvue_type_script_lang_js_ = ({
  name: 'Dark'
});
// CONCATENATED MODULE: ./components/Icons/Dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Darkvue_type_script_lang_js_ = (Darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Dark.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28893c7c"
  
)

/* harmony default export */ var Dark = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Light.vue?vue&type=template&id=48ca72bd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"><path fill=\"#e5e7ee\" d=\"M6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407l-1.79 1.79l-1.407-1.408zm-1.8 15.115l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41l1.79-1.8l-1.41-1.41z\"></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Light.vue?vue&type=template&id=48ca72bd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Light.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Lightvue_type_script_lang_js_ = ({
  name: 'Light'
});
// CONCATENATED MODULE: ./components/Icons/Light.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Lightvue_type_script_lang_js_ = (Lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Light.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2594587a"
  
)

/* harmony default export */ var Light = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/MobileMenu.vue?vue&type=template&id=dbcef9a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("fixed inset-0 md:hidden bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-20",{ 'opacity-0 invisible': !_vm.menu, 'opacity-100 visible': _vm.menu }))+"></div> "),_vm._ssrNode("<ul"+(_vm._ssrClass("p-8 fixed transform inset-y-0 md:hidden font-sourcecode text-sm right-0 w-56 bg-white dark:bg-gray-900 flex flex-col justify-center transition-all duration-300 z-20 overflow-hidden",{
      'translate-x-56 invisible': !_vm.menu,
      'translate-x-0 visible shadow-lg': _vm.menu
    }))+">","</ul>",[_vm._ssrNode("<li class=\"absolute top-4 right-8\">","</li>",[_c('menu-toggle')],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mx-auto mb-8\">","</li>",[_c('theme-toggle')],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#skills"}},[_vm._v("Skills")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#experience"}},[_vm._v("Experience")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#projects"}},[_vm._v("Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{"to":"/#contact"}},[_vm._v("Contact")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/MobileMenu.vue?vue&type=template&id=dbcef9a0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Controls/MenuToggle.vue + 4 modules
var MenuToggle = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Controls/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/MobileMenu.vue?vue&type=script&lang=js&
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



/* harmony default export */ var MobileMenuvue_type_script_lang_js_ = ({
  name: 'MobileNavbar',
  components: {
    ThemeToggle: ThemeToggle["default"],
    MenuToggle: MenuToggle["default"]
  },
  computed: Object(external_vuex_["mapGetters"])({
    menu: 'menu'
  })
});
// CONCATENATED MODULE: ./components/Navigation/MobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_MobileMenuvue_type_script_lang_js_ = (MobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Navigation/MobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_MobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35c84415"
  
)

/* harmony default export */ var MobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/SocialHandles.vue?vue&type=template&id=ed132c50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hidden text-gray-500 dark:text-gray-400 lg:block fixed left-8 bottom-0 z-10"},[_vm._ssrNode("<ul class=\"p-4\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://github.com/freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://twitter.com/fre7am\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('twitter',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/freyam-mehta/\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('linked-in',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/freyam.mehta.5\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('facebook',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://medium.com/@freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('medium',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.youtube.com/channel/UCVLGcsaluzmK-4-ZL4DnPuw\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('you-tube',{staticClass:"h-2/3 w-2/3"})],1)])],2),_vm._ssrNode(" <div class=\"mx-auto h-24 w-px bg-gray-400 dark:bg-gray-500\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/SocialHandles.vue?vue&type=template&id=ed132c50&

// EXTERNAL MODULE: ./components/Icons/Facebook.vue + 4 modules
var Facebook = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Icons/LinkedIn.vue + 4 modules
var LinkedIn = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Icons/Medium.vue + 4 modules
var Medium = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icons/Twitter.vue + 4 modules
var Twitter = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Icons/YouTube.vue + 4 modules
var YouTube = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/SocialHandles.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//






/* harmony default export */ var SocialHandlesvue_type_script_lang_js_ = ({
  name: 'SocialHandles',
  components: {
    GitHub: GitHub["default"],
    Twitter: Twitter["default"],
    LinkedIn: LinkedIn["default"],
    Facebook: Facebook["default"],
    Medium: Medium["default"],
    YouTube: YouTube["default"]
  }
});
// CONCATENATED MODULE: ./components/Navigation/SocialHandles.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_SocialHandlesvue_type_script_lang_js_ = (SocialHandlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Navigation/SocialHandles.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_SocialHandlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09920f4c"
  
)

/* harmony default export */ var SocialHandles = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/EmailHandle.vue?vue&type=template&id=3b4276ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hidden lg:block fixed right-8 bottom-0 z-10"},[_vm._ssrNode("<div class=\"p-4 text-gray-500 dark:text-gray-400\"><a href=\"mailto:frey77mehta@gmail.com\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-4 writing-v-lr text-sm font-sourcecode tracking-wider transform transition duration-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:-translate-y-1 focus:text-blue-500 dark:focus:text-cyan-400 focus:-translate-y-1\">\n      frey77mehta@gmail.com\n    </a></div> <div class=\"mx-auto h-24 w-px bg-gray-400 dark:bg-gray-500\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/EmailHandle.vue?vue&type=template&id=3b4276ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/EmailHandle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var EmailHandlevue_type_script_lang_js_ = ({
  name: 'EmailHandle'
});
// CONCATENATED MODULE: ./components/Navigation/EmailHandle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_EmailHandlevue_type_script_lang_js_ = (EmailHandlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Navigation/EmailHandle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_EmailHandlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74a42c20"
  
)

/* harmony default export */ var EmailHandle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Footer.vue?vue&type=template&id=5fe5ebc3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container mx-auto py-4\">","</div>",[_vm._ssrNode("<ul class=\"mx-auto p-4 max-w-sm lg:hidden flex items-center justify-between text-gray-500 dark:text-gray-400\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"mailto:frey77mehta@gmail.com\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('envelope',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://github.com/freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://twitter.com/fre7am\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('twitter',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/freyam-mehta/\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('linked-in',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/freyam.mehta.5\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('facebook',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://medium.com/@freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('medium',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.youtube.com/channel/UCVLGcsaluzmK-4-ZL4DnPuw\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('you-tube',{staticClass:"h-2/3 w-2/3"})],1)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Footer.vue?vue&type=template&id=5fe5ebc3&

// EXTERNAL MODULE: ./components/Icons/Envelope.vue + 4 modules
var Envelope = __webpack_require__(25);

// EXTERNAL MODULE: ./components/Icons/Facebook.vue + 4 modules
var Facebook = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Icons/LinkedIn.vue + 4 modules
var LinkedIn = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Icons/Medium.vue + 4 modules
var Medium = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icons/Twitter.vue + 4 modules
var Twitter = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Icons/YouTube.vue + 4 modules
var YouTube = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Footer.vue?vue&type=script&lang=js&
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







/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: 'Footer',
  components: {
    Envelope: Envelope["default"],
    GitHub: GitHub["default"],
    Twitter: Twitter["default"],
    LinkedIn: LinkedIn["default"],
    Facebook: Facebook["default"],
    Medium: Medium["default"],
    YouTube: YouTube["default"]
  }
});
// CONCATENATED MODULE: ./components/Sections/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f997d75"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Envelope.vue?vue&type=template&id=13e022f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6zM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Envelope.vue?vue&type=template&id=13e022f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Envelope.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Envelopevue_type_script_lang_js_ = ({
  name: 'Envelope'
});
// CONCATENATED MODULE: ./components/Icons/Envelope.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Envelopevue_type_script_lang_js_ = (Envelopevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Envelope.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Envelopevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d71369c8"
  
)

/* harmony default export */ var Envelope = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Times.vue?vue&type=template&id=480f0a33&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"100%","height":"100%","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icons/Times.vue?vue&type=template&id=480f0a33&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icons/Times.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Timesvue_type_script_lang_js_ = ({
  name: 'Times'
});
// CONCATENATED MODULE: ./components/Icons/Times.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icons_Timesvue_type_script_lang_js_ = (Timesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Icons/Times.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Timesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "001edaac"
  
)

/* harmony default export */ var Times = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/About.vue?vue&type=template&id=3499d1b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"about"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\"><div class=\"mb-5 lg:mb-10 flex items-center\"><h1 class=\"text-3xl md:text-4xl font-bold whitespace-nowrap\">\n        About Me\n      </h1> <span class=\"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600\"></span></div> "+((_vm.about)?("<div class=\"lg:grid lg:grid-cols-2\"><div>"+(_vm._ssrList((_vm.description),function(desc,index){return ("<p class=\"mb-2\">"+_vm._ssrEscape("\n          "+_vm._s(desc)+"\n        ")+"</p>")}))+"</div> <div class=\"mt-6 lg:mt-0\"><div class=\"mx-auto relative h-72 w-full max-w-md lg:w-72 lg:max-w-full rounded-xl shadow-xl overflow-hidden\"><div class=\"absolute inset-0 bg-blue-500 dark:bg-cyan-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0\"></div> <img"+(_vm._ssrAttr("src",("/images/profile/" + (_vm.about.image))))+(_vm._ssrAttr("alt",_vm.about.name))+" class=\"h-full w-full object-cover\"></div></div></div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/About.vue?vue&type=template&id=3499d1b3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/About.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: 'About',

  data() {
    return {
      about: null
    };
  },

  computed: {
    description() {
      const about = this.about;
      let description;

      if (about !== null) {
        description = about.description.split('\n');
      }

      return description;
    }

  },

  created() {
    this.getAbout();
  },

  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();
      this.about = about;
    }

  }
});
// CONCATENATED MODULE: ./components/Sections/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8340e6ba"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Experience.vue?vue&type=template&id=a9e183ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"experience"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\"><div class=\"mb-5 md:mb-10 flex items-center\"><h1 class=\"text-3xl md:text-4xl font-bold whitespace-nowrap\">\n        Experience\n      </h1> <span class=\"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600\"></span></div> <div class=\"md:flex\"><ul class=\"flex items-center overflow-x-auto md:overflow-visible md:block\">"+(_vm._ssrList((_vm.experience),function(exp,index){return ("<li><button"+(_vm._ssrClass("px-4 py-3 whitespace-nowrap text-left block w-full border-b-2 md:border-b-0 md:border-l-2 dark:border-gray-600 transition hover:text-blue-500 hover:bg-gray-100 dark:hover:text-cyan-400 dark:hover:bg-gray-800 focus:text-blue-500 focus:bg-gray-100 dark:focus:text-cyan-400 dark:focus:bg-gray-800 outline-none",{
              'text-gray-400 border-gray-300': _vm.activeTab !== exp.company,
              'text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400':
                _vm.activeTab === exp.company
            }))+">"+_vm._ssrEscape("\n            "+_vm._s(exp.company)+"\n          ")+"</button></li>")}))+"</ul> "+(_vm._ssrList((_vm.experience),function(exp,index){return ("<div"+(_vm._ssrClass("py-4 md:px-4 md:py-2",{ hidden: _vm.activeTab !== exp.company }))+"><div class=\"mb-2\"><h2 class=\"text-xl md:text-2xl\">"+_vm._ssrEscape("\n            "+_vm._s(exp.role)+"\n            ")+"<a"+(_vm._ssrAttr("href",exp.company_website))+" target=\"_blank\" rel=\"noreferrer\" class=\"text-blue-500 dark:text-cyan-400\">"+_vm._ssrEscape("@"+_vm._s(exp.company))+"</a></h2> <span class=\"text-sm text-gray-500 dark:text-gray-400\">"+_vm._ssrEscape("\n            "+_vm._s(exp.contract.type)+" · "+_vm._s(exp.duration)+"\n          ")+"</span></div> <p class=\"mb-2\">"+_vm._ssrEscape("\n          "+_vm._s(exp.description)+"\n          ")+"</p> <ul class=\"px-4 list-disc\">"+(_vm._ssrList((exp.tasks),function(task,i){return ("<li class=\"mb-2\">"+_vm._ssrEscape("\n            "+_vm._s(task)+"\n          ")+"</li>")}))+"</ul></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Experience.vue?vue&type=template&id=a9e183ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Experience.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var Experiencevue_type_script_lang_js_ = ({
  name: 'Experience',

  data() {
    return {
      experience: [],
      activeTab: null
    };
  },

  created() {
    this.getAbout().then(() => this.setActiveTab());
  },

  methods: {
    async getAbout() {
      const experience = await this.$content('experience').sortBy('updatedAt').fetch();
      this.experience = experience;
    },

    setActiveTab() {
      if (this.experience.length > 0) {
        this.activeTab = this.experience[0].company;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Sections/Experience.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Experiencevue_type_script_lang_js_ = (Experiencevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Experience.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Experiencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0eed70c4"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Header.vue?vue&type=template&id=3c0d7622&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-12 md:py-10 flex items-center min-h-screen max-w-6xl\">","</div>",[(_vm.about)?_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<h1 class=\"text-6xl md:text-7xl lg:text-8xl font-light\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.about.name)+"\n      ")+"</h1> <h2 class=\"text-6xl md:text-7xl lg:text-8xl font-bold text-gray-500 dark:text-gray-400\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.about.title)+"\n      ")+"</h2> <p class=\"mt-4 max-w-lg text-gray-500 dark:text-gray-400 leading-1\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.about.bio)+"\n      ")+"</p> "),_c('nuxt-link',{staticClass:"mt-8 px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20",attrs:{"to":"/#contact"}},[_vm._v("\n        Get In Touch\n      ")])],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Header.vue?vue&type=template&id=3c0d7622&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header',

  data() {
    return {
      about: {}
    };
  },

  created() {
    this.getAbout();
  },

  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();
      this.about = about;
    }

  }
});
// CONCATENATED MODULE: ./components/Sections/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30cbe167"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Project.vue?vue&type=template&id=22caaf2e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"projects"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\">","</div>",[_vm._ssrNode("<h1 class=\"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap\">\n      Projects\n    </h1> "),_vm._l((_vm.projects),function(project,index){return _vm._ssrNode("<div"+(_vm._ssrClass("mx-auto mb-10 md:mb-16 relative lg:flex lg:items-center rounded-xl overflow-hidden",{
        'text-right flex-row': index % 2 === 0,
        'text-left flex-row-reverse': index % 2 !== 0
      }))+">","</div>",[_vm._ssrNode("<div class=\"h-80 lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl\"><div class=\"hidden lg:block absolute inset-0 bg-blue-500 dark:bg-cyan-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0\"></div> <img"+(_vm._ssrAttr("src",project.cover_image))+(_vm._ssrAttr("alt",project.name))+" class=\"h-full w-full object-cover\"></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10",{
          'lg:-ml-12 lg:-mr-0': index % 2 === 0,
          'lg:-ml-0 lg:-mr-12': index % 2 !== 0
        }))+">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight\">"+_vm._ssrEscape("\n            "+_vm._s(project.name)+"\n          ")+"</h2> <div class=\"lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg\"><p>"+_vm._ssrEscape("\n              "+_vm._s(_vm.trimDescription(project.description))+"\n              ")+((_vm.trimDescription(project.description).length > 135)?("<button class=\"text-blue-500 dark:text-cyan-400 underline\">\n                Read more\n              </button>"):"<!---->")+"</p></div> <p class=\"mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded\">"+(_vm._ssrList((project.languages),function(lang,i){return ("<span>"+_vm._ssrEscape("\n              "+_vm._s(lang)+"\n            ")+"</span>")}))+"</p> "),_vm._ssrNode("<div"+(_vm._ssrClass("mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center",{
              'justify-end': index % 2 === 0
            }))+">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",project.github_link))+" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full\">","</a>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",project.live_link))+" target=\"_blank\" rel=\"noreferrer\" class=\"ml-4 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full\">","</a>",[_c('external-link',{staticClass:"h-2/3 w-2/3"})],1)],2)],2)])],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Project.vue?vue&type=template&id=22caaf2e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Icons/ExternalLink.vue + 4 modules
var ExternalLink = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Project.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Projectvue_type_script_lang_js_ = ({
  name: 'Project',
  components: {
    GitHub: GitHub["default"],
    ExternalLink: ExternalLink["default"]
  },

  data() {
    return {
      projects: []
    };
  },

  created() {
    this.getProjects();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      openModal: 'openModal'
    }),

    async getProjects() {
      const projects = await this.$content('projects/featured').sortBy('createdAt').fetch();
      this.projects = projects;
    },

    trimDescription(description) {
      const maxLength = 135;
      let trimmedDesc;

      if (description.length > maxLength) {
        trimmedDesc = `${description.substring(0, maxLength)}...`;
      } else {
        trimmedDesc = description;
      }

      return trimmedDesc;
    }

  }
});
// CONCATENATED MODULE: ./components/Sections/Project.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Projectvue_type_script_lang_js_ = (Projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Project.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cb6c6af"
  
)

/* harmony default export */ var Project = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Skill.vue?vue&type=template&id=3b0df74c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"skills"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\"><h1 class=\"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap\">\n      Skills\n    </h1> "+((_vm.skills)?("<div><ul class=\"mx-auto flex items-center justify-center flex-wrap max-w-3xl\">"+(_vm._ssrList((_vm.skills.skills),function(skill,index){return ("<li class=\"m-1 md:m-2 flex items-center border dark:border-gray-700 rounded-xl overflow-hidden\"><div class=\"p-4 h-14 w-14 overflow-hidden\"><img"+(_vm._ssrAttr("src",("/images/skills/" + (skill.icon))))+(_vm._ssrAttr("alt",skill.name))+" class=\"w-full h-full object-contain\"></div> <p class=\"px-4 text-sm md:text-base\">"+_vm._ssrEscape("\n            "+_vm._s(skill.name)+"\n          ")+"</p></li>")}))+"</ul></div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Skill.vue?vue&type=template&id=3b0df74c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Skill.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Skillvue_type_script_lang_js_ = ({
  name: 'Skill',

  data() {
    return {
      skills: null
    };
  },

  created() {
    this.getSkills();
  },

  methods: {
    async getSkills() {
      const skills = await this.$content('skills').fetch();
      this.skills = skills;
    }

  }
});
// CONCATENATED MODULE: ./components/Sections/Skill.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Skillvue_type_script_lang_js_ = (Skillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Skill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Skillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f62f9d32"
  
)

/* harmony default export */ var Skill = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Widgets/Modal.vue?vue&type=template&id=8eebd6ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed inset-0 bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-30",class:{
    'opacity-0 invisible': !_vm.modal.active,
    'opacity-100 visible': _vm.modal.active
  }},[(_vm.modal.active)?_vm._ssrNode("<article class=\"bg-white dark:bg-gray-800 w-full max-w-4xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl shadow-xl overflow-x-hidden overflow-y-auto\">","</article>",[_vm._ssrNode("<div class=\"px-8 py-4 bg-blur bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10\">","</div>",[_vm._ssrNode("<p class=\"text-xl\">View project</p> "),_vm._ssrNode("<button class=\"h-8 w-8 grid place-items-center rounded-full transform transition text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none\">","</button>",[_c('times',{staticClass:"h-2/3 w-2/3"})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden\"><img"+(_vm._ssrAttr("src",_vm.modal.content.cover_image))+" alt=\"Project Name\" class=\"h-full w-full object-cover\"></div> "),_vm._ssrNode("<div class=\"py-4 md:py-0 relative md:max-h-96 overflow-x-hidden overflow-y-auto\">","</div>",[_vm._ssrNode("<h2 class=\"mb-4 text-3xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.modal.content.name))+"</h2> <p class=\"leading-6\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.modal.content.description)+"\n        ")+"</p> "),_vm._ssrNode("<div class=\"mt-6 sticky top-full text-lg text-gray-600 dark:text-gray-400 flex items-center\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.modal.content.github_link))+" target=\"_blank\" rel=\"noreferrer\" class=\"flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400\">","</a>",[_vm._ssrNode("<div class=\"flex-shrink-0 h-8 w-8 grid place-items-center\">","</div>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1),_vm._ssrNode("\n            GitHub\n          ")],2),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.modal.content.live_link))+" target=\"_blank\" rel=\"noreferrer\" class=\"ml-6 flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400\">","</a>",[_vm._ssrNode("<div class=\"flex-shrink-0 h-8 w-8 grid place-items-center\">","</div>",[_c('external-link',{staticClass:"h-2/3 w-2/3"})],1),_vm._ssrNode("\n            Live\n          ")],2)],2)],2)],2)],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Widgets/Modal.vue?vue&type=template&id=8eebd6ac&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Icons/Times.vue + 4 modules
var Times = __webpack_require__(26);

// EXTERNAL MODULE: ./components/Icons/ExternalLink.vue + 4 modules
var ExternalLink = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Widgets/Modal.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//




/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'Modal',
  components: {
    Times: Times["default"],
    GitHub: GitHub["default"],
    ExternalLink: ExternalLink["default"]
  },
  computed: Object(external_vuex_["mapGetters"])({
    modal: 'modal'
  }),
  methods: Object(external_vuex_["mapActions"])({
    closeModal: 'closeModal'
  })
});
// CONCATENATED MODULE: ./components/Widgets/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Widgets/Modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Widgets_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2da488b4"
  
)

/* harmony default export */ var Modal = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Contact.vue?vue&type=template&id=17b87908&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"contact"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\"><h1 class=\"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center\">\n      Get In Touch\n    </h1> <div class=\"mx-auto max-w-sm\"><div"+(_vm._ssrClass("mb-4 font-bold text-center",{
          'text-cyan-500': _vm.status === 'success',
          'text-red-500': _vm.status === 'error'
        }))+">"+((_vm.status === 'success')?("<p>Message sent successfully.</p>"):"<!---->")+" "+((_vm.status === 'error')?("<p>\n          There was a error submitting the form.\n        </p>"):"<!---->")+"</div> <form autocomplete=\"off\" name=\"contact\" method=\"POST\" action=\"/success\" data-netlify=\"true\" data-netlify-honeypot=\"bot-field\"><input type=\"hidden\" name=\"form-name\" value=\"contact\"> <div class=\"mb-4\"><label for=\"name\" class=\"block\">Name</label> <input id=\"name\" name=\"name\" type=\"text\" required=\"required\" placeholder=\"Full Name\""+(_vm._ssrAttr("value",(_vm.form.name)))+" class=\"p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none\"></div> <div class=\"mb-4\"><label for=\"subject\" class=\"block\">Subject</label> <input id=\"subject\" name=\"subject\" type=\"text\" required=\"required\" placeholder=\"Query/Opportunity\""+(_vm._ssrAttr("value",(_vm.form.subject)))+" class=\"p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none\"></div> <div class=\"mb-4\"><label for=\"email\" class=\"block\">Email</label> <input id=\"email\" name=\"email\" type=\"email\" required=\"required\" placeholder=\"Email Address\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none\"></div> <div class=\"mb-4\"><label for=\"message\" class=\"block\">Message</label> <textarea id=\"message\" name=\"message\" rows=\"3\" required=\"required\" placeholder=\"Body of the Message\" class=\"p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none\">"+_vm._ssrEscape(_vm._s(_vm.form.message))+"</textarea></div> <button type=\"submit\""+(_vm._ssrClass("mx-auto mt-6 px-6 py-3 block font-sourcecode text-blue-500 dark:text-cyan-400 border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20",{ 'pointer-events-none': _vm.busy }))+">"+((_vm.busy)?("<span>Sending...</span>"):"<!---->")+" "+((!_vm.busy)?("<span>Send</span>"):"<!---->")+"</button></form></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Contact.vue?vue&type=template&id=17b87908&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Contact.vue?vue&type=script&lang=js&
var Contactvue_type_script_lang_js_ = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Sections/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/Sections/Contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b1a87794"
  
)

/* harmony default export */ var Contact = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(14).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Freyam Mehta\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Freyam Mehta\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"A highly resourceful Student Developer studying Computer Science at IIIT Hyderabad.\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#406bc7\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Freyam Mehta\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Freyam Mehta\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"A highly resourceful Student Developer studying Computer Science at IIIT Hyderabad.\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/icons/android-chrome-192x192.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/icons/android-chrome-384x384.png\",\"sizes\":\"384x384\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.f64a4d35.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(55);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(14).default("0211d3d2", content, true)

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Helvetica,Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#94a3b8}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#94a3b8}input::placeholder,textarea::placeholder{opacity:1;color:#94a3b8}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgba(203,213,225,var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgba(148,163,184,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.hover\\:bg-blue-100:hover{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.focus\\:bg-gray-100:focus{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.focus\\:bg-blue-100:focus{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.focus\\:bg-blue-500:focus{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-500{--tw-bg-opacity:1;background-color:rgba(100,116,139,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:rgba(71,85,105,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.dark .dark\\:bg-cyan-400{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-cyan-400:hover{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-gray-700:focus{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-gray-800:focus{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-80{--tw-bg-opacity:0.8}.bg-opacity-90{--tw-bg-opacity:0.9}.hover\\:bg-opacity-0:hover{--tw-bg-opacity:0}.focus\\:bg-opacity-20:focus,.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.dark .dark\\:bg-opacity-50{--tw-bg-opacity:0.5}.dark .dark\\:bg-opacity-80{--tw-bg-opacity:0.8}.dark .dark\\:bg-opacity-90{--tw-bg-opacity:0.9}.dark .dark\\:hover\\:bg-opacity-0:hover{--tw-bg-opacity:0}.dark .dark\\:focus\\:bg-opacity-20:focus,.dark .dark\\:hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.border-gray-300{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.border-blue-500,.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(59,130,246,var(--tw-border-opacity))}.dark .dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgba(71,85,105,var(--tw-border-opacity))}.dark .dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgba(51,65,85,var(--tw-border-opacity))}.dark .dark\\:border-cyan-400,.dark .dark\\:focus\\:border-cyan-400:focus{--tw-border-opacity:1;border-color:rgba(34,211,238,var(--tw-border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.border-b{border-bottom-width:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{align-items:center;justify-items:center;place-items:center}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-shrink-0{flex-shrink:0}.font-sourcesans{font-family:\"Source Sans Pro\",sans-serif}.font-sourcecode{font-family:\"Source Code Pro\",monospace}.font-light{font-weight:300}.font-bold{font-weight:700}.h-0{height:0}.h-8{height:2rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-60{height:15rem}.h-72{height:18rem}.h-80{height:20rem}.h-px{height:1px}.h-0\\.5{height:.125rem}.h-2\\/3{height:66.666667%}.h-full{height:100%}.text-sm{font-size:.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-6{line-height:1.5rem}.list-disc{list-style-type:disc}.m-1{margin:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.-my-0{margin-top:0;margin-bottom:0}.-my-0\\.5{margin-top:-.125rem;margin-bottom:-.125rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mb-5{margin-bottom:1.25rem}.mt-6{margin-top:1.5rem}.ml-6{margin-left:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.ml-auto{margin-left:auto}.max-w-sm{max-width:24rem}.max-w-md{max-width:28rem}.max-w-lg{max-width:32rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-6xl{max-width:72rem}.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.min-h-screen{min-height:100vh}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.opacity-0{opacity:0}.opacity-100{opacity:1}.outline-none{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.p-2{padding:.5rem}.p-4{padding:1rem}.p-8{padding:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{right:0;left:0}.inset-0,.inset-y-0{top:0;bottom:0}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-4{top:1rem}.right-8{right:2rem}.left-8{left:2rem}.top-full{top:100%}*{--tw-shadow:0 0 transparent}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}.shadow-lg,.shadow-xl{box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(71,85,105,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(30,41,59,var(--tw-text-opacity))}.text-blue-400{--tw-text-opacity:1;color:rgba(96,165,250,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.text-cyan-500{--tw-text-opacity:1;color:rgba(6,182,212,var(--tw-text-opacity))}.focus\\:text-blue-500:focus,.hover\\:text-blue-500:hover{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.dark .dark\\:focus\\:text-cyan-400:focus,.dark .dark\\:hover\\:text-cyan-400:hover,.dark .dark\\:text-cyan-400{--tw-text-opacity:1;color:rgba(34,211,238,var(--tw-text-opacity))}.underline{text-decoration:underline}.tracking-tight{letter-spacing:-.025em}.tracking-wider{letter-spacing:.05em}.visible{visibility:visible}.invisible{visibility:hidden}.whitespace-nowrap{white-space:nowrap}.w-2{width:.5rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-56{width:14rem}.w-64{width:16rem}.w-px{width:1px}.w-2\\/3{width:66.666667%}.w-full{width:100%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-90{--tw-scale-x:.9;--tw-scale-y:.9}.rotate-45{--tw-rotate:45deg}.-rotate-45{--tw-rotate:-45deg}.translate-x-0{--tw-translate-x:0px}.translate-x-56{--tw-translate-x:14rem}.focus\\:-translate-y-1:focus,.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:768px){.md\\:rounded-xl{border-radius:.75rem}.md\\:border-b-0{border-bottom-width:0}.md\\:border-l-2{border-left-width:2px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:h-80{height:20rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:m-2{margin:.5rem}.md\\:mb-0{margin-bottom:0}.md\\:mt-4{margin-top:1rem}.md\\:mb-4{margin-bottom:1rem}.md\\:mb-10{margin-bottom:2.5rem}.md\\:mb-16{margin-bottom:4rem}.md\\:max-h-96{max-height:24rem}.md\\:overflow-visible{overflow:visible}.md\\:p-6{padding:1.5rem}.md\\:py-0{padding-top:0;padding-bottom:0}.md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:px-20{padding-left:5rem;padding-right:5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:bottom-auto{bottom:auto}.md\\:top-1\\/2{top:50%}.md\\:left-1\\/2{left:50%}.md\\:gap-8{grid-gap:2rem;gap:2rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:-translate-x-1\\/2{--tw-translate-x:-50%}.md\\:-translate-y-1\\/2{--tw-translate-y:-50%}}@media (min-width:1024px){.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.dark .lg\\:dark\\:bg-transparent{background-color:transparent}.dark .lg\\:dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.lg\\:rounded-lg{border-radius:.5rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:items-center{align-items:center}.lg\\:text-8xl{font-size:6rem;line-height:1}.lg\\:mt-0{margin-top:0}.lg\\:mb-10{margin-bottom:2.5rem}.lg\\:-mr-0{margin-right:0}.lg\\:-ml-0{margin-left:0}.lg\\:-mr-12{margin-right:-3rem}.lg\\:-ml-12{margin-left:-3rem}.lg\\:max-w-xl{max-width:36rem}.lg\\:max-w-full{max-width:100%}.lg\\:p-0{padding:0}.lg\\:p-4{padding:1rem}.lg\\:relative{position:relative}.lg\\:shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.lg\\:text-gray-500{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.lg\\:text-gray-900{--tw-text-opacity:1;color:rgba(15,23,42,var(--tw-text-opacity))}.dark .lg\\:dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.dark .lg\\:dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.lg\\:w-72{width:18rem}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(14).default("e622d370", content, true)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Helvetica,Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#94a3b8}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#94a3b8}input::placeholder,textarea::placeholder{opacity:1;color:#94a3b8}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgba(203,213,225,var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgba(148,163,184,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.bg-blue-900{--tw-bg-opacity:1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.hover\\:bg-blue-100:hover{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.hover\\:bg-blue-500:hover{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.focus\\:bg-gray-100:focus{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.focus\\:bg-blue-100:focus{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.focus\\:bg-blue-500:focus{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-500{--tw-bg-opacity:1;background-color:rgba(100,116,139,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:rgba(71,85,105,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgba(15,23,42,var(--tw-bg-opacity))}.dark .dark\\:bg-cyan-400{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-cyan-400:hover{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-gray-700:focus{--tw-bg-opacity:1;background-color:rgba(51,65,85,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-gray-800:focus{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.dark .dark\\:focus\\:bg-cyan-400:focus{--tw-bg-opacity:1;background-color:rgba(34,211,238,var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-80{--tw-bg-opacity:0.8}.bg-opacity-90{--tw-bg-opacity:0.9}.hover\\:bg-opacity-0:hover{--tw-bg-opacity:0}.focus\\:bg-opacity-20:focus,.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.dark .dark\\:bg-opacity-50{--tw-bg-opacity:0.5}.dark .dark\\:bg-opacity-80{--tw-bg-opacity:0.8}.dark .dark\\:bg-opacity-90{--tw-bg-opacity:0.9}.dark .dark\\:hover\\:bg-opacity-0:hover{--tw-bg-opacity:0}.dark .dark\\:focus\\:bg-opacity-20:focus,.dark .dark\\:hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.border-gray-300{--tw-border-opacity:1;border-color:rgba(203,213,225,var(--tw-border-opacity))}.border-blue-500,.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(59,130,246,var(--tw-border-opacity))}.dark .dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgba(71,85,105,var(--tw-border-opacity))}.dark .dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgba(51,65,85,var(--tw-border-opacity))}.dark .dark\\:border-cyan-400,.dark .dark\\:focus\\:border-cyan-400:focus{--tw-border-opacity:1;border-color:rgba(34,211,238,var(--tw-border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.border-b{border-bottom-width:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{align-items:center;justify-items:center;place-items:center}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-shrink-0{flex-shrink:0}.font-sourcesans{font-family:\"Source Sans Pro\",sans-serif}.font-sourcecode{font-family:\"Source Code Pro\",monospace}.font-light{font-weight:300}.font-bold{font-weight:700}.h-0{height:0}.h-8{height:2rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-60{height:15rem}.h-72{height:18rem}.h-80{height:20rem}.h-px{height:1px}.h-0\\.5{height:.125rem}.h-2\\/3{height:66.666667%}.h-full{height:100%}.text-sm{font-size:.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-6{line-height:1.5rem}.list-disc{list-style-type:disc}.m-1{margin:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.-my-0{margin-top:0;margin-bottom:0}.-my-0\\.5{margin-top:-.125rem;margin-bottom:-.125rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mb-5{margin-bottom:1.25rem}.mt-6{margin-top:1.5rem}.ml-6{margin-left:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.ml-auto{margin-left:auto}.max-w-sm{max-width:24rem}.max-w-md{max-width:28rem}.max-w-lg{max-width:32rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-6xl{max-width:72rem}.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.min-h-screen{min-height:100vh}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.opacity-0{opacity:0}.opacity-100{opacity:1}.outline-none{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.p-2{padding:.5rem}.p-4{padding:1rem}.p-8{padding:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{right:0;left:0}.inset-0,.inset-y-0{top:0;bottom:0}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-4{top:1rem}.right-8{right:2rem}.left-8{left:2rem}.top-full{top:100%}*{--tw-shadow:0 0 transparent}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}.shadow-lg,.shadow-xl{box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(71,85,105,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(30,41,59,var(--tw-text-opacity))}.text-blue-400{--tw-text-opacity:1;color:rgba(96,165,250,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.text-cyan-500{--tw-text-opacity:1;color:rgba(6,182,212,var(--tw-text-opacity))}.focus\\:text-blue-500:focus,.hover\\:text-blue-500:hover{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.dark .dark\\:focus\\:text-cyan-400:focus,.dark .dark\\:hover\\:text-cyan-400:hover,.dark .dark\\:text-cyan-400{--tw-text-opacity:1;color:rgba(34,211,238,var(--tw-text-opacity))}.underline{text-decoration:underline}.tracking-tight{letter-spacing:-.025em}.tracking-wider{letter-spacing:.05em}.visible{visibility:visible}.invisible{visibility:hidden}.whitespace-nowrap{white-space:nowrap}.w-2{width:.5rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-56{width:14rem}.w-64{width:16rem}.w-px{width:1px}.w-2\\/3{width:66.666667%}.w-full{width:100%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-90{--tw-scale-x:.9;--tw-scale-y:.9}.rotate-45{--tw-rotate:45deg}.-rotate-45{--tw-rotate:-45deg}.translate-x-0{--tw-translate-x:0px}.translate-x-56{--tw-translate-x:14rem}.focus\\:-translate-y-1:focus,.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.bg-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.writing-v-lr{-ms-writing-mode:tb-lr;writing-mode:vertical-lr}html{scroll-behavior:smooth}@media (min-width:768px){.md\\:rounded-xl{border-radius:.75rem}.md\\:border-b-0{border-bottom-width:0}.md\\:border-l-2{border-left-width:2px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:h-80{height:20rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:m-2{margin:.5rem}.md\\:mb-0{margin-bottom:0}.md\\:mt-4{margin-top:1rem}.md\\:mb-4{margin-bottom:1rem}.md\\:mb-10{margin-bottom:2.5rem}.md\\:mb-16{margin-bottom:4rem}.md\\:max-h-96{max-height:24rem}.md\\:overflow-visible{overflow:visible}.md\\:p-6{padding:1.5rem}.md\\:py-0{padding-top:0;padding-bottom:0}.md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:px-20{padding-left:5rem;padding-right:5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:bottom-auto{bottom:auto}.md\\:top-1\\/2{top:50%}.md\\:left-1\\/2{left:50%}.md\\:gap-8{grid-gap:2rem;gap:2rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:-translate-x-1\\/2{--tw-translate-x:-50%}.md\\:-translate-y-1\\/2{--tw-translate-y:-50%}}@media (min-width:1024px){.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.dark .lg\\:dark\\:bg-transparent{background-color:transparent}.dark .lg\\:dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(30,41,59,var(--tw-bg-opacity))}.lg\\:rounded-lg{border-radius:.5rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:items-center{align-items:center}.lg\\:text-8xl{font-size:6rem;line-height:1}.lg\\:mt-0{margin-top:0}.lg\\:mb-10{margin-bottom:2.5rem}.lg\\:-mr-0{margin-right:0}.lg\\:-ml-0{margin-left:0}.lg\\:-mr-12{margin-right:-3rem}.lg\\:-ml-12{margin-left:-3rem}.lg\\:max-w-xl{max-width:36rem}.lg\\:max-w-full{max-width:100%}.lg\\:p-0{padding:0}.lg\\:p-4{padding:1rem}.lg\\:relative{position:relative}.lg\\:shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.lg\\:text-gray-500{--tw-text-opacity:1;color:rgba(100,116,139,var(--tw-text-opacity))}.lg\\:text-gray-900{--tw-text-opacity:1;color:rgba(15,23,42,var(--tw-text-opacity))}.dark .lg\\:dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(226,232,240,var(--tw-text-opacity))}.dark .lg\\:dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(148,163,184,var(--tw-text-opacity))}.lg\\:w-72{width:18rem}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(14).default("517a8dd7", content, true)

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  menu: false,
  modal: {
    active: false,
    content: null
  },
  theme: null
});
const getters = {
  menu: state => state.menu,
  modal: state => state.modal,
  theme: state => state.theme
};
const mutations = {
  TOGGLE_MENU(state) {
    state.menu = !state.menu;
  },

  CLOSE_MENU(state) {
    state.menu = false;
  },

  OPEN_MODAL(state, payload) {
    state.modal.active = true;
    state.modal.content = payload;
  },

  CLOSE_MODAL(state) {
    state.modal.active = false;
    state.modal.content = null;
  },

  SET_THEME(state, payload) {
    state.theme = payload;
  }

};
const actions = {
  toggleMenu({
    commit
  }) {
    document.body.classList.toggle('overflow-hidden');
    commit('TOGGLE_MENU');
  },

  closeMenu({
    commit
  }) {
    document.body.classList.remove('overflow-hidden');
    commit('CLOSE_MENU');
  },

  openModal({
    commit
  }, payload) {
    document.body.classList.add('overflow-hidden');
    commit('OPEN_MODAL', payload);
  },

  closeModal({
    commit
  }) {
    document.body.classList.remove('overflow-hidden');
    commit('CLOSE_MODAL');
  },

  setTheme({
    commit
  }, theme = null) {
    if (false) {}
  }

};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(40);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(41);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(29);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(27);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(30);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _49cfd884 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 56)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _49cfd884,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=8e71fec8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"min-h-screen grid place-items-center"},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-12 md:py-10 text-center max-w-4xl\">","</div>",[_vm._ssrNode(((_vm.error.statusCode === 404)?("<div class=\"mx-auto max-w-max\"><h1 class=\"mb-2 text-4xl md:text-6xl whitespace-nowrap font-light\">\n        Page Not Found\n      </h1> <div class=\"flex items-center\"><span class=\"font-sourcecode text-blue-500 dark:text-cyan-400\">404</span> <span class=\"ml-4 h-px w-full bg-blue-500 dark:bg-cyan-400\"></span></div></div>"):("<div class=\"mx-auto max-w-max\"><h1 class=\"mb-2 text-4xl md:text-6xl whitespace-nowrap font-light\">\n        An Error Occured\n      </h1> <div class=\"flex items-center\"><span class=\"font-sourcecode text-blue-500 dark:text-cyan-400\">"+_vm._ssrEscape(_vm._s(_vm.error.statusCode && '???'))+"</span> <span class=\"ml-4 h-px w-full bg-blue-500 dark:bg-cyan-400\"></span></div></div>"))+" "),_c('nuxt-link',{staticClass:"mt-8 px-6 py-3 text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20",attrs:{"to":"/"}},[_vm._v("\n      Go Home\n    ")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=8e71fec8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09169da0"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "75df3fea"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(47);

// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=2c571a94&
var defaultvue_type_template_id_2c571a94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-sourcesans text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 leading-6 transition-all"},[_c('navbar'),_vm._ssrNode(" "),_c('mobile-menu'),_vm._ssrNode(" "),_c('social-handles'),_vm._ssrNode(" "),_c('email-handle'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_2c571a94_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=2c571a94&

// EXTERNAL MODULE: ./components/Navigation/Navbar.vue + 4 modules
var Navbar = __webpack_require__(16);

// EXTERNAL MODULE: ./components/Navigation/MobileMenu.vue + 4 modules
var MobileMenu = __webpack_require__(21);

// EXTERNAL MODULE: ./components/Navigation/SocialHandles.vue + 4 modules
var SocialHandles = __webpack_require__(22);

// EXTERNAL MODULE: ./components/Navigation/EmailHandle.vue + 4 modules
var EmailHandle = __webpack_require__(23);

// EXTERNAL MODULE: ./components/Sections/Footer.vue + 4 modules
var Footer = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
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





/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["default"],
    MobileMenu: MobileMenu["default"],
    SocialHandles: SocialHandles["default"],
    EmailHandle: EmailHandle["default"],
    Footer: Footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_2c571a94_render,
  defaultvue_type_template_id_2c571a94_staticRenderFns,
  false,
  null,
  null,
  "eff8c54e"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(53), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: ./components/Controls/MenuToggle.vue + 4 modules
var MenuToggle = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Controls/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Icons/Dark.vue + 4 modules
var Dark = __webpack_require__(19);

// EXTERNAL MODULE: ./components/Icons/Envelope.vue + 4 modules
var Envelope = __webpack_require__(25);

// EXTERNAL MODULE: ./components/Icons/ExternalLink.vue + 4 modules
var ExternalLink = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Icons/Facebook.vue + 4 modules
var Facebook = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Icons/Light.vue + 4 modules
var Light = __webpack_require__(20);

// EXTERNAL MODULE: ./components/Icons/LinkedIn.vue + 4 modules
var LinkedIn = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Icons/Logo.vue + 4 modules
var Logo = __webpack_require__(17);

// EXTERNAL MODULE: ./components/Icons/Medium.vue + 4 modules
var Medium = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icons/Times.vue + 4 modules
var Times = __webpack_require__(26);

// EXTERNAL MODULE: ./components/Icons/Twitter.vue + 4 modules
var Twitter = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Icons/YouTube.vue + 4 modules
var YouTube = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Navigation/NavMenu.vue + 4 modules
var NavMenu = __webpack_require__(18);

// EXTERNAL MODULE: ./components/Sections/About.vue + 4 modules
var About = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Sections/Contact.vue + 3 modules
var Contact = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Sections/Experience.vue + 4 modules
var Experience = __webpack_require__(33);

// EXTERNAL MODULE: ./components/Sections/Header.vue + 4 modules
var Header = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Sections/Project.vue + 4 modules
var Project = __webpack_require__(35);

// EXTERNAL MODULE: ./components/Sections/Skill.vue + 4 modules
var Skill = __webpack_require__(36);

// EXTERNAL MODULE: ./components/Widgets/Modal.vue + 4 modules
var Modal = __webpack_require__(37);

// CONCATENATED MODULE: ./.nuxt/components/index.js



























const LazyControlsMenuToggle = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 5)).then(c => wrapFunctional(c.default || c));
const LazyControlsThemeToggle = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 6)).then(c => wrapFunctional(c.default || c));
const LazyIconsDark = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19)).then(c => wrapFunctional(c.default || c));
const LazyIconsEnvelope = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 25)).then(c => wrapFunctional(c.default || c));
const LazyIconsExternalLink = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const LazyIconsFacebook = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c));
const LazyIconsGitHub = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 4)).then(c => wrapFunctional(c.default || c));
const LazyIconsLight = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)).then(c => wrapFunctional(c.default || c));
const LazyIconsLinkedIn = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const LazyIconsLogo = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)).then(c => wrapFunctional(c.default || c));
const LazyIconsMedium = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9)).then(c => wrapFunctional(c.default || c));
const LazyIconsTimes = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26)).then(c => wrapFunctional(c.default || c));
const LazyIconsTwitter = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 10)).then(c => wrapFunctional(c.default || c));
const LazyIconsYouTube = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c));
const LazyNavigationEmailHandle = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c));
const LazyNavigationMobileMenu = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)).then(c => wrapFunctional(c.default || c));
const LazyNavigationNavMenu = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18)).then(c => wrapFunctional(c.default || c));
const LazyNavigationNavbar = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c));
const LazyNavigationSocialHandles = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22)).then(c => wrapFunctional(c.default || c));
const LazySectionsAbout = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const LazySectionsContact = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38)).then(c => wrapFunctional(c.default || c));
const LazySectionsExperience = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)).then(c => wrapFunctional(c.default || c));
const LazySectionsFooter = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c));
const LazySectionsHeader = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)).then(c => wrapFunctional(c.default || c));
const LazySectionsProject = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)).then(c => wrapFunctional(c.default || c));
const LazySectionsSkill = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c));
const LazyWidgetsModal = Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  ControlsMenuToggle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 5)).then(c => wrapFunctional(c.default || c)),
  ControlsThemeToggle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 6)).then(c => wrapFunctional(c.default || c)),
  IconsDark: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19)).then(c => wrapFunctional(c.default || c)),
  IconsEnvelope: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 25)).then(c => wrapFunctional(c.default || c)),
  IconsExternalLink: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c)),
  IconsFacebook: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c)),
  IconsGitHub: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 4)).then(c => wrapFunctional(c.default || c)),
  IconsLight: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)).then(c => wrapFunctional(c.default || c)),
  IconsLinkedIn: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c)),
  IconsLogo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)).then(c => wrapFunctional(c.default || c)),
  IconsMedium: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9)).then(c => wrapFunctional(c.default || c)),
  IconsTimes: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26)).then(c => wrapFunctional(c.default || c)),
  IconsTwitter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 10)).then(c => wrapFunctional(c.default || c)),
  IconsYouTube: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c)),
  NavigationEmailHandle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c)),
  NavigationMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)).then(c => wrapFunctional(c.default || c)),
  NavigationNavMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18)).then(c => wrapFunctional(c.default || c)),
  NavigationNavbar: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c)),
  NavigationSocialHandles: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22)).then(c => wrapFunctional(c.default || c)),
  SectionsAbout: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c)),
  SectionsContact: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38)).then(c => wrapFunctional(c.default || c)),
  SectionsExperience: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)).then(c => wrapFunctional(c.default || c)),
  SectionsFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c)),
  SectionsHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)).then(c => wrapFunctional(c.default || c)),
  SectionsProject: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)).then(c => wrapFunctional(c.default || c)),
  SectionsSkill: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c)),
  WidgetsModal: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(28);

// EXTERNAL MODULE: external "property-information"
var external_property_information_ = __webpack_require__(31);
var external_property_information_default = /*#__PURE__*/__webpack_require__.n(external_property_information_);

// CONCATENATED MODULE: ./.nuxt/content/nuxt-content.js

const rootKeys = ['class-name', 'class', 'style'];
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ['select', 'textarea', 'input'];

function evalInContext(code, context) {
  return new Function("with(this) { return (" + code + ") }").call(context);
}

function propsToData(node, doc) {
  const {
    tag,
    props
  } = node;
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = external_property_information_default.a.find(external_property_information_default.a.html, key);
    const native = nativeInputs.includes(tag);

    if (rxModel.test(key) && value in doc && !native) {
      const mods = key.replace(rxModel, '').split('.').filter(d => d).reduce((d, k) => (d[k] = true, d), {}); // As of yet we don't resolve custom v-model field/event names from components

      const field = 'value';
      const event = mods.lazy ? 'change' : 'input';
      const processor = mods.number ? d => +d : mods.trim ? d => d.trim() : d => d;
      obj[field] = evalInContext(value, doc);
      data.on = data.on || {};

      data.on[event] = e => doc[value] = processor(e);
    } else if (key === 'v-bind') {
      const val = value in doc ? doc[value] : evalInContext(value, doc);
      obj = Object.assign(obj, val);
    } else if (rxOn.test(key)) {
      key = key.replace(rxOn, '');
      data.on = data.on || {};
      data.on[key] = evalInContext(value, doc);
    } else if (rxBind.test(key)) {
      key = key.replace(rxBind, '');
      obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node || {}, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      continue;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ var nuxt_content = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});
// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content.name, nuxt_content);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(42);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./google-analytics.js (mode: 'client')

 // Source: ./content/plugin.client.js (mode: 'client')

 // Source: ./content/plugin.server.js (mode: 'server')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Freyam Mehta",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "A highly resourceful Student Developer studying Computer Science at IIIT Hyderabad."
      }, {
        "hid": "msapplication-TileColor",
        "name": "msapplication-TileColor",
        "content": "#2b5797"
      }, {
        "hid": "msapplication-config",
        "name": "msapplication-config",
        "content": "\u002Ficons\u002Fbrowserconfig.xml"
      }, {
        "name": "theme-color",
        "content": "#406bc7"
      }],
      "link": [{
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.gstatic.com"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Source+Code+Pro&display=swap"
      }, {
        "rel": "shortcut icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "\u002Ficons\u002Fapple-touch-icon.png"
      }, {
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "32x32",
        "href": "\u002Ficons\u002Ffavicon-32x32.png"
      }, {
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "16x16",
        "href": "\u002Ficons\u002Ffavicon-16x16.png"
      }, {
        "rel": "mask-icon",
        "color": "#5bbad5",
        "href": "\u002Ficons\u002Fsafari-pinned-tab.svg"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state; // Stop recording store mutations

      ssrContext.unsetMutationObserver();
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Record store mutations for full-static after nuxtServerInit and Middleware


  ssrContext.nuxt.mutations = [];
  ssrContext.unsetMutationObserver = store.subscribe(m => {
    ssrContext.nuxt.mutations.push([m.type, m.payload]);
  });
  /*
  ** Set layout
  */

  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map