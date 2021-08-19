(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[26],{

/***/ 2897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2898);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PaginatedList = function (_React$Component) {
    _inherits(PaginatedList, _React$Component);

    function PaginatedList(props) {
        _classCallCheck(this, PaginatedList);

        var _this = _possibleConstructorReturn(this, (PaginatedList.__proto__ || Object.getPrototypeOf(PaginatedList)).call(this, props));

        _this.state = {
            pageSize: props.pageSize
        };
        return _this;
    }

    _createClass(PaginatedList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var pageSize = this.state.pageSize;
            var _props = this.props,
                header = _props.header,
                rows = _props.rows,
                extraRow = _props.extraRow,
                loading = _props.loading;


            var pageSizeOptions = [10, 20, 30, 40, 50, 100].filter(function (item) {
                return item < Math.max(_this2.props.pageSize, rows.length);
            });
            pageSizeOptions.push(Math.max(this.props.pageSize, rows.length));

            var totalColumnsLabel = null;
            if (this.props.label !== null) {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.label, {
                        count: total
                    });
                };
            } else if (typeof this.props.totalLabel === "string") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel, {
                        count: total
                    });
                };
            } else if (_typeof(this.props.totalLabel) === "object") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel.key, _extends({
                        count: total
                    }, _this2.props.totalLabel.args));
                };
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "paginated-list", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Table"], {
                    loading: loading,
                    dataSource: rows,
                    uns: true,
                    columns: Array.isArray(header) ? header : [],
                    footer: function footer() {
                        return extraRow ? extraRow : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0"
                        );
                    },
                    onChange: this.props.toggleSortOrder,
                    pagination: {
                        showSizeChanger: true,
                        hideOnSinglePage: false,
                        defaultPageSize: pageSize,
                        pageSizeOptions: pageSizeOptions.map(function (o) {
                            return o.toString();
                        }),
                        showTotal: function showTotal(total, range) {
                            return totalColumnsLabel(total);
                        }
                    },
                    rowClassName: this.props.rowClassName == null ? undefined : function (record, index) {
                        return _this2.props.rowClassName(record, index);
                    },
                    rowSelection: this.props.rowSelection
                }),
                this.props.children
            );
        }
    }]);

    return PaginatedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PaginatedList.defaultProps = {
    rows: [],
    pageSize: 20,

    className: "table",
    extraRow: null,
    style: { paddingBottom: "1rem" },
    loading: false,

    // can be a string (assumes the translation has one argument, total count),
    // or an object, which allows a custom label
    totalLabel: "utility.total_x_items",

    // @deprecated, use totalLabel
    label: null
};
/* harmony default export */ __webpack_exports__["default"] = (PaginatedList);

/***/ }),

/***/ 2898:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1957);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2627);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(544);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(717);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2910);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3289);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2104);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var DashboardPage = function (_React$Component) {
    _inherits(DashboardPage, _React$Component);

    function DashboardPage() {
        _classCallCheck(this, DashboardPage);

        return _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).apply(this, arguments));
    }

    _createClass(DashboardPage, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                myActiveAccounts = _props.myActiveAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount,
                preferredBases = _props.preferredBases;

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], null);
            }

            var accountCount = myActiveAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);
            /*        if (!accountCount) {
                return <LoginSelector />;
            }*/

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content app-tables no-padding",
                            ref: "appTables"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block small-12" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "tabs-container generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"],
                                    {
                                        defaultActiveTab: 1,
                                        segmented: false,
                                        setting: "dashboardTab",
                                        className: "account-tabs",
                                        tabsClass: "account-overview no-padding bordered-header content-block"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                        { title: "dashboard.starred_markets" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__["StarredMarkets"], null)
                                    ),
                                    preferredBases.map(function (q) {
                                        var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                                className: "column-hide-small",
                                                style: {
                                                    maxWidth: 30,
                                                    marginRight: 5
                                                },
                                                src: "" + "asset-symbols/" + q.replace(/^BTC/, "COMMON.BTC").replace(/^USDT/, "COMMON.USDT").replace(/^EVRAZ/, "COMMON.EVRAZ").toLowerCase() + ".png"
                                            }),
                                            "\xA0",
                                            q.replace("RUDEX.", "")
                                        );

                                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                            { key: q, title: title },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__["FeaturedMarkets"], {
                                                quotes: [q].concat(Object(common_gateways__WEBPACK_IMPORTED_MODULE_8__["getPossibleGatewayPrefixes"])([q]))
                                            })
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(DashboardPage, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        var _AccountStore$getStat = stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState(),
            myActiveAccounts = _AccountStore$getStat.myActiveAccounts,
            myHiddenAccounts = _AccountStore$getStat.myHiddenAccounts,
            passwordAccount = _AccountStore$getStat.passwordAccount,
            accountsLoaded = _AccountStore$getStat.accountsLoaded,
            refsLoaded = _AccountStore$getStat.refsLoaded;

        return {
            myActiveAccounts: myActiveAccounts,
            myHiddenAccounts: myHiddenAccounts,
            passwordAccount: passwordAccount,
            accountsReady: accountsLoaded && refsLoaded,
            preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().preferredBases
        };
    }
}));

/***/ }),

/***/ 3289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredMarkets", function() { return StarredMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedMarkets", function() { return FeaturedMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMarkets", function() { return TopMarkets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1854);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(717);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2345);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3290);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import SettingsActions from "actions/SettingsActions";



var StarredMarkets = function (_React$Component) {
    _inherits(StarredMarkets, _React$Component);

    function StarredMarkets() {
        _classCallCheck(this, StarredMarkets);

        return _possibleConstructorReturn(this, (StarredMarkets.__proto__ || Object.getPrototypeOf(StarredMarkets)).apply(this, arguments));
    }

    _createClass(StarredMarkets, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
                markets: this.props.starredMarkets,
                forceDirection: true,
                isFavorite: true
            });
        }
    }]);

    return StarredMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

StarredMarkets = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(StarredMarkets, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
        };
    }
});

var FeaturedMarkets = function (_React$Component2) {
    _inherits(FeaturedMarkets, _React$Component2);

    function FeaturedMarkets() {
        _classCallCheck(this, FeaturedMarkets);

        var _this2 = _possibleConstructorReturn(this, (FeaturedMarkets.__proto__ || Object.getPrototypeOf(FeaturedMarkets)).call(this));

        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        _this2.state = {
            chainID: chainID,
            markets: []
        };

        _this2._getMarkets = _this2._getMarkets.bind(_this2);
        _this2.update = _this2.update.bind(_this2);
        return _this2;
    }

    _createClass(FeaturedMarkets, [{
        key: "_getMarkets",
        value: function _getMarkets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
            var chainID = state.chainID;


            if (chainID === "4018d784") {
                return props.markets;
            } else {
                // assume testnet
                return [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]];
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.update();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.update(nextProps);
        }
    }, {
        key: "update",
        value: function update() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            var markets = this._getMarkets(this.state, props);

            markets = markets.filter(function (market) {
                /* Only use markets corresponding to the current tab */
                return props.quotes[0] === market.base;
            });

            /* Add the possible gateway assets */
            for (var i = 1; i < props.quotes.length; i++) {
                markets.forEach(function (m) {
                    var obj = { quote: m.quote, base: props.quotes[i] };
                    var marketKey = obj.quote + "_" + obj.base;
                    if (obj.quote !== obj.base && !markets.has(marketKey) && obj.base !== "RUDEX.RUBLE" && props.quotes[i] === "RUBLE") {
                        markets = markets.set(marketKey, obj);
                    }
                });
            }
            this.setState({ markets: markets });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
                markets: this.state.markets,
                showFlip: false,
                isFavorite: false
            });
        }
    }]);

    return FeaturedMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeaturedMarkets = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(FeaturedMarkets, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        var userMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().userMarkets;
        var defaultMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().defaultMarkets;

        if (userMarkets.size) {
            userMarkets.forEach(function (market, key) {
                if (!defaultMarkets.has(key)) defaultMarkets = defaultMarkets.set(key, market);
            });
        }

        return {
            markets: defaultMarkets
        };
    }
});

var TopMarkets = function (_React$Component3) {
    _inherits(TopMarkets, _React$Component3);

    function TopMarkets() {
        _classCallCheck(this, TopMarkets);

        return _possibleConstructorReturn(this, (TopMarkets.__proto__ || Object.getPrototypeOf(TopMarkets)).apply(this, arguments));
    }

    _createClass(TopMarkets, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { markets: [] });
        }
    }]);

    return TopMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(410);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2345);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(718);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(717);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2897);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1863);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2100);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1836);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var MarketsTable = function (_React$Component) {
    _inherits(MarketsTable, _React$Component);

    function MarketsTable() {
        _classCallCheck(this, MarketsTable);

        var _this = _possibleConstructorReturn(this, (MarketsTable.__proto__ || Object.getPrototypeOf(MarketsTable)).call(this));

        _this.sortFunctions = {
            alphabetic: function alphabetic(a, b, force) {
                if (a.key > b.key) return force ? 1 : -1;
                if (a.key < b.key) return force ? -1 : 1;
                return 0;
            },
            priceValue: function priceValue(a, b) {
                var aPrice = a.price.props.children;
                var bPrice = b.price.props.children;
                if (aPrice && bPrice) {
                    return this.sort(aPrice, bPrice);
                } else {
                    return this.sortFunctions.alphabetic(a, b, true);
                }
            },
            volumeValue: function volumeValue(a, b) {
                var aPrice = a.volume || 0;
                var bPrice = b.volume || 0;
                var compared = 0;
                if (aPrice && bPrice) {
                    compared = aPrice - bPrice;
                }
                if (compared == 0) {
                    return this.sortFunctions.alphabetic(a, b, true);
                } else {
                    return compared;
                }
            },
            changeValue: function changeValue(a, b) {
                var aValue = parseFloat(a.hour_24);
                var bValue = parseFloat(b.hour_24);
                var compared = 0;
                if (aValue && bValue && !isNaN(aValue) && !isNaN(bValue)) {
                    compared = aValue - bValue;
                }
                if (compared == 0) {
                    return this.sortFunctions.alphabetic(a, b, true);
                } else {
                    return compared;
                }
            }
        };

        _this.state = {
            filter: "",
            showFlip: false,
            showHidden: false,
            markets: []
        };

        _this.update = _this.update.bind(_this);
        for (var key in _this.sortFunctions) {
            _this.sortFunctions[key] = _this.sortFunctions[key].bind(_this);
        }
        return _this;
    }

    _createClass(MarketsTable, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.update(nextProps);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.update();
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.update);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.update);
        }
    }, {
        key: "update",
        value: function update() {
            var _this2 = this;

            var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var props = nextProps || this.props;
            var showFlip = props.forceDirection;

            if (props.markets && props.markets.size > 0) {
                var markets = props.markets.toArray().map(function (market) {
                    var quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(market.quote);
                    var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(market.base);
                    if (!base || !quote) return null;
                    var marketName = market.base + "_" + market.quote;

                    return {
                        key: marketName,
                        inverted: undefined,
                        quote: market.quote,
                        base: market.base,
                        basePrecision: base.get("precision"),
                        isHidden: props.hiddenMarkets.includes(marketName),
                        isFavorite: props.isFavorite,
                        marketStats: props.allMarketStats.get(market.quote + "_" + market.base, {}),
                        isStarred: _this2.props.starredMarkets.has(marketName)
                    };
                }).filter(function (a) {
                    return a !== null;
                });
                this.setState({ showFlip: showFlip, markets: markets });
            }
        }
    }, {
        key: "_toggleShowHidden",
        value: function _toggleShowHidden(val) {
            if (this.state.showHidden === val) return;

            this.setState({
                showHidden: val
            });
        }
    }, {
        key: "_handleFilterInput",
        value: function _handleFilterInput(e) {
            e.preventDefault();
            this.setState({ filter: e.target.value.toUpperCase() });
        }
    }, {
        key: "_handleHide",
        value: function _handleHide(row, status) {
            if (this.props.handleHide) {
                return this.props.handleHide(row, status);
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].hideMarket(row.key, status);
        }
    }, {
        key: "_handleFlip",
        value: function _handleFlip(row, status) {
            if (this.props.handleFlip) {
                return this.props.handleFlip(row, status);
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeMarketDirection(_defineProperty({}, row.key, status));
        }
    }, {
        key: "sort",
        value: function sort(aPrice, bPrice) {
            var convert = function convert(price) {
                price = price.replace(/\,/g, "");
                if (price.includes("k")) price = price.replace(/k/g, "") * 1000;
                if (price.includes("M")) price = price.replace(/M/g, "") * 1000 * 1000;
                return price;
            };
            aPrice = convert(aPrice);
            bPrice = convert(bPrice);

            if (aPrice === null && bPrice !== null) {
                return 1;
            } else if (aPrice !== null && bPrice === null) {
                return -1;
            } else {
                return aPrice - bPrice;
            }
        }
    }, {
        key: "getHeader",
        value: function getHeader() {
            var _state = this.state,
                showFlip = _state.showFlip,
                showHidden = _state.showHidden;

            return [{
                dataIndex: "star",
                align: "right",
                width: "75px",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap", cursor: "pointer" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.asset" }),
                dataIndex: "asset",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        item
                    );
                }
            }, this.props.isFavorite ? {} : {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.user_issued_assets.quote_name" }),
                dataIndex: "quote_name",
                align: "right",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                dataIndex: "price",
                align: "right",
                sorter: this.sortFunctions.priceValue,
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.hour_24_short" }),
                dataIndex: "hour_24",
                align: "right",
                sorter: this.sortFunctions.changeValue,
                render: function render(text, record, index) {
                    var changeClass = parseFloat(record.hour_24) > 0 ? "change-up" : parseFloat(record.hour_24) < 0 ? "change-down" : "";
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: { whiteSpace: "nowrap", textAlign: "right" },
                            className: changeClass
                        },
                        record.hour_24,
                        "%"
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.volume" }),
                dataIndex: "volume",
                align: "right",
                sorter: this.sortFunctions.volumeValue,
                defaultSortOrder: "descend",
                render: function render(text, record, index) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(record.volume, record.basePrecision)
                    );
                }
            }, showFlip ? {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.flip" }),
                dataIndex: "flip",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            className: "column-hide-small",
                            style: { whiteSpace: "nowrap" }
                        },
                        item
                    );
                }
            } : {}, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    content: !showHidden ? "exchange.hide" : "account.perm.show"
                }),
                dataIndex: "hide",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                whiteSpace: "nowrap",
                                cursor: "pointer"
                            }
                        },
                        item
                    );
                }
            }];
        }
    }, {
        key: "_setInterval",
        value: function _setInterval() {
            var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _ref = nextProps || this.props,
                base = _ref.base,
                quote = _ref.quote;

            this.statsChecked = new Date();
            this.statsInterval = MarketsActions.getMarketStatsInterval(35 * 1000, base, quote);
        }
    }, {
        key: "_clearInterval",
        value: function _clearInterval() {
            if (this.statsInterval) this.statsInterval();
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                this.refs[imgName.toLowerCase()].src = "asset-symbols/bts.png";
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "_toggleFavoriteMarket",
        value: function _toggleFavoriteMarket(quote, base) {
            var marketID = quote + "_" + base;
            if (!this.props.starredMarkets.has(marketID)) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "getTableData",
        value: function getTableData(row) {
            var base = row.base,
                quote = row.quote,
                marketStats = row.marketStats,
                isHidden = row.isHidden,
                inverted = row.inverted,
                basePrecision = row.basePrecision;


            function getImageName(symbol) {
                //if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                //if (symbol.startsWith("RUDEX.")) return symbol;

                if (symbol == "BTS" || symbol == "CNY" || symbol == "USD" || symbol == "EUR" || symbol == "RUBLE" || symbol == "GOLD" || symbol == "SILVER") return symbol;

                return "unknown";
            }

            var imgName = getImageName(quote);

            var marketID = quote + "_" + base;

            var starClass = this.props.starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            return {
                key: marketID,
                star: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleFavoriteMarket.bind(this, quote, base)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        style: { cursor: "pointer" },
                        className: starClass,
                        name: "fi-star",
                        title: "icons.fi_star.market"
                    })
                ),
                asset: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
                    { to: "/market/" + quote + "_" + base },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                        ref: imgName.toLowerCase(),
                        className: "column-hide-small",
                        onError: this._onError.bind(this, imgName),
                        style: { maxWidth: 20, marginRight: 10 },
                        src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { dataPlace: "top", name: quote }),
                    "\xA0",
                    this.props.isFavorite ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        ":\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { dataPlace: "top", name: base })
                    ) : null
                ),
                quote_name: this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { noTip: true, name: base })
                ),
                price: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "column-hide-small", style: { textAlign: "right" } },
                    marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(false), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(quote), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(base)) : null
                ),
                hour_24: !marketStats || !marketStats.change || marketStats.change === "0.00" ? 0 : marketStats.change,
                volume: !marketStats || !marketStats.volumeBase ? 0 : marketStats.volumeBase,
                flip: inverted === null || !this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: this._handleFlip.bind(this, row, !row.inverted)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "shuffle", title: "icons.shuffle" })
                    )
                ),
                hide: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Tooltip"],
                    {
                        title: isHidden ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "icons.plus_circle.show_market" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "icons.cross_circle.hide_market" }),
                        style: { marginRight: 0 },
                        onClick: this._handleHide.bind(this, row, !row.isHidden)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        name: isHidden ? "plus-circle" : "cross-circle",
                        title: isHidden ? "icons.plus_circle.show_market" : "icons.cross_circle.hide_market",
                        className: "icon-14px"
                    })
                ),
                basePrecision: basePrecision
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                markets = _state2.markets,
                showHidden = _state2.showHidden,
                filter = _state2.filter;


            var marketRows = markets.filter(function (m) {
                if (!!filter || m.isStarred) return true;
                if (_this3.props.onlyLiquid // ||
                //(m.marketStats && "volumeBase" in m.marketStats)
                ) {
                        return !!m.marketStats.volumeQuote || false;
                    } else {
                    return true;
                }
            }).map(function (row) {
                var visible = true;

                if (row.isHidden !== _this3.state.showHidden) {
                    visible = false;
                } else if (filter) {
                    var quoteObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(row.quote);
                    var baseObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(row.base);

                    var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(quoteObject),
                        quoteIsBitAsset = _utils$replaceName.isBitAsset;

                    var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(baseObject),
                        baseIsBitAsset = _utils$replaceName2.isBitAsset;

                    var quoteSymbol = row.quote;
                    var baseSymbol = row.base;

                    if (quoteIsBitAsset) {
                        quoteSymbol = "bit" + quoteSymbol;
                    }

                    if (baseIsBitAsset) {
                        baseSymbol = "bit" + baseSymbol;
                    }

                    var filterPair = filter.includes(":");

                    if (filterPair) {
                        var quoteFilter = filter.split(":")[0].trim();
                        var baseFilter = filter.split(":")[1].trim();

                        visible = quoteSymbol.toLowerCase().includes(String(quoteFilter).toLowerCase()) && baseSymbol.toLowerCase().includes(String(baseFilter).toLowerCase());
                    } else {
                        visible = quoteSymbol.toLowerCase().includes(String(filter).toLowerCase()) || baseSymbol.toLowerCase().includes(String(filter).toLowerCase());
                    }
                }

                if (!visible) return null;

                return _this3.getTableData(_extends({}, row));
            }).filter(function (r) {
                return !!r;
            });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "header-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "filter inline-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                            type: "text",
                            placeholder: "Filter...",
                            onChange: this._handleFilterInput.bind(this),
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Icon"], { type: "search" })
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "selector inline-block",
                            style: { position: "relative", top: "6px" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
                                    inactive: showHidden
                                }),
                                onClick: this._toggleShowHidden.bind(this, false)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.hide_hidden" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
                                    inactive: !showHidden
                                }),
                                onClick: this._toggleShowHidden.bind(this, true)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.show_hidden" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingTop: "0.5rem" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { margin: "3px 0 0", width: "fit-content" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyLiquid,
                                onChange: function onChange() {
                                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
                                        onlyLiquid: !_this3.props.onlyLiquid
                                    });
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.show_only_liquid" })
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    style: { paddingLeft: 0, paddingRight: 0 },
                    className: "table dashboard-table table-hover",
                    header: this.getHeader(),
                    rows: marketRows.length ? marketRows : [],
                    pageSize: 20,
                    label: "utility.total_x_markets",
                    leftPadding: "1.5rem"
                })
            );
        }
    }]);

    return MarketsTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(MarketsTable, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        var _SettingsStore$getSta = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState(),
            marketDirections = _SettingsStore$getSta.marketDirections,
            hiddenMarkets = _SettingsStore$getSta.hiddenMarkets;

        return {
            marketDirections: marketDirections,
            hiddenMarkets: hiddenMarkets,
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().allMarketStats,
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().starredMarkets,
            onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().viewSettings.get("onlyLiquid", true)
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmU5NTVhMmI3MDk1NjUzZjYxMTk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9wYWdpbmF0ZWQtbGlzdC5zY3NzP2Q3MzMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTWFya2V0c1RhYmxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRlZC1saXN0LnNjc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCxcclxuXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXHJcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn0sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIGNhbiBiZSBhIHN0cmluZyAoYXNzdW1lcyB0aGUgdHJhbnNsYXRpb24gaGFzIG9uZSBhcmd1bWVudCwgdG90YWwgY291bnQpLFxyXG4gICAgICAgIC8vIG9yIGFuIG9iamVjdCwgd2hpY2ggYWxsb3dzIGEgY3VzdG9tIGxhYmVsXHJcbiAgICAgICAgdG90YWxMYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcclxuXHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQsIHVzZSB0b3RhbExhYmVsXHJcbiAgICAgICAgbGFiZWw6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93LCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDEwMF0uZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPCBNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucy5wdXNoKE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENvbHVtbnNMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbC5rZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50b3RhbExhYmVsLmFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0ZWQtbGlzdFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cm93c31cclxuICAgICAgICAgICAgICAgICAgICB1bnNcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9eygpID0+IChleHRyYVJvdyA/IGV4dHJhUm93IDogPHNwYW4+Jm5ic3A7PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudG9nZ2xlU29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBwYWdlU2l6ZU9wdGlvbnMubWFwKG8gPT4gby50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsOiAodG90YWwsIHJhbmdlKSA9PiB0b3RhbENvbHVtbnNMYWJlbCh0b3RhbClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZWNvcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocmVjb3JkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt0aGlzLnByb3BzLnJvd1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xuXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcbiAgICAgICAgLyogICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYXBwLXRhYmxlcyBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFwcFRhYmxlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic0NsYXNzPVwiYWNjb3VudC1vdmVydmlldyBuby1wYWRkaW5nIGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC5zdGFycmVkX21hcmtldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnJlZE1hcmtldHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzLm1hcChxID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7cVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eQlRDLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09NTU9OLkJUQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXlVTRFQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDT01NT04uVVNEVFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXkVWUkFaLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09NTU9OLkVWUkFaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e3F9IHRpdGxlPXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVzPXtbcV0uY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIERhc2hib2FyZFBhZ2UsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudHNMb2FkZWQsXG4gICAgICAgICAgICAgICAgcmVmc0xvYWRlZFxuICAgICAgICAgICAgfSA9IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudHNSZWFkeTogYWNjb3VudHNMb2FkZWQgJiYgcmVmc0xvYWRlZCxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuLy8gaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSBcIi4vTWFya2V0c1RhYmxlXCI7XG5cbmNsYXNzIFN0YXJyZWRNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICBmb3JjZURpcmVjdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblN0YXJyZWRNYXJrZXRzID0gY29ubmVjdChcbiAgICBTdGFycmVkTWFya2V0cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5jbGFzcyBGZWF0dXJlZE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFpbklELFxuICAgICAgICAgICAgbWFya2V0czogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9nZXRNYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2dldE1hcmtldHMoc3RhdGUgPSB0aGlzLnN0YXRlLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgY29uc3Qge2NoYWluSUR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKGNoYWluSUQgPT09IFwiNDAxOGQ3ODRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLm1hcmtldHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhc3N1bWUgdGVzdG5ldFxuICAgICAgICAgICAgcmV0dXJuIFtbXCJURVNUXCIsIFwiUEVHLkZBS0VVU0RcIl0sIFtcIlRFU1RcIiwgXCJCVFdUWVwiXV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGxldCBtYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cyh0aGlzLnN0YXRlLCBwcm9wcyk7XG5cbiAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuZmlsdGVyKG1hcmtldCA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHVzZSBtYXJrZXRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgdGFiICovXG4gICAgICAgICAgICByZXR1cm4gcHJvcHMucXVvdGVzWzBdID09PSBtYXJrZXQuYmFzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogQWRkIHRoZSBwb3NzaWJsZSBnYXRld2F5IGFzc2V0cyAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHByb3BzLnF1b3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFya2V0cy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cXVvdGU6IG0ucXVvdGUsIGJhc2U6IHByb3BzLnF1b3Rlc1tpXX07XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldEtleSA9IGAke29iai5xdW90ZX1fJHtvYmouYmFzZX1gO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgb2JqLnF1b3RlICE9PSBvYmouYmFzZSAmJlxuICAgICAgICAgICAgICAgICAgICAhbWFya2V0cy5oYXMobWFya2V0S2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAob2JqLmJhc2UgIT09IFwiUlVERVguUlVCTEVcIiAmJiBwcm9wcy5xdW90ZXNbaV0gPT09IFwiUlVCTEVcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuc2V0KG1hcmtldEtleSwgb2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRzfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxuICAgICAgICAgICAgICAgIG1hcmtldHM9e3RoaXMuc3RhdGUubWFya2V0c31cbiAgICAgICAgICAgICAgICBzaG93RmxpcD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRmVhdHVyZWRNYXJrZXRzID0gY29ubmVjdChcbiAgICBGZWF0dXJlZE1hcmtldHMsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlLCBTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICBsZXQgdXNlck1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHM7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHM7XG5cbiAgICAgICAgICAgIGlmICh1c2VyTWFya2V0cy5zaXplKSB7XG4gICAgICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0TWFya2V0cy5oYXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzID0gZGVmYXVsdE1hcmtldHMuc2V0KGtleSwgbWFya2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXRzOiBkZWZhdWx0TWFya2V0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIFRvcE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRzVGFibGUgbWFya2V0cz17W119IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IHtTdGFycmVkTWFya2V0cywgRmVhdHVyZWRNYXJrZXRzLCBUb3BNYXJrZXRzfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiLi4vVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XG5pbXBvcnQge0lucHV0LCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtJY29uIGFzIEFudEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTWFya2V0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgIHNob3dGbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgbWFya2V0czogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNvcnRGdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEZ1bmN0aW9uc1trZXldID0gdGhpcy5zb3J0RnVuY3Rpb25zW2tleV0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShuZXh0UHJvcHMgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wcyA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc2hvd0ZsaXAgPSBwcm9wcy5mb3JjZURpcmVjdGlvbjtcblxuICAgICAgICBpZiAocHJvcHMubWFya2V0cyAmJiBwcm9wcy5tYXJrZXRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgbWFya2V0cyA9IHByb3BzLm1hcmtldHNcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGUgPSBDaGFpblN0b3JlLmdldEFzc2V0KG1hcmtldC5xdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQuYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFzZSB8fCAhcXVvdGUpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0TmFtZSA9IGAke21hcmtldC5iYXNlfV8ke21hcmtldC5xdW90ZX1gO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG1hcmtldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbjogcHJvcHMuaGlkZGVuTWFya2V0cy5pbmNsdWRlcyhtYXJrZXROYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmF2b3JpdGU6IHByb3BzLmlzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogcHJvcHMuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21hcmtldC5xdW90ZX1fJHttYXJrZXQuYmFzZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGFycmVkOiB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0ZsaXAsIG1hcmtldHN9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2dnbGVTaG93SGlkZGVuKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93SGlkZGVuID09PSB2YWwpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dIaWRkZW46IHZhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmlsdGVySW5wdXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcjogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVIaWRlKHJvdywgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUhpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhbmRsZUhpZGUocm93LCBzdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmhpZGVNYXJrZXQocm93LmtleSwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmxpcChyb3csIHN0YXR1cykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYW5kbGVGbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYW5kbGVGbGlwKHJvdywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oe1xuICAgICAgICAgICAgW3Jvdy5rZXldOiBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc29ydChhUHJpY2UsIGJQcmljZSkge1xuICAgICAgICBjb25zdCBjb252ZXJ0ID0gcHJpY2UgPT4ge1xuICAgICAgICAgICAgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9cXCwvZywgXCJcIik7XG4gICAgICAgICAgICBpZiAocHJpY2UuaW5jbHVkZXMoXCJrXCIpKSBwcmljZSA9IHByaWNlLnJlcGxhY2UoL2svZywgXCJcIikgKiAxMDAwO1xuICAgICAgICAgICAgaWYgKHByaWNlLmluY2x1ZGVzKFwiTVwiKSlcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL00vZywgXCJcIikgKiAxMDAwICogMTAwMDtcbiAgICAgICAgICAgIHJldHVybiBwcmljZTtcbiAgICAgICAgfTtcbiAgICAgICAgYVByaWNlID0gY29udmVydChhUHJpY2UpO1xuICAgICAgICBiUHJpY2UgPSBjb252ZXJ0KGJQcmljZSk7XG5cbiAgICAgICAgaWYgKGFQcmljZSA9PT0gbnVsbCAmJiBiUHJpY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFQcmljZSAhPT0gbnVsbCAmJiBiUHJpY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhUHJpY2UgLSBiUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0RnVuY3Rpb25zID0ge1xuICAgICAgICBhbHBoYWJldGljOiBmdW5jdGlvbihhLCBiLCBmb3JjZSkge1xuICAgICAgICAgICAgaWYgKGEua2V5ID4gYi5rZXkpIHJldHVybiBmb3JjZSA/IDEgOiAtMTtcbiAgICAgICAgICAgIGlmIChhLmtleSA8IGIua2V5KSByZXR1cm4gZm9yY2UgPyAtMSA6IDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgbGV0IGFQcmljZSA9IGEucHJpY2UucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBsZXQgYlByaWNlID0gYi5wcmljZS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChhUHJpY2UgJiYgYlByaWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydChhUHJpY2UsIGJQcmljZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdm9sdW1lVmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGxldCBhUHJpY2UgPSBhLnZvbHVtZSB8fCAwO1xuICAgICAgICAgICAgbGV0IGJQcmljZSA9IGIudm9sdW1lIHx8IDA7XG4gICAgICAgICAgICBsZXQgY29tcGFyZWQgPSAwO1xuICAgICAgICAgICAgaWYgKGFQcmljZSAmJiBiUHJpY2UpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZCA9IGFQcmljZSAtIGJQcmljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wYXJlZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYVZhbHVlID0gcGFyc2VGbG9hdChhLmhvdXJfMjQpO1xuICAgICAgICAgICAgbGV0IGJWYWx1ZSA9IHBhcnNlRmxvYXQoYi5ob3VyXzI0KTtcbiAgICAgICAgICAgIGxldCBjb21wYXJlZCA9IDA7XG4gICAgICAgICAgICBpZiAoYVZhbHVlICYmIGJWYWx1ZSAmJiAhaXNOYU4oYVZhbHVlKSAmJiAhaXNOYU4oYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkID0gYVZhbHVlIC0gYlZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBhcmVkID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RnVuY3Rpb25zLmFscGhhYmV0aWMoYSwgYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzaG93RmxpcCwgc2hvd0hpZGRlbn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzdGFyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3NXB4XCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuYXNzZXRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0Zhdm9yaXRlXG4gICAgICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnF1b3RlX25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInF1b3RlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLnByaWNlVmFsdWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PntpdGVtfTwvc3Bhbj47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5ob3VyXzI0X3Nob3J0XCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhvdXJfMjRcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLmNoYW5nZVZhbHVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlQ2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZWNvcmQuaG91cl8yNCkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHJlY29yZC5ob3VyXzI0KSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCIsIHRleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NoYW5nZUNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuaG91cl8yNH0lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvbHVtZVwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiB0aGlzLnNvcnRGdW5jdGlvbnMudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRPcmRlcjogXCJkZXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF92b2x1bWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC52b2x1bWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5iYXNlUHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0ZsaXBcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuZmxpcFwiIC8+LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmbGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dIaWRkZW4gPyBcImV4Y2hhbmdlLmhpZGVcIiA6IFwiYWNjb3VudC5wZXJtLnNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgX3NldEludGVydmFsKG5leHRQcm9wcyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZX0gPSBuZXh0UHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zdGF0c0NoZWNrZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0c0ludGVydmFsKFxuICAgICAgICAgICAgMzUgKiAxMDAwLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPSBcImFzc2V0LXN5bWJvbHMvYnRzLnBuZ1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RvZ2dsZUZhdm9yaXRlTWFya2V0KHF1b3RlLCBiYXNlKSB7XG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRCkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5yZW1vdmVTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRhYmxlRGF0YShyb3cpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZSwgbWFya2V0U3RhdHMsIGlzSGlkZGVuLCBpbnZlcnRlZCwgYmFzZVByZWNpc2lvbn0gPSByb3c7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKHN5bWJvbCkge1xuICAgICAgICAgICAgLy9pZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvL2lmIChzeW1ib2wuc3RhcnRzV2l0aChcIlJVREVYLlwiKSkgcmV0dXJuIHN5bWJvbDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIkJUU1wiIHx8XG4gICAgICAgICAgICAgICAgc3ltYm9sID09IFwiQ05ZXCIgfHxcbiAgICAgICAgICAgICAgICBzeW1ib2wgPT0gXCJVU0RcIiB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIkVVUlwiIHx8XG4gICAgICAgICAgICAgICAgc3ltYm9sID09IFwiUlVCTEVcIiB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIkdPTERcIiB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIlNJTFZFUlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcblxuICAgICAgICAgICAgcmV0dXJuIFwidW5rbm93blwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUocXVvdGUpO1xuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcblxuICAgICAgICBjb25zdCBzdGFyQ2xhc3MgPSB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRClcbiAgICAgICAgICAgID8gXCJnb2xkLXN0YXJcIlxuICAgICAgICAgICAgOiBcImdyZXktc3RhclwiO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IG1hcmtldElELFxuICAgICAgICAgICAgc3RhcjogKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlRmF2b3JpdGVNYXJrZXQuYmluZCh0aGlzLCBxdW90ZSwgYmFzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLm1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXNzZXQ6IChcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tYXJrZXQvJHtxdW90ZX1fJHtiYXNlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDIwLCBtYXJnaW5SaWdodDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcXVvdGVfbmFtZTogdGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbm9UaXAgbmFtZT17YmFzZX0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcHJpY2U6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICB7bWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMucHJpY2VfdGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnByaWNlLnRvUmVhbChmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KHF1b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QXNzZXQoYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGhvdXJfMjQ6XG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzLmNoYW5nZSB8fFxuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmNoYW5nZSA9PT0gXCIwLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogbWFya2V0U3RhdHMuY2hhbmdlLFxuICAgICAgICAgICAgdm9sdW1lOlxuICAgICAgICAgICAgICAgICFtYXJrZXRTdGF0cyB8fCAhbWFya2V0U3RhdHMudm9sdW1lQmFzZVxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRTdGF0cy52b2x1bWVCYXNlLFxuICAgICAgICAgICAgZmxpcDpcbiAgICAgICAgICAgICAgICBpbnZlcnRlZCA9PT0gbnVsbCB8fCAhdGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlRmxpcC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3cuaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaHVmZmxlXCIgdGl0bGU9XCJpY29ucy5zaHVmZmxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBoaWRlOiAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaWNvbnMucGx1c19jaXJjbGUuc2hvd19tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJpY29ucy5jcm9zc19jaXJjbGUuaGlkZV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVIaWRlLmJpbmQodGhpcywgcm93LCAhcm93LmlzSGlkZGVuKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpc0hpZGRlbiA/IFwicGx1cy1jaXJjbGVcIiA6IFwiY3Jvc3MtY2lyY2xlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImljb25zLnBsdXNfY2lyY2xlLnNob3dfbWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBiYXNlUHJlY2lzaW9uOiBiYXNlUHJlY2lzaW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge21hcmtldHMsIHNob3dIaWRkZW4sIGZpbHRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IG1hcmtldFJvd3MgPSBtYXJrZXRzXG4gICAgICAgICAgICAuZmlsdGVyKG0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIWZpbHRlciB8fCBtLmlzU3RhcnJlZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9ubHlMaXF1aWQgLy8gfHxcbiAgICAgICAgICAgICAgICAgICAgLy8obS5tYXJrZXRTdGF0cyAmJiBcInZvbHVtZUJhc2VcIiBpbiBtLm1hcmtldFN0YXRzKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFtLm1hcmtldFN0YXRzLnZvbHVtZVF1b3RlIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5pc0hpZGRlbiAhPT0gdGhpcy5zdGF0ZS5zaG93SGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocm93LnF1b3RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocm93LmJhc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0JpdEFzc2V0OiBxdW90ZUlzQml0QXNzZXR9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aXNCaXRBc3NldDogYmFzZUlzQml0QXNzZXR9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlU3ltYm9sID0gcm93LnF1b3RlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVN5bWJvbCA9IHJvdy5iYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdW90ZUlzQml0QXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sID0gXCJiaXRcIiArIHF1b3RlU3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VJc0JpdEFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sID0gXCJiaXRcIiArIGJhc2VTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJQYWlyID0gZmlsdGVyLmluY2x1ZGVzKFwiOlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyUGFpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzFdLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhxdW90ZUZpbHRlcikudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoYmFzZUZpbHRlcikudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZURhdGEoey4uLnJvd30pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIociA9PiAhIXIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlci4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUZpbHRlcklucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEFudEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0b3IgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6IHNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaGlkZV9oaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpbmxpbmUtYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZTogIXNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5zaG93X2hpZGRlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIiwgd2lkdGg6IFwiZml0LWNvbnRlbnRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5TGlxdWlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiAhdGhpcy5wcm9wcy5vbmx5TGlxdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2hvd19vbmx5X2xpcXVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogMCwgcGFkZGluZ1JpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmdldEhlYWRlcigpfVxuICAgICAgICAgICAgICAgICAgICByb3dzPXttYXJrZXRSb3dzLmxlbmd0aCA/IG1hcmtldFJvd3MgOiBbXX1cbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInV0aWxpdHkudG90YWxfeF9tYXJrZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgTWFya2V0c1RhYmxlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgbGV0IHttYXJrZXREaXJlY3Rpb25zLCBoaWRkZW5NYXJrZXRzfSA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFya2V0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgICAgICBoaWRkZW5NYXJrZXRzLFxuICAgICAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIm9ubHlMaXF1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBR0E7QUFBQTtBQUdBO0FBcEJBO0FBc0JBO0FBdkJBO0FBMEJBOzs7O0FBcEZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQURBOzs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBREE7QUF1QkE7QUF2QkE7QUFDQTtBQTBCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQVVBO0FBbERBO0FBREE7QUFEQTtBQUpBO0FBREE7QUFEQTtBQWtFQTs7OztBQXhGQTtBQUNBO0FBMEZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUFUQTtBQUNBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFaQTtBQWFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUF4RUE7QUFDQTtBQTBFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFsQkE7QUFDQTtBQXFCQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUNBO0FBL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFaQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBTEE7QUFRQTtBQWJBO0FBa0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFPQTtBQXBCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFmQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFaQTtBQWdCQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUFTQTtBQXBCQTtBQXVCQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVhBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFNQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQVBBO0FBREE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFYQTtBQXNCQTtBQWhHQTtBQWtHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVpBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWRBO0FBREE7QUFoQ0E7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBdERBO0FBaUVBOzs7O0FBM2tCQTtBQUNBO0FBNmtCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBaEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=