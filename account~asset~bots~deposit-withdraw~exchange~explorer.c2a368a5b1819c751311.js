(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[14],{

/***/ 2773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: {
                    maxWidth: this.props.maxWidth,
                    marginRight: 5,
                    marginTop: "-3px"
                },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 2774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2089);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1973);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var DynamicObjectResolver = function (_React$Component) {
    _inherits(DynamicObjectResolver, _React$Component);

    function DynamicObjectResolver() {
        _classCallCheck(this, DynamicObjectResolver);

        var _this = _possibleConstructorReturn(this, (DynamicObjectResolver.__proto__ || Object.getPrototypeOf(DynamicObjectResolver)).call(this));

        _this.getDynamicObject = _this.getDynamicObject.bind(_this);
        return _this;
    }

    _createClass(DynamicObjectResolver, [{
        key: "getDynamicObject",
        value: function getDynamicObject(id) {
            return this.props.dos.find(function (a) {
                return a && a.get("id") === id;
            });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children), _extends({}, this.props, {
                getDynamicObject: this.getDynamicObject
            }));
        }
    }]);

    return DynamicObjectResolver;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DynamicObjectResolver.propTypes = {
    dos: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList
};
DynamicObjectResolver.defaultProps = {
    dos: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])()
};

DynamicObjectResolver = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(DynamicObjectResolver);

/**
 * HOC that resolves either a number of assets directly with ChainAsset,
 * or a list of assets with ChainAssets
 *
 *  Options
 *  -'propNames' an array of prop names to be resolved as assets. (defaults to "asset" or "assets")
 *  -'defaultProps' default values to use for objects (optional)
 *  -'asList' defines whether to use ChainAssetsList or not (useful for resolving large quantities of assets)
 *  -'withDynamic' defines whether to also resolve dynamic objects or not
 */

function AssetWrapper(Component) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    options.propNames = options.propNames || [!!options.asList ? "assets" : "asset"];
    var finalPropTypes = options.propNames.reduce(function (res, type) {
        res[type] = options.asList ? components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAssetsList : components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired;
        return res;
    }, {});

    var defaultProps = Object.keys(finalPropTypes).reduce(function (res, key) {
        var current = options.defaultProps && options.defaultProps[key];
        res[key] = !!options.asList ? Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])(current || []) : current || "1.3.0";
        return res;
    }, {});

    if (options.defaultProps && !!options.defaultProps.tempComponent) {
        defaultProps.tempComponent = options.defaultProps.tempComponent;
    }

    var AssetsResolver = function (_React$Component2) {
        _inherits(AssetsResolver, _React$Component2);

        function AssetsResolver() {
            _classCallCheck(this, AssetsResolver);

            return _possibleConstructorReturn(this, (AssetsResolver.__proto__ || Object.getPrototypeOf(AssetsResolver)).apply(this, arguments));
        }

        _createClass(AssetsResolver, [{
            key: "render",
            value: function render() {
                var _this3 = this;

                var finalAssets = {};
                var passTroughProps = {};
                var dos = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])();
                Object.keys(this.props).forEach(function (prop) {
                    if (_this3.props[prop] && options.propNames.indexOf(prop) !== -1) {
                        if (options.withDynamic) {
                            if (!options.asList) {
                                dos = dos.push(_this3.props[prop].get("dynamic_asset_data_id"));
                            } else {
                                _this3.props[prop].forEach(function (a) {
                                    if (!!a) dos = dos.push(a.get("dynamic_asset_data_id"));
                                });
                            }
                        }
                        finalAssets[prop] = options.asList ? _this3.props[prop].filter(function (a) {
                            return !!a;
                        }) : _this3.props[prop];
                    } else {
                        passTroughProps[prop] = _this3.props[prop];
                    }
                });

                var wrapped = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children), _extends({}, passTroughProps, finalAssets));

                if (options.withDynamic) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    DynamicObjectResolver,
                    { dos: dos },
                    wrapped
                );else return wrapped;
            }
        }]);

        return AssetsResolver;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    AssetsResolver.propTypes = finalPropTypes;
    AssetsResolver.defaultProps = defaultProps;

    AssetsResolver = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AssetsResolver);

    var Wrapper = function (_React$Component3) {
        _inherits(Wrapper, _React$Component3);

        function Wrapper() {
            _classCallCheck(this, Wrapper);

            return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
        }

        _createClass(Wrapper, [{
            key: "render",
            value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    AssetsResolver,
                    this.props,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, { ref: "bound_component" })
                );
            }
        }]);

        return Wrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    Wrapper.displayName = "Wrapper(" + Object(common_reactUtils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component) + ")";
    return Wrapper;
}

/* harmony default export */ __webpack_exports__["default"] = (AssetWrapper);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5ib3RzfmRlcG9zaXQtd2l0aGRyYXd+ZXhjaGFuZ2V+ZXhwbG9yZXIuYzJhMzY4YTViMTgxOWM3NTEzMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0V3JhcHBlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vQm90cy9saWJzL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcbiAgICAgICAgbWF4V2lkdGg6IDIwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tcbiAgICAgICAgICAgICAgICAgICAgaW1nTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgXS5zcmMgPSBgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy9idHMucG5nYDtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbCA9PT0gXCJPUEVOLkJUQ1wiIHx8IHN5bWJvbCA9PT0gXCJHREVYLkJUQ1wiKSByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbC5zdGFydHNXaXRoKFwiRVNDUk9XLlwiKSkgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGxldCBpbWdOYW1lID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgIC8vcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXREaXNwbGF5TmFtZX0gZnJvbSBcImNvbW1vbi9yZWFjdFV0aWxzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmNsYXNzIER5bmFtaWNPYmplY3RSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZG9zOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3RcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRvczogTGlzdCgpXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0RHluYW1pY09iamVjdCA9IHRoaXMuZ2V0RHluYW1pY09iamVjdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldER5bmFtaWNPYmplY3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9zLmZpbmQoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSAmJiBhLmdldChcImlkXCIpID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICBnZXREeW5hbWljT2JqZWN0OiB0aGlzLmdldER5bmFtaWNPYmplY3RcbiAgICAgICAgfSk7XG4gICAgfVxufVxuRHluYW1pY09iamVjdFJlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShEeW5hbWljT2JqZWN0UmVzb2x2ZXIpO1xuXG4vKipcbiAqIEhPQyB0aGF0IHJlc29sdmVzIGVpdGhlciBhIG51bWJlciBvZiBhc3NldHMgZGlyZWN0bHkgd2l0aCBDaGFpbkFzc2V0LFxuICogb3IgYSBsaXN0IG9mIGFzc2V0cyB3aXRoIENoYWluQXNzZXRzXG4gKlxuICogIE9wdGlvbnNcbiAqICAtJ3Byb3BOYW1lcycgYW4gYXJyYXkgb2YgcHJvcCBuYW1lcyB0byBiZSByZXNvbHZlZCBhcyBhc3NldHMuIChkZWZhdWx0cyB0byBcImFzc2V0XCIgb3IgXCJhc3NldHNcIilcbiAqICAtJ2RlZmF1bHRQcm9wcycgZGVmYXVsdCB2YWx1ZXMgdG8gdXNlIGZvciBvYmplY3RzIChvcHRpb25hbClcbiAqICAtJ2FzTGlzdCcgZGVmaW5lcyB3aGV0aGVyIHRvIHVzZSBDaGFpbkFzc2V0c0xpc3Qgb3Igbm90ICh1c2VmdWwgZm9yIHJlc29sdmluZyBsYXJnZSBxdWFudGl0aWVzIG9mIGFzc2V0cylcbiAqICAtJ3dpdGhEeW5hbWljJyBkZWZpbmVzIHdoZXRoZXIgdG8gYWxzbyByZXNvbHZlIGR5bmFtaWMgb2JqZWN0cyBvciBub3RcbiAqL1xuXG5mdW5jdGlvbiBBc3NldFdyYXBwZXIoQ29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnByb3BOYW1lcyA9IG9wdGlvbnMucHJvcE5hbWVzIHx8IFtcbiAgICAgICAgISFvcHRpb25zLmFzTGlzdCA/IFwiYXNzZXRzXCIgOiBcImFzc2V0XCJcbiAgICBdO1xuICAgIGNvbnN0IGZpbmFsUHJvcFR5cGVzID0gb3B0aW9ucy5wcm9wTmFtZXMucmVkdWNlKChyZXMsIHR5cGUpID0+IHtcbiAgICAgICAgcmVzW3R5cGVdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgID8gQ2hhaW5UeXBlcy5DaGFpbkFzc2V0c0xpc3RcbiAgICAgICAgICAgIDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQ7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IE9iamVjdC5rZXlzKGZpbmFsUHJvcFR5cGVzKS5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgb3B0aW9ucy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgcmVzW2tleV0gPSAhIW9wdGlvbnMuYXNMaXN0ID8gTGlzdChjdXJyZW50IHx8IFtdKSA6IGN1cnJlbnQgfHwgXCIxLjMuMFwiO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGlmIChvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiAhIW9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQpIHtcbiAgICAgICAgZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50O1xuICAgIH1cblxuICAgIGNsYXNzIEFzc2V0c1Jlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IGZpbmFsUHJvcFR5cGVzO1xuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbEFzc2V0cyA9IHt9O1xuICAgICAgICAgICAgbGV0IHBhc3NUcm91Z2hQcm9wcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRvcyA9IExpc3QoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvcE5hbWVzLmluZGV4T2YocHJvcCkgIT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuYXNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxBc3NldHNbcHJvcF0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzW3Byb3BdLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXNzVHJvdWdoUHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgd3JhcHBlZCA9IFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIHsuLi5wYXNzVHJvdWdoUHJvcHMsIC4uLmZpbmFsQXNzZXRzfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNPYmplY3RSZXNvbHZlciBkb3M9e2Rvc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d3JhcHBlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljT2JqZWN0UmVzb2x2ZXI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyYXBwZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXNzZXRzUmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0c1Jlc29sdmVyKTtcblxuICAgIGNsYXNzIFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBc3NldHNSZXNvbHZlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgcmVmPVwiYm91bmRfY29tcG9uZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Fzc2V0c1Jlc29sdmVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBXcmFwcGVyLmRpc3BsYXlOYW1lID0gYFdyYXBwZXIoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuICAgIHJldHVybiBXcmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldFdyYXBwZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFZQTs7OztBQXBFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUErREE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTs7OztBQXpCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFLQTtBQURBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBcEVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQUNBO0FBZ0RBO0FBQ0E7QUF2RUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBMEVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQS9FQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==