webpackJsonp([0],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_629543c6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_two_columns_vue__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_629543c6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_two_columns_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_629543c6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_two_columns_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(10);
function injectStyle (context) {
  __webpack_require__(416)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_two_columns_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_629543c6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_two_columns_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_629543c6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_two_columns_vue__["staticRenderFns"],
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prismjs = __webpack_require__(388);

var _prismjs2 = _interopRequireDefault(_prismjs);

var _fakeContent = __webpack_require__(389);

var _fakeContent2 = _interopRequireDefault(_fakeContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { FakeContent: _fakeContent2.default },
    data: function data() {
        return {
            leftStyle: {
                border: '1px solid red',
                'box-sizing': 'border-box'
            },
            rightStyle: {
                border: '1px solid green',
                'box-sizing': 'border-box'
            },
            code1: '\n                <lay-two-columns fix="left" width="200px">\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                fix\u5C5E\u6027: \u7C7B\u578BString left/right; (\u9ED8\u8BA4\u503C: left)\n                    left\u8868\u793A\u5DE6\u5217\u4E3A\u5B9A\u5BBD,\u53F3\u5217\u81EA\u9002\u5E94\n                    right\u8868\u793A\u53F3\u5217\u4E3A\u5B9A\u5BBD,\u5DE6\u5217\u81EA\u9002\u5E94\n\n                width\u5C5E\u6027: \u7C7B\u578BString 200px;  (\u9ED8\u8BA4\u503C: 0px)\n                    \u5F53fix="left"\u65F6\u8868\u793A\u5DE6\u5217\u5B9A\u5BBD200px,\n                    \u5F53fix="right"\u65F6\u8868\u793A\u53F3\u5217\u5B9A\u5BBD200px\n            ',

            code2: '\n                <lay-two-columns fix="left" width="200%" height="500px">\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                height\u5C5E\u6027: \u7C7B\u578BString auto; (\u9ED8\u8BA4\u503C: auto)\n                    \u5DE6\u5217\u548C\u53F3\u5217\u5BB9\u5668\u7684\u9AD8\u5EA6\n            ',

            code3: '\n                <lay-two-columns \n                    fix="left" \n                    width="25%" \n                    height="500px" \n                    nativeScrollbar\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                nativeScrollbar\u5C5E\u6027: \u7C7B\u578BBoolean false; (\u9ED8\u8BA4\u503C: false)\n                    \u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\n            ',

            code4: '\n                <lay-two-columns \n                    fix="left" \n                    width="10rem" \n                    height="500px" \n                    nativeScrollbar\n                    overflow="hidden"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                overflow\u5C5E\u6027: \u7C7B\u578BString auto/visible/hidden/scroll/inherit; \n                    \u8BE5\u5C5E\u6027\u4F1A\u4F5C\u7528\u5728\u5DE6\u5217\u548C\u53F3\u5217\u5BB9\u5668\u4E0A(\u9ED8\u8BA4\u503C: auto)\n            ',

            code5: '\n                <lay-two-columns \n                    fix="right" \n                    width="10em"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                fix\u5C5E\u6027: \u7C7B\u578BString left/right; (\u9ED8\u8BA4\u503C: left)\n                    left\u8868\u793A\u5DE6\u5217\u4E3A\u5B9A\u5BBD,\u53F3\u5217\u81EA\u9002\u5E94\n                    right\u8868\u793A\u53F3\u5217\u4E3A\u5B9A\u5BBD,\u5DE6\u5217\u81EA\u9002\u5E94\n            ',

            code6: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n            ',

            code7: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                    nativeScrollbar\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n            ',

            code8: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                    nativeScrollbar\n                    overflow="hidden"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n            ',

            code9: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                    nativeScrollbar\n                    :leftStyle="leftStyle" \n                    :rightStyle="rightStyle"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                leftStyle\u5C5E\u6027: \u7C7B\u578B[Object, Array]; (\u9ED8\u8BA4\u503C: {})\n                    \u8BE5\u5C5E\u6027\u4F1A\u4F5C\u7528\u5728\u5DE6\u5217\u5BB9\u5668\u4E0A\n\n                rightStyle\u5C5E\u6027: \u7C7B\u578B[Object, Array]; (\u9ED8\u8BA4\u503C: {})\n                    \u8BE5\u5C5E\u6027\u4F1A\u4F5C\u7528\u5728\u53F3\u5217\u5BB9\u5668\u4E0A\n            ',

            code10: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                    nativeScrollbar\n                    leftClass="left-class" \n                    rightClass="right-class"\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n\n                leftClass\u5C5E\u6027: \u7C7B\u578B[String, Object, Array]; (\u9ED8\u8BA4\u503C: \'\')\n                    \u8BE5\u5C5E\u6027\u4F1A\u4F5C\u7528\u5728\u5DE6\u5217\u5BB9\u5668\u4E0A\n\n                rightClass\u5C5E\u6027: \u7C7B\u578B[String, Object, Array]; (\u9ED8\u8BA4\u503C: \'\')\n                    \u8BE5\u5C5E\u6027\u4F1A\u4F5C\u7528\u5728\u53F3\u5217\u5BB9\u5668\u4E0A\n            ',

            code11: '\n                <lay-two-columns \n                    fix="right" \n                    width="200px"\n                    height="500px"\n                    nativeScrollbar\n                    leftClass="left-class" \n                    rightClass="right-class"\n                    autoshow\n                >\n                    <template v-slot:left>\n                        ...\n                    </template>\n                    <template v-slot:right>\n                        ...\n                    </template>\n                </lay-two-columns>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    autoshow\u5C5E\u6027: \u7C7B\u578BBoolean; (\u9ED8\u8BA4\u503C: false)\n                        \u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761\u662F\u5426\u81EA\u52A8\u663E\u793A\n                        \n            ',

            code12: '\n                props: {\n                    fix: { // \u5DE6\u8FB9\u5B9A\u5BBD/\u53F3\u8FB9\u5B9A\u5BBD\n                        type: String,\n                        default: \'left\' // left/right\n                    },\n                    nativeScrollbar: { // \u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\n                        type: Boolean,\n                        default: false\n                    },\n                    autoshow: { // \u6EDA\u52A8\u6761\u662F\u5426\u81EA\u52A8\u663E\u793A\n                        type: Boolean,\n                        default: false\n                    },\n                    width: { // left/right\u5BB9\u5668\u7684\u5BBD\u5EA6\n                        type: String,\n                        default: \'0px\'\n                    },\n                    height: { // left\u548Cright\u5BB9\u5668\u7684\u9AD8\u5EA6\n                        type: String,\n                        default: \'auto\'\n                    },\n                    overflow: { // left\u548Cright\u5BB9\u5668\u7684\u6EDA\u52A8\u6761\u662F\u5426\u51FA\u73B0\n                        type: String,\n                        default: \'auto\'\n                    },\n                    leftStyle: { // left\u5BB9\u5668style\u6837\u5F0F\n                        type: [Object, Array],\n                        default: () => {}\n                    },\n                    leftClass: { // left\u5BB9\u5668class\u6837\u5F0F\u7C7B\n                        type: [String, Object, Array],\n                        default: \'\'\n                    },\n                    rightStyle: { // right\u5BB9\u5668style\u6837\u5F0F\n                        type: [Object, Array],\n                        default: () => {}\n                    },\n                    rightClass: { // right\u5BB9\u5668class\u6837\u5F0F\u7C7B\n                        type: [String, Object, Array],\n                        default: \'\'\n                    }\n                }\n            '
        };
    },

    methods: {
        getCode: function getCode(code) {
            return _prismjs2.default.highlight(code, _prismjs2.default.languages.javascript, 'javascript');
        }
    }
};

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(174).default
var update = add("18c3e8dc", content, true, {});

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(173)(false);
// imports


// module
exports.push([module.i, ".test-box{margin-bottom:30px;border:1px solid #dcdfe6}.right-content{padding-left:10px}.left-class,.right-class{padding:10px;box-sizing:border-box}", ""]);

// exports


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "test-two-columns" }, [_c('h1', [_vm._v("左列固定,右列自适应")]), _vm._v(" "), _c('h3', [_vm._v("1.只指定width属性,左列和右列的高度由子内容撑开")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code1)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "left", "width": "200px" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(5, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(4, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("2.给定height属性,内容超出自动出现滚动条(默认使用自定义滚动条)")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code2)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "left", "width": "25%", "height": "500px" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content", staticStyle: { "width": "650px" } }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("3.使用nativeScrollbar属性,内容超出自动出现滚动条(原生滚动条)")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code3)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "nativeScrollbar": "", "fix": "left", "width": "25%", "height": "500px" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content", staticStyle: { "width": "650px" } }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("4.使用overflow属性值为hidden时,内容超出自动隐藏")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code4)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "left", "width": "10rem", "height": "500px", "overflow": "hidden" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h1', [_vm._v("右列固定,左列自适应")]), _vm._v(" "), _c('h3', [_vm._v("5.指定fix属性,开启左列固定还是右列固定")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code5)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "10em" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(5, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(4, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("6.给定高度,内容超出自动出现滚动条(默认使用自定义滚动条)")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code6)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "200px", "height": "500px" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(5, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(4, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("7.使用nativeScrollbar属性,内容超出自动出现滚动条(原生滚动条)")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code7)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "nativeScrollbar": "", "width": "200px", "height": "500px" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("8.使用overflow属性值为hidden时,内容超出自动隐藏")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code8)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "200px", "height": "500px", "overflow": "hidden" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("9.使用leftStyle和rightStyle属性给左列容器和右列容器添加样式")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code9)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "200px", "height": "500px", "leftStyle": _vm.leftStyle, "rightStyle": _vm.rightStyle }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("10.使用leftClass和rightClass属性给左列容器和右列容器添加css类名")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code10)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "200px", "height": "500px", "leftClass": "left-class", "rightClass": "right-class" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('h3', [_vm._v("11.自定义滚动条是否自动显示")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code11)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-two-columns', { staticClass: "test-box", attrs: { "fix": "right", "width": "200px", "height": "500px", "leftClass": "left-class", "rightClass": "right-class", "autoshow": "" }, scopedSlots: _vm._u([{ key: "left", fn: function fn() {
        return _vm._l(10, function (num) {
          return _c('fake-content', { key: num }, [_vm._v(_vm._s(num))]);
        });
      }, proxy: true }, { key: "right", fn: function fn() {
        return [_c('div', { staticClass: "right-content" }, _vm._l(20, function (num) {
          return _c('fake-content', { key: num, attrs: { "height": "200px" } }, [_vm._v(_vm._s(num))]);
        }), 1)];
      }, proxy: true }]) }), _vm._v(" "), _c('p', [_vm._v("lay-two-columns 所有属性")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code12)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")])], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })

});