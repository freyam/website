exports.ids = [10,1,2,3,4,5,6,7,8,9];
exports.modules = {

/***/ 46:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)["URLSearchParams"]))

/***/ }),

/***/ 47:
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/ExternalLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_ExternalLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43c9906c"
  
)

/* harmony default export */ var ExternalLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icons/Times.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icons_Timesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a8c839e"
  
)

/* harmony default export */ var Times = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57141d24"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "26bfdfbc"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Skill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Skillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "256ef700"
  
)

/* harmony default export */ var Skill = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sections/Experience.vue?vue&type=template&id=668b4f1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"experience"}},[_vm._ssrNode("<div class=\"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl\"><div class=\"mb-5 md:mb-10 flex items-center\"><h1 class=\"text-3xl md:text-4xl font-bold whitespace-nowrap\">\n        Experience\n      </h1> <span class=\"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600\"></span></div> <div class=\"md:flex\"><ul class=\"flex items-center overflow-x-auto md:overflow-visible md:block\">"+(_vm._ssrList((_vm.experience),function(exp,index){return ("<li><button"+(_vm._ssrClass("px-4 py-3 whitespace-nowrap text-left block w-full border-b-2 md:border-b-0 md:border-l-2 dark:border-gray-600 transition hover:text-blue-500 hover:bg-gray-100 dark:hover:text-cyan-400 dark:hover:bg-gray-800 focus:text-blue-500 focus:bg-gray-100 dark:focus:text-cyan-400 dark:focus:bg-gray-800 outline-none",{
              'text-gray-400 border-gray-300': _vm.activeTab !== exp.company,
              'text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400':
                _vm.activeTab === exp.company
            }))+">"+_vm._ssrEscape("\n            "+_vm._s(exp.company)+"\n          ")+"</button></li>")}))+"</ul> "+(_vm._ssrList((_vm.experience),function(exp,index){return ("<div"+(_vm._ssrClass("py-4 md:px-4 md:py-2",{ hidden: _vm.activeTab !== exp.company }))+"><div class=\"mb-2\"><h2 class=\"text-xl md:text-2xl\">"+_vm._ssrEscape("\n            "+_vm._s(exp.role)+"\n            ")+"<a"+(_vm._ssrAttr("href",exp.company_website))+" target=\"_blank\" rel=\"noreferrer\" class=\"text-blue-500 dark:text-cyan-400\">"+_vm._ssrEscape("@"+_vm._s(exp.company))+"</a></h2> <span class=\"text-sm text-gray-500 dark:text-gray-400\">"+_vm._ssrEscape("\n            "+_vm._s(exp.duration)+" · "+_vm._s(exp.contract.location)+"\n          ")+"</span></div> <p class=\"mb-2\">"+_vm._ssrEscape("\n          "+_vm._s(exp.description)+"\n          ")+"</p> <ul class=\"px-4 list-disc\">"+(_vm._ssrList((exp.tasks),function(task,i){return ("<li class=\"mb-2\">"+_vm._ssrEscape("\n            "+_vm._s(task)+"\n          ")+"</li>")}))+"</ul></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sections/Experience.vue?vue&type=template&id=668b4f1a&

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Experience.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Experiencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a11bb56a"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
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
var Times = __webpack_require__(48);

// EXTERNAL MODULE: ./components/Icons/ExternalLink.vue + 4 modules
var ExternalLink = __webpack_require__(47);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Widgets/Modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Widgets_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "265a216d"
  
)

/* harmony default export */ var Modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
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
var ExternalLink = __webpack_require__(47);

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
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Project.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e4eb788"
  
)

/* harmony default export */ var Project = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
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
var Contactvue_type_script_lang_js_ = __webpack_require__(46);

// CONCATENATED MODULE: ./components/Sections/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sections_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Sections/Contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sections_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "78c3b50f"
  
)

/* harmony default export */ var Contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2b3c1f4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('about'),_vm._ssrNode(" "),_c('skill'),_vm._ssrNode(" "),_c('experience'),_vm._ssrNode(" "),_c('modal'),_vm._ssrNode(" "),_c('project'),_vm._ssrNode(" "),_c('contact')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2b3c1f4e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Sections/Header.vue + 4 modules
var Header = __webpack_require__(49);

// EXTERNAL MODULE: ./components/Sections/About.vue + 4 modules
var About = __webpack_require__(50);

// EXTERNAL MODULE: ./components/Sections/Skill.vue + 4 modules
var Skill = __webpack_require__(51);

// EXTERNAL MODULE: ./components/Sections/Experience.vue + 4 modules
var Experience = __webpack_require__(52);

// EXTERNAL MODULE: ./components/Widgets/Modal.vue + 4 modules
var Modal = __webpack_require__(53);

// EXTERNAL MODULE: ./components/Sections/Project.vue + 4 modules
var Project = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Sections/Contact.vue + 3 modules
var Contact = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"],
    About: About["default"],
    Skill: Skill["default"],
    Experience: Experience["default"],
    Modal: Modal["default"],
    Project: Project["default"],
    Contact: Contact["default"]
  },

  mounted() {
    this.closeMenu();
  },

  methods: Object(external_vuex_["mapActions"])({
    closeMenu: 'closeMenu'
  })
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b017984"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map