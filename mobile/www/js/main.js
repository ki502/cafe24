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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/HeaderView.vue?vue&type=template&id=61d96e24&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { staticClass: "text-center display-4", attrs: { "no-gutters": "" } },
    [
      _c(
        "v-app-bar",
        {
          attrs: {
            color: "deep-purple accent-4",
            dark: "",
            "scroll-target": "#scrolling-techniques-6"
          }
        },
        [
          _c("v-toolbar-title", [_vm._v("MyApp")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-tabs",
            { attrs: { "align-with-title": "" } },
            [
              _c(
                "v-tab",
                {
                  on: {
                    click: function($event) {
                      return _vm.move("/game")
                    }
                  }
                },
                [_vm._v("게임")]
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                {
                  on: {
                    click: function($event) {
                      return _vm.move("/coupang")
                    }
                  }
                },
                [_vm._v("쿠팡 파트너스")]
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                {
                  on: {
                    click: function($event) {
                      return _vm.move("/lotto")
                    }
                  }
                },
                [_vm._v("로또")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/layout/HeaderView.vue?vue&type=template&id=61d96e24&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/layout/HeaderView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HeaderViewvue_type_script_lang_js_ = ({
    methods: {
        move: function(url) {
            this.$router.push({ path: url, })
        }
    }
});

// CONCATENATED MODULE: ./src/layout/HeaderView.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_HeaderViewvue_type_script_lang_js_ = (HeaderViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/layout/HeaderView.vue





/* normalize component */

var component = normalizeComponent(
  layout_HeaderViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/layout/HeaderView.vue"
/* harmony default export */ var HeaderView = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/CenterView.vue?vue&type=template&id=180eeab6&
var CenterViewvue_type_template_id_180eeab6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var CenterViewvue_type_template_id_180eeab6_staticRenderFns = []
CenterViewvue_type_template_id_180eeab6_render._withStripped = true


// CONCATENATED MODULE: ./src/layout/CenterView.vue?vue&type=template&id=180eeab6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/layout/CenterView.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var CenterViewvue_type_script_lang_js_ = ({
});

// CONCATENATED MODULE: ./src/layout/CenterView.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_CenterViewvue_type_script_lang_js_ = (CenterViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layout/CenterView.vue





/* normalize component */

var CenterView_component = normalizeComponent(
  layout_CenterViewvue_type_script_lang_js_,
  CenterViewvue_type_template_id_180eeab6_render,
  CenterViewvue_type_template_id_180eeab6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var CenterView_api; }
CenterView_component.options.__file = "src/layout/CenterView.vue"
/* harmony default export */ var CenterView = (CenterView_component.exports);
// EXTERNAL MODULE: ./node_modules/is-electron/index.js
var is_electron = __webpack_require__(0);
var is_electron_default = /*#__PURE__*/__webpack_require__.n(is_electron);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Game.vue?vue&type=template&id=0e188196&
var Gamevue_type_template_id_0e188196_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: 12 } },
        [_c("v-card", { attrs: { id: "game" } })],
        1
      )
    ],
    1
  )
}
var Gamevue_type_template_id_0e188196_staticRenderFns = []
Gamevue_type_template_id_0e188196_render._withStripped = true


// CONCATENATED MODULE: ./src/pages/Game.vue?vue&type=template&id=0e188196&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Game.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Gamevue_type_script_lang_js_ = ({
    beforeDestroy: function () {
        window.removeEventListener('resize', this.resizeScene);
    },
    mounted() {
        this.width = window.innerWidth - 24 - 17;
        this.create();
        window.addEventListener('resize', this.resizeScene);
    },
    data() {
        return {
            game: null,
            width: 0,
            heght: 0,
            itemList: [],
            radius: 50,
            ballCount: 6,
        }
    },
    methods: {
        create() {
            this.height = window.innerHeight - 64 - 24 - 12;

            this.game = new Phaser.Game({
                parent: 'game',
                type: Phaser.AUTO,
                width: this.width,
                height: this.height,
                scene: {
                    create: this.createScene,
                }
            });
        },
        createScene: function() {
            this.itemList = [];
        },
        resizeScene: function() {
            this.width = window.innerWidth - 24 - 17;
            this.height = window.innerHeight - 64 - 24 - 12;
            
            this.game.scale.resize(this.width, this.height);
        }
    }
});

// CONCATENATED MODULE: ./src/pages/Game.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Gamevue_type_script_lang_js_ = (Gamevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Game.vue





/* normalize component */

var Game_component = normalizeComponent(
  pages_Gamevue_type_script_lang_js_,
  Gamevue_type_template_id_0e188196_render,
  Gamevue_type_template_id_0e188196_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Game_api; }
Game_component.options.__file = "src/pages/Game.vue"
/* harmony default export */ var Game = (Game_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Lotto.vue?vue&type=template&id=501438d0&
var Lottovue_type_template_id_501438d0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: 12 } },
        [_c("v-card", { attrs: { id: "phaser-div" } })],
        1
      )
    ],
    1
  )
}
var Lottovue_type_template_id_501438d0_staticRenderFns = []
Lottovue_type_template_id_501438d0_render._withStripped = true


// CONCATENATED MODULE: ./src/pages/Lotto.vue?vue&type=template&id=501438d0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Lotto.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Lottovue_type_script_lang_js_ = ({
    beforeDestroy: function () {
        window.removeEventListener('resize', this.resizeScene);
    },
    mounted() {
        this.width = window.innerWidth - 24 - 17;
        this.create();
        window.addEventListener('resize', this.resizeScene);
    },
    data() {
        return {
            game: null,
            width: 0,
            heght: 0,
            itemList: [],
            radius: 50,
            ballCount: 6,
        }
    },
    methods: {
        create() {
            this.height = 200;

            this.game = new Phaser.Game({
                parent: 'phaser-div',
                type: Phaser.AUTO,
                width: this.width,
                height: this.height,
                scene: {
                    create: this.createScene,
                }
            });
        },
        createScene: function() {
            this.itemList = [];

            let radius = this.radius;
            let ballCount = this.ballCount;
            let pointX = 0;
            let operationX = 20;
            let gap = 10;
            let start = (this.width - (radius * ballCount * 2) - (operationX * 4) - (radius * 2 )) / 2;

            // 1~6 번호
            for(let index = 0; index < ballCount; index++) {
                pointX = start + radius + (index * radius * 2) + (index * gap);

                this.itemList.push({
                    type: 'circle',
                    circle: this.game.scene.scenes[0].add.circle(pointX, this.height / 2, radius, 0x6666ff),
                    text: this.game.scene.scenes[0].add.text(pointX, this.height / 2, '-').setFontSize(50).setOrigin(0.5)
                });
            }

            // + 연산자
            this.itemList.push({
                type: 'operation',
                text: this.game.scene.scenes[0].add.text(pointX + radius + operationX, this.height / 2, '+').setFontSize(50).setOrigin(0.5)
            });

            //보너스 번호
            this.itemList.push({
                type: 'lastNumber',
                circle: this.game.scene.scenes[0].add.circle(pointX + (radius * 2) + (operationX * 2), this.height / 2, 50, 0x6666ff),
                text: this.game.scene.scenes[0].add.text(pointX + (radius * 2) + (operationX * 2), this.height / 2, '-').setFontSize(50).setOrigin(0.5)
            });
            
            this.getLottoInfo();
        },
        resizeScene: function() {
            this.width = window.innerWidth - 24 - 17;
            
            let radius = this.radius;
            let ballCount = this.ballCount;
            let pointX = 0;
            let operationX = 20;
            let gap = 10;
            let start = (this.width - (radius * ballCount * 2) - (operationX * 4) - (radius * 2 )) / 2;

            this.game.scale.resize(this.width, this.height);

            // 1~6 번호
            for(let index = 0; index < ballCount; index++) {
                pointX = start + radius + (index * radius * 2) + (index * gap);

                this.itemList[index].circle.x = pointX;
                this.itemList[index].text.x = pointX;
            }

            // + 연산자
            this.itemList[ballCount].text.x = pointX + radius + operationX;

            // 보너스 번호
            this.itemList[ballCount + 1].circle.x = pointX + radius + (operationX * 2) + radius;
            this.itemList[ballCount + 1].text.x = pointX + radius + (operationX * 2) + radius;
        },
        calcurateLotto() {
            let startDate = new Date("2002-12-07");
            let nowDate = new Date();
            let diffDate = nowDate - startDate;
            
            // 주 단위로 짤라서 구하기 현재 주 + 1주기 때문에 더하기 1을 해준다.
            return parseInt(diffDate / (24 * 60 * 60 * 1000) / 7) + 1;
        },
        getColorByNumber(value){
            /*
                바탕색상표
                1~10 : #FBC400
                11~20 : #69C8F2
                21~30 : #FF9090
                31~40 : #AAAAAA
                41~46 : #B0D840
            */
            let colorList = [16499712, 6932722, 16748688, 11184810, 11589696];
            return colorList[parseInt(value / 10)];
        },
        getLottoInfo() {
            let count = this.calcurateLotto();
            /*
                drwNoDate: "2020-02-08"
                totSellamnt: 88231474000
                firstWinamnt: 1619922520
                firstPrzwnerCo: 13
                bnusNo: 29
                firstAccumamnt: 21058992760
                drwNo: 897
                drwtNo1: 6
                drwtNo2: 7
                drwtNo3: 12
                drwtNo4: 22
                drwtNo5: 26
                drwtNo6: 36
            */

            axios.get(`${this.$store.state.axios}/apis/lotto/${count}`).then((result) => {
                let lottoInfo = result.data;

                this.itemList.forEach((element, index) => {
                    if(element.type === 'circle') {
                        let propertyName = 'drwtNo' + (index + 1);
                        let value = lottoInfo[propertyName];

                        element.text.setText(value);
                        this.itemList[index].circle.fillColor = this.getColorByNumber(value);
                    }

                    if(element.type === 'lastNumber') {
                        let value = lottoInfo.bnusNo;

                        element.text.setText(value);
                        this.itemList[index].circle.fillColor = this.getColorByNumber(value);
                    }
                }); 
            });                       
        }
    }
});

// CONCATENATED MODULE: ./src/pages/Lotto.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Lottovue_type_script_lang_js_ = (Lottovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Lotto.vue





/* normalize component */

var Lotto_component = normalizeComponent(
  pages_Lottovue_type_script_lang_js_,
  Lottovue_type_template_id_501438d0_render,
  Lottovue_type_template_id_501438d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Lotto_api; }
Lotto_component.options.__file = "src/pages/Lotto.vue"
/* harmony default export */ var Lotto = (Lotto_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Coupang.vue?vue&type=template&id=1b273c02&
var Coupangvue_type_template_id_1b273c02_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: 1 } }, [_c("left-view")], 1),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: 10 } },
            [
              _c(
                "v-row",
                _vm._l(_vm.cards, function(card, index) {
                  return _c(
                    "v-col",
                    { key: index, attrs: { cols: card.flex } },
                    [
                      _c("card", {
                        attrs: {
                          link: card.link,
                          imageUrl: card.src,
                          title: card.title,
                          maxWidth: card.maxWidth,
                          iconColor: card.iconColor,
                          description: card.description,
                          cardLink: card.cardLink
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: 1 } }, [_c("right-view")], 1)
        ],
        1
      )
    ],
    1
  )
}
var Coupangvue_type_template_id_1b273c02_staticRenderFns = []
Coupangvue_type_template_id_1b273c02_render._withStripped = true


// CONCATENATED MODULE: ./src/pages/Coupang.vue?vue&type=template&id=1b273c02&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component/Card.vue?vue&type=template&id=2a34ac1b&
var Cardvue_type_template_id_2a34ac1b_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { href: _vm.cardLink } },
    [
      _c(
        "v-img",
        {
          staticClass: "mx-auto white--text align-end",
          attrs: {
            src: _vm.imageUrl,
            gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
            height: "200px"
          }
        },
        [_c("v-card-title", { domProps: { textContent: _vm._s(_vm.title) } })],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "black--text" },
        [
          _c("v-icon", { attrs: { color: _vm.iconColor } }, [
            _vm._v(
              "\n    " +
                _vm._s(
                  _vm.iconColor == "green"
                    ? "sentiment_very_satisfied"
                    : _vm.iconColor == "yellow"
                    ? "sentiment_dissatisfied"
                    : _vm.iconColor == "red"
                    ? "sentiment_very_dissatisfied"
                    : "contact_support"
                ) +
                "\n    "
            )
          ]),
          _vm._v(_vm._s(_vm.description))
        ],
        1
      )
    ],
    1
  )
}
var Cardvue_type_template_id_2a34ac1b_staticRenderFns = []
Cardvue_type_template_id_2a34ac1b_render._withStripped = true


// CONCATENATED MODULE: ./src/component/Card.vue?vue&type=template&id=2a34ac1b&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/component/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
    props: ["imageUrl", "title", "cardLink", "iconColor", "description"]
});

// CONCATENATED MODULE: ./src/component/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/component/Card.vue





/* normalize component */

var Card_component = normalizeComponent(
  component_Cardvue_type_script_lang_js_,
  Cardvue_type_template_id_2a34ac1b_render,
  Cardvue_type_template_id_2a34ac1b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Card_api; }
Card_component.options.__file = "src/component/Card.vue"
/* harmony default export */ var Card = (Card_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component/LeftView.vue?vue&type=template&id=446734d7&
var LeftViewvue_type_template_id_446734d7_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        [
          _c(
            "v-card",
            { staticClass: "lime lighten-2 text-center display-1" },
            [
              _c(
                "a",
                {
                  attrs: { href: "https://coupa.ng/bpaHLS", target: "_blank" }
                },
                [
                  _c("v-img", {
                    attrs: {
                      src:
                        "https://ads-partners.coupang.com/banners/141846?subId=&traceId=V0-301-879dd1202e5c73b2-I141846&w=10&h=600",
                      alt: ""
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var LeftViewvue_type_template_id_446734d7_staticRenderFns = []
LeftViewvue_type_template_id_446734d7_render._withStripped = true


// CONCATENATED MODULE: ./src/component/LeftView.vue?vue&type=template&id=446734d7&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/component/LeftView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LeftViewvue_type_script_lang_js_ = ({

});

// CONCATENATED MODULE: ./src/component/LeftView.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_LeftViewvue_type_script_lang_js_ = (LeftViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/component/LeftView.vue





/* normalize component */

var LeftView_component = normalizeComponent(
  component_LeftViewvue_type_script_lang_js_,
  LeftViewvue_type_template_id_446734d7_render,
  LeftViewvue_type_template_id_446734d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LeftView_api; }
LeftView_component.options.__file = "src/component/LeftView.vue"
/* harmony default export */ var LeftView = (LeftView_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component/RightView.vue?vue&type=template&id=fa403334&
var RightViewvue_type_template_id_fa403334_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        [
          _c(
            "v-card",
            { staticClass: "lime lighten-2 text-center display-1" },
            [
              _c(
                "a",
                {
                  attrs: { href: "https://coupa.ng/bpaHLS", target: "_blank" }
                },
                [
                  _c("v-img", {
                    attrs: {
                      src:
                        "https://ads-partners.coupang.com/banners/141846?subId=&traceId=V0-301-879dd1202e5c73b2-I141846&w=10&h=600",
                      alt: ""
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var RightViewvue_type_template_id_fa403334_staticRenderFns = []
RightViewvue_type_template_id_fa403334_render._withStripped = true


// CONCATENATED MODULE: ./src/component/RightView.vue?vue&type=template&id=fa403334&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/component/RightView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RightViewvue_type_script_lang_js_ = ({

});

// CONCATENATED MODULE: ./src/component/RightView.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_RightViewvue_type_script_lang_js_ = (RightViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/component/RightView.vue





/* normalize component */

var RightView_component = normalizeComponent(
  component_RightViewvue_type_script_lang_js_,
  RightViewvue_type_template_id_fa403334_render,
  RightViewvue_type_template_id_fa403334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var RightView_api; }
RightView_component.options.__file = "src/component/RightView.vue"
/* harmony default export */ var RightView = (RightView_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Coupang.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Coupangvue_type_script_lang_js_ = ({
    components: {
        Card: Card,
        LeftView: LeftView,
        RightView: RightView
    },
    data() {
        return {
            cards: [
                { title: '곰곰 오리지날 닭가슴살 슬라이스 (냉동), 120g, 5개'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/retail/images/4620734802352-97ea9ce2-fc18-4836-83ee-7338abbbb997.jpg'
                , cardLink: "https://coupa.ng/bpbjCS"
                , iconColor: "red"
                , description: "싸길래 먹어봤다. 나쁘진 않았다. 맛이 뛰어나진 않고 싼 맛에 먹을만하다. 다이어트는 독하게 하는게 맞는 것 같다."
                , flex: 3
                , maxWidth:300 },
                { title: '[정관장]홍삼정 에브리타임 밸런스 30포/1박스, 없음, 상세설명 참조'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/f9ff/c835f7077b6720fc34bd3ab1955c4c1e2919c0b72d6267283e5e8f372d57.jpeg'
                , cardLink: "https://coupa.ng/bpaVDz"
                , iconColor: "green"
                , description: "먹어 봤는데 정말 맛있더라.. 부모님이랑 같이 먹고 있다."
                , flex: 3
                , maxWidth:300 },
                { title: '로지텍 서라운드사운드 게임 헤드셋 G933 무선 새상품'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/images/2018/07/10/16/3/d55ff7d1-4f20-4071-b834-52e26fc140e2.jpg'
                , cardLink: "https://coupa.ng/bpa5Hu"
                , iconColor: "yellow"
                , description: "쓰고 있는데 악평에 비해 무선 기능과 음질은 좋다. 다만 마이크 소리가 작다."
                , flex: 3
                , maxWidth:300 },
                { title: '로지텍 G903 HERO 무선 게이밍 마우스'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/retail/images/2019/11/25/15/4/ec2d7fef-7838-4136-8102-2653cc295656.jpg'
                , cardLink: "https://coupa.ng/bpa6e3"
                , iconColor: "green"
                , description: "정말 괜찮다. 무게도 FPS하기에 좋고, 무엇보다 무선인데 유선보다 반응이 빠르다. 정말 최고"
                , flex: 3
                , maxWidth:300 },
                { title: '부자 아빠 가난한 아빠 (20주년 특별 기념판)'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/d13d/abca68c965907f7beee6dece825fe018f6cf1996884d14f90a955d11b824.jpg'
                , cardLink: "https://coupa.ng/bpa7pQ"
                , iconColor: "green"
                , description: "요즘 읽고있다. 감명받으면서 읽는다. 난 노예가 되지 않고 주인이 되어 세상을 살아가겠다."
                , flex: 3
                , maxWidth:300 },
                { title: '자바의 정석'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/48db/ae604f78ea57163b9779131d492d56de9005e3d2ac5d701baff6b31b8830.jpg'
                , cardLink: "https://coupa.ng/bpa80v"
                , iconColor: "green"
                , description: "회사에서 다시 Java를 쓰게됐다. 다시 봐야된다. Java 책 중에선 가장 좋은것 같다."
                , flex: 3
                , maxWidth:300 },
                { title: 'GoF의 디자인 패턴 :재사용성을 지닌 객체지향 소프트웨어의 핵심요소, 프로텍미디어'
                , src: 'https://thumbnail11.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/3be8/915d36489361d0d21b5f191ee0e6642dd74203c77fff9bec1c95c00fac9a.jpg'
                , cardLink: "https://coupa.ng/bpa91U"
                , iconColor: "green"
                , description: "디자인 패턴 중에선 갑중 갑인 것 같다. 다만 어렵다... 아직도 많이 어렵다."
                , flex: 3
                , maxWidth:300 }
            ],
        }
    }
});

// CONCATENATED MODULE: ./src/pages/Coupang.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Coupangvue_type_script_lang_js_ = (Coupangvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Coupang.vue





/* normalize component */

var Coupang_component = normalizeComponent(
  pages_Coupangvue_type_script_lang_js_,
  Coupangvue_type_template_id_1b273c02_render,
  Coupangvue_type_template_id_1b273c02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Coupang_api; }
Coupang_component.options.__file = "src/pages/Coupang.vue"
/* harmony default export */ var Coupang = (Coupang_component.exports);
// CONCATENATED MODULE: ./src/index.js








const router = new VueRouter({
    routes: [
        { path: "/game", component: Game  },
        { path: "/lotto", component: Lotto },
        { path: "/coupang", component: Coupang  }
    ]
});

new Vue({
    router: router,
    store: new Vuex.Store({
        state: {
            axios: is_electron_default.a ? "http://localhost:8001" : ""
        }
    }),
    vuetify: new Vuetify(),
    el: '#app',
    components: {
        HeaderView: HeaderView,
        CenterView: CenterView
    },
    data: {
        CONSTANTS: {
            isElectron: is_electron_default.a
        }
    }
});

/***/ })
/******/ ]);