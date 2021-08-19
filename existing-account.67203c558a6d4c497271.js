(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[37],{

/***/ 3250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAccountOptions", function() { return ExistingAccountOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1836);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1854);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1952);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3251);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3254);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3259);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2632);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(576);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var connectObject = {
    listenTo: function listenTo() {
        return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        var wallet = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState();
        return { wallet: wallet };
    }
};

var ExistingAccount = function (_Component) {
    _inherits(ExistingAccount, _Component);

    function ExistingAccount() {
        _classCallCheck(this, ExistingAccount);

        return _possibleConstructorReturn(this, (ExistingAccount.__proto__ || Object.getPrototypeOf(ExistingAccount)).apply(this, arguments));
    }

    _createClass(ExistingAccount, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "page-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h1",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    content: "account.welcome",
                                    wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                                })
                            ),
                            !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet_backup" })
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.setup_wallet" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_8__["BackupRestore"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-backup",
                                    component: ExistingAccountOptions
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-keys",
                                    component: _ImportKeys__WEBPACK_IMPORTED_MODULE_7__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/brainkey",
                                    component: _Brainkey__WEBPACK_IMPORTED_MODULE_6__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/balance-claim",
                                    component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"]
                                })
                            ),
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return ExistingAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccount = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccount, connectObject);

var ExistingAccountOptions = function (_Component2) {
    _inherits(ExistingAccountOptions, _Component2);

    function ExistingAccountOptions() {
        _classCallCheck(this, ExistingAccountOptions);

        return _possibleConstructorReturn(this, (ExistingAccountOptions.__proto__ || Object.getPrototypeOf(ExistingAccountOptions)).apply(this, arguments));
    }

    _createClass(ExistingAccountOptions, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-backup" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            content: "wallet.import_backup",
                            wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.import_bts1" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                ) : null,
                !has_wallet ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "dashboard" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                component: "span",
                                content: "header.dashboard"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "wallet" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "settings.wallets" })
                        )
                    )
                ) : null
            );
        }
    }]);

    return ExistingAccountOptions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccountOptions = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccountOptions, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (ExistingAccount);


/***/ }),

/***/ 3251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1957);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(710);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1833);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1953);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1954);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3252);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1832);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3253);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var BalanceClaimActive = function (_Component) {
    _inherits(BalanceClaimActive, _Component);

    function BalanceClaimActive() {
        _classCallCheck(this, BalanceClaimActive);

        return _possibleConstructorReturn(this, (BalanceClaimActive.__proto__ || Object.getPrototypeOf(BalanceClaimActive)).apply(this, arguments));
    }

    _createClass(BalanceClaimActive, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            this.existing_keys = keySeq;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            if (!keySeq.equals(this.existing_keys)) {
                this.existing_keys = keySeq;
                actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account_refs.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            if (this.props.loading) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.loading_balances" }),
                        "\u2026"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "three-bounce" })
                );
            }

            if (!this.props.balances || !this.props.balances.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            var import_ready = this.props.selected_balances.size && this.props.claim_account_name;
            var claim_balance_label = import_ready ? " (" + this.props.claim_account_name + ")" : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block center-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        { className: "no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balances" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content",
                            style: { overflowY: "hidden !important" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "full-width-content center-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                key: this.props.balances,
                                accounts: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(this.props.account_refs),
                                onChange: this.onClaimAccountChange.bind(this)
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__["default"], null)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button success", {
                            disabled: !import_ready
                        }),
                        onClick: this.onClaimBalance.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balance" }),
                    claim_balance_label
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "button cancel", onClick: this.onBack.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.cancel" })
                )
            );
        }
    }, {
        key: "onBack",
        value: function onBack(e) {
            e.preventDefault();
            window.history.back();
        }
    }, {
        key: "onClaimAccountChange",
        value: function onClaimAccountChange(claim_account_name) {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].claimAccountChange(claim_account_name);
        }
    }, {
        key: "onClaimBalance",
        value: function onClaimBalance() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__["default"].importBalance(this.props.claim_account_name, this.props.selected_balances, true //broadcast
            ).catch(function (error) {
                console.error("claimBalance", error);
                var message = error;
                try {
                    message = error.data.message;
                } catch (e) {}
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("notifications.balance_claim_error", {
                        error_msg: message
                    })
                });

                throw error;
            });
        }
    }]);

    return BalanceClaimActive;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimActive = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimActive, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState();
        props.account_refs = stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAccountRefs();
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimActive);

/***/ }),

/***/ 3252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(710);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1953);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1954);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2117);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var BalanceClaimSelector = function (_Component) {
    _inherits(BalanceClaimSelector, _Component);

    function BalanceClaimSelector() {
        _classCallCheck(this, BalanceClaimSelector);

        return _possibleConstructorReturn(this, (BalanceClaimSelector.__proto__ || Object.getPrototypeOf(BalanceClaimSelector)).apply(this, arguments));
    }

    _createClass(BalanceClaimSelector, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.claim_account_name) this.onClaimAccount(nextProps.claim_account_name, nextProps.checked);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.balances === undefined || !this.props.total_by_account_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            var index = -1;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
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
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed_vesting" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.name" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props.total_by_account_asset.map(function (r, name_asset) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: ++index },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: !!_this2.props.checked.get(index),
                                        onChange: _this2.onCheckbox.bind(_this2, index, r.balances)
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        color: "info",
                                        amount: r.unclaimed,
                                        asset: name_asset.get(1)
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.vesting.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.unclaimed,
                                            hide_asset: true,
                                            asset: name_asset.get(1)
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " of "
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.total,
                                            asset: name_asset.get(1)
                                        })
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    " ",
                                    name_asset.get(0),
                                    " "
                                )
                            );
                        }).toArray()
                    )
                )
            );
        }
    }, {
        key: "onCheckbox",
        value: function onCheckbox(index, balances) {
            var checked = this.props.checked;
            if (checked.get(index)) {
                checked = checked.delete(index);
            } else {
                checked = checked.set(index, balances);
            }

            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }, {
        key: "onClaimAccount",
        value: function onClaimAccount(claim_account_name, checked) {
            // A U T O  S E L E C T  A C C O U N T S
            // only if nothing is selected (play it safe)
            if (checked.size) return;
            var index = -1;
            this.props.total_by_account_asset.forEach(function (v, k) {
                index++;
                var name = k.get(0);
                if (name === claim_account_name) {
                    if (v.unclaimed || v.vesting.unclaimed) checked = checked.set(index, v.balances);
                }
            });
            if (checked.size) actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }]);

    return BalanceClaimSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimSelector = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimSelector, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
        var balances = props.balances,
            address_to_pubkey = props.address_to_pubkey;

        var private_keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().keys;
        var groupCountMap = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map().asMutable();
        var groupCount = function groupCount(group, distinct) {
            var set = groupCountMap.get(group);
            if (!set) {
                set = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set().asMutable();
                groupCountMap.set(group, set);
            }
            set.add(distinct);
            return set.size;
        };
        if (balances) props.total_by_account_asset = balances.groupBy(function (v) {
            // K E Y S
            var names = "";
            var pubkey = address_to_pubkey.get(v.owner);
            var private_key_object = private_keys.get(pubkey);
            // Imported Account Names (just a visual aid, helps to auto select a real account)
            if (private_key_object && private_key_object.import_account_names) names = private_key_object.import_account_names.join(", ");

            // Signing is very slow, further divide the groups based on the number of signatures required
            var batch_number = Math.ceil(groupCount(immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id]), v.owner) / 60);
            var name_asset_key = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id, batch_number]);
            return name_asset_key;
        }).map(function (l) {
            return l.reduce(function (r, v) {
                // V A L U E S
                v.public_key_string = address_to_pubkey.get(v.owner);
                r.balances = r.balances.add(v);
                if (v.vested_balance != undefined) {
                    r.vesting.unclaimed += Number(v.vested_balance.amount);
                    r.vesting.total += Number(v.balance.amount);
                } else {
                    r.unclaimed += Number(v.balance.amount);
                }
                return r;
            }, {
                unclaimed: 0,
                vesting: { unclaimed: 0, total: 0 },
                balances: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set()
            });
        }).sortBy(function (k) {
            return k;
        });
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimSelector);

/***/ }),

/***/ 3253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1973);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2529);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyAccounts = function (_Component) {
    _inherits(MyAccounts, _Component);

    function MyAccounts() {
        _classCallCheck(this, MyAccounts);

        return _possibleConstructorReturn(this, (MyAccounts.__proto__ || Object.getPrototypeOf(MyAccounts)).apply(this, arguments));
    }

    _createClass(MyAccounts, [{
        key: "render",
        value: function render() {
            var account_names = this.props.accounts.filter(function (account) {
                return !!account;
            }).filter(function (account) {
                return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].isMyAccount(account);
            }).map(function (account) {
                return account.get("name");
            }).sort();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onChange: this.onAccountSelect.bind(this),
                    account_names: account_names,
                    center: true
                })
            );
        }
    }, {
        key: "onAccountSelect",
        value: function onAccountSelect(account_name) {
            this.props.onChange(account_name);
        }
    }]);

    return MyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MyAccounts));

/***/ }),

/***/ 3254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainkeyInputAccept", function() { return BrainkeyInputAccept; });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2012);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1854);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3255);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3256);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1974);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1973);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3257);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3258);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var connectObject = {
    listenTo: function listenTo() {
        return [stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc")];
    },
    getProps: function getProps() {
        return stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc").getState();
    }
};

var Brainkey = function (_Component) {
    _inherits(Brainkey, _Component);

    function Brainkey() {
        _classCallCheck(this, Brainkey);

        return _possibleConstructorReturn(this, (Brainkey.__proto__ || Object.getPrototypeOf(Brainkey)).apply(this, arguments));
    }

    _createClass(Brainkey, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].closeInstance("wmc");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h3",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.brainkey" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    BrainkeyInputAccept,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewBrainkey, null)
                )
            );
        }
    }]);

    return Brainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Brainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(Brainkey, connectObject);
/* harmony default export */ __webpack_exports__["default"] = (Brainkey);

var ViewBrainkey = function (_Component2) {
    _inherits(ViewBrainkey, _Component2);

    function ViewBrainkey() {
        _classCallCheck(this, ViewBrainkey);

        return _possibleConstructorReturn(this, (ViewBrainkey.__proto__ || Object.getPrototypeOf(ViewBrainkey)).apply(this, arguments));
    }

    _createClass(ViewBrainkey, [{
        key: "render",
        value: function render() {
            var short_brnkey = this.props.brnkey.substring(0, 10);
            // console.log("this.props.account_ids.toArray()", this.props.account_ids.toArray())
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "" },
                        short_brnkey
                    ),
                    "\u2026"
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
                this.props.account_ids.size ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BrainkeyAccounts, {
                    accounts: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(this.props.account_ids.toArray())
                }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.no_accounts" })
                )
            );
        }
    }]);

    return ViewBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ViewBrainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ViewBrainkey, connectObject);

var BrainkeyAccounts = function (_React$Component) {
    _inherits(BrainkeyAccounts, _React$Component);

    function BrainkeyAccounts() {
        _classCallCheck(this, BrainkeyAccounts);

        return _possibleConstructorReturn(this, (BrainkeyAccounts.__proto__ || Object.getPrototypeOf(BrainkeyAccounts)).apply(this, arguments));
    }

    _createClass(BrainkeyAccounts, [{
        key: "render",
        value: function render() {
            var rows = Object(lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.accounts).filter(function (account) {
                return !!account[1];
            }).map(function (account) {
                return account[1].get("name");
            }).sort().map(function (name) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__["default"], { key: name, account: name });
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                rows
            );
        }
    }]);

    return BrainkeyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BrainkeyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccountsList.isRequired
};

BrainkeyAccounts = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(BrainkeyAccounts);

var BrainkeyInputAccept = function (_Component3) {
    _inherits(BrainkeyInputAccept, _Component3);

    function BrainkeyInputAccept() {
        _classCallCheck(this, BrainkeyInputAccept);

        var _this4 = _possibleConstructorReturn(this, (BrainkeyInputAccept.__proto__ || Object.getPrototypeOf(BrainkeyInputAccept)).call(this));

        _this4.state = { brnkey: "", accept: false };
        return _this4;
    }

    _createClass(BrainkeyInputAccept, [{
        key: "render",
        value: function render() {
            if (this.state.accept) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                this.props.children
            );

            var ready = this.state.brnkey && this.state.brnkey !== "";
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        onChange: this.onBrainkeyChange.bind(this)
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button success", { disabled: !ready }),
                        onClick: this.onAccept.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.accept" })
                )
            );
        }
    }, {
        key: "onBrainkeyChange",
        value: function onBrainkeyChange(brnkey) {
            this.setState({ brnkey: brnkey });
        }
    }, {
        key: "onAccept",
        value: function onAccept() {
            this.setState({ accept: true });
            actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__["default"].setBrainkey(this.state.brnkey);
        }
    }]);

    return BrainkeyInputAccept;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

// <div onClick={this.onLookupAccounts.bind(this)} className="button success">Lookup Accounts</div>
// onLookupAccounts() {
//
// }

/***/ }),

/***/ 3255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BrainkeyActions = function () {
    function BrainkeyActions() {
        _classCallCheck(this, BrainkeyActions);
    }

    _createClass(BrainkeyActions, [{
        key: "setBrainkey",
        value: function setBrainkey(brnkey) {
            return brnkey;
        }
    }]);

    return BrainkeyActions;
}();

var BrainkeyActionsWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(BrainkeyActions);
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyActionsWrapped);

/***/ }),

/***/ 3256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(410);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(545);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3255);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







/** Each instance supports a single brainkey. */

var BrainkeyStoreFactory = function () {
    function BrainkeyStoreFactory() {
        _classCallCheck(this, BrainkeyStoreFactory);
    }

    _createClass(BrainkeyStoreFactory, null, [{
        key: "getInstance",

        /** This may be called multiple times for the same <b>name</b>.  When done,
            (componentWillUnmount) make sure to call this.closeInstance()
        */
        value: function getInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) {
                instance = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(BrainkeyStoreImpl, "BrainkeyStore");
                BrainkeyStoreFactory.instances.set(name, instance);
            }
            var subscribed_instance_key = name + " subscribed_instance";
            if (!BrainkeyStoreFactory.instances.get(subscribed_instance_key)) {
                var subscribed_instance = instance.chainStoreUpdate.bind(instance);
                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(subscribed_instance);
                BrainkeyStoreFactory.instances.set(subscribed_instance_key, subscribed_instance);
            }
            return instance;
        }
    }, {
        key: "closeInstance",
        value: function closeInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) throw new Error("unknown instance " + name);
            var subscribed_instance_key = name + " subscribed_instance";
            var subscribed_instance = BrainkeyStoreFactory.instances.get(subscribed_instance_key);
            BrainkeyStoreFactory.instances.delete(subscribed_instance_key);
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(subscribed_instance);
            instance.clearCache();
        }
    }]);

    return BrainkeyStoreFactory;
}();

/** Derived keys may be unassigned from accounts therefore we must define a
    fixed block of derivied keys then monitor the entire block.
*/


BrainkeyStoreFactory.instances = new Map();
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyStoreFactory);
var DERIVIED_BRAINKEY_POOL_SIZE = 10;

var BrainkeyStoreImpl = function (_BaseStore) {
    _inherits(BrainkeyStoreImpl, _BaseStore);

    function BrainkeyStoreImpl() {
        _classCallCheck(this, BrainkeyStoreImpl);

        var _this = _possibleConstructorReturn(this, (BrainkeyStoreImpl.__proto__ || Object.getPrototypeOf(BrainkeyStoreImpl)).call(this));

        _this.clearCache();
        _this.bindListeners({
            onSetBrainkey: actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__["default"].setBrainkey
        });
        _this._export("inSync", "chainStoreUpdate", "clearCache");
        return _this;
    }

    // chainStoreUnsubscribe() {
    //     try{
    //         ChainStore.unsubscribe(this.chainStoreUpdate)
    //     }catch(e1) {console.log("unsub 1 fail");
    //         try{
    //             ChainStore.unsubscribe(this.chainStoreUpdate.bind(this))
    //         }catch(e2) {console.log("unsub 1 fail")}
    //     }
    // }

    _createClass(BrainkeyStoreImpl, [{
        key: "clearCache",
        value: function clearCache() {
            this.state = {
                brnkey: "",
                account_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set()
            };
            this.derived_keys = new Array();
            // Compared with ChainStore.account_ids_by_key
            this.account_ids_by_key = null;
        }

        /** Saves the brainkey and begins the lookup for derived account referneces */

    }, {
        key: "onSetBrainkey",
        value: function onSetBrainkey(brnkey) {
            this.clearCache();
            this.setState({ brnkey: brnkey });
            this.deriveKeys(brnkey);
            this.chainStoreUpdate();
        }

        /** @return <b>true</b> when all derivied account references are either
            found or known not to exist.
        */

    }, {
        key: "inSync",
        value: function inSync() {
            this.derived_keys.forEach(function (derived_key) {
                if (isPendingFromChain(derived_key)) return false;
            });
            return true;
        }
    }, {
        key: "chainStoreUpdate",
        value: function chainStoreUpdate() {
            if (!this.derived_keys.length) return;
            if (this.account_ids_by_key === bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key) return;
            this.account_ids_by_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key;
            this.updateAccountIds();
        }
    }, {
        key: "deriveKeys",
        value: function deriveKeys() {
            var brnkey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.brnkey;

            var sequence = this.derived_keys.length; // next sequence (starting with 0)
            var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["key"].get_brainPrivateKey(brnkey, sequence);
            var derived_key = derivedKeyStruct(private_key);
            this.derived_keys.push(derived_key);
            if (this.derived_keys.length < DERIVIED_BRAINKEY_POOL_SIZE) this.deriveKeys(brnkey);
        }
    }, {
        key: "updateAccountIds",
        value: function updateAccountIds() {
            var _this2 = this;

            var new_account_ids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set().withMutations(function (new_ids) {
                var updatePubkey = function updatePubkey(public_string) {
                    var chain_account_ids = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(public_string);
                    if (chain_account_ids) chain_account_ids.forEach(function (chain_account_id) {
                        new_ids.add(chain_account_id);
                    });
                };
                _this2.derived_keys.forEach(function (derived_key) {
                    return updatePubkey(derived_key.public_string);
                });
            });
            if (!new_account_ids.equals(this.state.account_ids)) {
                this.state.account_ids = new_account_ids;
                this.setState({ account_ids: new_account_ids });
            }
        }
    }]);

    return BrainkeyStoreImpl;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__["default"]);

function derivedKeyStruct(private_key) {
    var public_string = private_key.toPublicKey().toPublicKeyString();
    var derived_key = { private_key: private_key, public_string: public_string };
    return derived_key;
}

var isPendingFromChain = function isPendingFromChain(derived_key) {
    return bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(derived_key.public_string) === undefined;
};

/***/ }),

/***/ 3257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(824);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var dictionary_set;

if (false) {}

var BrainkeyInput = function (_Component) {
    _inherits(BrainkeyInput, _Component);

    function BrainkeyInput() {
        _classCallCheck(this, BrainkeyInput);

        var _this = _possibleConstructorReturn(this, (BrainkeyInput.__proto__ || Object.getPrototypeOf(BrainkeyInput)).call(this));

        _this.state = {
            brnkey: "",
            loading: true
        };
        return _this;
    }

    _createClass(BrainkeyInput, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            if (true) {
                fetch("" + "dictionary.json").then(function (reply) {
                    return reply.json().then(function (result) {
                        dictionary_set = new Set(result.en.split(","));
                        _this2.setState({
                            loading: false
                        });
                    });
                }).catch(function (err) {
                    console.log("fetch dictionary error:", err);
                });
            } else {}
        }
    }, {
        key: "_checkBrainKey",
        value: function _checkBrainKey() {
            var spellcheck_words = this.state.brnkey.split(" ");
            var checked_words = [];
            spellcheck_words.forEach(function (word, i) {
                if (word === "") return;
                var spellcheckword = word.toLowerCase();
                spellcheckword = spellcheckword.match(/[a-z]+/); //just spellcheck letters
                if (spellcheckword === null || dictionary_set.has(spellcheckword[0])) checked_words.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: i, style: { padding: "1px", margin: "1px" } },
                    word
                ));else checked_words.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    MisspelledWord,
                    { key: i },
                    word
                ));
            });
            // this.ready = checked_words.length > 0
            var word_count_label = void 0;
            var warn = true;
            var valid = true;
            if (checked_words.length > 0) {
                if (this.state.brnkey.length < 50) {
                    word_count_label = this.state.brnkey.length + " characters (50 minimum)";
                    valid = false;
                } else {
                    if (checked_words.length < 16) word_count_label = checked_words.length + " words (16 recommended)";else {
                        word_count_label = checked_words.length + " words";
                        warn = false;
                    }
                }
            }

            return { warn: warn, valid: valid, word_count_label: word_count_label, checked_words: checked_words };
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading || !dictionary_set) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: 20 } },
                    "Fetching dictionary...."
                );
            }

            var _checkBrainKey2 = this._checkBrainKey(),
                warn = _checkBrainKey2.warn,
                word_count_label = _checkBrainKey2.word_count_label,
                checked_words = _checkBrainKey2.checked_words;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                        tabIndex: this.props.tabIndex || 1,
                        onChange: this.formChange.bind(this),
                        value: this.state.brnkey,
                        id: "brnkey",
                        style: { height: 100, minWidth: 450 }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: { textAlign: "left" },
                            className: "grid-content no-padding no-overflow"
                        },
                        checked_words
                    ),
                    this.state.check_digits && !this.props.hideCheckDigits ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "pre",
                            { className: "no-overflow" },
                            this.state.check_digits,
                            " * Check Digits"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "i",
                            { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({ error: warn }) },
                            word_count_label
                        )
                    )
                )
            );
        }
    }, {
        key: "formChange",
        value: function formChange(event) {
            var _event$target = event.target,
                id = _event$target.id,
                value = _event$target.value;

            var _checkBrainKey3 = this._checkBrainKey(),
                valid = _checkBrainKey3.valid;

            var state = {};
            state[id] = value;
            if (id === "brnkey") {
                var brnkey = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["key"].normalize_brainKey(value);
                this.props.onChange(brnkey.length < 50 ? null : brnkey);
                state.check_digits = brnkey.length < 50 ? null : bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha1(brnkey).toString("hex").substring(0, 4);
            }
            this.setState(state);

            if (this.props.errorCallback) {
                this.props.errorCallback(valid);
            }
        }
    }]);

    return BrainkeyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BrainkeyInput.propTypes = {
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyInput);

var MisspelledWord = function (_Component2) {
    _inherits(MisspelledWord, _Component2);

    function MisspelledWord() {
        _classCallCheck(this, MisspelledWord);

        return _possibleConstructorReturn(this, (MisspelledWord.__proto__ || Object.getPrototypeOf(MisspelledWord)).apply(this, arguments));
    }

    _createClass(MisspelledWord, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    style: {
                        borderBottom: "1px dotted #ff0000",
                        padding: "1px",
                        margin: "1px"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { borderBottom: "1px dotted #ff0000" } },
                    this.props.children
                )
            );
        }
    }]);

    return MisspelledWord;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ 3258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2116);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2111);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1973);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(544);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(410);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1836);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 *  @brief displays the summary of a given account in a condenced view (for the dashboard)
 *
 *  This card has the following properties:
 *
 *  { account: ${name_or_id} }
 */

var AccountCard = function (_React$Component) {
    _inherits(AccountCard, _React$Component);

    function AccountCard() {
        _classCallCheck(this, AccountCard);

        return _possibleConstructorReturn(this, (AccountCard.__proto__ || Object.getPrototypeOf(AccountCard)).apply(this, arguments));
    }

    _createClass(AccountCard, [{
        key: "onCardClick",
        value: function onCardClick(e) {
            e.preventDefault();
            var name = this.props.account.get("name");
            this.props.history.push("/account/" + name);
        }
    }, {
        key: "render",
        value: function render() {
            var name = null;
            var balances = null;
            var isMyAccount = false;
            if (this.props.account) {
                name = this.props.account.get("name");
                var abal = this.props.account.get("balances");
                if (abal) {
                    balances = abal.map(function (x) {
                        var balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(x);
                        if (!balanceAmount.get("balance")) {
                            return null;
                        }
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { key: x },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__["default"], { balance: x })
                        );
                    }).toArray();
                }
                isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].isMyAccount(this.props.account);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this.onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" + (isMyAccount ? " my-account" : "") },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        name
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-content clearfix" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                account: name,
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "balances" },
                            balances
                        )
                    )
                )
            );
        }
    }]);

    return AccountCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountCard.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

AccountCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountCard);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(AccountCard));

/***/ }),

/***/ 3259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var api_accountApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(480);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(710);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(595);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2652);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1957);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(578);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3251);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1954);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3260);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(596);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3261);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(728);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3262);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


























__webpack_require__(3264);

var import_keys_assert_checking = false;

var KeyCount = function KeyCount(_ref) {
    var key_count = _ref.key_count;

    if (!key_count) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "span",
        null,
        "Found ",
        key_count,
        " private keys"
    );
};

var WIF_KEY_LENGTH = 51;

var ImportKeys = function (_Component) {
    _inherits(ImportKeys, _Component);

    function ImportKeys() {
        _classCallCheck(this, ImportKeys);

        var _this = _possibleConstructorReturn(this, (ImportKeys.__proto__ || Object.getPrototypeOf(ImportKeys)).call(this));

        _this.state = _this._getInitialState();

        _this._renderBalanceClaims = _this._renderBalanceClaims.bind(_this);
        return _this;
    }

    _createClass(ImportKeys, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            var keep_file_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return {
                keys_to_account: {},
                no_file: true,
                account_keys: [],
                //brainkey: null,
                //encrypted_brainkey: null,
                reset_file_name: keep_file_name ? this.state.reset_file_name : Date.now(),
                reset_password: Date.now(),
                password_checksum: null,
                import_file_message: null,
                import_password_message: null,
                imported_keys_public: {},
                key_text_message: null,
                associatedAccount: null,
                errorTextMessage: null,
                genesis_filtering: false,
                genesis_filter_status: [],
                genesis_filter_finished: undefined,
                importSuccess: false
            };
        }
    }, {
        key: "reset",
        value: function reset(e, keep_file_name) {
            var _this2 = this;

            if (e) e.preventDefault();
            var state = this._getInitialState(keep_file_name);
            this.setState(state, function () {
                return _this2.updateOnChange();
            });
        }
    }, {
        key: "onWif",
        value: function onWif(event) {
            event.preventDefault();
            var value = this.refs.wifInput.state.value;
            this.addByPattern(value);
        }
    }, {
        key: "onCancel",
        value: function onCancel(e) {
            if (e) e.preventDefault();
            this.setState(this._getInitialState());
        }
    }, {
        key: "updateOnChange",
        value: function updateOnChange() {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__["default"].setPubkeys(Object.keys(this.state.imported_keys_public));
        }
    }, {
        key: "getImportAccountKeyCount",
        value: function getImportAccountKeyCount(keys_to_account) {
            var account_keycount = {};
            var found = false;
            for (var key in keys_to_account) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = keys_to_account[key].account_names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var account_name = _step.value;

                        account_keycount[account_name] = (account_keycount[account_name] || 0) + 1;
                        found = true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }return found ? account_keycount : null;
        }
    }, {
        key: "upload",
        value: function upload(evt) {
            var _this3 = this;

            this.reset(null, true);
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;
                try {
                    var json_contents = void 0;
                    try {
                        json_contents = JSON.parse(contents);
                        // This is the only chance to encounter a large file,
                        // try this format first.
                        _this3._parseImportKeyUpload(json_contents, file.name, function (update_state) {
                            // console.log("update_state", update_state)
                            _this3.setState(update_state, function () {
                                if (update_state.genesis_filter_finished) {
                                    // try empty password, also display "Enter import file password"
                                    _this3._passwordCheck();
                                }
                            });
                        });
                    } catch (e) {
                        //DEBUG console.log("... _parseImportKeyUpload",e)
                        try {
                            if (!json_contents) file.name + " is an unrecognized format";
                            _this3._parseWalletJson(json_contents);
                        } catch (ee) {
                            if (!_this3.addByPattern(contents)) throw ee;
                        }
                        // try empty password, also display "Enter import file password"
                        _this3._passwordCheck();
                    }
                } catch (message) {
                    console.error("... ImportKeys upload error", message);
                    _this3.setState({ import_file_message: message });
                }
            };
            reader.readAsText(file);
        }

        /** BTS 1.0 client wallet_export_keys format. */

    }, {
        key: "_parseImportKeyUpload",
        value: function _parseImportKeyUpload(json_contents, file_name, update_state) {
            var _this4 = this;

            var password_checksum = void 0,
                unfiltered_account_keys = void 0;
            try {
                password_checksum = json_contents.password_checksum;
                if (!password_checksum) throw file_name + " is an unrecognized format";

                if (!Array.isArray(json_contents.account_keys)) throw file_name + " is an unrecognized format";

                unfiltered_account_keys = json_contents.account_keys;
            } catch (e) {
                throw e.message || e;
            }

            // BTS 1.0 wallets may have a lot of generated but unused keys or spent TITAN addresses making
            // wallets so large it is was not possible to use the JavaScript wallets with them.

            var genesis_filter = new chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__["default"]();
            if (!genesis_filter.isAvailable()) {
                update_state({
                    password_checksum: password_checksum,
                    account_keys: unfiltered_account_keys,
                    genesis_filter_finished: true,
                    genesis_filtering: false
                });
                return;
            }
            this.setState({ genesis_filter_initalizing: true }, function () {
                return (
                    // setTimeout(()=>
                    genesis_filter.init(function () {
                        var filter_status = _this4.state.genesis_filter_status;

                        // FF < version 41 does not support worker threads internals (like blob urls)
                        // let GenesisFilterWorker = require("worker-loader!workers/GenesisFilterWorker")
                        // let worker = new GenesisFilterWorker
                        // worker.postMessage({
                        //     account_keys: unfiltered_account_keys,
                        //     bloom_filter: genesis_filter.bloom_filter
                        // })
                        // worker.onmessage = event => { try {
                        //     let { status, account_keys } = event.data
                        //     // ...
                        // } catch( e ) { console.error('GenesisFilterWorker', e) }}

                        var account_keys = unfiltered_account_keys;
                        genesis_filter.filter(account_keys, function (status) {
                            //console.log("import filter", status)
                            if (status.error === "missing_public_keys") {
                                console.error("un-released format, just for testing");
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: unfiltered_account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.success) {
                                // let { account_keys } = event.data // if using worker thread
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.initalizing !== undefined) {
                                update_state({
                                    genesis_filter_initalizing: status.initalizing,
                                    genesis_filtering: true
                                });
                                return;
                            }
                            if (status.importing === undefined) {
                                // programmer error
                                console.error("unknown status", status);
                                return;
                            }
                            if (!filter_status.length)
                                // first account
                                filter_status.push(status);else {
                                var last_account_name = filter_status[filter_status.length - 1].account_name;
                                if (last_account_name === status.account_name)
                                    // update same account
                                    filter_status[filter_status.length - 1] = status;
                                    // new account
                                else filter_status.push(status);
                            }
                            update_state({ genesis_filter_status: filter_status });
                        });
                    })
                );
            }
            //, 100)
            );
        }

        /**
        BTS 1.0 hosted wallet backup (wallet.bitshares.org) is supported.
         BTS 1.0 native wallets should use wallet_export_keys instead of a wallet backup.
         Note,  Native wallet backups will be rejected.  The logic below does not
        capture assigned account names (for unregisted accounts) and does not capture
        signing keys.  The hosted wallet has only registered accounts and no signing
        keys.
         */

    }, {
        key: "_parseWalletJson",
        value: function _parseWalletJson(json_contents) {
            var password_checksum = void 0;
            var encrypted_brainkey = void 0;
            var address_to_enckeys = {};
            var account_addresses = {};

            var savePubkeyAccount = function savePubkeyAccount(pubkey, account_name) {
                //replace BTS with GPH
                pubkey = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + pubkey.substring(3);
                var address = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PublicKey"].fromPublicKeyString(pubkey).toAddressString();
                var addresses = account_addresses[account_name] || [];
                address = "BTS" + address.substring(3);
                //DEBUG console.log("... address",address,account_name)
                addresses.push(address);
                account_addresses[account_name] = addresses;
            };

            try {
                if (!Array.isArray(json_contents)) {
                    //DEBUG console.log('... json_contents',json_contents)
                    throw new Error("Invalid wallet format");
                }
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = json_contents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var element = _step2.value;

                        if ("key_record_type" == element.type && element.data.account_address && element.data.encrypted_private_key) {
                            var address = element.data.account_address;
                            var _enckeys = address_to_enckeys[address] || [];
                            _enckeys.push(element.data.encrypted_private_key);
                            //DEBUG console.log("... address",address,enckeys)
                            address_to_enckeys[address] = _enckeys;
                            continue;
                        }

                        if ("account_record_type" == element.type) {
                            var account_name = element.data.name;
                            savePubkeyAccount(element.data.owner_key, account_name);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = element.data.active_key_history[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var history = _step3.value;

                                    savePubkeyAccount(history[1], account_name);
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            continue;
                        }

                        if ("property_record_type" == element.type && "encrypted_brainkey" == element.data.key) {
                            encrypted_brainkey = element.data.value;
                            continue;
                        }

                        if ("master_key_record_type" == element.type) {
                            if (!element.data) throw file.name + " invalid master_key_record record";

                            if (!element.data.checksum) throw file.name + " is missing master_key_record checksum";

                            password_checksum = element.data.checksum;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (!encrypted_brainkey) throw "Please use a BTS 1.0 wallet_export_keys file instead";

                if (!password_checksum) throw file.name + " is missing password_checksum";

                if (!enckeys.length) throw file.name + " does not contain any private keys";
            } catch (e) {
                throw e.message || e;
            }

            var account_keys = [];
            for (var _account_name in account_addresses) {
                var encrypted_private_keys = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = account_addresses[_account_name][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _address = _step4.value;

                        var _enckeys2 = address_to_enckeys[_address];
                        if (!_enckeys2) continue;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = _enckeys2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var enckey = _step5.value;
                                encrypted_private_keys.push(enckey);
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                account_keys.push({
                    account_name: _account_name,
                    encrypted_private_keys: encrypted_private_keys
                });
            }
            // We could prompt for this brain key instead on first use.  The user
            // may already have a brainkey at this point so with a single brainkey
            // wallet we can't use it now.
            this.setState({
                password_checksum: password_checksum,
                account_keys: account_keys
                //encrypted_brainkey
            });
        }
    }, {
        key: "_passwordCheck",
        value: function _passwordCheck(evt) {
            var _this5 = this;

            if (evt && "preventDefault" in evt) {
                evt.preventDefault();
            }
            var pwNode = this.refs.password;
            // if(pwNode) pwNode.focus()
            var password = pwNode ? pwNode.value : "";
            var checksum = this.state.password_checksum;
            var new_checksum = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha512(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha512(password)).toString("hex");
            if (checksum != new_checksum) {
                return this.setState({
                    no_file: false,
                    import_password_message: password.length ? "Incorrect password" : null
                });
            }
            this.setState({
                no_file: false,
                reset_password: Date.now(),
                import_password_message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_pass_match")
            }, function () {
                return _this5._decryptPrivateKeys(password);
            });
            // setTimeout(, 250)
        }
    }, {
        key: "_decryptPrivateKeys",
        value: function _decryptPrivateKeys(password) {
            var _this6 = this;

            var password_aes = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["Aes"].fromSeed(password);
            var format_error1_once = true;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.state.account_keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var account = _step6.value;

                    if (!account.encrypted_private_keys) {
                        var error = "Account " + account.account_name + " missing encrypted_private_keys";
                        console.error(error);
                        if (format_error1_once) {
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                                message: error
                            });
                            format_error1_once = false;
                        }
                        continue;
                    }
                    var account_name = account.account_name.trim();
                    var same_prefix_regex = new RegExp("^" + bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix);
                    for (var i = 0; i < account.encrypted_private_keys.length; i++) {
                        var encrypted_private = account.encrypted_private_keys[i];
                        var public_key_string = account.public_keys ? account.public_keys[i] : null; // performance gain

                        try {
                            var private_plainhex = password_aes.decryptHex(encrypted_private);
                            if (import_keys_assert_checking && public_key_string) {
                                var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromHex(private_plainhex);
                                var pub = private_key.toPublicKey(); // S L O W
                                var addy = pub.toAddressString();
                                var pubby = pub.toPublicKeyString();
                                var _error = "";

                                var address_string = account.addresses ? account.addresses[i] : null; // assert checking

                                if (address_string && addy.substring(3) != address_string.substring(3)) _error = "address imported " + address_string + " but calculated " + addy + ". ";

                                if (pubby.substring(3) != public_key_string.substring(3)) _error += "public key imported " + public_key_string + " but calculated " + pubby;

                                if (_error != "") console.log("ERROR Miss-match key", _error);
                            }

                            if (!public_key_string) {
                                var _private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromHex(private_plainhex);
                                var public_key = _private_key.toPublicKey(); // S L O W
                                public_key_string = public_key.toPublicKeyString();
                            } else {
                                if (!same_prefix_regex.test(public_key_string))
                                    // This was creating a unresponsive chrome browser
                                    // but after the results were shown.  It was probably
                                    // caused by garbage collection.
                                    public_key_string = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + public_key_string.substring(3);
                            }
                            this.state.imported_keys_public[public_key_string] = true;

                            var _ref2 = this.state.keys_to_account[private_plainhex] || { account_names: [] },
                                account_names = _ref2.account_names;

                            var dup = false;
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = account_names[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var _name = _step7.value;

                                    if (_name == account_name) dup = true;
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }

                            if (dup) continue;
                            account_names.push(account_name);
                            this.state.keys_to_account[private_plainhex] = {
                                account_names: account_names,
                                public_key_string: public_key_string
                            };
                        } catch (e) {
                            console.log(e, e.stack);
                            var message = e.message || e;
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                                message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_error", {
                                    account_name: account_name,
                                    error_msg: message
                                })
                            });
                        }
                    }
                }
                //let enc_brainkey = this.state.encrypted_brainkey
                //if(enc_brainkey){
                //    this.setState({
                //        brainkey: password_aes.decryptHexToText(enc_brainkey)
                //    })
                //}
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            this.setState({
                import_file_message: null,
                import_password_message: null,
                password_checksum: null
            }, function () {
                return _this6.updateOnChange();
            });
        }
    }, {
        key: "_saveImport",
        value: function _saveImport(e) {
            var _this7 = this;

            e.preventDefault();
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var dups = {};
            for (var public_key_string in this.state.imported_keys_public) {
                if (!keys.has(public_key_string)) continue;
                delete this.state.imported_keys_public[public_key_string];
                dups[public_key_string] = true;
            }
            if (Object.keys(this.state.imported_keys_public).length === 0) {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_already_imported")
                });
                return;
            }
            var keys_to_account = this.state.keys_to_account;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = Object.keys(keys_to_account)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var private_plainhex = _step8.value;
                    var _keys_to_account$priv = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv.account_names,
                        _public_key_string = _keys_to_account$priv.public_key_string;

                    if (dups[_public_key_string]) delete keys_to_account[private_plainhex];
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__["default"].unlock().then(function () {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(true);
                // show the loading indicator
                setTimeout(function () {
                    return _this7.saveImport();
                }, 200);
            }).catch(function () {});
        }
    }, {
        key: "saveImport",
        value: function saveImport() {
            var _this8 = this;

            var keys_to_account = this.state.keys_to_account;
            var private_key_objs = [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = Object.keys(keys_to_account)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var private_plainhex = _step9.value;
                    var _keys_to_account$priv2 = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv2.account_names,
                        public_key_string = _keys_to_account$priv2.public_key_string;

                    private_key_objs.push({
                        private_plainhex: private_plainhex,
                        import_account_names: account_names,
                        public_key_string: public_key_string
                    });
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            this.reset();
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].importKeysWorker(private_key_objs).then(function (result) {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var import_count = private_key_objs.length;

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].success({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_key_success", {
                        count: import_count
                    })
                });

                _this8.setState({
                    importSuccess: true
                });
                // this.onCancel() // back to claim balances
            }).catch(function (error) {
                console.log("error:", error);
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var message = error;
                try {
                    message = error.target.error.message;
                } catch (e) {}

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_error_unknown", {
                        error_msg: message
                    })
                });
            });
        }
    }, {
        key: "addByPattern",
        value: function addByPattern(contents) {
            var _this9 = this;

            if (!contents) {
                this.setState({
                    errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.wif_import_error")
                });
                return false;
            }
            if (contents.length !== WIF_KEY_LENGTH) {
                this.setState({
                    errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.wif_length_error")
                });
                return false;
            }
            var count = 0,
                invalid_count = 0;
            var wif_regex = /5[HJK][1-9A-Za-z]{49}/g;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = (contents.match(wif_regex) || [])[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var wif = _step10.value;

                    try {
                        (function () {
                            var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromWif(wif); //could throw and error
                            var private_plainhex = private_key.toBuffer().toString("hex");
                            var public_key = private_key.toPublicKey(); // S L O W
                            var public_key_string = public_key.toPublicKeyString();
                            _this9.state.imported_keys_public[public_key_string] = true;
                            _this9.state.keys_to_account[private_plainhex] = {
                                account_names: [],
                                public_key_string: public_key_string
                            };

                            var accountName = [];
                            api_accountApi__WEBPACK_IMPORTED_MODULE_4__["default"].lookupAccountByPublicKey(public_key_string).then(function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result) {
                                    var batch, accountNames;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    batch = void 0;

                                                    batch = result[0].map(function (value) {
                                                        return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAccount", value);
                                                    });
                                                    _context.next = 4;
                                                    return Promise.all(batch);

                                                case 4:
                                                    accountNames = _context.sent;

                                                    accountNames.map(function (value) {
                                                        var name = value.get("name");
                                                        if (accountName.indexOf(name) === -1) {
                                                            accountName.push(name);
                                                        }
                                                    });
                                                    _this9.setState({ associatedAccount: accountName });

                                                case 7:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this9);
                                }));

                                return function (_x2) {
                                    return _ref3.apply(this, arguments);
                                };
                            }());

                            count++;
                        })();
                    } catch (e) {
                        invalid_count++;
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            this.setState({
                key_text_message: "Found " + (!count ? "" : count + " valid") + (!invalid_count ? "" : " and " + invalid_count + " invalid") + " key" + (count > 1 || invalid_count > 1 ? "s" : "") + "."
            }, function () {
                return _this9.updateOnChange();
            });
            // removes the message on the next render
            this.setState({
                key_text_message: null,
                errorTextMessage: null
            });
            return count;
        }

        // toggleImportType(type) {
        //     if (!type) {
        //         return;
        //     }
        //     console.log("toggleImportType", type);
        //     this.setState({
        //         privateKey: type === "privateKey"
        //     });
        // }

    }, {
        key: "_renderBalanceClaims",
        value: function _renderBalanceClaims() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 15 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        { type: "primary", onClick: this.onCancel.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.done" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            var privateKey = this.props.privateKey;
            var keys_to_account = this.state.keys_to_account;

            var key_count = Object.keys(keys_to_account).length;
            var account_keycount = this.getImportAccountKeyCount(keys_to_account);

            // Create wallet prior to the import keys (keeps layout clean)
            if (!stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].getWallet()) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__["WalletCreate"], { importKeys: true, hideTitle: true });
            if (this.props.importing) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                );
            }

            var filtering = this.state.genesis_filtering;
            var was_filtered = !!this.state.genesis_filter_status.length && this.state.genesis_filter_finished;
            var account_rows = null;

            if (this.state.genesis_filter_status.length) {
                account_rows = [];
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this.state.genesis_filter_status[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var status = _step11.value;

                        if (status.count && status.total) {
                            account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: status.account_name },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    status.account_name
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    filtering ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "Filtering",
                                        " ",
                                        Math.round(status.count / status.total * 100),
                                        " ",
                                        "%",
                                        " "
                                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        status.count
                                    )
                                )
                            ));
                        }
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }
            }

            var import_ready = key_count !== 0;
            var password_placeholder = counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_password");

            if (import_ready) password_placeholder = "";

            if (!account_rows && account_keycount) {
                account_rows = [];
                for (var account_name in account_keycount) {
                    account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: account_name },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_name
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_keycount[account_name]
                        )
                    ));
                }
            }

            var cancelButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                { onClick: this.onCancel.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
            );

            var tabIndex = 1;

            if (this.state.importSuccess) {
                return this._renderBalanceClaims();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: "10px 0" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.state.key_text_message ? this.state.key_text_message : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KeyCount, { key_count: key_count })
                    ),
                    !import_ready ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        " ",
                        "(",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this.reset.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.reset" })
                        ),
                        ")"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        this.state.associatedAccount && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.wif_associated_accounts" }),
                            this.state.associatedAccount.map(function (value, key) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "p",
                                    { key: key },
                                    value
                                );
                            })
                        )
                    )
                ),
                account_rows ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    !account_rows.length ? counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.no_accounts") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "explorer.account.title" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "settings.restore_key_count" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tbody",
                                null,
                                account_rows
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !import_ready && !this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            privateKey ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                { onSubmit: this.onWif.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                    component: "label",
                                    content: "wallet.paste_private"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                    ref: "wifInput",
                                    type: "password",
                                    id: "wif",
                                    tabIndex: tabIndex++,
                                    style: { marginBottom: "16px" }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "importError" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "red" },
                                        this.state.errorTextMessage
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                    {
                                        type: "primary",
                                        htmlType: "submit",
                                        style: { marginRight: "16px" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                ),
                                cancelButton
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                {
                                    onSubmit: this._passwordCheck.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.bts_09_export" }),
                                    this.state.no_file ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "\xA0 (",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                onClick: this.reset.bind(this)
                                            },
                                            "Reset"
                                        ),
                                        ")"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "file",
                                    id: "file_input",
                                    accept: ".json",
                                    style: {
                                        border: "solid",
                                        marginBottom: 15
                                    },
                                    key: this.state.reset_file_name,
                                    onChange: this.upload.bind(this)
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    this.state.import_file_message
                                ),
                                !this.state.no_file ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                        type: "password",
                                        ref: "password",
                                        key: this.state.reset_password,
                                        placeholder: password_placeholder,
                                        onChange: function onChange() {
                                            if (_this10.state.import_password_message && _this10.state.import_password_message.length) {
                                                _this10.setState({
                                                    import_password_message: null
                                                });
                                            }
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "facolor-error" },
                                        this.state.import_password_message
                                    )
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button-group" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                        {
                                            type: "primary",
                                            disabled: !!this.state.no_file,
                                            htmlType: "submit",
                                            style: { marginRight: "16px" }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                    ),
                                    cancelButton
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                ) : null,
                import_ready ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button success", {
                                        disabled: !import_ready
                                    }),
                                    onClick: this._saveImport.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.import_keys" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button secondary",
                                    onClick: this.reset.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.unclaimed" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { component: "p", content: "wallet.claim_later" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                component: "label",
                                content: "wallet.totals"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__["default"], null)
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                ) : null
            );
        }
    }]);

    return ImportKeys;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ImportKeys.defaultProps = {
    privateKey: true
};


ImportKeys = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(ImportKeys, {
    listenTo: function listenTo() {
        return [stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps() {
        return {
            importing: stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().importing
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (ImportKeys);

/***/ }),

/***/ 3260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1953);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2117);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1860);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BalanceClaimAssetTotals = function (_Component) {
    _inherits(BalanceClaimAssetTotals, _Component);

    function BalanceClaimAssetTotals() {
        _classCallCheck(this, BalanceClaimAssetTotals);

        return _possibleConstructorReturn(this, (BalanceClaimAssetTotals.__proto__ || Object.getPrototypeOf(BalanceClaimAssetTotals)).apply(this, arguments));
    }

    _createClass(BalanceClaimAssetTotals, [{
        key: "render",
        value: function render() {
            if (this.props.balances === undefined) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "wallet.loading_balances" }),
                "\u2026"
            );

            var total_by_asset = this.props.balances.groupBy(function (v) {
                return v.balance.asset_id;
            }).map(function (l) {
                return l.reduce(function (r, v) {
                    return r + Number(v.balance.amount);
                }, 0);
            });

            if (!total_by_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                "None"
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                total_by_asset.map(function (total, asset_id) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { key: asset_id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            color: "info",
                            amount: total,
                            asset: asset_id
                        })
                    );
                }).toArray()
            );
        }
    }]);

    return BalanceClaimAssetTotals;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimAssetTotals = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimAssetTotals, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimAssetTotals);

/***/ }),

/***/ 3261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportKeysStoreWrapped", function() { return ImportKeysStoreWrapped; });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ImportKeysStore = function (_BaseStore) {
    _inherits(ImportKeysStore, _BaseStore);

    function ImportKeysStore() {
        _classCallCheck(this, ImportKeysStore);

        var _this = _possibleConstructorReturn(this, (ImportKeysStore.__proto__ || Object.getPrototypeOf(ImportKeysStore)).call(this));

        _this.state = _this._getInitialState();
        _this._export("importing");
        return _this;
    }

    _createClass(ImportKeysStore, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return { importing: false };
        }
    }, {
        key: "importing",
        value: function importing(_importing) {
            this.setState({ importing: _importing });
        }
    }]);

    return ImportKeysStore;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__["default"]);

var ImportKeysStoreWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(ImportKeysStore, "ImportKeysStore");
/* harmony default export */ __webpack_exports__["default"] = (ImportKeysStoreWrapped);

/***/ }),

/***/ 3262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bts_genesiskeys_bloom_url = undefined;
try {
    var url = __webpack_require__(3263);
    if (url.indexOf("3cee441") === -1) throw new Error("Incorrect hash: bts_genesiskeys_bloom.dat");
    bts_genesiskeys_bloom_url = url;
} catch (e) {
    // webpack deployment exception (not run time)
    console.log("WARN: Will be unable to filter BTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat", e);
}

/**
    This should only be applied to a BTS 1.0 export file taken on the
    discontinued chain. Any public key string or address (all 5 formats) carried
    over to the BTS 2.0 genesis block will be in this filter.

    Their may be some false positives but no false negatives.
*/

var GenesisFilter = function () {
    /** or call this.init */
    function GenesisFilter(bloom_buffer) {
        _classCallCheck(this, GenesisFilter);

        if (!bloom_buffer) return;
        this.bloom_buffer = bloom_buffer;
        this.bits_in_filter = bloom_buffer.length * 8; // 8388608 (test data)
    }

    /** Was a bloom file deployed?  This does not try to load it from the server. */


    _createClass(GenesisFilter, [{
        key: "isAvailable",
        value: function isAvailable() {
            return bts_genesiskeys_bloom_url !== undefined;
        }
    }, {
        key: "init",
        value: function init(done) {
            var _this = this;

            if (this.bloom_buffer) {
                done();
                return;
            }
            if (!this.isAvailable()) throw new Error("Genesis bloom file was not deployed");

            var xhr = new XMLHttpRequest();
            // firefox 40 did not allow the blob url but ff 41.0.2 did
            xhr.responseType = "blob";
            xhr.onload = function () {
                if (xhr.status === 404) return;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var contents = new Buffer(evt.target.result, "binary");
                    if (contents.length !== 1048576) throw new Error("Wrong length");
                    _this.bits_in_filter = contents.length * 8; // 8388608 (test data)
                    _this.bloom_buffer = contents;
                    done();
                };
                reader.readAsBinaryString(xhr.response);
            };
            xhr.onerror = function () {
                console.error("xhr.onerror", e);
            };
            xhr.open("GET", bts_genesiskeys_bloom_url);
            xhr.send();
        }
    }, {
        key: "inGenesis",
        value: function inGenesis(pubkey_or_address) {
            if (!this.bloom_buffer) throw new Error("Call init() first");
            for (var hashes = 0; hashes < 3; hashes++) {
                var hex = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["hash"].sha256(hashes + ":" + pubkey_or_address);
                var bit_address = parseInt(hex.slice(-3).toString("hex"), 16) % this.bits_in_filter; // 3090564
                // console.error("bit_address", bit_address.toString(16))
                var byte_address = bit_address >> 3; // 386320
                // console.error("byte_address", byte_address.toString(16))
                var mask = 1 << (bit_address & 7); // 16
                // console.error("mask", mask.toString(16))
                var byte = this.bloom_buffer[byte_address];
                // console.error("byte", byte.toString(16))
                // console.error("byte & mask", byte & mask, (byte & mask) === 0, '\n')
                if ((byte & mask) === 0) return false;
            }
            return true;
        }
    }, {
        key: "filter",
        value: function filter(account_keys, status) {
            var _this2 = this;

            if (!this.isAvailable()) {
                console.log("WARN: Missing bloom filter for BTS 0.9.x wallets");
                status({ error: "missing_bloom" });
                return;
            }
            var initalizing = true;
            status({ initalizing: initalizing });
            this.init(function () {
                try {
                    initalizing = false;
                    status({ initalizing: initalizing });
                    var running_count_progress = 1;
                    for (var a = 0; a < account_keys.length; a++) {
                        var removed_count = 0,
                            count = 0;
                        var keys = account_keys[a];
                        var total = keys.encrypted_private_keys.length;
                        status({
                            importing: true,
                            account_name: keys.account_name,
                            count: count,
                            total: total
                        });
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            count++;
                            if (count % running_count_progress === 0) {
                                running_count_progress = 47;
                                status({
                                    importing: true,
                                    account_name: keys.account_name,
                                    count: count,
                                    total: total
                                });
                            }
                            if (!keys.public_keys) {
                                // un-released format, just for testing
                                status({ error: "missing_public_keys" });
                                return;
                            }
                            var currentKey = keys.public_keys[k];
                            if (/^GPH/.test(currentKey)) currentKey = "BTS" + currentKey.substring(3);
                            if (_this2.inGenesis(currentKey)) continue;
                            var addresses = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["key"].addresses(currentKey, "BTS");
                            var addy_found = false;
                            for (var i = 0; i < addresses.length; i++) {
                                if (_this2.inGenesis(addresses[i])) {
                                    addy_found = true;
                                    break;
                                }
                            }
                            if (addy_found) continue;
                            delete keys.encrypted_private_keys[k];
                            delete keys.public_keys[k];
                            removed_count++;
                        }
                        var encrypted_private_keys = [],
                            public_keys = [];
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            if (!keys.encrypted_private_keys[k]) continue;
                            encrypted_private_keys.push(keys.encrypted_private_keys[k]);
                            public_keys.push(keys.public_keys[k]);
                        }
                        keys.encrypted_private_keys = encrypted_private_keys;
                        status({
                            importing: false,
                            account_name: keys.account_name,
                            count: count - removed_count,
                            total: total
                        });
                        keys.public_keys = public_keys;
                    }
                    status({ success: true });
                } finally {
                    if (initalizing) {
                        initalizing = false;
                        status({ initalizing: initalizing });
                    }
                }
            });
        }
    }]);

    return GenesisFilter;
}();

/* harmony default export */ __webpack_exports__["default"] = (GenesisFilter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(417).Buffer))

/***/ }),

/***/ 3263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat";

/***/ }),

/***/ 3264:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctYWNjb3VudC42NzIwM2M1NThhNmQ0YzQ5NzI3MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvRXhpc3RpbmdBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXkuanN4Iiwid2VicGFjazovLy9hcHAvYWN0aW9ucy9CcmFpbmtleUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvQnJhaW5rZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5SW5wdXQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvSW1wb3J0S2V5cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1Bc3NldFRvdGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL3N0b3Jlcy9JbXBvcnRLZXlzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY2hhaW4vR2VuZXNpc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2J0c19nZW5lc2lza2V5c19ibG9vbS5kYXQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0ltcG9ydEtleXMuc2Nzcz9mMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRNYW5hZ2VyU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRNYW5hZ2VyU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCcmFpbmtleSBmcm9tIFwiLi9CcmFpbmtleVwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XHJcbmltcG9ydCB7QmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XHJcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XHJcblxyXG5jb25zdCBjb25uZWN0T2JqZWN0ID0ge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHdhbGxldCA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7d2FsbGV0fTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzX3dhbGxldCA9IHRoaXMucHJvcHMud2FsbGV0LndhbGxldF9uYW1lcy5jb3VudCgpICE9IDA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQud2VsY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldF9iYWNrdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNldHVwX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwUmVzdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWJhY2t1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RXhpc3RpbmdBY2NvdW50T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWtleXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ltcG9ydEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2JyYWlua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCcmFpbmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvYmFsYW5jZS1jbGFpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFsYW5jZUNsYWltQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudCA9IGNvbm5lY3QoRXhpc3RpbmdBY2NvdW50LCBjb25uZWN0T2JqZWN0KTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc193YWxsZXQgPSB0aGlzLnByb3BzLndhbGxldC53YWxsZXRfbmFtZXMuY291bnQoKSAhPSAwO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5pbXBvcnRfYmFja3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9idHMxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IG51bGwgOiA8QmFsYW5jZUNsYWltQWN0aXZlIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJoZWFkZXIuZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJ3YWxsZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy53YWxsZXRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudE9wdGlvbnMgPSBjb25uZWN0KEV4aXN0aW5nQWNjb3VudE9wdGlvbnMsIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhpc3RpbmdBY2NvdW50O1xyXG5leHBvcnQge0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgUHJpdmF0ZUtleVN0b3JlIGZyb20gXCJzdG9yZXMvUHJpdmF0ZUtleVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudFJlZnNTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRSZWZzU3RvcmVcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltU2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbVNlbGVjdG9yXCI7XG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XG5pbXBvcnQgTXlBY2NvdW50cyBmcm9tIFwiY29tcG9uZW50cy9Gb3Jtcy9NeUFjY291bnRzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBCYWxhbmNlQ2xhaW1BY3RpdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQga2V5U2VxID0ga2V5cy5rZXlTZXEoKTtcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XG4gICAgICAgIHRoaXMuZXhpc3Rpbmdfa2V5cyA9IGtleVNlcTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XG4gICAgICAgIGxldCBrZXlTZXEgPSBrZXlzLmtleVNlcSgpO1xuICAgICAgICBpZiAoIWtleVNlcS5lcXVhbHModGhpcy5leGlzdGluZ19rZXlzKSkge1xuICAgICAgICAgICAgdGhpcy5leGlzdGluZ19rZXlzID0ga2V5U2VxO1xuICAgICAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50X3JlZnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmxvYWRpbmdfYmFsYW5jZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5iYWxhbmNlcyB8fCAhdGhpcy5wcm9wcy5iYWxhbmNlcy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltcG9ydF9yZWFkeSA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX2JhbGFuY2VzLnNpemUgJiYgdGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWU7XG4gICAgICAgIGxldCBjbGFpbV9iYWxhbmNlX2xhYmVsID0gaW1wb3J0X3JlYWR5XG4gICAgICAgICAgICA/IGAgKCR7dGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWV9KWBcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jbGFpbV9iYWxhbmNlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93WTogXCJoaWRkZW4gIWltcG9ydGFudFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLWNvbnRlbnQgY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlBY2NvdW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuYmFsYW5jZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudF9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1BY2NvdW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbVNlbGVjdG9yIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGFpbUJhbGFuY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jbGFpbV9iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge2NsYWltX2JhbGFuY2VfbGFiZWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gY2FuY2VsXCIgb25DbGljaz17dGhpcy5vbkJhY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25CYWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgb25DbGFpbUFjY291bnRDaGFuZ2UoY2xhaW1fYWNjb3VudF9uYW1lKSB7XG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuY2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSk7XG4gICAgfVxuXG4gICAgb25DbGFpbUJhbGFuY2UoKSB7XG4gICAgICAgIFdhbGxldEFjdGlvbnMuaW1wb3J0QmFsYW5jZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcyxcbiAgICAgICAgICAgIHRydWUgLy9icm9hZGNhc3RcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2xhaW1CYWxhbmNlXCIsIGVycm9yKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5iYWxhbmNlX2NsYWltX2Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkJhbGFuY2VDbGFpbUFjdGl2ZSA9IGNvbm5lY3QoXG4gICAgQmFsYW5jZUNsYWltQWN0aXZlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLCBBY2NvdW50UmVmc1N0b3JlLCBQcml2YXRlS2V5U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBwcm9wcy5hY2NvdW50X3JlZnMgPSBBY2NvdW50UmVmc1N0b3JlLmdldEFjY291bnRSZWZzKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1BY3RpdmU7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcblxyXG5pbXBvcnQgUHJpdmF0ZUtleVN0b3JlIGZyb20gXCJzdG9yZXMvUHJpdmF0ZUtleVN0b3JlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnNcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQmFsYW5jZUNsYWltU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLmNsYWltX2FjY291bnRfbmFtZSlcclxuICAgICAgICAgICAgdGhpcy5vbkNsYWltQWNjb3VudChcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jbGFpbV9hY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY2hlY2tlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFsYW5jZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0LnNpemVcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ey8qIEMgSCBFIEMgSyBCIE8gWCAqL308L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZF92ZXN0aW5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgociwgbmFtZV9hc3NldCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9eysraW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuY2hlY2tlZC5nZXQoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3guYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYmFsYW5jZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyLnVuY2xhaW1lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnVuY2xhaW1lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyLnZlc3RpbmcudW5jbGFpbWVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci52ZXN0aW5nLnVuY2xhaW1lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBvZiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci52ZXN0aW5nLnRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge25hbWVfYXNzZXQuZ2V0KDApfSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvQXJyYXkoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrYm94KGluZGV4LCBiYWxhbmNlcykge1xyXG4gICAgICAgIGxldCBjaGVja2VkID0gdGhpcy5wcm9wcy5jaGVja2VkO1xyXG4gICAgICAgIGlmIChjaGVja2VkLmdldChpbmRleCkpIHtcclxuICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuZGVsZXRlKGluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5zZXQoaW5kZXgsIGJhbGFuY2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0U2VsZWN0ZWRCYWxhbmNlQ2xhaW1zKGNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xhaW1BY2NvdW50KGNsYWltX2FjY291bnRfbmFtZSwgY2hlY2tlZCkge1xyXG4gICAgICAgIC8vIEEgVSBUIE8gIFMgRSBMIEUgQyBUICBBIEMgQyBPIFUgTiBUIFNcclxuICAgICAgICAvLyBvbmx5IGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQgKHBsYXkgaXQgc2FmZSlcclxuICAgICAgICBpZiAoY2hlY2tlZC5zaXplKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0LmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBrLmdldCgwKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGNsYWltX2FjY291bnRfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYudW5jbGFpbWVkIHx8IHYudmVzdGluZy51bmNsYWltZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuc2V0KGluZGV4LCB2LmJhbGFuY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjaGVja2VkLnNpemUpXHJcbiAgICAgICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0U2VsZWN0ZWRCYWxhbmNlQ2xhaW1zKGNoZWNrZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5CYWxhbmNlQ2xhaW1TZWxlY3RvciA9IGNvbm5lY3QoQmFsYW5jZUNsYWltU2VsZWN0b3IsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIGxldCBwcm9wcyA9IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgbGV0IHtiYWxhbmNlcywgYWRkcmVzc190b19wdWJrZXl9ID0gcHJvcHM7XHJcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XHJcbiAgICAgICAgbGV0IGdyb3VwQ291bnRNYXAgPSBJbW11dGFibGUuTWFwKCkuYXNNdXRhYmxlKCk7XHJcbiAgICAgICAgbGV0IGdyb3VwQ291bnQgPSAoZ3JvdXAsIGRpc3RpbmN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSBncm91cENvdW50TWFwLmdldChncm91cCk7XHJcbiAgICAgICAgICAgIGlmICghc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQgPSBJbW11dGFibGUuU2V0KCkuYXNNdXRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICBncm91cENvdW50TWFwLnNldChncm91cCwgc2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQuYWRkKGRpc3RpbmN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldC5zaXplO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGJhbGFuY2VzKVxyXG4gICAgICAgICAgICBwcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0ID0gYmFsYW5jZXNcclxuICAgICAgICAgICAgICAgIC5ncm91cEJ5KHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEsgRSBZIFNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwdWJrZXkgPSBhZGRyZXNzX3RvX3B1YmtleS5nZXQodi5vd25lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5X29iamVjdCA9IHByaXZhdGVfa2V5cy5nZXQocHVia2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbXBvcnRlZCBBY2NvdW50IE5hbWVzIChqdXN0IGEgdmlzdWFsIGFpZCwgaGVscHMgdG8gYXV0byBzZWxlY3QgYSByZWFsIGFjY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9vYmplY3QgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2JqZWN0LmltcG9ydF9hY2NvdW50X25hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IHByaXZhdGVfa2V5X29iamVjdC5pbXBvcnRfYWNjb3VudF9uYW1lcy5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpZ25pbmcgaXMgdmVyeSBzbG93LCBmdXJ0aGVyIGRpdmlkZSB0aGUgZ3JvdXBzIGJhc2VkIG9uIHRoZSBudW1iZXIgb2Ygc2lnbmF0dXJlcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaF9udW1iZXIgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQ291bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW11dGFibGUuTGlzdChbbmFtZXMsIHYuYmFsYW5jZS5hc3NldF9pZF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5vd25lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gNjBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lX2Fzc2V0X2tleSA9IEltbXV0YWJsZS5MaXN0KFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuYmFsYW5jZS5hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hfbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVfYXNzZXRfa2V5O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAobCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGwucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAociwgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gViBBIEwgVSBFIFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucHVibGljX2tleV9zdHJpbmcgPSBhZGRyZXNzX3RvX3B1YmtleS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5vd25lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYmFsYW5jZXMgPSByLmJhbGFuY2VzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2LnZlc3RlZF9iYWxhbmNlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmVzdGluZy51bmNsYWltZWQgKz0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZlc3RlZF9iYWxhbmNlLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZXN0aW5nLnRvdGFsICs9IE51bWJlcih2LmJhbGFuY2UuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci51bmNsYWltZWQgKz0gTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2xhaW1lZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlc3Rpbmc6IHt1bmNsYWltZWQ6IDAsIHRvdGFsOiAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzOiBJbW11dGFibGUuU2V0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zb3J0QnkoayA9PiBrKTtcclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltU2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0IGZyb20gXCJjb21wb25lbnRzL0Zvcm1zL0FjY291bnRTZWxlY3RcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIE15QWNjb3VudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50czogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgYWNjb3VudF9uYW1lcyA9IHRoaXMucHJvcHMuYWNjb3VudHNcclxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+ICEhYWNjb3VudClcclxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IEFjY291bnRTdG9yZS5pc015QWNjb3VudChhY2NvdW50KSlcclxuICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IGFjY291bnQuZ2V0KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgLnNvcnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudFNlbGVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM9e2FjY291bnRfbmFtZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50U2VsZWN0KGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoYWNjb3VudF9uYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShNeUFjY291bnRzKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEJyYWlua2V5QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CcmFpbmtleUFjdGlvbnNcIjtcclxuaW1wb3J0IEJyYWlua2V5U3RvcmVGYWN0b3J5IGZyb20gXCJzdG9yZXMvQnJhaW5rZXlTdG9yZVwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCcmFpbmtleUlucHV0IGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CcmFpbmtleUlucHV0XCI7XHJcbmltcG9ydCB7dG9QYWlyc30gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50Q2FyZCBmcm9tIFwiY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmRcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3RPYmplY3QgPSB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0JyYWlua2V5U3RvcmVGYWN0b3J5LmdldEluc3RhbmNlKFwid21jXCIpXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gQnJhaW5rZXlTdG9yZUZhY3RvcnkuZ2V0SW5zdGFuY2UoXCJ3bWNcIikuZ2V0U3RhdGUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIEJyYWlua2V5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5LmNsb3NlSW5zdGFuY2UoXCJ3bWNcIik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dEFjY2VwdD5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld0JyYWlua2V5IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JyYWlua2V5SW5wdXRBY2NlcHQ+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkJyYWlua2V5ID0gY29ubmVjdChCcmFpbmtleSwgY29ubmVjdE9iamVjdCk7XHJcbmV4cG9ydCBkZWZhdWx0IEJyYWlua2V5O1xyXG5cclxuY2xhc3MgVmlld0JyYWlua2V5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc2hvcnRfYnJua2V5ID0gdGhpcy5wcm9wcy5icm5rZXkuc3Vic3RyaW5nKDAsIDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpXCIsIHRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57c2hvcnRfYnJua2V5fTwvc3Bhbj4maGVsbGlwO1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWNjb3VudF9pZHMuc2l6ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnJhaW5rZXlBY2NvdW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfaWRzLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2FjY291bnRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuVmlld0JyYWlua2V5ID0gY29ubmVjdChWaWV3QnJhaW5rZXksIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByb3dzID0gdG9QYWlycyh0aGlzLnByb3BzLmFjY291bnRzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4gISFhY2NvdW50WzFdKVxyXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4gYWNjb3VudFsxXS5nZXQoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgICAgIC5tYXAobmFtZSA9PiA8QWNjb3VudENhcmQga2V5PXtuYW1lfSBhY2NvdW50PXtuYW1lfSAvPik7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPntyb3dzfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuQnJhaW5rZXlBY2NvdW50cyA9IEJpbmRUb0NoYWluU3RhdGUoQnJhaW5rZXlBY2NvdW50cyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnJhaW5rZXlJbnB1dEFjY2VwdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YnJua2V5OiBcIlwiLCBhY2NlcHQ6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWNjZXB0KSByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcclxuXHJcbiAgICAgICAgbGV0IHJlYWR5ID0gdGhpcy5zdGF0ZS5icm5rZXkgJiYgdGhpcy5zdGF0ZS5icm5rZXkgIT09IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyYWlua2V5SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CcmFpbmtleUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge2Rpc2FibGVkOiAhcmVhZHl9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmFjY2VwdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CcmFpbmtleUNoYW5nZShicm5rZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHticm5rZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY2VwdCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NlcHQ6IHRydWV9KTtcclxuICAgICAgICBCcmFpbmtleUFjdGlvbnMuc2V0QnJhaW5rZXkodGhpcy5zdGF0ZS5icm5rZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA8ZGl2IG9uQ2xpY2s9e3RoaXMub25Mb29rdXBBY2NvdW50cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiPkxvb2t1cCBBY2NvdW50czwvZGl2PlxyXG4vLyBvbkxvb2t1cEFjY291bnRzKCkge1xyXG4vL1xyXG4vLyB9XHJcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlBY3Rpb25zIHtcclxuICAgIHNldEJyYWlua2V5KGJybmtleSkge1xyXG4gICAgICAgIHJldHVybiBicm5rZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBCcmFpbmtleUFjdGlvbnNXcmFwcGVkID0gYWx0LmNyZWF0ZUFjdGlvbnMoQnJhaW5rZXlBY3Rpb25zKTtcclxuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXlBY3Rpb25zV3JhcHBlZDtcclxuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIGtleX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBCYXNlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYXNlU3RvcmVcIjtcclxuaW1wb3J0IEJyYWlua2V5QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CcmFpbmtleUFjdGlvbnNcIjtcclxuXHJcbi8qKiBFYWNoIGluc3RhbmNlIHN1cHBvcnRzIGEgc2luZ2xlIGJyYWlua2V5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbmtleVN0b3JlRmFjdG9yeSB7XHJcbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgLyoqIFRoaXMgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBmb3IgdGhlIHNhbWUgPGI+bmFtZTwvYj4uICBXaGVuIGRvbmUsXHJcbiAgICAgICAgKGNvbXBvbmVudFdpbGxVbm1vdW50KSBtYWtlIHN1cmUgdG8gY2FsbCB0aGlzLmNsb3NlSW5zdGFuY2UoKVxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChuYW1lKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gYWx0LmNyZWF0ZVN0b3JlKEJyYWlua2V5U3RvcmVJbXBsLCBcIkJyYWlua2V5U3RvcmVcIik7XHJcbiAgICAgICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5zZXQobmFtZSwgaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkgPSBuYW1lICsgXCIgc3Vic2NyaWJlZF9pbnN0YW5jZVwiO1xyXG4gICAgICAgIGlmICghQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChzdWJzY3JpYmVkX2luc3RhbmNlX2tleSkpIHtcclxuICAgICAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2UgPSBpbnN0YW5jZS5jaGFpblN0b3JlVXBkYXRlLmJpbmQoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZShzdWJzY3JpYmVkX2luc3RhbmNlKTtcclxuICAgICAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLnNldChcclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5LFxyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlZF9pbnN0YW5jZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xvc2VJbnN0YW5jZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChuYW1lKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGluc3RhbmNlIFwiICsgbmFtZSk7XHJcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5ID0gbmFtZSArIFwiIHN1YnNjcmliZWRfaW5zdGFuY2VcIjtcclxuICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZSA9IEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQoXHJcbiAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZGVsZXRlKHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5KTtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHN1YnNjcmliZWRfaW5zdGFuY2UpO1xyXG4gICAgICAgIGluc3RhbmNlLmNsZWFyQ2FjaGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIERlcml2ZWQga2V5cyBtYXkgYmUgdW5hc3NpZ25lZCBmcm9tIGFjY291bnRzIHRoZXJlZm9yZSB3ZSBtdXN0IGRlZmluZSBhXHJcbiAgICBmaXhlZCBibG9jayBvZiBkZXJpdmllZCBrZXlzIHRoZW4gbW9uaXRvciB0aGUgZW50aXJlIGJsb2NrLlxyXG4qL1xyXG52YXIgREVSSVZJRURfQlJBSU5LRVlfUE9PTF9TSVpFID0gMTA7XHJcblxyXG5jbGFzcyBCcmFpbmtleVN0b3JlSW1wbCBleHRlbmRzIEJhc2VTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycyh7XHJcbiAgICAgICAgICAgIG9uU2V0QnJhaW5rZXk6IEJyYWlua2V5QWN0aW9ucy5zZXRCcmFpbmtleVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydChcImluU3luY1wiLCBcImNoYWluU3RvcmVVcGRhdGVcIiwgXCJjbGVhckNhY2hlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYWluU3RvcmVVbnN1YnNjcmliZSgpIHtcclxuICAgIC8vICAgICB0cnl7XHJcbiAgICAvLyAgICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5jaGFpblN0b3JlVXBkYXRlKVxyXG4gICAgLy8gICAgIH1jYXRjaChlMSkge2NvbnNvbGUubG9nKFwidW5zdWIgMSBmYWlsXCIpO1xyXG4gICAgLy8gICAgICAgICB0cnl7XHJcbiAgICAvLyAgICAgICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMuY2hhaW5TdG9yZVVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgLy8gICAgICAgICB9Y2F0Y2goZTIpIHtjb25zb2xlLmxvZyhcInVuc3ViIDEgZmFpbFwiKX1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2xlYXJDYWNoZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBicm5rZXk6IFwiXCIsXHJcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBJbW11dGFibGUuU2V0KClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgLy8gQ29tcGFyZWQgd2l0aCBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleVxyXG4gICAgICAgIHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogU2F2ZXMgdGhlIGJyYWlua2V5IGFuZCBiZWdpbnMgdGhlIGxvb2t1cCBmb3IgZGVyaXZlZCBhY2NvdW50IHJlZmVybmVjZXMgKi9cclxuICAgIG9uU2V0QnJhaW5rZXkoYnJua2V5KSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJua2V5fSk7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVLZXlzKGJybmtleSk7XHJcbiAgICAgICAgdGhpcy5jaGFpblN0b3JlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEByZXR1cm4gPGI+dHJ1ZTwvYj4gd2hlbiBhbGwgZGVyaXZpZWQgYWNjb3VudCByZWZlcmVuY2VzIGFyZSBlaXRoZXJcclxuICAgICAgICBmb3VuZCBvciBrbm93biBub3QgdG8gZXhpc3QuXHJcbiAgICAqL1xyXG4gICAgaW5TeW5jKCkge1xyXG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzLmZvckVhY2goZGVyaXZlZF9rZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQZW5kaW5nRnJvbUNoYWluKGRlcml2ZWRfa2V5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYWluU3RvcmVVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPT09IENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPSBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjY291bnRJZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXJpdmVLZXlzKGJybmtleSA9IHRoaXMuc3RhdGUuYnJua2V5KSB7XHJcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gdGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoOyAvLyBuZXh0IHNlcXVlbmNlIChzdGFydGluZyB3aXRoIDApXHJcbiAgICAgICAgdmFyIHByaXZhdGVfa2V5ID0ga2V5LmdldF9icmFpblByaXZhdGVLZXkoYnJua2V5LCBzZXF1ZW5jZSk7XHJcbiAgICAgICAgdmFyIGRlcml2ZWRfa2V5ID0gZGVyaXZlZEtleVN0cnVjdChwcml2YXRlX2tleSk7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMucHVzaChkZXJpdmVkX2tleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aCA8IERFUklWSUVEX0JSQUlOS0VZX1BPT0xfU0laRSlcclxuICAgICAgICAgICAgdGhpcy5kZXJpdmVLZXlzKGJybmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWNjb3VudElkcygpIHtcclxuICAgICAgICB2YXIgbmV3X2FjY291bnRfaWRzID0gSW1tdXRhYmxlLlNldCgpLndpdGhNdXRhdGlvbnMobmV3X2lkcyA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVQdWJrZXkgPSBwdWJsaWNfc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFpbl9hY2NvdW50X2lkcyA9IENoYWluU3RvcmUuZ2V0QWNjb3VudFJlZnNPZktleShcclxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNfc3RyaW5nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluX2FjY291bnRfaWRzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYWluX2FjY291bnRfaWRzLmZvckVhY2goY2hhaW5fYWNjb3VudF9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19pZHMuYWRkKGNoYWluX2FjY291bnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5mb3JFYWNoKGRlcml2ZWRfa2V5ID0+XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQdWJrZXkoZGVyaXZlZF9rZXkucHVibGljX3N0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW5ld19hY2NvdW50X2lkcy5lcXVhbHModGhpcy5zdGF0ZS5hY2NvdW50X2lkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50X2lkcyA9IG5ld19hY2NvdW50X2lkcztcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9pZHM6IG5ld19hY2NvdW50X2lkc30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVyaXZlZEtleVN0cnVjdChwcml2YXRlX2tleSkge1xyXG4gICAgdmFyIHB1YmxpY19zdHJpbmcgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpLnRvUHVibGljS2V5U3RyaW5nKCk7XHJcbiAgICB2YXIgZGVyaXZlZF9rZXkgPSB7cHJpdmF0ZV9rZXksIHB1YmxpY19zdHJpbmd9O1xyXG4gICAgcmV0dXJuIGRlcml2ZWRfa2V5O1xyXG59XHJcblxyXG52YXIgaXNQZW5kaW5nRnJvbUNoYWluID0gZGVyaXZlZF9rZXkgPT5cclxuICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudFJlZnNPZktleShkZXJpdmVkX2tleS5wdWJsaWNfc3RyaW5nKSA9PT0gdW5kZWZpbmVkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge2hhc2gsIGtleX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG52YXIgZGljdGlvbmFyeV9zZXQ7XHJcblxyXG5pZiAoX19FTEVDVFJPTl9fKSB7XHJcbiAgICBkaWN0aW9uYXJ5X3NldCA9IG5ldyBTZXQoXHJcbiAgICAgICAgcmVxdWlyZShcImNvbW1vbi9kaWN0aW9uYXJ5X2VuLmpzb25cIikuZW4uc3BsaXQoXCIsXCIpXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbmtleUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBicm5rZXk6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBpZiAoIV9fRUxFQ1RST05fXykge1xyXG4gICAgICAgICAgICBmZXRjaChgJHtfX0JBU0VfVVJMX199ZGljdGlvbmFyeS5qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcGx5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeV9zZXQgPSBuZXcgU2V0KHJlc3VsdC5lbi5zcGxpdChcIixcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZGljdGlvbmFyeSBlcnJvcjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0JyYWluS2V5KCkge1xyXG4gICAgICAgIGxldCBzcGVsbGNoZWNrX3dvcmRzID0gdGhpcy5zdGF0ZS5icm5rZXkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBjaGVja2VkX3dvcmRzID0gW107XHJcbiAgICAgICAgc3BlbGxjaGVja193b3Jkcy5mb3JFYWNoKCh3b3JkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3b3JkID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBzcGVsbGNoZWNrd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgc3BlbGxjaGVja3dvcmQgPSBzcGVsbGNoZWNrd29yZC5tYXRjaCgvW2Etel0rLyk7IC8vanVzdCBzcGVsbGNoZWNrIGxldHRlcnNcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc3BlbGxjaGVja3dvcmQgPT09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlfc2V0LmhhcyhzcGVsbGNoZWNrd29yZFswXSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZF93b3Jkcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0gc3R5bGU9e3twYWRkaW5nOiBcIjFweFwiLCBtYXJnaW46IFwiMXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZF93b3Jkcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNaXNzcGVsbGVkV29yZCBrZXk9e2l9Pnt3b3JkfTwvTWlzc3BlbGxlZFdvcmQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVhZHkgPSBjaGVja2VkX3dvcmRzLmxlbmd0aCA+IDBcclxuICAgICAgICBsZXQgd29yZF9jb3VudF9sYWJlbDtcclxuICAgICAgICBsZXQgd2FybiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoY2hlY2tlZF93b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmJybmtleS5sZW5ndGggPCA1MCkge1xyXG4gICAgICAgICAgICAgICAgd29yZF9jb3VudF9sYWJlbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5icm5rZXkubGVuZ3RoICsgXCIgY2hhcmFjdGVycyAoNTAgbWluaW11bSlcIjtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZF93b3Jkcy5sZW5ndGggPCAxNilcclxuICAgICAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZF93b3Jkcy5sZW5ndGggKyBcIiB3b3JkcyAoMTYgcmVjb21tZW5kZWQpXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID0gY2hlY2tlZF93b3Jkcy5sZW5ndGggKyBcIiB3b3Jkc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhcm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt3YXJuLCB2YWxpZCwgd29yZF9jb3VudF9sYWJlbCwgY2hlY2tlZF93b3Jkc307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIWRpY3Rpb25hcnlfc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMjB9fT5GZXRjaGluZyBkaWN0aW9uYXJ5Li4uLjwvZGl2PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB7d2Fybiwgd29yZF9jb3VudF9sYWJlbCwgY2hlY2tlZF93b3Jkc30gPSB0aGlzLl9jaGVja0JyYWluS2V5KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXggfHwgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm9ybUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5icm5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IDEwMCwgbWluV2lkdGg6IDQ1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1wYWRkaW5nIG5vLW92ZXJmbG93XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja2VkX3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrX2RpZ2l0cyAmJiAhdGhpcy5wcm9wcy5oaWRlQ2hlY2tEaWdpdHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja19kaWdpdHN9ICogQ2hlY2sgRGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbmFtZSh7ZXJyb3I6IHdhcm59KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yZF9jb3VudF9sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHtpZCwgdmFsdWV9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCB7dmFsaWR9ID0gdGhpcy5fY2hlY2tCcmFpbktleSgpO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xyXG4gICAgICAgIHN0YXRlW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChpZCA9PT0gXCJicm5rZXlcIikge1xyXG4gICAgICAgICAgICB2YXIgYnJua2V5ID0ga2V5Lm5vcm1hbGl6ZV9icmFpbktleSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoYnJua2V5Lmxlbmd0aCA8IDUwID8gbnVsbCA6IGJybmtleSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmNoZWNrX2RpZ2l0cyA9XHJcbiAgICAgICAgICAgICAgICBicm5rZXkubGVuZ3RoIDwgNTBcclxuICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA6IGhhc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhMShicm5rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lcnJvckNhbGxiYWNrKHZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1pc3NwZWxsZWRXb3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IGRvdHRlZCAjZmYwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMXB4XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjFweCBkb3R0ZWQgI2ZmMDAwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vKipcclxuICogIEBicmllZiBkaXNwbGF5cyB0aGUgc3VtbWFyeSBvZiBhIGdpdmVuIGFjY291bnQgaW4gYSBjb25kZW5jZWQgdmlldyAoZm9yIHRoZSBkYXNoYm9hcmQpXHJcbiAqXHJcbiAqICBUaGlzIGNhcmQgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcclxuICpcclxuICogIHsgYWNjb3VudDogJHtuYW1lX29yX2lkfSB9XHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2FyZENsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHtuYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VzID0gbnVsbDtcclxuICAgICAgICBsZXQgaXNNeUFjY291bnQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgbGV0IGFiYWwgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XHJcbiAgICAgICAgICAgIGlmIChhYmFsKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlcyA9IGFiYWxcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZUFtb3VudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VBbW91bnQuZ2V0KFwiYmFsYW5jZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e3h9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc015QWNjb3VudCA9IEFjY291bnRTdG9yZS5pc015QWNjb3VudCh0aGlzLnByb3BzLmFjY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGFjY291bnQtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2FyZENsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIiArIChpc015QWNjb3VudCA/IFwiIG15LWFjY291bnRcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17e2hlaWdodDogNjQsIHdpZHRoOiA2NH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhbGFuY2VzXCI+e2JhbGFuY2VzfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5BY2NvdW50Q2FyZCA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudENhcmQpO1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjY291bnRDYXJkKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge1ByaXZhdGVLZXksIEFlcywgUHVibGljS2V5LCBGZXRjaENoYWluLCBoYXNofSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBY2NvdW50QXBpIGZyb20gXCJhcGkvYWNjb3VudEFwaVwiO1xuaW1wb3J0IHtDaGFpbkNvbmZpZ30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQgUHJpdmF0ZUtleVN0b3JlIGZyb20gXCJzdG9yZXMvUHJpdmF0ZUtleVN0b3JlXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5pbXBvcnQge1dhbGxldENyZWF0ZX0gZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L1dhbGxldENyZWF0ZVwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcImNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuLi9XYWxsZXQvQmFsYW5jZUNsYWltQWN0aXZlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQXNzZXRUb3RhbCBmcm9tIFwiY29tcG9uZW50cy9XYWxsZXQvQmFsYW5jZUNsYWltQXNzZXRUb3RhbFwiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCBJbXBvcnRLZXlzU3RvcmUgZnJvbSBcInN0b3Jlcy9JbXBvcnRLZXlzU3RvcmVcIjtcblxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IEdlbmVzaXNGaWx0ZXIgZnJvbSBcImNoYWluL0dlbmVzaXNGaWx0ZXJcIjtcblxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbnJlcXVpcmUoXCIuL0ltcG9ydEtleXMuc2Nzc1wiKTtcblxubGV0IGltcG9ydF9rZXlzX2Fzc2VydF9jaGVja2luZyA9IGZhbHNlO1xuXG5jb25zdCBLZXlDb3VudCA9ICh7a2V5X2NvdW50fSkgPT4ge1xuICAgIGlmICgha2V5X2NvdW50KSByZXR1cm4gPHNwYW4gLz47XG4gICAgcmV0dXJuIDxzcGFuPkZvdW5kIHtrZXlfY291bnR9IHByaXZhdGUga2V5czwvc3Bhbj47XG59O1xuXG5jb25zdCBXSUZfS0VZX0xFTkdUSCA9IDUxO1xuXG5jbGFzcyBJbXBvcnRLZXlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMgPSB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJpdmF0ZUtleTogdHJ1ZVxuICAgIH07XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleXNfdG9fYWNjb3VudDoge30sXG4gICAgICAgICAgICBub19maWxlOiB0cnVlLFxuICAgICAgICAgICAgYWNjb3VudF9rZXlzOiBbXSxcbiAgICAgICAgICAgIC8vYnJhaW5rZXk6IG51bGwsXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIHJlc2V0X2ZpbGVfbmFtZToga2VlcF9maWxlX25hbWVcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUucmVzZXRfZmlsZV9uYW1lXG4gICAgICAgICAgICAgICAgOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IERhdGUubm93KCksXG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydGVkX2tleXNfcHVibGljOiB7fSxcbiAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBhc3NvY2lhdGVkQWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9zdGF0dXM6IFtdLFxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGltcG9ydFN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzZXQoZSwga2VlcF9maWxlX25hbWUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpKTtcbiAgICB9XG5cbiAgICBvbldpZihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVmcy53aWZJbnB1dC5zdGF0ZS52YWx1ZTtcbiAgICAgICAgdGhpcy5hZGRCeVBhdHRlcm4odmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKGUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUoKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25DaGFuZ2UoKSB7XG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0UHVia2V5cyhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCkge1xuICAgICAgICBsZXQgYWNjb3VudF9rZXljb3VudCA9IHt9O1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGtleXNfdG9fYWNjb3VudClcbiAgICAgICAgICAgIGZvciAobGV0IGFjY291bnRfbmFtZSBvZiBrZXlzX3RvX2FjY291bnRba2V5XS5hY2NvdW50X25hbWVzKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgKGFjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQgPyBhY2NvdW50X2tleWNvdW50IDogbnVsbDtcbiAgICB9XG5cbiAgICB1cGxvYWQoZXZ0KSB7XG4gICAgICAgIHRoaXMucmVzZXQobnVsbCwgdHJ1ZSk7XG4gICAgICAgIGxldCBmaWxlID0gZXZ0LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBldnQgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZ0LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBqc29uX2NvbnRlbnRzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25fY29udGVudHMgPSBKU09OLnBhcnNlKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBjaGFuY2UgdG8gZW5jb3VudGVyIGEgbGFyZ2UgZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRoaXMgZm9ybWF0IGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUltcG9ydEtleVVwbG9hZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25fY29udGVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlX3N0YXRlXCIsIHVwZGF0ZV9zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZV9zdGF0ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlX3N0YXRlLmdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgZW1wdHkgcGFzc3dvcmQsIGFsc28gZGlzcGxheSBcIkVudGVyIGltcG9ydCBmaWxlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkQ2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBfcGFyc2VJbXBvcnRLZXlVcGxvYWRcIixlKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFqc29uX2NvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRCeVBhdHRlcm4oY29udGVudHMpKSB0aHJvdyBlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgZW1wdHkgcGFzc3dvcmQsIGFsc28gZGlzcGxheSBcIkVudGVyIGltcG9ydCBmaWxlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmRDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLi4uIEltcG9ydEtleXMgdXBsb2FkIGVycm9yXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydF9maWxlX21lc3NhZ2U6IG1lc3NhZ2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfVxuXG4gICAgLyoqIEJUUyAxLjAgY2xpZW50IHdhbGxldF9leHBvcnRfa2V5cyBmb3JtYXQuICovXG4gICAgX3BhcnNlSW1wb3J0S2V5VXBsb2FkKGpzb25fY29udGVudHMsIGZpbGVfbmFtZSwgdXBkYXRlX3N0YXRlKSB7XG4gICAgICAgIGxldCBwYXNzd29yZF9jaGVja3N1bSwgdW5maWx0ZXJlZF9hY2NvdW50X2tleXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSA9IGpzb25fY29udGVudHMucGFzc3dvcmRfY2hlY2tzdW07XG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkX2NoZWNrc3VtKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGVfbmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcblxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25fY29udGVudHMuYWNjb3VudF9rZXlzKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlX25hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XG5cbiAgICAgICAgICAgIHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzID0ganNvbl9jb250ZW50cy5hY2NvdW50X2tleXM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGUubWVzc2FnZSB8fCBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQlRTIDEuMCB3YWxsZXRzIG1heSBoYXZlIGEgbG90IG9mIGdlbmVyYXRlZCBidXQgdW51c2VkIGtleXMgb3Igc3BlbnQgVElUQU4gYWRkcmVzc2VzIG1ha2luZ1xuICAgICAgICAvLyB3YWxsZXRzIHNvIGxhcmdlIGl0IGlzIHdhcyBub3QgcG9zc2libGUgdG8gdXNlIHRoZSBKYXZhU2NyaXB0IHdhbGxldHMgd2l0aCB0aGVtLlxuXG4gICAgICAgIGxldCBnZW5lc2lzX2ZpbHRlciA9IG5ldyBHZW5lc2lzRmlsdGVyKCk7XG4gICAgICAgIGlmICghZ2VuZXNpc19maWx0ZXIuaXNBdmFpbGFibGUoKSkge1xuICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2tleXM6IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzLFxuICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtnZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZzogdHJ1ZX0sXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PlxuICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyLmluaXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyX3N0YXR1cyA9IHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZGIDwgdmVyc2lvbiA0MSBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciB0aHJlYWRzIGludGVybmFscyAobGlrZSBibG9iIHVybHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBHZW5lc2lzRmlsdGVyV29ya2VyID0gcmVxdWlyZShcIndvcmtlci1sb2FkZXIhd29ya2Vycy9HZW5lc2lzRmlsdGVyV29ya2VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB3b3JrZXIgPSBuZXcgR2VuZXNpc0ZpbHRlcldvcmtlclxuICAgICAgICAgICAgICAgICAgICAvLyB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWNjb3VudF9rZXlzOiB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJsb29tX2ZpbHRlcjogZ2VuZXNpc19maWx0ZXIuYmxvb21fZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHdvcmtlci5vbm1lc3NhZ2UgPSBldmVudCA9PiB7IHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgeyBzdGF0dXMsIGFjY291bnRfa2V5cyB9ID0gZXZlbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gLi4uXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gY2F0Y2goIGUgKSB7IGNvbnNvbGUuZXJyb3IoJ0dlbmVzaXNGaWx0ZXJXb3JrZXInLCBlKSB9fVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2tleXMgPSB1bmZpbHRlcmVkX2FjY291bnRfa2V5cztcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXIuZmlsdGVyKGFjY291bnRfa2V5cywgc3RhdHVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbXBvcnQgZmlsdGVyXCIsIHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuZXJyb3IgPT09IFwibWlzc2luZ19wdWJsaWNfa2V5c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bi1yZWxlYXNlZCBmb3JtYXQsIGp1c3QgZm9yIHRlc3RpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfa2V5czogdW5maWx0ZXJlZF9hY2NvdW50X2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgeyBhY2NvdW50X2tleXMgfSA9IGV2ZW50LmRhdGEgLy8gaWYgdXNpbmcgd29ya2VyIHRocmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmluaXRhbGl6aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZzogc3RhdHVzLmluaXRhbGl6aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuaW1wb3J0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmFtbWVyIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gc3RhdHVzXCIsIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJfc3RhdHVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1cy5wdXNoKHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9hY2NvdW50X25hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzW2ZpbHRlcl9zdGF0dXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY2NvdW50X25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RfYWNjb3VudF9uYW1lID09PSBzdGF0dXMuYWNjb3VudF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc2FtZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0dXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXcgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZmlsdGVyX3N0YXR1cy5wdXNoKHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe2dlbmVzaXNfZmlsdGVyX3N0YXR1czogZmlsdGVyX3N0YXR1c30pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8sIDEwMClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICBCVFMgMS4wIGhvc3RlZCB3YWxsZXQgYmFja3VwICh3YWxsZXQuYml0c2hhcmVzLm9yZykgaXMgc3VwcG9ydGVkLlxuXG4gICAgQlRTIDEuMCBuYXRpdmUgd2FsbGV0cyBzaG91bGQgdXNlIHdhbGxldF9leHBvcnRfa2V5cyBpbnN0ZWFkIG9mIGEgd2FsbGV0IGJhY2t1cC5cblxuICAgIE5vdGUsICBOYXRpdmUgd2FsbGV0IGJhY2t1cHMgd2lsbCBiZSByZWplY3RlZC4gIFRoZSBsb2dpYyBiZWxvdyBkb2VzIG5vdFxuICAgIGNhcHR1cmUgYXNzaWduZWQgYWNjb3VudCBuYW1lcyAoZm9yIHVucmVnaXN0ZWQgYWNjb3VudHMpIGFuZCBkb2VzIG5vdCBjYXB0dXJlXG4gICAgc2lnbmluZyBrZXlzLiAgVGhlIGhvc3RlZCB3YWxsZXQgaGFzIG9ubHkgcmVnaXN0ZXJlZCBhY2NvdW50cyBhbmQgbm8gc2lnbmluZ1xuICAgIGtleXMuXG5cbiAgICAqL1xuICAgIF9wYXJzZVdhbGxldEpzb24oanNvbl9jb250ZW50cykge1xuICAgICAgICBsZXQgcGFzc3dvcmRfY2hlY2tzdW07XG4gICAgICAgIGxldCBlbmNyeXB0ZWRfYnJhaW5rZXk7XG4gICAgICAgIGxldCBhZGRyZXNzX3RvX2VuY2tleXMgPSB7fTtcbiAgICAgICAgbGV0IGFjY291bnRfYWRkcmVzc2VzID0ge307XG5cbiAgICAgICAgbGV0IHNhdmVQdWJrZXlBY2NvdW50ID0gZnVuY3Rpb24ocHVia2V5LCBhY2NvdW50X25hbWUpIHtcbiAgICAgICAgICAgIC8vcmVwbGFjZSBCVFMgd2l0aCBHUEhcbiAgICAgICAgICAgIHB1YmtleSA9IENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4ICsgcHVia2V5LnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzID0gUHVibGljS2V5LmZyb21QdWJsaWNLZXlTdHJpbmcoXG4gICAgICAgICAgICAgICAgcHVia2V5XG4gICAgICAgICAgICApLnRvQWRkcmVzc1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGFkZHJlc3NlcyA9IGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0gfHwgW107XG4gICAgICAgICAgICBhZGRyZXNzID0gXCJCVFNcIiArIGFkZHJlc3Muc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBhZGRyZXNzXCIsYWRkcmVzcyxhY2NvdW50X25hbWUpXG4gICAgICAgICAgICBhZGRyZXNzZXMucHVzaChhZGRyZXNzKTtcbiAgICAgICAgICAgIGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0gPSBhZGRyZXNzZXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShqc29uX2NvbnRlbnRzKSkge1xuICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coJy4uLiBqc29uX2NvbnRlbnRzJyxqc29uX2NvbnRlbnRzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgd2FsbGV0IGZvcm1hdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YganNvbl9jb250ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhLmFjY291bnRfYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0gZWxlbWVudC5kYXRhLmFjY291bnRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuY2tleXMgPSBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGVuY2tleXMucHVzaChlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBhZGRyZXNzXCIsYWRkcmVzcyxlbmNrZXlzKVxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gPSBlbmNrZXlzO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXCJhY2NvdW50X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSBlbGVtZW50LmRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVB1YmtleUFjY291bnQoZWxlbWVudC5kYXRhLm93bmVyX2tleSwgYWNjb3VudF9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaGlzdG9yeSBvZiBlbGVtZW50LmRhdGEuYWN0aXZlX2tleV9oaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUHVia2V5QWNjb3VudChoaXN0b3J5WzFdLCBhY2NvdW50X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICBcImVuY3J5cHRlZF9icmFpbmtleVwiID09IGVsZW1lbnQuZGF0YS5rZXlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkX2JyYWlua2V5ID0gZWxlbWVudC5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXCJtYXN0ZXJfa2V5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgaW52YWxpZCBtYXN0ZXJfa2V5X3JlY29yZCByZWNvcmRcIjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YS5jaGVja3N1bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgaXMgbWlzc2luZyBtYXN0ZXJfa2V5X3JlY29yZCBjaGVja3N1bVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtID0gZWxlbWVudC5kYXRhLmNoZWNrc3VtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZW5jcnlwdGVkX2JyYWlua2V5KVxuICAgICAgICAgICAgICAgIHRocm93IFwiUGxlYXNlIHVzZSBhIEJUUyAxLjAgd2FsbGV0X2V4cG9ydF9rZXlzIGZpbGUgaW5zdGVhZFwiO1xuXG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkX2NoZWNrc3VtKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGlzIG1pc3NpbmcgcGFzc3dvcmRfY2hlY2tzdW1cIjtcblxuICAgICAgICAgICAgaWYgKCFlbmNrZXlzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBkb2VzIG5vdCBjb250YWluIGFueSBwcml2YXRlIGtleXNcIjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgZS5tZXNzYWdlIHx8IGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudF9rZXlzID0gW107XG4gICAgICAgIGZvciAobGV0IGFjY291bnRfbmFtZSBpbiBhY2NvdW50X2FkZHJlc3Nlcykge1xuICAgICAgICAgICAgbGV0IGVuY3J5cHRlZF9wcml2YXRlX2tleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGFkZHJlc3Mgb2YgYWNjb3VudF9hZGRyZXNzZXNbYWNjb3VudF9uYW1lXSkge1xuICAgICAgICAgICAgICAgIGxldCBlbmNrZXlzID0gYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgIGlmICghZW5ja2V5cykgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZW5ja2V5IG9mIGVuY2tleXMpIGVuY3J5cHRlZF9wcml2YXRlX2tleXMucHVzaChlbmNrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjb3VudF9rZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBjb3VsZCBwcm9tcHQgZm9yIHRoaXMgYnJhaW4ga2V5IGluc3RlYWQgb24gZmlyc3QgdXNlLiAgVGhlIHVzZXJcbiAgICAgICAgLy8gbWF5IGFscmVhZHkgaGF2ZSBhIGJyYWlua2V5IGF0IHRoaXMgcG9pbnQgc28gd2l0aCBhIHNpbmdsZSBicmFpbmtleVxuICAgICAgICAvLyB3YWxsZXQgd2UgY2FuJ3QgdXNlIGl0IG5vdy5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSxcbiAgICAgICAgICAgIGFjY291bnRfa2V5c1xuICAgICAgICAgICAgLy9lbmNyeXB0ZWRfYnJhaW5rZXlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Bhc3N3b3JkQ2hlY2soZXZ0KSB7XG4gICAgICAgIGlmIChldnQgJiYgXCJwcmV2ZW50RGVmYXVsdFwiIGluIGV2dCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHB3Tm9kZSA9IHRoaXMucmVmcy5wYXNzd29yZDtcbiAgICAgICAgLy8gaWYocHdOb2RlKSBwd05vZGUuZm9jdXMoKVxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBwd05vZGUgPyBwd05vZGUudmFsdWUgOiBcIlwiO1xuICAgICAgICBsZXQgY2hlY2tzdW0gPSB0aGlzLnN0YXRlLnBhc3N3b3JkX2NoZWNrc3VtO1xuICAgICAgICBsZXQgbmV3X2NoZWNrc3VtID0gaGFzaC5zaGE1MTIoaGFzaC5zaGE1MTIocGFzc3dvcmQpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgaWYgKGNoZWNrc3VtICE9IG5ld19jaGVja3N1bSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5vX2ZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBwYXNzd29yZC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBcIkluY29ycmVjdCBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub19maWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNldF9wYXNzd29yZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfcGFzc19tYXRjaFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuX2RlY3J5cHRQcml2YXRlS2V5cyhwYXNzd29yZClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgsIDI1MClcbiAgICB9XG5cbiAgICBfZGVjcnlwdFByaXZhdGVLZXlzKHBhc3N3b3JkKSB7XG4gICAgICAgIGxldCBwYXNzd29yZF9hZXMgPSBBZXMuZnJvbVNlZWQocGFzc3dvcmQpO1xuICAgICAgICBsZXQgZm9ybWF0X2Vycm9yMV9vbmNlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgYWNjb3VudCBvZiB0aGlzLnN0YXRlLmFjY291bnRfa2V5cykge1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50LmVuY3J5cHRlZF9wcml2YXRlX2tleXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBgQWNjb3VudCAke1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmFjY291bnRfbmFtZVxuICAgICAgICAgICAgICAgIH0gbWlzc2luZyBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzYDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0X2Vycm9yMV9vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0X2Vycm9yMV9vbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IGFjY291bnQuYWNjb3VudF9uYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBzYW1lX3ByZWZpeF9yZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgXCJeXCIgKyBDaGFpbkNvbmZpZy5hZGRyZXNzX3ByZWZpeFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY3J5cHRlZF9wcml2YXRlID0gYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5X3N0cmluZyA9IGFjY291bnQucHVibGljX2tleXNcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50LnB1YmxpY19rZXlzW2ldXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDsgLy8gcGVyZm9ybWFuY2UgZ2FpblxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfcGxhaW5oZXggPSBwYXNzd29yZF9hZXMuZGVjcnlwdEhleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbXBvcnRfa2V5c19hc3NlcnRfY2hlY2tpbmcgJiYgcHVibGljX2tleV9zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbUhleChwcml2YXRlX3BsYWluaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWIgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkeSA9IHB1Yi50b0FkZHJlc3NTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJieSA9IHB1Yi50b1B1YmxpY0tleVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3Nfc3RyaW5nID0gYWNjb3VudC5hZGRyZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnQuYWRkcmVzc2VzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsOyAvLyBhc3NlcnQgY2hlY2tpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfc3RyaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeS5zdWJzdHJpbmcoMykgIT0gYWRkcmVzc19zdHJpbmcuc3Vic3RyaW5nKDMpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3MgaW1wb3J0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3N0cmluZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGJ1dCBjYWxjdWxhdGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLiBcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmJ5LnN1YnN0cmluZygzKSAhPSBwdWJsaWNfa2V5X3N0cmluZy5zdWJzdHJpbmcoMylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYyBrZXkgaW1wb3J0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGJ1dCBjYWxjdWxhdGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViYnk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgTWlzcy1tYXRjaCBrZXlcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwdWJsaWNfa2V5X3N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gUHJpdmF0ZUtleS5mcm9tSGV4KHByaXZhdGVfcGxhaW5oZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXkgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyA9IHB1YmxpY19rZXkudG9QdWJsaWNLZXlTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2FtZV9wcmVmaXhfcmVnZXgudGVzdChwdWJsaWNfa2V5X3N0cmluZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3YXMgY3JlYXRpbmcgYSB1bnJlc3BvbnNpdmUgY2hyb21lIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgYWZ0ZXIgdGhlIHJlc3VsdHMgd2VyZSBzaG93bi4gIEl0IHdhcyBwcm9iYWJseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhdXNlZCBieSBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpbkNvbmZpZy5hZGRyZXNzX3ByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lc30gPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcbiAgICAgICAgICAgICAgICAgICAgXSB8fCB7YWNjb3VudF9uYW1lczogW119O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IF9uYW1lIG9mIGFjY291bnRfbmFtZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX25hbWUgPT0gYWNjb3VudF9uYW1lKSBkdXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHVwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lcy5wdXNoKGFjY291bnRfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlLm1lc3NhZ2UgfHwgZTtcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuaW1wb3J0X2tleXNfZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZTogYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2xldCBlbmNfYnJhaW5rZXkgPSB0aGlzLnN0YXRlLmVuY3J5cHRlZF9icmFpbmtleVxuICAgICAgICAvL2lmKGVuY19icmFpbmtleSl7XG4gICAgICAgIC8vICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyAgICAgICAgYnJhaW5rZXk6IHBhc3N3b3JkX2Flcy5kZWNyeXB0SGV4VG9UZXh0KGVuY19icmFpbmtleSlcbiAgICAgICAgLy8gICAgfSlcbiAgICAgICAgLy99XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1wb3J0X2ZpbGVfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zYXZlSW1wb3J0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XG4gICAgICAgIGxldCBkdXBzID0ge307XG4gICAgICAgIGZvciAobGV0IHB1YmxpY19rZXlfc3RyaW5nIGluIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpIHtcbiAgICAgICAgICAgIGlmICgha2V5cy5oYXMocHVibGljX2tleV9zdHJpbmcpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljW3B1YmxpY19rZXlfc3RyaW5nXTtcbiAgICAgICAgICAgIGR1cHNbcHVibGljX2tleV9zdHJpbmddID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpYykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2FscmVhZHlfaW1wb3J0ZWRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlzX3RvX2FjY291bnQgPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudDtcbiAgICAgICAgZm9yIChsZXQgcHJpdmF0ZV9wbGFpbmhleCBvZiBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpKSB7XG4gICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXMsIHB1YmxpY19rZXlfc3RyaW5nfSA9IGtleXNfdG9fYWNjb3VudFtcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGR1cHNbcHVibGljX2tleV9zdHJpbmddKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlzX3RvX2FjY291bnRbcHJpdmF0ZV9wbGFpbmhleF07XG4gICAgICAgIH1cbiAgICAgICAgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEltcG9ydEtleXNTdG9yZS5pbXBvcnRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgbG9hZGluZyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2F2ZUltcG9ydCgpLCAyMDApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgc2F2ZUltcG9ydCgpIHtcbiAgICAgICAgbGV0IGtleXNfdG9fYWNjb3VudCA9IHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50O1xuICAgICAgICBsZXQgcHJpdmF0ZV9rZXlfb2JqcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcml2YXRlX3BsYWluaGV4IG9mIE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkpIHtcbiAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lcywgcHVibGljX2tleV9zdHJpbmd9ID0ga2V5c190b19hY2NvdW50W1xuICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwcml2YXRlX2tleV9vYmpzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXgsXG4gICAgICAgICAgICAgICAgaW1wb3J0X2FjY291bnRfbmFtZXM6IGFjY291bnRfbmFtZXMsXG4gICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgV2FsbGV0RGIuaW1wb3J0S2V5c1dvcmtlcihwcml2YXRlX2tleV9vYmpzKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1wb3J0X2NvdW50ID0gcHJpdmF0ZV9rZXlfb2Jqcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9rZXlfc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpbXBvcnRfY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydFN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9uQ2FuY2VsKCkgLy8gYmFjayB0byBjbGFpbSBiYWxhbmNlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIEltcG9ydEtleXNTdG9yZS5pbXBvcnRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLnRhcmdldC5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuaW1wb3J0X2tleXNfZXJyb3JfdW5rbm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRCeVBhdHRlcm4oY29udGVudHMpIHtcbiAgICAgICAgaWYgKCFjb250ZW50cykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldC53aWZfaW1wb3J0X2Vycm9yXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoICE9PSBXSUZfS0VZX0xFTkdUSCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldC53aWZfbGVuZ3RoX2Vycm9yXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSAwLFxuICAgICAgICAgICAgaW52YWxpZF9jb3VudCA9IDA7XG4gICAgICAgIGxldCB3aWZfcmVnZXggPSAvNVtISktdWzEtOUEtWmEtel17NDl9L2c7XG4gICAgICAgIGZvciAobGV0IHdpZiBvZiBjb250ZW50cy5tYXRjaCh3aWZfcmVnZXgpIHx8IFtdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbVdpZih3aWYpOyAvL2NvdWxkIHRocm93IGFuZCBlcnJvclxuICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX3BsYWluaGV4ID0gcHJpdmF0ZV9rZXkudG9CdWZmZXIoKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleSA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleV9zdHJpbmcgPSBwdWJsaWNfa2V5LnRvUHVibGljS2V5U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gW107XG4gICAgICAgICAgICAgICAgQWNjb3VudEFwaS5sb29rdXBBY2NvdW50QnlQdWJsaWNLZXkocHVibGljX2tleV9zdHJpbmcpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaCA9IHJlc3VsdFswXS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGZXRjaENoYWluKFwiZ2V0QWNjb3VudFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZXMgPSBhd2FpdCBQcm9taXNlLmFsbChiYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHZhbHVlLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnROYW1lLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthc3NvY2lhdGVkQWNjb3VudDogYWNjb3VudE5hbWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGludmFsaWRfY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIFwiRm91bmQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAoIWNvdW50ID8gXCJcIiA6IGNvdW50ICsgXCIgdmFsaWRcIikgK1xuICAgICAgICAgICAgICAgICAgICAoIWludmFsaWRfY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiBhbmQgXCIgKyBpbnZhbGlkX2NvdW50ICsgXCIgaW52YWxpZFwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIGtleVwiICtcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50ID4gMSB8fCBpbnZhbGlkX2NvdW50ID4gMSA/IFwic1wiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICBcIi5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKVxuICAgICAgICApO1xuICAgICAgICAvLyByZW1vdmVzIHRoZSBtZXNzYWdlIG9uIHRoZSBuZXh0IHJlbmRlclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgLy8gdG9nZ2xlSW1wb3J0VHlwZSh0eXBlKSB7XG4gICAgLy8gICAgIGlmICghdHlwZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlSW1wb3J0VHlwZVwiLCB0eXBlKTtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBwcml2YXRlS2V5OiB0eXBlID09PSBcInByaXZhdGVLZXlcIlxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBfcmVuZGVyQmFsYW5jZUNsYWltcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbUFjdGl2ZSAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRvbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtwcml2YXRlS2V5fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7a2V5c190b19hY2NvdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBrZXlfY291bnQgPSBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpLmxlbmd0aDtcbiAgICAgICAgbGV0IGFjY291bnRfa2V5Y291bnQgPSB0aGlzLmdldEltcG9ydEFjY291bnRLZXlDb3VudChrZXlzX3RvX2FjY291bnQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB3YWxsZXQgcHJpb3IgdG8gdGhlIGltcG9ydCBrZXlzIChrZWVwcyBsYXlvdXQgY2xlYW4pXG4gICAgICAgIGlmICghV2FsbGV0RGIuZ2V0V2FsbGV0KCkpXG4gICAgICAgICAgICByZXR1cm4gPFdhbGxldENyZWF0ZSBpbXBvcnRLZXlzPXt0cnVlfSBoaWRlVGl0bGU9e3RydWV9IC8+O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbXBvcnRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cImNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWx0ZXJpbmcgPSB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyaW5nO1xuICAgICAgICBsZXQgd2FzX2ZpbHRlcmVkID1cbiAgICAgICAgICAgICEhdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXMubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkO1xuICAgICAgICBsZXQgYWNjb3VudF9yb3dzID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY2NvdW50X3Jvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHN0YXR1cyBvZiB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY291bnQgJiYgc3RhdHVzLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17c3RhdHVzLmFjY291bnRfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXMuYWNjb3VudF9uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyaW5ne1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHVzLmNvdW50IC8gc3RhdHVzLnRvdGFsKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdHVzLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1wb3J0X3JlYWR5ID0ga2V5X2NvdW50ICE9PSAwO1xuICAgICAgICBsZXQgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfcGFzc3dvcmRcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpbXBvcnRfcmVhZHkpIHBhc3N3b3JkX3BsYWNlaG9sZGVyID0gXCJcIjtcblxuICAgICAgICBpZiAoIWFjY291bnRfcm93cyAmJiBhY2NvdW50X2tleWNvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50X3Jvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGFjY291bnRfbmFtZSBpbiBhY2NvdW50X2tleWNvdW50KSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FjY291bnRfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnRfbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthY2NvdW50X2tleWNvdW50W2FjY291bnRfbmFtZV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IChcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW1wb3J0U3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBLZXkgZmlsZSB1cGxvYWQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5rZXlfdGV4dF9tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8S2V5Q291bnQga2V5X2NvdW50PXtrZXlfY291bnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHshaW1wb3J0X3JlYWR5ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzb2NpYXRlZEFjY291bnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC53aWZfYXNzb2NpYXRlZF9hY2NvdW50c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFzc29jaWF0ZWRBY2NvdW50Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17a2V5fT57dmFsdWV9PC9wPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHthY2NvdW50X3Jvd3MgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWFjY291bnRfcm93cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0Lm5vX2FjY291bnRzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYWNjb3VudC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLnJlc3RvcmVfa2V5X2NvdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57YWNjb3VudF9yb3dzfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSAmJiAhdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaXZhdGVLZXkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbldpZi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5wYXN0ZV9wcml2YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aWZJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2lmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltcG9ydEVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JUZXh0TWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLl9wYXNzd29yZENoZWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJ0c18wOV9leHBvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ub19maWxlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5yZXNldF9maWxlX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwbG9hZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW1wb3J0X2ZpbGVfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubm9fZmlsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldF9wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX3BsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYWNvbG9yLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIXRoaXMuc3RhdGUubm9fZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtpbXBvcnRfcmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWUoXCJidXR0b24gc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2F2ZUltcG9ydC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2tleXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jbGFpbV9sYXRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnRvdGFsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1Bc3NldFRvdGFsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuSW1wb3J0S2V5cyA9IGNvbm5lY3QoXG4gICAgSW1wb3J0S2V5cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtJbXBvcnRLZXlzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1wb3J0aW5nOiBJbXBvcnRLZXlzU3RvcmUuZ2V0U3RhdGUoKS5pbXBvcnRpbmdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRLZXlzO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJhbGFuY2VDbGFpbUFzc2V0VG90YWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iYWxhbmNlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubG9hZGluZ19iYWxhbmNlc1wiIC8+JmhlbGxpcDtcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxfYnlfYXNzZXQgPSB0aGlzLnByb3BzLmJhbGFuY2VzXHJcbiAgICAgICAgICAgIC5ncm91cEJ5KHYgPT4gdi5iYWxhbmNlLmFzc2V0X2lkKVxyXG4gICAgICAgICAgICAubWFwKGwgPT4gbC5yZWR1Y2UoKHIsIHYpID0+IHIgKyBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCksIDApKTtcclxuXHJcbiAgICAgICAgaWYgKCF0b3RhbF9ieV9hc3NldC5zaXplKSByZXR1cm4gPGRpdj5Ob25lPC9kaXY+O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RvdGFsX2J5X2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgodG90YWwsIGFzc2V0X2lkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthc3NldF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CYWxhbmNlQ2xhaW1Bc3NldFRvdGFscyA9IGNvbm5lY3QoQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbUFzc2V0VG90YWxzO1xyXG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcclxuaW1wb3J0IEJhc2VTdG9yZSBmcm9tIFwic3RvcmVzL0Jhc2VTdG9yZVwiO1xyXG5cclxuY2xhc3MgSW1wb3J0S2V5c1N0b3JlIGV4dGVuZHMgQmFzZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydChcImltcG9ydGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7aW1wb3J0aW5nOiBmYWxzZX07XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0aW5nKGltcG9ydGluZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydGluZ30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIEltcG9ydEtleXNTdG9yZVdyYXBwZWQgPSBhbHQuY3JlYXRlU3RvcmUoXHJcbiAgICBJbXBvcnRLZXlzU3RvcmUsXHJcbiAgICBcIkltcG9ydEtleXNTdG9yZVwiXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydEtleXNTdG9yZVdyYXBwZWQ7XHJcbiIsImltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxudmFyIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgPSB1bmRlZmluZWQ7XG50cnkge1xuICAgIHZhciB1cmwgPSByZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1idHNfZ2VuZXNpc2tleXNfYmxvb21fW3NoYTE6aGFzaDpoZXg6N10uZGF0IWFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIjNjZWU0NDFcIikgPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgaGFzaDogYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiKTtcbiAgICBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsID0gdXJsO1xufSBjYXRjaCAoZSkge1xuICAgIC8vIHdlYnBhY2sgZGVwbG95bWVudCBleGNlcHRpb24gKG5vdCBydW4gdGltZSlcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJXQVJOOiBXaWxsIGJlIHVuYWJsZSB0byBmaWx0ZXIgQlRTIDEuMCB3YWxsZXQgaW1wb3J0cywgZGlkIG5vdCBmaW5kIGFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIsXG4gICAgICAgIGVcbiAgICApO1xufVxuXG4vKipcbiAgICBUaGlzIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gYSBCVFMgMS4wIGV4cG9ydCBmaWxlIHRha2VuIG9uIHRoZVxuICAgIGRpc2NvbnRpbnVlZCBjaGFpbi4gQW55IHB1YmxpYyBrZXkgc3RyaW5nIG9yIGFkZHJlc3MgKGFsbCA1IGZvcm1hdHMpIGNhcnJpZWRcbiAgICBvdmVyIHRvIHRoZSBCVFMgMi4wIGdlbmVzaXMgYmxvY2sgd2lsbCBiZSBpbiB0aGlzIGZpbHRlci5cblxuICAgIFRoZWlyIG1heSBiZSBzb21lIGZhbHNlIHBvc2l0aXZlcyBidXQgbm8gZmFsc2UgbmVnYXRpdmVzLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVzaXNGaWx0ZXIge1xuICAgIC8qKiBvciBjYWxsIHRoaXMuaW5pdCAqL1xuICAgIGNvbnN0cnVjdG9yKGJsb29tX2J1ZmZlcikge1xuICAgICAgICBpZiAoIWJsb29tX2J1ZmZlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGJsb29tX2J1ZmZlcjtcbiAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGJsb29tX2J1ZmZlci5sZW5ndGggKiA4OyAvLyA4Mzg4NjA4ICh0ZXN0IGRhdGEpXG4gICAgfVxuXG4gICAgLyoqIFdhcyBhIGJsb29tIGZpbGUgZGVwbG95ZWQ/ICBUaGlzIGRvZXMgbm90IHRyeSB0byBsb2FkIGl0IGZyb20gdGhlIHNlcnZlci4gKi9cbiAgICBpc0F2YWlsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpbml0KGRvbmUpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvb21fYnVmZmVyKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lc2lzIGJsb29tIGZpbGUgd2FzIG5vdCBkZXBsb3llZFwiKTtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIC8vIGZpcmVmb3ggNDAgZGlkIG5vdCBhbGxvdyB0aGUgYmxvYiB1cmwgYnV0IGZmIDQxLjAuMiBkaWRcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudHMgPSBuZXcgQnVmZmVyKGV2dC50YXJnZXQucmVzdWx0LCBcImJpbmFyeVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoICE9PSAxMDQ4NTc2KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGNvbnRlbnRzLmxlbmd0aCAqIDg7IC8vIDgzODg2MDggKHRlc3QgZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInhoci5vbmVycm9yXCIsIGUpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBpbkdlbmVzaXMocHVia2V5X29yX2FkZHJlc3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJsb29tX2J1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XG4gICAgICAgIGZvciAodmFyIGhhc2hlcyA9IDA7IGhhc2hlcyA8IDM7IGhhc2hlcysrKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gaGFzaC5zaGEyNTYoaGFzaGVzICsgXCI6XCIgKyBwdWJrZXlfb3JfYWRkcmVzcyk7XG4gICAgICAgICAgICB2YXIgYml0X2FkZHJlc3MgPVxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGhleC5zbGljZSgtMykudG9TdHJpbmcoXCJoZXhcIiksIDE2KSAlXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlcjsgLy8gMzA5MDU2NFxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJpdF9hZGRyZXNzXCIsIGJpdF9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBieXRlX2FkZHJlc3MgPSBiaXRfYWRkcmVzcyA+PiAzOyAvLyAzODYzMjBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJieXRlX2FkZHJlc3NcIiwgYnl0ZV9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBtYXNrID0gMSA8PCAoYml0X2FkZHJlc3MgJiA3KTsgLy8gMTZcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJtYXNrXCIsIG1hc2sudG9TdHJpbmcoMTYpKVxuICAgICAgICAgICAgdmFyIGJ5dGUgPSB0aGlzLmJsb29tX2J1ZmZlcltieXRlX2FkZHJlc3NdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJ5dGVcIiwgYnl0ZS50b1N0cmluZygxNikpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiYnl0ZSAmIG1hc2tcIiwgYnl0ZSAmIG1hc2ssIChieXRlICYgbWFzaykgPT09IDAsICdcXG4nKVxuICAgICAgICAgICAgaWYgKChieXRlICYgbWFzaykgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogTWlzc2luZyBibG9vbSBmaWx0ZXIgZm9yIEJUUyAwLjkueCB3YWxsZXRzXCIpO1xuICAgICAgICAgICAgc3RhdHVzKHtlcnJvcjogXCJtaXNzaW5nX2Jsb29tXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGFsaXppbmcgPSB0cnVlO1xuICAgICAgICBzdGF0dXMoe2luaXRhbGl6aW5nfSk7XG4gICAgICAgIHRoaXMuaW5pdCgoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFjY291bnRfa2V5cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZF9jb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gYWNjb3VudF9rZXlzW2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA+PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgay0tXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWU6IGtleXMuYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5wdWJsaWNfa2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuLXJlbGVhc2VkIGZvcm1hdCwganVzdCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7ZXJyb3I6IFwibWlzc2luZ19wdWJsaWNfa2V5c1wifSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9eR1BILy50ZXN0KGN1cnJlbnRLZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBcIkJUU1wiICsgY3VycmVudEtleS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoY3VycmVudEtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IGtleS5hZGRyZXNzZXMoY3VycmVudEtleSwgXCJCVFNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkeV9mb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoYWRkcmVzc2VzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGR5X2ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHlfZm91bmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZF9jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGstLVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXNba11cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cy5wdXNoKGtleXMucHVibGljX2tleXNba10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IGVuY3J5cHRlZF9wcml2YXRlX2tleXM7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCAtIHJlbW92ZWRfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdWJsaWNfa2V5cyA9IHB1YmxpY19rZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0dXMoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRhbGl6aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJ0c19nZW5lc2lza2V5c19ibG9vbV8zY2VlNDQxLmRhdFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQXJCQTtBQTJCQTtBQTVCQTtBQWxCQTtBQURBO0FBREE7QUFzREE7Ozs7QUExREE7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxCQTtBQXNCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVRBO0FBM0JBO0FBNkNBOzs7O0FBakRBO0FBQ0E7QUFrREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcENBO0FBeUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFIQTtBQUNBO0FBUUE7QUFDQTtBQUNBOzs7O0FBdElBO0FBQ0E7QUF3SUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFGQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDQTtBQURBO0FBRkE7QUFmQTtBQURBO0FBb0VBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWxIQTtBQUNBO0FBb0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBbEJBO0FBeUJBO0FBQUE7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUE2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBMUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7Ozs7QUFmQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBa0JBOzs7O0FBdkJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFOQTtBQWNBO0FBekJBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7QUFuQ0E7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFuRkE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSUE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxxQkFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBdkJBO0FBREE7QUFnQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdJQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFDQTtBQStJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVlBOzs7O0FBZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUZBO0FBSkE7QUFrQkE7Ozs7QUF2REE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBdURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQXdFQTtBQTFFQTtBQTRFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE4Q0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVVBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXJEQTtBQUFBO0FBQ0E7QUF1REE7QUF4REE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlEQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0hBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFuQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFzREE7QUFFQTtBQURBO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBVUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBRkE7QUFpQkE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUhBO0FBbEJBO0FBaUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWFBO0FBZEE7QUFKQTtBQXVCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQXhCQTtBQTJCQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXRCQTtBQXdCQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBekJBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFUQTtBQXJFQTtBQTdCQTtBQWdIQTtBQUVBO0FBbkhBO0FBREE7QUF5SEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFEQTtBQVNBO0FBakNBO0FBaE1BO0FBc09BOzs7O0FBNzlCQTtBQUNBO0FBREE7QUFTQTtBQURBO0FBQ0E7QUFDQTtBQXM5QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFEQTtBQUZBO0FBY0E7Ozs7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQWJBO0FBQ0E7QUFlQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNKQTs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9