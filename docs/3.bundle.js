webpackJsonp([3],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_65281288_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_grid_vue__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_65281288_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_65281288_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(10);
function injectStyle (context) {
  __webpack_require__(422)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65281288"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_grid_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_65281288_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_grid_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_65281288_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_grid_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'FakeContent',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100px'
        }
    }
};

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document) {
				return document.currentScript;
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {boolean} [oneshot=false]
 * @param {string} [target]
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (target && target == token + ',' + j) {
				return;
			}

			var pattern = patterns[j],
				inside = pattern.inside,
				lookbehind = !!pattern.lookbehind,
				greedy = !!pattern.greedy,
				lookbehindLength = 0,
				alias = pattern.alias;

			if (greedy && !pattern.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
				pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
			}

			pattern = pattern.pattern || pattern;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy));
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					if (oneshot) {
						break;
					}

					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					match = match[0].slice(lookbehindLength),
					to = from + match.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}


				if (removeCount > 1)
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);

				if (oneshot)
					break;
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 */

/**
 * @template T
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
		greedy: true
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				}
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});
	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_a7e32ff0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_fake_content_vue__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_a7e32ff0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_fake_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_a7e32ff0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_fake_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(10);
function injectStyle (context) {
  __webpack_require__(390)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_fake_content_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_a7e32ff0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_fake_content_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_a7e32ff0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_fake_content_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(174).default
var update = add("80dc1f8c", content, true, {});

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(173)(false);
// imports


// module
exports.push([module.i, ".fake-content{position:relative;background-color:rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.1);border-radius:3px;margin-bottom:10px}.fake-content:after{content:\"\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:35px;height:10px;background:#ccc}", ""]);

// exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "fake-content", style: { width: _vm.width, height: _vm.height } });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fakeContent = __webpack_require__(389);

var _fakeContent2 = _interopRequireDefault(_fakeContent);

var _prismjs = __webpack_require__(388);

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { FakeContent: _fakeContent2.default },
    data: function data() {
        return {
            code1: '\n                <template>\n                    <lay-row>\n                        <lay-col :span="12"><div class="grid-content">\u5185\u5BB9</div></lay-col>\n                        <lay-col :span="12"><div class="grid-content">\u5185\u5BB9</div></lay-col>\n                    </lay-row>\n                </template>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    lay-col\u7EC4\u4EF6\u7684span\u5C5E\u6027: \u7C7B\u578BNumber; (\u9ED8\u8BA4\u503C: 24) 0~24\n                       \u6BCF\u4E2A\u5B50\u9879\u76EE\u5BBD\u5EA6\u6240\u5360\u7684\u767E\u5206\u6BD4: 1 / 24 * span * 100%\n            ',
            code2: '\n                <lay-row :gutter="20">\n                    <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>\n                    <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>\n                    <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>\n                    <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>\n                </lay-row>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    lay-row\u7EC4\u4EF6\u7684gutter\u5C5E\u6027: \u7C7B\u578BNumber; (\u9ED8\u8BA4\u503C: 0) \u5355\u4F4Dpx\n                       \u6BCF\u4E2A\u5B50\u9879\u76EE\u4F1A\u6DFB\u52A0padding-left = padding-right = (gutter/2)px,\n                       \u7236\u5BB9\u5668\u4F1A\u6DFB\u52A0margin-left = margin-right = -(gutter/2)px\n            ',
            code3: '\n                <lay-row :gutter="20">\n                    <lay-col :span="4">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4" :offset="1">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4" :push="1">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4" :offset="2" :pull="1">\u5185\u5BB9</lay-col>\n                </lay-row>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    lay-col\u7EC4\u4EF6\u7684offset\u5C5E\u6027: \u7C7B\u578BNumber; 0~24\n                       \u7ED9\u5143\u7D20\u6DFB\u52A0margin-left\u503C,\u4F7F\u5176\u5411\u53F3\u504F\u79FB\n                    \n                    lay-col\u7EC4\u4EF6\u7684push\u5C5E\u6027: \u7C7B\u578BNumber; 0~24\n                       \u7ED9\u5143\u7D20\u6DFB\u52A0position: relative\u548Cleft:\u503C,\u4F7F\u5176\u5411\u53F3\u504F\u79FB\n\n                    lay-col\u7EC4\u4EF6\u7684pull\u5C5E\u6027: \u7C7B\u578BNumber; 0~24\n                       \u7ED9\u5143\u7D20\u6DFB\u52A0position: relative\u548Cright:\u503C,\u4F7F\u5176\u5411\u5DE6\u504F\u79FB\n            ',
            code4: '\n                <lay-row type="flex" justify="center" align="center">\n                    <lay-col :span="4">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4">\u5185\u5BB9</lay-col>\n                    <lay-col :span="4">\u5185\u5BB9</lay-col>\n                </lay-row>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    lay-row\u7EC4\u4EF6\u7684type\u5C5E\u6027: \u7C7B\u578BString (\u9ED8\u8BA4\u503C: \'\')\n                       type\u7684\u503C\u4E3Aflex\u65F6\u5F00\u542Fflex\u5E03\u5C40\n                    \n                    lay-row\u7EC4\u4EF6\u7684justify\u5C5E\u6027: \u7C7B\u578BString (\u9ED8\u8BA4\u503C: start)\n                       start: \u76F8\u5F53\u4E8E justify-content: flex-start;\n                       end: \u76F8\u5F53\u4E8E justify-content: flex-end;\n                       center: \u76F8\u5F53\u4E8E justify-content: center;\n                       space-around: \u76F8\u5F53\u4E8E justify-content: space-around;\n                       space-between: \u76F8\u5F53\u4E8E justify-content: space-between;\n                       space-evenly: \u76F8\u5F53\u4E8E justify-content: space-evenly;\n\n                    lay-row\u7EC4\u4EF6\u7684align\u5C5E\u6027: \u7C7B\u578BString (\u9ED8\u8BA4\u503C: top)\n                       top: \u76F8\u5F53\u4E8E align-items: flex-start;\n                       middle: \u76F8\u5F53\u4E8E align-items: center;\n                       bottom: \u76F8\u5F53\u4E8E align-items: flex-end;\n            ',
            code5: '\n                <lay-row :gutter="10">\n                    <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</lay-col>\n                    <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</lay-col>\n                    <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</lay-col>\n                    <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</lay-col>\n                </lay-row>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    xs\u5C5E\u6027: \u7C7B\u578B[Number, Object]\n                        @media only screen and (max-width: 767px)\n\n                    sm\u5C5E\u6027: \u7C7B\u578B[Number, Object]\n                        @media only screen and (min-width: 768px)\n\n                    md\u5C5E\u6027: \u7C7B\u578B[Number, Object]\n                        @media only screen and (min-width: 992px)\n\n                    lg\u5C5E\u6027: \u7C7B\u578B[Number, Object]\n                        @media only screen and (min-width: 1200px)\n\n                    xl\u5C5E\u6027: \u7C7B\u578B[Number, Object]\n                        @media only screen and (min-width: 1920px)\n                    \n            ',
            code6: '\n                props: {\n                    type: String, // flex \u5F00\u542F\u5F39\u6027\u5E03\u5C40\n                    gutter: { // \u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\n                        type: Number,\n                        default: 0\n                    },\n                    justify: { // flex\u5BB9\u5668\u7684justify-content\u5C5E\u6027\n                        type: String,\n                        default: \'start\' // start/end/center/space-around/space-between/space-evenly\n                    },\n                    align: { // flex\u5BB9\u5668\u7684align-items\u5C5E\u6027\n                        type: String,\n                        default: \'top\' // top/middle/bottom\n                    },\n                    tag: { // \u81EA\u5B9A\u4E49\u6807\u7B7E\n                        type: String,\n                        default: \'div\'\n                    }\n                }\n            ',
            code7: '\n                props: {\n                    span: { // \u9879\u76EE\u5BBD\u5EA6\u7684\u5360\u6BD4\n                        type: Number,\n                        default: 24\n                    },\n                    push: Number, // \u5411\u53F3\u504F\u79FB\n                    pull: Number, // \u5411\u5DE6\u504F\u79FB\n                    offset: Number, // \u5411\u53F3\u504F\u79FB\n                    xs: [Number, Object],\n                    sm: [Number, Object],\n                    md: [Number, Object],\n                    lg: [Number, Object],\n                    xl: [Number, Object],\n                    tag: { // \u81EA\u5B9A\u4E49\u6807\u7B7E\n                        type: String,\n                        default: \'div\'\n                    }\n                }\n            '
        };
    },

    methods: {
        getCode: function getCode(code) {
            return _prismjs2.default.highlight(code, _prismjs2.default.languages.javascript, 'javascript');
        }
    }
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(174).default
var update = add("bc4f6310", content, true, {});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(173)(false);
// imports


// module
exports.push([module.i, ".grid-content[data-v-65281288]{height:36px;border:1px solid #ccc;text-align:center;line-height:36px;overflow:hidden}.row-bg[data-v-65281288]{padding:10px 0;background-color:#f9fafc}h3[data-v-65281288]{margin-top:50px}.red-text[data-v-65281288]{color:red}.ul-style[data-v-65281288]{padding-left:50px;list-style:circle}.ul-style li[data-v-65281288]{margin-bottom:15px}.li--hidden[data-v-65281288]{visibility:hidden;margin:0!important}", ""]);

// exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "test-grid" }, [_c('h1', [_vm._v("栅格布局, lay-row组件为容器,lay-col为容器的项目")]), _vm._v(" "), _c('h3', [_vm._v("1.给lay-col组件设置span来给项目分配宽度")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code1)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("Ⅰ. span默认24 占比100%")]), _vm._v(" "), _c('lay-row', [_c('lay-col', [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"24\" 100%")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅱ. 2列")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "span": 12 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"12\" 50%")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 12 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"12\" 50%")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅲ. 4列")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" 25%")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" 25%")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" 25%")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" 25%")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅳ. 6列")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])])], 1), _vm._v(" "), _c('h3', [_vm._v("2.给lay-row组件设置gutter属性,使子项目之间存在间隔")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code2)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("Ⅰ. 子项目之间20px的间隔")]), _vm._v(" "), _c('lay-row', { attrs: { "gutter": 20 } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _c('h3', [_vm._v("3.给lay-col组件设置offset,pull,push使子项目偏移")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code3)) } }), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("Ⅰ. 给lay-col组件设置offset值为6,表示向右偏移百分之1/24*6*100 (原理:给类lay-col的tag元素添加 margin-left: 1/24*6*100%)")]), _vm._v(" "), _c('lay-row', { attrs: { "gutter": 20 } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6, "offset": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" :offset=\"6\"")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅱ. 给lay-col组件设置push值为6,表示向右偏移百分之1/24*5*100 (原理:给类lay-col的tag元素添加 position: relative; left: 1/24*5*100%)")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "span": 12, "push": 5 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"12\" :push=\"5\"")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅲ. 给lay-col组件设置pull值为1,表示向左偏移百分之1/24*1*100 (原理:给类lay-col的tag元素添加 position: relative; right: 1/24*1*100%)")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "span": 4 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"4\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6, "offset": 4, "pull": 1 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\" :offset=\"4\" :pull=\"1\"")])])], 1), _vm._v(" "), _c('h3', [_vm._v("4.给lay-row组件设置type justify align属性,开启flex布局")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code4)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "start", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "end", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "center", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "space-around", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "space-between", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "space-evenly", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "center", "align": "top" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "center", "align": "middle" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('lay-row', { staticStyle: { "height": "100px", "border": "1px solid #ccc" }, attrs: { "type": "flex", "justify": "center", "align": "bottom" } }, [_c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "span": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v(":span=\"6\"")])])], 1), _vm._v(" "), _c('h3', [_vm._v("5.使用预设预五个响应尺寸：xs、sm、md、lg 和 xl,进行响应式布局")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code5)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("Ⅰ. xs、sm、md、lg、xl可以是Number或者Object")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('lay-row', { attrs: { "gutter": 10 } }, [_c('lay-col', { attrs: { "xs": 8, "sm": 6, "md": 4, "lg": 3, "xl": 1 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("1")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": 4, "sm": 6, "md": 8, "lg": 9, "xl": 11 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("2")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": 4, "sm": 6, "md": 8, "lg": 9, "xl": 11 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("3")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": 8, "sm": 6, "md": 4, "lg": 3, "xl": 1 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("4")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅱ. 在不同的屏幕尺寸下隐藏类")]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('lay-row', { attrs: { "gutter": 10 } }, [_c('lay-col', { attrs: { "xs": 24, "sm": 12, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("1")])]), _vm._v(" "), _c('lay-col', { staticClass: "hidden-sm-only", attrs: { "xs": 24, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("class=\"hidden-sm-only\"")])]), _vm._v(" "), _c('lay-col', { staticClass: "hidden-sm-only hidden-md-only", attrs: { "xs": 24, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("class=\"hidden-sm-only hidden-md-only\"")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": 24, "sm": 12, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("4")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅲ. 使用对象的形式 对象的key有span pull push offset这4个属性")]), _vm._v(" "), _c('lay-row', { attrs: { "gutter": 10 } }, [_c('lay-col', { attrs: { "xs": { span: 24 }, "sm": { span: 12 }, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("1")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": { span: 24 }, "sm": { span: 12 }, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("2")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": { span: 24 }, "sm": { span: 12 }, "md": 8, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("3")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": { span: 24 }, "sm": { span: 12 }, "md": 24, "lg": 6 } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("4")])])], 1), _vm._v(" "), _c('p', [_vm._v("Ⅳ. span pull push offset 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs=\"6\" 相当于 :xs=\"{ span: 6 }\"。")]), _vm._v(" "), _c('lay-row', [_c('lay-col', { attrs: { "xs": { span: 5, offset: 1 }, "lg": { span: 6, offset: 2 } } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("1")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": { span: 11, offset: 1 }, "lg": { span: 6, offset: 2 } } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("2")])]), _vm._v(" "), _c('lay-col', { attrs: { "xs": { span: 5, offset: 1 }, "lg": { span: 6, offset: 2 } } }, [_c('div', { staticClass: "grid-content" }, [_vm._v("3")])])], 1), _vm._v(" "), _c('h3', [_vm._v("lay-row 组件所有属性")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code6)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('h3', [_vm._v("lay-col 组件所有属性")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code7)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅰ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"start\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅱ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"end\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅲ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"center\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅳ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"space-around\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅴ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"space-between\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅵ. type=\"flex\" "), _c('span', { staticClass: "red-text" }, [_vm._v("justify=\"space-evenly\"")]), _vm._v(" align=\"middle\"")]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅶ. type=\"flex\" justify=\"center\" "), _c('span', { staticClass: "red-text" }, [_vm._v("align=\"top\"")])]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅷ. type=\"flex\" justify=\"center\" "), _c('span', { staticClass: "red-text" }, [_vm._v("align=\"middle\"")])]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("Ⅸ. type=\"flex\" justify=\"center\" "), _c('span', { staticClass: "red-text" }, [_vm._v("align=\"bottom\"")])]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ul-style" }, [_c('li', [_vm._v("xs: @media only screen and (max-width: 767px)")]), _vm._v(" "), _c('li', [_vm._v("sm: @media only screen and (min-width: 768px)")]), _vm._v(" "), _c('li', [_vm._v("md: @media only screen and (min-width: 992px)")]), _vm._v(" "), _c('li', [_vm._v("lg: @media only screen and (min-width: 1200px)")]), _vm._v(" "), _c('li', [_vm._v("xl: @media only screen and (min-width: 1920px)")])]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ul-style" }, [_c('li', [_vm._v("hidden-xs-only - 当视口在 xs 尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (max-width: 767px)")])]), _vm._v(" "), _c('li', { staticClass: "li--hidden" }), _vm._v(" "), _c('li', [_vm._v("hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 768px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-sm-only - 当视口在 sm 尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 768px) and (max-width: 991px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (max-width: 991px)")])]), _vm._v(" "), _c('li', { staticClass: "li--hidden" }), _vm._v(" "), _c('li', [_vm._v("hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 992px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-md-only - 当视口在 md 尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 992px) and (max-width: 1199px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (max-width: 1199px)")])]), _vm._v(" "), _c('li', { staticClass: "li--hidden" }), _vm._v(" "), _c('li', [_vm._v("hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 1200px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-lg-only - 当视口在 lg 尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 1200px) and (max-width: 1919px)")])]), _vm._v(" "), _c('li', [_vm._v("hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (max-width: 1919px)")])]), _vm._v(" "), _c('li', { staticClass: "li--hidden" }), _vm._v(" "), _c('li', [_vm._v("hidden-xl-only - 当视口在 xl 尺寸时隐藏 "), _c('span', { staticClass: "red-text" }, [_vm._v("@media only screen and (min-width: 1920px)")])])]);
}];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })

});