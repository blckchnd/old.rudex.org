(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15],{

/***/ 2780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2781);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TransitionWrapper = function (_React$Component) {
    _inherits(TransitionWrapper, _React$Component);

    function TransitionWrapper() {
        _classCallCheck(this, TransitionWrapper);

        var _this = _possibleConstructorReturn(this, (TransitionWrapper.__proto__ || Object.getPrototypeOf(TransitionWrapper)).call(this));

        _this.state = {
            animateEnter: false
        };

        _this.timer = null;
        return _this;
    }

    _createClass(TransitionWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.enableAnimation();
        }
    }, {
        key: "resetAnimation",
        value: function resetAnimation() {
            this.setState({
                animateEnter: false
            });

            this.enableAnimation();
        }
    }, {
        key: "enableAnimation",
        value: function enableAnimation() {
            var _this2 = this;

            this.timer = setTimeout(function () {
                if (_this2.timer) {
                    _this2.setState({
                        animateEnter: true
                    });
                }
            }, 2000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.children) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.props.component);
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default.a,
                    {
                        id: this.props.id,
                        className: this.props.className,
                        component: this.props.component,
                        transitionName: this.props.transitionName,
                        transitionEnterTimeout: this.props.enterTimeout,
                        transitionEnter: this.state.animateEnter,
                        transitionLeave: false
                    },
                    this.props.children
                );
            }
        }
    }]);

    return TransitionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransitionWrapper.defaultProps = {
    component: "span",
    enterTimeout: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (TransitionWrapper);

/***/ }),

/***/ 2805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2740);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2742);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2444);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1854);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2806);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(717);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2345);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2356);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2100);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(718);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2357);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2346);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2808);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1957);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(410);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2109);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(725);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2104);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2810);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2811);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




























var MarketGroup = function (_React$Component) {
    _inherits(MarketGroup, _React$Component);

    function MarketGroup(props) {
        _classCallCheck(this, MarketGroup);

        var _this = _possibleConstructorReturn(this, (MarketGroup.__proto__ || Object.getPrototypeOf(MarketGroup)).call(this));

        _this.state = _this._getInitialState(props);
        return _this;
    }

    _createClass(MarketGroup, [{
        key: "_getInitialState",
        value: function _getInitialState(props) {
            var open = props.findMarketTab ? true : props.viewSettings.get("myMarketsBase_" + props.index);
            return {
                open: open !== undefined ? open : true,
                inverseSort: props.viewSettings.get("myMarketsInvert", true),
                sortBy: props.viewSettings.get("myMarketsSort", "volume")
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.findMarketTab !== this.props.findMarketTab) {
                this.setState(this._getInitialState(nextProps));
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!nextProps.markets || !this.props.markets) {
                return true;
            }
            return !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.markets, this.props.markets) || nextProps.starredMarkets !== this.props.starredMarkets || nextProps.marketStats !== this.props.marketStats || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }

        // _onSelectBase(e) {
        //     e.preventDefault();
        //     e.stopPropagation();

        //     SettingsActions.changeBase(this.props.index, e.target.value);
        // }

    }, {
        key: "_onToggle",
        value: function _onToggle() {
            if (!this.props.findMarketTab) {
                var open = !this.state.open;
                this.setState({
                    open: open
                });

                var setting = {};
                setting["myMarketsBase_" + this.props.index] = open;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting(setting);
            }
        }
    }, {
        key: "_onToggleUserMarket",
        value: function _onToggleUserMarket(market) {
            var _market$split = market.split("_"),
                _market$split2 = _slicedToArray(_market$split, 2),
                base = _market$split2[0],
                quote = _market$split2[1];

            var newValue = !this.props.userMarkets.get(market);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].setUserMarket(base, quote, newValue);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                columns = _props.columns,
                markets = _props.markets,
                base = _props.base,
                marketStats = _props.marketStats,
                starredMarkets = _props.starredMarkets,
                current = _props.current;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort,
                open = _state.open;


            if (!markets || !markets.length) {
                return null;
            }

            var headers = columns.map(function (header) {
                switch (header.name) {
                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "name")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market" })
                        );

                    case "vol":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "volume"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.vol_short" })
                        );

                    case "price":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.price" })
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.base_supply" })
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.quote_supply" })
                        );

                    case "change":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "change"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.change" })
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.assets.issuer" })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.confirm_add" })
                        );

                    default:
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { key: header.name });
                }
            });

            var marketRows = markets.map(function (market) {
                if (_this2.props.onlyLiquid && marketStats.get(market.id) && marketStats.get(market.id).volumeBase == 0) {
                    return null;
                }
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: market.id,
                    name: base === "others" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.quote }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.base })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        dataPlace: "left",
                        name: market.quote
                    }),
                    quote: market.quote,
                    base: market.base,
                    columns: columns,
                    leftAlign: true,
                    compact: true,
                    noSymbols: true,
                    stats: marketStats.get(market.id),
                    starred: starredMarkets.has(market.id),
                    current: current === market.id,
                    isChecked: _this2.props.userMarkets.has(market.id),
                    isDefault: _this2.props.defaultMarkets && _this2.props.defaultMarkets.has(market.id),
                    onCheckMarket: _this2._onToggleUserMarket.bind(_this2),
                    location: _this2.props.location,
                    history: _this2.props.history
                });
            }).filter(function (a) {
                return a !== null;
            }).sort(function (a, b) {
                var a_symbols = a.key.split("_");
                var b_symbols = b.key.split("_");
                var aStats = marketStats.get(a_symbols[0] + "_" + a_symbols[1]);
                var bStats = marketStats.get(b_symbols[0] + "_" + b_symbols[1]);

                switch (sortBy) {
                    case "name":
                        if (a_symbols[0] > b_symbols[0]) {
                            return inverseSort ? -1 : 1;
                        } else if (a_symbols[0] < b_symbols[0]) {
                            return inverseSort ? 1 : -1;
                        } else {
                            if (a_symbols[1] > b_symbols[1]) {
                                return inverseSort ? -1 : 1;
                            } else if (a_symbols[1] < b_symbols[1]) {
                                return inverseSort ? 1 : -1;
                            } else {
                                return 0;
                            }
                        }

                    case "volume":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.volumeBase - aStats.volumeBase;
                            } else {
                                return aStats.volumeBase - bStats.volumeBase;
                            }
                        } else {
                            return 0;
                        }

                    case "change":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.change - aStats.change;
                            } else {
                                return aStats.change - bStats.change;
                            }
                        } else {
                            return 0;
                        }
                }
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { paddingRight: 10 } },
                open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "table",
                    { className: "table table-hover text-right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            headers
                        )
                    ),
                    marketRows && marketRows.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        marketRows
                    ) : null
                ) : null
            );
        }
    }]);

    return MarketGroup;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MarketGroup.defaultProps = {
    maxRows: 20,
    onlyLiquid: false
};

var MyMarkets = function (_React$Component2) {
    _inherits(MyMarkets, _React$Component2);

    function MyMarkets(props) {
        _classCallCheck(this, MyMarkets);

        var _this3 = _possibleConstructorReturn(this, (MyMarkets.__proto__ || Object.getPrototypeOf(MyMarkets)).call(this));

        _this3.clearInput = function () {
            _this3.setState({ myMarketFilter: "" });
        };

        _this3.handleSearchUpdate = function (e) {
            _this3.setState({
                myMarketFilter: e.target.value && e.target.value.toUpperCase()
            });
        };

        _this3.state = {
            isQuoteModalVisible: false,
            inverseSort: props.viewSettings.get("myMarketsInvert", true),
            sortBy: props.viewSettings.get("myMarketsSort", "volume"),
            activeTab: props.viewSettings.get("favMarketTab", "my-market"),
            activeMarketTab: props.viewSettings.get("activeMarketTab", 0),
            lookupQuote: null,
            lookupBase: null,
            inputValue: "",
            minWidth: "100%",
            findBaseInput: "BTS",
            activeFindBase: "BTS"
        };

        _this3._setMinWidth = _this3._setMinWidth.bind(_this3);
        _this3.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__["default"].getAssetList.defer, 150);

        _this3.showQuoteModal = _this3.showQuoteModal.bind(_this3);
        _this3.hideQuoteModal = _this3.hideQuoteModal.bind(_this3);
        return _this3;
    }

    _createClass(MyMarkets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.state.activeTab !== nextState.activeTab) {
                this._changeTab(nextState.activeTab);
            } else if (!nextProps.tabHeader && this.state.activeTab !== nextProps.activeTab) {
                this._changeTab(nextProps.activeTab);
            }

            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.searchAssets, this.props.searchAssets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.markets, this.props.markets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.starredMarkets, this.props.starredMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.defaultMarkets, this.props.defaultMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.marketStats, this.props.marketStats) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || nextProps.current !== this.props.current || nextProps.minWidth !== this.props.minWidth || nextProps.listHeight !== this.props.listHeight || nextProps.preferredBases !== this.props.preferredBases || nextProps.onlyStars !== this.props.onlyStars || nextProps.onlyLiquid !== this.props.onlyLiquid || nextProps.assetsLoading !== this.props.assetsLoading || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            if (this.props.setMinWidth) {
                window.addEventListener("resize", this._setMinWidth, {
                    capture: false,
                    passive: true
                });
            }

            if (this.props.currrent) {
                var currentBase = this.props.current.split("_")[1];
                var currentIndex = this.props.preferredBases.findIndex(function (a) {
                    return a === currentBase;
                });
                if (currentIndex !== -1 && currentIndex !== this.state.activeMarketTab) {
                    this.setState({ activeMarketTab: currentIndex });
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this4 = this;

            var historyContainer = this.refs.favorites;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);

            this._setMinWidth();

            if (this.state.activeTab !== this.props.activeTab) {
                setTimeout(function () {
                    _this4._changeTab(_this4.props.activeTab);
                }, 100);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.props.setMinWidth) {
                window.removeEventListener("resize", this._setMinWidth);
            }
            clearTimeout(this.timer);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (this.props.myMarketTab && !np.myMarketTab) {
                if (this.refs.findSearchInput) this.refs.findSearchInput.focus();
            }
        }
    }, {
        key: "hideQuoteModal",
        value: function hideQuoteModal() {
            this.setState({
                isQuoteModalVisible: false
            });
        }
    }, {
        key: "showQuoteModal",
        value: function showQuoteModal() {
            this.setState({
                isQuoteModalVisible: true
            });
        }
    }, {
        key: "_setMinWidth",
        value: function _setMinWidth() {
            if (this.props.setMinWidth && this.refs.favorites && this.props.activeTab === "my-market") {
                if (this.state.minWidth !== this.refs.favorites.offsetWidth) {
                    this.setState({
                        minWidth: this.refs.favorites.offsetWidth
                    });
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.refs.favorites) {
                var historyContainer = this.refs.favorites;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyContainer);
            }
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }
    }, {
        key: "_goMarkets",
        value: function _goMarkets() {
            this.props.history.push("/markets");
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                favMarketTab: tab
            });
            this.setState({
                activeTab: tab
            });

            this._setMinWidth();
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this5 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainValidation"].is_valid_symbol_error(toFind, true);

            this.setState({
                inputValue: toFind
            });
            /* Don't lookup invalid asset names */
            if (toFind && toFind.length >= 2 && !isValidName) return;

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                _this5._lookupAssets(toFind, getBackedAssets);
            }, 1500);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!value && value !== "") return;

            var symbols = value.toUpperCase().split(":");
            var quote = symbols[0];
            var base = symbols.length === 2 ? symbols[1] : null;

            this.setState({
                lookupQuote: quote,
                lookupBase: base
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting.defer({
                marketLookupInput: value.toUpperCase()
            });

            this.getAssetList(quote, 50, gatewayAssets);
        }
    }, {
        key: "toggleActiveMarketTab",
        value: function toggleActiveMarketTab(index) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                activeMarketTab: index
            });

            this.setState({
                activeMarketTab: index
            });
        }
    }, {
        key: "_onInputBaseAsset",
        value: function _onInputBaseAsset(asset) {
            this.setState({
                findBaseInput: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBaseAsset",
        value: function _onFoundBaseAsset(asset) {
            if (asset) {
                this.setState({ activeFindBase: asset.get("symbol") });
            }
        }
    }, {
        key: "_getMarkets",
        value: function _getMarkets() {
            var _props2 = this.props,
                searchAssets = _props2.searchAssets,
                defaultMarkets = _props2.defaultMarkets,
                onlyStars = _props2.onlyStars,
                userMarkets = _props2.userMarkets,
                preferredBases = _props2.preferredBases,
                starredMarkets = _props2.starredMarkets;
            var _state2 = this.state,
                activeTab = _state2.activeTab,
                lookupQuote = _state2.lookupQuote,
                lookupBase = _state2.lookupBase,
                myMarketFilter = _state2.myMarketFilter,
                activeMarketTab = _state2.activeMarketTab;

            var possibleGatewayAssets = Object(common_gateways__WEBPACK_IMPORTED_MODULE_23__["getPossibleGatewayPrefixes"])(preferredBases);

            var bases = this._getBases();
            var allMarkets = [],
                baseGroups = {};
            var otherMarkets = [];

            var myMarketTab = activeTab === "my-market";

            if (searchAssets.size) {
                searchAssets.filter(function (a) {
                    try {
                        if (a.options.description) {
                            var description = JSON.parse(a.options.description);
                            if ("visible" in description) {
                                if (!description.visible) return false;
                            }
                        }
                    } catch (e) {}

                    return a.symbol.indexOf(lookupQuote) !== -1 && a.symbol.length >= lookupQuote.length;
                }).forEach(function (asset) {
                    bases.forEach(function (base) {
                        var marketID = asset.symbol + "_" + base;

                        if (base !== asset.symbol) {
                            allMarkets.push([marketID, { quote: asset.symbol, base: base }]);
                        }
                    });
                });
            }

            allMarkets = allMarkets.filter(function (a) {
                // If a base asset is specified, limit the quote asset to the exact search term
                if (lookupBase) {
                    return a[1].quote === lookupQuote;
                }
                return true;
            });

            var activeMarkets = myMarketTab ? defaultMarkets : immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(allMarkets);
            if (myMarketTab && userMarkets.size) {
                userMarkets.forEach(function (market, key) {
                    if (!activeMarkets.has(key)) activeMarkets = activeMarkets.set(key, market);
                });
            }

            function filterAndSeparateMarkets(base, matchBases, markets, baseGroups, otherMarkets) {
                var others = markets.filter(function (a) {
                    if (a.base === a.quote) return false;
                    /* Return search results in the Find Markets Tab */
                    if (!myMarketTab) {
                        if (lookupQuote.length < 1) {
                            return false;
                        }

                        return a.quote.indexOf(lookupQuote) !== -1;
                    } else {
                        /* Return filtered markets if a filter is input */
                        var ID = a.quote + "_" + a.base;
                        if (!!myMarketFilter) {
                            return ID.indexOf(myMarketFilter) !== -1;
                        }
                        /* Return only starred markets if that option is checked */
                        if (onlyStars && !starredMarkets.has(ID)) {
                            return false;
                        }
                        /* Else return all markets */
                        return true;
                    }
                }).map(function (market) {
                    var marketID = market.quote + "_" + market.base;
                    if (matchBases.indexOf(market.base) !== -1) {
                        if (!baseGroups[base]) {
                            baseGroups[base] = [];
                        }
                        var marketObject = {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                        if (!baseGroups[base].find(function (m) {
                            return m.id === marketID;
                        })) baseGroups[base].push(marketObject);
                        return null;
                    } else if (!preferredBases.includes(market.base) && possibleGatewayAssets.indexOf(market.base) === -1) {
                        // console.log("Adding to other markets:", base, market.base, preferredBases.toJS())
                        return {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                    }
                }).filter(function (a) {
                    return !!a;
                }).take(myMarketTab ? 100 : 20).toArray();
                return { otherMarkets: others.concat(otherMarkets), baseGroups: baseGroups };
            }

            if (activeMarkets.size > 0) {
                var currentBase = myMarketTab ? preferredBases.get(activeMarketTab) : this.state.activeFindBase;

                /* Check for possible gateway versions of the asset */
                var _filterAndSeparateMar = filterAndSeparateMarkets(currentBase, [currentBase], activeMarkets, baseGroups, otherMarkets);

                otherMarkets = _filterAndSeparateMar.otherMarkets;
                baseGroups = _filterAndSeparateMar.baseGroups;
                common_gateways__WEBPACK_IMPORTED_MODULE_23__["gatewayPrefixes"].forEach(function (prefix) {
                    var possibleGatewayAssetName = prefix + "." + currentBase;
                    var gatewayAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainStore"].getAsset(possibleGatewayAssetName);
                    /* If the gateway offers an asset for this base, add it to the list */
                    if (!!gatewayAsset) {
                        var gatewayMarkets = activeMarkets.map(function (m) {
                            if (m.quote === m.base) return null;
                            var newID = m.quote + "_" + possibleGatewayAssetName;
                            if (activeMarkets.has(newID)) return null;
                            return {
                                base: possibleGatewayAssetName,
                                quote: m.quote
                            };
                        }, {}).filter(function (m) {
                            return !!m;
                        });

                        var _filterAndSeparateMar2 = filterAndSeparateMarkets(currentBase, [currentBase, possibleGatewayAssetName], gatewayMarkets, baseGroups, otherMarkets);

                        otherMarkets = _filterAndSeparateMar2.otherMarkets;
                        baseGroups = _filterAndSeparateMar2.baseGroups;
                    }
                });
            }

            return { baseGroups: baseGroups, otherMarkets: otherMarkets };
        }
    }, {
        key: "_getBases",
        value: function _getBases() {
            var _props3 = this.props,
                preferredBases = _props3.preferredBases,
                searchAssets = _props3.searchAssets;
            var _state3 = this.state,
                lookupQuote = _state3.lookupQuote,
                lookupBase = _state3.lookupBase;


            var bases = searchAssets.filter(function (a) {
                if (lookupBase && lookupBase.length) {
                    return a.symbol.indexOf(lookupBase) === 0;
                }
                return a.symbol.indexOf(lookupQuote) !== -1;
            }).map(function (asset) {
                if (lookupBase && lookupBase.length) {
                    if (asset.symbol.indexOf(lookupBase) === 0) {
                        return asset.symbol;
                    }
                } else if (preferredBases.includes(asset.symbol)) {
                    if (asset.symbol.length >= lookupQuote.length && asset.symbol.length < lookupQuote.length + 3) {
                        return asset.symbol;
                    }
                }
            }).filter(function (a) {
                return !!a;
            }).toArray();

            bases = bases.concat(preferredBases.filter(function (a) {
                if (!lookupBase || !lookupBase.length) {
                    return true;
                }
                return a.indexOf(lookupBase) === 0;
            }).toArray());

            bases = bases.filter(function (base) {
                if (lookupBase && lookupBase.length > 1) {
                    return base.indexOf(lookupBase) === 0;
                } else {
                    return true;
                }
            });

            return bases;
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var _props4 = this.props,
                starredMarkets = _props4.starredMarkets,
                marketStats = _props4.marketStats,
                columns = _props4.columns,
                assetsLoading = _props4.assetsLoading,
                preferredBases = _props4.preferredBases,
                current = _props4.current,
                viewSettings = _props4.viewSettings,
                listHeight = _props4.listHeight;
            var _state4 = this.state,
                activeMarketTab = _state4.activeMarketTab,
                activeTab = _state4.activeTab;


            var myMarketTab = activeTab === "my-market";
            var defaultBases = preferredBases.map(function (a) {
                return a;
            });

            if (!myMarketTab) {
                preferredBases = preferredBases.clear();
                preferredBases = preferredBases.push(this.state.activeFindBase);
            }

            // Add some default base options
            // let preferredBases = [coreSymbol, "BTC", "USD", "CNY"];

            /* In the find-market tab, only use market tab 0 */
            if (!myMarketTab) activeMarketTab = 0;

            var _getMarkets2 = this._getMarkets(),
                baseGroups = _getMarkets2.baseGroups,
                otherMarkets = _getMarkets2.otherMarkets;

            var hasOthers = otherMarkets && otherMarkets.length;
            var hc = "mymarkets-header clickable";
            var starClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: !myMarketTab });
            var allClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: myMarketTab });

            var listStyle = {
                minWidth: this.state.minWidth,
                minHeight: "6rem"
            };
            if (listHeight) {
                listStyle.height = listHeight;
            }

            var translator = __webpack_require__(578);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.className, style: this.props.style },
                this.props.tabHeader ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: this.props.headerStyle,
                        className: "grid-block shrink left-orderbook-header bottom-header"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            ref: "myMarkets",
                            className: starClass,
                            onClick: this._changeTab.bind(this, "my-market"),
                            "data-intro": translator.translate("walkthrough.my_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market_name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: allClass,
                            onClick: this._changeTab.bind(this, "find-market"),
                            "data-intro": translator.translate("walkthrough.find_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.more" })
                    )
                ) : null,
                this.props.noHeader || this.props.tabHeader ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { style: this.props.headerStyle },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "exchange-content-header" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market_name" })
                        )
                    )
                ),
                this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "small-12 medium-6",
                        style: { padding: "1rem 0" }
                    },
                    this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { paddingBottom: "0.5rem" } },
                        this.props.controls
                    ) : null
                ) : null,
                myMarketTab ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical shrink",
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0 0.5rem 0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyLiquid,
                                onChange: function onChange() {
                                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                                        onlyLiquid: !_this6.props.onlyLiquid
                                    });
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.show_only_liquid" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyStars,
                                onChange: function onChange() {
                                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__["default"].toggleStars();
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    string: "exchange.show_only_star_formatter",
                                    keys: [{
                                        type: "icon",
                                        value: "fi-star",
                                        className: "gold-star",
                                        arg: "star_icon"
                                    }]
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "search-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "filter inline-block" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_25__["default"], {
                                    style: {
                                        fontSize: "0.9rem",
                                        height: "inherit",
                                        position: "relative"
                                    },
                                    className: "no-margin market-filter-input",
                                    value: this.state.myMarketFilter,
                                    onChange: this.handleSearchUpdate
                                })
                            )
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "table",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        onAssetSelect: this._onFoundBaseAsset.bind(this),
                                        assets: defaultBases,
                                        onChange: this._onInputBaseAsset.bind(this),
                                        asset: this.state.findBaseInput,
                                        assetInput: this.state.findBaseInput,
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingBottom: "1.5rem"
                                        },
                                        onFound: this._onFoundBaseAsset.bind(this),
                                        label: "exchange.quote",
                                        noLabel: true,
                                        inputStyle: { fontSize: "0.9rem" }
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.user_issued_assets.name" }),
                                        ":"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        style: {
                                            fontSize: "0.9rem",
                                            position: "relative",
                                            top: 1
                                        },
                                        type: "text",
                                        value: this.state.inputValue,
                                        onChange: this._onInputName.bind(this, true),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("exchange.search"),
                                        maxLength: 16,
                                        tabIndex: 2,
                                        ref: "findSearchInput"
                                    }),
                                    this.state.assetNameError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        {
                                            className: "error-area",
                                            style: { paddingTop: 10 }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    wordBreak: "break-all"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                                content: "explorer.asset.invalid",
                                                name: this.state.inputValue
                                            })
                                        )
                                    ) : null
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "ul",
                    { className: "mymarkets-tabs", style: { marginBottom: 0 } },
                    myMarketTab && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "quote_edit",
                            style: { textTransform: "uppercase" },
                            onClick: this.showQuoteModal,
                            className: "mymarkets-tab"
                        },
                        "\xA0+\xA0"
                    ),
                    !myMarketTab && !this.state.inputValue ? null : preferredBases.map(function (base, index) {
                        if (!base) return null;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "li",
                            {
                                key: base,
                                onClick: _this6.toggleActiveMarketTab.bind(_this6, index),
                                className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                    active: activeMarketTab === index
                                })
                            },
                            base.replace(".", "")
                        );
                    }),
                    myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "others",
                            style: { textTransform: "uppercase" },
                            onClick: this.toggleActiveMarketTab.bind(this, preferredBases.size + 1),
                            className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                active: activeMarketTab === preferredBases.size + 1
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.others" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: listStyle,
                        className: "table-container grid-block vertical mymarkets-list",
                        ref: "favorites"
                    },
                    assetsLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: {
                                position: "absolute",
                                paddingTop: "3rem",
                                textAlign: "center",
                                width: "100%"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__["default"], { type: "three-bounce" })
                    ) : null,
                    preferredBases.filter(function (a) {
                        return a === preferredBases.get(activeMarketTab);
                    }).map(function (base, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                            userMarkets: _this6.props.userMarkets,
                            defaultMarkets: _this6.props.defaultMarkets,
                            index: index,
                            allowChange: false,
                            key: base,
                            current: current,
                            starredMarkets: starredMarkets,
                            marketStats: marketStats,
                            viewSettings: viewSettings,
                            columns: myMarketTab ? columns : _this6.props.findColumns || columns,
                            markets: baseGroups[base],
                            base: base,
                            maxRows: myMarketTab ? 20 : 10,
                            findMarketTab: !myMarketTab,
                            location: _this6.props.location,
                            history: _this6.props.history,
                            onlyLiquid: _this6.props.onlyLiquid && myMarketTab
                        });
                    }),
                    activeMarketTab === preferredBases.size + 1 && myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                        userMarkets: this.props.userMarkets,
                        index: preferredBases.size,
                        current: current,
                        starredMarkets: starredMarkets,
                        marketStats: marketStats,
                        viewSettings: viewSettings,
                        columns: columns,
                        markets: otherMarkets,
                        base: "others",
                        maxRows: myMarketTab ? 20 : 10,
                        findMarketTab: !myMarketTab,
                        location: this.props.location,
                        history: this.props.history
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    visible: this.state.isQuoteModalVisible,
                    hideModal: this.hideQuoteModal,
                    showModal: this.showQuoteModal,
                    quotes: this.props.preferredBases
                })
            );
        }
    }]);

    return MyMarkets;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MyMarkets.defaultProps = {
    activeTab: "my-market",
    setMinWidth: false
};


MyMarkets = react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default()(MyMarkets, 50, { leading: false });

var MyMarketsWrapper = function (_React$Component3) {
    _inherits(MyMarketsWrapper, _React$Component3);

    function MyMarketsWrapper() {
        _classCallCheck(this, MyMarketsWrapper);

        return _possibleConstructorReturn(this, (MyMarketsWrapper.__proto__ || Object.getPrototypeOf(MyMarketsWrapper)).apply(this, arguments));
    }

    _createClass(MyMarketsWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyMarkets, this.props);
        }
    }]);

    return MyMarketsWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(MyMarketsWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().starredMarkets,
            onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("onlyLiquid", true),
            defaultMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().defaultMarkets,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings,
            preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().preferredBases,
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().allMarketStats,
            userMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().userMarkets,
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assets,
            onlyStars: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().onlyStars,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assetsLoading
        };
    }
}));

/***/ }),

/***/ 2806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2097);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2807);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2773);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1863);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2346);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(718);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1836);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var MarketRow = function (_React$Component) {
    _inherits(MarketRow, _React$Component);

    function MarketRow() {
        _classCallCheck(this, MarketRow);

        var _this = _possibleConstructorReturn(this, (MarketRow.__proto__ || Object.getPrototypeOf(MarketRow)).call(this));

        _this.statsInterval = null;
        return _this;
    }

    _createClass(MarketRow, [{
        key: "_onClick",
        value: function _onClick(marketID) {
            var newPath = "/market/" + marketID;
            if (newPath !== this.props.location.pathname) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].switchMarket();
                this.props.history.push("/market/" + marketID);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.statsChecked = new Date();
            if (this.props.base.get && this.props.base.get("id") && this.props.quote.get && this.props.quote.get("id")) {
                this.statsInterval = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStatsInterval(35 * 1000, this.props.base, this.props.quote);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.statsInterval) this.statsInterval();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "_onStar",
        value: function _onStar(quote, base, e) {
            e.preventDefault();
            if (!this.props.starred) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quote = _props.quote,
                base = _props.base,
                noSymbols = _props.noSymbols,
                stats = _props.stats,
                starred = _props.starred;

            if (!quote || !base) {
                return null;
            }

            var marketID = quote.get("symbol") + "_" + base.get("symbol");
            var marketName = quote.get("symbol") + ":" + base.get("symbol");
            var dynamic_data = this.props.getDynamicObject(quote.get("dynamic_asset_data_id"));
            var base_dynamic_data = this.props.getDynamicObject(base.get("dynamic_asset_data_id"));

            var price = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertPrice(quote, base);

            var rowStyles = {};
            if (this.props.leftAlign) {
                rowStyles.textAlign = "left";
            }

            var buttonClass = "button outline";
            var buttonStyle = null;
            if (this.props.compact) {
                buttonClass += " no-margin";
                buttonStyle = {
                    marginBottom: 0,
                    fontSize: "0.75rem",
                    padding: "4px 10px",
                    borderRadius: "0px",
                    letterSpacing: "0.05rem"
                };
            }

            var columns = this.props.columns.map(function (column) {
                switch (column.name) {
                    case "star":
                        var starClass = starred ? "gold-star" : "grey-star";
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onStar.bind(_this2, quote.get("symbol"), base.get("symbol")),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                className: starClass,
                                name: "fi-star",
                                title: "icons.fi_star.symbol"
                            })
                        );

                    case "vol":
                        var amount = stats ? stats.volumeBase : 0;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_volume(amount)
                        );

                    case "change":
                        var change = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(stats && stats.change ? stats.change : 0, 2);
                        var changeClass = change === "0.00" ? "" : change > 0 ? "change-up" : "change-down";

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right " + changeClass,
                                key: column.index
                            },
                            change + "%"
                        );

                    case "marketName":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: buttonClass,
                                    style: buttonStyle
                                },
                                marketName
                            )
                        );

                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 20,
                                name: quote.get("symbol")
                            }),
                            _this2.props.name
                        );

                    case "price":
                        var finalPrice = stats && stats.price ? stats.price.toReal() : stats && stats.close && stats.close.quote.amount && stats.close.base.amount ? common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(stats.close.quote.amount, quote, stats.close.base.amount, base, true) : common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(price.quote.amount, quote, price.base.amount, base, true);

                        var highPrecisionAssets = ["BTC", "GDEX.BTC", "XBTSX.BTC", "GOLD", "SILVER"];
                        var precision = 6;
                        if (highPrecisionAssets.indexOf(base.get("symbol")) !== -1) {
                            precision = 8;
                        }

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(finalPrice, finalPrice > 1000 ? 0 : finalPrice > 10 ? 2 : precision)
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(dynamic_data.get("current_supply"), 10),
                                asset: quote.get("id")
                            }) : null
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            base_dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(base_dynamic_data.get("current_supply"), 10),
                                asset: base.get("id")
                            }) : null
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__["default"], { account: quote.get("issuer") })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                key: column.index,
                                onClick: _this2.props.onCheckMarket.bind(_this2, marketID)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Tooltip"],
                                {
                                    title: _this2.props.isDefault ? "This market is a default market and cannot be removed" : null
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    checked: !!_this2.props.isChecked || _this2.props.isDefault,
                                    disabled: _this2.props.isDefault
                                })
                            )
                        );

                    case "remove":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                key: column.index,
                                className: "clickable",
                                onClick: _this2.props.removeMarket
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    style: {
                                        marginBottom: "6px",
                                        marginRight: "6px",
                                        zIndex: 999
                                    },
                                    className: "text float-right remove"
                                },
                                "\u2013"
                            )
                        );

                    default:
                        break;
                }
            }).sort(function (a, b) {
                return a.key > b.key;
            });

            var className = "clickable";
            if (this.props.current) {
                className += " activeMarket";
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: className, style: rowStyles },
                columns
            );
        }
    }]);

    return MarketRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketRow.defaultProps = {
    noSymbols: false
};

MarketRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(MarketRow);

/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketRow, {
    propNames: ["quote", "base"],
    defaultProps: {
        tempComponent: "tr"
    },
    withDynamic: true
}));

/***/ }),

/***/ 2807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1973);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1974);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Given an account id, displays the name of that account
 *
 *  Expects one property, 'account' which should be a account id
 */

var AccountName = function (_React$Component) {
    _inherits(AccountName, _React$Component);

    function AccountName() {
        _classCallCheck(this, AccountName);

        return _possibleConstructorReturn(this, (AccountName.__proto__ || Object.getPrototypeOf(AccountName)).apply(this, arguments));
    }

    _createClass(AccountName, [{
        key: "render",
        value: function render() {
            if (!this.props.account) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                this.props.account.get("name")
            );
        }
    }]);

    return AccountName;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountName.propTypes = {
    account: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};
AccountName.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AccountName));

/***/ }),

/***/ 2809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var scroll_length = props.scroll_length;

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = {
            active: false
        };

        _this.listener = false;
        _this.onBodyClick = _this.onBodyClick.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setListener();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.entries, this.props.entries) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(ns, this.state) || np.value !== this.props.value;
        }
    }, {
        key: "_setListener",
        value: function _setListener() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (props.entries.length > 1 && !this.listener) {
                this.listener = true;
                document.body.addEventListener("click", this.onBodyClick, {
                    capture: false,
                    passive: true
                });
            }
        }
    }, {
        key: "_removeListener",
        value: function _removeListener() {
            document.body.removeEventListener("click", this.onBodyClick);
            this.listener = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.entries.length === 1) {
                this._removeListener();
            } else if (np.entries.length > 1) {
                this._setListener(np);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._removeListener();
        }
    }, {
        key: "onBodyClick",
        value: function onBodyClick(e) {
            var el = e.target;
            var insideActionSheet = false;

            do {
                if (el.classList && el.classList.contains("dropdown") && el.id === this.props.id) {
                    insideActionSheet = true;
                    break;
                }
            } while (el = el.parentNode);

            if (!insideActionSheet) {
                this.setState({ active: false });
            } else {
                e.stopPropagation();
            }
        }
    }, {
        key: "onChange",
        value: function onChange(value, e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onChange(value);
            this.setState({
                active: false
            });
        }
    }, {
        key: "_toggleDropdown",
        value: function _toggleDropdown() {
            this.setState({
                active: !this.state.active
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                entries = _props.entries,
                value = _props.value;
            var active = this.state.active;

            if (entries.length === 0) return null;
            if (entries.length == 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "dropdown-wrapper inactive" + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        this.props.singleEntry ? this.props.singleEntry : entries[0]
                    )
                );
            } else {
                var options = entries.map(function (value) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        {
                            className: _this2.props.upperCase ? "upper-case" : "",
                            key: value,
                            onClick: _this2.onChange.bind(_this2, _this2.props.values[value])
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            value
                        )
                    );
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleDropdown.bind(this),
                        className: "dropdown-wrapper" + (active ? " active" : "") + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingRight: 15 } },
                        value ? value : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "hidden" },
                            "A"
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        {
                            className: "dropdown",
                            style: {
                                overflow: entries.length > this.props.scroll_length ? "auto" : "hidden"
                            }
                        },
                        options
                    )
                );
            }
        }
    }]);

    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Dropdown.propTypes = {
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Dropdown.defaultProps = {
    scroll_length: 9
};


/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ 2810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1863);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(718);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var QuoteSelectionModal = function (_React$Component) {
    _inherits(QuoteSelectionModal, _React$Component);

    function QuoteSelectionModal() {
        _classCallCheck(this, QuoteSelectionModal);

        var _this = _possibleConstructorReturn(this, (QuoteSelectionModal.__proto__ || Object.getPrototypeOf(QuoteSelectionModal)).call(this));

        _this.state = {
            backingAsset: "",
            error: false,
            valid: false
        };
        return _this;
    }

    _createClass(QuoteSelectionModal, [{
        key: "_onMoveUp",
        value: function _onMoveUp(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx - 1
            });
        }
    }, {
        key: "_onMoveDown",
        value: function _onMoveDown(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx + 1
            });
        }
    }, {
        key: "_onRemove",
        value: function _onRemove(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            if (idx >= 0) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                    remove: idx
                });
            }
        }
    }, {
        key: "_onAdd",
        value: function _onAdd(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote.get("symbol");
            });
            if (idx === -1) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                    add: quote.get("symbol")
                });
            }
        }
    }, {
        key: "_onInputBackingAsset",
        value: function _onInputBackingAsset(asset) {
            this.setState({
                backingAsset: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBackingAsset",
        value: function _onFoundBackingAsset(asset) {
            if (asset) {
                if (!this.props.quotes.includes(asset.get("symbol"))) {
                    this.setState({ isValid: true });
                } else {
                    this.setState({
                        error: "Asset already being used",
                        isValid: false
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var error = this.state.error;

            var quoteCount = this.props.quotes.size;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.quote_selection"),
                    closable: false,
                    visible: this.props.visible,
                    id: "quote_selection",
                    overlay: true,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                        { onClick: this.props.hideModal },
                        counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("modal.close")
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "no-border-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "thead",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.quote" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.move_down" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.move_up" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.remove" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            this.props.quotes.map(function (q, idx) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    { key: q },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        idx + 1
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        q
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== quoteCount - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveDown.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveUp.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable rotate180"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        quoteCount > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onRemove.bind(_this2, q),
                                            name: "cross-circle",
                                            className: "clickable"
                                        })
                                    )
                                );
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            label: "exchange.custom_quote",
                            onChange: this._onInputBackingAsset.bind(this),
                            asset: this.state.backingAsset,
                            assetInput: this.state.backingAsset,
                            tabIndex: 1,
                            style: { width: "100%", paddingRight: "10px" },
                            onFound: this._onFoundBackingAsset.bind(this),
                            onAction: this._onAdd.bind(this),
                            action_label: "exchange.add_quote",
                            disableActionButton: !!error,
                            noLabel: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "error-area" },
                            error
                        )
                    )
                )
            );
        }
    }]);

    return QuoteSelectionModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QuoteSelectionModal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2V+ZXhwbG9yZXIuOTJlMGE0ZDlmZGY4NzUwMjA1ZTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015TWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd24uanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXHJcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17dGhpcy5wcm9wcy5lbnRlclRpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRSb3cgZnJvbSBcIi4vTWFya2V0Um93XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb24sIENoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcywgZ2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcblxuY2xhc3MgTWFya2V0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG1heFJvd3M6IDIwLFxuICAgICAgICBvbmx5TGlxdWlkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBvcGVuID0gcHJvcHMuZmluZE1hcmtldFRhYlxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoYG15TWFya2V0c0Jhc2VfJHtwcm9wcy5pbmRleH1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW46IG9wZW4gIT09IHVuZGVmaW5lZCA/IG9wZW4gOiB0cnVlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5maW5kTWFya2V0VGFiICE9PSB0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0SW5pdGlhbFN0YXRlKG5leHRQcm9wcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldHMgfHwgIXRoaXMucHJvcHMubWFya2V0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLm1hcmtldHMsIHRoaXMucHJvcHMubWFya2V0cykgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIF9vblNlbGVjdEJhc2UoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZUJhc2UodGhpcy5wcm9wcy5pbmRleCwgZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH1cblxuICAgIF9vblRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuID0gIXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ1tgbXlNYXJrZXRzQmFzZV8ke3RoaXMucHJvcHMuaW5kZXh9YF0gPSBvcGVuO1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlVXNlck1hcmtldChtYXJrZXQpIHtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPSBtYXJrZXQuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy51c2VyTWFya2V0cy5nZXQobWFya2V0KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldFVzZXJNYXJrZXQoYmFzZSwgcXVvdGUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0LCBvcGVufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFtYXJrZXRzIHx8ICFtYXJrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IGNvbHVtbnMubWFwKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGhlYWRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwidm9sdW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbF9zaG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYXNlX3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5xdW90ZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJjaGFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlzc3VlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY29uZmlybV9hZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtoZWFkZXIubmFtZX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpLnZvbHVtZUJhc2UgPT0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXJrZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlID09PSBcIm90aGVyc1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LnF1b3RlfSAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LmJhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17bWFya2V0LnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17bWFya2V0LmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFsaWduPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vU3ltYm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXttYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWQ9e3N0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudCA9PT0gbWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cy5oYXMobWFya2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja01hcmtldD17dGhpcy5fb25Ub2dnbGVVc2VyTWFya2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYV9zeW1ib2xzID0gYS5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiX3N5bWJvbHMgPSBiLmtleS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgbGV0IGFTdGF0cyA9IG1hcmtldFN0YXRzLmdldChhX3N5bWJvbHNbMF0gKyBcIl9cIiArIGFfc3ltYm9sc1sxXSk7XG4gICAgICAgICAgICAgICAgbGV0IGJTdGF0cyA9IG1hcmtldFN0YXRzLmdldChiX3N5bWJvbHNbMF0gKyBcIl9cIiArIGJfc3ltYm9sc1sxXSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1swXSA+IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYV9zeW1ib2xzWzBdIDwgYl9zeW1ib2xzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzFdID4gYl9zeW1ib2xzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1sxXSA8IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2x1bWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMudm9sdW1lQmFzZSAtIGFTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMudm9sdW1lQmFzZSAtIGJTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52ZXJzZVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJTdGF0cy5jaGFuZ2UgLSBhU3RhdHMuY2hhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMuY2hhbmdlIC0gYlN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57aGVhZGVyc308L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRSb3dzICYmIG1hcmtldFJvd3MubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57bWFya2V0Um93c308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE15TWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlVGFiOiBcIm15LW1hcmtldFwiLFxuICAgICAgICBzZXRNaW5XaWR0aDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c0ludmVydFwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIiksXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJmYXZNYXJrZXRUYWJcIiwgXCJteS1tYXJrZXRcIiksXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVNYXJrZXRUYWJcIiwgMCksXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IG51bGwsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogXCJCVFNcIixcbiAgICAgICAgICAgIGFjdGl2ZUZpbmRCYXNlOiBcIkJUU1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGggPSB0aGlzLl9zZXRNaW5XaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93UXVvdGVNb2RhbCA9IHRoaXMuc2hvd1F1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXVvdGVNb2RhbCA9IHRoaXMuaGlkZVF1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0U3RhdGUuYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIobmV4dFN0YXRlLmFjdGl2ZVRhYik7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAhbmV4dFByb3BzLnRhYkhlYWRlciAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVUYWIgIT09IG5leHRQcm9wcy5hY3RpdmVUYWJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIobmV4dFByb3BzLmFjdGl2ZVRhYik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuc2VhcmNoQXNzZXRzLCB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cykgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLm1hcmtldHMsIHRoaXMucHJvcHMubWFya2V0cykgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMoXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMoXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdE1hcmtldHNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLm1hcmtldFN0YXRzLCB0aGlzLnByb3BzLm1hcmtldFN0YXRzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5taW5XaWR0aCAhPT0gdGhpcy5wcm9wcy5taW5XaWR0aCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmxpc3RIZWlnaHQgIT09IHRoaXMucHJvcHMubGlzdEhlaWdodCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnByZWZlcnJlZEJhc2VzICE9PSB0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub25seVN0YXJzICE9PSB0aGlzLnByb3BzLm9ubHlTdGFycyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9ubHlMaXF1aWQgIT09IHRoaXMucHJvcHMub25seUxpcXVpZCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFzc2V0c0xvYWRpbmcgIT09IHRoaXMucHJvcHMuYXNzZXRzTG9hZGluZyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJNYXJrZXRzICE9PSB0aGlzLnByb3BzLnVzZXJNYXJrZXRzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRNaW5XaWR0aCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0TWluV2lkdGgsIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmFzZSA9IHRoaXMucHJvcHMuY3VycmVudC5zcGxpdChcIl9cIilbMV07XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICBhID0+IGEgPT09IGN1cnJlbnRCYXNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IHRoaXMuc3RhdGUuYWN0aXZlTWFya2V0VGFiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVNYXJrZXRUYWI6IGN1cnJlbnRJbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoaXN0b3J5Q29udGFpbmVyID0gdGhpcy5yZWZzLmZhdm9yaXRlcztcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShoaXN0b3J5Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gdGhpcy5wcm9wcy5hY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYih0aGlzLnByb3BzLmFjdGl2ZVRhYik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldE1pbldpZHRoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXRNaW5XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubXlNYXJrZXRUYWIgJiYgIW5wLm15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmZpbmRTZWFyY2hJbnB1dCkgdGhpcy5yZWZzLmZpbmRTZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVF1b3RlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1F1b3RlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0TWluV2lkdGgoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0TWluV2lkdGggJiZcbiAgICAgICAgICAgIHRoaXMucmVmcy5mYXZvcml0ZXMgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWluV2lkdGggIT09IHRoaXMucmVmcy5mYXZvcml0ZXMub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMucmVmcy5mYXZvcml0ZXMub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5mYXZvcml0ZXMpIHtcbiAgICAgICAgICAgIGxldCBoaXN0b3J5Q29udGFpbmVyID0gdGhpcy5yZWZzLmZhdm9yaXRlcztcbiAgICAgICAgICAgIFBzLnVwZGF0ZShoaXN0b3J5Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbnZlcnNlU29ydCgpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIG15TWFya2V0c0ludmVydDogIXRoaXMuc3RhdGUubXlNYXJrZXRzSW52ZXJ0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiAhdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hhbmdlU29ydCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9PSB0aGlzLnN0YXRlLnNvcnRCeSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBteU1hcmtldHNTb3J0OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNvcnRCeTogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZlcnNlU29ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dvTWFya2V0cygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbWFya2V0c1wiKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHRhYikge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZmF2TWFya2V0VGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGgoKTtcbiAgICB9XG5cbiAgICBfb25JbnB1dE5hbWUoZ2V0QmFja2VkQXNzZXRzLCBlKSB7XG4gICAgICAgIGxldCB0b0ZpbmQgPSBlLnRhcmdldC52YWx1ZS50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgbGV0IGlzVmFsaWROYW1lID0gIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodG9GaW5kLCB0cnVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IHRvRmluZFxuICAgICAgICB9KTtcbiAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cbiAgICAgICAgaWYgKHRvRmluZCAmJiB0b0ZpbmQubGVuZ3RoID49IDIgJiYgIWlzVmFsaWROYW1lKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gdG9GaW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvb2t1cEFzc2V0cyh0b0ZpbmQsIGdldEJhY2tlZEFzc2V0cyk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgIH1cblxuICAgIF9sb29rdXBBc3NldHModmFsdWUsIGdhdGV3YXlBc3NldHMgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSBcIlwiKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHN5bWJvbHMgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgbGV0IHF1b3RlID0gc3ltYm9sc1swXTtcbiAgICAgICAgbGV0IGJhc2UgPSBzeW1ib2xzLmxlbmd0aCA9PT0gMiA/IHN5bWJvbHNbMV0gOiBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9va3VwUXVvdGU6IHF1b3RlLFxuICAgICAgICAgICAgbG9va3VwQmFzZTogYmFzZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcuZGVmZXIoe1xuICAgICAgICAgICAgbWFya2V0TG9va3VwSW5wdXQ6IHZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QocXVvdGUsIDUwLCBnYXRld2F5QXNzZXRzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVBY3RpdmVNYXJrZXRUYWIoaW5kZXgpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYjogaW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IGluZGV4XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbklucHV0QmFzZUFzc2V0KGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogYXNzZXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZvdW5kQmFzZUFzc2V0KGFzc2V0KSB7XG4gICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlRmluZEJhc2U6IGFzc2V0LmdldChcInN5bWJvbFwiKX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXlNYXJrZXRGaWx0ZXI6IFwiXCJ9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU2VhcmNoVXBkYXRlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbXlNYXJrZXRGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlICYmIGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9nZXRNYXJrZXRzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzZWFyY2hBc3NldHMsXG4gICAgICAgICAgICBkZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgIG9ubHlTdGFycyxcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0c1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlVGFiLFxuICAgICAgICAgICAgbG9va3VwUXVvdGUsXG4gICAgICAgICAgICBsb29rdXBCYXNlLFxuICAgICAgICAgICAgbXlNYXJrZXRGaWx0ZXIsXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlR2F0ZXdheUFzc2V0cyA9IGdldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzKFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXNcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYmFzZXMgPSB0aGlzLl9nZXRCYXNlcygpO1xuICAgICAgICBsZXQgYWxsTWFya2V0cyA9IFtdLFxuICAgICAgICAgICAgYmFzZUdyb3VwcyA9IHt9O1xuICAgICAgICBsZXQgb3RoZXJNYXJrZXRzID0gW107XG5cbiAgICAgICAgY29uc3QgbXlNYXJrZXRUYWIgPSBhY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCI7XG5cbiAgICAgICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplKSB7XG4gICAgICAgICAgICBzZWFyY2hBc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEub3B0aW9ucy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoYS5vcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ2aXNpYmxlXCIgaW4gZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXNjcmlwdGlvbi52aXNpYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmxlbmd0aCA+PSBsb29rdXBRdW90ZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZXMuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9IGFzc2V0LnN5bWJvbCArIFwiX1wiICsgYmFzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UgIT09IGFzc2V0LnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbE1hcmtldHMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGU6IGFzc2V0LnN5bWJvbCwgYmFzZTogYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxNYXJrZXRzID0gYWxsTWFya2V0cy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBhIGJhc2UgYXNzZXQgaXMgc3BlY2lmaWVkLCBsaW1pdCB0aGUgcXVvdGUgYXNzZXQgdG8gdGhlIGV4YWN0IHNlYXJjaCB0ZXJtXG4gICAgICAgICAgICBpZiAobG9va3VwQmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzFdLnF1b3RlID09PSBsb29rdXBRdW90ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlTWFya2V0cyA9IG15TWFya2V0VGFiXG4gICAgICAgICAgICA/IGRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICA6IEltbXV0YWJsZS5NYXAoYWxsTWFya2V0cyk7XG4gICAgICAgIGlmIChteU1hcmtldFRhYiAmJiB1c2VyTWFya2V0cy5zaXplKSB7XG4gICAgICAgICAgICB1c2VyTWFya2V0cy5mb3JFYWNoKChtYXJrZXQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlTWFya2V0cy5oYXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0cyA9IGFjdGl2ZU1hcmtldHMuc2V0KGtleSwgbWFya2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIG1hdGNoQmFzZXMsXG4gICAgICAgICAgICBtYXJrZXRzLFxuICAgICAgICAgICAgYmFzZUdyb3VwcyxcbiAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBvdGhlcnMgPSBtYXJrZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuYmFzZSA9PT0gYS5xdW90ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvKiBSZXR1cm4gc2VhcmNoIHJlc3VsdHMgaW4gdGhlIEZpbmQgTWFya2V0cyBUYWIgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFteU1hcmtldFRhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFF1b3RlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnF1b3RlLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBmaWx0ZXJlZCBtYXJrZXRzIGlmIGEgZmlsdGVyIGlzIGlucHV0ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBJRCA9IGEucXVvdGUgKyBcIl9cIiArIGEuYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW15TWFya2V0RmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElELmluZGV4T2YobXlNYXJrZXRGaWx0ZXIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBvbmx5IHN0YXJyZWQgbWFya2V0cyBpZiB0aGF0IG9wdGlvbiBpcyBjaGVja2VkICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25seVN0YXJzICYmICFzdGFycmVkTWFya2V0cy5oYXMoSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRWxzZSByZXR1cm4gYWxsIG1hcmtldHMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKG1hcmtldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9IG1hcmtldC5xdW90ZSArIFwiX1wiICsgbWFya2V0LmJhc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaEJhc2VzLmluZGV4T2YobWFya2V0LmJhc2UpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlR3JvdXBzW2Jhc2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3Vwc1tiYXNlXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZUdyb3Vwc1tiYXNlXS5maW5kKG0gPT4gbS5pZCA9PT0gbWFya2V0SUQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cHNbYmFzZV0ucHVzaChtYXJrZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhcHJlZmVycmVkQmFzZXMuaW5jbHVkZXMobWFya2V0LmJhc2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUdhdGV3YXlBc3NldHMuaW5kZXhPZihtYXJrZXQuYmFzZSkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBZGRpbmcgdG8gb3RoZXIgbWFya2V0czpcIiwgYmFzZSwgbWFya2V0LmJhc2UsIHByZWZlcnJlZEJhc2VzLnRvSlMoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1hcmtldElELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAgICAgLnRha2UobXlNYXJrZXRUYWIgPyAxMDAgOiAyMClcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtvdGhlck1hcmtldHM6IG90aGVycy5jb25jYXQob3RoZXJNYXJrZXRzKSwgYmFzZUdyb3Vwc307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlTWFya2V0cy5zaXplID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSBteU1hcmtldFRhYlxuICAgICAgICAgICAgICAgID8gcHJlZmVycmVkQmFzZXMuZ2V0KGFjdGl2ZU1hcmtldFRhYilcbiAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuYWN0aXZlRmluZEJhc2U7XG5cbiAgICAgICAgICAgICh7b3RoZXJNYXJrZXRzLCBiYXNlR3JvdXBzfSA9IGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcbiAgICAgICAgICAgICAgICBjdXJyZW50QmFzZSxcbiAgICAgICAgICAgICAgICBbY3VycmVudEJhc2VdLFxuICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldHMsXG4gICAgICAgICAgICAgICAgYmFzZUdyb3VwcyxcbiAgICAgICAgICAgICAgICBvdGhlck1hcmtldHNcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAvKiBDaGVjayBmb3IgcG9zc2libGUgZ2F0ZXdheSB2ZXJzaW9ucyBvZiB0aGUgYXNzZXQgKi9cbiAgICAgICAgICAgIGdhdGV3YXlQcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZSA9IGAke3ByZWZpeH0uJHtjdXJyZW50QmFzZX1gO1xuICAgICAgICAgICAgICAgIGxldCBnYXRld2F5QXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8qIElmIHRoZSBnYXRld2F5IG9mZmVycyBhbiBhc3NldCBmb3IgdGhpcyBiYXNlLCBhZGQgaXQgdG8gdGhlIGxpc3QgKi9cbiAgICAgICAgICAgICAgICBpZiAoISFnYXRld2F5QXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdhdGV3YXlNYXJrZXRzID0gYWN0aXZlTWFya2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5xdW90ZSA9PT0gbS5iYXNlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SUQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1fJHtwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlTWFya2V0cy5oYXMobmV3SUQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtID0+ICEhbSk7XG4gICAgICAgICAgICAgICAgICAgICh7b3RoZXJNYXJrZXRzLCBiYXNlR3JvdXBzfSA9IGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2N1cnJlbnRCYXNlLCBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheU1hcmtldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtiYXNlR3JvdXBzLCBvdGhlck1hcmtldHN9O1xuICAgIH1cblxuICAgIF9nZXRCYXNlcygpIHtcbiAgICAgICAgbGV0IHtwcmVmZXJyZWRCYXNlcywgc2VhcmNoQXNzZXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7bG9va3VwUXVvdGUsIGxvb2t1cEJhc2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgYmFzZXMgPSBzZWFyY2hBc3NldHNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0LnN5bWJvbC5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVmZXJyZWRCYXNlcy5pbmNsdWRlcyhhc3NldC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbC5sZW5ndGggPj0gbG9va3VwUXVvdGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wubGVuZ3RoIDwgbG9va3VwUXVvdGUubGVuZ3RoICsgM1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgYmFzZXMgPSBiYXNlcy5jb25jYXQoXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9va3VwQmFzZSB8fCAhbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgYmFzZXMgPSBiYXNlcy5maWx0ZXIoYmFzZSA9PiB7XG4gICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJhc2VzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgYXNzZXRzTG9hZGluZyxcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLFxuICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgIHZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIGxpc3RIZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlTWFya2V0VGFiLCBhY3RpdmVUYWJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLm1hcChhID0+IGEpO1xuXG4gICAgICAgIGlmICghbXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzID0gcHJlZmVycmVkQmFzZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzID0gcHJlZmVycmVkQmFzZXMucHVzaCh0aGlzLnN0YXRlLmFjdGl2ZUZpbmRCYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBzb21lIGRlZmF1bHQgYmFzZSBvcHRpb25zXG4gICAgICAgIC8vIGxldCBwcmVmZXJyZWRCYXNlcyA9IFtjb3JlU3ltYm9sLCBcIkJUQ1wiLCBcIlVTRFwiLCBcIkNOWVwiXTtcblxuICAgICAgICAvKiBJbiB0aGUgZmluZC1tYXJrZXQgdGFiLCBvbmx5IHVzZSBtYXJrZXQgdGFiIDAgKi9cbiAgICAgICAgaWYgKCFteU1hcmtldFRhYikgYWN0aXZlTWFya2V0VGFiID0gMDtcblxuICAgICAgICBsZXQge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c30gPSB0aGlzLl9nZXRNYXJrZXRzKCk7XG4gICAgICAgIGNvbnN0IGhhc090aGVycyA9IG90aGVyTWFya2V0cyAmJiBvdGhlck1hcmtldHMubGVuZ3RoO1xuICAgICAgICBsZXQgaGMgPSBcIm15bWFya2V0cy1oZWFkZXIgY2xpY2thYmxlXCI7XG4gICAgICAgIGxldCBzdGFyQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogIW15TWFya2V0VGFifSk7XG4gICAgICAgIGxldCBhbGxDbGFzcyA9IGNuYW1lcyhoYywge2luYWN0aXZlOiBteU1hcmtldFRhYn0pO1xuXG4gICAgICAgIGxldCBsaXN0U3R5bGUgPSB7XG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI2cmVtXCJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxpc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIGxpc3RTdHlsZS5oZWlnaHQgPSBsaXN0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNsYXRvciA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFiSGVhZGVyID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIGxlZnQtb3JkZXJib29rLWhlYWRlciBib3R0b20taGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm15TWFya2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJteS1tYXJrZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2gubXlfbWFya2V0c190YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthbGxDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcImZpbmQtbWFya2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLmZpbmRfbWFya2V0c190YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW9yZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9IZWFkZXIgfHwgdGhpcy5wcm9wcy50YWJIZWFkZXIgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxcmVtIDBcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyFteU1hcmtldFRhYiA/IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IG9uQ2hhbmdlPXt0aGlzLl9sb29rdXBBc3NldHMuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJTWU1CT0w6U1lNQk9MXCIgLz4gOiBudWxsfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbSAwLjc1cmVtIDAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seUxpcXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZDogIXRoaXMucHJvcHMub25seUxpcXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2hvd19vbmx5X2xpcXVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seVN0YXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy50b2dnbGVTdGFycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLnNob3dfb25seV9zdGFyX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImZpLXN0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJnb2xkLXN0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJzdGFyX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBtYXJrZXQtZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5teU1hcmtldEZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hVcGRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXNzZXRTZWxlY3Q9e3RoaXMuX29uRm91bmRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtkZWZhdWx0QmFzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0QmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmZpbmRCYXNlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maW5kQmFzZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm91bmQ9e3RoaXMuX29uRm91bmRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleGNoYW5nZS5xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17e2ZvbnRTaXplOiBcIjAuOXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dE5hbWUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaW5kU2VhcmNoSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzZXROYW1lRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZEJyZWFrOiBcImJyZWFrLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5pbnZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteW1hcmtldHMtdGFic1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBRdW90ZSBlZGl0IHRhYiAqL31cbiAgICAgICAgICAgICAgICAgICAge215TWFya2V0VGFiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInF1b3RlX2VkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93UXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteW1hcmtldHMtdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsrJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7IW15TWFya2V0VGFiICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJyZWRCYXNlcy5tYXAoKGJhc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2UpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwibXltYXJrZXRzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZU1hcmtldFRhYiA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFzZS5yZXBsYWNlKFwiLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wib3RoZXJzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm90aGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bGlzdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXIgZ3JpZC1ibG9jayB2ZXJ0aWNhbCBteW1hcmtldHMtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImZhdm9yaXRlc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YXNzZXRzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjNyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7cHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGJhc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzPXt0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDaGFuZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5ncz17dmlld1NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5maW5kQ29sdW1ucyB8fCBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtiYXNlR3JvdXBzW2Jhc2VdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmIG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMSAmJlxuICAgICAgICAgICAgICAgICAgICBteU1hcmtldFRhYiAmJlxuICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJlZmVycmVkQmFzZXMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzPXt2aWV3U2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtvdGhlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT1cIm90aGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17bXlNYXJrZXRUYWIgPyAyMCA6IDEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UXVvdGVTZWxlY3Rpb25Nb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXVvdGVNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlUXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dRdW90ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZXM9e3RoaXMucHJvcHMucHJlZmVycmVkQmFzZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTXlNYXJrZXRzID0gZGVib3VuY2VSZW5kZXIoTXlNYXJrZXRzLCA1MCwge2xlYWRpbmc6IGZhbHNlfSk7XG5cbmNsYXNzIE15TWFya2V0c1dyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNeU1hcmtldHMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBNeU1hcmtldHNXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZSwgQXNzZXRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIm9ubHlMaXF1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGVmYXVsdE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICAgICAgdXNlck1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS51c2VyTWFya2V0cyxcbiAgICAgICAgICAgICAgICBzZWFyY2hBc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXG4gICAgICAgICAgICAgICAgb25seVN0YXJzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5vbmx5U3RhcnMsXG4gICAgICAgICAgICAgICAgYXNzZXRzTG9hZGluZzogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0c0xvYWRpbmdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IEFjY291bnROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0FjY291bnROYW1lXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIE1hcmtldFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbm9TeW1ib2xzOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKG1hcmtldElEKSB7XG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBgL21hcmtldC8ke21hcmtldElEfWA7XG4gICAgICAgIGlmIChuZXdQYXRoICE9PSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5zd2l0Y2hNYXJrZXQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbWFya2V0LyR7bWFya2V0SUR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0c0NoZWNrZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UuZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGUuZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgICAgICAzNSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgX29uU3RhcihxdW90ZSwgYmFzZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGUsIGJhc2UsIG5vU3ltYm9scywgc3RhdHMsIHN0YXJyZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFxdW90ZSB8fCAhYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBsZXQgbWFya2V0TmFtZSA9IHF1b3RlLmdldChcInN5bWJvbFwiKSArIFwiOlwiICsgYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBkeW5hbWljX2RhdGEgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhc2VfZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgYmFzZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcHJpY2UgPSB1dGlscy5jb252ZXJ0UHJpY2UocXVvdGUsIGJhc2UpO1xuXG4gICAgICAgIGxldCByb3dTdHlsZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVmdEFsaWduKSB7XG4gICAgICAgICAgICByb3dTdHlsZXMudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcImJ1dHRvbiBvdXRsaW5lXCI7XG4gICAgICAgIGxldCBidXR0b25TdHlsZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhY3QpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIG5vLW1hcmdpblwiO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wNXJlbVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnNcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gc3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gc3RhdHMgPyBzdGF0cy52b2x1bWVCYXNlIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKGFtb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMgJiYgc3RhdHMuY2hhbmdlID8gc3RhdHMuY2hhbmdlIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYW5nZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LXJpZ2h0IFwiICsgY2hhbmdlQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZSArIFwiJVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXROYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFya2V0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFByaWNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRzLnByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cy5jbG9zZS5xdW90ZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByZWNpc2lvbkFzc2V0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR0RFWC5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlhCVFNYLkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR09MRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU0lMVkVSXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlY2lzaW9uID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJlY2lzaW9uQXNzZXRzLmluZGV4T2YoYmFzZS5nZXQoXCJzeW1ib2xcIikpICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlID4gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmluYWxQcmljZSA+IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJxdW90ZVN1cHBseVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY19kYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY19kYXRhLmdldChcImN1cnJlbnRfc3VwcGx5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VfZHluYW1pY19kYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9keW5hbWljX2RhdGEuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFzZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc3N1ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnROYW1lIGFjY291bnQ9e3F1b3RlLmdldChcImlzc3VlclwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DaGVja01hcmtldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJUaGlzIG1hcmtldCBpcyBhIGRlZmF1bHQgbWFya2V0IGFuZCBjYW5ub3QgYmUgcmVtb3ZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuaXNDaGVja2VkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzRGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5yZW1vdmVNYXJrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0IGZsb2F0LXJpZ2h0IHJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAk1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmtleSA+IGIua2V5O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiY2xpY2thYmxlXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBhY3RpdmVNYXJrZXRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtyb3dTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5zfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5NYXJrZXRSb3cgPSB3aXRoUm91dGVyKE1hcmtldFJvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcihNYXJrZXRSb3csIHtcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXSxcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdGVtcENvbXBvbmVudDogXCJ0clwiXG4gICAgfSxcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhbiBhY2NvdW50IGlkLCBkaXNwbGF5cyB0aGUgbmFtZSBvZiB0aGF0IGFjY291bnRcclxuICpcclxuICogIEV4cGVjdHMgb25lIHByb3BlcnR5LCAnYWNjb3VudCcgd2hpY2ggc2hvdWxkIGJlIGEgYWNjb3VudCBpZFxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnROYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudE5hbWUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiA5XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbF9sZW5ndGggPSBwcm9wcy5zY3JvbGxfbGVuZ3RoO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQm9keUNsaWNrID0gdGhpcy5vbkJvZHlDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5lbnRyaWVzLCB0aGlzLnByb3BzLmVudHJpZXMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcihwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmVudHJpZXMubGVuZ3RoID4gMSAmJiAhdGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2spO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAobnAuZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobnAuZW50cmllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcihucCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBvbkJvZHlDbGljayhlKSB7XG4gICAgICAgIGxldCBlbCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgaW5zaWRlQWN0aW9uU2hlZXQgPSBmYWxzZTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0ICYmXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd25cIikgJiZcbiAgICAgICAgICAgICAgICBlbC5pZCA9PT0gdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaW5zaWRlQWN0aW9uU2hlZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG5cbiAgICAgICAgaWYgKCFpbnNpZGVBY3Rpb25TaGVldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7ZW50cmllcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbnRyaWVzWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVudHJpZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy51cHBlckNhc2UgPyBcInVwcGVyLWNhc2VcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVEcm9wZG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+QTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMubGVuZ3RoID4gdGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVvdGVTZWxlY3Rpb25Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogXCJcIixcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vbk1vdmVVcChxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4IC0gMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Nb3ZlRG93bihxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4ICsgMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmUocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlkeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BZGQocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICBhZGQ6IHF1b3RlLmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dEJhY2tpbmdBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogYXNzZXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZvdW5kQmFja2luZ0Fzc2V0KGFzc2V0KSB7XG4gICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnF1b3Rlcy5pbmNsdWRlcyhhc3NldC5nZXQoXCJzeW1ib2xcIikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZDogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiQXNzZXQgYWxyZWFkeSBiZWluZyB1c2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBxdW90ZUNvdW50ID0gdGhpcy5wcm9wcy5xdW90ZXMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdW90ZV9zZWxlY3Rpb25cIil9XG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBpZD1cInF1b3RlX3NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV9kb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZW1vdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnF1b3Rlcy5tYXAoKHEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZHggKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggIT09IHF1b3RlQ291bnQgLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlRG93bi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlVXAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIHJvdGF0ZTE4MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZUNvdW50ID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zcy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4Y2hhbmdlLmN1c3RvbV9xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdSaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm91bmQ9e3RoaXMuX29uRm91bmRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5fb25BZGQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25fbGFiZWw9XCJleGNoYW5nZS5hZGRfcXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b249eyEhZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTs7OztBQTdEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBeEVBO0FBMEVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQWFBOzs7O0FBalNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBa1NBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE4T0E7QUFDQTtBQUNBO0FBaFBBO0FBa1BBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQWJBO0FBQ0E7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7QUFhQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFQQTtBQWRBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQURBO0FBVkE7QUF3QkE7QUF6Q0E7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQURBO0FBREE7QUFuREE7QUFxRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQXRCQTtBQURBO0FBREE7QUE0QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBSkE7QUF6QkE7QUFEQTtBQTdCQTtBQURBO0FBUEE7QUF5RkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQVpBO0FBaENBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQVJBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBMEJBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBckRBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXpVQTtBQWlWQTs7OztBQXYyQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQXUyQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25yQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQXFCQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFOQTtBQUxBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFNQTtBQVJBO0FBTEE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFOQTtBQVBBO0FBUkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQWlCQTtBQUNBO0FBL09BO0FBaVBBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXpWQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUF5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBREE7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBU0E7QUFUQTtBQVhBO0FBd0JBO0FBQ0E7Ozs7QUE1SkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBQ0E7QUF3SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBM0JBO0FBeUNBO0FBNUNBO0FBbEJBO0FBa0VBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFyRUE7QUFiQTtBQXFHQTs7OztBQTFLQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==