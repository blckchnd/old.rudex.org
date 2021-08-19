(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[39],{

/***/ 3276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1836);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2418);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2419);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2117);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2420);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2773);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2100);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2532);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2133);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(573);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(562);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3277);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(410);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(589);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2623);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3278);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(544);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1854);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3279);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3280);
/* harmony import */ var _AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3282);
/* harmony import */ var _BidCollateralOperation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3283);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





























var Panel = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"].Panel;

var AssetFlag = function (_React$Component) {
    _inherits(AssetFlag, _React$Component);

    function AssetFlag() {
        _classCallCheck(this, AssetFlag);

        return _possibleConstructorReturn(this, (AssetFlag.__proto__ || Object.getPrototypeOf(AssetFlag)).apply(this, arguments));
    }

    _createClass(AssetFlag, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isSet = _props.isSet,
                name = _props.name;

            if (!isSet) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "asset-flag" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "label info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets." + name })
                )
            );
        }
    }]);

    return AssetFlag;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

//-------------------------------------------------------------


var AssetPermission = function (_React$Component2) {
    _inherits(AssetPermission, _React$Component2);

    function AssetPermission() {
        _classCallCheck(this, AssetPermission);

        return _possibleConstructorReturn(this, (AssetPermission.__proto__ || Object.getPrototypeOf(AssetPermission)).apply(this, arguments));
    }

    _createClass(AssetPermission, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                isSet = _props2.isSet,
                name = _props2.name;


            if (!isSet) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "asset-flag" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "label info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets." + name })
                )
            );
        }
    }]);

    return AssetPermission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Asset = function (_React$Component3) {
    _inherits(Asset, _React$Component3);

    function Asset(props) {
        _classCallCheck(this, Asset);

        var _this3 = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, props));

        _this3.state = {
            callOrders: [],
            collateralBids: [],
            marginTableSort: "ratio",
            collateralTableSort: "price",
            sortDirection: true,
            showCollateralBidInInfo: false,
            cumulativeGrouping: false,
            activeFeedTab: "margin",
            activeAssetTab: "info"
        };
        return _this3;
    }

    _createClass(Asset, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getMarginCollateral();
        }
    }, {
        key: "updateOnCollateralBid",
        value: function updateOnCollateralBid() {
            this._getMarginCollateral();
        }
    }, {
        key: "_getMarginCollateral",
        value: function _getMarginCollateral() {
            var _this4 = this;

            if (this.props.asset.has("bitasset")) {
                var _assets;

                var assets = (_assets = {}, _defineProperty(_assets, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets);

                var isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);

                var feedPrice = this._getFeedPrice();

                if (!!feedPrice) {
                    try {
                        var mcr = this.props.asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]);

                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().db_api().exec("get_call_orders", [this.props.asset.get("id"), 300]).then(function (call_orders) {
                            var callOrders = call_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["CallOrder"](c, assets, _this4.props.asset.get("id"), feedPrice, mcr, isPredictionMarket);
                            });
                            _this4.setState({ callOrders: callOrders });
                        });
                    } catch (e) {
                        // console.log(err);
                    }
                    try {
                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().db_api().exec("get_collateral_bids", [this.props.asset.get("id"), 100, 0]).then(function (coll_orders) {
                            var collateralBids = coll_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["CollateralBid"](c, assets, _this4.props.asset.get("id"), feedPrice);
                            });
                            _this4.setState({ collateralBids: collateralBids });
                        });
                    } catch (e) {
                        console.log("get_collateral_bids Error: ", e);
                    }
                }
            }
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            var _assets2;

            var assets = (_assets2 = {}, _defineProperty(_assets2, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets2, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets2);

            var isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);
            var sqr = this.props.asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]);

            var feedPriceRaw = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(this.props.asset);

            // if there has been no feed price, settlePrice has 0 amount
            if (feedPriceRaw.getIn(["base", "amount"]) == 0 && feedPriceRaw.getIn(["quote", "amount"]) == 0) {
                return null;
            }

            var feedPrice = void 0;

            /* Prediction markets don't need feeds for shorting, so the settlement price can be set to 1:1 */
            if (isPredictionMarket && feedPriceRaw.getIn(["base", "asset_id"]) === feedPriceRaw.getIn(["quote", "asset_id"])) {
                if (!assets[this.props.backingAsset.get("id")]) {
                    assets[this.props.backingAsset.get("id")] = {
                        precision: this.props.asset.get("precision")
                    };
                }
                feedPriceRaw = feedPriceRaw.setIn(["base", "amount"], 1);
                feedPriceRaw = feedPriceRaw.setIn(["base", "asset_id"], this.props.backingAsset.get("id"));
                feedPriceRaw = feedPriceRaw.setIn(["quote", "amount"], 1);
                feedPriceRaw = feedPriceRaw.setIn(["quote", "asset_id"], this.props.asset.get("id"));
                sqr = 1000;
            }

            // Catch Invalid SettlePrice object
            if (feedPriceRaw.toJS) {
                var settleObject = feedPriceRaw.toJS();
                if (!assets[settleObject.base.asset_id]) return;
            }

            feedPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["FeedPrice"]({
                priceObject: feedPriceRaw,
                market_base: this.props.asset.get("id"),
                sqr: sqr,
                assets: assets
            });

            return feedPrice;
        }
    }, {
        key: "_toggleCumulativeGrouping",
        value: function _toggleCumulativeGrouping() {
            this.setState({
                cumulativeGrouping: !this.state.cumulativeGrouping
            });
        }
    }, {
        key: "_assetType",
        value: function _assetType(asset) {
            return "bitasset" in asset ? asset.bitasset.is_prediction_market ? "Prediction" : "Smart" : "Simple";
        }
    }, {
        key: "formattedPrice",
        value: function formattedPrice(price) {
            var hide_symbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var hide_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var factor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var negative_invert = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            if (typeof price == "number" && isNaN(price)) {
                return "-";
            }
            var base = price.base;
            var quote = price.quote;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                base_amount: base.amount,
                base_asset: base.asset_id,
                quote_amount: quote.amount,
                quote_asset: quote.asset_id,
                hide_value: hide_value,
                hide_symbols: hide_symbols,
                factor: factor,
                negative_invert: negative_invert
            });
        }
    }, {
        key: "renderFlagIndicators",
        value: function renderFlagIndicators(flags, names) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                names.map(function (name) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetFlag, {
                        key: "flag_" + name,
                        name: name,
                        isSet: flags[name]
                    });
                })
            );
        }
    }, {
        key: "renderPermissionIndicators",
        value: function renderPermissionIndicators(permissions, names) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                names.map(function (name) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetPermission, {
                        key: "perm_" + name,
                        name: name,
                        isSet: permissions[name]
                    });
                })
            );
        }
    }, {
        key: "renderAuthorityList",
        value: function renderAuthorityList(authorities) {
            return authorities.map(function (authority) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: authority },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: authority }),
                    "\xA0"
                );
            });
        }
    }, {
        key: "renderMarketList",
        value: function renderMarketList(asset, markets) {
            var symbol = asset.symbol;
            return markets.map(function (market) {
                if (market == symbol) return null;
                var marketID = market + "_" + symbol;
                var marketName = market + "/" + symbol;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: marketID },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "/market/" + marketID },
                        marketName
                    ),
                    "\xA0"
                );
            }.bind(this));
        }
    }, {
        key: "renderAboutBox",
        value: function renderAboutBox(asset, originalAsset) {
            var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(asset.issuer, false, false);
            var issuerName = issuer ? issuer.get("name") : "";

            // Add <a to any links included in the description
            var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(asset.options.description);
            var desc = description.main;
            var short_name = description.short_name ? description.short_name : null;

            var urlTest = /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g;

            // Regexp needs a whitespace after a url, so add one to make sure
            desc = desc && desc.length > 0 ? desc + " " : desc;
            var urls = desc.match(urlTest);

            // Add market link
            var core_asset = this.props.coreAsset;
            var core_asset_symbol = core_asset.get("symbol");
            var preferredMarket = description.market ? description.market : core_asset_symbol;
            if (asset.bitasset) {
                preferredMarket = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
                if (!!preferredMarket && preferredMarket.get) {
                    preferredMarket = preferredMarket.get("symbol");
                } else {
                    preferredMarket = core_asset_symbol;
                }
            }
            if (asset.symbol === core_asset_symbol) preferredMarket = "USD";
            if (urls && urls.length) {
                urls.forEach(function (url) {
                    var markdownUrl = "<a target=\"_blank\" class=\"external-link\" rel=\"noopener noreferrer\" href=\"" + url + "\">" + url + "</a>";
                    desc = desc.replace(url, markdownUrl);
                });
            }

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].replaceName(originalAsset),
                name = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        maxWidth: 50,
                        replaceNoneToBts: false,
                        name: asset.symbol
                    }),
                    short_name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { marginRight: 15 } },
                        short_name
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        {
                            className: "button market-button",
                            to: "/market/" + asset.symbol + "_" + preferredMarket
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.market" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    path: "assets/" + asset.symbol,
                    alt_path: "assets/Asset",
                    section: "summary",
                    symbol: (prefix || "") + name,
                    description: desc,
                    issuer: issuerName,
                    hide_issuer: "true"
                })
            );
        }
    }, {
        key: "renderSummary",
        value: function renderSummary(asset) {
            // TODO: confidential_supply: 0 USD   [IF NOT ZERO OR NOT DISABLE CONFIDENTIAL]
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var options = asset.options;

            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(asset.options.flags, this.props.asset.has("bitasset_data_id"));

            var bitNames = Object.keys(flagBooleans);

            var isPrediction = "bitasset" in asset && asset.bitasset.is_prediction_market;
            var predictionRows = null;
            if (isPrediction) {
                var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(asset.options.description);
                predictionRows = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.prediction_market_asset.prediction" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction")
                                },
                                description.condition
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.prediction_market_asset.resolution_date" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
                                },
                                description.expiry
                            )
                        )
                    )
                );
            }

            var currentSupply = dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.current_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamic.current_supply,
                        asset: asset.id
                    })
                )
            ) : null;

            var stealthSupply = dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.stealth_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamic.confidential_supply,
                        asset: asset.id
                    })
                )
            ) : null;

            var marketFee = flagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    " ",
                    options.market_fee_percent / 100.0,
                    " % "
                )
            ) : null;

            // options.max_market_fee initially a string
            var marketFeeReferralReward = flagBooleans["charge_market_fee"] && options.extensions && options.extensions.reward_percent >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("account.user_issued_assets.reward_percent_tooltip")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.market_fee_referral_reward_percent" }),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Icon"], { type: "question-circle", theme: "filled" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    " ",
                    options.extensions.reward_percent / 100.0,
                    " %"
                )
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: asset.symbol })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table key-value-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.asset_type" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                " ",
                                this._assetType(asset),
                                " "
                            )
                        ),
                        isPrediction && predictionRows,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.issuer" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: asset.issuer })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.assets.precision" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                " ",
                                asset.precision,
                                " "
                            )
                        ),
                        asset.bitasset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.assets.backing_asset" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    asset: asset.bitasset.options.short_backing_asset
                                })
                            )
                        ) : null,
                        currentSupply,
                        stealthSupply,
                        marketFee,
                        marketFeeReferralReward
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                this.renderFlagIndicators(flagBooleans, bitNames)
            );
        }
    }, {
        key: "renderPriceFeed",
        value: function renderPriceFeed(asset) {
            var bitAsset = asset.bitasset;
            if (!("current_feed" in bitAsset)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { header: title });
            var currentFeed = bitAsset.current_feed;

            var feedPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset));

            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.title" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "float-right" },
                    feedPrice
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                { header: title },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { padding: "1.2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.external_feed_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feedPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.feed_lifetime" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                bitAsset.options.feed_lifetime_sec / 60 / 60
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.min_feeds" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                bitAsset.options.minimum_feeds
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maintenance_collateral_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentFeed.maintenance_collateral_ratio / 1000
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maximum_short_squeeze_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentFeed.maximum_short_squeeze_ratio / 1000
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "_analyzeBids",
        value: function _analyzeBids(settlement_fund_debt) {
            // Convert supply to calculable values
            var current_supply_value = settlement_fund_debt;

            var bids_collateral_value = 0;
            var bids_debt_value = 0;

            var sorted_bids = this.state.collateralBids.sort(function (a, b) {
                return b.bid.toReal() - a.bid.toReal();
            });

            sorted_bids.forEach(function (bid) {
                var collateral = bid.collateral;
                var debt = bid.debt;
                if (bids_debt_value < current_supply_value) {
                    if (bids_debt_value + debt >= current_supply_value) {
                        debt = current_supply_value - bids_debt_value;
                        collateral = debt / bid.debt * collateral;
                        bid.consideredIfRevived = 2;
                    } else {
                        bid.consideredIfRevived = 1;
                    }
                    bids_collateral_value = bids_collateral_value + collateral;
                    bids_debt_value = bids_debt_value + debt;
                } else {
                    bid.consideredIfRevived = 0;
                }
            });

            return {
                collateral: bids_collateral_value,
                debt: bids_debt_value
            };
        }
    }, {
        key: "renderSettlement",
        value: function renderSettlement(asset) {
            var _this5 = this;

            var bitAsset = asset.bitasset;
            if (!("current_feed" in bitAsset)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { header: title });

            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var currentSupply = dynamic ? dynamic.current_supply : 0;

            var currentFeed = bitAsset.current_feed;
            var isGlobalSettle = asset.bitasset.settlement_fund > 0 ? true : false;

            var settlement_fund_collateral_ratio = null;
            var total_collateral_ratio = null;
            var revive_price_with_bids = null;

            if (isGlobalSettle) {
                var _assets3;

                /***
                 * Global Settled Assets
                 */
                var settlementFund = bitAsset.settlement_fund;

                /**
                 * In globally settled assets the force settlement offset is 0
                 *
                 */
                var settlementPrice = this.formattedPrice(bitAsset.settlement_price);
                var revivePrice = this.formattedPrice(bitAsset.settlement_price, false, false, currentFeed.maintenance_collateral_ratio / 1000, true);

                var assets = (_assets3 = {}, _defineProperty(_assets3, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets3, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets3);

                // Convert supply to calculable values
                var current_supply_value = currentSupply;
                var current_collateral_value = bitAsset.settlement_fund;

                var bids = this._analyzeBids(current_supply_value);

                revive_price_with_bids = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    base_amount: bitAsset.settlement_fund / 1 + bids.collateral // /1 is implicit type conversion
                    , base_asset: assets[bitAsset.options.short_backing_asset].id,
                    quote_amount: bids.debt,
                    quote_asset: asset.id,
                    hide_value: false,
                    hide_symbols: false,
                    factor: currentFeed.maintenance_collateral_ratio / 1000,
                    negative_invert: true
                });

                current_supply_value = current_supply_value / Math.pow(10, asset.precision);
                current_collateral_value = current_collateral_value / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);

                var bids_collateral = bids.collateral / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);

                var feedPrice = this._getFeedPrice();
                if (feedPrice) {
                    settlement_fund_collateral_ratio = current_collateral_value / feedPrice.toReal() / current_supply_value;

                    total_collateral_ratio = (current_collateral_value + bids_collateral) / feedPrice.toReal() / current_supply_value;
                }
            } else {
                /***
                 * Non Global Settlement Assets
                 */
                var globalSettlementPrice = this.getGlobalSettlementPrice();
                var globalSettlementTriggerPrice = this.getGlobalSettlementPrice(currentFeed.maximum_short_squeeze_ratio / 1000);
                var currentSettled = bitAsset.force_settled_volume;
                var settlementOffset = bitAsset.options.force_settlement_offset_percent;
                var settlementDelay = bitAsset.options.force_settlement_delay_sec;
                var maxSettlementVolume = bitAsset.options.maximum_force_settlement_volume;

                var msspPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset), false, false, currentFeed.maximum_short_squeeze_ratio / 1000);
                var settlePrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset), false, false, 1 - settlementOffset / 10000);
            }

            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.title" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "float-right" },
                    isGlobalSettle ? settlementPrice : settlePrice
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                { header: title },
                isGlobalSettle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.settlement.gs_description"
                }),
                isGlobalSettle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_revive" }),
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_see_actions" }),
                    ", \xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_or" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: function onClick() {
                                _this5.setState({
                                    showCollateralBidInInfo: !_this5.state.showCollateralBidInInfo
                                });
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_place_bid" })
                    ),
                    ")."
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { padding: "1.2rem" }
                    },
                    isGlobalSettle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlementPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_funds" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: bitAsset.options.short_backing_asset,
                                    amount: settlementFund
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_funds_collateral_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlement_fund_collateral_ratio ? settlement_fund_collateral_ratio.toFixed(6) : "-"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    content: "explorer.asset.settlement.gs_revert"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_auto_revive_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                revivePrice,
                                " / ",
                                revive_price_with_bids
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "explorer.asset.settlement.gs_collateral_valuation",
                                    mcr: currentFeed.maintenance_collateral_ratio / 1000
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                total_collateral_ratio ? total_collateral_ratio.toFixed(6) : "-"
                            )
                        )
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maximum_short_squeeze_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                msspPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.global_settlement_trigger" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                globalSettlementTriggerPrice ? globalSettlementTriggerPrice : "-"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.global_settlement_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                globalSettlementPrice ? globalSettlementPrice : "-"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    content: "explorer.asset.settlement.force_settlement"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.price" }),
                                "\xA0 (",
                                settlementOffset / 100,
                                "%",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.offset" }),
                                ")"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlePrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.delay" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__["default"], { time: settlementDelay })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.max_settle_volume" }),
                                "\xA0(",
                                maxSettlementVolume / 100,
                                "%)"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: asset.id,
                                    amount: currentSupply * (maxSettlementVolume / 10000)
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.current_settled" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: asset.id,
                                    amount: currentSettled
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settle_remaining_volume" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentSettled == 0 ? 100 : Math.round(100 - currentSettled / (currentSupply * (maxSettlementVolume / 10000)) * 100, 2),
                                "%"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "renderFeePool",
        value: function renderFeePool(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var options = asset.options;
            var core = this.props.coreAsset;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.title" }),
                        dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "float-right" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                asset: "1.3.0",
                                amount: dynamic.fee_pool
                            })
                        ) : null
                    )
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.fee_pool.pool_text",
                        unsafe: true,
                        asset: asset.symbol,
                        core: core.get("symbol")
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        {
                            className: "table key-value-table",
                            style: { padding: "1.2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.core_exchange_rate" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    this.formattedPrice(options.core_exchange_rate)
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.pool_balance" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        asset: "1.3.0",
                                        amount: dynamic.fee_pool
                                    }) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.unclaimed_issuer_income" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        asset: asset.id,
                                        amount: dynamic.accumulated_fees
                                    }) : null
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "renderAssetOwnerUpdate",
        value: function renderAssetOwnerUpdate(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.update_owner" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "account.user_issued_assets.update_owner_text",
                    asset: asset.symbol
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_23__["default"], {
                    asset: asset,
                    account: this.props.currentAccount,
                    currentOwner: asset.issuer
                })
            );
        }
    }, {
        key: "renderFeedPublish",
        value: function renderFeedPublish(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_publish_feed" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.feed_producer_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetPublishFeed__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    asset: asset.id,
                    account: this.props.currentAccount,
                    currentOwner: asset.issuer
                })
            );
        }
    }, {
        key: "renderCollateralBid",
        value: function renderCollateralBid(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral.bid" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.collateral.bid_text",
                    asset: asset.symbol
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.settlement.gs_included_on_revival"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.collateral.remove_bid"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BidCollateralOperation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    asset: asset.symbol,
                    core: asset.bitasset.options.short_backing_asset,
                    funderAccountName: this.props.currentAccount,
                    onUpdate: this.updateOnCollateralBid.bind(this),
                    hideBalance: true
                })
            );
        }
    }, {
        key: "renderFeePoolFunding",
        value: function renderFeePoolFunding(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.fund" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.fund_text",
                    asset: asset.symbol
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    asset: asset.symbol,
                    funderAccountName: this.props.currentAccount,
                    hideBalance: true
                })
            );
        }
    }, {
        key: "renderFeePoolClaiming",
        value: function renderFeePoolClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.claim_balance" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    asset: asset.symbol,
                    funderAccountName: this.props.currentAccount,
                    dynamic: dynamic,
                    hideBalance: true,
                    type: "claim"
                })
            );
        }
    }, {
        key: "renderFeesClaiming",
        value: function renderFeesClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_claim_fees" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    asset: asset.symbol,
                    dynamic: dynamic,
                    funderAccountName: this.props.currentAccount,
                    hideBalance: true,
                    type: "claim_fees"
                })
            );
        }

        // TODO: Blacklist Authorities: <Account list like Voting>
        // TODO: Blacklist Market: Base/Market, Base/Market

    }, {
        key: "renderPermissions",
        value: function renderPermissions(asset) {
            //var dynamic = asset.dynamic;

            var options = asset.options;

            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(asset.options.issuer_permissions, this.props.asset.has("bitasset_data_id"));

            var bitNames = Object.keys(permissionBooleans);

            // options.blacklist_authorities = ["1.2.3", "1.2.4"];
            // options.whitelist_authorities = ["1.2.1", "1.2.2"];
            // options.blacklist_markets = ["JPY", "RUB"];
            // options.whitelist_markets = ["USD", "EUR", "GOLD"];

            // options.max_market_fee initially a string
            var maxMarketFee = permissionBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.max_market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: +options.max_market_fee,
                        asset: asset.id
                    })
                )
            ) : null;

            // options.max_supply initially a string
            var maxSupply = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.max_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: +options.max_supply,
                        asset: asset.id
                    })
                )
            );

            var whiteLists = permissionBooleans["white_list"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !!options.blacklist_authorities && !!options.blacklist_authorities.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_authorities" }),
                    ": \xA0",
                    this.renderAuthorityList(options.blacklist_authorities)
                ),
                !!options.blacklist_markets && !!options.blacklist_markets.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_markets" }),
                    ": \xA0",
                    this.renderMarketList(asset, options.blacklist_markets)
                ),
                !!options.whitelist_authorities && !!options.whitelist_authorities.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_authorities" }),
                    ": \xA0",
                    this.renderAuthorityList(options.whitelist_authorities)
                ),
                !!options.whitelist_markets && !!options.whitelist_markets.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_markets" }),
                    ": \xA0",
                    this.renderMarketList(asset, options.whitelist_markets)
                )
            ) : null;

            var whitelist_market_fee_sharing = asset.options.extensions.whitelist_market_fee_sharing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.accounts_in_whitelist_market_fee_sharing" }),
                ": \xA0",
                this.renderAuthorityList(asset.options.extensions.whitelist_market_fee_sharing)
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.title" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        {
                            className: "table key-value-table table-hover",
                            style: { padding: "1.2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            maxMarketFee,
                            maxSupply
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    this.renderPermissionIndicators(permissionBooleans, bitNames),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    whiteLists,
                    whitelist_market_fee_sharing
                )
            );
        }

        // the global settlement price is defined as the
        // the price at which the least collateralize short's
        // collateral no longer enough to back the debt
        // he/she owes.

    }, {
        key: "getGlobalSettlementPrice",
        value: function getGlobalSettlementPrice() {
            var mssr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this.state.callOrders) {
                return null;
            }

            // first get the least collateralized short position
            var leastColShort = null;
            var leastColShortRatio = null;
            var len = this.state.callOrders.length;
            for (var i = 0; i < len; i++) {
                var call_order = this.state.callOrders[i];

                if (leastColShort == null) {
                    leastColShort = call_order;
                    leastColShortRatio = call_order.getRatio();
                } else if (call_order.getRatio() < leastColShortRatio) {
                    leastColShortRatio = call_order.getRatio();
                    leastColShort = call_order;
                }
            }

            if (leastColShort == null) {
                // couldn't find the least colshort?
                return null;
            }

            // this price will happen when the CR is 1.
            // The CR is 1 if collateral / (debt x feed_ price) == 1
            // Rearranging, this means that the CR is 1 if
            // feed_price == collateral / debt
            //
            // Default is to return the global settlement price
            // Use mssr to calculate in when an event happens
            // based on an assets MSSR

            var debt = leastColShort.debt * mssr;
            var collateral = leastColShort.collateral;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                base_amount: collateral,
                base_asset: leastColShort.call_price.base.asset_id,
                quote_amount: debt,
                quote_asset: leastColShort.call_price.quote.asset_id
            });
        }
    }, {
        key: "_renderFeedTable",
        value: function _renderFeedTable(asset) {
            var _this6 = this;

            var bitAsset = asset.bitasset;
            if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
                return null;
            }

            var feeds = bitAsset.feeds;
            var feed_price_header = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(feeds[0][1][1]);
            var core_exchange_rate_header = feeds[0][1][1].core_exchange_rate;

            // Filter by valid feed lifetime, Sort by published date
            var now = new Date().getTime();
            var oldestValidDate = new Date(now - asset.bitasset.options.feed_lifetime_sec * 1000);
            feeds = feeds.filter(function (a) {
                return new Date(a[1][0]) > oldestValidDate;
            }).sort(function (feed1, feed2) {
                return new Date(feed2[1][0]) - new Date(feed1[1][0]);
            });

            var currentFeed = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset);
            var currentFeedPrice = currentFeed.base.amount / currentFeed.quote.amount;

            var dataSource = [];
            var columns = [];

            columns = [{
                key: "publisher",
                fixed: "left",
                width: 150,
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.publisher" }),
                dataIndex: "publisher",
                sorter: function sorter(a, b) {
                    var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.publisher, false);
                    if (nameA) nameA = nameA.get("name");
                    var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.publisher, false);
                    if (nameB) nameB = nameB.get("name");
                    if (nameA > nameB) return 1;
                    if (nameA < nameB) return -1;
                    return 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                }
            }, {
                key: "feed_price",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.feed_price" }),
                    " ",
                    "(",
                    this.formattedPrice(feed_price_header, false, true),
                    ")"
                ),
                dataIndex: "feed_price",
                sorter: function sorter(a, b) {
                    var a_price = parseFloat(a.feed_price.base.amount / a.feed_price.quote.amount);
                    var b_price = parseFloat(b.feed_price.base.amount / b.feed_price.quote.amount);

                    if (a_price > b_price) return 1;
                    if (a_price < b_price) return -1;
                    return 0;
                },
                render: function render(item) {
                    var price = parseFloat(item.base.amount / item.quote.amount);
                    var median_offset = (price / currentFeedPrice * 100 - 100).toFixed(2);
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        _this6.formattedPrice(item, true),
                        "(",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                className: median_offset > 0 ? "txtlabel success" : median_offset < 0 ? "txtlabel warning" : "txtlabel"
                            },
                            median_offset,
                            "%"
                        ),
                        ")"
                    );
                }
            }, {
                key: "core_exchange_rate",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.core_exchange_rate" }),
                    " ",
                    "(",
                    this.formattedPrice(core_exchange_rate_header, false, true),
                    ")"
                ),
                dataIndex: "core_exchange_rate",
                render: function render(item) {
                    return _this6.formattedPrice(item, true);
                }
            }, {
                key: "maintenance_collateral_ratio",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maintenance_collateral_ratio" }),
                dataIndex: "maintenance_collateral_ratio",
                render: function render(item) {
                    return item;
                }
            }, {
                key: "maximum_short_squeeze_ratio",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maximum_short_squeeze_ratio" }),
                dataIndex: "maximum_short_squeeze_ratio",
                render: function render(item) {
                    return item;
                }
            }, {
                key: "publishDate",
                fixed: "right",
                width: 150,
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.published" }),
                dataIndex: "publishDate",
                sorter: function sorter(a, b) {
                    if (a.publishDate.getTime() > b.publishDate.getTime()) return 1;
                    if (a.publishDate.getTime() < b.publishDate.getTime()) return -1;
                    return 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__["default"], { time: item });
                }
            }];

            for (var i = 0; i < feeds.length; i++) {
                var feed = feeds[i];
                var publisher = feed[0];
                var publishDate = new Date(feed[1][0] + "Z");
                var feed_price = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(feed[1][1]);
                var core_exchange_rate = feed[1][1].core_exchange_rate;
                var maintenance_collateral_ratio = "" + feed[1][1].maintenance_collateral_ratio / 1000;
                var maximum_short_squeeze_ratio = "" + feed[1][1].maximum_short_squeeze_ratio / 1000;

                dataSource.push({
                    publisher: publisher,
                    feed_price: feed_price,
                    core_exchange_rate: core_exchange_rate,
                    maintenance_collateral_ratio: maintenance_collateral_ratio,
                    maximum_short_squeeze_ratio: maximum_short_squeeze_ratio,
                    publishDate: publishDate
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedPublisher",
                columns: columns,
                dataSource: dataSource,
                pagination: false,
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.empty" })
                }
            });
        }
    }, {
        key: "_renderMarginTable",
        value: function _renderMarginTable() {
            var _this7 = this;

            var cumulativeGrouping = this.state.cumulativeGrouping;

            var columns = [];
            var dataSource = [];

            if (this.state.callOrders && this.state.callOrders.length > 0) {
                var cummulativeSuffix = cumulativeGrouping ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.cumulative" }),
                    ")"
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "\xA0\xA0\xA0\xA0\xA0\xA0"
                );

                var debt_cum = 0;
                var coll_cum = 0;

                this.state.callOrders.map(function (c) {
                    debt_cum += c.debt;
                    coll_cum += c.collateral;

                    dataSource.push({
                        borrower: c.borrower,
                        collateral: {
                            amount: cumulativeGrouping ? coll_cum : c.collateral,
                            asset: c.getCollateral().asset_id
                        },
                        debt: {
                            amount: cumulativeGrouping ? debt_cum : c.debt,
                            asset: c.amountToReceive().asset_id
                        },
                        call: c.call_price,
                        tcr: c.order.target_collateral_ratio,
                        cr: {
                            ratio: c.getRatio(),
                            status: c.getStatus()
                        }
                    });
                });
                var unitInfo = function unitInfo(key) {
                    var item = dataSource[0][key];
                    return dataSource.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        item.base ? _this7.formattedPrice(item, false, true) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            asset: item.asset,
                            amount: item.amount,
                            hide_amount: true
                        })
                    ) : null;
                };

                columns = [{
                    key: "borrower",
                    fixed: "left",
                    width: 200,
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrower" }),
                    dataIndex: "borrower",
                    sorter: function sorter(a, b) {
                        var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.borrower, false);
                        if (nameA) nameA = nameA.get("name");
                        var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.borrower, false);
                        if (nameB) nameB = nameB.get("name");
                        if (nameA > nameB) return 1;
                        if (nameA < nameB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                    }
                }, {
                    key: "collateral",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                        cummulativeSuffix,
                        unitInfo("collateral")
                    ),
                    dataIndex: "collateral",
                    sorter: function sorter(a, b) {
                        if (a.collateral.amount > b.collateral.amount) return 1;
                        if (a.collateral.amount < b.collateral.amount) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    onClick: _this7._toggleCumulativeGrouping.bind(_this7),
                                    style: { cursor: "pointer" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    amount: item.amount,
                                    asset: item.asset,
                                    hide_asset: true
                                })
                            )
                        );
                    }
                }, {
                    key: "debt",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                        cummulativeSuffix,
                        unitInfo("debt")
                    ),
                    dataIndex: "debt",
                    sorter: function sorter(a, b) {
                        if (a.debt.amount > b.debt.amount) return 1;
                        if (a.debt.amount < b.debt.amount) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: _this7._toggleCumulativeGrouping.bind(_this7),
                                style: { cursor: "pointer" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
                                    mouseEnterDelay: 0.5
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    amount: item.amount,
                                    asset: item.asset,
                                    hide_asset: true
                                })
                            )
                        );
                    }
                }, {
                    key: "call",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.call" }),
                        unitInfo("call")
                    ),
                    dataIndex: "call",
                    render: function render(item) {
                        return _this7.formattedPrice(item, true, false);
                    }
                }, {
                    key: "tcr",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("borrow.target_collateral_ratio_explanation")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.target_collateral_ratio_short" })
                    ),
                    dataIndex: "tcr",
                    render: function render(item) {
                        return !!item ? (item / 1000).toFixed(3) : "-";
                    }
                }, {
                    key: "cr",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" }),
                    dataIndex: "cr",
                    fixed: "right",
                    width: 100,
                    sorter: function sorter(a, b) {
                        if (a.cr.ratio > b.cr.ratio) return 1;
                        if (a.cr.ratio < b.cr.ratio) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        var classNames = "margin-ratio " + item.status;

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: classNames },
                                item.ratio.toFixed(3)
                            )
                        );
                    }
                }];
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedMargins",
                columns: columns,
                dataSource: dataSource,
                rowClassName: "margin-row",
                pagination: {
                    pageSize: Number(25)
                },
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.margin_positions.empty" })
                }
            });
        }
    }, {
        key: "_renderCollBidTable",
        value: function _renderCollBidTable() {
            var columns = [];
            var dataSource = [];

            columns = [{
                key: "bidder",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.bidder" }),
                dataIndex: "bidder",
                fixed: "left",
                width: 200,
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                }
            }, {
                key: "collateral",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                dataIndex: "collateral",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "debt",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                dataIndex: "debt",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "debt_cum",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.cumulative_borrow_amount" }),
                dataIndex: "debt_cum",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "price",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.bid" }),
                dataIndex: "price",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        base_amount: item.base.amount,
                        base_asset: item.base.asset_id,
                        quote_amount: item.quote.amount,
                        quote_asset: item.quote.asset_id,
                        hide_symbols: true
                    });
                }
            }, {
                key: "cr",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" }),
                dataIndex: "cr",
                render: function render(item) {
                    return item.toFixed(3);
                }
            }, {
                key: "included",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.considered_on_revival" }),
                dataIndex: "included",
                render: function render(item) {
                    if (item == 2) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.partial" });else if (item == 1) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.yes" });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.no" });
                }
            }];

            var debt_cum = 0;
            this.state.collateralBids.map(function (c) {
                debt_cum += c.debt;

                dataSource.push({
                    bidder: c.bidder,
                    collateral: {
                        amount: c.bid.base.amount,
                        asset: c.bid.base.asset_id
                    },
                    debt: {
                        amount: c.bid.quote.amount,
                        asset: c.bid.quote.asset_id
                    },
                    debt_cum: {
                        amount: debt_cum,
                        asset: c.bid.quote.asset_id
                    },
                    price: c.bid,
                    cr: c.getRatio(),
                    included: c.consideredIfRevived
                });
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedCollBid",
                columns: columns,
                dataSource: dataSource,
                pagination: {
                    pageSize: Number(25)
                },
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.empty" })
                }
            });
        }
    }, {
        key: "_setFeedTab",
        value: function _setFeedTab(tab) {
            this.setState({
                activeFeedTab: tab
            });
        }
    }, {
        key: "_setAssetTab",
        value: function _setAssetTab(tab) {
            this.setState({
                activeAssetTab: tab
            });
        }
    }, {
        key: "renderFeedTables",
        value: function renderFeedTables(asset) {
            var bitAsset = asset.bitasset;
            if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
                return null;
            }

            var isGlobalSettlement = bitAsset.settlement_fund > 0 ? true : false;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"],
                {
                    onChange: this._setFeedTab.bind(this),
                    activeKey: this.state.activeFeedTab
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate(isGlobalSettlement ? "explorer.asset.collateral_bid.title" : "explorer.asset.margin_positions.title"),
                        key: "margin"
                    },
                    this.state.activeFeedTab == "margin" ? isGlobalSettlement ? this._renderCollBidTable() : this._renderMarginTable() : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.price_feed_data.title"),
                        key: "feed"
                    },
                    this.state.activeFeedTab == "feed" ? this._renderFeedTable(asset) : null
                )
            );
        }
    }, {
        key: "renderAssetResolvePrediction",
        value: function renderAssetResolvePrediction(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.resolve_prediction" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "account.user_issued_assets.resolve_prediction_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_25__["default"], {
                    asset: asset,
                    account: this.props.currentAccount
                })
            );
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.backingAsset === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_18__["default"], { subtitle: "asset_not_found_subtitle" });
            }
            if (!this.props.backingAsset.get || !this.props.coreAsset.get) {
                return null;
            }

            var asset = this.props.asset.toJS();
            var priceFeed = "bitasset" in asset ? this.renderPriceFeed(asset) : null;
            var priceFeedData = "bitasset" in asset ? this.renderFeedTables(asset) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-container asset-page" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block main-content wrap" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "grid-block medium-up-1",
                                style: { width: "100%" }
                            },
                            this.renderAboutBox(asset, this.props.asset)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"],
                            {
                                onChange: this._setAssetTab.bind(this),
                                activeKey: this.state.activeAssetTab,
                                className: "grid-block vertical"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                                {
                                    tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.info"),
                                    key: "info"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                        style: { paddingTop: "1rem" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderSummary(asset)
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"],
                                            { className: "asset-collapse" },
                                            this.renderPermissions(asset),
                                            this.renderFeePool(asset),
                                            priceFeed ? this.renderPriceFeed(asset) : null,
                                            priceFeed ? this.renderSettlement(asset) : null,
                                            this.state.showCollateralBidInInfo ? this.renderCollateralBid(asset) : null
                                        )
                                    )
                                ),
                                priceFeedData ? priceFeedData : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                                {
                                    tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.actions"),
                                    key: "actions"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"],
                                    { className: "asset-collapse" },
                                    this.renderFeePoolFunding(asset),
                                    this.renderFeePoolClaiming(asset),
                                    this.renderFeesClaiming(asset),
                                    this.renderAssetOwnerUpdate(asset),
                                    "bitasset" in asset && !asset.bitasset.is_prediction_market && this.renderFeedPublish(asset),
                                    this.state.collateralBids.length > 0 && this.renderCollateralBid(asset),
                                    "bitasset" in asset && asset.bitasset.is_prediction_market && this.renderAssetResolvePrediction(asset)
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Asset;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Asset = Object(alt_react__WEBPACK_IMPORTED_MODULE_21__["connect"])(Asset, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().passwordAccount
        };
    }
});

Asset = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(Asset, {
    propNames: ["backingAsset", "coreAsset"]
});

var AssetContainer = function (_React$Component4) {
    _inherits(AssetContainer, _React$Component4);

    function AssetContainer() {
        _classCallCheck(this, AssetContainer);

        return _possibleConstructorReturn(this, (AssetContainer.__proto__ || Object.getPrototypeOf(AssetContainer)).apply(this, arguments));
    }

    _createClass(AssetContainer, [{
        key: "render",
        value: function render() {
            if (this.props.asset === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_18__["default"], { subtitle: "asset_not_found_subtitle" });
            }
            if (!this.props.asset.get) {
                return null;
            }
            var backingAsset = this.props.asset.has("bitasset") ? this.props.asset.getIn(["bitasset", "options", "short_backing_asset"]) : "1.3.0";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Asset, _extends({}, this.props, {
                backingAsset: backingAsset,
                coreAsset: "1.3.0"
            }));
        }
    }]);

    return AssetContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetContainer = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(AssetContainer, {
    withDynamic: true
});

var AssetSymbolSplitter = function (_React$Component5) {
    _inherits(AssetSymbolSplitter, _React$Component5);

    function AssetSymbolSplitter() {
        _classCallCheck(this, AssetSymbolSplitter);

        return _possibleConstructorReturn(this, (AssetSymbolSplitter.__proto__ || Object.getPrototypeOf(AssetSymbolSplitter)).apply(this, arguments));
    }

    _createClass(AssetSymbolSplitter, [{
        key: "render",
        value: function render() {
            var symbol = this.props.match.params.symbol.toUpperCase();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetContainer, _extends({}, this.props, { asset: symbol }));
        }
    }]);

    return AssetSymbolSplitter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetSymbolSplitter);

/***/ }),

/***/ 3277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// a class to display time nicely when given seconds
// for example, display

// expects the number of seconds as a property

var FormattedTime = function (_React$Component) {
    _inherits(FormattedTime, _React$Component);

    function FormattedTime(props) {
        _classCallCheck(this, FormattedTime);

        var _this = _possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props));

        _this.state = { time: props.time };
        return _this;
    }

    // given an integer seconds as an argument,
    // return the number of hours


    _createClass(FormattedTime, [{
        key: "getHours",
        value: function getHours(secs) {
            //console.log("get hours called with: " + secs);
            return secs / 3600;
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                this.getHours(this.state.time),
                "h"
            );
        }
    }]);

    return FormattedTime;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FormattedTime);

/***/ }),

/***/ 3278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(589);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2110);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2909);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2117);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2357);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2097);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(410);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var stateSetter = function stateSetter(that, key) {
    var transform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
        return value;
    };
    return function (value) {
        return that.setState(_defineProperty({}, key, transform(value)));
    };
};

var keyGetter = function keyGetter(key) {
    return function (object) {
        return object[key];
    };
};

var FeePoolOperation = function (_React$Component) {
    _inherits(FeePoolOperation, _React$Component);

    function FeePoolOperation(props) {
        _classCallCheck(this, FeePoolOperation);

        var _this = _possibleConstructorReturn(this, (FeePoolOperation.__proto__ || Object.getPrototypeOf(FeePoolOperation)).call(this, props));

        _this.onAccountNameChanged = stateSetter(_this, "funderAccountName");
        _this.onAccountChanged = stateSetter(_this, "newFunderAccount");
        _this.onPoolInput = stateSetter(_this, "fundPoolAmount", keyGetter("amount"));

        _this.onFundPool = function () {
            return actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].fundPool(_this.state.newFunderAccount ? _this.state.newFunderAccount.get("id") : null, _this.props.core, _this.props.asset, _this.state.fundPoolAmount.replace(/,/g, ""));
        };

        _this.reset = function () {
            _this.setState(_this.initialState());
        };

        _this.initialState = function () {
            return {
                funderAccountName: _this.props.funderAccountName,
                fundPoolAmount: 0,
                fundPoolAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.core.get("precision"),
                    asset_id: _this.props.core.get("id")
                }),
                claimPoolAmount: 0,
                claimPoolAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.core.get("precision"),
                    asset_id: _this.props.core.get("id")
                }),
                claimFeesAmount: 0,
                claimFeesAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.asset.get("precision"),
                    asset_id: _this.props.asset.get("id")
                })
            };
        };

        _this.onClaimPool = function () {
            return actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPool(_this.props.asset, _this.state.claimPoolAmountAsset);
        };

        _this.state = _this.initialState();
        return _this;
    }

    _createClass(FeePoolOperation, [{
        key: "onClaimInput",
        value: function onClaimInput(key, _ref) {
            var amount = _ref.amount;

            this.state[key + "Asset"].setAmount({ real: amount });
            this.setState(_defineProperty({}, key, amount));
        }
    }, {
        key: "onClaimFees",
        value: function onClaimFees() {
            var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getAccount(this.props.funderAccountName);
            if (!account) return;
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPoolFees(account.get("id"), this.props.asset, this.state.claimFeesAmountAsset);
        }
    }, {
        key: "renderFundPool",
        value: function renderFundPool() {
            var _this2 = this;

            var props = this.props,
                state = this.state,
                onPoolInput = this.onPoolInput,
                onFundPool = this.onFundPool,
                reset = this.reset,
                onAccountNameChanged = this.onAccountNameChanged,
                onAccountChanged = this.onAccountChanged;
            var asset = props.asset,
                core = props.core,
                hideBalance = props.hideBalance,
                getDynamicObject = props.getDynamicObject;
            var funderAccountName = state.funderAccountName,
                fundPoolAmount = state.fundPoolAmount,
                newFunderAccount = state.newFunderAccount;

            var dynamicObject = null;
            if (!hideBalance) dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
            var coreID = core.get("id") || "1.3.0";
            var balance = 0;
            if (newFunderAccount) {
                var coreBalanceID = newFunderAccount.getIn(["balances", coreID]);
                if (coreBalanceID) {
                    var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject(coreBalanceID);
                    if (balanceObject) {
                        balance = balanceObject.get("balance");
                    }
                }
            }
            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    onClick: function onClick() {
                        _this2.state.fundPoolAsset.setAmount({
                            sats: balance
                        });
                        _this2.setState({
                            fundPoolAmount: _this2.state.fundPoolAsset.getAmount({
                                real: true
                            })
                        });
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: balance, asset: coreID })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                hideBalance || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1.5rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.pool_balance" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        ": "
                    ),
                    dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamicObject.get("fee_pool"),
                        asset: coreID
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.funding_account",
                    accountName: funderAccountName,
                    onChange: onAccountNameChanged,
                    onAccountChanged: onAccountChanged,
                    account: funderAccountName,
                    error: null,
                    tabIndex: 1,
                    typeahead: true
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: balanceText,
                    amount: fundPoolAmount,
                    onChange: onPoolInput,
                    asset: coreID,
                    assets: [coreID],
                    placeholder: "0.0",
                    tabIndex: 2,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: fundPoolAmount <= 0
                            }),
                            onClick: onFundPool
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_fund_fee_pool" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline", onClick: reset },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "renderClaimPool",
        value: function renderClaimPool() {
            var _this3 = this;

            var props = this.props,
                onClaimPool = this.onClaimPool,
                reset = this.reset;
            var claimPoolAmount = this.state.claimPoolAmount;
            var asset = props.asset,
                core = props.core,
                getDynamicObject = props.getDynamicObject;

            var dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
            var coreID = core.get("id") || "1.3.0";

            var balanceText = !!dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    onClick: function onClick() {
                        _this3.state.claimPoolAmountAsset.setAmount({
                            sats: dynamicObject.get("fee_pool")
                        });
                        _this3.setState({
                            claimPoolAmount: _this3.state.claimPoolAmountAsset.getAmount({
                                real: true
                            })
                        });
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    amount: dynamicObject.get("fee_pool"),
                    asset: coreID
                })
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.claim_pool_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: balanceText,
                    amount: claimPoolAmount,
                    onChange: this.onClaimInput.bind(this, "claimPoolAmount"),
                    asset: coreID,
                    assets: [coreID],
                    placeholder: "0.0",
                    tabIndex: 2,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: claimPoolAmount <= 0
                            }),
                            onClick: onClaimPool
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_claim_fee_pool" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline", onClick: reset },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "renderClaimFees",
        value: function renderClaimFees() {
            var _this4 = this;

            var props = this.props;
            var claimFeesAmount = this.state.claimFeesAmount;
            var asset = props.asset,
                getDynamicObject = props.getDynamicObject;

            var dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));

            var unclaimedBalance = dynamicObject ? dynamicObject.get("accumulated_fees") : 0;
            var validClaim = claimFeesAmount > 0 && this.state.claimFeesAmountAsset.getAmount() <= unclaimedBalance;

            var unclaimedBalanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    onClick: function onClick() {
                        _this4.state.claimFeesAmountAsset.setAmount({
                            sats: dynamicObject.get("accumulated_fees")
                        });
                        _this4.setState({
                            claimFeesAmount: _this4.state.claimFeesAmountAsset.getAmount({
                                real: true
                            })
                        });
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    amount: unclaimedBalance,
                    asset: asset.get("id")
                })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.claim_text",
                    asset: asset.get("symbol")
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.unclaimed_issuer_income" }),
                    ":\xA0",
                    dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamicObject.get("accumulated_fees"),
                        asset: asset.get("id")
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: unclaimedBalanceText,
                    amount: claimFeesAmount,
                    onChange: this.onClaimInput.bind(this, "claimFeesAmount"),
                    asset: asset.get("id"),
                    assets: [asset.get("id")],
                    placeholder: "0.0",
                    tabIndex: 1,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: !validClaim
                            }),
                            onClick: this.onClaimFees.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.claim_fees" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.reset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.type === "fund") {
                return this.renderFundPool();
            } else if (this.props.type === "claim") {
                return this.renderClaimPool();
            } else if (this.props.type === "claim_fees") {
                return this.renderClaimFees();
            }
        }
    }]);

    return FeePoolOperation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeePoolOperation.defaultProps = {
    type: "fund"
};


FeePoolOperation = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(FeePoolOperation, {
    propNames: ["asset", "core"],
    defaultProps: {
        core: "1.3.0"
    },
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (FeePoolOperation);

/***/ }),

/***/ 3279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2110);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2357);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AssetOwnerUpdate = function (_React$Component) {
    _inherits(AssetOwnerUpdate, _React$Component);

    function AssetOwnerUpdate() {
        _classCallCheck(this, AssetOwnerUpdate);

        var _this = _possibleConstructorReturn(this, (AssetOwnerUpdate.__proto__ || Object.getPrototypeOf(AssetOwnerUpdate)).call(this));

        _this.state = {
            new_issuer_account_id: null,
            issuer_account_name: null
        };
        return _this;
    }

    _createClass(AssetOwnerUpdate, [{
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(key, name) {
            this.setState(_defineProperty({}, key, name));
        }
    }, {
        key: "onAccountChanged",
        value: function onAccountChanged(key, account) {
            this.setState(_defineProperty({}, key, account ? account.get("id") : null));
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].updateOwner(this.props.asset, this.state.new_issuer_account_id).then(function () {
                _this2.onReset();
            });
        }
    }, {
        key: "onReset",
        value: function onReset() {
            this.setState({
                new_issuer_account_id: null,
                issuer_account_name: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            var currentOwner = this.props.currentOwner;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        label: "account.user_issued_assets.current_issuer",
                        accountName: currentOwner.get("name"),
                        account: currentOwner.get("name"),
                        error: null,
                        tabIndex: 1,
                        disabled: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    label: "account.user_issued_assets.new_issuer",
                    accountName: this.state.issuer_account_name,
                    onChange: this.onAccountNameChanged.bind(this, "issuer_account_name"),
                    onAccountChanged: this.onAccountChanged.bind(this, "new_issuer_account_id"),
                    account: this.state.issuer_account_name,
                    error: null,
                    tabIndex: 1,
                    typeahead: true,
                    excludeAccounts: [currentOwner.get("name")]
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
                                disabled: !this.state.new_issuer_account_id
                            }),
                            onClick: this.onSubmit.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.update_owner" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.onReset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }]);

    return AssetOwnerUpdate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetOwnerUpdate.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    currentOwner: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetOwnerUpdate = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetOwnerUpdate);
/* harmony default export */ __webpack_exports__["default"] = (AssetOwnerUpdate);

/***/ }),

/***/ 3280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2110);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2357);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2097);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3281);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2909);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var AssetPublishFeed = function (_React$Component) {
    _inherits(AssetPublishFeed, _React$Component);

    function AssetPublishFeed(props) {
        _classCallCheck(this, AssetPublishFeed);

        var _this = _possibleConstructorReturn(this, (AssetPublishFeed.__proto__ || Object.getPrototypeOf(AssetPublishFeed)).call(this));

        _this.state = _this.resetState(props);
        return _this;
    }

    _createClass(AssetPublishFeed, [{
        key: "resetState",
        value: function resetState() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            var publisher_id = props.account.get("id");

            var currentFeed = props.asset.getIn(["bitasset", "current_feed"]);

            /* Might need to check these default values */
            var mcr = currentFeed.get("maintenance_collateral_ratio", 1750);
            var mssr = currentFeed.get("maximum_short_squeeze_ratio", 1100);

            return {
                publisher: props.account.get("name"),
                publisher_id: publisher_id,
                mcr: mcr,
                mcrValue: mcr / 1000,
                mssr: mssr,
                mssrValue: mssr / 1000
            };
        }
    }, {
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(key, name) {
            this.setState(_defineProperty({}, key, name));
        }
    }, {
        key: "onAccountChanged",
        value: function onAccountChanged(key, account) {
            this.setState(_defineProperty({}, key, account ? account.get("id") : null));
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].publishFeed({
                publisher: this.state.publisher_id,
                asset_id: this.props.asset.get("id"),
                mcr: this.state.mcr,
                mssr: this.state.mssr,
                feedPrice: this.state.feedPrice,
                cer: this.state.cer
            });
            // .then(() => {
            //     this.setState(this.resetState());
            // });
        }
    }, {
        key: "onPriceChanged",
        value: function onPriceChanged(key, value) {
            this.setState(_defineProperty({}, key, value));
        }
    }, {
        key: "onSetRatio",
        value: function onSetRatio(key, _ref) {
            var _setState4;

            var amount = _ref.amount;

            /* Enforce one decimal point maximum */
            if (!!amount && typeof amount === "string" && amount.indexOf(".") !== -1 && amount.indexOf(".") + 4 !== amount.length) {
                amount = amount.substr(0, amount.indexOf(".") + 4);
            }
            this.setState((_setState4 = {}, _defineProperty(_setState4, key + "Value", amount), _defineProperty(_setState4, key, Math.floor(parseFloat(amount) * 1000)), _setState4));
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;
            var _state = this.state,
                mcrValue = _state.mcrValue,
                mssrValue = _state.mssrValue,
                publisher = _state.publisher;


            var base = asset.get("id");
            var quote = asset.getIn(["bitasset", "options", "short_backing_asset"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    label: "explorer.asset.feed_producer",
                    accountName: publisher,
                    onChange: this.onAccountNameChanged.bind(this, "publisher"),
                    onAccountChanged: this.onAccountChanged.bind(this, "publisher_id"),
                    account: publisher,
                    error: null,
                    tabIndex: 1,
                    typeahead: true
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onPriceChanged: this.onPriceChanged.bind(this, "cer"),
                    label: "explorer.asset.fee_pool.core_exchange_rate",
                    quote: "1.3.0",
                    base: base
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onPriceChanged: this.onPriceChanged.bind(this, "feedPrice"),
                    label: "explorer.asset.price_feed.feed_price",
                    quote: quote,
                    base: base
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    label: "explorer.asset.price_feed.maintenance_collateral_ratio",
                    amount: mcrValue,
                    onChange: this.onSetRatio.bind(this, "mcr"),
                    placeholder: "0.0",
                    style: {
                        width: "100%",
                        paddingRight: "10px"
                    }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    label: "explorer.asset.price_feed.maximum_short_squeeze_ratio",
                    amount: mssrValue,
                    onChange: this.onSetRatio.bind(this, "mssr"),
                    placeholder: "0.0",
                    style: {
                        width: "100%",
                        paddingRight: "10px"
                    }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
                                disabled: false
                            }),
                            onClick: this.onSubmit.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_publish_feed" })
                    )
                )
            );
        }
    }]);

    return AssetPublishFeed;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetPublishFeed.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetPublishFeed = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetPublishFeed);
AssetPublishFeed = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(AssetPublishFeed);
/* harmony default export */ __webpack_exports__["default"] = (AssetPublishFeed);

/***/ }),

/***/ 3281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2909);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(589);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2097);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PriceInput = function (_React$Component) {
    _inherits(PriceInput, _React$Component);

    function PriceInput(props) {
        _classCallCheck(this, PriceInput);

        var _this = _possibleConstructorReturn(this, (PriceInput.__proto__ || Object.getPrototypeOf(PriceInput)).call(this));

        var quote = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Asset"]({
            amount: 0,
            asset_id: props.quote.get("id"),
            precision: props.quote.get("precision")
        });
        var base = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Asset"]({
            amount: 0,
            asset_id: props.base.get("id"),
            precision: props.base.get("precision")
        });

        var price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Price"]({
            quote: quote,
            base: base
        });

        _this.state = {
            price: price,
            realPriceValue: price.toReal()
        };
        return _this;
    }

    _createClass(PriceInput, [{
        key: "onPriceChanged",
        value: function onPriceChanged(_ref) {
            var amount = _ref.amount;

            this.state.price.setPriceFromReal(parseFloat(amount));
            this.setState({
                realPriceValue: amount
            });

            if (this.props.onPriceChanged) this.props.onPriceChanged(this.state.price.clone());
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                realPriceValue = _state.realPriceValue,
                price = _state.price;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                label: this.props.label,
                amount: realPriceValue,
                onChange: this.onPriceChanged.bind(this),
                asset: price.base.asset_id,
                base: this.props.quote.get("symbol"),
                isPrice: true,
                assets: [price.quote.asset_id],
                placeholder: "0.0",
                tabIndex: 1,
                style: {
                    width: "100%",
                    paddingRight: "10px"
                }
            });
        }
    }]);

    return PriceInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PriceInput = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(PriceInput, {
    propNames: ["quote", "base"],
    defaultProps: {
        base: "1.3.0"
    }
});

/* harmony default export */ __webpack_exports__["default"] = (PriceInput);

/***/ }),

/***/ 3282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1974);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2357);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2096);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(410);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(589);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(573);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var AssetResolvePrediction = function (_React$Component) {
    _inherits(AssetResolvePrediction, _React$Component);

    function AssetResolvePrediction() {
        _classCallCheck(this, AssetResolvePrediction);

        var _this = _possibleConstructorReturn(this, (AssetResolvePrediction.__proto__ || Object.getPrototypeOf(AssetResolvePrediction)).call(this));

        _this.state = {
            globalSettlementPrice: null,
            customPrice: false
        };
        return _this;
    }

    _createClass(AssetResolvePrediction, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.asset.id !== this.props.asset.id || ns.globalSettlementPrice !== this.state.globalSettlementPrice || ns.customPrice !== this.state.customPrice;
        }
    }, {
        key: "onPriceChanged",
        value: function onPriceChanged(value) {
            if (value == 2 && !this.state.customPrice) {
                this.setState({
                    globalSettlementPrice: 1,
                    customPrice: true
                });
            } else {
                this.setState({
                    globalSettlementPrice: value
                });
            }
        }
    }, {
        key: "onPriceChangedObject",
        value: function onPriceChangedObject(value) {
            this.onPriceChanged(value.toReal());
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            var _props = this.props,
                asset = _props.asset,
                account = _props.account;


            var base = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({
                real: 1,
                asset_id: this.props.asset.id,
                precision: this.props.asset.precision
            });
            var quoteAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
            var quote = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({
                real: this.state.globalSettlementPrice,
                asset_id: this.props.asset.bitasset.options.short_backing_asset,
                precision: quoteAsset.get("precision")
            });

            var price = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Price"]({
                quote: quote,
                base: base
            });

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__["default"].assetGlobalSettle(asset, account.get("id"), price).then(function () {
                _this2.onReset();
            });
        }
    }, {
        key: "onReset",
        value: function onReset() {
            this.setState({
                globalSettlementPrice: null,
                customPrice: false
            });
        }
    }, {
        key: "onChange",
        value: function onChange(_ref) {
            var amount = _ref.amount;

            this.onPriceChanged(amount);
        }
    }, {
        key: "onChangeRadio",
        value: function onChangeRadio(e) {
            this.onPriceChanged(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);

            var description = _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].parseDescription(asset.options.description);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Form"],
                    {
                        style: { paddingBottom: "1rem" },
                        className: "full-width",
                        layout: "vertical"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.prediction_market_asset.prediction" }),
                            ": ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                description.condition
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.prediction_market_asset.resolution_date" }),
                            ": ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                description.expiry
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group,
                        {
                            onChange: this.onChangeRadio.bind(this),
                            value: this.state.globalSettlementPrice
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: 1,
                                disabled: this.state.customPrice ? true : undefined
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "boolean.true" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: 0,
                                disabled: this.state.customPrice ? true : undefined
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "boolean.false" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: !this.state.customPrice ? 2 : this.state.globalSettlementPrice
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.custom" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        disabled: this.state.customPrice ? undefined : true,
                        label: "explorer.asset.price_feed.global_settlement_price",
                        amount: this.state.globalSettlementPrice,
                        onChange: this.onChange.bind(this),
                        asset: base.get("id"),
                        base: asset.symbol,
                        isPrice: true,
                        assets: [base.get("id")],
                        placeholder: "0.0",
                        style: {
                            width: "100%"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingTop: "1rem" }, className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                type: "primary",
                                disabled: this.state.globalSettlementPrice == null ? true : undefined,
                                onClick: this.onSubmit.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.publish_prediction" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                style: { marginLeft: "8px" },
                                onClick: this.onReset.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.reset" })
                        )
                    )
                )
            );
        }
    }]);

    return AssetResolvePrediction;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetResolvePrediction.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetResolvePrediction = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AssetResolvePrediction);
/* harmony default export */ __webpack_exports__["default"] = (AssetResolvePrediction);

/***/ }),

/***/ 3283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2420);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2909);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2117);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2357);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2097);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(410);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var BidCollateralOperation = function (_React$Component) {
    _inherits(BidCollateralOperation, _React$Component);

    function BidCollateralOperation(props) {
        _classCallCheck(this, BidCollateralOperation);

        var _this = _possibleConstructorReturn(this, (BidCollateralOperation.__proto__ || Object.getPrototypeOf(BidCollateralOperation)).call(this, props));

        _this.initialState = function () {
            return {
                account: bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAccount(_this.props.funderAccountName),
                collateralAmount: "0",
                debtAmount: "0"
            };
        };

        _this.state = _this.initialState();
        return _this;
    }

    _createClass(BidCollateralOperation, [{
        key: "reset",
        value: function reset() {
            this.setState(this.initialState());
        }
    }, {
        key: "_collateralBidInput",
        value: function _collateralBidInput(value) {
            this.setState({
                collateralAmount: value.amount
            });
        }
    }, {
        key: "_debtBidInput",
        value: function _debtBidInput(value) {
            this.setState({
                debtAmount: value.amount
            });
        }
    }, {
        key: "_onBidCollateral",
        value: function _onBidCollateral() {
            var _this2 = this;

            var _state = this.state,
                collateralAmount = _state.collateralAmount,
                debtAmount = _state.debtAmount;


            collateralAmount = collateralAmount == 0 ? collateralAmount : collateralAmount.replace(/,/g, "");
            debtAmount = debtAmount == 0 ? debtAmount : debtAmount.replace(/,/g, "");

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, collateralAmount, debtAmount);
            setTimeout(function () {
                _this2.props.onUpdate();
            }, 6000);
        }
    }, {
        key: "removeBid",
        value: function removeBid() {
            var _this3 = this;

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, 0, 0);
            setTimeout(function () {
                _this3.props.onUpdate();
            }, 6000);
        }
    }, {
        key: "renderCollateralBid",
        value: function renderCollateralBid() {
            var _props = this.props,
                asset = _props.asset,
                core = _props.core;
            var _state2 = this.state,
                account = _state2.account,
                collateralAmount = _state2.collateralAmount,
                debtAmount = _state2.debtAmount;


            var tabIndex = 1;
            var balance = 0;
            var backingBalanceID = account ? account.getIn(["balances", core.get("id")]) : null;
            if (backingBalanceID) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(backingBalanceID);
                if (balanceObject) {
                    balance = balanceObject.get("balance");
                }
            }

            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: balance, asset: core.get("id") })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.collateral",
                    display_balance: balanceText,
                    amount: collateralAmount,
                    onChange: this._collateralBidInput.bind(this),
                    asset: core.get("id"),
                    assets: [core.get("id")],
                    placeholder: "0.0",
                    tabIndex: tabIndex++,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.borrow_amount",
                    amount: debtAmount,
                    onChange: this._debtBidInput.bind(this),
                    asset: asset.get("id"),
                    assets: [asset.get("id")],
                    placeholder: "0.0",
                    tabIndex: tabIndex++,
                    style: { width: "100%", paddingTop: 16 }
                }),
                this.state.collateralAmount !== "0" && this.state.debtAmount !== "0" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: {
                            paddingTop: "1rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral.bid_price" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        base_amount: this.state.collateralAmount / 1,
                        base_asset: core.get("id"),
                        quote_amount: this.state.debtAmount / 1,
                        quote_asset: asset.get("id"),
                        noPopOver: true,
                        ignorePriceFeed: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button"),
                            onClick: this._onBidCollateral.bind(this),
                            tabIndex: tabIndex++
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.bid_collateral" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.reset.bind(this),
                            tabIndex: tabIndex++
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return this.renderCollateralBid();
        }
    }]);

    return BidCollateralOperation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BidCollateralOperation = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(BidCollateralOperation, {
    propNames: ["asset", "core"],
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (BidCollateralOperation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuYjI4MjVkYTJiMTRhZTFjYzgxY2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkVGltZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRPd25lclVwZGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRSZXNvbHZlUHJlZGljdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgTGlua1RvQXNzZXRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0Fzc2V0QnlJZFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEZvcm1hdHRlZFRpbWUgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkVGltZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge0NhbGxPcmRlciwgQ29sbGF0ZXJhbEJpZCwgRmVlZFByaWNlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcbmltcG9ydCBGZWVQb29sT3BlcmF0aW9uIGZyb20gXCIuLi9BY2NvdW50L0ZlZVBvb2xPcGVyYXRpb25cIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFzc2V0T3duZXJVcGRhdGUgZnJvbSBcIi4vQXNzZXRPd25lclVwZGF0ZVwiO1xuaW1wb3J0IEFzc2V0UHVibGlzaEZlZWQgZnJvbSBcIi4vQXNzZXRQdWJsaXNoRmVlZFwiO1xuaW1wb3J0IEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gZnJvbSBcIi4vQXNzZXRSZXNvbHZlUHJlZGljdGlvblwiO1xuaW1wb3J0IEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZnJvbSBcIi4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvblwiO1xuaW1wb3J0IHtUb29sdGlwLCBJY29uLCBUYWJsZSwgVGFicywgQ29sbGFwc2V9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmNvbnN0IHtQYW5lbH0gPSBDb2xsYXBzZTtcblxuY2xhc3MgQXNzZXRGbGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aXNTZXQsIG5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2V0LWZsYWdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5cIiArIG5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBBc3NldFBlcm1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpc1NldCwgbmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghaXNTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NldC1mbGFnXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMuXCIgKyBuYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEFzc2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYWxsT3JkZXJzOiBbXSxcbiAgICAgICAgICAgIGNvbGxhdGVyYWxCaWRzOiBbXSxcbiAgICAgICAgICAgIG1hcmdpblRhYmxlU29ydDogXCJyYXRpb1wiLFxuICAgICAgICAgICAgY29sbGF0ZXJhbFRhYmxlU29ydDogXCJwcmljZVwiLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIGN1bXVsYXRpdmVHcm91cGluZzogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmVGZWVkVGFiOiBcIm1hcmdpblwiLFxuICAgICAgICAgICAgYWN0aXZlQXNzZXRUYWI6IFwiaW5mb1wiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25Db2xsYXRlcmFsQmlkKCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgX2dldE1hcmdpbkNvbGxhdGVyYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgICAgIFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkUHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcblxuICAgICAgICAgICAgaWYgKCEhZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1jciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jYWxsX29yZGVyc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2FsbE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtY3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYWxsT3JkZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jb2xsYXRlcmFsX2JpZHNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb2xsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWxCaWRzID0gY29sbF9vcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbGxhdGVyYWxCaWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhdGVyYWxCaWRzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0X2NvbGxhdGVyYWxfYmlkcyBFcnJvcjogXCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBzcXIgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBmZWVkUHJpY2VSYXcgPSBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UodGhpcy5wcm9wcy5hc3NldCk7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaGFzIGJlZW4gbm8gZmVlZCBwcmljZSwgc2V0dGxlUHJpY2UgaGFzIDAgYW1vdW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYW1vdW50XCJdKSA9PSAwICYmXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pID09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVkUHJpY2U7XG5cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIGRvbid0IG5lZWQgZmVlZHMgZm9yIHNob3J0aW5nLCBzbyB0aGUgc2V0dGxlbWVudCBwcmljZSBjYW4gYmUgc2V0IHRvIDE6MSAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQgJiZcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pID09PVxuICAgICAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghYXNzZXRzW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcImlkXCIpXSkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFxuICAgICAgICAgICAgICAgIFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdyA9IGZlZWRQcmljZVJhdy5zZXRJbihbXCJxdW90ZVwiLCBcImFtb3VudFwiXSwgMSk7XG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oXG4gICAgICAgICAgICAgICAgW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3FyID0gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhdGNoIEludmFsaWQgU2V0dGxlUHJpY2Ugb2JqZWN0XG4gICAgICAgIGlmIChmZWVkUHJpY2VSYXcudG9KUykge1xuICAgICAgICAgICAgbGV0IHNldHRsZU9iamVjdCA9IGZlZWRQcmljZVJhdy50b0pTKCk7XG4gICAgICAgICAgICBpZiAoIWFzc2V0c1tzZXR0bGVPYmplY3QuYmFzZS5hc3NldF9pZF0pIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZlZWRQcmljZSA9IG5ldyBGZWVkUHJpY2Uoe1xuICAgICAgICAgICAgcHJpY2VPYmplY3Q6IGZlZWRQcmljZVJhdyxcbiAgICAgICAgICAgIG1hcmtldF9iYXNlOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgc3FyLFxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmZWVkUHJpY2U7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUN1bXVsYXRpdmVHcm91cGluZygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdW11bGF0aXZlR3JvdXBpbmc6ICF0aGlzLnN0YXRlLmN1bXVsYXRpdmVHcm91cGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXNzZXRUeXBlKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBcImJpdGFzc2V0XCIgaW4gYXNzZXRcbiAgICAgICAgICAgID8gYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXRcbiAgICAgICAgICAgICAgICA/IFwiUHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgOiBcIlNtYXJ0XCJcbiAgICAgICAgICAgIDogXCJTaW1wbGVcIjtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRQcmljZShcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGhpZGVfc3ltYm9scyA9IGZhbHNlLFxuICAgICAgICBoaWRlX3ZhbHVlID0gZmFsc2UsXG4gICAgICAgIGZhY3RvciA9IDAsXG4gICAgICAgIG5lZ2F0aXZlX2ludmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJpY2UgPT0gXCJudW1iZXJcIiAmJiBpc05hTihwcmljZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZSA9IHByaWNlLmJhc2U7XG4gICAgICAgIHZhciBxdW90ZSA9IHByaWNlLnF1b3RlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Jhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Jhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2hpZGVfdmFsdWV9XG4gICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtoaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAgICAgZmFjdG9yPXtmYWN0b3J9XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVfaW52ZXJ0PXtuZWdhdGl2ZV9pbnZlcnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdzLCBuYW1lcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NldD17ZmxhZ3NbbmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMocGVybWlzc2lvbnMsIG5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRQZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcGVybV8ke25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtwZXJtaXNzaW9uc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBdXRob3JpdHlMaXN0KGF1dGhvcml0aWVzKSB7XG4gICAgICAgIHJldHVybiBhdXRob3JpdGllcy5tYXAoZnVuY3Rpb24oYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YXV0aG9yaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2F1dGhvcml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFya2V0TGlzdChhc3NldCwgbWFya2V0cykge1xuICAgICAgICB2YXIgc3ltYm9sID0gYXNzZXQuc3ltYm9sO1xuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2V0ID09IHN5bWJvbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldE5hbWUgPSBtYXJrZXQgKyBcIi9cIiArIHN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9PnttYXJrZXROYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XG4gICAgICAgIHZhciBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHZhciBpc3N1ZXJOYW1lID0gaXNzdWVyID8gaXNzdWVyLmdldChcIm5hbWVcIikgOiBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCA8YSB0byBhbnkgbGlua3MgaW5jbHVkZWQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi5tYWluO1xuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcblxuICAgICAgICBsZXQgdXJsVGVzdCA9IC8oaHR0cD8pOlxcL1xcLyh3d3dcXC4pP1thLXowLTlcXC46XS4qPyg/PVxccykvZztcblxuICAgICAgICAvLyBSZWdleHAgbmVlZHMgYSB3aGl0ZXNwYWNlIGFmdGVyIGEgdXJsLCBzbyBhZGQgb25lIHRvIG1ha2Ugc3VyZVxuICAgICAgICBkZXNjID0gZGVzYyAmJiBkZXNjLmxlbmd0aCA+IDAgPyBkZXNjICsgXCIgXCIgOiBkZXNjO1xuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XG5cbiAgICAgICAgLy8gQWRkIG1hcmtldCBsaW5rXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldF9zeW1ib2wgPSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IHByZWZlcnJlZE1hcmtldCA9IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgIDogY29yZV9hc3NldF9zeW1ib2w7XG4gICAgICAgIGlmIChhc3NldC5iaXRhc3NldCkge1xuICAgICAgICAgICAgcHJlZmVycmVkTWFya2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoISFwcmVmZXJyZWRNYXJrZXQgJiYgcHJlZmVycmVkTWFya2V0LmdldCkge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IHByZWZlcnJlZE1hcmtldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IGNvcmVfYXNzZXRfc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldC5zeW1ib2wgPT09IGNvcmVfYXNzZXRfc3ltYm9sKSBwcmVmZXJyZWRNYXJrZXQgPSBcIlVTRFwiO1xuICAgICAgICBpZiAodXJscyAmJiB1cmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtkb3duVXJsID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZXh0ZXJuYWwtbGlua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiJHt1cmx9XCI+JHt1cmx9PC9hPmA7XG4gICAgICAgICAgICAgICAgZGVzYyA9IGRlc2MucmVwbGFjZSh1cmwsIG1hcmtkb3duVXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtuYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUob3JpZ2luYWxBc3NldCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzaG9ydF9uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5SaWdodDogMTV9fT57c2hvcnRfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1hcmtldC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7YXNzZXQuc3ltYm9sfV8ke3ByZWZlcnJlZE1hcmtldH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgcGF0aD17XCJhc3NldHMvXCIgKyBhc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGFsdF9wYXRoPVwiYXNzZXRzL0Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cInN1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w9eyhwcmVmaXggfHwgXCJcIikgKyBuYW1lfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY31cbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXtpc3N1ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX2lzc3Vlcj1cInRydWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJTdW1tYXJ5KGFzc2V0KSB7XG4gICAgICAgIC8vIFRPRE86IGNvbmZpZGVudGlhbF9zdXBwbHk6IDAgVVNEICAgW0lGIE5PVCBaRVJPIE9SIE5PVCBESVNBQkxFIENPTkZJREVOVElBTF1cbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xuXG4gICAgICAgIGxldCBmbGFnQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZmxhZ3MsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYml0TmFtZXMgPSBPYmplY3Qua2V5cyhmbGFnQm9vbGVhbnMpO1xuXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb24gPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ICYmIGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0O1xuICAgICAgICBsZXQgcHJlZGljdGlvblJvd3MgPSBudWxsO1xuICAgICAgICBpZiAoaXNQcmVkaWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByZWRpY3Rpb25Sb3dzID0gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5wcmVkaWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uY29uZGl0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5yZXNvbHV0aW9uX2RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uLmV4cGlyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRTdXBwbHkgPSBkeW5hbWljID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5jdXJyZW50X3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmN1cnJlbnRfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICB2YXIgc3RlYWx0aFN1cHBseSA9IGR5bmFtaWMgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LnN0ZWFsdGhfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuY29uZmlkZW50aWFsX3N1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgdmFyIG1hcmtldEZlZSA9IGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50IC8gMTAwLjB9ICUgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X21hcmtldF9mZWUgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXJrZXRGZWVSZWZlcnJhbFJld2FyZCA9XG4gICAgICAgICAgICBmbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSAmJlxuICAgICAgICAgICAgb3B0aW9ucy5leHRlbnNpb25zICYmXG4gICAgICAgICAgICBvcHRpb25zLmV4dGVuc2lvbnMucmV3YXJkX3BlcmNlbnQgPj0gMCA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXdhcmRfcGVyY2VudF90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZV9yZWZlcnJhbF9yZXdhcmRfcGVyY2VudFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCAvIDEwMC4wfSAlPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmFzc2V0X3R5cGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7dGhpcy5fYXNzZXRUeXBlKGFzc2V0KX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNQcmVkaWN0aW9uICYmIHByZWRpY3Rpb25Sb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5pc3N1ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17YXNzZXQuaXNzdWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLnByZWNpc2lvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHthc3NldC5wcmVjaXNpb259IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0LmJpdGFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmJhY2tpbmdfYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlYWx0aFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlUmVmZXJyYWxSZXdhcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGbGFnSW5kaWNhdG9ycyhmbGFnQm9vbGVhbnMsIGJpdE5hbWVzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclByaWNlRmVlZChhc3NldCkge1xuICAgICAgICB2YXIgYml0QXNzZXQgPSBhc3NldC5iaXRhc3NldDtcbiAgICAgICAgaWYgKCEoXCJjdXJyZW50X2ZlZWRcIiBpbiBiaXRBc3NldCkpIHJldHVybiA8ZGl2IGhlYWRlcj17dGl0bGV9IC8+O1xuICAgICAgICB2YXIgY3VycmVudEZlZWQgPSBiaXRBc3NldC5jdXJyZW50X2ZlZWQ7XG5cbiAgICAgICAgdmFyIGZlZWRQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPntmZWVkUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZXh0ZXJuYWxfZmVlZF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZlZWRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZmVlZF9saWZldGltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaXRBc3NldC5vcHRpb25zLmZlZWRfbGlmZXRpbWVfc2VjIC8gNjAgLyA2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWluX2ZlZWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Yml0QXNzZXQub3B0aW9ucy5taW5pbXVtX2ZlZWRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfYW5hbHl6ZUJpZHMoc2V0dGxlbWVudF9mdW5kX2RlYnQpIHtcbiAgICAgICAgLy8gQ29udmVydCBzdXBwbHkgdG8gY2FsY3VsYWJsZSB2YWx1ZXNcbiAgICAgICAgbGV0IGN1cnJlbnRfc3VwcGx5X3ZhbHVlID0gc2V0dGxlbWVudF9mdW5kX2RlYnQ7XG5cbiAgICAgICAgbGV0IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSA9IDA7XG4gICAgICAgIGxldCBiaWRzX2RlYnRfdmFsdWUgPSAwO1xuXG4gICAgICAgIGxldCBzb3J0ZWRfYmlkcyA9IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEJpZHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIuYmlkLnRvUmVhbCgpIC0gYS5iaWQudG9SZWFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvcnRlZF9iaWRzLmZvckVhY2goYmlkID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsID0gYmlkLmNvbGxhdGVyYWw7XG4gICAgICAgICAgICBsZXQgZGVidCA9IGJpZC5kZWJ0O1xuICAgICAgICAgICAgaWYgKGJpZHNfZGVidF92YWx1ZSA8IGN1cnJlbnRfc3VwcGx5X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpZHNfZGVidF92YWx1ZSArIGRlYnQgPj0gY3VycmVudF9zdXBwbHlfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidCA9IGN1cnJlbnRfc3VwcGx5X3ZhbHVlIC0gYmlkc19kZWJ0X3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsID0gKGRlYnQgLyBiaWQuZGVidCkgKiBjb2xsYXRlcmFsO1xuICAgICAgICAgICAgICAgICAgICBiaWQuY29uc2lkZXJlZElmUmV2aXZlZCA9IDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmlkLmNvbnNpZGVyZWRJZlJldml2ZWQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgPSBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgKyBjb2xsYXRlcmFsO1xuICAgICAgICAgICAgICAgIGJpZHNfZGVidF92YWx1ZSA9IGJpZHNfZGVidF92YWx1ZSArIGRlYnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpZC5jb25zaWRlcmVkSWZSZXZpdmVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSxcbiAgICAgICAgICAgIGRlYnQ6IGJpZHNfZGVidF92YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlclNldHRsZW1lbnQoYXNzZXQpIHtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmICghKFwiY3VycmVudF9mZWVkXCIgaW4gYml0QXNzZXQpKSByZXR1cm4gPGRpdiBoZWFkZXI9e3RpdGxlfSAvPjtcblxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyBkeW5hbWljLmN1cnJlbnRfc3VwcGx5IDogMDtcblxuICAgICAgICB2YXIgY3VycmVudEZlZWQgPSBiaXRBc3NldC5jdXJyZW50X2ZlZWQ7XG4gICAgICAgIHZhciBpc0dsb2JhbFNldHRsZSA9IGFzc2V0LmJpdGFzc2V0LnNldHRsZW1lbnRfZnVuZCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvID0gbnVsbDtcbiAgICAgICAgbGV0IHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8gPSBudWxsO1xuICAgICAgICBsZXQgcmV2aXZlX3ByaWNlX3dpdGhfYmlkcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzR2xvYmFsU2V0dGxlKSB7XG4gICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgKiBHbG9iYWwgU2V0dGxlZCBBc3NldHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRGdW5kID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluIGdsb2JhbGx5IHNldHRsZWQgYXNzZXRzIHRoZSBmb3JjZSBzZXR0bGVtZW50IG9mZnNldCBpcyAwXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBiaXRBc3NldC5zZXR0bGVtZW50X3ByaWNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHJldml2ZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBiaXRBc3NldC5zZXR0bGVtZW50X3ByaWNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV06IHRoaXMucHJvcHMuYXNzZXQudG9KUygpLFxuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICldOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgc3VwcGx5IHRvIGNhbGN1bGFibGUgdmFsdWVzXG4gICAgICAgICAgICBsZXQgY3VycmVudF9zdXBwbHlfdmFsdWUgPSBjdXJyZW50U3VwcGx5O1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSA9IGJpdEFzc2V0LnNldHRsZW1lbnRfZnVuZDtcblxuICAgICAgICAgICAgbGV0IGJpZHMgPSB0aGlzLl9hbmFseXplQmlkcyhjdXJyZW50X3N1cHBseV92YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldml2ZV9wcmljZV93aXRoX2JpZHMgPSAoXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQgLyAxICsgYmlkcy5jb2xsYXRlcmFsfSAvLyAvMSBpcyBpbXBsaWNpdCB0eXBlIGNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17YXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0uaWR9XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17Ymlkcy5kZWJ0fVxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBmYWN0b3I9e2N1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwfVxuICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZV9pbnZlcnQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlID1cbiAgICAgICAgICAgICAgICBjdXJyZW50X3N1cHBseV92YWx1ZSAvIE1hdGgucG93KDEwLCBhc3NldC5wcmVjaXNpb24pO1xuICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlID1cbiAgICAgICAgICAgICAgICBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgL1xuICAgICAgICAgICAgICAgIE1hdGgucG93KFxuICAgICAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0ucHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGJpZHNfY29sbGF0ZXJhbCA9XG4gICAgICAgICAgICAgICAgYmlkcy5jb2xsYXRlcmFsIC9cbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcbiAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkUHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcbiAgICAgICAgICAgIGlmIChmZWVkUHJpY2UpIHtcbiAgICAgICAgICAgICAgICBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSAvXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKSAvXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdG90YWxfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgKyBiaWRzX2NvbGxhdGVyYWwpIC9cbiAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlLnRvUmVhbCgpIC9cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgKiBOb24gR2xvYmFsIFNldHRsZW1lbnQgQXNzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBnbG9iYWxTZXR0bGVtZW50UHJpY2UgPSB0aGlzLmdldEdsb2JhbFNldHRsZW1lbnRQcmljZSgpO1xuICAgICAgICAgICAgdmFyIGdsb2JhbFNldHRsZW1lbnRUcmlnZ2VyUHJpY2UgPSB0aGlzLmdldEdsb2JhbFNldHRsZW1lbnRQcmljZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZXR0bGVkID0gYml0QXNzZXQuZm9yY2Vfc2V0dGxlZF92b2x1bWU7XG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudE9mZnNldCA9XG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50O1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnREZWxheSA9IGJpdEFzc2V0Lm9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWM7XG4gICAgICAgICAgICB2YXIgbWF4U2V0dGxlbWVudFZvbHVtZSA9XG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5tYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lO1xuXG4gICAgICAgICAgICB2YXIgbXNzcFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgc2V0dGxlUHJpY2UgPSB0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgIGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShhc3NldCksXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgMSAtIHNldHRsZW1lbnRPZmZzZXQgLyAxMDAwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXRsZSA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlID8gc2V0dGxlbWVudFByaWNlIDogc2V0dGxlUHJpY2V9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19yZXZpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19zZWVfYWN0aW9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAsICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19vclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcGxhY2VfYmlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3NldHRsZW1lbnRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfZnVuZHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3NldHRsZW1lbnRGdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVtZW50X2Z1bmRzX2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGxlbWVudF9mdW5kX2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvLnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19yZXZlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfYXV0b19yZXZpdmVfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmV2aXZlUHJpY2V9IC8ge3Jldml2ZV9wcmljZV93aXRoX2JpZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19jb2xsYXRlcmFsX3ZhbHVhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWNyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdG90YWxfY29sbGF0ZXJhbF9yYXRpby50b0ZpeGVkKDYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttc3NwUHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF90cmlnZ2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbFNldHRsZW1lbnRUcmlnZ2VyUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFNldHRsZW1lbnRUcmlnZ2VyUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmdsb2JhbF9zZXR0bGVtZW50X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbFNldHRsZW1lbnRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2xvYmFsU2V0dGxlbWVudFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmZvcmNlX3NldHRsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7ICh7c2V0dGxlbWVudE9mZnNldCAvIDEwMH0le1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5vZmZzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3NldHRsZVByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZGVsYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkVGltZSB0aW1lPXtzZXR0bGVtZW50RGVsYXl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQubWF4X3NldHRsZV92b2x1bWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21heFNldHRsZW1lbnRWb2x1bWUgLyAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhTZXR0bGVtZW50Vm9sdW1lIC8gMTAwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5jdXJyZW50X3NldHRsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjdXJyZW50U2V0dGxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuc2V0dGxlX3JlbWFpbmluZ192b2x1bWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNldHRsZWQgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2V0dGxlZCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFN1cHBseSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFNldHRsZW1lbnRWb2x1bWUgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCkpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVQb29sKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29yZSA9IHRoaXMucHJvcHMuY29yZUFzc2V0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5mZWVfcG9vbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnBvb2xfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlPXtjb3JlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY29yZV9leGNoYW5nZV9yYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnBvb2xfYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmZlZV9wb29sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudW5jbGFpbWVkX2lzc3Vlcl9pbmNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuYWNjdW11bGF0ZWRfZmVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lclwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy51cGRhdGVfb3duZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXNzZXRPd25lclVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXR9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPd25lcj17YXNzZXQuaXNzdWVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZWRQdWJsaXNoKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9wdWJsaXNoX2ZlZWRcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlZF9wcm9kdWNlcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBc3NldFB1Ymxpc2hGZWVkXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE93bmVyPXthc3NldC5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29sbGF0ZXJhbEJpZChhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZFwiIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfaW5jbHVkZWRfb25fcmV2aXZhbFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLnJlbW92ZV9iaWRcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QmlkQ29sbGF0ZXJhbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBjb3JlPXthc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17dGhpcy51cGRhdGVPbkNvbGxhdGVyYWxCaWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVQb29sRnVuZGluZyhhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5mdW5kXCIgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmZ1bmRfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17ZHluYW1pY31cbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsYWltXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVzQ2xhaW1pbmcoYXNzZXQpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2NsYWltX2ZlZXNcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljPXtkeW5hbWljfVxuICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsYWltX2ZlZXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEJsYWNrbGlzdCBBdXRob3JpdGllczogPEFjY291bnQgbGlzdCBsaWtlIFZvdGluZz5cbiAgICAvLyBUT0RPOiBCbGFja2xpc3QgTWFya2V0OiBCYXNlL01hcmtldCwgQmFzZS9NYXJrZXRcbiAgICByZW5kZXJQZXJtaXNzaW9ucyhhc3NldCkge1xuICAgICAgICAvL3ZhciBkeW5hbWljID0gYXNzZXQuZHluYW1pYztcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IGFzc2V0Lm9wdGlvbnM7XG5cbiAgICAgICAgbGV0IHBlcm1pc3Npb25Cb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5pc3N1ZXJfcGVybWlzc2lvbnMsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYml0TmFtZXMgPSBPYmplY3Qua2V5cyhwZXJtaXNzaW9uQm9vbGVhbnMpO1xuXG4gICAgICAgIC8vIG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzID0gW1wiMS4yLjNcIiwgXCIxLjIuNFwiXTtcbiAgICAgICAgLy8gb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXMgPSBbXCIxLjIuMVwiLCBcIjEuMi4yXCJdO1xuICAgICAgICAvLyBvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzID0gW1wiSlBZXCIsIFwiUlVCXCJdO1xuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzID0gW1wiVVNEXCIsIFwiRVVSXCIsIFwiR09MRFwiXTtcblxuICAgICAgICAvLyBvcHRpb25zLm1heF9tYXJrZXRfZmVlIGluaXRpYWxseSBhIHN0cmluZ1xuICAgICAgICB2YXIgbWF4TWFya2V0RmVlID0gcGVybWlzc2lvbkJvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5tYXhfbWFya2V0X2ZlZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXsrb3B0aW9ucy5tYXhfbWFya2V0X2ZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfc3VwcGx5IGluaXRpYWxseSBhIHN0cmluZ1xuICAgICAgICB2YXIgbWF4U3VwcGx5ID0gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMubWF4X3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXsrb3B0aW9ucy5tYXhfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuXG4gICAgICAgIHZhciB3aGl0ZUxpc3RzID0gcGVybWlzc2lvbkJvb2xlYW5zW1wid2hpdGVfbGlzdFwiXSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmJsYWNrbGlzdF9hdXRob3JpdGllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMuYmxhY2tsaXN0X21hcmtldHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWFya2V0TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckF1dGhvcml0eUxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0cyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMud2hpdGVsaXN0X21hcmtldHMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy53aGl0ZWxpc3RfbWFya2V0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNYXJrZXRMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGxldCB3aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nID0gYXNzZXQub3B0aW9ucy5leHRlbnNpb25zXG4gICAgICAgICAgICAud2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMuYWNjb3VudHNfaW5fd2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmV4dGVuc2lvbnMud2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4TWFya2V0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9uSW5kaWNhdG9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25Cb29sZWFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdE5hbWVzXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHt3aGl0ZUxpc3RzfVxuICAgICAgICAgICAgICAgICAgICB7d2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGdsb2JhbCBzZXR0bGVtZW50IHByaWNlIGlzIGRlZmluZWQgYXMgdGhlXG4gICAgLy8gdGhlIHByaWNlIGF0IHdoaWNoIHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplIHNob3J0J3NcbiAgICAvLyBjb2xsYXRlcmFsIG5vIGxvbmdlciBlbm91Z2ggdG8gYmFjayB0aGUgZGVidFxuICAgIC8vIGhlL3NoZSBvd2VzLlxuICAgIGdldEdsb2JhbFNldHRsZW1lbnRQcmljZShtc3NyID0gMSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY2FsbE9yZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBnZXQgdGhlIGxlYXN0IGNvbGxhdGVyYWxpemVkIHNob3J0IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZWFzdENvbFNob3J0ID0gbnVsbDtcbiAgICAgICAgdmFyIGxlYXN0Q29sU2hvcnRSYXRpbyA9IG51bGw7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2FsbF9vcmRlciA9IHRoaXMuc3RhdGUuY2FsbE9yZGVyc1tpXTtcblxuICAgICAgICAgICAgaWYgKGxlYXN0Q29sU2hvcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnQgPSBjYWxsX29yZGVyO1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnRSYXRpbyA9IGNhbGxfb3JkZXIuZ2V0UmF0aW8oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FsbF9vcmRlci5nZXRSYXRpbygpIDwgbGVhc3RDb2xTaG9ydFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbGVhc3RDb2xTaG9ydFJhdGlvID0gY2FsbF9vcmRlci5nZXRSYXRpbygpO1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnQgPSBjYWxsX29yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlYXN0Q29sU2hvcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY291bGRuJ3QgZmluZCB0aGUgbGVhc3QgY29sc2hvcnQ/XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMgcHJpY2Ugd2lsbCBoYXBwZW4gd2hlbiB0aGUgQ1IgaXMgMS5cbiAgICAgICAgLy8gVGhlIENSIGlzIDEgaWYgY29sbGF0ZXJhbCAvIChkZWJ0IHggZmVlZF8gcHJpY2UpID09IDFcbiAgICAgICAgLy8gUmVhcnJhbmdpbmcsIHRoaXMgbWVhbnMgdGhhdCB0aGUgQ1IgaXMgMSBpZlxuICAgICAgICAvLyBmZWVkX3ByaWNlID09IGNvbGxhdGVyYWwgLyBkZWJ0XG4gICAgICAgIC8vXG4gICAgICAgIC8vIERlZmF1bHQgaXMgdG8gcmV0dXJuIHRoZSBnbG9iYWwgc2V0dGxlbWVudCBwcmljZVxuICAgICAgICAvLyBVc2UgbXNzciB0byBjYWxjdWxhdGUgaW4gd2hlbiBhbiBldmVudCBoYXBwZW5zXG4gICAgICAgIC8vIGJhc2VkIG9uIGFuIGFzc2V0cyBNU1NSXG5cbiAgICAgICAgbGV0IGRlYnQgPSBsZWFzdENvbFNob3J0LmRlYnQgKiBtc3NyO1xuICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IGxlYXN0Q29sU2hvcnQuY29sbGF0ZXJhbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2NvbGxhdGVyYWx9XG4gICAgICAgICAgICAgICAgYmFzZV9hc3NldD17bGVhc3RDb2xTaG9ydC5jYWxsX3ByaWNlLmJhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtkZWJ0fVxuICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtsZWFzdENvbFNob3J0LmNhbGxfcHJpY2UucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJGZWVkVGFibGUoYXNzZXQpIHtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXCJmZWVkc1wiIGluIGJpdEFzc2V0KSB8fFxuICAgICAgICAgICAgYml0QXNzZXQuZmVlZHMubGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0IHx8XG4gICAgICAgICAgICAhYml0QXNzZXQuZmVlZHMubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmVlZHMgPSBiaXRBc3NldC5mZWVkcztcbiAgICAgICAgdmFyIGZlZWRfcHJpY2VfaGVhZGVyID0gYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGZlZWRzWzBdWzFdWzFdKTtcbiAgICAgICAgdmFyIGNvcmVfZXhjaGFuZ2VfcmF0ZV9oZWFkZXIgPSBmZWVkc1swXVsxXVsxXS5jb3JlX2V4Y2hhbmdlX3JhdGU7XG5cbiAgICAgICAgLy8gRmlsdGVyIGJ5IHZhbGlkIGZlZWQgbGlmZXRpbWUsIFNvcnQgYnkgcHVibGlzaGVkIGRhdGVcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgb2xkZXN0VmFsaWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICBub3cgLSBhc3NldC5iaXRhc3NldC5vcHRpb25zLmZlZWRfbGlmZXRpbWVfc2VjICogMTAwMFxuICAgICAgICApO1xuICAgICAgICBmZWVkcyA9IGZlZWRzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhWzFdWzBdKSA+IG9sZGVzdFZhbGlkRGF0ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbihmZWVkMSwgZmVlZDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZmVlZDJbMV1bMF0pIC0gbmV3IERhdGUoZmVlZDFbMV1bMF0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRGZWVkID0gYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KTtcbiAgICAgICAgbGV0IGN1cnJlbnRGZWVkUHJpY2UgPVxuICAgICAgICAgICAgY3VycmVudEZlZWQuYmFzZS5hbW91bnQgLyBjdXJyZW50RmVlZC5xdW90ZS5hbW91bnQ7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcblxuICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJwdWJsaXNoZXJcIixcbiAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEucHVibGlzaGVyXCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwdWJsaXNoZXJcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhLnB1Ymxpc2hlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEpIG5hbWVBID0gbmFtZUEuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIucHVibGlzaGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQikgbmFtZUIgPSBuYW1lQi5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJmZWVkX3ByaWNlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmZlZWRfcHJpY2VcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICh7dGhpcy5mb3JtYXR0ZWRQcmljZShmZWVkX3ByaWNlX2hlYWRlciwgZmFsc2UsIHRydWUpfSlcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmZWVkX3ByaWNlXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYV9wcmljZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmZlZWRfcHJpY2UuYmFzZS5hbW91bnQgLyBhLmZlZWRfcHJpY2UucXVvdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiX3ByaWNlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuZmVlZF9wcmljZS5iYXNlLmFtb3VudCAvIGIuZmVlZF9wcmljZS5xdW90ZS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYV9wcmljZSA+IGJfcHJpY2UpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYV9wcmljZSA8IGJfcHJpY2UpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5iYXNlLmFtb3VudCAvIGl0ZW0ucXVvdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZWRpYW5fb2Zmc2V0ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHByaWNlIC8gY3VycmVudEZlZWRQcmljZSkgKiAxMDAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCB0cnVlKX0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhbl9vZmZzZXQgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInR4dGxhYmVsIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVkaWFuX29mZnNldCA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInR4dGxhYmVsIHdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHh0bGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVkaWFuX29mZnNldH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZV9leGNoYW5nZV9yYXRlX2hlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFByaWNlKGl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIixcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInB1Ymxpc2hEYXRlXCIsXG4gICAgICAgICAgICAgICAgZml4ZWQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5wdWJsaXNoZWRcIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInB1Ymxpc2hEYXRlXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5wdWJsaXNoRGF0ZS5nZXRUaW1lKCkgPiBiLnB1Ymxpc2hEYXRlLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5wdWJsaXNoRGF0ZS5nZXRUaW1lKCkgPCBiLnB1Ymxpc2hEYXRlLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRpbWVBZ28gdGltZT17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVlZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmZWVkID0gZmVlZHNbaV07XG4gICAgICAgICAgICB2YXIgcHVibGlzaGVyID0gZmVlZFswXTtcbiAgICAgICAgICAgIHZhciBwdWJsaXNoRGF0ZSA9IG5ldyBEYXRlKGZlZWRbMV1bMF0gKyBcIlpcIik7XG4gICAgICAgICAgICB2YXIgZmVlZF9wcmljZSA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShmZWVkWzFdWzFdKTtcbiAgICAgICAgICAgIHZhciBjb3JlX2V4Y2hhbmdlX3JhdGUgPSBmZWVkWzFdWzFdLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgICAgIHZhciBtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvID1cbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMDtcbiAgICAgICAgICAgIHZhciBtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gPVxuICAgICAgICAgICAgICAgIFwiXCIgKyBmZWVkWzFdWzFdLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDA7XG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiBwdWJsaXNoZXIsXG4gICAgICAgICAgICAgICAgZmVlZF9wcmljZTogZmVlZF9wcmljZSxcbiAgICAgICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGU6IGNvcmVfZXhjaGFuZ2VfcmF0ZSxcbiAgICAgICAgICAgICAgICBtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvOiBtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgICAgIG1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbzogbWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hEYXRlOiBwdWJsaXNoRGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIHJvd0tleT1cImZlZWRQdWJsaXNoZXJcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUZXh0OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEuZW1wdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlck1hcmdpblRhYmxlKCkge1xuICAgICAgICBsZXQge2N1bXVsYXRpdmVHcm91cGluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgY29sdW1ucyA9IFtdO1xuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbGxPcmRlcnMgJiYgdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1bW11bGF0aXZlU3VmZml4ID0gY3VtdWxhdGl2ZUdyb3VwaW5nID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmN1bXVsYXRpdmVcIiAvPilcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBkZWJ0X2N1bSA9IDA7XG4gICAgICAgICAgICBsZXQgY29sbF9jdW0gPSAwO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnRfY3VtICs9IGMuZGVidDtcbiAgICAgICAgICAgICAgICBjb2xsX2N1bSArPSBjLmNvbGxhdGVyYWw7XG5cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBib3Jyb3dlcjogYy5ib3Jyb3dlcixcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdW11bGF0aXZlR3JvdXBpbmcgPyBjb2xsX2N1bSA6IGMuY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiBjLmdldENvbGxhdGVyYWwoKS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1bXVsYXRpdmVHcm91cGluZyA/IGRlYnRfY3VtIDogYy5kZWJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYW1vdW50VG9SZWNlaXZlKCkuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogYy5jYWxsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICB0Y3I6IGMub3JkZXIudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICAgICAgICAgIGNyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogYy5nZXRSYXRpbygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjLmdldFN0YXR1cygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdW5pdEluZm8gPSBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZGF0YVNvdXJjZVswXVtrZXldO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhU291cmNlLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJhc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJib3Jyb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dlclwiIC8+LFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYm9ycm93ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuYm9ycm93ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSkgbmFtZUEgPSBuYW1lQS5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIuYm9ycm93ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQikgbmFtZUIgPSBuYW1lQi5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY29sbGF0ZXJhbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdW1tdWxhdGl2ZVN1ZmZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdEluZm8oXCJjb2xsYXRlcmFsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNvbGxhdGVyYWxcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuY29sbGF0ZXJhbC5hbW91bnQgPiBiLmNvbGxhdGVyYWwuYW1vdW50KSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNvbGxhdGVyYWwuYW1vdW50IDwgYi5jb2xsYXRlcmFsLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy5jbGlja190b19zd2l0Y2hfdG9fY3VtdWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUN1bXVsYXRpdmVHcm91cGluZy5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVidFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdW1tdWxhdGl2ZVN1ZmZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdEluZm8oXCJkZWJ0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlYnRcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGVidC5hbW91bnQgPiBiLmRlYnQuYW1vdW50KSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRlYnQuYW1vdW50IDwgYi5kZWJ0LmFtb3VudCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlQ3VtdWxhdGl2ZUdyb3VwaW5nLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0Lm1hcmdpbl9wb3NpdGlvbnMuY2xpY2tfdG9fc3dpdGNoX3RvX2N1bXVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNhbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0SW5mbyhcImNhbGxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInRjclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcnJvdy50YXJnZXRfY29sbGF0ZXJhbF9yYXRpb19leHBsYW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9fc2hvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidGNyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFpdGVtID8gKGl0ZW0gLyAxMDAwKS50b0ZpeGVkKDMpIDogXCItXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiIC8+LFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY3JcIixcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuY3IucmF0aW8gPiBiLmNyLnJhdGlvKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNyLnJhdGlvIDwgYi5jci5yYXRpbykgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lcyA9IFwibWFyZ2luLXJhdGlvIFwiICsgaXRlbS5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yYXRpby50b0ZpeGVkKDMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIHJvd0tleT1cImZlZWRNYXJnaW5zXCJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPVwibWFyZ2luLXJvd1wiXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKDI1KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbG9jYWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy5lbXB0eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQ29sbEJpZFRhYmxlKCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IFtdO1xuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xuXG4gICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJpZGRlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5iaWRkZXJcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYmlkZGVyXCIsXG4gICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb2xsYXRlcmFsXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29sbGF0ZXJhbFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVidFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlYnRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlYnRfY3VtXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uY3VtdWxhdGl2ZV9ib3Jyb3dfYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJkZWJ0X2N1bVwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5iaWRcIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtpdGVtLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2l0ZW0uYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2l0ZW0ucXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtpdGVtLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRvRml4ZWQoMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5jbHVkZWRcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmNvbnNpZGVyZWRfb25fcmV2aXZhbFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpbmNsdWRlZFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtID09IDIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmluY2x1ZGVkLnBhcnRpYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbSA9PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5pbmNsdWRlZC55ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5pbmNsdWRlZC5ub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgZGVidF9jdW0gPSAwO1xuICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWxCaWRzLm1hcChjID0+IHtcbiAgICAgICAgICAgIGRlYnRfY3VtICs9IGMuZGVidDtcblxuICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICBiaWRkZXI6IGMuYmlkZGVyLFxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjLmJpZC5iYXNlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYmlkLmJhc2UuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlYnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjLmJpZC5xdW90ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBjLmJpZC5xdW90ZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVidF9jdW06IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkZWJ0X2N1bSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYmlkLnF1b3RlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmljZTogYy5iaWQsXG4gICAgICAgICAgICAgICAgY3I6IGMuZ2V0UmF0aW8oKSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlZDogYy5jb25zaWRlcmVkSWZSZXZpdmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cbiAgICAgICAgICAgICAgICByb3dLZXk9XCJmZWVkQ29sbEJpZFwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IE51bWJlcigyNSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGxvY2FsZT17e1xuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmVtcHR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zZXRGZWVkVGFiKHRhYikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUZlZWRUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0QXNzZXRUYWIodGFiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlQXNzZXRUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkVGFibGVzKGFzc2V0KSB7XG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFwiZmVlZHNcIiBpbiBiaXRBc3NldCkgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmZlZWRzLmxlbmd0aCA9PSAwIHx8XG4gICAgICAgICAgICBiaXRBc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCB8fFxuICAgICAgICAgICAgIWJpdEFzc2V0LmZlZWRzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzR2xvYmFsU2V0dGxlbWVudCA9IGJpdEFzc2V0LnNldHRsZW1lbnRfZnVuZCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NldEZlZWRUYWIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMuc3RhdGUuYWN0aXZlRmVlZFRhYn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lXG4gICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHbG9iYWxTZXR0bGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGtleT1cIm1hcmdpblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVGZWVkVGFiID09IFwibWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaXNHbG9iYWxTZXR0bGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJDb2xsQmlkVGFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fcmVuZGVyTWFyZ2luVGFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgdGFiPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGtleT1cImZlZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlRmVlZFRhYiA9PSBcImZlZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJGZWVkVGFibGUoYXNzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQXNzZXRSZXNvbHZlUHJlZGljdGlvbihhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMucmVzb2x2ZV9wcmVkaWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnJlc29sdmVfcHJlZGljdGlvbl90ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBc3NldFJlc29sdmVQcmVkaWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJhY2tpbmdBc3NldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwiYXNzZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQgfHwgIXRoaXMucHJvcHMuY29yZUFzc2V0LmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKTtcbiAgICAgICAgdmFyIHByaWNlRmVlZCA9XG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXQgPyB0aGlzLnJlbmRlclByaWNlRmVlZChhc3NldCkgOiBudWxsO1xuICAgICAgICB2YXIgcHJpY2VGZWVkRGF0YSA9XG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXQgPyB0aGlzLnJlbmRlckZlZWRUYWJsZXMoYXNzZXQpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBhc3NldC1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHBhZ2UtbGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWVkaXVtLXVwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBYm91dEJveChhc3NldCwgdGhpcy5wcm9wcy5hc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2V0QXNzZXRUYWIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMuc3RhdGUuYWN0aXZlQXNzZXRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQuaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBsYXJnZS1ob3Jpem9udGFsIG1lZGl1bS11cC0xIGxhcmdlLXVwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdW1tYXJ5KGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPVwiYXNzZXQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGVybWlzc2lvbnMoYXNzZXQpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2woYXNzZXQpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlRmVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlclNldHRsZW1lbnQoYXNzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0NvbGxhdGVyYWxCaWRJbkluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJDb2xsYXRlcmFsQmlkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWREYXRhID8gcHJpY2VGZWVkRGF0YSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQuYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sRnVuZGluZyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiYml0YXNzZXRcIiBpbiBhc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZFB1Ymxpc2goYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sbGF0ZXJhbEJpZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZChhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJiaXRhc3NldFwiIGluIGFzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFzc2V0UmVzb2x2ZVByZWRpY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0ID0gY29ubmVjdChcbiAgICBBc3NldCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbkFzc2V0ID0gQXNzZXRXcmFwcGVyKEFzc2V0LCB7XG4gICAgcHJvcE5hbWVzOiBbXCJiYWNraW5nQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl1cbn0pO1xuXG5jbGFzcyBBc3NldENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwiYXNzZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFzc2V0LmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJhY2tpbmdBc3NldCA9IHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRcIilcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IFwiMS4zLjBcIjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBc3NldFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGJhY2tpbmdBc3NldD17YmFja2luZ0Fzc2V0fVxuICAgICAgICAgICAgICAgIGNvcmVBc3NldD17XCIxLjMuMFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5Bc3NldENvbnRhaW5lciA9IEFzc2V0V3JhcHBlcihBc3NldENvbnRhaW5lciwge1xuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRTeW1ib2xTcGxpdHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9sID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiA8QXNzZXRDb250YWluZXIgey4uLnRoaXMucHJvcHN9IGFzc2V0PXtzeW1ib2x9IC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGEgY2xhc3MgdG8gZGlzcGxheSB0aW1lIG5pY2VseSB3aGVuIGdpdmVuIHNlY29uZHNcclxuLy8gZm9yIGV4YW1wbGUsIGRpc3BsYXlcclxuXHJcbi8vIGV4cGVjdHMgdGhlIG51bWJlciBvZiBzZWNvbmRzIGFzIGEgcHJvcGVydHlcclxuXHJcbmNsYXNzIEZvcm1hdHRlZFRpbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dGltZTogcHJvcHMudGltZX07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2l2ZW4gYW4gaW50ZWdlciBzZWNvbmRzIGFzIGFuIGFyZ3VtZW50LFxyXG4gICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2YgaG91cnNcclxuICAgIGdldEhvdXJzKHNlY3MpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0IGhvdXJzIGNhbGxlZCB3aXRoOiBcIiArIHNlY3MpO1xyXG4gICAgICAgIHJldHVybiBzZWNzIC8gMzYwMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e3RoaXMuZ2V0SG91cnModGhpcy5zdGF0ZS50aW1lKX1oPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRUaW1lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuY29uc3Qgc3RhdGVTZXR0ZXIgPSAodGhhdCwga2V5LCB0cmFuc2Zvcm0gPSB2YWx1ZSA9PiB2YWx1ZSkgPT4gdmFsdWUgPT5cbiAgICB0aGF0LnNldFN0YXRlKHtba2V5XTogdHJhbnNmb3JtKHZhbHVlKX0pO1xuXG5jb25zdCBrZXlHZXR0ZXIgPSBrZXkgPT4gb2JqZWN0ID0+IG9iamVjdFtrZXldO1xuXG5jbGFzcyBGZWVQb29sT3BlcmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0eXBlOiBcImZ1bmRcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kZXJBY2NvdW50TmFtZVwiKTtcbiAgICBvbkFjY291bnRDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJuZXdGdW5kZXJBY2NvdW50XCIpO1xuICAgIG9uUG9vbElucHV0ID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kUG9vbEFtb3VudFwiLCBrZXlHZXR0ZXIoXCJhbW91bnRcIikpO1xuXG4gICAgb25DbGFpbUlucHV0KGtleSwge2Ftb3VudH0pIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXkgKyBcIkFzc2V0XCJdLnNldEFtb3VudCh7cmVhbDogYW1vdW50fSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IGFtb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZ1bmRQb29sID0gKCkgPT5cbiAgICAgICAgQXNzZXRBY3Rpb25zLmZ1bmRQb29sKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdGdW5kZXJBY2NvdW50XG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm5ld0Z1bmRlckFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvcmUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mdW5kUG9vbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpXG4gICAgICAgICk7XG5cbiAgICByZXNldCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSgpKTtcbiAgICB9O1xuXG4gICAgaW5pdGlhbFN0YXRlID0gKCkgPT4gKHtcbiAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU6IHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUsXG4gICAgICAgIGZ1bmRQb29sQW1vdW50OiAwLFxuICAgICAgICBmdW5kUG9vbEFzc2V0OiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuY29yZS5nZXQoXCJpZFwiKVxuICAgICAgICB9KSxcbiAgICAgICAgY2xhaW1Qb29sQW1vdW50OiAwLFxuICAgICAgICBjbGFpbVBvb2xBbW91bnRBc3NldDogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5jb3JlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwiaWRcIilcbiAgICAgICAgfSksXG4gICAgICAgIGNsYWltRmVlc0Ftb3VudDogMCxcbiAgICAgICAgY2xhaW1GZWVzQW1vdW50QXNzZXQ6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIG9uQ2xhaW1GZWVzKCkge1xuICAgICAgICBsZXQgYWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmZ1bmRlckFjY291bnROYW1lKTtcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XG4gICAgICAgIEFzc2V0QWN0aW9ucy5jbGFpbVBvb2xGZWVzKFxuICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DbGFpbVBvb2wgPSAoKSA9PlxuICAgICAgICBBc3NldEFjdGlvbnMuY2xhaW1Qb29sKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXRcbiAgICAgICAgKTtcblxuICAgIHJlbmRlckZ1bmRQb29sKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgb25Qb29sSW5wdXQsXG4gICAgICAgICAgICBvbkZ1bmRQb29sLFxuICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgICBvbkFjY291bnROYW1lQ2hhbmdlZCxcbiAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWRcbiAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZSwgaGlkZUJhbGFuY2UsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHtmdW5kZXJBY2NvdW50TmFtZSwgZnVuZFBvb2xBbW91bnQsIG5ld0Z1bmRlckFjY291bnR9ID0gc3RhdGU7XG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFoaWRlQmFsYW5jZSlcbiAgICAgICAgICAgIGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29yZUlEID0gY29yZS5nZXQoXCJpZFwiKSB8fCBcIjEuMy4wXCI7XG4gICAgICAgIGxldCBiYWxhbmNlID0gMDtcbiAgICAgICAgaWYgKG5ld0Z1bmRlckFjY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVCYWxhbmNlSUQgPSBuZXdGdW5kZXJBY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmVJRF0pO1xuICAgICAgICAgICAgaWYgKGNvcmVCYWxhbmNlSUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlSUQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZnVuZFBvb2xBc3NldC5zZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F0czogYmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kUG9vbEFtb3VudDogdGhpcy5zdGF0ZS5mdW5kUG9vbEFzc2V0LmdldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmVJRH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aGlkZUJhbGFuY2UgfHwgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wucG9vbF9iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXCJmZWVfcG9vbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uZnVuZGluZ19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Z1bmRlckFjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25BY2NvdW50TmFtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e29uQWNjb3VudENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Z1bmRlckFjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtmdW5kUG9vbEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUG9vbElucHV0fVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZnVuZFBvb2xBbW91bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkZ1bmRQb29sfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9mdW5kX2ZlZV9wb29sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNsYWltUG9vbCgpIHtcbiAgICAgICAgY29uc3Qge3Byb3BzLCBvbkNsYWltUG9vbCwgcmVzZXR9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2NsYWltUG9vbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGNvcmUsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcblxuICAgICAgICBjb25zdCBiYWxhbmNlVGV4dCA9ICEhZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0LnNldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXRzOiBkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltUG9vbEFtb3VudDogdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldC5nZXRBbW91bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxuICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9wb29sX3RleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjbGFpbVBvb2xBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1JbnB1dC5iaW5kKHRoaXMsIFwiY2xhaW1Qb29sQW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhaW1Qb29sQW1vdW50IDw9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGFpbVBvb2x9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2NsYWltX2ZlZV9wb29sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNsYWltRmVlcygpIHtcbiAgICAgICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtjbGFpbUZlZXNBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBnZXREeW5hbWljT2JqZWN0fSA9IHByb3BzO1xuICAgICAgICBsZXQgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZSA9IGR5bmFtaWNPYmplY3RcbiAgICAgICAgICAgID8gZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGxldCB2YWxpZENsYWltID1cbiAgICAgICAgICAgIGNsYWltRmVlc0Ftb3VudCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1GZWVzQW1vdW50QXNzZXQuZ2V0QW1vdW50KCkgPD0gdW5jbGFpbWVkQmFsYW5jZTtcblxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbUZlZXNBbW91bnRBc3NldC5zZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F0czogZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltRmVlc0Ftb3VudDogdGhpcy5zdGF0ZS5jbGFpbUZlZXNBbW91bnRBc3NldC5nZXRBbW91bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxuICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt1bmNsYWltZWRCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudW5jbGFpbWVkX2lzc3Vlcl9pbmNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImFjY3VtdWxhdGVkX2ZlZXNcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e3VuY2xhaW1lZEJhbGFuY2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NsYWltRmVlc0Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGFpbUlucHV0LmJpbmQodGhpcywgXCJjbGFpbUZlZXNBbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXZhbGlkQ2xhaW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsYWltRmVlcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9mZWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiZnVuZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGdW5kUG9vbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJjbGFpbVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFpbVBvb2woKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiY2xhaW1fZmVlc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFpbUZlZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRmVlUG9vbE9wZXJhdGlvbiA9IEFzc2V0V3JhcHBlcihGZWVQb29sT3BlcmF0aW9uLCB7XG4gICAgcHJvcE5hbWVzOiBbXCJhc3NldFwiLCBcImNvcmVcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvcmU6IFwiMS4zLjBcIlxuICAgIH0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGZWVQb29sT3BlcmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuXG5jbGFzcyBBc3NldE93bmVyVXBkYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjdXJyZW50T3duZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5ld19pc3N1ZXJfYWNjb3VudF9pZDogbnVsbCxcbiAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50X25hbWU6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogbmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiBhY2NvdW50ID8gYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIEFzc2V0QWN0aW9ucy51cGRhdGVPd25lcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld19pc3N1ZXJfYWNjb3VudF9pZFxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3X2lzc3Vlcl9hY2NvdW50X2lkOiBudWxsLFxuICAgICAgICAgICAgaXNzdWVyX2FjY291bnRfbmFtZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjdXJyZW50T3duZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5jdXJyZW50X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17Y3VycmVudE93bmVyLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmV3X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc3N1ZXJfYWNjb3VudF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdfaXNzdWVyX2FjY291bnRfaWRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQWNjb3VudHM9e1tjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKV19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuc3RhdGUubmV3X2lzc3Vlcl9hY2NvdW50X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXNldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRPd25lclVwZGF0ZSA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRPd25lclVwZGF0ZSk7XG5leHBvcnQgZGVmYXVsdCBBc3NldE93bmVyVXBkYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUHJpY2VJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZUlucHV0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5cclxuY2xhc3MgQXNzZXRQdWJsaXNoRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5yZXNldFN0YXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0YXRlKHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGxldCBwdWJsaXNoZXJfaWQgPSBwcm9wcy5hY2NvdW50LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50RmVlZCA9IHByb3BzLmFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCJdKTtcclxuXHJcbiAgICAgICAgLyogTWlnaHQgbmVlZCB0byBjaGVjayB0aGVzZSBkZWZhdWx0IHZhbHVlcyAqL1xyXG4gICAgICAgIGxldCBtY3IgPSBjdXJyZW50RmVlZC5nZXQoXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIsIDE3NTApO1xyXG4gICAgICAgIGxldCBtc3NyID0gY3VycmVudEZlZWQuZ2V0KFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsIDExMDApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwdWJsaXNoZXI6IHByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgcHVibGlzaGVyX2lkLFxyXG4gICAgICAgICAgICBtY3IsXHJcbiAgICAgICAgICAgIG1jclZhbHVlOiBtY3IgLyAxMDAwLFxyXG4gICAgICAgICAgICBtc3NyLFxyXG4gICAgICAgICAgICBtc3NyVmFsdWU6IG1zc3IgLyAxMDAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogYWNjb3VudCA/IGFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLnB1Ymxpc2hGZWVkKHtcclxuICAgICAgICAgICAgcHVibGlzaGVyOiB0aGlzLnN0YXRlLnB1Ymxpc2hlcl9pZCxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIG1jcjogdGhpcy5zdGF0ZS5tY3IsXHJcbiAgICAgICAgICAgIG1zc3I6IHRoaXMuc3RhdGUubXNzcixcclxuICAgICAgICAgICAgZmVlZFByaWNlOiB0aGlzLnN0YXRlLmZlZWRQcmljZSxcclxuICAgICAgICAgICAgY2VyOiB0aGlzLnN0YXRlLmNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnJlc2V0U3RhdGUoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldFJhdGlvKGtleSwge2Ftb3VudH0pIHtcclxuICAgICAgICAvKiBFbmZvcmNlIG9uZSBkZWNpbWFsIHBvaW50IG1heGltdW0gKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhYW1vdW50ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgYW1vdW50LmluZGV4T2YoXCIuXCIpICE9PSAtMSAmJlxyXG4gICAgICAgICAgICBhbW91bnQuaW5kZXhPZihcIi5cIikgKyA0ICE9PSBhbW91bnQubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFtb3VudCA9IGFtb3VudC5zdWJzdHIoMCwgYW1vdW50LmluZGV4T2YoXCIuXCIpICsgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5ICsgXCJWYWx1ZVwiXTogYW1vdW50LFxyXG4gICAgICAgICAgICBba2V5XTogTWF0aC5mbG9vcihwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bWNyVmFsdWUsIG1zc3JWYWx1ZSwgcHVibGlzaGVyfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICBjb25zdCBxdW90ZSA9IGFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZWRfcHJvZHVjZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtwdWJsaXNoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50TmFtZUNoYW5nZWQuYmluZCh0aGlzLCBcInB1Ymxpc2hlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uQWNjb3VudENoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaXNoZXJfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17cHVibGlzaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENvcmUgRXhjaGFuZ2UgUmF0ZSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlZD17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMsIFwiY2VyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY29yZV9leGNoYW5nZV9yYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17XCIxLjMuMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTZXR0bGVtZW50IFByaWNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2VkPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQodGhpcywgXCJmZWVkUHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTUNSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttY3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtY3JcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNU1NSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e21zc3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtc3NyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X3B1Ymxpc2hfZmVlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0YXRlKHRoaXMucHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRQdWJsaXNoRmVlZCA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbkFzc2V0UHVibGlzaEZlZWQgPSBBc3NldFdyYXBwZXIoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0UHVibGlzaEZlZWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcblxuY2xhc3MgUHJpY2VJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcXVvdGUgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLnF1b3RlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5xdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBiYXNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5iYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBwcmljZS50b1JlYWwoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUHJpY2VDaGFuZ2VkKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJpY2Uuc2V0UHJpY2VGcm9tUmVhbChwYXJzZUZsb2F0KGFtb3VudCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBhbW91bnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QcmljZUNoYW5nZWQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKHRoaXMuc3RhdGUucHJpY2UuY2xvbmUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cmVhbFByaWNlVmFsdWUsIHByaWNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVhbFByaWNlVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBhc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICBpc1ByaWNlXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtbcHJpY2UucXVvdGUuYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblByaWNlSW5wdXQgPSBBc3NldFdyYXBwZXIoUHJpY2VJbnB1dCwge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBiYXNlOiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1JhZGlvLCBUb29sdGlwLCBCdXR0b24sIEZvcm19IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge0Fzc2V0LCBQcmljZX0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9hc3NldF91dGlsc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRSZXNvbHZlUHJlZGljdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXN0b21QcmljZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5hc3NldC5pZCAhPT0gdGhpcy5wcm9wcy5hc3NldC5pZCB8fFxyXG4gICAgICAgICAgICBucy5nbG9iYWxTZXR0bGVtZW50UHJpY2UgIT09IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5zLmN1c3RvbVByaWNlICE9PSB0aGlzLnN0YXRlLmN1c3RvbVByaWNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAyICYmICF0aGlzLnN0YXRlLmN1c3RvbVByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiAxLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUHJpY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxTZXR0bGVtZW50UHJpY2U6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZE9iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25QcmljZUNoYW5nZWQodmFsdWUudG9SZWFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgYmFzZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IDEsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmlkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQucHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHF1b3RlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxyXG4gICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBxdW90ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogcXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHByaWNlID0gbmV3IFByaWNlKHtcclxuICAgICAgICAgICAgcXVvdGUsXHJcbiAgICAgICAgICAgIGJhc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmFzc2V0R2xvYmFsU2V0dGxlKGFzc2V0LCBhY2NvdW50LmdldChcImlkXCIpLCBwcmljZSkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGdsb2JhbFNldHRsZW1lbnRQcmljZTogbnVsbCxcclxuICAgICAgICAgICAgY3VzdG9tUHJpY2U6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2Uoe2Ftb3VudH0pIHtcclxuICAgICAgICB0aGlzLm9uUHJpY2VDaGFuZ2VkKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VSYWRpbyhlKSB7XHJcbiAgICAgICAgdGhpcy5vblByaWNlQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxyXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e1widG9wTGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIjogXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb24uY29uZGl0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17XCJ0b3BMZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnJlc29sdXRpb25fZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCI6IFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9uLmV4cGlyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VSYWRpby5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLnRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLmZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuY3VzdG9tUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuY3VzdG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXN0b21QcmljZSA/IHVuZGVmaW5lZCA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYXNlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYmFzZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNldHRsZW1lbnRQcmljZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucHVibGlzaF9wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24pO1xyXG5leHBvcnQgZGVmYXVsdCBBc3NldFJlc29sdmVQcmVkaWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmNsYXNzIEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSA9ICgpID0+ICh7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUpLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IFwiMFwiLFxyXG4gICAgICAgIGRlYnRBbW91bnQ6IFwiMFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb2xsYXRlcmFsQmlkSW5wdXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudDogdmFsdWUuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlYnRCaWRJbnB1dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWJ0QW1vdW50OiB2YWx1ZS5hbW91bnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25CaWRDb2xsYXRlcmFsKCkge1xyXG4gICAgICAgIGxldCB7Y29sbGF0ZXJhbEFtb3VudCwgZGVidEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb2xsYXRlcmFsQW1vdW50ID1cclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/IGNvbGxhdGVyYWxBbW91bnRcclxuICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG4gICAgICAgIGRlYnRBbW91bnQgPVxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50ID09IDAgPyBkZWJ0QW1vdW50IDogZGVidEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsQW1vdW50LFxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJpZCgpIHtcclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbGxhdGVyYWxCaWQoKSB7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2FjY291bnQsIGNvbGxhdGVyYWxBbW91bnQsIGRlYnRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IDA7XHJcbiAgICAgICAgY29uc3QgYmFja2luZ0JhbGFuY2VJRCA9IGFjY291bnRcclxuICAgICAgICAgICAgPyBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmUuZ2V0KFwiaWRcIildKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKGJhY2tpbmdCYWxhbmNlSUQpIHtcclxuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWNraW5nQmFsYW5jZUlEKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y29sbGF0ZXJhbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY29sbGF0ZXJhbEJpZElucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbY29yZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkZWJ0QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9kZWJ0QmlkSW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYXNzZXQuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQW1vdW50ICE9PSBcIjBcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVidEFtb3VudCAhPT0gXCIwXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXt0aGlzLnN0YXRlLmRlYnRBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVQcmljZUZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQmlkQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmJpZF9jb2xsYXRlcmFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5CaWRDb2xsYXRlcmFsT3BlcmF0aW9uID0gQXNzZXRXcmFwcGVyKEJpZENvbGxhdGVyYWxPcGVyYXRpb24sIHtcclxuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxyXG4gICAgd2l0aER5bmFtaWM6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQWZBO0FBQ0E7QUFpQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBRkE7QUFhQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQU9BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBR0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFUQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVEE7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBS0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUFBO0FBQUE7QUFDQTtBQXlDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFUQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFqQkE7QUE0QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFEQTtBQVZBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBVkE7QUFyQkE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQUNBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBO0FBREE7QUE0Q0E7QUFDQTtBQWpEQTtBQW9EQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFKQTtBQURBO0FBZ0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUdBO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBUUE7QUFSQTtBQVBBO0FBQUE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQURBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBdkRBO0FBeUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUEE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQXZGQTtBQTlFQTtBQTdCQTtBQTBOQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSEE7QUFGQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQUpBO0FBeEJBO0FBSkE7QUFSQTtBQWZBO0FBcUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBaUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQW5CQTtBQTRCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFVQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBU0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXJDQTtBQUNBO0FBaURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFuQkE7QUFMQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQVRBO0FBQUE7QUFGQTtBQUFBO0FBZ0JBO0FBOUNBO0FBaURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQWFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQU5BO0FBb0JBO0FBdENBO0FBeUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQU5BO0FBb0JBO0FBckNBO0FBeUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVRBO0FBZ0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBWkE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQWRBO0FBaUJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQWpCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVJBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQVJBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQWxCQTtBQThCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUlBO0FBYkE7QUFEQTtBQVBBO0FBNkJBO0FBbkNBO0FBcUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBVkE7QUFOQTtBQTFDQTtBQVJBO0FBREE7QUFEQTtBQWdGQTs7OztBQTdrRUE7QUFDQTtBQStrRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7QUFDQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbHNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUFBO0FBQ0E7QUFqQkE7QUEyQkE7QUFDQTtBQUNBO0FBN0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFmQTtBQUFBO0FBQ0E7QUEvQkE7QUE4REE7QUFBQTtBQUNBO0FBN0RBO0FBRkE7QUFHQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7OztBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBVkE7QUFZQTtBQVpBO0FBY0E7QUFkQTtBQUNBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQXJDQTtBQW9EQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFGQTtBQU9BO0FBWkE7QUFjQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBQ0E7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFqQkE7QUFnQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBT0E7QUFaQTtBQWNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBRkE7QUFoQkE7QUFDQTtBQXNCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUE3QkE7QUErQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXBWQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQW9WQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBNUJBO0FBOENBOzs7O0FBN0ZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUE2RkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQURBO0FBM0RBO0FBZ0ZBOzs7O0FBMUtBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBMEtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBdUJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFnQkE7Ozs7QUF4REE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFQQTtBQWhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFaQTtBQXZFQTtBQURBO0FBOEZBOzs7O0FBN0xBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBNkxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBSkE7QUFIQTtBQUlBO0FBQ0E7OztBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVBBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVJBO0FBNUNBO0FBOERBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUEzSkE7QUFDQTtBQTZKQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==