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
/******/ 			var chunk = require("./" + ({"1":"components/icons-external-link","2":"components/icons-times","3":"components/sections-about","4":"components/sections-contact","5":"components/sections-experience","6":"components/sections-header","7":"components/sections-project","8":"components/sections-skill","9":"components/widgets-modal","10":"pages/index"}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/GitHub.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_GitHubvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03fc8fe8"
  
)

/* harmony default export */ var GitHub = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),
/* 6 */
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
/* 7 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Controls/MenuToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_MenuTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51bc7f6c"
  
)

/* harmony default export */ var MenuToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
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
var Dark = __webpack_require__(26);

// EXTERNAL MODULE: ./components/Icons/Light.vue + 4 modules
var Light = __webpack_require__(27);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Controls/ThemeToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_ThemeTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2831d1f4"
  
)

/* harmony default export */ var ThemeToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Facebook.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Facebookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "434bbe2b"
  
)

/* harmony default export */ var Facebook = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/LinkedIn.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_LinkedInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b2276fa"
  
)

/* harmony default export */ var LinkedIn = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Medium.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Mediumvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e4d5acc"
  
)

/* harmony default export */ var Medium = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Twitter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Twittervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "92610bc4"
  
)

/* harmony default export */ var Twitter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/YouTube.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_YouTubevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "231b86ee"
  
)

/* harmony default export */ var YouTube = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Freyam Mehta\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Freyam Mehta\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"A highly passionate Student Developer studying Computer Science at IIIT Hyderabad.\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#406bc7\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Freyam Mehta\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Freyam Mehta\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"A highly passionate Student Developer studying Computer Science at IIIT Hyderabad.\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/icons/android-chrome-192x192.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/icons/android-chrome-384x384.png\",\"sizes\":\"384x384\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.c38410ed.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/Navbar.vue?vue&type=template&id=492288d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:"navbar",staticClass:"px-8 py-4 flex items-center justify-between fixed top-0 w-full bg-blur bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 transition-all duration-300 z-20"},[_c('logo'),_vm._ssrNode(" "),_c('nav-menu'),_vm._ssrNode(" "),_c('menu-toggle'),_vm._ssrNode(" "),_c('theme-toggle',{staticClass:"hidden md:block"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/Navbar.vue?vue&type=template&id=492288d9&

// EXTERNAL MODULE: ./components/Icons/Logo.vue + 4 modules
var Logo = __webpack_require__(24);

// EXTERNAL MODULE: ./components/Controls/MenuToggle.vue + 4 modules
var MenuToggle = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Navigation/NavMenu.vue + 4 modules
var NavMenu = __webpack_require__(25);

// EXTERNAL MODULE: ./components/Controls/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(8);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40a94fcb"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Logo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d00245e0"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/NavMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_NavMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f9555f7"
  
)

/* harmony default export */ var NavMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Dark.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f229ad4a"
  
)

/* harmony default export */ var Dark = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Light.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f44f7fe"
  
)

/* harmony default export */ var Light = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
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
var MenuToggle = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Controls/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(8);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/MobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_MobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "701c1a48"
  
)

/* harmony default export */ var MobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/SocialHandles.vue?vue&type=template&id=ed132c50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hidden text-gray-500 dark:text-gray-400 lg:block fixed left-8 bottom-0 z-10"},[_vm._ssrNode("<ul class=\"p-4\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://github.com/freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://twitter.com/fre7am\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('twitter',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/freyam-mehta/\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('linked-in',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/freyam.mehta.5\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('facebook',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://medium.com/@freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('medium',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.youtube.com/channel/UCVLGcsaluzmK-4-ZL4DnPuw\" target=\"_blank\" rel=\"noreferrer\" class=\"mb-2 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('you-tube',{staticClass:"h-2/3 w-2/3"})],1)])],2),_vm._ssrNode(" <div class=\"mx-auto h-24 w-px bg-gray-400 dark:bg-gray-500\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation/SocialHandles.vue?vue&type=template&id=ed132c50&

// EXTERNAL MODULE: ./components/Icons/Facebook.vue + 4 modules
var Facebook = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Icons/LinkedIn.vue + 4 modules
var LinkedIn = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Icons/Medium.vue + 4 modules
var Medium = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Icons/Twitter.vue + 4 modules
var Twitter = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Icons/YouTube.vue + 4 modules
var YouTube = __webpack_require__(13);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/SocialHandles.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_SocialHandlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1be10033"
  
)

/* harmony default export */ var SocialHandles = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/EmailHandle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_EmailHandlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27b05639"
  
)

/* harmony default export */ var EmailHandle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Footer.vue?vue&type=template&id=5fe5ebc3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container mx-auto py-4\">","</div>",[_vm._ssrNode("<ul class=\"mx-auto p-4 max-w-sm lg:hidden flex items-center justify-between text-gray-500 dark:text-gray-400\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"mailto:frey77mehta@gmail.com\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('envelope',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://github.com/freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('git-hub',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://twitter.com/fre7am\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('twitter',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/freyam-mehta/\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('linked-in',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/freyam.mehta.5\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('facebook',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://medium.com/@freyam\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('medium',{staticClass:"h-2/3 w-2/3"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.youtube.com/channel/UCVLGcsaluzmK-4-ZL4DnPuw\" target=\"_blank\" rel=\"noreferrer\" class=\"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1\">","</a>",[_c('you-tube',{staticClass:"h-2/3 w-2/3"})],1)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Footer.vue?vue&type=template&id=5fe5ebc3&

// EXTERNAL MODULE: ./components/Icons/Envelope.vue + 4 modules
var Envelope = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Icons/Facebook.vue + 4 modules
var Facebook = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icons/GitHub.vue + 4 modules
var GitHub = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Icons/LinkedIn.vue + 4 modules
var LinkedIn = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Icons/Medium.vue + 4 modules
var Medium = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Icons/Twitter.vue + 4 modules
var Twitter = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Icons/YouTube.vue + 4 modules
var YouTube = __webpack_require__(13);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9978e508"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Envelope.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Envelopevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0652c396"
  
)

/* harmony default export */ var Envelope = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(44);


/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("54b08540", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.9 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(226, 232, 240, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.pointer-events-none{\n  pointer-events:none;\n}\n\n.visible{\n  visibility:visible;\n}\n\n.invisible{\n  visibility:hidden;\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.sticky{\n  position:sticky;\n}\n\n.inset-0{\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.top-4{\n  top:1rem;\n}\n\n.top-full{\n  top:100%;\n}\n\n.right-0{\n  right:0px;\n}\n\n.right-8{\n  right:2rem;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n.left-8{\n  left:2rem;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.z-20{\n  z-index:20;\n}\n\n.z-30{\n  z-index:30;\n}\n\n.m-1{\n  margin:0.25rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-2{\n  margin-top:0.5rem;\n  margin-bottom:0.5rem;\n}\n\n.-my-0{\n  margin-top:0px;\n  margin-bottom:0px;\n}\n\n.-my-0\\.5{\n  margin-top:-0.125rem;\n  margin-bottom:-0.125rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.mb-10{\n  margin-bottom:2.5rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.ml-6{\n  margin-left:1.5rem;\n}\n\n.ml-auto{\n  margin-left:auto;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-0{\n  height:0px;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-10{\n  height:2.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-14{\n  height:3.5rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.h-60{\n  height:15rem;\n}\n\n.h-72{\n  height:18rem;\n}\n\n.h-80{\n  height:20rem;\n}\n\n.h-px{\n  height:1px;\n}\n\n.h-0\\.5{\n  height:0.125rem;\n}\n\n.h-2\\/3{\n  height:66.666667%;\n}\n\n.h-full{\n  height:100%;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-2{\n  width:0.5rem;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.w-10{\n  width:2.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-14{\n  width:3.5rem;\n}\n\n.w-56{\n  width:14rem;\n}\n\n.w-64{\n  width:16rem;\n}\n\n.w-px{\n  width:1px;\n}\n\n.w-2\\/3{\n  width:66.666667%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n.max-w-md{\n  max-width:28rem;\n}\n\n.max-w-lg{\n  max-width:32rem;\n}\n\n.max-w-3xl{\n  max-width:48rem;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n.max-w-6xl{\n  max-width:72rem;\n}\n\n.max-w-max{\n  max-width:-webkit-max-content;\n  max-width:-moz-max-content;\n  max-width:max-content;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-0{\n  --tw-translate-x:0px;\n}\n\n.translate-x-56{\n  --tw-translate-x:14rem;\n}\n\n.hover\\:-translate-y-1:hover{\n  --tw-translate-y:-0.25rem;\n}\n\n.focus\\:-translate-y-1:focus{\n  --tw-translate-y:-0.25rem;\n}\n\n.rotate-45{\n  --tw-rotate:45deg;\n}\n\n.-rotate-45{\n  --tw-rotate:-45deg;\n}\n\n.scale-90{\n  --tw-scale-x:.9;\n  --tw-scale-y:.9;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.list-disc{\n  list-style-type:disc;\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.place-items-center{\n  place-items:center;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-start{\n  justify-content:flex-start;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-x-auto{\n  overflow-x:auto;\n}\n\n.overflow-y-auto{\n  overflow-y:auto;\n}\n\n.overflow-x-hidden{\n  overflow-x:hidden;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-xl{\n  border-radius:0.75rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(203, 213, 225, var(--tw-border-opacity));\n}\n\n.border-blue-500{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.focus\\:border-blue-500:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-600{\n  --tw-border-opacity:1;\n  border-color:rgba(71, 85, 105, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-700{\n  --tw-border-opacity:1;\n  border-color:rgba(51, 65, 85, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-cyan-400{\n  --tw-border-opacity:1;\n  border-color:rgba(34, 211, 238, var(--tw-border-opacity));\n}\n\n.dark .dark\\:focus\\:border-cyan-400:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(34, 211, 238, var(--tw-border-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(203, 213, 225, var(--tw-bg-opacity));\n}\n\n.bg-gray-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(148, 163, 184, var(--tw-bg-opacity));\n}\n\n.bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n\n.bg-blue-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.bg-blue-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 58, 138, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-500:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-gray-100:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-blue-100:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-blue-500:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(100, 116, 139, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(71, 85, 105, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-cyan-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-gray-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-gray-800:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-cyan-400:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-gray-700:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-gray-800:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-cyan-400:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.bg-opacity-50{\n  --tw-bg-opacity:0.5;\n}\n\n.bg-opacity-80{\n  --tw-bg-opacity:0.8;\n}\n\n.bg-opacity-90{\n  --tw-bg-opacity:0.9;\n}\n\n.hover\\:bg-opacity-0:hover{\n  --tw-bg-opacity:0;\n}\n\n.hover\\:bg-opacity-20:hover{\n  --tw-bg-opacity:0.2;\n}\n\n.focus\\:bg-opacity-20:focus{\n  --tw-bg-opacity:0.2;\n}\n\n.dark .dark\\:bg-opacity-50{\n  --tw-bg-opacity:0.5;\n}\n\n.dark .dark\\:bg-opacity-80{\n  --tw-bg-opacity:0.8;\n}\n\n.dark .dark\\:bg-opacity-90{\n  --tw-bg-opacity:0.9;\n}\n\n.dark .dark\\:hover\\:bg-opacity-0:hover{\n  --tw-bg-opacity:0;\n}\n\n.dark .dark\\:hover\\:bg-opacity-20:hover{\n  --tw-bg-opacity:0.2;\n}\n\n.dark .dark\\:focus\\:bg-opacity-20:focus{\n  --tw-bg-opacity:0.2;\n}\n\n.object-contain{\n  -o-object-fit:contain;\n     object-fit:contain;\n}\n\n.object-cover{\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.p-8{\n  padding:2rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.font-sourcesans{\n  font-family:\"Source Sans Pro\", sans-serif;\n}\n\n.font-sourcecode{\n  font-family:\"Source Code Pro\", monospace;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-6xl{\n  font-size:3.75rem;\n  line-height:1;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-6{\n  line-height:1.5rem;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em;\n}\n\n.tracking-wider{\n  letter-spacing:0.05em;\n}\n\n.text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(226, 232, 240, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(148, 163, 184, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(100, 116, 139, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(71, 85, 105, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(30, 41, 59, var(--tw-text-opacity));\n}\n\n.text-blue-400{\n  --tw-text-opacity:1;\n  color:rgba(96, 165, 250, var(--tw-text-opacity));\n}\n\n.text-blue-500{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.text-cyan-500{\n  --tw-text-opacity:1;\n  color:rgba(6, 182, 212, var(--tw-text-opacity));\n}\n\n.hover\\:text-blue-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.focus\\:text-blue-500:focus{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(226, 232, 240, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(148, 163, 184, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-cyan-400{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.dark .dark\\:hover\\:text-cyan-400:hover{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.dark .dark\\:focus\\:text-cyan-400:focus{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.transition-all{\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:top-1\\/2{\n    top:50%;\n  }\n\n  .md\\:bottom-auto{\n    bottom:auto;\n  }\n\n  .md\\:left-1\\/2{\n    left:50%;\n  }\n\n  .md\\:m-2{\n    margin:0.5rem;\n  }\n\n  .md\\:mt-4{\n    margin-top:1rem;\n  }\n\n  .md\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .md\\:mb-4{\n    margin-bottom:1rem;\n  }\n\n  .md\\:mb-10{\n    margin-bottom:2.5rem;\n  }\n\n  .md\\:mb-16{\n    margin-bottom:4rem;\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:grid{\n    display:grid;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:h-80{\n    height:20rem;\n  }\n\n  .md\\:max-h-96{\n    max-height:24rem;\n  }\n\n  .md\\:transform{\n    --tw-translate-x:0;\n    --tw-translate-y:0;\n    --tw-rotate:0;\n    --tw-skew-x:0;\n    --tw-skew-y:0;\n    --tw-scale-x:1;\n    --tw-scale-y:1;\n    transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .md\\:-translate-x-1\\/2{\n    --tw-translate-x:-50%;\n  }\n\n  .md\\:-translate-y-1\\/2{\n    --tw-translate-y:-50%;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-8{\n    gap:2rem;\n  }\n\n  .md\\:overflow-visible{\n    overflow:visible;\n  }\n\n  .md\\:rounded-xl{\n    border-radius:0.75rem;\n  }\n\n  .md\\:border-b-0{\n    border-bottom-width:0px;\n  }\n\n  .md\\:border-l-2{\n    border-left-width:2px;\n  }\n\n  .md\\:p-6{\n    padding:1.5rem;\n  }\n\n  .md\\:px-4{\n    padding-left:1rem;\n    padding-right:1rem;\n  }\n\n  .md\\:px-12{\n    padding-left:3rem;\n    padding-right:3rem;\n  }\n\n  .md\\:px-20{\n    padding-left:5rem;\n    padding-right:5rem;\n  }\n\n  .md\\:py-0{\n    padding-top:0px;\n    padding-bottom:0px;\n  }\n\n  .md\\:py-2{\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n  }\n\n  .md\\:py-10{\n    padding-top:2.5rem;\n    padding-bottom:2.5rem;\n  }\n\n  .md\\:pb-8{\n    padding-bottom:2rem;\n  }\n\n  .md\\:text-base{\n    font-size:1rem;\n    line-height:1.5rem;\n  }\n\n  .md\\:text-2xl{\n    font-size:1.5rem;\n    line-height:2rem;\n  }\n\n  .md\\:text-3xl{\n    font-size:1.875rem;\n    line-height:2.25rem;\n  }\n\n  .md\\:text-4xl{\n    font-size:2.25rem;\n    line-height:2.5rem;\n  }\n\n  .md\\:text-6xl{\n    font-size:3.75rem;\n    line-height:1;\n  }\n\n  .md\\:text-7xl{\n    font-size:4.5rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:relative{\n    position:relative;\n  }\n\n  .lg\\:mt-0{\n    margin-top:0px;\n  }\n\n  .lg\\:-mr-0{\n    margin-right:0px;\n  }\n\n  .lg\\:-mr-12{\n    margin-right:-3rem;\n  }\n\n  .lg\\:mb-10{\n    margin-bottom:2.5rem;\n  }\n\n  .lg\\:-ml-0{\n    margin-left:0px;\n  }\n\n  .lg\\:-ml-12{\n    margin-left:-3rem;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:flex{\n    display:flex;\n  }\n\n  .lg\\:grid{\n    display:grid;\n  }\n\n  .lg\\:hidden{\n    display:none;\n  }\n\n  .lg\\:w-72{\n    width:18rem;\n  }\n\n  .lg\\:max-w-xl{\n    max-width:36rem;\n  }\n\n  .lg\\:max-w-full{\n    max-width:100%;\n  }\n\n  .lg\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:items-center{\n    align-items:center;\n  }\n\n  .lg\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .lg\\:bg-transparent{\n    background-color:transparent;\n  }\n\n  .lg\\:bg-gray-100{\n    --tw-bg-opacity:1;\n    background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n  }\n\n  .dark .lg\\:dark\\:bg-transparent{\n    background-color:transparent;\n  }\n\n  .dark .lg\\:dark\\:bg-gray-800{\n    --tw-bg-opacity:1;\n    background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n  }\n\n  .lg\\:p-0{\n    padding:0px;\n  }\n\n  .lg\\:p-4{\n    padding:1rem;\n  }\n\n  .lg\\:text-8xl{\n    font-size:6rem;\n    line-height:1;\n  }\n\n  .lg\\:text-gray-500{\n    --tw-text-opacity:1;\n    color:rgba(100, 116, 139, var(--tw-text-opacity));\n  }\n\n  .lg\\:text-gray-900{\n    --tw-text-opacity:1;\n    color:rgba(15, 23, 42, var(--tw-text-opacity));\n  }\n\n  .dark .lg\\:dark\\:text-gray-200{\n    --tw-text-opacity:1;\n    color:rgba(226, 232, 240, var(--tw-text-opacity));\n  }\n\n  .dark .lg\\:dark\\:text-gray-400{\n    --tw-text-opacity:1;\n    color:rgba(148, 163, 184, var(--tw-text-opacity));\n  }\n\n  .lg\\:shadow-xl{\n    --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("6f04248c", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.9 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #94a3b8;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(226, 232, 240, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.pointer-events-none{\n  pointer-events:none;\n}\n\n.visible{\n  visibility:visible;\n}\n\n.invisible{\n  visibility:hidden;\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.sticky{\n  position:sticky;\n}\n\n.inset-0{\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.top-4{\n  top:1rem;\n}\n\n.top-full{\n  top:100%;\n}\n\n.right-0{\n  right:0px;\n}\n\n.right-8{\n  right:2rem;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n.left-8{\n  left:2rem;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.z-20{\n  z-index:20;\n}\n\n.z-30{\n  z-index:30;\n}\n\n.m-1{\n  margin:0.25rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-2{\n  margin-top:0.5rem;\n  margin-bottom:0.5rem;\n}\n\n.-my-0{\n  margin-top:0px;\n  margin-bottom:0px;\n}\n\n.-my-0\\.5{\n  margin-top:-0.125rem;\n  margin-bottom:-0.125rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.mb-10{\n  margin-bottom:2.5rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.ml-6{\n  margin-left:1.5rem;\n}\n\n.ml-auto{\n  margin-left:auto;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-0{\n  height:0px;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-10{\n  height:2.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-14{\n  height:3.5rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.h-60{\n  height:15rem;\n}\n\n.h-72{\n  height:18rem;\n}\n\n.h-80{\n  height:20rem;\n}\n\n.h-px{\n  height:1px;\n}\n\n.h-0\\.5{\n  height:0.125rem;\n}\n\n.h-2\\/3{\n  height:66.666667%;\n}\n\n.h-full{\n  height:100%;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-2{\n  width:0.5rem;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.w-10{\n  width:2.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-14{\n  width:3.5rem;\n}\n\n.w-56{\n  width:14rem;\n}\n\n.w-64{\n  width:16rem;\n}\n\n.w-px{\n  width:1px;\n}\n\n.w-2\\/3{\n  width:66.666667%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n.max-w-md{\n  max-width:28rem;\n}\n\n.max-w-lg{\n  max-width:32rem;\n}\n\n.max-w-3xl{\n  max-width:48rem;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n.max-w-6xl{\n  max-width:72rem;\n}\n\n.max-w-max{\n  max-width:-webkit-max-content;\n  max-width:-moz-max-content;\n  max-width:max-content;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-0{\n  --tw-translate-x:0px;\n}\n\n.translate-x-56{\n  --tw-translate-x:14rem;\n}\n\n.hover\\:-translate-y-1:hover{\n  --tw-translate-y:-0.25rem;\n}\n\n.focus\\:-translate-y-1:focus{\n  --tw-translate-y:-0.25rem;\n}\n\n.rotate-45{\n  --tw-rotate:45deg;\n}\n\n.-rotate-45{\n  --tw-rotate:-45deg;\n}\n\n.scale-90{\n  --tw-scale-x:.9;\n  --tw-scale-y:.9;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.list-disc{\n  list-style-type:disc;\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.place-items-center{\n  place-items:center;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-start{\n  justify-content:flex-start;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-x-auto{\n  overflow-x:auto;\n}\n\n.overflow-y-auto{\n  overflow-y:auto;\n}\n\n.overflow-x-hidden{\n  overflow-x:hidden;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-xl{\n  border-radius:0.75rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(203, 213, 225, var(--tw-border-opacity));\n}\n\n.border-blue-500{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.focus\\:border-blue-500:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-600{\n  --tw-border-opacity:1;\n  border-color:rgba(71, 85, 105, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-700{\n  --tw-border-opacity:1;\n  border-color:rgba(51, 65, 85, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-cyan-400{\n  --tw-border-opacity:1;\n  border-color:rgba(34, 211, 238, var(--tw-border-opacity));\n}\n\n.dark .dark\\:focus\\:border-cyan-400:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(34, 211, 238, var(--tw-border-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(203, 213, 225, var(--tw-bg-opacity));\n}\n\n.bg-gray-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(148, 163, 184, var(--tw-bg-opacity));\n}\n\n.bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n\n.bg-blue-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.bg-blue-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 58, 138, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-500:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-gray-100:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-blue-100:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-blue-500:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(100, 116, 139, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(71, 85, 105, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(15, 23, 42, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-cyan-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-gray-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-gray-800:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:hover\\:bg-cyan-400:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-gray-700:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(51, 65, 85, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-gray-800:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:focus\\:bg-cyan-400:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n\n.bg-opacity-50{\n  --tw-bg-opacity:0.5;\n}\n\n.bg-opacity-80{\n  --tw-bg-opacity:0.8;\n}\n\n.bg-opacity-90{\n  --tw-bg-opacity:0.9;\n}\n\n.hover\\:bg-opacity-0:hover{\n  --tw-bg-opacity:0;\n}\n\n.hover\\:bg-opacity-20:hover{\n  --tw-bg-opacity:0.2;\n}\n\n.focus\\:bg-opacity-20:focus{\n  --tw-bg-opacity:0.2;\n}\n\n.dark .dark\\:bg-opacity-50{\n  --tw-bg-opacity:0.5;\n}\n\n.dark .dark\\:bg-opacity-80{\n  --tw-bg-opacity:0.8;\n}\n\n.dark .dark\\:bg-opacity-90{\n  --tw-bg-opacity:0.9;\n}\n\n.dark .dark\\:hover\\:bg-opacity-0:hover{\n  --tw-bg-opacity:0;\n}\n\n.dark .dark\\:hover\\:bg-opacity-20:hover{\n  --tw-bg-opacity:0.2;\n}\n\n.dark .dark\\:focus\\:bg-opacity-20:focus{\n  --tw-bg-opacity:0.2;\n}\n\n.object-contain{\n  -o-object-fit:contain;\n     object-fit:contain;\n}\n\n.object-cover{\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.p-8{\n  padding:2rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.font-sourcesans{\n  font-family:\"Source Sans Pro\", sans-serif;\n}\n\n.font-sourcecode{\n  font-family:\"Source Code Pro\", monospace;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-6xl{\n  font-size:3.75rem;\n  line-height:1;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-6{\n  line-height:1.5rem;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em;\n}\n\n.tracking-wider{\n  letter-spacing:0.05em;\n}\n\n.text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(226, 232, 240, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(148, 163, 184, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(100, 116, 139, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(71, 85, 105, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(30, 41, 59, var(--tw-text-opacity));\n}\n\n.text-blue-400{\n  --tw-text-opacity:1;\n  color:rgba(96, 165, 250, var(--tw-text-opacity));\n}\n\n.text-blue-500{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.text-cyan-500{\n  --tw-text-opacity:1;\n  color:rgba(6, 182, 212, var(--tw-text-opacity));\n}\n\n.hover\\:text-blue-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.focus\\:text-blue-500:focus{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(226, 232, 240, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(148, 163, 184, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-cyan-400{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.dark .dark\\:hover\\:text-cyan-400:hover{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.dark .dark\\:focus\\:text-cyan-400:focus{\n  --tw-text-opacity:1;\n  color:rgba(34, 211, 238, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.transition-all{\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n.bg-blur{\n  -webkit-backdrop-filter:blur(4px);\n          backdrop-filter:blur(4px)\n}\n\n.writing-v-lr{\n  -ms-writing-mode:tb-lr;\n      writing-mode:vertical-lr\n}\n\nhtml{\n  scroll-behavior:smooth\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:top-1\\/2{\n    top:50%;\n  }\n\n  .md\\:bottom-auto{\n    bottom:auto;\n  }\n\n  .md\\:left-1\\/2{\n    left:50%;\n  }\n\n  .md\\:m-2{\n    margin:0.5rem;\n  }\n\n  .md\\:mt-4{\n    margin-top:1rem;\n  }\n\n  .md\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .md\\:mb-4{\n    margin-bottom:1rem;\n  }\n\n  .md\\:mb-10{\n    margin-bottom:2.5rem;\n  }\n\n  .md\\:mb-16{\n    margin-bottom:4rem;\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:grid{\n    display:grid;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:h-80{\n    height:20rem;\n  }\n\n  .md\\:max-h-96{\n    max-height:24rem;\n  }\n\n  .md\\:transform{\n    --tw-translate-x:0;\n    --tw-translate-y:0;\n    --tw-rotate:0;\n    --tw-skew-x:0;\n    --tw-skew-y:0;\n    --tw-scale-x:1;\n    --tw-scale-y:1;\n    transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .md\\:-translate-x-1\\/2{\n    --tw-translate-x:-50%;\n  }\n\n  .md\\:-translate-y-1\\/2{\n    --tw-translate-y:-50%;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-8{\n    gap:2rem;\n  }\n\n  .md\\:overflow-visible{\n    overflow:visible;\n  }\n\n  .md\\:rounded-xl{\n    border-radius:0.75rem;\n  }\n\n  .md\\:border-b-0{\n    border-bottom-width:0px;\n  }\n\n  .md\\:border-l-2{\n    border-left-width:2px;\n  }\n\n  .md\\:p-6{\n    padding:1.5rem;\n  }\n\n  .md\\:px-4{\n    padding-left:1rem;\n    padding-right:1rem;\n  }\n\n  .md\\:px-12{\n    padding-left:3rem;\n    padding-right:3rem;\n  }\n\n  .md\\:px-20{\n    padding-left:5rem;\n    padding-right:5rem;\n  }\n\n  .md\\:py-0{\n    padding-top:0px;\n    padding-bottom:0px;\n  }\n\n  .md\\:py-2{\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n  }\n\n  .md\\:py-10{\n    padding-top:2.5rem;\n    padding-bottom:2.5rem;\n  }\n\n  .md\\:pb-8{\n    padding-bottom:2rem;\n  }\n\n  .md\\:text-base{\n    font-size:1rem;\n    line-height:1.5rem;\n  }\n\n  .md\\:text-2xl{\n    font-size:1.5rem;\n    line-height:2rem;\n  }\n\n  .md\\:text-3xl{\n    font-size:1.875rem;\n    line-height:2.25rem;\n  }\n\n  .md\\:text-4xl{\n    font-size:2.25rem;\n    line-height:2.5rem;\n  }\n\n  .md\\:text-6xl{\n    font-size:3.75rem;\n    line-height:1;\n  }\n\n  .md\\:text-7xl{\n    font-size:4.5rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:relative{\n    position:relative;\n  }\n\n  .lg\\:mt-0{\n    margin-top:0px;\n  }\n\n  .lg\\:-mr-0{\n    margin-right:0px;\n  }\n\n  .lg\\:-mr-12{\n    margin-right:-3rem;\n  }\n\n  .lg\\:mb-10{\n    margin-bottom:2.5rem;\n  }\n\n  .lg\\:-ml-0{\n    margin-left:0px;\n  }\n\n  .lg\\:-ml-12{\n    margin-left:-3rem;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:flex{\n    display:flex;\n  }\n\n  .lg\\:grid{\n    display:grid;\n  }\n\n  .lg\\:hidden{\n    display:none;\n  }\n\n  .lg\\:w-72{\n    width:18rem;\n  }\n\n  .lg\\:max-w-xl{\n    max-width:36rem;\n  }\n\n  .lg\\:max-w-full{\n    max-width:100%;\n  }\n\n  .lg\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:items-center{\n    align-items:center;\n  }\n\n  .lg\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .lg\\:bg-transparent{\n    background-color:transparent;\n  }\n\n  .lg\\:bg-gray-100{\n    --tw-bg-opacity:1;\n    background-color:rgba(241, 245, 249, var(--tw-bg-opacity));\n  }\n\n  .dark .lg\\:dark\\:bg-transparent{\n    background-color:transparent;\n  }\n\n  .dark .lg\\:dark\\:bg-gray-800{\n    --tw-bg-opacity:1;\n    background-color:rgba(30, 41, 59, var(--tw-bg-opacity));\n  }\n\n  .lg\\:p-0{\n    padding:0px;\n  }\n\n  .lg\\:p-4{\n    padding:1rem;\n  }\n\n  .lg\\:text-8xl{\n    font-size:6rem;\n    line-height:1;\n  }\n\n  .lg\\:text-gray-500{\n    --tw-text-opacity:1;\n    color:rgba(100, 116, 139, var(--tw-text-opacity));\n  }\n\n  .lg\\:text-gray-900{\n    --tw-text-opacity:1;\n    color:rgba(15, 23, 42, var(--tw-text-opacity));\n  }\n\n  .dark .lg\\:dark\\:text-gray-200{\n    --tw-text-opacity:1;\n    color:rgba(226, 232, 240, var(--tw-text-opacity));\n  }\n\n  .dark .lg\\:dark\\:text-gray-400{\n    --tw-text-opacity:1;\n    color:rgba(148, 163, 184, var(--tw-text-opacity));\n  }\n\n  .lg\\:shadow-xl{\n    --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0d8b0c4d", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\ncode[class*=language-],pre[class*=language-]{\n  color:#000;\n  background:none;\n  text-shadow:0 1px #fff;\n  font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;\n  font-size:1em;\n  text-align:left;\n  white-space:pre;\n  word-spacing:normal;\n  word-break:normal;\n  word-wrap:normal;\n  line-height:1.5;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n  tab-size:4;\n  -webkit-hyphens:none;\n  -ms-hyphens:none;\n  hyphens:none\n}\n\ncode[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\n@media print{\n  code[class*=language-],pre[class*=language-]{\n    text-shadow:none\n  }\n}\n\npre[class*=language-]{\n  padding:1em;\n  margin:.5em 0;\n  overflow:auto\n}\n\n:not(pre)>code[class*=language-],pre[class*=language-]{\n  background:#f5f2f0\n}\n\n:not(pre)>code[class*=language-]{\n  padding:.1em;\n  border-radius:.3em;\n  white-space:normal\n}\n\n.token.cdata,.token.comment,.token.doctype,.token.prolog{\n  color:#708090\n}\n\n.token.punctuation{\n  color:#999\n}\n\n.token.namespace{\n  opacity:.7\n}\n\n.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{\n  color:#905\n}\n\n.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{\n  color:#690\n}\n\n.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{\n  color:#9a6e3a;\n  background:hsla(0,0%,100%,.5)\n}\n\n.token.atrule,.token.attr-value,.token.keyword{\n  color:#07a\n}\n\n.token.class-name,.token.function{\n  color:#dd4a68\n}\n\n.token.important,.token.regex,.token.variable{\n  color:#e90\n}\n\n.token.bold,.token.important{\n  font-weight:700\n}\n\n.token.italic{\n  font-style:italic\n}\n\n.token.entity{\n  cursor:help\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "ControlsMenuToggle", function() { return ControlsMenuToggle; });
__webpack_require__.d(components_namespaceObject, "ControlsThemeToggle", function() { return ControlsThemeToggle; });
__webpack_require__.d(components_namespaceObject, "IconsDark", function() { return IconsDark; });
__webpack_require__.d(components_namespaceObject, "IconsEnvelope", function() { return IconsEnvelope; });
__webpack_require__.d(components_namespaceObject, "IconsExternalLink", function() { return IconsExternalLink; });
__webpack_require__.d(components_namespaceObject, "IconsFacebook", function() { return IconsFacebook; });
__webpack_require__.d(components_namespaceObject, "IconsGitHub", function() { return IconsGitHub; });
__webpack_require__.d(components_namespaceObject, "IconsLight", function() { return IconsLight; });
__webpack_require__.d(components_namespaceObject, "IconsLinkedIn", function() { return IconsLinkedIn; });
__webpack_require__.d(components_namespaceObject, "IconsLogo", function() { return IconsLogo; });
__webpack_require__.d(components_namespaceObject, "IconsMedium", function() { return IconsMedium; });
__webpack_require__.d(components_namespaceObject, "IconsTimes", function() { return IconsTimes; });
__webpack_require__.d(components_namespaceObject, "IconsTwitter", function() { return IconsTwitter; });
__webpack_require__.d(components_namespaceObject, "IconsYouTube", function() { return IconsYouTube; });
__webpack_require__.d(components_namespaceObject, "NavigationEmailHandle", function() { return NavigationEmailHandle; });
__webpack_require__.d(components_namespaceObject, "NavigationMobileMenu", function() { return NavigationMobileMenu; });
__webpack_require__.d(components_namespaceObject, "NavigationNavMenu", function() { return NavigationNavMenu; });
__webpack_require__.d(components_namespaceObject, "NavigationNavbar", function() { return NavigationNavbar; });
__webpack_require__.d(components_namespaceObject, "NavigationSocialHandles", function() { return NavigationSocialHandles; });
__webpack_require__.d(components_namespaceObject, "SectionsAbout", function() { return SectionsAbout; });
__webpack_require__.d(components_namespaceObject, "SectionsContact", function() { return SectionsContact; });
__webpack_require__.d(components_namespaceObject, "SectionsExperience", function() { return SectionsExperience; });
__webpack_require__.d(components_namespaceObject, "SectionsFooter", function() { return SectionsFooter; });
__webpack_require__.d(components_namespaceObject, "SectionsHeader", function() { return SectionsHeader; });
__webpack_require__.d(components_namespaceObject, "SectionsProject", function() { return SectionsProject; });
__webpack_require__.d(components_namespaceObject, "SectionsSkill", function() { return SectionsSkill; });
__webpack_require__.d(components_namespaceObject, "WidgetsModal", function() { return WidgetsModal; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(20);
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
var external_vue_meta_ = __webpack_require__(21);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(16);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(14);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(17);
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
  !isRouteChanged || to.path === from.path && to.hash !== from.hash) {
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






const _89578f12 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 10).then(__webpack_require__.bind(null, 56)));

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
    component: _89578f12,
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "405fe38e"
  
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
  
  var style0 = __webpack_require__(35)
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
  "df2102b8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(37);

// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=2c571a94&
var defaultvue_type_template_id_2c571a94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-sourcesans text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 leading-6 transition-all"},[_c('navbar'),_vm._ssrNode(" "),_c('mobile-menu'),_vm._ssrNode(" "),_c('social-handles'),_vm._ssrNode(" "),_c('email-handle'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_2c571a94_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=2c571a94&

// EXTERNAL MODULE: ./components/Navigation/Navbar.vue + 4 modules
var Navbar = __webpack_require__(23);

// EXTERNAL MODULE: ./components/Navigation/MobileMenu.vue + 4 modules
var MobileMenu = __webpack_require__(28);

// EXTERNAL MODULE: ./components/Navigation/SocialHandles.vue + 4 modules
var SocialHandles = __webpack_require__(29);

// EXTERNAL MODULE: ./components/Navigation/EmailHandle.vue + 4 modules
var EmailHandle = __webpack_require__(30);

// EXTERNAL MODULE: ./components/Sections/Footer.vue + 4 modules
var Footer = __webpack_require__(31);

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
  "d3b9689c"
  
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
  store_store = normalizeRoot(__webpack_require__(43), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
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
// CONCATENATED MODULE: ./.nuxt/components/index.js
const ControlsMenuToggle = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c));
const ControlsThemeToggle = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const IconsDark = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26)).then(c => wrapFunctional(c.default || c));
const IconsEnvelope = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const IconsExternalLink = () => __webpack_require__.e(/* import() | components/icons-external-link */ 1).then(__webpack_require__.bind(null, 47)).then(c => wrapFunctional(c.default || c));
const IconsFacebook = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9)).then(c => wrapFunctional(c.default || c));
const IconsGitHub = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 4)).then(c => wrapFunctional(c.default || c));
const IconsLight = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)).then(c => wrapFunctional(c.default || c));
const IconsLinkedIn = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 10)).then(c => wrapFunctional(c.default || c));
const IconsLogo = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c));
const IconsMedium = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c));
const IconsTimes = () => __webpack_require__.e(/* import() | components/icons-times */ 2).then(__webpack_require__.bind(null, 48)).then(c => wrapFunctional(c.default || c));
const IconsTwitter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const IconsYouTube = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13)).then(c => wrapFunctional(c.default || c));
const NavigationEmailHandle = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30)).then(c => wrapFunctional(c.default || c));
const NavigationMobileMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)).then(c => wrapFunctional(c.default || c));
const NavigationNavMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 25)).then(c => wrapFunctional(c.default || c));
const NavigationNavbar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c));
const NavigationSocialHandles = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c));
const SectionsAbout = () => __webpack_require__.e(/* import() | components/sections-about */ 3).then(__webpack_require__.bind(null, 50)).then(c => wrapFunctional(c.default || c));
const SectionsContact = () => __webpack_require__.e(/* import() | components/sections-contact */ 4).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));
const SectionsExperience = () => __webpack_require__.e(/* import() | components/sections-experience */ 5).then(__webpack_require__.bind(null, 52)).then(c => wrapFunctional(c.default || c));
const SectionsFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)).then(c => wrapFunctional(c.default || c));
const SectionsHeader = () => __webpack_require__.e(/* import() | components/sections-header */ 6).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const SectionsProject = () => __webpack_require__.e(/* import() | components/sections-project */ 7).then(__webpack_require__.bind(null, 54)).then(c => wrapFunctional(c.default || c));
const SectionsSkill = () => __webpack_require__.e(/* import() | components/sections-skill */ 8).then(__webpack_require__.bind(null, 51)).then(c => wrapFunctional(c.default || c));
const WidgetsModal = () => __webpack_require__.e(/* import() | components/widgets-modal */ 9).then(__webpack_require__.bind(null, 53)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

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



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(15);

// EXTERNAL MODULE: external "property-information"
var external_property_information_ = __webpack_require__(18);
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
var meta = __webpack_require__(22);

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
        "content": "A highly passionate Student Developer studying Computer Science at IIIT Hyderabad."
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
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
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

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map