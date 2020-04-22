define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n", "",{"version":3,"sources":["CoordinateSpace.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE","file":"CoordinateSpace.css","sourcesContent":["div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n", "",{"version":3,"sources":["SimpleEditor.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX;gBACc,EAAE;;AAElB;EACE,gBAAgB;EAChB,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,WAAW,EAAE;;AAEf;EACE,qBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,2BAAmB;MAAnB,uBAAmB;UAAnB,mBAAmB;EACnB,qCAA6B;MAA7B,yBAA6B;UAA7B,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc,EAAE;;AAElB;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe,EAAE","file":"SimpleEditor.css","sourcesContent":["div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
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

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./Functions/CreateInput/createInputCoor.tsx":
/*!***************************************************!*\
  !*** ./Functions/CreateInput/createInputCoor.tsx ***!
  \***************************************************/
/*! exports provided: createInputCoor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputCoor", function() { return createInputCoor; });
/* harmony import */ var Models_InputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputClass */ "./Models/InputClass.tsx");

var createInputCoor = function createInputCoor(id, isInitial) {
  var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

  var newFieldLabel = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'label', l10n.basics.label, 'label' + id.toString(), 'text', true, 'Label', undefined);
  var newFieldPositionXMin = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'xMin', l10n.inputCoordinate.minXPosition, 'positionXMin' + id.toString(), 'text', true, l10n.inputCoordinate.minXPosition, undefined);
  var newFieldPositionXMax = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'xMax', l10n.inputCoordinate.maxXPosition, 'positionXMax' + id.toString(), 'text', true, l10n.inputCoordinate.maxXPosition, undefined);
  var newFieldPositionYMin = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'yMin', l10n.inputCoordinate.minYPosition, 'positionYMin' + id.toString(), 'text', true, l10n.inputCoordinate.minYPosition, undefined);
  var newFieldPositionYMax = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'yMax', l10n.inputCoordinate.maxYPosition, 'positionYMax' + id.toString(), 'text', true, l10n.inputCoordinate.maxYPosition, undefined); // const newFieldKey: InputClass = new InputClass(id.toString() + 'key',
  // 	l10n.inputCoordinate.key, 'key' + id.toString(),
  // 	'text', true, l10n.inputCoordinate.key, undefined);
  // const newFieldValueKey: InputClass = new InputClass(id.toString() + 'valueKey',
  // 	l10n.inputCoordinate.valueKey, 'valueKey' + id.toString(),
  // 	'text', true, l10n.inputCoordinate.valueKey, undefined);
  // const newFieldButton: InputClass = new InputClass(id.toString() + 'supprimer',
  // 	l10n.basics.delete, 'supprimer' + id.toString(),
  // 	'button', false, undefined, l10n.basics.delete);

  var finalArray = [];

  if (!isInitial) {
    finalArray = [newFieldLabel];
  } else {
    finalArray = [newFieldLabel, newFieldPositionXMin, newFieldPositionXMax, newFieldPositionYMin, newFieldPositionYMax];
  }

  return finalArray;
};

/***/ }),

/***/ "./Functions/CreateInput/createInputsOrientedLink.tsx":
/*!************************************************************!*\
  !*** ./Functions/CreateInput/createInputsOrientedLink.tsx ***!
  \************************************************************/
/*! exports provided: createInputsOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsOrientedLink", function() { return createInputsOrientedLink; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");

var createInputsOrientedLink = function createInputsOrientedLink(id, dataCoordinateSpace, dataPoint) {
  var newFieldOrientationLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'orientationLink', 'Orientation', 'orientationLink' + id.toString(), 'select', [{
    label: 'Monodirectional',
    value: 'AB'
  }, {
    label: 'Bidirectional',
    value: 'double'
  }], '', true, 'Orientation', undefined);
  var newFieldSize = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'size', 'Size', 'size' + id.toString(), 'select', [{
    value: 'Small',
    label: 'Small'
  }, {
    value: 'Medium',
    label: 'Medium'
  }, {
    value: 'Large',
    label: 'Large'
  }], '', true, 'Size', undefined);
  var newFieldPointAPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAX', 'CoordinateClick A - X', 'pointAX' + id.toString(), 'text', [], '', true, 'PointA-X', undefined);
  var newFieldPointAPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAY', 'CoordinateClick A - Y', 'pointAY' + id.toString(), 'text', [], '', true, 'PointA-Y', undefined);
  var newFieldPointBPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBX', 'CoordinateClick B - X', 'pointBX' + id.toString(), 'text', [], '', true, 'PointB-X', undefined);
  var newFieldPointBPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBY', 'CoordinateClick B - Y', 'pointBY' + id.toString(), 'text', [], '', true, 'PointB-Y', undefined);
  var newFieldLabelLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'labelLink', 'Label', 'label' + id.toString(), 'text', [], '', true, 'Label', undefined);
  var newFieldRegionIn = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'regionIn', 'AssociateRegionIn', 'regionIn' + id.toString(), 'select', dataCoordinateSpace, '', true, 'Associate Region In', undefined);
  var newFieldRegionOut = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'regionOut', 'AssociateRegionOut', 'regionOut' + id.toString(), 'select', dataCoordinateSpace, '', true, 'Associate Region Out', undefined);
  var newFieldPointIn = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointIn', 'AssociatePointIn', 'pointIn' + id.toString(), 'select', dataPoint, '', true, 'Associate Point In', undefined);
  var newFieldPointOut = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointOut', 'AssociatePointOut', 'pointOut' + id.toString(), 'select', dataPoint, '', true, 'Associate Point Out', undefined);
  var newFieldIsIncurved = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'isIncurved', 'Incurved', 'isIncurved' + id.toString(), 'select', [{
    label: 'Yes',
    value: true
  }, {
    label: 'No',
    value: false
  }], '', true, 'Incurved', undefined);
  var newFieldPointCPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointCX', 'CoordinateClick C - X', 'pointCX' + id.toString(), 'text', [], '', true, 'PointC-X', undefined);
  var newFieldPointCPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointCY', 'CoordinateClick C - Y', 'pointCY' + id.toString(), 'text', [], '', true, 'PointC-Y', undefined);
  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'deleteLink', 'Delete', 'delete' + id.toString(), 'button', [], '', false, undefined, 'delete');
  var finalArray = [newFieldLabelLink, newFieldOrientationLink, newFieldSize, newFieldPointIn, newFieldRegionIn, newFieldPointAPositionX, newFieldPointAPositionY, newFieldPointOut, newFieldRegionOut, newFieldPointBPositionX, newFieldPointBPositionY, newFieldIsIncurved, newFieldPointCPositionX, newFieldPointCPositionY, newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/CreateInput/createInputsPoint.tsx":
/*!*****************************************************!*\
  !*** ./Functions/CreateInput/createInputsPoint.tsx ***!
  \*****************************************************/
/*! exports provided: createInputsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsPoint", function() { return createInputsPoint; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");
 //import { SelectableValue } from '@grafana/data';
//import { RegionClass } from 'Models/RegionClass';

var createInputsPoint = function createInputsPoint(id) {
  // const newFieldLinkWithCoordonateSpace: InputSelectableClass = new InputSelectableClass(id.toString() + 'LinkWithCoordinateSpace',
  // 	'Associate region', 'linkWithCoordinateSpace' + id.toString(), 'select',
  // 	dataEspaceCoor, '', true, 'Associate region', undefined);
  var newFieldDrawGraphicMarker = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'drawGraphicMarker', 'Display ', 'drawGraphicMarker' + id.toString(), 'select', [{
    value: 'true',
    label: 'Yes'
  }, {
    value: 'false',
    label: 'No'
  }], '', true, 'drawGraphicMarker', undefined); // const newFieldShape: InputSelectableClass = new InputSelectableClass(id.toString() + 'shape',
  // 	'GraphicMarker', 'shape' + id.toString(), 'select',
  // 	[
  // 		{ value: 'arrow', label: 'Arrow' },
  // 		{ value: 'circle', label: 'Circle' },
  // 		{ value: 'cross', label: 'Cross' },
  // 	],
  // 	'', true, 'Shape', undefined);

  var newFieldSizeWidthShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'sizeWidth', 'Size', 'sizeWidth' + id.toString(), 'select', [{
    value: 'small',
    label: 'Small'
  }, {
    value: 'medium',
    label: 'Medium'
  }, {
    value: 'large',
    label: 'Large'
  }], '', true, 'SizeWidth', undefined);
  var newFieldSizeHeightShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'sizeHeight', 'Width', 'sizeHeight' + id.toString(), 'select', [{
    value: 'small',
    label: 'Small'
  }, {
    value: 'medium',
    label: 'Medium'
  }, {
    value: 'large',
    label: 'Large'
  }], '', true, 'SizeHeight', undefined); // const newFieldColor: InputSelectableClass = new InputSelectableClass(id.toString() + 'color',
  // 	'Color', 'color' + id.toString(), 'color', [],
  // 	'#5794F2', true, 'Color', undefined);

  var newFieldRotateArrow = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'rotateArrow', 'Orientation', 'rotateArrow' + id.toString(), 'text', [], '', true, 'RotateArrow', undefined);
  var newFieldPositionXShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'positionShapeX', 'Position X', 'positionShapeX' + id.toString(), 'text', [], '', true, 'Position X Shape', undefined);
  var newFieldPositionYShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'positionShapeY', 'Position Y', 'positionShapeY' + id.toString(), 'text', [], '', true, 'Position Y Shape', undefined);
  var newFieldLabel = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'labelPoint', 'Label', 'labelPoint' + id.toString(), 'text', [], '', true, 'Label', undefined); // const newFieldPositionLabelX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelX',
  // 	'Position X Label', 'positionLabelX' + id.toString(),
  // 	'text', [], '', true, 'Position X Label', undefined);
  // const newFieldPositionLabelY: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelY',
  // 	'Position Y Label', 'positionLabelY' + id.toString(),
  // 	'text', [], '', true, 'Position Y Label', undefined);
  // const newFieldMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'refIdMainMetricPoint',
  // 	'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'RefId Main Metric', undefined);
  // const newFieldKeyMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyMainMetricPoint',
  // 	'Key Main Metric', 'keyMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Main Metric', undefined);
  // const newFieldKeyValueMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyValueMainMetricPoint',
  // 	'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Value Main Metric', undefined);

  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'deletePoint', 'Delete', 'delete' + id.toString(), 'button', [], '', true, undefined, 'Delete');
  var finalArray = [newFieldLabel, //newFieldLinkWithCoordonateSpace,
  newFieldDrawGraphicMarker, //newFieldShape,
  newFieldSizeWidthShape, newFieldSizeHeightShape, //newFieldColor,
  newFieldRotateArrow, newFieldPositionXShape, newFieldPositionYShape, // newFieldPositionLabelX,
  // newFieldPositionLabelY,
  // newFieldMainMetric,
  // newFieldKeyMainMetric,
  // newFieldKeyValueMainMetric,
  newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/EditParameter/editGoodParameter.tsx":
/*!*******************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameter.tsx ***!
  \*******************************************************/
/*! exports provided: editGoodParameter, editGoodParameterExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameter", function() { return editGoodParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterExtend", function() { return editGoodParameterExtend; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameter = function editGoodParameter(name, editCoor, newValue) {
  if (name.startsWith('positionXMin')) {
    editCoor.coordinate.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coordinate.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coordinate.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coordinate.yMax = newValue;
  }

  return editCoor;
};
var editGoodParameterExtend = function editGoodParameterExtend(name, editCoor, newValue) {
  if (name.startsWith('positionXMin')) {
    editCoor.coords.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coords.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coords.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coords.yMax = newValue;
  } else if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('image')) {
    editCoor.img = newValue;
  } else if (name.startsWith('key')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('valueKey')) {
    editCoor.mainMetric.keyValue = newValue;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/EditParameter/editGoodParameterOrientedLink.tsx":
/*!*******************************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameterOrientedLink.tsx ***!
  \*******************************************************************/
/*! exports provided: editGoodParameterOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterOrientedLink", function() { return editGoodParameterOrientedLink; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameterOrientedLink = function editGoodParameterOrientedLink(name, editCoor, newValue, newValueSelect) {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('orientationLink')) {
    editCoor.orientationLink = newValueSelect;
  } else if (name.startsWith('pointAX')) {
    editCoor.pointAPositionX = newValue;
  } else if (name.startsWith('pointAY')) {
    editCoor.pointAPositionY = newValue;
  } else if (name.startsWith('pointBX')) {
    editCoor.pointBPositionX = newValue;
  } else if (name.startsWith('pointBY')) {
    editCoor.pointBPositionY = newValue;
  } else if (name.startsWith('colorCoordinateA')) {
    editCoor.colorCoordinateA = newValue;
  } else if (name.startsWith('colorCoordinateB')) {
    editCoor.colorCoordinateB = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  } else if (name.startsWith('isIncurved')) {
    editCoor.isIncurved = newValueSelect;
  } else if (name.startsWith('pointCX')) {
    editCoor.pointCPositionX = newValue;
  } else if (name.startsWith('pointCY')) {
    editCoor.pointCPositionY = newValue;
  } else if (name.startsWith('pointIn')) {
    editCoor.pointIn = newValue;
  } else if (name.startsWith('pointOut')) {
    editCoor.pointOut = newValue;
  } else if (name.startsWith('regionIn')) {
    editCoor.regionIn = newValue;
  } else if (name.startsWith('regionOut')) {
    editCoor.regionOut = newValue;
  } else if (name.startsWith('size')) {
    editCoor.size = newValueSelect;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/EditParameter/editGoodParameterPoint.tsx":
/*!************************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameterPoint.tsx ***!
  \************************************************************/
/*! exports provided: editGoodParameterPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterPoint", function() { return editGoodParameterPoint; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameterPoint = function editGoodParameterPoint(name, editCoor, newValue, newValueSelect) {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('drawGraphicMarker')) {
    editCoor.drawGraphicMarker = newValueSelect;
  } else if (name.startsWith('shape')) {
    editCoor.shape = newValueSelect;
  } else if (name.startsWith('sizeWidth')) {
    editCoor.sizeWidth = newValueSelect;
  } else if (name.startsWith('sizeHeight')) {
    editCoor.sizeHeight = newValueSelect;
  } else if (name.startsWith('rotateArrow')) {
    editCoor.rotateArrow = newValue;
  } else if (name.startsWith('positionShapeX')) {
    editCoor.positionShapeX = newValue;
  } else if (name.startsWith('positionShapeY')) {
    editCoor.positionShapeY = newValue;
  } else if (name.startsWith('color')) {
    editCoor.color = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/Input/inputButton.tsx":
/*!*****************************************!*\
  !*** ./Functions/Input/inputButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputButtonField = function InputButtonField(_a) {
  var label = _a.label,
      value = _a.value,
      name = _a.name,
      required = _a.required,
      _handleChange = _a._handleChange,
      id = _a.id,
      withLabel = _a.withLabel;

  if (withLabel === true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: "button",
      required: required,
      name: name,
      id: id,
      onClick: _handleChange,
      value: label || ''
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: _handleChange,
      variant: "danger",
      id: id,
      size: "md"
    }, "Delete"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InputButtonField);

/***/ }),

/***/ "./Functions/Input/inputSelect.tsx":
/*!*****************************************!*\
  !*** ./Functions/Input/inputSelect.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelect = function InputSelect(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      defaultValue = _a.defaultValue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value);
    },
    allowCustomValue: false,
    options: data,
    width: 30,
    value: defaultValue
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelect);

/***/ }),

/***/ "./Functions/Input/inputSelectOrientedLink.tsx":
/*!*****************************************************!*\
  !*** ./Functions/Input/inputSelectOrientedLink.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelectOrientedLink = function InputSelectOrientedLink(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      index = _a.index,
      defaultValue = _a.defaultValue,
      name = _a.name,
      label = _a.label; //console.log(defaultValue);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      marginBottom: '2px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    width: 15
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value, name, index);
    },
    allowCustomValue: false,
    options: data,
    value: defaultValue,
    width: 20
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelectOrientedLink);

/***/ }),

/***/ "./Functions/Input/inputSelectPoint.tsx":
/*!**********************************************!*\
  !*** ./Functions/Input/inputSelectPoint.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelectPoint = function InputSelectPoint(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      index = _a.index,
      defaultValue = _a.defaultValue,
      name = _a.name,
      shape = _a.shape,
      label = _a.label;

  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('sizeHeight')) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          marginBottom: '2px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        width: 15
      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        onChange: function onChange(value) {
          return _onChange(value, name, index);
        },
        allowCustomValue: false,
        options: data,
        value: defaultValue,
        width: 30
      }));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: '2px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
      width: 15
    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      onChange: function onChange(value) {
        return _onChange(value, name, index);
      },
      allowCustomValue: false,
      options: data,
      value: defaultValue,
      width: 30
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelectPoint);

/***/ }),

/***/ "./Functions/Input/inputSeriesColorPicker.tsx":
/*!****************************************************!*\
  !*** ./Functions/Input/inputSeriesColorPicker.tsx ***!
  \****************************************************/
/*! exports provided: InputSeriesColorPicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesColorPicker", function() { return InputSeriesColorPicker; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */

var InputSeriesColorPicker = function InputSeriesColorPicker(_a) {
  var color = _a.color,
      keyInt = _a.keyInt,
      text = _a.text,
      _onChange = _a._onChange,
      width = _a.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: 15
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "colorPicker",
    style: {
      margin: '0.5%',
      padding: '0.5%',
      backgroundColor: '#1f1f20',
      border: '3px solid black'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
    color: color,
    onChange: function onChange(newColor) {
      return _onChange(keyInt, newColor);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (InputSeriesColorPicker); // width || Math.round(text.length * 1.7)

/***/ }),

/***/ "./Functions/Input/inputText.tsx":
/*!***************************************!*\
  !*** ./Functions/Input/inputText.tsx ***!
  \***************************************/
/*! exports provided: InputTextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextField", function() { return InputTextField; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextField = function InputTextField(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      disabled = _a.disabled;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
    label: label,
    labelWidth: 15,
    inputWidth: 15,
    type: "text",
    required: required,
    name: name,
    value: value,
    onChange: _handleChange,
    placeholder: placeholder,
    disabled: disabled ? disabled : false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextField); // Math.round((label && label.length > 0 ? label.length : 1) * 1.7)

/***/ }),

/***/ "./Functions/Input/inputTextOrientedLink.tsx":
/*!***************************************************!*\
  !*** ./Functions/Input/inputTextOrientedLink.tsx ***!
  \***************************************************/
/*! exports provided: InputTextOrientedLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextOrientedLink", function() { return InputTextOrientedLink; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextOrientedLink = function InputTextOrientedLink(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      isIncurved = _a.isIncurved;

  if (name.startsWith('pointCX') || name.startsWith('pointCY')) {
    if (isIncurved.value) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 15,
        inputWidth: 20,
        type: "text",
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
      label: label,
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      required: required,
      name: name,
      value: value,
      onChange: _handleChange,
      placeholder: placeholder
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextOrientedLink);

/***/ }),

/***/ "./Functions/Input/inputTextPoint.tsx":
/*!********************************************!*\
  !*** ./Functions/Input/inputTextPoint.tsx ***!
  \********************************************/
/*! exports provided: InputTextPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextPoint", function() { return InputTextPoint; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextPoint = function InputTextPoint(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      shape = _a.shape;

  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('rotateArrow')) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 10,
        inputWidth: 20,
        type: "text",
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: required,
      name: name,
      value: value,
      onChange: _handleChange,
      placeholder: placeholder
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextPoint);

/***/ }),

/***/ "./Functions/coodinateIsInInitialSpace.tsx":
/*!*************************************************!*\
  !*** ./Functions/coodinateIsInInitialSpace.tsx ***!
  \*************************************************/
/*! exports provided: coordinateIsInInitialSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordinateIsInInitialSpace", function() { return coordinateIsInInitialSpace; });
/* harmony import */ var _searchIDLimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchIDLimit */ "./Functions/searchIDLimit.tsx");

var coordinateIsInInitialSpace = function coordinateIsInInitialSpace(x, y, initial, baseMap) {
  console.log(x + ' ' + y);
  var initialPx = Object(_searchIDLimit__WEBPACK_IMPORTED_MODULE_0__["pixelToPercent"])(initial.coordinate, baseMap);
  console.log(initialPx);

  if (x < initialPx.xMin) {
    console.log('error');
    return 0;
  }

  if (x > initialPx.xMax) {
    console.log('error');
    return 0;
  }

  if (y < initialPx.yMin) {
    console.log('error');
    return 0;
  }

  if (y > initialPx.yMax) {
    console.log('error');
    return 0;
  }

  console.log('is ok');
  return 1;
};

/***/ }),

/***/ "./Functions/fetchMetrics.tsx":
/*!************************************!*\
  !*** ./Functions/fetchMetrics.tsx ***!
  \************************************/
/*! exports provided: reqMetricRegion, reqMetricAuxRegion, reqMetricPoint, reqMetricAuxPoint, reqMetricLink, reqMetricAuxLink, reqMetricOrientedLink, reqMetricAuxOrientedLink, reqUpdateMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricRegion", function() { return reqMetricRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxRegion", function() { return reqMetricAuxRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricPoint", function() { return reqMetricPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxPoint", function() { return reqMetricAuxPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricLink", function() { return reqMetricLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxLink", function() { return reqMetricAuxLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricOrientedLink", function() { return reqMetricOrientedLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxOrientedLink", function() { return reqMetricAuxOrientedLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqUpdateMetrics", function() { return reqUpdateMetrics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var reqMetricRegion = function reqMetricRegion(region, props) {
  var e_1, _a;

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === region.mainMetric.refId) {
        data.push(line);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  region.mainMetric.returnQuery = data;
};
var reqMetricAuxRegion = function reqMetricAuxRegion(region, props) {
  var e_2, _a, e_3, _b;

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(region.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;
      var data = [];

      try {
        for (var _e = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
};
var reqMetricPoint = function reqMetricPoint(point, props) {
  var e_4, _a;

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === point.mainMetric.refId) {
        data.push(line);
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  point.mainMetric.returnQuery = data;
};
var reqMetricAuxPoint = function reqMetricAuxPoint(point, props) {
  var e_5, _a, e_6, _b;

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;
      var data = [];

      try {
        for (var _e = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_6) throw e_6.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
};
var reqMetricLink = function reqMetricLink(link, props) {
  var e_7, _a;

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === link.mainMetric.refId) {
        data.push(line);
      }
    }
  } catch (e_7_1) {
    e_7 = {
      error: e_7_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_7) throw e_7.error;
    }
  }

  link.mainMetric.returnQuery = data;
};
var reqMetricAuxLink = function reqMetricAuxLink(link, props) {
  var e_8, _a, e_9, _b;

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(link.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;
      var data = [];

      try {
        for (var _e = (e_9 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
          }
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_9) throw e_9.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_8_1) {
    e_8 = {
      error: e_8_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_8) throw e_8.error;
    }
  }
};
var reqMetricOrientedLink = function reqMetricOrientedLink(orientedLink, props) {
  var e_10, _a;

  var data = [];
  var dataB = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === orientedLink.mainMetric.refId) {
        data.push(line);
      }

      if (line.refId === orientedLink.mainMetricB.refId) {
        dataB.push(line);
      }
    }
  } catch (e_10_1) {
    e_10 = {
      error: e_10_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_10) throw e_10.error;
    }
  }

  orientedLink.mainMetric.returnQuery = data;
  orientedLink.mainMetricB.returnQuery = dataB;
};
var reqMetricAuxOrientedLink = function reqMetricAuxOrientedLink(orientedLink, props) {
  var e_11, _a, e_12, _b, e_13, _c, e_14, _d;

  try {
    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(orientedLink.metrics), _f = _e.next(); !_f.done; _f = _e.next()) {
      var metric = _f.value;
      var data = [];

      try {
        for (var _g = (e_12 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _h = _g.next(); !_h.done; _h = _g.next()) {
          var line = _h.value;

          if (line.refId === metric.refId) {
            data.push(line);
          }
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
        } finally {
          if (e_12) throw e_12.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_11_1) {
    e_11 = {
      error: e_11_1
    };
  } finally {
    try {
      if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
    } finally {
      if (e_11) throw e_11.error;
    }
  }

  try {
    for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(orientedLink.metricsB), _k = _j.next(); !_k.done; _k = _j.next()) {
      var metric = _k.value;
      var dataB = [];

      try {
        for (var _l = (e_14 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _m = _l.next(); !_m.done; _m = _l.next()) {
          var line = _m.value;

          if (line.refId === metric.refId) {
            dataB.push(line);
          }
        }
      } catch (e_14_1) {
        e_14 = {
          error: e_14_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l["return"])) _d.call(_l);
        } finally {
          if (e_14) throw e_14.error;
        }
      }

      metric.returnQuery = dataB;
    }
  } catch (e_13_1) {
    e_13 = {
      error: e_13_1
    };
  } finally {
    try {
      if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
    } finally {
      if (e_13) throw e_13.error;
    }
  }
};
var reqUpdateMetrics = function reqUpdateMetrics(props) {
  var e_15, _a, e_16, _b, e_17, _c, e_18, _d;

  try {
    // Update regions
    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.regionCoordinateSpace), _f = _e.next(); !_f.done; _f = _e.next()) {
      var region = _f.value;
      reqMetricRegion(region, props);
      reqMetricAuxRegion(region, props);
    }
  } catch (e_15_1) {
    e_15 = {
      error: e_15_1
    };
  } finally {
    try {
      if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
    } finally {
      if (e_15) throw e_15.error;
    }
  }

  try {
    // Update links
    for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayLinks), _h = _g.next(); !_h.done; _h = _g.next()) {
      var link = _h.value;
      reqMetricLink(link, props);
      reqMetricAuxLink(link, props);
    }
  } catch (e_16_1) {
    e_16 = {
      error: e_16_1
    };
  } finally {
    try {
      if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
    } finally {
      if (e_16) throw e_16.error;
    }
  }

  try {
    // Update links
    for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayOrientedLinks), _k = _j.next(); !_k.done; _k = _j.next()) {
      var orientedLink = _k.value;
      reqMetricOrientedLink(orientedLink, props);
      reqMetricAuxOrientedLink(orientedLink, props);
    }
  } catch (e_17_1) {
    e_17 = {
      error: e_17_1
    };
  } finally {
    try {
      if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
    } finally {
      if (e_17) throw e_17.error;
    }
  }

  try {
    // Update points
    for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayPoints), _m = _l.next(); !_m.done; _m = _l.next()) {
      var point = _m.value;
      reqMetricPoint(point, props);
      reqMetricAuxPoint(point, props);
    }
  } catch (e_18_1) {
    e_18 = {
      error: e_18_1
    };
  } finally {
    try {
      if (_m && !_m.done && (_d = _l["return"])) _d.call(_l);
    } finally {
      if (e_18) throw e_18.error;
    }
  }
};

/***/ }),

/***/ "./Functions/getInfoDisplayRegion.tsx":
/*!********************************************!*\
  !*** ./Functions/getInfoDisplayRegion.tsx ***!
  \********************************************/
/*! exports provided: getInfoDisplayRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoDisplayRegion", function() { return getInfoDisplayRegion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fetchMetrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchMetrics */ "./Functions/fetchMetrics.tsx");
/* harmony import */ var _getResultQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getResultQuery */ "./Functions/getResultQuery.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


 // import { getLowerLimit, LowerLimit } from './getLowerLimit';



var getTextGenerate = function getTextGenerate(region, valueMetric) {
  if (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText) {
    var roundMetrics = region.textObj.valueGenerateObjectText ? parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10) : 1;
    var style = {
      color: region.textObj.valueGenerateObjectText.addColorTextElement ? region.textObj.valueGenerateObjectText.colorTextElement : 'black',
      backgroundColor: region.textObj.valueGenerateObjectText.addColorBackElement ? region.textObj.valueGenerateObjectText.colorBackElement : 'rgba(0, 0, 0, 0)'
    };
    var convertValue = '';

    if (valueMetric && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.numericFormatElement !== '' && roundMetrics) {
      convertValue = (valueMetric || 0).toPrecision(roundMetrics).toString();
    } else if (valueMetric) {
      convertValue = valueMetric.toString();
    }

    var modeText = region.textObj.valueGenerateObjectText.legendElement + ' ' + convertValue + ' ' + region.textObj.valueGenerateObjectText.unit;
    var modeHTML = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: style
    }, region.textObj.valueGenerateObjectText.legendElement, convertValue, region.textObj.valueGenerateObjectText.unit);
    return {
      modeHTML: modeHTML,
      modeText: modeText
    };
  }

  return {
    modeHTML: null,
    modeText: null
  };
};

var getTextRegion = function getTextRegion(region) {
  var style = {
    color: region.textObj.colorText,
    backgroundColor: region.textObj.colorBack,
    fontWeight: region.textObj.style.bold ? 'bold' : 'normal',
    fontStyle: region.textObj.style.italic ? 'italic' : 'normal',
    textDecoration: region.textObj.style.underline ? 'underline' : 'none'
  };
  var modeText = region.label;
  var modeHTML = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: style
  }, region.label);
  return {
    modeHTML: modeHTML,
    modeText: modeText
  };
};

var getText = function getText(region, valueMetric) {
  var generateText = {
    modeHTML: null,
    modeText: null
  };
  var generateTextRegion = {
    modeHTML: null,
    modeText: null
  };

  if (!region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
    generateText = getTextGenerate(region, valueMetric);
  }

  if (!region.textObj.isTextTooltip) {
    generateTextRegion = getTextRegion(region);
  }

  var modeHTML = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, generateTextRegion.modeHTML && generateTextRegion.modeHTML, generateText.modeHTML && generateText.modeHTML);
  var modeText = (generateTextRegion.modeText ? generateTextRegion.modeText + ' ' : '') + (generateText.modeText ? generateText.modeText : '');
  return {
    modeHTML: modeHTML,
    modeText: modeText
  };
};

var getTooltip = function getTooltip(region, valueMetric) {
  var generateText = {
    modeHTML: null,
    modeText: null
  };
  var generateTextRegion = {
    modeHTML: null,
    modeText: null
  };

  if (region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
    generateText = getTextGenerate(region, valueMetric);
  }

  if (region.textObj.isTextTooltip) {
    generateTextRegion = getTextRegion(region);
  }

  var modeHTML = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, generateTextRegion.modeHTML && generateTextRegion.modeHTML, generateText.modeHTML && generateText.modeHTML);
  var modeText = (generateTextRegion.modeText ? generateTextRegion.modeText + ' ' : '') + (generateText.modeText ? generateText.modeText : '');
  return {
    modeHTML: modeHTML,
    modeText: modeText
  };
};

var updateMetrics = function updateMetrics(region, props) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , Promise.resolve('Success').then(function () {
            Object(_fetchMetrics__WEBPACK_IMPORTED_MODULE_1__["reqMetricRegion"])(region, props);
          })];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
};

var getInfoDisplayRegion = function getInfoDisplayRegion(region, props) {
  updateMetrics(region, props);
  var valueMetric = Object(_getResultQuery__WEBPACK_IMPORTED_MODULE_2__["getResultQuery"])(region.mainMetric);
  var text = getText(region, valueMetric);
  var tooltip = getTooltip(region, valueMetric);
  return {
    tooltip: tooltip,
    text: text
  };
};

/***/ }),

/***/ "./Functions/getLowerLimit.tsx":
/*!*************************************!*\
  !*** ./Functions/getLowerLimit.tsx ***!
  \*************************************/
/*! exports provided: getLowerLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowerLimit", function() { return getLowerLimit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/**
 * Get color with lower limit and prometheus value
 * @returns {LowerLimit} new color value
 */

var getLowerLimit = function getLowerLimit(coordinate, value) {
  var e_1, _a;

  var lowerLimit = coordinate.lowerLimit;
  var result = {
    colorBack: '',
    colorBorder: '',
    sizeBorder: 0
  };

  if (coordinate.colorMode && value) {
    try {
      for (var lowerLimit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lowerLimit), lowerLimit_1_1 = lowerLimit_1.next(); !lowerLimit_1_1.done; lowerLimit_1_1 = lowerLimit_1.next()) {
        var line = lowerLimit_1_1.value;
        var min = line.lowerLimitMin.replace('>', '');
        var minFloat = parseFloat(min);
        var maxFloat = parseFloat(line.lowerLimitMax);

        if ((minFloat <= value || !line.lowerLimitMin) && (maxFloat >= value || !line.lowerLimitMax)) {
          if (lowerLimit.length > 0) {
            result.colorBack = coordinate.traceBack ? line.backColor : '';
            result.colorBorder = coordinate.traceBorder ? line.borderColor : '';
            result.sizeBorder = coordinate.traceBorder ? parseInt(line.sizeBorder, 10) : 0;
            break;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (lowerLimit_1_1 && !lowerLimit_1_1.done && (_a = lowerLimit_1["return"])) _a.call(lowerLimit_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  } else {
    if (lowerLimit.length > 0) {
      result.colorBack = coordinate.traceBack ? lowerLimit[0].backColor : '';
      result.colorBorder = coordinate.traceBorder ? lowerLimit[0].borderColor : '';
      result.sizeBorder = coordinate.traceBorder ? parseInt(lowerLimit[0].sizeBorder, 10) : 0;
    }
  }

  return result;
};

/***/ }),

/***/ "./Functions/getResultQuery.tsx":
/*!**************************************!*\
  !*** ./Functions/getResultQuery.tsx ***!
  \**************************************/
/*! exports provided: getResultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultQuery", function() { return getResultQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/** search is key and keyValue is in query */

var searchNameIsKey = function searchNameIsKey(query, mainMetric) {
  var e_1, _a;

  var _b;

  if (mainMetric.key === '' && mainMetric.keyValue === '') {
    return true;
  }

  var nameQuery = ((_b = query.name) === null || _b === void 0 ? void 0 : _b.split(',').map(function (value) {
    return value.replace(/[\"{}]/gm, '');
  })) || [];

  if (nameQuery && nameQuery.length > 0) {
    try {
      for (var nameQuery_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(nameQuery), nameQuery_1_1 = nameQuery_1.next(); !nameQuery_1_1.done; nameQuery_1_1 = nameQuery_1.next()) {
        var oneQuery = nameQuery_1_1.value;
        var keyValue = oneQuery.split('=');

        if (keyValue.length === 2) {
          if (keyValue[0] === mainMetric.key && keyValue[1] === mainMetric.keyValue) {
            return true;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (nameQuery_1_1 && !nameQuery_1_1.done && (_a = nameQuery_1["return"])) _a.call(nameQuery_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }

  return false;
};

var getResultQuery = function getResultQuery(mainMetric) {
  var e_2, _a;

  var cnt = null;

  if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
    var debug = [];
    var countValue = 0;
    cnt = 0;

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(mainMetric.returnQuery), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;
        var result = searchNameIsKey(line, mainMetric);

        if (result) {
          var sizeQuery = line.fields[0].values.length;

          for (var i = 0; i < sizeQuery; i++) {
            if (line.fields.length > 0 && line.fields[0].values.get(i)) {
              cnt += line.fields[0].values.get(i);
              debug.push(line.fields[0].values.get(i));
              ++countValue;
            }
          }
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    if (mainMetric.manageValue === 'avg') {
      cnt /= countValue;
    } else if (mainMetric.manageValue === 'err') {
      if (countValue > 1) {
        cnt = null;
      }
    }
  }

  return cnt;
};

/***/ }),

/***/ "./Functions/initOrientedLink.tsx":
/*!****************************************!*\
  !*** ./Functions/initOrientedLink.tsx ***!
  \****************************************/
/*! exports provided: initOrientedLink, cloneOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOrientedLink", function() { return initOrientedLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneOrientedLink", function() { return cloneOrientedLink; });
/* harmony import */ var _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");
/* harmony import */ var _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");




var initOrientedLink = function initOrientedLink(newId, newZIndex) {
  var num = newId;
  var zIndex = newZIndex;
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]('', false, 'white', 'black', {
    bold: false,
    italic: false,
    underline: false
  }, false, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  }, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: true,
    // 'displayObjectPermanently': false,
    addColorTextElement: true,
    colorTextElement: 'white',
    addColorBackElement: true,
    colorBackElement: 'black'
  });
  var parametrageMetric = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"]('', '', '');
  var initPositionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"]('', '', '', '', {}, {});
  var initMainMetrics = {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  };
  var initMainMetricsB = {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  };
  var newCoordinate = new _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_3__["OrientedLinkClass"](num, parametrageMetric, '', [], '', initTextObject, // {
  // 	'key': keyMainMetric || '',
  // 	'unit': '',
  // 	'format': '',
  // 	'keyValue': keyValueMainMetric || '',
  // 	'refId': refIdMainMetric || '',
  // 	'manageValue': 'avg',
  // }
  initMainMetrics, [], false, false, false, initPositionParameter, 'orientedLink' + num.toString(), {
    label: 'double',
    value: 'double'
  }, {
    label: 'Medium',
    value: 'Medium'
  }, '0', '0', '#5794F2', '0', '0', '#E54658', '', '', '', '', '', '', zIndex, '0', '0', {}, initMainMetricsB, []);
  return newCoordinate;
};
var cloneOrientedLink = function cloneOrientedLink(orientedLink) {
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]( //orientedLink.textObj.legend,
  orientedLink.textObj.value, orientedLink.textObj.isTextTooltip, orientedLink.textObj.colorBack, orientedLink.textObj.colorText, orientedLink.textObj.style, orientedLink.textObj.generateObjectText, orientedLink.textObj.valueGenerateObjectText, orientedLink.textObj.generateAuxiliaryElement);
  var linkURL = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"](orientedLink.linkURL.followLink, orientedLink.linkURL.hoveringTooltipLink, orientedLink.linkURL.hoveringTooltipText);
  var positionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"](orientedLink.positionParameter.labelAPositionX, orientedLink.positionParameter.labelAPositionY, orientedLink.positionParameter.labelBPositionX, orientedLink.positionParameter.labelBPositionY, orientedLink.positionParameter.tooltipPositionA, orientedLink.positionParameter.tooltipPositionB);
  var mainMetric = {
    key: orientedLink.mainMetric.key,
    unit: orientedLink.mainMetric.unit,
    format: orientedLink.mainMetric.format,
    keyValue: orientedLink.mainMetric.keyValue,
    refId: orientedLink.mainMetric.refId,
    expr: orientedLink.mainMetric.expr,
    returnQuery: orientedLink.mainMetric.returnQuery,
    manageValue: orientedLink.mainMetric.manageValue
  };
  var newCoordinate = new _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_3__["OrientedLinkClass"](orientedLink.id, linkURL, orientedLink.meta, orientedLink.lowerLimit, orientedLink.label, initTextObject, mainMetric, orientedLink.metrics, orientedLink.colorMode, orientedLink.traceBack, orientedLink.traceBorder, positionParameter, orientedLink.name, orientedLink.orientationLink, orientedLink.size, orientedLink.pointAPositionX, orientedLink.pointAPositionY, orientedLink.colorCoordinateA, orientedLink.pointBPositionX, orientedLink.pointBPositionY, orientedLink.colorCoordinateB, orientedLink.valueMainMetricA, orientedLink.valueMainMetricB, orientedLink.pointIn, orientedLink.pointOut, orientedLink.regionIn, orientedLink.regionOut, orientedLink.zIndex, orientedLink.pointCPositionX, orientedLink.pointCPositionY, orientedLink.isIncurved, orientedLink.mainMetricB, orientedLink.metricsB);
  return newCoordinate;
};

/***/ }),

/***/ "./Functions/initPoint.tsx":
/*!*********************************!*\
  !*** ./Functions/initPoint.tsx ***!
  \*********************************/
/*! exports provided: initPoint, clonePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPoint", function() { return initPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clonePoint", function() { return clonePoint; });
/* harmony import */ var _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");
/* harmony import */ var _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/PointClass */ "./Models/PointClass.tsx");




var initPoint = function initPoint(index) {
  var newId = index;
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]('', false, 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 1)', {
    italic: false,
    bold: false,
    underline: false
  }, false, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  }, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  });
  var linkURL = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"]('', '', '');
  var positionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
  var newCoordinate = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](newId, linkURL, '', [], '', initTextObject, {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  }, [], false, false, false, positionParameter, 'point' + newId.toString(), '', {
    label: 'Yes',
    value: 'true'
  }, {
    label: 'Circle',
    value: 'circle'
  }, {
    label: 'Medium',
    value: 'medium'
  }, {
    label: 'Medium',
    value: 'medium'
  }, '0', '0', '0', 'black', [], []);
  return newCoordinate;
};
var clonePoint = function clonePoint(point) {
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]( // point.textObj.legend,
  point.textObj.value, point.textObj.isTextTooltip, point.textObj.colorBack, point.textObj.colorText, point.textObj.style, point.textObj.generateObjectText, point.textObj.valueGenerateObjectText, point.textObj.generateAuxiliaryElement);
  var linkURL = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"](point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipText);
  var positionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"](point.positionParameter.labelAPositionX, point.positionParameter.labelAPositionY, point.positionParameter.labelBPositionX, point.positionParameter.labelBPositionY, point.positionParameter.tooltipPositionA, point.positionParameter.tooltipPositionB);
  var mainMetric = {
    key: point.mainMetric.key,
    unit: point.mainMetric.unit,
    format: point.mainMetric.format,
    keyValue: point.mainMetric.keyValue,
    refId: point.mainMetric.refId,
    expr: point.mainMetric.expr,
    returnQuery: point.mainMetric.returnQuery,
    manageValue: point.mainMetric.manageValue
  };
  var newCoordinate = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](point.id, linkURL, point.meta, point.lowerLimit, point.label, initTextObject, mainMetric, point.metrics, point.colorMode, point.traceBack, point.traceBorder, positionParameter, point.name, point.valueMetric, point.drawGraphicMarker, point.shape, point.sizeWidth, point.sizeHeight, point.rotateArrow, point.positionShapeX, point.positionShapeY, point.color, point.associateOrientedLinksIn, point.associateOrientedLinksOut);
  return newCoordinate;
};

/***/ }),

/***/ "./Functions/initRegionCoordinateSpace.tsx":
/*!*************************************************!*\
  !*** ./Functions/initRegionCoordinateSpace.tsx ***!
  \*************************************************/
/*! exports provided: initRegionCoordinateSpace, cloneRegionCoordinateSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRegionCoordinateSpace", function() { return initRegionCoordinateSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneRegionCoordinateSpace", function() { return cloneRegionCoordinateSpace; });
/* harmony import */ var Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/RegionClass */ "./Models/RegionClass.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");




/** init CoordinateSpaceExtendClass */

var initRegionCoordinateSpace = function initRegionCoordinateSpace(index) {
  var newId = index + 1;
  var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__["TextObject"]('', false, 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 1)', {
    bold: false,
    italic: false,
    underline: false
  }, false, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  }, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInTooltip: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  });
  var linkURL = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__["LinkURLClass"]('', '', '');
  var coords = {
    xMin: '0',
    xMax: '0',
    yMin: '0',
    yMax: '0'
  };
  var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
  var newCoordinate = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__["RegionClass"](newId, linkURL, '', [], '', initTextObject, {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  }, [], false, false, false, positionParameter, '', [], coords, true, '');
  return newCoordinate;
};
var cloneRegionCoordinateSpace = function cloneRegionCoordinateSpace(region) {
  var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__["TextObject"]( // region.textObj.legend,
  region.textObj.value, region.textObj.isTextTooltip, region.textObj.colorBack, region.textObj.colorText, region.textObj.style, region.textObj.generateObjectText, region.textObj.valueGenerateObjectText, region.textObj.generateAuxiliaryElement);
  var linkURL = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__["LinkURLClass"](region.linkURL.followLink, region.linkURL.hoveringTooltipLink, region.linkURL.hoveringTooltipText);
  var coords = {
    xMin: region.coords.xMin,
    xMax: region.coords.xMax,
    yMin: region.coords.yMin,
    yMax: region.coords.yMax
  };
  var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__["PositionParameterClass"](region.positionParameter.labelAPositionX, region.positionParameter.labelAPositionY, region.positionParameter.labelBPositionX, region.positionParameter.labelBPositionY, region.positionParameter.tooltipPositionA, region.positionParameter.tooltipPositionB);
  var mainMetric = {
    key: region.mainMetric.key,
    unit: region.mainMetric.unit,
    format: region.mainMetric.format,
    keyValue: region.mainMetric.keyValue,
    refId: region.mainMetric.refId,
    expr: region.mainMetric.expr,
    returnQuery: region.mainMetric.returnQuery,
    manageValue: region.mainMetric.manageValue
  };
  var newCoordinate = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__["RegionClass"](region.id, linkURL, region.meta, region.lowerLimit, region.label, initTextObject, mainMetric, region.metrics, region.colorMode, region.traceBack, region.traceBorder, positionParameter, region.idSVG, region.orientedLink, coords, region.mode, region.img);
  return newCoordinate;
};

/***/ }),

/***/ "./Functions/isNumFloat.tsx":
/*!**********************************!*\
  !*** ./Functions/isNumFloat.tsx ***!
  \**********************************/
/*! exports provided: isNumFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumFloat", function() { return isNumFloat; });
var isNumFloat = function isNumFloat(value) {
  if (String(value).match(/^-{0,1}\d+$/) || String(value).match(/^\d+\.\d+$/)) {
    return 1;
  }

  return 0;
};

/***/ }),

/***/ "./Functions/otherFunction.tsx":
/*!*************************************!*\
  !*** ./Functions/otherFunction.tsx ***!
  \*************************************/
/*! exports provided: calculRealCoordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculRealCoordinate", function() { return calculRealCoordinate; });
/* harmony import */ var Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Functions/isNumFloat */ "./Functions/isNumFloat.tsx");

/**
 * Check limit of coordinate
 * @param {number} value number to test
 * @param {number} position 1 if xMin, 2 if xMax, 3 if yMin, 4 if yMax
 * @returns 0 if it's good or 1 otherwise
 */

var verifLimit = function verifLimit(useLimit, limit, intValue, position) {
  // const { useLimit, limit } = this.props;
  if (!useLimit) {
    return 0;
  }

  if (limit) {
    if (position === 1 || position === 2) {
      if (parseInt(limit.xMin, 10) <= intValue && parseInt(limit.xMax, 10) >= intValue) {
        return intValue;
      } else {
        return position === 1 ? parseInt(limit.xMin, 10) : parseInt(limit.xMax, 10);
      }
    } else if (position === 3 || position === 4) {
      if (parseInt(limit.yMin, 10) <= intValue && parseInt(limit.yMax, 10) >= intValue) {
        return intValue;
      } else {
        return position === 3 ? parseInt(limit.yMin, 10) : parseInt(limit.yMax, 10);
      }
    }
  }

  return 0;
};
/**
 * Transform coordinate percent for css
 * @param {number} size value of coordinate
 * @param {boolean} isMax true if x or y is max value
 * @returns coordinate to percent
 */


var transformCoordinateToPx = function transformCoordinateToPx(size, isMax) {
  var maxSize = 100;
  var minSize = -100;
  var midSize = 50;

  if (size > maxSize) {
    size = maxSize;
  } else if (size < 0 && size < minSize) {
    size = minSize;
  }

  if (size >= 0) {
    size /= 2;
    size = isMax ? midSize - size : midSize + size;
  } else {
    size *= -1;
    size /= 2;
    size = midSize - size;
  }

  return size;
};
/** calcul value for top, bottom, left and right div coordinate */


var calculRealCoordinate = function calculRealCoordinate(coordinate, useLimit, limit) {
  var pLeft;
  var pRight;
  var pTop;
  var pBottom;
  var xMin = 0;
  var xMax = 0;
  var yMin = 0;
  var yMax = 0;
  xMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.xMin) ? parseInt(coordinate.coords.xMin, 10) : 0;
  xMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.xMax) ? parseInt(coordinate.coords.xMax, 10) : 0;
  yMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.yMin) ? parseInt(coordinate.coords.yMin, 10) : 0;
  yMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.yMax) ? parseInt(coordinate.coords.yMax, 10) : 0;

  if (useLimit) {
    xMin = verifLimit(useLimit, limit, xMin, 1);
    xMax = verifLimit(useLimit, limit, xMax, 2);
    yMin = verifLimit(useLimit, limit, yMin, 3);
    yMax = verifLimit(useLimit, limit, yMax, 4);
  }

  if (xMax >= 0) {
    pLeft = transformCoordinateToPx(xMin, false).toString() + '%';
    pRight = transformCoordinateToPx(xMax, true).toString() + '%';
  } else {
    xMin = xMin * -1;
    pRight = transformCoordinateToPx(xMin, false).toString() + '%';
    pLeft = transformCoordinateToPx(xMax, true).toString() + '%';
  }

  if (yMax >= 0) {
    pBottom = transformCoordinateToPx(yMin, false).toString() + '%';
    pTop = transformCoordinateToPx(yMax, true).toString() + '%';
  } else {
    yMin = yMin * -1;
    pTop = transformCoordinateToPx(yMin, false).toString() + '%';
    pBottom = transformCoordinateToPx(yMax, true).toString() + '%';
  }

  return {
    left: pLeft,
    right: pRight,
    top: pTop,
    bottom: pBottom
  };
};

/***/ }),

/***/ "./Functions/parseColor.tsx":
/*!**********************************!*\
  !*** ./Functions/parseColor.tsx ***!
  \**********************************/
/*! exports provided: parseColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
var parseColor = function parseColor(color) {
  var colorEdit = color;
  var transparency = '';

  if (color.indexOf('#') > -1) {
    colorEdit = color.replace('rgba', 'rgb');

    if (colorEdit.indexOf(',') > -1) {
      var arrayColor = colorEdit.split(',');
      colorEdit = arrayColor[0] + ',' + arrayColor[1] + ',' + arrayColor[2] + ')';

      if (arrayColor.length > 3) {
        transparency = arrayColor[3].replace(')', '');
      }
    }
  }

  return {
    color: colorEdit,
    transparency: transparency
  };
};

/***/ }),

/***/ "./Functions/searchIDLimit.tsx":
/*!*************************************!*\
  !*** ./Functions/searchIDLimit.tsx ***!
  \*************************************/
/*! exports provided: pixelToPercent, returnAllId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelToPercent", function() { return pixelToPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnAllId", function() { return returnAllId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/** verif limit for one coordinate */

var verifAllLimit = function verifAllLimit(n, limit, isWith) {
  if (isWith) {
    if (limit[0] <= n && limit[1] >= n) {
      return true;
    }
  } else {
    if (limit[2] <= n && limit[3] >= n) {
      return true;
    }
  }

  return false;
};
/** search all coordinate if atribute is d */


var searchOtherLimitDAttribute = function searchOtherLimitDAttribute(data, limit) {
  var e_1, _a, e_2, _b;

  var parseWithLetter = [];
  var regex = /[a-zA-Z]{1}[0-9.\W]*/g;
  var tmp;

  do {
    tmp = regex.exec(data);

    if (tmp) {
      parseWithLetter.push(tmp.toString());
    }
  } while (tmp);

  try {
    for (var parseWithLetter_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parseWithLetter), parseWithLetter_1_1 = parseWithLetter_1.next(); !parseWithLetter_1_1.done; parseWithLetter_1_1 = parseWithLetter_1.next()) {
      var line = parseWithLetter_1_1.value;
      var tmpBis = line.split(' ');
      var index = 0;

      try {
        for (var tmpBis_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(tmpBis)), tmpBis_1_1 = tmpBis_1.next(); !tmpBis_1_1.done; tmpBis_1_1 = tmpBis_1.next()) {
          var lineTmp = tmpBis_1_1.value;

          if (lineTmp === '') {
            break;
          }

          if (index !== 0 && index % 2 !== 0) {
            if (!verifAllLimit(parseInt(lineTmp, 10), limit, true)) {
              return true;
            }
          } else if (index !== 0) {
            if (!verifAllLimit(parseInt(lineTmp, 10), limit, false)) {
              return true;
            }
          }

          ++index;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (tmpBis_1_1 && !tmpBis_1_1.done && (_b = tmpBis_1["return"])) _b.call(tmpBis_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (parseWithLetter_1_1 && !parseWithLetter_1_1.done && (_a = parseWithLetter_1["return"])) _a.call(parseWithLetter_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return false;
};
/** search if x and y are in limit */


var searchOtherLimitXYAttribute = function searchOtherLimitXYAttribute(element, limit, labelX, labelY) {
  var x = parseInt(element.getAttribute(labelX) || '0', 10);
  var y = parseInt(element.getAttribute(labelY) || '0', 10);

  if (x !== null && y !== null) {
    if (verifAllLimit(x, limit, true) && verifAllLimit(y, limit, false)) {
      return false;
    }
  }

  return true;
};
/** search if x1|2 and y1|2 are in limit */


var searchOtherLimitXnYnAttribute = function searchOtherLimitXnYnAttribute(element, limit) {
  var x1 = parseInt(element.getAttribute('x1') || '0', 10);
  var x2 = parseInt(element.getAttribute('x2') || '0', 10);
  var y1 = parseInt(element.getAttribute('y1') || '0', 10);
  var y2 = parseInt(element.getAttribute('y2') || '0', 10);

  if (x1 && x2 && y1 && y2) {
    if (verifAllLimit(x1, limit, true) && verifAllLimit(x2, limit, true) && verifAllLimit(y1, limit, false) && verifAllLimit(y2, limit, false)) {
      return false;
    }
  }

  return true;
};
/** search if region id svg is in limit */


var regionIsOverLimit = function regionIsOverLimit(element, limit) {
  if (!element) {
    return true;
  }

  var attribute = element.getAttribute('d');

  if (attribute) {
    return searchOtherLimitDAttribute(attribute, limit);
  }

  attribute = element.getAttribute('x');

  if (attribute) {
    return searchOtherLimitXYAttribute(element, limit, 'x', 'y');
  }

  attribute = element.getAttribute('x1');

  if (attribute) {
    return searchOtherLimitXnYnAttribute(element, limit);
  }

  attribute = element.getAttribute('cx');

  if (attribute) {
    return searchOtherLimitXYAttribute(element, limit, 'cx', 'cy');
  }

  return true;
};
/** convert initial percent coordinate from -100 -> 100 to 0 -> 100 */


var convertInitialCoordinate = function convertInitialCoordinate(n) {
  var midPercent = 50;
  n = n >= 0 ? (n / 2 || 0) + midPercent : -n / 2 - midPercent;
  return n;
};

var pixelToPercent = function pixelToPercent(coordinate, baseMap) {
  var limit = [parseInt(coordinate.xMin, 10), parseInt(coordinate.xMax, 10), parseInt(coordinate.yMin, 10), parseInt(coordinate.yMax, 10)];
  limit[0] = convertInitialCoordinate(limit[0]);
  limit[1] = convertInitialCoordinate(limit[1]);
  limit[2] = convertInitialCoordinate(limit[2]);
  limit[3] = convertInitialCoordinate(limit[3]);
  var sizeHeight = parseInt(baseMap.height, 10);
  var sizeWidth = parseInt(baseMap.width, 10);
  var percent = 100;
  limit[0] = limit[0] / percent || 0;
  limit[0] = sizeWidth * limit[0];
  limit[1] = limit[1] / percent || 0;
  limit[1] = sizeWidth * limit[1];
  limit[2] = limit[2] / percent || 0;
  limit[2] = sizeHeight * limit[2];
  limit[3] = limit[3] / percent || 0;
  limit[3] = sizeHeight * limit[3];
  return {
    xMin: limit[0],
    xMax: limit[1],
    yMin: limit[2],
    yMax: limit[3]
  };
};
/** return all id list in principal id */

var returnAllId = function returnAllId(coordinate, baseMap) {
  var _a;

  var arrId = [];
  var arrIdVerif = [];
  var listElement = (_a = document.getElementById(baseMap.idSVG)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('*[id]');

  if (listElement) {
    // const limit: number[] = [
    //   parseInt(coordinate.xMin, 10),
    //   parseInt(coordinate.xMax, 10),
    //   parseInt(coordinate.yMin, 10),
    //   parseInt(coordinate.yMax, 10),
    // ];
    // limit[0] = convertInitialCoordinate(limit[0]);
    // limit[1] = convertInitialCoordinate(limit[1]);
    // limit[2] = convertInitialCoordinate(limit[2]);
    // limit[3] = convertInitialCoordinate(limit[3]);
    // const sizeHeight: number = parseInt(baseMap.height, 10);
    // const sizeWidth: number = parseInt(baseMap.width, 10);
    // const percent = 100;
    // limit[0] = limit[0] / percent || 0;
    // limit[0] = sizeWidth * limit[0];
    // limit[1] = limit[1] / percent || 0;
    // limit[1] = sizeWidth * limit[1];
    // limit[2] = limit[2] / percent || 0;
    // limit[2] = sizeHeight * limit[2];
    // limit[3] = limit[3] / percent || 0;
    // limit[3] = sizeHeight * limit[3];
    var coordInt = pixelToPercent(coordinate, baseMap);
    var limit_1 = [coordInt.xMin, coordInt.xMax, coordInt.yMin, coordInt.yMax];
    Array.from(listElement).forEach(function (e) {
      if (!regionIsOverLimit(document.getElementById(e.id), limit_1)) {
        arrId.push(e.id);
      }

      arrIdVerif.push(e.id);
    });
    arrId.sort(function (a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
  } else {
    console.error('id svg not found');
  }

  return arrId;
};

/***/ }),

/***/ "./Functions/searchMinMaxIdSVG.tsx":
/*!*****************************************!*\
  !*** ./Functions/searchMinMaxIdSVG.tsx ***!
  \*****************************************/
/*! exports provided: searchMinMaxIdSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMinMaxIdSVG", function() { return searchMinMaxIdSVG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");


var initICoord4DInt = function initICoord4DInt() {
  return {
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0
  };
};

var searchForD = function searchForD(str) {
  var e_1, _a, e_2, _b;

  var coordinate = initICoord4DInt();
  var verif = [false, false, false, false];
  var parseWithLetter = [];
  var regex = /[a-zA-Z]{1}[0-9.\W]*/g;
  var tmp;

  do {
    tmp = regex.exec(str);

    if (tmp) {
      parseWithLetter.push(tmp.toString());
    }
  } while (tmp);

  try {
    for (var parseWithLetter_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parseWithLetter), parseWithLetter_1_1 = parseWithLetter_1.next(); !parseWithLetter_1_1.done; parseWithLetter_1_1 = parseWithLetter_1.next()) {
      var line = parseWithLetter_1_1.value;
      var tmpBis = line.split(' ');
      var index = 0;

      try {
        for (var tmpBis_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(tmpBis)), tmpBis_1_1 = tmpBis_1.next(); !tmpBis_1_1.done; tmpBis_1_1 = tmpBis_1.next()) {
          var lineTmp = tmpBis_1_1.value;

          if (lineTmp === '') {
            break;
          }

          var nb = parseInt(lineTmp, 10);

          if (index !== 0 && index % 2 !== 0) {
            if (nb < coordinate.xMin || verif[0] === false) {
              coordinate.xMin = nb;
              verif[0] = true;
            }

            if (nb > coordinate.xMax || verif[1] === false) {
              coordinate.xMax = nb;
              verif[1] = true;
            }
          } else if (index !== 0) {
            if (nb < coordinate.yMin || verif[2] === false) {
              coordinate.yMin = nb;
              verif[2] = true;
            }

            if (nb > coordinate.yMax || verif[3] === false) {
              coordinate.yMax = nb;
              verif[3] = true;
            }
          }

          index++;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (tmpBis_1_1 && !tmpBis_1_1.done && (_b = tmpBis_1["return"])) _b.call(tmpBis_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (parseWithLetter_1_1 && !parseWithLetter_1_1.done && (_a = parseWithLetter_1["return"])) _a.call(parseWithLetter_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return coordinate;
};

var searchForXY = function searchForXY(element, labelX, labelY) {
  var x = parseInt(element.getAttribute(labelX) || '0', 10);
  var y = parseInt(element.getAttribute(labelY) || '0', 10);
  var coordinate = initICoord4DInt();
  coordinate.xMin = x;
  coordinate.xMax = x;
  coordinate.yMin = y;
  coordinate.yMax = y;
  return coordinate;
};

var searchForXnYn = function searchForXnYn(element) {
  var x1 = parseInt(element.getAttribute('x1') || '0', 10);
  var x2 = parseInt(element.getAttribute('x2') || '0', 10);
  var y1 = parseInt(element.getAttribute('y1') || '0', 10);
  var y2 = parseInt(element.getAttribute('y2') || '0', 10);
  var coordinate = initICoord4DInt();
  coordinate.xMin = x1;
  coordinate.xMax = x2;
  coordinate.yMin = y1;
  coordinate.yMax = y2;
  return coordinate;
};

var searchMinMaxIdSVG = function searchMinMaxIdSVG(idSVG) {
  var element = document.getElementById(idSVG);

  if (!element) {
    return null;
  }

  var result = initICoord4DInt();

  if (element) {
    var attribute = element.getAttribute('d');

    if (attribute) {
      return searchForD(attribute);
    }

    attribute = element.getAttribute('x');

    if (attribute) {
      return searchForXY(element, 'x', 'y');
    }

    attribute = element.getAttribute('x1');

    if (attribute) {
      return searchForXnYn(element);
    }

    attribute = element.getAttribute('cx');

    if (attribute) {
      return searchForXY(element, 'cx', 'cy');
    }
  }

  return result;
};

/***/ }),

/***/ "./Localization/en.json":
/*!******************************!*\
  !*** ./Localization/en.json ***!
  \******************************/
/*! exports provided: objectVisibility, basics, simpleEditor, coordinateSpace, initialCoordonateSpace, inputCoordinate, textDefault, genericParameter, metricPrincipalSetting, colorVariable, textObject, defaultTextRendering, default */
/***/ (function(module) {

module.exports = {"objectVisibility":{"decalCenterPointTextRegion":"Shift the center point of the text region","decalCenterBubble":"Shift the point or center of a tooltip","forceCalqueLevel":"Force a specific layer level","forceCourbSpecificLink":"Force a specific link curvature","calcLevel":"Layer level","courbure":"Curvature"},"basics":{"abscisses":"Abscissa","ordonnees":"Ordered","delete":"Delete","label":"Label"},"simpleEditor":{"renduTextDefault":"Default text rendering","display":"Display","pictureLink":"Image SVG","genericSettings":"Generic parameters","genericSettingsBis":"Generic parameters bis","spaceInitialVisualisation":"Initial viewing space","CoordinateSpace":"Coordinates space","objectVisibility":"Visibility of objects","metricsSettings":"Metrics Settings"},"coordinateSpace":{"addCoordinate":"Add coordinates"},"initialCoordonateSpace":{"label":"Initial coordinates space"},"inputCoordinate":{"minXPosition":"Position X min","maxXPosition":"Position X max","minYPosition":"Position Y min","maxYPosition":"Position Y max","image":"Image","interfaceJson":"Interface name","key":"Key","valueKey":"Value key"},"textDefault":{"police":"Font","size":"Size","style":"Style"},"genericParameter":{"settingPrincipalMetric":"Main metric parameter","graphicObject":"Graphic object","variableColor":"Variable color","traceBackground":"Trace the background","traceContour":"Trace the border"},"metricPrincipalSetting":{"followLink":"Following link","link":"Link","text":"Text","linkTooltip":"Link tooltip","textInTooltip":"Text in tooltip"},"colorVariable":{"switchBackgroundColor":"Edit background color","switchOutlineColor":"Edit border color","thicknessOutline":"Size border","variationNumber":"Variation number","number":"Number","addColor":"Add color","infoSeuil":"Info seuil"},"textObject":{"titleTextObject":"A text object","optionalLegend":"Optional legend","legend":"Legend","value":"Value","optionalUnit":"Optional unit","unit":"Unit","principalMetric":"Principal metric","textRegion":"Text region","colorBackground":"Color background","colorText":"Color text","colorTextOptional":"Optional color text","textStyle":"Text style","style":"Style","textBubble":"Text tooltip","generateTextObject":"Generate text object","auxiliaryElement":"Auxiliary element","digitalFormatting":"Decimals","mesureUnit":"Unit of measure (if metric)","objectDisplayTextTooltip":"Object display in text or tooltip","objectDisplayInPermanentlyHover":"Object display in permanently or hovering","backgroundColor":"Background color","optionalBackgroundColor":"Optional background color","save":"Save"},"defaultTextRendering":{}};

/***/ }),

/***/ "./Models/ArrayInputClass.tsx":
/*!************************************!*\
  !*** ./Models/ArrayInputClass.tsx ***!
  \************************************/
/*! exports provided: ArrayInputClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInputClass", function() { return ArrayInputClass; });
/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
var ArrayInputClass =
/** @class */
function () {
  function ArrayInputClass(id, uneClassInput) {
    this.id = id;
    this.uneClassInput = uneClassInput;
  }
  /**
   * get id
   */


  ArrayInputClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  ArrayInputClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get value of InputClass[]
   */


  ArrayInputClass.prototype.getUneClassInput = function () {
    return this.uneClassInput;
  };
  /**
   * set a new InputClass[]
   * @param uneClassInput new object InputClass[]
   */


  ArrayInputClass.prototype.setUneClassInput = function (uneClassInput) {
    this.uneClassInput = uneClassInput;
  };

  return ArrayInputClass;
}();



/***/ }),

/***/ "./Models/ArrayInputSelectableClass.tsx":
/*!**********************************************!*\
  !*** ./Models/ArrayInputSelectableClass.tsx ***!
  \**********************************************/
/*! exports provided: ArrayInputSelectableClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInputSelectableClass", function() { return ArrayInputSelectableClass; });
/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
var ArrayInputSelectableClass =
/** @class */
function () {
  function ArrayInputSelectableClass(id, uneClassInput) {
    this.id = id;
    this.uneClassInput = uneClassInput;
  }
  /**
   * get id
   */


  ArrayInputSelectableClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  ArrayInputSelectableClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get value of InputClass[]
   */


  ArrayInputSelectableClass.prototype.getUneClassInput = function () {
    return this.uneClassInput;
  };
  /**
   * set a new InputClass[]
   * @param uneClassInput new object InputClass[]
   */


  ArrayInputSelectableClass.prototype.setUneClassInput = function (uneClassInput) {
    this.uneClassInput = uneClassInput;
  };

  return ArrayInputSelectableClass;
}();



/***/ }),

/***/ "./Models/CoordinateSpaceClass.tsx":
/*!*****************************************!*\
  !*** ./Models/CoordinateSpaceClass.tsx ***!
  \*****************************************/
/*! exports provided: CoordinateSpaceClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateSpaceClass", function() { return CoordinateSpaceClass; });
var CoordinateSpaceClass =
/** @class */
function () {
  function CoordinateSpaceClass(id, linkURL, meta, lowerLimit, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) {
    this.id = id;
    this.linkURL = linkURL;
    this.meta = meta;
    this.lowerLimit = lowerLimit;
    this.label = label;
    this.textObj = textObj;
    this.mainMetric = mainMetric;
    this.metrics = metrics;
    this.colorMode = colorMode;
    this.traceBack = traceBack;
    this.traceBorder = traceBorder;
    this.positionParameter = positionParameter;
  }

  return CoordinateSpaceClass;
}();



/***/ }),

/***/ "./Models/InputClass.tsx":
/*!*******************************!*\
  !*** ./Models/InputClass.tsx ***!
  \*******************************/
/*! exports provided: InputClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputClass", function() { return InputClass; });
/**
 * class InputClass
 * @param id string
 * @param label string
 * @param name string
 * @param inputType string
 * @param required boolean
 * @param placeholder string?
 * @param value string?
 */
var InputClass =
/** @class */
function () {
  function InputClass(id, label, name, inputType, required, placeholder, value) {
    this.id = id;
    this.label = label;
    this.name = name;
    this.inputType = inputType;
    this.required = required;
    this.placeholder = placeholder;
    this.value = value;
  }
  /**
   * get id
   */


  InputClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  InputClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get label
   */


  InputClass.prototype.getLabel = function () {
    return this.label;
  };
  /**
   * set label
   * @param label new label
   */


  InputClass.prototype.setLabel = function (label) {
    this.label = label;
  };
  /**
   * get name
   */


  InputClass.prototype.getName = function () {
    return this.name;
  };
  /**
   * set name
   * @param name new name
   */


  InputClass.prototype.setName = function (name) {
    this.name = name;
  };
  /**
   * get type input
   */


  InputClass.prototype.getInputType = function () {
    return this.inputType;
  };
  /**
   * set type input
   * @param inputType new input type
   */


  InputClass.prototype.setInputType = function (inputType) {
    this.inputType = inputType;
  };
  /**
   * get required
   */


  InputClass.prototype.getRequired = function () {
    return this.required;
  };
  /**
   * set required
   * @param required new value required
   */


  InputClass.prototype.setRequired = function (required) {
    this.required = required;
  };
  /**
   * get placeholder
   */


  InputClass.prototype.getPlaceholder = function () {
    return this.placeholder;
  };
  /**
   * set placeholder
   * @param placeholder new value placeholder
   */


  InputClass.prototype.setPlaceholder = function (placeholder) {
    this.placeholder = placeholder;
  };
  /**
   * get value
   */


  InputClass.prototype.getValue = function () {
    return this.value;
  };
  /**
   * set value
   * @param value new value
   */


  InputClass.prototype.setValue = function (value) {
    this.value = value;
  };

  return InputClass;
}();



/***/ }),

/***/ "./Models/InputSelectableClass.tsx":
/*!*****************************************!*\
  !*** ./Models/InputSelectableClass.tsx ***!
  \*****************************************/
/*! exports provided: InputSelectableClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectableClass", function() { return InputSelectableClass; });
/**
 * class InputClass
 */
var InputSelectableClass =
/** @class */
function () {
  function InputSelectableClass(id, label, name, input_type, optionValues, defaultValueColor, required, placeholder, value) {
    this.id = id;
    this.label = label;
    this.name = name;
    this.input_type = input_type;
    this.optionValues = optionValues;
    this.defaultValueColor = defaultValueColor;
    this.required = required;
    this.placeholder = placeholder;
    this.value = value;
  }

  InputSelectableClass.prototype.getId = function () {
    return this.id;
  };

  InputSelectableClass.prototype.setId = function (id) {
    this.id = id;
  };

  InputSelectableClass.prototype.getLabel = function () {
    return this.label;
  };

  InputSelectableClass.prototype.setLabel = function (label) {
    this.label = label;
  };

  InputSelectableClass.prototype.getName = function () {
    return this.name;
  };

  InputSelectableClass.prototype.setName = function (name) {
    this.name = name;
  };

  InputSelectableClass.prototype.getInputType = function () {
    return this.input_type;
  };

  InputSelectableClass.prototype.setInputType = function (input_type) {
    this.input_type = input_type;
  };

  InputSelectableClass.prototype.getRequired = function () {
    return this.required;
  };

  InputSelectableClass.prototype.setRequired = function (required) {
    this.required = required;
  };

  InputSelectableClass.prototype.getPlaceholder = function () {
    return this.placeholder;
  };

  InputSelectableClass.prototype.setPlaceholder = function (placeholder) {
    this.placeholder = placeholder;
  };

  InputSelectableClass.prototype.getValue = function () {
    return this.value;
  };

  InputSelectableClass.prototype.setValue = function (value) {
    this.value = value;
  };

  InputSelectableClass.prototype.getOptionValues = function () {
    return this.optionValues;
  };

  InputSelectableClass.prototype.setOptionValues = function (optionValues) {
    this.optionValues = optionValues;
  };

  InputSelectableClass.prototype.getDefaultValueColor = function () {
    return this.defaultValueColor;
  };

  InputSelectableClass.prototype.setDefaultValueColor = function (defaultValueColor) {
    this.defaultValueColor = defaultValueColor;
  };

  return InputSelectableClass;
}();



/***/ }),

/***/ "./Models/LinkURLClass.tsx":
/*!*********************************!*\
  !*** ./Models/LinkURLClass.tsx ***!
  \*********************************/
/*! exports provided: LinkURLClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkURLClass", function() { return LinkURLClass; });
/**
 * class for parametrage metric
 */
var LinkURLClass =
/** @class */
function () {
  function LinkURLClass(followLink, hoveringTooltipLink, hoveringTooltipText) {
    this.followLink = followLink;
    this.hoveringTooltipLink = hoveringTooltipLink;
    this.hoveringTooltipText = hoveringTooltipText;
  }

  Object.defineProperty(LinkURLClass.prototype, "getFollowLink", {
    /**
     * get followingLink
     */
    get: function get() {
      return this.followLink;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setFollowLink", {
    /**
     * set followingLink
     * @param {string} value new value
     */
    set: function set(value) {
      this.followLink = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "getHoveringTooltipLink", {
    /**
     * get hoveringTooltipLink
     */
    get: function get() {
      return this.hoveringTooltipLink;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setHoveringTooltipLink", {
    /**
     * setHoveringTooltipLink
     * @param {string} value new value
     */
    set: function set(value) {
      this.hoveringTooltipLink = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "getHoveringTooltipText", {
    /**
     * get hoveringTooltipText
     */
    get: function get() {
      return this.hoveringTooltipText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setHoveringTooltipText", {
    /**
     * set hoveringTooltipText
     * @param {string} value new Value
     */
    set: function set(value) {
      this.hoveringTooltipText = value;
    },
    enumerable: true,
    configurable: true
  });
  return LinkURLClass;
}();



/***/ }),

/***/ "./Models/LowerLimitClass.tsx":
/*!************************************!*\
  !*** ./Models/LowerLimitClass.tsx ***!
  \************************************/
/*! exports provided: LowerLimitClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerLimitClass", function() { return LowerLimitClass; });
var LowerLimitClass =
/** @class */
function () {
  function LowerLimitClass(id, lowerLimitMin, lowerLimitMax, backColor, borderColor, sizeBorder) {
    this.id = id;
    this.lowerLimitMin = lowerLimitMin;
    this.lowerLimitMax = lowerLimitMax;
    this.backColor = backColor;
    this.borderColor = borderColor;
    this.sizeBorder = sizeBorder;
  }

  Object.defineProperty(LowerLimitClass.prototype, "getId", {
    get: function get() {
      return this.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setId", {
    set: function set(id) {
      this.id = id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getlowerLimitMin", {
    get: function get() {
      return this.lowerLimitMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setlowerLimitMin", {
    set: function set(lowerLimitMin) {
      this.lowerLimitMin = lowerLimitMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getlowerLimitMax", {
    get: function get() {
      return this.lowerLimitMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setlowerLimitMax", {
    set: function set(lowerLimitMax) {
      this.lowerLimitMax = lowerLimitMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilbackColor", {
    get: function get() {
      return this.backColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilbackColor", {
    set: function set(couleur) {
      this.backColor = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilborderColor", {
    get: function get() {
      return this.borderColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilborderColor", {
    set: function set(couleur) {
      this.borderColor = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getsizeBorder", {
    get: function get() {
      return this.sizeBorder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setsizeBorder", {
    set: function set(size) {
      this.sizeBorder = size;
    },
    enumerable: true,
    configurable: true
  });
  return LowerLimitClass;
}();



/***/ }),

/***/ "./Models/OrientedLinkClass.tsx":
/*!**************************************!*\
  !*** ./Models/OrientedLinkClass.tsx ***!
  \**************************************/
/*! exports provided: OrientedLinkClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientedLinkClass", function() { return OrientedLinkClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");



var OrientedLinkClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrientedLinkClass, _super);

  function OrientedLinkClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, name, orientationLink, size, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, valueMainMetricA, valueMainMetricB, pointIn, pointOut, regionIn, regionOut, zIndex, pointCPositionX, pointCPositionY, isIncurved, mainMetricB, metricsB) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.name = name;
    _this.orientationLink = orientationLink;
    _this.size = size;
    _this.pointAPositionX = pointAPositionX;
    _this.pointAPositionY = pointAPositionY;
    _this.colorCoordinateA = colorCoordinateA;
    _this.pointBPositionX = pointBPositionX;
    _this.pointBPositionY = pointBPositionY;
    _this.colorCoordinateB = colorCoordinateB;
    _this.valueMainMetricA = valueMainMetricA;
    _this.valueMainMetricB = valueMainMetricB;
    _this.pointIn = pointIn;
    _this.pointOut = pointOut;
    _this.regionIn = regionIn;
    _this.regionOut = regionOut;
    _this.zIndex = zIndex;
    _this.pointCPositionX = pointCPositionX;
    _this.pointCPositionY = pointCPositionY;
    _this.isIncurved = isIncurved;
    _this.mainMetricB = mainMetricB;
    _this.metricsB = metricsB;
    return _this;
  }

  return OrientedLinkClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/PointClass.tsx":
/*!*******************************!*\
  !*** ./Models/PointClass.tsx ***!
  \*******************************/
/*! exports provided: PointClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointClass", function() { return PointClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");


/**
 * to do
 */

var PointClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PointClass, _super);

  function PointClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, name, valueMetric, drawGraphicMarker, shape, sizeWidth, sizeHeight, rotateArrow, positionShapeX, positionShapeY, color, associateOrientedLinksIn, associateOrientedLinksOut) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.name = name;
    _this.valueMetric = valueMetric;
    _this.drawGraphicMarker = drawGraphicMarker;
    _this.shape = shape;
    _this.sizeWidth = sizeWidth;
    _this.sizeHeight = sizeHeight;
    _this.rotateArrow = rotateArrow;
    _this.positionShapeX = positionShapeX;
    _this.positionShapeY = positionShapeY;
    _this.color = color;
    _this.associateOrientedLinksIn = associateOrientedLinksIn;
    _this.associateOrientedLinksOut = associateOrientedLinksOut;
    return _this;
  }

  return PointClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/PositionParameterClass.tsx":
/*!*******************************************!*\
  !*** ./Models/PositionParameterClass.tsx ***!
  \*******************************************/
/*! exports provided: PositionParameterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionParameterClass", function() { return PositionParameterClass; });
var PositionParameterClass =
/** @class */
function () {
  function PositionParameterClass(labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY, tooltipPositionA, tooltipPositionB) {
    this.labelAPositionX = labelAPositionX;
    this.labelAPositionY = labelAPositionY;
    this.labelBPositionX = labelBPositionX;
    this.labelBPositionY = labelBPositionY;
    this.tooltipPositionA = tooltipPositionA;
    this.tooltipPositionB = tooltipPositionB;
  }

  return PositionParameterClass;
}();



/***/ }),

/***/ "./Models/RegionClass.tsx":
/*!********************************!*\
  !*** ./Models/RegionClass.tsx ***!
  \********************************/
/*! exports provided: RegionClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionClass", function() { return RegionClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");



var RegionClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RegionClass, _super);

  function RegionClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, idSVG, orientedLink, coords, mode, img) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.idSVG = idSVG;
    _this.mode = mode;
    _this.orientedLink = orientedLink;
    _this.coords = coords;
    _this.img = img;
    return _this;
  }

  return RegionClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/TextObjectClass.tsx":
/*!************************************!*\
  !*** ./Models/TextObjectClass.tsx ***!
  \************************************/
/*! exports provided: TextObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextObject", function() { return TextObject; });
/** value of textObjects component */
var TextObject =
/** @class */
function () {
  function TextObject( // legend: boolean,
  value, isTextTooltip, colorBack, colorText, style, // styleText: string,
  generateObjectText, valueGenerateObjectText, generateAuxiliaryElement) {
    // this.legend = legend;
    this.value = value;
    this.isTextTooltip = isTextTooltip;
    this.colorBack = colorBack;
    this.colorText = colorText;
    this.style = style; // this.styleText = styleText;

    this.generateObjectText = generateObjectText;
    this.valueGenerateObjectText = valueGenerateObjectText;
    this.generateAuxiliaryElement = generateAuxiliaryElement;
  }

  return TextObject;
}();



/***/ }),

/***/ "./Models/dropZone.tsx":
/*!*****************************!*\
  !*** ./Models/dropZone.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_importInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/importInput */ "./components/importInput.tsx");





var DropZone =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DropZone, _super);

  function DropZone(props) {
    var _this = _super.call(this, props) || this;

    _this.fileReader = null;

    _this.onChangeHandler = function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        readerFile: new FileReader()
      });
    };

    _this.upload = function () {
      _this.state.selectedFile.onload = function (event) {
        var _a;

        if (((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) != null) {
          this.props.options.saveImportFile.push(this.state.readerFile.result);
          this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
            saveImportFile: this.props.options.saveImportFile
          }));
        }
      };

      _this.state.readerFile.readAsText(_this.state.selectedFile);
    };

    _this.save = function () {
      if (_this.state.readerFile.result != null) {
        _this.props.options.saveImportFile.push({
          name: _this.state.selectedFile.name,
          content: _this.state.readerFile.result
        });

        var loader_1 = new components_importInput__WEBPACK_IMPORTED_MODULE_3__["default"](_this.props);

        _this.props.options.saveImportFile.forEach(function (file) {
          if (JSON.parse(file.content).hasOwnProperty('regions')) {
            loader_1.loadMultiRegions(JSON.parse(file.content));
            console.log('Load Region');
          }

          if (JSON.parse(file.content).hasOwnProperty('points')) {
            loader_1.loadMultiPoints(JSON.parse(file.content));
            console.log('Load Point');
          }

          if (JSON.parse(file.content).hasOwnProperty('links')) {
            loader_1.loadMultiLinks(JSON.parse(file.content));
            console.log('Load Links');
          }
        });
      }

      console.log(_this.props.options.saveImportFile);
    }; // load = () => {
    //   let loader : ImportInput = new ImportInput(this.props);
    // 	this.props.options.saveImportFile.forEach(file => {
    // 		if (JSON.parse(file.content).hasOwnProperty("regions")){
    //       loader.loadMultiRegions(JSON.parse(file.content));
    //       console.log("Load Region");
    //     }
    //     if (JSON.parse(file.content).hasOwnProperty("points")){
    //       loader.loadMultiPoints(JSON.parse(file.content));
    //       console.log("Load Point");
    //     }
    //     if (JSON.parse(file.content).hasOwnProperty("links")){
    //       loader.loadMultiLinks(JSON.parse(file.content));
    //       console.log("Load Links");
    // 		}
    // 	});
    //   this.props.options.saveImportFile.forEach(element => {
    //     console.log(JSON.parse(element.content));
    //   });
    // }


    _this.test = function () {
      console.log(JSON.stringify(_this.props));
    };

    _this.onMultiListFileChanged = function (event) {
      var newData = _this.props.options.saveImportFile.slice();

      newData[parseInt(event.currentTarget.id, 10)].name = event.currentTarget.value;
      _this.props.options.saveImportFile = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportFile: _this.props.options.saveImportFile
      }));
    };

    _this.multiDeletFile = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportFile[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportFile.splice(_this.props.options.saveImportFile.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportFile: _this.props.options.saveImportFile
      }));
    };

    _this.multiUploadDisplay = function (props) {
      if (props.file.lenght !== 0) {
        var list = props.file.map(function (file, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'MultiFileDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'MultiFile' + index.toString(),
            label: 'File',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onMultiListFileChanged.bind(_this),
            type: "string",
            value: file.name || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.multiDeletFile.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };

    _this.state = {
      selectedFile: null,
      readerFile: new FileReader()
    };
    return _this;
  }

  DropZone.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file",
      name: "file",
      onChange: this.onChangeHandler
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.upload
    }, "add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.save
    }, "finish")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.multiUploadDisplay, {
      file: this.props.options.saveImportFile
    })));
  };

  return DropZone;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DropZone);

/***/ }),

/***/ "./SimpleEditor.tsx":
/*!**************************!*\
  !*** ./SimpleEditor.tsx ***!
  \**************************/
/*! exports provided: SimpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEditor", function() { return SimpleEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_coordinateSpaceInitial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/coordinateSpaceInitial */ "./components/coordinateSpaceInitial.tsx");
/* harmony import */ var components_importInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/importInput */ "./components/importInput.tsx");
/* harmony import */ var components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CoordinateSpace/manageCoordinateSpace */ "./components/CoordinateSpace/manageCoordinateSpace.tsx");
/* harmony import */ var components_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/display */ "./components/display.tsx");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style/SimpleEditor.css */ "./style/SimpleEditor.css");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_7__);








/**
 * class SimpleEditor
 */

var SimpleEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleEditor, _super);

  function SimpleEditor(props) {
    var _this = _super.call(this, props) || this;
    /********************* Display Button in relation to View or Edit */
    // /**
    //  * edit default text
    //  */
    // myCallBackDefaultText = (datafromChild: {
    // 	/**
    // 	 * new police
    // 	 */
    // 	police: string,
    // 	/**
    // 	 * new size
    // 	 */
    // 	size: string,
    // 	/**
    // 	 * new style (italic, bold, ...)
    // 	 */
    // 	style: string,
    // }) => {
    // 	this.props.onOptionsChange({
    // 		...this.props.options,
    // 		police: datafromChild.police,
    // 		size: datafromChild.size,
    // 		style: datafromChild.style,
    // 	});
    // }
    /// Adrien
    // onInfoChanged = ({ target }: any) => {
    // 	this.props.onOptionsChange({ ...this.props.options, info: target.value });
    // }


    _this.onRefreshChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        refresh: target.value
      }));
    };

    _this.onTimeZoneChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        timezone: target.value
      }));
    };

    _this.onPanelChanged = function (_a, index) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        Id: target.value
      }));
    };

    _this.onToggleDashboardData = function (isOpen) {
      _this.setState({
        collapseDashboardData: isOpen
      });
    };

    _this.onToggleTimeSelector = function (isOpen) {
      _this.setState({
        collapseTimeSelector: isOpen
      });
    };

    _this.onTogglePanelData = function (isOpen) {
      _this.setState({
        collapsePanelData: isOpen
      });
    };

    _this.onTogglePrincipalTargets = function (isOpen) {
      _this.setState({
        collapsePrincipalTarget: isOpen
      });
    };
    /**
     * switch tab
     * @param {number} id id to to new tab
     */


    _this.goToTab = function (id) {
      var oldValue = _this.state.tabsVariable.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsVariable: oldValue
      });
    };
    /**
     * swtith tab Coordinate space
     */


    _this.goToTabCoordinateSpace = function (id) {
      var oldValue = _this.state.tabsCoordinateSpace.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsCoordinateSpace: oldValue
      });
    };

    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                  displayButton: true
                }));
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.componentWillUnmount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                  displayButton: false
                }));
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      collapseDashboardData: false,
      collapsePanelData: false,
      collapseTimeSelector: false,
      collapsePrincipalTarget: false,
      tabsVariable: [true, false, false, false, false],
      tabsCoordinateSpace: [true, false, false, false]
    };
    return _this;
  }
  /**
   * HTML code
   */


  SimpleEditor.prototype.render = function () {
    var _this = this;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "divSimpleEditor"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: "page-header tabs",
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplay",
      label: l10n.simpleEditor.display,
      active: this.state.tabsVariable[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabSpaceInitialVisualisation",
      label: l10n.simpleEditor.spaceInitialVisualisation,
      active: this.state.tabsVariable[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabCoordinateSpace",
      label: l10n.simpleEditor.CoordinateSpace,
      active: this.state.tabsVariable[2],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(2);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabImportInput",
      label: "Import Files",
      active: this.state.tabsVariable[4],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(4);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_display__WEBPACK_IMPORTED_MODULE_6__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_coordinateSpaceInitial__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: "page-header tabs",
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayManageCoordinateSpace",
      label: "Region",
      active: this.state.tabsCoordinateSpace[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayPoint",
      label: "Point",
      active: this.state.tabsCoordinateSpace[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayOrientedLink",
      label: "OrientedLink",
      active: this.state.tabsCoordinateSpace[3],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(3);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsCoordinateSpace[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: true,
      isPoint: false,
      isLink: false
    }), this.state.tabsCoordinateSpace[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: false,
      isPoint: true,
      isLink: false
    }), this.state.tabsCoordinateSpace[3] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: false,
      isPoint: false,
      isLink: true
    }))), this.state.tabsVariable[4] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_importInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))));
  };

  return SimpleEditor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/PointClass */ "./Models/PointClass.tsx");
/* harmony import */ var Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");
/* harmony import */ var Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var Functions_coodinateIsInInitialSpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/coodinateIsInInitialSpace */ "./Functions/coodinateIsInInitialSpace.tsx");
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");
/* harmony import */ var Functions_getInfoDisplayRegion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Functions/getInfoDisplayRegion */ "./Functions/getInfoDisplayRegion.tsx");
/* harmony import */ var components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CoordinateSpace/addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");
/* harmony import */ var _components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Draw/drawRectangle */ "./components/Draw/drawRectangle.tsx");
/* harmony import */ var _components_Draw_drawPoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Draw/drawPoint */ "./components/Draw/drawPoint.tsx");
/* harmony import */ var _components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Draw/drawOrientedLink */ "./components/Draw/drawOrientedLink.tsx");
/* harmony import */ var _components_legend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/legend */ "./components/legend.tsx");
/* harmony import */ var components_Draw_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Draw/drawRectangleExtend */ "./components/Draw/drawRectangleExtend.tsx");









 // import { getResultQuery } from 'Functions/getResultQuery';








/**
 * Affichage
 */

var SimplePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimplePanel, _super);

  function SimplePanel(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Display limit (coordinateSpaceInitial)
     * @returns JSX.Element
     */


    _this.defineLimit = function () {
      var coordinateSpaceInitial = _this.props.options.coordinateSpaceInitial;
      var jsxItems;
      jsxItems = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: "limitCoor",
        color: "orange",
        coordinateInitial: coordinateSpaceInitial,
        id: "initialSpace",
        onOptionsChange: _this.props.onOptionsChange,
        options: _this.props.options,
        data: _this.props.data,
        isEnabled: !_this.state.buttonManage[1]
      });
      return jsxItems;
    };
    /**
     * to do
     */


    _this.getCoordinatesToDrawPointWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;
      positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;

      if (!Object(Functions_coodinateIsInInitialSpace__WEBPACK_IMPORTED_MODULE_8__["coordinateIsInInitialSpace"])(parseInt(event.nativeEvent.offsetX, 10), parseInt(event.nativeEvent.offsetY, 10), _this.props.options.coordinateSpaceInitial, _this.props.options.baseMap)) {
        //console.error('is not initial space');
        return;
      } //console.log(positionX.toString() + ' ' + positionY.toString());


      if (event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'oct' + _this.props.options.baseMap.idSVG) {
        _this.createPointToClick(positionX, positionY);
      }
    };

    _this.defineIdPoint = function () {
      var id = 1;

      if (_this.props.options.arrayPoints.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayPoints[_this.props.options.arrayPoints.length - 1].id + 1;
        return id;
      }
    };
    /**
     * to do
     */


    _this.createPointToClick = function (x, y) {
      var id = _this.defineIdPoint();

      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_6__["TextObject"]('', false, '', '', {
        bold: false,
        italic: false,
        underline: false
      }, false, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      }, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      });
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_7__["LinkURLClass"]('', '', '');
      var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_4__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
      var newPoint = new Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](id, parametrageMetric, '', [], '', initTextObject, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, [], false, false, false, positionParameter, 'point' + id.toString(), '', {
        label: 'Yes',
        value: 'true'
      }, {
        label: 'Circle',
        value: 'circle'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'Medium',
        value: 'medium'
      }, '0', x.toString(), y.toString(), 'black', [], []);
      var newArrayPoint = _this.props.options.arrayPoints;
      newArrayPoint.push(newPoint); //this.props.options.indexPoint = id;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        indexPoint: id,
        arrayPoints: newArrayPoint
      }));

      _this.props.options.newPoint = true;
      setTimeout(function () {
        _this.displayPoint();
      }, 100);
    };

    _this.updatePositionOrientedLink = function (point) {
      var e_1, _a, e_2, _b, e_3, _c;

      var arrayOrientedLink = _this.props.options.arrayOrientedLinks;

      try {
        for (var arrayOrientedLink_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLink), arrayOrientedLink_1_1 = arrayOrientedLink_1.next(); !arrayOrientedLink_1_1.done; arrayOrientedLink_1_1 = arrayOrientedLink_1.next()) {
          var orientedLink = arrayOrientedLink_1_1.value;

          try {
            for (var _d = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.associateOrientedLinksIn)), _e = _d.next(); !_e.done; _e = _d.next()) {
              var associateOrientedLinkIn = _e.value;

              if (associateOrientedLinkIn.name === orientedLink.name) {
                orientedLink.pointAPositionX = point.positionShapeX;
                orientedLink.pointAPositionY = point.positionShapeY;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_e && !_e.done && (_b = _d["return"])) _b.call(_d);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          try {
            for (var _f = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.associateOrientedLinksOut)), _g = _f.next(); !_g.done; _g = _f.next()) {
              var associateOrientedLinkOut = _g.value;

              if (associateOrientedLinkOut.name === orientedLink.name) {
                orientedLink.pointBPositionX = point.positionShapeX;
                orientedLink.pointBPositionY = point.positionShapeY;
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_g && !_g.done && (_c = _f["return"])) _c.call(_f);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (arrayOrientedLink_1_1 && !arrayOrientedLink_1_1.done && (_a = arrayOrientedLink_1["return"])) _a.call(arrayOrientedLink_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }; // /** display link with coordinate */
    // displayLink() {
    //   const { options } = this.props;
    //   const mapItems: JSX.Element[] = [];
    //   const arrayLinks: LinkClass[] = options.arrayLinks;
    //   arrayLinks.forEach((link: LinkClass) => {
    //     let item: JSX.Element = <div></div>;
    //     if (link.defineHowToGetCoordonate.value === 'coordinate') {
    //       item = (
    //         <DrawLinkWithCoordinates
    //           key={'link' + link.id.toString()}
    //           pointAPositionX={link.pointAPositionX}
    //           pointAPositionY={link.pointAPositionY}
    //           pointBPositionX={link.pointBPositionX}
    //           pointBPositionY={link.pointBPositionY}
    //           colorA={link.colorCoordinateA}
    //           colorB={link.colorCoordinateB}
    //           orientationLink={link.orientationLink.value || ''}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     } else if (link.defineHowToGetCoordonate.value === 'point') {
    //       item = (
    //         <DrawLinkWithPoints
    //           key={'link' + link.id.toString()}
    //           pointIn={link.pointIn}
    //           pointOut={link.pointOut}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           orientationLink={link.orientationLink.value || ''}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     } else if (link.defineHowToGetCoordonate.value === 'region') {
    //       item = (
    //         <DrawLinkWithRegions
    //           key={'link' + link.id.toString()}
    //           regionIn={link.regionIn}
    //           regionOut={link.regionOut}
    //           colorA={link.colorRegionIn}
    //           colorB={link.colorRegionOut}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           orientationLink={link.orientationLink.value || ''}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     }
    //     mapItems.push(item);
    //   });
    //   return <ul>{mapItems}</ul>;
    // }

    /**
     * to do
     */


    _this.addAssociateOrientedLinkToPoint = function (namePointIn, namePointOut, indexOrientedLinkAssociate) {
      var index = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var name = point.label || point.name;

        if (namePointIn === name) {
          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (orientedLink.id === indexOrientedLinkAssociate) {
              _this.props.options.arrayPoints[index].associateOrientedLinksIn.push({
                label: orientedLink.label,
                name: orientedLink.name
              });
            }
          });
        } else if (namePointOut === name) {
          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (orientedLink.id === indexOrientedLinkAssociate) {
              _this.props.options.arrayPoints[index].associateOrientedLinksOut.push({
                label: orientedLink.label,
                name: orientedLink.name
              });
            }
          });
        }

        index++;
      });
    }; // /**
    //  * to do
    //  */
    // updateAssociateOrientedLinkInToPoint = () => {
    //   console.log('update point in');
    //   let indexPoint = 0;
    //   this.props.options.arrayPoints.forEach((point: PointClass) => {
    //     let indexAssociateOrientedLinkIn = 0;
    //     point.associateOrientedLinksIn.forEach(oneAssociateOrientedLinksIn => {
    //       let orientedLinkExist = false;
    //       this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
    //         if (oneAssociateOrientedLinksIn.name === orientedLink.name) {
    //           orientedLinkExist = true;
    //           if (orientedLink.label) {
    //             this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
    //               label: orientedLink.label,
    //               name: orientedLink.name,
    //             };
    //           } else {
    //             this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
    //               label: '',
    //               name: orientedLink.name,
    //             };
    //           }
    //         }
    //       });
    //       if (orientedLinkExist === false) {
    //         this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn.splice(indexAssociateOrientedLinkIn, 1);
    //       }
    //       indexAssociateOrientedLinkIn++;
    //     });
    //     indexPoint++;
    //   });
    // };
    // /**
    //  * to do
    //  */
    // updateAssociateOrientedLinkOutToPoint = () => {
    //   console.log('update point out');
    //   let indexPoint = 0;
    //   this.props.options.arrayPoints.forEach((point: PointClass) => {
    //     let indexAssociateOrientedLinkOut = 0;
    //     point.associateOrientedLinksOut.forEach(oneAssociateOrientedLinksOut => {
    //       let orientedLinkExist = false;
    //       this.props.options.arrayOrientedLinks.forEach((orientedLink: OrientedLinkClass) => {
    //         if (oneAssociateOrientedLinksOut.name === orientedLink.name) {
    //           orientedLinkExist = true;
    //           if (orientedLink.label) {
    //             this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
    //               label: orientedLink.label,
    //               name: orientedLink.name,
    //             };
    //           } else {
    //             this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
    //               label: '',
    //               name: orientedLink.name,
    //             };
    //           }
    //         }
    //       });
    //       if (orientedLinkExist === false) {
    //         this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut.splice(indexAssociateOrientedLinkOut, 1);
    //       }
    //       indexAssociateOrientedLinkOut++;
    //     });
    //     indexPoint++;
    //   });
    //   this.displayPoint();
    // };

    /** update AssociateOrientedLinkIn of point for tootip  */


    _this.updateAssociateOrientedLinkInToPoint = function () {
      var indexPoint = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var newAssociateLinkIn = [];
        var namePoint = point.label || point.name;

        _this.props.options.arrayOrientedLinks.forEach(function (link) {
          if (link.pointIn === namePoint) {
            newAssociateLinkIn.push({
              label: link.label,
              name: link.name
            });
          }
        });

        _this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn = newAssociateLinkIn;
        indexPoint++;
      });
    };
    /** update AssociateOrientedLinkOut of point for tootip  */


    _this.updateAssociateOrientedLinkOutToPoint = function () {
      var indexPoint = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var newAssociateLinkIn = [];
        var namePoint = point.label || point.name;

        _this.props.options.arrayOrientedLinks.forEach(function (link) {
          if (link.pointOut === namePoint) {
            newAssociateLinkIn.push({
              label: link.label,
              name: link.name
            });
          }
        });

        _this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut = newAssociateLinkIn;
        indexPoint++;
      });
    };
    /**
     * to do
     */


    _this.resetCoordinatesToDrawLinkWithClick = function () {
      _this.props.options.coordinatesToDrawLinkWithClick[1].labelPoint = '';
      _this.props.options.coordinatesToDrawLinkWithClick[1].point = {};
      _this.props.options.coordinatesToDrawLinkWithClick[1].labelRegion = '';
      _this.props.options.coordinatesToDrawLinkWithClick[1].region = {};
      _this.props.options.coordinatesToDrawLinkWithClick[2].labelPoint = '';
      _this.props.options.coordinatesToDrawLinkWithClick[2].point = {};
      _this.props.options.coordinatesToDrawLinkWithClick[2].labelRegion = '';
      _this.props.options.coordinatesToDrawLinkWithClick[2].region = {};
    };
    /** get coordinate when use click in panel */


    _this.getCoordinatesToDrawOrientedLinkWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;

      if (event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'oct' + _this.props.options.baseMap.idSVG) {
        positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
        positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

        if (coordinates[0].id === 0) {
          objectIn.x = positionX;
          objectIn.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 1) {
          objectOut.x = positionX;
          objectOut.y = positionY * -1;
          pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
          pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
          coordinates[0].id = 0;

          _this.createOrientedLinkToClick({
            label: 'No',
            value: false
          });

          _this.resetCoordinatesToDrawLinkWithClick();
        }
      } else if (event.nativeEvent.target.id.startsWith('point')) {
        var id_1 = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
        var arrayPoint = _this.props.options.arrayPoints;
        arrayPoint.forEach(function (point) {
          if (point.id === id_1) {
            var coordinates_1 = _this.props.options.coordinatesToDrawLinkWithClick;
            var name_1 = point.label || point.name;

            if (coordinates_1[0].id === 0) {
              objectIn.x = point.positionShapeX;
              objectIn.y = point.positionShapeY;
              objectIn.labelPoint = name_1;
              objectIn.point = point;
              coordinates_1[0].id++;
            } else if (coordinates_1[0].id === 1) {
              objectOut.x = point.positionShapeX;
              objectOut.y = point.positionShapeY;
              objectOut.labelPoint = name_1;
              objectOut.point = point;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates_1[0].id = 0;

              _this.createOrientedLinkToClick({
                label: 'No',
                value: false
              });

              _this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        });
      } else {
        var arrayRegion = _this.props.options.regionCoordinateSpace;
        arrayRegion.forEach(function (region) {
          var xMin = parseInt(region.coords.xMin, 10);
          var xMax = parseInt(region.coords.xMax, 10);
          var yMin = parseInt(region.coords.yMin, 10);
          var yMax = parseInt(region.coords.yMax, 10);

          if (event.nativeEvent.target.id.startsWith('region')) {
            var id = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_2 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_2[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_2[0].id++;
              } else if (coordinates_2[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
                pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
                coordinates_2[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'No',
                  value: false
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          } else {
            var id = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_3 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_3[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_3[0].id++;
              } else if (coordinates_3[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
                pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
                coordinates_3[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'No',
                  value: false
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          }
        });
      }
    };

    _this.getCoordinatesToDrawIncurvedOrientedLinkWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;

      if (event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'oct' + _this.props.options.baseMap.idSVG) {
        positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
        positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

        if (coordinates[0].id === 0) {
          objectIn.x = positionX;
          objectIn.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 1) {
          objectOut.x = positionX;
          objectOut.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 2) {
          pointC.x = positionX;
          pointC.y = positionY * -1;
          coordinates[0].id = 0;

          _this.createOrientedLinkToClick({
            label: 'Yes',
            value: true
          });

          _this.resetCoordinatesToDrawLinkWithClick();
        }
      } else if (event.nativeEvent.target.id.startsWith('point')) {
        var id_2 = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
        var arrayPoint = _this.props.options.arrayPoints;
        arrayPoint.forEach(function (point) {
          if (point.id === id_2) {
            var coordinates_4 = _this.props.options.coordinatesToDrawLinkWithClick;
            var name_2 = point.label || point.name;

            if (coordinates_4[0].id === 0) {
              objectIn.x = point.positionShapeX;
              objectIn.y = point.positionShapeY;
              objectIn.labelPoint = name_2;
              objectIn.point = point;
              coordinates_4[0].id++;
            } else if (coordinates_4[0].id === 1) {
              objectOut.x = point.positionShapeX;
              objectOut.y = point.positionShapeY;
              objectOut.labelPoint = name_2;
              objectOut.point = point;
              coordinates_4[0].id++;
            } else if (coordinates_4[0].id === 2) {
              pointC.x = point.positionShapeX;
              pointC.y = point.positionShapeY;
              coordinates_4[0].id = 0;

              _this.createOrientedLinkToClick({
                label: 'Yes',
                value: true
              });

              _this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        });
      } else {
        var arrayRegion = _this.props.options.regionCoordinateSpace;
        arrayRegion.forEach(function (region) {
          var xMin = parseInt(region.coords.xMin, 10);
          var xMax = parseInt(region.coords.xMax, 10);
          var yMin = parseInt(region.coords.yMin, 10);
          var yMax = parseInt(region.coords.yMax, 10);

          if (event.nativeEvent.target.id.startsWith('region')) {
            var id = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_5 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_5[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_5[0].id++;
              } else if (coordinates_5[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                coordinates_5[0].id++;
              } else if (coordinates_5[0].id === 2) {
                pointC.x = positionX;
                pointC.y = positionY;
                coordinates_5[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'Yes',
                  value: true
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          } else {
            var id = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_6 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_6[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_6[0].id++;
              } else if (coordinates_6[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                coordinates_6[0].id++;
              } else if (coordinates_6[0].id === 2) {
                pointC.x = positionX;
                pointC.y = positionY;
                coordinates_6[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'Yes',
                  value: true
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          }
        });
      }
    }; // defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
    // 	const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
    // 	const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    // 	const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
    // 	const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
    // 	let arrayToReturn: OrientedLinkClass[] = [];
    // 	arrayRegion.forEach((region) => {
    // 		arrayAllOrientedLink.forEach((orientedLink) => {
    // 			arrayToReturn = [];
    // 			if (region.id === orientedLink.regionIn.id) {
    // 				arrayOrientedLinkAssociateRegionIn.push(orientedLink);
    // 				arrayToReturn = arrayOrientedLinkAssociateRegionIn;
    // 				region.orientedLink = arrayToReturn;
    // 			}
    // 			if (region.id === orientedLink.regionOut.id) {
    // 				arrayOrientedLinkAssociateRegionOut.push(orientedLink);
    // 				arrayToReturn = arrayOrientedLinkAssociateRegionOut;
    // 				region.orientedLink = arrayToReturn;
    // 			}
    // 		});
    // 	});
    // 	return arrayToReturn;
    // }

    /**
     * to do
     */


    _this.defineIdOrientedLink = function () {
      var id = 1;

      if (_this.props.options.arrayOrientedLinks.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayOrientedLinks[_this.props.options.arrayOrientedLinks.length - 1].id + 1;
        return id;
      }
    };
    /**
     * to do
     */


    _this.createOrientedLinkToClick = function (isIncurved) {
      console.log('create');
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;

      var id = _this.defineIdOrientedLink();

      var name = 'orientedLink' + id.toString();
      var zIndex = _this.props.options.zIndexOrientedLink + 1;
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_6__["TextObject"]('', false, 'white', 'black', {
        bold: false,
        italic: false,
        underline: false
      }, false, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      }, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInTooltip: true,
        // 'displayObjectPermanently': false,
        addColorTextElement: true,
        colorTextElement: 'white',
        addColorBackElement: true,
        colorBackElement: 'black'
      });
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_7__["LinkURLClass"]('', '', '');
      var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_4__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
      var newOrientedLink = new Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__["OrientedLinkClass"](id, parametrageMetric, '', [], '', initTextObject, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, [], false, false, false, positionParameter, name, {
        label: 'Monodirectional',
        value: 'AB'
      }, {
        label: 'Medium',
        value: 'Medium'
      }, objectIn.x.toString(), objectIn.y.toString(), '#5794F2', objectOut.x.toString(), objectOut.y.toString(), '#E54658', '', '', objectIn.labelPoint, objectOut.labelPoint, objectIn.labelRegion, objectOut.labelRegion, zIndex, pointC.x, pointC.y, isIncurved, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, []);
      var newArrayOrientedLink = _this.props.options.arrayOrientedLinks;
      newArrayOrientedLink.push(newOrientedLink); //const newValue = true;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayOrientedLinks: newArrayOrientedLink,
        indexOrientedLink: id,
        zIndexOrientedLink: zIndex,
        newOrientedLink: true
      }));

      _this.props.options.newOrientedLink = true;

      _this.addAssociateOrientedLinkToPoint(objectIn.labelPoint || '', objectOut.labelPoint || '', newOrientedLink.id);

      setTimeout(function () {
        _this.displayOrientedLink();
      }, 100);
    };

    _this.getValuesAuxiliaryMetricsPoint = function (point) {
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricAuxPoint"])(point, _this.props);
      return _this.getValuesAuxiliaryMetrics(point.metrics, point.mainMetric);
    };

    _this.getValuesAuxiliaryMetricsOrientedLink = function (orientedLink) {
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricAuxOrientedLink"])(orientedLink, _this.props);
      return _this.getValuesAuxiliaryMetrics(orientedLink.metrics, orientedLink.mainMetric);
    };

    _this.getValuesAuxiliaryMetricsOrientedLinkB = function (orientedLink) {
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricAuxOrientedLink"])(orientedLink, _this.props);
      return _this.getValuesAuxiliaryMetrics(orientedLink.metricsB, orientedLink.mainMetricB);
    };

    _this.getValuesAuxiliaryMetrics = function (auxiliaryMetrics, mainMetric) {
      var valueAuxiliaryMetric = []; //const countMetrics: number = auxiliaryMetrics.length;

      console.log(auxiliaryMetrics);
      auxiliaryMetrics.forEach(function (metric) {
        var _a;

        console.log(metric);
        var countTotalValues = 0;
        var resultTotalValues = 0;
        var result = '';

        if (metric.returnQuery && metric.returnQuery.length > 0) {
          console.log(metric.returnQuery);
          var numberLoop = ((_a = metric.returnQuery) === null || _a === void 0 ? void 0 : _a.length) || 0;

          if (metric.key !== '' && metric.keyValue !== '') {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  if (line.fields[0].labels[metric.key] === metric.keyValue) {
                    var countValues = line.fields[0].values.length;

                    for (var i_1 = 0; i_1 < countValues; i_1++) {
                      if (line.fields[0].values.get(i_1)) {
                        resultTotalValues += line.fields[0].values.get(i_1);
                        countTotalValues++;
                      }
                    }
                  }
                }
              }
            }
          } else {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  var countValues = line.fields[0].values.length;

                  for (var i_2 = 0; i_2 < countValues; i_2++) {
                    if (line.fields[0].values.get(i_2)) {
                      resultTotalValues += line.fields[0].values.get(i_2);
                      countTotalValues++;
                    }
                  }
                }
              }
            }
          }

          if (metric.manageValue === 'avg') {
            result = (resultTotalValues / countTotalValues).toString();
          } else if (metric.manageValue === 'sum') {
            result = resultTotalValues.toString();
          } else if (metric.manageValue === 'err') {
            if (countTotalValues > 1) {
              result = 'error';
            } else {
              result = resultTotalValues.toString();
            }
          }
        }

        if (result !== '') {
          valueAuxiliaryMetric.push(result);
        }
      });
      return valueAuxiliaryMetric;
    };

    _this.changeValueButtonToLink = function () {
      _this.setState({
        valueButton: 'link'
      });
    };

    _this.changeValueButtonToIncurvedLink = function () {
      _this.setState({
        valueButton: 'incurvedLink'
      });
    };

    _this.changeValueButtonToPoint = function () {
      _this.setState({
        valueButton: 'point'
      });
    };

    _this.getCoordinates = function (event) {
      var valueButton = _this.state.valueButton;

      if (_this.state.numberClickDiv === 0) {
        return;
      }

      if (valueButton === 'link') {
        _this.getCoordinatesToDrawOrientedLinkWithClick(event);
      } else if (valueButton === 'incurvedLink') {
        _this.getCoordinatesToDrawIncurvedOrientedLinkWithClick(event);
      } else if (valueButton === 'point') {
        _this.getCoordinatesToDrawPointWithClick(event);
      }
    };
    /**
     * add button click to manage region, point, oriented link, position legend
     */


    _this.updateButtonCss = function () {
      var _final = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "allButton"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[0] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addNode
      }, "Add Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[3] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addPoint
      }, "Add Point"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[1] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addLink
      }, "Add Oriented Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[4] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addIncurvedLink
      }, "Add Incurved Oriented Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[2] ? 'danger' : 'primary',
        className: "button",
        onClick: function onClick() {
          if (_this.state.buttonAddIncurvedLinkIsActive) {
            _this.setState(function (prevState) {
              return {
                buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive
              };
            });
          }

          if (_this.state.buttonAddLinkIsActive) {
            _this.setState(function (prevState) {
              return {
                buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive
              };
            });
          }

          _this.resetButtonManage(2);
        }
      }, "Position Legend"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '4%'
        },
        id: "more",
        onClick: _this.ZoomIn,
        variant: 'primary'
      }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        id: "less",
        onClick: _this.ZoomOut,
        variant: 'primary'
      }, "-"));

      _this.setState({
        allActionButton: _final
      });
    };

    _this.callMethod = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(this.state.numberClickDiv === 0)) return [3
              /*break*/
              , 1];
              this.setState({
                numberClickDiv: 1
              });
              return [3
              /*break*/
              , 3];

            case 1:
              return [4
              /*yield*/
              , this.setAsyncButtonManage({
                buttonManage: [false, false, false, false, false]
              })];

            case 2:
              _a.sent();

              this.setState({
                numberClickDiv: 0
              });
              this.updateButtonCss();
              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.setAsyncButtonManage = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };

    _this.resetButtonManage = function (index) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var tmp, oldValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              tmp = this.state.buttonManage;
              oldValue = tmp[index];
              tmp = [false, false, false, false, false];

              if (oldValue) {
                tmp[index] = false;
                this.setState({
                  numberClickDiv: 0
                });
              } else {
                tmp[index] = true;
                this.setState({
                  numberClickDiv: 1
                });
              }

              return [4
              /*yield*/
              , this.setAsyncButtonManage({
                buttonManage: tmp
              })];

            case 1:
              _a.sent();

              this.updateButtonCss();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.addNode = function () {
      if (_this.state.buttonAddIncurvedLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive
          };
        });
      }

      if (_this.state.buttonAddLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive
          };
        });
      }

      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[0] ? false : true
        };
      });

      _this.resetButtonManage(0);

      _this.changeValueButtonToPoint();
    };

    _this.addPoint = function () {
      if (_this.state.buttonAddIncurvedLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive
          };
        });
      }

      if (_this.state.buttonAddLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive
          };
        });
      }

      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[3] ? false : true,
          valueButton: 'point'
        };
      });

      _this.resetButtonManage(3);

      _this.changeValueButtonToPoint();
    };

    _this.addLink = function () {
      if (_this.state.buttonAddIncurvedLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive
          };
        });
      }

      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[1] ? false : true,
          buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive
        };
      });

      _this.resetButtonManage(1);

      _this.changeValueButtonToLink();
    };

    _this.addIncurvedLink = function () {
      if (_this.state.buttonAddLinkIsActive) {
        _this.setState(function (prevState) {
          return {
            buttonAddLinkIsActive: !prevState.buttonAddLinkIsActive
          };
        });
      }

      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[4] ? false : true,
          buttonAddIncurvedLinkIsActive: !prevState.buttonAddIncurvedLinkIsActive
        };
      });

      _this.resetButtonManage(4);

      _this.changeValueButtonToIncurvedLink();
    };

    _this.positionLegend = function (e) {
      if (!_this.state.buttonManage[2]) {
        return;
      }

      var newLegend = _this.state.legend;
      var sizeTitlePanel = 28;
      newLegend.x = e.nativeEvent.offsetX;
      newLegend.y = _this.props.options.baseMap.height > e.nativeEvent.offsetY ? parseInt(e.nativeEvent.offsetY, 10) : parseInt(e.nativeEvent.offsetY, 10) - sizeTitlePanel;
      newLegend.hiddenLegend = false;

      _this.setState({
        legend: newLegend
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        legend: newLegend
      }));
    }; // Close legend click on close


    _this.handleClick = function (event) {
      var newLegend = _this.state.legend;
      newLegend.hiddenLegend = !_this.state.legend.hiddenLegend;

      _this.setState(function (prevState) {
        return {
          legend: newLegend
        };
      });
    }; // SVG check url


    _this.tt = function () {
      var test = document.getElementById('path836');

      if (test) {
        test.style.fill = 'red';
      }
    };

    _this.chargeRegion = function () {
      _this.setState({
        displayRegion: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: "limitCoor",
          color: "orange",
          coordinateInitial: _this.props.options.coordinateSpaceInitial,
          id: "initialSpace",
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          isEnabled: !_this.state.buttonManage[1]
        })
      });
    };

    _this.editIdString = function (str) {
      var cpyString = str.slice();
      var strSplit = cpyString.split('id="');
      var newStr = '';

      for (var i = 0; strSplit.length > i; i++) {
        if (strSplit[i]) {
          if (i > 0) {
            var tt = strSplit[i];
            strSplit[i] = 'id="oct' + tt;
          }

          newStr = newStr + strSplit[i];
        }
      }

      return newStr;
    };
    /**
     * update button css when mount component
     */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
            displayButton: false
          }));

          if (this.props.options.baseMap.modeSVG && this.props.options.baseMap.image !== '') {
            fetch(this.props.options.baseMap.image).then(function (res) {
              return res.text();
            }).then(function (text) {
              _this.setState({
                svg: text
              });

              var result = /id=["']\w*["']/i.exec(text);

              if (result && result.length > 0) {
                var id = result[0].split('"');

                if (id.length > 1) {
                  var documentId = document.getElementById(id[1]);

                  if (documentId) {
                    var newBaseMap = _this.props.options.baseMap;
                    newBaseMap.idSVG = id[1];
                    newBaseMap.width = documentId.getAttribute('width') || '';
                    newBaseMap.height = documentId.getAttribute('height') || '';

                    _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                      baseMap: newBaseMap
                    }));
                  }
                }
              }
            }).then(function () {
              return _this.chargeRegion();
            }).then(function () {
              var newStr = _this.editIdString(_this.state.svg);

              var background = _this.props.options.baseMap;
              background.layerImage = newStr;

              _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                baseMap: background
              }));
            });
          } else {
            this.chargeRegion();
          }

          this.updateButtonCss();
          return [2
          /*return*/
          ];
        });
      });
    }; // Zoom in Panel

    /********************************  Zoom Panel*********************************** */
    // Zoom Plus


    _this.ZoomIn = function () {
      var _a;

      var intialfirst = document.getElementById('more');
      (_a = intialfirst) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var elmnt = document.getElementById('mainPanel');

        if (elmnt) {
          elmnt.style.transform += 'scale(1.01,1.01)';
        }
      });
    }; // Zoom Negative


    _this.ZoomOut = function () {
      var _a;

      var intialsecond = document.getElementById('less');
      (_a = intialsecond) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var elmnt = document.getElementById('mainPanel');

        if (elmnt) {
          elmnt.style.transform += 'scale(0.99,0.99)';
        } //console.log('-');

      });
    }; // Zoom Initial
    // ZoomInitial = () => {
    //   const intialsecond = document.getElementById('init');
    //   intialsecond?.addEventListener('click', () => {
    //     const elmnt = document.getElementById('mainPanel');
    //     if(elmnt ){
    //       elmnt.style.transform = 'scale(1,1)';
    //     }
    //   });
    // };

    /********************************  Zoom Panel*********************************** */
    // Tooltip in Svg


    _this.tooltip_SVG = function () {
      var _a;

      var red = document.getElementById('part1');
      (_a = red) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
        var _a;

        red.addEventListener('mouseover', function () {
          var tooltip = document.createElement('span');
          var texttest = document.createTextNode('rectanglered');
          tooltip.appendChild(texttest);
          red.appendChild(tooltip).style.position = 'absolute';
          red.appendChild(tooltip).style.backgroundColor = '#000000';
          red.appendChild(tooltip).style.padding = '8px';
          red.appendChild(tooltip).style["float"] = 'top';
          red.appendChild(tooltip).style.color = '#d8d9da';
          red.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
          red.appendChild(tooltip).style.borderRadius = '2px';
          red.appendChild(tooltip).style.fontWeight = '500';
          red.addEventListener('mouseout', function () {
            red.appendChild(tooltip).style.visibility = 'hidden';
          });
        });
        var yellow = document.getElementById('part2');
        (_a = yellow) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
          var _a;

          yellow.addEventListener('mouseover', function () {
            var tooltip = document.createElement('span');
            var texttest = document.createTextNode('rectangleyellow');
            tooltip.appendChild(texttest);
            yellow.appendChild(tooltip).style.position = 'absolute';
            yellow.appendChild(tooltip).style.backgroundColor = '#000000';
            yellow.appendChild(tooltip).style.padding = '8px';
            yellow.appendChild(tooltip).style["float"] = 'top';
            yellow.appendChild(tooltip).style.color = '#d8d9da';
            yellow.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
            yellow.appendChild(tooltip).style.borderRadius = '2px';
            yellow.appendChild(tooltip).style.fontWeight = '500';
            yellow.addEventListener('mouseout', function () {
              yellow.appendChild(tooltip).style.visibility = 'hidden';
            });
          });
          var rect = document.getElementById('carre');
          (_a = rect) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
            rect.addEventListener('mouseover', function () {
              var tooltip = document.createElement('span');
              var texttest = document.createTextNode('rectanglegreen');
              tooltip.appendChild(texttest);
              rect.appendChild(tooltip).style.position = 'absolute';
              rect.appendChild(tooltip).style.backgroundColor = '#000000';
              rect.appendChild(tooltip).style.padding = '8px';
              rect.appendChild(tooltip).style.marginTop = '20%';
              rect.appendChild(tooltip).style.color = '#d8d9da';
              rect.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
              rect.appendChild(tooltip).style.borderRadius = '2px';
              rect.appendChild(tooltip).style.fontWeight = '500';
              rect.addEventListener('mouseout', function () {
                rect.appendChild(tooltip).style.visibility = 'hidden';
              });
            });
          });
        });
      });
    };
    /*************************************test create tooltip **********************************************************/


    _this.SVG_PathImage = function () {
      var e_4, _a;

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.options.regionCoordinateSpace), _c = _b.next(); !_c.done; _c = _b.next()) {
          var line = _c.value;

          if (line.mode) {
            var id = document.getElementById('oct' + line.idSVG);

            if (id) {
              // const valueQuery = getResultQuery(line.mainMetric);
              var test_1 = document.getElementById('jeSuisLa' + line.id);

              if (test_1) {
                test_1.style.fill = 'red';
              } else {
                var textObj = line.textObj;

                if (textObj.isTextTooltip || textObj.generateObjectText && textObj.valueGenerateObjectText && textObj.valueGenerateObjectText.displayObjectInTooltip) {
                  var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                  title.setAttribute('fill', 'yellow');
                  title.setAttributeNS('http://www.w3.org/1999/xlink', 'fill', 'yellow');
                  title.setAttribute('fill', 'red');
                  title.setAttributeNS('title', 'fill', 'red');
                  var text = Object(Functions_getInfoDisplayRegion__WEBPACK_IMPORTED_MODULE_10__["getInfoDisplayRegion"])(line, _this.props);
                  title.innerHTML = text.tooltip.modeText || ''; // title.textContent = valueQuery ? valueQuery.toString() : '';

                  title.id = 'jeSuisLa' + line.id;
                  title.style.fill = 'red';
                  id.appendChild(title);
                }
              }
            }
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };

    _this.fillCoordinate = function () {
      var options = _this.props.options;
      var styleRegion = {
        position: 'absolute',
        width: options.baseMap.width + 'px',
        height: options.baseMap.height + 'px',
        top: '15%',
        left: 0
      };
      var mapItems;
      mapItems = options.regionCoordinateSpace.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Draw_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: 'drawRectangleExtend' + index.toString(),
          uneCoor: line,
          useLimit: false,
          limit: options.coordinateSpaceInitial.coordinate,
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          id: 'region' + line.id.toString(),
          isEnabled: true
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        style: styleRegion
      }, mapItems);
    };
    /*************************************** create link regionbyid**************************************** */


    _this.CreateLinkArea = function () {
      var _a, _b; // All Id in SVG


      var allidSvg = document.getElementById('octsvg213');
      (_a = allidSvg) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {//const elms = allidSvg.querySelectorAll('[id]');
        //console.log(elms);
      }); // Test Svg Christophe search ID
      // const allidSvg3 = document.getElementById('octsvg12');
      // allidSvg3?.addEventListener('click', () => {
      //   this.props.options.regionCoordinateSpace.forEach(region => {
      //     console.log(region.idSVG);
      //     console.log(region.linkURL.followLink);
      //   });
      // });
      // All Region in SVG

      var allidSvg2 = document.getElementById('octsvg213');
      (_b = allidSvg2) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        _this.props.options.regionCoordinateSpace.forEach(function (region) {//console.log(region.idSVG);
          //console.log(region.linkURL.followLink);
        });
      }); // const elms = document.querySelectorAll('[id]');
      // for (var i = 0; i < elms.length; i++) {
      //   let lpo = document.getElementById('octsvg213');
      //   lpo?.addEventListener('click', () => {
      //     console.log('rer');
      //   });
      //   let lpo1 = document.getElementById('octsvg213');
      //   lpo1?.addEventListener('click', () => {
      //     console.log('rer1');
      //   });
      //   let lpo2 = document.getElementById('octsvg213');
      //   lpo2?.addEventListener('click', () => {
      //     console.log('rer2');
      //   });
      // }
    };

    _this.state = {
      valueButton: '',
      buttonManage: [false, false, false, false, false],
      numberClickDiv: 0,
      allActionButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      nbClickButton: false,
      legend: {
        hiddenLegend: true,
        x: 0,
        y: 0
      },
      svg: '',
      displayRegion: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      tooltip: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "salut"),
      idSVG: '',
      buttonAddLinkIsActive: false,
      buttonAddIncurvedLinkIsActive: false
    };
    return _this;
  }
  /**
   * to do
   */


  SimplePanel.prototype.displayPoint = function () {
    var _this = this;

    var mapItems = [];
    this.props.options.arrayPoints.forEach(function (line) {
      _this.getValuesMainMetricPoint(line);

      _this.updatePositionOrientedLink(line);

      var valuesAuxiliaryMetrics = _this.getValuesAuxiliaryMetricsPoint(line);

      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawPoint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: 'point' + line.id.toString(),
        drawGraphicMarker: line.drawGraphicMarker,
        shape: line.shape,
        size: line.sizeWidth,
        positionShapeX: line.positionShapeX,
        positionShapeY: line.positionShapeY,
        label: line.label,
        widthImage: parseInt(_this.props.options.baseMap.width, 10),
        heightImage: parseInt(_this.props.options.baseMap.height, 10),
        police: _this.props.options.display.police,
        sizePolice: _this.props.options.display.size,
        //style={this.props.options.display.style}
        color: line.color,
        idPoint: 'point' + line.id.toString(),
        name: line.name,
        options: _this.props.options,
        onOptionsChange: _this.props.onOptionsChange,
        data: _this.props.data,
        textObject: line.textObj,
        seuil: line.lowerLimit,
        valueMainMetric: line.valueMetric,
        refMainMetric: line.mainMetric.refId || '',
        associateOrientedLinkIn: line.associateOrientedLinksIn,
        associateOrientedLinkOut: line.associateOrientedLinksOut,
        labelPositionX: line.positionParameter.labelAPositionX,
        labelPositionY: line.positionParameter.labelAPositionY,
        tooltipPosition: line.positionParameter.tooltipPositionA,
        auxiliaryMetrics: line.metrics,
        valuesAuxiliaryMetrics: valuesAuxiliaryMetrics,
        linkUrl: line.linkURL,
        buttonAddLinkIsActive: _this.state.buttonAddLinkIsActive,
        buttonAddIncurvedLinkIsActive: _this.state.buttonAddIncurvedLinkIsActive
      });
      mapItems.push(item);
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mapItems);
  };
  /**
   * to do
   */


  SimplePanel.prototype.displayOrientedLink = function () {
    var _this = this;

    console.log('display');
    var arrayOrientedLink = this.props.options.arrayOrientedLinks;
    var mapItems = [];
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    arrayOrientedLink.forEach(function (orientedLink) {
      //console.log(orientedLink);
      _this.getValuesMainMetricOrientedLink(orientedLink);

      _this.getValuesMainMetricOrientedLinkB(orientedLink);

      var valuesAuxiliaryMetrics = _this.getValuesAuxiliaryMetricsOrientedLink(orientedLink);

      var valuesAuxiliaryMetricsB = _this.getValuesAuxiliaryMetricsOrientedLinkB(orientedLink);

      item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: 'orientedLink' + orientedLink.id.toString(),
        id: orientedLink.id.toString(),
        orientationLink: orientedLink.orientationLink.value || '',
        pointAPositionX: orientedLink.pointAPositionX,
        pointAPositionY: orientedLink.pointAPositionY,
        pointBPositionX: orientedLink.pointBPositionX,
        pointBPositionY: orientedLink.pointBPositionY,
        colorA: orientedLink.colorCoordinateA,
        colorB: orientedLink.colorCoordinateB,
        associatePointIn: orientedLink.pointIn,
        associatePointOut: orientedLink.pointOut,
        associateRegionIn: orientedLink.regionIn,
        associateRegionOut: orientedLink.regionOut,
        widthImage: parseInt(_this.props.options.baseMap.width, 10),
        heightImage: parseInt(_this.props.options.baseMap.height, 10),
        label: orientedLink.label,
        name: orientedLink.name,
        valueMainMetricA: orientedLink.valueMainMetricA,
        valueMainMetricB: orientedLink.valueMainMetricB,
        refMainMetricA: orientedLink.mainMetric.refId || '',
        refMainMetricB: orientedLink.mainMetricB.refId || '',
        options: _this.props.options,
        onOptionsChange: _this.props.onOptionsChange,
        data: _this.props.data,
        textObject: orientedLink.textObj,
        seuil: orientedLink.lowerLimit,
        traceBorder: orientedLink.traceBorder,
        labelAPositionX: orientedLink.positionParameter.labelAPositionX,
        labelAPositionY: orientedLink.positionParameter.labelAPositionY,
        labelBPositionX: orientedLink.positionParameter.labelBPositionX,
        labelBPositionY: orientedLink.positionParameter.labelBPositionY,
        tooltipPositionA: orientedLink.positionParameter.tooltipPositionA,
        tooltipPositionB: orientedLink.positionParameter.tooltipPositionB,
        zIndex: orientedLink.zIndex,
        pointCPositionX: orientedLink.pointCPositionX,
        pointCPositionY: orientedLink.pointCPositionY,
        isIncurved: orientedLink.isIncurved,
        auxiliaryMetrics: orientedLink.metrics,
        auxiliaryMetricsB: orientedLink.metricsB,
        valuesAuxiliaryMetrics: valuesAuxiliaryMetrics,
        valuesAuxiliaryMetricsB: valuesAuxiliaryMetricsB,
        police: _this.props.options.display.police,
        sizePolice: _this.props.options.display.size,
        linkUrl: orientedLink.linkURL,
        size: orientedLink.size
      });
      mapItems.push(item);
    });
    this.updateAssociateOrientedLinkInToPoint();
    this.updateAssociateOrientedLinkOutToPoint();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mapItems);
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValuesMainMetricPoint = function (point) {
    Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricPoint"])(point, this.props);
    this.getValuesMainMetric(point.mainMetric, undefined, point);
  };

  SimplePanel.prototype.getValuesMainMetricOrientedLink = function (orientedLink) {
    Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricOrientedLink"])(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetric, orientedLink, undefined, false);
  };

  SimplePanel.prototype.getValuesMainMetricOrientedLinkB = function (orientedLink) {
    Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_9__["reqMetricOrientedLink"])(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetricB, orientedLink, undefined, true);
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValuesMainMetric = function (mainMetric, orientedLink, point, isBidirectionnal) {
    var valueMainMetric = 0;
    var totalValuesCount = 0;
    var key = mainMetric.key;
    var keyValue = mainMetric.keyValue;

    if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
      mainMetric.returnQuery.forEach(function (line) {
        if (line.fields[0].labels) {
          if (key !== '' && keyValue !== '') {
            if (line.fields[0].labels[key] === keyValue) {
              var countValues = line.fields[0].values.length;

              for (var i = 0; i < countValues; i++) {
                if (line.fields[0].values.get(i)) {
                  totalValuesCount++;
                  valueMainMetric += line.fields[0].values.get(i);
                }
              }
            }
          } else {
            var countValues = line.fields[0].values.length;

            for (var i = 0; i < countValues; i++) {
              if (line.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += line.fields[0].values.get(i);
              }
            }
          }
        }
      });

      if (orientedLink) {
        if (!isBidirectionnal) {
          if (mainMetric.manageValue === 'avg') {
            orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
          } else if (mainMetric.manageValue === 'sum') {
            orientedLink.valueMainMetricA = valueMainMetric.toString();
          } else if (mainMetric.manageValue === 'err') {
            if (totalValuesCount > 1) {
              orientedLink.valueMainMetricA = 'error';
            } else {
              orientedLink.valueMainMetricA = valueMainMetric.toString();
            }
          }
        } else {
          if (mainMetric.manageValue === 'avg') {
            orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
          } else if (mainMetric.manageValue === 'sum') {
            orientedLink.valueMainMetricB = valueMainMetric.toString();
          } else if (mainMetric.manageValue === 'err') {
            if (totalValuesCount > 1) {
              orientedLink.valueMainMetricB = 'error';
            } else {
              orientedLink.valueMainMetricB = valueMainMetric.toString();
            }
          }
        }
      } else if (point) {
        if (mainMetric.manageValue === 'avg') {
          point.valueMetric = (valueMainMetric / totalValuesCount).toString();
        } else if (mainMetric.manageValue === 'sum') {
          point.valueMetric = valueMainMetric.toString();
        } else if (mainMetric.manageValue === 'err') {
          if (totalValuesCount > 1) {
            point.valueMetric = 'error';
          } else {
            point.valueMetric = valueMainMetric.toString();
          }
        }
      }
    }
  };

  SimplePanel.prototype.componentDidUpdate = function (prevProps) {
    if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
      this.componentDidMount();
    }

    if (this.props !== prevProps) {
      this.chargeRegion();
    }
  };
  /*************************************** create link regionbyid**************************************** */

  /*************************************test create tooltip **********************************************************/

  /** render */


  SimplePanel.prototype.render = function () {
    var styleBackground;

    if (this.props.options.baseMap.modeSVG) {
      styleBackground = {
        // position: 'absolute',
        // textAlign: 'center',
        // backgroundRepeat: 'no-repeat',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px'
      };
    } else {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
        backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        zIndex: 4
      };
    }

    var styleSVG = {
      position: 'absolute',
      zIndex: 2
    };
    var styleSVG_2 = {
      position: 'absolute',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px',
      opacity: 0,
      zIndex: 2
    };
    var defaultStyle = {
      height: '100vh',
      width: '100vw',
      fontFamily: this.props.options.display.police,
      fontSize: this.props.options.display.size,
      fontStyle: this.props.options.display.style.italic ? 'italic' : 'normal',
      fontWeight: this.props.options.display.style.bold ? 'bold' : 'normal',
      textDecoration: this.props.options.display.style.underline ? 'underline' : 'none'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CustomScrollbar"], {
      autoHide: false,
      hideHorizontalTrack: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "zoom",
      style: {
        display: 'inline-flex',
        marginTop: '-7px',
        marginLeft: '86%'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-grid'
      }
    }, this.props.options.displayButton && this.state.allActionButton), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      style: defaultStyle,
      onClick: this.positionLegend
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.buttonManage[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: '200px',
        position: 'absolute',
        overflowY: 'scroll',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '20%',
        marginBottom: '20%',
        border: '5px solid aliceblue',
        height: '40%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      title: "Add Region",
      onDismiss: this.addNode,
      onClickBackdrop: this.addNode,
      isOpen: this.state.nbClickButton
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: true,
      isPoint: false,
      isLink: false
    }))), this.state.buttonManage[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_legend__WEBPACK_IMPORTED_MODULE_15__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }, this.props.options.legend, {
      callBack: this.handleClick
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.callMethod
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "coordinateSpaces",
      style: styleBackground
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tooltip"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.getCoordinates,
      id: "mainPanel",
      style: {
        position: 'absolute',
        top: '15%',
        zIndex: 1
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleSVG,
      dangerouslySetInnerHTML: {
        __html: this.state.svg
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "Intent",
      style: styleSVG_2,
      onMouseOver: this.SVG_PathImage && this.CreateLinkArea,
      dangerouslySetInnerHTML: {
        __html: this.props.options.baseMap.layerImage
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.CreateLinkArea
    }), this.displayOrientedLink(), this.fillCoordinate(), this.displayPoint()))))));
  };

  return SimplePanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./components/CoordinateSpace/addCoordinate.tsx":
/*!******************************************************!*\
  !*** ./components/CoordinateSpace/addCoordinate.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/initRegionCoordinateSpace */ "./Functions/initRegionCoordinateSpace.tsx");
/* harmony import */ var Functions_initPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/initPoint */ "./Functions/initPoint.tsx");
/* harmony import */ var Functions_initOrientedLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/initOrientedLink */ "./Functions/initOrientedLink.tsx");
/* harmony import */ var components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CoordinateSpace/coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");
/* harmony import */ var _point_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point/point */ "./components/CoordinateSpace/point/point.tsx");
/* harmony import */ var _orientedLink_orientedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orientedLink/orientedLink */ "./components/CoordinateSpace/orientedLink/orientedLink.tsx");








/** Add new coordinate space */

var AddCoordinate =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddCoordinate, _super);

  function AddCoordinate(props) {
    var _this = _super.call(this, props) || this;
    /** search new id for espacecoordinneesclass */


    _this.searchNewId = function (allCoordinateSpace) {
      var e_1, _a;

      var id = -1;

      try {
        for (var allCoordinateSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allCoordinateSpace), allCoordinateSpace_1_1 = allCoordinateSpace_1.next(); !allCoordinateSpace_1_1.done; allCoordinateSpace_1_1 = allCoordinateSpace_1.next()) {
          var line = allCoordinateSpace_1_1.value;

          if (line.id > id) {
            id = line.id;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (allCoordinateSpace_1_1 && !allCoordinateSpace_1_1.done && (_a = allCoordinateSpace_1["return"])) _a.call(allCoordinateSpace_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      id += 1;
      return id;
    };

    _this.defineIdPoint = function () {
      var id = 1;

      if (_this.props.options.arrayPoints.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayPoints[_this.props.options.arrayPoints.length - 1].id + 1;
        return id;
      }
    };

    _this.defineIdOrientedLink = function () {
      var id = 1;

      if (_this.props.options.arrayOrientedLinks.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayOrientedLinks[_this.props.options.arrayOrientedLinks.length - 1].id + 1;
        return id;
      }
    };

    _this.lastId = function () {
      var e_2, _a;

      var allRegion = _this.props.options.regionCoordinateSpace;
      var id = 0;

      try {
        for (var allRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allRegion), allRegion_1_1 = allRegion_1.next(); !allRegion_1_1.done; allRegion_1_1 = allRegion_1.next()) {
          var line = allRegion_1_1.value;

          if (line.id > id) {
            id = line.id;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (allRegion_1_1 && !allRegion_1_1.done && (_a = allRegion_1["return"])) _a.call(allRegion_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return id;
    };
    /** call init class for coordinate state */


    _this.componentDidMount = function () {
      if (_this.props.isRegion) {
        _this.setState({
          coordinate: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_2__["initRegionCoordinateSpace"])(_this.lastId())
        });
      } else if (_this.props.isPoint) {
        var id = _this.defineIdPoint();

        _this.setState({
          point: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_3__["initPoint"])(id)
        });
      } else if (_this.props.isLink) {
        var id = _this.defineIdOrientedLink();

        var newZIndex = _this.props.options.zIndexOrientedLink + 1;

        _this.setState({
          orientedLink: Object(Functions_initOrientedLink__WEBPACK_IMPORTED_MODULE_4__["initOrientedLink"])(id, newZIndex)
        });

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          zIndexOrientedLink: newZIndex
        }));
      }
    };
    /** update onOptionsChange */


    _this.setAsyncOption = function (newIdx) {
      return Promise.resolve('Success').then(function () {
        if (_this.props.isRegion) {
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            indexRegion: newIdx
          }));
        } else if (_this.props.isPoint) {
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            indexPoint: newIdx
          }));
        } else if (_this.props.isLink) {
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            indexOrientedLink: newIdx
          }));
        }
      });
    };
    /** send data of region for parent */


    _this.callBack = function (id, newCoordinate) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var allCoordinateSpace;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newCoordinate) return [3
              /*break*/
              , 2];
              allCoordinateSpace = this.props.options.regionCoordinateSpace.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                regionCoordinateSpace: allCoordinateSpace.concat(newCoordinate)
              }));

              if (this.props.returnEditMode) {
                this.props.returnEditMode();
              }

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** send data of point for parent */


    _this.callBackPoint = function (id, newCoordinate) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var allCoordinateSpace;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newCoordinate) return [3
              /*break*/
              , 2];
              allCoordinateSpace = this.props.options.arrayPoints.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                arrayPoints: allCoordinateSpace.concat(newCoordinate)
              }));

              if (this.props.returnEditMode) {
                this.props.returnEditMode();
              }

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** send data of orientedLink for parent */


    _this.callBackOrientedLink = function (id, newCoordinate) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var allCoordinateSpace;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newCoordinate) return [3
              /*break*/
              , 2];
              allCoordinateSpace = this.props.options.arrayOrientedLinks.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                arrayOrientedLinks: allCoordinateSpace.concat(newCoordinate)
              }));

              if (this.props.returnEditMode) {
                this.props.returnEditMode();
              }

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      coordinate: undefined,
      point: undefined,
      orientedLink: undefined
    };
    return _this;
  }
  /** result */


  AddCoordinate.prototype.render = function () {
    if (this.props.isRegion) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.coordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
        options: this.props.options,
        onOptionsChange: this.props.onOptionsChange,
        data: this.props.data,
        coordinate: this.state.coordinate,
        callBackToParent: this.callBack,
        isAddCoordinate: true
      }));
    } else if (this.props.isPoint) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.point && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point_point__WEBPACK_IMPORTED_MODULE_6__["default"], {
        options: this.props.options,
        onOptionsChange: this.props.onOptionsChange,
        data: this.props.data,
        point: this.state.point,
        callBackToParent: this.callBackPoint,
        isAddPoint: true
      }));
    } else if (this.props.isLink) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.orientedLink && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_orientedLink_orientedLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        options: this.props.options,
        onOptionsChange: this.props.onOptionsChange,
        data: this.props.data,
        orientedLink: this.state.orientedLink,
        callBackToParent: this.callBackOrientedLink,
        isAddLink: true
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  return AddCoordinate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddCoordinate);

/***/ }),

/***/ "./components/CoordinateSpace/coordinateSpace.tsx":
/*!********************************************************!*\
  !*** ./components/CoordinateSpace/coordinateSpace.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_CreateInput_createInputCoor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/CreateInput/createInputCoor */ "./Functions/CreateInput/createInputCoor.tsx");
/* harmony import */ var Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/EditParameter/editGoodParameter */ "./Functions/EditParameter/editGoodParameter.tsx");
/* harmony import */ var Functions_searchIDLimit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/searchIDLimit */ "./Functions/searchIDLimit.tsx");
/* harmony import */ var Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/initRegionCoordinateSpace */ "./Functions/initRegionCoordinateSpace.tsx");
/* harmony import */ var components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var _manageQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! style/CoordinateSpace.css */ "./style/CoordinateSpace.css");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manageAuxiliaryQuery */ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx");















/**
 * component edit space coordinate
 */

var CoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoordinateSpace, _super);

  function CoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncArrayCoor = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncArrayInput = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** add inputs for a new coordiante */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](id, Object(Functions_CreateInput_createInputCoor__WEBPACK_IMPORTED_MODULE_6__["createInputCoor"])(id, false))])
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function () {
      var del = confirm('Delete "' + _this.state.arrayCoor.label + '" ?'); // alert(del);

      if (del) {
        _this.props.callBackToParent(_this.state.arrayCoor.id, undefined);
      }
    };
    /** edit value for selectedDefaultValue and edit idSVG arrayCoor */


    _this.onChangeSelectSVG = function (value) {
      // const newId: SelectableValue<string> = value;
      var coordinate = _this.state.arrayCoor;
      coordinate.idSVG = value.value || '';

      _this.setState({
        selectedDefaultSVG: value,
        arrayCoor: coordinate
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** call function to return arrayCoor a SimpleEditor */


    _this.callBack = function () {
      var waitAlert = 3000;

      if (_this.state.arrayCoor.label === '') {
        _this.setState({
          severityAlert: 'error',
          titleAlert: 'Error: label is empty',
          hiddenAlert: false
        });

        setTimeout(function () {
          _this.setState({
            hiddenAlert: true
          });
        }, waitAlert);
        console.log('ok');
      } else {
        _this.props.callBackToParent(_this.state.arrayCoor.id, _this.state.arrayCoor);

        _this.setState({
          severityAlert: 'success',
          titleAlert: 'Save',
          hiddenAlert: false
        });

        if (!_this.props.isAddCoordinate) {
          setTimeout(function () {
            _this.setState({
              hiddenAlert: true
            });
          }, waitAlert);
        }
      }
    };
    /** save data in parent */


    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj) {
      var oldCoor = _this.state.arrayCoor;

      if (followLink || followLink === '') {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink || hoveringTooltipLink === '') {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText || hoveringTooltipText === '') {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      _this.setState({
        arrayCoor: oldCoor
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordiante) {
      var newValue = _this.state.arrayCoor;
      newValue.colorMode = coordiante.colorMode;
      newValue.traceBorder = coordiante.traceBorder;
      newValue.traceBack = coordiante.traceBack;

      _this.setState({
        arrayCoor: newValue
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit) {
      var newValue = _this.state.arrayCoor;
      newValue.lowerLimit = lowerLimit;

      _this.setState({
        arrayCoor: newValue
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** save mainMetric data */


    _this.callBackMainMetric = function (mainMetric) {
      var newValue = _this.state.arrayCoor;
      newValue.mainMetric = mainMetric;

      _this.setState({
        arrayCoor: newValue
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** change value radio button checker to pass svg or coordinate mode */


    _this.onChangeRadioMode = function (event) {
      var coordinate = _this.state.arrayCoor;
      coordinate.mode = event.currentTarget.value === 'svgMode' ? true : false;

      _this.setState({
        selectedRadio: event.currentTarget.value,
        arrayCoor: coordinate
      });

      if (_this.props.isAddCoordinate === false) {
        _this.callBack();
      }
    };
    /** add all id SVG in select */


    _this.fillSelectSVG = function () {
      var e_1, _a;

      var selectedIDSvg = [];

      if (_this.state.allIDSelected.length > 0) {
        var allIDSelected = _this.state.allIDSelected;
        var defaultSVG = allIDSelected[0];

        try {
          for (var allIDSelected_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allIDSelected), allIDSelected_1_1 = allIDSelected_1.next(); !allIDSelected_1_1.done; allIDSelected_1_1 = allIDSelected_1.next()) {
            var line = allIDSelected_1_1.value;

            if (line.value === _this.state.arrayCoor.idSVG) {
              defaultSVG = line;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (allIDSelected_1_1 && !allIDSelected_1_1.done && (_a = allIDSelected_1["return"])) _a.call(allIDSelected_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.setState({
          selectedDefaultSVG: defaultSVG
        });

        return;
      }

      var timeRefresh = 1000;

      if (_this.props.options.baseMap.modeSVG) {
        var refresh_1 = setInterval(function () {
          var e_2, _a, e_3, _b;

          var data = Object(Functions_searchIDLimit__WEBPACK_IMPORTED_MODULE_8__["returnAllId"])(_this.props.options.coordinateSpaceInitial.coordinate, _this.props.options.baseMap);

          if (data.length > 0) {
            try {
              for (var data_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var line = data_1_1.value;
                selectedIDSvg.push({
                  value: line,
                  label: line
                });
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (data_1_1 && !data_1_1.done && (_a = data_1["return"])) _a.call(data_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }

            var defaultSVG = selectedIDSvg[0];

            try {
              for (var selectedIDSvg_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(selectedIDSvg), selectedIDSvg_1_1 = selectedIDSvg_1.next(); !selectedIDSvg_1_1.done; selectedIDSvg_1_1 = selectedIDSvg_1.next()) {
                var line = selectedIDSvg_1_1.value;

                if (line.value === _this.state.arrayCoor.idSVG) {
                  defaultSVG = line;
                }
              }
            } catch (e_3_1) {
              e_3 = {
                error: e_3_1
              };
            } finally {
              try {
                if (selectedIDSvg_1_1 && !selectedIDSvg_1_1.done && (_b = selectedIDSvg_1["return"])) _b.call(selectedIDSvg_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }

            _this.setState({
              allIDSelected: selectedIDSvg,
              selectedDefaultSVG: defaultSVG
            });

            clearInterval(refresh_1);
          } // else {
          // 	console.error('error search id');
          // }

        }, timeRefresh);
      }
    };
    /**
     * fill input whith data
     * this function is called by mount and update event
     */


    _this.getDataInInput = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.addInput(this.props.coordinate.id)];

            case 1:
              _a.sent();

              this.fillInputEspaceCoor();
              this.fillSelectSVG();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** call function in load component */


    _this.componentDidMount = function () {
      _this.getDataInInput();
    };
    /** function is call when props is update. Update state */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.coordinate.id !== this.props.coordinate.id)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncArrayCoor({
                arrayCoor: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__["cloneRegionCoordinateSpace"])(this.props.coordinate)
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: []
              })];

            case 2:
              _a.sent();

              this.getDataInInput();
              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      arrayCoor: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__["cloneRegionCoordinateSpace"])(_this.props.coordinate),
      arrayInput: [],
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
      selectedRadio: 'svgMode',
      allIDSelected: [],
      selectedDefaultSVG: []
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  CoordinateSpace.prototype._handleChange = function (currentTarget, name, index) {
    var tmp = this.state.arrayCoor;
    tmp = Object(Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_7__["editGoodParameterExtend"])(name, tmp, currentTarget);
    this.setState({
      arrayCoor: tmp
    });
    this.fillInputEspaceCoor();

    if (this.props.isAddCoordinate === false) {
      this.callBack();
    }
  };
  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  CoordinateSpace.prototype.getGoodValue = function (id, param) {
    var value;
    value = '';

    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.coords.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coords.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coords.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coords.yMax;
    } else if (param.startsWith('label')) {
      value = this.state.arrayCoor.label;
    } else if (param.startsWith('image')) {
      value = this.state.arrayCoor.img;
    } else if (param.startsWith('key')) {
      value = this.state.arrayCoor.mainMetric.key;
    } else if (param.startsWith('valueKey')) {
      value = this.state.arrayCoor.mainMetric.keyValue;
    }

    return value;
  };
  /** create dynamic input */


  CoordinateSpace.prototype.fillInputEspaceCoor = function () {
    var e_4, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var finalItem = [];

    var _loop_1 = function _loop_1(line) {
      var mapItems = line.getUneClassInput().map(function (obj) {
        return obj.getInputType() === 'text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          name: obj.getName(),
          placeholder: obj.getPlaceholder() || '',
          required: obj.getRequired(),
          value: _this.getGoodValue(line.getId(), obj.getName()),
          _handleChange: function _handleChange(event) {
            return _this._handleChange(event.currentTarget.value, obj.getName(), line.getId());
          }
        }) : !_this.props.isAddCoordinate ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          value: obj.getValue() || '',
          name: obj.getName(),
          required: obj.getRequired(),
          _handleChange: _this.deleteOwnInput,
          id: obj.getId()
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      });
      var divKey = 'inputCoor' + line.getId().toString();
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'addCoordinate' + divKey,
        className: "inputCoor"
      }, mapItems);
      finalItem = finalItem.concat(newInput);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    this.setState(function (prevState) {
      return {
        htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem),
        selectedRadio: prevState.arrayCoor.mode ? 'svgMode' : 'coordinateMode'
      };
    });
  };
  /** return html */


  CoordinateSpace.prototype.render = function () {
    var _this = this;

    var styleAlert = {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: 9999
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleAlert,
      hidden: this.state.hiddenAlert
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      title: this.state.titleAlert,
      severity: this.state.severityAlert
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageQuery__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.arrayCoor.id,
      mainMetric: this.state.arrayCoor.mainMetric,
      callBackToParent: this.callBackMainMetric,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_14__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.arrayCoor.id,
      metrics: this.state.arrayCoor.metrics,
      //callBackToParent={this.callBackAuxiliaryMetric}
      isRegion: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.arrayCoor,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.arrayCoor,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "radio"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      value: "svgMode",
      checked: this.state.selectedRadio === 'svgMode',
      onChange: this.onChangeRadioMode
    }), "SVG mode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "radio"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      value: "coordinateMode",
      checked: this.state.selectedRadio === 'coordinateMode',
      onChange: this.onChangeRadioMode
    }), "Coordinate mode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.selectedRadio === 'svgMode' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "svgMode"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Zone SVG")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectSVG(value);
      },
      allowCustomValue: false,
      options: this.state.allIDSelected,
      width: 10,
      value: this.state.selectedDefaultSVG
    })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "classRegion"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Image",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.img,
      name: "image",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'image', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X min",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.xMin,
      name: "positionXMin",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X max",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.xMax,
      name: "positionXMax",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMax', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y min",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.yMin,
      name: "positionYMin",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y max",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.yMax,
      name: "positionYMax",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMax', _this.state.arrayCoor.id);
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      },
      className: "buttonSave"
    }, this.props.isAddCoordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginRight: '1%'
      },
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Save"), !this.props.isAddCoordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.deleteOwnInput,
      variant: "danger"
    }, "Delete")));
  };

  return CoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/editCoordinateSpace.tsx":
/*!************************************************************!*\
  !*** ./components/CoordinateSpace/editCoordinateSpace.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");




/**
 * manage coordinate space for simpleEditor
 */

var EditCoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditCoordinateSpace, _super);

  function EditCoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /**
     * save data in parent
     */


    _this.callBack = function (id, newCoordinate) {
      var e_1, _a, e_2, _b;

      if (newCoordinate) {
        var oldData = _this.props.options.regionCoordinateSpace.slice();

        var i = 0;

        try {
          for (var oldData_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_1_1 = oldData_1.next(); !oldData_1_1.done; oldData_1_1 = oldData_1.next()) {
            var line = oldData_1_1.value;

            if (line.id === id) {
              oldData[i] = newCoordinate;
              break;
            }

            ++i;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (oldData_1_1 && !oldData_1_1.done && (_a = oldData_1["return"])) _a.call(oldData_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          regionCoordinateSpace: oldData
        }));
      } else {
        var find = false;

        var oldData = _this.props.options.regionCoordinateSpace.slice();

        var i = 0;

        try {
          for (var oldData_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_2_1 = oldData_2.next(); !oldData_2_1.done; oldData_2_1 = oldData_2.next()) {
            var line = oldData_2_1.value;

            if (line.id === id) {
              find = true;
              break;
            }

            ++i;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (oldData_2_1 && !oldData_2_1.done && (_b = oldData_2["return"])) _b.call(oldData_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        if (find) {
          oldData.splice(i, 1);

          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            regionCoordinateSpace: oldData
          }));

          _this.fillSelectRegionSpace();
        }
      }
    };
    /** change select value to edit */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /** fill select whith array region object */


    _this.fillSelectRegionSpace = function () {
      var e_3, _a, e_4, _b;

      var _c;

      var valueExist = false;
      var valueSelect = [];

      var stockTmpCoordinatesSpace = _this.props.options.regionCoordinateSpace.slice();

      try {
        for (var stockTmpCoordinatesSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next(); !stockTmpCoordinatesSpace_1_1.done; stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next()) {
          var line = stockTmpCoordinatesSpace_1_1.value;
          valueSelect.push({
            value: line,
            label: line.label
          });
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (stockTmpCoordinatesSpace_1_1 && !stockTmpCoordinatesSpace_1_1.done && (_a = stockTmpCoordinatesSpace_1["return"])) _a.call(stockTmpCoordinatesSpace_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      if (_this.state.selectCoordinateSpaceDefault) {
        try {
          for (var stockTmpCoordinatesSpace_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next(); !stockTmpCoordinatesSpace_2_1.done; stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next()) {
            var line = stockTmpCoordinatesSpace_2_1.value;

            if (line.id === ((_c = _this.state.selectCoordinateSpaceDefault.value) === null || _c === void 0 ? void 0 : _c.id)) {
              valueExist = true;
              break;
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (stockTmpCoordinatesSpace_2_1 && !stockTmpCoordinatesSpace_2_1.done && (_b = stockTmpCoordinatesSpace_2["return"])) _b.call(stockTmpCoordinatesSpace_2);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } // dev


      _this.setState(function (prevState) {
        return {
          selectCoordinateSpace: valueSelect,
          selectCoordinateSpaceDefault: valueExist ? prevState.selectCoordinateSpaceDefault : valueSelect.length > 0 ? valueSelect[0] : prevState.selectCoordinateSpaceDefault
        };
      });
    };
    /** fill data for select */


    _this.componentDidMount = function () {
      _this.fillSelectRegionSpace();
    };
    /** update state if value props change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.regionCoordinateSpace !== _this.props.options.regionCoordinateSpace) {
        _this.fillSelectRegionSpace();
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** return html */


  EditCoordinateSpace.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Select Region")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_coordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.selectCoordinateSpaceDefault.value,
      callBackToParent: this.callBack,
      isAddCoordinate: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '50px'
      }
    }, "Data not set")));
  };

  return EditCoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditCoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx":
/*!*************************************************************!*\
  !*** ./components/CoordinateSpace/manageAuxiliaryQuery.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * def
 */

var ManageAuxiliaryQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageAuxiliaryQuery, _super);

  function ManageAuxiliaryQuery(props) {
    var _this = _super.call(this, props) || this;

    _this.saveAuxMetrics = function (newAuxMetrics, isLinkB) {
      var e_1, _a, e_2, _b, e_3, _c;

      var idCurrentCoordinateSpace = _this.props.idCoordinate;

      if (_this.props.isPoint) {
        var newArrayPoints = _this.props.options.arrayPoints;

        try {
          for (var newArrayPoints_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayPoints), newArrayPoints_1_1 = newArrayPoints_1.next(); !newArrayPoints_1_1.done; newArrayPoints_1_1 = newArrayPoints_1.next()) {
            var point = newArrayPoints_1_1.value;

            if (point.id === idCurrentCoordinateSpace) {
              point.metrics = newAuxMetrics;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (newArrayPoints_1_1 && !newArrayPoints_1_1.done && (_a = newArrayPoints_1["return"])) _a.call(newArrayPoints_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayPoints: newArrayPoints
        }));
      } else if (_this.props.isLink) {
        var newArrayLink = _this.props.options.arrayOrientedLinks;

        try {
          for (var newArrayLink_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayLink), newArrayLink_1_1 = newArrayLink_1.next(); !newArrayLink_1_1.done; newArrayLink_1_1 = newArrayLink_1.next()) {
            var orientedLink = newArrayLink_1_1.value;

            if (orientedLink.id === idCurrentCoordinateSpace) {
              if (isLinkB) {
                orientedLink.metricsB = newAuxMetrics;
              } else {
                orientedLink.metrics = newAuxMetrics;
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (newArrayLink_1_1 && !newArrayLink_1_1.done && (_b = newArrayLink_1["return"])) _b.call(newArrayLink_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayOrientedLinks: newArrayLink
        }));
      } else if (_this.props.isRegion) {
        var newArrayRegion = _this.props.options.regionCoordinateSpace;

        try {
          for (var newArrayRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayRegion), newArrayRegion_1_1 = newArrayRegion_1.next(); !newArrayRegion_1_1.done; newArrayRegion_1_1 = newArrayRegion_1.next()) {
            var region = newArrayRegion_1_1.value;

            if (region.id === idCurrentCoordinateSpace) {
              region.metrics = newAuxMetrics;
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (newArrayRegion_1_1 && !newArrayRegion_1_1.done && (_c = newArrayRegion_1["return"])) _c.call(newArrayRegion_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          regionCoordinateSpace: newArrayRegion
        }));
      }
    };

    _this.getAuxiliaryMetrics = function (isLinkB) {
      var e_4, _a, e_5, _b, e_6, _c;

      var auxiliaryMetrics = [];
      var idCurrentCoordinateSpace = _this.props.idCoordinate;

      if (_this.props.isLink) {
        var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;

        try {
          for (var arrayOrientedLinks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next(); !arrayOrientedLinks_1_1.done; arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next()) {
            var orientedLink = arrayOrientedLinks_1_1.value;

            if (orientedLink.id === idCurrentCoordinateSpace) {
              if (isLinkB) {
                auxiliaryMetrics = orientedLink.metricsB;
              } else {
                auxiliaryMetrics = orientedLink.metrics;
              }
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (arrayOrientedLinks_1_1 && !arrayOrientedLinks_1_1.done && (_a = arrayOrientedLinks_1["return"])) _a.call(arrayOrientedLinks_1);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } else if (_this.props.isPoint) {
        var arrayPoints = _this.props.options.arrayPoints;

        try {
          for (var arrayPoints_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayPoints), arrayPoints_1_1 = arrayPoints_1.next(); !arrayPoints_1_1.done; arrayPoints_1_1 = arrayPoints_1.next()) {
            var point = arrayPoints_1_1.value;

            if (point.id === idCurrentCoordinateSpace) {
              auxiliaryMetrics = point.metrics;
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (arrayPoints_1_1 && !arrayPoints_1_1.done && (_b = arrayPoints_1["return"])) _b.call(arrayPoints_1);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      } else if (_this.props.isRegion) {
        var arrayRegions = _this.props.options.regionCoordinateSpace;

        try {
          for (var arrayRegions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayRegions), arrayRegions_1_1 = arrayRegions_1.next(); !arrayRegions_1_1.done; arrayRegions_1_1 = arrayRegions_1.next()) {
            var region = arrayRegions_1_1.value;

            if (region.id === idCurrentCoordinateSpace) {
              auxiliaryMetrics = region.metrics;
            }
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (arrayRegions_1_1 && !arrayRegions_1_1.done && (_c = arrayRegions_1["return"])) _c.call(arrayRegions_1);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
      }

      return auxiliaryMetrics;
    };

    _this.getReferenceMainMetric = function (isLinkB) {
      var e_7, _a, e_8, _b, e_9, _c, e_10, _d;

      var newRefId = '';
      var idCurrentCoordinateSpace = _this.props.idCoordinate;

      if (_this.props.isLink) {
        var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;

        try {
          for (var arrayOrientedLinks_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_2_1 = arrayOrientedLinks_2.next(); !arrayOrientedLinks_2_1.done; arrayOrientedLinks_2_1 = arrayOrientedLinks_2.next()) {
            var orientedLink = arrayOrientedLinks_2_1.value;

            if (orientedLink.id === idCurrentCoordinateSpace) {
              if (isLinkB) {
                newRefId = orientedLink.mainMetricB.refId || '';
              } else {
                newRefId = orientedLink.mainMetric.refId || '';
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (arrayOrientedLinks_2_1 && !arrayOrientedLinks_2_1.done && (_a = arrayOrientedLinks_2["return"])) _a.call(arrayOrientedLinks_2);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      } else if (_this.props.isPoint) {
        var newArrayPoints = _this.props.options.arrayPoints;

        try {
          for (var newArrayPoints_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayPoints), newArrayPoints_2_1 = newArrayPoints_2.next(); !newArrayPoints_2_1.done; newArrayPoints_2_1 = newArrayPoints_2.next()) {
            var point = newArrayPoints_2_1.value;

            if (point.id === idCurrentCoordinateSpace) {
              newRefId = point.mainMetric.refId || '';
            }
          }
        } catch (e_8_1) {
          e_8 = {
            error: e_8_1
          };
        } finally {
          try {
            if (newArrayPoints_2_1 && !newArrayPoints_2_1.done && (_b = newArrayPoints_2["return"])) _b.call(newArrayPoints_2);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
      } else if (_this.props.isRegion) {
        var arrayRegions = _this.props.options.regionCoordinateSpace;

        try {
          for (var arrayRegions_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayRegions), arrayRegions_2_1 = arrayRegions_2.next(); !arrayRegions_2_1.done; arrayRegions_2_1 = arrayRegions_2.next()) {
            var region = arrayRegions_2_1.value;

            if (region.id === idCurrentCoordinateSpace) {
              newRefId = region.mainMetric.refId || '';
            }
          }
        } catch (e_9_1) {
          e_9 = {
            error: e_9_1
          };
        } finally {
          try {
            if (arrayRegions_2_1 && !arrayRegions_2_1.done && (_c = arrayRegions_2["return"])) _c.call(arrayRegions_2);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
      }

      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(isLinkB);

      try {
        for (var newAuxiliaryMetrics_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newAuxiliaryMetrics), newAuxiliaryMetrics_1_1 = newAuxiliaryMetrics_1.next(); !newAuxiliaryMetrics_1_1.done; newAuxiliaryMetrics_1_1 = newAuxiliaryMetrics_1.next()) {
          var metric = newAuxiliaryMetrics_1_1.value;

          if (metric.refId !== newRefId) {
            metric.refId = newRefId;

            _this.saveAuxMetrics(newAuxiliaryMetrics, isLinkB);
          }
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (newAuxiliaryMetrics_1_1 && !newAuxiliaryMetrics_1_1.done && (_d = newAuxiliaryMetrics_1["return"])) _d.call(newAuxiliaryMetrics_1);
        } finally {
          if (e_10) throw e_10.error;
        }
      }

      return newRefId;
    };
    /** switch value collapse when click collapse */


    _this.onToggleCollapse = function (isOpen) {
      _this.setState({
        collapse: isOpen
      });
    };
    /** switch value collapseLinkA when click collapse */


    _this.onToggleCollapseLinkA = function (isOpen) {
      _this.setState({
        collapseLinkA: isOpen
      });
    };
    /** switch value collapseLinkB when click collapse */


    _this.onToggleCollapseLinkB = function (isOpen) {
      _this.setState({
        collapseLinkB: isOpen
      });
    };

    _this.onChangeKey = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(false);

      var idCurrentAuxMetrics = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[idCurrentAuxMetrics].key = value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, false);
    };

    _this.onChangeKeyB = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(true);

      var idCurrentAuxMetrics = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[idCurrentAuxMetrics].key = value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, true);
    };

    _this.onChangeValueKey = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(false);

      var id = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[id].keyValue = value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, false);
    };

    _this.onChangeValueKeyB = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(true);

      var id = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[id].keyValue = value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, true);
    };

    _this.onChangeManageValue = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(false);

      var id = event.id;
      newAuxiliaryMetrics[id].manageValue = event.value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, false);
    };

    _this.onChangeManageValueB = function (event) {
      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(true);

      var id = event.id;
      newAuxiliaryMetrics[id].manageValue = event.value;

      _this.saveAuxMetrics(newAuxiliaryMetrics, true);
    };

    _this.addAuxiliaryMetric = function () {
      var refIdMetric = _this.getReferenceMainMetric(false);

      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(false);

      newAuxiliaryMetrics.push({
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: refIdMetric,
        manageValue: 'avg'
      });

      _this.saveAuxMetrics(newAuxiliaryMetrics, false);

      _this.displayInputs(false);
    };

    _this.addAuxiliaryMetricB = function () {
      var refIdMetric = _this.getReferenceMainMetric(true);

      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(true);

      newAuxiliaryMetrics.push({
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: refIdMetric,
        manageValue: 'avg'
      });

      _this.saveAuxMetrics(newAuxiliaryMetrics, true);

      _this.displayInputs(true);
    };

    _this.deleteAuxiliaryMetric = function (event) {
      var id = event.currentTarget.id;

      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(false);

      newAuxiliaryMetrics.splice(id, 1);

      _this.saveAuxMetrics(newAuxiliaryMetrics, false);

      _this.displayInputs(false);
    };

    _this.deleteAuxiliaryMetricB = function (event) {
      var id = event.currentTarget.id;

      var newAuxiliaryMetrics = _this.getAuxiliaryMetrics(true);

      newAuxiliaryMetrics.splice(id, 1);

      _this.saveAuxMetrics(newAuxiliaryMetrics, true);

      _this.displayInputs(true);
    };

    _this.getAllManageValue = function (id) {
      var selectManageValue = [{
        id: id,
        value: 'avg',
        label: 'average'
      }, {
        id: id,
        value: 'sum',
        label: 'total'
      }, {
        id: id,
        value: 'err',
        label: 'error'
      }];
      return selectManageValue;
    };

    _this.getCurrentManageValue = function (id, isLinkB) {
      var label = '';

      var auxMetrics = _this.getAuxiliaryMetrics(isLinkB);

      if (auxMetrics[id].manageValue === 'avg') {
        label = 'average';
      } else if (auxMetrics[id].manageValue === 'sum') {
        label = 'total';
      } else if (auxMetrics[id].manageValue === 'err') {
        label = 'error';
      }

      var value = {
        id: id,
        value: auxMetrics[id].manageValue,
        label: label
      };
      return value;
    };

    _this.generateInputs = function (index, isLinkB) {
      var _a, _b, _c;

      var id = index;

      var refIdMetric = _this.getReferenceMainMetric(isLinkB);

      var auxMetrics = _this.getAuxiliaryMetrics(isLinkB);

      var idCoordinateSpace = ((_a = _this.props.idCoordinate) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      var styleTitle = {
        marginTop: '10px',
        textAlign: 'center'
      };
      var styleMainDiv = {
        marginTop: '5px',
        border: '1px solid rgb(23, 23, 24)'
      };
      var styleContent = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5px'
      };
      var styleSelect = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2px'
      };
      var styleReferenceMetric = {
        width: '276px',
        height: '35px',
        border: '1px solid #262628',
        borderRadius: '0 3px 3px 0',
        backgroundColor: '#09090b',
        padding: '8px',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#d8d9da',
        marginBottom: '0px'
      };
      var item;

      if (isLinkB) {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'mainDiv' + id.toString(),
          style: styleMainDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: idCoordinateSpace + 'title' + id.toString(),
          style: styleTitle
        }, 'Metric ' + (id + 1).toString()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'content' + id.toString(),
          style: styleContent
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'inputs' + id.toString()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'refBloc' + id.toString(),
          style: styleSelect
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          key: idCoordinateSpace + 'labelref' + id.toString(),
          width: 10
        }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: ((_b = _this.props.idCoordinate) === null || _b === void 0 ? void 0 : _b.toString()) || '' + 'refValue' + id.toString(),
          style: styleReferenceMetric
        }, refIdMetric)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          key: idCoordinateSpace + 'inputKey' + id.toString(),
          id: id.toString(),
          label: "Key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: auxMetrics[id].key,
          name: "key",
          onChange: _this.onChangeKeyB
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          key: idCoordinateSpace + 'valueKey' + id.toString(),
          id: id.toString(),
          label: "Value key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: auxMetrics[id].keyValue,
          name: "valueKey",
          onChange: _this.onChangeValueKeyB
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'divTypeOfValue' + id.toString(),
          id: id.toString(),
          style: styleSelect
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          key: idCoordinateSpace + 'labelTypeOfValue' + id.toString(),
          width: 10
        }, "Value"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          key: idCoordinateSpace + 'selectTypeOfValue' + id.toString(),
          onChange: _this.onChangeManageValueB,
          allowCustomValue: false,
          options: _this.getAllManageValue(id.toString()),
          width: 20,
          value: _this.getCurrentManageValue(id, isLinkB)
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'buttonDelete' + id.toString()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: id.toString(),
          onClick: _this.deleteAuxiliaryMetricB,
          variant: 'danger'
        }, "Delete"))));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'mainDiv' + id.toString(),
          style: styleMainDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: idCoordinateSpace + 'title' + id.toString(),
          style: styleTitle
        }, 'Metric ' + (id + 1).toString()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'content' + id.toString(),
          style: styleContent
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'inputs' + id.toString()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'refBloc' + id.toString(),
          style: styleSelect
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          key: idCoordinateSpace + 'labelref' + id.toString(),
          width: 15
        }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: ((_c = _this.props.idCoordinate) === null || _c === void 0 ? void 0 : _c.toString()) || '' + 'refValue' + id.toString(),
          style: styleReferenceMetric
        }, refIdMetric)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          key: idCoordinateSpace + 'inputKey' + id.toString(),
          id: id.toString(),
          label: "Key",
          labelWidth: 15,
          inputWidth: 30,
          type: "text",
          value: auxMetrics[id].key,
          name: "key",
          onChange: _this.onChangeKey
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          key: idCoordinateSpace + 'valueKey' + id.toString(),
          id: id.toString(),
          label: "Value key",
          labelWidth: 15,
          inputWidth: 30,
          type: "text",
          value: auxMetrics[id].keyValue,
          name: "valueKey",
          onChange: _this.onChangeValueKey
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'divTypeOfValue' + id.toString(),
          id: id.toString(),
          style: styleSelect
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          key: idCoordinateSpace + 'labelTypeOfValue' + id.toString(),
          width: 15
        }, "Value"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          key: idCoordinateSpace + 'selectTypeOfValue' + id.toString(),
          onChange: _this.onChangeManageValue,
          allowCustomValue: false,
          options: _this.getAllManageValue(id.toString()),
          width: 30,
          value: _this.getCurrentManageValue(id, isLinkB)
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idCoordinateSpace + 'buttonDelete' + id.toString()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: id.toString(),
          onClick: _this.deleteAuxiliaryMetric,
          variant: 'danger'
        }, "Delete"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idCoordinateSpace + 'listInputOneMetric' + id.toString()
      }, item);
    };

    _this.displayInputs = function (isLinkB) {
      var _a;

      var idCoordinateSpace = ((_a = _this.props.idCoordinate) === null || _a === void 0 ? void 0 : _a.toString()) || '';

      var auxiliaryMetrics = _this.getAuxiliaryMetrics(isLinkB);

      var mapItems = [];
      var index = 0;
      auxiliaryMetrics.forEach(function () {
        var item = _this.generateInputs(index, isLinkB);

        mapItems.push(item);
        index++;
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idCoordinateSpace + 'listInputAllMetrics'
      }, mapItems);
    };

    _this.state = {
      collapse: false,
      collapseLinkA: false,
      collapseLinkB: false
    };
    return _this;
  }
  /**
   * result
   */


  ManageAuxiliaryQuery.prototype.render = function () {
    var e_11, _a;

    var _b;

    var idCoordinateSpace = ((_b = this.props.idCoordinate) === null || _b === void 0 ? void 0 : _b.toString()) || '';
    var styleButtonAdd = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '10px'
    };
    var currentOrientedLink;
    var arrayOrientedLinks = this.props.options.arrayOrientedLinks;

    try {
      for (var arrayOrientedLinks_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_3_1 = arrayOrientedLinks_3.next(); !arrayOrientedLinks_3_1.done; arrayOrientedLinks_3_1 = arrayOrientedLinks_3.next()) {
        var orientedLink = arrayOrientedLinks_3_1.value;

        if (orientedLink.id === this.props.idCoordinate) {
          currentOrientedLink = orientedLink;
        }
      }
    } catch (e_11_1) {
      e_11 = {
        error: e_11_1
      };
    } finally {
      try {
        if (arrayOrientedLinks_3_1 && !arrayOrientedLinks_3_1.done && (_a = arrayOrientedLinks_3["return"])) _a.call(arrayOrientedLinks_3);
      } finally {
        if (e_11) throw e_11.error;
      }
    }

    if (this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.collapse,
        label: "Auxiliary metrics",
        onToggle: this.onToggleCollapse
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.collapseLinkA,
        label: "Link A",
        onToggle: this.onToggleCollapseLinkA
      }, this.displayInputs(false), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idCoordinateSpace + 'buttonAdd',
        style: styleButtonAdd
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.addAuxiliaryMetric
      }, "Add Auxiliary Metric"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.collapseLinkB,
        label: "Link B",
        onToggle: this.onToggleCollapseLinkB
      }, this.displayInputs(true), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idCoordinateSpace + 'buttonAdd',
        style: styleButtonAdd
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.addAuxiliaryMetricB
      }, "Add Auxiliary Metric"))));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.collapse,
        label: "Auxiliary metrics",
        onToggle: this.onToggleCollapse
      }, this.displayInputs(false), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idCoordinateSpace + 'buttonAdd',
        style: styleButtonAdd
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.addAuxiliaryMetric
      }, "Add Auxiliary Metric")));
    }
  };

  return ManageAuxiliaryQuery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageAuxiliaryQuery);

/***/ }),

/***/ "./components/CoordinateSpace/manageCoordinateSpace.tsx":
/*!**************************************************************!*\
  !*** ./components/CoordinateSpace/manageCoordinateSpace.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCoordinateSpace */ "./components/CoordinateSpace/editCoordinateSpace.tsx");
/* harmony import */ var _point_editPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point/editPoint */ "./components/CoordinateSpace/point/editPoint.tsx");
/* harmony import */ var _orientedLink_editOrientedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orientedLink/editOrientedLink */ "./components/CoordinateSpace/orientedLink/editOrientedLink.tsx");
/* harmony import */ var _addCoordinate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");







/**
 * def class
 */

var ManageCoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageCoordinateSpace, _super);

  function ManageCoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /** after save pass to edit mode */


    _this.returnEditMode = function () {
      _this.setState({
        tabsVariable: [false, true]
      });
    };
    /**
     * switch tab
     * @param {number} id id to to new tab
     */


    _this.goToTab = function (id) {
      var oldValue = _this.state.tabsVariable.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsVariable: oldValue
      });
    };

    _this.contentTabEdit = function () {
      var result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (_this.props.isRegion) {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_editCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data
        }));
      } else if (_this.props.isPoint) {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point_editPoint__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data
        }));
      } else if (_this.props.isLink) {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_orientedLink_editOrientedLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data
        }));
      }

      return result;
    };

    _this.state = {
      tabsVariable: [false, true]
    };
    return _this;
  }
  /** result */


  ManageCoordinateSpace.prototype.render = function () {
    var _this = this;

    if (!this.props.isLink) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
        className: "page-header tabs",
        hideBorder: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        key: "tabDisplayCoordinateSpaceAdd",
        label: "Add coordinate space",
        active: this.state.tabsVariable[0],
        onChangeTab: function onChangeTab() {
          return _this.goToTab(0);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        key: "tabDisplayCoordinateSpaceEdit",
        label: "Edit coordinate space",
        active: this.state.tabsVariable[1],
        onChangeTab: function onChangeTab() {
          return _this.goToTab(1);
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addCoordinate__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onOptionsChange: this.props.onOptionsChange,
        options: this.props.options,
        data: this.props.data,
        returnEditMode: this.returnEditMode,
        isRegion: this.props.isRegion,
        isPoint: this.props.isPoint,
        isLink: this.props.isLink
      }), this.state.tabsVariable[1] && this.contentTabEdit()));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
        className: "page-header tabs",
        hideBorder: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        key: "tabDisplayCoordinateSpaceEdit",
        label: "Edit coordinate space",
        active: this.state.tabsVariable[1],
        onChangeTab: function onChangeTab() {
          return _this.goToTab(1);
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[1] && this.contentTabEdit()));
    }
  };

  return ManageCoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageCoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/manageQuery.tsx":
/*!****************************************************!*\
  !*** ./components/CoordinateSpace/manageQuery.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * def
 */

var ManageQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageQuery, _super);

  function ManageQuery(props) {
    var _this = _super.call(this, props) || this;
    /** call back to parent */


    _this.callBack = function () {
      _this.props.callBackToParent(_this.state.mainMetric, _this.props.id);
    };
    /** edit value for default select manage value */


    _this.onChangeSelectManageValue = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.manageValue = value.value || 'err';

      _this.setState(function (prevState) {
        return {
          mainMetric: newMainMetric,
          selectDefaultManageValue: value || prevState.selectDefaultManageValue
        };
      });

      _this.callBack();
    };
    /** edit value for default select manage value */


    _this.onChangeSelectManageValueB = function (value) {
      var newMainMetric = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;
      newMainMetric.manageValue = value.value || 'err';

      _this.setState({
        mainMetricB: newMainMetric
      });

      _this.callBack();
    };
    /** edit value key for mainMetric */


    _this._handleChangeKey = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.key = value;

      _this.setState({
        mainMetric: newMainMetric
      });

      _this.callBack();
    };
    /** edit value key for mainMetric */


    _this._handleChangeKeyB = function (value) {
      var newMainMetric = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;
      newMainMetric.key = value;

      _this.setState({
        mainMetricB: newMainMetric
      });

      _this.callBack();
    };
    /** edit value keyValue for mainMetric */


    _this._handleChangeKeyValue = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.keyValue = value;

      _this.setState({
        mainMetric: newMainMetric
      });

      _this.callBack();
    };
    /** edit value keyValue for mainMetric */


    _this._handleChangeKeyValueB = function (value) {
      var newMainMetric = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;
      newMainMetric.keyValue = value;

      _this.setState({
        mainMetricB: newMainMetric
      });

      _this.callBack();
    };
    /** edit value for select */


    _this.onChangeSelectQuery = function (value) {
      var _a;

      var newMainMetric = _this.state.mainMetric;
      newMainMetric.refId = ((_a = value.value) === null || _a === void 0 ? void 0 : _a.refId) || '';
      newMainMetric.expr = '';

      _this.setState({
        mainMetric: newMainMetric,
        selectQueryDefault: value
      });

      _this.callBack();
    };
    /** edit value for select */


    _this.onChangeSelectQueryB = function (value) {
      var _a;

      var newMainMetric = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;
      newMainMetric.refId = ((_a = value.value) === null || _a === void 0 ? void 0 : _a.refId) || '';
      newMainMetric.expr = '';

      _this.setState({
        mainMetricB: newMainMetric
      });

      _this.callBack();
    };
    /** switch value collapseMainMetric when click collapse */


    _this.onToggleMainMetric = function (isOpen) {
      _this.setState({
        collapseMainMetric: isOpen
      });
    };
    /** switch value collapseLinkA when click collapse */


    _this.onToggleLinkA = function (isOpen) {
      _this.setState({
        collapseLinkA: isOpen
      });
    };
    /** switch value collapseLinkB when click collapse */


    _this.onToggleLinkB = function (isOpen) {
      _this.setState({
        collapseLinkB: isOpen
      });
    };

    _this.getDefaultQueryB = function () {
      var e_1, _a;

      var defaultValue = {
        label: 'No value',
        value: undefined
      };
      var mainMetricB = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.state.selectQuery), _c = _b.next(); !_c.done; _c = _b.next()) {
          var value = _c.value;

          if (mainMetricB.refId) {
            if (mainMetricB.refId === value.label) {
              defaultValue = value;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return defaultValue;
    };

    _this.getDefaultManageValueB = function () {
      var e_2, _a;

      var defaultValue = {
        label: 'avg',
        value: 'avg'
      };
      var mainMetricB = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetricB;

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.state.selectManageValue), _c = _b.next(); !_c.done; _c = _b.next()) {
          var value = _c.value;

          if (mainMetricB.manageValue) {
            if (mainMetricB.manageValue === value.value) {
              defaultValue = value;
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return defaultValue;
    };
    /** add all query in select */


    _this.fillSelectQuery = function () {
      var e_3, _a, e_4, _b, e_5, _c;

      var _d, _e, _f;

      var valueSelect = [];
      var newMainMetric = _this.state.mainMetric;
      valueSelect.push({
        value: undefined,
        label: 'No value'
      });

      try {
        for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.data.series), _h = _g.next(); !_h.done; _h = _g.next()) {
          var line = _h.value;
          var duplicate = false;

          try {
            for (var valueSelect_1 = (e_4 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueSelect)), valueSelect_1_1 = valueSelect_1.next(); !valueSelect_1_1.done; valueSelect_1_1 = valueSelect_1.next()) {
              var valueSave = valueSelect_1_1.value;

              if (((_d = valueSave.value) === null || _d === void 0 ? void 0 : _d.refId) === line.refId) {
                duplicate = true;
                break;
              }
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (valueSelect_1_1 && !valueSelect_1_1.done && (_b = valueSelect_1["return"])) _b.call(valueSelect_1);
            } finally {
              if (e_4) throw e_4.error;
            }
          }

          if (!duplicate) {
            valueSelect.push({
              value: line,
              label: line.refId
            });
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_a = _g["return"])) _a.call(_g);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      if (newMainMetric.refId === '') {
        newMainMetric.refId = valueSelect.length > 0 ? ((_e = valueSelect[0].value) === null || _e === void 0 ? void 0 : _e.refId) || '' : '';
      }

      var refId = _this.state.mainMetric.refId;
      var defaultValue;
      defaultValue = {
        value: undefined,
        label: 'No value'
      };

      if (refId) {
        try {
          // console.log(valueSelect.filter((a) => { return a.value?.refId === refId; }));
          for (var valueSelect_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueSelect), valueSelect_2_1 = valueSelect_2.next(); !valueSelect_2_1.done; valueSelect_2_1 = valueSelect_2.next()) {
            var line = valueSelect_2_1.value;

            if (((_f = line.value) === null || _f === void 0 ? void 0 : _f.refId) === refId) {
              defaultValue = line;
              break;
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (valueSelect_2_1 && !valueSelect_2_1.done && (_c = valueSelect_2["return"])) _c.call(valueSelect_2);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      }

      _this.setState({
        mainMetric: newMainMetric,
        selectQuery: valueSelect,
        selectQueryDefault: defaultValue
      });
    };
    /** fill data when component mount */


    _this.componentDidMount = function () {
      var e_6, _a;

      _this.fillSelectQuery();

      var newSelectManageValue = [{
        value: 'avg',
        label: 'average'
      }, {
        value: 'sum',
        label: 'total'
      }, {
        value: 'err',
        label: 'error'
      }];
      var defaultValue = newSelectManageValue[0];

      try {
        for (var newSelectManageValue_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newSelectManageValue), newSelectManageValue_1_1 = newSelectManageValue_1.next(); !newSelectManageValue_1_1.done; newSelectManageValue_1_1 = newSelectManageValue_1.next()) {
          var line = newSelectManageValue_1_1.value;

          if (line.value === _this.state.mainMetric.manageValue) {
            defaultValue = line;
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (newSelectManageValue_1_1 && !newSelectManageValue_1_1.done && (_a = newSelectManageValue_1["return"])) _a.call(newSelectManageValue_1);
        } finally {
          if (e_6) throw e_6.error;
        }
      }

      _this.setState({
        selectManageValue: newSelectManageValue,
        selectDefaultManageValue: defaultValue
      });
    };
    /** update with promise mainMetric state */


    _this.setStateAsyncMainMetric = function (state) {
      return new Promise(function (resolve) {
        return _this.setState(state, resolve);
      });
    };
    /** update data when props is update */


    _this.componentDidUpdate = function (prevProps) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.idCoordinate !== this.props.idCoordinate)) return [3
              /*break*/
              , 2];
              this.setState({
                collapseMainMetric: false
              });
              return [4
              /*yield*/
              , this.setStateAsyncMainMetric({
                mainMetric: this.props.mainMetric
              })];

            case 1:
              _a.sent();

              this.fillSelectQuery();
              _a.label = 2;

            case 2:
              if (prevProps.data.series !== this.props.data.series) {
                this.fillSelectQuery();
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.displayHtml = function () {
      var e_7, _a;

      var result;
      var currentOrientedLink;
      var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;

      try {
        for (var arrayOrientedLinks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next(); !arrayOrientedLinks_1_1.done; arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next()) {
          var orientedLink = arrayOrientedLinks_1_1.value;

          if (orientedLink.id === _this.props.idCoordinate) {
            currentOrientedLink = orientedLink;
          }
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (arrayOrientedLinks_1_1 && !arrayOrientedLinks_1_1.done && (_a = arrayOrientedLinks_1["return"])) _a.call(arrayOrientedLinks_1);
        } finally {
          if (e_7) throw e_7.error;
        }
      }

      if (_this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseMainMetric,
          label: "Main metric",
          onToggle: _this.onToggleMainMetric
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseLinkA,
          label: "Link A",
          onToggle: _this.onToggleLinkA
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQuery(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 15,
          value: _this.state.selectQueryDefault
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 15,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKey(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 15,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValue(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValue(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 15,
          value: _this.state.selectDefaultManageValue
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseLinkB,
          label: "Link B",
          onToggle: _this.onToggleLinkB
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle',
            marginTop: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQueryB(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 10,
          value: _this.getDefaultQueryB()
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 15,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetricB.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKeyB(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 15,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetricB.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValueB(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValueB(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 10,
          value: _this.getDefaultManageValueB()
        })))));
      } else {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseMainMetric,
          label: "Main metric",
          onToggle: _this.onToggleMainMetric
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQuery(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 10,
          value: _this.state.selectQueryDefault
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 15,
          inputWidth: 10,
          type: "text",
          value: _this.state.mainMetric.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKey(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 15,
          inputWidth: 10,
          type: "text",
          value: _this.state.mainMetric.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValue(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValue(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 10,
          value: _this.state.selectDefaultManageValue
        }))));
      }

      return result;
    };

    _this.state = {
      mainMetric: _this.props.mainMetric,
      mainMetricB: _this.props.mainMetricB || {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      },
      collapseMainMetric: false,
      collapseLinkA: false,
      collapseLinkB: false,
      selectManageValue: [],
      selectDefaultManageValue: {
        value: 'avg',
        label: 'avg'
      },
      selectQuery: [],
      selectQueryDefault: []
    };
    return _this;
  }
  /**
   * result
   */


  ManageQuery.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.displayHtml());
  };

  return ManageQuery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageQuery);

/***/ }),

/***/ "./components/CoordinateSpace/orientedLink/editOrientedLink.tsx":
/*!**********************************************************************!*\
  !*** ./components/CoordinateSpace/orientedLink/editOrientedLink.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _orientedLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientedLink */ "./components/CoordinateSpace/orientedLink/orientedLink.tsx");




/**
 * manage coordinate space for simpleEditor
 */

var EditOrientedLink =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditOrientedLink, _super);

  function EditOrientedLink(props) {
    var _this = _super.call(this, props) || this;
    /**
     * save data in parent
     */


    _this.callBack = function (id, newCoordinate) {
      var e_1, _a, e_2, _b;

      if (newCoordinate) {
        var oldData = _this.props.options.arrayOrientedLinks.slice();

        var i = 0;

        try {
          for (var oldData_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_1_1 = oldData_1.next(); !oldData_1_1.done; oldData_1_1 = oldData_1.next()) {
            var line = oldData_1_1.value;

            if (line.id === id) {
              oldData[i] = newCoordinate;
              break;
            }

            ++i;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (oldData_1_1 && !oldData_1_1.done && (_a = oldData_1["return"])) _a.call(oldData_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayOrientedLinks: oldData
        })); //this.fillSelectPoint();

      } else {
        var find = false;

        var oldData = _this.props.options.arrayOrientedLinks.slice();

        var i = 0;

        try {
          for (var oldData_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_2_1 = oldData_2.next(); !oldData_2_1.done; oldData_2_1 = oldData_2.next()) {
            var line = oldData_2_1.value;

            if (line.id === id) {
              find = true;
              break;
            }

            ++i;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (oldData_2_1 && !oldData_2_1.done && (_b = oldData_2["return"])) _b.call(oldData_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        if (find) {
          oldData.splice(i, 1);

          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            arrayOrientedLinks: oldData
          }));

          _this.fillSelectPoint();
        }
      }
    };
    /** change select value to edit */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /** fill select whith array region object */


    _this.fillSelectPoint = function () {
      var e_3, _a, e_4, _b;

      var _c;

      var valueExist = false;
      var valueSelect = [];

      var stockTmpCoordinatesSpace = _this.props.options.arrayOrientedLinks.slice();

      try {
        for (var stockTmpCoordinatesSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next(); !stockTmpCoordinatesSpace_1_1.done; stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next()) {
          var line = stockTmpCoordinatesSpace_1_1.value;
          var label = line.label || line.name;
          valueSelect.push({
            value: line,
            label: label
          });
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (stockTmpCoordinatesSpace_1_1 && !stockTmpCoordinatesSpace_1_1.done && (_a = stockTmpCoordinatesSpace_1["return"])) _a.call(stockTmpCoordinatesSpace_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      if (_this.state.selectCoordinateSpaceDefault) {
        try {
          for (var stockTmpCoordinatesSpace_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next(); !stockTmpCoordinatesSpace_2_1.done; stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next()) {
            var line = stockTmpCoordinatesSpace_2_1.value;

            if (line.id === ((_c = _this.state.selectCoordinateSpaceDefault.value) === null || _c === void 0 ? void 0 : _c.id)) {
              valueExist = true;
              break;
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (stockTmpCoordinatesSpace_2_1 && !stockTmpCoordinatesSpace_2_1.done && (_b = stockTmpCoordinatesSpace_2["return"])) _b.call(stockTmpCoordinatesSpace_2);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } // dev


      _this.setState(function (prevState) {
        return {
          selectCoordinateSpace: valueSelect,
          selectCoordinateSpaceDefault: valueExist ? prevState.selectCoordinateSpaceDefault : valueSelect.length > 0 ? valueSelect[0] : prevState.selectCoordinateSpaceDefault
        };
      }); // final
      // this.setState({
      // 	selectCoordinateSpace: valueSelect,
      // 	selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
      // 		valueSelect[0] : this.state.selectCoordinateSpaceDefault,
      // });

    };
    /** fill data for select */


    _this.componentDidMount = function () {
      _this.fillSelectPoint();
    };
    /** update state if value props change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.arrayOrientedLinks !== _this.props.options.arrayOrientedLinks) {
        _this.fillSelectPoint();
      } // console.log(prevProps.options.newPoint);


      if (prevProps.options.newOrientedLink) {
        _this.fillSelectPoint();

        _this.props.options.newOrientedLink = false;
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** return html */


  EditOrientedLink.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Select Oriented Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_orientedLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      orientedLink: this.state.selectCoordinateSpaceDefault.value,
      callBackToParent: this.callBack,
      isAddLink: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '50px'
      }
    }, "Data not set")));
  };

  return EditOrientedLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditOrientedLink);

/***/ }),

/***/ "./components/CoordinateSpace/orientedLink/orientedLink.tsx":
/*!******************************************************************!*\
  !*** ./components/CoordinateSpace/orientedLink/orientedLink.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var _Functions_Input_inputTextOrientedLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Functions/Input/inputTextOrientedLink */ "./Functions/Input/inputTextOrientedLink.tsx");
/* harmony import */ var _Functions_Input_inputSelectOrientedLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Functions/Input/inputSelectOrientedLink */ "./Functions/Input/inputSelectOrientedLink.tsx");
/* harmony import */ var _Functions_CreateInput_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Functions/CreateInput/createInputsOrientedLink */ "./Functions/CreateInput/createInputsOrientedLink.tsx");
/* harmony import */ var _Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Functions/EditParameter/editGoodParameterOrientedLink */ "./Functions/EditParameter/editGoodParameterOrientedLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var _Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var _Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Parametrage/positionParameters */ "./components/Parametrage/positionParameters.tsx");
/* harmony import */ var _CoordinateSpace_manageQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../CoordinateSpace/manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var _CoordinateSpace_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../CoordinateSpace/manageAuxiliaryQuery */ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx");
/* harmony import */ var _Functions_initOrientedLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Functions/initOrientedLink */ "./Functions/initOrientedLink.tsx");














/**
 * IndexParametrage
 */

var OrientedLink =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrientedLink, _super);

  function OrientedLink(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncOrientedLink = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncArrayInput = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** add inputs for a new coordiante */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_2__["ArrayInputSelectableClass"](id, Object(_Functions_CreateInput_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_5__["createInputsOrientedLink"])(id, this.defineDataRegion(), this.defineDataPoint()))])
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function () {
      var label = _this.state.orientedLink.label || _this.state.orientedLink.name;
      var del = confirm('Delete "' + label + '" ?'); // alert(del);

      if (del) {
        _this.props.callBackToParent(_this.state.orientedLink.id, undefined);
      }
    };
    /** set point in/out to empty in if orientedLink is associate to region in/out
     *  set region in/out to empty in if orientedLink is associate to point in/out
     */


    _this.updateAssociatePointAndRegion = function (orientedLink, name) {
      if (name.startsWith('pointIn')) {
        orientedLink = Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])('regionIn', orientedLink, '', {});
      } else if (name.startsWith('regionIn')) {
        orientedLink = Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])('pointIn', orientedLink, '', {});
      } else if (name.startsWith('pointOut')) {
        orientedLink = Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])('regionOut', orientedLink, '', {});
      } else if (name.startsWith('regionOut')) {
        orientedLink = Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])('pointOut', orientedLink, '', {});
      }
    };
    /** call function to return arrayCoor a SimpleEditor */


    _this.callBack = function () {
      var waitAlert = 3000;

      if (_this.state.orientedLink.label === '') {
        _this.setState({
          severityAlert: 'error',
          titleAlert: 'Error: label is empty',
          hiddenAlert: false
        });

        setTimeout(function () {
          _this.setState({
            hiddenAlert: true
          });
        }, waitAlert); //console.log('ok');
      } else {
        _this.props.callBackToParent(_this.state.orientedLink.id, _this.state.orientedLink);

        _this.setState({
          severityAlert: 'success',
          titleAlert: 'Save',
          hiddenAlert: false
        });

        if (!_this.props.isAddLink) {
          setTimeout(function () {
            _this.setState({
              hiddenAlert: true
            });
          }, waitAlert);
        }
      }
    };
    /** update data for manageLink and textObject */


    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj) {
      var oldCoor = _this.state.orientedLink;

      if (followLink) {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink) {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText) {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      _this.setState({
        orientedLink: oldCoor
      });

      if (_this.props.isAddLink === false) {
        _this.callBack();
      }
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordinate, id) {
      var newValue = _this.state.orientedLink;
      newValue.colorMode = coordinate.colorMode;
      newValue.traceBorder = coordinate.traceBorder;
      newValue.traceBack = coordinate.traceBack;

      _this.setState({
        orientedLink: newValue
      });

      if (_this.props.isAddLink === false) {
        _this.callBack();
      }
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      var newValue = _this.state.orientedLink;
      newValue.lowerLimit = lowerLimit;

      _this.setState({
        orientedLink: newValue
      });

      if (_this.props.isAddLink === false) {
        _this.callBack();
      }
    };
    /** save data of mainMetric */


    _this.callBackMainMetric = function (mainMetric, id) {
      var newValue = _this.state.orientedLink;
      newValue.mainMetric = mainMetric;

      _this.setState({
        orientedLink: newValue
      });

      if (_this.props.isAddLink === false) {
        _this.callBack();
      }
    };
    /**
     * fill input whith data
     * this function is called by mount and update event
     */


    _this.getDataInInput = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.addInput(this.props.orientedLink.id)];

            case 1:
              _a.sent();

              this.generateInputsOrientedLink();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** call function in load component */


    _this.componentDidMount = function () {
      _this.getDataInInput();
    };
    /** function is call when props is update. Update state */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.orientedLink.id !== this.props.orientedLink.id)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncOrientedLink({
                orientedLink: Object(_Functions_initOrientedLink__WEBPACK_IMPORTED_MODULE_13__["cloneOrientedLink"])(this.props.orientedLink)
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: []
              })];

            case 2:
              _a.sent();

              this.getDataInInput();
              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      arrayInput: [],
      orientedLink: Object(_Functions_initOrientedLink__WEBPACK_IMPORTED_MODULE_13__["cloneOrientedLink"])(_this.props.orientedLink),
      arrayOrientedLink: [],
      //debug: false,
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error'
    };
    return _this;
  }

  OrientedLink.prototype.defineDataRegion = function () {
    var regionCoordinateSpace = this.props.options.regionCoordinateSpace;
    var optionRegionNull = {
      label: 'None',
      value: ''
    };
    var arrayOptionsRegion = [];
    arrayOptionsRegion.push(optionRegionNull);
    regionCoordinateSpace.forEach(function (region) {
      var optionRegion = {
        label: region.label,
        value: region.label
      };
      arrayOptionsRegion.push(optionRegion);
    });
    return arrayOptionsRegion;
  };

  OrientedLink.prototype.defineDataPoint = function () {
    var arrayPoints = this.props.options.arrayPoints;
    var optionPointNull = {
      label: 'None',
      value: ''
    };
    var arrayOptionsPoint = [];
    arrayOptionsPoint.push(optionPointNull);
    arrayPoints.forEach(function (point) {
      var valueLabel = point.label || point.name;
      var optionPoint = {
        label: valueLabel,
        value: valueLabel
      };
      arrayOptionsPoint.push(optionPoint);
    });
    return arrayOptionsPoint;
  };
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  OrientedLink.prototype._handleChange = function (currentTarget, name, index) {
    var tmp = this.state.orientedLink;
    tmp = Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])(name, tmp, currentTarget, {});
    this.setState({
      orientedLink: tmp
    });
    this.generateInputsOrientedLink();

    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };
  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  OrientedLink.prototype.getGoodValue = function (name) {
    var value;
    var valueSelect;
    var valueMetric;
    value = '';
    valueSelect = {};

    if (name.startsWith('orientationLink') || name.startsWith('isIncurved') || name.startsWith('pointIn') || name.startsWith('pointOut') || name.startsWith('regionIn') || name.startsWith('regionOut') || name.startsWith('size')) {
      if (name.startsWith('orientationLink')) {
        valueSelect = this.state.orientedLink.orientationLink;
      } else if (name.startsWith('isIncurved')) {
        valueSelect = this.state.orientedLink.isIncurved;
      } else if (name.startsWith('pointIn')) {
        valueSelect = {
          label: this.state.orientedLink.pointIn,
          value: this.state.orientedLink.pointIn
        };
      } else if (name.startsWith('pointOut')) {
        valueSelect = {
          label: this.state.orientedLink.pointOut,
          value: this.state.orientedLink.pointOut
        };
      } else if (name.startsWith('regionIn')) {
        valueSelect = {
          label: this.state.orientedLink.regionIn,
          value: this.state.orientedLink.regionIn
        };
      } else if (name.startsWith('regionOut')) {
        valueSelect = {
          label: this.state.orientedLink.regionOut,
          value: this.state.orientedLink.regionOut
        };
      } else if (name.startsWith('size')) {
        valueSelect = this.state.orientedLink.size;
      }

      return valueSelect;
    } else if (name.startsWith('mainMetric')) {
      valueMetric = this.state.orientedLink.mainMetric;
      return valueMetric;
    } else {
      if (name.startsWith('label')) {
        value = this.state.orientedLink.label;
      } else if (name.startsWith('pointAX')) {
        value = this.state.orientedLink.pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.orientedLink.pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.orientedLink.pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.orientedLink.pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.orientedLink.colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.orientedLink.colorCoordinateB;
      } else if (name.startsWith('refIdMainMetric')) {
        value = this.state.orientedLink.mainMetric.refId || '';
      } else if (name.startsWith('keyMainMetric')) {
        value = this.state.orientedLink.mainMetric.key || '';
      } else if (name.startsWith('keyValueMainMetric')) {
        value = this.state.orientedLink.mainMetric.keyValue || '';
      } else if (name.startsWith('pointCX')) {
        value = this.state.orientedLink.pointCPositionX;
      } else if (name.startsWith('pointCY')) {
        value = this.state.orientedLink.pointCPositionY;
      }

      return value;
    }
  };
  /** create dynamic input */


  OrientedLink.prototype.generateInputsOrientedLink = function () {
    var e_1, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var finalItem = [];
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

    var _loop_1 = function _loop_1(line) {
      var mapItems = [];
      line.uneClassInput.forEach(function (obj) {
        if (obj.input_type === 'text') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputTextOrientedLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: _this.getGoodValue(obj.name),
            _handleChange: function _handleChange(event) {
              _this._handleChange(event.currentTarget.value, obj.name, line.id);
            },
            isIncurved: _this.getGoodValue('isIncurved')
          });
        } else if (obj.input_type === 'select') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelectOrientedLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: obj.id,
            _onChange: function _onChange(value, name, index) {
              var newOrientedLink = _this.state.orientedLink;
              Object(_Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterOrientedLink"])(name, newOrientedLink, value.value || '', value);

              _this.updateAssociatePointAndRegion(newOrientedLink, name);

              _this.setState({
                orientedLink: newOrientedLink
              });

              _this.generateInputsOrientedLink();

              if (_this.props.isAddLink === false) {
                _this.callBack();
              }
            },
            name: obj.name,
            index: line.id,
            data: obj.optionValues,
            defaultValue: _this.getGoodValue(obj.name),
            label: obj.label
          });
        } else {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
        }

        mapItems.push(item);
      });
      var newInputList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'inputOrientedLink' + line.id.toString(),
        className: "inputCoor",
        id: 'point' + line.id.toString()
      }, mapItems);
      finalItem = finalItem.concat(newInputList);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    this.setState(function (prevState) {
      return {
        htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem)
      };
    });
  };
  /** save data of zIndex */


  OrientedLink.prototype.callBackZIndex = function (zIndexUpdated, id) {
    var newValue = this.state.orientedLink;
    newValue.zIndex = zIndexUpdated;
    this.setState({
      orientedLink: newValue
    });

    if (this.props.isAddLink === false) {
      this.callBack();
    }
  };
  /**
   * render()
   */


  OrientedLink.prototype.render = function () {
    var _this = this;

    var styleAlert = {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: 9999
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleAlert,
      hidden: this.state.hiddenAlert
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
      title: this.state.titleAlert,
      severity: this.state.severityAlert
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CoordinateSpace_manageQuery__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.orientedLink.id,
      mainMetric: this.state.orientedLink.mainMetric,
      callBackToParent: this.callBackMainMetric,
      isLink: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CoordinateSpace_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.orientedLink.id,
      metrics: this.state.orientedLink.metrics,
      isLink: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_8__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.orientedLink,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.orientedLink,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit,
      isLink: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_10__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      callBackToParentZIndex: this.callBackZIndex.bind(this),
      isPoint: false,
      isLink: true,
      isRegion: false,
      id: this.state.orientedLink.id
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      },
      className: "buttonSave"
    }, this.props.isAddLink && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      style: {
        marginRight: '1%'
      },
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Save"), !this.props.isAddLink && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: this.deleteOwnInput,
      variant: "danger"
    }, "Delete")));
  };

  return OrientedLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrientedLink);

/***/ }),

/***/ "./components/CoordinateSpace/point/editPoint.tsx":
/*!********************************************************!*\
  !*** ./components/CoordinateSpace/point/editPoint.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./components/CoordinateSpace/point/point.tsx");


 // import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';


/**
 * manage coordinate space for simpleEditor
 */

var EditPoint =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditPoint, _super);

  function EditPoint(props) {
    var _this = _super.call(this, props) || this;
    /**
     * save data in parent
     */


    _this.callBack = function (id, newCoordinate) {
      var e_1, _a, e_2, _b;

      if (newCoordinate) {
        var oldData = _this.props.options.arrayPoints.slice();

        var i = 0;

        try {
          for (var oldData_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_1_1 = oldData_1.next(); !oldData_1_1.done; oldData_1_1 = oldData_1.next()) {
            var line = oldData_1_1.value;

            if (line.id === id) {
              oldData[i] = newCoordinate;
              break;
            }

            ++i;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (oldData_1_1 && !oldData_1_1.done && (_a = oldData_1["return"])) _a.call(oldData_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayPoints: oldData
        })); //this.fillSelectPoint();

      } else {
        var find = false;

        var oldData = _this.props.options.arrayPoints.slice();

        var i = 0;

        try {
          for (var oldData_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_2_1 = oldData_2.next(); !oldData_2_1.done; oldData_2_1 = oldData_2.next()) {
            var line = oldData_2_1.value;

            if (line.id === id) {
              find = true;
              break;
            }

            ++i;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (oldData_2_1 && !oldData_2_1.done && (_b = oldData_2["return"])) _b.call(oldData_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        if (find) {
          oldData.splice(i, 1);

          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            arrayPoints: oldData
          }));

          _this.fillSelectPoint();
        }
      }
    };
    /** change select value to edit */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /** fill select whith array region object */


    _this.fillSelectPoint = function () {
      var e_3, _a, e_4, _b;

      var _c;

      var valueExist = false;
      var valueSelect = [];

      var stockTmpCoordinatesSpace = _this.props.options.arrayPoints.slice();

      try {
        for (var stockTmpCoordinatesSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next(); !stockTmpCoordinatesSpace_1_1.done; stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next()) {
          var line = stockTmpCoordinatesSpace_1_1.value;
          var label = line.label || line.name;
          valueSelect.push({
            value: line,
            label: label
          });
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (stockTmpCoordinatesSpace_1_1 && !stockTmpCoordinatesSpace_1_1.done && (_a = stockTmpCoordinatesSpace_1["return"])) _a.call(stockTmpCoordinatesSpace_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      if (_this.state.selectCoordinateSpaceDefault) {
        try {
          for (var stockTmpCoordinatesSpace_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next(); !stockTmpCoordinatesSpace_2_1.done; stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next()) {
            var line = stockTmpCoordinatesSpace_2_1.value;

            if (line.id === ((_c = _this.state.selectCoordinateSpaceDefault.value) === null || _c === void 0 ? void 0 : _c.id)) {
              valueExist = true;
              break;
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (stockTmpCoordinatesSpace_2_1 && !stockTmpCoordinatesSpace_2_1.done && (_b = stockTmpCoordinatesSpace_2["return"])) _b.call(stockTmpCoordinatesSpace_2);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } // dev


      _this.setState(function (prevState) {
        return {
          selectCoordinateSpace: valueSelect,
          selectCoordinateSpaceDefault: valueExist ? prevState.selectCoordinateSpaceDefault : valueSelect.length > 0 ? valueSelect[0] : prevState.selectCoordinateSpaceDefault
        };
      }); // final
      // this.setState({
      // 	selectCoordinateSpace: valueSelect,
      // 	selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
      // 		valueSelect[0] : this.state.selectCoordinateSpaceDefault,
      // });

    };
    /** fill data for select */


    _this.componentDidMount = function () {
      _this.fillSelectPoint();
    };
    /** update state if value props change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.arrayPoints !== _this.props.options.arrayPoints) {
        _this.fillSelectPoint();
      } // console.log(prevProps.options.newPoint);


      if (prevProps.options.newPoint) {
        _this.fillSelectPoint();

        _this.props.options.newPoint = false;
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** return html */


  EditPoint.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Select Point")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      point: this.state.selectCoordinateSpaceDefault.value,
      callBackToParent: this.callBack,
      isAddPoint: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '50px'
      }
    }, "Data not set")));
  };

  return EditPoint;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditPoint);

/***/ }),

/***/ "./components/CoordinateSpace/point/point.tsx":
/*!****************************************************!*\
  !*** ./components/CoordinateSpace/point/point.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Functions_CreateInput_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/CreateInput/createInputsPoint */ "./Functions/CreateInput/createInputsPoint.tsx");
/* harmony import */ var _Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Functions/Input/inputTextPoint */ "./Functions/Input/inputTextPoint.tsx");
/* harmony import */ var _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var _Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Functions/EditParameter/editGoodParameterPoint */ "./Functions/EditParameter/editGoodParameterPoint.tsx");
/* harmony import */ var _Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Functions/Input/inputSelectPoint */ "./Functions/Input/inputSelectPoint.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _manageQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var _manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manageAuxiliaryQuery */ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx");
/* harmony import */ var _Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Parametrage/positionParameters */ "./components/Parametrage/positionParameters.tsx");
/* harmony import */ var _Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var _Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var Functions_initPoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Functions/initPoint */ "./Functions/initPoint.tsx");














/**
 * IndexParametrage
 */

var Point =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Point, _super);

  function Point(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncArrayCoor = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncArrayInput = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** add inputs for a new coordiante */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__["ArrayInputSelectableClass"](id, Object(_Functions_CreateInput_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__["createInputsPoint"])(id))])
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function () {
      var label = _this.state.point.label || _this.state.point.name;
      var del = confirm('Delete "' + label + '" ?'); // alert(del);

      if (del) {
        _this.props.callBackToParent(_this.state.point.id, undefined);
      }
    };
    /** call function to return arrayCoor a SimpleEditor */


    _this.callBack = function () {
      var waitAlert = 3000;

      if (_this.state.point.label === '') {
        _this.setState({
          severityAlert: 'error',
          titleAlert: 'Error: label is empty',
          hiddenAlert: false
        });

        setTimeout(function () {
          _this.setState({
            hiddenAlert: true
          });
        }, waitAlert);
        console.log('ok');
      } else {
        _this.props.callBackToParent(_this.state.point.id, _this.state.point);

        _this.setState({
          severityAlert: 'success',
          titleAlert: 'Save',
          hiddenAlert: false
        });

        if (!_this.props.isAddPoint) {
          setTimeout(function () {
            _this.setState({
              hiddenAlert: true
            });
          }, waitAlert);
        }
      }
    };

    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj) {
      var oldCoor = _this.state.point;

      if (followLink) {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink) {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText) {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      _this.setState({
        point: oldCoor
      });

      if (_this.props.isAddPoint === false) {
        _this.callBack();
      }
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordinate, id) {
      var newValue = _this.state.point;
      newValue.colorMode = coordinate.colorMode;
      newValue.traceBorder = coordinate.traceBorder;
      newValue.traceBack = coordinate.traceBack;

      _this.setState({
        point: newValue
      });

      if (_this.props.isAddPoint === false) {
        _this.callBack();
      }
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      var newValue = _this.state.point;
      newValue.lowerLimit = lowerLimit;

      _this.setState({
        point: newValue
      });

      if (_this.props.isAddPoint === false) {
        _this.callBack();
      }
    };

    _this.callBackMainMetric = function (mainMetric, id) {
      var newValue = _this.state.point;
      newValue.mainMetric = mainMetric;

      _this.setState({
        point: newValue
      });

      if (_this.props.isAddPoint === false) {
        _this.callBack();
      }
    };
    /**
     * fill input whith data
     * this function is called by mount and update event
     */


    _this.getDataInInput = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.addInput(this.props.point.id)];

            case 1:
              _a.sent();

              this.generateInputsPoint();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** call function in load component */


    _this.componentDidMount = function () {
      _this.getDataInInput();
    };
    /** function is call when props is update. Update state */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.point.id !== this.props.point.id)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncArrayCoor({
                point: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_13__["clonePoint"])(this.props.point)
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: []
              })];

            case 2:
              _a.sent();

              this.getDataInInput();
              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      arrayInput: [],
      point: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_13__["clonePoint"])(_this.props.point),
      arrayPointClass: [],
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error'
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  Point.prototype._handleChange = function (currentTarget, name, index) {
    var tmp = this.state.point;
    tmp = Object(_Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__["editGoodParameterPoint"])(name, tmp, currentTarget, {});
    this.setState({
      point: tmp
    });
    this.generateInputsPoint();

    if (this.props.isAddPoint === false) {
      this.callBack();
    }
  };
  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  Point.prototype.getGoodValue = function (param) {
    var value;
    var valueSelect;
    value = '';
    valueSelect = {};

    if (param.startsWith('drawGraphicMarker') || param.startsWith('shape') || param.startsWith('sizeWidth') || param.startsWith('sizeHeight') || param.startsWith('linkWithCoordinateSpace')) {
      if (param.startsWith('drawGraphicMarker')) {
        valueSelect = this.state.point.drawGraphicMarker;
      } else if (param.startsWith('shape')) {
        valueSelect = this.state.point.shape;
      } else if (param.startsWith('sizeWidth')) {
        valueSelect = this.state.point.sizeWidth;
      } else if (param.startsWith('sizeHeight')) {
        valueSelect = this.state.point.sizeHeight;
      }

      return valueSelect;
    } else {
      if (param.startsWith('rotateArrow')) {
        value = this.state.point.rotateArrow;
      } else if (param.startsWith('positionShapeX')) {
        value = this.state.point.positionShapeX;
      } else if (param.startsWith('positionShapeY')) {
        value = this.state.point.positionShapeY;
      } else if (param.startsWith('label')) {
        value = this.state.point.label;
      } else if (param.startsWith('color')) {
        value = this.state.point.color;
      }

      return value;
    }
  };
  /** create dynamic input */


  Point.prototype.generateInputsPoint = function () {
    var e_1, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null); //let itemButton: JSX.Element = <div></div>;

    var mapItems = [];
    var finalItem = [];

    var _loop_1 = function _loop_1(line) {
      mapItems = [];
      line.uneClassInput.forEach(function (obj) {
        if (obj.input_type === 'text') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: _this.getGoodValue(obj.name),
            _handleChange: function _handleChange(event) {
              _this._handleChange(event.currentTarget.value, obj.name, line.id);
            },
            shape: _this.getGoodValue('shape').value
          });
        } else if (obj.input_type === 'select') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: obj.id,
            _onChange: function _onChange(value, name, index) {
              var newPoint = _this.state.point;
              Object(_Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__["editGoodParameterPoint"])(name, newPoint, '', value);

              _this.setState({
                point: newPoint
              });

              _this.generateInputsPoint();

              if (_this.props.isAddPoint === false) {
                _this.callBack();
              }
            },
            name: obj.name,
            index: line.id,
            data: obj.optionValues,
            defaultValue: _this.getGoodValue(obj.name),
            shape: _this.getGoodValue('shape').value,
            label: obj.label
          });
        } else {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
        }

        mapItems.push(item);
      });
      var newInputList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'inputPoint' + line.id.toString(),
        className: "inputCoor",
        id: 'point' + line.id.toString()
      }, mapItems);
      finalItem = finalItem.concat(newInputList);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    this.setState(function (prevState) {
      return {
        htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem)
      };
    });
  };
  /**
   * render()
   */


  Point.prototype.render = function () {
    var _this = this;

    var styleAlert = {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: 9999
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleAlert,
      hidden: this.state.hiddenAlert
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
      title: this.state.titleAlert,
      severity: this.state.severityAlert
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageQuery__WEBPACK_IMPORTED_MODULE_8__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.point.id,
      mainMetric: this.state.point.mainMetric,
      callBackToParent: this.callBackMainMetric,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.point.id,
      metrics: this.state.point.metrics,
      //callBackToParent={this.callBackAuxiliaryMetric}
      isPoint: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.point,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.point,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_10__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      callBackToParentZIndex: function callBackToParentZIndex() {},
      isPoint: true,
      isLink: false,
      isRegion: false,
      id: this.state.point.id
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      },
      className: "buttonSave"
    }, this.props.isAddPoint && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      style: {
        marginRight: '1%'
      },
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Save"), !this.props.isAddPoint && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: this.deleteOwnInput,
      variant: "danger"
    }, "Delete")));
  };

  return Point;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./components/Draw/drawOrientedLink.tsx":
/*!**********************************************!*\
  !*** ./components/Draw/drawOrientedLink.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DrawOrientedLink =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawOrientedLink, _super);

  function DrawOrientedLink(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToAdaptPositionToInitialSpace = function (yMinPx, yMaxPx) {
      var valueToAdaptPositionToInitialSpace = 0;

      if (yMaxPx > yMinPx) {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMaxPx;
      } else {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMinPx;
      }

      return valueToAdaptPositionToInitialSpace;
    };

    _this.labelSynchroX = function (whatLabel) {
      var _a, _b;

      var result = 0;
      var labelMainMetric = null;

      if (whatLabel === 'A') {
        labelMainMetric = document.getElementById('labelMainMetric' + _this.props.id);
      } else {
        labelMainMetric = document.getElementById('labelMainMetricB' + _this.props.id);
      }

      if ((_a = labelMainMetric) === null || _a === void 0 ? void 0 : _a.offsetWidth) {
        result = ((_b = labelMainMetric) === null || _b === void 0 ? void 0 : _b.offsetWidth) / 2;
      }

      return result;
    };

    _this.labelSynchroY = function (whatLabel) {
      var _a, _b;

      var result = 0;
      var labelMainMetric = null;

      if (whatLabel === 'A') {
        labelMainMetric = document.getElementById('labelMainMetric' + _this.props.id);
      } else {
        labelMainMetric = document.getElementById('labelMainMetricB' + _this.props.id);
      }

      if ((_a = labelMainMetric) === null || _a === void 0 ? void 0 : _a.offsetHeight) {
        result = ((_b = labelMainMetric) === null || _b === void 0 ? void 0 : _b.offsetHeight) / 2;
      }

      return result;
    };
    /**
     * to do
     */


    _this.defineParallelOrientedLinks = function () {
      var arrayOrientedLink = _this.props.options.arrayOrientedLinks;
      var listParallelOrientedLinks = [];
      listParallelOrientedLinks.push(parseInt(_this.props.id, 10));
      arrayOrientedLink.forEach(function (orientedLink) {
        if (_this.props.name !== orientedLink.name) {
          if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
            //console.log('//1');
            if (_this.props.associateRegionIn === orientedLink.regionIn || _this.props.associateRegionIn === orientedLink.regionOut) {
              //console.log('//1.1');
              if (_this.props.associateRegionOut === orientedLink.regionIn || _this.props.associateRegionOut === orientedLink.regionOut) {
                //console.log('//1.2');
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
            //console.log('//2');
            if (_this.props.associatePointIn === orientedLink.pointIn || _this.props.associatePointIn === orientedLink.pointOut) {
              //console.log('//2.1');
              if (_this.props.associatePointOut === orientedLink.pointIn || _this.props.associatePointOut === orientedLink.pointOut) {
                //console.log('//2.2');
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
            //console.log('//3');
            if (_this.props.associateRegionIn === orientedLink.regionIn || _this.props.associateRegionIn === orientedLink.regionOut) {
              //console.log('//3.1');
              if (_this.props.associatePointOut === orientedLink.pointOut || _this.props.associatePointOut === orientedLink.pointIn) {
                //console.log('//3.2');
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
            //console.log('//4');
            if (_this.props.associatePointIn === orientedLink.pointIn || _this.props.associatePointIn === orientedLink.pointOut) {
              //console.log('//4.1');
              if (_this.props.associateRegionOut === orientedLink.regionOut || _this.props.associateRegionOut === orientedLink.regionIn) {
                //console.log('//4.2');
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          }
        }
      });
      var listParallelOrientedLinkSorted = listParallelOrientedLinks.sort(function (a, b) {
        return a - b;
      }); //console.log(listParallelOrientedLinkSorted);

      return listParallelOrientedLinkSorted;
    };

    _this.ifMultiLinkWithRegionDefineX = function (isIn, idMultiLink) {
      var xResult = 0;
      var arrayRegions = _this.props.options.regionCoordinateSpace;
      var arrayPoints = _this.props.options.arrayPoints;
      var xMinIn = 0;
      var xMaxIn = 0;
      var xMinOut = 0;
      var xMaxOut = 0;
      var yMinIn = 0;
      var yMaxIn = 0;
      var yMinOut = 0;
      var yMaxOut = 0;
      var xMidIn = 0;
      var xMidOut = 0;
      var yMidIn = 0;
      var yMidOut = 0;

      if (_this.props.associatePointIn !== '') {
        arrayPoints.forEach(function (point) {
          var name = point.label || point.name;

          if (name === _this.props.associatePointIn) {
            xMinIn = parseInt(point.positionShapeX, 10);
            xMaxIn = parseInt(point.positionShapeX, 10);
            yMinIn = parseInt(point.positionShapeY, 10);
            yMaxIn = parseInt(point.positionShapeY, 10);
          }
        });
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut !== '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        arrayPoints.forEach(function (point) {
          var name = point.label || point.name;

          if (name === _this.props.associatePointOut) {
            xMinOut = parseInt(point.positionShapeX, 10);
            xMaxOut = parseInt(point.positionShapeX, 10);
            yMinOut = parseInt(point.positionShapeY, 10);
            yMaxOut = parseInt(point.positionShapeY, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else if (_this.props.associatePointIn === '' && _this.props.associateRegionIn === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMinIn = parseInt(_this.props.pointAPositionX, 10);
        xMaxIn = parseInt(_this.props.pointAPositionX, 10);
        yMinIn = parseInt(_this.props.pointAPositionY, 10);
        yMaxIn = parseInt(_this.props.pointAPositionY, 10);
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut === '' && _this.props.associateRegionOut === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        xMinOut = parseInt(_this.props.pointBPositionX, 10);
        xMaxOut = parseInt(_this.props.pointBPositionX, 10);
        yMinOut = parseInt(_this.props.pointBPositionY, 10);
        yMaxOut = parseInt(_this.props.pointBPositionY, 10);
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }

          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = (yMinOut + yMaxOut) / 2;
      }

      if (isIn) {
        if (idMultiLink === 0) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x1');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x2');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x3');
              xResult = xMinIn;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x4');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x5');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x6');
              xResult = xMinIn;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x7');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x8');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x9');
              xResult = xMinIn;
            }
          }
        } else if (idMultiLink === 1) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x10');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x11');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x12');
              xResult = xMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x13');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x14');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x15');
              xResult = xMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x16');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x17');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x18');
              xResult = xMinIn;
            }
          }
        } else if (idMultiLink === 2) {
          if (yMidIn > yMidOut) {
            if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
              console.log('x19');
              xResult = (xMinIn + xMaxIn) / 2;
            } else if (xMidIn > xMidOut) {
              console.log('x20');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x21');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x22');
              xResult = (xMinIn + xMaxIn) / 2;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
              console.log('x23');
              xResult = (xMinIn + xMaxIn) / 2;
            } else if (xMidIn > xMidOut) {
              console.log('x24');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x25');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x26');
              xResult = (xMinIn + xMaxIn) / 2;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
              console.log('x27');
              xResult = (xMinIn + xMaxIn) / 2;
            } else if (xMidIn > xMidOut) {
              console.log('x28');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x29');

              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x30');
              xResult = xMinIn;
            }
          }
        }
      } else {
        if (idMultiLink === 0) {
          if (yMidIn > yMidOut) {
            console.log('x31');

            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x32');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x33');
              xResult = xMinOut;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x34');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x35');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x36');
              xResult = xMinOut;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x37');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x38');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x39');
              xResult = xMinOut;
            }
          }
        } else if (idMultiLink === 1) {
          if (yMidIn > yMidOut) {
            console.log('x40');

            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x41');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x42');
              xResult = xMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x43');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x44');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x45');
              xResult = xMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x46');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x47');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x48');
              xResult = xMinOut;
            }
          }
        } else if (idMultiLink === 2) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMinOut && xMidIn < xMaxOut || xMidIn < xMinOut && xMidIn > xMaxOut) {
              console.log('x49');
              xResult = (xMinOut + xMaxOut) / 2;
            } else if (xMidIn > xMidOut) {
              console.log('x50');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x51');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x52');
              xResult = (xMinOut + xMaxOut) / 2;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMinOut && xMidIn < xMaxOut || xMidIn < xMinOut && xMidIn > xMaxOut) {
              console.log('x53');
              xResult = (xMinOut + xMaxOut) / 2;
            } else if (xMidIn > xMidOut) {
              console.log('x54');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x55');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x56');
              xResult = (xMinOut + xMaxOut) / 2;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              console.log('x57');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              console.log('x58');

              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              console.log('x59');
              xResult = xMinOut;
            }
          }
        }
      }

      return xResult;
    };

    _this.ifMultiLinkWithRegionDefineY = function (isIn, idMultiLink) {
      var yResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var arrayRegions = _this.props.options.regionCoordinateSpace;
      var xMinIn = 0;
      var xMaxIn = 0;
      var xMinOut = 0;
      var xMaxOut = 0;
      var yMinIn = 0;
      var yMaxIn = 0;
      var yMinOut = 0;
      var yMaxOut = 0;
      var xMidIn = 0;
      var xMidOut = 0;
      var yMidIn = 0;
      var yMidOut = 0;

      if (_this.props.associatePointIn !== '') {
        arrayPoints.forEach(function (point) {
          var name = point.label || point.name;

          if (name === _this.props.associatePointIn) {
            xMinIn = parseInt(point.positionShapeX, 10);
            xMaxIn = parseInt(point.positionShapeX, 10);
            yMinIn = parseInt(point.positionShapeY, 10);
            yMaxIn = parseInt(point.positionShapeY, 10);
          }
        });
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut !== '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        arrayPoints.forEach(function (point) {
          var name = point.label || point.name;

          if (name === _this.props.associatePointOut) {
            xMinOut = parseInt(point.positionShapeX, 10);
            xMaxOut = parseInt(point.positionShapeX, 10);
            yMinOut = parseInt(point.positionShapeY, 10);
            yMaxOut = parseInt(point.positionShapeY, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else if (_this.props.associatePointIn === '' && _this.props.associateRegionIn === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMinIn = parseInt(_this.props.pointAPositionX, 10);
        xMaxIn = parseInt(_this.props.pointAPositionX, 10);
        yMinIn = parseInt(_this.props.pointAPositionY, 10);
        yMaxIn = parseInt(_this.props.pointAPositionY, 10);
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut === '' && _this.props.associateRegionOut === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        xMinOut = parseInt(_this.props.pointBPositionX, 10);
        xMaxOut = parseInt(_this.props.pointBPositionX, 10);
        yMinOut = parseInt(_this.props.pointBPositionY, 10);
        yMaxOut = parseInt(_this.props.pointBPositionY, 10);
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }

          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = (yMinOut + yMaxOut) / 2;
      }

      if (isIn) {
        if (idMultiLink === 0) {
          if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
            if (yMidIn > yMidOut) {
              console.log('y1');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y2');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y3');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y4');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y5');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y6');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y7');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y8');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y9');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y10');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y11');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        } else if (idMultiLink === 1) {
          if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
            if (yMidIn > yMidOut) {
              console.log('y12');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y13');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y14');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn > xMidOut) {
            console.log('y16');

            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y17');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y18');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y19');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y20');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y21');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y22');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y23');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        } else if (idMultiLink === 2) {
          if (xMidOut > xMinIn && xMidOut < xMaxIn || xMidOut < xMinIn && xMidOut > xMaxIn) {
            if (yMidIn > yMidOut) {
              console.log('y24');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y25');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y26');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y28');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y29');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y30');
              yResult = (yMinIn + yMaxIn) / 2;
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y31');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y32');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y33');
              yResult = (yMinIn + yMaxIn) / 2;
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y34');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y35');

              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        }
      } else {
        if (idMultiLink === 0) {
          if (xMidIn > xMinOut && xMidIn < xMaxOut || xMidIn < xMinOut && xMidIn > xMaxOut) {
            if (yMidIn > yMidOut) {
              console.log('y37');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y38');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y39');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y40');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y41');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y42');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y43');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y44');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y45');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y46');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y47');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        } else if (idMultiLink === 1) {
          if (xMidIn > xMinOut && xMidIn < xMaxOut || xMidIn < xMinOut && xMidIn > xMaxOut) {
            if (yMidIn > yMidOut) {
              console.log('y49');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y50');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y51');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y52');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y53');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y54');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y55');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y56');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y57');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y58');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y59');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        } else if (idMultiLink === 2) {
          if (xMidIn > xMinOut && xMidIn < xMaxOut || xMidIn < xMinOut && xMidIn > xMaxOut) {
            if (yMidIn > yMidOut) {
              console.log('y61');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y62');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y64');
              yResult = (yMinOut + yMaxOut) / 2;
            }
          } else if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y65');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y66');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y67');
              yResult = (yMinOut + yMaxOut) / 2;
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y68');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y69');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              console.log('y70');
              yResult = (yMinOut + yMaxOut) / 2;
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              console.log('y71');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              console.log('y72');

              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        }
      }

      return yResult;
    };

    _this.ifMultiLinkWithPointDefineX = function (isIn, idMultiLink) {
      var xResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var xIn = 0;
      var yIn = 0;
      var xOut = 0;
      var yOut = 0;
      var ajustPosition = 5;
      arrayPoints.forEach(function (point) {
        var name = point.label || point.name;

        if (name === _this.props.associatePointIn) {
          xIn = parseInt(point.positionShapeX, 10);
          yIn = parseInt(point.positionShapeY, 10);
        }

        if (name === _this.props.associatePointOut) {
          xOut = parseInt(point.positionShapeX, 10);
          yOut = parseInt(point.positionShapeY, 10);
        }
      });
      var angleRadian = Math.atan2(yIn - yOut, xIn - xOut);
      var angleDegre = angleRadian * 180 / Math.PI;

      if (isIn) {
        if (idMultiLink === 0) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xIn;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xIn - ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xIn + ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xIn + ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xIn + ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xIn + ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xIn - ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xIn;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xIn + ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xIn - ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xIn - ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xIn - ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xIn - ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xIn + ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 2) {
          xResult = xIn;
        }
      } else {
        if (idMultiLink === 0) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xOut;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xOut - ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xOut + ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xOut + ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xOut + ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xOut + ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xOut - ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xOut;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xOut + ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xOut - ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xOut - ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xOut - ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xOut - ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xOut + ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 2) {
          xResult = xOut;
        }
      }

      return xResult;
    };

    _this.ifMultiLinkWithPointDefineY = function (isIn, idMultiLink) {
      var yResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var xIn = 0;
      var yIn = 0;
      var xOut = 0;
      var yOut = 0;
      var ajustPosition = 5;
      arrayPoints.forEach(function (point) {
        var name = point.label || point.name;

        if (name === _this.props.associatePointIn) {
          xIn = parseInt(point.positionShapeX, 10);
          yIn = parseInt(point.positionShapeY, 10);
        }

        if (name === _this.props.associatePointOut) {
          xOut = parseInt(point.positionShapeX, 10);
          yOut = parseInt(point.positionShapeY, 10);
        }
      });
      var angleRadian = Math.atan2(yIn - yOut, xIn - xOut);
      var angleDegre = angleRadian * 180 / Math.PI;

      if (isIn) {
        if (idMultiLink === 0) {
          if (angleDegre === 0) {
            yResult = yIn + ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yIn + ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yIn;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yIn + ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yIn + ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yIn + ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yIn + ajustPosition;
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0) {
            yResult = yIn - ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yIn - ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yIn;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yIn - ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yIn - ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yIn - ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yIn - ajustPosition;
          }
        } else if (idMultiLink === 2) {
          yResult = yIn;
        }
      } else {
        if (idMultiLink === 0) {
          if (angleDegre === 0) {
            yResult = yOut + ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yOut + ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yOut;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yOut + ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yOut + ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yOut + ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yOut + ajustPosition;
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0) {
            yResult = yOut - ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yOut - ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yOut;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yOut - ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yOut - ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yOut - ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yOut - ajustPosition;
          }
        } else if (idMultiLink === 2) {
          yResult = yOut;
        }
      }

      return yResult;
    };

    _this.getX = function (labelPoint) {
      var e_1, _a;

      var result = 0;
      var arrayPoint = _this.props.options.arrayPoints;

      try {
        for (var arrayPoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayPoint), arrayPoint_1_1 = arrayPoint_1.next(); !arrayPoint_1_1.done; arrayPoint_1_1 = arrayPoint_1.next()) {
          var point = arrayPoint_1_1.value;

          if (point.label === labelPoint || point.name === labelPoint) {
            result = _this.synchroLinkX(parseInt(point.positionShapeX, 10));
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (arrayPoint_1_1 && !arrayPoint_1_1.done && (_a = arrayPoint_1["return"])) _a.call(arrayPoint_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return result;
    };

    _this.getY = function (labelPoint) {
      var e_2, _a;

      var result = 0;
      var arrayPoint = _this.props.options.arrayPoints;

      try {
        for (var arrayPoint_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayPoint), arrayPoint_2_1 = arrayPoint_2.next(); !arrayPoint_2_1.done; arrayPoint_2_1 = arrayPoint_2.next()) {
          var point = arrayPoint_2_1.value;

          if (point.label === labelPoint || point.name === labelPoint) {
            result = _this.synchroLinkY(parseInt(point.positionShapeY, 10));
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (arrayPoint_2_1 && !arrayPoint_2_1.done && (_a = arrayPoint_2["return"])) _a.call(arrayPoint_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return result;
    };

    _this.defineMainMetric = function (mainMetric) {
      var result = '';
      var unit = _this.props.textObject.valueGenerateObjectText.unit;
      var decimal = _this.props.textObject.valueGenerateObjectText.numericFormatElement;

      if (decimal !== '') {
        result = parseFloat(mainMetric).toPrecision(parseInt(decimal, 10)) + ' ' + unit;
      } else {
        result = mainMetric + ' ' + unit;
      }

      return result;
    };

    _this.defineAuxMetric = function (auxMetric) {
      var result = '';
      var unit = _this.props.textObject.generateAuxiliaryElement.unit;
      var decimal = _this.props.textObject.generateAuxiliaryElement.numericFormatElement;

      if (decimal !== '') {
        result = parseFloat(auxMetric).toPrecision(parseInt(decimal, 10)) + ' ' + unit;
      } else {
        result = auxMetric + ' ' + unit;
      }

      return result;
    };

    _this.defineTextObject = function (mainMetric) {
      var htmlTextObject = [];
      var htmlMainMetric = [];
      var dislayTextObjectInTooltip = _this.props.textObject.isTextTooltip;
      var textColorTextObject = _this.props.textObject.colorText;
      var backColoTextObject = _this.props.textObject.colorBack;
      var displayMainMetric = _this.props.textObject.generateObjectText;
      var displayMainMetricInTooltip = _this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
      var addTextColorMainMetric = _this.props.textObject.valueGenerateObjectText.addColorTextElement;
      var addBackColorMainMetric = _this.props.textObject.valueGenerateObjectText.addColorBackElement;
      var textColorMainMetric = _this.props.textObject.valueGenerateObjectText.colorTextElement;
      var backColorMainMetric = _this.props.textObject.valueGenerateObjectText.colorBackElement;
      var legendMainMetric = _this.props.textObject.valueGenerateObjectText.legendElement;
      var styleLabel = {
        color: textColorTextObject,
        backgroundColor: backColoTextObject,
        textAlign: 'center',
        margin: 0,
        padding: '0 5px'
      };
      var styleMainMetric = {
        color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject,
        margin: 0,
        padding: 0,
        whiteSpace: 'nowrap'
      };

      if (!dislayTextObjectInTooltip) {
        htmlTextObject.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: styleLabel
        }, _this.props.label || _this.props.name.toUpperCase()));
      }

      if (displayMainMetric) {
        if (!displayMainMetricInTooltip) {
          if (legendMainMetric) {
            htmlMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              style: styleMainMetric
            }, legendMainMetric));
          }

          htmlMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            style: styleMainMetric
          }, _this.defineMainMetric(mainMetric)));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: backColoTextObject,
          border: '1px solid black'
        }
      }, htmlTextObject, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject,
          padding: '0 5px'
        }
      }, htmlMainMetric));
    };

    _this.defineValueTooptip = function (typeLink, link) {
      var contentTooltip = [];
      var contentTooltipMainMetric = [];
      var contentTooltipAuxMetric = [];
      var valueMainMetricA = _this.props.valueMainMetricA;
      var valueMainMetricB = _this.props.valueMainMetricB;
      var refMainMetricA = _this.props.refMainMetricA;
      var refMainMetricB = _this.props.refMainMetricB;
      var dislayTextObjectInTooltip = _this.props.textObject.isTextTooltip;
      var textColorTextObject = _this.props.textObject.colorText;
      var backColoTextObject = _this.props.textObject.colorBack;
      var displayMainMetric = _this.props.textObject.generateObjectText;
      var displayMainMetricInTooltip = _this.props.textObject.valueGenerateObjectText.displayObjectInTooltip;
      var addTextColorMainMetric = _this.props.textObject.valueGenerateObjectText.addColorTextElement;
      var addBackColorMainMetric = _this.props.textObject.valueGenerateObjectText.addColorBackElement;
      var textColorMainMetric = _this.props.textObject.valueGenerateObjectText.colorTextElement;
      var backColorMainMetric = _this.props.textObject.valueGenerateObjectText.colorBackElement;
      var legendMainMetric = _this.props.textObject.valueGenerateObjectText.legendElement;
      var displayAuxMetricInTooltip = _this.props.textObject.generateAuxiliaryElement.displayObjectInTooltip;
      var addTextColorAuxMetric = _this.props.textObject.generateAuxiliaryElement.addColorTextElement;
      var addBackColorAuxMetric = _this.props.textObject.generateAuxiliaryElement.addColorBackElement;
      var textColorAuxMetric = _this.props.textObject.generateAuxiliaryElement.colorTextElement;
      var backColorAuxMetric = _this.props.textObject.generateAuxiliaryElement.colorBackElement;
      var legendAuxMetric = _this.props.textObject.generateAuxiliaryElement.legendElement;
      var styleMainTitle = {
        fontFamily: _this.props.police,
        fontSize: '11px',
        marginBottom: '0px',
        textAlign: 'center',
        color: textColorTextObject,
        backgroundColor: backColoTextObject
      };
      var styleTitleMainMetric = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginBottom: '0px',
        color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject
      };
      var styleTitleAuxMetric = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginBottom: '0px',
        color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject
      };
      var styleTitle2MainMetric = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '0px',
        color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject
      };
      var styleTitle2AuxMetric = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '0px',
        color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject
      };
      var styleContentMainMetrics = {
        fontFamily: _this.props.police,
        fontSize: '9px',
        marginLeft: '10px',
        marginBottom: '0px',
        color: addTextColorMainMetric ? textColorMainMetric : textColorTextObject
      };
      var styleContentAuxMetrics = {
        fontFamily: _this.props.police,
        fontSize: '9px',
        marginLeft: '10px',
        marginBottom: '0px',
        color: addTextColorAuxMetric ? textColorAuxMetric : textColorTextObject
      };

      if (dislayTextObjectInTooltip) {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip1' + _this.props.name,
          style: styleMainTitle
        }, _this.props.label || _this.props.name.toUpperCase()));
      }

      if (displayMainMetric) {
        if (displayMainMetricInTooltip) {
          if (legendMainMetric) {
            contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              style: styleTitleMainMetric
            }, legendMainMetric));
          }

          contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: 'contentTooltip2' + _this.props.name,
            style: styleTitleMainMetric
          }, "Main Metric"));

          if (typeLink === 'bidirectional') {
            if (link === 'A') {
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip3a' + _this.props.name,
                style: styleTitle2MainMetric
              }, "+ Link A"));
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip4a' + _this.props.name,
                style: styleContentMainMetrics
              }, ' ', "- Reference : ", refMainMetricA));
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip5a' + _this.props.name,
                style: styleContentMainMetrics
              }, ' ', "- Value : ", _this.defineMainMetric(valueMainMetricA)));
            } else {
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip3b' + _this.props.name,
                style: styleTitle2MainMetric
              }, "+ Link B"));
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip4b' + _this.props.name,
                style: styleContentMainMetrics
              }, ' ', "- Reference : ", refMainMetricB));
              contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip5b' + _this.props.name,
                style: styleContentMainMetrics
              }, ' ', "- Value : ", _this.defineMainMetric(valueMainMetricB)));
            }
          } else if (typeLink === 'monodirectional') {
            contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: 'contentTooltip6' + _this.props.name,
              style: styleContentMainMetrics
            }, ' ', "- Reference : ", refMainMetricA));
            contentTooltipMainMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: 'contentTooltip7' + _this.props.name,
              style: styleContentMainMetrics
            }, ' ', "- Value : ", _this.defineMainMetric(valueMainMetricA)));
          }
        }
      }

      if (displayAuxMetricInTooltip) {
        if (legendAuxMetric) {
          contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            style: styleTitleAuxMetric
          }, legendAuxMetric));
        }

        if (typeLink === 'bidirectional') {
          if (link === 'A') {
            if (_this.props.auxiliaryMetrics.length > 0) {
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip8a' + _this.props.name,
                style: styleTitleAuxMetric
              }, "Auxiliary Metric"));
              var index_1 = 1;

              _this.props.auxiliaryMetrics.forEach(function (metric) {
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_1.toString() + 'contentTooltip9a' + _this.props.name,
                  style: styleTitle2AuxMetric
                }, "+ Metric ", index_1));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_1.toString() + 'contentTooltip10a' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Value : ", _this.defineAuxMetric(_this.props.valuesAuxiliaryMetrics[index_1 - 1])));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_1.toString() + 'contentTooltip11a' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Key : ", metric.key));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_1.toString() + 'contentTooltip12a' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- KeyValue : ", metric.keyValue));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_1.toString() + 'contentTooltip13a' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Type : ", metric.manageValue));
                index_1++;
              });
            }
          } else {
            if (_this.props.auxiliaryMetricsB.length > 0) {
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: 'contentTooltip8b' + _this.props.name,
                style: styleTitleAuxMetric
              }, "Auxiliary Metric"));
              var index_2 = 1;

              _this.props.auxiliaryMetricsB.forEach(function (metric) {
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_2.toString() + 'contentTooltip9b' + _this.props.name,
                  style: styleTitle2AuxMetric
                }, "+ Metric ", index_2));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_2.toString() + 'contentTooltip10b' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Value : ", _this.defineAuxMetric(_this.props.valuesAuxiliaryMetrics[index_2 - 1])));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_2.toString() + 'contentTooltip11b' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Key : ", metric.key));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_2.toString() + 'contentTooltip12b' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- KeyValue : ", metric.keyValue));
                contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  key: index_2.toString() + 'contentTooltip13b' + _this.props.name,
                  style: styleContentAuxMetrics
                }, "- Type : ", metric.manageValue));
                index_2++;
              });
            }
          }
        } else if (typeLink === 'monodirectional') {
          if (_this.props.auxiliaryMetrics.length > 0) {
            contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: 'contentTooltip14' + _this.props.name,
              style: styleTitleAuxMetric
            }, "Auxiliary Metric"));
            var index_3 = 1;

            _this.props.auxiliaryMetrics.forEach(function (metric) {
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: index_3.toString() + 'contentTooltip15' + _this.props.name,
                style: styleTitle2AuxMetric
              }, "+ Metric ", index_3));
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: index_3.toString() + 'contentTooltip16' + _this.props.name,
                style: styleContentAuxMetrics
              }, "- Value : ", _this.defineAuxMetric(_this.props.valuesAuxiliaryMetrics[index_3 - 1])));
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: index_3.toString() + 'contentTooltip17' + _this.props.name,
                style: styleContentAuxMetrics
              }, "- Key : ", metric.key));
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: index_3.toString() + 'contentTooltip18' + _this.props.name,
                style: styleContentAuxMetrics
              }, "- KeyValue : ", metric.keyValue));
              contentTooltipAuxMetric.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                key: index_3.toString() + 'contentTooltip19' + _this.props.name,
                style: styleContentAuxMetrics
              }, "- Type : ", metric.manageValue));
              index_3++;
            });
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid black',
          padding: 0
        }
      }, contentTooltip, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: addBackColorMainMetric ? backColorMainMetric : backColoTextObject,
          padding: '0 5px'
        }
      }, contentTooltipMainMetric), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: addBackColorAuxMetric ? backColorAuxMetric : backColoTextObject,
          padding: '0 5px'
        }
      }, contentTooltipAuxMetric));
    };

    _this.defineTextDecoration = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.underline) {
        result = 'underline';
      } else {
        if (_this.props.options.display.style.underline) {
          result = 'underline';
        } else {
          result = 'none';
        }
      }

      return result;
    };

    _this.defineFontStyle = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.italic) {
        result = 'italic';
      } else {
        if (_this.props.options.display.style.italic) {
          result = 'italic';
        } else {
          result = 'normal';
        }
      }

      return result;
    };

    _this.defineFontWeight = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.bold) {
        result = 'bold';
      } else {
        if (_this.props.options.display.style.bold) {
          result = 'bold';
        } else {
          result = 'normal';
        }
      }

      return result;
    };

    _this.defineColorTextLabel = function () {
      var result = '';

      if (_this.props.textObject.colorText) {
        result = _this.props.textObject.colorText;
      } else {
        result = 'black';
      }

      return result;
    };

    _this.defineSizeLink = function () {
      var result = '';

      if (_this.props.size) {
        var size = _this.props.size.value || '';

        if (size === 'Small') {
          result = '8';
        } else if (size === 'Medium') {
          result = '9';
        } else if (size === 'Large') {
          result = '10';
        }
      } else {
        result = '9';
      }

      return result;
    };

    _this.state = {};
    return _this;
  }

  DrawOrientedLink.prototype.synchroLinkX = function (positionX) {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var xMin = parseInt(initialSpace.xMin, 10);
    var xMinPx = (xMin + 100) * (this.props.widthImage / 200);
    var xMax = parseInt(initialSpace.xMax, 10);
    var xMaxPx = (xMax + 100) * (this.props.widthImage / 200);
    var widthInitialSpace = xMaxPx - xMinPx;
    var x = xMinPx + (positionX * (widthInitialSpace / 200) + widthInitialSpace / 2);
    return x;
  };

  DrawOrientedLink.prototype.synchroLinkY = function (positionY) {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var yMin = parseInt(initialSpace.yMin, 10);
    var yMinPx = (yMin + 100) * (this.props.heightImage / 200);
    var yMax = parseInt(initialSpace.yMax, 10);
    var yMaxPx = (yMax + 100) * (this.props.heightImage / 200);
    var heightInitialSpace = yMaxPx - yMinPx;
    var y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - positionY * (heightInitialSpace / 200));
    return y;
  };
  /**
   * to do
   */


  DrawOrientedLink.prototype.drawLink = function (xA0, yA0, xB0, yB0, xCByClick0, yCByClick0, orientationLink) {
    var _this = this;

    var listParallelOrientedLinks = this.defineParallelOrientedLinks();
    var xA = 0;
    var yA = 0;
    var xB = 0;
    var yB = 0;
    var xCByClick = 0;
    var yCByClick = 0;

    if (listParallelOrientedLinks.length > 1) {
      //console.log('multi');
      var indexOrientedLink_1 = 0;
      listParallelOrientedLinks.forEach(function (index) {
        if (index === parseInt(_this.props.id, 10)) {
          if (indexOrientedLink_1 === 0) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m0-1');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 0));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m0-2');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m0-3');
              xA = _this.getX(_this.props.associatePointIn);
              yA = _this.getY(_this.props.associatePointIn);
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m0-4');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = _this.getX(_this.props.associatePointOut);
              yB = _this.getY(_this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink_1 === 1) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m1-1');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 1));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m1-2');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m1-3');
              xA = _this.getX(_this.props.associatePointIn);
              yA = _this.getY(_this.props.associatePointIn);
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m1-4');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = _this.getX(_this.props.associatePointOut);
              yB = _this.getY(_this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink_1 === 2) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m2-1');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 2));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m2-2');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              //console.log('m2-3');
              xB = _this.getX(_this.props.associatePointIn);
              yB = _this.getY(_this.props.associatePointIn);
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              //console.log('m2-4');
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = _this.getX(_this.props.associatePointOut);
              yB = _this.getY(_this.props.associatePointOut);
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          }
        }

        indexOrientedLink_1++;
      });
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      //console.log('1');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionOut !== '' && this.props.associateRegionIn === '' && this.props.associatePointIn === '') {
      //console.log('2');
      xA = xA0;
      yA = yA0;
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
      //console.log('3');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut === '' && this.props.associateRegionOut === '') {
      //console.log('4');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointOut !== '' && this.props.associatePointIn === '' && this.props.associateRegionIn === '') {
      //console.log('5');
      xA = xA0;
      yA = yA0;
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associatePointOut !== '') {
      //console.log('6');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associatePointIn !== '' && this.props.associateRegionOut !== '') {
      //console.log('7');
      xA = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionIn !== '' && this.props.associatePointOut !== '') {
      //console.log('8');
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithPointDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithPointDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else {
      //console.log('9');
      xA = xA0;
      yA = yA0;
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0;
      yCByClick = yCByClick0;
    }

    var xC = 0;
    var yC = 0;

    if (this.props.isIncurved.value) {
      xC = xCByClick;
      yC = yCByClick;
    } else {
      xC = (xA + xB) / 2;
      yC = (yA + yB) / 2;
    }

    var distanceAC = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    var angleRadianAC = Math.atan2(yA - yC, xA - xC);
    var angleDegreeAC = angleRadianAC * 180 / Math.PI;
    var xMidAC = (xA + xC) / 2;
    var yMidAC = (yA + yC) / 2;
    var xArrowAC = xMidAC - distanceAC / 2;
    var yArrowAC = yMidAC;
    var distanceBC = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    var angleRadianBC = Math.atan2(yB - yC, xB - xC);
    var angleDegreeBC = angleRadianBC * 180 / Math.PI;
    var xMidBC = (xB + xC) / 2;
    var yMidBC = (yB + yC) / 2;
    var xArrowBC = xMidBC - distanceBC / 2;
    var yArrowBC = yMidBC;
    var distanceAB = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianAB = Math.atan2(yA - yB, xA - xB);
    var angleDegreeAB = angleRadianAB * 180 / Math.PI;
    var xMidAB = (xA + xB) / 2;
    var yMidAB = (yA + yB) / 2;
    var xArrowAB = xMidAB - distanceAB / 2;
    var yArrowAB = yMidAB; //const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
    //const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

    var sizeArrowTriangle = 8;
    var valueTooltipMonodirectional = this.defineValueTooptip('monodirectional');
    var valueTooltipBidirectionalA = this.defineValueTooptip('bidirectional', 'A');
    var valueTooltipBidirectionalB = this.defineValueTooptip('bidirectional', 'B');
    var linkUrlOrientedLink = this.props.linkUrl.followLink;
    var linkUrlTooltip = this.props.linkUrl.hoveringTooltipLink;
    var inverseAxeY = -1;

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: linkUrlOrientedLink,
        id: "link"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipBidirectionalA,
        placement: this.props.tooltipPositionA.value
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: linkUrlTooltip,
        id: "linkA",
        style: {
          position: 'absolute',
          zIndex: this.props.zIndex,
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "arrow1",
        style: {
          display: 'flex',
          alignContent: 'stretch'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "arrowTriangle",
        style: {
          width: '0',
          height: '0',
          borderLeft: this.defineBorderSize('A') + 'px solid transparent',
          borderRight: this.defineBorderSize('A') + 'px solid transparent',
          borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
          backgroundColor: this.defineBorderColor('A'),
          width: distanceAC
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'labelMainMetric' + this.props.id,
        style: {
          textDecoration: this.defineTextDecoration(),
          fontStyle: this.defineFontStyle(),
          fontWeight: this.defineFontWeight(),
          position: 'absolute',
          zIndex: 9999,
          top: yMidAC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
          left: xMidAC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
          fontSize: this.props.sizePolice,
          //border: '1px solid black',
          backgroundColor: 'white',
          color: this.defineColorTextLabel(),
          padding: '0'
        }
      }, this.defineTextObject(this.props.valueMainMetricA))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipBidirectionalB,
        placement: this.props.tooltipPositionB.value
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: linkUrlTooltip,
        id: "linkB",
        style: {
          position: 'absolute',
          zIndex: this.props.zIndex,
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "arrow2",
        style: {
          display: 'flex',
          alignContent: 'stretch'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "arrowTriangle",
        style: {
          width: '0',
          height: '0',
          borderLeft: this.defineBorderSize('B') + 'px solid transparent',
          borderRight: this.defineBorderSize('B') + 'px solid transparent',
          borderBottom: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: this.defineBorderSize('B') + ' solid ' + this.defineBorderColor('B'),
          backgroundColor: this.defineBorderColor('B'),
          width: distanceBC
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'labelMainMetricB' + this.props.id,
        style: {
          textDecoration: this.defineTextDecoration(),
          fontStyle: this.defineFontStyle(),
          fontWeight: this.defineFontWeight(),
          position: 'absolute',
          zIndex: 9999,
          top: yMidBC + parseInt(this.props.labelBPositionY, 10) * inverseAxeY - this.labelSynchroY('B'),
          left: xMidBC + parseInt(this.props.labelBPositionX, 10) - this.labelSynchroX('B'),
          fontSize: this.props.sizePolice,
          //border: '1px solid black',
          backgroundColor: 'white',
          color: this.defineColorTextLabel(),
          padding: '0'
        }
      }, this.defineTextObject(this.props.valueMainMetricB))));
    } else if (orientationLink === 'AB') {
      if (this.props.isIncurved.value) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: linkUrlOrientedLink
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: linkUrlTooltip,
          id: "partA",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowAC - sizeArrowTriangle / 2,
            left: xArrowAC,
            transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
            width: distanceAC
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            padding: parseInt(this.defineBorderSize('A'), 10) / 2 + 'px',
            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
            backgroundColor: this.defineBorderColor('A'),
            width: distanceAC
          }
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: linkUrlTooltip,
          id: "partB",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowBC - sizeArrowTriangle / 2,
            left: xArrowBC,
            transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
            width: distanceBC
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "arrow2",
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
            backgroundColor: this.defineBorderColor('A'),
            width: distanceBC
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "arrowTriangle",
          style: {
            width: '0',
            height: '0',
            borderLeft: this.defineBorderSize('A') + 'px solid transparent',
            borderRight: this.defineBorderSize('A') + 'px solid transparent',
            borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
            transform: 'rotate(90deg)'
          }
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: 'labelMainMetric' + this.props.id,
          style: {
            textDecoration: this.defineTextDecoration(),
            fontStyle: this.defineFontStyle(),
            fontWeight: this.defineFontWeight(),
            position: 'absolute',
            zIndex: 9999,
            top: yC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
            left: xC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
            backgroundColor: 'white',
            fontSize: this.props.sizePolice,
            color: this.defineColorTextLabel(),
            padding: '0',
            cursor: 'pointer'
          }
        }, this.defineTextObject(this.props.valueMainMetricA)));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: linkUrlOrientedLink,
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: linkUrlTooltip,
          id: "link",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowAB - sizeArrowTriangle / 2,
            left: xArrowAB,
            transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
            width: distanceAB
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "arrow1",
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "arrowTriangle",
          style: {
            width: '0',
            height: '0',
            borderLeft: this.defineBorderSize('A') + 'px solid transparent',
            borderRight: this.defineBorderSize('A') + 'px solid transparent',
            borderBottom: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
            transform: 'rotate(270deg)'
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
            backgroundColor: this.defineBorderColor('A'),
            width: distanceAB
          }
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: 'labelMainMetric' + this.props.id,
          style: {
            textDecoration: this.defineTextDecoration(),
            fontStyle: this.defineFontStyle(),
            fontWeight: this.defineFontWeight(),
            position: 'absolute',
            zIndex: 9999,
            top: yMidAB + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY('A'),
            left: xMidAB + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
            backgroundColor: 'white',
            fontSize: this.props.sizePolice,
            color: this.defineColorTextLabel(),
            padding: '0',
            cursor: 'pointer'
          }
        }, this.defineTextObject(this.props.valueMainMetricA)));
      } // else if (orientationLink === 'BA') {
      // 	return (
      // 		<div id='link'>
      // 			<div id='arrow1' style={{
      // 				display: 'flex',
      // 				alignContent: 'stretch',
      // 				position: 'absolute',
      // 				top: yArrowAB - (sizeArrowTriangle / 2),
      // 				left: xArrowAB,
      // 				transform: 'rotate(' + angleDegreeBA + 'deg)',
      // 				width: distanceAB,
      // 			}}>
      // 				<div className='arrowTriangle' style={{
      // 					width: '0',
      // 					height: '0',
      // 					borderLeft: sizeArrowTriangle + 'px solid transparent',
      // 					borderRight: sizeArrowTriangle + 'px solid transparent',
      // 					borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
      // 					transform: 'rotate(270deg)',
      // 				}}></div>
      // 				<div style={{
      // 					border: '1px solid ' + colorB,
      // 					backgroundColor: colorB,
      // 					width: distanceAB,
      // 				}}></div>
      // 			</div>
      // 			<div style={{
      // 				position: 'absolute',
      // 				top: yMidAB + labelBPositionY,
      // 				left: xMidAB + labelBPositionX,
      // 				//border: '1px solid black',
      // 				backgroundColor: 'white',
      // 				color: 'black',
      // 				fontSize: distanceAB * (4 / 100),
      // 				padding: '0 5px',
      // 			}}>
      // 				{labelB}
      // 			</div>
      // 		</div>
      // 	)
      // }

    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  }; // private defineBackgroundColor() {
  //   let colorBackground = '';
  //   if (this.props.seuil.length > 0) {
  //     if (this.props.seuil[0].backColor !== '') {
  //       colorBackground = this.props.seuil[0].backColor;
  //     } else {
  //       colorBackground = 'black';
  //     }
  //   } else {
  //     colorBackground = 'black';
  //   }
  //   const valueMainMetric: number = parseInt(this.props.valueMainMetricA, 10);
  //   let index = 0;
  //   this.props.seuil.forEach((level: LowerLimitClass) => {
  //     let lowerLimitMin = 0;
  //     if (level.lowerLimitMin === '') {
  //       lowerLimitMin = 0;
  //     } else {
  //       lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
  //     }
  //     if (lowerLimitMin === 0) {
  //       if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
  //         colorBackground = level.backColor;
  //       }
  //     } else if (this.props.seuil.length === index + 1) {
  //       if (valueMainMetric > lowerLimitMin) {
  //         colorBackground = level.backColor;
  //       }
  //     } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
  //       colorBackground = level.backColor;
  //     }
  //     index++;
  //   });
  //   return colorBackground;
  // }


  DrawOrientedLink.prototype.defineBorderColor = function (link) {
    var _this = this;

    var colorBorder = '';
    var seuil = this.props.seuil;
    var valueMainMetric = 0;

    if (link === 'A') {
      valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    } else {
      valueMainMetric = parseInt(this.props.valueMainMetricB, 10);
    }

    if (this.props.traceBorder) {
      if (seuil.length > 0) {
        if (seuil[0].borderColor !== '') {
          colorBorder = seuil[0].borderColor;
        } else {
          colorBorder = 'black';
        }
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    var index = 0;
    seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBorder = level.borderColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBorder = level.borderColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBorder = level.borderColor;
      }

      index++;
    });
    return colorBorder;
  };

  DrawOrientedLink.prototype.defineBorderSize = function (link) {
    var _this = this;

    var sizeBorder = '';
    var seuil = this.props.seuil;
    var valueMainMetric = 0;

    if (link === 'A') {
      valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    } else {
      valueMainMetric = parseInt(this.props.valueMainMetricB, 10);
    }

    if (this.props.traceBorder) {
      //sizeBorder = seuil[0].sizeBorder;
      if (seuil.length > 0) {
        if (seuil[0].sizeBorder !== '') {
          sizeBorder = seuil[0].sizeBorder;
        } else {
          sizeBorder = this.defineSizeLink();
        }
      } else {
        sizeBorder = this.defineSizeLink();
      }
    } else {
      sizeBorder = this.defineSizeLink();
    }

    var index = 0;
    seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          sizeBorder = level.sizeBorder;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          sizeBorder = level.sizeBorder;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        sizeBorder = level.sizeBorder;
      }

      index++;
    });
    return sizeBorder;
  };

  DrawOrientedLink.prototype.render = function () {
    var xCoordinateA = this.synchroLinkX(parseInt(this.props.pointAPositionX, 10));
    var yCoordinateA = this.synchroLinkY(parseInt(this.props.pointAPositionY, 10));
    var xCoordinateB = this.synchroLinkX(parseInt(this.props.pointBPositionX, 10));
    var yCoordinateB = this.synchroLinkY(parseInt(this.props.pointBPositionY, 10));
    var xCoordinateC = this.synchroLinkX(parseInt(this.props.pointCPositionX, 10));
    var yCoordinateC = this.synchroLinkY(parseInt(this.props.pointCPositionY, 10));
    var orientationLink = this.props.orientationLink; // rops.associatePointIn)
    // rops.associatePointOut)
    // rops.associateRegionIn)
    // rops.associateRegionOut)
    // const labelA: string = this.props.labelA;
    // const labelB: string = this.props.labelB;
    // const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
    // const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
    // const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
    // const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);
    // const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
    // const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
    // const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
    // const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};
    // const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
    // const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
    // const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
    // const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
    // const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
    // const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
    // const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
    // const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
    // const xRegionIn: number = this.synchroLinkX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
    // const yRegionIn: number = this.synchroLinkY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
    // const xRegionOut: number = this.synchroLinkX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
    // const yRegionOut: number = this.synchroLinkY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, xCoordinateC, yCoordinateC, orientationLink));
  };

  return DrawOrientedLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawOrientedLink);

/***/ }),

/***/ "./components/Draw/drawPoint.tsx":
/*!***************************************!*\
  !*** ./components/Draw/drawPoint.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * to do
 */

var DrawPoint =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawPoint, _super);

  function DrawPoint(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToAdaptPositionToInitialSpace = function (yMinPx, yMaxPx) {
      var valueToAdaptPositionToInitialSpace = 0;

      if (yMaxPx > yMinPx) {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMaxPx;
      } else {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMinPx;
      }

      return valueToAdaptPositionToInitialSpace;
    };

    _this.definePositionLabelX = function (coordinateX) {
      var positionLabel = parseInt(_this.props.labelPositionX, 10);
      var result = 0;

      if (_this.props.drawGraphicMarker.value === 'true') {
        result = coordinateX + positionLabel + 10;

        if (_this.props.size.value === 'large') {
          result = coordinateX + positionLabel + 18;
        } else if (_this.props.size.value === 'medium') {
          result = coordinateX + positionLabel + 14;
        }
      } else {
        result = coordinateX + positionLabel;
      }

      return result;
    };

    _this.definePositionLabelY = function (coordinateY) {
      var inverseAxeY = -1;
      var positionLabel = parseInt(_this.props.labelPositionY, 10) * inverseAxeY;
      var result = 0;

      if (_this.props.drawGraphicMarker.value === 'true') {
        result = coordinateY + positionLabel + 10;

        if (_this.props.size.value === 'large') {
          result = coordinateY + positionLabel + 18;
        } else if (_this.props.size.value === 'medium') {
          result = coordinateY + positionLabel + 14;
        }
      } else {
        result = coordinateY + positionLabel;
      }

      return result;
    };

    _this.defineTextDecoration = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.underline) {
        result = 'underline';
      } else {
        if (_this.props.options.display.style.underline) {
          result = 'underline';
        } else {
          result = 'none';
        }
      }

      return result;
    };

    _this.defineFontStyle = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.italic) {
        result = 'italic';
      } else {
        if (_this.props.options.display.style.italic) {
          result = 'italic';
        } else {
          result = 'normal';
        }
      }

      return result;
    };

    _this.defineFontWeight = function () {
      var mainStyle = _this.props.textObject.style;
      var result = '';

      if (mainStyle.bold) {
        result = 'bold';
      } else {
        if (_this.props.options.display.style.bold) {
          result = 'bold';
        } else {
          result = 'normal';
        }
      }

      return result;
    };

    _this.state = {};
    return _this;
  }
  /**
   * to do
   * @param coordinateX
   *
   */


  DrawPoint.prototype.defineLimitX = function (coordinateX) {
    var result = coordinateX;

    if (coordinateX > 100) {
      result = 100;
    }

    if (coordinateX < -100) {
      result = -100;
    }

    return result;
  };
  /**
   * to do
   * @param coordinateY
   *
   */


  DrawPoint.prototype.defineLimitY = function (coordinateY) {
    var result = coordinateY;

    if (coordinateY > 100) {
      coordinateY = 100;
    }

    if (coordinateY < -100) {
      coordinateY = -100;
    }

    return result;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.definePositionX = function (positionX, initialSpace, size, shape) {
    var x;
    var xMin = parseInt(initialSpace.xMin, 10);
    var xMinPx = (xMin + 100) * (this.props.widthImage / 200);
    var xMax = parseInt(initialSpace.xMax, 10);
    var xMaxPx = (xMax + 100) * (this.props.widthImage / 200);
    var widthInitialSpace = xMaxPx - xMinPx;

    if (shape === 'circle') {
      x = xMinPx + (this.defineLimitX(positionX) * (widthInitialSpace / 200) + widthInitialSpace / 2) - (size + parseInt(this.defineBorderSize(), 10));
    } else {
      var widthToCenterCross = 0;

      if (size === 10) {
        widthToCenterCross = 3;
      } else if (size === 14) {
        widthToCenterCross = 5;
      } else if (size === 16) {
        widthToCenterCross = 5.5;
      }

      x = xMinPx + (this.defineLimitX(positionX) * (widthInitialSpace / 200) + widthInitialSpace / 2) - widthToCenterCross;
    }

    return x;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.definePositionY = function (positionY, initialSpace, size, shapeGraphicMarker) {
    var y;
    var yMin = parseInt(initialSpace.yMin, 10);
    var yMinPx = (yMin + 100) * (this.props.heightImage / 200);
    var yMax = parseInt(initialSpace.yMax, 10);
    var yMaxPx = (yMax + 100) * (this.props.heightImage / 200);
    var heightInitialSpace = yMaxPx - yMinPx;

    if (shapeGraphicMarker === 'circle') {
      y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - this.defineLimitY(positionY) * (heightInitialSpace / 2 / 100) - (size + parseInt(this.defineBorderSize(), 10)));
    } else {
      var heightToCenterCross = 0;

      if (size === 10) {
        heightToCenterCross = 7.5;
      }

      if (size === 14) {
        heightToCenterCross = 10.5;
      }

      if (size === 16) {
        heightToCenterCross = 12;
      }

      y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - this.defineLimitY(positionY) * (heightInitialSpace / 2 / 100)) - heightToCenterCross;
    }

    return y;
  };
  /**
   * to do
   * @param sizeGraphicMarker
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.defineSizeGraphicMarkerPx = function (size, shape) {
    if (size === 'small' && shape === 'circle') {
      return 4;
    }

    if (size === 'small' && shape === 'cross') {
      return 10;
    }

    if (size === 'medium' && shape === 'circle') {
      return 6;
    }

    if (size === 'medium' && shape === 'cross') {
      return 14;
    }

    if (size === 'large' && shape === 'circle') {
      return 8;
    }

    if (size === 'large' && shape === 'cross') {
      return 16;
    } else {
      return 0;
    }
  };
  /**
   * to do
   * @param positionX
   * @param positionY
   * @param color
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.drawPoint = function (drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color) {
    var valueToolTip = this.defineContentTooltip('point');
    var linkUrlPoint = this.props.linkUrl.followLink;

    if (drawGraphicMarker === 'true') {
      if (shape === 'circle') {
        if (this.props.buttonAddLinkIsActive || this.props.buttonAddIncurvedLinkIsActive) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            key: 'tooltip' + this.props.name,
            content: valueToolTip,
            placement: this.props.tooltipPosition.value
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: {
              border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
              backgroundColor: this.defineBackgroundColor(),
              borderRadius: '50px',
              padding: size + 'px',
              position: 'absolute',
              zIndex: 1000,
              left: positionShapeX,
              top: positionShapeY
            },
            id: this.props.idPoint
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            key: 'tooltip' + this.props.name,
            content: valueToolTip,
            placement: this.props.tooltipPosition.value
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: linkUrlPoint,
            style: {
              border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
              backgroundColor: this.defineBackgroundColor(),
              borderRadius: '50px',
              padding: size + 'px',
              position: 'absolute',
              zIndex: 1000,
              left: positionShapeX,
              top: positionShapeY
            },
            id: this.props.idPoint
          }));
        }
      } else if (shape === 'cross') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          key: 'tooltip' + this.props.name,
          content: valueToolTip,
          placement: this.props.tooltipPosition.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: this.props.idPoint,
          style: {
            fontSize: size,
            fontWeight: 'bold',
            position: 'absolute',
            zIndex: 1000,
            color: color,
            left: positionShapeX,
            top: positionShapeY
          }
        }, "X"));
      }
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  DrawPoint.prototype.displayLabel = function (label, name, positionX, positionY, police) {
    var valueToDisplay = label;

    if (label === '') {
      valueToDisplay = name;
    }

    var valueToolTip = this.defineContentTooltip('label');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      key: 'tooltipLabel' + this.props.name,
      content: valueToolTip,
      placement: this.props.tooltipPosition.value
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textDecoration: this.defineTextDecoration(),
        fontStyle: this.defineFontStyle(),
        fontWeight: this.defineFontWeight(),
        fontSize: this.props.sizePolice,
        fontFamily: police,
        color: this.props.textObject.colorText || 'black',
        position: 'absolute',
        zIndex: 1000,
        top: this.definePositionLabelY(positionY),
        left: this.definePositionLabelX(positionX)
      }
    }, valueToDisplay));
  };

  DrawPoint.prototype.defineContentTooltip = function (localisation) {
    var _this = this;

    var arrayOrientedLinksIn = this.props.associateOrientedLinkIn;
    var arrayOrientedLinksOut = this.props.associateOrientedLinkOut;
    var valueMainMetric = this.props.valueMainMetric;
    var refMainMetric = this.props.refMainMetric;
    var contentTooltip = [];
    var linkUrlTooltip = this.props.linkUrl.hoveringTooltipLink;
    var styleMainTitle = {
      fontFamily: this.props.police,
      fontSize: '11px',
      marginBottom: '0px',
      textAlign: 'center'
    };
    var styleTitle = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px'
    };
    var styleTitle2 = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px'
    };
    var styleContent = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px'
    };
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip1' + this.props.name,
      style: styleMainTitle
    }, this.props.label || this.props.name.toUpperCase()));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip2' + this.props.name,
      style: styleTitle
    }, "Main Metric"));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip3' + this.props.name,
      style: styleContent
    }, "- Reference : ", refMainMetric));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip4' + this.props.name,
      style: styleContent
    }, "- Value : ", valueMainMetric + this.props.textObject.valueGenerateObjectText.unit));

    if (this.props.auxiliaryMetrics.length > 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip5' + this.props.name,
        style: styleTitle
      }, "Auxiliary Metric"));
      var index_1 = 1;
      this.props.auxiliaryMetrics.forEach(function (metric) {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip6' + _this.props.name,
          style: styleTitle2
        }, "+ Metric ", index_1));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip7' + _this.props.name,
          style: styleContent
        }, "- Value : ", _this.props.valuesAuxiliaryMetrics[index_1 - 1]));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip8' + _this.props.name,
          style: styleContent
        }, "- Key : ", metric.key));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip9' + _this.props.name,
          style: styleContent
        }, "- KeyValue : ", metric.keyValue));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip10' + _this.props.name,
          style: styleContent
        }, "- Type : ", metric.manageValue));
        index_1++;
      });
    }

    if (arrayOrientedLinksIn.length !== 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip11' + this.props.name,
        style: styleTitle
      }, "Associate Link In :"));
      arrayOrientedLinksIn.forEach(function (orientedLinkIn) {
        var nameOrientedLink = orientedLinkIn.label || orientedLinkIn.name;
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: localisation + 'ContentTooltip12' + _this.props.name,
          style: styleContent
        }, "- ", nameOrientedLink));
      });
    }

    if (arrayOrientedLinksOut.length !== 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip13' + this.props.name,
        style: styleTitle
      }, "Associate Link Out :"));
      arrayOrientedLinksOut.forEach(function (orientedLinkOut) {
        var nameOrientedLink = orientedLinkOut.label || orientedLinkOut.name;
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: localisation + 'ContentTooltip14' + _this.props.name,
          style: styleContent
        }, "- ", nameOrientedLink));
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: linkUrlTooltip
    }, contentTooltip);
  };

  DrawPoint.prototype.defineBackgroundColor = function () {
    var _this = this;

    var colorBackground = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].backColor !== '') {
        colorBackground = this.props.seuil[0].backColor;
      } else {
        colorBackground = 'black';
      }
    } else {
      colorBackground = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBackground = level.backColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBackground = level.backColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBackground = level.backColor;
      }

      index++;
    });

    if (colorBackground === '') {
      colorBackground = 'black';
    }

    return colorBackground;
  };

  DrawPoint.prototype.defineBorderColor = function () {
    var _this = this;

    var colorBorder = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBorder = this.props.seuil[0].borderColor;
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBorder = level.borderColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBorder = level.borderColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBorder = level.borderColor;
      }

      index++;
    });
    return colorBorder;
  };

  DrawPoint.prototype.defineBorderSize = function () {
    var _this = this;

    var sizeBorder = '';

    if (this.props.seuil.length > 0) {
      sizeBorder = this.props.seuil[0].sizeBorder;
    } else {
      sizeBorder = '1';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          sizeBorder = level.sizeBorder;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          sizeBorder = level.sizeBorder;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        sizeBorder = level.sizeBorder;
      }

      index++;
    });
    return sizeBorder;
  };
  /**
   * render
   */


  DrawPoint.prototype.render = function () {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var shape = this.props.shape.value || '';
    var size = this.defineSizeGraphicMarkerPx(this.props.size.value || '', shape);
    var valueInputPositionArrowX = parseInt(this.props.positionShapeX, 10) || 0;
    var valueInputPositionArrowY = parseInt(this.props.positionShapeY, 10) || 0;
    var positionShapeX = this.definePositionX(valueInputPositionArrowX, initialSpace, size, shape);
    var positionShapeY = this.definePositionY(valueInputPositionArrowY, initialSpace, size, shape);
    var label = this.props.label;
    var name = this.props.name;
    var color = this.props.color;
    var drawGraphicMarker = this.props.drawGraphicMarker.value || '';
    var police = this.props.police;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: this.props.name,
      style: {
        cursor: 'pointer'
      }
    }, this.displayLabel(label, name, positionShapeX, positionShapeY, police), this.drawPoint(drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color));
  };

  return DrawPoint;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawPoint);

/***/ }),

/***/ "./components/Draw/drawRectangle.tsx":
/*!*******************************************!*\
  !*** ./components/Draw/drawRectangle.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/isNumFloat */ "./Functions/isNumFloat.tsx");
/* harmony import */ var _drawRectangleExtend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawRectangleExtend */ "./components/Draw/drawRectangleExtend.tsx");




/**
 * Draw inititial viewing space rectangle
 */

var DrawRectangle =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawRectangle, _super);

  function DrawRectangle(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Transform coordinate percent for css
     * @param {number} size value of coordinate
     * @param {boolean} isMax true if x or y is max value
     * @returns coordinate to percent
     */


    _this.transformCoordonneesToPx = function (size, isMax, position) {
      if (size > 100) {
        size = 100;
      } else if (size < 0 && size < -100) {
        size = -100;
      }

      if (size >= 0) {
        size /= 2;
        size = isMax ? 50 - size : 50 + size;
      } else {
        size *= -1;
        size /= 2;
        size = 50 - size;
      }

      return size;
    };

    _this.fillCoordinate = function () {
      var options = _this.props.options;
      var mapItems;
      mapItems = options.regionCoordinateSpace.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: 'drawRectangleExtend' + index.toString(),
          uneCoor: line,
          useLimit: false,
          limit: options.coordinateSpaceInitial.coordinate,
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          id: 'region' + line.id.toString(),
          isEnabled: _this.props.isEnabled
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, mapItems);
    };
    /** creaate rectrangle */


    _this.createRectangle = function () {
      var line = _this.props.coordinateInitial.coordinate;
      var pLeft;
      var pRight;
      var pTop;
      var pBottom;
      var xMin = 0;
      var xMax = 0;
      var yMin = 0;
      var yMax = 0;
      var pBorder = _this.props.coordinateInitial.displayArea ? '3px solid ' + _this.props.color : '';
      xMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.xMin) ? parseInt(line.xMin, 10) : 0;
      xMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.xMax) ? parseInt(line.xMax, 10) : 0;
      yMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.yMin) ? parseInt(line.yMin, 10) : 0;
      yMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.yMax) ? parseInt(line.yMax, 10) : 0;

      if (xMax >= 0) {
        pLeft = _this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
        pRight = _this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
      } else {
        xMin = xMin * -1;
        pRight = _this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
        pLeft = _this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
      }

      if (yMax >= 0) {
        pBottom = _this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
        pTop = _this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
      } else {
        yMin = yMin * -1;
        pTop = _this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
        pBottom = _this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
      }

      var data = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: pBorder,
          bottom: pBottom,
          left: pLeft,
          position: 'absolute',
          right: pRight,
          top: pTop
        },
        id: _this.props.id
      });

      _this.setState({
        resultHTML: data
      });
    };
    /** create rectangle when component mount */


    _this.componentDidMount = function () {
      _this.createRectangle();
    };

    _this.state = {
      resultHTML: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /** update state when props coordinateInitial change */


  DrawRectangle.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps !== this.props) {
      this.createRectangle();
    }
  };
  /**
   * render
   */


  DrawRectangle.prototype.render = function () {
    var test = {
      position: 'absolute',
      textAlign: 'center',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: test
    }, this.state.resultHTML);
  };

  return DrawRectangle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawRectangle);

/***/ }),

/***/ "./components/Draw/drawRectangleExtend.tsx":
/*!*************************************************!*\
  !*** ./components/Draw/drawRectangleExtend.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_otherFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/otherFunction */ "./Functions/otherFunction.tsx");
/* harmony import */ var Functions_getLowerLimit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/getLowerLimit */ "./Functions/getLowerLimit.tsx");
/* harmony import */ var Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/getResultQuery */ "./Functions/getResultQuery.tsx");
/* harmony import */ var Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/parseColor */ "./Functions/parseColor.tsx");
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");
/* harmony import */ var Functions_searchMinMaxIdSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/searchMinMaxIdSVG */ "./Functions/searchMinMaxIdSVG.tsx");

/* eslint-disable prettier/prettier */









/**
 * Draw rectangle
 */

var DrawRectangleExtend =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawRectangleExtend, _super);

  function DrawRectangleExtend(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Edit color Zone in SVG
     * @param {string} id id is equal to zone for change color in Svg
     * @param {string} color define the color for Svg zone
     */


    _this.editColorSvgZone = function (id, color, border, sizeBorder) {
      var colorSVG = Object(Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__["parseColor"])(color);
      var colorBorderSVG = Object(Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__["parseColor"])(border);
      var changeColorElement = document.getElementById(id); // if (id === 'rect45') {
      //   console.log('am here');
      // }

      if (changeColorElement) {
        changeColorElement.style.fill = colorSVG.color;
        changeColorElement.style.fillOpacity = colorSVG.transparency;
        changeColorElement.style.stroke = colorBorderSVG.color;
        changeColorElement.style.strokeOpacity = colorBorderSVG.transparency;
        changeColorElement.style.strokeWidth = sizeBorder;
      }
    };

    _this.generateValueMetricElement = function (region, valueQuery) {
      var converValueQuery = 'NaN';
      var roundMetrics = region.textObj.valueGenerateObjectText ? parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10) : 1;

      if (valueQuery && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.numericFormatElement !== '' && roundMetrics) {
        converValueQuery = (valueQuery || 0).toPrecision(roundMetrics).toString();
      } else if (valueQuery) {
        converValueQuery = valueQuery.toString();
      } // (Math.round(valueQuery * roundMetrics + Number.EPSILON) / roundMetrics).toString()


      var value = converValueQuery;

      if (region.textObj.valueGenerateObjectText) {
        value = region.textObj.valueGenerateObjectText.legendElement + ' ' + converValueQuery + ' ' + region.textObj.valueGenerateObjectText.unit;
      }

      return value;
    };
    /** fill state for tooltip, color zone and calc round query */


    _this.setStateTooltip = function (lowerLimit, region, valueQuery, link) {
      var styleTooltip = {
        color: region.textObj.colorText,
        backgroundColor: region.textObj.colorBack
      };
      var styleMetrics = {
        color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
        backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black'
      };

      var valueQueryResult = _this.generateValueMetricElement(region, valueQuery);

      var tooltipValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styleTooltip
      }, link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: region.linkURL.hoveringTooltipLink
      }, region.linkURL.hoveringTooltipText), region.textObj.isTextTooltip && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, region.label)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styleMetrics
      }, region.textObj.generateObjectText && region.textObj.valueGenerateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, valueQueryResult)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, _this.displayValuesAuxMetrics()));
      return {
        tooltipValue: tooltipValue,
        backgroundColor: lowerLimit.colorBack,
        borderColor: lowerLimit.colorBorder,
        sizeBorder: lowerLimit.sizeBorder,
        valueQuery: valueQueryResult
      };
    };

    _this.displayValueQuery = function (region) {
      if (region.textObj.generateObjectText && region.textObj.valueGenerateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip) {
        return true;
      }

      return false;
    };
    /** generate tooltip for metrics and apply color with lower limit */


    _this.generateTooltipAndEditColor = function (region, valueQuery) {
      var stateIsFill = false;
      var lowerLimit = Object(Functions_getLowerLimit__WEBPACK_IMPORTED_MODULE_4__["getLowerLimit"])(region, valueQuery);

      if (region.mode) {
        _this.editColorSvgZone(region.idSVG, lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
      }

      var resultTooltip = _this.setStateTooltip(lowerLimit, region, valueQuery, _this.props.isEnabled);

      if (valueQuery) {
        if (region.mode && (!region.textObj.isTextTooltip || _this.displayValueQuery(region))) {
          var coordinateWrite = Object(Functions_searchMinMaxIdSVG__WEBPACK_IMPORTED_MODULE_8__["searchMinMaxIdSVG"])(region.idSVG);

          if (coordinateWrite) {
            stateIsFill = true;
            var styleWrite = {
              position: 'absolute',
              zIndex: 999,
              left: coordinateWrite.xMax - (coordinateWrite.xMax - coordinateWrite.xMin),
              top: coordinateWrite.yMax,
              backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
              color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white'
            };
            var htmlResult = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              style: styleWrite
            }, !region.textObj.isTextTooltip && region.label, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), _this.displayValueQuery(region) && resultTooltip.valueQuery);

            _this.setState({
              htmlResult: htmlResult,
              tooltipValue: resultTooltip.tooltipValue,
              backgroundColor: resultTooltip.backgroundColor,
              borderColor: resultTooltip.borderColor,
              sizeBorder: resultTooltip.sizeBorder,
              valueQuery: resultTooltip.valueQuery
            });
          }
        }
      }

      if (!stateIsFill) {
        _this.setState({
          tooltipValue: resultTooltip.tooltipValue,
          backgroundColor: resultTooltip.backgroundColor,
          borderColor: resultTooltip.borderColor,
          sizeBorder: resultTooltip.sizeBorder,
          valueQuery: resultTooltip.valueQuery
        });
      }
    };
    /** get data metrics and fill state */


    _this.reqMetrics = function () {
      var region = _this.props.uneCoor;
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricRegion"])(region, _this.props);

      if (region.mainMetric.returnQuery && region.mainMetric.returnQuery.length > 0) {
        var cnt = Object(Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_5__["getResultQuery"])(region.mainMetric);

        _this.generateTooltipAndEditColor(region, cnt);
      } else {
        _this.generateTooltipAndEditColor(region, null);
      }
    };

    _this.getValuesAuxiliaryMetrics = function () {
      var region = _this.props.uneCoor;
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricAuxRegion"])(region, _this.props);
      var mainMetric = region.mainMetric; //console.log(mainMetric.refId);

      var auxiliaryMetrics = region.metrics; //console.log(auxiliaryMetrics);

      var valueAuxiliaryMetric = []; //const countMetrics: number = auxiliaryMetrics.length;

      auxiliaryMetrics.forEach(function (metric) {
        var _a;

        var countTotalValues = 0;
        var resultTotalValues = 0;
        var result = '';

        if (metric.returnQuery && metric.returnQuery.length > 0) {
          var numberLoop = ((_a = metric.returnQuery) === null || _a === void 0 ? void 0 : _a.length) || 0;

          if (metric.key !== '' && metric.keyValue !== '') {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  if (line.fields[0].labels[metric.key] === metric.keyValue) {
                    var countValues = line.fields[0].values.length;

                    for (var i_1 = 0; i_1 < countValues; i_1++) {
                      if (line.fields[0].values.get(i_1)) {
                        resultTotalValues += line.fields[0].values.get(i_1);
                        countTotalValues++;
                      }
                    }
                  }
                }
              }
            }
          } else {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  var countValues = line.fields[0].values.length;

                  for (var i_2 = 0; i_2 < countValues; i_2++) {
                    if (line.fields[0].values.get(i_2)) {
                      resultTotalValues += line.fields[0].values.get(i_2);
                      countTotalValues++;
                    }
                  }
                }
              }
            }
          }

          if (metric.manageValue === 'avg') {
            result = (resultTotalValues / countTotalValues).toString();
          } else if (metric.manageValue === 'sum') {
            result = resultTotalValues.toString();
          } else if (metric.manageValue === 'err') {
            if (countTotalValues > 1) {
              result = 'error';
            } else {
              result = resultTotalValues.toString();
            }
          }
        }

        if (result !== '') {
          valueAuxiliaryMetric.push(result);
        }
      });
      return valueAuxiliaryMetric;
    };

    _this.getConvertValueAuxMetrics = function (valueBrut) {
      var result = '';
      var region = _this.props.uneCoor;
      var roundValue = region.textObj.generateAuxiliaryElement.numericFormatElement;
      var unit = region.textObj.generateAuxiliaryElement.unit;

      if (roundValue !== '') {
        result = parseFloat(valueBrut).toPrecision(parseInt(roundValue, 10)).toString();
      } else {
        result = valueBrut;
      }

      return result + ' ' + unit;
    };

    _this.displayValuesAuxMetrics = function () {
      var e_1, _a;

      var html = [];

      var valuesAuxMetrics = _this.getValuesAuxiliaryMetrics();

      var auxMetrics = _this.props.uneCoor.metrics;
      var region = _this.props.uneCoor;
      var addColorText = region.textObj.generateAuxiliaryElement.addColorTextElement;
      var addColorBack = region.textObj.generateAuxiliaryElement.addColorBackElement;
      var legend = region.textObj.generateAuxiliaryElement.legendElement;
      var colorText = '';
      var colorBack = '';

      if (addColorText) {
        colorText = region.textObj.generateAuxiliaryElement.colorTextElement;
      } else {
        colorText = 'white';
      }

      if (addColorBack) {
        colorBack = region.textObj.generateAuxiliaryElement.colorBackElement;
      } else {
        colorBack = 'black';
      }

      var styleTitle = {
        fontFamily: _this.props.options.display.police,
        fontSize: '10px',
        marginTop: '5px',
        marginBottom: '0px',
        color: colorText
      };
      var styleTitle2 = {
        fontFamily: _this.props.options.display.police,
        fontSize: '10px',
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '0px',
        color: colorText
      };
      var styleContent = {
        fontFamily: _this.props.options.display.police,
        fontSize: '9px',
        marginLeft: '10px',
        marginBottom: '0px',
        color: colorText
      };

      if (auxMetrics.length > 0) {
        html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: '',
          style: styleTitle
        }, "Auxiliary Metric"));
        html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: styleTitle
        }, legend));
        var index = 1;

        try {
          for (var auxMetrics_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(auxMetrics), auxMetrics_1_1 = auxMetrics_1.next(); !auxMetrics_1_1.done; auxMetrics_1_1 = auxMetrics_1.next()) {
            var metric = auxMetrics_1_1.value;

            var valueAuxMetric = _this.getConvertValueAuxMetrics(valuesAuxMetrics[index - 1]);

            html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: '',
              style: styleTitle2
            }, "+ Metric ", index));
            html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: '',
              style: styleContent
            }, "- Value : ", valueAuxMetric));
            html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: '',
              style: styleContent
            }, "- Key : ", metric.key));
            html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: '',
              style: styleContent
            }, "- KeyValue : ", metric.keyValue));
            html.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              key: '',
              style: styleContent
            }, "- Type : ", metric.manageValue));
            index++;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (auxMetrics_1_1 && !auxMetrics_1_1.done && (_a = auxMetrics_1["return"])) _a.call(auxMetrics_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        ;
      }

      ;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: colorBack
        }
      }, html);
    };
    /** final region zone . Call function after reqMetrics*/


    _this.renduFinal = function () {
      if (_this.props.uneCoor.mode) {
        return;
      }

      var region = _this.props.uneCoor;

      var pBorder = _this.state.sizeBorder.toString() + 'px solid ' + _this.state.borderColor;

      var backColor = region.textObj.colorBack;
      var textColor = region.textObj.colorText;
      var coorHTML = Object(Functions_otherFunction__WEBPACK_IMPORTED_MODULE_3__["calculRealCoordinate"])(region, _this.props.useLimit, _this.props.limit);
      var style = region.textObj.style;
      var styleDiv = {
        position: 'absolute',
        border: pBorder,
        top: coorHTML.top,
        bottom: coorHTML.bottom,
        left: coorHTML.left,
        right: coorHTML.right,
        zIndex: 999,
        justifyContent: 'center',
        background: 'url(' + region.img + ') no-repeat center center',
        backgroundColor: _this.state.backgroundColor,
        backgroundSize: 'contain',
        cursor: 'pointer'
      };
      var styleTextDiv = {
        backgroundColor: backColor,
        textDecoration: _this.defineTextDecoration(style),
        fontStyle: _this.defineFontStyle(style),
        fontWeight: _this.defineFontWeight(style),
        color: textColor,
        verticalAlign: 'middle'
      };
      var styleMetricsDiv = {
        backgroundColor: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorBackElement : 'black',
        color: region.textObj.valueGenerateObjectText ? region.textObj.valueGenerateObjectText.colorTextElement : 'white',
        verticalAlign: 'middle'
      };
      var value; // console.log('text object');
      // console.log(region.textObj.isTextTooltip);
      // console.log('main metric');
      // console.log(region.textObj.generateObjectText);
      // console.log('aux metric');
      // console.log(region.textObj.generateAuxiliaryElement.displayObjectInTooltip);

      if (_this.props.isEnabled && region.linkURL.followLink !== '') {
        value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleDiv,
          id: _this.props.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: region.linkURL.followLink
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            height: '100%',
            width: '100%'
          }
        }, (!region.textObj.isTextTooltip || region.textObj.generateObjectText) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleTextDiv
        }, !region.textObj.isTextTooltip && region.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleMetricsDiv
        }, region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && _this.state.valueQuery)))));

        if (region.textObj.isTextTooltip || region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
          value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, value);
        }
      } else {
        value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleDiv,
          id: _this.props.id
        }, (!region.textObj.isTextTooltip || region.textObj.generateObjectText) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleTextDiv
        }, !region.textObj.isTextTooltip && region.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleMetricsDiv
        }, region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInTooltip && _this.state.valueQuery)));

        if (region.textObj.isTextTooltip || region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInTooltip || region.textObj.generateAuxiliaryElement.displayObjectInTooltip) {
          value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, value);
        }
      }

      _this.setState({
        htmlResult: value
      });
    };
    /** fill state to display data in html */


    _this.fillState = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.reqMetrics();
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.renduFinal();
              })];

            case 2:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.defineTextDecoration = function (mainStyle) {
      var result = '';

      if (mainStyle.underline) {
        result = 'underline';
      } else {
        if (_this.props.options.display.style.underline) {
          result = 'underline';
        } else {
          result = 'none';
        }
      }

      return result;
    };

    _this.defineFontStyle = function (mainStyle) {
      var result = '';

      if (mainStyle.italic) {
        result = 'italic';
      } else {
        if (_this.props.options.display.style.italic) {
          result = 'italic';
        } else {
          result = 'normal';
        }
      }

      return result;
    };

    _this.defineFontWeight = function (mainStyle) {
      var result = '';

      if (mainStyle.bold) {
        result = 'bold';
      } else {
        if (_this.props.options.display.style.bold) {
          result = 'bold';
        } else {
          result = 'normal';
        }
      }

      return result;
    };
    /** load prometheus value */


    _this.componentDidMount = function () {
      _this.fillState();
    };

    _this.state = {
      tooltipValue: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      sizeBorder: 1,
      htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      valueQuery: ''
    };
    return _this;
  }
  /**
   * update props
   * @param prevProps
   */


  DrawRectangleExtend.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps !== this.props) {
      this.fillState();
    }
  };
  /** render */


  DrawRectangleExtend.prototype.render = function () {
    // console.log(this.props.uneCoor.metrics);
    // console.log(this.getValuesAuxiliaryMetrics());
    return this.state.htmlResult;
  };

  return DrawRectangleExtend;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawRectangleExtend);

/***/ }),

/***/ "./components/Parametrage/VariableColor.tsx":
/*!**************************************************!*\
  !*** ./components/Parametrage/VariableColor.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Models_InputClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/InputClass */ "./Models/InputClass.tsx");
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









/**
 * edit colors in variable mode
 */

var VariableColor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VariableColor, _super);

  function VariableColor(props) {
    var _this = _super.call(this, props) || this;
    /**
     * set state for arrayInputClass whith Promise
     */


    _this.setStateAsyncArrayInputClass = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for seuil whith Promise
     */


    _this.setStateAsyncLowerLimit = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for index whith Promise
     */


    _this.setStateAsyncIndex = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for nbVariation whith Promise
     */


    _this.setStateAsyncNbVariation = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * send data to parent
     */


    _this.callBack = function () {
      _this.fillVarInput();

      _this.props.lowerLimitCallBack(_this.state.lowerLimit);
    };
    /** old function */


    _this.saveData = function () {// const { onOptionsChange } = this.props;
      // console.table(this.state.seuil);
      // onOptionsChange({
      // 	...this.props.options,
      // 	seuil: this.state.seuil,
      // });
    };
    /**
     * add new seuil
     * @param idx index for id
     */


    _this.addInput = function (idx, newLowerLimit) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: this.state.arrayInputClass.slice().concat(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined)]))
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: this.state.lowerLimit.concat(newLowerLimit)
              })];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: idx + 1
              })];

            case 3:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function with value input change
     * @param event event input
     * @param idInput id input
     * @param idLine index array
     */


    _this.handleValueChange = function (event, idInput, idLine) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit.slice();

              if (idInput === 'lowerLimitMin') {
                cpy[idLine].lowerLimitMin = event;
              } else {
                cpy[idLine].lowerLimitMax = event;

                if (cpy.length > idLine + 1) {
                  cpy[idLine + 1].lowerLimitMin = '>' + event;
                }
              }

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when colorFond value change
     * @param key line index to modify
     * @param color the new color to add
     */


    _this.onChangeColorFond = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].backColor = color;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call fonction when colorContour change
     * @param key line index to modify
     * @param color the new color to add
     */


    _this.onChangeColorContour = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].borderColor = color;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when sizeBorder value change
     * @param key line index to modify
     * @param size the new size to add
     */


    _this.onChangeSzContour = function (key, size) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].sizeBorder = size;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * insert color picker
     * @param keyInt index to edit line
     * @returns JSX.Element
     */


    _this.addButtonColor = function (keyInt) {
      var key = keyInt.toString();
      var couleur = [];

      var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

      if (_this.props.traceBack) {
        var keyFondColorPicker = key + 'FondcolorPicker';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: keyFondColorPicker,
          color: _this.state.lowerLimit[keyInt].backColor,
          keyInt: keyInt,
          text: l10n.colorVariable.switchBackgroundColor,
          _onChange: _this.onChangeColorFond
        }));
      }

      if (_this.props.traceBorder) {
        var keyContourDiv = key + 'ContourDiv';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: keyContourDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
          color: _this.state.lowerLimit[keyInt].borderColor,
          keyInt: keyInt,
          text: l10n.colorVariable.switchOutlineColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 15,
          label: l10n.colorVariable.thicknessOutline,
          name: "epaisseurContour",
          placeholder: l10n.colorVariable.thicknessOutline,
          value: _this.state.lowerLimit[keyInt].sizeBorder,
          onChange: function onChange(event) {
            return _this.onChangeSzContour(keyInt, event.currentTarget.value);
          }
        })));
      }

      return couleur;
    };
    /**
     * call fonction when edit nbVariation
     */


    _this.onChangeVariation = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncNbVariation({
                nbVariation: event.currentTarget.value
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** generate array input */


    _this.test = function (newSeuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var arrayInput, idx, pSeuil, newSeuil_1, newSeuil_1_1, line;

        var e_1, _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              arrayInput = this.state.arrayInputClass.slice();
              idx = this.state.index;
              pSeuil = this.state.lowerLimit;

              try {
                for (newSeuil_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newSeuil), newSeuil_1_1 = newSeuil_1.next(); !newSeuil_1_1.done; newSeuil_1_1 = newSeuil_1.next()) {
                  line = newSeuil_1_1.value;
                  arrayInput.push(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined)]));
                  idx++;
                  pSeuil.push(line);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (newSeuil_1_1 && !newSeuil_1_1.done && (_a = newSeuil_1["return"])) _a.call(newSeuil_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }

              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: arrayInput
              })];

            case 1:
              _b.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: pSeuil
              })];

            case 2:
              _b.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: idx
              })];

            case 3:
              _b.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call addInput to prepare new inputs
     * @param nb number inputs to add
     */


    _this.addMultipleVariation = function (nb, seuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!seuil) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.test(seuil)];

            case 1:
              _a.sent();

              this.fillVarInput();
              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** add new lower limit */


    _this.addVariation = function (nb, seuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var i, newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              i = 0;
              _a.label = 1;

            case 1:
              if (!(i < nb)) return [3
              /*break*/
              , 4];
              newSeuil = seuil ? seuil[i] : new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_5__["LowerLimitClass"](i, '', '', '', '', '');

              if (this.props.isLink) {
                newSeuil = seuil ? seuil[i] : new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_5__["LowerLimitClass"](i, '', '', '', '', '10');
              }

              return [4
              /*yield*/
              , this.addInput(i, newSeuil)];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              i++;
              return [3
              /*break*/
              , 1];

            case 4:
              this.fillVarInput();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when display n input according to nbVariation
     */


    _this.onClickVariation = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var nb;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: []
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: 0
              })];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: []
              })];

            case 3:
              _a.sent();

              this.setState({
                displayInput: true
              });
              nb = parseInt(this.state.nbVariation, 10);
              return [4
              /*yield*/
              , this.addVariation(nb)];

            case 4:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * generate input seuil min and max with value
     * @returns JSX.Element
     */


    _this.fillVarInput = function () {
      var e_2, _a;

      var _final = [];

      if (_this.state.lowerLimit.length === 0) {
        _this.setState({
          dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
        });

        return;
      }

      var i = 0;

      var _loop_1 = function _loop_1(line) {
        if (line.uneClassInput.length <= 0) {
          _this.setState({
            dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
          });

          return {
            value: void 0
          };
        }

        var result = line.uneClassInput.map(function (obj) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: obj.name === 'lowerLimitMin' ? line.id === 0 ? '-∞' : _this.state.lowerLimit[i].lowerLimitMin : line.id === _this.state.index - 1 ? '+∞' : _this.state.lowerLimit[i].lowerLimitMax,
            _handleChange: function _handleChange(event) {
              return _this.handleValueChange(event.currentTarget.value, obj.name, line.id);
            },
            disabled: obj.name === 'lowerLimitMin' || line.id === _this.state.index - 1
          });
        });
        i++;

        var couleur = _this.addButtonColor(line.id);

        var newKey = line.id.toString() + 'brGestColor';
        _final = _final.concat(result.concat(couleur.concat(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          key: newKey
        }))));
      };

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.state.arrayInputClass), _c = _b.next(); !_c.done; _c = _b.next()) {
          var line = _c.value;

          var state_1 = _loop_1(line);

          if (_typeof(state_1) === "object") return state_1.value;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      _this.setState({
        dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, _final)
      });
    };
    /**
     * debug
     */


    _this.infoSeuil = function () {
      // console.group('info');
      console.log(_this.state.lowerLimit);
      console.log(_this.state.arrayInputClass); // console.groupEnd();
    };
    /**
     * component mount
     */


    _this.componentDidMount = function () {
      if (_this.props.lowerLimit.length > 0) {
        var nb = parseInt(_this.state.nbVariation, 10);

        _this.addMultipleVariation(nb, _this.props.lowerLimit);
      }
    };

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.traceBorder !== _this.props.traceBorder || prevProps.traceBack !== _this.props.traceBack) {
        _this.fillVarInput();
      }
    };

    _this.state = {
      arrayInputClass: [],
      lowerLimit: [],
      index: 0,
      nbVariation: '3',
      dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
      displayInput: false
    };
    return _this;
  }
  /**
   * render
   */


  VariableColor.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: l10n.colorVariable.variationNumber,
      name: "nbVariation",
      placeholder: l10n.colorVariable.number,
      required: true,
      value: this.state.nbVariation,
      _handleChange: this.onChangeVariation
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.onClickVariation
    }, l10n.colorVariable.addColor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.dynamicInput);
  };

  return VariableColor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VariableColor);

/***/ }),

/***/ "./components/Parametrage/fixColor.tsx":
/*!*********************************************!*\
  !*** ./components/Parametrage/fixColor.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");





/**
 * edit color in fix mode
 */

var FixColor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FixColor, _super);

  function FixColor(props) {
    var _this = _super.call(this, props) || this;
    /**
     * edit background color with Promise
     */


    _this.setStateAsyncSeuil = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data
     */


    _this.callBack = function () {
      _this.props.lowerLimitCallBack(_this.state.lowerLimit);
    };
    /**
     * change background color
     */


    _this.onChangeColorFond = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].backColor = color;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * change contour color
     */


    _this.onChangeColorContour = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].borderColor = color;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * change size color
     */


    _this.onChangeSzContour = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].sizeBorder = value;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * add button color
     */


    _this.addButtonColor = function () {
      var key = '0';
      var couleur = [];

      var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

      var textInputColor = '';
      var labelSize = '';
      var placeHolderSize = '';

      if (_this.props.isLink) {
        textInputColor = 'Edit color';
        labelSize = 'Edit size';
        placeHolderSize = 'Edit size';
      } else {
        textInputColor = l10n.colorVariable.switchOutlineColor;
        labelSize = l10n.colorVariable.thicknessOutline;
        placeHolderSize = l10n.colorVariable.thicknessOutline;
      }

      if (_this.props.isLink && _this.props.traceBorder) {
        var keyContourDiv = key + 'ContourDiv';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: keyContourDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: _this.state.lowerLimit[0].borderColor,
          keyInt: 0,
          text: textInputColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 15,
          label: labelSize,
          name: "epaisseurContour",
          placeholder: placeHolderSize,
          value: _this.state.lowerLimit[0].sizeBorder,
          onChange: function onChange(event) {
            return _this.onChangeSzContour(event.currentTarget.value);
          }
        })));
      } else {
        if (_this.props.traceBack) {
          var keyFondColorPicker = key + 'FondcolorPicker';
          couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: keyFondColorPicker,
            color: _this.state.lowerLimit[0].backColor,
            keyInt: 0,
            text: l10n.colorVariable.switchBackgroundColor,
            _onChange: _this.onChangeColorFond
          }));
        }

        if (_this.props.traceBorder) {
          var keyContourDiv = key + 'ContourDiv';
          couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: keyContourDiv
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
            color: _this.state.lowerLimit[0].borderColor,
            keyInt: 0,
            text: textInputColor,
            _onChange: _this.onChangeColorContour
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            labelWidth: 15,
            label: labelSize,
            name: "epaisseurContour",
            placeholder: placeHolderSize,
            value: _this.state.lowerLimit[0].sizeBorder,
            onChange: function onChange(event) {
              return _this.onChangeSzContour(event.currentTarget.value);
            }
          })));
        }
      }

      return couleur;
    };
    /** create form */


    _this.initComponent = function () {
      _this.setState({
        htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, _this.addButtonColor())
      });
    };
    /** init component when component is mount */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var defaultSizeBorder;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(this.state.lowerLimit.length === 0)) return [3
              /*break*/
              , 2];
              defaultSizeBorder = '1';

              if (this.props.isLink) {
                defaultSizeBorder = '10';
              }

              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: [new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__["LowerLimitClass"](0, '', '', '', '', defaultSizeBorder)]
              })];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** init component when  update props */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.traceBorder !== _this.props.traceBorder || prevProps.traceBack !== _this.props.traceBack) {
        _this.initComponent();
      }
    };

    _this.state = {
      lowerLimit: _this.props.lowerLimit,
      htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /**
   * result
   */


  FixColor.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlResult);
  };

  return FixColor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FixColor);

/***/ }),

/***/ "./components/Parametrage/manageLink.tsx":
/*!***********************************************!*\
  !*** ./components/Parametrage/manageLink.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");



/**
 * def
 */

var ManageLink =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageLink, _super);

  function ManageLink(props) {
    var _this = _super.call(this, props) || this;
    /**
     * edit followLink whith Promise
     */


    _this.setStateAsyncFollowLink = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * edit link for tooltip whith Promise
     */


    _this.setStateAsyncHoveringTooltipLink = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * edit text for tooltip whith Promise
     */


    _this.setStateAsyncHoveringTooltipText = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data
     */


    _this.callBack = function () {
      _this.props.callBackToParent(_this.state.followLink, _this.state.hoveringTooltipLink, _this.state.hoveringTooltipText, undefined);
    };
    /**
     * call function when follow link change
     */


    _this.onChangeFollowLink = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncFollowLink({
                followLink: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when follow link change
     */


    _this.onChangeHoveringTooltipLink = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncHoveringTooltipLink({
                hoveringTooltipLink: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when follow link change
     */


    _this.onChangeHoveringTooltipText = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncHoveringTooltipText({
                hoveringTooltipText: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      followLink: _this.props.coordinateSpace.linkURL.followLink,
      hoveringTooltipLink: _this.props.coordinateSpace.linkURL.hoveringTooltipLink,
      hoveringTooltipText: _this.props.coordinateSpace.linkURL.hoveringTooltipText
    };
    return _this;
  }

  ManageLink.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.coordinateSpace.id !== this.props.coordinateSpace.id) {
      this.setState({
        followLink: prevProps.coordinateSpace.linkURL.followLink,
        hoveringTooltipLink: prevProps.coordinateSpace.linkURL.hoveringTooltipLink,
        hoveringTooltipText: prevProps.coordinateSpace.linkURL.hoveringTooltipText
      });
    }
  };
  /**
   * result
   */


  ManageLink.prototype.render = function () {
    var _this = this;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.followLink,
      name: "followLink",
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.followLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeFollowLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.linkTooltip,
      name: "linkTooltip",
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.hoveringTooltipLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeHoveringTooltipLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.textInTooltip,
      name: "textTooltip",
      placeholder: l10n.metricPrincipalSetting.text,
      required: false,
      value: this.state.hoveringTooltipText,
      _handleChange: function _handleChange(event) {
        return _this.onChangeHoveringTooltipText(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
  };

  return ManageLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageLink);

/***/ }),

/***/ "./components/Parametrage/manageLowerLimit.tsx":
/*!*****************************************************!*\
  !*** ./components/Parametrage/manageLowerLimit.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var components_Parametrage_fixColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Parametrage/fixColor */ "./components/Parametrage/fixColor.tsx");
/* harmony import */ var components_Parametrage_VariableColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Parametrage/VariableColor */ "./components/Parametrage/VariableColor.tsx");






/**
 * def class
 */

var ManageLowerLimit =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageLowerLimit, _super);

  function ManageLowerLimit(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncCoordinate = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncOpenLowerLimit = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data in type
     */


    _this.onSave = function () {
      // console.log('lower');
      // console.log(this.props.id);
      _this.props.callBack(_this.props.coordinate);

      _this.props.lowerLimitCallBack(_this.state.coordinate.lowerLimit);
    };
    /**
     * Edit fondIsChecked with switch
     */


    _this.onSwitchFond = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.traceBack = !newValue.traceBack;
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Edit contourIsChecked with switch
     */


    _this.onSwitchContour = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.traceBorder = !newValue.traceBorder;
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * switch colorMode -> fixe / variable
     */


    _this.onSwitchColorMode = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue, defaultSizeBorder;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.colorMode = !newValue.colorMode;
              if (!!this.state.coordinate.colorMode) return [3
              /*break*/
              , 2];
              defaultSizeBorder = '';

              if (this.props.isLink) {
                defaultSizeBorder = '10';
              }

              newValue.lowerLimit = [new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__["LowerLimitClass"](0, '', '', '', '', defaultSizeBorder)];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              newValue.lowerLimit = [];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** open or close toggle lower limit */


    _this.onToggleLowerLimit = function (isOpen) {
      _this.setState({
        openLowerLimit: isOpen
      });
    };
    /** update component when coordinate props change */


    _this.componentDidUpdate = function (prevProps) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.coordinate !== this.state.coordinate)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: prevProps.coordinate
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncOpenLowerLimit({
                openLowerLimit: false
              })];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      coordinate: _this.props.coordinate,
      openLowerLimit: false
    };
    return _this;
  }
  /**
   * result
   */


  ManageLowerLimit.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json"); // console.log(this.props.coordinate)
    // console.log(this.props.id)


    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      label: 'Lower limit',
      isOpen: this.state.openLowerLimit,
      onToggle: this.onToggleLowerLimit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.genericParameter.variableColor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.coordinate.colorMode,
      onChange: this.onSwitchColorMode
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), !this.props.isLink ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.genericParameter.traceBackground), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.coordinate.traceBack,
      onChange: this.onSwitchFond
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.genericParameter.traceContour), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.coordinate.traceBorder,
      onChange: this.onSwitchContour
    }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: 'Color/Size',
      checked: this.state.coordinate.traceBorder,
      onChange: this.onSwitchContour
    }), this.state.coordinate.colorMode ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_VariableColor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      traceBorder: this.state.coordinate.traceBorder,
      traceBack: this.state.coordinate.traceBack,
      lowerLimit: this.state.coordinate.lowerLimit,
      lowerLimitCallBack: this.props.lowerLimitCallBack,
      isLink: this.props.isLink
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_fixColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      traceBorder: this.state.coordinate.traceBorder,
      traceBack: this.state.coordinate.traceBack,
      lowerLimit: this.state.coordinate.lowerLimit,
      lowerLimitCallBack: this.props.lowerLimitCallBack,
      isLink: this.props.isLink
    })));
  };

  return ManageLowerLimit;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageLowerLimit);

/***/ }),

/***/ "./components/Parametrage/parametresGeneriques.tsx":
/*!*********************************************************!*\
  !*** ./components/Parametrage/parametresGeneriques.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manageLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageLink */ "./components/Parametrage/manageLink.tsx");
/* harmony import */ var _textObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textObjects */ "./components/Parametrage/textObjects.tsx");





/**
 * class ParametresGeneriques
 */

var ParametresGeneriques =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ParametresGeneriques, _super);

  function ParametresGeneriques(props) {
    var _this = _super.call(this, props) || this;
    /** switch value collapseLink when click collapse */


    _this.onToggleLinkCollapse = function (isOpen) {
      _this.setState({
        collapseLink: isOpen
      });
    };
    /** switch value collapseTextObject when click collapse */


    _this.onToggleTextObject = function (isOpen) {
      _this.setState({
        collapseTextObject: isOpen
      });
    };
    /** close collapse when coordinateSpace object change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.coordinateSpace !== _this.props.coordinateSpace) {
        _this.setState({
          collapseLink: false,
          collapseTextObject: false
        });
      }
    };

    _this.state = {
      collapseLink: false,
      collapseTextObject: false
    };
    return _this;
  }
  /** HTML */


  ParametresGeneriques.prototype.render = function () {
    // const l10n = require('Localization/en.json');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseLink,
      label: "Manage link",
      onToggle: this.onToggleLinkCollapse
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      coordinateSpace: this.props.coordinateSpace,
      callBackToParent: this.props.callBackToParent
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTextObject,
      label: "Text object",
      onToggle: this.onToggleTextObject
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_textObjects__WEBPACK_IMPORTED_MODULE_4__["default"], {
      coordinateSpace: this.props.coordinateSpace,
      callBackToParent: this.props.callBackToParent
    }))));
  };

  return ParametresGeneriques;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ParametresGeneriques);

/***/ }),

/***/ "./components/Parametrage/positionParameters.tsx":
/*!*******************************************************!*\
  !*** ./components/Parametrage/positionParameters.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * def
 */

var PositionParameter =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PositionParameter, _super);

  function PositionParameter(props) {
    var _this = _super.call(this, props) || this;

    _this.savePositionParameter = function (newPositionParameter) {
      var e_1, _a, e_2, _b, e_3, _c;

      var idCurrentCoordinateSpace = _this.props.id || 0;

      if (_this.props.isPoint) {
        var newArrayPoints = _this.props.options.arrayPoints;

        try {
          for (var newArrayPoints_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayPoints), newArrayPoints_1_1 = newArrayPoints_1.next(); !newArrayPoints_1_1.done; newArrayPoints_1_1 = newArrayPoints_1.next()) {
            var point = newArrayPoints_1_1.value;

            if (point.id === idCurrentCoordinateSpace) {
              point.positionParameter = newPositionParameter;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (newArrayPoints_1_1 && !newArrayPoints_1_1.done && (_a = newArrayPoints_1["return"])) _a.call(newArrayPoints_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayPoints: newArrayPoints
        }));
      } else if (_this.props.isLink) {
        var newArrayOrientedLink = _this.props.options.arrayOrientedLinks;

        try {
          for (var newArrayOrientedLink_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayOrientedLink), newArrayOrientedLink_1_1 = newArrayOrientedLink_1.next(); !newArrayOrientedLink_1_1.done; newArrayOrientedLink_1_1 = newArrayOrientedLink_1.next()) {
            var orientedLink = newArrayOrientedLink_1_1.value;

            if (orientedLink.id === idCurrentCoordinateSpace) {
              orientedLink.positionParameter = newPositionParameter;
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (newArrayOrientedLink_1_1 && !newArrayOrientedLink_1_1.done && (_b = newArrayOrientedLink_1["return"])) _b.call(newArrayOrientedLink_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayOrientedLinks: newArrayOrientedLink
        }));
      } else if (_this.props.isRegion) {
        var newArrayRegion = _this.props.options.regionCoordinateSpace;

        try {
          for (var newArrayRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayRegion), newArrayRegion_1_1 = newArrayRegion_1.next(); !newArrayRegion_1_1.done; newArrayRegion_1_1 = newArrayRegion_1.next()) {
            var region = newArrayRegion_1_1.value;

            if (region.id === idCurrentCoordinateSpace) {
              region.positionParameter = newPositionParameter;
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (newArrayRegion_1_1 && !newArrayRegion_1_1.done && (_c = newArrayRegion_1["return"])) _c.call(newArrayRegion_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          regionCoordinateSpace: newArrayRegion
        }));
      }
    };

    _this.getPositionParameter = function () {
      var e_4, _a, e_5, _b, e_6, _c;

      var positionParameter = {
        labelAPositionX: '0',
        labelAPositionY: '0',
        labelBPositionX: '0',
        labelBPositionY: '0',
        tooltipPositionA: {},
        tooltipPositionB: {}
      };
      var idCurrentCoordinateSpace = _this.props.id || 0;

      if (_this.props.isLink) {
        var newArrayOrientedLink = _this.props.options.arrayOrientedLinks;

        try {
          for (var newArrayOrientedLink_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newArrayOrientedLink), newArrayOrientedLink_2_1 = newArrayOrientedLink_2.next(); !newArrayOrientedLink_2_1.done; newArrayOrientedLink_2_1 = newArrayOrientedLink_2.next()) {
            var orientedLink = newArrayOrientedLink_2_1.value;

            if (orientedLink.id === idCurrentCoordinateSpace) {
              positionParameter = orientedLink.positionParameter;
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (newArrayOrientedLink_2_1 && !newArrayOrientedLink_2_1.done && (_a = newArrayOrientedLink_2["return"])) _a.call(newArrayOrientedLink_2);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } else if (_this.props.isPoint) {
        var arrayPoints = _this.props.options.arrayPoints;

        try {
          for (var arrayPoints_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayPoints), arrayPoints_1_1 = arrayPoints_1.next(); !arrayPoints_1_1.done; arrayPoints_1_1 = arrayPoints_1.next()) {
            var point = arrayPoints_1_1.value;

            if (point.id === idCurrentCoordinateSpace) {
              positionParameter = point.positionParameter;
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (arrayPoints_1_1 && !arrayPoints_1_1.done && (_b = arrayPoints_1["return"])) _b.call(arrayPoints_1);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      } else if (_this.props.isRegion) {
        var arrayRegions = _this.props.options.regionCoordinateSpace;

        try {
          for (var arrayRegions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayRegions), arrayRegions_1_1 = arrayRegions_1.next(); !arrayRegions_1_1.done; arrayRegions_1_1 = arrayRegions_1.next()) {
            var region = arrayRegions_1_1.value;

            if (region.id === idCurrentCoordinateSpace) {
              positionParameter = region.positionParameter;
            }
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (arrayRegions_1_1 && !arrayRegions_1_1.done && (_c = arrayRegions_1["return"])) _c.call(arrayRegions_1);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
      }

      return positionParameter;
    };

    _this.handleChangeLabelAPositionX = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.labelAPositionX = event.currentTarget.value;

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeLabelAPositionY = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.labelAPositionY = event.currentTarget.value;

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeLabelBPositionX = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.labelBPositionX = event.currentTarget.value;

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeLabelBPositionY = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.labelBPositionY = event.currentTarget.value;

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeTooltipPositionA = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.tooltipPositionA = {
        label: event.value,
        value: event.value
      };

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeTooltipPositionB = function (event) {
      var newPositionParameter = _this.getPositionParameter();

      newPositionParameter.tooltipPositionB = {
        label: event.value,
        value: event.value
      };

      _this.savePositionParameter(newPositionParameter); // this.setState({
      //   positionParameter: newPositionParameter,
      // });
      // this.callBack();

    };

    _this.handleChangeSelectOrientedLinkToUpgrade = function (event) {
      var newOrientedLinkComparedToToUpgrade = {
        label: event.label,
        value: event.value
      };

      _this.setState({
        orientedLinkComparedToUpgrade: newOrientedLinkComparedToToUpgrade
      });
    };

    _this.handleChangeSelectOrientedLinkToDowngrade = function (event) {
      var newOrientedLinkComaparedToDowngrade = {
        label: event.label,
        value: event.value
      };

      _this.setState({
        orientedLinkComparedToDowngrade: newOrientedLinkComaparedToDowngrade
      });
    };

    _this.downgradeLayerLevel = function () {
      var orientedLinkComparedTo = _this.state.orientedLinkComparedToDowngrade.value;
      var zIndex = orientedLinkComparedTo.zIndex - 1;

      _this.callBackZIndex(zIndex, _this.props.id || 0);
    };

    _this.upgradeLayerLevel = function () {
      var orientedLinkComparedTo = _this.state.orientedLinkComparedToUpgrade.value;
      var zIndex = orientedLinkComparedTo.zIndex + 1;

      _this.callBackZIndex(zIndex, _this.props.id || 0);
    };

    _this.defineListOrientedLink = function () {
      var listOptions = [];
      var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;
      arrayOrientedLinks.forEach(function (orientedLink) {
        var selectableValue = {
          label: orientedLink.label || orientedLink.name,
          value: orientedLink
        };
        listOptions.push(selectableValue);
      });
      return listOptions;
    };

    _this.defineLabelPositionInputs = function () {
      var e_7, _a;

      var item;

      var positionParameter = _this.getPositionParameter();

      var currentOrientedLink;
      var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;

      try {
        for (var arrayOrientedLinks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next(); !arrayOrientedLinks_1_1.done; arrayOrientedLinks_1_1 = arrayOrientedLinks_1.next()) {
          var orientedLink = arrayOrientedLinks_1_1.value;

          if (orientedLink.id === _this.props.id) {
            currentOrientedLink = orientedLink;
          }
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (arrayOrientedLinks_1_1 && !arrayOrientedLinks_1_1.done && (_a = arrayOrientedLinks_1["return"])) _a.call(arrayOrientedLinks_1);
        } finally {
          if (e_7) throw e_7.error;
        }
      }

      if (_this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label A Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelAPositionX,
          onChange: _this.handleChangeLabelAPositionX,
          placeholder: 'Label A Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label A Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelAPositionY,
          onChange: _this.handleChangeLabelAPositionY,
          placeholder: 'Label A Position Y'
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label B Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelBPositionX,
          onChange: _this.handleChangeLabelBPositionX,
          placeholder: 'Label B Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label B Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelBPositionY,
          onChange: _this.handleChangeLabelBPositionY,
          placeholder: 'Label B Position Y'
        }))));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelAPositionX,
          onChange: _this.handleChangeLabelAPositionX,
          placeholder: 'Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: positionParameter.labelAPositionY,
          onChange: _this.handleChangeLabelAPositionY,
          placeholder: 'Position Y'
        }));
      }

      return item;
    };

    _this.defineTooltipPositionInputs = function () {
      var e_8, _a;

      var item;
      var optionsSelectTooltipPosition = [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }, {
        label: 'Left',
        value: 'left'
      }, {
        label: 'Right',
        value: 'right'
      }];

      var positionParameter = _this.getPositionParameter();

      var currentOrientedLink;
      var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;

      try {
        for (var arrayOrientedLinks_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLinks), arrayOrientedLinks_2_1 = arrayOrientedLinks_2.next(); !arrayOrientedLinks_2_1.done; arrayOrientedLinks_2_1 = arrayOrientedLinks_2.next()) {
          var orientedLink = arrayOrientedLinks_2_1.value;

          if (orientedLink.id === _this.props.id) {
            currentOrientedLink = orientedLink;
          }
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (arrayOrientedLinks_2_1 && !arrayOrientedLinks_2_1.done && (_a = arrayOrientedLinks_2["return"])) _a.call(arrayOrientedLinks_2);
        } finally {
          if (e_8) throw e_8.error;
        }
      }

      if (_this.props.isLink && currentOrientedLink && currentOrientedLink.orientationLink.value === 'double') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip A Position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionA,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: positionParameter.tooltipPositionA,
          width: 20
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip B Position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionB,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: positionParameter.tooltipPositionB,
          width: 20
        })));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionA,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: positionParameter.tooltipPositionA,
          width: 20
        }));
      }

      return item;
    };

    _this.defineLayerLevel = function () {
      var item;

      var options = _this.defineListOrientedLink();

      if (_this.props.isLink) {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseLayerLevel,
          label: 'LayerLevel',
          onToggle: function onToggle(isOpen) {
            _this.setState({
              collapseLayerLevel: isOpen
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Upgrade on "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeSelectOrientedLinkToUpgrade,
          allowCustomValue: false,
          options: options,
          value: _this.state.orientedLinkComparedToUpgrade,
          width: 15
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: _this.upgradeLayerLevel
        }, "Submit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Downgrade on"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeSelectOrientedLinkToDowngrade,
          allowCustomValue: false,
          options: options,
          value: _this.state.orientedLinkComparedToDowngrade,
          width: 15
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: _this.downgradeLayerLevel
        }, "Submit")));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      }

      return item;
    };

    _this.state = {
      collapsepositionParameter: false,
      collapseLabel: false,
      collapseTooltip: false,
      collapseLayerLevel: false,
      orientedLinkComparedToDowngrade: {},
      orientedLinkComparedToUpgrade: {}
    };
    return _this;
  } // private callBack() {
  //   this.props.callBackToParent(this.state.positionParameter, this.props.id || 0);
  // }


  PositionParameter.prototype.callBackZIndex = function (zIndex, id) {
    this.props.callBackToParentZIndex(zIndex, id);
  };

  PositionParameter.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapsepositionParameter,
      label: 'Position Parameter',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapsepositionParameter: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseLabel,
      label: 'Label',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapseLabel: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineLabelPositionInputs())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTooltip,
      label: 'Tooltip',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapseTooltip: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineTooltipPositionInputs())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineLayerLevel()));
  };

  return PositionParameter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PositionParameter);

/***/ }),

/***/ "./components/Parametrage/styleComponent.tsx":
/*!***************************************************!*\
  !*** ./components/Parametrage/styleComponent.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * def
 */

var StyleComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleComponent, _super);

  function StyleComponent(props) {
    var _this = _super.call(this, props) || this;
    /** save data in Parent */


    _this.callBack = function () {
      _this.props.saveParent(_this.state.style);
    };
    /** change bold */


    _this.onChangeBold = function () {
      var style = _this.state.style;
      style.bold = !style.bold;

      _this.setState({
        style: style
      });

      _this.callBack();
    };
    /** change italic */


    _this.onChangeItalic = function () {
      var style = _this.state.style;
      style.italic = !style.italic;

      _this.setState({
        style: style
      });

      _this.callBack();
    };
    /** change underline */


    _this.onChangeUnderline = function () {
      var style = _this.state.style;
      style.underline = !style.underline;

      _this.setState({
        style: style
      });

      _this.callBack();
    };

    _this.state = {
      style: _this.props.oldStyle
    };
    return _this;
  }
  /**
   * result
   */


  StyleComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Bold"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "",
      checked: this.state.style.bold,
      onChange: this.onChangeBold
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Italic"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "",
      checked: this.state.style.italic,
      onChange: this.onChangeItalic
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Underline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "",
      checked: this.state.style.underline,
      onChange: this.onChangeUnderline
    })));
  };

  return StyleComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StyleComponent);

/***/ }),

/***/ "./components/Parametrage/textObjects.tsx":
/*!************************************************!*\
  !*** ./components/Parametrage/textObjects.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Parametrage/styleComponent */ "./components/Parametrage/styleComponent.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");






/**
 * def
 */

var TextObjects =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextObjects, _super);

  function TextObjects(props) {
    var _this = _super.call(this, props) || this;
    /** save data in async mode */


    _this.stateAsyncTextObject = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve); //this.callBack();

      });
    };
    /** call back to parent */


    _this.callBack = function () {
      _this.props.callBackToParent(undefined, undefined, undefined, _this.state.textObject);
    }; // /** change value for legend input */
    // onSwitchLegend = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.legend = !newTextObject.legend;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** change value for value input */


    _this.onChangeValeur = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.value = value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for back color input */


    _this.onChangeBackColor = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorBack = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for color region */


    _this.onChangeColorText = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorText = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for style text region */
    // onChangeStyleText = async (event: {
    //   /** target for style text region input */
    //   currentTarget: HTMLInputElement;
    // }) => {
    //   const newTextObject: TextObject = this.state.textObject;
    //   newTextObject.styleText = event.currentTarget.value;
    //   await this.stateAsyncTextObject({ textObject: newTextObject });
    //   this.callBack();
    // };

    /** switch value for generate text object */


    _this.onSwitchGenerateObjectText = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateObjectText = !this.state.textObject.generateObjectText;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for legend element */


    _this.onChangeLegendElement = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.legendElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for unity mesure element */


    _this.onChangeunit = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.unit = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change format for numeric text object */


    _this.onChangeFormatageNumeriqueTextObject = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.numericFormatElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch value for display object text */


    _this.onSwitchdisplayObjectInTooltip = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.displayObjectInTooltip = !this.state.textObject.generateAuxiliaryElement.displayObjectInTooltip;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // /** switch value for display object permanently */
    // onSwitchDisplayObjectPermanently = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.generateAuxiliaryElement.displayObjectPermanently =
    // 		!this.state.textObject.generateAuxiliaryElement.displayObjectPermanently;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** choice to apply color or not for text element */


    _this.onSwitchAddColorTextElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.addColorTextElement = !this.state.textObject.generateAuxiliaryElement.addColorTextElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** choice to apply color or not for back element */


    _this.onSwitchAddColorBackElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.addColorBackElement = !this.state.textObject.generateAuxiliaryElement.addColorBackElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch display text */


    _this.onSwitchisTextTooltip = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.isTextTooltip = !this.state.textObject.isTextTooltip;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for color text element */


    _this.onChangeColorTextElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.colorTextElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for back element */


    _this.onChangeColorBackElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.colorBackElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for legend element */


    _this.onChangeValueGenerateObjectTextLegendElement = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.legendElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for unity mesure element */


    _this.onChangeValueGenerateObjectTextunit = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.unit = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change format for numeric text object */


    _this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.numericFormatElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch value for display object text */


    _this.onSwitchValueGenerateObjectTextdisplayObjectInTooltip = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.displayObjectInTooltip = !this.state.textObject.valueGenerateObjectText.displayObjectInTooltip;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // /** switch value for display object permanently */
    // onSwitchValueGenerateObjectTextDisplayObjectPermanently = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.valueGenerateObjectText.displayObjectPermanently =
    // 		!this.state.textObject.valueGenerateObjectText.displayObjectPermanently;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** choice to apply color or not for text element */


    _this.onSwitchValueGenerateObjectTextAddColorTextElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.addColorTextElement = !this.state.textObject.valueGenerateObjectText.addColorTextElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** choice to apply color or not for back element */


    _this.onSwitchValueGenerateObjectTextAddColorBackElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.addColorBackElement = !this.state.textObject.valueGenerateObjectText.addColorBackElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for color text element */


    _this.onChangeValueGenerateObjectTextColorTextElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.colorTextElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for back element */


    _this.onChangeValueGenerateObjectTextColorBackElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.colorBackElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.saveData = function (style) {
      var newText = _this.state.textObject;
      newText.style = style;

      _this.setState({
        textObject: newText
      });

      _this.callBack();
    };

    _this.state = {
      textObject: _this.props.coordinateSpace.textObj
    };
    return _this;
  }
  /**
   * result
   */


  TextObjects.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.principalMetric), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Display text in region or tooltip"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "",
      checked: this.state.textObject.isTextTooltip,
      onChange: this.onSwitchisTextTooltip
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: this.state.textObject.isTextTooltip
    }, l10n.textObject.textRegion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: !this.state.textObject.isTextTooltip
    }, l10n.textObject.textBubble), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.colorBack,
      keyInt: 0,
      text: l10n.textObject.colorBackground,
      _onChange: this.onChangeBackColor
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.colorText,
      keyInt: 0,
      text: l10n.textObject.colorText,
      _onChange: this.onChangeColorText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      oldStyle: this.state.textObject.style,
      saveParent: this.saveData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Generate text object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.generateTextObject), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.generateObjectText,
      onChange: this.onSwitchGenerateObjectText
    })), this.state.textObject.generateObjectText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.legend,
      name: "legendTextObject",
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.legendElement,
      _handleChange: this.onChangeValueGenerateObjectTextLegendElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.digitalFormatting,
      name: "formatageNumeriqueTextObject",
      placeholder: l10n.textObject.digitalFormatting,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.numericFormatElement,
      _handleChange: this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.mesureUnit,
      name: "mesureUnityTextObject",
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.unit,
      _handleChange: this.onChangeValueGenerateObjectTextunit
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.objectDisplayTextTooltip), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.valueGenerateObjectText.displayObjectInTooltip,
      onChange: this.onSwitchValueGenerateObjectTextdisplayObjectInTooltip
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.colorText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.valueGenerateObjectText.addColorTextElement,
      onChange: this.onSwitchValueGenerateObjectTextAddColorTextElement
    })), this.state.textObject.valueGenerateObjectText.addColorTextElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.valueGenerateObjectText.colorTextElement,
      keyInt: 0,
      text: l10n.textObject.colorTextOptional,
      _onChange: this.onChangeValueGenerateObjectTextColorTextElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.colorText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.backgroundColor,
      checked: this.state.textObject.valueGenerateObjectText.addColorBackElement,
      onChange: this.onSwitchValueGenerateObjectTextAddColorBackElement
    })), this.state.textObject.valueGenerateObjectText.addColorBackElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.valueGenerateObjectText.colorBackElement,
      keyInt: 0,
      text: l10n.textObject.optionalBackgroundColor,
      _onChange: this.onChangeValueGenerateObjectTextColorBackElement
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.auxiliaryElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.legend,
      name: "legendTextObject",
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.legendElement,
      _handleChange: this.onChangeLegendElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.digitalFormatting,
      name: "formatageNumeriqueTextObject",
      placeholder: l10n.textObject.digitalFormatting,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.numericFormatElement,
      _handleChange: this.onChangeFormatageNumeriqueTextObject
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.mesureUnit,
      name: "mesureUnityTextObject",
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.unit,
      _handleChange: this.onChangeunit
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.objectDisplayTextTooltip), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.generateAuxiliaryElement.displayObjectInTooltip,
      onChange: this.onSwitchdisplayObjectInTooltip
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.colorText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.generateAuxiliaryElement.addColorTextElement,
      onChange: this.onSwitchAddColorTextElement
    })), this.state.textObject.generateAuxiliaryElement.addColorTextElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.generateAuxiliaryElement.colorTextElement,
      keyInt: 0,
      text: l10n.textObject.colorTextOptional,
      _onChange: this.onChangeColorTextElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, l10n.textObject.backgroundColor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: '',
      checked: this.state.textObject.generateAuxiliaryElement.addColorBackElement,
      onChange: this.onSwitchAddColorBackElement
    })), this.state.textObject.generateAuxiliaryElement.addColorBackElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.generateAuxiliaryElement.colorBackElement,
      keyInt: 0,
      text: l10n.textObject.optionalBackgroundColor,
      _onChange: this.onChangeColorBackElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
  };

  return TextObjects;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextObjects);

/***/ }),

/***/ "./components/coordinateSpaceInitial.tsx":
/*!***********************************************!*\
  !*** ./components/coordinateSpaceInitial.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/EditParameter/editGoodParameter */ "./Functions/EditParameter/editGoodParameter.tsx");




/**
 * initialize space for space coordinate
 */

var CoordinateSpaceInitialClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoordinateSpaceInitialClass, _super);

  function CoordinateSpaceInitialClass(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Call parent to send arrayCoor data
     */


    _this.callBack = function () {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        coordinateSpaceInitial: _this.state.arrayCoor
      }));
    };
    /** change value for switch */


    _this.onChangeSwitchDisplayInitialSpace = function () {
      var newDisplayInitial = _this.state.arrayCoor;
      newDisplayInitial.displayArea = !newDisplayInitial.displayArea;

      _this.setState({
        arrayCoor: newDisplayInitial
      });

      _this.callBack();
    };

    _this.state = {
      arrayCoor: _this.props.options.coordinateSpaceInitial
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   */


  CoordinateSpaceInitialClass.prototype._handleChange = function (currentTarget, name) {
    this.setState(function (prevState) {
      return {
        arrayCoor: Object(Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__["editGoodParameter"])(name, prevState.arrayCoor, currentTarget)
      };
    });
    this.callBack();
  };
  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  CoordinateSpaceInitialClass.prototype.getGoodValue = function (id, param) {
    var value;
    value = '';

    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.coordinate.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coordinate.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coordinate.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coordinate.yMax;
    }

    return value;
  };
  /**
   * HTML render
   */


  CoordinateSpaceInitialClass.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "coordinateSpaceInitial"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Display space initial"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "",
      checked: this.state.arrayCoor.displayArea,
      onChange: this.onChangeSwitchDisplayInitialSpace
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "xMin",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "xMin",
      value: this.state.arrayCoor.coordinate.xMin,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMin');
      },
      placeholder: 'X minimum'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X max",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "xMax",
      value: this.state.arrayCoor.coordinate.xMax,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMax');
      },
      placeholder: 'X max'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y min",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "yMin",
      value: this.state.arrayCoor.coordinate.yMin,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMin');
      },
      placeholder: 'Y minimum'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y max",
      labelWidth: 15,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "yMax",
      value: this.state.arrayCoor.coordinate.yMax,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMax');
      },
      placeholder: 'Y max'
    }));
  };

  return CoordinateSpaceInitialClass;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSpaceInitialClass);

/***/ }),

/***/ "./components/display.tsx":
/*!********************************!*\
  !*** ./components/display.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputSelect */ "./Functions/Input/inputSelect.tsx");
/* harmony import */ var _Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Parametrage/styleComponent */ "./components/Parametrage/styleComponent.tsx");





/**
 * class to manage police, size and style
 */

var Display =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Display, _super);

  function Display(props) {
    var _this = _super.call(this, props) || this;
    /**
     * call parent with new data
     */


    _this.callParent = function () {
      var _a = _this.state,
          newPolice = _a.newPolice,
          size = _a.size,
          style = _a.style;
      var pPolice = newPolice.value || '';
      var pSize = size;
      var pStyle = style;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        display: {
          police: pPolice,
          size: pSize,
          style: pStyle
        }
      }));
    };
    /**
     * set police state async
     */


    _this.setStateAsyncPolice = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);

        _this.callParent();
      });
    };
    /**
     * set size state async
     */


    _this.setStateAsyncsize = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);

        _this.callParent();
      });
    };
    /**
     * set style state async
     */


    _this.setStateAsyncStyle = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);

        _this.callParent();
      });
    };
    /**
     * edit size
     */


    _this.handleChangesize = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncsize({
                size: event.target.value
              })];

            case 1:
              _a.sent();

              this.callParent();
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // /**
    //  * edit style
    //  */
    // handleChangeStyle = async (event: {
    //   /** target to input element */
    //   target: HTMLInputElement;
    // }) => {
    //   await this.setStateAsyncStyle({
    //     style: event.target.value,
    //   });
    //   this.callParent();
    // };

    /**
     * edit police
     */


    _this.onChangePolice = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncPolice({
                newPolice: value
              })];

            case 1:
              _a.sent();

              this.callParent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Change background picture
     */


    _this.onImageChanged = function (e) {
      var newBaseMap = _this.props.options.baseMap;
      newBaseMap.image = e.target.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        baseMap: newBaseMap
      })); // this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });

    };
    /** edit modeSVG */


    _this.onChangeSwitchModeSVG = function () {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.modeSVG = !oldValue.modeSVG;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };
    /** edit modeSVG */


    _this.onChangeHeightBaseMap = function (e) {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.height = e.target.value;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };
    /** edit modeSVG */


    _this.onChangeWidthBaseMap = function (e) {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.width = e.target.value;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };

    _this.saveStyleData = function (style) {
      _this.setStateAsyncStyle({
        style: style
      });
    };

    _this.state = {
      newPolice: {
        value: _this.props.options.display.police,
        label: _this.props.options.display.police
      },
      size: _this.props.options.display.size,
      style: _this.props.options.display.style
    };
    return _this;
  }
  /**
   * html
   */


  Display.prototype.render = function () {
    var options = this.props.options;
    var police = [{
      value: 'Helvetica',
      label: 'Helvetica'
    }, {
      value: 'Arial',
      label: 'Arial'
    }, {
      value: 'sans-serif',
      label: 'sans-serif'
    }, {
      value: 'mono',
      label: 'mono'
    }];

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Police")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      _onChange: this.onChangePolice,
      data: police,
      defaultValue: this.state.newPolice
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: l10n.textDefault.size,
      labelWidth: 15,
      inputWidth: 30,
      required: true,
      value: this.state.size,
      onChange: this.handleChangesize
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      oldStyle: this.state.style,
      saveParent: this.saveStyleData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Use SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      labelClass: "",
      label: "",
      checked: options.baseMap.modeSVG,
      onChange: this.onChangeSwitchModeSVG
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'Image',
      labelWidth: 15,
      inputWidth: 30,
      type: "text",
      onChange: this.onImageChanged,
      value: options.baseMap.image || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Width",
      labelWidth: 15,
      inputWidth: 30,
      type: "text",
      onChange: this.onChangeWidthBaseMap,
      value: options.baseMap.width || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Height",
      labelWidth: 15,
      inputWidth: 30,
      type: "text",
      onChange: this.onChangeHeightBaseMap,
      value: options.baseMap.height || ''
    })));
  };

  return Display;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./components/importInput.tsx":
/*!************************************!*\
  !*** ./components/importInput.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/PointClass */ "./Models/PointClass.tsx");
/* harmony import */ var Models_RegionClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/RegionClass */ "./Models/RegionClass.tsx");
/* harmony import */ var _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");
/* harmony import */ var _Models_dropZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/dropZone */ "./Models/dropZone.tsx");


 //import /*pointClassImport, regionClassImport, multiPointClassImport, multiRegionClassImport */ '../../config/testVariable';



 //import { fetchConfFile } from '../Functions/importConfig';


/*
 * TODO
 */

var ImportInput =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImportInput, _super);

  function ImportInput(props) {
    var _this = _super.call(this, props) || this;

    _this.result = [];
    _this.totalResult = [];
    /**************************************FETCH******************************************/
    // fetchMono = () => {
    //     console.log(this.props.options.saveImportUrl.mono)
    //     this.result = fetchConfFile(this.props.options.saveImportUrl.mono);
    // }

    /**************************************CATCH******************************************/

    _this.PointValidator = function (newSpace) {
      var resultId = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        if (newSpace.id === point.id) {
          if (newSpace.name === point.name) {
            resultId = 2;
          } else {
            console.error('Id of point named "' + newSpace.name + '" already given fail to load!');
            resultId = 1;
          }
        }
      });

      return resultId;
    };

    _this.RegionValidator = function (newSpace) {
      var resultId = 0;

      _this.props.options.regionCoordinateSpace.forEach(function (region) {
        //Id
        if (newSpace.id === region.id) {
          if (newSpace.label === region.label) {
            resultId = 2;
          } else {
            console.error('Id of region labeled "' + newSpace.label + '" already given, fail to load!');
            resultId = 1;
          }
        }
      });

      return resultId;
    };

    _this.LinkValidator = function (newSpace) {
      var resultId = 0;

      _this.props.options.arrayOrientedLinks.forEach(function (lien) {
        if (newSpace.id === lien.id) {
          if (newSpace.name === lien.name) {
            resultId = 2;
          } else {
            console.error('Id of link named "' + newSpace.name + '" already given, fail to load!');
            resultId = 1;
          }
        }
      });

      return resultId;
    };

    _this.UrlValidator = function (url) {
      var result = true;

      for (var index in _this.props.options.saveImportUrl.multi) {
        if (_this.props.options.saveImportUrl.multi[index] === url) {
          result = false;
          break;
        }
      }

      return result;
    };
    /**************************************LOADER******************************************/
    // Mono


    _this.pointUpdate = function (updatedPoint) {
      _this.props.options.arrayPoints.forEach(function (point, index) {
        //Id
        if (updatedPoint.id === point.id) {
          if (updatedPoint.name === point.name) {
            _this.props.options.arrayPoints[index] = updatedPoint;

            _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
              arrayPoints: _this.props.options.arrayPoints
            }));
          }
        }
      });
    }; //Looking for a update after Point rework


    _this.loadMonoPoint = function (point) {
      var toLoad = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](point.id, point.linkURL, point.meta, point.lowerLimit, point.label, point.textObj, point.mainMetric, point.metrics, point.colorMode, point.traceBack, point.traceBorder, point.positionParameter, point.name, point.valueMetric, point.drawGraphicMarker, point.shape, point.sizeWidth, point.sizeHeight, point.rotateArrow, point.positionShapeX, point.positionShapeY, point.color, point.associateOrientedLinksIn, point.associateOrientedLinksOut);
      console.log(toLoad);

      var selector = _this.PointValidator(toLoad); // Do some test here to see if your already load a coordinatespace with this id


      if (selector === 0) {
        _this.props.options.arrayPoints.push(toLoad);
      }

      if (selector === 2) {
        _this.pointUpdate(toLoad);
      }
    };

    _this.regionUpdate = function (updatedRegion) {
      _this.props.options.regionCoordinateSpace.forEach(function (region, index) {
        //Id
        if (updatedRegion.id === region.id) {
          if (updatedRegion.label === region.label) {
            _this.props.options.regionCoordinateSpace[index] = updatedRegion;

            _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
              regionCoordinateSpace: _this.props.options.regionCoordinateSpace
            }));
          }
        }
      });
    }; //Looking for a update after Region rework


    _this.loadMonoRegion = function (region) {
      var toLoad = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_4__["RegionClass"](region.id, region.linkURL, region.meta, region.lowerLimit, region.label, region.textObj, region.mainMetric, region.metrics, region.colorMode, region.traceBack, region.traceBorder, region.positionParameter, region.idSVG, region.orientedLink, region.coords, region.mode, region.img);
      console.log(toLoad); // Do some test here to see if your already load a coordinatespace with this id

      var selector = _this.RegionValidator(toLoad);

      if (selector === 0) {
        _this.props.options.regionCoordinateSpace.push(toLoad);
      }

      if (selector === 2) {
        _this.regionUpdate(toLoad);
      }
    };

    _this.linkUpdate = function (updatedLink) {
      _this.props.options.arrayOrientedLinks.forEach(function (link, index) {
        //Id
        if (updatedLink.id === link.id) {
          if (updatedLink.name === link.name) {
            _this.props.options.arrayOrientedLinks[index] = updatedLink;

            _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
              arrayOrientedLinks: _this.props.options.arrayOrientedLinks
            }));
          }
        }
      });
    };

    _this.loadMonoLink = function (link) {
      var toLoad = new _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__["OrientedLinkClass"](link.id, link.linkURL, link.meta, link.lowerLimit, link.label, link.textObj, link.mainMetric, link.metrics, link.colorMode, link.traceBack, link.traceBorder, link.positionParameter, link.name, link.orientationLink, link.size, link.pointAPositionX, link.pointAPositionY, link.colorCoordinateA, link.pointBPositionX, link.pointBPositionY, link.colorCoordinateB, link.valueMainMetricA, link.valueMainMetricB, link.pointIn, link.pointOut, link.regionIn, link.regionOut, link.zIndex, link.pointCPositionX, link.pointCPositionY, link.isIncurved, link.mainMetricB, link.metricsB);
      console.log(toLoad); // Do some test here to see if your already load a coordinatespace with this id

      var selector = _this.LinkValidator(toLoad);

      if (selector === 0) {
        _this.props.options.arrayOrientedLinks.push(toLoad);
      }

      if (selector === 2) {
        _this.linkUpdate(toLoad);
      }
    }; //Multi


    _this.loadMultiPoints = function (points) {
      points.points.forEach(function (point) {
        _this.loadMonoPoint(point);
      });
    };

    _this.loadMultiRegions = function (regions) {
      regions.regions.forEach(function (region) {
        _this.loadMonoRegion(region);
      });
    };

    _this.loadMultiLinks = function (links) {
      links.links.forEach(function (link) {
        _this.loadMonoLink(link);
      });
    }; //Total


    _this.loadTotal = function (panel) {
      //console.log(panel.imageUrl);
      _this.props.options.baseMap = panel.baseMap;
      _this.props.options.display.police = panel.texteSettings.police;
      _this.props.options.display.size = panel.texteSettings.size;
      _this.props.options.display.style = panel.texteSettings.style;
      _this.props.options.coordinateSpaceInitial = panel.coordinateSpaceInitial;
      panel.regions.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });
      panel.points.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });
      panel.links.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });

      _this.fetchMulti();

      console.log('load total');
    };

    _this.loaderTotal = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var response, file, error_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 4]);

              return [4
              /*yield*/
              , fetch(this.props.options.totalUrlInput)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 2:
              file = _a.sent();
              this.loadTotal(file);
              return [3
              /*break*/
              , 4];

            case 3:
              error_1 = _a.sent();
              console.error(error_1);
              return [3
              /*break*/
              , 4];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // fetchTotal = () => {
    //   this.totalResult = fetchConfFile(this.props.options.saveImportUrl.total);
    //   console.log('downloadTotal');
    // };
    // loaderSelector = () => {
    //     // this.loadMultiRegions(multiRegionClassImport);
    // 	// console.table(this.props.options.arrayCoordinateSpace);
    // 	this.result.forEach(file => {
    // 		if (file.hasOwnProperty('regions')){
    //             this.loadMultiRegions(file);
    //             console.log('Load Region');
    //         }
    //         if (file.hasOwnProperty('points')){
    //             this.loadMultiPoints(file);
    //             console.log('Load Point');
    //         }
    //         if (file.hasOwnProperty('links')){
    //             this.loadMultiLinks(file);
    //             console.log('Load Links');
    // 		}
    // 	});
    // }


    _this.fetchMulti = function () {
      //this.result = fetchConfFile(this.props.options.saveImportUrl.multi);
      _this.props.options.saveImportUrl.multi.forEach(function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
          var file, response, error_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 4]);

                console.log(url);
                file = {};
                console.log(file);
                return [4
                /*yield*/
                , fetch(url)];

              case 1:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 2:
                file = _a.sent();

                if (file.hasOwnProperty('regions')) {
                  this.loadMultiRegions(file);
                  console.log('Load Region');
                }

                if (file.hasOwnProperty('points')) {
                  this.loadMultiPoints(file);
                  console.log('Load Point');
                }

                if (file.hasOwnProperty('links')) {
                  //console.log(file);
                  this.loadMultiLinks(file);
                  console.log('Load Links');
                }

                return [3
                /*break*/
                , 4];

              case 3:
                error_2 = _a.sent();
                console.error(error_2);
                return [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    };
    /**************************************INPUT******************************************/


    _this.onToggleTotalUrl = function (isOpen) {
      _this.setState({
        collapseTotalUrl: isOpen
      });
    };

    _this.onToggleMultiUrl = function (isOpen) {
      _this.setState({
        collapseMultiUrl: isOpen
      });
    };

    _this.onToggleMultiUpload = function (isOpen) {
      _this.setState({
        collapseMultiUpload: isOpen
      });
    }; // public onToggleMonoUrl = (isOpen: boolean): void => {
    // 	this.setState({
    // 		collapseMonoUrl: isOpen,
    // 	});
    // }
    // saveUrl = (url: string, mode: number) => {
    //   // if (mode === 0){
    //   //     this.props.options.saveImportUrl.mono.push(url);
    //   // }
    //   if (mode === 1) {
    //     this.props.options.saveImportUrl.multi.push(url);
    //   }
    //   if (mode === 2) {
    //     this.props.options.saveImportUrl.total.push(url);
    //   }
    // };


    _this.onTotalUrlChanged = function (event) {
      var newData = '';
      newData = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        totalUrlInput: newData
      }));
    };

    _this.onTotalListUrlChanged = function (event) {
      var newData = _this.props.options.saveImportUrl.total.slice();

      newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
      _this.props.options.saveImportUrl.total = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.onMultiUrlChanged = function (event) {
      var newData = '';
      newData = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        multiUrlInput: newData
      }));
    };

    _this.onMultiListUrlChanged = function (event) {
      var newData = _this.props.options.saveImportUrl.multi.slice();

      newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
      _this.props.options.saveImportUrl.multi = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // onMonoUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    // 	let newData: string = '';
    // 	newData = event.currentTarget.value;
    // 	this.props.onOptionsChange({ ...this.props.options, monoUrlInput: newData });
    // }
    // onMonoListUrlChanged = (event: {currentTarget: HTMLInputElement}) => {
    //     let newData: string[] = this.props.options.saveImportUrl.mono.slice();
    //     newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    //     this.props.options.saveImportUrl.mono = newData;
    //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    // }


    _this.addTotalUrlInput = function (onClick) {
      _this.props.options.saveImportUrl.total.push(_this.props.options.totalUrlInput);

      _this.props.options.totalUrlInput = '';

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.addMultiUrlInput = function (onClick) {
      _this.props.options.saveImportUrl.multi.push(_this.props.options.multiUrlInput);

      _this.props.options.multiUrlInput = '';

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // addMonoUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    //     this.props.options.saveImportUrl.mono.push(this.props.options.monoUrlInput);
    //     this.props.options.monoUrlInput = '';
    //     this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    // }


    _this.totalDeletUrl = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportUrl.total[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportUrl.total.splice(_this.props.options.saveImportUrl.total.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.multiDeletUrl = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportUrl.multi[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportUrl.multi.splice(_this.props.options.saveImportUrl.multi.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // monoDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
    //     const isUrl = (url: string) => url === this.props.options.saveImportUrl.mono[parseInt(onClick.currentTarget.id, 10)];
    //     this.props.options.saveImportUrl.mono.splice(this.props.options.saveImportUrl.mono.findIndex(isUrl), 1);
    //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
    // }


    _this.tempo = function () {
      console.log(_this.props.options.saveImportUrl);
    };

    _this.totalUrlDisplay = function (props) {
      if (props.list.total.lenght !== 0) {
        var list = props.list.total.map(function (url, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'TotalUrlDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'TotalUrl' + index.toString(),
            label: 'Url',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onTotalListUrlChanged.bind(_this),
            type: "string",
            value: url || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.totalDeletUrl.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };

    _this.multiUrlDisplay = function (props) {
      if (props.list.multi.lenght !== 0) {
        var list = props.list.multi.map(function (url, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'MultiUrlDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'MultiUrl' + index.toString(),
            label: 'Url',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onMultiListUrlChanged.bind(_this),
            type: "string",
            value: url || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.multiDeletUrl.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    }; // monoUrlDisplay = (props: any): JSX.Element => {
    // 	if (props.list.multi.lenght !== 0) {
    // 		const list = props.list.mono.map((url: string, index: number) =>
    // 			<div key={'MonoUrlDiv' + index.toString()}>
    //                 <FormField id={index.toString()} key={'MonoUrl' + index.toString()}
    // 					label={'Url'} labelWidth={5}
    // 					inputWidth={20} onChange={this.onMonoListUrlChanged.bind(this)} type='string' value={url || ''} />
    // 				<Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()}
    // 					onClick={this.monoDeletUrl.bind(this)}>Del</Button>
    // 			</div>
    // 		);
    // 		return (
    // 			<div>{list}</div>
    // 		);
    // 	}
    // 	return (<div>No targets avalaible</div>);
    // }


    _this.delAll = function () {
      // this.props.options.arrayCoordinateSpace = [];
      // this.props.options.arrayOrientedLinks = [];
      // this.props.options.arrayPoints = [];
      _this.props.options.saveImportUrl.total = [];
      _this.props.options.saveImportUrl.multi = []; // this.props.options.saveImportUrl.mono = [];

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.toDel = function () {
      console.log(_this.props.options.saveImportUrl.multi);
      console.log(_this.props.options.arrayPoints);
    };

    _this.state = {
      collapseTotalUrl: false,
      collapseMultiUrl: false,
      // collapseMonoUrl: false,
      collapseMultiUpload: true
    };
    return _this;
  }

  ImportInput.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTotalUrl,
      label: "Global Url Import",
      onToggle: this.onToggleTotalUrl
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Total Url",
      labelWidth: 8,
      key: 'TotalUrl',
      inputWidth: 20,
      onChange: this.onTotalUrlChanged.bind(this),
      type: "string",
      value: options.totalUrlInput || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.loaderTotal
    }, "Finish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.totalUrlDisplay, {
      list: options.saveImportUrl
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseMultiUrl,
      label: "Multi Url Import",
      onToggle: this.onToggleMultiUrl
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Multi Url",
      labelWidth: 8,
      key: 'MultiUrl',
      inputWidth: 20,
      onChange: this.onMultiUrlChanged.bind(this),
      type: "string",
      value: options.multiUrlInput || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'AddMultiUrl',
      onClick: this.addMultiUrlInput
    }, "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.fetchMulti
    }, "Finish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.multiUrlDisplay, {
      list: options.saveImportUrl
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseMultiUpload,
      label: "Multi Local Import",
      onToggle: this.onToggleMultiUpload
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Models_dropZone__WEBPACK_IMPORTED_MODULE_6__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'delAll',
      onClick: this.delAll
    }, "Del all urls")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.toDel
    }, "toDel"));
  };

  return ImportInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImportInput);

/***/ }),

/***/ "./components/legend.tsx":
/*!*******************************!*\
  !*** ./components/legend.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * def
 */

var LegendComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LegendComponent, _super);

  function LegendComponent(props) {
    var _this = _super.call(this, props) || this;
    /** async state */


    _this.setStateAsyncFinalHTML = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** fill lowerlimit in JSX.Element */


    _this.fillLowerLimit = function (lowerLimit) {
      var e_1, _a;

      var allLimit = [];
      var i = 0;
      var max = lowerLimit.length - 1;

      try {
        for (var lowerLimit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lowerLimit), lowerLimit_1_1 = lowerLimit_1.next(); !lowerLimit_1_1.done; lowerLimit_1_1 = lowerLimit_1.next()) {
          var lower = lowerLimit_1_1.value;
          allLimit.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "LegendMatt"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            style: {
              padding: '5px',
              margin: '10px',
              width: '130px',
              //width: '3.5rem',
              //borderRadius: '39%',
              backgroundColor: lower.backColor,
              border: lower.sizeBorder + 'px solid ' + lower.borderColor,
              listStyleType: 'none',
              display: 'inline-block',
              textAlign: 'center'
            }
          }, lowerLimit.length > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            style: {
              //display: 'inline-block',
              //verticalAlign: 'middle',
              //marginBottom: '1.25rem',
              fontSize: '10px'
            }
          }, i === 0 ? '-∞' : lower.lowerLimitMin, " - ", i === max ? '+∞' : lower.lowerLimitMax))));
          ++i;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (lowerLimit_1_1 && !lowerLimit_1_1.done && (_a = lowerLimit_1["return"])) _a.call(lowerLimit_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return allLimit;
    };
    /** get all lower limit for region */


    _this.fillRegion = function () {
      var e_2, _a;

      var allRegion = _this.props.options.regionCoordinateSpace;
      var rendu = [];

      try {
        for (var allRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allRegion), allRegion_1_1 = allRegion_1.next(); !allRegion_1_1.done; allRegion_1_1 = allRegion_1.next()) {
          var line = allRegion_1_1.value;

          var allLimit = _this.fillLowerLimit(line.lowerLimit);

          var ownElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, line.label, allLimit);
          rendu.push(ownElement);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (allRegion_1_1 && !allRegion_1_1.done && (_a = allRegion_1["return"])) _a.call(allRegion_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return rendu;
    };
    /** get all limit for point */


    _this.fillPoint = function () {
      var e_3, _a;

      var allPoint = _this.props.options.arrayPoints;
      var rendu = [];

      try {
        for (var allPoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allPoint), allPoint_1_1 = allPoint_1.next(); !allPoint_1_1.done; allPoint_1_1 = allPoint_1.next()) {
          var line = allPoint_1_1.value;

          var allLimit = _this.fillLowerLimit(line.lowerLimit);

          var name_1 = line.label || line.name;
          var ownElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, name_1, allLimit);
          rendu.push(ownElement);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (allPoint_1_1 && !allPoint_1_1.done && (_a = allPoint_1["return"])) _a.call(allPoint_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      return rendu;
    };
    /** get all limit for orientedLink */


    _this.fillLink = function () {
      var e_4, _a;

      var allLinks = _this.props.options.arrayOrientedLinks;
      var rendu = [];

      try {
        for (var allLinks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allLinks), allLinks_1_1 = allLinks_1.next(); !allLinks_1_1.done; allLinks_1_1 = allLinks_1.next()) {
          var line = allLinks_1_1.value;

          var allLimit = _this.fillLowerLimit(line.lowerLimit);

          var name_2 = line.label || line.name;
          var ownElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, name_2, allLimit);
          rendu.push(ownElement);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (allLinks_1_1 && !allLinks_1_1.done && (_a = allLinks_1["return"])) _a.call(allLinks_1);
        } finally {
          if (e_4) throw e_4.error;
        }
      }

      return rendu;
    };
    /** generate legend */


    _this.renduState = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var value;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  position: 'relative',
                  left: this.state.legend.x,
                  top: this.state.legend.y,
                  maxWidth: '100%',
                  zIndex: 'auto'
                },
                hidden: this.state.legend.hiddenLegend
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
                style: {
                  width: '170px',
                  position: 'absolute',
                  overflowY: 'scroll',
                  margin: '0',
                  height: '220px',
                  backgroundColor: '#FFF',
                  color: '#000',
                  border: '4px solid #299c46',
                  borderRadius: '4px',
                  scrollbarColor: '#09090b #212124',
                  scrollbarWidth: 'none',
                  zIndex: 9999
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
                style: {
                  width: '100%',
                  fontSize: '20px',
                  display: 'inline-flex',
                  padding: '10px'
                }
              }, "Legend")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                style: {
                  fontSize: '15px',
                  padding: '10px 0 10px 14px',
                  fontWeight: 'bold',
                  color: 'white'
                }
              }, "Region")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                key: "regionLegend",
                style: {
                  paddingLeft: '5px'
                }
              }, this.fillRegion()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                style: {
                  fontSize: '15px',
                  padding: '10px 0 10px 14px',
                  fontWeight: 'bold',
                  color: 'white'
                }
              }, "Point")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                key: "pointLegend",
                style: {
                  paddingLeft: '5px'
                }
              }, this.fillPoint()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                style: {
                  fontSize: '15px',
                  padding: '10px 0 10px 14px',
                  fontWeight: 'bold',
                  color: 'white'
                }
              }, "Oriented Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                key: "pointLegend",
                style: {
                  paddingLeft: '5px'
                }
              }, this.fillLink())));
              return [4
              /*yield*/
              , this.setStateAsyncFinalHTML({
                finalHTML: value
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.setStateLegendAsync = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update when legend is edited */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps !== this.props || prevState.legend.hiddenLegend !== this.props.options.legend.hiddenLegend)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.setStateLegendAsync({
                legend: this.props.options.legend
              })];

            case 1:
              _a.sent();

              this.renduState();
              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** fill state value when component is mounted */


    _this.componentDidMount = function () {
      _this.renduState();
    };

    _this.state = {
      finalHTML: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      legend: _this.props.options.legend
    };
    return _this;
  }
  /**
   * result
   */


  LegendComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.finalHTML);
  };

  return LegendComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LegendComponent);

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var SimplePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SimplePanel */ "./SimplePanel.tsx");
/* harmony import */ var SimpleEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SimpleEditor */ "./SimpleEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](SimplePanel__WEBPACK_IMPORTED_MODULE_2__["SimplePanel"]).setDefaults(_types__WEBPACK_IMPORTED_MODULE_1__["defaults"]).setEditor(SimpleEditor__WEBPACK_IMPORTED_MODULE_3__["SimpleEditor"]);

/***/ }),

/***/ "./style/CoordinateSpace.css":
/*!***********************************!*\
  !*** ./style/CoordinateSpace.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./CoordinateSpace.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./style/SimpleEditor.css":
/*!********************************!*\
  !*** ./style/SimpleEditor.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./SimpleEditor.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {
  legend: {
    hiddenLegend: true,
    x: 0,
    y: 0
  },
  baseMap: {
    image: '',
    layerImage: '',
    modeSVG: true,
    width: '',
    height: '',
    idSVG: ''
  },
  // imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
  coordinateSpaceInitial: {
    coordinate: {
      xMin: '-100',
      xMax: '100',
      yMin: '-100',
      yMax: '100'
    },
    displayArea: true
  },
  displayButton: false,
  regionCoordinateSpace: [],
  arrayPoints: [],
  arrayLinks: [],
  arrayOrientedLinks: [],
  display: {
    police: 'Helvetica',
    size: '1em',
    style: {
      italic: false,
      bold: false,
      underline: false
    }
  },
  fondIsActive: true,
  contourIsActive: true,
  lowerLimit: [],
  colorMode: true,
  contentJson: 'contenu du dashboard',
  Id: 0,
  uid: '',
  title: '',
  style: '',
  editable: '',
  version: 0,
  refresh: {
    value: '0',
    label: '0'
  },
  shemaVersion: 0,
  timezone: '',
  actualPanel: {
    value: '0',
    label: '0'
  },
  panelList: [{
    value: '0',
    label: '0'
  }],
  panelId: 0,
  panelType: '',
  panelTargets: [],
  promTargets: [],
  promGlobalTargets: [],
  Json: {},
  timeRange: {
    from: '2020-01-02 00:00:00',
    to: '2020-01-02 00:00:00'
  },
  personalTarget: {
    expr: ''
  },
  timeQuery: '2020-01-02 00:00:00',
  promUrl: 'http://localhost:9090/api/v1/',
  queryProm: [],
  queryPromGlobal: [],
  queryPromRange: [],
  listStep: [{
    value: '0',
    label: '0'
  }],
  jsonQueryReturn: [],
  jsonGlobalQueryReturn: [],
  mainTarget: {
    expr: ''
  },
  mainQueryProm: '',
  mainQueryReturn: {
    status: '',
    data: {
      resultType: '',
      result: [{
        metric: {
          __name__: '',
          job: ''
        },
        value: []
      }]
    }
  },
  testMainQueryReturn: {},
  coordinatesToDrawLinkWithClick: [{
    id: 0
  }, {
    x: 0,
    y: 0,
    labelPoint: '',
    point: {},
    labelRegion: '',
    region: {}
  }, {
    x: 0,
    y: 0,
    labelPoint: '',
    point: {},
    labelRegion: '',
    region: {}
  }, {
    x: 0,
    y: 0,
    labelPoint: '',
    point: {},
    labelRegion: '',
    region: {}
  }],
  indexOrientedLink: 0,
  indexPoint: 0,
  indexRegion: 0,
  listCollapsePoint: [],
  listCollapseOrientedLink: [],
  saveImportUrl: {
    total: [],
    multi: [],
    mono: []
  },
  saveImportFile: [],
  totalUrlInput: '',
  multiUrlInput: '',
  monoUrlInput: '',
  zIndexOrientedLink: 1,
  orientedLinkToUpgrade: {},
  orientedLinkToDowngrade: {},
  checkIndexMultiLink: 0,
  newPoint: true,
  newOrientedLink: true
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map