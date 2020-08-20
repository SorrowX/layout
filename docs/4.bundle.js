webpackJsonp([4],{

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7eb7c949_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7eb7c949_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7eb7c949_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
function injectStyle (context) {
  __webpack_require__(440)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eb7c949"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_collapse_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7eb7c949_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_7eb7c949_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_collapse_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 399:
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prismjs = __webpack_require__(399);

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            activeNames: ['1'],
            activeNames1: '1',
            activeNames2: ['1'],
            activeNames3: ['1'],

            isCollapse: false,

            code1: '\n                <template>\n                    <lay-collapse v-model="activeNames">\n                        <lay-collapse-item title="\u6807\u98981" name="uid1">\n                            ...\n                        </lay-collapse-item>\n                        <lay-collapse-item title="\u6807\u98981" name="uid2">\n                            ...\n                        </lay-collapse-item>\n                    </lay-collapse>\n                </template>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    value / v-model\u5C5E\u6027: \u7C7B\u578B[Number, String, Array];  (\u9ED8\u8BA4\u503C: [])\n                        \u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray)\n            ',

            code2: '\n                <template>\n                    <lay-collapse v-model="activeNames" accordion @change="handlerChange">\n                        <lay-collapse-item title="\u6807\u98981" name="uid1">\n                            ...\n                        </lay-collapse-item>\n                        <lay-collapse-item title="\u6807\u98981" name="uid2">\n                            ...\n                        </lay-collapse-item>\n                    </lay-collapse>\n                </template>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    accordion\u5C5E\u6027: \u7C7B\u578B[Boolean];  (\u9ED8\u8BA4\u503C: false)\n                        \u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F\n                    \u81EA\u5B9A\u4E49change\u4E8B\u4EF6\u540D: \u53C2\u6570(curName, names) \n                        curName: \u7C7B\u578B[Number, String] \u5F53\u524D\u70B9\u51FBlay-collapse-item\u7EC4\u4EF6\u7684name\u540D\n                        names: \u7C7B\u578B[Array] \u6240\u6709\u6FC0\u6D3B\u7684lay-collapse-item\u7EC4\u4EF6name\u7684\u96C6\u5408\n            ',

            code3: '\n                <template>\n                    <lay-collapse v-model="activeNames2" @change="handlerChange">\n                        <lay-collapse-item title="\u6807\u98981" name="uid1">\n                            ...\n                        </lay-collapse-item>\n                        <lay-collapse-item title="\u6807\u98981" name="uid2" disabled>\n                            ...\n                        </lay-collapse-item>\n                    </lay-collapse>\n                </template>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    disabled\u5C5E\u6027: \u7C7B\u578B[Boolean];  (\u9ED8\u8BA4\u503C: false)\n                        \u662F\u5426\u7981\u6B62\u70B9\u51FB\n                    name\u5C5E\u6027: \u7C7B\u578B[Number, String];  (\u9ED8\u8BA4\u503C:  \u81EA\u52A8\u751F\u6210\u7684uid\u552F\u4E00\u6807\u8BC6)\n                        \u552F\u4E00\u6807\u8BC6\n                    title\u5C5E\u6027: \u7C7B\u578B[Boolean];  (\u9ED8\u8BA4\u503C: \'\')\n                        \u9762\u677F\u6807\u9898\n            ',

            code4: '\n                <template>\n                    <lay-collapse v-model="activeNames2" @change="handlerChange2">\n                        <lay-collapse-item title="\u4E00\u81F4\u6027 Consistency" name="1">\n                            <template v-slot:header>\n                                <div>\n                                    <i class="lay-arrow-left" :style="customArrowStyle" style="margin: 0 6px"></i>\n                                    <span>\u6211\u662F\u81EA\u5B9A\u4E49\u5934\u90E8</span>\n                                </div>\n                            </template>\n                            ...\n                        </lay-collapse-item>\n                        <lay-collapse-item title="\u53CD\u9988 Feedback" name="2">\n                            <template v-slot:title>\n                                <span style="color: red">\u6211\u662F\u81EA\u5B9A\u4E49title</span>\n                            </template>\n                            ...\n                        </lay-collapse-item>\n                    </lay-collapse>\n                </template>\n\n                \u5C5E\u6027\u8BF4\u660E:\n                    \u5177\u540D\u63D2\u69FDheader: \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B.lay-collapse-item__header\u7684\u5B69\u5B50, \u81EA\u5B9A\u4E49\u6574\u4E2A\u5934\u90E8 \n                    \u5177\u540D\u63D2\u69FDtitle: \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B.lay-collapse-item__title\u7684\u5B69\u5B50 \n            ',

            code5: '\n                // props\n                props: {\n                    value: { // \u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3Astring\uFF0C\u5426\u5219\u4E3Aarray)\n                        type: [Number, String, Array],\n                        default: function() {\n                            return []\n                        }\n                    },\n                    accordion: { // \u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F\n                        type: Boolean,\n                        default: false\n                    }\n                }\n\n                // \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\n                @change="fn(curName, names)"\n                    curName: \u7C7B\u578B[Number, String] \u5F53\u524D\u70B9\u51FBlay-collapse-item\u7EC4\u4EF6\u7684name\u540D\n                    names: \u7C7B\u578B[Array] \u6240\u6709\u6FC0\u6D3B\u7684lay-collapse-item\u7EC4\u4EF6name\u7684\u96C6\u5408\n            ',

            code6: '\n                props: {\n                    name: { // \u552F\u4E00\u6807\u5FD7\u7B26\n                        type: [Number, String],\n                        default: \'\'\n                    },\n                    title: { // \u9762\u677F\u6807\u9898\n                        type: String,\n                        default: \'\'\n                    },\n                    disabled: { // \u662F\u5426\u7981\u7528\n                        type: Boolean,\n                        default: false\n                    }\n                }\n            '
        };
    },

    computed: {
        customArrowStyle: function customArrowStyle() {
            return this.isCollapse ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' };
        }
    },
    methods: {
        handleChange: function handleChange(curName, names) {
            console.log(curName, names);
        },
        handleChange2: function handleChange2(curName, names) {
            if (curName == 1) {
                this.isCollapse = !names.includes(curName);
            }
        },
        getCode: function getCode(code) {
            return _prismjs2.default.highlight(code, _prismjs2.default.languages.javascript, 'javascript');
        }
    },
    updated: function updated() {
        this.$root.$emit('update-main-container-scrollbar');
    }
};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(177).default
var update = add("c4e82ce4", content, true, {});

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(176)(false);
// imports


// module
exports.push([module.i, ".lay-collapse-demo[data-v-7eb7c949]{margin-top:20px}.box1[data-v-7eb7c949]{padding:10px;background:#ccc;border:1px solid red}.test[data-v-7eb7c949]{max-width:500px}", ""]);

// exports


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "lay-collapse-demo" }, [_c('h1', [_vm._v("折叠面板组件")]), _vm._v(" "), _c('h3', [_vm._v("1. LayCollapse组件: 使用v-model或者value属性激活当前面板,面板之间不影响")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code1)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-collapse', { on: { "change": _vm.handleChange }, model: { value: _vm.activeNames, callback: function callback($$v) {
        _vm.activeNames = $$v;
      }, expression: "activeNames" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" } }, [_c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2" } }, [_c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "50px" } }), _vm._v(" "), _c('h3', [_vm._v("2. LayCollapse组件: 使用accordion属性开启手风琴模式")]), _vm._v(" "), _c('h3', [_vm._v("    LayCollapse组件: 使用自定义change事件,来监听当前点击了哪个面板及激活的面板集合")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code2)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-collapse', { attrs: { "accordion": "" }, on: { "change": _vm.handleChange }, model: { value: _vm.activeNames1, callback: function callback($$v) {
        _vm.activeNames1 = $$v;
      }, expression: "activeNames1" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" } }, [_c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2" } }, [_c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "50px" } }), _vm._v(" "), _c('h3', [_vm._v("3. LayCollapseItem组件: 使用name属性标识唯一性")]), _vm._v(" "), _c('h3', [_vm._v("    LayCollapseItem组件: 使用title属性,来显示头部标题")]), _vm._v(" "), _c('h3', [_vm._v("    LayCollapseItem组件: 使用disabled属性,来禁止点击")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code3)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-collapse', { on: { "change": _vm.handleChange }, model: { value: _vm.activeNames2, callback: function callback($$v) {
        _vm.activeNames2 = $$v;
      }, expression: "activeNames2" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" } }, [_c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2", "disabled": "" } }, [_c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "50px" } }), _vm._v(" "), _c('h3', [_vm._v("4. LayCollapseItem组件: 使用v-slot:header插槽 来自定义整个header")]), _vm._v(" "), _c('h3', [_vm._v("    LayCollapseItem组件: 使用v-slot:title插槽 来自定义title块")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code4)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('p', [_vm._v("效果:")]), _vm._v(" "), _c('lay-collapse', { on: { "change": _vm.handleChange2 }, model: { value: _vm.activeNames3, callback: function callback($$v) {
        _vm.activeNames3 = $$v;
      }, expression: "activeNames3" } }, [_c('lay-collapse-item', { attrs: { "title": "一致性 Consistency", "name": "1" }, scopedSlots: _vm._u([{ key: "header", fn: function fn() {
        return [_c('div', [_c('i', { staticClass: "lay-arrow-left", staticStyle: { "margin-right": "6px" }, style: _vm.customArrowStyle }), _vm._v(" "), _c('span', { staticStyle: { "color": "green" } }, [_vm._v("我是自定义头部")])])];
      }, proxy: true }]) }, [_vm._v(" "), _c('div', [_vm._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), _vm._v(" "), _c('div', [_vm._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "反馈 Feedback", "name": "2" }, scopedSlots: _vm._u([{ key: "title", fn: function fn() {
        return [_c('span', { staticStyle: { "color": "red" } }, [_vm._v("我是自定义title")])];
      }, proxy: true }]) }, [_vm._v(" "), _c('div', [_vm._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), _vm._v(" "), _c('div', [_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "效率 Efficiency", "name": "3" } }, [_c('div', [_vm._v("简化流程：设计简洁直观的操作流程；")]), _vm._v(" "), _c('div', [_vm._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), _vm._v(" "), _c('div', [_vm._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), _vm._v(" "), _c('lay-collapse-item', { attrs: { "title": "可控 Controllability", "name": "4" } }, [_c('div', [_vm._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]), _vm._v(" "), _c('div', [_vm._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])], 1), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "50px" } }), _vm._v(" "), _c('p', [_vm._v("lay-collapse 组件所有prop属性和自定义事件名")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code5)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")]), _vm._v(" "), _c('div', { staticStyle: { "margin-bottom": "50px" } }), _vm._v(" "), _c('p', [_vm._v("lay-collapse-item 组件所有prop属性")]), _vm._v(" "), _c('pre', [_vm._v("        "), _c('code', { staticClass: "language-js", domProps: { "innerHTML": _vm._s(_vm.getCode(_vm.code6)) } }, [_vm._v("\n        ")]), _vm._v("\n    ")])], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })

});