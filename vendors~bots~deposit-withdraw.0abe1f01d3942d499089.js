(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[11],{

/***/ 2740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2741);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2088);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ 2741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ 2873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(395);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(824);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ 2884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return CreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenuRenderer", function() { return menuRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArrowRenderer", function() { return arrowRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultClearRenderer", function() { return clearRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterOptions", function() { return filterOptions; });
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2873);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(400);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);






var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

var clearRenderer = function clearRenderer() {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

var menuRenderer = function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	focusedOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
	inputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onOptionRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	removeValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	selectValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	valueArray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var blockEvent = (function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Option = function (_React$Component) {
	inherits(Option, _React$Component);

	function Option(props) {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, option.className);

			return option.disabled ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					onMouseDown: blockEvent,
					onClick: blockEvent },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Option.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className (based on mouse position)
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is disabled
	isFocused: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is focused
	isSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is selected
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseEnter on option element
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on option element
	onUnfocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseLeave on option element
	option: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, // object that is base for that option
	optionIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits(Value, _React$Component);

	function Value(props) {
		classCallCheck(this, Value);

		var _this = possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Value.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // disabled prop passed to ReactSelect
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // Unique id for the value - used for aria
	onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on value label
	onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle removal of the value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]);
var stringOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select$1 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
			var pref = document.addEventListener ? '' : 'on';

			document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
			document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false,
						focusedOption: null
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen,
					focusedOption: null
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (!this.props.closeOnSelect) {
				return;
			}
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value,
							values: valueArray
						},
						renderLabel(value, i),
						react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, defineProperty(_classNames, this._instancePrefix + '-list', isOpen), defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = objectWithoutProperties(this.props.inputProps, []);


				var _ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()(defineProperty({}, this._instancePrefix + '-list', isOpen));
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('div', _extends({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						'div',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Select$1.propTypes = {
	'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // aria label (for assistive tech)
	'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create the drop-down caret element
	autoBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // automatically blur the component when an option is selected
	autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // autofocus the component on mount
	autofocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // deprecated; use autoFocus instead
	autosize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable autosizing or not
	backspaceRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // should it be possible to reset value
	closeOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to close the menu when a value is selected
	deleteRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether delete removes an item if there is no text input
	delimiter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // delimiter to use to join multiple values for the hidden field value
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is disabled or not
	escapeClearsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether escape clears the value when the menu is closed
	filterOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to filter a single option (option, filterString)
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to strip diacritics when filtering
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to perform case-insensitive filtering
	inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // custom attributes for the Input
	inputRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // returns a custom input component
	instanceId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // set the components instanceId
	isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	matchPos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|start) match the start or entire string when filtering
	matchProp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|label|value) which option property to filter on
	menuBuffer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu container
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // renders a custom menu with options
	menuStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onBlur handler: function (event) {}
	onBlurResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on blur
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is closed
	onCloseResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onFocus handler: function (event) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is opened
	onSelectResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // always open options menu on focus
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // option component to render in dropdown
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optionRenderer: function (option) {}
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, // array of options
	pageSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the selected option is removed from the dropdown on multi selects
	required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // applies HTML5 required attribute when needed
	resetValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // value to use when you clear the control
	rtl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable searching feature or not
	simpleValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to trim whitespace around filter value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // initial field value
	valueComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // value component to render
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	valueRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // valueRenderer: function (option) {}
	wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes = {
	autoload: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // object to use to cache results; set to null/false to disable caching
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// replaces the placeholder while options are loading
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	noResultsText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field noResultsText, displayed when no options come back from the server
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optional for keeping track of what is being typed
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired, // array of options
	placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	searchPromptText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// label to prompt for search input
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits(Async, _Component);

	function Async(props, context) {
		classCallCheck(this, Async);

		var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

var CreatableSelect = function (_React$Component) {
	inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck(this, CreatableSelect);

		var _this = possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator,
			    showNewOptionAtTop = _props2.showNewOptionAtTop;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					if (showNewOptionAtTop) {
						filteredOptions.unshift(this._createPlaceholderOption);
					} else {
						filteredOptions.push(this._createPlaceholderOption);
					}
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption(event)) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties(_props4, ['ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$2 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var isOptionUnique = function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	if (!options || !options.length) {
		return true;
	}

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

var isValidNewOption = function isValidNewOption(_ref4) {
	var label = _ref4.label;
	return !!label;
};

var newOptionCreator = function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';

	return option;
};

var promptTextCreator = function promptTextCreator(label) {
	return 'Create option "' + label + '"';
};

var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption,
	showNewOptionAtTop: true
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.filterOptions
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input change handler: function (inputValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// new option click handler: function (option) {}
	onNewOptionClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.options
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	ref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Where to show prompt/placeholder option text.
	// true: new option prompt at top of list (default)
	// false: new option prompt at bottom of list
	showNewOptionAtTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck(this, AsyncCreatableSelect);
		return possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$1 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

AsyncCreatableSelect.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;


/* harmony default export */ __webpack_exports__["default"] = (Select$1);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzfmRlcG9zaXQtd2l0aGRyYXcuMGFiZTFmMDFkMzk0MmQ0OTkwODkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9saWIvQXV0b3NpemVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzaXplclN0eWxlID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAwLFxuXHRsZWZ0OiAwLFxuXHR2aXNpYmlsaXR5OiAnaGlkZGVuJyxcblx0aGVpZ2h0OiAwLFxuXHRvdmVyZmxvdzogJ3Njcm9sbCcsXG5cdHdoaXRlU3BhY2U6ICdwcmUnXG59O1xuXG52YXIgSU5QVVRfUFJPUFNfQkxBQ0tMSVNUID0gWydleHRyYVdpZHRoJywgJ2luamVjdFN0eWxlcycsICdpbnB1dENsYXNzTmFtZScsICdpbnB1dFJlZicsICdpbnB1dFN0eWxlJywgJ21pbldpZHRoJywgJ29uQXV0b3NpemUnLCAncGxhY2Vob2xkZXJJc01pbldpZHRoJ107XG5cbnZhciBjbGVhbklucHV0UHJvcHMgPSBmdW5jdGlvbiBjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcykge1xuXHRJTlBVVF9QUk9QU19CTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRyZXR1cm4gZGVsZXRlIGlucHV0UHJvcHNbZmllbGRdO1xuXHR9KTtcblx0cmV0dXJuIGlucHV0UHJvcHM7XG59O1xuXG52YXIgY29weVN0eWxlcyA9IGZ1bmN0aW9uIGNvcHlTdHlsZXMoc3R5bGVzLCBub2RlKSB7XG5cdG5vZGUuc3R5bGUuZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG5cdG5vZGUuc3R5bGUuZm9udEZhbWlseSA9IHN0eWxlcy5mb250RmFtaWx5O1xuXHRub2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBzdHlsZXMuZm9udFdlaWdodDtcblx0bm9kZS5zdHlsZS5mb250U3R5bGUgPSBzdHlsZXMuZm9udFN0eWxlO1xuXHRub2RlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBzdHlsZXMubGV0dGVyU3BhY2luZztcblx0bm9kZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc3R5bGVzLnRleHRUcmFuc2Zvcm07XG59O1xuXG52YXIgaXNJRSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgPyAvTVNJRSB8VHJpZGVudFxcL3xFZGdlXFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSA6IGZhbHNlO1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG5cdC8vIHdlIG9ubHkgbmVlZCBhbiBhdXRvLWdlbmVyYXRlZCBJRCBmb3Igc3R5bGVzaGVldCBpbmplY3Rpb24sIHdoaWNoIGlzIG9ubHlcblx0Ly8gdXNlZCBmb3IgSUUuIHNvIGlmIHRoZSBicm93c2VyIGlzIG5vdCBJRSwgdGhpcyBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZC5cblx0cmV0dXJuIGlzSUUgPyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpIDogdW5kZWZpbmVkO1xufTtcblxudmFyIEF1dG9zaXplSW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoQXV0b3NpemVJbnB1dCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXV0b3NpemVJbnB1dChwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvc2l6ZUlucHV0KTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdXRvc2l6ZUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXV0b3NpemVJbnB1dCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmlucHV0UmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5pbnB1dCA9IGVsO1xuXHRcdFx0aWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5pbnB1dFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRfdGhpcy5wcm9wcy5pbnB1dFJlZihlbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRXaWR0aDogcHJvcHMubWluV2lkdGgsXG5cdFx0XHRpbnB1dElkOiBwcm9wcy5pZCB8fCBnZW5lcmF0ZUlkKClcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBdXRvc2l6ZUlucHV0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5jb3B5SW5wdXRTdHlsZXMoKTtcblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHR2YXIgaWQgPSBuZXh0UHJvcHMuaWQ7XG5cblx0XHRcdGlmIChpZCAhPT0gdGhpcy5wcm9wcy5pZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRJZDogaWQgfHwgZ2VuZXJhdGVJZCgpIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0aWYgKHByZXZTdGF0ZS5pbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b3NpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQXV0b3NpemUodGhpcy5zdGF0ZS5pbnB1dFdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvcHlJbnB1dFN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvcHlJbnB1dFN0eWxlcygpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW5wdXRTdHlsZXMgPSB0aGlzLmlucHV0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5wdXQpO1xuXHRcdFx0aWYgKCFpbnB1dFN0eWxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnNpemVyKTtcblx0XHRcdGlmICh0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpIHtcblx0XHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5wbGFjZUhvbGRlclNpemVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGVJbnB1dFdpZHRoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aCgpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF0aGlzLnNpemVyIHx8IHR5cGVvZiB0aGlzLnNpemVyLnNjcm9sbFdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgbmV3SW5wdXRXaWR0aCA9IHZvaWQgMDtcblx0XHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmICghdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gTWF0aC5tYXgodGhpcy5zaXplci5zY3JvbGxXaWR0aCwgdGhpcy5wbGFjZUhvbGRlclNpemVyLnNjcm9sbFdpZHRoKSArIDI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5zaXplci5zY3JvbGxXaWR0aCArIDI7XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZXh0cmFXaWR0aCB0byB0aGUgZGV0ZWN0ZWQgd2lkdGguIGZvciBudW1iZXIgdHlwZXMsIHRoaXMgZGVmYXVsdHMgdG8gMTYgdG8gYWxsb3cgZm9yIHRoZSBzdGVwcGVyIFVJXG5cdFx0XHR2YXIgZXh0cmFXaWR0aCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgdGhpcy5wcm9wcy5leHRyYVdpZHRoID09PSB1bmRlZmluZWQgPyAxNiA6IHBhcnNlSW50KHRoaXMucHJvcHMuZXh0cmFXaWR0aCkgfHwgMDtcblx0XHRcdG5ld0lucHV0V2lkdGggKz0gZXh0cmFXaWR0aDtcblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoIDwgdGhpcy5wcm9wcy5taW5XaWR0aCkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5wcm9wcy5taW5XaWR0aDtcblx0XHRcdH1cblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRXaWR0aDogbmV3SW5wdXRXaWR0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldElucHV0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5wdXQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdibHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcblx0XHRcdHRoaXMuaW5wdXQuYmx1cigpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyU3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgaW5qZWN0cyBzdHlsZXMgdG8gaGlkZSBJRSdzIGNsZWFyIGluZGljYXRvciwgd2hpY2ggbWVzc2VzXG5cdFx0XHQvLyB3aXRoIGlucHV0IHNpemUgZGV0ZWN0aW9uLiB0aGUgc3R5bGVzaGVldCBpcyBvbmx5IGluamVjdGVkIHdoZW4gdGhlXG5cdFx0XHQvLyBicm93c2VyIGlzIElFLCBhbmQgY2FuIGFsc28gYmUgZGlzYWJsZWQgYnkgdGhlIGBpbmplY3RTdHlsZXNgIHByb3AuXG5cdFx0XHR2YXIgaW5qZWN0U3R5bGVzID0gdGhpcy5wcm9wcy5pbmplY3RTdHlsZXM7XG5cblx0XHRcdHJldHVybiBpc0lFICYmIGluamVjdFN0eWxlcyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcblx0XHRcdFx0XHRfX2h0bWw6ICdpbnB1dCMnICsgdGhpcy5zdGF0ZS5pbnB1dElkICsgJzo6LW1zLWNsZWFyIHtkaXNwbGF5OiBub25lO30nXG5cdFx0XHRcdH0gfSkgOiBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBzaXplclZhbHVlID0gW3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlLCB0aGlzLnByb3BzLnZhbHVlLCAnJ10ucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcblx0XHRcdFx0aWYgKHByZXZpb3VzVmFsdWUgIT09IG51bGwgJiYgcHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRWYWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgd3JhcHBlclN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuc3R5bGUpO1xuXHRcdFx0aWYgKCF3cmFwcGVyU3R5bGUuZGlzcGxheSkgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuXHRcdFx0dmFyIGlucHV0U3R5bGUgPSBfZXh0ZW5kcyh7XG5cdFx0XHRcdGJveFNpemluZzogJ2NvbnRlbnQtYm94Jyxcblx0XHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCArICdweCdcblx0XHRcdH0sIHRoaXMucHJvcHMuaW5wdXRTdHlsZSk7XG5cblx0XHRcdHZhciBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtdKTtcblxuXHRcdFx0Y2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpO1xuXHRcdFx0aW5wdXRQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lO1xuXHRcdFx0aW5wdXRQcm9wcy5pZCA9IHRoaXMuc3RhdGUuaW5wdXRJZDtcblx0XHRcdGlucHV0UHJvcHMuc3R5bGUgPSBpbnB1dFN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB3cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJTdHlsZXMoKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHsgcmVmOiB0aGlzLmlucHV0UmVmIH0pKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMuc2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0c2l6ZXJWYWx1ZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMucGxhY2VIb2xkZXJTaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHRcdCkgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBdXRvc2l6ZUlucHV0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b3NpemVJbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0ZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gZGVmYXVsdCBmaWVsZCB2YWx1ZVxuXHRleHRyYVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gYWRkaXRpb25hbCB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBpZCB0byB1c2UgZm9yIHRoZSBpbnB1dCwgY2FuIGJlIHNldCBmb3IgY29uc2lzdGVudCBzbmFwc2hvdHNcblx0aW5qZWN0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGluamVjdCB0aGUgY3VzdG9tIHN0eWxlc2hlZXQgdG8gaGlkZSBjbGVhciBVSSwgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRpbnB1dENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmVmIGNhbGxiYWNrIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0bWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBtaW5pbXVtIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRvbkF1dG9zaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQXV0b3NpemUgaGFuZGxlcjogZnVuY3Rpb24obmV3V2lkdGgpIHt9XG5cdG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7fVxuXHRwbGFjZWhvbGRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBsYWNlaG9sZGVyIHRleHRcblx0cGxhY2Vob2xkZXJJc01pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRvbid0IGNvbGxhcHNlIHNpemUgdG8gbGVzcyB0aGFuIHRoZSBwbGFjZWhvbGRlclxuXHRzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSAvLyBmaWVsZCB2YWx1ZVxufTtcbkF1dG9zaXplSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRtaW5XaWR0aDogMSxcblx0aW5qZWN0U3R5bGVzOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdXRvc2l6ZUlucHV0OyIsImltcG9ydCBBdXRvc2l6ZUlucHV0IGZyb20gJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciBhcnJvd1JlbmRlcmVyID0gZnVuY3Rpb24gYXJyb3dSZW5kZXJlcihfcmVmKSB7XG5cdHZhciBvbk1vdXNlRG93biA9IF9yZWYub25Nb3VzZURvd247XG5cblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG5cdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93Jyxcblx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0fSk7XG59O1xuXG5hcnJvd1JlbmRlcmVyLnByb3BUeXBlcyA9IHtcblx0b25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgY2xlYXJSZW5kZXJlciA9IGZ1bmN0aW9uIGNsZWFyUmVuZGVyZXIoKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuXHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jbGVhcicsXG5cdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiAnJnRpbWVzOycgfVxuXHR9KTtcbn07XG5cbnZhciBtYXAgPSBbeyAnYmFzZSc6ICdBJywgJ2xldHRlcnMnOiAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2cgfSwgeyAnYmFzZSc6ICdBQScsICdsZXR0ZXJzJzogL1tcXHVBNzMyXS9nIH0sIHsgJ2Jhc2UnOiAnQUUnLCAnbGV0dGVycyc6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nIH0sIHsgJ2Jhc2UnOiAnQU8nLCAnbGV0dGVycyc6IC9bXFx1QTczNF0vZyB9LCB7ICdiYXNlJzogJ0FVJywgJ2xldHRlcnMnOiAvW1xcdUE3MzZdL2cgfSwgeyAnYmFzZSc6ICdBVicsICdsZXR0ZXJzJzogL1tcXHVBNzM4XFx1QTczQV0vZyB9LCB7ICdiYXNlJzogJ0FZJywgJ2xldHRlcnMnOiAvW1xcdUE3M0NdL2cgfSwgeyAnYmFzZSc6ICdCJywgJ2xldHRlcnMnOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyB9LCB7ICdiYXNlJzogJ0MnLCAnbGV0dGVycyc6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nIH0sIHsgJ2Jhc2UnOiAnRCcsICdsZXR0ZXJzJzogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyB9LCB7ICdiYXNlJzogJ0RaJywgJ2xldHRlcnMnOiAvW1xcdTAxRjFcXHUwMUM0XS9nIH0sIHsgJ2Jhc2UnOiAnRHonLCAnbGV0dGVycyc6IC9bXFx1MDFGMlxcdTAxQzVdL2cgfSwgeyAnYmFzZSc6ICdFJywgJ2xldHRlcnMnOiAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyB9LCB7ICdiYXNlJzogJ0YnLCAnbGV0dGVycyc6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nIH0sIHsgJ2Jhc2UnOiAnRycsICdsZXR0ZXJzJzogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2cgfSwgeyAnYmFzZSc6ICdIJywgJ2xldHRlcnMnOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nIH0sIHsgJ2Jhc2UnOiAnSScsICdsZXR0ZXJzJzogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyB9LCB7ICdiYXNlJzogJ0onLCAnbGV0dGVycyc6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2cgfSwgeyAnYmFzZSc6ICdLJywgJ2xldHRlcnMnOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nIH0sIHsgJ2Jhc2UnOiAnTCcsICdsZXR0ZXJzJzogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2cgfSwgeyAnYmFzZSc6ICdMSicsICdsZXR0ZXJzJzogL1tcXHUwMUM3XS9nIH0sIHsgJ2Jhc2UnOiAnTGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOF0vZyB9LCB7ICdiYXNlJzogJ00nLCAnbGV0dGVycyc6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2cgfSwgeyAnYmFzZSc6ICdOJywgJ2xldHRlcnMnOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2cgfSwgeyAnYmFzZSc6ICdOSicsICdsZXR0ZXJzJzogL1tcXHUwMUNBXS9nIH0sIHsgJ2Jhc2UnOiAnTmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQl0vZyB9LCB7ICdiYXNlJzogJ08nLCAnbGV0dGVycyc6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyB9LCB7ICdiYXNlJzogJ09JJywgJ2xldHRlcnMnOiAvW1xcdTAxQTJdL2cgfSwgeyAnYmFzZSc6ICdPTycsICdsZXR0ZXJzJzogL1tcXHVBNzRFXS9nIH0sIHsgJ2Jhc2UnOiAnT1UnLCAnbGV0dGVycyc6IC9bXFx1MDIyMl0vZyB9LCB7ICdiYXNlJzogJ1AnLCAnbGV0dGVycyc6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyB9LCB7ICdiYXNlJzogJ1EnLCAnbGV0dGVycyc6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nIH0sIHsgJ2Jhc2UnOiAnUicsICdsZXR0ZXJzJzogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyB9LCB7ICdiYXNlJzogJ1MnLCAnbGV0dGVycyc6IC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2cgfSwgeyAnYmFzZSc6ICdUJywgJ2xldHRlcnMnOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyB9LCB7ICdiYXNlJzogJ1RaJywgJ2xldHRlcnMnOiAvW1xcdUE3MjhdL2cgfSwgeyAnYmFzZSc6ICdVJywgJ2xldHRlcnMnOiAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2cgfSwgeyAnYmFzZSc6ICdWJywgJ2xldHRlcnMnOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nIH0sIHsgJ2Jhc2UnOiAnVlknLCAnbGV0dGVycyc6IC9bXFx1QTc2MF0vZyB9LCB7ICdiYXNlJzogJ1cnLCAnbGV0dGVycyc6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyB9LCB7ICdiYXNlJzogJ1gnLCAnbGV0dGVycyc6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2cgfSwgeyAnYmFzZSc6ICdZJywgJ2xldHRlcnMnOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyB9LCB7ICdiYXNlJzogJ1onLCAnbGV0dGVycyc6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2cgfSwgeyAnYmFzZSc6ICdhJywgJ2xldHRlcnMnOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nIH0sIHsgJ2Jhc2UnOiAnYWEnLCAnbGV0dGVycyc6IC9bXFx1QTczM10vZyB9LCB7ICdiYXNlJzogJ2FlJywgJ2xldHRlcnMnOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyB9LCB7ICdiYXNlJzogJ2FvJywgJ2xldHRlcnMnOiAvW1xcdUE3MzVdL2cgfSwgeyAnYmFzZSc6ICdhdScsICdsZXR0ZXJzJzogL1tcXHVBNzM3XS9nIH0sIHsgJ2Jhc2UnOiAnYXYnLCAnbGV0dGVycyc6IC9bXFx1QTczOVxcdUE3M0JdL2cgfSwgeyAnYmFzZSc6ICdheScsICdsZXR0ZXJzJzogL1tcXHVBNzNEXS9nIH0sIHsgJ2Jhc2UnOiAnYicsICdsZXR0ZXJzJzogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2cgfSwgeyAnYmFzZSc6ICdjJywgJ2xldHRlcnMnOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2cgfSwgeyAnYmFzZSc6ICdkJywgJ2xldHRlcnMnOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nIH0sIHsgJ2Jhc2UnOiAnZHonLCAnbGV0dGVycyc6IC9bXFx1MDFGM1xcdTAxQzZdL2cgfSwgeyAnYmFzZSc6ICdlJywgJ2xldHRlcnMnOiAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2cgfSwgeyAnYmFzZSc6ICdmJywgJ2xldHRlcnMnOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyB9LCB7ICdiYXNlJzogJ2cnLCAnbGV0dGVycyc6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nIH0sIHsgJ2Jhc2UnOiAnaCcsICdsZXR0ZXJzJzogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2cgfSwgeyAnYmFzZSc6ICdodicsICdsZXR0ZXJzJzogL1tcXHUwMTk1XS9nIH0sIHsgJ2Jhc2UnOiAnaScsICdsZXR0ZXJzJzogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyB9LCB7ICdiYXNlJzogJ2onLCAnbGV0dGVycyc6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nIH0sIHsgJ2Jhc2UnOiAnaycsICdsZXR0ZXJzJzogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyB9LCB7ICdiYXNlJzogJ2wnLCAnbGV0dGVycyc6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyB9LCB7ICdiYXNlJzogJ2xqJywgJ2xldHRlcnMnOiAvW1xcdTAxQzldL2cgfSwgeyAnYmFzZSc6ICdtJywgJ2xldHRlcnMnOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nIH0sIHsgJ2Jhc2UnOiAnbicsICdsZXR0ZXJzJzogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyB9LCB7ICdiYXNlJzogJ25qJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0NdL2cgfSwgeyAnYmFzZSc6ICdvJywgJ2xldHRlcnMnOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2cgfSwgeyAnYmFzZSc6ICdvaScsICdsZXR0ZXJzJzogL1tcXHUwMUEzXS9nIH0sIHsgJ2Jhc2UnOiAnb3UnLCAnbGV0dGVycyc6IC9bXFx1MDIyM10vZyB9LCB7ICdiYXNlJzogJ29vJywgJ2xldHRlcnMnOiAvW1xcdUE3NEZdL2cgfSwgeyAnYmFzZSc6ICdwJywgJ2xldHRlcnMnOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2cgfSwgeyAnYmFzZSc6ICdxJywgJ2xldHRlcnMnOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyB9LCB7ICdiYXNlJzogJ3InLCAnbGV0dGVycyc6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2cgfSwgeyAnYmFzZSc6ICdzJywgJ2xldHRlcnMnOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyB9LCB7ICdiYXNlJzogJ3QnLCAnbGV0dGVycyc6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyB9LCB7ICdiYXNlJzogJ3R6JywgJ2xldHRlcnMnOiAvW1xcdUE3MjldL2cgfSwgeyAnYmFzZSc6ICd1JywgJ2xldHRlcnMnOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2cgfSwgeyAnYmFzZSc6ICd2JywgJ2xldHRlcnMnOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nIH0sIHsgJ2Jhc2UnOiAndnknLCAnbGV0dGVycyc6IC9bXFx1QTc2MV0vZyB9LCB7ICdiYXNlJzogJ3cnLCAnbGV0dGVycyc6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2cgfSwgeyAnYmFzZSc6ICd4JywgJ2xldHRlcnMnOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nIH0sIHsgJ2Jhc2UnOiAneScsICdsZXR0ZXJzJzogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nIH0sIHsgJ2Jhc2UnOiAneicsICdsZXR0ZXJzJzogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyB9XTtcblxudmFyIHN0cmlwRGlhY3JpdGljcyA9IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZShtYXBbaV0ubGV0dGVycywgbWFwW2ldLmJhc2UpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG52YXIgdHJpbSA9IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJztcbn07XG5cbnZhciBmaWx0ZXJPcHRpb25zID0gZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyhvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHByb3BzKSB7XG5cdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSBzdHJpcERpYWNyaXRpY3MoZmlsdGVyVmFsdWUpO1xuXHR9XG5cblx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRpZiAocHJvcHMudHJpbUZpbHRlcikge1xuXHRcdGZpbHRlclZhbHVlID0gdHJpbShmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRpZiAoZXhjbHVkZU9wdGlvbnMpIGV4Y2x1ZGVPcHRpb25zID0gZXhjbHVkZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0cmV0dXJuIGlbcHJvcHMudmFsdWVLZXldO1xuXHR9KTtcblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdGlmIChleGNsdWRlT3B0aW9ucyAmJiBleGNsdWRlT3B0aW9ucy5pbmRleE9mKG9wdGlvbltwcm9wcy52YWx1ZUtleV0pID4gLTEpIHJldHVybiBmYWxzZTtcblx0XHRpZiAocHJvcHMuZmlsdGVyT3B0aW9uKSByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uLmNhbGwodW5kZWZpbmVkLCBvcHRpb24sIGZpbHRlclZhbHVlKTtcblx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuXHRcdHZhciB2YWx1ZSA9IG9wdGlvbltwcm9wcy52YWx1ZUtleV07XG5cdFx0dmFyIGxhYmVsID0gb3B0aW9uW3Byb3BzLmxhYmVsS2V5XTtcblx0XHR2YXIgaGFzVmFsdWUgPSBpc1ZhbGlkKHZhbHVlKTtcblx0XHR2YXIgaGFzTGFiZWwgPSBpc1ZhbGlkKGxhYmVsKTtcblxuXHRcdGlmICghaGFzVmFsdWUgJiYgIWhhc0xhYmVsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbHVlVGVzdCA9IGhhc1ZhbHVlID8gU3RyaW5nKHZhbHVlKSA6IG51bGw7XG5cdFx0dmFyIGxhYmVsVGVzdCA9IGhhc0xhYmVsID8gU3RyaW5nKGxhYmVsKSA6IG51bGw7XG5cblx0XHRpZiAocHJvcHMuaWdub3JlQWNjZW50cykge1xuXHRcdFx0aWYgKHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcpIHZhbHVlVGVzdCA9IHN0cmlwRGlhY3JpdGljcyh2YWx1ZVRlc3QpO1xuXHRcdFx0aWYgKGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScpIGxhYmVsVGVzdCA9IHN0cmlwRGlhY3JpdGljcyhsYWJlbFRlc3QpO1xuXHRcdH1cblxuXHRcdGlmIChwcm9wcy5pZ25vcmVDYXNlKSB7XG5cdFx0XHRpZiAodmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gdmFsdWVUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAobGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gbGFiZWxUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLm1hdGNoUG9zID09PSAnc3RhcnQnID8gdmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIHx8IGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScgJiYgbGFiZWxUZXN0LnN1YnN0cigwLCBmaWx0ZXJWYWx1ZS5sZW5ndGgpID09PSBmaWx0ZXJWYWx1ZSA6IHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcgJiYgdmFsdWVUZXN0LmluZGV4T2YoZmlsdGVyVmFsdWUpID49IDAgfHwgbGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMDtcblx0fSk7XG59O1xuXG52YXIgbWVudVJlbmRlcmVyID0gZnVuY3Rpb24gbWVudVJlbmRlcmVyKF9yZWYpIHtcblx0dmFyIGZvY3VzZWRPcHRpb24gPSBfcmVmLmZvY3VzZWRPcHRpb24sXG5cdCAgICBmb2N1c09wdGlvbiA9IF9yZWYuZm9jdXNPcHRpb24sXG5cdCAgICBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuXHQgICAgaW5zdGFuY2VQcmVmaXggPSBfcmVmLmluc3RhbmNlUHJlZml4LFxuXHQgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcblx0ICAgIG9uT3B0aW9uUmVmID0gX3JlZi5vbk9wdGlvblJlZixcblx0ICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcblx0ICAgIG9wdGlvbkNsYXNzTmFtZSA9IF9yZWYub3B0aW9uQ2xhc3NOYW1lLFxuXHQgICAgb3B0aW9uQ29tcG9uZW50ID0gX3JlZi5vcHRpb25Db21wb25lbnQsXG5cdCAgICBvcHRpb25SZW5kZXJlciA9IF9yZWYub3B0aW9uUmVuZGVyZXIsXG5cdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgcmVtb3ZlVmFsdWUgPSBfcmVmLnJlbW92ZVZhbHVlLFxuXHQgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlLFxuXHQgICAgdmFsdWVBcnJheSA9IF9yZWYudmFsdWVBcnJheSxcblx0ICAgIHZhbHVlS2V5ID0gX3JlZi52YWx1ZUtleTtcblxuXHR2YXIgT3B0aW9uID0gb3B0aW9uQ29tcG9uZW50O1xuXG5cdHJldHVybiBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpKSB7XG5cdFx0dmFyIGlzU2VsZWN0ZWQgPSB2YWx1ZUFycmF5ICYmIHZhbHVlQXJyYXkuc29tZShmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHhbdmFsdWVLZXldID09PSBvcHRpb25bdmFsdWVLZXldO1xuXHRcdH0pO1xuXHRcdHZhciBpc0ZvY3VzZWQgPSBvcHRpb24gPT09IGZvY3VzZWRPcHRpb247XG5cdFx0dmFyIG9wdGlvbkNsYXNzID0gY2xhc3NOYW1lcyhvcHRpb25DbGFzc05hbWUsIHtcblx0XHRcdCdTZWxlY3Qtb3B0aW9uJzogdHJ1ZSxcblx0XHRcdCdpcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG5cdFx0XHQnaXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcblx0XHRcdCdpcy1kaXNhYmxlZCc6IG9wdGlvbi5kaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRPcHRpb24sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTmFtZTogb3B0aW9uQ2xhc3MsXG5cdFx0XHRcdGZvY3VzT3B0aW9uOiBmb2N1c09wdGlvbixcblx0XHRcdFx0aW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcblx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IGluc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRpc0Rpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG5cdFx0XHRcdGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuXHRcdFx0XHRpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuXHRcdFx0XHRrZXk6ICdvcHRpb24tJyArIGkgKyAnLScgKyBvcHRpb25bdmFsdWVLZXldLFxuXHRcdFx0XHRvbkZvY3VzOiBvbkZvY3VzLFxuXHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3QsXG5cdFx0XHRcdG9wdGlvbjogb3B0aW9uLFxuXHRcdFx0XHRvcHRpb25JbmRleDogaSxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcblx0XHRcdFx0XHRvbk9wdGlvblJlZihfcmVmMiwgaXNGb2N1c2VkKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlVmFsdWU6IHJlbW92ZVZhbHVlLFxuXHRcdFx0XHRzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25SZW5kZXJlcihvcHRpb24sIGksIGlucHV0VmFsdWUpXG5cdFx0KTtcblx0fSk7XG59O1xuXG5tZW51UmVuZGVyZXIucHJvcFR5cGVzID0ge1xuXHRmb2N1c09wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cdGZvY3VzZWRPcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGluc3RhbmNlUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblx0b25PcHRpb25SZWY6IFByb3BUeXBlcy5mdW5jLFxuXHRvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cdG9wdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0b3B0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcblx0b3B0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG5cdHJlbW92ZVZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblx0c2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXHR2YWx1ZUFycmF5OiBQcm9wVHlwZXMuYXJyYXksXG5cdHZhbHVlS2V5OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgYmxvY2tFdmVudCA9IChmdW5jdGlvbiAoZXZlbnQpIHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8ICEoJ2hyZWYnIGluIGV2ZW50LnRhcmdldCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGV2ZW50LnRhcmdldC50YXJnZXQpIHtcblx0XHR3aW5kb3cub3BlbihldmVudC50YXJnZXQuaHJlZiwgZXZlbnQudGFyZ2V0LnRhcmdldCk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcblx0fVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuXG5cblxuXG5cblxuXG52YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoT3B0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaGFuZGxlTW91c2VEb3duID0gX3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBfdGhpcy5oYW5kbGVNb3VzZUVudGVyLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZU1vdXNlTW92ZSA9IF90aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IF90aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhPcHRpb24sIFt7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMub3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VFbnRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoZXZlbnQpIHtcblx0XHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG5cdFx0XHR0aGlzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbkZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmlzRm9jdXNlZCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXModGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBvcHRpb24gPSBfcHJvcHMub3B0aW9uLFxuXHRcdFx0ICAgIGluc3RhbmNlUHJlZml4ID0gX3Byb3BzLmluc3RhbmNlUHJlZml4LFxuXHRcdFx0ICAgIG9wdGlvbkluZGV4ID0gX3Byb3BzLm9wdGlvbkluZGV4O1xuXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgb3B0aW9uLmNsYXNzTmFtZSk7XG5cblx0XHRcdHJldHVybiBvcHRpb24uZGlzYWJsZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogYmxvY2tFdmVudCxcblx0XHRcdFx0XHRvbkNsaWNrOiBibG9ja0V2ZW50IH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRzdHlsZTogb3B0aW9uLnN0eWxlLFxuXHRcdFx0XHRcdHJvbGU6ICdvcHRpb24nLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogb3B0aW9uLmxhYmVsLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcblx0XHRcdFx0XHRvbk1vdXNlTW92ZTogdGhpcy5oYW5kbGVNb3VzZU1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0aWQ6IGluc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIG9wdGlvbkluZGV4LFxuXHRcdFx0XHRcdHRpdGxlOiBvcHRpb24udGl0bGUgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIE9wdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuT3B0aW9uLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSAoYmFzZWQgb24gbW91c2UgcG9zaXRpb24pXG5cdGluc3RhbmNlUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsIC8vIHVuaXF1ZSBwcmVmaXggZm9yIHRoZSBpZHMgKHVzZWQgZm9yIGFyaWEpXG5cdGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB0aGUgb3B0aW9uIGlzIGRpc2FibGVkXG5cdGlzRm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZm9jdXNlZFxuXHRpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBtb3VzZUVudGVyIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiBvcHRpb24gZWxlbWVudFxuXHRvblVuZm9jdXM6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlTGVhdmUgb24gb3B0aW9uIGVsZW1lbnRcblx0b3B0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG9iamVjdCB0aGF0IGlzIGJhc2UgZm9yIHRoYXQgb3B0aW9uXG5cdG9wdGlvbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyIC8vIGluZGV4IG9mIHRoZSBvcHRpb24sIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIGlkcyBmb3IgYXJpYVxufTtcblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoVmFsdWUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFZhbHVlKHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVmFsdWUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihWYWx1ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmhhbmRsZU1vdXNlRG93biA9IF90aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vblJlbW92ZSA9IF90aGlzLm9uUmVtb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hNb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKFZhbHVlLCBbe1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy52YWx1ZSwgZXZlbnQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZS5ocmVmKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uUmVtb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25SZW1vdmUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRSZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZFJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLm9uUmVtb3ZlKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJSZW1vdmVJY29uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVtb3ZlSWNvbigpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLm9uUmVtb3ZlKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC12YWx1ZS1pY29uJyxcblx0XHRcdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMub25SZW1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUgfSxcblx0XHRcdFx0J1xceEQ3J1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJMYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuXHRcdFx0dmFyIGNsYXNzTmFtZSA9ICdTZWxlY3QtdmFsdWUtbGFiZWwnO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnZhbHVlLmhyZWYgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnYScsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGhyZWY6IHRoaXMucHJvcHMudmFsdWUuaHJlZiwgdGFyZ2V0OiB0aGlzLnByb3BzLnZhbHVlLnRhcmdldCwgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLCBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZU1vdXNlRG93biB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpIDogUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCByb2xlOiAnb3B0aW9uJywgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsIGlkOiB0aGlzLnByb3BzLmlkIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnU2VsZWN0LXZhbHVlJywgdGhpcy5wcm9wcy52YWx1ZS5kaXNhYmxlZCA/ICdTZWxlY3QtdmFsdWUtZGlzYWJsZWQnIDogJycsIHRoaXMucHJvcHMudmFsdWUuY2xhc3NOYW1lKSxcblx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy52YWx1ZS5zdHlsZSxcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5wcm9wcy52YWx1ZS50aXRsZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclJlbW92ZUljb24oKSxcblx0XHRcdFx0dGhpcy5yZW5kZXJMYWJlbCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gVmFsdWU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblZhbHVlLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsIC8vIGRpc2FibGVkIHByb3AgcGFzc2VkIHRvIFJlYWN0U2VsZWN0XG5cdGlkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBVbmlxdWUgaWQgZm9yIHRoZSB2YWx1ZSAtIHVzZWQgZm9yIGFyaWFcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgY2xpY2sgb24gdmFsdWUgbGFiZWxcblx0b25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIHJlbW92YWwgb2YgdGhlIHZhbHVlXG5cdHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQgLy8gdGhlIG9wdGlvbiBvYmplY3QgZm9yIHRoaXMgdmFsdWVcbn07XG5cbi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vcmVhY3Qtc2VsZWN0XG4qL1xudmFyIHN0cmluZ2lmeVZhbHVlID0gZnVuY3Rpb24gc3RyaW5naWZ5VmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlICE9PSBudWxsICYmIEpTT04uc3RyaW5naWZ5KHZhbHVlKSB8fCAnJztcbn07XG5cbnZhciBzdHJpbmdPck5vZGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pO1xudmFyIHN0cmluZ09yTnVtYmVyID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pO1xuXG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBzaG91bGRTaG93VmFsdWUgPSBmdW5jdGlvbiBzaG91bGRTaG93VmFsdWUoc3RhdGUsIHByb3BzKSB7XG5cdHZhciBpbnB1dFZhbHVlID0gc3RhdGUuaW5wdXRWYWx1ZSxcblx0ICAgIGlzUHNldWRvRm9jdXNlZCA9IHN0YXRlLmlzUHNldWRvRm9jdXNlZCxcblx0ICAgIGlzRm9jdXNlZCA9IHN0YXRlLmlzRm9jdXNlZDtcblx0dmFyIG9uU2VsZWN0UmVzZXRzSW5wdXQgPSBwcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0O1xuXG5cblx0aWYgKCFpbnB1dFZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoIW9uU2VsZWN0UmVzZXRzSW5wdXQpIHtcblx0XHRyZXR1cm4gISghaXNGb2N1c2VkICYmIGlzUHNldWRvRm9jdXNlZCB8fCBpc0ZvY3VzZWQgJiYgIWlzUHNldWRvRm9jdXNlZCk7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgc2hvdWxkU2hvd1BsYWNlaG9sZGVyID0gZnVuY3Rpb24gc2hvdWxkU2hvd1BsYWNlaG9sZGVyKHN0YXRlLCBwcm9wcywgaXNPcGVuKSB7XG5cdHZhciBpbnB1dFZhbHVlID0gc3RhdGUuaW5wdXRWYWx1ZSxcblx0ICAgIGlzUHNldWRvRm9jdXNlZCA9IHN0YXRlLmlzUHNldWRvRm9jdXNlZCxcblx0ICAgIGlzRm9jdXNlZCA9IHN0YXRlLmlzRm9jdXNlZDtcblx0dmFyIG9uU2VsZWN0UmVzZXRzSW5wdXQgPSBwcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0O1xuXG5cblx0cmV0dXJuICFpbnB1dFZhbHVlIHx8ICFvblNlbGVjdFJlc2V0c0lucHV0ICYmICFpc09wZW4gJiYgIWlzUHNldWRvRm9jdXNlZCAmJiAhaXNGb2N1c2VkO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHZhbHVlIGZyb20gdGhlIGdpdmVuIG9wdGlvbnMgYW5kIHZhbHVlS2V5XG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ8QXJyYXl9IHZhbHVlXHQtIHRoZSBzZWxlY3RlZCB2YWx1ZShzKVxuICogQHBhcmFtIHtPYmplY3R9XHRcdCBwcm9wc1x0LSB0aGUgU2VsZWN0IGNvbXBvbmVudCdzIHByb3BzIChvciBuZXh0UHJvcHMpXG4gKi9cbnZhciBleHBhbmRWYWx1ZSA9IGZ1bmN0aW9uIGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcykge1xuXHR2YXIgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cdGlmICh2YWx1ZVR5cGUgIT09ICdzdHJpbmcnICYmIHZhbHVlVHlwZSAhPT0gJ251bWJlcicgJiYgdmFsdWVUeXBlICE9PSAnYm9vbGVhbicpIHJldHVybiB2YWx1ZTtcblx0dmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuXHQgICAgdmFsdWVLZXkgPSBwcm9wcy52YWx1ZUtleTtcblxuXHRpZiAoIW9wdGlvbnMpIHJldHVybjtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKFN0cmluZyhvcHRpb25zW2ldW3ZhbHVlS2V5XSkgPT09IFN0cmluZyh2YWx1ZSkpIHJldHVybiBvcHRpb25zW2ldO1xuXHR9XG59O1xuXG52YXIgaGFuZGxlUmVxdWlyZWQgPSBmdW5jdGlvbiBoYW5kbGVSZXF1aXJlZCh2YWx1ZSwgbXVsdGkpIHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBtdWx0aSA/IHZhbHVlLmxlbmd0aCA9PT0gMCA6IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG59O1xuXG52YXIgU2VsZWN0JDEgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3QpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRbJ2NsZWFyVmFsdWUnLCAnZm9jdXNPcHRpb24nLCAnZ2V0T3B0aW9uTGFiZWwnLCAnaGFuZGxlSW5wdXRCbHVyJywgJ2hhbmRsZUlucHV0Q2hhbmdlJywgJ2hhbmRsZUlucHV0Rm9jdXMnLCAnaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZScsICdoYW5kbGVLZXlEb3duJywgJ2hhbmRsZU1lbnVTY3JvbGwnLCAnaGFuZGxlTW91c2VEb3duJywgJ2hhbmRsZU1vdXNlRG93bk9uQXJyb3cnLCAnaGFuZGxlTW91c2VEb3duT25NZW51JywgJ2hhbmRsZVRvdWNoRW5kJywgJ2hhbmRsZVRvdWNoRW5kQ2xlYXJWYWx1ZScsICdoYW5kbGVUb3VjaE1vdmUnLCAnaGFuZGxlVG91Y2hPdXRzaWRlJywgJ2hhbmRsZVRvdWNoU3RhcnQnLCAnaGFuZGxlVmFsdWVDbGljaycsICdvbk9wdGlvblJlZicsICdyZW1vdmVWYWx1ZScsICdzZWxlY3RWYWx1ZSddLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRyZXR1cm4gX3RoaXNbZm5dID0gX3RoaXNbZm5dLmJpbmQoX3RoaXMpO1xuXHRcdH0pO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFZhbHVlOiAnJyxcblx0XHRcdGlzRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRcdHRoaXMuX2luc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKHRoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpICsgJy0nO1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHJlcXVpcmVkOiBoYW5kbGVSZXF1aXJlZCh2YWx1ZUFycmF5WzBdLCB0aGlzLnByb3BzLm11bHRpKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLmF1dG9mb2N1cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignV2FybmluZzogVGhlIGF1dG9mb2N1cyBwcm9wIGhhcyBjaGFuZ2VkIHRvIGF1dG9Gb2N1cywgc3VwcG9ydCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgcmVhY3Qtc2VsZWN0QDEuMCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzIHx8IHRoaXMucHJvcHMuYXV0b2ZvY3VzKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KG5leHRQcm9wcy52YWx1ZSwgbmV4dFByb3BzKTtcblxuXHRcdFx0aWYgKG5leHRQcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRyZXF1aXJlZDogaGFuZGxlUmVxdWlyZWQodmFsdWVBcnJheVswXSwgbmV4dFByb3BzLm11bHRpKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHQvLyBVc2VkIHRvIGJlIHJlcXVpcmVkIGJ1dCBpdCdzIG5vdCBhbnkgbW9yZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcmVxdWlyZWQ6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSAmJiBuZXh0UHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHRcdC8vIGZvY3VzIHRvIHRoZSBzZWxlY3RlZCBvcHRpb25cblx0XHRcdGlmICh0aGlzLm1lbnUgJiYgdGhpcy5mb2N1c2VkICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICF0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24pIHtcblx0XHRcdFx0dmFyIGZvY3VzZWRPcHRpb25Ob2RlID0gZmluZERPTU5vZGUodGhpcy5mb2N1c2VkKTtcblx0XHRcdFx0dmFyIG1lbnVOb2RlID0gZmluZERPTU5vZGUodGhpcy5tZW51KTtcblxuXHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gbWVudU5vZGUuc2Nyb2xsVG9wO1xuXHRcdFx0XHR2YXIgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgbWVudU5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR2YXIgb3B0aW9uVG9wID0gZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0VG9wO1xuXHRcdFx0XHR2YXIgb3B0aW9uQm90dG9tID0gb3B0aW9uVG9wICsgZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHRcdGlmIChzY3JvbGxUb3AgPiBvcHRpb25Ub3AgfHwgc2Nyb2xsQm90dG9tIDwgb3B0aW9uQm90dG9tKSB7XG5cdFx0XHRcdFx0bWVudU5vZGUuc2Nyb2xsVG9wID0gZm9jdXNlZE9wdGlvbk5vZGUub2Zmc2V0VG9wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2Ugc3RpbGwgc2V0IGhhc1Njcm9sbGVkVG9PcHRpb24gdG8gdHJ1ZSBldmVuIGlmIHdlIGRpZG4ndFxuXHRcdFx0XHQvLyBhY3R1YWxseSBuZWVkIHRvIHNjcm9sbCwgYXMgd2UndmUgc3RpbGwgY29uZmlybWVkIHRoYXQgdGhlXG5cdFx0XHRcdC8vIG9wdGlvbiBpcyBpbiB2aWV3LlxuXHRcdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5tZW51KSB7XG5cdFx0XHRcdHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRcdHZhciBmb2N1c2VkRE9NID0gZmluZERPTU5vZGUodGhpcy5mb2N1c2VkKTtcblx0XHRcdFx0dmFyIG1lbnVET00gPSBmaW5kRE9NTm9kZSh0aGlzLm1lbnUpO1xuXHRcdFx0XHR2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHR2YXIgbWVudVJlY3QgPSBtZW51RE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAoZm9jdXNlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tKSB7XG5cdFx0XHRcdFx0bWVudURPTS5zY3JvbGxUb3AgPSBmb2N1c2VkRE9NLm9mZnNldFRvcCArIGZvY3VzZWRET00uY2xpZW50SGVpZ2h0IC0gbWVudURPTS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZm9jdXNlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG5cdFx0XHRcdFx0bWVudURPTS5zY3JvbGxUb3AgPSBmb2N1c2VkRE9NLm9mZnNldFRvcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuc2Nyb2xsTWVudUludG9WaWV3ICYmIHRoaXMubWVudUNvbnRhaW5lcikge1xuXHRcdFx0XHR2YXIgbWVudUNvbnRhaW5lclJlY3QgPSB0aGlzLm1lbnVDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCBtZW51Q29udGFpbmVyUmVjdC5ib3R0b20gKyB0aGlzLnByb3BzLm1lbnVCdWZmZXIpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgbWVudUNvbnRhaW5lclJlY3QuYm90dG9tICsgdGhpcy5wcm9wcy5tZW51QnVmZmVyIC0gd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZQcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZTdGF0ZS5pc09wZW4gIT09IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQodGhpcy5zdGF0ZS5pc09wZW4pO1xuXHRcdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMuc3RhdGUuaXNPcGVuID8gdGhpcy5wcm9wcy5vbk9wZW4gOiB0aGlzLnByb3BzLm9uQ2xvc2U7XG5cdFx0XHRcdGhhbmRsZXIgJiYgaGFuZGxlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KGZhbHNlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd0b2dnbGVUb3VjaE91dHNpZGVFdmVudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KGVuYWJsZWQpIHtcblx0XHRcdHZhciBldmVudFRvZ2dsZXJOYW1lID0gZW5hYmxlZCA/IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnIDogZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdkZXRhY2hFdmVudCc7XG5cdFx0XHR2YXIgcHJlZiA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgPyAnJyA6ICdvbic7XG5cblx0XHRcdGRvY3VtZW50W2V2ZW50VG9nZ2xlck5hbWVdKHByZWYgKyAndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHRcdGRvY3VtZW50W2V2ZW50VG9nZ2xlck5hbWVdKHByZWYgKyAnbW91c2Vkb3duJywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoT3V0c2lkZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoT3V0c2lkZShldmVudCkge1xuXHRcdFx0Ly8gaGFuZGxlIHRvdWNoIG91dHNpZGUgb24gaW9zIHRvIGRpc21pc3MgbWVudVxuXHRcdFx0aWYgKHRoaXMud3JhcHBlciAmJiAhdGhpcy53cmFwcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYmx1cklucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cklucHV0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cdFx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBGaXJlIHRoZSBtb3VzZSBldmVudHNcblx0XHRcdHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdC8vIENsZWFyIHRoZSB2YWx1ZVxuXHRcdFx0dGhpcy5jbGVhclZhbHVlKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRoaXMucHJvcHMub3Blbk9uQ2xpY2s7XG5cdFx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNPcGVuOiB0cnVlLFxuXHRcdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBmb3IgdGhlIG5vbi1zZWFyY2hhYmxlIHNlbGVjdCwgdG9nZ2xlIHRoZSBtZW51XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHQvLyBUaGlzIGNvZGUgbWVhbnMgdGhhdCBpZiBhIHNlbGVjdCBpcyBzZWFyY2hhYmxlLCBvbkNsaWNrIHRoZSBvcHRpb25zIG1lbnUgd2lsbCBub3QgYXBwZWFyLCBvbmx5IG9uIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBpdCBvcGVuLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46ICF0aGlzLnN0YXRlLmlzT3Blbixcblx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBudWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0Ly8gT24gaU9TLCB3ZSBjYW4gZ2V0IGludG8gYSBzdGF0ZSB3aGVyZSB3ZSB0aGluayB0aGUgaW5wdXQgaXMgZm9jdXNlZCBidXQgaXQgaXNuJ3QgcmVhbGx5LFxuXHRcdFx0XHQvLyBzaW5jZSBpT1MgaWdub3JlcyBwcm9ncmFtbWF0aWMgY2FsbHMgdG8gaW5wdXQuZm9jdXMoKSB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IGEgY2xpY2sgZXZlbnQuXG5cdFx0XHRcdC8vIENhbGwgZm9jdXMoKSBhZ2FpbiBoZXJlIHRvIGJlIHNhZmUuXG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblxuXHRcdFx0XHR2YXIgaW5wdXQgPSB0aGlzLmlucHV0O1xuXHRcdFx0XHR2YXIgdG9PcGVuID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGlucHV0LmdldElucHV0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Ly8gR2V0IHRoZSBhY3R1YWwgRE9NIGlucHV0IGlmIHRoZSByZWYgaXMgYW4gPEF1dG9zaXplSW5wdXQgLz4gY29tcG9uZW50XG5cdFx0XHRcdFx0aW5wdXQgPSBpbnB1dC5nZXRJbnB1dCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2xlYXJzIHRoZSB2YWx1ZSBzbyB0aGF0IHRoZSBjdXJzb3Igd2lsbCBiZSBhdCB0aGUgZW5kIG9mIGlucHV0IHdoZW4gdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XG5cblx0XHRcdFx0aWYgKHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhcikge1xuXHRcdFx0XHRcdHRvT3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgdGhlIGlucHV0IGlzIGZvY3VzZWQsIGVuc3VyZSB0aGUgbWVudSBpcyBvcGVuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogdG9PcGVuLFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyd2lzZSwgZm9jdXMgdGhlIGlucHV0IGFuZCBvcGVuIHRoZSBtZW51XG5cdFx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gdGhpcy5wcm9wcy5vcGVuT25DbGljaztcblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgZm9jdXNlZE9wdGlvbjogbnVsbCB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd25PbkFycm93Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25BcnJvdyhldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBvciBpZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyBjbG9zZSB0aGUgbWVudVxuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgdGhlIG1lbnUgaXNuJ3Qgb3BlbiwgbGV0IHRoZSBldmVudCBidWJibGUgdG8gdGhlIG1haW4gaGFuZGxlTW91c2VEb3duXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd25Pbk1lbnUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Pbk1lbnUoZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRydWU7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xvc2VNZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DbG9zZVJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyksXG5cdFx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRGb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Rm9jdXMoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cblx0XHRcdHZhciB0b09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbiB8fCB0aGlzLl9vcGVuQWZ0ZXJGb2N1cyB8fCB0aGlzLnByb3BzLm9wZW5PbkZvY3VzO1xuXHRcdFx0dG9PcGVuID0gdGhpcy5fZm9jdXNBZnRlckNsZWFyID8gZmFsc2UgOiB0b09wZW47IC8vaWYgZm9jdXMgaGFwcGVucyBhZnRlciBjbGVhciB2YWx1ZXMsIGRvbid0IG9wZW4gZHJvcGRvd24geWV0LlxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc0ZvY3VzZWQ6IHRydWUsXG5cdFx0XHRcdGlzT3BlbjogISF0b09wZW5cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSBmYWxzZTtcblx0XHRcdHRoaXMuX29wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRCbHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKGV2ZW50KSB7XG5cdFx0XHQvLyBUaGUgY2hlY2sgZm9yIG1lbnUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgSUUxMSdzIHNjcm9sbGJhciBmcm9tIGNsb3NpbmcgdGhlIG1lbnUgaW4gY2VydGFpbiBjb250ZXh0cy5cblx0XHRcdGlmICh0aGlzLm1lbnUgJiYgKHRoaXMubWVudSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCB0aGlzLm1lbnUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9uQmx1cnJlZFN0YXRlID0ge1xuXHRcdFx0XHRpc0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25CbHVyUmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0b25CbHVycmVkU3RhdGUuaW5wdXRWYWx1ZSA9IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKG9uQmx1cnJlZFN0YXRlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVJbnB1dENoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG5cdFx0XHR2YXIgbmV3SW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRcdG5ld0lucHV0VmFsdWUgPSB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UobmV3SW5wdXRWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFZhbHVlOiBuZXdJbnB1dFZhbHVlLFxuXHRcdFx0XHRpc09wZW46IHRydWUsXG5cdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NldElucHV0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuXHRcdFx0XHRpZiAobmV4dFN0YXRlICE9IG51bGwgJiYgKHR5cGVvZiBuZXh0U3RhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRTdGF0ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld1ZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFZhbHVlOiBuZXdWYWx1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWVDaGFuZ2UobmV3VmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dmFyIG5leHRTdGF0ZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSk7XG5cdFx0XHRcdC8vIE5vdGU6ICE9IHVzZWQgZGVsaWJlcmF0ZWx5IGhlcmUgdG8gY2F0Y2ggdW5kZWZpbmVkIGFuZCBudWxsXG5cdFx0XHRcdGlmIChuZXh0U3RhdGUgIT0gbnVsbCAmJiAodHlwZW9mIG5leHRTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dFN0YXRlKSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0bmV3VmFsdWUgPSAnJyArIG5leHRTdGF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUtleURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25JbnB1dEtleURvd24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbklucHV0S2V5RG93bihldmVudCk7XG5cdFx0XHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0XHRjYXNlIDg6XG5cdFx0XHRcdFx0Ly8gYmFja3NwYWNlXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy5iYWNrc3BhY2VSZW1vdmVzKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb3BWYWx1ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHRcdC8vIHRhYlxuXHRcdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSB8fCAhdGhpcy5zdGF0ZS5pc09wZW4gfHwgIXRoaXMucHJvcHMudGFiU2VsZWN0c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzpcblx0XHRcdFx0XHQvLyBlbnRlclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjc6XG5cdFx0XHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuY2xlYXJhYmxlICYmIHRoaXMucHJvcHMuZXNjYXBlQ2xlYXJzVmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xlYXJWYWx1ZShldmVudCk7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0Ly8gc3BhY2Vcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dE9wdGlvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0Rm9jdXNlZE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdC8vIHVwXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUHJldmlvdXNPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0XHQvLyBkb3duXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMzOlxuXHRcdFx0XHRcdC8vIHBhZ2UgdXBcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNQYWdlVXBPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0XHQvLyBwYWdlIGRvd25cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNQYWdlRG93bk9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM1OlxuXHRcdFx0XHRcdC8vIGVuZCBrZXlcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNFbmRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNjpcblx0XHRcdFx0XHQvLyBob21lIGtleVxuXHRcdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1N0YXJ0T3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDY6XG5cdFx0XHRcdFx0Ly8gZGVsZXRlXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy5kZWxldGVSZW1vdmVzKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb3BWYWx1ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVWYWx1ZUNsaWNrJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVmFsdWVDbGljayhvcHRpb24sIGV2ZW50KSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMub25WYWx1ZUNsaWNrKSByZXR1cm47XG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVDbGljayhvcHRpb24sIGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNZW51U2Nyb2xsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWVudVNjcm9sbChldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm9uTWVudVNjcm9sbFRvQm90dG9tKSByZXR1cm47XG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0XHRpZiAodGFyZ2V0LnNjcm9sbEhlaWdodCA+IHRhcmdldC5vZmZzZXRIZWlnaHQgJiYgdGFyZ2V0LnNjcm9sbEhlaWdodCAtIHRhcmdldC5vZmZzZXRIZWlnaHQgLSB0YXJnZXQuc2Nyb2xsVG9wIDw9IDApIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbk1lbnVTY3JvbGxUb0JvdHRvbSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldE9wdGlvbkxhYmVsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3ApIHtcblx0XHRcdHJldHVybiBvcFt0aGlzLnByb3BzLmxhYmVsS2V5XTtcblx0XHR9XG5cblx0XHQvKipcbiAgICogVHVybnMgYSB2YWx1ZSBpbnRvIGFuIGFycmF5IGZyb20gdGhlIGdpdmVuIG9wdGlvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfEFycmF5fSB2YWx1ZVx0XHQtIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0IGlucHV0XG4gICAqIEBwYXJhbSB7T2JqZWN0fVx0XHRuZXh0UHJvcHNcdC0gb3B0aW9uYWxseSBzcGVjaWZ5IHRoZSBuZXh0UHJvcHMgc28gdGhlIHJldHVybmVkIGFycmF5IHVzZXMgdGhlIGxhdGVzdCBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm5zXHR7QXJyYXl9XHR0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCByZXByZXNlbnRlZCBpbiBhbiBhcnJheVxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0VmFsdWVBcnJheScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlQXJyYXkodmFsdWUpIHtcblx0XHRcdHZhciBuZXh0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0LyoqIHN1cHBvcnQgb3B0aW9uYWxseSBwYXNzaW5nIGluIHRoZSBgbmV4dFByb3BzYCBzbyBgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc2AgdXBkYXRlcyB3aWxsIGZ1bmN0aW9uIGFzIGV4cGVjdGVkICovXG5cdFx0XHR2YXIgcHJvcHMgPSAodHlwZW9mIG5leHRQcm9wcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dFByb3BzKSkgPT09ICdvYmplY3QnID8gbmV4dFByb3BzIDogdGhpcy5wcm9wcztcblx0XHRcdGlmIChwcm9wcy5tdWx0aSkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQocHJvcHMuZGVsaW1pdGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBbXTtcblx0XHRcdFx0XHR2YWx1ZSA9IFt2YWx1ZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKTtcblx0XHRcdFx0fSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGV4cGFuZGVkVmFsdWUgPSBleHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpO1xuXHRcdFx0cmV0dXJuIGV4cGFuZGVkVmFsdWUgPyBbZXhwYW5kZWRWYWx1ZV0gOiBbXTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b0JsdXIpIHtcblx0XHRcdFx0dGhpcy5ibHVySW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHZhciByZXF1aXJlZCA9IGhhbmRsZVJlcXVpcmVkKHZhbHVlLCB0aGlzLnByb3BzLm11bHRpKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlcXVpcmVkOiByZXF1aXJlZCB9KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnNpbXBsZVZhbHVlICYmIHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gdGhpcy5wcm9wcy5tdWx0aSA/IHZhbHVlLm1hcChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBpW190aGlzMi5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpIDogdmFsdWVbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZWxlY3RWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdFx0Ly8gTk9URTogd2UgYWN0dWFsbHkgYWRkL3NldCB0aGUgdmFsdWUgaW4gYSBjYWxsYmFjayB0byBtYWtlIHN1cmUgdGhlXG5cdFx0XHQvLyBpbnB1dCB2YWx1ZSBpcyBlbXB0eSB0byBhdm9pZCBzdHlsaW5nIGlzc3VlcyBpbiBDaHJvbWVcblx0XHRcdGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdXBkYXRlZFZhbHVlID0gdGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0ID8gJycgOiB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXg6IG51bGwsXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKHVwZGF0ZWRWYWx1ZSksXG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0XG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVBcnJheSA9IF90aGlzMy5nZXRWYWx1ZUFycmF5KF90aGlzMy5wcm9wcy52YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlQXJyYXkuc29tZShmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGlbX3RoaXMzLnByb3BzLnZhbHVlS2V5XSA9PT0gdmFsdWVbX3RoaXMzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdFx0XHR9KSkge1xuXHRcdFx0XHRcdFx0X3RoaXMzLnJlbW92ZVZhbHVlKHZhbHVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3RoaXMzLmFkZFZhbHVlKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKHVwZGF0ZWRWYWx1ZSksXG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0LFxuXHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogdGhpcy5zdGF0ZS5pc0ZvY3VzZWRcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdF90aGlzMy5zZXRWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2FkZFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYWRkVmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0dmFyIHZpc2libGVPcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0cmV0dXJuICF2YWwuZGlzYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBsYXN0VmFsdWVJbmRleCA9IHZpc2libGVPcHRpb25zLmluZGV4T2YodmFsdWUpO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSh2YWx1ZUFycmF5LmNvbmNhdCh2YWx1ZSkpO1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCAtIDEgPT09IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHRcdC8vIHRoZSBsYXN0IG9wdGlvbiB3YXMgc2VsZWN0ZWQ7IGZvY3VzIHRoZSBzZWNvbmQtbGFzdCBvbmVcblx0XHRcdFx0dGhpcy5mb2N1c09wdGlvbih2aXNpYmxlT3B0aW9uc1tsYXN0VmFsdWVJbmRleCAtIDFdKTtcblx0XHRcdH0gZWxzZSBpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoID4gbGFzdFZhbHVlSW5kZXgpIHtcblx0XHRcdFx0Ly8gZm9jdXMgdGhlIG9wdGlvbiBiZWxvdyB0aGUgc2VsZWN0ZWQgb25lXG5cdFx0XHRcdHRoaXMuZm9jdXNPcHRpb24odmlzaWJsZU9wdGlvbnNbbGFzdFZhbHVlSW5kZXggKyAxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncG9wVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3BWYWx1ZSgpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0aWYgKCF2YWx1ZUFycmF5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0aWYgKHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXS5jbGVhcmFibGVWYWx1ZSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5wcm9wcy5tdWx0aSA/IHZhbHVlQXJyYXkuc2xpY2UoMCwgdmFsdWVBcnJheS5sZW5ndGggLSAxKSA6IG51bGwpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbW92ZVZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmFsdWUodmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczQgPSB0aGlzO1xuXG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0cmV0dXJuIGlbX3RoaXM0LnByb3BzLnZhbHVlS2V5XSAhPT0gdmFsdWVbX3RoaXM0LnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjbGVhclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xlYXJWYWx1ZShldmVudCkge1xuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdFx0Ly8gYnV0dG9uLCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5zZXRWYWx1ZSh0aGlzLmdldFJlc2V0VmFsdWUoKSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKCcnKSxcblx0XHRcdFx0aXNPcGVuOiBmYWxzZVxuXHRcdFx0fSwgdGhpcy5mb2N1cyk7XG5cblx0XHRcdHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0UmVzZXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFJlc2V0VmFsdWUoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXNldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHMucmVzZXRWYWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKG9wdGlvbikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb246IG9wdGlvblxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNOZXh0T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNOZXh0T3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCduZXh0Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNQcmV2aW91c09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3ByZXZpb3VzJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNQYWdlVXBPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1BhZ2VVcE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV91cCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUGFnZURvd25PcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1BhZ2VEb3duT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwYWdlX2Rvd24nKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1N0YXJ0T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNTdGFydE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignc3RhcnQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c0VuZE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzRW5kT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdlbmQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c0FkamFjZW50T3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNBZGphY2VudE9wdGlvbihkaXIpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB7IG9wdGlvbjogb3B0aW9uLCBpbmRleDogaW5kZXggfTtcblx0XHRcdH0pLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG5cdFx0XHRcdHJldHVybiAhb3B0aW9uLm9wdGlvbi5kaXNhYmxlZDtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR2YXIgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogdGhpcy5fZm9jdXNlZE9wdGlvbiB8fCAob3B0aW9ucy5sZW5ndGggPyBvcHRpb25zW2RpciA9PT0gJ25leHQnID8gMCA6IG9wdGlvbnMubGVuZ3RoIC0gMV0ub3B0aW9uIDogbnVsbCksXG5cdFx0XHRcdFx0aXNPcGVuOiB0cnVlXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0XHRuZXdTdGF0ZS5pbnB1dFZhbHVlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdHZhciBmb2N1c2VkSW5kZXggPSAtMTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9jdXNlZE9wdGlvbiA9PT0gb3B0aW9uc1tpXS5vcHRpb24pIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09PSAnbmV4dCcgJiYgZm9jdXNlZEluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncHJldmlvdXMnKSB7XG5cdFx0XHRcdGlmIChmb2N1c2VkSW5kZXggPiAwKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gZm9jdXNlZEluZGV4IC0gMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAnc3RhcnQnKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ2VuZCcpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdwYWdlX3VwJykge1xuXHRcdFx0XHR2YXIgcG90ZW50aWFsSW5kZXggPSBmb2N1c2VkSW5kZXggLSB0aGlzLnByb3BzLnBhZ2VTaXplO1xuXHRcdFx0XHRpZiAocG90ZW50aWFsSW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBwb3RlbnRpYWxJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdwYWdlX2Rvd24nKSB7XG5cdFx0XHRcdHZhciBfcG90ZW50aWFsSW5kZXggPSBmb2N1c2VkSW5kZXggKyB0aGlzLnByb3BzLnBhZ2VTaXplO1xuXHRcdFx0XHRpZiAoX3BvdGVudGlhbEluZGV4ID4gb3B0aW9ucy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IF9wb3RlbnRpYWxJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4OiBvcHRpb25zW2ZvY3VzZWRJbmRleF0uaW5kZXgsXG5cdFx0XHRcdGZvY3VzZWRPcHRpb246IG9wdGlvbnNbZm9jdXNlZEluZGV4XS5vcHRpb25cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEZvY3VzZWRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2VkT3B0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2ZvY3VzZWRPcHRpb247XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Rm9jdXNlZE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdEZvY3VzZWRPcHRpb24oKSB7XG5cdFx0XHRpZiAodGhpcy5fZm9jdXNlZE9wdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3RWYWx1ZSh0aGlzLl9mb2N1c2VkT3B0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJMb2FkaW5nJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZygpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5pc0xvYWRpbmcpIHJldHVybjtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LWxvYWRpbmctem9uZScsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdTZWxlY3QtbG9hZGluZycgfSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJWYWx1ZSh2YWx1ZUFycmF5LCBpc09wZW4pIHtcblx0XHRcdHZhciBfdGhpczUgPSB0aGlzO1xuXG5cdFx0XHR2YXIgcmVuZGVyTGFiZWwgPSB0aGlzLnByb3BzLnZhbHVlUmVuZGVyZXIgfHwgdGhpcy5nZXRPcHRpb25MYWJlbDtcblx0XHRcdHZhciBWYWx1ZUNvbXBvbmVudCA9IHRoaXMucHJvcHMudmFsdWVDb21wb25lbnQ7XG5cdFx0XHRpZiAoIXZhbHVlQXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBzaG93UGxhY2Vob2xkZXIgPSBzaG91bGRTaG93UGxhY2Vob2xkZXIodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcywgaXNPcGVuKTtcblx0XHRcdFx0cmV0dXJuIHNob3dQbGFjZWhvbGRlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtcGxhY2Vob2xkZXInIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXHRcdFx0XHQpIDogbnVsbDtcblx0XHRcdH1cblx0XHRcdHZhciBvbkNsaWNrID0gdGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sgPyB0aGlzLmhhbmRsZVZhbHVlQ2xpY2sgOiBudWxsO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuXHRcdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0VmFsdWVDb21wb25lbnQsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiBfdGhpczUucHJvcHMuZGlzYWJsZWQgfHwgdmFsdWUuY2xlYXJhYmxlVmFsdWUgPT09IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRpZDogX3RoaXM1Ll9pbnN0YW5jZVByZWZpeCArICctdmFsdWUtJyArIGksXG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiBfdGhpczUuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdFx0XHRrZXk6ICd2YWx1ZS0nICsgaSArICctJyArIHZhbHVlW190aGlzNS5wcm9wcy52YWx1ZUtleV0sXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9uQ2xpY2ssXG5cdFx0XHRcdFx0XHRcdG9uUmVtb3ZlOiBfdGhpczUucmVtb3ZlVmFsdWUsXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBfdGhpczUucHJvcHMucGxhY2Vob2xkZXIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWVzOiB2YWx1ZUFycmF5XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cmVuZGVyTGFiZWwodmFsdWUsIGkpLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1hcmlhLW9ubHknIH0sXG5cdFx0XHRcdFx0XHRcdCdcXHhBMCdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd1ZhbHVlKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpKSB7XG5cdFx0XHRcdGlmIChpc09wZW4pIG9uQ2xpY2sgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUtaXRlbScsXG5cdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogdGhpcy5faW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBvbkNsaWNrLFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWVBcnJheVswXVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVuZGVyTGFiZWwodmFsdWVBcnJheVswXSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb25JbmRleCkge1xuXHRcdFx0dmFyIF9jbGFzc05hbWVzLFxuXHRcdFx0ICAgIF90aGlzNiA9IHRoaXM7XG5cblx0XHRcdHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdTZWxlY3QtaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lKTtcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3BlbjtcblxuXHRcdFx0dmFyIGFyaWFPd25zID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0JywgaXNPcGVuKSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCB0aGlzLnByb3BzLm11bHRpICYmICF0aGlzLnByb3BzLmRpc2FibGVkICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUpLCBfY2xhc3NOYW1lcykpO1xuXG5cdFx0XHR2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHRpZiAodmFsdWUgJiYgIXRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCAmJiAhdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0Ly8gaXQgaGlkZXMgaW5wdXQgdmFsdWUgd2hlbiBpdCBpcyBub3QgZm9jdXNlZCBhbmQgd2FzIG5vdCByZXNldCBvbiBzZWxlY3Rcblx0XHRcdFx0dmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5pbnB1dFByb3BzLCB7XG5cdFx0XHRcdCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gPyB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBmb2N1c2VkT3B0aW9uSW5kZXggOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnLFxuXHRcdFx0XHQnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSxcblx0XHRcdFx0J2FyaWEtZXhwYW5kZWQnOiAnJyArIGlzT3Blbixcblx0XHRcdFx0J2FyaWEtaGFzcG9wdXAnOiAnJyArIGlzT3Blbixcblx0XHRcdFx0J2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG5cdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdFx0J2FyaWEtb3ducyc6IGFyaWFPd25zLFxuXHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcblx0XHRcdFx0b25Gb2N1czogdGhpcy5oYW5kbGVJbnB1dEZvY3VzLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWY7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdHJlcXVpcmVkOiB0aGlzLnN0YXRlLnJlcXVpcmVkLFxuXHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuaW5wdXRSZW5kZXJlcikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKGlucHV0UHJvcHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdHZhciBkaXZQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMuaW5wdXRQcm9wcywgW10pO1xuXG5cblx0XHRcdFx0dmFyIF9hcmlhT3ducyA9IGNsYXNzTmFtZXMoZGVmaW5lUHJvcGVydHkoe30sIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0JywgaXNPcGVuKSk7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHtcblx0XHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6IGlzT3Blbixcblx0XHRcdFx0XHQnYXJpYS1vd25zJzogX2FyaWFPd25zLFxuXHRcdFx0XHRcdCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gPyB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBmb2N1c2VkT3B0aW9uSW5kZXggOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnLFxuXHRcdFx0XHRcdCdhcmlhLWRpc2FibGVkJzogJycgKyB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRcdG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1cyxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWYyO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cm9sZTogJ2NvbWJvYm94Jyxcblx0XHRcdFx0XHRzdHlsZTogeyBib3JkZXI6IDAsIHdpZHRoOiAxLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9LFxuXHRcdFx0XHRcdHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4IHx8IDBcblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBdXRvc2l6ZUlucHV0LCBfZXh0ZW5kcyh7IGlkOiB0aGlzLnByb3BzLmlkIH0sIGlucHV0UHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIG1pbldpZHRoOiAnNScgfSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBrZXk6ICdpbnB1dC13cmFwJywgc3R5bGU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSB9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgaWQ6IHRoaXMucHJvcHMuaWQgfSwgaW5wdXRQcm9wcykpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckNsZWFyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXIoKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5jbGVhcmFibGUgfHwgIXZhbHVlQXJyYXkubGVuZ3RoIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5pc0xvYWRpbmcpIHJldHVybjtcblx0XHRcdHZhciBhcmlhTGFiZWwgPSB0aGlzLnByb3BzLm11bHRpID8gdGhpcy5wcm9wcy5jbGVhckFsbFRleHQgOiB0aGlzLnByb3BzLmNsZWFyVmFsdWVUZXh0O1xuXHRcdFx0dmFyIGNsZWFyID0gdGhpcy5wcm9wcy5jbGVhclJlbmRlcmVyKCk7XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY2xlYXItem9uZScsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuY2xlYXJWYWx1ZSxcblx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kQ2xlYXJWYWx1ZSxcblx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0dGl0bGU6IGFyaWFMYWJlbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjbGVhclxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJBcnJvdycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckFycm93KCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmFycm93UmVuZGVyZXIpIHJldHVybjtcblxuXHRcdFx0dmFyIG9uTW91c2VEb3duID0gdGhpcy5oYW5kbGVNb3VzZURvd25PbkFycm93O1xuXHRcdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXHRcdFx0dmFyIGFycm93ID0gdGhpcy5wcm9wcy5hcnJvd1JlbmRlcmVyKHsgb25Nb3VzZURvd246IG9uTW91c2VEb3duLCBpc09wZW46IGlzT3BlbiB9KTtcblxuXHRcdFx0aWYgKCFhcnJvdykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1hcnJvdy16b25lJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0XHRcdFx0fSxcblx0XHRcdFx0YXJyb3dcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZmlsdGVyT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMkJDEoZXhjbHVkZU9wdGlvbnMpIHtcblx0XHRcdHZhciBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucykge1xuXHRcdFx0XHQvLyBNYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGJvb2xlYW4gYXR0cmlidXRlXG5cdFx0XHRcdHZhciBmaWx0ZXJPcHRpb25zJCQxID0gdHlwZW9mIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucyA6IGZpbHRlck9wdGlvbnM7XG5cblx0XHRcdFx0cmV0dXJuIGZpbHRlck9wdGlvbnMkJDEob3B0aW9ucywgZmlsdGVyVmFsdWUsIGV4Y2x1ZGVPcHRpb25zLCB7XG5cdFx0XHRcdFx0ZmlsdGVyT3B0aW9uOiB0aGlzLnByb3BzLmZpbHRlck9wdGlvbixcblx0XHRcdFx0XHRpZ25vcmVBY2NlbnRzOiB0aGlzLnByb3BzLmlnbm9yZUFjY2VudHMsXG5cdFx0XHRcdFx0aWdub3JlQ2FzZTogdGhpcy5wcm9wcy5pZ25vcmVDYXNlLFxuXHRcdFx0XHRcdGxhYmVsS2V5OiB0aGlzLnByb3BzLmxhYmVsS2V5LFxuXHRcdFx0XHRcdG1hdGNoUG9zOiB0aGlzLnByb3BzLm1hdGNoUG9zLFxuXHRcdFx0XHRcdG1hdGNoUHJvcDogdGhpcy5wcm9wcy5tYXRjaFByb3AsXG5cdFx0XHRcdFx0dHJpbUZpbHRlcjogdGhpcy5wcm9wcy50cmltRmlsdGVyLFxuXHRcdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnByb3BzLnZhbHVlS2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25PcHRpb25SZWYnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbk9wdGlvblJlZihyZWYsIGlzRm9jdXNlZCkge1xuXHRcdFx0aWYgKGlzRm9jdXNlZCkge1xuXHRcdFx0XHR0aGlzLmZvY3VzZWQgPSByZWY7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTWVudScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnUob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbikge1xuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHMubWVudVJlbmRlcmVyKHtcblx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuXHRcdFx0XHRcdGZvY3VzT3B0aW9uOiB0aGlzLmZvY3VzT3B0aW9uLFxuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSxcblx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogdGhpcy5faW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMucHJvcHMubGFiZWxLZXksXG5cdFx0XHRcdFx0b25Gb2N1czogdGhpcy5mb2N1c09wdGlvbixcblx0XHRcdFx0XHRvbk9wdGlvblJlZjogdGhpcy5vbk9wdGlvblJlZixcblx0XHRcdFx0XHRvblNlbGVjdDogdGhpcy5zZWxlY3RWYWx1ZSxcblx0XHRcdFx0XHRvcHRpb25DbGFzc05hbWU6IHRoaXMucHJvcHMub3B0aW9uQ2xhc3NOYW1lLFxuXHRcdFx0XHRcdG9wdGlvbkNvbXBvbmVudDogdGhpcy5wcm9wcy5vcHRpb25Db21wb25lbnQsXG5cdFx0XHRcdFx0b3B0aW9uUmVuZGVyZXI6IHRoaXMucHJvcHMub3B0aW9uUmVuZGVyZXIgfHwgdGhpcy5nZXRPcHRpb25MYWJlbCxcblx0XHRcdFx0XHRvcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0XHRcdHJlbW92ZVZhbHVlOiB0aGlzLnJlbW92ZVZhbHVlLFxuXHRcdFx0XHRcdHNlbGVjdFZhbHVlOiB0aGlzLnNlbGVjdFZhbHVlLFxuXHRcdFx0XHRcdHZhbHVlQXJyYXk6IHZhbHVlQXJyYXksXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMucHJvcHMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMubm9SZXN1bHRzVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1ub3Jlc3VsdHMnIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJIaWRkZW5GaWVsZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhpZGRlbkZpZWxkKHZhbHVlQXJyYXkpIHtcblx0XHRcdHZhciBfdGhpczcgPSB0aGlzO1xuXG5cdFx0XHRpZiAoIXRoaXMucHJvcHMubmFtZSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuam9pblZhbHVlcykge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBzdHJpbmdpZnlWYWx1ZShpW190aGlzNy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdFx0XHR9KS5qb2luKHRoaXMucHJvcHMuZGVsaW1pdGVyKTtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdG5hbWU6IHRoaXMucHJvcHMubmFtZSxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzNy52YWx1ZSA9IF9yZWYzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IF90aGlzNy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHRrZXk6ICdoaWRkZW4uJyArIGluZGV4LFxuXHRcdFx0XHRcdG5hbWU6IF90aGlzNy5wcm9wcy5uYW1lLFxuXHRcdFx0XHRcdHJlZjogJ3ZhbHVlJyArIGluZGV4LFxuXHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdHZhbHVlOiBzdHJpbmdpZnlWYWx1ZShpdGVtW190aGlzNy5wcm9wcy52YWx1ZUtleV0pXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRGb2N1c2FibGVPcHRpb25JbmRleChzZWxlY3RlZE9wdGlvbikge1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLl92aXNpYmxlT3B0aW9ucztcblx0XHRcdGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG5cdFx0XHR2YXIgdmFsdWVLZXkgPSB0aGlzLnByb3BzLnZhbHVlS2V5O1xuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gfHwgc2VsZWN0ZWRPcHRpb247XG5cdFx0XHRpZiAoZm9jdXNlZE9wdGlvbiAmJiAhZm9jdXNlZE9wdGlvbi5kaXNhYmxlZCkge1xuXHRcdFx0XHR2YXIgZm9jdXNlZE9wdGlvbkluZGV4ID0gLTE7XG5cdFx0XHRcdG9wdGlvbnMuc29tZShmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuXHRcdFx0XHRcdHZhciBpc09wdGlvbkVxdWFsID0gb3B0aW9uW3ZhbHVlS2V5XSA9PT0gZm9jdXNlZE9wdGlvblt2YWx1ZUtleV07XG5cdFx0XHRcdFx0aWYgKGlzT3B0aW9uRXF1YWwpIHtcblx0XHRcdFx0XHRcdGZvY3VzZWRPcHRpb25JbmRleCA9IGluZGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gaXNPcHRpb25FcXVhbDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChmb2N1c2VkT3B0aW9uSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZvY3VzZWRPcHRpb25JbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSByZXR1cm4gaTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlck91dGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyT3V0ZXIob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbikge1xuXHRcdFx0dmFyIF90aGlzOCA9IHRoaXM7XG5cblx0XHRcdHZhciBtZW51ID0gdGhpcy5yZW5kZXJNZW51KG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pO1xuXHRcdFx0aWYgKCFtZW51KSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczgubWVudUNvbnRhaW5lciA9IF9yZWY1O1xuXHRcdFx0XHRcdH0sIGNsYXNzTmFtZTogJ1NlbGVjdC1tZW51LW91dGVyJywgc3R5bGU6IHRoaXMucHJvcHMubWVudUNvbnRhaW5lclN0eWxlIH0sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUnLFxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0Jyxcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bk9uTWVudSxcblx0XHRcdFx0XHRcdG9uU2Nyb2xsOiB0aGlzLmhhbmRsZU1lbnVTY3JvbGwsXG5cdFx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmNCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM4Lm1lbnUgPSBfcmVmNDtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyb2xlOiAnbGlzdGJveCcsXG5cdFx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5tZW51U3R5bGUsXG5cdFx0XHRcdFx0XHR0YWJJbmRleDogLTFcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1lbnVcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXM5ID0gdGhpcztcblxuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb25zKHRoaXMucHJvcHMubXVsdGkgJiYgdGhpcy5wcm9wcy5yZW1vdmVTZWxlY3RlZCA/IHZhbHVlQXJyYXkgOiBudWxsKTtcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3Blbjtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpICYmICFvcHRpb25zLmxlbmd0aCAmJiB2YWx1ZUFycmF5Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSBpc09wZW4gPSBmYWxzZTtcblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHZhbHVlQXJyYXlbMF0pO1xuXG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IG51bGw7XG5cdFx0XHRpZiAoZm9jdXNlZE9wdGlvbkluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb24gPSB0aGlzLl9mb2N1c2VkT3B0aW9uID0gb3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXhdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbiA9IHRoaXMuX2ZvY3VzZWRPcHRpb24gPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ1NlbGVjdCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG5cdFx0XHRcdCdoYXMtdmFsdWUnOiB2YWx1ZUFycmF5Lmxlbmd0aCxcblx0XHRcdFx0J2lzLWNsZWFyYWJsZSc6IHRoaXMucHJvcHMuY2xlYXJhYmxlLFxuXHRcdFx0XHQnaXMtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHQnaXMtZm9jdXNlZCc6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuXHRcdFx0XHQnaXMtbG9hZGluZyc6IHRoaXMucHJvcHMuaXNMb2FkaW5nLFxuXHRcdFx0XHQnaXMtb3Blbic6IGlzT3Blbixcblx0XHRcdFx0J2lzLXBzZXVkby1mb2N1c2VkJzogdGhpcy5zdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdFx0XHRcdCdpcy1zZWFyY2hhYmxlJzogdGhpcy5wcm9wcy5zZWFyY2hhYmxlLFxuXHRcdFx0XHQnU2VsZWN0LS1tdWx0aSc6IHRoaXMucHJvcHMubXVsdGksXG5cdFx0XHRcdCdTZWxlY3QtLXJ0bCc6IHRoaXMucHJvcHMucnRsLFxuXHRcdFx0XHQnU2VsZWN0LS1zaW5nbGUnOiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciByZW1vdmVNZXNzYWdlID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpICYmICF0aGlzLnByb3BzLmRpc2FibGVkICYmIHZhbHVlQXJyYXkubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgdGhpcy5wcm9wcy5iYWNrc3BhY2VSZW1vdmVzKSB7XG5cdFx0XHRcdHJlbW92ZU1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHR7IGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctYmFja3NwYWNlLXJlbW92ZS1tZXNzYWdlJywgY2xhc3NOYW1lOiAnU2VsZWN0LWFyaWEtb25seScsICdhcmlhLWxpdmUnOiAnYXNzZXJ0aXZlJyB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMuYmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlLnJlcGxhY2UoJ3tsYWJlbH0nLCB2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV1bdGhpcy5wcm9wcy5sYWJlbEtleV0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOS53cmFwcGVyID0gX3JlZjc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy53cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJIaWRkZW5GaWVsZCh2YWx1ZUFycmF5KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY2KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczkuY29udHJvbCA9IF9yZWY2O1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jb250cm9sJyxcblx0XHRcdFx0XHRcdG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuXHRcdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcblx0XHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LW11bHRpLXZhbHVlLXdyYXBwZXInLCBpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyB9LFxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJWYWx1ZSh2YWx1ZUFycmF5LCBpc09wZW4pLFxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRyZW1vdmVNZXNzYWdlLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyTG9hZGluZygpLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyQ2xlYXIoKSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckFycm93KClcblx0XHRcdFx0KSxcblx0XHRcdFx0aXNPcGVuID8gdGhpcy5yZW5kZXJPdXRlcihvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblNlbGVjdCQxLnByb3BUeXBlcyA9IHtcblx0J2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBodG1sIGlkKHMpIG9mIGVsZW1lbnQocykgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBkZXNjcmliZSB0aGlzIGlucHV0IChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdCdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZywgLy8gYXJpYSBsYWJlbCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHQnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZywgLy8gaHRtbCBpZCBvZiBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdGFycm93UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBjcmVhdGUgdGhlIGRyb3AtZG93biBjYXJldCBlbGVtZW50XG5cdGF1dG9CbHVyOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXV0b21hdGljYWxseSBibHVyIHRoZSBjb21wb25lbnQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWRcblx0YXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXV0b2ZvY3VzIHRoZSBjb21wb25lbnQgb24gbW91bnRcblx0YXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVwcmVjYXRlZDsgdXNlIGF1dG9Gb2N1cyBpbnN0ZWFkXG5cdGF1dG9zaXplOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBlbmFibGUgYXV0b3NpemluZyBvciBub3Rcblx0YmFja3NwYWNlUmVtb3ZlczogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgYmFja3NwYWNlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZywgLy8gbWVzc2FnZSB0byB1c2UgZm9yIHNjcmVlbnJlYWRlcnMgdG8gcHJlc3MgYmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudCBpdGVtIC0ge2xhYmVsfSBpcyByZXBsYWNlZCB3aXRoIHRoZSBpdGVtIGxhYmVsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRjbGVhckFsbFRleHQ6IHN0cmluZ09yTm9kZSwgLy8gdGl0bGUgZm9yIHRoZSBcImNsZWFyXCIgY29udHJvbCB3aGVuIG11bHRpOiB0cnVlXG5cdGNsZWFyUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBjcmVhdGUgY2xlYXJhYmxlIHggZWxlbWVudFxuXHRjbGVhclZhbHVlVGV4dDogc3RyaW5nT3JOb2RlLCAvLyB0aXRsZSBmb3IgdGhlIFwiY2xlYXJcIiBjb250cm9sXG5cdGNsZWFyYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHNob3VsZCBpdCBiZSBwb3NzaWJsZSB0byByZXNldCB2YWx1ZVxuXHRjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBjbG9zZSB0aGUgbWVudSB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWRcblx0ZGVsZXRlUmVtb3ZlczogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgZGVsZXRlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGRlbGltaXRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVsaW1pdGVyIHRvIHVzZSB0byBqb2luIG11bHRpcGxlIHZhbHVlcyBmb3IgdGhlIGhpZGRlbiBmaWVsZCB2YWx1ZVxuXHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdGhlIFNlbGVjdCBpcyBkaXNhYmxlZCBvciBub3Rcblx0ZXNjYXBlQ2xlYXJzVmFsdWU6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGVzY2FwZSBjbGVhcnMgdGhlIHZhbHVlIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkXG5cdGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBmaWx0ZXIgYSBzaW5nbGUgb3B0aW9uIChvcHRpb24sIGZpbHRlclN0cmluZylcblx0ZmlsdGVyT3B0aW9uczogUHJvcFR5cGVzLmFueSwgLy8gYm9vbGVhbiB0byBlbmFibGUgZGVmYXVsdCBmaWx0ZXJpbmcgb3IgZnVuY3Rpb24gdG8gZmlsdGVyIHRoZSBvcHRpb25zIGFycmF5IChbb3B0aW9uc10sIGZpbHRlclN0cmluZywgW3ZhbHVlc10pXG5cdGlkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBodG1sIGlkIHRvIHNldCBvbiB0aGUgaW5wdXQgZWxlbWVudCBmb3IgYWNjZXNzaWJpbGl0eSBvciB0ZXN0c1xuXHRpZ25vcmVBY2NlbnRzOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nXG5cdGlnbm9yZUNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHBlcmZvcm0gY2FzZS1pbnNlbnNpdGl2ZSBmaWx0ZXJpbmdcblx0aW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCwgLy8gY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHRoZSBJbnB1dFxuXHRpbnB1dFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gcmV0dXJucyBhIGN1c3RvbSBpbnB1dCBjb21wb25lbnRcblx0aW5zdGFuY2VJZDogUHJvcFR5cGVzLnN0cmluZywgLy8gc2V0IHRoZSBjb21wb25lbnRzIGluc3RhbmNlSWRcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGxvYWRpbmcgZXh0ZXJuYWxseSBvciBub3QgKHN1Y2ggYXMgb3B0aW9ucyBiZWluZyBsb2FkZWQpXG5cdGpvaW5WYWx1ZXM6IFByb3BUeXBlcy5ib29sLCAvLyBqb2lucyBtdWx0aXBsZSB2YWx1ZXMgaW50byBhIHNpbmdsZSBmb3JtIGZpZWxkIHdpdGggdGhlIGRlbGltaXRlciAobGVnYWN5IG1vZGUpXG5cdGxhYmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXRoIG9mIHRoZSBsYWJlbCB2YWx1ZSBpbiBvcHRpb24gb2JqZWN0c1xuXHRtYXRjaFBvczogUHJvcFR5cGVzLnN0cmluZywgLy8gKGFueXxzdGFydCkgbWF0Y2ggdGhlIHN0YXJ0IG9yIGVudGlyZSBzdHJpbmcgd2hlbiBmaWx0ZXJpbmdcblx0bWF0Y2hQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyAoYW55fGxhYmVsfHZhbHVlKSB3aGljaCBvcHRpb24gcHJvcGVydHkgdG8gZmlsdGVyIG9uXG5cdG1lbnVCdWZmZXI6IFByb3BUeXBlcy5udW1iZXIsIC8vIG9wdGlvbmFsIGJ1ZmZlciAoaW4gcHgpIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgYW5kIHRoZSBib3R0b20gb2YgdGhlIG1lbnVcblx0bWVudUNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudSBjb250YWluZXJcblx0bWVudVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gcmVuZGVycyBhIGN1c3RvbSBtZW51IHdpdGggb3B0aW9uc1xuXHRtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBtZW51XG5cdG11bHRpOiBQcm9wVHlwZXMuYm9vbCwgLy8gbXVsdGktdmFsdWUgaW5wdXRcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZ2VuZXJhdGVzIGEgaGlkZGVuIDxpbnB1dCAvPiB0YWcgd2l0aCB0aGlzIGZpZWxkIG5hbWUgZm9yIGh0bWwgZm9ybXNcblx0bm9SZXN1bHRzVGV4dDogc3RyaW5nT3JOb2RlLCAvLyBwbGFjZWhvbGRlciBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hpbmcgc2VhcmNoIHJlc3VsdHNcblx0b25CbHVyOiBQcm9wVHlwZXMuZnVuYywgLy8gb25CbHVyIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25CbHVyUmVzZXRzSW5wdXQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gYmx1clxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge31cblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkXG5cdG9uQ2xvc2VSZXNldHNJbnB1dDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCB3aGVuIG1lbnUgaXMgY2xvc2VkIHRocm91Z2ggdGhlIGFycm93XG5cdG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkZvY3VzIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uSW5wdXRDaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKGlucHV0VmFsdWUpIHt9XG5cdG9uSW5wdXRLZXlEb3duOiBQcm9wVHlwZXMuZnVuYywgLy8gaW5wdXQga2V5RG93biBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uTWVudVNjcm9sbFRvQm90dG9tOiBQcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tOyBjYW4gYmUgdXNlZCB0byBwYWdpbmF0ZSBvcHRpb25zXG5cdG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkXG5cdG9uU2VsZWN0UmVzZXRzSW5wdXQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gc2VsZWN0ICh3b3JrcyBvbmx5IGZvciBtdWx0aXNlbGVjdClcblx0b25WYWx1ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYywgLy8gb25DbGljayBoYW5kbGVyIGZvciB2YWx1ZSBsYWJlbHM6IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHt9XG5cdG9wZW5PbkNsaWNrOiBQcm9wVHlwZXMuYm9vbCwgLy8gYm9vbGVhbiB0byBjb250cm9sIG9wZW5pbmcgdGhlIG1lbnUgd2hlbiB0aGUgY29udHJvbCBpcyBjbGlja2VkXG5cdG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gYWx3YXlzIG9wZW4gb3B0aW9ucyBtZW51IG9uIGZvY3VzXG5cdG9wdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gYWRkaXRpb25hbCBjbGFzcyhlcykgdG8gYXBwbHkgdG8gdGhlIDxPcHRpb24gLz4gZWxlbWVudHNcblx0b3B0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYywgLy8gb3B0aW9uIGNvbXBvbmVudCB0byByZW5kZXIgaW4gZHJvcGRvd25cblx0b3B0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb25SZW5kZXJlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLCAvLyBudW1iZXIgb2YgZW50cmllcyB0byBwYWdlIHdoZW4gdXNpbmcgcGFnZSB1cC9kb3duIGtleXNcblx0cGxhY2Vob2xkZXI6IHN0cmluZ09yTm9kZSwgLy8gZmllbGQgcGxhY2Vob2xkZXIsIGRpc3BsYXllZCB3aGVuIHRoZXJlJ3Mgbm8gdmFsdWVcblx0cmVtb3ZlU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRoZSBzZWxlY3RlZCBvcHRpb24gaXMgcmVtb3ZlZCBmcm9tIHRoZSBkcm9wZG93biBvbiBtdWx0aSBzZWxlY3RzXG5cdHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXBwbGllcyBIVE1MNSByZXF1aXJlZCBhdHRyaWJ1dGUgd2hlbiBuZWVkZWRcblx0cmVzZXRWYWx1ZTogUHJvcFR5cGVzLmFueSwgLy8gdmFsdWUgdG8gdXNlIHdoZW4geW91IGNsZWFyIHRoZSBjb250cm9sXG5cdHJ0bDogUHJvcFR5cGVzLmJvb2wsIC8vIHNldCB0byB0cnVlIGluIG9yZGVyIHRvIHVzZSByZWFjdC1zZWxlY3QgaW4gcmlnaHQtdG8tbGVmdCBkaXJlY3Rpb25cblx0c2Nyb2xsTWVudUludG9WaWV3OiBQcm9wVHlwZXMuYm9vbCwgLy8gYm9vbGVhbiB0byBlbmFibGUgdGhlIHZpZXdwb3J0IHRvIHNoaWZ0IHNvIHRoYXQgdGhlIGZ1bGwgbWVudSBmdWxseSB2aXNpYmxlIHdoZW4gZW5nYWdlZFxuXHRzZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBlbmFibGUgc2VhcmNoaW5nIGZlYXR1cmUgb3Igbm90XG5cdHNpbXBsZVZhbHVlOiBQcm9wVHlwZXMuYm9vbCwgLy8gcGFzcyB0aGUgdmFsdWUgdG8gb25DaGFuZ2UgYXMgYSBzaW1wbGUgdmFsdWUgKGxlZ2FjeSBwcmUgMS4wIG1vZGUpLCBkZWZhdWx0cyB0byBmYWxzZVxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGNvbnRyb2xcblx0dGFiSW5kZXg6IHN0cmluZ09yTnVtYmVyLCAvLyBvcHRpb25hbCB0YWIgaW5kZXggb2YgdGhlIGNvbnRyb2xcblx0dGFiU2VsZWN0c1ZhbHVlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byB0cmVhdCB0YWJiaW5nIG91dCB3aGlsZSBmb2N1c2VkIHRvIGJlIHZhbHVlIHNlbGVjdGlvblxuXHR0cmltRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byB0cmltIHdoaXRlc3BhY2UgYXJvdW5kIGZpbHRlciB2YWx1ZVxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueSwgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxuXHR2YWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsIC8vIHZhbHVlIGNvbXBvbmVudCB0byByZW5kZXJcblx0dmFsdWVLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdHZhbHVlUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyB2YWx1ZVJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHR3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3cmFwcGVyXG59O1xuXG5TZWxlY3QkMS5kZWZhdWx0UHJvcHMgPSB7XG5cdGFycm93UmVuZGVyZXI6IGFycm93UmVuZGVyZXIsXG5cdGF1dG9zaXplOiB0cnVlLFxuXHRiYWNrc3BhY2VSZW1vdmVzOiB0cnVlLFxuXHRiYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2U6ICdQcmVzcyBiYWNrc3BhY2UgdG8gcmVtb3ZlIHtsYWJlbH0nLFxuXHRjbGVhcmFibGU6IHRydWUsXG5cdGNsZWFyQWxsVGV4dDogJ0NsZWFyIGFsbCcsXG5cdGNsZWFyUmVuZGVyZXI6IGNsZWFyUmVuZGVyZXIsXG5cdGNsZWFyVmFsdWVUZXh0OiAnQ2xlYXIgdmFsdWUnLFxuXHRjbG9zZU9uU2VsZWN0OiB0cnVlLFxuXHRkZWxldGVSZW1vdmVzOiB0cnVlLFxuXHRkZWxpbWl0ZXI6ICcsJyxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRlc2NhcGVDbGVhcnNWYWx1ZTogdHJ1ZSxcblx0ZmlsdGVyT3B0aW9uczogZmlsdGVyT3B0aW9ucyxcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0aW5wdXRQcm9wczoge30sXG5cdGlzTG9hZGluZzogZmFsc2UsXG5cdGpvaW5WYWx1ZXM6IGZhbHNlLFxuXHRsYWJlbEtleTogJ2xhYmVsJyxcblx0bWF0Y2hQb3M6ICdhbnknLFxuXHRtYXRjaFByb3A6ICdhbnknLFxuXHRtZW51QnVmZmVyOiAwLFxuXHRtZW51UmVuZGVyZXI6IG1lbnVSZW5kZXJlcixcblx0bXVsdGk6IGZhbHNlLFxuXHRub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG5cdG9uQmx1clJlc2V0c0lucHV0OiB0cnVlLFxuXHRvbkNsb3NlUmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9uU2VsZWN0UmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9wZW5PbkNsaWNrOiB0cnVlLFxuXHRvcHRpb25Db21wb25lbnQ6IE9wdGlvbixcblx0cGFnZVNpemU6IDUsXG5cdHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcblx0cmVtb3ZlU2VsZWN0ZWQ6IHRydWUsXG5cdHJlcXVpcmVkOiBmYWxzZSxcblx0cnRsOiBmYWxzZSxcblx0c2Nyb2xsTWVudUludG9WaWV3OiB0cnVlLFxuXHRzZWFyY2hhYmxlOiB0cnVlLFxuXHRzaW1wbGVWYWx1ZTogZmFsc2UsXG5cdHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZSxcblx0dHJpbUZpbHRlcjogdHJ1ZSxcblx0dmFsdWVDb21wb25lbnQ6IFZhbHVlLFxuXHR2YWx1ZUtleTogJ3ZhbHVlJ1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcblx0YXV0b2xvYWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgYGxvYWRPcHRpb25zYCBwcm9wIG9uLW1vdW50OyBkZWZhdWx0cyB0byB0cnVlXG5cdGNhY2hlOiBQcm9wVHlwZXMuYW55LCAvLyBvYmplY3QgdG8gdXNlIHRvIGNhY2hlIHJlc3VsdHM7IHNldCB0byBudWxsL2ZhbHNlIHRvIGRpc2FibGUgY2FjaGluZ1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gQ2hpbGQgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBTZWxlY3QgY29tcG9uZW50OyAocHJvcHM6IE9iamVjdCk6IFByb3BUeXBlcy5lbGVtZW50XG5cdGlnbm9yZUFjY2VudHM6IFByb3BUeXBlcy5ib29sLCAvLyBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGlnbm9yZUNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyBwZXJmb3JtIGNhc2UtaW5zZW5zaXRpdmUgZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGxvYWRPcHRpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBjYWxsYmFjayB0byBsb2FkIG9wdGlvbnMgYXN5bmNocm9ub3VzbHk7IChpbnB1dFZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6ID9Qcm9taXNlXG5cdGxvYWRpbmdQbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gcmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVyIHdoaWxlIG9wdGlvbnMgYXJlIGxvYWRpbmdcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0bXVsdGk6IFByb3BUeXBlcy5ib29sLCAvLyBtdWx0aS12YWx1ZSBpbnB1dFxuXHRub1Jlc3VsdHNUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBub1Jlc3VsdHNUZXh0LCBkaXNwbGF5ZWQgd2hlbiBubyBvcHRpb25zIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb25hbCBmb3Iga2VlcGluZyB0cmFjayBvZiB3aGF0IGlzIGJlaW5nIHR5cGVkXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZSAoc2hhcmVkIHdpdGggU2VsZWN0KVxuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBsYWJlbCB0byBwcm9tcHQgZm9yIHNlYXJjaCBpbnB1dFxuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueSAvLyBpbml0aWFsIGZpZWxkIHZhbHVlXG59O1xuXG52YXIgZGVmYXVsdENhY2hlID0ge307XG5cbnZhciBkZWZhdWx0Q2hpbGRyZW4gPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0JDEsIHByb3BzKTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG5cdGF1dG9sb2FkOiB0cnVlLFxuXHRjYWNoZTogZGVmYXVsdENhY2hlLFxuXHRjaGlsZHJlbjogZGVmYXVsdENoaWxkcmVuLFxuXHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRpZ25vcmVDYXNlOiB0cnVlLFxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6ICdMb2FkaW5nLi4uJyxcblx0b3B0aW9uczogW10sXG5cdHNlYXJjaFByb21wdFRleHQ6ICdUeXBlIHRvIHNlYXJjaCdcbn07XG5cbnZhciBBc3luYyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKEFzeW5jLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBc3luYyhwcm9wcywgY29udGV4dCkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIEFzeW5jKTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFzeW5jLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXN5bmMpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cblx0XHRfdGhpcy5fY2FjaGUgPSBwcm9wcy5jYWNoZSA9PT0gZGVmYXVsdENhY2hlID8ge30gOiBwcm9wcy5jYWNoZTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0b3B0aW9uczogcHJvcHMub3B0aW9uc1xuXHRcdH07XG5cblx0XHRfdGhpcy5vbklucHV0Q2hhbmdlID0gX3RoaXMub25JbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhBc3luYywgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dmFyIGF1dG9sb2FkID0gdGhpcy5wcm9wcy5hdXRvbG9hZDtcblxuXG5cdFx0XHRpZiAoYXV0b2xvYWQpIHtcblx0XHRcdFx0dGhpcy5sb2FkT3B0aW9ucygnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHRpZiAobmV4dFByb3BzLm9wdGlvbnMgIT09IHRoaXMucHJvcHMub3B0aW9ucykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRvcHRpb25zOiBuZXh0UHJvcHMub3B0aW9uc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xvYWRPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBsb2FkT3B0aW9ucyA9IHRoaXMucHJvcHMubG9hZE9wdGlvbnM7XG5cblx0XHRcdHZhciBjYWNoZSA9IHRoaXMuX2NhY2hlO1xuXG5cdFx0XHRpZiAoY2FjaGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBpbnB1dFZhbHVlKSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRvcHRpb25zOiBjYWNoZVtpbnB1dFZhbHVlXVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVycm9yLCBkYXRhKSB7XG5cdFx0XHRcdHZhciBvcHRpb25zID0gZGF0YSAmJiBkYXRhLm9wdGlvbnMgfHwgW107XG5cblx0XHRcdFx0aWYgKGNhY2hlKSB7XG5cdFx0XHRcdFx0Y2FjaGVbaW5wdXRWYWx1ZV0gPSBvcHRpb25zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNhbGxiYWNrID09PSBfdGhpczIuX2NhbGxiYWNrKSB7XG5cdFx0XHRcdFx0X3RoaXMyLl9jYWxsYmFjayA9IG51bGw7XG5cblx0XHRcdFx0XHRfdGhpczIuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnNcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSWdub3JlIGFsbCBidXQgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3Rcblx0XHRcdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cblx0XHRcdHZhciBwcm9taXNlID0gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgY2FsbGJhY2spO1xuXHRcdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2NhbGxiYWNrICYmICF0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25JbnB1dENoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgaWdub3JlQWNjZW50cyA9IF9wcm9wcy5pZ25vcmVBY2NlbnRzLFxuXHRcdFx0ICAgIGlnbm9yZUNhc2UgPSBfcHJvcHMuaWdub3JlQ2FzZSxcblx0XHRcdCAgICBvbklucHV0Q2hhbmdlID0gX3Byb3BzLm9uSW5wdXRDaGFuZ2U7XG5cblx0XHRcdHZhciBuZXdJbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcblxuXHRcdFx0aWYgKG9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gb25JbnB1dENoYW5nZShuZXdJbnB1dFZhbHVlKTtcblx0XHRcdFx0Ly8gTm90ZTogIT0gdXNlZCBkZWxpYmVyYXRlbHkgaGVyZSB0byBjYXRjaCB1bmRlZmluZWQgYW5kIG51bGxcblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gJycgKyB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcblxuXHRcdFx0aWYgKGlnbm9yZUFjY2VudHMpIHtcblx0XHRcdFx0dHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gc3RyaXBEaWFjcml0aWNzKHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZ25vcmVDYXNlKSB7XG5cdFx0XHRcdHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9IHRyYW5zZm9ybWVkSW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZSB9KTtcblx0XHRcdHRoaXMubG9hZE9wdGlvbnModHJhbnNmb3JtZWRJbnB1dFZhbHVlKTtcblxuXHRcdFx0Ly8gUmV0dXJuIG5ldyBpbnB1dCB2YWx1ZSwgYnV0IHdpdGhvdXQgYXBwbHlpbmcgdG9Mb3dlckNhc2UoKSB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIHVzZXIncyB2aWV3IGNhc2Ugb2YgdGhlIGlucHV0IHdoaWxlIHR5cGluZy5cblx0XHRcdHJldHVybiBuZXdJbnB1dFZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ25vUmVzdWx0c1RleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBub1Jlc3VsdHNUZXh0KCkge1xuXHRcdFx0dmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGxvYWRpbmdQbGFjZWhvbGRlciA9IF9wcm9wczIubG9hZGluZ1BsYWNlaG9sZGVyLFxuXHRcdFx0ICAgIG5vUmVzdWx0c1RleHQgPSBfcHJvcHMyLm5vUmVzdWx0c1RleHQsXG5cdFx0XHQgICAgc2VhcmNoUHJvbXB0VGV4dCA9IF9wcm9wczIuc2VhcmNoUHJvbXB0VGV4dDtcblx0XHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0ICAgIGlucHV0VmFsdWUgPSBfc3RhdGUuaW5wdXRWYWx1ZSxcblx0XHRcdCAgICBpc0xvYWRpbmcgPSBfc3RhdGUuaXNMb2FkaW5nO1xuXG5cblx0XHRcdGlmIChpc0xvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGxvYWRpbmdQbGFjZWhvbGRlcjtcblx0XHRcdH1cblx0XHRcdGlmIChpbnB1dFZhbHVlICYmIG5vUmVzdWx0c1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIG5vUmVzdWx0c1RleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2VhcmNoUHJvbXB0VGV4dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5zZWxlY3QuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdFx0dmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcblx0XHRcdCAgICBsb2FkaW5nUGxhY2Vob2xkZXIgPSBfcHJvcHMzLmxvYWRpbmdQbGFjZWhvbGRlcixcblx0XHRcdCAgICBwbGFjZWhvbGRlciA9IF9wcm9wczMucGxhY2Vob2xkZXI7XG5cdFx0XHR2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG5cdFx0XHQgICAgaXNMb2FkaW5nID0gX3N0YXRlMi5pc0xvYWRpbmcsXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9zdGF0ZTIub3B0aW9ucztcblxuXG5cdFx0XHR2YXIgcHJvcHMgPSB7XG5cdFx0XHRcdG5vUmVzdWx0c1RleHQ6IHRoaXMubm9SZXN1bHRzVGV4dCgpLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogaXNMb2FkaW5nID8gbG9hZGluZ1BsYWNlaG9sZGVyIDogcGxhY2Vob2xkZXIsXG5cdFx0XHRcdG9wdGlvbnM6IGlzTG9hZGluZyAmJiBsb2FkaW5nUGxhY2Vob2xkZXIgPyBbXSA6IG9wdGlvbnMsXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXMzLnNlbGVjdCA9IF9yZWY7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMsIHtcblx0XHRcdFx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdFx0XHRcdG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gQXN5bmM7XG59KENvbXBvbmVudCk7XG5cbkFzeW5jLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkFzeW5jLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxudmFyIENyZWF0YWJsZVNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKENyZWF0YWJsZVNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQ3JlYXRhYmxlU2VsZWN0KHByb3BzLCBjb250ZXh0KSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQ3JlYXRhYmxlU2VsZWN0KTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENyZWF0YWJsZVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENyZWF0YWJsZVNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuXHRcdF90aGlzLmZpbHRlck9wdGlvbnMgPSBfdGhpcy5maWx0ZXJPcHRpb25zLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm1lbnVSZW5kZXJlciA9IF90aGlzLm1lbnVSZW5kZXJlci5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbklucHV0S2V5RG93biA9IF90aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uT3B0aW9uU2VsZWN0ID0gX3RoaXMub25PcHRpb25TZWxlY3QuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoQ3JlYXRhYmxlU2VsZWN0LCBbe1xuXHRcdGtleTogJ2NyZWF0ZU5ld09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU5ld09wdGlvbigpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGlzVmFsaWROZXdPcHRpb24gPSBfcHJvcHMuaXNWYWxpZE5ld09wdGlvbixcblx0XHRcdCAgICBuZXdPcHRpb25DcmVhdG9yID0gX3Byb3BzLm5ld09wdGlvbkNyZWF0b3IsXG5cdFx0XHQgICAgb25OZXdPcHRpb25DbGljayA9IF9wcm9wcy5vbk5ld09wdGlvbkNsaWNrLFxuXHRcdFx0ICAgIF9wcm9wcyRvcHRpb25zID0gX3Byb3BzLm9wdGlvbnMsXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9wcm9wcyRvcHRpb25zID09PSB1bmRlZmluZWQgPyBbXSA6IF9wcm9wcyRvcHRpb25zO1xuXG5cblx0XHRcdGlmIChpc1ZhbGlkTmV3T3B0aW9uKHsgbGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSB9KSkge1xuXHRcdFx0XHR2YXIgb3B0aW9uID0gbmV3T3B0aW9uQ3JlYXRvcih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUsIGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LCB2YWx1ZUtleTogdGhpcy52YWx1ZUtleSB9KTtcblx0XHRcdFx0dmFyIF9pc09wdGlvblVuaXF1ZSA9IHRoaXMuaXNPcHRpb25VbmlxdWUoeyBvcHRpb246IG9wdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuXHRcdFx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgb3B0aW9uIHR3aWNlLlxuXHRcdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlKSB7XG5cdFx0XHRcdFx0aWYgKG9uTmV3T3B0aW9uQ2xpY2spIHtcblx0XHRcdFx0XHRcdG9uTmV3T3B0aW9uQ2xpY2sob3B0aW9uKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b3B0aW9ucy51bnNoaWZ0KG9wdGlvbik7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0LnNlbGVjdFZhbHVlKG9wdGlvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZmlsdGVyT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMkJDEoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgZmlsdGVyT3B0aW9ucyQkMSA9IF9wcm9wczIuZmlsdGVyT3B0aW9ucyxcblx0XHRcdCAgICBpc1ZhbGlkTmV3T3B0aW9uID0gX3Byb3BzMi5pc1ZhbGlkTmV3T3B0aW9uLFxuXHRcdFx0ICAgIHByb21wdFRleHRDcmVhdG9yID0gX3Byb3BzMi5wcm9tcHRUZXh0Q3JlYXRvcixcblx0XHRcdCAgICBzaG93TmV3T3B0aW9uQXRUb3AgPSBfcHJvcHMyLnNob3dOZXdPcHRpb25BdFRvcDtcblxuXHRcdFx0Ly8gVFJJQ0tZIENoZWNrIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25zIGFzIHdlbGwuXG5cdFx0XHQvLyBEb24ndCBkaXNwbGF5IGEgY3JlYXRlLXByb21wdCBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2VsZWN0ZWQuXG5cdFx0XHQvLyBUaGlzIGNvdmVycyBhc3luYyBlZGdlLWNhc2VzIHdoZXJlIGEgbmV3bHktY3JlYXRlZCBPcHRpb24gaXNuJ3QgeWV0IGluIHRoZSBhc3luYy1sb2FkZWQgYXJyYXkuXG5cblx0XHRcdHZhciBleGNsdWRlT3B0aW9ucyA9IChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0pIHx8IFtdO1xuXG5cdFx0XHR2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyT3B0aW9ucyQkMS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykgfHwgW107XG5cblx0XHRcdGlmIChpc1ZhbGlkTmV3T3B0aW9uKHsgbGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSB9KSkge1xuXHRcdFx0XHR2YXIgX25ld09wdGlvbkNyZWF0b3IgPSB0aGlzLnByb3BzLm5ld09wdGlvbkNyZWF0b3I7XG5cblxuXHRcdFx0XHR2YXIgb3B0aW9uID0gX25ld09wdGlvbkNyZWF0b3Ioe1xuXHRcdFx0XHRcdGxhYmVsOiB0aGlzLmlucHV0VmFsdWUsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gVFJJQ0tZIENvbXBhcmUgdG8gYWxsIG9wdGlvbnMgKG5vdCBqdXN0IGZpbHRlcmVkIG9wdGlvbnMpIGluIGNhc2Ugb3B0aW9uIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQpLlxuXHRcdFx0XHQvLyBGb3IgbXVsdGktc2VsZWN0cywgdGhpcyB3b3VsZCByZW1vdmUgaXQgZnJvbSB0aGUgZmlsdGVyZWQgbGlzdC5cblx0XHRcdFx0dmFyIF9pc09wdGlvblVuaXF1ZTIgPSB0aGlzLmlzT3B0aW9uVW5pcXVlKHtcblx0XHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0XHRvcHRpb25zOiBleGNsdWRlT3B0aW9ucy5jb25jYXQoZmlsdGVyZWRPcHRpb25zKVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlMikge1xuXHRcdFx0XHRcdHZhciBwcm9tcHQgPSBwcm9tcHRUZXh0Q3JlYXRvcih0aGlzLmlucHV0VmFsdWUpO1xuXG5cdFx0XHRcdFx0dGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24gPSBfbmV3T3B0aW9uQ3JlYXRvcih7XG5cdFx0XHRcdFx0XHRsYWJlbDogcHJvbXB0LFxuXHRcdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy52YWx1ZUtleVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0aWYgKHNob3dOZXdPcHRpb25BdFRvcCkge1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRPcHRpb25zLnVuc2hpZnQodGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmaWx0ZXJlZE9wdGlvbnMucHVzaCh0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaXNPcHRpb25VbmlxdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblVuaXF1ZShfcmVmKSB7XG5cdFx0XHR2YXIgb3B0aW9uID0gX3JlZi5vcHRpb24sXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcblx0XHRcdHZhciBpc09wdGlvblVuaXF1ZSA9IHRoaXMucHJvcHMuaXNPcHRpb25VbmlxdWU7XG5cblxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5wcm9wcy5vcHRpb25zO1xuXG5cdFx0XHRyZXR1cm4gaXNPcHRpb25VbmlxdWUoe1xuXHRcdFx0XHRsYWJlbEtleTogdGhpcy5sYWJlbEtleSxcblx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdtZW51UmVuZGVyZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBtZW51UmVuZGVyZXIkJDEocGFyYW1zKSB7XG5cdFx0XHR2YXIgbWVudVJlbmRlcmVyJCQxID0gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXI7XG5cblxuXHRcdFx0cmV0dXJuIG1lbnVSZW5kZXJlciQkMShfZXh0ZW5kcyh7fSwgcGFyYW1zLCB7XG5cdFx0XHRcdG9uU2VsZWN0OiB0aGlzLm9uT3B0aW9uU2VsZWN0LFxuXHRcdFx0XHRzZWxlY3RWYWx1ZTogdGhpcy5vbk9wdGlvblNlbGVjdFxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGlucHV0KSB7XG5cdFx0XHR2YXIgb25JbnB1dENoYW5nZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZTtcblxuXHRcdFx0Ly8gVGhpcyB2YWx1ZSBtYXkgYmUgbmVlZGVkIGluIGJldHdlZW4gU2VsZWN0IG1vdW50cyAod2hlbiB0aGlzLnNlbGVjdCBpcyBudWxsKVxuXG5cdFx0XHR0aGlzLmlucHV0VmFsdWUgPSBpbnB1dDtcblxuXHRcdFx0aWYgKG9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dGhpcy5pbnB1dFZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmlucHV0VmFsdWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25JbnB1dEtleURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0S2V5RG93bihldmVudCkge1xuXHRcdFx0dmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbiA9IF9wcm9wczMuc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uLFxuXHRcdFx0ICAgIG9uSW5wdXRLZXlEb3duID0gX3Byb3BzMy5vbklucHV0S2V5RG93bjtcblxuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnNlbGVjdC5nZXRGb2N1c2VkT3B0aW9uKCk7XG5cblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uICYmIGZvY3VzZWRPcHRpb24gPT09IHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uICYmIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbihldmVudCkpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVOZXdPcHRpb24oKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IGRlY29yYXRlZCBTZWxlY3QgZnJvbSBkb2luZyBhbnl0aGluZyBhZGRpdGlvbmFsIHdpdGggdGhpcyBrZXlEb3duIGV2ZW50XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uSW5wdXRLZXlEb3duKSB7XG5cdFx0XHRcdG9uSW5wdXRLZXlEb3duKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbk9wdGlvblNlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uT3B0aW9uU2VsZWN0KG9wdGlvbikge1xuXHRcdFx0aWYgKG9wdGlvbiA9PT0gdGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVOZXdPcHRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0LnNlbGVjdFZhbHVlKG9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICByZWZQcm9wID0gX3Byb3BzNC5yZWYsXG5cdFx0XHQgICAgcmVzdFByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNCwgWydyZWYnXSk7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG5cdFx0XHQvLyBXZSBjYW4ndCB1c2UgZGVzdHJ1Y3R1cmluZyBkZWZhdWx0IHZhbHVlcyB0byBzZXQgdGhlIGNoaWxkcmVuLFxuXHRcdFx0Ly8gYmVjYXVzZSBpdCB3b24ndCBhcHBseSB3b3JrIGlmIGBjaGlsZHJlbmAgaXMgbnVsbC4gQSBmYWxzeSBjaGVjayBpc1xuXHRcdFx0Ly8gbW9yZSByZWxpYWJsZSBpbiByZWFsIHdvcmxkIHVzZS1jYXNlcy5cblxuXHRcdFx0aWYgKCFjaGlsZHJlbikge1xuXHRcdFx0XHRjaGlsZHJlbiA9IGRlZmF1bHRDaGlsZHJlbiQyO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG5cdFx0XHRcdGFsbG93Q3JlYXRlOiB0cnVlLFxuXHRcdFx0XHRmaWx0ZXJPcHRpb25zOiB0aGlzLmZpbHRlck9wdGlvbnMsXG5cdFx0XHRcdG1lbnVSZW5kZXJlcjogdGhpcy5tZW51UmVuZGVyZXIsXG5cdFx0XHRcdG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcblx0XHRcdFx0b25JbnB1dEtleURvd246IHRoaXMub25JbnB1dEtleURvd24sXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG5cdFx0XHRcdFx0X3RoaXMyLnNlbGVjdCA9IF9yZWYyO1xuXG5cdFx0XHRcdFx0Ly8gVGhlc2UgdmFsdWVzIG1heSBiZSBuZWVkZWQgaW4gYmV0d2VlbiBTZWxlY3QgbW91bnRzICh3aGVuIHRoaXMuc2VsZWN0IGlzIG51bGwpXG5cdFx0XHRcdFx0aWYgKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRfdGhpczIubGFiZWxLZXkgPSBfcmVmMi5wcm9wcy5sYWJlbEtleTtcblx0XHRcdFx0XHRcdF90aGlzMi52YWx1ZUtleSA9IF9yZWYyLnByb3BzLnZhbHVlS2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocmVmUHJvcCkge1xuXHRcdFx0XHRcdFx0cmVmUHJvcChfcmVmMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNoaWxkcmVuKHByb3BzKTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIENyZWF0YWJsZVNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIGRlZmF1bHRDaGlsZHJlbiQyID0gZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCQxLCBwcm9wcyk7XG59O1xuXG52YXIgaXNPcHRpb25VbmlxdWUgPSBmdW5jdGlvbiBpc09wdGlvblVuaXF1ZShfcmVmMykge1xuXHR2YXIgb3B0aW9uID0gX3JlZjMub3B0aW9uLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG5cdCAgICBsYWJlbEtleSA9IF9yZWYzLmxhYmVsS2V5LFxuXHQgICAgdmFsdWVLZXkgPSBfcmVmMy52YWx1ZUtleTtcblxuXHRpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGV4aXN0aW5nT3B0aW9uKSB7XG5cdFx0cmV0dXJuIGV4aXN0aW5nT3B0aW9uW2xhYmVsS2V5XSA9PT0gb3B0aW9uW2xhYmVsS2V5XSB8fCBleGlzdGluZ09wdGlvblt2YWx1ZUtleV0gPT09IG9wdGlvblt2YWx1ZUtleV07XG5cdH0pLmxlbmd0aCA9PT0gMDtcbn07XG5cbnZhciBpc1ZhbGlkTmV3T3B0aW9uID0gZnVuY3Rpb24gaXNWYWxpZE5ld09wdGlvbihfcmVmNCkge1xuXHR2YXIgbGFiZWwgPSBfcmVmNC5sYWJlbDtcblx0cmV0dXJuICEhbGFiZWw7XG59O1xuXG52YXIgbmV3T3B0aW9uQ3JlYXRvciA9IGZ1bmN0aW9uIG5ld09wdGlvbkNyZWF0b3IoX3JlZjUpIHtcblx0dmFyIGxhYmVsID0gX3JlZjUubGFiZWwsXG5cdCAgICBsYWJlbEtleSA9IF9yZWY1LmxhYmVsS2V5LFxuXHQgICAgdmFsdWVLZXkgPSBfcmVmNS52YWx1ZUtleTtcblxuXHR2YXIgb3B0aW9uID0ge307XG5cdG9wdGlvblt2YWx1ZUtleV0gPSBsYWJlbDtcblx0b3B0aW9uW2xhYmVsS2V5XSA9IGxhYmVsO1xuXHRvcHRpb24uY2xhc3NOYW1lID0gJ1NlbGVjdC1jcmVhdGUtb3B0aW9uLXBsYWNlaG9sZGVyJztcblxuXHRyZXR1cm4gb3B0aW9uO1xufTtcblxudmFyIHByb21wdFRleHRDcmVhdG9yID0gZnVuY3Rpb24gcHJvbXB0VGV4dENyZWF0b3IobGFiZWwpIHtcblx0cmV0dXJuICdDcmVhdGUgb3B0aW9uIFwiJyArIGxhYmVsICsgJ1wiJztcbn07XG5cbnZhciBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBmdW5jdGlvbiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24oX3JlZjYpIHtcblx0dmFyIGtleUNvZGUgPSBfcmVmNi5rZXlDb2RlO1xuXG5cdHN3aXRjaCAoa2V5Q29kZSkge1xuXHRcdGNhc2UgOTogLy8gVEFCXG5cdFx0Y2FzZSAxMzogLy8gRU5URVJcblx0XHRjYXNlIDE4ODpcblx0XHRcdC8vIENPTU1BXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG4vLyBEZWZhdWx0IHByb3AgbWV0aG9kc1xuQ3JlYXRhYmxlU2VsZWN0LmlzT3B0aW9uVW5pcXVlID0gaXNPcHRpb25VbmlxdWU7XG5DcmVhdGFibGVTZWxlY3QuaXNWYWxpZE5ld09wdGlvbiA9IGlzVmFsaWROZXdPcHRpb247XG5DcmVhdGFibGVTZWxlY3QubmV3T3B0aW9uQ3JlYXRvciA9IG5ld09wdGlvbkNyZWF0b3I7XG5DcmVhdGFibGVTZWxlY3QucHJvbXB0VGV4dENyZWF0b3IgPSBwcm9tcHRUZXh0Q3JlYXRvcjtcbkNyZWF0YWJsZVNlbGVjdC5zaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb247XG5cbkNyZWF0YWJsZVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGZpbHRlck9wdGlvbnM6IGZpbHRlck9wdGlvbnMsXG5cdGlzT3B0aW9uVW5pcXVlOiBpc09wdGlvblVuaXF1ZSxcblx0aXNWYWxpZE5ld09wdGlvbjogaXNWYWxpZE5ld09wdGlvbixcblx0bWVudVJlbmRlcmVyOiBtZW51UmVuZGVyZXIsXG5cdG5ld09wdGlvbkNyZWF0b3I6IG5ld09wdGlvbkNyZWF0b3IsXG5cdHByb21wdFRleHRDcmVhdG9yOiBwcm9tcHRUZXh0Q3JlYXRvcixcblx0c2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uOiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24sXG5cdHNob3dOZXdPcHRpb25BdFRvcDogdHJ1ZVxufTtcblxuQ3JlYXRhYmxlU2VsZWN0LnByb3BUeXBlcyA9IHtcblx0Ly8gQ2hpbGQgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBTZWxlY3QgY29tcG9uZW50XG5cdC8vIFRoaXMgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIGNvbXBvc2UgSE9DcyAoZWcgQ3JlYXRhYmxlIGFuZCBBc3luYylcblx0Ly8gKHByb3BzOiBPYmplY3QpOiBQcm9wVHlwZXMuZWxlbWVudFxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gU2VlIFNlbGVjdC5wcm9wVHlwZXMuZmlsdGVyT3B0aW9uc1xuXHRmaWx0ZXJPcHRpb25zOiBQcm9wVHlwZXMuYW55LFxuXG5cdC8vIFNlYXJjaGVzIGZvciBhbnkgbWF0Y2hpbmcgb3B0aW9uIHdpdGhpbiB0aGUgc2V0IG9mIG9wdGlvbnMuXG5cdC8vIFRoaXMgZnVuY3Rpb24gcHJldmVudHMgZHVwbGljYXRlIG9wdGlvbnMgZnJvbSBiZWluZyBjcmVhdGVkLlxuXHQvLyAoeyBvcHRpb246IE9iamVjdCwgb3B0aW9uczogQXJyYXksIGxhYmVsS2V5OiBzdHJpbmcsIHZhbHVlS2V5OiBzdHJpbmcgfSk6IGJvb2xlYW5cblx0aXNPcHRpb25VbmlxdWU6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdGV4dCByZXByZXNlbnRzIGEgdmFsaWQgb3B0aW9uLlxuXHQvLyAoeyBsYWJlbDogc3RyaW5nIH0pOiBib29sZWFuXG5cdGlzVmFsaWROZXdPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIFNlZSBTZWxlY3QucHJvcFR5cGVzLm1lbnVSZW5kZXJlclxuXHRtZW51UmVuZGVyZXI6IFByb3BUeXBlcy5hbnksXG5cblx0Ly8gRmFjdG9yeSB0byBjcmVhdGUgbmV3IG9wdGlvbi5cblx0Ly8gKHsgbGFiZWw6IHN0cmluZywgbGFiZWxLZXk6IHN0cmluZywgdmFsdWVLZXk6IHN0cmluZyB9KTogT2JqZWN0XG5cdG5ld09wdGlvbkNyZWF0b3I6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIGlucHV0IGNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge31cblx0b25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gaW5wdXQga2V5RG93biBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uSW5wdXRLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBuZXcgb3B0aW9uIGNsaWNrIGhhbmRsZXI6IGZ1bmN0aW9uIChvcHRpb24pIHt9XG5cdG9uTmV3T3B0aW9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIFNlZSBTZWxlY3QucHJvcFR5cGVzLm9wdGlvbnNcblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuXG5cdC8vIENyZWF0ZXMgcHJvbXB0L3BsYWNlaG9sZGVyIG9wdGlvbiB0ZXh0LlxuXHQvLyAoZmlsdGVyVGV4dDogc3RyaW5nKTogc3RyaW5nXG5cdHByb21wdFRleHRDcmVhdG9yOiBQcm9wVHlwZXMuZnVuYyxcblxuXHRyZWY6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIERlY2lkZXMgaWYgYSBrZXlEb3duIGV2ZW50IChlZyBpdHMgYGtleUNvZGVgKSBzaG91bGQgcmVzdWx0IGluIHRoZSBjcmVhdGlvbiBvZiBhIG5ldyBvcHRpb24uXG5cdHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gV2hlcmUgdG8gc2hvdyBwcm9tcHQvcGxhY2Vob2xkZXIgb3B0aW9uIHRleHQuXG5cdC8vIHRydWU6IG5ldyBvcHRpb24gcHJvbXB0IGF0IHRvcCBvZiBsaXN0IChkZWZhdWx0KVxuXHQvLyBmYWxzZTogbmV3IG9wdGlvbiBwcm9tcHQgYXQgYm90dG9tIG9mIGxpc3Rcblx0c2hvd05ld09wdGlvbkF0VG9wOiBQcm9wVHlwZXMuYm9vbFxufTtcblxudmFyIEFzeW5jQ3JlYXRhYmxlU2VsZWN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoQXN5bmNDcmVhdGFibGVTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEFzeW5jQ3JlYXRhYmxlU2VsZWN0KCkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIEFzeW5jQ3JlYXRhYmxlU2VsZWN0KTtcblx0XHRyZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXN5bmNDcmVhdGFibGVTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBc3luY0NyZWF0YWJsZVNlbGVjdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoQXN5bmNDcmVhdGFibGVTZWxlY3QsIFt7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRBc3luYyxcblx0XHRcdFx0dGhpcy5wcm9wcyxcblx0XHRcdFx0ZnVuY3Rpb24gKF9yZWYpIHtcblx0XHRcdFx0XHR2YXIgcmVmID0gX3JlZi5yZWYsXG5cdFx0XHRcdFx0ICAgIGFzeW5jUHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3JlZiddKTtcblxuXHRcdFx0XHRcdHZhciBhc3luY1JlZiA9IHJlZjtcblx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdENyZWF0YWJsZVNlbGVjdCxcblx0XHRcdFx0XHRcdGFzeW5jUHJvcHMsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX3JlZjIpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHJlZiA9IF9yZWYyLnJlZixcblx0XHRcdFx0XHRcdFx0ICAgIGNyZWF0YWJsZVByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsncmVmJ10pO1xuXG5cdFx0XHRcdFx0XHRcdHZhciBjcmVhdGFibGVSZWYgPSByZWY7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczIucHJvcHMuY2hpbGRyZW4oX2V4dGVuZHMoe30sIGNyZWF0YWJsZVByb3BzLCB7XG5cdFx0XHRcdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoc2VsZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjcmVhdGFibGVSZWYoc2VsZWN0KTtcblx0XHRcdFx0XHRcdFx0XHRcdGFzeW5jUmVmKHNlbGVjdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpczIuc2VsZWN0ID0gc2VsZWN0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBBc3luY0NyZWF0YWJsZVNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIGRlZmF1bHRDaGlsZHJlbiQxID0gZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCQxLCBwcm9wcyk7XG59O1xuXG5Bc3luY0NyZWF0YWJsZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkIC8vIENoaWxkIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaW5uZXIgU2VsZWN0IGNvbXBvbmVudDsgKHByb3BzOiBPYmplY3QpOiBQcm9wVHlwZXMuZWxlbWVudFxufTtcblxuQXN5bmNDcmVhdGFibGVTZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuXHRjaGlsZHJlbjogZGVmYXVsdENoaWxkcmVuJDFcbn07XG5cblNlbGVjdCQxLkFzeW5jID0gQXN5bmM7XG5TZWxlY3QkMS5Bc3luY0NyZWF0YWJsZSA9IEFzeW5jQ3JlYXRhYmxlU2VsZWN0O1xuU2VsZWN0JDEuQ3JlYXRhYmxlID0gQ3JlYXRhYmxlU2VsZWN0O1xuU2VsZWN0JDEuVmFsdWUgPSBWYWx1ZTtcblNlbGVjdCQxLk9wdGlvbiA9IE9wdGlvbjtcblxuZXhwb3J0IHsgQXN5bmMsIEFzeW5jQ3JlYXRhYmxlU2VsZWN0IGFzIEFzeW5jQ3JlYXRhYmxlLCBDcmVhdGFibGVTZWxlY3QgYXMgQ3JlYXRhYmxlLCBWYWx1ZSwgT3B0aW9uLCBtZW51UmVuZGVyZXIgYXMgZGVmYXVsdE1lbnVSZW5kZXJlciwgYXJyb3dSZW5kZXJlciBhcyBkZWZhdWx0QXJyb3dSZW5kZXJlciwgY2xlYXJSZW5kZXJlciBhcyBkZWZhdWx0Q2xlYXJSZW5kZXJlciwgZmlsdGVyT3B0aW9ucyBhcyBkZWZhdWx0RmlsdGVyT3B0aW9ucyB9O1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0JDE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=